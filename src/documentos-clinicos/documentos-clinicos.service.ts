import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDocumentoClinicoDto } from './dto/create-documento-clinico.dto';

import { SupabaseService } from '../supabase/supabase.service';

@Injectable()
export class DocumentosClinicosService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly supabase: SupabaseService,
  ) {}

  async create(dto: CreateDocumentoClinicoDto, file?: Express.Multer.File) {
    let archivo_url = dto.archivo_url;

    if (!file && !archivo_url) {
      throw new Error('Debe proporcionar un archivo físico o un archivo_url');
    }

    if (!file && !dto.nombre_archivo) {
      throw new Error('Debe proporcionar un nombre_archivo si envía un archivo_url');
    }

    // Si se envía el archivo físico, lo subimos a Storage
    if (file) {
      const extension = file.originalname.split('.').pop();
      const filename = `${Date.now()}-${Math.round(Math.random() * 1e9)}.${extension}`;
      const path = `pacientes/${dto.paciente_id}/${filename}`;
      
      // Asume que tienes un bucket público llamado 'documentos-clinicos' en Supabase
      archivo_url = await this.supabase.uploadFile(
        'documentos-clinicos',
        path,
        file.buffer,
        file.mimetype,
      );
    }

    return this.prisma.db.documentos_clinicos.create({
      data: {
        paciente_id: dto.paciente_id,
        subido_por: dto.subido_por,
        nombre_archivo: (file ? file.originalname : dto.nombre_archivo) as string,
        tipo_documento: dto.tipo_documento,
        archivo_url: archivo_url as string,
      },
      include: { pacientes: true, perfiles: true },
    });
  }

  async findAll(paciente_id?: number, tipo_documento?: string) {
    return this.prisma.db.documentos_clinicos.findMany({
      where: {
        ...(paciente_id && { paciente_id }),
        ...(tipo_documento && { tipo_documento }),
      },
      include: { pacientes: true, perfiles: true },
      orderBy: { fecha_subida: 'desc' },
    });
  }

  async findOne(id: number) {
    const doc = await this.prisma.db.documentos_clinicos.findUnique({
      where: { id },
      include: { pacientes: true, perfiles: true },
    });

    if (!doc) {
      throw new NotFoundException(`Documento con ID ${id} no encontrado`);
    }

    return doc;
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.db.documentos_clinicos.delete({ where: { id } });
  }
}
