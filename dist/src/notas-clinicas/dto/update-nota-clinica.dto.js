"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateNotaClinicaDto = void 0;
const openapi = require("@nestjs/swagger");
const mapped_types_1 = require("@nestjs/mapped-types");
const create_nota_clinica_dto_1 = require("./create-nota-clinica.dto");
class UpdateNotaClinicaDto extends (0, mapped_types_1.PartialType)(create_nota_clinica_dto_1.CreateNotaClinicaDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateNotaClinicaDto = UpdateNotaClinicaDto;
//# sourceMappingURL=update-nota-clinica.dto.js.map