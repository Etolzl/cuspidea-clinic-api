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
exports.CreateCitaDto = exports.EstadoCita = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
var EstadoCita;
(function (EstadoCita) {
    EstadoCita["PROGRAMADA"] = "programada";
    EstadoCita["CONFIRMADA"] = "confirmada";
    EstadoCita["CANCELADA"] = "cancelada";
    EstadoCita["COMPLETADA"] = "completada";
    EstadoCita["NO_ASISTIO"] = "no_asistio";
})(EstadoCita || (exports.EstadoCita = EstadoCita = {}));
class CreateCitaDto {
    paciente_id;
    dentista_id;
    fecha_hora_inicio;
    fecha_hora_fin;
    estado;
    motivo_consulta;
    static _OPENAPI_METADATA_FACTORY() {
        return { paciente_id: { required: true, type: () => Number }, dentista_id: { required: true, type: () => String, format: "uuid" }, fecha_hora_inicio: { required: true, type: () => String }, fecha_hora_fin: { required: true, type: () => String }, estado: { required: false, enum: require("./create-cita.dto").EstadoCita }, motivo_consulta: { required: false, type: () => String } };
    }
}
exports.CreateCitaDto = CreateCitaDto;
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateCitaDto.prototype, "paciente_id", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateCitaDto.prototype, "dentista_id", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateCitaDto.prototype, "fecha_hora_inicio", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateCitaDto.prototype, "fecha_hora_fin", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(EstadoCita),
    __metadata("design:type", String)
], CreateCitaDto.prototype, "estado", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCitaDto.prototype, "motivo_consulta", void 0);
//# sourceMappingURL=create-cita.dto.js.map