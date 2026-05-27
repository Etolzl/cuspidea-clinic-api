import { IsInt, IsString, IsOptional, IsUUID, MaxLength } from 'class-validator';

export class CreateDocumentoClinicoDto {
  @IsInt()
  paciente_id: number;

  @IsOptional()
  @IsUUID()
  subido_por?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  nombre_archivo?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  tipo_documento?: string;

  @IsOptional()
  @IsString()
  archivo_url?: string;
}
