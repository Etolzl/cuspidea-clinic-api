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
exports.CobrosController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const cobros_service_1 = require("./cobros.service");
const create_cobro_dto_1 = require("./dto/create-cobro.dto");
const registrar_pago_dto_1 = require("./dto/registrar-pago.dto");
let CobrosController = class CobrosController {
    cobrosService;
    constructor(cobrosService) {
        this.cobrosService = cobrosService;
    }
    create(dto) {
        return this.cobrosService.create(dto);
    }
    findAll(paciente_id) {
        return this.cobrosService.findAll(paciente_id ? parseInt(paciente_id, 10) : undefined);
    }
    findOne(id) {
        return this.cobrosService.findOne(id);
    }
    registrarPago(id, dto) {
        return this.cobrosService.registrarPago(id, dto);
    }
    remove(id) {
        return this.cobrosService.remove(id);
    }
};
exports.CobrosController = CobrosController;
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cobro_dto_1.CreateCobroDto]),
    __metadata("design:returntype", void 0)
], CobrosController.prototype, "create", null);
__decorate([
    openapi.ApiQuery({ name: "paciente_id", required: false }),
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __param(0, (0, common_1.Query)('paciente_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CobrosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CobrosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/pagos'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, registrar_pago_dto_1.RegistrarPagoDto]),
    __metadata("design:returntype", void 0)
], CobrosController.prototype, "registrarPago", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CobrosController.prototype, "remove", null);
exports.CobrosController = CobrosController = __decorate([
    (0, common_1.Controller)('cobros'),
    __metadata("design:paramtypes", [cobros_service_1.CobrosService])
], CobrosController);
//# sourceMappingURL=cobros.controller.js.map