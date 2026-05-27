import { IsNumber, IsOptional, IsString } from 'class-validator';

export class RegistrarPagoDto {
  @IsNumber()
  monto_abonado: number;

  @IsOptional()
  @IsString()
  metodo_pago?: string;
}
