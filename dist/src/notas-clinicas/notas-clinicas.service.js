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
exports.NotasClinicasService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let NotasClinicasService = class NotasClinicasService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
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
    async findAll(paciente_id, dentista_id) {
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
    async findOne(id) {
        const nota = await this.prisma.db.notas_clinicas.findUnique({
            where: { id },
            include: {
                pacientes: true,
                perfiles: true,
                citas: true,
            },
        });
        if (!nota) {
            throw new common_1.NotFoundException(`Nota clínica con ID ${id} no encontrada`);
        }
        return nota;
    }
    async update(id, dto) {
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
    async remove(id) {
        await this.findOne(id);
        return this.prisma.db.notas_clinicas.delete({ where: { id } });
    }
};
exports.NotasClinicasService = NotasClinicasService;
exports.NotasClinicasService = NotasClinicasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], NotasClinicasService);
//# sourceMappingURL=notas-clinicas.service.js.map