import { PacientesService } from './pacientes.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { PaginationDto } from '../common/dto/pagination.dto';
export declare class PacientesController {
    private readonly pacientesService;
    constructor(pacientesService: PacientesService);
    create(dto: CreatePacienteDto): Promise<{
        id: number;
        perfil_id: string | null;
        nombre_completo: string;
        telefono: string;
        correo: string | null;
        fecha_nacimiento: Date | null;
        antecedentes_medicos: string | null;
        fecha_registro: Date | null;
    }>;
    findAll(search?: string, pagination?: PaginationDto): Promise<{
        data: {
            id: number;
            perfil_id: string | null;
            nombre_completo: string;
            telefono: string;
            correo: string | null;
            fecha_nacimiento: Date | null;
            antecedentes_medicos: string | null;
            fecha_registro: Date | null;
        }[];
        meta: {
            total: number;
            page: number;
            limit: number;
            lastPage: number;
        };
    }>;
    findOne(id: number): Promise<{
        citas: {
            id: number;
            paciente_id: number;
            dentista_id: string;
            fecha_hora_inicio: Date;
            fecha_hora_fin: Date;
            estado: import("../../generated/prisma/enums").estado_cita;
            motivo_consulta: string | null;
            fecha_creacion: Date | null;
        }[];
        cobros: {
            id: number;
            paciente_id: number;
            cita_id: number | null;
            monto_total: import("@prisma/client/runtime/index-browser").Decimal;
            monto_pagado: import("@prisma/client/runtime/index-browser").Decimal;
            saldo_pendiente: import("@prisma/client/runtime/index-browser").Decimal | null;
            fecha_emision: Date | null;
        }[];
        documentos_clinicos: {
            id: number;
            paciente_id: number;
            subido_por: string | null;
            nombre_archivo: string;
            tipo_documento: string | null;
            archivo_url: string;
            fecha_subida: Date | null;
        }[];
        notas_clinicas: {
            id: number;
            paciente_id: number;
            dentista_id: string;
            cita_id: number | null;
            diagnostico: string;
            tratamiento_realizado: string | null;
            notas_evolucion: string | null;
            odontograma_estado: import("@prisma/client/runtime/client").JsonValue | null;
            fecha_consulta: Date | null;
        }[];
    } & {
        id: number;
        perfil_id: string | null;
        nombre_completo: string;
        telefono: string;
        correo: string | null;
        fecha_nacimiento: Date | null;
        antecedentes_medicos: string | null;
        fecha_registro: Date | null;
    }>;
    update(id: number, dto: UpdatePacienteDto): Promise<{
        id: number;
        perfil_id: string | null;
        nombre_completo: string;
        telefono: string;
        correo: string | null;
        fecha_nacimiento: Date | null;
        antecedentes_medicos: string | null;
        fecha_registro: Date | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        perfil_id: string | null;
        nombre_completo: string;
        telefono: string;
        correo: string | null;
        fecha_nacimiento: Date | null;
        antecedentes_medicos: string | null;
        fecha_registro: Date | null;
    }>;
}
