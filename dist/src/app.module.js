"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const prisma_module_1 = require("./prisma/prisma.module");
const pacientes_module_1 = require("./pacientes/pacientes.module");
const citas_module_1 = require("./citas/citas.module");
const perfiles_module_1 = require("./perfiles/perfiles.module");
const cobros_module_1 = require("./cobros/cobros.module");
const notas_clinicas_module_1 = require("./notas-clinicas/notas-clinicas.module");
const documentos_clinicos_module_1 = require("./documentos-clinicos/documentos-clinicos.module");
const auth_module_1 = require("./auth/auth.module");
const supabase_module_1 = require("./supabase/supabase.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            prisma_module_1.PrismaModule,
            supabase_module_1.SupabaseModule,
            auth_module_1.AuthModule,
            pacientes_module_1.PacientesModule,
            citas_module_1.CitasModule,
            perfiles_module_1.PerfilesModule,
            cobros_module_1.CobrosModule,
            notas_clinicas_module_1.NotasClinicasModule,
            documentos_clinicos_module_1.DocumentosClinicosModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map