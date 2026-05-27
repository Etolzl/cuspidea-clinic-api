import { CitasService } from './citas.service';
import { CreateCitaDto } from './dto/create-cita.dto';
import { UpdateCitaDto } from './dto/update-cita.dto';
export declare class CitasController {
    private readonly citasService;
    constructor(citasService: CitasService);
    create(dto: CreateCitaDto): Promise<{
        perfiles: {
            nombre_completo: string;
            telefono: string | null;
            id: string;
            fecha_creacion: Date | null;
            rol: import("../../generated/prisma/enums").user_role;
        };
        pacientes: {
            nombre_completo: string;
            telefono: string;
            correo: string | null;
            fecha_nacimiento: Date | null;
            antecedentes_medicos: string | null;
            perfil_id: string | null;
            fecha_registro: Date | null;
            id: number;
        };
    } & {
        id: number;
        fecha_hora_inicio: Date;
        paciente_id: number;
        dentista_id: string;
        fecha_hora_fin: Date;
        estado: import("../../generated/prisma/enums").estado_cita;
        motivo_consulta: string | null;
        fecha_creacion: Date | null;
    }>;
    findAll(dentista_id?: string, paciente_id?: string, fecha_desde?: string, fecha_hasta?: string, estado?: string): Promise<({
        perfiles: {
            nombre_completo: string;
            telefono: string | null;
            id: string;
            fecha_creacion: Date | null;
            rol: import("../../generated/prisma/enums").user_role;
        };
        pacientes: {
            nombre_completo: string;
            telefono: string;
            correo: string | null;
            fecha_nacimiento: Date | null;
            antecedentes_medicos: string | null;
            perfil_id: string | null;
            fecha_registro: Date | null;
            id: number;
        };
    } & {
        id: number;
        fecha_hora_inicio: Date;
        paciente_id: number;
        dentista_id: string;
        fecha_hora_fin: Date;
        estado: import("../../generated/prisma/enums").estado_cita;
        motivo_consulta: string | null;
        fecha_creacion: Date | null;
    })[]>;
    findOne(id: number): Promise<{
        cobros: {
            id: number;
            fecha_emision: Date | null;
            paciente_id: number;
            cita_id: number | null;
            monto_total: import("@prisma/client/runtime/index-browser").Decimal;
            monto_pagado: import("@prisma/client/runtime/index-browser").Decimal;
            saldo_pendiente: import("@prisma/client/runtime/index-browser").Decimal | null;
        }[];
        notas_clinicas: {
            id: number;
            fecha_consulta: Date | null;
            paciente_id: number;
            dentista_id: string;
            cita_id: number | null;
            diagnostico: string;
            tratamiento_realizado: string | null;
            notas_evolucion: string | null;
            odontograma_estado: import("@prisma/client/runtime/client").JsonValue | null;
        }[];
        perfiles: {
            nombre_completo: string;
            telefono: string | null;
            id: string;
            fecha_creacion: Date | null;
            rol: import("../../generated/prisma/enums").user_role;
        };
        pacientes: {
            nombre_completo: string;
            telefono: string;
            correo: string | null;
            fecha_nacimiento: Date | null;
            antecedentes_medicos: string | null;
            perfil_id: string | null;
            fecha_registro: Date | null;
            id: number;
        };
    } & {
        id: number;
        fecha_hora_inicio: Date;
        paciente_id: number;
        dentista_id: string;
        fecha_hora_fin: Date;
        estado: import("../../generated/prisma/enums").estado_cita;
        motivo_consulta: string | null;
        fecha_creacion: Date | null;
    }>;
    update(id: number, dto: UpdateCitaDto): Promise<{
        perfiles: {
            nombre_completo: string;
            telefono: string | null;
            id: string;
            fecha_creacion: Date | null;
            rol: import("../../generated/prisma/enums").user_role;
        };
        pacientes: {
            nombre_completo: string;
            telefono: string;
            correo: string | null;
            fecha_nacimiento: Date | null;
            antecedentes_medicos: string | null;
            perfil_id: string | null;
            fecha_registro: Date | null;
            id: number;
        };
    } & {
        id: number;
        fecha_hora_inicio: Date;
        paciente_id: number;
        dentista_id: string;
        fecha_hora_fin: Date;
        estado: import("../../generated/prisma/enums").estado_cita;
        motivo_consulta: string | null;
        fecha_creacion: Date | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        fecha_hora_inicio: Date;
        paciente_id: number;
        dentista_id: string;
        fecha_hora_fin: Date;
        estado: import("../../generated/prisma/enums").estado_cita;
        motivo_consulta: string | null;
        fecha_creacion: Date | null;
    }>;
}
