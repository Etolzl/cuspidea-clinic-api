import {
  IsInt,
  IsString,
  IsOptional,
  IsDateString,
  IsEnum,
  IsUUID,
} from 'class-validator';

export enum EstadoCita {
  PROGRAMADA = 'programada',
  CONFIRMADA = 'confirmada',
  CANCELADA = 'cancelada',
  COMPLETADA = 'completada',
  NO_ASISTIO = 'no_asistio',
}

export class CreateCitaDto {
  @IsInt()
  paciente_id: number;

  @IsUUID()
  dentista_id: string;

  @IsDateString()
  fecha_hora_inicio: string;

  @IsDateString()
  fecha_hora_fin: string;

  @IsOptional()
  @IsEnum(EstadoCita)
  estado?: EstadoCita;

  @IsOptional()
  @IsString()
  motivo_consulta?: string;
}
