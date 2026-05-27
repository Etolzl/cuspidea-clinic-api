import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateNotaClinicaDto } from './dto/create-nota-clinica.dto';
import { UpdateNotaClinicaDto } from './dto/update-nota-clinica.dto';

@Injectable()
export class NotasClinicasService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateNotaClinicaDto) {
    return this.prisma.db.notas_clinicas.create({
      data: {
        paciente_id: dto.paciente_id,
        dentista_id: dto.dentista_id,
        cita_id: dto.cita_id,
        diagnostico: dto.diagnostico,
        tratamiento_realizado: dto.tratamiento_realizado,
        notas_evolucion: dto.notas_evolucion,
        odontograma_estado: dto.odontograma_estado ?? {},
      },
      include: {
        pacientes: true,
        perfiles: true,
        citas: true,
      },
    });
  }

  async findAll(paciente_id?: number, dentista_id?: string) {
    return this.prisma.db.notas_clinicas.findMany({
      where: {
        ...(paciente_id && { paciente_id }),
        ...(dentista_id && { dentista_id }),
      },
      include: {
        pacientes: true,
        perfiles: true,
      },
      orderBy: { fecha_consulta: 'desc' },
    });
  }

  async findOne(id: number) {
    const nota = await this.prisma.db.notas_clinicas.findUnique({
      where: { id },
      include: {
        pacientes: true,
        perfiles: true,
        citas: true,
      },
    });

    if (!nota) {
      throw new NotFoundException(`Nota clínica con ID ${id} no encontrada`);
    }

    return nota;
  }

  async update(id: number, dto: UpdateNotaClinicaDto) {
    await this.findOne(id);

    return this.prisma.db.notas_clinicas.update({
      where: { id },
      data: {
        ...(dto.diagnostico && { diagnostico: dto.diagnostico }),
        ...(dto.tratamiento_realizado && {
          tratamiento_realizado: dto.tratamiento_realizado,
        }),
        ...(dto.notas_evolucion !== undefined && {
          notas_evolucion: dto.notas_evolucion,
        }),
        ...(dto.odontograma_estado && {
          odontograma_estado: dto.odontograma_estado,
        }),
      },
      include: {
        pacientes: true,
        perfiles: true,
        citas: true,
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.db.notas_clinicas.delete({ where: { id } });
  }
}
