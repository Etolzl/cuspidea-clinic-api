import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type perfilesModel = runtime.Types.Result.DefaultSelection<Prisma.$perfilesPayload>;
export type AggregatePerfiles = {
    _count: PerfilesCountAggregateOutputType | null;
    _min: PerfilesMinAggregateOutputType | null;
    _max: PerfilesMaxAggregateOutputType | null;
};
export type PerfilesMinAggregateOutputType = {
    id: string | null;
    nombre_completo: string | null;
    telefono: string | null;
    rol: $Enums.user_role | null;
    fecha_creacion: Date | null;
};
export type PerfilesMaxAggregateOutputType = {
    id: string | null;
    nombre_completo: string | null;
    telefono: string | null;
    rol: $Enums.user_role | null;
    fecha_creacion: Date | null;
};
export type PerfilesCountAggregateOutputType = {
    id: number;
    nombre_completo: number;
    telefono: number;
    rol: number;
    fecha_creacion: number;
    _all: number;
};
export type PerfilesMinAggregateInputType = {
    id?: true;
    nombre_completo?: true;
    telefono?: true;
    rol?: true;
    fecha_creacion?: true;
};
export type PerfilesMaxAggregateInputType = {
    id?: true;
    nombre_completo?: true;
    telefono?: true;
    rol?: true;
    fecha_creacion?: true;
};
export type PerfilesCountAggregateInputType = {
    id?: true;
    nombre_completo?: true;
    telefono?: true;
    rol?: true;
    fecha_creacion?: true;
    _all?: true;
};
export type PerfilesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.perfilesWhereInput;
    orderBy?: Prisma.perfilesOrderByWithRelationInput | Prisma.perfilesOrderByWithRelationInput[];
    cursor?: Prisma.perfilesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PerfilesCountAggregateInputType;
    _min?: PerfilesMinAggregateInputType;
    _max?: PerfilesMaxAggregateInputType;
};
export type GetPerfilesAggregateType<T extends PerfilesAggregateArgs> = {
    [P in keyof T & keyof AggregatePerfiles]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePerfiles[P]> : Prisma.GetScalarType<T[P], AggregatePerfiles[P]>;
};
export type perfilesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.perfilesWhereInput;
    orderBy?: Prisma.perfilesOrderByWithAggregationInput | Prisma.perfilesOrderByWithAggregationInput[];
    by: Prisma.PerfilesScalarFieldEnum[] | Prisma.PerfilesScalarFieldEnum;
    having?: Prisma.perfilesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PerfilesCountAggregateInputType | true;
    _min?: PerfilesMinAggregateInputType;
    _max?: PerfilesMaxAggregateInputType;
};
export type PerfilesGroupByOutputType = {
    id: string;
    nombre_completo: string;
    telefono: string | null;
    rol: $Enums.user_role;
    fecha_creacion: Date | null;
    _count: PerfilesCountAggregateOutputType | null;
    _min: PerfilesMinAggregateOutputType | null;
    _max: PerfilesMaxAggregateOutputType | null;
};
export type GetPerfilesGroupByPayload<T extends perfilesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PerfilesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PerfilesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PerfilesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PerfilesGroupByOutputType[P]>;
}>>;
export type perfilesWhereInput = {
    AND?: Prisma.perfilesWhereInput | Prisma.perfilesWhereInput[];
    OR?: Prisma.perfilesWhereInput[];
    NOT?: Prisma.perfilesWhereInput | Prisma.perfilesWhereInput[];
    id?: Prisma.UuidFilter<"perfiles"> | string;
    nombre_completo?: Prisma.StringFilter<"perfiles"> | string;
    telefono?: Prisma.StringNullableFilter<"perfiles"> | string | null;
    rol?: Prisma.Enumuser_roleFilter<"perfiles"> | $Enums.user_role;
    fecha_creacion?: Prisma.DateTimeNullableFilter<"perfiles"> | Date | string | null;
    citas?: Prisma.CitasListRelationFilter;
    documentos_clinicos?: Prisma.Documentos_clinicosListRelationFilter;
    notas_clinicas?: Prisma.Notas_clinicasListRelationFilter;
    pacientes?: Prisma.PacientesListRelationFilter;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
};
export type perfilesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre_completo?: Prisma.SortOrder;
    telefono?: Prisma.SortOrderInput | Prisma.SortOrder;
    rol?: Prisma.SortOrder;
    fecha_creacion?: Prisma.SortOrderInput | Prisma.SortOrder;
    citas?: Prisma.citasOrderByRelationAggregateInput;
    documentos_clinicos?: Prisma.documentos_clinicosOrderByRelationAggregateInput;
    notas_clinicas?: Prisma.notas_clinicasOrderByRelationAggregateInput;
    pacientes?: Prisma.pacientesOrderByRelationAggregateInput;
    users?: Prisma.usersOrderByWithRelationInput;
};
export type perfilesWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.perfilesWhereInput | Prisma.perfilesWhereInput[];
    OR?: Prisma.perfilesWhereInput[];
    NOT?: Prisma.perfilesWhereInput | Prisma.perfilesWhereInput[];
    nombre_completo?: Prisma.StringFilter<"perfiles"> | string;
    telefono?: Prisma.StringNullableFilter<"perfiles"> | string | null;
    rol?: Prisma.Enumuser_roleFilter<"perfiles"> | $Enums.user_role;
    fecha_creacion?: Prisma.DateTimeNullableFilter<"perfiles"> | Date | string | null;
    citas?: Prisma.CitasListRelationFilter;
    documentos_clinicos?: Prisma.Documentos_clinicosListRelationFilter;
    notas_clinicas?: Prisma.Notas_clinicasListRelationFilter;
    pacientes?: Prisma.PacientesListRelationFilter;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
}, "id">;
export type perfilesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre_completo?: Prisma.SortOrder;
    telefono?: Prisma.SortOrderInput | Prisma.SortOrder;
    rol?: Prisma.SortOrder;
    fecha_creacion?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.perfilesCountOrderByAggregateInput;
    _max?: Prisma.perfilesMaxOrderByAggregateInput;
    _min?: Prisma.perfilesMinOrderByAggregateInput;
};
export type perfilesScalarWhereWithAggregatesInput = {
    AND?: Prisma.perfilesScalarWhereWithAggregatesInput | Prisma.perfilesScalarWhereWithAggregatesInput[];
    OR?: Prisma.perfilesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.perfilesScalarWhereWithAggregatesInput | Prisma.perfilesScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"perfiles"> | string;
    nombre_completo?: Prisma.StringWithAggregatesFilter<"perfiles"> | string;
    telefono?: Prisma.StringNullableWithAggregatesFilter<"perfiles"> | string | null;
    rol?: Prisma.Enumuser_roleWithAggregatesFilter<"perfiles"> | $Enums.user_role;
    fecha_creacion?: Prisma.DateTimeNullableWithAggregatesFilter<"perfiles"> | Date | string | null;
};
export type perfilesCreateInput = {
    nombre_completo: string;
    telefono?: string | null;
    rol?: $Enums.user_role;
    fecha_creacion?: Date | string | null;
    citas?: Prisma.citasCreateNestedManyWithoutPerfilesInput;
    documentos_clinicos?: Prisma.documentos_clinicosCreateNestedManyWithoutPerfilesInput;
    notas_clinicas?: Prisma.notas_clinicasCreateNestedManyWithoutPerfilesInput;
    pacientes?: Prisma.pacientesCreateNestedManyWithoutPerfilesInput;
    users: Prisma.usersCreateNestedOneWithoutPerfilesInput;
};
export type perfilesUncheckedCreateInput = {
    id: string;
    nombre_completo: string;
    telefono?: string | null;
    rol?: $Enums.user_role;
    fecha_creacion?: Date | string | null;
    citas?: Prisma.citasUncheckedCreateNestedManyWithoutPerfilesInput;
    documentos_clinicos?: Prisma.documentos_clinicosUncheckedCreateNestedManyWithoutPerfilesInput;
    notas_clinicas?: Prisma.notas_clinicasUncheckedCreateNestedManyWithoutPerfilesInput;
    pacientes?: Prisma.pacientesUncheckedCreateNestedManyWithoutPerfilesInput;
};
export type perfilesUpdateInput = {
    nombre_completo?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rol?: Prisma.Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role;
    fecha_creacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    citas?: Prisma.citasUpdateManyWithoutPerfilesNestedInput;
    documentos_clinicos?: Prisma.documentos_clinicosUpdateManyWithoutPerfilesNestedInput;
    notas_clinicas?: Prisma.notas_clinicasUpdateManyWithoutPerfilesNestedInput;
    pacientes?: Prisma.pacientesUpdateManyWithoutPerfilesNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutPerfilesNestedInput;
};
export type perfilesUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre_completo?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rol?: Prisma.Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role;
    fecha_creacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    citas?: Prisma.citasUncheckedUpdateManyWithoutPerfilesNestedInput;
    documentos_clinicos?: Prisma.documentos_clinicosUncheckedUpdateManyWithoutPerfilesNestedInput;
    notas_clinicas?: Prisma.notas_clinicasUncheckedUpdateManyWithoutPerfilesNestedInput;
    pacientes?: Prisma.pacientesUncheckedUpdateManyWithoutPerfilesNestedInput;
};
export type perfilesCreateManyInput = {
    id: string;
    nombre_completo: string;
    telefono?: string | null;
    rol?: $Enums.user_role;
    fecha_creacion?: Date | string | null;
};
export type perfilesUpdateManyMutationInput = {
    nombre_completo?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rol?: Prisma.Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role;
    fecha_creacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type perfilesUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre_completo?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rol?: Prisma.Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role;
    fecha_creacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PerfilesNullableScalarRelationFilter = {
    is?: Prisma.perfilesWhereInput | null;
    isNot?: Prisma.perfilesWhereInput | null;
};
export type PerfilesScalarRelationFilter = {
    is?: Prisma.perfilesWhereInput;
    isNot?: Prisma.perfilesWhereInput;
};
export type perfilesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre_completo?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    rol?: Prisma.SortOrder;
    fecha_creacion?: Prisma.SortOrder;
};
export type perfilesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre_completo?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    rol?: Prisma.SortOrder;
    fecha_creacion?: Prisma.SortOrder;
};
export type perfilesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre_completo?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    rol?: Prisma.SortOrder;
    fecha_creacion?: Prisma.SortOrder;
};
export type perfilesCreateNestedOneWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.perfilesCreateWithoutUsersInput, Prisma.perfilesUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.perfilesCreateOrConnectWithoutUsersInput;
    connect?: Prisma.perfilesWhereUniqueInput;
};
export type perfilesUncheckedCreateNestedOneWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.perfilesCreateWithoutUsersInput, Prisma.perfilesUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.perfilesCreateOrConnectWithoutUsersInput;
    connect?: Prisma.perfilesWhereUniqueInput;
};
export type perfilesUpdateOneWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.perfilesCreateWithoutUsersInput, Prisma.perfilesUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.perfilesCreateOrConnectWithoutUsersInput;
    upsert?: Prisma.perfilesUpsertWithoutUsersInput;
    disconnect?: Prisma.perfilesWhereInput | boolean;
    delete?: Prisma.perfilesWhereInput | boolean;
    connect?: Prisma.perfilesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.perfilesUpdateToOneWithWhereWithoutUsersInput, Prisma.perfilesUpdateWithoutUsersInput>, Prisma.perfilesUncheckedUpdateWithoutUsersInput>;
};
export type perfilesUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.perfilesCreateWithoutUsersInput, Prisma.perfilesUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.perfilesCreateOrConnectWithoutUsersInput;
    upsert?: Prisma.perfilesUpsertWithoutUsersInput;
    disconnect?: Prisma.perfilesWhereInput | boolean;
    delete?: Prisma.perfilesWhereInput | boolean;
    connect?: Prisma.perfilesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.perfilesUpdateToOneWithWhereWithoutUsersInput, Prisma.perfilesUpdateWithoutUsersInput>, Prisma.perfilesUncheckedUpdateWithoutUsersInput>;
};
export type perfilesCreateNestedOneWithoutCitasInput = {
    create?: Prisma.XOR<Prisma.perfilesCreateWithoutCitasInput, Prisma.perfilesUncheckedCreateWithoutCitasInput>;
    connectOrCreate?: Prisma.perfilesCreateOrConnectWithoutCitasInput;
    connect?: Prisma.perfilesWhereUniqueInput;
};
export type perfilesUpdateOneRequiredWithoutCitasNestedInput = {
    create?: Prisma.XOR<Prisma.perfilesCreateWithoutCitasInput, Prisma.perfilesUncheckedCreateWithoutCitasInput>;
    connectOrCreate?: Prisma.perfilesCreateOrConnectWithoutCitasInput;
    upsert?: Prisma.perfilesUpsertWithoutCitasInput;
    connect?: Prisma.perfilesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.perfilesUpdateToOneWithWhereWithoutCitasInput, Prisma.perfilesUpdateWithoutCitasInput>, Prisma.perfilesUncheckedUpdateWithoutCitasInput>;
};
export type perfilesCreateNestedOneWithoutDocumentos_clinicosInput = {
    create?: Prisma.XOR<Prisma.perfilesCreateWithoutDocumentos_clinicosInput, Prisma.perfilesUncheckedCreateWithoutDocumentos_clinicosInput>;
    connectOrCreate?: Prisma.perfilesCreateOrConnectWithoutDocumentos_clinicosInput;
    connect?: Prisma.perfilesWhereUniqueInput;
};
export type perfilesUpdateOneWithoutDocumentos_clinicosNestedInput = {
    create?: Prisma.XOR<Prisma.perfilesCreateWithoutDocumentos_clinicosInput, Prisma.perfilesUncheckedCreateWithoutDocumentos_clinicosInput>;
    connectOrCreate?: Prisma.perfilesCreateOrConnectWithoutDocumentos_clinicosInput;
    upsert?: Prisma.perfilesUpsertWithoutDocumentos_clinicosInput;
    disconnect?: Prisma.perfilesWhereInput | boolean;
    delete?: Prisma.perfilesWhereInput | boolean;
    connect?: Prisma.perfilesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.perfilesUpdateToOneWithWhereWithoutDocumentos_clinicosInput, Prisma.perfilesUpdateWithoutDocumentos_clinicosInput>, Prisma.perfilesUncheckedUpdateWithoutDocumentos_clinicosInput>;
};
export type perfilesCreateNestedOneWithoutNotas_clinicasInput = {
    create?: Prisma.XOR<Prisma.perfilesCreateWithoutNotas_clinicasInput, Prisma.perfilesUncheckedCreateWithoutNotas_clinicasInput>;
    connectOrCreate?: Prisma.perfilesCreateOrConnectWithoutNotas_clinicasInput;
    connect?: Prisma.perfilesWhereUniqueInput;
};
export type perfilesUpdateOneRequiredWithoutNotas_clinicasNestedInput = {
    create?: Prisma.XOR<Prisma.perfilesCreateWithoutNotas_clinicasInput, Prisma.perfilesUncheckedCreateWithoutNotas_clinicasInput>;
    connectOrCreate?: Prisma.perfilesCreateOrConnectWithoutNotas_clinicasInput;
    upsert?: Prisma.perfilesUpsertWithoutNotas_clinicasInput;
    connect?: Prisma.perfilesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.perfilesUpdateToOneWithWhereWithoutNotas_clinicasInput, Prisma.perfilesUpdateWithoutNotas_clinicasInput>, Prisma.perfilesUncheckedUpdateWithoutNotas_clinicasInput>;
};
export type perfilesCreateNestedOneWithoutPacientesInput = {
    create?: Prisma.XOR<Prisma.perfilesCreateWithoutPacientesInput, Prisma.perfilesUncheckedCreateWithoutPacientesInput>;
    connectOrCreate?: Prisma.perfilesCreateOrConnectWithoutPacientesInput;
    connect?: Prisma.perfilesWhereUniqueInput;
};
export type perfilesUpdateOneWithoutPacientesNestedInput = {
    create?: Prisma.XOR<Prisma.perfilesCreateWithoutPacientesInput, Prisma.perfilesUncheckedCreateWithoutPacientesInput>;
    connectOrCreate?: Prisma.perfilesCreateOrConnectWithoutPacientesInput;
    upsert?: Prisma.perfilesUpsertWithoutPacientesInput;
    disconnect?: Prisma.perfilesWhereInput | boolean;
    delete?: Prisma.perfilesWhereInput | boolean;
    connect?: Prisma.perfilesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.perfilesUpdateToOneWithWhereWithoutPacientesInput, Prisma.perfilesUpdateWithoutPacientesInput>, Prisma.perfilesUncheckedUpdateWithoutPacientesInput>;
};
export type Enumuser_roleFieldUpdateOperationsInput = {
    set?: $Enums.user_role;
};
export type perfilesCreateWithoutUsersInput = {
    nombre_completo: string;
    telefono?: string | null;
    rol?: $Enums.user_role;
    fecha_creacion?: Date | string | null;
    citas?: Prisma.citasCreateNestedManyWithoutPerfilesInput;
    documentos_clinicos?: Prisma.documentos_clinicosCreateNestedManyWithoutPerfilesInput;
    notas_clinicas?: Prisma.notas_clinicasCreateNestedManyWithoutPerfilesInput;
    pacientes?: Prisma.pacientesCreateNestedManyWithoutPerfilesInput;
};
export type perfilesUncheckedCreateWithoutUsersInput = {
    nombre_completo: string;
    telefono?: string | null;
    rol?: $Enums.user_role;
    fecha_creacion?: Date | string | null;
    citas?: Prisma.citasUncheckedCreateNestedManyWithoutPerfilesInput;
    documentos_clinicos?: Prisma.documentos_clinicosUncheckedCreateNestedManyWithoutPerfilesInput;
    notas_clinicas?: Prisma.notas_clinicasUncheckedCreateNestedManyWithoutPerfilesInput;
    pacientes?: Prisma.pacientesUncheckedCreateNestedManyWithoutPerfilesInput;
};
export type perfilesCreateOrConnectWithoutUsersInput = {
    where: Prisma.perfilesWhereUniqueInput;
    create: Prisma.XOR<Prisma.perfilesCreateWithoutUsersInput, Prisma.perfilesUncheckedCreateWithoutUsersInput>;
};
export type perfilesUpsertWithoutUsersInput = {
    update: Prisma.XOR<Prisma.perfilesUpdateWithoutUsersInput, Prisma.perfilesUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.perfilesCreateWithoutUsersInput, Prisma.perfilesUncheckedCreateWithoutUsersInput>;
    where?: Prisma.perfilesWhereInput;
};
export type perfilesUpdateToOneWithWhereWithoutUsersInput = {
    where?: Prisma.perfilesWhereInput;
    data: Prisma.XOR<Prisma.perfilesUpdateWithoutUsersInput, Prisma.perfilesUncheckedUpdateWithoutUsersInput>;
};
export type perfilesUpdateWithoutUsersInput = {
    nombre_completo?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rol?: Prisma.Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role;
    fecha_creacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    citas?: Prisma.citasUpdateManyWithoutPerfilesNestedInput;
    documentos_clinicos?: Prisma.documentos_clinicosUpdateManyWithoutPerfilesNestedInput;
    notas_clinicas?: Prisma.notas_clinicasUpdateManyWithoutPerfilesNestedInput;
    pacientes?: Prisma.pacientesUpdateManyWithoutPerfilesNestedInput;
};
export type perfilesUncheckedUpdateWithoutUsersInput = {
    nombre_completo?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rol?: Prisma.Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role;
    fecha_creacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    citas?: Prisma.citasUncheckedUpdateManyWithoutPerfilesNestedInput;
    documentos_clinicos?: Prisma.documentos_clinicosUncheckedUpdateManyWithoutPerfilesNestedInput;
    notas_clinicas?: Prisma.notas_clinicasUncheckedUpdateManyWithoutPerfilesNestedInput;
    pacientes?: Prisma.pacientesUncheckedUpdateManyWithoutPerfilesNestedInput;
};
export type perfilesCreateWithoutCitasInput = {
    nombre_completo: string;
    telefono?: string | null;
    rol?: $Enums.user_role;
    fecha_creacion?: Date | string | null;
    documentos_clinicos?: Prisma.documentos_clinicosCreateNestedManyWithoutPerfilesInput;
    notas_clinicas?: Prisma.notas_clinicasCreateNestedManyWithoutPerfilesInput;
    pacientes?: Prisma.pacientesCreateNestedManyWithoutPerfilesInput;
    users: Prisma.usersCreateNestedOneWithoutPerfilesInput;
};
export type perfilesUncheckedCreateWithoutCitasInput = {
    id: string;
    nombre_completo: string;
    telefono?: string | null;
    rol?: $Enums.user_role;
    fecha_creacion?: Date | string | null;
    documentos_clinicos?: Prisma.documentos_clinicosUncheckedCreateNestedManyWithoutPerfilesInput;
    notas_clinicas?: Prisma.notas_clinicasUncheckedCreateNestedManyWithoutPerfilesInput;
    pacientes?: Prisma.pacientesUncheckedCreateNestedManyWithoutPerfilesInput;
};
export type perfilesCreateOrConnectWithoutCitasInput = {
    where: Prisma.perfilesWhereUniqueInput;
    create: Prisma.XOR<Prisma.perfilesCreateWithoutCitasInput, Prisma.perfilesUncheckedCreateWithoutCitasInput>;
};
export type perfilesUpsertWithoutCitasInput = {
    update: Prisma.XOR<Prisma.perfilesUpdateWithoutCitasInput, Prisma.perfilesUncheckedUpdateWithoutCitasInput>;
    create: Prisma.XOR<Prisma.perfilesCreateWithoutCitasInput, Prisma.perfilesUncheckedCreateWithoutCitasInput>;
    where?: Prisma.perfilesWhereInput;
};
export type perfilesUpdateToOneWithWhereWithoutCitasInput = {
    where?: Prisma.perfilesWhereInput;
    data: Prisma.XOR<Prisma.perfilesUpdateWithoutCitasInput, Prisma.perfilesUncheckedUpdateWithoutCitasInput>;
};
export type perfilesUpdateWithoutCitasInput = {
    nombre_completo?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rol?: Prisma.Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role;
    fecha_creacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    documentos_clinicos?: Prisma.documentos_clinicosUpdateManyWithoutPerfilesNestedInput;
    notas_clinicas?: Prisma.notas_clinicasUpdateManyWithoutPerfilesNestedInput;
    pacientes?: Prisma.pacientesUpdateManyWithoutPerfilesNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutPerfilesNestedInput;
};
export type perfilesUncheckedUpdateWithoutCitasInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre_completo?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rol?: Prisma.Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role;
    fecha_creacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    documentos_clinicos?: Prisma.documentos_clinicosUncheckedUpdateManyWithoutPerfilesNestedInput;
    notas_clinicas?: Prisma.notas_clinicasUncheckedUpdateManyWithoutPerfilesNestedInput;
    pacientes?: Prisma.pacientesUncheckedUpdateManyWithoutPerfilesNestedInput;
};
export type perfilesCreateWithoutDocumentos_clinicosInput = {
    nombre_completo: string;
    telefono?: string | null;
    rol?: $Enums.user_role;
    fecha_creacion?: Date | string | null;
    citas?: Prisma.citasCreateNestedManyWithoutPerfilesInput;
    notas_clinicas?: Prisma.notas_clinicasCreateNestedManyWithoutPerfilesInput;
    pacientes?: Prisma.pacientesCreateNestedManyWithoutPerfilesInput;
    users: Prisma.usersCreateNestedOneWithoutPerfilesInput;
};
export type perfilesUncheckedCreateWithoutDocumentos_clinicosInput = {
    id: string;
    nombre_completo: string;
    telefono?: string | null;
    rol?: $Enums.user_role;
    fecha_creacion?: Date | string | null;
    citas?: Prisma.citasUncheckedCreateNestedManyWithoutPerfilesInput;
    notas_clinicas?: Prisma.notas_clinicasUncheckedCreateNestedManyWithoutPerfilesInput;
    pacientes?: Prisma.pacientesUncheckedCreateNestedManyWithoutPerfilesInput;
};
export type perfilesCreateOrConnectWithoutDocumentos_clinicosInput = {
    where: Prisma.perfilesWhereUniqueInput;
    create: Prisma.XOR<Prisma.perfilesCreateWithoutDocumentos_clinicosInput, Prisma.perfilesUncheckedCreateWithoutDocumentos_clinicosInput>;
};
export type perfilesUpsertWithoutDocumentos_clinicosInput = {
    update: Prisma.XOR<Prisma.perfilesUpdateWithoutDocumentos_clinicosInput, Prisma.perfilesUncheckedUpdateWithoutDocumentos_clinicosInput>;
    create: Prisma.XOR<Prisma.perfilesCreateWithoutDocumentos_clinicosInput, Prisma.perfilesUncheckedCreateWithoutDocumentos_clinicosInput>;
    where?: Prisma.perfilesWhereInput;
};
export type perfilesUpdateToOneWithWhereWithoutDocumentos_clinicosInput = {
    where?: Prisma.perfilesWhereInput;
    data: Prisma.XOR<Prisma.perfilesUpdateWithoutDocumentos_clinicosInput, Prisma.perfilesUncheckedUpdateWithoutDocumentos_clinicosInput>;
};
export type perfilesUpdateWithoutDocumentos_clinicosInput = {
    nombre_completo?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rol?: Prisma.Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role;
    fecha_creacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    citas?: Prisma.citasUpdateManyWithoutPerfilesNestedInput;
    notas_clinicas?: Prisma.notas_clinicasUpdateManyWithoutPerfilesNestedInput;
    pacientes?: Prisma.pacientesUpdateManyWithoutPerfilesNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutPerfilesNestedInput;
};
export type perfilesUncheckedUpdateWithoutDocumentos_clinicosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre_completo?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rol?: Prisma.Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role;
    fecha_creacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    citas?: Prisma.citasUncheckedUpdateManyWithoutPerfilesNestedInput;
    notas_clinicas?: Prisma.notas_clinicasUncheckedUpdateManyWithoutPerfilesNestedInput;
    pacientes?: Prisma.pacientesUncheckedUpdateManyWithoutPerfilesNestedInput;
};
export type perfilesCreateWithoutNotas_clinicasInput = {
    nombre_completo: string;
    telefono?: string | null;
    rol?: $Enums.user_role;
    fecha_creacion?: Date | string | null;
    citas?: Prisma.citasCreateNestedManyWithoutPerfilesInput;
    documentos_clinicos?: Prisma.documentos_clinicosCreateNestedManyWithoutPerfilesInput;
    pacientes?: Prisma.pacientesCreateNestedManyWithoutPerfilesInput;
    users: Prisma.usersCreateNestedOneWithoutPerfilesInput;
};
export type perfilesUncheckedCreateWithoutNotas_clinicasInput = {
    id: string;
    nombre_completo: string;
    telefono?: string | null;
    rol?: $Enums.user_role;
    fecha_creacion?: Date | string | null;
    citas?: Prisma.citasUncheckedCreateNestedManyWithoutPerfilesInput;
    documentos_clinicos?: Prisma.documentos_clinicosUncheckedCreateNestedManyWithoutPerfilesInput;
    pacientes?: Prisma.pacientesUncheckedCreateNestedManyWithoutPerfilesInput;
};
export type perfilesCreateOrConnectWithoutNotas_clinicasInput = {
    where: Prisma.perfilesWhereUniqueInput;
    create: Prisma.XOR<Prisma.perfilesCreateWithoutNotas_clinicasInput, Prisma.perfilesUncheckedCreateWithoutNotas_clinicasInput>;
};
export type perfilesUpsertWithoutNotas_clinicasInput = {
    update: Prisma.XOR<Prisma.perfilesUpdateWithoutNotas_clinicasInput, Prisma.perfilesUncheckedUpdateWithoutNotas_clinicasInput>;
    create: Prisma.XOR<Prisma.perfilesCreateWithoutNotas_clinicasInput, Prisma.perfilesUncheckedCreateWithoutNotas_clinicasInput>;
    where?: Prisma.perfilesWhereInput;
};
export type perfilesUpdateToOneWithWhereWithoutNotas_clinicasInput = {
    where?: Prisma.perfilesWhereInput;
    data: Prisma.XOR<Prisma.perfilesUpdateWithoutNotas_clinicasInput, Prisma.perfilesUncheckedUpdateWithoutNotas_clinicasInput>;
};
export type perfilesUpdateWithoutNotas_clinicasInput = {
    nombre_completo?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rol?: Prisma.Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role;
    fecha_creacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    citas?: Prisma.citasUpdateManyWithoutPerfilesNestedInput;
    documentos_clinicos?: Prisma.documentos_clinicosUpdateManyWithoutPerfilesNestedInput;
    pacientes?: Prisma.pacientesUpdateManyWithoutPerfilesNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutPerfilesNestedInput;
};
export type perfilesUncheckedUpdateWithoutNotas_clinicasInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre_completo?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rol?: Prisma.Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role;
    fecha_creacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    citas?: Prisma.citasUncheckedUpdateManyWithoutPerfilesNestedInput;
    documentos_clinicos?: Prisma.documentos_clinicosUncheckedUpdateManyWithoutPerfilesNestedInput;
    pacientes?: Prisma.pacientesUncheckedUpdateManyWithoutPerfilesNestedInput;
};
export type perfilesCreateWithoutPacientesInput = {
    nombre_completo: string;
    telefono?: string | null;
    rol?: $Enums.user_role;
    fecha_creacion?: Date | string | null;
    citas?: Prisma.citasCreateNestedManyWithoutPerfilesInput;
    documentos_clinicos?: Prisma.documentos_clinicosCreateNestedManyWithoutPerfilesInput;
    notas_clinicas?: Prisma.notas_clinicasCreateNestedManyWithoutPerfilesInput;
    users: Prisma.usersCreateNestedOneWithoutPerfilesInput;
};
export type perfilesUncheckedCreateWithoutPacientesInput = {
    id: string;
    nombre_completo: string;
    telefono?: string | null;
    rol?: $Enums.user_role;
    fecha_creacion?: Date | string | null;
    citas?: Prisma.citasUncheckedCreateNestedManyWithoutPerfilesInput;
    documentos_clinicos?: Prisma.documentos_clinicosUncheckedCreateNestedManyWithoutPerfilesInput;
    notas_clinicas?: Prisma.notas_clinicasUncheckedCreateNestedManyWithoutPerfilesInput;
};
export type perfilesCreateOrConnectWithoutPacientesInput = {
    where: Prisma.perfilesWhereUniqueInput;
    create: Prisma.XOR<Prisma.perfilesCreateWithoutPacientesInput, Prisma.perfilesUncheckedCreateWithoutPacientesInput>;
};
export type perfilesUpsertWithoutPacientesInput = {
    update: Prisma.XOR<Prisma.perfilesUpdateWithoutPacientesInput, Prisma.perfilesUncheckedUpdateWithoutPacientesInput>;
    create: Prisma.XOR<Prisma.perfilesCreateWithoutPacientesInput, Prisma.perfilesUncheckedCreateWithoutPacientesInput>;
    where?: Prisma.perfilesWhereInput;
};
export type perfilesUpdateToOneWithWhereWithoutPacientesInput = {
    where?: Prisma.perfilesWhereInput;
    data: Prisma.XOR<Prisma.perfilesUpdateWithoutPacientesInput, Prisma.perfilesUncheckedUpdateWithoutPacientesInput>;
};
export type perfilesUpdateWithoutPacientesInput = {
    nombre_completo?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rol?: Prisma.Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role;
    fecha_creacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    citas?: Prisma.citasUpdateManyWithoutPerfilesNestedInput;
    documentos_clinicos?: Prisma.documentos_clinicosUpdateManyWithoutPerfilesNestedInput;
    notas_clinicas?: Prisma.notas_clinicasUpdateManyWithoutPerfilesNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutPerfilesNestedInput;
};
export type perfilesUncheckedUpdateWithoutPacientesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre_completo?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rol?: Prisma.Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role;
    fecha_creacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    citas?: Prisma.citasUncheckedUpdateManyWithoutPerfilesNestedInput;
    documentos_clinicos?: Prisma.documentos_clinicosUncheckedUpdateManyWithoutPerfilesNestedInput;
    notas_clinicas?: Prisma.notas_clinicasUncheckedUpdateManyWithoutPerfilesNestedInput;
};
export type PerfilesCountOutputType = {
    citas: number;
    documentos_clinicos: number;
    notas_clinicas: number;
    pacientes: number;
};
export type PerfilesCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    citas?: boolean | PerfilesCountOutputTypeCountCitasArgs;
    documentos_clinicos?: boolean | PerfilesCountOutputTypeCountDocumentos_clinicosArgs;
    notas_clinicas?: boolean | PerfilesCountOutputTypeCountNotas_clinicasArgs;
    pacientes?: boolean | PerfilesCountOutputTypeCountPacientesArgs;
};
export type PerfilesCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerfilesCountOutputTypeSelect<ExtArgs> | null;
};
export type PerfilesCountOutputTypeCountCitasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.citasWhereInput;
};
export type PerfilesCountOutputTypeCountDocumentos_clinicosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.documentos_clinicosWhereInput;
};
export type PerfilesCountOutputTypeCountNotas_clinicasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.notas_clinicasWhereInput;
};
export type PerfilesCountOutputTypeCountPacientesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.pacientesWhereInput;
};
export type perfilesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre_completo?: boolean;
    telefono?: boolean;
    rol?: boolean;
    fecha_creacion?: boolean;
    citas?: boolean | Prisma.perfiles$citasArgs<ExtArgs>;
    documentos_clinicos?: boolean | Prisma.perfiles$documentos_clinicosArgs<ExtArgs>;
    notas_clinicas?: boolean | Prisma.perfiles$notas_clinicasArgs<ExtArgs>;
    pacientes?: boolean | Prisma.perfiles$pacientesArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.PerfilesCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["perfiles"]>;
export type perfilesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre_completo?: boolean;
    telefono?: boolean;
    rol?: boolean;
    fecha_creacion?: boolean;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["perfiles"]>;
export type perfilesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre_completo?: boolean;
    telefono?: boolean;
    rol?: boolean;
    fecha_creacion?: boolean;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["perfiles"]>;
export type perfilesSelectScalar = {
    id?: boolean;
    nombre_completo?: boolean;
    telefono?: boolean;
    rol?: boolean;
    fecha_creacion?: boolean;
};
export type perfilesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre_completo" | "telefono" | "rol" | "fecha_creacion", ExtArgs["result"]["perfiles"]>;
export type perfilesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    citas?: boolean | Prisma.perfiles$citasArgs<ExtArgs>;
    documentos_clinicos?: boolean | Prisma.perfiles$documentos_clinicosArgs<ExtArgs>;
    notas_clinicas?: boolean | Prisma.perfiles$notas_clinicasArgs<ExtArgs>;
    pacientes?: boolean | Prisma.perfiles$pacientesArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.PerfilesCountOutputTypeDefaultArgs<ExtArgs>;
};
export type perfilesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type perfilesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type $perfilesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "perfiles";
    objects: {
        citas: Prisma.$citasPayload<ExtArgs>[];
        documentos_clinicos: Prisma.$documentos_clinicosPayload<ExtArgs>[];
        notas_clinicas: Prisma.$notas_clinicasPayload<ExtArgs>[];
        pacientes: Prisma.$pacientesPayload<ExtArgs>[];
        users: Prisma.$usersPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        nombre_completo: string;
        telefono: string | null;
        rol: $Enums.user_role;
        fecha_creacion: Date | null;
    }, ExtArgs["result"]["perfiles"]>;
    composites: {};
};
export type perfilesGetPayload<S extends boolean | null | undefined | perfilesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$perfilesPayload, S>;
export type perfilesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<perfilesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PerfilesCountAggregateInputType | true;
};
export interface perfilesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['perfiles'];
        meta: {
            name: 'perfiles';
        };
    };
    findUnique<T extends perfilesFindUniqueArgs>(args: Prisma.SelectSubset<T, perfilesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__perfilesClient<runtime.Types.Result.GetResult<Prisma.$perfilesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends perfilesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, perfilesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__perfilesClient<runtime.Types.Result.GetResult<Prisma.$perfilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends perfilesFindFirstArgs>(args?: Prisma.SelectSubset<T, perfilesFindFirstArgs<ExtArgs>>): Prisma.Prisma__perfilesClient<runtime.Types.Result.GetResult<Prisma.$perfilesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends perfilesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, perfilesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__perfilesClient<runtime.Types.Result.GetResult<Prisma.$perfilesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends perfilesFindManyArgs>(args?: Prisma.SelectSubset<T, perfilesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$perfilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends perfilesCreateArgs>(args: Prisma.SelectSubset<T, perfilesCreateArgs<ExtArgs>>): Prisma.Prisma__perfilesClient<runtime.Types.Result.GetResult<Prisma.$perfilesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends perfilesCreateManyArgs>(args?: Prisma.SelectSubset<T, perfilesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends perfilesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, perfilesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$perfilesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends perfilesDeleteArgs>(args: Prisma.SelectSubset<T, perfilesDeleteArgs<ExtArgs>>): Prisma.Prisma__perfilesClient<runtime.Types.Result.GetResult<Prisma.$perfilesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends perfilesUpdateArgs>(args: Prisma.SelectSubset<T, perfilesUpdateArgs<ExtArgs>>): Prisma.Prisma__perfilesClient<runtime.Types.Result.GetResult<Prisma.$perfilesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends perfilesDeleteManyArgs>(args?: Prisma.SelectSubset<T, perfilesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends perfilesUpdateManyArgs>(args: Prisma.SelectSubset<T, perfilesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends perfilesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, perfilesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$perfilesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends perfilesUpsertArgs>(args: Prisma.SelectSubset<T, perfilesUpsertArgs<ExtArgs>>): Prisma.Prisma__perfilesClient<runtime.Types.Result.GetResult<Prisma.$perfilesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends perfilesCountArgs>(args?: Prisma.Subset<T, perfilesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PerfilesCountAggregateOutputType> : number>;
    aggregate<T extends PerfilesAggregateArgs>(args: Prisma.Subset<T, PerfilesAggregateArgs>): Prisma.PrismaPromise<GetPerfilesAggregateType<T>>;
    groupBy<T extends perfilesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: perfilesGroupByArgs['orderBy'];
    } : {
        orderBy?: perfilesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, perfilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPerfilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: perfilesFieldRefs;
}
export interface Prisma__perfilesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    citas<T extends Prisma.perfiles$citasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.perfiles$citasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$citasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    documentos_clinicos<T extends Prisma.perfiles$documentos_clinicosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.perfiles$documentos_clinicosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$documentos_clinicosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    notas_clinicas<T extends Prisma.perfiles$notas_clinicasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.perfiles$notas_clinicasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$notas_clinicasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    pacientes<T extends Prisma.perfiles$pacientesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.perfiles$pacientesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    users<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface perfilesFieldRefs {
    readonly id: Prisma.FieldRef<"perfiles", 'String'>;
    readonly nombre_completo: Prisma.FieldRef<"perfiles", 'String'>;
    readonly telefono: Prisma.FieldRef<"perfiles", 'String'>;
    readonly rol: Prisma.FieldRef<"perfiles", 'user_role'>;
    readonly fecha_creacion: Prisma.FieldRef<"perfiles", 'DateTime'>;
}
export type perfilesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.perfilesSelect<ExtArgs> | null;
    omit?: Prisma.perfilesOmit<ExtArgs> | null;
    include?: Prisma.perfilesInclude<ExtArgs> | null;
    where: Prisma.perfilesWhereUniqueInput;
};
export type perfilesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.perfilesSelect<ExtArgs> | null;
    omit?: Prisma.perfilesOmit<ExtArgs> | null;
    include?: Prisma.perfilesInclude<ExtArgs> | null;
    where: Prisma.perfilesWhereUniqueInput;
};
export type perfilesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.perfilesSelect<ExtArgs> | null;
    omit?: Prisma.perfilesOmit<ExtArgs> | null;
    include?: Prisma.perfilesInclude<ExtArgs> | null;
    where?: Prisma.perfilesWhereInput;
    orderBy?: Prisma.perfilesOrderByWithRelationInput | Prisma.perfilesOrderByWithRelationInput[];
    cursor?: Prisma.perfilesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PerfilesScalarFieldEnum | Prisma.PerfilesScalarFieldEnum[];
};
export type perfilesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.perfilesSelect<ExtArgs> | null;
    omit?: Prisma.perfilesOmit<ExtArgs> | null;
    include?: Prisma.perfilesInclude<ExtArgs> | null;
    where?: Prisma.perfilesWhereInput;
    orderBy?: Prisma.perfilesOrderByWithRelationInput | Prisma.perfilesOrderByWithRelationInput[];
    cursor?: Prisma.perfilesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PerfilesScalarFieldEnum | Prisma.PerfilesScalarFieldEnum[];
};
export type perfilesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.perfilesSelect<ExtArgs> | null;
    omit?: Prisma.perfilesOmit<ExtArgs> | null;
    include?: Prisma.perfilesInclude<ExtArgs> | null;
    where?: Prisma.perfilesWhereInput;
    orderBy?: Prisma.perfilesOrderByWithRelationInput | Prisma.perfilesOrderByWithRelationInput[];
    cursor?: Prisma.perfilesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PerfilesScalarFieldEnum | Prisma.PerfilesScalarFieldEnum[];
};
export type perfilesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.perfilesSelect<ExtArgs> | null;
    omit?: Prisma.perfilesOmit<ExtArgs> | null;
    include?: Prisma.perfilesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.perfilesCreateInput, Prisma.perfilesUncheckedCreateInput>;
};
export type perfilesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.perfilesCreateManyInput | Prisma.perfilesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type perfilesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.perfilesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.perfilesOmit<ExtArgs> | null;
    data: Prisma.perfilesCreateManyInput | Prisma.perfilesCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.perfilesIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type perfilesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.perfilesSelect<ExtArgs> | null;
    omit?: Prisma.perfilesOmit<ExtArgs> | null;
    include?: Prisma.perfilesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.perfilesUpdateInput, Prisma.perfilesUncheckedUpdateInput>;
    where: Prisma.perfilesWhereUniqueInput;
};
export type perfilesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.perfilesUpdateManyMutationInput, Prisma.perfilesUncheckedUpdateManyInput>;
    where?: Prisma.perfilesWhereInput;
    limit?: number;
};
export type perfilesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.perfilesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.perfilesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.perfilesUpdateManyMutationInput, Prisma.perfilesUncheckedUpdateManyInput>;
    where?: Prisma.perfilesWhereInput;
    limit?: number;
    include?: Prisma.perfilesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type perfilesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.perfilesSelect<ExtArgs> | null;
    omit?: Prisma.perfilesOmit<ExtArgs> | null;
    include?: Prisma.perfilesInclude<ExtArgs> | null;
    where: Prisma.perfilesWhereUniqueInput;
    create: Prisma.XOR<Prisma.perfilesCreateInput, Prisma.perfilesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.perfilesUpdateInput, Prisma.perfilesUncheckedUpdateInput>;
};
export type perfilesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.perfilesSelect<ExtArgs> | null;
    omit?: Prisma.perfilesOmit<ExtArgs> | null;
    include?: Prisma.perfilesInclude<ExtArgs> | null;
    where: Prisma.perfilesWhereUniqueInput;
};
export type perfilesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.perfilesWhereInput;
    limit?: number;
};
export type perfiles$citasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type perfiles$documentos_clinicosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type perfiles$notas_clinicasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type perfiles$pacientesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type perfilesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.perfilesSelect<ExtArgs> | null;
    omit?: Prisma.perfilesOmit<ExtArgs> | null;
    include?: Prisma.perfilesInclude<ExtArgs> | null;
};
