import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Query,
  ParseIntPipe,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { DocumentosClinicosService } from './documentos-clinicos.service';
import { CreateDocumentoClinicoDto } from './dto/create-documento-clinico.dto';
import { ApiConsumes, ApiBody } from '@nestjs/swagger';

@Controller('documentos-clinicos')
export class DocumentosClinicosController {
  constructor(
    private readonly documentosService: DocumentosClinicosService,
  ) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        paciente_id: { type: 'integer' },
        tipo_documento: { type: 'string' },
        subido_por: { type: 'string', format: 'uuid' },
        archivo_url: { type: 'string' }, // fallback si envían url directa
        file: { type: 'string', format: 'binary' },
      },
    },
  })
  create(
    @Body() dto: CreateDocumentoClinicoDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.documentosService.create(dto, file);
  }

  @Get()
  findAll(
    @Query('paciente_id') paciente_id?: string,
    @Query('tipo_documento') tipo_documento?: string,
  ) {
    return this.documentosService.findAll(
      paciente_id ? parseInt(paciente_id, 10) : undefined,
      tipo_documento,
    );
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.documentosService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.documentosService.remove(id);
  }
}
