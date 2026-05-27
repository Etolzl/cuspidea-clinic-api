import { PerfilesService } from './perfiles.service';
export declare class PerfilesController {
    private readonly perfilesService;
    constructor(perfilesService: PerfilesService);
    findAll(rol?: string): Promise<{
        id: string;
        fecha_creacion: Date | null;
        nombre_completo: string;
        telefono: string | null;
        rol: import("../../generated/prisma/enums").user_role;
    }[]>;
    findDentistas(): Promise<{
        id: string;
        fecha_creacion: Date | null;
        nombre_completo: string;
        telefono: string | null;
        rol: import("../../generated/prisma/enums").user_role;
    }[]>;
    findOne(id: string): Promise<{
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
        pacientes: {
            id: number;
            perfil_id: string | null;
            nombre_completo: string;
            telefono: string;
            correo: string | null;
            fecha_nacimiento: Date | null;
            antecedentes_medicos: string | null;
            fecha_registro: Date | null;
        }[];
    } & {
        id: string;
        fecha_creacion: Date | null;
        nombre_completo: string;
        telefono: string | null;
        rol: import("../../generated/prisma/enums").user_role;
    }>;
}
