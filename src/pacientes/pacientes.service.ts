import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { PaginationDto } from '../common/dto/pagination.dto';

@Injectable()
export class PacientesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreatePacienteDto) {
    return this.prisma.db.pacientes.create({
      data: {
        nombre_completo: dto.nombre_completo,
        telefono: dto.telefono,
        correo: dto.correo,
        fecha_nacimiento: dto.fecha_nacimiento
          ? new Date(dto.fecha_nacimiento)
          : undefined,
        antecedentes_medicos: dto.antecedentes_medicos,
        perfil_id: dto.perfil_id,
      },
    });
  }

  async findAll(search?: string, pagination?: PaginationDto) {
    const page = pagination?.page || 1;
    const limit = pagination?.limit || 10;
    const skip = (page - 1) * limit;

    const where = search
      ? {
          OR: [
            { nombre_completo: { contains: search, mode: 'insensitive' as any } },
            { correo: { contains: search, mode: 'insensitive' as any } },
            { telefono: { contains: search } },
          ],
        }
      : undefined;

    const [data, total] = await Promise.all([
      this.prisma.db.pacientes.findMany({
        where,
        skip,
        take: limit,
        orderBy: { fecha_registro: 'desc' },
      }),
      this.prisma.db.pacientes.count({ where }),
    ]);

    return {
      data,
      meta: {
        total,
        page,
        limit,
        lastPage: Math.ceil(total / limit),
      },
    };
  }

  async findOne(id: number) {
    const paciente = await this.prisma.db.pacientes.findUnique({
      where: { id },
      include: {
        citas: { orderBy: { fecha_hora_inicio: 'desc' }, take: 10 },
        notas_clinicas: { orderBy: { fecha_consulta: 'desc' }, take: 5 },
        cobros: { orderBy: { fecha_emision: 'desc' }, take: 5 },
        documentos_clinicos: { orderBy: { fecha_subida: 'desc' }, take: 5 },
      },
    });

    if (!paciente) {
      throw new NotFoundException(`Paciente con ID ${id} no encontrado`);
    }

    return paciente;
  }

  async update(id: number, dto: UpdatePacienteDto) {
    await this.findOne(id); // Verify existence

    return this.prisma.db.pacientes.update({
      where: { id },
      data: {
        ...dto,
        fecha_nacimiento: dto.fecha_nacimiento
          ? new Date(dto.fecha_nacimiento)
          : undefined,
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id); // Verify existence

    return this.prisma.db.pacientes.delete({
      where: { id },
    });
  }
}
