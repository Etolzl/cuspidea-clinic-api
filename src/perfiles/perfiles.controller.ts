import { Controller, Get, Param, Query } from '@nestjs/common';
import { PerfilesService } from './perfiles.service';

@Controller('perfiles')
export class PerfilesController {
  constructor(private readonly perfilesService: PerfilesService) {}

  @Get()
  findAll(@Query('rol') rol?: string) {
    return this.perfilesService.findAll(rol);
  }

  @Get('dentistas')
  findDentistas() {
    return this.perfilesService.findDentistas();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.perfilesService.findOne(id);
  }
}
