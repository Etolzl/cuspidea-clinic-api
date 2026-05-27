import { IsInt, IsNumber, IsOptional } from 'class-validator';

export class CreateCobroDto {
  @IsInt()
  paciente_id: number;

  @IsOptional()
  @IsInt()
  cita_id?: number;

  @IsNumber()
  monto_total: number;
}
