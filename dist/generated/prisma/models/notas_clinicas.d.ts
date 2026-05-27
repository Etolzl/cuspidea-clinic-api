import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type notas_clinicasModel = runtime.Types.Result.DefaultSelection<Prisma.$notas_clinicasPayload>;
export type AggregateNotas_clinicas = {
    _count: Notas_clinicasCountAggregateOutputType | null;
    _avg: Notas_clinicasAvgAggregateOutputType | null;
    _sum: Notas_clinicasSumAggregateOutputType | null;
    _min: Notas_clinicasMinAggregateOutputType | null;
    _max: Notas_clinicasMaxAggregateOutputType | null;
};
export type Notas_clinicasAvgAggregateOutputType = {
    id: number | null;
    paciente_id: number | null;
    cita_id: number | null;
};
export type Notas_clinicasSumAggregateOutputType = {
    id: number | null;
    paciente_id: number | null;
    cita_id: number | null;
};
export type Notas_clinicasMinAggregateOutputType = {
    id: number | null;
    paciente_id: number | null;
    dentista_id: string | null;
    cita_id: number | null;
    diagnostico: string | null;
    tratamiento_realizado: string | null;
    notas_evolucion: string | null;
    fecha_consulta: Date | null;
};
export type Notas_clinicasMaxAggregateOutputType = {
    id: number | null;
    paciente_id: number | null;
    dentista_id: string | null;
    cita_id: number | null;
    diagnostico: string | null;
    tratamiento_realizado: string | null;
    notas_evolucion: string | null;
    fecha_consulta: Date | null;
};
export type Notas_clinicasCountAggregateOutputType = {
    id: number;
    paciente_id: number;
    dentista_id: number;
    cita_id: number;
    diagnostico: number;
    tratamiento_realizado: number;
    notas_evolucion: number;
    odontograma_estado: number;
    fecha_consulta: number;
    _all: number;
};
export type Notas_clinicasAvgAggregateInputType = {
    id?: true;
    paciente_id?: true;
    cita_id?: true;
};
export type Notas_clinicasSumAggregateInputType = {
    id?: true;
    paciente_id?: true;
    cita_id?: true;
};
export type Notas_clinicasMinAggregateInputType = {
    id?: true;
    paciente_id?: true;
    dentista_id?: true;
    cita_id?: true;
    diagnostico?: true;
    tratamiento_realizado?: true;
    notas_evolucion?: true;
    fecha_consulta?: true;
};
export type Notas_clinicasMaxAggregateInputType = {
    id?: true;
    paciente_id?: true;
    dentista_id?: true;
    cita_id?: true;
    diagnostico?: true;
    tratamiento_realizado?: true;
    notas_evolucion?: true;
    fecha_consulta?: true;
};
export type Notas_clinicasCountAggregateInputType = {
    id?: true;
    paciente_id?: true;
    dentista_id?: true;
    cita_id?: true;
    diagnostico?: true;
    tratamiento_realizado?: true;
    notas_evolucion?: true;
    odontograma_estado?: true;
    fecha_consulta?: true;
    _all?: true;
};
export type Notas_clinicasAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.notas_clinicasWhereInput;
    orderBy?: Prisma.notas_clinicasOrderByWithRelationInput | Prisma.notas_clinicasOrderByWithRelationInput[];
    cursor?: Prisma.notas_clinicasWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Notas_clinicasCountAggregateInputType;
    _avg?: Notas_clinicasAvgAggregateInputType;
    _sum?: Notas_clinicasSumAggregateInputType;
    _min?: Notas_clinicasMinAggregateInputType;
    _max?: Notas_clinicasMaxAggregateInputType;
};
export type GetNotas_clinicasAggregateType<T extends Notas_clinicasAggregateArgs> = {
    [P in keyof T & keyof AggregateNotas_clinicas]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateNotas_clinicas[P]> : Prisma.GetScalarType<T[P], AggregateNotas_clinicas[P]>;
};
export type notas_clinicasGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.notas_clinicasWhereInput;
    orderBy?: Prisma.notas_clinicasOrderByWithAggregationInput | Prisma.notas_clinicasOrderByWithAggregationInput[];
    by: Prisma.Notas_clinicasScalarFieldEnum[] | Prisma.Notas_clinicasScalarFieldEnum;
    having?: Prisma.notas_clinicasScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Notas_clinicasCountAggregateInputType | true;
    _avg?: Notas_clinicasAvgAggregateInputType;
    _sum?: Notas_clinicasSumAggregateInputType;
    _min?: Notas_clinicasMinAggregateInputType;
    _max?: Notas_clinicasMaxAggregateInputType;
};
export type Notas_clinicasGroupByOutputType = {
    id: number;
    paciente_id: number;
    dentista_id: string;
    cita_id: number | null;
    diagnostico: string;
    tratamiento_realizado: string | null;
    notas_evolucion: string | null;
    odontograma_estado: runtime.JsonValue | null;
    fecha_consulta: Date | null;
    _count: Notas_clinicasCountAggregateOutputType | null;
    _avg: Notas_clinicasAvgAggregateOutputType | null;
    _sum: Notas_clinicasSumAggregateOutputType | null;
    _min: Notas_clinicasMinAggregateOutputType | null;
    _max: Notas_clinicasMaxAggregateOutputType | null;
};
export type GetNotas_clinicasGroupByPayload<T extends notas_clinicasGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Notas_clinicasGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Notas_clinicasGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Notas_clinicasGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Notas_clinicasGroupByOutputType[P]>;
}>>;
export type notas_clinicasWhereInput = {
    AND?: Prisma.notas_clinicasWhereInput | Prisma.notas_clinicasWhereInput[];
    OR?: Prisma.notas_clinicasWhereInput[];
    NOT?: Prisma.notas_clinicasWhereInput | Prisma.notas_clinicasWhereInput[];
    id?: Prisma.IntFilter<"notas_clinicas"> | number;
    paciente_id?: Prisma.IntFilter<"notas_clinicas"> | number;
    dentista_id?: Prisma.UuidFilter<"notas_clinicas"> | string;
    cita_id?: Prisma.IntNullableFilter<"notas_clinicas"> | number | null;
    diagnostico?: Prisma.StringFilter<"notas_clinicas"> | string;
    tratamiento_realizado?: Prisma.StringNullableFilter<"notas_clinicas"> | string | null;
    notas_evolucion?: Prisma.StringNullableFilter<"notas_clinicas"> | string | null;
    odontograma_estado?: Prisma.JsonNullableFilter<"notas_clinicas">;
    fecha_consulta?: Prisma.DateTimeNullableFilter<"notas_clinicas"> | Date | string | null;
    citas?: Prisma.XOR<Prisma.CitasNullableScalarRelationFilter, Prisma.citasWhereInput> | null;
    perfiles?: Prisma.XOR<Prisma.PerfilesScalarRelationFilter, Prisma.perfilesWhereInput>;
    pacientes?: Prisma.XOR<Prisma.PacientesScalarRelationFilter, Prisma.pacientesWhereInput>;
};
export type notas_clinicasOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    paciente_id?: Prisma.SortOrder;
    dentista_id?: Prisma.SortOrder;
    cita_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    diagnostico?: Prisma.SortOrder;
    tratamiento_realizado?: Prisma.SortOrderInput | Prisma.SortOrder;
    notas_evolucion?: Prisma.SortOrderInput | Prisma.SortOrder;
    odontograma_estado?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_consulta?: Prisma.SortOrderInput | Prisma.SortOrder;
    citas?: Prisma.citasOrderByWithRelationInput;
    perfiles?: Prisma.perfilesOrderByWithRelationInput;
    pacientes?: Prisma.pacientesOrderByWithRelationInput;
};
export type notas_clinicasWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.notas_clinicasWhereInput | Prisma.notas_clinicasWhereInput[];
    OR?: Prisma.notas_clinicasWhereInput[];
    NOT?: Prisma.notas_clinicasWhereInput | Prisma.notas_clinicasWhereInput[];
    paciente_id?: Prisma.IntFilter<"notas_clinicas"> | number;
    dentista_id?: Prisma.UuidFilter<"notas_clinicas"> | string;
    cita_id?: Prisma.IntNullableFilter<"notas_clinicas"> | number | null;
    diagnostico?: Prisma.StringFilter<"notas_clinicas"> | string;
    tratamiento_realizado?: Prisma.StringNullableFilter<"notas_clinicas"> | string | null;
    notas_evolucion?: Prisma.StringNullableFilter<"notas_clinicas"> | string | null;
    odontograma_estado?: Prisma.JsonNullableFilter<"notas_clinicas">;
    fecha_consulta?: Prisma.DateTimeNullableFilter<"notas_clinicas"> | Date | string | null;
    citas?: Prisma.XOR<Prisma.CitasNullableScalarRelationFilter, Prisma.citasWhereInput> | null;
    perfiles?: Prisma.XOR<Prisma.PerfilesScalarRelationFilter, Prisma.perfilesWhereInput>;
    pacientes?: Prisma.XOR<Prisma.PacientesScalarRelationFilter, Prisma.pacientesWhereInput>;
}, "id">;
export type notas_clinicasOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    paciente_id?: Prisma.SortOrder;
    dentista_id?: Prisma.SortOrder;
    cita_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    diagnostico?: Prisma.SortOrder;
    tratamiento_realizado?: Prisma.SortOrderInput | Prisma.SortOrder;
    notas_evolucion?: Prisma.SortOrderInput | Prisma.SortOrder;
    odontograma_estado?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_consulta?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.notas_clinicasCountOrderByAggregateInput;
    _avg?: Prisma.notas_clinicasAvgOrderByAggregateInput;
    _max?: Prisma.notas_clinicasMaxOrderByAggregateInput;
    _min?: Prisma.notas_clinicasMinOrderByAggregateInput;
    _sum?: Prisma.notas_clinicasSumOrderByAggregateInput;
};
export type notas_clinicasScalarWhereWithAggregatesInput = {
    AND?: Prisma.notas_clinicasScalarWhereWithAggregatesInput | Prisma.notas_clinicasScalarWhereWithAggregatesInput[];
    OR?: Prisma.notas_clinicasScalarWhereWithAggregatesInput[];
    NOT?: Prisma.notas_clinicasScalarWhereWithAggregatesInput | Prisma.notas_clinicasScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"notas_clinicas"> | number;
    paciente_id?: Prisma.IntWithAggregatesFilter<"notas_clinicas"> | number;
    dentista_id?: Prisma.UuidWithAggregatesFilter<"notas_clinicas"> | string;
    cita_id?: Prisma.IntNullableWithAggregatesFilter<"notas_clinicas"> | number | null;
    diagnostico?: Prisma.StringWithAggregatesFilter<"notas_clinicas"> | string;
    tratamiento_realizado?: Prisma.StringNullableWithAggregatesFilter<"notas_clinicas"> | string | null;
    notas_evolucion?: Prisma.StringNullableWithAggregatesFilter<"notas_clinicas"> | string | null;
    odontograma_estado?: Prisma.JsonNullableWithAggregatesFilter<"notas_clinicas">;
    fecha_consulta?: Prisma.DateTimeNullableWithAggregatesFilter<"notas_clinicas"> | Date | string | null;
};
export type notas_clinicasCreateInput = {
    diagnostico: string;
    tratamiento_realizado?: string | null;
    notas_evolucion?: string | null;
    odontograma_estado?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    fecha_consulta?: Date | string | null;
    citas?: Prisma.citasCreateNestedOneWithoutNotas_clinicasInput;
    perfiles: Prisma.perfilesCreateNestedOneWithoutNotas_clinicasInput;
    pacientes: Prisma.pacientesCreateNestedOneWithoutNotas_clinicasInput;
};
export type notas_clinicasUncheckedCreateInput = {
    id?: number;
    paciente_id: number;
    dentista_id: string;
    cita_id?: number | null;
    diagnostico: string;
    tratamiento_realizado?: string | null;
    notas_evolucion?: string | null;
    odontograma_estado?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    fecha_consulta?: Date | string | null;
};
export type notas_clinicasUpdateInput = {
    diagnostico?: Prisma.StringFieldUpdateOperationsInput | string;
    tratamiento_realizado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notas_evolucion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    odontograma_estado?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    fecha_consulta?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    citas?: Prisma.citasUpdateOneWithoutNotas_clinicasNestedInput;
    perfiles?: Prisma.perfilesUpdateOneRequiredWithoutNotas_clinicasNestedInput;
    pacientes?: Prisma.pacientesUpdateOneRequiredWithoutNotas_clinicasNestedInput;
};
export type notas_clinicasUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    paciente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    dentista_id?: Prisma.StringFieldUpdateOperationsInput | string;
    cita_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    diagnostico?: Prisma.StringFieldUpdateOperationsInput | string;
    tratamiento_realizado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notas_evolucion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    odontograma_estado?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    fecha_consulta?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type notas_clinicasCreateManyInput = {
    id?: number;
    paciente_id: number;
    dentista_id: string;
    cita_id?: number | null;
    diagnostico: string;
    tratamiento_realizado?: string | null;
    notas_evolucion?: string | null;
    odontograma_estado?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    fecha_consulta?: Date | string | null;
};
export type notas_clinicasUpdateManyMutationInput = {
    diagnostico?: Prisma.StringFieldUpdateOperationsInput | string;
    tratamiento_realizado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notas_evolucion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    odontograma_estado?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    fecha_consulta?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type notas_clinicasUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    paciente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    dentista_id?: Prisma.StringFieldUpdateOperationsInput | string;
    cita_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    diagnostico?: Prisma.StringFieldUpdateOperationsInput | string;
    tratamiento_realizado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notas_evolucion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    odontograma_estado?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    fecha_consulta?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Notas_clinicasListRelationFilter = {
    every?: Prisma.notas_clinicasWhereInput;
    some?: Prisma.notas_clinicasWhereInput;
    none?: Prisma.notas_clinicasWhereInput;
};
export type notas_clinicasOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type notas_clinicasCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    paciente_id?: Prisma.SortOrder;
    dentista_id?: Prisma.SortOrder;
    cita_id?: Prisma.SortOrder;
    diagnostico?: Prisma.SortOrder;
    tratamiento_realizado?: Prisma.SortOrder;
    notas_evolucion?: Prisma.SortOrder;
    odontograma_estado?: Prisma.SortOrder;
    fecha_consulta?: Prisma.SortOrder;
};
export type notas_clinicasAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    paciente_id?: Prisma.SortOrder;
    cita_id?: Prisma.SortOrder;
};
export type notas_clinicasMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    paciente_id?: Prisma.SortOrder;
    dentista_id?: Prisma.SortOrder;
    cita_id?: Prisma.SortOrder;
    diagnostico?: Prisma.SortOrder;
    tratamiento_realizado?: Prisma.SortOrder;
    notas_evolucion?: Prisma.SortOrder;
    fecha_consulta?: Prisma.SortOrder;
};
export type notas_clinicasMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    paciente_id?: Prisma.SortOrder;
    dentista_id?: Prisma.SortOrder;
    cita_id?: Prisma.SortOrder;
    diagnostico?: Prisma.SortOrder;
    tratamiento_realizado?: Prisma.SortOrder;
    notas_evolucion?: Prisma.SortOrder;
    fecha_consulta?: Prisma.SortOrder;
};
export type notas_clinicasSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    paciente_id?: Prisma.SortOrder;
    cita_id?: Prisma.SortOrder;
};
export type notas_clinicasCreateNestedManyWithoutCitasInput = {
    create?: Prisma.XOR<Prisma.notas_clinicasCreateWithoutCitasInput, Prisma.notas_clinicasUncheckedCreateWithoutCitasInput> | Prisma.notas_clinicasCreateWithoutCitasInput[] | Prisma.notas_clinicasUncheckedCreateWithoutCitasInput[];
    connectOrCreate?: Prisma.notas_clinicasCreateOrConnectWithoutCitasInput | Prisma.notas_clinicasCreateOrConnectWithoutCitasInput[];
    createMany?: Prisma.notas_clinicasCreateManyCitasInputEnvelope;
    connect?: Prisma.notas_clinicasWhereUniqueInput | Prisma.notas_clinicasWhereUniqueInput[];
};
export type notas_clinicasUncheckedCreateNestedManyWithoutCitasInput = {
    create?: Prisma.XOR<Prisma.notas_clinicasCreateWithoutCitasInput, Prisma.notas_clinicasUncheckedCreateWithoutCitasInput> | Prisma.notas_clinicasCreateWithoutCitasInput[] | Prisma.notas_clinicasUncheckedCreateWithoutCitasInput[];
    connectOrCreate?: Prisma.notas_clinicasCreateOrConnectWithoutCitasInput | Prisma.notas_clinicasCreateOrConnectWithoutCitasInput[];
    createMany?: Prisma.notas_clinicasCreateManyCitasInputEnvelope;
    connect?: Prisma.notas_clinicasWhereUniqueInput | Prisma.notas_clinicasWhereUniqueInput[];
};
export type notas_clinicasUpdateManyWithoutCitasNestedInput = {
    create?: Prisma.XOR<Prisma.notas_clinicasCreateWithoutCitasInput, Prisma.notas_clinicasUncheckedCreateWithoutCitasInput> | Prisma.notas_clinicasCreateWithoutCitasInput[] | Prisma.notas_clinicasUncheckedCreateWithoutCitasInput[];
    connectOrCreate?: Prisma.notas_clinicasCreateOrConnectWithoutCitasInput | Prisma.notas_clinicasCreateOrConnectWithoutCitasInput[];
    upsert?: Prisma.notas_clinicasUpsertWithWhereUniqueWithoutCitasInput | Prisma.notas_clinicasUpsertWithWhereUniqueWithoutCitasInput[];
    createMany?: Prisma.notas_clinicasCreateManyCitasInputEnvelope;
    set?: Prisma.notas_clinicasWhereUniqueInput | Prisma.notas_clinicasWhereUniqueInput[];
    disconnect?: Prisma.notas_clinicasWhereUniqueInput | Prisma.notas_clinicasWhereUniqueInput[];
    delete?: Prisma.notas_clinicasWhereUniqueInput | Prisma.notas_clinicasWhereUniqueInput[];
    connect?: Prisma.notas_clinicasWhereUniqueInput | Prisma.notas_clinicasWhereUniqueInput[];
    update?: Prisma.notas_clinicasUpdateWithWhereUniqueWithoutCitasInput | Prisma.notas_clinicasUpdateWithWhereUniqueWithoutCitasInput[];
    updateMany?: Prisma.notas_clinicasUpdateManyWithWhereWithoutCitasInput | Prisma.notas_clinicasUpdateManyWithWhereWithoutCitasInput[];
    deleteMany?: Prisma.notas_clinicasScalarWhereInput | Prisma.notas_clinicasScalarWhereInput[];
};
export type notas_clinicasUncheckedUpdateManyWithoutCitasNestedInput = {
    create?: Prisma.XOR<Prisma.notas_clinicasCreateWithoutCitasInput, Prisma.notas_clinicasUncheckedCreateWithoutCitasInput> | Prisma.notas_clinicasCreateWithoutCitasInput[] | Prisma.notas_clinicasUncheckedCreateWithoutCitasInput[];
    connectOrCreate?: Prisma.notas_clinicasCreateOrConnectWithoutCitasInput | Prisma.notas_clinicasCreateOrConnectWithoutCitasInput[];
    upsert?: Prisma.notas_clinicasUpsertWithWhereUniqueWithoutCitasInput | Prisma.notas_clinicasUpsertWithWhereUniqueWithoutCitasInput[];
    createMany?: Prisma.notas_clinicasCreateManyCitasInputEnvelope;
    set?: Prisma.notas_clinicasWhereUniqueInput | Prisma.notas_clinicasWhereUniqueInput[];
    disconnect?: Prisma.notas_clinicasWhereUniqueInput | Prisma.notas_clinicasWhereUniqueInput[];
    delete?: Prisma.notas_clinicasWhereUniqueInput | Prisma.notas_clinicasWhereUniqueInput[];
    connect?: Prisma.notas_clinicasWhereUniqueInput | Prisma.notas_clinicasWhereUniqueInput[];
    update?: Prisma.notas_clinicasUpdateWithWhereUniqueWithoutCitasInput | Prisma.notas_clinicasUpdateWithWhereUniqueWithoutCitasInput[];
    updateMany?: Prisma.notas_clinicasUpdateManyWithWhereWithoutCitasInput | Prisma.notas_clinicasUpdateManyWithWhereWithoutCitasInput[];
    deleteMany?: Prisma.notas_clinicasScalarWhereInput | Prisma.notas_clinicasScalarWhereInput[];
};
export type notas_clinicasCreateNestedManyWithoutPacientesInput = {
    create?: Prisma.XOR<Prisma.notas_clinicasCreateWithoutPacientesInput, Prisma.notas_clinicasUncheckedCreateWithoutPacientesInput> | Prisma.notas_clinicasCreateWithoutPacientesInput[] | Prisma.notas_clinicasUncheckedCreateWithoutPacientesInput[];
    connectOrCreate?: Prisma.notas_clinicasCreateOrConnectWithoutPacientesInput | Prisma.notas_clinicasCreateOrConnectWithoutPacientesInput[];
    createMany?: Prisma.notas_clinicasCreateManyPacientesInputEnvelope;
    connect?: Prisma.notas_clinicasWhereUniqueInput | Prisma.notas_clinicasWhereUniqueInput[];
};
export type notas_clinicasUncheckedCreateNestedManyWithoutPacientesInput = {
    create?: Prisma.XOR<Prisma.notas_clinicasCreateWithoutPacientesInput, Prisma.notas_clinicasUncheckedCreateWithoutPacientesInput> | Prisma.notas_clinicasCreateWithoutPacientesInput[] | Prisma.notas_clinicasUncheckedCreateWithoutPacientesInput[];
    connectOrCreate?: Prisma.notas_clinicasCreateOrConnectWithoutPacientesInput | Prisma.notas_clinicasCreateOrConnectWithoutPacientesInput[];
    createMany?: Prisma.notas_clinicasCreateManyPacientesInputEnvelope;
    connect?: Prisma.notas_clinicasWhereUniqueInput | Prisma.notas_clinicasWhereUniqueInput[];
};
export type notas_clinicasUpdateManyWithoutPacientesNestedInput = {
    create?: Prisma.XOR<Prisma.notas_clinicasCreateWithoutPacientesInput, Prisma.notas_clinicasUncheckedCreateWithoutPacientesInput> | Prisma.notas_clinicasCreateWithoutPacientesInput[] | Prisma.notas_clinicasUncheckedCreateWithoutPacientesInput[];
    connectOrCreate?: Prisma.notas_clinicasCreateOrConnectWithoutPacientesInput | Prisma.notas_clinicasCreateOrConnectWithoutPacientesInput[];
    upsert?: Prisma.notas_clinicasUpsertWithWhereUniqueWithoutPacientesInput | Prisma.notas_clinicasUpsertWithWhereUniqueWithoutPacientesInput[];
    createMany?: Prisma.notas_clinicasCreateManyPacientesInputEnvelope;
    set?: Prisma.notas_clinicasWhereUniqueInput | Prisma.notas_clinicasWhereUniqueInput[];
    disconnect?: Prisma.notas_clinicasWhereUniqueInput | Prisma.notas_clinicasWhereUniqueInput[];
    delete?: Prisma.notas_clinicasWhereUniqueInput | Prisma.notas_clinicasWhereUniqueInput[];
    connect?: Prisma.notas_clinicasWhereUniqueInput | Prisma.notas_clinicasWhereUniqueInput[];
    update?: Prisma.notas_clinicasUpdateWithWhereUniqueWithoutPacientesInput | Prisma.notas_clinicasUpdateWithWhereUniqueWithoutPacientesInput[];
    updateMany?: Prisma.notas_clinicasUpdateManyWithWhereWithoutPacientesInput | Prisma.notas_clinicasUpdateManyWithWhereWithoutPacientesInput[];
    deleteMany?: Prisma.notas_clinicasScalarWhereInput | Prisma.notas_clinicasScalarWhereInput[];
};
export type notas_clinicasUncheckedUpdateManyWithoutPacientesNestedInput = {
    create?: Prisma.XOR<Prisma.notas_clinicasCreateWithoutPacientesInput, Prisma.notas_clinicasUncheckedCreateWithoutPacientesInput> | Prisma.notas_clinicasCreateWithoutPacientesInput[] | Prisma.notas_clinicasUncheckedCreateWithoutPacientesInput[];
    connectOrCreate?: Prisma.notas_clinicasCreateOrConnectWithoutPacientesInput | Prisma.notas_clinicasCreateOrConnectWithoutPacientesInput[];
    upsert?: Prisma.notas_clinicasUpsertWithWhereUniqueWithoutPacientesInput | Prisma.notas_clinicasUpsertWithWhereUniqueWithoutPacientesInput[];
    createMany?: Prisma.notas_clinicasCreateManyPacientesInputEnvelope;
    set?: Prisma.notas_clinicasWhereUniqueInput | Prisma.notas_clinicasWhereUniqueInput[];
    disconnect?: Prisma.notas_clinicasWhereUniqueInput | Prisma.notas_clinicasWhereUniqueInput[];
    delete?: Prisma.notas_clinicasWhereUniqueInput | Prisma.notas_clinicasWhereUniqueInput[];
    connect?: Prisma.notas_clinicasWhereUniqueInput | Prisma.notas_clinicasWhereUniqueInput[];
    update?: Prisma.notas_clinicasUpdateWithWhereUniqueWithoutPacientesInput | Prisma.notas_clinicasUpdateWithWhereUniqueWithoutPacientesInput[];
    updateMany?: Prisma.notas_clinicasUpdateManyWithWhereWithoutPacientesInput | Prisma.notas_clinicasUpdateManyWithWhereWithoutPacientesInput[];
    deleteMany?: Prisma.notas_clinicasScalarWhereInput | Prisma.notas_clinicasScalarWhereInput[];
};
export type notas_clinicasCreateNestedManyWithoutPerfilesInput = {
    create?: Prisma.XOR<Prisma.notas_clinicasCreateWithoutPerfilesInput, Prisma.notas_clinicasUncheckedCreateWithoutPerfilesInput> | Prisma.notas_clinicasCreateWithoutPerfilesInput[] | Prisma.notas_clinicasUncheckedCreateWithoutPerfilesInput[];
    connectOrCreate?: Prisma.notas_clinicasCreateOrConnectWithoutPerfilesInput | Prisma.notas_clinicasCreateOrConnectWithoutPerfilesInput[];
    createMany?: Prisma.notas_clinicasCreateManyPerfilesInputEnvelope;
    connect?: Prisma.notas_clinicasWhereUniqueInput | Prisma.notas_clinicasWhereUniqueInput[];
};
export type notas_clinicasUncheckedCreateNestedManyWithoutPerfilesInput = {
    create?: Prisma.XOR<Prisma.notas_clinicasCreateWithoutPerfilesInput, Prisma.notas_clinicasUncheckedCreateWithoutPerfilesInput> | Prisma.notas_clinicasCreateWithoutPerfilesInput[] | Prisma.notas_clinicasUncheckedCreateWithoutPerfilesInput[];
    connectOrCreate?: Prisma.notas_clinicasCreateOrConnectWithoutPerfilesInput | Prisma.notas_clinicasCreateOrConnectWithoutPerfilesInput[];
    createMany?: Prisma.notas_clinicasCreateManyPerfilesInputEnvelope;
    connect?: Prisma.notas_clinicasWhereUniqueInput | Prisma.notas_clinicasWhereUniqueInput[];
};
export type notas_clinicasUpdateManyWithoutPerfilesNestedInput = {
    create?: Prisma.XOR<Prisma.notas_clinicasCreateWithoutPerfilesInput, Prisma.notas_clinicasUncheckedCreateWithoutPerfilesInput> | Prisma.notas_clinicasCreateWithoutPerfilesInput[] | Prisma.notas_clinicasUncheckedCreateWithoutPerfilesInput[];
    connectOrCreate?: Prisma.notas_clinicasCreateOrConnectWithoutPerfilesInput | Prisma.notas_clinicasCreateOrConnectWithoutPerfilesInput[];
    upsert?: Prisma.notas_clinicasUpsertWithWhereUniqueWithoutPerfilesInput | Prisma.notas_clinicasUpsertWithWhereUniqueWithoutPerfilesInput[];
    createMany?: Prisma.notas_clinicasCreateManyPerfilesInputEnvelope;
    set?: Prisma.notas_clinicasWhereUniqueInput | Prisma.notas_clinicasWhereUniqueInput[];
    disconnect?: Prisma.notas_clinicasWhereUniqueInput | Prisma.notas_clinicasWhereUniqueInput[];
    delete?: Prisma.notas_clinicasWhereUniqueInput | Prisma.notas_clinicasWhereUniqueInput[];
    connect?: Prisma.notas_clinicasWhereUniqueInput | Prisma.notas_clinicasWhereUniqueInput[];
    update?: Prisma.notas_clinicasUpdateWithWhereUniqueWithoutPerfilesInput | Prisma.notas_clinicasUpdateWithWhereUniqueWithoutPerfilesInput[];
    updateMany?: Prisma.notas_clinicasUpdateManyWithWhereWithoutPerfilesInput | Prisma.notas_clinicasUpdateManyWithWhereWithoutPerfilesInput[];
    deleteMany?: Prisma.notas_clinicasScalarWhereInput | Prisma.notas_clinicasScalarWhereInput[];
};
export type notas_clinicasUncheckedUpdateManyWithoutPerfilesNestedInput = {
    create?: Prisma.XOR<Prisma.notas_clinicasCreateWithoutPerfilesInput, Prisma.notas_clinicasUncheckedCreateWithoutPerfilesInput> | Prisma.notas_clinicasCreateWithoutPerfilesInput[] | Prisma.notas_clinicasUncheckedCreateWithoutPerfilesInput[];
    connectOrCreate?: Prisma.notas_clinicasCreateOrConnectWithoutPerfilesInput | Prisma.notas_clinicasCreateOrConnectWithoutPerfilesInput[];
    upsert?: Prisma.notas_clinicasUpsertWithWhereUniqueWithoutPerfilesInput | Prisma.notas_clinicasUpsertWithWhereUniqueWithoutPerfilesInput[];
    createMany?: Prisma.notas_clinicasCreateManyPerfilesInputEnvelope;
    set?: Prisma.notas_clinicasWhereUniqueInput | Prisma.notas_clinicasWhereUniqueInput[];
    disconnect?: Prisma.notas_clinicasWhereUniqueInput | Prisma.notas_clinicasWhereUniqueInput[];
    delete?: Prisma.notas_clinicasWhereUniqueInput | Prisma.notas_clinicasWhereUniqueInput[];
    connect?: Prisma.notas_clinicasWhereUniqueInput | Prisma.notas_clinicasWhereUniqueInput[];
    update?: Prisma.notas_clinicasUpdateWithWhereUniqueWithoutPerfilesInput | Prisma.notas_clinicasUpdateWithWhereUniqueWithoutPerfilesInput[];
    updateMany?: Prisma.notas_clinicasUpdateManyWithWhereWithoutPerfilesInput | Prisma.notas_clinicasUpdateManyWithWhereWithoutPerfilesInput[];
    deleteMany?: Prisma.notas_clinicasScalarWhereInput | Prisma.notas_clinicasScalarWhereInput[];
};
export type notas_clinicasCreateWithoutCitasInput = {
    diagnostico: string;
    tratamiento_realizado?: string | null;
    notas_evolucion?: string | null;
    odontograma_estado?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    fecha_consulta?: Date | string | null;
    perfiles: Prisma.perfilesCreateNestedOneWithoutNotas_clinicasInput;
    pacientes: Prisma.pacientesCreateNestedOneWithoutNotas_clinicasInput;
};
export type notas_clinicasUncheckedCreateWithoutCitasInput = {
    id?: number;
    paciente_id: number;
    dentista_id: string;
    diagnostico: string;
    tratamiento_realizado?: string | null;
    notas_evolucion?: string | null;
    odontograma_estado?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    fecha_consulta?: Date | string | null;
};
export type notas_clinicasCreateOrConnectWithoutCitasInput = {
    where: Prisma.notas_clinicasWhereUniqueInput;
    create: Prisma.XOR<Prisma.notas_clinicasCreateWithoutCitasInput, Prisma.notas_clinicasUncheckedCreateWithoutCitasInput>;
};
export type notas_clinicasCreateManyCitasInputEnvelope = {
    data: Prisma.notas_clinicasCreateManyCitasInput | Prisma.notas_clinicasCreateManyCitasInput[];
    skipDuplicates?: boolean;
};
export type notas_clinicasUpsertWithWhereUniqueWithoutCitasInput = {
    where: Prisma.notas_clinicasWhereUniqueInput;
    update: Prisma.XOR<Prisma.notas_clinicasUpdateWithoutCitasInput, Prisma.notas_clinicasUncheckedUpdateWithoutCitasInput>;
    create: Prisma.XOR<Prisma.notas_clinicasCreateWithoutCitasInput, Prisma.notas_clinicasUncheckedCreateWithoutCitasInput>;
};
export type notas_clinicasUpdateWithWhereUniqueWithoutCitasInput = {
    where: Prisma.notas_clinicasWhereUniqueInput;
    data: Prisma.XOR<Prisma.notas_clinicasUpdateWithoutCitasInput, Prisma.notas_clinicasUncheckedUpdateWithoutCitasInput>;
};
export type notas_clinicasUpdateManyWithWhereWithoutCitasInput = {
    where: Prisma.notas_clinicasScalarWhereInput;
    data: Prisma.XOR<Prisma.notas_clinicasUpdateManyMutationInput, Prisma.notas_clinicasUncheckedUpdateManyWithoutCitasInput>;
};
export type notas_clinicasScalarWhereInput = {
    AND?: Prisma.notas_clinicasScalarWhereInput | Prisma.notas_clinicasScalarWhereInput[];
    OR?: Prisma.notas_clinicasScalarWhereInput[];
    NOT?: Prisma.notas_clinicasScalarWhereInput | Prisma.notas_clinicasScalarWhereInput[];
    id?: Prisma.IntFilter<"notas_clinicas"> | number;
    paciente_id?: Prisma.IntFilter<"notas_clinicas"> | number;
    dentista_id?: Prisma.UuidFilter<"notas_clinicas"> | string;
    cita_id?: Prisma.IntNullableFilter<"notas_clinicas"> | number | null;
    diagnostico?: Prisma.StringFilter<"notas_clinicas"> | string;
    tratamiento_realizado?: Prisma.StringNullableFilter<"notas_clinicas"> | string | null;
    notas_evolucion?: Prisma.StringNullableFilter<"notas_clinicas"> | string | null;
    odontograma_estado?: Prisma.JsonNullableFilter<"notas_clinicas">;
    fecha_consulta?: Prisma.DateTimeNullableFilter<"notas_clinicas"> | Date | string | null;
};
export type notas_clinicasCreateWithoutPacientesInput = {
    diagnostico: string;
    tratamiento_realizado?: string | null;
    notas_evolucion?: string | null;
    odontograma_estado?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    fecha_consulta?: Date | string | null;
    citas?: Prisma.citasCreateNestedOneWithoutNotas_clinicasInput;
    perfiles: Prisma.perfilesCreateNestedOneWithoutNotas_clinicasInput;
};
export type notas_clinicasUncheckedCreateWithoutPacientesInput = {
    id?: number;
    dentista_id: string;
    cita_id?: number | null;
    diagnostico: string;
    tratamiento_realizado?: string | null;
    notas_evolucion?: string | null;
    odontograma_estado?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    fecha_consulta?: Date | string | null;
};
export type notas_clinicasCreateOrConnectWithoutPacientesInput = {
    where: Prisma.notas_clinicasWhereUniqueInput;
    create: Prisma.XOR<Prisma.notas_clinicasCreateWithoutPacientesInput, Prisma.notas_clinicasUncheckedCreateWithoutPacientesInput>;
};
export type notas_clinicasCreateManyPacientesInputEnvelope = {
    data: Prisma.notas_clinicasCreateManyPacientesInput | Prisma.notas_clinicasCreateManyPacientesInput[];
    skipDuplicates?: boolean;
};
export type notas_clinicasUpsertWithWhereUniqueWithoutPacientesInput = {
    where: Prisma.notas_clinicasWhereUniqueInput;
    update: Prisma.XOR<Prisma.notas_clinicasUpdateWithoutPacientesInput, Prisma.notas_clinicasUncheckedUpdateWithoutPacientesInput>;
    create: Prisma.XOR<Prisma.notas_clinicasCreateWithoutPacientesInput, Prisma.notas_clinicasUncheckedCreateWithoutPacientesInput>;
};
export type notas_clinicasUpdateWithWhereUniqueWithoutPacientesInput = {
    where: Prisma.notas_clinicasWhereUniqueInput;
    data: Prisma.XOR<Prisma.notas_clinicasUpdateWithoutPacientesInput, Prisma.notas_clinicasUncheckedUpdateWithoutPacientesInput>;
};
export type notas_clinicasUpdateManyWithWhereWithoutPacientesInput = {
    where: Prisma.notas_clinicasScalarWhereInput;
    data: Prisma.XOR<Prisma.notas_clinicasUpdateManyMutationInput, Prisma.notas_clinicasUncheckedUpdateManyWithoutPacientesInput>;
};
export type notas_clinicasCreateWithoutPerfilesInput = {
    diagnostico: string;
    tratamiento_realizado?: string | null;
    notas_evolucion?: string | null;
    odontograma_estado?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    fecha_consulta?: Date | string | null;
    citas?: Prisma.citasCreateNestedOneWithoutNotas_clinicasInput;
    pacientes: Prisma.pacientesCreateNestedOneWithoutNotas_clinicasInput;
};
export type notas_clinicasUncheckedCreateWithoutPerfilesInput = {
    id?: number;
    paciente_id: number;
    cita_id?: number | null;
    diagnostico: string;
    tratamiento_realizado?: string | null;
    notas_evolucion?: string | null;
    odontograma_estado?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    fecha_consulta?: Date | string | null;
};
export type notas_clinicasCreateOrConnectWithoutPerfilesInput = {
    where: Prisma.notas_clinicasWhereUniqueInput;
    create: Prisma.XOR<Prisma.notas_clinicasCreateWithoutPerfilesInput, Prisma.notas_clinicasUncheckedCreateWithoutPerfilesInput>;
};
export type notas_clinicasCreateManyPerfilesInputEnvelope = {
    data: Prisma.notas_clinicasCreateManyPerfilesInput | Prisma.notas_clinicasCreateManyPerfilesInput[];
    skipDuplicates?: boolean;
};
export type notas_clinicasUpsertWithWhereUniqueWithoutPerfilesInput = {
    where: Prisma.notas_clinicasWhereUniqueInput;
    update: Prisma.XOR<Prisma.notas_clinicasUpdateWithoutPerfilesInput, Prisma.notas_clinicasUncheckedUpdateWithoutPerfilesInput>;
    create: Prisma.XOR<Prisma.notas_clinicasCreateWithoutPerfilesInput, Prisma.notas_clinicasUncheckedCreateWithoutPerfilesInput>;
};
export type notas_clinicasUpdateWithWhereUniqueWithoutPerfilesInput = {
    where: Prisma.notas_clinicasWhereUniqueInput;
    data: Prisma.XOR<Prisma.notas_clinicasUpdateWithoutPerfilesInput, Prisma.notas_clinicasUncheckedUpdateWithoutPerfilesInput>;
};
export type notas_clinicasUpdateManyWithWhereWithoutPerfilesInput = {
    where: Prisma.notas_clinicasScalarWhereInput;
    data: Prisma.XOR<Prisma.notas_clinicasUpdateManyMutationInput, Prisma.notas_clinicasUncheckedUpdateManyWithoutPerfilesInput>;
};
export type notas_clinicasCreateManyCitasInput = {
    id?: number;
    paciente_id: number;
    dentista_id: string;
    diagnostico: string;
    tratamiento_realizado?: string | null;
    notas_evolucion?: string | null;
    odontograma_estado?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    fecha_consulta?: Date | string | null;
};
export type notas_clinicasUpdateWithoutCitasInput = {
    diagnostico?: Prisma.StringFieldUpdateOperationsInput | string;
    tratamiento_realizado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notas_evolucion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    odontograma_estado?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    fecha_consulta?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    perfiles?: Prisma.perfilesUpdateOneRequiredWithoutNotas_clinicasNestedInput;
    pacientes?: Prisma.pacientesUpdateOneRequiredWithoutNotas_clinicasNestedInput;
};
export type notas_clinicasUncheckedUpdateWithoutCitasInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    paciente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    dentista_id?: Prisma.StringFieldUpdateOperationsInput | string;
    diagnostico?: Prisma.StringFieldUpdateOperationsInput | string;
    tratamiento_realizado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notas_evolucion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    odontograma_estado?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    fecha_consulta?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type notas_clinicasUncheckedUpdateManyWithoutCitasInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    paciente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    dentista_id?: Prisma.StringFieldUpdateOperationsInput | string;
    diagnostico?: Prisma.StringFieldUpdateOperationsInput | string;
    tratamiento_realizado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notas_evolucion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    odontograma_estado?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    fecha_consulta?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type notas_clinicasCreateManyPacientesInput = {
    id?: number;
    dentista_id: string;
    cita_id?: number | null;
    diagnostico: string;
    tratamiento_realizado?: string | null;
    notas_evolucion?: string | null;
    odontograma_estado?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    fecha_consulta?: Date | string | null;
};
export type notas_clinicasUpdateWithoutPacientesInput = {
    diagnostico?: Prisma.StringFieldUpdateOperationsInput | string;
    tratamiento_realizado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notas_evolucion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    odontograma_estado?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    fecha_consulta?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    citas?: Prisma.citasUpdateOneWithoutNotas_clinicasNestedInput;
    perfiles?: Prisma.perfilesUpdateOneRequiredWithoutNotas_clinicasNestedInput;
};
export type notas_clinicasUncheckedUpdateWithoutPacientesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    dentista_id?: Prisma.StringFieldUpdateOperationsInput | string;
    cita_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    diagnostico?: Prisma.StringFieldUpdateOperationsInput | string;
    tratamiento_realizado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notas_evolucion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    odontograma_estado?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    fecha_consulta?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type notas_clinicasUncheckedUpdateManyWithoutPacientesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    dentista_id?: Prisma.StringFieldUpdateOperationsInput | string;
    cita_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    diagnostico?: Prisma.StringFieldUpdateOperationsInput | string;
    tratamiento_realizado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notas_evolucion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    odontograma_estado?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    fecha_consulta?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type notas_clinicasCreateManyPerfilesInput = {
    id?: number;
    paciente_id: number;
    cita_id?: number | null;
    diagnostico: string;
    tratamiento_realizado?: string | null;
    notas_evolucion?: string | null;
    odontograma_estado?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    fecha_consulta?: Date | string | null;
};
export type notas_clinicasUpdateWithoutPerfilesInput = {
    diagnostico?: Prisma.StringFieldUpdateOperationsInput | string;
    tratamiento_realizado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notas_evolucion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    odontograma_estado?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    fecha_consulta?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    citas?: Prisma.citasUpdateOneWithoutNotas_clinicasNestedInput;
    pacientes?: Prisma.pacientesUpdateOneRequiredWithoutNotas_clinicasNestedInput;
};
export type notas_clinicasUncheckedUpdateWithoutPerfilesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    paciente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    cita_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    diagnostico?: Prisma.StringFieldUpdateOperationsInput | string;
    tratamiento_realizado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notas_evolucion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    odontograma_estado?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    fecha_consulta?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type notas_clinicasUncheckedUpdateManyWithoutPerfilesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    paciente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    cita_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    diagnostico?: Prisma.StringFieldUpdateOperationsInput | string;
    tratamiento_realizado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notas_evolucion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    odontograma_estado?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    fecha_consulta?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type notas_clinicasSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    paciente_id?: boolean;
    dentista_id?: boolean;
    cita_id?: boolean;
    diagnostico?: boolean;
    tratamiento_realizado?: boolean;
    notas_evolucion?: boolean;
    odontograma_estado?: boolean;
    fecha_consulta?: boolean;
    citas?: boolean | Prisma.notas_clinicas$citasArgs<ExtArgs>;
    perfiles?: boolean | Prisma.perfilesDefaultArgs<ExtArgs>;
    pacientes?: boolean | Prisma.pacientesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["notas_clinicas"]>;
export type notas_clinicasSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    paciente_id?: boolean;
    dentista_id?: boolean;
    cita_id?: boolean;
    diagnostico?: boolean;
    tratamiento_realizado?: boolean;
    notas_evolucion?: boolean;
    odontograma_estado?: boolean;
    fecha_consulta?: boolean;
    citas?: boolean | Prisma.notas_clinicas$citasArgs<ExtArgs>;
    perfiles?: boolean | Prisma.perfilesDefaultArgs<ExtArgs>;
    pacientes?: boolean | Prisma.pacientesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["notas_clinicas"]>;
export type notas_clinicasSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    paciente_id?: boolean;
    dentista_id?: boolean;
    cita_id?: boolean;
    diagnostico?: boolean;
    tratamiento_realizado?: boolean;
    notas_evolucion?: boolean;
    odontograma_estado?: boolean;
    fecha_consulta?: boolean;
    citas?: boolean | Prisma.notas_clinicas$citasArgs<ExtArgs>;
    perfiles?: boolean | Prisma.perfilesDefaultArgs<ExtArgs>;
    pacientes?: boolean | Prisma.pacientesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["notas_clinicas"]>;
export type notas_clinicasSelectScalar = {
    id?: boolean;
    paciente_id?: boolean;
    dentista_id?: boolean;
    cita_id?: boolean;
    diagnostico?: boolean;
    tratamiento_realizado?: boolean;
    notas_evolucion?: boolean;
    odontograma_estado?: boolean;
    fecha_consulta?: boolean;
};
export type notas_clinicasOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "paciente_id" | "dentista_id" | "cita_id" | "diagnostico" | "tratamiento_realizado" | "notas_evolucion" | "odontograma_estado" | "fecha_consulta", ExtArgs["result"]["notas_clinicas"]>;
export type notas_clinicasInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    citas?: boolean | Prisma.notas_clinicas$citasArgs<ExtArgs>;
    perfiles?: boolean | Prisma.perfilesDefaultArgs<ExtArgs>;
    pacientes?: boolean | Prisma.pacientesDefaultArgs<ExtArgs>;
};
export type notas_clinicasIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    citas?: boolean | Prisma.notas_clinicas$citasArgs<ExtArgs>;
    perfiles?: boolean | Prisma.perfilesDefaultArgs<ExtArgs>;
    pacientes?: boolean | Prisma.pacientesDefaultArgs<ExtArgs>;
};
export type notas_clinicasIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    citas?: boolean | Prisma.notas_clinicas$citasArgs<ExtArgs>;
    perfiles?: boolean | Prisma.perfilesDefaultArgs<ExtArgs>;
    pacientes?: boolean | Prisma.pacientesDefaultArgs<ExtArgs>;
};
export type $notas_clinicasPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "notas_clinicas";
    objects: {
        citas: Prisma.$citasPayload<ExtArgs> | null;
        perfiles: Prisma.$perfilesPayload<ExtArgs>;
        pacientes: Prisma.$pacientesPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        paciente_id: number;
        dentista_id: string;
        cita_id: number | null;
        diagnostico: string;
        tratamiento_realizado: string | null;
        notas_evolucion: string | null;
        odontograma_estado: runtime.JsonValue | null;
        fecha_consulta: Date | null;
    }, ExtArgs["result"]["notas_clinicas"]>;
    composites: {};
};
export type notas_clinicasGetPayload<S extends boolean | null | undefined | notas_clinicasDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$notas_clinicasPayload, S>;
export type notas_clinicasCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<notas_clinicasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Notas_clinicasCountAggregateInputType | true;
};
export interface notas_clinicasDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['notas_clinicas'];
        meta: {
            name: 'notas_clinicas';
        };
    };
    findUnique<T extends notas_clinicasFindUniqueArgs>(args: Prisma.SelectSubset<T, notas_clinicasFindUniqueArgs<ExtArgs>>): Prisma.Prisma__notas_clinicasClient<runtime.Types.Result.GetResult<Prisma.$notas_clinicasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends notas_clinicasFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, notas_clinicasFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__notas_clinicasClient<runtime.Types.Result.GetResult<Prisma.$notas_clinicasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends notas_clinicasFindFirstArgs>(args?: Prisma.SelectSubset<T, notas_clinicasFindFirstArgs<ExtArgs>>): Prisma.Prisma__notas_clinicasClient<runtime.Types.Result.GetResult<Prisma.$notas_clinicasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends notas_clinicasFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, notas_clinicasFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__notas_clinicasClient<runtime.Types.Result.GetResult<Prisma.$notas_clinicasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends notas_clinicasFindManyArgs>(args?: Prisma.SelectSubset<T, notas_clinicasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$notas_clinicasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends notas_clinicasCreateArgs>(args: Prisma.SelectSubset<T, notas_clinicasCreateArgs<ExtArgs>>): Prisma.Prisma__notas_clinicasClient<runtime.Types.Result.GetResult<Prisma.$notas_clinicasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends notas_clinicasCreateManyArgs>(args?: Prisma.SelectSubset<T, notas_clinicasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends notas_clinicasCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, notas_clinicasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$notas_clinicasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends notas_clinicasDeleteArgs>(args: Prisma.SelectSubset<T, notas_clinicasDeleteArgs<ExtArgs>>): Prisma.Prisma__notas_clinicasClient<runtime.Types.Result.GetResult<Prisma.$notas_clinicasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends notas_clinicasUpdateArgs>(args: Prisma.SelectSubset<T, notas_clinicasUpdateArgs<ExtArgs>>): Prisma.Prisma__notas_clinicasClient<runtime.Types.Result.GetResult<Prisma.$notas_clinicasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends notas_clinicasDeleteManyArgs>(args?: Prisma.SelectSubset<T, notas_clinicasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends notas_clinicasUpdateManyArgs>(args: Prisma.SelectSubset<T, notas_clinicasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends notas_clinicasUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, notas_clinicasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$notas_clinicasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends notas_clinicasUpsertArgs>(args: Prisma.SelectSubset<T, notas_clinicasUpsertArgs<ExtArgs>>): Prisma.Prisma__notas_clinicasClient<runtime.Types.Result.GetResult<Prisma.$notas_clinicasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends notas_clinicasCountArgs>(args?: Prisma.Subset<T, notas_clinicasCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Notas_clinicasCountAggregateOutputType> : number>;
    aggregate<T extends Notas_clinicasAggregateArgs>(args: Prisma.Subset<T, Notas_clinicasAggregateArgs>): Prisma.PrismaPromise<GetNotas_clinicasAggregateType<T>>;
    groupBy<T extends notas_clinicasGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: notas_clinicasGroupByArgs['orderBy'];
    } : {
        orderBy?: notas_clinicasGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, notas_clinicasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotas_clinicasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: notas_clinicasFieldRefs;
}
export interface Prisma__notas_clinicasClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    citas<T extends Prisma.notas_clinicas$citasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.notas_clinicas$citasArgs<ExtArgs>>): Prisma.Prisma__citasClient<runtime.Types.Result.GetResult<Prisma.$citasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    perfiles<T extends Prisma.perfilesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.perfilesDefaultArgs<ExtArgs>>): Prisma.Prisma__perfilesClient<runtime.Types.Result.GetResult<Prisma.$perfilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    pacientes<T extends Prisma.pacientesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.pacientesDefaultArgs<ExtArgs>>): Prisma.Prisma__pacientesClient<runtime.Types.Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface notas_clinicasFieldRefs {
    readonly id: Prisma.FieldRef<"notas_clinicas", 'Int'>;
    readonly paciente_id: Prisma.FieldRef<"notas_clinicas", 'Int'>;
    readonly dentista_id: Prisma.FieldRef<"notas_clinicas", 'String'>;
    readonly cita_id: Prisma.FieldRef<"notas_clinicas", 'Int'>;
    readonly diagnostico: Prisma.FieldRef<"notas_clinicas", 'String'>;
    readonly tratamiento_realizado: Prisma.FieldRef<"notas_clinicas", 'String'>;
    readonly notas_evolucion: Prisma.FieldRef<"notas_clinicas", 'String'>;
    readonly odontograma_estado: Prisma.FieldRef<"notas_clinicas", 'Json'>;
    readonly fecha_consulta: Prisma.FieldRef<"notas_clinicas", 'DateTime'>;
}
export type notas_clinicasFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notas_clinicasSelect<ExtArgs> | null;
    omit?: Prisma.notas_clinicasOmit<ExtArgs> | null;
    include?: Prisma.notas_clinicasInclude<ExtArgs> | null;
    where: Prisma.notas_clinicasWhereUniqueInput;
};
export type notas_clinicasFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notas_clinicasSelect<ExtArgs> | null;
    omit?: Prisma.notas_clinicasOmit<ExtArgs> | null;
    include?: Prisma.notas_clinicasInclude<ExtArgs> | null;
    where: Prisma.notas_clinicasWhereUniqueInput;
};
export type notas_clinicasFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type notas_clinicasFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type notas_clinicasFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type notas_clinicasCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notas_clinicasSelect<ExtArgs> | null;
    omit?: Prisma.notas_clinicasOmit<ExtArgs> | null;
    include?: Prisma.notas_clinicasInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.notas_clinicasCreateInput, Prisma.notas_clinicasUncheckedCreateInput>;
};
export type notas_clinicasCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.notas_clinicasCreateManyInput | Prisma.notas_clinicasCreateManyInput[];
    skipDuplicates?: boolean;
};
export type notas_clinicasCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notas_clinicasSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.notas_clinicasOmit<ExtArgs> | null;
    data: Prisma.notas_clinicasCreateManyInput | Prisma.notas_clinicasCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.notas_clinicasIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type notas_clinicasUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notas_clinicasSelect<ExtArgs> | null;
    omit?: Prisma.notas_clinicasOmit<ExtArgs> | null;
    include?: Prisma.notas_clinicasInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.notas_clinicasUpdateInput, Prisma.notas_clinicasUncheckedUpdateInput>;
    where: Prisma.notas_clinicasWhereUniqueInput;
};
export type notas_clinicasUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.notas_clinicasUpdateManyMutationInput, Prisma.notas_clinicasUncheckedUpdateManyInput>;
    where?: Prisma.notas_clinicasWhereInput;
    limit?: number;
};
export type notas_clinicasUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notas_clinicasSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.notas_clinicasOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.notas_clinicasUpdateManyMutationInput, Prisma.notas_clinicasUncheckedUpdateManyInput>;
    where?: Prisma.notas_clinicasWhereInput;
    limit?: number;
    include?: Prisma.notas_clinicasIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type notas_clinicasUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notas_clinicasSelect<ExtArgs> | null;
    omit?: Prisma.notas_clinicasOmit<ExtArgs> | null;
    include?: Prisma.notas_clinicasInclude<ExtArgs> | null;
    where: Prisma.notas_clinicasWhereUniqueInput;
    create: Prisma.XOR<Prisma.notas_clinicasCreateInput, Prisma.notas_clinicasUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.notas_clinicasUpdateInput, Prisma.notas_clinicasUncheckedUpdateInput>;
};
export type notas_clinicasDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notas_clinicasSelect<ExtArgs> | null;
    omit?: Prisma.notas_clinicasOmit<ExtArgs> | null;
    include?: Prisma.notas_clinicasInclude<ExtArgs> | null;
    where: Prisma.notas_clinicasWhereUniqueInput;
};
export type notas_clinicasDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.notas_clinicasWhereInput;
    limit?: number;
};
export type notas_clinicas$citasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.citasSelect<ExtArgs> | null;
    omit?: Prisma.citasOmit<ExtArgs> | null;
    include?: Prisma.citasInclude<ExtArgs> | null;
    where?: Prisma.citasWhereInput;
};
export type notas_clinicasDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notas_clinicasSelect<ExtArgs> | null;
    omit?: Prisma.notas_clinicasOmit<ExtArgs> | null;
    include?: Prisma.notas_clinicasInclude<ExtArgs> | null;
};
