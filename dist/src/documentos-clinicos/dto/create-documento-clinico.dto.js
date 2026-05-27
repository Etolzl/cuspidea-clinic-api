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
exports.CreateDocumentoClinicoDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateDocumentoClinicoDto {
    paciente_id;
    subido_por;
    nombre_archivo;
    tipo_documento;
    archivo_url;
    static _OPENAPI_METADATA_FACTORY() {
        return { paciente_id: { required: true, type: () => Number }, subido_por: { required: false, type: () => String, format: "uuid" }, nombre_archivo: { required: false, type: () => String, maxLength: 255 }, tipo_documento: { required: false, type: () => String, maxLength: 50 }, archivo_url: { required: false, type: () => String } };
    }
}
exports.CreateDocumentoClinicoDto = CreateDocumentoClinicoDto;
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateDocumentoClinicoDto.prototype, "paciente_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateDocumentoClinicoDto.prototype, "subido_por", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateDocumentoClinicoDto.prototype, "nombre_archivo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], CreateDocumentoClinicoDto.prototype, "tipo_documento", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDocumentoClinicoDto.prototype, "archivo_url", void 0);
//# sourceMappingURL=create-documento-clinico.dto.js.map