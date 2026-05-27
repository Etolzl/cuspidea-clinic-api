import { PrismaService } from '../prisma/prisma.service';
import { CreateNotaClinicaDto } from './dto/create-nota-clinica.dto';
import { UpdateNotaClinicaDto } from './dto/update-nota-clinica.dto';
export declare class NotasClinicasService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateNotaClinicaDto): Promise<{
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
        cita_id: number | null;
        diagnostico: string;
        tratamiento_realizado: string | null;
        notas_evolucion: string | null;
        odontograma_estado: import("@prisma/client/runtime/client").JsonValue | null;
        fecha_consulta: Date | null;
    }>;
    findAll(paciente_id?: number, dentista_id?: string): Promise<({
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
        cita_id: number | null;
        diagnostico: string;
        tratamiento_realizado: string | null;
        notas_evolucion: string | null;
        odontograma_estado: import("@prisma/client/runtime/client").JsonValue | null;
        fecha_consulta: Date | null;
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
        cita_id: number | null;
        diagnostico: string;
        tratamiento_realizado: string | null;
        notas_evolucion: string | null;
        odontograma_estado: import("@prisma/client/runtime/client").JsonValue | null;
        fecha_consulta: Date | null;
    }>;
    update(id: number, dto: UpdateNotaClinicaDto): Promise<{
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
        cita_id: number | null;
        diagnostico: string;
        tratamiento_realizado: string | null;
        notas_evolucion: string | null;
        odontograma_estado: import("@prisma/client/runtime/client").JsonValue | null;
        fecha_consulta: Date | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        paciente_id: number;
        dentista_id: string;
        cita_id: number | null;
        diagnostico: string;
        tratamiento_realizado: string | null;
        notas_evolucion: string | null;
        odontograma_estado: import("@prisma/client/runtime/client").JsonValue | null;
        fecha_consulta: Date | null;
    }>;
}
