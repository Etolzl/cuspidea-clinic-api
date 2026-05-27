import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PerfilesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(rol?: string) {
    return this.prisma.db.perfiles.findMany({
      where: rol ? { rol: rol as any } : undefined,
      orderBy: { fecha_creacion: 'desc' },
    });
  }

  async findOne(id: string) {
    const perfil = await this.prisma.db.perfiles.findUnique({
      where: { id },
      include: {
        citas: { orderBy: { fecha_hora_inicio: 'desc' }, take: 10 },
        pacientes: true,
      },
    });

    if (!perfil) {
      throw new NotFoundException(`Perfil con ID ${id} no encontrado`);
    }

    return perfil;
  }

  async findDentistas() {
    return this.prisma.db.perfiles.findMany({
      where: { rol: 'dentista' },
      orderBy: { nombre_completo: 'asc' },
    });
  }
}
