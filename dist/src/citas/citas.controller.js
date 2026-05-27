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
exports.CitasController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const citas_service_1 = require("./citas.service");
const create_cita_dto_1 = require("./dto/create-cita.dto");
const update_cita_dto_1 = require("./dto/update-cita.dto");
let CitasController = class CitasController {
    citasService;
    constructor(citasService) {
        this.citasService = citasService;
    }
    create(dto) {
        return this.citasService.create(dto);
    }
    findAll(dentista_id, paciente_id, fecha_desde, fecha_hasta, estado) {
        return this.citasService.findAll({
            dentista_id,
            paciente_id: paciente_id ? parseInt(paciente_id, 10) : undefined,
            fecha_desde,
            fecha_hasta,
            estado,
        });
    }
    findOne(id) {
        return this.citasService.findOne(id);
    }
    update(id, dto) {
        return this.citasService.update(id, dto);
    }
    remove(id) {
        return this.citasService.remove(id);
    }
};
exports.CitasController = CitasController;
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cita_dto_1.CreateCitaDto]),
    __metadata("design:returntype", void 0)
], CitasController.prototype, "create", null);
__decorate([
    openapi.ApiQuery({ name: "dentista_id", required: false }),
    openapi.ApiQuery({ name: "paciente_id", required: false }),
    openapi.ApiQuery({ name: "fecha_desde", required: false }),
    openapi.ApiQuery({ name: "fecha_hasta", required: false }),
    openapi.ApiQuery({ name: "estado", required: false }),
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __param(0, (0, common_1.Query)('dentista_id')),
    __param(1, (0, common_1.Query)('paciente_id')),
    __param(2, (0, common_1.Query)('fecha_desde')),
    __param(3, (0, common_1.Query)('fecha_hasta')),
    __param(4, (0, common_1.Query)('estado')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String]),
    __metadata("design:returntype", void 0)
], CitasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CitasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_cita_dto_1.UpdateCitaDto]),
    __metadata("design:returntype", void 0)
], CitasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CitasController.prototype, "remove", null);
exports.CitasController = CitasController = __decorate([
    (0, common_1.Controller)('citas'),
    __metadata("design:paramtypes", [citas_service_1.CitasService])
], CitasController);
//# sourceMappingURL=citas.controller.js.map