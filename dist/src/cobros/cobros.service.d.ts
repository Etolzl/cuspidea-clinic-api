import { PrismaService } from '../prisma/prisma.service';
import { CreateCobroDto } from './dto/create-cobro.dto';
import { RegistrarPagoDto } from './dto/registrar-pago.dto';
export declare class CobrosService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateCobroDto): Promise<{
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
        fecha_emision: Date | null;
        paciente_id: number;
        cita_id: number | null;
        monto_total: import("@prisma/client/runtime/index-browser").Decimal;
        monto_pagado: import("@prisma/client/runtime/index-browser").Decimal;
        saldo_pendiente: import("@prisma/client/runtime/index-browser").Decimal | null;
    }>;
    findAll(paciente_id?: number): Promise<({
        citas: {
            id: number;
            fecha_hora_inicio: Date;
            paciente_id: number;
            dentista_id: string;
            fecha_hora_fin: Date;
            estado: import("../../generated/prisma/enums").estado_cita;
            motivo_consulta: string | null;
            fecha_creacion: Date | null;
        } | null;
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
        historial_pagos: {
            id: number;
            monto_abonado: import("@prisma/client/runtime/index-browser").Decimal;
            metodo_pago: string | null;
            fecha_pago: Date | null;
            cobro_id: number;
        }[];
    } & {
        id: number;
        fecha_emision: Date | null;
        paciente_id: number;
        cita_id: number | null;
        monto_total: import("@prisma/client/runtime/index-browser").Decimal;
        monto_pagado: import("@prisma/client/runtime/index-browser").Decimal;
        saldo_pendiente: import("@prisma/client/runtime/index-browser").Decimal | null;
    })[]>;
    findOne(id: number): Promise<{
        citas: {
            id: number;
            fecha_hora_inicio: Date;
            paciente_id: number;
            dentista_id: string;
            fecha_hora_fin: Date;
            estado: import("../../generated/prisma/enums").estado_cita;
            motivo_consulta: string | null;
            fecha_creacion: Date | null;
        } | null;
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
        historial_pagos: {
            id: number;
            monto_abonado: import("@prisma/client/runtime/index-browser").Decimal;
            metodo_pago: string | null;
            fecha_pago: Date | null;
            cobro_id: number;
        }[];
    } & {
        id: number;
        fecha_emision: Date | null;
        paciente_id: number;
        cita_id: number | null;
        monto_total: import("@prisma/client/runtime/index-browser").Decimal;
        monto_pagado: import("@prisma/client/runtime/index-browser").Decimal;
        saldo_pendiente: import("@prisma/client/runtime/index-browser").Decimal | null;
    }>;
    registrarPago(cobro_id: number, dto: RegistrarPagoDto): Promise<{
        id: number;
        monto_abonado: import("@prisma/client/runtime/index-browser").Decimal;
        metodo_pago: string | null;
        fecha_pago: Date | null;
        cobro_id: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        fecha_emision: Date | null;
        paciente_id: number;
        cita_id: number | null;
        monto_total: import("@prisma/client/runtime/index-browser").Decimal;
        monto_pagado: import("@prisma/client/runtime/index-browser").Decimal;
        saldo_pendiente: import("@prisma/client/runtime/index-browser").Decimal | null;
    }>;
}
