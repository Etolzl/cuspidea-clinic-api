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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentosClinicosController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const documentos_clinicos_service_1 = require("./documentos-clinicos.service");
const create_documento_clinico_dto_1 = require("./dto/create-documento-clinico.dto");
const swagger_1 = require("@nestjs/swagger");
let DocumentosClinicosController = class DocumentosClinicosController {
    documentosService;
    constructor(documentosService) {
        this.documentosService = documentosService;
    }
    create(dto, file) {
        return this.documentosService.create(dto, file);
    }
    findAll(paciente_id, tipo_documento) {
        return this.documentosService.findAll(paciente_id ? parseInt(paciente_id, 10) : undefined, tipo_documento);
    }
    findOne(id) {
        return this.documentosService.findOne(id);
    }
    remove(id) {
        return this.documentosService.remove(id);
    }
};
exports.DocumentosClinicosController = DocumentosClinicosController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                paciente_id: { type: 'integer' },
                tipo_documento: { type: 'string' },
                subido_por: { type: 'string', format: 'uuid' },
                archivo_url: { type: 'string' },
                file: { type: 'string', format: 'binary' },
            },
        },
    }),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_documento_clinico_dto_1.CreateDocumentoClinicoDto, Object]),
    __metadata("design:returntype", void 0)
], DocumentosClinicosController.prototype, "create", null);
__decorate([
    openapi.ApiQuery({ name: "paciente_id", required: false }),
    openapi.ApiQuery({ name: "tipo_documento", required: false }),
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __param(0, (0, common_1.Query)('paciente_id')),
    __param(1, (0, common_1.Query)('tipo_documento')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], DocumentosClinicosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DocumentosClinicosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DocumentosClinicosController.prototype, "remove", null);
exports.DocumentosClinicosController = DocumentosClinicosController = __decorate([
    (0, common_1.Controller)('documentos-clinicos'),
    __metadata("design:paramtypes", [documentos_clinicos_service_1.DocumentosClinicosService])
], DocumentosClinicosController);
//# sourceMappingURL=documentos-clinicos.controller.js.map