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
exports.CitasService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CitasService = class CitasService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
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
            throw new common_1.ConflictException('El dentista ya tiene una cita programada en ese horario');
        }
        return this.prisma.db.citas.create({
            data: {
                paciente_id: dto.paciente_id,
                dentista_id: dto.dentista_id,
                fecha_hora_inicio: new Date(dto.fecha_hora_inicio),
                fecha_hora_fin: new Date(dto.fecha_hora_fin),
                estado: dto.estado,
                motivo_consulta: dto.motivo_consulta,
            },
            include: {
                pacientes: true,
                perfiles: true,
            },
        });
    }
    async findAll(filters) {
        return this.prisma.db.citas.findMany({
            where: {
                ...(filters?.dentista_id && { dentista_id: filters.dentista_id }),
                ...(filters?.paciente_id && { paciente_id: filters.paciente_id }),
                ...(filters?.estado && { estado: filters.estado }),
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
    async findOne(id) {
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
            throw new common_1.NotFoundException(`Cita con ID ${id} no encontrada`);
        }
        return cita;
    }
    async update(id, dto) {
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
                ...(dto.estado && { estado: dto.estado }),
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
    async remove(id) {
        await this.findOne(id);
        return this.prisma.db.citas.delete({ where: { id } });
    }
};
exports.CitasService = CitasService;
exports.CitasService = CitasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CitasService);
//# sourceMappingURL=citas.service.js.map