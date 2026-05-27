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
import { CitasService } from './citas.service';
import { CreateCitaDto } from './dto/create-cita.dto';
import { UpdateCitaDto } from './dto/update-cita.dto';

@Controller('citas')
export class CitasController {
  constructor(private readonly citasService: CitasService) {}

  @Post()
  create(@Body() dto: CreateCitaDto) {
    return this.citasService.create(dto);
  }

  @Get()
  findAll(
    @Query('dentista_id') dentista_id?: string,
    @Query('paciente_id') paciente_id?: string,
    @Query('fecha_desde') fecha_desde?: string,
    @Query('fecha_hasta') fecha_hasta?: string,
    @Query('estado') estado?: string,
  ) {
    return this.citasService.findAll({
      dentista_id,
      paciente_id: paciente_id ? parseInt(paciente_id, 10) : undefined,
      fecha_desde,
      fecha_hasta,
      estado,
    });
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.citasService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateCitaDto,
  ) {
    return this.citasService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.citasService.remove(id);
  }
}
