"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const supabase_service_1 = require("../supabase/supabase.service");
const prisma_service_1 = require("../prisma/prisma.service");
let AuthService = class AuthService {
    supabase;
    prisma;
    constructor(supabase, prisma) {
        this.supabase = supabase;
        this.prisma = prisma;
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
    async forgotPassword(dto) {
        const redirectTo = `${process.env.FRONTEND_URL || 'http://localhost:3001'}/reset-password`;
        const { error } = await this.supabase.client.auth.resetPasswordForEmail(dto.email, {
            redirectTo,
        });
        if (error) {
            throw new common_1.BadRequestException(error.message);
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
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [supabase_service_1.SupabaseService,
        prisma_service_1.PrismaService])
], AuthService);
//# sourceMappingURL=auth.service.js.map