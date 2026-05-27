import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type documentos_clinicosModel = runtime.Types.Result.DefaultSelection<Prisma.$documentos_clinicosPayload>;
export type AggregateDocumentos_clinicos = {
    _count: Documentos_clinicosCountAggregateOutputType | null;
    _avg: Documentos_clinicosAvgAggregateOutputType | null;
    _sum: Documentos_clinicosSumAggregateOutputType | null;
    _min: Documentos_clinicosMinAggregateOutputType | null;
    _max: Documentos_clinicosMaxAggregateOutputType | null;
};
export type Documentos_clinicosAvgAggregateOutputType = {
    id: number | null;
    paciente_id: number | null;
};
export type Documentos_clinicosSumAggregateOutputType = {
    id: number | null;
    paciente_id: number | null;
};
export type Documentos_clinicosMinAggregateOutputType = {
    id: number | null;
    paciente_id: number | null;
    subido_por: string | null;
    nombre_archivo: string | null;
    tipo_documento: string | null;
    archivo_url: string | null;
    fecha_subida: Date | null;
};
export type Documentos_clinicosMaxAggregateOutputType = {
    id: number | null;
    paciente_id: number | null;
    subido_por: string | null;
    nombre_archivo: string | null;
    tipo_documento: string | null;
    archivo_url: string | null;
    fecha_subida: Date | null;
};
export type Documentos_clinicosCountAggregateOutputType = {
    id: number;
    paciente_id: number;
    subido_por: number;
    nombre_archivo: number;
    tipo_documento: number;
    archivo_url: number;
    fecha_subida: number;
    _all: number;
};
export type Documentos_clinicosAvgAggregateInputType = {
    id?: true;
    paciente_id?: true;
};
export type Documentos_clinicosSumAggregateInputType = {
    id?: true;
    paciente_id?: true;
};
export type Documentos_clinicosMinAggregateInputType = {
    id?: true;
    paciente_id?: true;
    subido_por?: true;
    nombre_archivo?: true;
    tipo_documento?: true;
    archivo_url?: true;
    fecha_subida?: true;
};
export type Documentos_clinicosMaxAggregateInputType = {
    id?: true;
    paciente_id?: true;
    subido_por?: true;
    nombre_archivo?: true;
    tipo_documento?: true;
    archivo_url?: true;
    fecha_subida?: true;
};
export type Documentos_clinicosCountAggregateInputType = {
    id?: true;
    paciente_id?: true;
    subido_por?: true;
    nombre_archivo?: true;
    tipo_documento?: true;
    archivo_url?: true;
    fecha_subida?: true;
    _all?: true;
};
export type Documentos_clinicosAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.documentos_clinicosWhereInput;
    orderBy?: Prisma.documentos_clinicosOrderByWithRelationInput | Prisma.documentos_clinicosOrderByWithRelationInput[];
    cursor?: Prisma.documentos_clinicosWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Documentos_clinicosCountAggregateInputType;
    _avg?: Documentos_clinicosAvgAggregateInputType;
    _sum?: Documentos_clinicosSumAggregateInputType;
    _min?: Documentos_clinicosMinAggregateInputType;
    _max?: Documentos_clinicosMaxAggregateInputType;
};
export type GetDocumentos_clinicosAggregateType<T extends Documentos_clinicosAggregateArgs> = {
    [P in keyof T & keyof AggregateDocumentos_clinicos]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDocumentos_clinicos[P]> : Prisma.GetScalarType<T[P], AggregateDocumentos_clinicos[P]>;
};
export type documentos_clinicosGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.documentos_clinicosWhereInput;
    orderBy?: Prisma.documentos_clinicosOrderByWithAggregationInput | Prisma.documentos_clinicosOrderByWithAggregationInput[];
    by: Prisma.Documentos_clinicosScalarFieldEnum[] | Prisma.Documentos_clinicosScalarFieldEnum;
    having?: Prisma.documentos_clinicosScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Documentos_clinicosCountAggregateInputType | true;
    _avg?: Documentos_clinicosAvgAggregateInputType;
    _sum?: Documentos_clinicosSumAggregateInputType;
    _min?: Documentos_clinicosMinAggregateInputType;
    _max?: Documentos_clinicosMaxAggregateInputType;
};
export type Documentos_clinicosGroupByOutputType = {
    id: number;
    paciente_id: number;
    subido_por: string | null;
    nombre_archivo: string;
    tipo_documento: string | null;
    archivo_url: string;
    fecha_subida: Date | null;
    _count: Documentos_clinicosCountAggregateOutputType | null;
    _avg: Documentos_clinicosAvgAggregateOutputType | null;
    _sum: Documentos_clinicosSumAggregateOutputType | null;
    _min: Documentos_clinicosMinAggregateOutputType | null;
    _max: Documentos_clinicosMaxAggregateOutputType | null;
};
export type GetDocumentos_clinicosGroupByPayload<T extends documentos_clinicosGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Documentos_clinicosGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Documentos_clinicosGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Documentos_clinicosGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Documentos_clinicosGroupByOutputType[P]>;
}>>;
export type documentos_clinicosWhereInput = {
    AND?: Prisma.documentos_clinicosWhereInput | Prisma.documentos_clinicosWhereInput[];
    OR?: Prisma.documentos_clinicosWhereInput[];
    NOT?: Prisma.documentos_clinicosWhereInput | Prisma.documentos_clinicosWhereInput[];
    id?: Prisma.IntFilter<"documentos_clinicos"> | number;
    paciente_id?: Prisma.IntFilter<"documentos_clinicos"> | number;
    subido_por?: Prisma.UuidNullableFilter<"documentos_clinicos"> | string | null;
    nombre_archivo?: Prisma.StringFilter<"documentos_clinicos"> | string;
    tipo_documento?: Prisma.StringNullableFilter<"documentos_clinicos"> | string | null;
    archivo_url?: Prisma.StringFilter<"documentos_clinicos"> | string;
    fecha_subida?: Prisma.DateTimeNullableFilter<"documentos_clinicos"> | Date | string | null;
    pacientes?: Prisma.XOR<Prisma.PacientesScalarRelationFilter, Prisma.pacientesWhereInput>;
    perfiles?: Prisma.XOR<Prisma.PerfilesNullableScalarRelationFilter, Prisma.perfilesWhereInput> | null;
};
export type documentos_clinicosOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    paciente_id?: Prisma.SortOrder;
    subido_por?: Prisma.SortOrderInput | Prisma.SortOrder;
    nombre_archivo?: Prisma.SortOrder;
    tipo_documento?: Prisma.SortOrderInput | Prisma.SortOrder;
    archivo_url?: Prisma.SortOrder;
    fecha_subida?: Prisma.SortOrderInput | Prisma.SortOrder;
    pacientes?: Prisma.pacientesOrderByWithRelationInput;
    perfiles?: Prisma.perfilesOrderByWithRelationInput;
};
export type documentos_clinicosWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.documentos_clinicosWhereInput | Prisma.documentos_clinicosWhereInput[];
    OR?: Prisma.documentos_clinicosWhereInput[];
    NOT?: Prisma.documentos_clinicosWhereInput | Prisma.documentos_clinicosWhereInput[];
    paciente_id?: Prisma.IntFilter<"documentos_clinicos"> | number;
    subido_por?: Prisma.UuidNullableFilter<"documentos_clinicos"> | string | null;
    nombre_archivo?: Prisma.StringFilter<"documentos_clinicos"> | string;
    tipo_documento?: Prisma.StringNullableFilter<"documentos_clinicos"> | string | null;
    archivo_url?: Prisma.StringFilter<"documentos_clinicos"> | string;
    fecha_subida?: Prisma.DateTimeNullableFilter<"documentos_clinicos"> | Date | string | null;
    pacientes?: Prisma.XOR<Prisma.PacientesScalarRelationFilter, Prisma.pacientesWhereInput>;
    perfiles?: Prisma.XOR<Prisma.PerfilesNullableScalarRelationFilter, Prisma.perfilesWhereInput> | null;
}, "id">;
export type documentos_clinicosOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    paciente_id?: Prisma.SortOrder;
    subido_por?: Prisma.SortOrderInput | Prisma.SortOrder;
    nombre_archivo?: Prisma.SortOrder;
    tipo_documento?: Prisma.SortOrderInput | Prisma.SortOrder;
    archivo_url?: Prisma.SortOrder;
    fecha_subida?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.documentos_clinicosCountOrderByAggregateInput;
    _avg?: Prisma.documentos_clinicosAvgOrderByAggregateInput;
    _max?: Prisma.documentos_clinicosMaxOrderByAggregateInput;
    _min?: Prisma.documentos_clinicosMinOrderByAggregateInput;
    _sum?: Prisma.documentos_clinicosSumOrderByAggregateInput;
};
export type documentos_clinicosScalarWhereWithAggregatesInput = {
    AND?: Prisma.documentos_clinicosScalarWhereWithAggregatesInput | Prisma.documentos_clinicosScalarWhereWithAggregatesInput[];
    OR?: Prisma.documentos_clinicosScalarWhereWithAggregatesInput[];
    NOT?: Prisma.documentos_clinicosScalarWhereWithAggregatesInput | Prisma.documentos_clinicosScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"documentos_clinicos"> | number;
    paciente_id?: Prisma.IntWithAggregatesFilter<"documentos_clinicos"> | number;
    subido_por?: Prisma.UuidNullableWithAggregatesFilter<"documentos_clinicos"> | string | null;
    nombre_archivo?: Prisma.StringWithAggregatesFilter<"documentos_clinicos"> | string;
    tipo_documento?: Prisma.StringNullableWithAggregatesFilter<"documentos_clinicos"> | string | null;
    archivo_url?: Prisma.StringWithAggregatesFilter<"documentos_clinicos"> | string;
    fecha_subida?: Prisma.DateTimeNullableWithAggregatesFilter<"documentos_clinicos"> | Date | string | null;
};
export type documentos_clinicosCreateInput = {
    nombre_archivo: string;
    tipo_documento?: string | null;
    archivo_url: string;
    fecha_subida?: Date | string | null;
    pacientes: Prisma.pacientesCreateNestedOneWithoutDocumentos_clinicosInput;
    perfiles?: Prisma.perfilesCreateNestedOneWithoutDocumentos_clinicosInput;
};
export type documentos_clinicosUncheckedCreateInput = {
    id?: number;
    paciente_id: number;
    subido_por?: string | null;
    nombre_archivo: string;
    tipo_documento?: string | null;
    archivo_url: string;
    fecha_subida?: Date | string | null;
};
export type documentos_clinicosUpdateInput = {
    nombre_archivo?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo_documento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    archivo_url?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_subida?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pacientes?: Prisma.pacientesUpdateOneRequiredWithoutDocumentos_clinicosNestedInput;
    perfiles?: Prisma.perfilesUpdateOneWithoutDocumentos_clinicosNestedInput;
};
export type documentos_clinicosUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    paciente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    subido_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_archivo?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo_documento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    archivo_url?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_subida?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type documentos_clinicosCreateManyInput = {
    id?: number;
    paciente_id: number;
    subido_por?: string | null;
    nombre_archivo: string;
    tipo_documento?: string | null;
    archivo_url: string;
    fecha_subida?: Date | string | null;
};
export type documentos_clinicosUpdateManyMutationInput = {
    nombre_archivo?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo_documento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    archivo_url?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_subida?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type documentos_clinicosUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    paciente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    subido_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_archivo?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo_documento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    archivo_url?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_subida?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type documentos_clinicosCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    paciente_id?: Prisma.SortOrder;
    subido_por?: Prisma.SortOrder;
    nombre_archivo?: Prisma.SortOrder;
    tipo_documento?: Prisma.SortOrder;
    archivo_url?: Prisma.SortOrder;
    fecha_subida?: Prisma.SortOrder;
};
export type documentos_clinicosAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    paciente_id?: Prisma.SortOrder;
};
export type documentos_clinicosMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    paciente_id?: Prisma.SortOrder;
    subido_por?: Prisma.SortOrder;
    nombre_archivo?: Prisma.SortOrder;
    tipo_documento?: Prisma.SortOrder;
    archivo_url?: Prisma.SortOrder;
    fecha_subida?: Prisma.SortOrder;
};
export type documentos_clinicosMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    paciente_id?: Prisma.SortOrder;
    subido_por?: Prisma.SortOrder;
    nombre_archivo?: Prisma.SortOrder;
    tipo_documento?: Prisma.SortOrder;
    archivo_url?: Prisma.SortOrder;
    fecha_subida?: Prisma.SortOrder;
};
export type documentos_clinicosSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    paciente_id?: Prisma.SortOrder;
};
export type Documentos_clinicosListRelationFilter = {
    every?: Prisma.documentos_clinicosWhereInput;
    some?: Prisma.documentos_clinicosWhereInput;
    none?: Prisma.documentos_clinicosWhereInput;
};
export type documentos_clinicosOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type documentos_clinicosCreateNestedManyWithoutPacientesInput = {
    create?: Prisma.XOR<Prisma.documentos_clinicosCreateWithoutPacientesInput, Prisma.documentos_clinicosUncheckedCreateWithoutPacientesInput> | Prisma.documentos_clinicosCreateWithoutPacientesInput[] | Prisma.documentos_clinicosUncheckedCreateWithoutPacientesInput[];
    connectOrCreate?: Prisma.documentos_clinicosCreateOrConnectWithoutPacientesInput | Prisma.documentos_clinicosCreateOrConnectWithoutPacientesInput[];
    createMany?: Prisma.documentos_clinicosCreateManyPacientesInputEnvelope;
    connect?: Prisma.documentos_clinicosWhereUniqueInput | Prisma.documentos_clinicosWhereUniqueInput[];
};
export type documentos_clinicosUncheckedCreateNestedManyWithoutPacientesInput = {
    create?: Prisma.XOR<Prisma.documentos_clinicosCreateWithoutPacientesInput, Prisma.documentos_clinicosUncheckedCreateWithoutPacientesInput> | Prisma.documentos_clinicosCreateWithoutPacientesInput[] | Prisma.documentos_clinicosUncheckedCreateWithoutPacientesInput[];
    connectOrCreate?: Prisma.documentos_clinicosCreateOrConnectWithoutPacientesInput | Prisma.documentos_clinicosCreateOrConnectWithoutPacientesInput[];
    createMany?: Prisma.documentos_clinicosCreateManyPacientesInputEnvelope;
    connect?: Prisma.documentos_clinicosWhereUniqueInput | Prisma.documentos_clinicosWhereUniqueInput[];
};
export type documentos_clinicosUpdateManyWithoutPacientesNestedInput = {
    create?: Prisma.XOR<Prisma.documentos_clinicosCreateWithoutPacientesInput, Prisma.documentos_clinicosUncheckedCreateWithoutPacientesInput> | Prisma.documentos_clinicosCreateWithoutPacientesInput[] | Prisma.documentos_clinicosUncheckedCreateWithoutPacientesInput[];
    connectOrCreate?: Prisma.documentos_clinicosCreateOrConnectWithoutPacientesInput | Prisma.documentos_clinicosCreateOrConnectWithoutPacientesInput[];
    upsert?: Prisma.documentos_clinicosUpsertWithWhereUniqueWithoutPacientesInput | Prisma.documentos_clinicosUpsertWithWhereUniqueWithoutPacientesInput[];
    createMany?: Prisma.documentos_clinicosCreateManyPacientesInputEnvelope;
    set?: Prisma.documentos_clinicosWhereUniqueInput | Prisma.documentos_clinicosWhereUniqueInput[];
    disconnect?: Prisma.documentos_clinicosWhereUniqueInput | Prisma.documentos_clinicosWhereUniqueInput[];
    delete?: Prisma.documentos_clinicosWhereUniqueInput | Prisma.documentos_clinicosWhereUniqueInput[];
    connect?: Prisma.documentos_clinicosWhereUniqueInput | Prisma.documentos_clinicosWhereUniqueInput[];
    update?: Prisma.documentos_clinicosUpdateWithWhereUniqueWithoutPacientesInput | Prisma.documentos_clinicosUpdateWithWhereUniqueWithoutPacientesInput[];
    updateMany?: Prisma.documentos_clinicosUpdateManyWithWhereWithoutPacientesInput | Prisma.documentos_clinicosUpdateManyWithWhereWithoutPacientesInput[];
    deleteMany?: Prisma.documentos_clinicosScalarWhereInput | Prisma.documentos_clinicosScalarWhereInput[];
};
export type documentos_clinicosUncheckedUpdateManyWithoutPacientesNestedInput = {
    create?: Prisma.XOR<Prisma.documentos_clinicosCreateWithoutPacientesInput, Prisma.documentos_clinicosUncheckedCreateWithoutPacientesInput> | Prisma.documentos_clinicosCreateWithoutPacientesInput[] | Prisma.documentos_clinicosUncheckedCreateWithoutPacientesInput[];
    connectOrCreate?: Prisma.documentos_clinicosCreateOrConnectWithoutPacientesInput | Prisma.documentos_clinicosCreateOrConnectWithoutPacientesInput[];
    upsert?: Prisma.documentos_clinicosUpsertWithWhereUniqueWithoutPacientesInput | Prisma.documentos_clinicosUpsertWithWhereUniqueWithoutPacientesInput[];
    createMany?: Prisma.documentos_clinicosCreateManyPacientesInputEnvelope;
    set?: Prisma.documentos_clinicosWhereUniqueInput | Prisma.documentos_clinicosWhereUniqueInput[];
    disconnect?: Prisma.documentos_clinicosWhereUniqueInput | Prisma.documentos_clinicosWhereUniqueInput[];
    delete?: Prisma.documentos_clinicosWhereUniqueInput | Prisma.documentos_clinicosWhereUniqueInput[];
    connect?: Prisma.documentos_clinicosWhereUniqueInput | Prisma.documentos_clinicosWhereUniqueInput[];
    update?: Prisma.documentos_clinicosUpdateWithWhereUniqueWithoutPacientesInput | Prisma.documentos_clinicosUpdateWithWhereUniqueWithoutPacientesInput[];
    updateMany?: Prisma.documentos_clinicosUpdateManyWithWhereWithoutPacientesInput | Prisma.documentos_clinicosUpdateManyWithWhereWithoutPacientesInput[];
    deleteMany?: Prisma.documentos_clinicosScalarWhereInput | Prisma.documentos_clinicosScalarWhereInput[];
};
export type documentos_clinicosCreateNestedManyWithoutPerfilesInput = {
    create?: Prisma.XOR<Prisma.documentos_clinicosCreateWithoutPerfilesInput, Prisma.documentos_clinicosUncheckedCreateWithoutPerfilesInput> | Prisma.documentos_clinicosCreateWithoutPerfilesInput[] | Prisma.documentos_clinicosUncheckedCreateWithoutPerfilesInput[];
    connectOrCreate?: Prisma.documentos_clinicosCreateOrConnectWithoutPerfilesInput | Prisma.documentos_clinicosCreateOrConnectWithoutPerfilesInput[];
    createMany?: Prisma.documentos_clinicosCreateManyPerfilesInputEnvelope;
    connect?: Prisma.documentos_clinicosWhereUniqueInput | Prisma.documentos_clinicosWhereUniqueInput[];
};
export type documentos_clinicosUncheckedCreateNestedManyWithoutPerfilesInput = {
    create?: Prisma.XOR<Prisma.documentos_clinicosCreateWithoutPerfilesInput, Prisma.documentos_clinicosUncheckedCreateWithoutPerfilesInput> | Prisma.documentos_clinicosCreateWithoutPerfilesInput[] | Prisma.documentos_clinicosUncheckedCreateWithoutPerfilesInput[];
    connectOrCreate?: Prisma.documentos_clinicosCreateOrConnectWithoutPerfilesInput | Prisma.documentos_clinicosCreateOrConnectWithoutPerfilesInput[];
    createMany?: Prisma.documentos_clinicosCreateManyPerfilesInputEnvelope;
    connect?: Prisma.documentos_clinicosWhereUniqueInput | Prisma.documentos_clinicosWhereUniqueInput[];
};
export type documentos_clinicosUpdateManyWithoutPerfilesNestedInput = {
    create?: Prisma.XOR<Prisma.documentos_clinicosCreateWithoutPerfilesInput, Prisma.documentos_clinicosUncheckedCreateWithoutPerfilesInput> | Prisma.documentos_clinicosCreateWithoutPerfilesInput[] | Prisma.documentos_clinicosUncheckedCreateWithoutPerfilesInput[];
    connectOrCreate?: Prisma.documentos_clinicosCreateOrConnectWithoutPerfilesInput | Prisma.documentos_clinicosCreateOrConnectWithoutPerfilesInput[];
    upsert?: Prisma.documentos_clinicosUpsertWithWhereUniqueWithoutPerfilesInput | Prisma.documentos_clinicosUpsertWithWhereUniqueWithoutPerfilesInput[];
    createMany?: Prisma.documentos_clinicosCreateManyPerfilesInputEnvelope;
    set?: Prisma.documentos_clinicosWhereUniqueInput | Prisma.documentos_clinicosWhereUniqueInput[];
    disconnect?: Prisma.documentos_clinicosWhereUniqueInput | Prisma.documentos_clinicosWhereUniqueInput[];
    delete?: Prisma.documentos_clinicosWhereUniqueInput | Prisma.documentos_clinicosWhereUniqueInput[];
    connect?: Prisma.documentos_clinicosWhereUniqueInput | Prisma.documentos_clinicosWhereUniqueInput[];
    update?: Prisma.documentos_clinicosUpdateWithWhereUniqueWithoutPerfilesInput | Prisma.documentos_clinicosUpdateWithWhereUniqueWithoutPerfilesInput[];
    updateMany?: Prisma.documentos_clinicosUpdateManyWithWhereWithoutPerfilesInput | Prisma.documentos_clinicosUpdateManyWithWhereWithoutPerfilesInput[];
    deleteMany?: Prisma.documentos_clinicosScalarWhereInput | Prisma.documentos_clinicosScalarWhereInput[];
};
export type documentos_clinicosUncheckedUpdateManyWithoutPerfilesNestedInput = {
    create?: Prisma.XOR<Prisma.documentos_clinicosCreateWithoutPerfilesInput, Prisma.documentos_clinicosUncheckedCreateWithoutPerfilesInput> | Prisma.documentos_clinicosCreateWithoutPerfilesInput[] | Prisma.documentos_clinicosUncheckedCreateWithoutPerfilesInput[];
    connectOrCreate?: Prisma.documentos_clinicosCreateOrConnectWithoutPerfilesInput | Prisma.documentos_clinicosCreateOrConnectWithoutPerfilesInput[];
    upsert?: Prisma.documentos_clinicosUpsertWithWhereUniqueWithoutPerfilesInput | Prisma.documentos_clinicosUpsertWithWhereUniqueWithoutPerfilesInput[];
    createMany?: Prisma.documentos_clinicosCreateManyPerfilesInputEnvelope;
    set?: Prisma.documentos_clinicosWhereUniqueInput | Prisma.documentos_clinicosWhereUniqueInput[];
    disconnect?: Prisma.documentos_clinicosWhereUniqueInput | Prisma.documentos_clinicosWhereUniqueInput[];
    delete?: Prisma.documentos_clinicosWhereUniqueInput | Prisma.documentos_clinicosWhereUniqueInput[];
    connect?: Prisma.documentos_clinicosWhereUniqueInput | Prisma.documentos_clinicosWhereUniqueInput[];
    update?: Prisma.documentos_clinicosUpdateWithWhereUniqueWithoutPerfilesInput | Prisma.documentos_clinicosUpdateWithWhereUniqueWithoutPerfilesInput[];
    updateMany?: Prisma.documentos_clinicosUpdateManyWithWhereWithoutPerfilesInput | Prisma.documentos_clinicosUpdateManyWithWhereWithoutPerfilesInput[];
    deleteMany?: Prisma.documentos_clinicosScalarWhereInput | Prisma.documentos_clinicosScalarWhereInput[];
};
export type documentos_clinicosCreateWithoutPacientesInput = {
    nombre_archivo: string;
    tipo_documento?: string | null;
    archivo_url: string;
    fecha_subida?: Date | string | null;
    perfiles?: Prisma.perfilesCreateNestedOneWithoutDocumentos_clinicosInput;
};
export type documentos_clinicosUncheckedCreateWithoutPacientesInput = {
    id?: number;
    subido_por?: string | null;
    nombre_archivo: string;
    tipo_documento?: string | null;
    archivo_url: string;
    fecha_subida?: Date | string | null;
};
export type documentos_clinicosCreateOrConnectWithoutPacientesInput = {
    where: Prisma.documentos_clinicosWhereUniqueInput;
    create: Prisma.XOR<Prisma.documentos_clinicosCreateWithoutPacientesInput, Prisma.documentos_clinicosUncheckedCreateWithoutPacientesInput>;
};
export type documentos_clinicosCreateManyPacientesInputEnvelope = {
    data: Prisma.documentos_clinicosCreateManyPacientesInput | Prisma.documentos_clinicosCreateManyPacientesInput[];
    skipDuplicates?: boolean;
};
export type documentos_clinicosUpsertWithWhereUniqueWithoutPacientesInput = {
    where: Prisma.documentos_clinicosWhereUniqueInput;
    update: Prisma.XOR<Prisma.documentos_clinicosUpdateWithoutPacientesInput, Prisma.documentos_clinicosUncheckedUpdateWithoutPacientesInput>;
    create: Prisma.XOR<Prisma.documentos_clinicosCreateWithoutPacientesInput, Prisma.documentos_clinicosUncheckedCreateWithoutPacientesInput>;
};
export type documentos_clinicosUpdateWithWhereUniqueWithoutPacientesInput = {
    where: Prisma.documentos_clinicosWhereUniqueInput;
    data: Prisma.XOR<Prisma.documentos_clinicosUpdateWithoutPacientesInput, Prisma.documentos_clinicosUncheckedUpdateWithoutPacientesInput>;
};
export type documentos_clinicosUpdateManyWithWhereWithoutPacientesInput = {
    where: Prisma.documentos_clinicosScalarWhereInput;
    data: Prisma.XOR<Prisma.documentos_clinicosUpdateManyMutationInput, Prisma.documentos_clinicosUncheckedUpdateManyWithoutPacientesInput>;
};
export type documentos_clinicosScalarWhereInput = {
    AND?: Prisma.documentos_clinicosScalarWhereInput | Prisma.documentos_clinicosScalarWhereInput[];
    OR?: Prisma.documentos_clinicosScalarWhereInput[];
    NOT?: Prisma.documentos_clinicosScalarWhereInput | Prisma.documentos_clinicosScalarWhereInput[];
    id?: Prisma.IntFilter<"documentos_clinicos"> | number;
    paciente_id?: Prisma.IntFilter<"documentos_clinicos"> | number;
    subido_por?: Prisma.UuidNullableFilter<"documentos_clinicos"> | string | null;
    nombre_archivo?: Prisma.StringFilter<"documentos_clinicos"> | string;
    tipo_documento?: Prisma.StringNullableFilter<"documentos_clinicos"> | string | null;
    archivo_url?: Prisma.StringFilter<"documentos_clinicos"> | string;
    fecha_subida?: Prisma.DateTimeNullableFilter<"documentos_clinicos"> | Date | string | null;
};
export type documentos_clinicosCreateWithoutPerfilesInput = {
    nombre_archivo: string;
    tipo_documento?: string | null;
    archivo_url: string;
    fecha_subida?: Date | string | null;
    pacientes: Prisma.pacientesCreateNestedOneWithoutDocumentos_clinicosInput;
};
export type documentos_clinicosUncheckedCreateWithoutPerfilesInput = {
    id?: number;
    paciente_id: number;
    nombre_archivo: string;
    tipo_documento?: string | null;
    archivo_url: string;
    fecha_subida?: Date | string | null;
};
export type documentos_clinicosCreateOrConnectWithoutPerfilesInput = {
    where: Prisma.documentos_clinicosWhereUniqueInput;
    create: Prisma.XOR<Prisma.documentos_clinicosCreateWithoutPerfilesInput, Prisma.documentos_clinicosUncheckedCreateWithoutPerfilesInput>;
};
export type documentos_clinicosCreateManyPerfilesInputEnvelope = {
    data: Prisma.documentos_clinicosCreateManyPerfilesInput | Prisma.documentos_clinicosCreateManyPerfilesInput[];
    skipDuplicates?: boolean;
};
export type documentos_clinicosUpsertWithWhereUniqueWithoutPerfilesInput = {
    where: Prisma.documentos_clinicosWhereUniqueInput;
    update: Prisma.XOR<Prisma.documentos_clinicosUpdateWithoutPerfilesInput, Prisma.documentos_clinicosUncheckedUpdateWithoutPerfilesInput>;
    create: Prisma.XOR<Prisma.documentos_clinicosCreateWithoutPerfilesInput, Prisma.documentos_clinicosUncheckedCreateWithoutPerfilesInput>;
};
export type documentos_clinicosUpdateWithWhereUniqueWithoutPerfilesInput = {
    where: Prisma.documentos_clinicosWhereUniqueInput;
    data: Prisma.XOR<Prisma.documentos_clinicosUpdateWithoutPerfilesInput, Prisma.documentos_clinicosUncheckedUpdateWithoutPerfilesInput>;
};
export type documentos_clinicosUpdateManyWithWhereWithoutPerfilesInput = {
    where: Prisma.documentos_clinicosScalarWhereInput;
    data: Prisma.XOR<Prisma.documentos_clinicosUpdateManyMutationInput, Prisma.documentos_clinicosUncheckedUpdateManyWithoutPerfilesInput>;
};
export type documentos_clinicosCreateManyPacientesInput = {
    id?: number;
    subido_por?: string | null;
    nombre_archivo: string;
    tipo_documento?: string | null;
    archivo_url: string;
    fecha_subida?: Date | string | null;
};
export type documentos_clinicosUpdateWithoutPacientesInput = {
    nombre_archivo?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo_documento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    archivo_url?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_subida?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    perfiles?: Prisma.perfilesUpdateOneWithoutDocumentos_clinicosNestedInput;
};
export type documentos_clinicosUncheckedUpdateWithoutPacientesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    subido_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_archivo?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo_documento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    archivo_url?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_subida?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type documentos_clinicosUncheckedUpdateManyWithoutPacientesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    subido_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_archivo?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo_documento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    archivo_url?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_subida?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type documentos_clinicosCreateManyPerfilesInput = {
    id?: number;
    paciente_id: number;
    nombre_archivo: string;
    tipo_documento?: string | null;
    archivo_url: string;
    fecha_subida?: Date | string | null;
};
export type documentos_clinicosUpdateWithoutPerfilesInput = {
    nombre_archivo?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo_documento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    archivo_url?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_subida?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pacientes?: Prisma.pacientesUpdateOneRequiredWithoutDocumentos_clinicosNestedInput;
};
export type documentos_clinicosUncheckedUpdateWithoutPerfilesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    paciente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre_archivo?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo_documento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    archivo_url?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_subida?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type documentos_clinicosUncheckedUpdateManyWithoutPerfilesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    paciente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre_archivo?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo_documento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    archivo_url?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_subida?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type documentos_clinicosSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    paciente_id?: boolean;
    subido_por?: boolean;
    nombre_archivo?: boolean;
    tipo_documento?: boolean;
    archivo_url?: boolean;
    fecha_subida?: boolean;
    pacientes?: boolean | Prisma.pacientesDefaultArgs<ExtArgs>;
    perfiles?: boolean | Prisma.documentos_clinicos$perfilesArgs<ExtArgs>;
}, ExtArgs["result"]["documentos_clinicos"]>;
export type documentos_clinicosSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    paciente_id?: boolean;
    subido_por?: boolean;
    nombre_archivo?: boolean;
    tipo_documento?: boolean;
    archivo_url?: boolean;
    fecha_subida?: boolean;
    pacientes?: boolean | Prisma.pacientesDefaultArgs<ExtArgs>;
    perfiles?: boolean | Prisma.documentos_clinicos$perfilesArgs<ExtArgs>;
}, ExtArgs["result"]["documentos_clinicos"]>;
export type documentos_clinicosSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    paciente_id?: boolean;
    subido_por?: boolean;
    nombre_archivo?: boolean;
    tipo_documento?: boolean;
    archivo_url?: boolean;
    fecha_subida?: boolean;
    pacientes?: boolean | Prisma.pacientesDefaultArgs<ExtArgs>;
    perfiles?: boolean | Prisma.documentos_clinicos$perfilesArgs<ExtArgs>;
}, ExtArgs["result"]["documentos_clinicos"]>;
export type documentos_clinicosSelectScalar = {
    id?: boolean;
    paciente_id?: boolean;
    subido_por?: boolean;
    nombre_archivo?: boolean;
    tipo_documento?: boolean;
    archivo_url?: boolean;
    fecha_subida?: boolean;
};
export type documentos_clinicosOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "paciente_id" | "subido_por" | "nombre_archivo" | "tipo_documento" | "archivo_url" | "fecha_subida", ExtArgs["result"]["documentos_clinicos"]>;
export type documentos_clinicosInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pacientes?: boolean | Prisma.pacientesDefaultArgs<ExtArgs>;
    perfiles?: boolean | Prisma.documentos_clinicos$perfilesArgs<ExtArgs>;
};
export type documentos_clinicosIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pacientes?: boolean | Prisma.pacientesDefaultArgs<ExtArgs>;
    perfiles?: boolean | Prisma.documentos_clinicos$perfilesArgs<ExtArgs>;
};
export type documentos_clinicosIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pacientes?: boolean | Prisma.pacientesDefaultArgs<ExtArgs>;
    perfiles?: boolean | Prisma.documentos_clinicos$perfilesArgs<ExtArgs>;
};
export type $documentos_clinicosPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "documentos_clinicos";
    objects: {
        pacientes: Prisma.$pacientesPayload<ExtArgs>;
        perfiles: Prisma.$perfilesPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        paciente_id: number;
        subido_por: string | null;
        nombre_archivo: string;
        tipo_documento: string | null;
        archivo_url: string;
        fecha_subida: Date | null;
    }, ExtArgs["result"]["documentos_clinicos"]>;
    composites: {};
};
export type documentos_clinicosGetPayload<S extends boolean | null | undefined | documentos_clinicosDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$documentos_clinicosPayload, S>;
export type documentos_clinicosCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<documentos_clinicosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Documentos_clinicosCountAggregateInputType | true;
};
export interface documentos_clinicosDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['documentos_clinicos'];
        meta: {
            name: 'documentos_clinicos';
        };
    };
    findUnique<T extends documentos_clinicosFindUniqueArgs>(args: Prisma.SelectSubset<T, documentos_clinicosFindUniqueArgs<ExtArgs>>): Prisma.Prisma__documentos_clinicosClient<runtime.Types.Result.GetResult<Prisma.$documentos_clinicosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends documentos_clinicosFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, documentos_clinicosFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__documentos_clinicosClient<runtime.Types.Result.GetResult<Prisma.$documentos_clinicosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends documentos_clinicosFindFirstArgs>(args?: Prisma.SelectSubset<T, documentos_clinicosFindFirstArgs<ExtArgs>>): Prisma.Prisma__documentos_clinicosClient<runtime.Types.Result.GetResult<Prisma.$documentos_clinicosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends documentos_clinicosFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, documentos_clinicosFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__documentos_clinicosClient<runtime.Types.Result.GetResult<Prisma.$documentos_clinicosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends documentos_clinicosFindManyArgs>(args?: Prisma.SelectSubset<T, documentos_clinicosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$documentos_clinicosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends documentos_clinicosCreateArgs>(args: Prisma.SelectSubset<T, documentos_clinicosCreateArgs<ExtArgs>>): Prisma.Prisma__documentos_clinicosClient<runtime.Types.Result.GetResult<Prisma.$documentos_clinicosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends documentos_clinicosCreateManyArgs>(args?: Prisma.SelectSubset<T, documentos_clinicosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends documentos_clinicosCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, documentos_clinicosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$documentos_clinicosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends documentos_clinicosDeleteArgs>(args: Prisma.SelectSubset<T, documentos_clinicosDeleteArgs<ExtArgs>>): Prisma.Prisma__documentos_clinicosClient<runtime.Types.Result.GetResult<Prisma.$documentos_clinicosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends documentos_clinicosUpdateArgs>(args: Prisma.SelectSubset<T, documentos_clinicosUpdateArgs<ExtArgs>>): Prisma.Prisma__documentos_clinicosClient<runtime.Types.Result.GetResult<Prisma.$documentos_clinicosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends documentos_clinicosDeleteManyArgs>(args?: Prisma.SelectSubset<T, documentos_clinicosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends documentos_clinicosUpdateManyArgs>(args: Prisma.SelectSubset<T, documentos_clinicosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends documentos_clinicosUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, documentos_clinicosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$documentos_clinicosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends documentos_clinicosUpsertArgs>(args: Prisma.SelectSubset<T, documentos_clinicosUpsertArgs<ExtArgs>>): Prisma.Prisma__documentos_clinicosClient<runtime.Types.Result.GetResult<Prisma.$documentos_clinicosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends documentos_clinicosCountArgs>(args?: Prisma.Subset<T, documentos_clinicosCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Documentos_clinicosCountAggregateOutputType> : number>;
    aggregate<T extends Documentos_clinicosAggregateArgs>(args: Prisma.Subset<T, Documentos_clinicosAggregateArgs>): Prisma.PrismaPromise<GetDocumentos_clinicosAggregateType<T>>;
    groupBy<T extends documentos_clinicosGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: documentos_clinicosGroupByArgs['orderBy'];
    } : {
        orderBy?: documentos_clinicosGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, documentos_clinicosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentos_clinicosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: documentos_clinicosFieldRefs;
}
export interface Prisma__documentos_clinicosClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    pacientes<T extends Prisma.pacientesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.pacientesDefaultArgs<ExtArgs>>): Prisma.Prisma__pacientesClient<runtime.Types.Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    perfiles<T extends Prisma.documentos_clinicos$perfilesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.documentos_clinicos$perfilesArgs<ExtArgs>>): Prisma.Prisma__perfilesClient<runtime.Types.Result.GetResult<Prisma.$perfilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface documentos_clinicosFieldRefs {
    readonly id: Prisma.FieldRef<"documentos_clinicos", 'Int'>;
    readonly paciente_id: Prisma.FieldRef<"documentos_clinicos", 'Int'>;
    readonly subido_por: Prisma.FieldRef<"documentos_clinicos", 'String'>;
    readonly nombre_archivo: Prisma.FieldRef<"documentos_clinicos", 'String'>;
    readonly tipo_documento: Prisma.FieldRef<"documentos_clinicos", 'String'>;
    readonly archivo_url: Prisma.FieldRef<"documentos_clinicos", 'String'>;
    readonly fecha_subida: Prisma.FieldRef<"documentos_clinicos", 'DateTime'>;
}
export type documentos_clinicosFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.documentos_clinicosSelect<ExtArgs> | null;
    omit?: Prisma.documentos_clinicosOmit<ExtArgs> | null;
    include?: Prisma.documentos_clinicosInclude<ExtArgs> | null;
    where: Prisma.documentos_clinicosWhereUniqueInput;
};
export type documentos_clinicosFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.documentos_clinicosSelect<ExtArgs> | null;
    omit?: Prisma.documentos_clinicosOmit<ExtArgs> | null;
    include?: Prisma.documentos_clinicosInclude<ExtArgs> | null;
    where: Prisma.documentos_clinicosWhereUniqueInput;
};
export type documentos_clinicosFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type documentos_clinicosFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type documentos_clinicosFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type documentos_clinicosCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.documentos_clinicosSelect<ExtArgs> | null;
    omit?: Prisma.documentos_clinicosOmit<ExtArgs> | null;
    include?: Prisma.documentos_clinicosInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.documentos_clinicosCreateInput, Prisma.documentos_clinicosUncheckedCreateInput>;
};
export type documentos_clinicosCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.documentos_clinicosCreateManyInput | Prisma.documentos_clinicosCreateManyInput[];
    skipDuplicates?: boolean;
};
export type documentos_clinicosCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.documentos_clinicosSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.documentos_clinicosOmit<ExtArgs> | null;
    data: Prisma.documentos_clinicosCreateManyInput | Prisma.documentos_clinicosCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.documentos_clinicosIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type documentos_clinicosUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.documentos_clinicosSelect<ExtArgs> | null;
    omit?: Prisma.documentos_clinicosOmit<ExtArgs> | null;
    include?: Prisma.documentos_clinicosInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.documentos_clinicosUpdateInput, Prisma.documentos_clinicosUncheckedUpdateInput>;
    where: Prisma.documentos_clinicosWhereUniqueInput;
};
export type documentos_clinicosUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.documentos_clinicosUpdateManyMutationInput, Prisma.documentos_clinicosUncheckedUpdateManyInput>;
    where?: Prisma.documentos_clinicosWhereInput;
    limit?: number;
};
export type documentos_clinicosUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.documentos_clinicosSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.documentos_clinicosOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.documentos_clinicosUpdateManyMutationInput, Prisma.documentos_clinicosUncheckedUpdateManyInput>;
    where?: Prisma.documentos_clinicosWhereInput;
    limit?: number;
    include?: Prisma.documentos_clinicosIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type documentos_clinicosUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.documentos_clinicosSelect<ExtArgs> | null;
    omit?: Prisma.documentos_clinicosOmit<ExtArgs> | null;
    include?: Prisma.documentos_clinicosInclude<ExtArgs> | null;
    where: Prisma.documentos_clinicosWhereUniqueInput;
    create: Prisma.XOR<Prisma.documentos_clinicosCreateInput, Prisma.documentos_clinicosUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.documentos_clinicosUpdateInput, Prisma.documentos_clinicosUncheckedUpdateInput>;
};
export type documentos_clinicosDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.documentos_clinicosSelect<ExtArgs> | null;
    omit?: Prisma.documentos_clinicosOmit<ExtArgs> | null;
    include?: Prisma.documentos_clinicosInclude<ExtArgs> | null;
    where: Prisma.documentos_clinicosWhereUniqueInput;
};
export type documentos_clinicosDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.documentos_clinicosWhereInput;
    limit?: number;
};
export type documentos_clinicos$perfilesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.perfilesSelect<ExtArgs> | null;
    omit?: Prisma.perfilesOmit<ExtArgs> | null;
    include?: Prisma.perfilesInclude<ExtArgs> | null;
    where?: Prisma.perfilesWhereInput;
};
export type documentos_clinicosDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.documentos_clinicosSelect<ExtArgs> | null;
    omit?: Prisma.documentos_clinicosOmit<ExtArgs> | null;
    include?: Prisma.documentos_clinicosInclude<ExtArgs> | null;
};
