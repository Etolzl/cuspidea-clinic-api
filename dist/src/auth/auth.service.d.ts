import { SupabaseService } from '../supabase/supabase.service';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ExchangeCodeDto } from './dto/exchange-code.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';
export declare class AuthService {
    private readonly supabase;
    private readonly prisma;
    constructor(supabase: SupabaseService, prisma: PrismaService);
    login(dto: LoginDto): Promise<{
        session: {
            access_token: string;
            refresh_token: string;
            expires_at: number | undefined;
        };
        user: {
            id: string;
            email: string | undefined;
            perfil: {
                id: string;
                fecha_creacion: Date | null;
                nombre_completo: string;
                telefono: string | null;
                rol: import("../../generated/prisma/enums").user_role;
            } | null;
        };
    }>;
    register(dto: RegisterDto): Promise<{
        user: {
            id: string;
            email: string | undefined;
            perfil: {
                id: string;
                fecha_creacion: Date | null;
                nombre_completo: string;
                telefono: string | null;
                rol: import("../../generated/prisma/enums").user_role;
            };
        };
    }>;
    forgotPassword(dto: ForgotPasswordDto): Promise<{
        message: string;
    }>;
    exchangeCode(dto: ExchangeCodeDto): Promise<{
        session: {
            access_token: string;
            refresh_token: string;
            expires_at: number | undefined;
        };
        user: {
            id: string;
            email: string | undefined;
        };
    }>;
    updatePassword(userId: string, dto: UpdatePasswordDto): Promise<{
        message: string;
    }>;
}
