import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCitaDto } from './dto/create-cita.dto';
import { UpdateCitaDto } from './dto/update-cita.dto';

@Injectable()
export class CitasService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateCitaDto) {
    // Verify no time overlap for the same dentist
    const overlap = await this.prisma.db.citas.findFirst({
      where: {
        dentista_id: dto.dentista_id,
        estado: { notIn: ['cancelada', 'no_asistio'] },
        AND: [
          { fecha_hora_inicio: { lt: new Date(dto.fecha_hora_fin) } },
          { fecha_hora_fin: { gt: new Date(dto.fecha_hora_inicio) } },
        ],
      },
    });

    if (overlap) {
      throw new ConflictException(
        'El dentista ya tiene una cita programada en ese horario',
      );
    }

    return this.prisma.db.citas.create({
      data: {
        paciente_id: dto.paciente_id,
        dentista_id: dto.dentista_id,
        fecha_hora_inicio: new Date(dto.fecha_hora_inicio),
        fecha_hora_fin: new Date(dto.fecha_hora_fin),
        estado: dto.estado as any,
        motivo_consulta: dto.motivo_consulta,
      },
      include: {
        pacientes: true,
        perfiles: true,
      },
    });
  }

  async findAll(filters?: {
    dentista_id?: string;
    paciente_id?: number;
    fecha_desde?: string;
    fecha_hasta?: string;
    estado?: string;
  }) {
    return this.prisma.db.citas.findMany({
      where: {
        ...(filters?.dentista_id && { dentista_id: filters.dentista_id }),
        ...(filters?.paciente_id && { paciente_id: filters.paciente_id }),
        ...(filters?.estado && { estado: filters.estado as any }),
        ...(filters?.fecha_desde || filters?.fecha_hasta
          ? {
              fecha_hora_inicio: {
                ...(filters?.fecha_desde && {
                  gte: new Date(filters.fecha_desde),
                }),
                ...(filters?.fecha_hasta && {
                  lte: new Date(filters.fecha_hasta),
                }),
              },
            }
          : {}),
      },
      include: {
        pacientes: true,
        perfiles: true,
      },
      orderBy: { fecha_hora_inicio: 'asc' },
    });
  }

  async findOne(id: number) {
    const cita = await this.prisma.db.citas.findUnique({
      where: { id },
      include: {
        pacientes: true,
        perfiles: true,
        notas_clinicas: true,
        cobros: true,
      },
    });

    if (!cita) {
      throw new NotFoundException(`Cita con ID ${id} no encontrada`);
    }

    return cita;
  }

  async update(id: number, dto: UpdateCitaDto) {
    await this.findOne(id);

    return this.prisma.db.citas.update({
      where: { id },
      data: {
        ...(dto.paciente_id && { paciente_id: dto.paciente_id }),
        ...(dto.dentista_id && { dentista_id: dto.dentista_id }),
        ...(dto.fecha_hora_inicio && {
          fecha_hora_inicio: new Date(dto.fecha_hora_inicio),
        }),
        ...(dto.fecha_hora_fin && {
          fecha_hora_fin: new Date(dto.fecha_hora_fin),
        }),
        ...(dto.estado && { estado: dto.estado as any }),
        ...(dto.motivo_consulta !== undefined && {
          motivo_consulta: dto.motivo_consulta,
        }),
      },
      include: {
        pacientes: true,
        perfiles: true,
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.db.citas.delete({ where: { id } });
  }
}
