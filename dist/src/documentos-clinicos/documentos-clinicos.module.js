"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentosClinicosModule = void 0;
const common_1 = require("@nestjs/common");
const documentos_clinicos_controller_1 = require("./documentos-clinicos.controller");
const documentos_clinicos_service_1 = require("./documentos-clinicos.service");
const prisma_module_1 = require("../prisma/prisma.module");
let DocumentosClinicosModule = class DocumentosClinicosModule {
};
exports.DocumentosClinicosModule = DocumentosClinicosModule;
exports.DocumentosClinicosModule = DocumentosClinicosModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [documentos_clinicos_controller_1.DocumentosClinicosController],
        providers: [documentos_clinicos_service_1.DocumentosClinicosService],
        exports: [documentos_clinicos_service_1.DocumentosClinicosService],
    })
], DocumentosClinicosModule);
//# sourceMappingURL=documentos-clinicos.module.js.map