import { PrismaService } from '../prisma/prisma.service';
import { CreateDocumentoClinicoDto } from './dto/create-documento-clinico.dto';
import { SupabaseService } from '../supabase/supabase.service';
export declare class DocumentosClinicosService {
    private readonly prisma;
    private readonly supabase;
    constructor(prisma: PrismaService, supabase: SupabaseService);
    create(dto: CreateDocumentoClinicoDto, file?: Express.Multer.File): Promise<{
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
        } | null;
    } & {
        id: number;
        paciente_id: number;
        subido_por: string | null;
        nombre_archivo: string;
        tipo_documento: string | null;
        archivo_url: string;
        fecha_subida: Date | null;
    }>;
    findAll(paciente_id?: number, tipo_documento?: string): Promise<({
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
        } | null;
    } & {
        id: number;
        paciente_id: number;
        subido_por: string | null;
        nombre_archivo: string;
        tipo_documento: string | null;
        archivo_url: string;
        fecha_subida: Date | null;
    })[]>;
    findOne(id: number): Promise<{
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
        } | null;
    } & {
        id: number;
        paciente_id: number;
        subido_por: string | null;
        nombre_archivo: string;
        tipo_documento: string | null;
        archivo_url: string;
        fecha_subida: Date | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        paciente_id: number;
        subido_por: string | null;
        nombre_archivo: string;
        tipo_documento: string | null;
        archivo_url: string;
        fecha_subida: Date | null;
    }>;
}
