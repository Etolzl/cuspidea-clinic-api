import { NotasClinicasService } from './notas-clinicas.service';
import { CreateNotaClinicaDto } from './dto/create-nota-clinica.dto';
import { UpdateNotaClinicaDto } from './dto/update-nota-clinica.dto';
export declare class NotasClinicasController {
    private readonly notasClinicasService;
    constructor(notasClinicasService: NotasClinicasService);
    create(dto: CreateNotaClinicaDto): Promise<{
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
        fecha_consulta: Date | null;
        paciente_id: number;
        dentista_id: string;
        cita_id: number | null;
        diagnostico: string;
        tratamiento_realizado: string | null;
        notas_evolucion: string | null;
        odontograma_estado: import("@prisma/client/runtime/client").JsonValue | null;
    }>;
    findAll(paciente_id?: string, dentista_id?: string): Promise<({
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
        fecha_consulta: Date | null;
        paciente_id: number;
        dentista_id: string;
        cita_id: number | null;
        diagnostico: string;
        tratamiento_realizado: string | null;
        notas_evolucion: string | null;
        odontograma_estado: import("@prisma/client/runtime/client").JsonValue | null;
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
        fecha_consulta: Date | null;
        paciente_id: number;
        dentista_id: string;
        cita_id: number | null;
        diagnostico: string;
        tratamiento_realizado: string | null;
        notas_evolucion: string | null;
        odontograma_estado: import("@prisma/client/runtime/client").JsonValue | null;
    }>;
    update(id: number, dto: UpdateNotaClinicaDto): Promise<{
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
        fecha_consulta: Date | null;
        paciente_id: number;
        dentista_id: string;
        cita_id: number | null;
        diagnostico: string;
        tratamiento_realizado: string | null;
        notas_evolucion: string | null;
        odontograma_estado: import("@prisma/client/runtime/client").JsonValue | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        fecha_consulta: Date | null;
        paciente_id: number;
        dentista_id: string;
        cita_id: number | null;
        diagnostico: string;
        tratamiento_realizado: string | null;
        notas_evolucion: string | null;
        odontograma_estado: import("@prisma/client/runtime/client").JsonValue | null;
    }>;
}
