"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AuthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const supabase_service_1 = require("../supabase/supabase.service");
const prisma_service_1 = require("../prisma/prisma.service");
const email_service_1 = require("../email/email.service");
const render_1 = require("@react-email/render");
const ActivationEmail_1 = require("../email/templates/ActivationEmail");
const ResetPasswordEmail_1 = require("../email/templates/ResetPasswordEmail");
const React = __importStar(require("react"));
let AuthService = AuthService_1 = class AuthService {
    supabase;
    prisma;
    emailService;
    logger = new common_1.Logger(AuthService_1.name);
    constructor(supabase, prisma, emailService) {
        this.supabase = supabase;
        this.prisma = prisma;
        this.emailService = emailService;
    }
    async login(dto) {
        const { data, error } = await this.supabase.client.auth.signInWithPassword({
            email: dto.email,
            password: dto.password,
        });
        if (error) {
            throw new common_1.UnauthorizedException(error.message);
        }
        const perfil = await this.prisma.db.perfiles.findUnique({
            where: { id: data.user.id },
        });
        return {
            session: {
                access_token: data.session.access_token,
                refresh_token: data.session.refresh_token,
                expires_at: data.session.expires_at,
            },
            user: {
                id: data.user.id,
                email: data.user.email,
                perfil,
            },
        };
    }
    async register(dto) {
        const { data, error } = await this.supabase.adminClient.auth.admin.createUser({
            email: dto.email,
            password: dto.password,
            email_confirm: true,
            user_metadata: {
                nombre_completo: dto.nombre_completo,
            },
        });
        if (error) {
            throw new common_1.BadRequestException(error.message);
        }
        if (!data.user) {
            throw new common_1.BadRequestException('Error al crear el usuario en el proveedor de autenticación');
        }
        const perfil = await this.prisma.db.perfiles.upsert({
            where: { id: data.user.id },
            update: {
                nombre_completo: dto.nombre_completo,
                telefono: dto.telefono,
                rol: dto.rol,
            },
            create: {
                id: data.user.id,
                nombre_completo: dto.nombre_completo,
                telefono: dto.telefono,
                rol: dto.rol,
            },
        });
        return {
            user: {
                id: data.user.id,
                email: data.user.email,
                perfil,
            },
        };
    }
    async sendInvitation(dto) {
        const redirectTo = `${process.env.FRONTEND_URL || 'http://localhost:3001'}/reset-password`;
        const { data, error } = await this.supabase.adminClient.auth.admin.generateLink({
            type: 'recovery',
            email: dto.email,
            options: {
                redirectTo,
            },
        });
        if (error) {
            throw new common_1.BadRequestException(error.message);
        }
        const actionLink = data.properties.action_link;
        const html = await (0, render_1.render)(React.createElement(ActivationEmail_1.ActivationEmail, {
            name: dto.name,
            actionLink
        }));
        try {
            await this.emailService.sendEmail(dto.email, 'Activa tu cuenta en Cúspidea', html);
            return { message: 'Invitación enviada con éxito' };
        }
        catch (e) {
            this.logger.error(`Error enviando invitación a ${dto.email}`, e);
            throw new common_1.BadRequestException('No se pudo enviar el correo de invitación');
        }
    }
    async forgotPassword(dto) {
        const redirectTo = `${process.env.FRONTEND_URL || 'http://localhost:3001'}/reset-password`;
        const { data, error } = await this.supabase.adminClient.auth.admin.generateLink({
            type: 'recovery',
            email: dto.email,
            options: {
                redirectTo,
            },
        });
        if (error) {
            return { message: 'Si el correo existe, se han enviado instrucciones' };
        }
        const actionLink = data.properties.action_link;
        const html = await (0, render_1.render)(React.createElement(ResetPasswordEmail_1.ResetPasswordEmail, {
            actionLink
        }));
        try {
            await this.emailService.sendEmail(dto.email, 'Restablecer contraseña - Cúspidea', html);
        }
        catch (e) {
            this.logger.error(`Error enviando recuperación de contraseña a ${dto.email}`, e);
        }
        return { message: 'Correo de recuperación enviado con éxito' };
    }
    async exchangeCode(dto) {
        const { data, error } = await this.supabase.client.auth.exchangeCodeForSession(dto.code);
        if (error) {
            throw new common_1.BadRequestException(error.message);
        }
        return {
            session: {
                access_token: data.session.access_token,
                refresh_token: data.session.refresh_token,
                expires_at: data.session.expires_at,
            },
            user: {
                id: data.user.id,
                email: data.user.email,
            },
        };
    }
    async updatePassword(userId, dto) {
        const { error } = await this.supabase.adminClient.auth.admin.updateUserById(userId, {
            password: dto.password,
        });
        if (error) {
            throw new common_1.BadRequestException(error.message);
        }
        return { message: 'Contraseña actualizada con éxito' };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = AuthService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [supabase_service_1.SupabaseService,
        prisma_service_1.PrismaService,
        email_service_1.EmailService])
], AuthService);
//# sourceMappingURL=auth.service.js.map