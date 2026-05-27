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
exports.CreateNotaClinicaDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateNotaClinicaDto {
    paciente_id;
    dentista_id;
    cita_id;
    diagnostico;
    tratamiento_realizado;
    notas_evolucion;
    odontograma_estado;
    static _OPENAPI_METADATA_FACTORY() {
        return { paciente_id: { required: true, type: () => Number }, dentista_id: { required: true, type: () => String, format: "uuid" }, cita_id: { required: false, type: () => Number }, diagnostico: { required: true, type: () => String }, tratamiento_realizado: { required: false, type: () => String }, notas_evolucion: { required: false, type: () => String }, odontograma_estado: { required: false, type: () => Object } };
    }
}
exports.CreateNotaClinicaDto = CreateNotaClinicaDto;
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateNotaClinicaDto.prototype, "paciente_id", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateNotaClinicaDto.prototype, "dentista_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateNotaClinicaDto.prototype, "cita_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateNotaClinicaDto.prototype, "diagnostico", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateNotaClinicaDto.prototype, "tratamiento_realizado", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateNotaClinicaDto.prototype, "notas_evolucion", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], CreateNotaClinicaDto.prototype, "odontograma_estado", void 0);
//# sourceMappingURL=create-nota-clinica.dto.js.map