import { PrismaService } from '../prisma/prisma.service';
export declare class PerfilesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(rol?: string): Promise<{
        nombre_completo: string;
        telefono: string | null;
        id: string;
        fecha_creacion: Date | null;
        rol: import("../../generated/prisma/enums").user_role;
    }[]>;
    findOne(id: string): Promise<{
        citas: {
            id: number;
            fecha_hora_inicio: Date;
            paciente_id: number;
            dentista_id: string;
            fecha_hora_fin: Date;
            estado: import("../../generated/prisma/enums").estado_cita;
            motivo_consulta: string | null;
            fecha_creacion: Date | null;
        }[];
        pacientes: {
            nombre_completo: string;
            telefono: string;
            correo: string | null;
            fecha_nacimiento: Date | null;
            antecedentes_medicos: string | null;
            perfil_id: string | null;
            fecha_registro: Date | null;
            id: number;
        }[];
    } & {
        nombre_completo: string;
        telefono: string | null;
        id: string;
        fecha_creacion: Date | null;
        rol: import("../../generated/prisma/enums").user_role;
    }>;
    findDentistas(): Promise<{
        nombre_completo: string;
        telefono: string | null;
        id: string;
        fecha_creacion: Date | null;
        rol: import("../../generated/prisma/enums").user_role;
    }[]>;
}
