import { IsEmail, IsString, MinLength, IsOptional, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export enum UserRole {
  ADMINISTRADOR = 'administrador',
  DENTISTA = 'dentista',
  RECEPCIONISTA = 'recepcionista',
  PACIENTE = 'paciente',
}

export class RegisterDto {
  @ApiProperty({ example: 'usuario@correo.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'password123' })
  @IsString()
  @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
  password: string;

  @ApiProperty({ example: 'Juan Pérez' })
  @IsString()
  nombre_completo: string;

  @ApiProperty({ example: '+56912345678', required: false })
  @IsOptional()
  @IsString()
  telefono?: string;

  @ApiProperty({ example: 'paciente', enum: UserRole, required: false })
  @IsOptional()
  @IsEnum(UserRole)
  rol?: UserRole = UserRole.PACIENTE;
}
