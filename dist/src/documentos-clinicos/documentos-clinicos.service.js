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
exports.DocumentosClinicosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const supabase_service_1 = require("../supabase/supabase.service");
let DocumentosClinicosService = class DocumentosClinicosService {
    prisma;
    supabase;
    constructor(prisma, supabase) {
        this.prisma = prisma;
        this.supabase = supabase;
    }
    async create(dto, file) {
        let archivo_url = dto.archivo_url;
        if (!file && !archivo_url) {
            throw new Error('Debe proporcionar un archivo físico o un archivo_url');
        }
        if (!file && !dto.nombre_archivo) {
            throw new Error('Debe proporcionar un nombre_archivo si envía un archivo_url');
        }
        if (file) {
            const extension = file.originalname.split('.').pop();
            const filename = `${Date.now()}-${Math.round(Math.random() * 1e9)}.${extension}`;
            const path = `pacientes/${dto.paciente_id}/${filename}`;
            archivo_url = await this.supabase.uploadFile('documentos-clinicos', path, file.buffer, file.mimetype);
        }
        return this.prisma.db.documentos_clinicos.create({
            data: {
                paciente_id: dto.paciente_id,
                subido_por: dto.subido_por,
                nombre_archivo: (file ? file.originalname : dto.nombre_archivo),
                tipo_documento: dto.tipo_documento,
                archivo_url: archivo_url,
            },
            include: { pacientes: true, perfiles: true },
        });
    }
    async findAll(paciente_id, tipo_documento) {
        return this.prisma.db.documentos_clinicos.findMany({
            where: {
                ...(paciente_id && { paciente_id }),
                ...(tipo_documento && { tipo_documento }),
            },
            include: { pacientes: true, perfiles: true },
            orderBy: { fecha_subida: 'desc' },
        });
    }
    async findOne(id) {
        const doc = await this.prisma.db.documentos_clinicos.findUnique({
            where: { id },
            include: { pacientes: true, perfiles: true },
        });
        if (!doc) {
            throw new common_1.NotFoundException(`Documento con ID ${id} no encontrado`);
        }
        return doc;
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.db.documentos_clinicos.delete({ where: { id } });
    }
};
exports.DocumentosClinicosService = DocumentosClinicosService;
exports.DocumentosClinicosService = DocumentosClinicosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        supabase_service_1.SupabaseService])
], DocumentosClinicosService);
//# sourceMappingURL=documentos-clinicos.service.js.map