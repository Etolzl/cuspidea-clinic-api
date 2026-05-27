import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ExchangeCodeDto } from './dto/exchange-code.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly supabase: SupabaseService,
    private readonly prisma: PrismaService,
  ) {}

  async login(dto: LoginDto) {
    const { data, error } = await this.supabase.client.auth.signInWithPassword({
      email: dto.email,
      password: dto.password,
    });

    if (error) {
      throw new UnauthorizedException(error.message);
    }

    // Buscamos el perfil correspondiente
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
    // 1. Registramos en Supabase Auth mediante Admin API para auto-confirmar y evitar rate limits de correos
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

    // 2. Sincronizamos en la tabla public.perfiles
    // Usamos upsert por si existe un trigger en Supabase que cree el perfil antes
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

  async forgotPassword(dto: ForgotPasswordDto) {
    const redirectTo = `${process.env.FRONTEND_URL || 'http://localhost:3001'}/reset-password`;

    const { error } = await this.supabase.client.auth.resetPasswordForEmail(dto.email, {
      redirectTo,
    });

    if (error) {
      throw new BadRequestException(error.message);
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

