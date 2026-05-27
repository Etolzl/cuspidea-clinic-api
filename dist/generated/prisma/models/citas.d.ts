import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type citasModel = runtime.Types.Result.DefaultSelection<Prisma.$citasPayload>;
export type AggregateCitas = {
    _count: CitasCountAggregateOutputType | null;
    _avg: CitasAvgAggregateOutputType | null;
    _sum: CitasSumAggregateOutputType | null;
    _min: CitasMinAggregateOutputType | null;
    _max: CitasMaxAggregateOutputType | null;
};
export type CitasAvgAggregateOutputType = {
    id: number | null;
    paciente_id: number | null;
};
export type CitasSumAggregateOutputType = {
    id: number | null;
    paciente_id: number | null;
};
export type CitasMinAggregateOutputType = {
    id: number | null;
    paciente_id: number | null;
    dentista_id: string | null;
    fecha_hora_inicio: Date | null;
    fecha_hora_fin: Date | null;
    estado: $Enums.estado_cita | null;
    motivo_consulta: string | null;
    fecha_creacion: Date | null;
};
export type CitasMaxAggregateOutputType = {
    id: number | null;
    paciente_id: number | null;
    dentista_id: string | null;
    fecha_hora_inicio: Date | null;
    fecha_hora_fin: Date | null;
    estado: $Enums.estado_cita | null;
    motivo_consulta: string | null;
    fecha_creacion: Date | null;
};
export type CitasCountAggregateOutputType = {
    id: number;
    paciente_id: number;
    dentista_id: number;
    fecha_hora_inicio: number;
    fecha_hora_fin: number;
    estado: number;
    motivo_consulta: number;
    fecha_creacion: number;
    _all: number;
};
export type CitasAvgAggregateInputType = {
    id?: true;
    paciente_id?: true;
};
export type CitasSumAggregateInputType = {
    id?: true;
    paciente_id?: true;
};
export type CitasMinAggregateInputType = {
    id?: true;
    paciente_id?: true;
    dentista_id?: true;
    fecha_hora_inicio?: true;
    fecha_hora_fin?: true;
    estado?: true;
    motivo_consulta?: true;
    fecha_creacion?: true;
};
export type CitasMaxAggregateInputType = {
    id?: true;
    paciente_id?: true;
    dentista_id?: true;
    fecha_hora_inicio?: true;
    fecha_hora_fin?: true;
    estado?: true;
    motivo_consulta?: true;
    fecha_creacion?: true;
};
export type CitasCountAggregateInputType = {
    id?: true;
    paciente_id?: true;
    dentista_id?: true;
    fecha_hora_inicio?: true;
    fecha_hora_fin?: true;
    estado?: true;
    motivo_consulta?: true;
    fecha_creacion?: true;
    _all?: true;
};
export type CitasAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.citasWhereInput;
    orderBy?: Prisma.citasOrderByWithRelationInput | Prisma.citasOrderByWithRelationInput[];
    cursor?: Prisma.citasWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CitasCountAggregateInputType;
    _avg?: CitasAvgAggregateInputType;
    _sum?: CitasSumAggregateInputType;
    _min?: CitasMinAggregateInputType;
    _max?: CitasMaxAggregateInputType;
};
export type GetCitasAggregateType<T extends CitasAggregateArgs> = {
    [P in keyof T & keyof AggregateCitas]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCitas[P]> : Prisma.GetScalarType<T[P], AggregateCitas[P]>;
};
export type citasGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.citasWhereInput;
    orderBy?: Prisma.citasOrderByWithAggregationInput | Prisma.citasOrderByWithAggregationInput[];
    by: Prisma.CitasScalarFieldEnum[] | Prisma.CitasScalarFieldEnum;
    having?: Prisma.citasScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CitasCountAggregateInputType | true;
    _avg?: CitasAvgAggregateInputType;
    _sum?: CitasSumAggregateInputType;
    _min?: CitasMinAggregateInputType;
    _max?: CitasMaxAggregateInputType;
};
export type CitasGroupByOutputType = {
    id: number;
    paciente_id: number;
    dentista_id: string;
    fecha_hora_inicio: Date;
    fecha_hora_fin: Date;
    estado: $Enums.estado_cita;
    motivo_consulta: string | null;
    fecha_creacion: Date | null;
    _count: CitasCountAggregateOutputType | null;
    _avg: CitasAvgAggregateOutputType | null;
    _sum: CitasSumAggregateOutputType | null;
    _min: CitasMinAggregateOutputType | null;
    _max: CitasMaxAggregateOutputType | null;
};
export type GetCitasGroupByPayload<T extends citasGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CitasGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CitasGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CitasGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CitasGroupByOutputType[P]>;
}>>;
export type citasWhereInput = {
    AND?: Prisma.citasWhereInput | Prisma.citasWhereInput[];
    OR?: Prisma.citasWhereInput[];
    NOT?: Prisma.citasWhereInput | Prisma.citasWhereInput[];
    id?: Prisma.IntFilter<"citas"> | number;
    paciente_id?: Prisma.IntFilter<"citas"> | number;
    dentista_id?: Prisma.UuidFilter<"citas"> | string;
    fecha_hora_inicio?: Prisma.DateTimeFilter<"citas"> | Date | string;
    fecha_hora_fin?: Prisma.DateTimeFilter<"citas"> | Date | string;
    estado?: Prisma.Enumestado_citaFilter<"citas"> | $Enums.estado_cita;
    motivo_consulta?: Prisma.StringNullableFilter<"citas"> | string | null;
    fecha_creacion?: Prisma.DateTimeNullableFilter<"citas"> | Date | string | null;
    perfiles?: Prisma.XOR<Prisma.PerfilesScalarRelationFilter, Prisma.perfilesWhereInput>;
    pacientes?: Prisma.XOR<Prisma.PacientesScalarRelationFilter, Prisma.pacientesWhereInput>;
    cobros?: Prisma.CobrosListRelationFilter;
    notas_clinicas?: Prisma.Notas_clinicasListRelationFilter;
};
export type citasOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    paciente_id?: Prisma.SortOrder;
    dentista_id?: Prisma.SortOrder;
    fecha_hora_inicio?: Prisma.SortOrder;
    fecha_hora_fin?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    motivo_consulta?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_creacion?: Prisma.SortOrderInput | Prisma.SortOrder;
    perfiles?: Prisma.perfilesOrderByWithRelationInput;
    pacientes?: Prisma.pacientesOrderByWithRelationInput;
    cobros?: Prisma.cobrosOrderByRelationAggregateInput;
    notas_clinicas?: Prisma.notas_clinicasOrderByRelationAggregateInput;
};
export type citasWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.citasWhereInput | Prisma.citasWhereInput[];
    OR?: Prisma.citasWhereInput[];
    NOT?: Prisma.citasWhereInput | Prisma.citasWhereInput[];
    paciente_id?: Prisma.IntFilter<"citas"> | number;
    dentista_id?: Prisma.UuidFilter<"citas"> | string;
    fecha_hora_inicio?: Prisma.DateTimeFilter<"citas"> | Date | string;
    fecha_hora_fin?: Prisma.DateTimeFilter<"citas"> | Date | string;
    estado?: Prisma.Enumestado_citaFilter<"citas"> | $Enums.estado_cita;
    motivo_consulta?: Prisma.StringNullableFilter<"citas"> | string | null;
    fecha_creacion?: Prisma.DateTimeNullableFilter<"citas"> | Date | string | null;
    perfiles?: Prisma.XOR<Prisma.PerfilesScalarRelationFilter, Prisma.perfilesWhereInput>;
    pacientes?: Prisma.XOR<Prisma.PacientesScalarRelationFilter, Prisma.pacientesWhereInput>;
    cobros?: Prisma.CobrosListRelationFilter;
    notas_clinicas?: Prisma.Notas_clinicasListRelationFilter;
}, "id">;
export type citasOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    paciente_id?: Prisma.SortOrder;
    dentista_id?: Prisma.SortOrder;
    fecha_hora_inicio?: Prisma.SortOrder;
    fecha_hora_fin?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    motivo_consulta?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_creacion?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.citasCountOrderByAggregateInput;
    _avg?: Prisma.citasAvgOrderByAggregateInput;
    _max?: Prisma.citasMaxOrderByAggregateInput;
    _min?: Prisma.citasMinOrderByAggregateInput;
    _sum?: Prisma.citasSumOrderByAggregateInput;
};
export type citasScalarWhereWithAggregatesInput = {
    AND?: Prisma.citasScalarWhereWithAggregatesInput | Prisma.citasScalarWhereWithAggregatesInput[];
    OR?: Prisma.citasScalarWhereWithAggregatesInput[];
    NOT?: Prisma.citasScalarWhereWithAggregatesInput | Prisma.citasScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"citas"> | number;
    paciente_id?: Prisma.IntWithAggregatesFilter<"citas"> | number;
    dentista_id?: Prisma.UuidWithAggregatesFilter<"citas"> | string;
    fecha_hora_inicio?: Prisma.DateTimeWithAggregatesFilter<"citas"> | Date | string;
    fecha_hora_fin?: Prisma.DateTimeWithAggregatesFilter<"citas"> | Date | string;
    estado?: Prisma.Enumestado_citaWithAggregatesFilter<"citas"> | $Enums.estado_cita;
    motivo_consulta?: Prisma.StringNullableWithAggregatesFilter<"citas"> | string | null;
    fecha_creacion?: Prisma.DateTimeNullableWithAggregatesFilter<"citas"> | Date | string | null;
};
export type citasCreateInput = {
    fecha_hora_inicio: Date | string;
    fecha_hora_fin: Date | string;
    estado?: $Enums.estado_cita;
    motivo_consulta?: string | null;
    fecha_creacion?: Date | string | null;
    perfiles: Prisma.perfilesCreateNestedOneWithoutCitasInput;
    pacientes: Prisma.pacientesCreateNestedOneWithoutCitasInput;
    cobros?: Prisma.cobrosCreateNestedManyWithoutCitasInput;
    notas_clinicas?: Prisma.notas_clinicasCreateNestedManyWithoutCitasInput;
};
export type citasUncheckedCreateInput = {
    id?: number;
    paciente_id: number;
    dentista_id: string;
    fecha_hora_inicio: Date | string;
    fecha_hora_fin: Date | string;
    estado?: $Enums.estado_cita;
    motivo_consulta?: string | null;
    fecha_creacion?: Date | string | null;
    cobros?: Prisma.cobrosUncheckedCreateNestedManyWithoutCitasInput;
    notas_clinicas?: Prisma.notas_clinicasUncheckedCreateNestedManyWithoutCitasInput;
};
export type citasUpdateInput = {
    fecha_hora_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_hora_fin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.Enumestado_citaFieldUpdateOperationsInput | $Enums.estado_cita;
    motivo_consulta?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_creacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    perfiles?: Prisma.perfilesUpdateOneRequiredWithoutCitasNestedInput;
    pacientes?: Prisma.pacientesUpdateOneRequiredWithoutCitasNestedInput;
    cobros?: Prisma.cobrosUpdateManyWithoutCitasNestedInput;
    notas_clinicas?: Prisma.notas_clinicasUpdateManyWithoutCitasNestedInput;
};
export type citasUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    paciente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    dentista_id?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_hora_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_hora_fin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.Enumestado_citaFieldUpdateOperationsInput | $Enums.estado_cita;
    motivo_consulta?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_creacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cobros?: Prisma.cobrosUncheckedUpdateManyWithoutCitasNestedInput;
    notas_clinicas?: Prisma.notas_clinicasUncheckedUpdateManyWithoutCitasNestedInput;
};
export type citasCreateManyInput = {
    id?: number;
    paciente_id: number;
    dentista_id: string;
    fecha_hora_inicio: Date | string;
    fecha_hora_fin: Date | string;
    estado?: $Enums.estado_cita;
    motivo_consulta?: string | null;
    fecha_creacion?: Date | string | null;
};
export type citasUpdateManyMutationInput = {
    fecha_hora_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_hora_fin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.Enumestado_citaFieldUpdateOperationsInput | $Enums.estado_cita;
    motivo_consulta?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_creacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type citasUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    paciente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    dentista_id?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_hora_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_hora_fin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.Enumestado_citaFieldUpdateOperationsInput | $Enums.estado_cita;
    motivo_consulta?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_creacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type citasCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    paciente_id?: Prisma.SortOrder;
    dentista_id?: Prisma.SortOrder;
    fecha_hora_inicio?: Prisma.SortOrder;
    fecha_hora_fin?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    motivo_consulta?: Prisma.SortOrder;
    fecha_creacion?: Prisma.SortOrder;
};
export type citasAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    paciente_id?: Prisma.SortOrder;
};
export type citasMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    paciente_id?: Prisma.SortOrder;
    dentista_id?: Prisma.SortOrder;
    fecha_hora_inicio?: Prisma.SortOrder;
    fecha_hora_fin?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    motivo_consulta?: Prisma.SortOrder;
    fecha_creacion?: Prisma.SortOrder;
};
export type citasMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    paciente_id?: Prisma.SortOrder;
    dentista_id?: Prisma.SortOrder;
    fecha_hora_inicio?: Prisma.SortOrder;
    fecha_hora_fin?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    motivo_consulta?: Prisma.SortOrder;
    fecha_creacion?: Prisma.SortOrder;
};
export type citasSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    paciente_id?: Prisma.SortOrder;
};
export type CitasNullableScalarRelationFilter = {
    is?: Prisma.citasWhereInput | null;
    isNot?: Prisma.citasWhereInput | null;
};
export type CitasListRelationFilter = {
    every?: Prisma.citasWhereInput;
    some?: Prisma.citasWhereInput;
    none?: Prisma.citasWhereInput;
};
export type citasOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type Enumestado_citaFieldUpdateOperationsInput = {
    set?: $Enums.estado_cita;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type citasCreateNestedOneWithoutCobrosInput = {
    create?: Prisma.XOR<Prisma.citasCreateWithoutCobrosInput, Prisma.citasUncheckedCreateWithoutCobrosInput>;
    connectOrCreate?: Prisma.citasCreateOrConnectWithoutCobrosInput;
    connect?: Prisma.citasWhereUniqueInput;
};
export type citasUpdateOneWithoutCobrosNestedInput = {
    create?: Prisma.XOR<Prisma.citasCreateWithoutCobrosInput, Prisma.citasUncheckedCreateWithoutCobrosInput>;
    connectOrCreate?: Prisma.citasCreateOrConnectWithoutCobrosInput;
    upsert?: Prisma.citasUpsertWithoutCobrosInput;
    disconnect?: Prisma.citasWhereInput | boolean;
    delete?: Prisma.citasWhereInput | boolean;
    connect?: Prisma.citasWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.citasUpdateToOneWithWhereWithoutCobrosInput, Prisma.citasUpdateWithoutCobrosInput>, Prisma.citasUncheckedUpdateWithoutCobrosInput>;
};
export type citasCreateNestedOneWithoutNotas_clinicasInput = {
    create?: Prisma.XOR<Prisma.citasCreateWithoutNotas_clinicasInput, Prisma.citasUncheckedCreateWithoutNotas_clinicasInput>;
    connectOrCreate?: Prisma.citasCreateOrConnectWithoutNotas_clinicasInput;
    connect?: Prisma.citasWhereUniqueInput;
};
export type citasUpdateOneWithoutNotas_clinicasNestedInput = {
    create?: Prisma.XOR<Prisma.citasCreateWithoutNotas_clinicasInput, Prisma.citasUncheckedCreateWithoutNotas_clinicasInput>;
    connectOrCreate?: Prisma.citasCreateOrConnectWithoutNotas_clinicasInput;
    upsert?: Prisma.citasUpsertWithoutNotas_clinicasInput;
    disconnect?: Prisma.citasWhereInput | boolean;
    delete?: Prisma.citasWhereInput | boolean;
    connect?: Prisma.citasWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.citasUpdateToOneWithWhereWithoutNotas_clinicasInput, Prisma.citasUpdateWithoutNotas_clinicasInput>, Prisma.citasUncheckedUpdateWithoutNotas_clinicasInput>;
};
export type citasCreateNestedManyWithoutPacientesInput = {
    create?: Prisma.XOR<Prisma.citasCreateWithoutPacientesInput, Prisma.citasUncheckedCreateWithoutPacientesInput> | Prisma.citasCreateWithoutPacientesInput[] | Prisma.citasUncheckedCreateWithoutPacientesInput[];
    connectOrCreate?: Prisma.citasCreateOrConnectWithoutPacientesInput | Prisma.citasCreateOrConnectWithoutPacientesInput[];
    createMany?: Prisma.citasCreateManyPacientesInputEnvelope;
    connect?: Prisma.citasWhereUniqueInput | Prisma.citasWhereUniqueInput[];
};
export type citasUncheckedCreateNestedManyWithoutPacientesInput = {
    create?: Prisma.XOR<Prisma.citasCreateWithoutPacientesInput, Prisma.citasUncheckedCreateWithoutPacientesInput> | Prisma.citasCreateWithoutPacientesInput[] | Prisma.citasUncheckedCreateWithoutPacientesInput[];
    connectOrCreate?: Prisma.citasCreateOrConnectWithoutPacientesInput | Prisma.citasCreateOrConnectWithoutPacientesInput[];
    createMany?: Prisma.citasCreateManyPacientesInputEnvelope;
    connect?: Prisma.citasWhereUniqueInput | Prisma.citasWhereUniqueInput[];
};
export type citasUpdateManyWithoutPacientesNestedInput = {
    create?: Prisma.XOR<Prisma.citasCreateWithoutPacientesInput, Prisma.citasUncheckedCreateWithoutPacientesInput> | Prisma.citasCreateWithoutPacientesInput[] | Prisma.citasUncheckedCreateWithoutPacientesInput[];
    connectOrCreate?: Prisma.citasCreateOrConnectWithoutPacientesInput | Prisma.citasCreateOrConnectWithoutPacientesInput[];
    upsert?: Prisma.citasUpsertWithWhereUniqueWithoutPacientesInput | Prisma.citasUpsertWithWhereUniqueWithoutPacientesInput[];
    createMany?: Prisma.citasCreateManyPacientesInputEnvelope;
    set?: Prisma.citasWhereUniqueInput | Prisma.citasWhereUniqueInput[];
    disconnect?: Prisma.citasWhereUniqueInput | Prisma.citasWhereUniqueInput[];
    delete?: Prisma.citasWhereUniqueInput | Prisma.citasWhereUniqueInput[];
    connect?: Prisma.citasWhereUniqueInput | Prisma.citasWhereUniqueInput[];
    update?: Prisma.citasUpdateWithWhereUniqueWithoutPacientesInput | Prisma.citasUpdateWithWhereUniqueWithoutPacientesInput[];
    updateMany?: Prisma.citasUpdateManyWithWhereWithoutPacientesInput | Prisma.citasUpdateManyWithWhereWithoutPacientesInput[];
    deleteMany?: Prisma.citasScalarWhereInput | Prisma.citasScalarWhereInput[];
};
export type citasUncheckedUpdateManyWithoutPacientesNestedInput = {
    create?: Prisma.XOR<Prisma.citasCreateWithoutPacientesInput, Prisma.citasUncheckedCreateWithoutPacientesInput> | Prisma.citasCreateWithoutPacientesInput[] | Prisma.citasUncheckedCreateWithoutPacientesInput[];
    connectOrCreate?: Prisma.citasCreateOrConnectWithoutPacientesInput | Prisma.citasCreateOrConnectWithoutPacientesInput[];
    upsert?: Prisma.citasUpsertWithWhereUniqueWithoutPacientesInput | Prisma.citasUpsertWithWhereUniqueWithoutPacientesInput[];
    createMany?: Prisma.citasCreateManyPacientesInputEnvelope;
    set?: Prisma.citasWhereUniqueInput | Prisma.citasWhereUniqueInput[];
    disconnect?: Prisma.citasWhereUniqueInput | Prisma.citasWhereUniqueInput[];
    delete?: Prisma.citasWhereUniqueInput | Prisma.citasWhereUniqueInput[];
    connect?: Prisma.citasWhereUniqueInput | Prisma.citasWhereUniqueInput[];
    update?: Prisma.citasUpdateWithWhereUniqueWithoutPacientesInput | Prisma.citasUpdateWithWhereUniqueWithoutPacientesInput[];
    updateMany?: Prisma.citasUpdateManyWithWhereWithoutPacientesInput | Prisma.citasUpdateManyWithWhereWithoutPacientesInput[];
    deleteMany?: Prisma.citasScalarWhereInput | Prisma.citasScalarWhereInput[];
};
export type citasCreateNestedManyWithoutPerfilesInput = {
    create?: Prisma.XOR<Prisma.citasCreateWithoutPerfilesInput, Prisma.citasUncheckedCreateWithoutPerfilesInput> | Prisma.citasCreateWithoutPerfilesInput[] | Prisma.citasUncheckedCreateWithoutPerfilesInput[];
    connectOrCreate?: Prisma.citasCreateOrConnectWithoutPerfilesInput | Prisma.citasCreateOrConnectWithoutPerfilesInput[];
    createMany?: Prisma.citasCreateManyPerfilesInputEnvelope;
    connect?: Prisma.citasWhereUniqueInput | Prisma.citasWhereUniqueInput[];
};
export type citasUncheckedCreateNestedManyWithoutPerfilesInput = {
    create?: Prisma.XOR<Prisma.citasCreateWithoutPerfilesInput, Prisma.citasUncheckedCreateWithoutPerfilesInput> | Prisma.citasCreateWithoutPerfilesInput[] | Prisma.citasUncheckedCreateWithoutPerfilesInput[];
    connectOrCreate?: Prisma.citasCreateOrConnectWithoutPerfilesInput | Prisma.citasCreateOrConnectWithoutPerfilesInput[];
    createMany?: Prisma.citasCreateManyPerfilesInputEnvelope;
    connect?: Prisma.citasWhereUniqueInput | Prisma.citasWhereUniqueInput[];
};
export type citasUpdateManyWithoutPerfilesNestedInput = {
    create?: Prisma.XOR<Prisma.citasCreateWithoutPerfilesInput, Prisma.citasUncheckedCreateWithoutPerfilesInput> | Prisma.citasCreateWithoutPerfilesInput[] | Prisma.citasUncheckedCreateWithoutPerfilesInput[];
    connectOrCreate?: Prisma.citasCreateOrConnectWithoutPerfilesInput | Prisma.citasCreateOrConnectWithoutPerfilesInput[];
    upsert?: Prisma.citasUpsertWithWhereUniqueWithoutPerfilesInput | Prisma.citasUpsertWithWhereUniqueWithoutPerfilesInput[];
    createMany?: Prisma.citasCreateManyPerfilesInputEnvelope;
    set?: Prisma.citasWhereUniqueInput | Prisma.citasWhereUniqueInput[];
    disconnect?: Prisma.citasWhereUniqueInput | Prisma.citasWhereUniqueInput[];
    delete?: Prisma.citasWhereUniqueInput | Prisma.citasWhereUniqueInput[];
    connect?: Prisma.citasWhereUniqueInput | Prisma.citasWhereUniqueInput[];
    update?: Prisma.citasUpdateWithWhereUniqueWithoutPerfilesInput | Prisma.citasUpdateWithWhereUniqueWithoutPerfilesInput[];
    updateMany?: Prisma.citasUpdateManyWithWhereWithoutPerfilesInput | Prisma.citasUpdateManyWithWhereWithoutPerfilesInput[];
    deleteMany?: Prisma.citasScalarWhereInput | Prisma.citasScalarWhereInput[];
};
export type citasUncheckedUpdateManyWithoutPerfilesNestedInput = {
    create?: Prisma.XOR<Prisma.citasCreateWithoutPerfilesInput, Prisma.citasUncheckedCreateWithoutPerfilesInput> | Prisma.citasCreateWithoutPerfilesInput[] | Prisma.citasUncheckedCreateWithoutPerfilesInput[];
    connectOrCreate?: Prisma.citasCreateOrConnectWithoutPerfilesInput | Prisma.citasCreateOrConnectWithoutPerfilesInput[];
    upsert?: Prisma.citasUpsertWithWhereUniqueWithoutPerfilesInput | Prisma.citasUpsertWithWhereUniqueWithoutPerfilesInput[];
    createMany?: Prisma.citasCreateManyPerfilesInputEnvelope;
    set?: Prisma.citasWhereUniqueInput | Prisma.citasWhereUniqueInput[];
    disconnect?: Prisma.citasWhereUniqueInput | Prisma.citasWhereUniqueInput[];
    delete?: Prisma.citasWhereUniqueInput | Prisma.citasWhereUniqueInput[];
    connect?: Prisma.citasWhereUniqueInput | Prisma.citasWhereUniqueInput[];
    update?: Prisma.citasUpdateWithWhereUniqueWithoutPerfilesInput | Prisma.citasUpdateWithWhereUniqueWithoutPerfilesInput[];
    updateMany?: Prisma.citasUpdateManyWithWhereWithoutPerfilesInput | Prisma.citasUpdateManyWithWhereWithoutPerfilesInput[];
    deleteMany?: Prisma.citasScalarWhereInput | Prisma.citasScalarWhereInput[];
};
export type citasCreateWithoutCobrosInput = {
    fecha_hora_inicio: Date | string;
    fecha_hora_fin: Date | string;
    estado?: $Enums.estado_cita;
    motivo_consulta?: string | null;
    fecha_creacion?: Date | string | null;
    perfiles: Prisma.perfilesCreateNestedOneWithoutCitasInput;
    pacientes: Prisma.pacientesCreateNestedOneWithoutCitasInput;
    notas_clinicas?: Prisma.notas_clinicasCreateNestedManyWithoutCitasInput;
};
export type citasUncheckedCreateWithoutCobrosInput = {
    id?: number;
    paciente_id: number;
    dentista_id: string;
    fecha_hora_inicio: Date | string;
    fecha_hora_fin: Date | string;
    estado?: $Enums.estado_cita;
    motivo_consulta?: string | null;
    fecha_creacion?: Date | string | null;
    notas_clinicas?: Prisma.notas_clinicasUncheckedCreateNestedManyWithoutCitasInput;
};
export type citasCreateOrConnectWithoutCobrosInput = {
    where: Prisma.citasWhereUniqueInput;
    create: Prisma.XOR<Prisma.citasCreateWithoutCobrosInput, Prisma.citasUncheckedCreateWithoutCobrosInput>;
};
export type citasUpsertWithoutCobrosInput = {
    update: Prisma.XOR<Prisma.citasUpdateWithoutCobrosInput, Prisma.citasUncheckedUpdateWithoutCobrosInput>;
    create: Prisma.XOR<Prisma.citasCreateWithoutCobrosInput, Prisma.citasUncheckedCreateWithoutCobrosInput>;
    where?: Prisma.citasWhereInput;
};
export type citasUpdateToOneWithWhereWithoutCobrosInput = {
    where?: Prisma.citasWhereInput;
    data: Prisma.XOR<Prisma.citasUpdateWithoutCobrosInput, Prisma.citasUncheckedUpdateWithoutCobrosInput>;
};
export type citasUpdateWithoutCobrosInput = {
    fecha_hora_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_hora_fin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.Enumestado_citaFieldUpdateOperationsInput | $Enums.estado_cita;
    motivo_consulta?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_creacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    perfiles?: Prisma.perfilesUpdateOneRequiredWithoutCitasNestedInput;
    pacientes?: Prisma.pacientesUpdateOneRequiredWithoutCitasNestedInput;
    notas_clinicas?: Prisma.notas_clinicasUpdateManyWithoutCitasNestedInput;
};
export type citasUncheckedUpdateWithoutCobrosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    paciente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    dentista_id?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_hora_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_hora_fin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.Enumestado_citaFieldUpdateOperationsInput | $Enums.estado_cita;
    motivo_consulta?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_creacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notas_clinicas?: Prisma.notas_clinicasUncheckedUpdateManyWithoutCitasNestedInput;
};
export type citasCreateWithoutNotas_clinicasInput = {
    fecha_hora_inicio: Date | string;
    fecha_hora_fin: Date | string;
    estado?: $Enums.estado_cita;
    motivo_consulta?: string | null;
    fecha_creacion?: Date | string | null;
    perfiles: Prisma.perfilesCreateNestedOneWithoutCitasInput;
    pacientes: Prisma.pacientesCreateNestedOneWithoutCitasInput;
    cobros?: Prisma.cobrosCreateNestedManyWithoutCitasInput;
};
export type citasUncheckedCreateWithoutNotas_clinicasInput = {
    id?: number;
    paciente_id: number;
    dentista_id: string;
    fecha_hora_inicio: Date | string;
    fecha_hora_fin: Date | string;
    estado?: $Enums.estado_cita;
    motivo_consulta?: string | null;
    fecha_creacion?: Date | string | null;
    cobros?: Prisma.cobrosUncheckedCreateNestedManyWithoutCitasInput;
};
export type citasCreateOrConnectWithoutNotas_clinicasInput = {
    where: Prisma.citasWhereUniqueInput;
    create: Prisma.XOR<Prisma.citasCreateWithoutNotas_clinicasInput, Prisma.citasUncheckedCreateWithoutNotas_clinicasInput>;
};
export type citasUpsertWithoutNotas_clinicasInput = {
    update: Prisma.XOR<Prisma.citasUpdateWithoutNotas_clinicasInput, Prisma.citasUncheckedUpdateWithoutNotas_clinicasInput>;
    create: Prisma.XOR<Prisma.citasCreateWithoutNotas_clinicasInput, Prisma.citasUncheckedCreateWithoutNotas_clinicasInput>;
    where?: Prisma.citasWhereInput;
};
export type citasUpdateToOneWithWhereWithoutNotas_clinicasInput = {
    where?: Prisma.citasWhereInput;
    data: Prisma.XOR<Prisma.citasUpdateWithoutNotas_clinicasInput, Prisma.citasUncheckedUpdateWithoutNotas_clinicasInput>;
};
export type citasUpdateWithoutNotas_clinicasInput = {
    fecha_hora_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_hora_fin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.Enumestado_citaFieldUpdateOperationsInput | $Enums.estado_cita;
    motivo_consulta?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_creacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    perfiles?: Prisma.perfilesUpdateOneRequiredWithoutCitasNestedInput;
    pacientes?: Prisma.pacientesUpdateOneRequiredWithoutCitasNestedInput;
    cobros?: Prisma.cobrosUpdateManyWithoutCitasNestedInput;
};
export type citasUncheckedUpdateWithoutNotas_clinicasInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    paciente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    dentista_id?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_hora_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_hora_fin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.Enumestado_citaFieldUpdateOperationsInput | $Enums.estado_cita;
    motivo_consulta?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_creacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cobros?: Prisma.cobrosUncheckedUpdateManyWithoutCitasNestedInput;
};
export type citasCreateWithoutPacientesInput = {
    fecha_hora_inicio: Date | string;
    fecha_hora_fin: Date | string;
    estado?: $Enums.estado_cita;
    motivo_consulta?: string | null;
    fecha_creacion?: Date | string | null;
    perfiles: Prisma.perfilesCreateNestedOneWithoutCitasInput;
    cobros?: Prisma.cobrosCreateNestedManyWithoutCitasInput;
    notas_clinicas?: Prisma.notas_clinicasCreateNestedManyWithoutCitasInput;
};
export type citasUncheckedCreateWithoutPacientesInput = {
    id?: number;
    dentista_id: string;
    fecha_hora_inicio: Date | string;
    fecha_hora_fin: Date | string;
    estado?: $Enums.estado_cita;
    motivo_consulta?: string | null;
    fecha_creacion?: Date | string | null;
    cobros?: Prisma.cobrosUncheckedCreateNestedManyWithoutCitasInput;
    notas_clinicas?: Prisma.notas_clinicasUncheckedCreateNestedManyWithoutCitasInput;
};
export type citasCreateOrConnectWithoutPacientesInput = {
    where: Prisma.citasWhereUniqueInput;
    create: Prisma.XOR<Prisma.citasCreateWithoutPacientesInput, Prisma.citasUncheckedCreateWithoutPacientesInput>;
};
export type citasCreateManyPacientesInputEnvelope = {
    data: Prisma.citasCreateManyPacientesInput | Prisma.citasCreateManyPacientesInput[];
    skipDuplicates?: boolean;
};
export type citasUpsertWithWhereUniqueWithoutPacientesInput = {
    where: Prisma.citasWhereUniqueInput;
    update: Prisma.XOR<Prisma.citasUpdateWithoutPacientesInput, Prisma.citasUncheckedUpdateWithoutPacientesInput>;
    create: Prisma.XOR<Prisma.citasCreateWithoutPacientesInput, Prisma.citasUncheckedCreateWithoutPacientesInput>;
};
export type citasUpdateWithWhereUniqueWithoutPacientesInput = {
    where: Prisma.citasWhereUniqueInput;
    data: Prisma.XOR<Prisma.citasUpdateWithoutPacientesInput, Prisma.citasUncheckedUpdateWithoutPacientesInput>;
};
export type citasUpdateManyWithWhereWithoutPacientesInput = {
    where: Prisma.citasScalarWhereInput;
    data: Prisma.XOR<Prisma.citasUpdateManyMutationInput, Prisma.citasUncheckedUpdateManyWithoutPacientesInput>;
};
export type citasScalarWhereInput = {
    AND?: Prisma.citasScalarWhereInput | Prisma.citasScalarWhereInput[];
    OR?: Prisma.citasScalarWhereInput[];
    NOT?: Prisma.citasScalarWhereInput | Prisma.citasScalarWhereInput[];
    id?: Prisma.IntFilter<"citas"> | number;
    paciente_id?: Prisma.IntFilter<"citas"> | number;
    dentista_id?: Prisma.UuidFilter<"citas"> | string;
    fecha_hora_inicio?: Prisma.DateTimeFilter<"citas"> | Date | string;
    fecha_hora_fin?: Prisma.DateTimeFilter<"citas"> | Date | string;
    estado?: Prisma.Enumestado_citaFilter<"citas"> | $Enums.estado_cita;
    motivo_consulta?: Prisma.StringNullableFilter<"citas"> | string | null;
    fecha_creacion?: Prisma.DateTimeNullableFilter<"citas"> | Date | string | null;
};
export type citasCreateWithoutPerfilesInput = {
    fecha_hora_inicio: Date | string;
    fecha_hora_fin: Date | string;
    estado?: $Enums.estado_cita;
    motivo_consulta?: string | null;
    fecha_creacion?: Date | string | null;
    pacientes: Prisma.pacientesCreateNestedOneWithoutCitasInput;
    cobros?: Prisma.cobrosCreateNestedManyWithoutCitasInput;
    notas_clinicas?: Prisma.notas_clinicasCreateNestedManyWithoutCitasInput;
};
export type citasUncheckedCreateWithoutPerfilesInput = {
    id?: number;
    paciente_id: number;
    fecha_hora_inicio: Date | string;
    fecha_hora_fin: Date | string;
    estado?: $Enums.estado_cita;
    motivo_consulta?: string | null;
    fecha_creacion?: Date | string | null;
    cobros?: Prisma.cobrosUncheckedCreateNestedManyWithoutCitasInput;
    notas_clinicas?: Prisma.notas_clinicasUncheckedCreateNestedManyWithoutCitasInput;
};
export type citasCreateOrConnectWithoutPerfilesInput = {
    where: Prisma.citasWhereUniqueInput;
    create: Prisma.XOR<Prisma.citasCreateWithoutPerfilesInput, Prisma.citasUncheckedCreateWithoutPerfilesInput>;
};
export type citasCreateManyPerfilesInputEnvelope = {
    data: Prisma.citasCreateManyPerfilesInput | Prisma.citasCreateManyPerfilesInput[];
    skipDuplicates?: boolean;
};
export type citasUpsertWithWhereUniqueWithoutPerfilesInput = {
    where: Prisma.citasWhereUniqueInput;
    update: Prisma.XOR<Prisma.citasUpdateWithoutPerfilesInput, Prisma.citasUncheckedUpdateWithoutPerfilesInput>;
    create: Prisma.XOR<Prisma.citasCreateWithoutPerfilesInput, Prisma.citasUncheckedCreateWithoutPerfilesInput>;
};
export type citasUpdateWithWhereUniqueWithoutPerfilesInput = {
    where: Prisma.citasWhereUniqueInput;
    data: Prisma.XOR<Prisma.citasUpdateWithoutPerfilesInput, Prisma.citasUncheckedUpdateWithoutPerfilesInput>;
};
export type citasUpdateManyWithWhereWithoutPerfilesInput = {
    where: Prisma.citasScalarWhereInput;
    data: Prisma.XOR<Prisma.citasUpdateManyMutationInput, Prisma.citasUncheckedUpdateManyWithoutPerfilesInput>;
};
export type citasCreateManyPacientesInput = {
    id?: number;
    dentista_id: string;
    fecha_hora_inicio: Date | string;
    fecha_hora_fin: Date | string;
    estado?: $Enums.estado_cita;
    motivo_consulta?: string | null;
    fecha_creacion?: Date | string | null;
};
export type citasUpdateWithoutPacientesInput = {
    fecha_hora_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_hora_fin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.Enumestado_citaFieldUpdateOperationsInput | $Enums.estado_cita;
    motivo_consulta?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_creacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    perfiles?: Prisma.perfilesUpdateOneRequiredWithoutCitasNestedInput;
    cobros?: Prisma.cobrosUpdateManyWithoutCitasNestedInput;
    notas_clinicas?: Prisma.notas_clinicasUpdateManyWithoutCitasNestedInput;
};
export type citasUncheckedUpdateWithoutPacientesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    dentista_id?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_hora_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_hora_fin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.Enumestado_citaFieldUpdateOperationsInput | $Enums.estado_cita;
    motivo_consulta?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_creacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cobros?: Prisma.cobrosUncheckedUpdateManyWithoutCitasNestedInput;
    notas_clinicas?: Prisma.notas_clinicasUncheckedUpdateManyWithoutCitasNestedInput;
};
export type citasUncheckedUpdateManyWithoutPacientesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    dentista_id?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_hora_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_hora_fin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.Enumestado_citaFieldUpdateOperationsInput | $Enums.estado_cita;
    motivo_consulta?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_creacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type citasCreateManyPerfilesInput = {
    id?: number;
    paciente_id: number;
    fecha_hora_inicio: Date | string;
    fecha_hora_fin: Date | string;
    estado?: $Enums.estado_cita;
    motivo_consulta?: string | null;
    fecha_creacion?: Date | string | null;
};
export type citasUpdateWithoutPerfilesInput = {
    fecha_hora_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_hora_fin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.Enumestado_citaFieldUpdateOperationsInput | $Enums.estado_cita;
    motivo_consulta?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_creacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pacientes?: Prisma.pacientesUpdateOneRequiredWithoutCitasNestedInput;
    cobros?: Prisma.cobrosUpdateManyWithoutCitasNestedInput;
    notas_clinicas?: Prisma.notas_clinicasUpdateManyWithoutCitasNestedInput;
};
export type citasUncheckedUpdateWithoutPerfilesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    paciente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha_hora_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_hora_fin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.Enumestado_citaFieldUpdateOperationsInput | $Enums.estado_cita;
    motivo_consulta?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_creacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cobros?: Prisma.cobrosUncheckedUpdateManyWithoutCitasNestedInput;
    notas_clinicas?: Prisma.notas_clinicasUncheckedUpdateManyWithoutCitasNestedInput;
};
export type citasUncheckedUpdateManyWithoutPerfilesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    paciente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha_hora_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_hora_fin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.Enumestado_citaFieldUpdateOperationsInput | $Enums.estado_cita;
    motivo_consulta?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_creacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type CitasCountOutputType = {
    cobros: number;
    notas_clinicas: number;
};
export type CitasCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cobros?: boolean | CitasCountOutputTypeCountCobrosArgs;
    notas_clinicas?: boolean | CitasCountOutputTypeCountNotas_clinicasArgs;
};
export type CitasCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CitasCountOutputTypeSelect<ExtArgs> | null;
};
export type CitasCountOutputTypeCountCobrosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cobrosWhereInput;
};
export type CitasCountOutputTypeCountNotas_clinicasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.notas_clinicasWhereInput;
};
export type citasSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    paciente_id?: boolean;
    dentista_id?: boolean;
    fecha_hora_inicio?: boolean;
    fecha_hora_fin?: boolean;
    estado?: boolean;
    motivo_consulta?: boolean;
    fecha_creacion?: boolean;
    perfiles?: boolean | Prisma.perfilesDefaultArgs<ExtArgs>;
    pacientes?: boolean | Prisma.pacientesDefaultArgs<ExtArgs>;
    cobros?: boolean | Prisma.citas$cobrosArgs<ExtArgs>;
    notas_clinicas?: boolean | Prisma.citas$notas_clinicasArgs<ExtArgs>;
    _count?: boolean | Prisma.CitasCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["citas"]>;
export type citasSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    paciente_id?: boolean;
    dentista_id?: boolean;
    fecha_hora_inicio?: boolean;
    fecha_hora_fin?: boolean;
    estado?: boolean;
    motivo_consulta?: boolean;
    fecha_creacion?: boolean;
    perfiles?: boolean | Prisma.perfilesDefaultArgs<ExtArgs>;
    pacientes?: boolean | Prisma.pacientesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["citas"]>;
export type citasSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    paciente_id?: boolean;
    dentista_id?: boolean;
    fecha_hora_inicio?: boolean;
    fecha_hora_fin?: boolean;
    estado?: boolean;
    motivo_consulta?: boolean;
    fecha_creacion?: boolean;
    perfiles?: boolean | Prisma.perfilesDefaultArgs<ExtArgs>;
    pacientes?: boolean | Prisma.pacientesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["citas"]>;
export type citasSelectScalar = {
    id?: boolean;
    paciente_id?: boolean;
    dentista_id?: boolean;
    fecha_hora_inicio?: boolean;
    fecha_hora_fin?: boolean;
    estado?: boolean;
    motivo_consulta?: boolean;
    fecha_creacion?: boolean;
};
export type citasOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "paciente_id" | "dentista_id" | "fecha_hora_inicio" | "fecha_hora_fin" | "estado" | "motivo_consulta" | "fecha_creacion", ExtArgs["result"]["citas"]>;
export type citasInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    perfiles?: boolean | Prisma.perfilesDefaultArgs<ExtArgs>;
    pacientes?: boolean | Prisma.pacientesDefaultArgs<ExtArgs>;
    cobros?: boolean | Prisma.citas$cobrosArgs<ExtArgs>;
    notas_clinicas?: boolean | Prisma.citas$notas_clinicasArgs<ExtArgs>;
    _count?: boolean | Prisma.CitasCountOutputTypeDefaultArgs<ExtArgs>;
};
export type citasIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    perfiles?: boolean | Prisma.perfilesDefaultArgs<ExtArgs>;
    pacientes?: boolean | Prisma.pacientesDefaultArgs<ExtArgs>;
};
export type citasIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    perfiles?: boolean | Prisma.perfilesDefaultArgs<ExtArgs>;
    pacientes?: boolean | Prisma.pacientesDefaultArgs<ExtArgs>;
};
export type $citasPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "citas";
    objects: {
        perfiles: Prisma.$perfilesPayload<ExtArgs>;
        pacientes: Prisma.$pacientesPayload<ExtArgs>;
        cobros: Prisma.$cobrosPayload<ExtArgs>[];
        notas_clinicas: Prisma.$notas_clinicasPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        paciente_id: number;
        dentista_id: string;
        fecha_hora_inicio: Date;
        fecha_hora_fin: Date;
        estado: $Enums.estado_cita;
        motivo_consulta: string | null;
        fecha_creacion: Date | null;
    }, ExtArgs["result"]["citas"]>;
    composites: {};
};
export type citasGetPayload<S extends boolean | null | undefined | citasDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$citasPayload, S>;
export type citasCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<citasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CitasCountAggregateInputType | true;
};
export interface citasDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['citas'];
        meta: {
            name: 'citas';
        };
    };
    findUnique<T extends citasFindUniqueArgs>(args: Prisma.SelectSubset<T, citasFindUniqueArgs<ExtArgs>>): Prisma.Prisma__citasClient<runtime.Types.Result.GetResult<Prisma.$citasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends citasFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, citasFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__citasClient<runtime.Types.Result.GetResult<Prisma.$citasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends citasFindFirstArgs>(args?: Prisma.SelectSubset<T, citasFindFirstArgs<ExtArgs>>): Prisma.Prisma__citasClient<runtime.Types.Result.GetResult<Prisma.$citasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends citasFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, citasFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__citasClient<runtime.Types.Result.GetResult<Prisma.$citasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends citasFindManyArgs>(args?: Prisma.SelectSubset<T, citasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$citasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends citasCreateArgs>(args: Prisma.SelectSubset<T, citasCreateArgs<ExtArgs>>): Prisma.Prisma__citasClient<runtime.Types.Result.GetResult<Prisma.$citasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends citasCreateManyArgs>(args?: Prisma.SelectSubset<T, citasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends citasCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, citasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$citasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends citasDeleteArgs>(args: Prisma.SelectSubset<T, citasDeleteArgs<ExtArgs>>): Prisma.Prisma__citasClient<runtime.Types.Result.GetResult<Prisma.$citasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends citasUpdateArgs>(args: Prisma.SelectSubset<T, citasUpdateArgs<ExtArgs>>): Prisma.Prisma__citasClient<runtime.Types.Result.GetResult<Prisma.$citasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends citasDeleteManyArgs>(args?: Prisma.SelectSubset<T, citasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends citasUpdateManyArgs>(args: Prisma.SelectSubset<T, citasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends citasUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, citasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$citasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends citasUpsertArgs>(args: Prisma.SelectSubset<T, citasUpsertArgs<ExtArgs>>): Prisma.Prisma__citasClient<runtime.Types.Result.GetResult<Prisma.$citasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends citasCountArgs>(args?: Prisma.Subset<T, citasCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CitasCountAggregateOutputType> : number>;
    aggregate<T extends CitasAggregateArgs>(args: Prisma.Subset<T, CitasAggregateArgs>): Prisma.PrismaPromise<GetCitasAggregateType<T>>;
    groupBy<T extends citasGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: citasGroupByArgs['orderBy'];
    } : {
        orderBy?: citasGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, citasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCitasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: citasFieldRefs;
}
export interface Prisma__citasClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    perfiles<T extends Prisma.perfilesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.perfilesDefaultArgs<ExtArgs>>): Prisma.Prisma__perfilesClient<runtime.Types.Result.GetResult<Prisma.$perfilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    pacientes<T extends Prisma.pacientesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.pacientesDefaultArgs<ExtArgs>>): Prisma.Prisma__pacientesClient<runtime.Types.Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    cobros<T extends Prisma.citas$cobrosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.citas$cobrosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$cobrosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    notas_clinicas<T extends Prisma.citas$notas_clinicasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.citas$notas_clinicasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$notas_clinicasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface citasFieldRefs {
    readonly id: Prisma.FieldRef<"citas", 'Int'>;
    readonly paciente_id: Prisma.FieldRef<"citas", 'Int'>;
    readonly dentista_id: Prisma.FieldRef<"citas", 'String'>;
    readonly fecha_hora_inicio: Prisma.FieldRef<"citas", 'DateTime'>;
    readonly fecha_hora_fin: Prisma.FieldRef<"citas", 'DateTime'>;
    readonly estado: Prisma.FieldRef<"citas", 'estado_cita'>;
    readonly motivo_consulta: Prisma.FieldRef<"citas", 'String'>;
    readonly fecha_creacion: Prisma.FieldRef<"citas", 'DateTime'>;
}
export type citasFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.citasSelect<ExtArgs> | null;
    omit?: Prisma.citasOmit<ExtArgs> | null;
    include?: Prisma.citasInclude<ExtArgs> | null;
    where: Prisma.citasWhereUniqueInput;
};
export type citasFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.citasSelect<ExtArgs> | null;
    omit?: Prisma.citasOmit<ExtArgs> | null;
    include?: Prisma.citasInclude<ExtArgs> | null;
    where: Prisma.citasWhereUniqueInput;
};
export type citasFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type citasFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type citasFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type citasCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.citasSelect<ExtArgs> | null;
    omit?: Prisma.citasOmit<ExtArgs> | null;
    include?: Prisma.citasInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.citasCreateInput, Prisma.citasUncheckedCreateInput>;
};
export type citasCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.citasCreateManyInput | Prisma.citasCreateManyInput[];
    skipDuplicates?: boolean;
};
export type citasCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.citasSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.citasOmit<ExtArgs> | null;
    data: Prisma.citasCreateManyInput | Prisma.citasCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.citasIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type citasUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.citasSelect<ExtArgs> | null;
    omit?: Prisma.citasOmit<ExtArgs> | null;
    include?: Prisma.citasInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.citasUpdateInput, Prisma.citasUncheckedUpdateInput>;
    where: Prisma.citasWhereUniqueInput;
};
export type citasUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.citasUpdateManyMutationInput, Prisma.citasUncheckedUpdateManyInput>;
    where?: Prisma.citasWhereInput;
    limit?: number;
};
export type citasUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.citasSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.citasOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.citasUpdateManyMutationInput, Prisma.citasUncheckedUpdateManyInput>;
    where?: Prisma.citasWhereInput;
    limit?: number;
    include?: Prisma.citasIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type citasUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.citasSelect<ExtArgs> | null;
    omit?: Prisma.citasOmit<ExtArgs> | null;
    include?: Prisma.citasInclude<ExtArgs> | null;
    where: Prisma.citasWhereUniqueInput;
    create: Prisma.XOR<Prisma.citasCreateInput, Prisma.citasUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.citasUpdateInput, Prisma.citasUncheckedUpdateInput>;
};
export type citasDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.citasSelect<ExtArgs> | null;
    omit?: Prisma.citasOmit<ExtArgs> | null;
    include?: Prisma.citasInclude<ExtArgs> | null;
    where: Prisma.citasWhereUniqueInput;
};
export type citasDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.citasWhereInput;
    limit?: number;
};
export type citas$cobrosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type citas$notas_clinicasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type citasDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.citasSelect<ExtArgs> | null;
    omit?: Prisma.citasOmit<ExtArgs> | null;
    include?: Prisma.citasInclude<ExtArgs> | null;
};
