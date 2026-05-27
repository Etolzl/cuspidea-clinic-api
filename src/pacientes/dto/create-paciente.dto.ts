import { IsString, IsOptional, IsEmail, IsDateString, MaxLength } from 'class-validator';

export class CreatePacienteDto {
  @IsString()
  @MaxLength(150)
  nombre_completo: string;

  @IsString()
  @MaxLength(20)
  telefono: string;

  @IsOptional()
  @IsEmail()
  @MaxLength(100)
  correo?: string;

  @IsOptional()
  @IsDateString()
  fecha_nacimiento?: string;

  @IsOptional()
  @IsString()
  antecedentes_medicos?: string;

  @IsOptional()
  @IsString()
  perfil_id?: string;
}
