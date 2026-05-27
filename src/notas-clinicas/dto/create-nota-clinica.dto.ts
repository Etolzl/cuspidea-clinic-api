import { IsInt, IsString, IsOptional, IsUUID, IsObject } from 'class-validator';

export class CreateNotaClinicaDto {
  @IsInt()
  paciente_id: number;

  @IsUUID()
  dentista_id: string;

  @IsOptional()
  @IsInt()
  cita_id?: number;

  @IsString()
  diagnostico: string;

  @IsOptional()
  @IsString()
  tratamiento_realizado?: string;

  @IsOptional()
  @IsString()
  notas_evolucion?: string;

  @IsOptional()
  @IsObject()
  odontograma_estado?: Record<string, any>;
}
