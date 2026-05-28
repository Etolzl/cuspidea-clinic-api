import { Injectable, BadRequestException, UnauthorizedException, Logger } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ExchangeCodeDto } from './dto/exchange-code.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { SendInvitationDto } from './dto/send-invitation.dto';
import { EmailService } from '../email/email.service';
import { render } from '@react-email/render';
import { ActivationEmail } from '../email/templates/ActivationEmail';
import { ResetPasswordEmail } from '../email/templates/ResetPasswordEmail';
import * as React from 'react';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private readonly supabase: SupabaseService,
    private readonly prisma: PrismaService,
    private readonly emailService: EmailService,
  ) {}

  async login(dto: LoginDto) {
    const { data, error } = await this.supabase.client.auth.signInWithPassword({
      email: dto.email,
      password: dto.password,
    });

    if (error) {
      throw new UnauthorizedException(error.message);
    }

    const perfil = await this.prisma.db.perfiles.findUnique({
      where: { id: data.user.id },
    });

    return {
      session: {
        access_token: data.session.access_token,
        refresh_token: data.session.refresh_token,
        expires_at: data.session.expires_at,
      },
      user: {
        id: data.user.id,
        email: data.user.email,
        perfil,
      },
    };
  }

  async register(dto: RegisterDto) {
    const { data, error } = await this.supabase.adminClient.auth.admin.createUser({
      email: dto.email,
      password: dto.password,
      email_confirm: true,
      user_metadata: {
        nombre_completo: dto.nombre_completo,
      },
    });

    if (error) {
      throw new BadRequestException(error.message);
    }

    if (!data.user) {
      throw new BadRequestException('Error al crear el usuario en el proveedor de autenticación');
    }

    const perfil = await this.prisma.db.perfiles.upsert({
      where: { id: data.user.id },
      update: {
        nombre_completo: dto.nombre_completo,
        telefono: dto.telefono,
        rol: dto.rol as any,
      },
      create: {
        id: data.user.id,
        nombre_completo: dto.nombre_completo,
        telefono: dto.telefono,
        rol: dto.rol as any,
      },
    });

    return {
      user: {
        id: data.user.id,
        email: data.user.email,
        perfil,
      },
    };
  }

  async sendInvitation(dto: SendInvitationDto) {
    const redirectTo = `${process.env.FRONTEND_URL || 'http://localhost:3001'}/reset-password`;
    
    // Generar un link de recovery para que el usuario pueda establecer su contraseña
    const { data, error } = await this.supabase.adminClient.auth.admin.generateLink({
      type: 'recovery',
      email: dto.email,
      options: {
        redirectTo,
      },
    });

    if (error) {
      throw new BadRequestException(error.message);
    }

    // El link devuelto por Supabase.
    const actionLink = data.properties.action_link;

    // Renderizar el email
    const html = await render(React.createElement(ActivationEmail, { 
      name: dto.name, 
      actionLink 
    }));

    try {
      await this.emailService.sendEmail(
        dto.email,
        'Activa tu cuenta en Cúspidea',
        html,
      );
      return { message: 'Invitación enviada con éxito' };
    } catch (e) {
      this.logger.error(`Error enviando invitación a ${dto.email}`, e);
      throw new BadRequestException('No se pudo enviar el correo de invitación');
    }
  }

  async forgotPassword(dto: ForgotPasswordDto) {
    const redirectTo = `${process.env.FRONTEND_URL || 'http://localhost:3001'}/reset-password`;

    // Usar generateLink en lugar de resetPasswordForEmail para obtener el link y enviar email custom
    const { data, error } = await this.supabase.adminClient.auth.admin.generateLink({
      type: 'recovery',
      email: dto.email,
      options: {
        redirectTo,
      },
    });

    if (error) {
      // Retornar éxito de todos modos para no revelar si el correo existe
      return { message: 'Si el correo existe, se han enviado instrucciones' };
    }

    const actionLink = data.properties.action_link;

    const html = await render(React.createElement(ResetPasswordEmail, { 
      actionLink 
    }));

    try {
      await this.emailService.sendEmail(
        dto.email,
        'Restablecer contraseña - Cúspidea',
        html,
      );
    } catch (e) {
      this.logger.error(`Error enviando recuperación de contraseña a ${dto.email}`, e);
    }

    return { message: 'Correo de recuperación enviado con éxito' };
  }

  async exchangeCode(dto: ExchangeCodeDto) {
    const { data, error } = await this.supabase.client.auth.exchangeCodeForSession(dto.code);

    if (error) {
      throw new BadRequestException(error.message);
    }

    return {
      session: {
        access_token: data.session.access_token,
        refresh_token: data.session.refresh_token,
        expires_at: data.session.expires_at,
      },
      user: {
        id: data.user.id,
        email: data.user.email,
      },
    };
  }

  async updatePassword(userId: string, dto: UpdatePasswordDto) {
    const { error } = await this.supabase.adminClient.auth.admin.updateUserById(userId, {
      password: dto.password,
    });

    if (error) {
      throw new BadRequestException(error.message);
    }

    return { message: 'Contraseña actualizada con éxito' };
  }
}

