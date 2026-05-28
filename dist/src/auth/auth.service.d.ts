import { SupabaseService } from '../supabase/supabase.service';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ExchangeCodeDto } from './dto/exchange-code.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { SendInvitationDto } from './dto/send-invitation.dto';
import { EmailService } from '../email/email.service';
export declare class AuthService {
    private readonly supabase;
    private readonly prisma;
    private readonly emailService;
    private readonly logger;
    constructor(supabase: SupabaseService, prisma: PrismaService, emailService: EmailService);
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
                nombre_completo: string;
                telefono: string | null;
                id: string;
                fecha_creacion: Date | null;
                rol: import("../../generated/prisma/enums").user_role;
            } | null;
        };
    }>;
    register(dto: RegisterDto): Promise<{
        user: {
            id: string;
            email: string | undefined;
            perfil: {
                nombre_completo: string;
                telefono: string | null;
                id: string;
                fecha_creacion: Date | null;
                rol: import("../../generated/prisma/enums").user_role;
            };
        };
    }>;
    sendInvitation(dto: SendInvitationDto): Promise<{
        message: string;
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
