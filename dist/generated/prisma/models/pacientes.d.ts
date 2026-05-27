import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type pacientesModel = runtime.Types.Result.DefaultSelection<Prisma.$pacientesPayload>;
export type AggregatePacientes = {
    _count: PacientesCountAggregateOutputType | null;
    _avg: PacientesAvgAggregateOutputType | null;
    _sum: PacientesSumAggregateOutputType | null;
    _min: PacientesMinAggregateOutputType | null;
    _max: PacientesMaxAggregateOutputType | null;
};
export type PacientesAvgAggregateOutputType = {
    id: number | null;
};
export type PacientesSumAggregateOutputType = {
    id: number | null;
};
export type PacientesMinAggregateOutputType = {
    id: number | null;
    perfil_id: string | null;
    nombre_completo: string | null;
    telefono: string | null;
    correo: string | null;
    fecha_nacimiento: Date | null;
    antecedentes_medicos: string | null;
    fecha_registro: Date | null;
};
export type PacientesMaxAggregateOutputType = {
    id: number | null;
    perfil_id: string | null;
    nombre_completo: string | null;
    telefono: string | null;
    correo: string | null;
    fecha_nacimiento: Date | null;
    antecedentes_medicos: string | null;
    fecha_registro: Date | null;
};
export type PacientesCountAggregateOutputType = {
    id: number;
    perfil_id: number;
    nombre_completo: number;
    telefono: number;
    correo: number;
    fecha_nacimiento: number;
    antecedentes_medicos: number;
    fecha_registro: number;
    _all: number;
};
export type PacientesAvgAggregateInputType = {
    id?: true;
};
export type PacientesSumAggregateInputType = {
    id?: true;
};
export type PacientesMinAggregateInputType = {
    id?: true;
    perfil_id?: true;
    nombre_completo?: true;
    telefono?: true;
    correo?: true;
    fecha_nacimiento?: true;
    antecedentes_medicos?: true;
    fecha_registro?: true;
};
export type PacientesMaxAggregateInputType = {
    id?: true;
    perfil_id?: true;
    nombre_completo?: true;
    telefono?: true;
    correo?: true;
    fecha_nacimiento?: true;
    antecedentes_medicos?: true;
    fecha_registro?: true;
};
export type PacientesCountAggregateInputType = {
    id?: true;
    perfil_id?: true;
    nombre_completo?: true;
    telefono?: true;
    correo?: true;
    fecha_nacimiento?: true;
    antecedentes_medicos?: true;
    fecha_registro?: true;
    _all?: true;
};
export type PacientesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.pacientesWhereInput;
    orderBy?: Prisma.pacientesOrderByWithRelationInput | Prisma.pacientesOrderByWithRelationInput[];
    cursor?: Prisma.pacientesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PacientesCountAggregateInputType;
    _avg?: PacientesAvgAggregateInputType;
    _sum?: PacientesSumAggregateInputType;
    _min?: PacientesMinAggregateInputType;
    _max?: PacientesMaxAggregateInputType;
};
export type GetPacientesAggregateType<T extends PacientesAggregateArgs> = {
    [P in keyof T & keyof AggregatePacientes]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePacientes[P]> : Prisma.GetScalarType<T[P], AggregatePacientes[P]>;
};
export type pacientesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.pacientesWhereInput;
    orderBy?: Prisma.pacientesOrderByWithAggregationInput | Prisma.pacientesOrderByWithAggregationInput[];
    by: Prisma.PacientesScalarFieldEnum[] | Prisma.PacientesScalarFieldEnum;
    having?: Prisma.pacientesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PacientesCountAggregateInputType | true;
    _avg?: PacientesAvgAggregateInputType;
    _sum?: PacientesSumAggregateInputType;
    _min?: PacientesMinAggregateInputType;
    _max?: PacientesMaxAggregateInputType;
};
export type PacientesGroupByOutputType = {
    id: number;
    perfil_id: string | null;
    nombre_completo: string;
    telefono: string;
    correo: string | null;
    fecha_nacimiento: Date | null;
    antecedentes_medicos: string | null;
    fecha_registro: Date | null;
    _count: PacientesCountAggregateOutputType | null;
    _avg: PacientesAvgAggregateOutputType | null;
    _sum: PacientesSumAggregateOutputType | null;
    _min: PacientesMinAggregateOutputType | null;
    _max: PacientesMaxAggregateOutputType | null;
};
export type GetPacientesGroupByPayload<T extends pacientesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PacientesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PacientesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PacientesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PacientesGroupByOutputType[P]>;
}>>;
export type pacientesWhereInput = {
    AND?: Prisma.pacientesWhereInput | Prisma.pacientesWhereInput[];
    OR?: Prisma.pacientesWhereInput[];
    NOT?: Prisma.pacientesWhereInput | Prisma.pacientesWhereInput[];
    id?: Prisma.IntFilter<"pacientes"> | number;
    perfil_id?: Prisma.UuidNullableFilter<"pacientes"> | string | null;
    nombre_completo?: Prisma.StringFilter<"pacientes"> | string;
    telefono?: Prisma.StringFilter<"pacientes"> | string;
    correo?: Prisma.StringNullableFilter<"pacientes"> | string | null;
    fecha_nacimiento?: Prisma.DateTimeNullableFilter<"pacientes"> | Date | string | null;
    antecedentes_medicos?: Prisma.StringNullableFilter<"pacientes"> | string | null;
    fecha_registro?: Prisma.DateTimeNullableFilter<"pacientes"> | Date | string | null;
    citas?: Prisma.CitasListRelationFilter;
    cobros?: Prisma.CobrosListRelationFilter;
    documentos_clinicos?: Prisma.Documentos_clinicosListRelationFilter;
    notas_clinicas?: Prisma.Notas_clinicasListRelationFilter;
    perfiles?: Prisma.XOR<Prisma.PerfilesNullableScalarRelationFilter, Prisma.perfilesWhereInput> | null;
};
export type pacientesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    perfil_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    nombre_completo?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    correo?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_nacimiento?: Prisma.SortOrderInput | Prisma.SortOrder;
    antecedentes_medicos?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_registro?: Prisma.SortOrderInput | Prisma.SortOrder;
    citas?: Prisma.citasOrderByRelationAggregateInput;
    cobros?: Prisma.cobrosOrderByRelationAggregateInput;
    documentos_clinicos?: Prisma.documentos_clinicosOrderByRelationAggregateInput;
    notas_clinicas?: Prisma.notas_clinicasOrderByRelationAggregateInput;
    perfiles?: Prisma.perfilesOrderByWithRelationInput;
};
export type pacientesWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    correo?: string;
    AND?: Prisma.pacientesWhereInput | Prisma.pacientesWhereInput[];
    OR?: Prisma.pacientesWhereInput[];
    NOT?: Prisma.pacientesWhereInput | Prisma.pacientesWhereInput[];
    perfil_id?: Prisma.UuidNullableFilter<"pacientes"> | string | null;
    nombre_completo?: Prisma.StringFilter<"pacientes"> | string;
    telefono?: Prisma.StringFilter<"pacientes"> | string;
    fecha_nacimiento?: Prisma.DateTimeNullableFilter<"pacientes"> | Date | string | null;
    antecedentes_medicos?: Prisma.StringNullableFilter<"pacientes"> | string | null;
    fecha_registro?: Prisma.DateTimeNullableFilter<"pacientes"> | Date | string | null;
    citas?: Prisma.CitasListRelationFilter;
    cobros?: Prisma.CobrosListRelationFilter;
    documentos_clinicos?: Prisma.Documentos_clinicosListRelationFilter;
    notas_clinicas?: Prisma.Notas_clinicasListRelationFilter;
    perfiles?: Prisma.XOR<Prisma.PerfilesNullableScalarRelationFilter, Prisma.perfilesWhereInput> | null;
}, "id" | "correo">;
export type pacientesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    perfil_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    nombre_completo?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    correo?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_nacimiento?: Prisma.SortOrderInput | Prisma.SortOrder;
    antecedentes_medicos?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_registro?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.pacientesCountOrderByAggregateInput;
    _avg?: Prisma.pacientesAvgOrderByAggregateInput;
    _max?: Prisma.pacientesMaxOrderByAggregateInput;
    _min?: Prisma.pacientesMinOrderByAggregateInput;
    _sum?: Prisma.pacientesSumOrderByAggregateInput;
};
export type pacientesScalarWhereWithAggregatesInput = {
    AND?: Prisma.pacientesScalarWhereWithAggregatesInput | Prisma.pacientesScalarWhereWithAggregatesInput[];
    OR?: Prisma.pacientesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.pacientesScalarWhereWithAggregatesInput | Prisma.pacientesScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"pacientes"> | number;
    perfil_id?: Prisma.UuidNullableWithAggregatesFilter<"pacientes"> | string | null;
    nombre_completo?: Prisma.StringWithAggregatesFilter<"pacientes"> | string;
    telefono?: Prisma.StringWithAggregatesFilter<"pacientes"> | string;
    correo?: Prisma.StringNullableWithAggregatesFilter<"pacientes"> | string | null;
    fecha_nacimiento?: Prisma.DateTimeNullableWithAggregatesFilter<"pacientes"> | Date | string | null;
    antecedentes_medicos?: Prisma.StringNullableWithAggregatesFilter<"pacientes"> | string | null;
    fecha_registro?: Prisma.DateTimeNullableWithAggregatesFilter<"pacientes"> | Date | string | null;
};
export type pacientesCreateInput = {
    nombre_completo: string;
    telefono: string;
    correo?: string | null;
    fecha_nacimiento?: Date | string | null;
    antecedentes_medicos?: string | null;
    fecha_registro?: Date | string | null;
    citas?: Prisma.citasCreateNestedManyWithoutPacientesInput;
    cobros?: Prisma.cobrosCreateNestedManyWithoutPacientesInput;
    documentos_clinicos?: Prisma.documentos_clinicosCreateNestedManyWithoutPacientesInput;
    notas_clinicas?: Prisma.notas_clinicasCreateNestedManyWithoutPacientesInput;
    perfiles?: Prisma.perfilesCreateNestedOneWithoutPacientesInput;
};
export type pacientesUncheckedCreateInput = {
    id?: number;
    perfil_id?: string | null;
    nombre_completo: string;
    telefono: string;
    correo?: string | null;
    fecha_nacimiento?: Date | string | null;
    antecedentes_medicos?: string | null;
    fecha_registro?: Date | string | null;
    citas?: Prisma.citasUncheckedCreateNestedManyWithoutPacientesInput;
    cobros?: Prisma.cobrosUncheckedCreateNestedManyWithoutPacientesInput;
    documentos_clinicos?: Prisma.documentos_clinicosUncheckedCreateNestedManyWithoutPacientesInput;
    notas_clinicas?: Prisma.notas_clinicasUncheckedCreateNestedManyWithoutPacientesInput;
};
export type pacientesUpdateInput = {
    nombre_completo?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    correo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_nacimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    antecedentes_medicos?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_registro?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    citas?: Prisma.citasUpdateManyWithoutPacientesNestedInput;
    cobros?: Prisma.cobrosUpdateManyWithoutPacientesNestedInput;
    documentos_clinicos?: Prisma.documentos_clinicosUpdateManyWithoutPacientesNestedInput;
    notas_clinicas?: Prisma.notas_clinicasUpdateManyWithoutPacientesNestedInput;
    perfiles?: Prisma.perfilesUpdateOneWithoutPacientesNestedInput;
};
export type pacientesUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    perfil_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_completo?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    correo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_nacimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    antecedentes_medicos?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_registro?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    citas?: Prisma.citasUncheckedUpdateManyWithoutPacientesNestedInput;
    cobros?: Prisma.cobrosUncheckedUpdateManyWithoutPacientesNestedInput;
    documentos_clinicos?: Prisma.documentos_clinicosUncheckedUpdateManyWithoutPacientesNestedInput;
    notas_clinicas?: Prisma.notas_clinicasUncheckedUpdateManyWithoutPacientesNestedInput;
};
export type pacientesCreateManyInput = {
    id?: number;
    perfil_id?: string | null;
    nombre_completo: string;
    telefono: string;
    correo?: string | null;
    fecha_nacimiento?: Date | string | null;
    antecedentes_medicos?: string | null;
    fecha_registro?: Date | string | null;
};
export type pacientesUpdateManyMutationInput = {
    nombre_completo?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    correo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_nacimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    antecedentes_medicos?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_registro?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type pacientesUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    perfil_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_completo?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    correo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_nacimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    antecedentes_medicos?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_registro?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PacientesScalarRelationFilter = {
    is?: Prisma.pacientesWhereInput;
    isNot?: Prisma.pacientesWhereInput;
};
export type pacientesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    perfil_id?: Prisma.SortOrder;
    nombre_completo?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    correo?: Prisma.SortOrder;
    fecha_nacimiento?: Prisma.SortOrder;
    antecedentes_medicos?: Prisma.SortOrder;
    fecha_registro?: Prisma.SortOrder;
};
export type pacientesAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type pacientesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    perfil_id?: Prisma.SortOrder;
    nombre_completo?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    correo?: Prisma.SortOrder;
    fecha_nacimiento?: Prisma.SortOrder;
    antecedentes_medicos?: Prisma.SortOrder;
    fecha_registro?: Prisma.SortOrder;
};
export type pacientesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    perfil_id?: Prisma.SortOrder;
    nombre_completo?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    correo?: Prisma.SortOrder;
    fecha_nacimiento?: Prisma.SortOrder;
    antecedentes_medicos?: Prisma.SortOrder;
    fecha_registro?: Prisma.SortOrder;
};
export type pacientesSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type PacientesListRelationFilter = {
    every?: Prisma.pacientesWhereInput;
    some?: Prisma.pacientesWhereInput;
    none?: Prisma.pacientesWhereInput;
};
export type pacientesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type pacientesCreateNestedOneWithoutCitasInput = {
    create?: Prisma.XOR<Prisma.pacientesCreateWithoutCitasInput, Prisma.pacientesUncheckedCreateWithoutCitasInput>;
    connectOrCreate?: Prisma.pacientesCreateOrConnectWithoutCitasInput;
    connect?: Prisma.pacientesWhereUniqueInput;
};
export type pacientesUpdateOneRequiredWithoutCitasNestedInput = {
    create?: Prisma.XOR<Prisma.pacientesCreateWithoutCitasInput, Prisma.pacientesUncheckedCreateWithoutCitasInput>;
    connectOrCreate?: Prisma.pacientesCreateOrConnectWithoutCitasInput;
    upsert?: Prisma.pacientesUpsertWithoutCitasInput;
    connect?: Prisma.pacientesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.pacientesUpdateToOneWithWhereWithoutCitasInput, Prisma.pacientesUpdateWithoutCitasInput>, Prisma.pacientesUncheckedUpdateWithoutCitasInput>;
};
export type pacientesCreateNestedOneWithoutCobrosInput = {
    create?: Prisma.XOR<Prisma.pacientesCreateWithoutCobrosInput, Prisma.pacientesUncheckedCreateWithoutCobrosInput>;
    connectOrCreate?: Prisma.pacientesCreateOrConnectWithoutCobrosInput;
    connect?: Prisma.pacientesWhereUniqueInput;
};
export type pacientesUpdateOneRequiredWithoutCobrosNestedInput = {
    create?: Prisma.XOR<Prisma.pacientesCreateWithoutCobrosInput, Prisma.pacientesUncheckedCreateWithoutCobrosInput>;
    connectOrCreate?: Prisma.pacientesCreateOrConnectWithoutCobrosInput;
    upsert?: Prisma.pacientesUpsertWithoutCobrosInput;
    connect?: Prisma.pacientesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.pacientesUpdateToOneWithWhereWithoutCobrosInput, Prisma.pacientesUpdateWithoutCobrosInput>, Prisma.pacientesUncheckedUpdateWithoutCobrosInput>;
};
export type pacientesCreateNestedOneWithoutDocumentos_clinicosInput = {
    create?: Prisma.XOR<Prisma.pacientesCreateWithoutDocumentos_clinicosInput, Prisma.pacientesUncheckedCreateWithoutDocumentos_clinicosInput>;
    connectOrCreate?: Prisma.pacientesCreateOrConnectWithoutDocumentos_clinicosInput;
    connect?: Prisma.pacientesWhereUniqueInput;
};
export type pacientesUpdateOneRequiredWithoutDocumentos_clinicosNestedInput = {
    create?: Prisma.XOR<Prisma.pacientesCreateWithoutDocumentos_clinicosInput, Prisma.pacientesUncheckedCreateWithoutDocumentos_clinicosInput>;
    connectOrCreate?: Prisma.pacientesCreateOrConnectWithoutDocumentos_clinicosInput;
    upsert?: Prisma.pacientesUpsertWithoutDocumentos_clinicosInput;
    connect?: Prisma.pacientesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.pacientesUpdateToOneWithWhereWithoutDocumentos_clinicosInput, Prisma.pacientesUpdateWithoutDocumentos_clinicosInput>, Prisma.pacientesUncheckedUpdateWithoutDocumentos_clinicosInput>;
};
export type pacientesCreateNestedOneWithoutNotas_clinicasInput = {
    create?: Prisma.XOR<Prisma.pacientesCreateWithoutNotas_clinicasInput, Prisma.pacientesUncheckedCreateWithoutNotas_clinicasInput>;
    connectOrCreate?: Prisma.pacientesCreateOrConnectWithoutNotas_clinicasInput;
    connect?: Prisma.pacientesWhereUniqueInput;
};
export type pacientesUpdateOneRequiredWithoutNotas_clinicasNestedInput = {
    create?: Prisma.XOR<Prisma.pacientesCreateWithoutNotas_clinicasInput, Prisma.pacientesUncheckedCreateWithoutNotas_clinicasInput>;
    connectOrCreate?: Prisma.pacientesCreateOrConnectWithoutNotas_clinicasInput;
    upsert?: Prisma.pacientesUpsertWithoutNotas_clinicasInput;
    connect?: Prisma.pacientesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.pacientesUpdateToOneWithWhereWithoutNotas_clinicasInput, Prisma.pacientesUpdateWithoutNotas_clinicasInput>, Prisma.pacientesUncheckedUpdateWithoutNotas_clinicasInput>;
};
export type pacientesCreateNestedManyWithoutPerfilesInput = {
    create?: Prisma.XOR<Prisma.pacientesCreateWithoutPerfilesInput, Prisma.pacientesUncheckedCreateWithoutPerfilesInput> | Prisma.pacientesCreateWithoutPerfilesInput[] | Prisma.pacientesUncheckedCreateWithoutPerfilesInput[];
    connectOrCreate?: Prisma.pacientesCreateOrConnectWithoutPerfilesInput | Prisma.pacientesCreateOrConnectWithoutPerfilesInput[];
    createMany?: Prisma.pacientesCreateManyPerfilesInputEnvelope;
    connect?: Prisma.pacientesWhereUniqueInput | Prisma.pacientesWhereUniqueInput[];
};
export type pacientesUncheckedCreateNestedManyWithoutPerfilesInput = {
    create?: Prisma.XOR<Prisma.pacientesCreateWithoutPerfilesInput, Prisma.pacientesUncheckedCreateWithoutPerfilesInput> | Prisma.pacientesCreateWithoutPerfilesInput[] | Prisma.pacientesUncheckedCreateWithoutPerfilesInput[];
    connectOrCreate?: Prisma.pacientesCreateOrConnectWithoutPerfilesInput | Prisma.pacientesCreateOrConnectWithoutPerfilesInput[];
    createMany?: Prisma.pacientesCreateManyPerfilesInputEnvelope;
    connect?: Prisma.pacientesWhereUniqueInput | Prisma.pacientesWhereUniqueInput[];
};
export type pacientesUpdateManyWithoutPerfilesNestedInput = {
    create?: Prisma.XOR<Prisma.pacientesCreateWithoutPerfilesInput, Prisma.pacientesUncheckedCreateWithoutPerfilesInput> | Prisma.pacientesCreateWithoutPerfilesInput[] | Prisma.pacientesUncheckedCreateWithoutPerfilesInput[];
    connectOrCreate?: Prisma.pacientesCreateOrConnectWithoutPerfilesInput | Prisma.pacientesCreateOrConnectWithoutPerfilesInput[];
    upsert?: Prisma.pacientesUpsertWithWhereUniqueWithoutPerfilesInput | Prisma.pacientesUpsertWithWhereUniqueWithoutPerfilesInput[];
    createMany?: Prisma.pacientesCreateManyPerfilesInputEnvelope;
    set?: Prisma.pacientesWhereUniqueInput | Prisma.pacientesWhereUniqueInput[];
    disconnect?: Prisma.pacientesWhereUniqueInput | Prisma.pacientesWhereUniqueInput[];
    delete?: Prisma.pacientesWhereUniqueInput | Prisma.pacientesWhereUniqueInput[];
    connect?: Prisma.pacientesWhereUniqueInput | Prisma.pacientesWhereUniqueInput[];
    update?: Prisma.pacientesUpdateWithWhereUniqueWithoutPerfilesInput | Prisma.pacientesUpdateWithWhereUniqueWithoutPerfilesInput[];
    updateMany?: Prisma.pacientesUpdateManyWithWhereWithoutPerfilesInput | Prisma.pacientesUpdateManyWithWhereWithoutPerfilesInput[];
    deleteMany?: Prisma.pacientesScalarWhereInput | Prisma.pacientesScalarWhereInput[];
};
export type pacientesUncheckedUpdateManyWithoutPerfilesNestedInput = {
    create?: Prisma.XOR<Prisma.pacientesCreateWithoutPerfilesInput, Prisma.pacientesUncheckedCreateWithoutPerfilesInput> | Prisma.pacientesCreateWithoutPerfilesInput[] | Prisma.pacientesUncheckedCreateWithoutPerfilesInput[];
    connectOrCreate?: Prisma.pacientesCreateOrConnectWithoutPerfilesInput | Prisma.pacientesCreateOrConnectWithoutPerfilesInput[];
    upsert?: Prisma.pacientesUpsertWithWhereUniqueWithoutPerfilesInput | Prisma.pacientesUpsertWithWhereUniqueWithoutPerfilesInput[];
    createMany?: Prisma.pacientesCreateManyPerfilesInputEnvelope;
    set?: Prisma.pacientesWhereUniqueInput | Prisma.pacientesWhereUniqueInput[];
    disconnect?: Prisma.pacientesWhereUniqueInput | Prisma.pacientesWhereUniqueInput[];
    delete?: Prisma.pacientesWhereUniqueInput | Prisma.pacientesWhereUniqueInput[];
    connect?: Prisma.pacientesWhereUniqueInput | Prisma.pacientesWhereUniqueInput[];
    update?: Prisma.pacientesUpdateWithWhereUniqueWithoutPerfilesInput | Prisma.pacientesUpdateWithWhereUniqueWithoutPerfilesInput[];
    updateMany?: Prisma.pacientesUpdateManyWithWhereWithoutPerfilesInput | Prisma.pacientesUpdateManyWithWhereWithoutPerfilesInput[];
    deleteMany?: Prisma.pacientesScalarWhereInput | Prisma.pacientesScalarWhereInput[];
};
export type pacientesCreateWithoutCitasInput = {
    nombre_completo: string;
    telefono: string;
    correo?: string | null;
    fecha_nacimiento?: Date | string | null;
    antecedentes_medicos?: string | null;
    fecha_registro?: Date | string | null;
    cobros?: Prisma.cobrosCreateNestedManyWithoutPacientesInput;
    documentos_clinicos?: Prisma.documentos_clinicosCreateNestedManyWithoutPacientesInput;
    notas_clinicas?: Prisma.notas_clinicasCreateNestedManyWithoutPacientesInput;
    perfiles?: Prisma.perfilesCreateNestedOneWithoutPacientesInput;
};
export type pacientesUncheckedCreateWithoutCitasInput = {
    id?: number;
    perfil_id?: string | null;
    nombre_completo: string;
    telefono: string;
    correo?: string | null;
    fecha_nacimiento?: Date | string | null;
    antecedentes_medicos?: string | null;
    fecha_registro?: Date | string | null;
    cobros?: Prisma.cobrosUncheckedCreateNestedManyWithoutPacientesInput;
    documentos_clinicos?: Prisma.documentos_clinicosUncheckedCreateNestedManyWithoutPacientesInput;
    notas_clinicas?: Prisma.notas_clinicasUncheckedCreateNestedManyWithoutPacientesInput;
};
export type pacientesCreateOrConnectWithoutCitasInput = {
    where: Prisma.pacientesWhereUniqueInput;
    create: Prisma.XOR<Prisma.pacientesCreateWithoutCitasInput, Prisma.pacientesUncheckedCreateWithoutCitasInput>;
};
export type pacientesUpsertWithoutCitasInput = {
    update: Prisma.XOR<Prisma.pacientesUpdateWithoutCitasInput, Prisma.pacientesUncheckedUpdateWithoutCitasInput>;
    create: Prisma.XOR<Prisma.pacientesCreateWithoutCitasInput, Prisma.pacientesUncheckedCreateWithoutCitasInput>;
    where?: Prisma.pacientesWhereInput;
};
export type pacientesUpdateToOneWithWhereWithoutCitasInput = {
    where?: Prisma.pacientesWhereInput;
    data: Prisma.XOR<Prisma.pacientesUpdateWithoutCitasInput, Prisma.pacientesUncheckedUpdateWithoutCitasInput>;
};
export type pacientesUpdateWithoutCitasInput = {
    nombre_completo?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    correo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_nacimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    antecedentes_medicos?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_registro?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cobros?: Prisma.cobrosUpdateManyWithoutPacientesNestedInput;
    documentos_clinicos?: Prisma.documentos_clinicosUpdateManyWithoutPacientesNestedInput;
    notas_clinicas?: Prisma.notas_clinicasUpdateManyWithoutPacientesNestedInput;
    perfiles?: Prisma.perfilesUpdateOneWithoutPacientesNestedInput;
};
export type pacientesUncheckedUpdateWithoutCitasInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    perfil_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_completo?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    correo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_nacimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    antecedentes_medicos?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_registro?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cobros?: Prisma.cobrosUncheckedUpdateManyWithoutPacientesNestedInput;
    documentos_clinicos?: Prisma.documentos_clinicosUncheckedUpdateManyWithoutPacientesNestedInput;
    notas_clinicas?: Prisma.notas_clinicasUncheckedUpdateManyWithoutPacientesNestedInput;
};
export type pacientesCreateWithoutCobrosInput = {
    nombre_completo: string;
    telefono: string;
    correo?: string | null;
    fecha_nacimiento?: Date | string | null;
    antecedentes_medicos?: string | null;
    fecha_registro?: Date | string | null;
    citas?: Prisma.citasCreateNestedManyWithoutPacientesInput;
    documentos_clinicos?: Prisma.documentos_clinicosCreateNestedManyWithoutPacientesInput;
    notas_clinicas?: Prisma.notas_clinicasCreateNestedManyWithoutPacientesInput;
    perfiles?: Prisma.perfilesCreateNestedOneWithoutPacientesInput;
};
export type pacientesUncheckedCreateWithoutCobrosInput = {
    id?: number;
    perfil_id?: string | null;
    nombre_completo: string;
    telefono: string;
    correo?: string | null;
    fecha_nacimiento?: Date | string | null;
    antecedentes_medicos?: string | null;
    fecha_registro?: Date | string | null;
    citas?: Prisma.citasUncheckedCreateNestedManyWithoutPacientesInput;
    documentos_clinicos?: Prisma.documentos_clinicosUncheckedCreateNestedManyWithoutPacientesInput;
    notas_clinicas?: Prisma.notas_clinicasUncheckedCreateNestedManyWithoutPacientesInput;
};
export type pacientesCreateOrConnectWithoutCobrosInput = {
    where: Prisma.pacientesWhereUniqueInput;
    create: Prisma.XOR<Prisma.pacientesCreateWithoutCobrosInput, Prisma.pacientesUncheckedCreateWithoutCobrosInput>;
};
export type pacientesUpsertWithoutCobrosInput = {
    update: Prisma.XOR<Prisma.pacientesUpdateWithoutCobrosInput, Prisma.pacientesUncheckedUpdateWithoutCobrosInput>;
    create: Prisma.XOR<Prisma.pacientesCreateWithoutCobrosInput, Prisma.pacientesUncheckedCreateWithoutCobrosInput>;
    where?: Prisma.pacientesWhereInput;
};
export type pacientesUpdateToOneWithWhereWithoutCobrosInput = {
    where?: Prisma.pacientesWhereInput;
    data: Prisma.XOR<Prisma.pacientesUpdateWithoutCobrosInput, Prisma.pacientesUncheckedUpdateWithoutCobrosInput>;
};
export type pacientesUpdateWithoutCobrosInput = {
    nombre_completo?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    correo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_nacimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    antecedentes_medicos?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_registro?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    citas?: Prisma.citasUpdateManyWithoutPacientesNestedInput;
    documentos_clinicos?: Prisma.documentos_clinicosUpdateManyWithoutPacientesNestedInput;
    notas_clinicas?: Prisma.notas_clinicasUpdateManyWithoutPacientesNestedInput;
    perfiles?: Prisma.perfilesUpdateOneWithoutPacientesNestedInput;
};
export type pacientesUncheckedUpdateWithoutCobrosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    perfil_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_completo?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    correo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_nacimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    antecedentes_medicos?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_registro?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    citas?: Prisma.citasUncheckedUpdateManyWithoutPacientesNestedInput;
    documentos_clinicos?: Prisma.documentos_clinicosUncheckedUpdateManyWithoutPacientesNestedInput;
    notas_clinicas?: Prisma.notas_clinicasUncheckedUpdateManyWithoutPacientesNestedInput;
};
export type pacientesCreateWithoutDocumentos_clinicosInput = {
    nombre_completo: string;
    telefono: string;
    correo?: string | null;
    fecha_nacimiento?: Date | string | null;
    antecedentes_medicos?: string | null;
    fecha_registro?: Date | string | null;
    citas?: Prisma.citasCreateNestedManyWithoutPacientesInput;
    cobros?: Prisma.cobrosCreateNestedManyWithoutPacientesInput;
    notas_clinicas?: Prisma.notas_clinicasCreateNestedManyWithoutPacientesInput;
    perfiles?: Prisma.perfilesCreateNestedOneWithoutPacientesInput;
};
export type pacientesUncheckedCreateWithoutDocumentos_clinicosInput = {
    id?: number;
    perfil_id?: string | null;
    nombre_completo: string;
    telefono: string;
    correo?: string | null;
    fecha_nacimiento?: Date | string | null;
    antecedentes_medicos?: string | null;
    fecha_registro?: Date | string | null;
    citas?: Prisma.citasUncheckedCreateNestedManyWithoutPacientesInput;
    cobros?: Prisma.cobrosUncheckedCreateNestedManyWithoutPacientesInput;
    notas_clinicas?: Prisma.notas_clinicasUncheckedCreateNestedManyWithoutPacientesInput;
};
export type pacientesCreateOrConnectWithoutDocumentos_clinicosInput = {
    where: Prisma.pacientesWhereUniqueInput;
    create: Prisma.XOR<Prisma.pacientesCreateWithoutDocumentos_clinicosInput, Prisma.pacientesUncheckedCreateWithoutDocumentos_clinicosInput>;
};
export type pacientesUpsertWithoutDocumentos_clinicosInput = {
    update: Prisma.XOR<Prisma.pacientesUpdateWithoutDocumentos_clinicosInput, Prisma.pacientesUncheckedUpdateWithoutDocumentos_clinicosInput>;
    create: Prisma.XOR<Prisma.pacientesCreateWithoutDocumentos_clinicosInput, Prisma.pacientesUncheckedCreateWithoutDocumentos_clinicosInput>;
    where?: Prisma.pacientesWhereInput;
};
export type pacientesUpdateToOneWithWhereWithoutDocumentos_clinicosInput = {
    where?: Prisma.pacientesWhereInput;
    data: Prisma.XOR<Prisma.pacientesUpdateWithoutDocumentos_clinicosInput, Prisma.pacientesUncheckedUpdateWithoutDocumentos_clinicosInput>;
};
export type pacientesUpdateWithoutDocumentos_clinicosInput = {
    nombre_completo?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    correo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_nacimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    antecedentes_medicos?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_registro?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    citas?: Prisma.citasUpdateManyWithoutPacientesNestedInput;
    cobros?: Prisma.cobrosUpdateManyWithoutPacientesNestedInput;
    notas_clinicas?: Prisma.notas_clinicasUpdateManyWithoutPacientesNestedInput;
    perfiles?: Prisma.perfilesUpdateOneWithoutPacientesNestedInput;
};
export type pacientesUncheckedUpdateWithoutDocumentos_clinicosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    perfil_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_completo?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    correo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_nacimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    antecedentes_medicos?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_registro?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    citas?: Prisma.citasUncheckedUpdateManyWithoutPacientesNestedInput;
    cobros?: Prisma.cobrosUncheckedUpdateManyWithoutPacientesNestedInput;
    notas_clinicas?: Prisma.notas_clinicasUncheckedUpdateManyWithoutPacientesNestedInput;
};
export type pacientesCreateWithoutNotas_clinicasInput = {
    nombre_completo: string;
    telefono: string;
    correo?: string | null;
    fecha_nacimiento?: Date | string | null;
    antecedentes_medicos?: string | null;
    fecha_registro?: Date | string | null;
    citas?: Prisma.citasCreateNestedManyWithoutPacientesInput;
    cobros?: Prisma.cobrosCreateNestedManyWithoutPacientesInput;
    documentos_clinicos?: Prisma.documentos_clinicosCreateNestedManyWithoutPacientesInput;
    perfiles?: Prisma.perfilesCreateNestedOneWithoutPacientesInput;
};
export type pacientesUncheckedCreateWithoutNotas_clinicasInput = {
    id?: number;
    perfil_id?: string | null;
    nombre_completo: string;
    telefono: string;
    correo?: string | null;
    fecha_nacimiento?: Date | string | null;
    antecedentes_medicos?: string | null;
    fecha_registro?: Date | string | null;
    citas?: Prisma.citasUncheckedCreateNestedManyWithoutPacientesInput;
    cobros?: Prisma.cobrosUncheckedCreateNestedManyWithoutPacientesInput;
    documentos_clinicos?: Prisma.documentos_clinicosUncheckedCreateNestedManyWithoutPacientesInput;
};
export type pacientesCreateOrConnectWithoutNotas_clinicasInput = {
    where: Prisma.pacientesWhereUniqueInput;
    create: Prisma.XOR<Prisma.pacientesCreateWithoutNotas_clinicasInput, Prisma.pacientesUncheckedCreateWithoutNotas_clinicasInput>;
};
export type pacientesUpsertWithoutNotas_clinicasInput = {
    update: Prisma.XOR<Prisma.pacientesUpdateWithoutNotas_clinicasInput, Prisma.pacientesUncheckedUpdateWithoutNotas_clinicasInput>;
    create: Prisma.XOR<Prisma.pacientesCreateWithoutNotas_clinicasInput, Prisma.pacientesUncheckedCreateWithoutNotas_clinicasInput>;
    where?: Prisma.pacientesWhereInput;
};
export type pacientesUpdateToOneWithWhereWithoutNotas_clinicasInput = {
    where?: Prisma.pacientesWhereInput;
    data: Prisma.XOR<Prisma.pacientesUpdateWithoutNotas_clinicasInput, Prisma.pacientesUncheckedUpdateWithoutNotas_clinicasInput>;
};
export type pacientesUpdateWithoutNotas_clinicasInput = {
    nombre_completo?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    correo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_nacimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    antecedentes_medicos?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_registro?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    citas?: Prisma.citasUpdateManyWithoutPacientesNestedInput;
    cobros?: Prisma.cobrosUpdateManyWithoutPacientesNestedInput;
    documentos_clinicos?: Prisma.documentos_clinicosUpdateManyWithoutPacientesNestedInput;
    perfiles?: Prisma.perfilesUpdateOneWithoutPacientesNestedInput;
};
export type pacientesUncheckedUpdateWithoutNotas_clinicasInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    perfil_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_completo?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    correo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_nacimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    antecedentes_medicos?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_registro?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    citas?: Prisma.citasUncheckedUpdateManyWithoutPacientesNestedInput;
    cobros?: Prisma.cobrosUncheckedUpdateManyWithoutPacientesNestedInput;
    documentos_clinicos?: Prisma.documentos_clinicosUncheckedUpdateManyWithoutPacientesNestedInput;
};
export type pacientesCreateWithoutPerfilesInput = {
    nombre_completo: string;
    telefono: string;
    correo?: string | null;
    fecha_nacimiento?: Date | string | null;
    antecedentes_medicos?: string | null;
    fecha_registro?: Date | string | null;
    citas?: Prisma.citasCreateNestedManyWithoutPacientesInput;
    cobros?: Prisma.cobrosCreateNestedManyWithoutPacientesInput;
    documentos_clinicos?: Prisma.documentos_clinicosCreateNestedManyWithoutPacientesInput;
    notas_clinicas?: Prisma.notas_clinicasCreateNestedManyWithoutPacientesInput;
};
export type pacientesUncheckedCreateWithoutPerfilesInput = {
    id?: number;
    nombre_completo: string;
    telefono: string;
    correo?: string | null;
    fecha_nacimiento?: Date | string | null;
    antecedentes_medicos?: string | null;
    fecha_registro?: Date | string | null;
    citas?: Prisma.citasUncheckedCreateNestedManyWithoutPacientesInput;
    cobros?: Prisma.cobrosUncheckedCreateNestedManyWithoutPacientesInput;
    documentos_clinicos?: Prisma.documentos_clinicosUncheckedCreateNestedManyWithoutPacientesInput;
    notas_clinicas?: Prisma.notas_clinicasUncheckedCreateNestedManyWithoutPacientesInput;
};
export type pacientesCreateOrConnectWithoutPerfilesInput = {
    where: Prisma.pacientesWhereUniqueInput;
    create: Prisma.XOR<Prisma.pacientesCreateWithoutPerfilesInput, Prisma.pacientesUncheckedCreateWithoutPerfilesInput>;
};
export type pacientesCreateManyPerfilesInputEnvelope = {
    data: Prisma.pacientesCreateManyPerfilesInput | Prisma.pacientesCreateManyPerfilesInput[];
    skipDuplicates?: boolean;
};
export type pacientesUpsertWithWhereUniqueWithoutPerfilesInput = {
    where: Prisma.pacientesWhereUniqueInput;
    update: Prisma.XOR<Prisma.pacientesUpdateWithoutPerfilesInput, Prisma.pacientesUncheckedUpdateWithoutPerfilesInput>;
    create: Prisma.XOR<Prisma.pacientesCreateWithoutPerfilesInput, Prisma.pacientesUncheckedCreateWithoutPerfilesInput>;
};
export type pacientesUpdateWithWhereUniqueWithoutPerfilesInput = {
    where: Prisma.pacientesWhereUniqueInput;
    data: Prisma.XOR<Prisma.pacientesUpdateWithoutPerfilesInput, Prisma.pacientesUncheckedUpdateWithoutPerfilesInput>;
};
export type pacientesUpdateManyWithWhereWithoutPerfilesInput = {
    where: Prisma.pacientesScalarWhereInput;
    data: Prisma.XOR<Prisma.pacientesUpdateManyMutationInput, Prisma.pacientesUncheckedUpdateManyWithoutPerfilesInput>;
};
export type pacientesScalarWhereInput = {
    AND?: Prisma.pacientesScalarWhereInput | Prisma.pacientesScalarWhereInput[];
    OR?: Prisma.pacientesScalarWhereInput[];
    NOT?: Prisma.pacientesScalarWhereInput | Prisma.pacientesScalarWhereInput[];
    id?: Prisma.IntFilter<"pacientes"> | number;
    perfil_id?: Prisma.UuidNullableFilter<"pacientes"> | string | null;
    nombre_completo?: Prisma.StringFilter<"pacientes"> | string;
    telefono?: Prisma.StringFilter<"pacientes"> | string;
    correo?: Prisma.StringNullableFilter<"pacientes"> | string | null;
    fecha_nacimiento?: Prisma.DateTimeNullableFilter<"pacientes"> | Date | string | null;
    antecedentes_medicos?: Prisma.StringNullableFilter<"pacientes"> | string | null;
    fecha_registro?: Prisma.DateTimeNullableFilter<"pacientes"> | Date | string | null;
};
export type pacientesCreateManyPerfilesInput = {
    id?: number;
    nombre_completo: string;
    telefono: string;
    correo?: string | null;
    fecha_nacimiento?: Date | string | null;
    antecedentes_medicos?: string | null;
    fecha_registro?: Date | string | null;
};
export type pacientesUpdateWithoutPerfilesInput = {
    nombre_completo?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    correo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_nacimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    antecedentes_medicos?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_registro?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    citas?: Prisma.citasUpdateManyWithoutPacientesNestedInput;
    cobros?: Prisma.cobrosUpdateManyWithoutPacientesNestedInput;
    documentos_clinicos?: Prisma.documentos_clinicosUpdateManyWithoutPacientesNestedInput;
    notas_clinicas?: Prisma.notas_clinicasUpdateManyWithoutPacientesNestedInput;
};
export type pacientesUncheckedUpdateWithoutPerfilesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre_completo?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    correo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_nacimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    antecedentes_medicos?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_registro?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    citas?: Prisma.citasUncheckedUpdateManyWithoutPacientesNestedInput;
    cobros?: Prisma.cobrosUncheckedUpdateManyWithoutPacientesNestedInput;
    documentos_clinicos?: Prisma.documentos_clinicosUncheckedUpdateManyWithoutPacientesNestedInput;
    notas_clinicas?: Prisma.notas_clinicasUncheckedUpdateManyWithoutPacientesNestedInput;
};
export type pacientesUncheckedUpdateManyWithoutPerfilesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre_completo?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    correo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_nacimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    antecedentes_medicos?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_registro?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PacientesCountOutputType = {
    citas: number;
    cobros: number;
    documentos_clinicos: number;
    notas_clinicas: number;
};
export type PacientesCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    citas?: boolean | PacientesCountOutputTypeCountCitasArgs;
    cobros?: boolean | PacientesCountOutputTypeCountCobrosArgs;
    documentos_clinicos?: boolean | PacientesCountOutputTypeCountDocumentos_clinicosArgs;
    notas_clinicas?: boolean | PacientesCountOutputTypeCountNotas_clinicasArgs;
};
export type PacientesCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PacientesCountOutputTypeSelect<ExtArgs> | null;
};
export type PacientesCountOutputTypeCountCitasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.citasWhereInput;
};
export type PacientesCountOutputTypeCountCobrosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cobrosWhereInput;
};
export type PacientesCountOutputTypeCountDocumentos_clinicosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.documentos_clinicosWhereInput;
};
export type PacientesCountOutputTypeCountNotas_clinicasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.notas_clinicasWhereInput;
};
export type pacientesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    perfil_id?: boolean;
    nombre_completo?: boolean;
    telefono?: boolean;
    correo?: boolean;
    fecha_nacimiento?: boolean;
    antecedentes_medicos?: boolean;
    fecha_registro?: boolean;
    citas?: boolean | Prisma.pacientes$citasArgs<ExtArgs>;
    cobros?: boolean | Prisma.pacientes$cobrosArgs<ExtArgs>;
    documentos_clinicos?: boolean | Prisma.pacientes$documentos_clinicosArgs<ExtArgs>;
    notas_clinicas?: boolean | Prisma.pacientes$notas_clinicasArgs<ExtArgs>;
    perfiles?: boolean | Prisma.pacientes$perfilesArgs<ExtArgs>;
    _count?: boolean | Prisma.PacientesCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pacientes"]>;
export type pacientesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    perfil_id?: boolean;
    nombre_completo?: boolean;
    telefono?: boolean;
    correo?: boolean;
    fecha_nacimiento?: boolean;
    antecedentes_medicos?: boolean;
    fecha_registro?: boolean;
    perfiles?: boolean | Prisma.pacientes$perfilesArgs<ExtArgs>;
}, ExtArgs["result"]["pacientes"]>;
export type pacientesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    perfil_id?: boolean;
    nombre_completo?: boolean;
    telefono?: boolean;
    correo?: boolean;
    fecha_nacimiento?: boolean;
    antecedentes_medicos?: boolean;
    fecha_registro?: boolean;
    perfiles?: boolean | Prisma.pacientes$perfilesArgs<ExtArgs>;
}, ExtArgs["result"]["pacientes"]>;
export type pacientesSelectScalar = {
    id?: boolean;
    perfil_id?: boolean;
    nombre_completo?: boolean;
    telefono?: boolean;
    correo?: boolean;
    fecha_nacimiento?: boolean;
    antecedentes_medicos?: boolean;
    fecha_registro?: boolean;
};
export type pacientesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "perfil_id" | "nombre_completo" | "telefono" | "correo" | "fecha_nacimiento" | "antecedentes_medicos" | "fecha_registro", ExtArgs["result"]["pacientes"]>;
export type pacientesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    citas?: boolean | Prisma.pacientes$citasArgs<ExtArgs>;
    cobros?: boolean | Prisma.pacientes$cobrosArgs<ExtArgs>;
    documentos_clinicos?: boolean | Prisma.pacientes$documentos_clinicosArgs<ExtArgs>;
    notas_clinicas?: boolean | Prisma.pacientes$notas_clinicasArgs<ExtArgs>;
    perfiles?: boolean | Prisma.pacientes$perfilesArgs<ExtArgs>;
    _count?: boolean | Prisma.PacientesCountOutputTypeDefaultArgs<ExtArgs>;
};
export type pacientesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    perfiles?: boolean | Prisma.pacientes$perfilesArgs<ExtArgs>;
};
export type pacientesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    perfiles?: boolean | Prisma.pacientes$perfilesArgs<ExtArgs>;
};
export type $pacientesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "pacientes";
    objects: {
        citas: Prisma.$citasPayload<ExtArgs>[];
        cobros: Prisma.$cobrosPayload<ExtArgs>[];
        documentos_clinicos: Prisma.$documentos_clinicosPayload<ExtArgs>[];
        notas_clinicas: Prisma.$notas_clinicasPayload<ExtArgs>[];
        perfiles: Prisma.$perfilesPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        perfil_id: string | null;
        nombre_completo: string;
        telefono: string;
        correo: string | null;
        fecha_nacimiento: Date | null;
        antecedentes_medicos: string | null;
        fecha_registro: Date | null;
    }, ExtArgs["result"]["pacientes"]>;
    composites: {};
};
export type pacientesGetPayload<S extends boolean | null | undefined | pacientesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$pacientesPayload, S>;
export type pacientesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<pacientesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PacientesCountAggregateInputType | true;
};
export interface pacientesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['pacientes'];
        meta: {
            name: 'pacientes';
        };
    };
    findUnique<T extends pacientesFindUniqueArgs>(args: Prisma.SelectSubset<T, pacientesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__pacientesClient<runtime.Types.Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends pacientesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, pacientesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__pacientesClient<runtime.Types.Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends pacientesFindFirstArgs>(args?: Prisma.SelectSubset<T, pacientesFindFirstArgs<ExtArgs>>): Prisma.Prisma__pacientesClient<runtime.Types.Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends pacientesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, pacientesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__pacientesClient<runtime.Types.Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends pacientesFindManyArgs>(args?: Prisma.SelectSubset<T, pacientesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends pacientesCreateArgs>(args: Prisma.SelectSubset<T, pacientesCreateArgs<ExtArgs>>): Prisma.Prisma__pacientesClient<runtime.Types.Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends pacientesCreateManyArgs>(args?: Prisma.SelectSubset<T, pacientesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends pacientesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, pacientesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends pacientesDeleteArgs>(args: Prisma.SelectSubset<T, pacientesDeleteArgs<ExtArgs>>): Prisma.Prisma__pacientesClient<runtime.Types.Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends pacientesUpdateArgs>(args: Prisma.SelectSubset<T, pacientesUpdateArgs<ExtArgs>>): Prisma.Prisma__pacientesClient<runtime.Types.Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends pacientesDeleteManyArgs>(args?: Prisma.SelectSubset<T, pacientesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends pacientesUpdateManyArgs>(args: Prisma.SelectSubset<T, pacientesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends pacientesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, pacientesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends pacientesUpsertArgs>(args: Prisma.SelectSubset<T, pacientesUpsertArgs<ExtArgs>>): Prisma.Prisma__pacientesClient<runtime.Types.Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends pacientesCountArgs>(args?: Prisma.Subset<T, pacientesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PacientesCountAggregateOutputType> : number>;
    aggregate<T extends PacientesAggregateArgs>(args: Prisma.Subset<T, PacientesAggregateArgs>): Prisma.PrismaPromise<GetPacientesAggregateType<T>>;
    groupBy<T extends pacientesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: pacientesGroupByArgs['orderBy'];
    } : {
        orderBy?: pacientesGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, pacientesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPacientesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: pacientesFieldRefs;
}
export interface Prisma__pacientesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    citas<T extends Prisma.pacientes$citasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.pacientes$citasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$citasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    cobros<T extends Prisma.pacientes$cobrosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.pacientes$cobrosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$cobrosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    documentos_clinicos<T extends Prisma.pacientes$documentos_clinicosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.pacientes$documentos_clinicosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$documentos_clinicosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    notas_clinicas<T extends Prisma.pacientes$notas_clinicasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.pacientes$notas_clinicasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$notas_clinicasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    perfiles<T extends Prisma.pacientes$perfilesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.pacientes$perfilesArgs<ExtArgs>>): Prisma.Prisma__perfilesClient<runtime.Types.Result.GetResult<Prisma.$perfilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface pacientesFieldRefs {
    readonly id: Prisma.FieldRef<"pacientes", 'Int'>;
    readonly perfil_id: Prisma.FieldRef<"pacientes", 'String'>;
    readonly nombre_completo: Prisma.FieldRef<"pacientes", 'String'>;
    readonly telefono: Prisma.FieldRef<"pacientes", 'String'>;
    readonly correo: Prisma.FieldRef<"pacientes", 'String'>;
    readonly fecha_nacimiento: Prisma.FieldRef<"pacientes", 'DateTime'>;
    readonly antecedentes_medicos: Prisma.FieldRef<"pacientes", 'String'>;
    readonly fecha_registro: Prisma.FieldRef<"pacientes", 'DateTime'>;
}
export type pacientesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pacientesSelect<ExtArgs> | null;
    omit?: Prisma.pacientesOmit<ExtArgs> | null;
    include?: Prisma.pacientesInclude<ExtArgs> | null;
    where: Prisma.pacientesWhereUniqueInput;
};
export type pacientesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pacientesSelect<ExtArgs> | null;
    omit?: Prisma.pacientesOmit<ExtArgs> | null;
    include?: Prisma.pacientesInclude<ExtArgs> | null;
    where: Prisma.pacientesWhereUniqueInput;
};
export type pacientesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pacientesSelect<ExtArgs> | null;
    omit?: Prisma.pacientesOmit<ExtArgs> | null;
    include?: Prisma.pacientesInclude<ExtArgs> | null;
    where?: Prisma.pacientesWhereInput;
    orderBy?: Prisma.pacientesOrderByWithRelationInput | Prisma.pacientesOrderByWithRelationInput[];
    cursor?: Prisma.pacientesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PacientesScalarFieldEnum | Prisma.PacientesScalarFieldEnum[];
};
export type pacientesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pacientesSelect<ExtArgs> | null;
    omit?: Prisma.pacientesOmit<ExtArgs> | null;
    include?: Prisma.pacientesInclude<ExtArgs> | null;
    where?: Prisma.pacientesWhereInput;
    orderBy?: Prisma.pacientesOrderByWithRelationInput | Prisma.pacientesOrderByWithRelationInput[];
    cursor?: Prisma.pacientesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PacientesScalarFieldEnum | Prisma.PacientesScalarFieldEnum[];
};
export type pacientesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pacientesSelect<ExtArgs> | null;
    omit?: Prisma.pacientesOmit<ExtArgs> | null;
    include?: Prisma.pacientesInclude<ExtArgs> | null;
    where?: Prisma.pacientesWhereInput;
    orderBy?: Prisma.pacientesOrderByWithRelationInput | Prisma.pacientesOrderByWithRelationInput[];
    cursor?: Prisma.pacientesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PacientesScalarFieldEnum | Prisma.PacientesScalarFieldEnum[];
};
export type pacientesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pacientesSelect<ExtArgs> | null;
    omit?: Prisma.pacientesOmit<ExtArgs> | null;
    include?: Prisma.pacientesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.pacientesCreateInput, Prisma.pacientesUncheckedCreateInput>;
};
export type pacientesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.pacientesCreateManyInput | Prisma.pacientesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type pacientesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pacientesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.pacientesOmit<ExtArgs> | null;
    data: Prisma.pacientesCreateManyInput | Prisma.pacientesCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.pacientesIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type pacientesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pacientesSelect<ExtArgs> | null;
    omit?: Prisma.pacientesOmit<ExtArgs> | null;
    include?: Prisma.pacientesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.pacientesUpdateInput, Prisma.pacientesUncheckedUpdateInput>;
    where: Prisma.pacientesWhereUniqueInput;
};
export type pacientesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.pacientesUpdateManyMutationInput, Prisma.pacientesUncheckedUpdateManyInput>;
    where?: Prisma.pacientesWhereInput;
    limit?: number;
};
export type pacientesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pacientesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.pacientesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.pacientesUpdateManyMutationInput, Prisma.pacientesUncheckedUpdateManyInput>;
    where?: Prisma.pacientesWhereInput;
    limit?: number;
    include?: Prisma.pacientesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type pacientesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pacientesSelect<ExtArgs> | null;
    omit?: Prisma.pacientesOmit<ExtArgs> | null;
    include?: Prisma.pacientesInclude<ExtArgs> | null;
    where: Prisma.pacientesWhereUniqueInput;
    create: Prisma.XOR<Prisma.pacientesCreateInput, Prisma.pacientesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.pacientesUpdateInput, Prisma.pacientesUncheckedUpdateInput>;
};
export type pacientesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pacientesSelect<ExtArgs> | null;
    omit?: Prisma.pacientesOmit<ExtArgs> | null;
    include?: Prisma.pacientesInclude<ExtArgs> | null;
    where: Prisma.pacientesWhereUniqueInput;
};
export type pacientesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.pacientesWhereInput;
    limit?: number;
};
export type pacientes$citasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.citasSelect<ExtArgs> | null;
    omit?: Prisma.citasOmit<ExtArgs> | null;
    include?: Prisma.citasInclude<ExtArgs> | null;
    where?: Prisma.citasWhereInput;
    orderBy?: Prisma.citasOrderByWithRelationInput | Prisma.citasOrderByWithRelationInput[];
    cursor?: Prisma.citasWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CitasScalarFieldEnum | Prisma.CitasScalarFieldEnum[];
};
export type pacientes$cobrosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cobrosSelect<ExtArgs> | null;
    omit?: Prisma.cobrosOmit<ExtArgs> | null;
    include?: Prisma.cobrosInclude<ExtArgs> | null;
    where?: Prisma.cobrosWhereInput;
    orderBy?: Prisma.cobrosOrderByWithRelationInput | Prisma.cobrosOrderByWithRelationInput[];
    cursor?: Prisma.cobrosWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CobrosScalarFieldEnum | Prisma.CobrosScalarFieldEnum[];
};
export type pacientes$documentos_clinicosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.documentos_clinicosSelect<ExtArgs> | null;
    omit?: Prisma.documentos_clinicosOmit<ExtArgs> | null;
    include?: Prisma.documentos_clinicosInclude<ExtArgs> | null;
    where?: Prisma.documentos_clinicosWhereInput;
    orderBy?: Prisma.documentos_clinicosOrderByWithRelationInput | Prisma.documentos_clinicosOrderByWithRelationInput[];
    cursor?: Prisma.documentos_clinicosWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Documentos_clinicosScalarFieldEnum | Prisma.Documentos_clinicosScalarFieldEnum[];
};
export type pacientes$notas_clinicasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notas_clinicasSelect<ExtArgs> | null;
    omit?: Prisma.notas_clinicasOmit<ExtArgs> | null;
    include?: Prisma.notas_clinicasInclude<ExtArgs> | null;
    where?: Prisma.notas_clinicasWhereInput;
    orderBy?: Prisma.notas_clinicasOrderByWithRelationInput | Prisma.notas_clinicasOrderByWithRelationInput[];
    cursor?: Prisma.notas_clinicasWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Notas_clinicasScalarFieldEnum | Prisma.Notas_clinicasScalarFieldEnum[];
};
export type pacientes$perfilesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.perfilesSelect<ExtArgs> | null;
    omit?: Prisma.perfilesOmit<ExtArgs> | null;
    include?: Prisma.perfilesInclude<ExtArgs> | null;
    where?: Prisma.perfilesWhereInput;
};
export type pacientesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pacientesSelect<ExtArgs> | null;
    omit?: Prisma.pacientesOmit<ExtArgs> | null;
    include?: Prisma.pacientesInclude<ExtArgs> | null;
};
