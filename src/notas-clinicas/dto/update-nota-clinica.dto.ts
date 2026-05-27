import { PartialType } from '@nestjs/mapped-types';
import { CreateNotaClinicaDto } from './create-nota-clinica.dto';

export class UpdateNotaClinicaDto extends PartialType(CreateNotaClinicaDto) {}
