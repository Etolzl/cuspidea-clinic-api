import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCobroDto } from './dto/create-cobro.dto';
import { RegistrarPagoDto } from './dto/registrar-pago.dto';

@Injectable()
export class CobrosService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateCobroDto) {
    return this.prisma.db.cobros.create({
      data: {
        paciente_id: dto.paciente_id,
        cita_id: dto.cita_id,
        monto_total: dto.monto_total,
      },
      include: { pacientes: true },
    });
  }

  async findAll(paciente_id?: number) {
    return this.prisma.db.cobros.findMany({
      where: paciente_id ? { paciente_id } : undefined,
      include: {
        pacientes: true,
        citas: true,
        historial_pagos: { orderBy: { fecha_pago: 'desc' } },
      },
      orderBy: { fecha_emision: 'desc' },
    });
  }

  async findOne(id: number) {
    const cobro = await this.prisma.db.cobros.findUnique({
      where: { id },
      include: {
        pacientes: true,
        citas: true,
        historial_pagos: { orderBy: { fecha_pago: 'desc' } },
      },
    });

    if (!cobro) {
      throw new NotFoundException(`Cobro con ID ${id} no encontrado`);
    }

    return cobro;
  }

  async registrarPago(cobro_id: number, dto: RegistrarPagoDto) {
    const cobro = await this.findOne(cobro_id);

    const saldo = Number(cobro.monto_total) - Number(cobro.monto_pagado);
    if (dto.monto_abonado > saldo) {
      throw new BadRequestException(
        `El monto abonado (${dto.monto_abonado}) excede el saldo pendiente (${saldo})`,
      );
    }

    // Create payment record and update cobro in a transaction
    const [pago] = await this.prisma.db.$transaction([
      this.prisma.db.historial_pagos.create({
        data: {
          cobro_id,
          monto_abonado: dto.monto_abonado,
          metodo_pago: dto.metodo_pago,
        },
      }),
      this.prisma.db.cobros.update({
        where: { id: cobro_id },
        data: {
          monto_pagado: Number(cobro.monto_pagado) + dto.monto_abonado,
        },
      }),
    ]);

    return pago;
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.db.cobros.delete({ where: { id } });
  }
}
