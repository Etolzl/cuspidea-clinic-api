import { PrismaService } from '../prisma/prisma.service';
import { CreateCitaDto } from './dto/create-cita.dto';
import { UpdateCitaDto } from './dto/update-cita.dto';
export declare class CitasService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateCitaDto): Promise<{
        pacientes: {
            id: number;
            perfil_id: string | null;
            nombre_completo: string;
            telefono: string;
            correo: string | null;
            fecha_nacimiento: Date | null;
            antecedentes_medicos: string | null;
            fecha_registro: Date | null;
        };
        perfiles: {
            id: string;
            fecha_creacion: Date | null;
            nombre_completo: string;
            telefono: string | null;
            rol: import("../../generated/prisma/enums").user_role;
        };
    } & {
        id: number;
        paciente_id: number;
        dentista_id: string;
        fecha_hora_inicio: Date;
        fecha_hora_fin: Date;
        estado: import("../../generated/prisma/enums").estado_cita;
        motivo_consulta: string | null;
        fecha_creacion: Date | null;
    }>;
    findAll(filters?: {
        dentista_id?: string;
        paciente_id?: number;
        fecha_desde?: string;
        fecha_hasta?: string;
        estado?: string;
    }): Promise<({
        pacientes: {
            id: number;
            perfil_id: string | null;
            nombre_completo: string;
            telefono: string;
            correo: string | null;
            fecha_nacimiento: Date | null;
            antecedentes_medicos: string | null;
            fecha_registro: Date | null;
        };
        perfiles: {
            id: string;
            fecha_creacion: Date | null;
            nombre_completo: string;
            telefono: string | null;
            rol: import("../../generated/prisma/enums").user_role;
        };
    } & {
        id: number;
        paciente_id: number;
        dentista_id: string;
        fecha_hora_inicio: Date;
        fecha_hora_fin: Date;
        estado: import("../../generated/prisma/enums").estado_cita;
        motivo_consulta: string | null;
        fecha_creacion: Date | null;
    })[]>;
    findOne(id: number): Promise<{
        cobros: {
            id: number;
            paciente_id: number;
            cita_id: number | null;
            monto_total: import("@prisma/client/runtime/index-browser").Decimal;
            monto_pagado: import("@prisma/client/runtime/index-browser").Decimal;
            saldo_pendiente: import("@prisma/client/runtime/index-browser").Decimal | null;
            fecha_emision: Date | null;
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
        pacientes: {
            id: number;
            perfil_id: string | null;
            nombre_completo: string;
            telefono: string;
            correo: string | null;
            fecha_nacimiento: Date | null;
            antecedentes_medicos: string | null;
            fecha_registro: Date | null;
        };
        perfiles: {
            id: string;
            fecha_creacion: Date | null;
            nombre_completo: string;
            telefono: string | null;
            rol: import("../../generated/prisma/enums").user_role;
        };
    } & {
        id: number;
        paciente_id: number;
        dentista_id: string;
        fecha_hora_inicio: Date;
        fecha_hora_fin: Date;
        estado: import("../../generated/prisma/enums").estado_cita;
        motivo_consulta: string | null;
        fecha_creacion: Date | null;
    }>;
    update(id: number, dto: UpdateCitaDto): Promise<{
        pacientes: {
            id: number;
            perfil_id: string | null;
            nombre_completo: string;
            telefono: string;
            correo: string | null;
            fecha_nacimiento: Date | null;
            antecedentes_medicos: string | null;
            fecha_registro: Date | null;
        };
        perfiles: {
            id: string;
            fecha_creacion: Date | null;
            nombre_completo: string;
            telefono: string | null;
            rol: import("../../generated/prisma/enums").user_role;
        };
    } & {
        id: number;
        paciente_id: number;
        dentista_id: string;
        fecha_hora_inicio: Date;
        fecha_hora_fin: Date;
        estado: import("../../generated/prisma/enums").estado_cita;
        motivo_consulta: string | null;
        fecha_creacion: Date | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        paciente_id: number;
        dentista_id: string;
        fecha_hora_inicio: Date;
        fecha_hora_fin: Date;
        estado: import("../../generated/prisma/enums").estado_cita;
        motivo_consulta: string | null;
        fecha_creacion: Date | null;
    }>;
}
