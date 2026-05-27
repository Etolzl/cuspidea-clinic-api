import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { CobrosService } from './cobros.service';
import { CreateCobroDto } from './dto/create-cobro.dto';
import { RegistrarPagoDto } from './dto/registrar-pago.dto';

@Controller('cobros')
export class CobrosController {
  constructor(private readonly cobrosService: CobrosService) {}

  @Post()
  create(@Body() dto: CreateCobroDto) {
    return this.cobrosService.create(dto);
  }

  @Get()
  findAll(@Query('paciente_id') paciente_id?: string) {
    return this.cobrosService.findAll(
      paciente_id ? parseInt(paciente_id, 10) : undefined,
    );
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.cobrosService.findOne(id);
  }

  @Post(':id/pagos')
  registrarPago(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: RegistrarPagoDto,
  ) {
    return this.cobrosService.registrarPago(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.cobrosService.remove(id);
  }
}
