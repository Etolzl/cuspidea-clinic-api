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
exports.PacientesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PacientesService = class PacientesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
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
    async findAll(search, pagination) {
        const page = pagination?.page || 1;
        const limit = pagination?.limit || 10;
        const skip = (page - 1) * limit;
        const where = search
            ? {
                OR: [
                    { nombre_completo: { contains: search, mode: 'insensitive' } },
                    { correo: { contains: search, mode: 'insensitive' } },
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
    async findOne(id) {
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
            throw new common_1.NotFoundException(`Paciente con ID ${id} no encontrado`);
        }
        return paciente;
    }
    async update(id, dto) {
        await this.findOne(id);
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
    async remove(id) {
        await this.findOne(id);
        return this.prisma.db.pacientes.delete({
            where: { id },
        });
    }
};
exports.PacientesService = PacientesService;
exports.PacientesService = PacientesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PacientesService);
//# sourceMappingURL=pacientes.service.js.map