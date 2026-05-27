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
exports.NotasClinicasController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const notas_clinicas_service_1 = require("./notas-clinicas.service");
const create_nota_clinica_dto_1 = require("./dto/create-nota-clinica.dto");
const update_nota_clinica_dto_1 = require("./dto/update-nota-clinica.dto");
let NotasClinicasController = class NotasClinicasController {
    notasClinicasService;
    constructor(notasClinicasService) {
        this.notasClinicasService = notasClinicasService;
    }
    create(dto) {
        return this.notasClinicasService.create(dto);
    }
    findAll(paciente_id, dentista_id) {
        return this.notasClinicasService.findAll(paciente_id ? parseInt(paciente_id, 10) : undefined, dentista_id);
    }
    findOne(id) {
        return this.notasClinicasService.findOne(id);
    }
    update(id, dto) {
        return this.notasClinicasService.update(id, dto);
    }
    remove(id) {
        return this.notasClinicasService.remove(id);
    }
};
exports.NotasClinicasController = NotasClinicasController;
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_nota_clinica_dto_1.CreateNotaClinicaDto]),
    __metadata("design:returntype", void 0)
], NotasClinicasController.prototype, "create", null);
__decorate([
    openapi.ApiQuery({ name: "paciente_id", required: false }),
    openapi.ApiQuery({ name: "dentista_id", required: false }),
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __param(0, (0, common_1.Query)('paciente_id')),
    __param(1, (0, common_1.Query)('dentista_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], NotasClinicasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], NotasClinicasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_nota_clinica_dto_1.UpdateNotaClinicaDto]),
    __metadata("design:returntype", void 0)
], NotasClinicasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], NotasClinicasController.prototype, "remove", null);
exports.NotasClinicasController = NotasClinicasController = __decorate([
    (0, common_1.Controller)('notas-clinicas'),
    __metadata("design:paramtypes", [notas_clinicas_service_1.NotasClinicasService])
], NotasClinicasController);
//# sourceMappingURL=notas-clinicas.controller.js.map