import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { NotasClinicasService } from './notas-clinicas.service';
import { CreateNotaClinicaDto } from './dto/create-nota-clinica.dto';
import { UpdateNotaClinicaDto } from './dto/update-nota-clinica.dto';

@Controller('notas-clinicas')
export class NotasClinicasController {
  constructor(private readonly notasClinicasService: NotasClinicasService) {}

  @Post()
  create(@Body() dto: CreateNotaClinicaDto) {
    return this.notasClinicasService.create(dto);
  }

  @Get()
  findAll(
    @Query('paciente_id') paciente_id?: string,
    @Query('dentista_id') dentista_id?: string,
  ) {
    return this.notasClinicasService.findAll(
      paciente_id ? parseInt(paciente_id, 10) : undefined,
      dentista_id,
    );
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.notasClinicasService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateNotaClinicaDto,
  ) {
    return this.notasClinicasService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.notasClinicasService.remove(id);
  }
}
