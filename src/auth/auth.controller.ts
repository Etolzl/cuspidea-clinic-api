import { Controller, Post, Body, HttpCode, HttpStatus, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ExchangeCodeDto } from './dto/exchange-code.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { SendInvitationDto } from './dto/send-invitation.dto';
import { SupabaseAuthGuard } from './guards/supabase-auth.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }

  @Post('register')
  register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }

  @Post('send-invitation')
  @HttpCode(HttpStatus.OK)
  sendInvitation(@Body() dto: SendInvitationDto) {
    return this.authService.sendInvitation(dto);
  }

  @Post('forgot-password')
  @HttpCode(HttpStatus.OK)
  forgotPassword(@Body() dto: ForgotPasswordDto) {
    return this.authService.forgotPassword(dto);
  }

  @Post('exchange-code')
  @HttpCode(HttpStatus.OK)
  exchangeCode(@Body() dto: ExchangeCodeDto) {
    return this.authService.exchangeCode(dto);
  }

  @Post('update-password')
  @UseGuards(SupabaseAuthGuard)
  @HttpCode(HttpStatus.OK)
  updatePassword(@Req() req: any, @Body() dto: UpdatePasswordDto) {
    return this.authService.updatePassword(req.user.id, dto);
  }
}

