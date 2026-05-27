import { CobrosService } from './cobros.service';
import { CreateCobroDto } from './dto/create-cobro.dto';
import { RegistrarPagoDto } from './dto/registrar-pago.dto';
export declare class CobrosController {
    private readonly cobrosService;
    constructor(cobrosService: CobrosService);
    create(dto: CreateCobroDto): Promise<{
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
    } & {
        id: number;
        paciente_id: number;
        cita_id: number | null;
        monto_total: import("@prisma/client/runtime/index-browser").Decimal;
        monto_pagado: import("@prisma/client/runtime/index-browser").Decimal;
        saldo_pendiente: import("@prisma/client/runtime/index-browser").Decimal | null;
        fecha_emision: Date | null;
    }>;
    findAll(paciente_id?: string): Promise<({
        citas: {
            id: number;
            paciente_id: number;
            dentista_id: string;
            fecha_hora_inicio: Date;
            fecha_hora_fin: Date;
            estado: import("../../generated/prisma/enums").estado_cita;
            motivo_consulta: string | null;
            fecha_creacion: Date | null;
        } | null;
        historial_pagos: {
            id: number;
            cobro_id: number;
            monto_abonado: import("@prisma/client/runtime/index-browser").Decimal;
            metodo_pago: string | null;
            fecha_pago: Date | null;
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
    } & {
        id: number;
        paciente_id: number;
        cita_id: number | null;
        monto_total: import("@prisma/client/runtime/index-browser").Decimal;
        monto_pagado: import("@prisma/client/runtime/index-browser").Decimal;
        saldo_pendiente: import("@prisma/client/runtime/index-browser").Decimal | null;
        fecha_emision: Date | null;
    })[]>;
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
        } | null;
        historial_pagos: {
            id: number;
            cobro_id: number;
            monto_abonado: import("@prisma/client/runtime/index-browser").Decimal;
            metodo_pago: string | null;
            fecha_pago: Date | null;
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
    } & {
        id: number;
        paciente_id: number;
        cita_id: number | null;
        monto_total: import("@prisma/client/runtime/index-browser").Decimal;
        monto_pagado: import("@prisma/client/runtime/index-browser").Decimal;
        saldo_pendiente: import("@prisma/client/runtime/index-browser").Decimal | null;
        fecha_emision: Date | null;
    }>;
    registrarPago(id: number, dto: RegistrarPagoDto): Promise<{
        id: number;
        cobro_id: number;
        monto_abonado: import("@prisma/client/runtime/index-browser").Decimal;
        metodo_pago: string | null;
        fecha_pago: Date | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        paciente_id: number;
        cita_id: number | null;
        monto_total: import("@prisma/client/runtime/index-browser").Decimal;
        monto_pagado: import("@prisma/client/runtime/index-browser").Decimal;
        saldo_pendiente: import("@prisma/client/runtime/index-browser").Decimal | null;
        fecha_emision: Date | null;
    }>;
}
