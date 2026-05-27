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
exports.PacientesController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const pacientes_service_1 = require("./pacientes.service");
const create_paciente_dto_1 = require("./dto/create-paciente.dto");
const update_paciente_dto_1 = require("./dto/update-paciente.dto");
const pagination_dto_1 = require("../common/dto/pagination.dto");
const supabase_auth_guard_1 = require("../auth/guards/supabase-auth.guard");
const swagger_1 = require("@nestjs/swagger");
let PacientesController = class PacientesController {
    pacientesService;
    constructor(pacientesService) {
        this.pacientesService = pacientesService;
    }
    create(dto) {
        return this.pacientesService.create(dto);
    }
    findAll(search, pagination) {
        return this.pacientesService.findAll(search, pagination);
    }
    findOne(id) {
        return this.pacientesService.findOne(id);
    }
    update(id, dto) {
        return this.pacientesService.update(id, dto);
    }
    remove(id) {
        return this.pacientesService.remove(id);
    }
};
exports.PacientesController = PacientesController;
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_paciente_dto_1.CreatePacienteDto]),
    __metadata("design:returntype", void 0)
], PacientesController.prototype, "create", null);
__decorate([
    openapi.ApiQuery({ name: "search", required: false }),
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)('search')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", void 0)
], PacientesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PacientesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_paciente_dto_1.UpdatePacienteDto]),
    __metadata("design:returntype", void 0)
], PacientesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PacientesController.prototype, "remove", null);
exports.PacientesController = PacientesController = __decorate([
    (0, swagger_1.ApiTags)('pacientes'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(supabase_auth_guard_1.SupabaseAuthGuard),
    (0, common_1.Controller)('pacientes'),
    __metadata("design:paramtypes", [pacientes_service_1.PacientesService])
], PacientesController);
//# sourceMappingURL=pacientes.controller.js.map