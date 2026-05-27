"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CobrosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CobrosService = class CobrosService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        return this.prisma.db.cobros.create({
            data: {
                paciente_id: dto.paciente_id,
                cita_id: dto.cita_id,
                monto_total: dto.monto_total,
            },
            include: { pacientes: true },
        });
    }
    async findAll(paciente_id) {
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
    async findOne(id) {
        const cobro = await this.prisma.db.cobros.findUnique({
            where: { id },
            include: {
                pacientes: true,
                citas: true,
                historial_pagos: { orderBy: { fecha_pago: 'desc' } },
            },
        });
        if (!cobro) {
            throw new common_1.NotFoundException(`Cobro con ID ${id} no encontrado`);
        }
        return cobro;
    }
    async registrarPago(cobro_id, dto) {
        const cobro = await this.findOne(cobro_id);
        const saldo = Number(cobro.monto_total) - Number(cobro.monto_pagado);
        if (dto.monto_abonado > saldo) {
            throw new common_1.BadRequestException(`El monto abonado (${dto.monto_abonado}) excede el saldo pendiente (${saldo})`);
        }
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
    async remove(id) {
        await this.findOne(id);
        return this.prisma.db.cobros.delete({ where: { id } });
    }
};
exports.CobrosService = CobrosService;
exports.CobrosService = CobrosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CobrosService);
//# sourceMappingURL=cobros.service.js.map