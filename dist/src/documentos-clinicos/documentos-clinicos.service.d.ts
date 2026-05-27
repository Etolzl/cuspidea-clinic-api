import { PrismaService } from '../prisma/prisma.service';
import { CreateDocumentoClinicoDto } from './dto/create-documento-clinico.dto';
import { SupabaseService } from '../supabase/supabase.service';
export declare class DocumentosClinicosService {
    private readonly prisma;
    private readonly supabase;
    constructor(prisma: PrismaService, supabase: SupabaseService);
    create(dto: CreateDocumentoClinicoDto, file?: Express.Multer.File): Promise<{
        perfiles: {
            nombre_completo: string;
            telefono: string | null;
            id: string;
            fecha_creacion: Date | null;
            rol: import("../../generated/prisma/enums").user_role;
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
    } & {
        id: number;
        fecha_subida: Date | null;
        paciente_id: number;
        subido_por: string | null;
        nombre_archivo: string;
        tipo_documento: string | null;
        archivo_url: string;
    }>;
    findAll(paciente_id?: number, tipo_documento?: string): Promise<({
        perfiles: {
            nombre_completo: string;
            telefono: string | null;
            id: string;
            fecha_creacion: Date | null;
            rol: import("../../generated/prisma/enums").user_role;
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
    } & {
        id: number;
        fecha_subida: Date | null;
        paciente_id: number;
        subido_por: string | null;
        nombre_archivo: string;
        tipo_documento: string | null;
        archivo_url: string;
    })[]>;
    findOne(id: number): Promise<{
        perfiles: {
            nombre_completo: string;
            telefono: string | null;
            id: string;
            fecha_creacion: Date | null;
            rol: import("../../generated/prisma/enums").user_role;
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
    } & {
        id: number;
        fecha_subida: Date | null;
        paciente_id: number;
        subido_por: string | null;
        nombre_archivo: string;
        tipo_documento: string | null;
        archivo_url: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        fecha_subida: Date | null;
        paciente_id: number;
        subido_por: string | null;
        nombre_archivo: string;
        tipo_documento: string | null;
        archivo_url: string;
    }>;
}
