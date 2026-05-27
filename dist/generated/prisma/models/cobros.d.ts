import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type cobrosModel = runtime.Types.Result.DefaultSelection<Prisma.$cobrosPayload>;
export type AggregateCobros = {
    _count: CobrosCountAggregateOutputType | null;
    _avg: CobrosAvgAggregateOutputType | null;
    _sum: CobrosSumAggregateOutputType | null;
    _min: CobrosMinAggregateOutputType | null;
    _max: CobrosMaxAggregateOutputType | null;
};
export type CobrosAvgAggregateOutputType = {
    id: number | null;
    paciente_id: number | null;
    cita_id: number | null;
    monto_total: runtime.Decimal | null;
    monto_pagado: runtime.Decimal | null;
    saldo_pendiente: runtime.Decimal | null;
};
export type CobrosSumAggregateOutputType = {
    id: number | null;
    paciente_id: number | null;
    cita_id: number | null;
    monto_total: runtime.Decimal | null;
    monto_pagado: runtime.Decimal | null;
    saldo_pendiente: runtime.Decimal | null;
};
export type CobrosMinAggregateOutputType = {
    id: number | null;
    paciente_id: number | null;
    cita_id: number | null;
    monto_total: runtime.Decimal | null;
    monto_pagado: runtime.Decimal | null;
    saldo_pendiente: runtime.Decimal | null;
    fecha_emision: Date | null;
};
export type CobrosMaxAggregateOutputType = {
    id: number | null;
    paciente_id: number | null;
    cita_id: number | null;
    monto_total: runtime.Decimal | null;
    monto_pagado: runtime.Decimal | null;
    saldo_pendiente: runtime.Decimal | null;
    fecha_emision: Date | null;
};
export type CobrosCountAggregateOutputType = {
    id: number;
    paciente_id: number;
    cita_id: number;
    monto_total: number;
    monto_pagado: number;
    saldo_pendiente: number;
    fecha_emision: number;
    _all: number;
};
export type CobrosAvgAggregateInputType = {
    id?: true;
    paciente_id?: true;
    cita_id?: true;
    monto_total?: true;
    monto_pagado?: true;
    saldo_pendiente?: true;
};
export type CobrosSumAggregateInputType = {
    id?: true;
    paciente_id?: true;
    cita_id?: true;
    monto_total?: true;
    monto_pagado?: true;
    saldo_pendiente?: true;
};
export type CobrosMinAggregateInputType = {
    id?: true;
    paciente_id?: true;
    cita_id?: true;
    monto_total?: true;
    monto_pagado?: true;
    saldo_pendiente?: true;
    fecha_emision?: true;
};
export type CobrosMaxAggregateInputType = {
    id?: true;
    paciente_id?: true;
    cita_id?: true;
    monto_total?: true;
    monto_pagado?: true;
    saldo_pendiente?: true;
    fecha_emision?: true;
};
export type CobrosCountAggregateInputType = {
    id?: true;
    paciente_id?: true;
    cita_id?: true;
    monto_total?: true;
    monto_pagado?: true;
    saldo_pendiente?: true;
    fecha_emision?: true;
    _all?: true;
};
export type CobrosAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cobrosWhereInput;
    orderBy?: Prisma.cobrosOrderByWithRelationInput | Prisma.cobrosOrderByWithRelationInput[];
    cursor?: Prisma.cobrosWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CobrosCountAggregateInputType;
    _avg?: CobrosAvgAggregateInputType;
    _sum?: CobrosSumAggregateInputType;
    _min?: CobrosMinAggregateInputType;
    _max?: CobrosMaxAggregateInputType;
};
export type GetCobrosAggregateType<T extends CobrosAggregateArgs> = {
    [P in keyof T & keyof AggregateCobros]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCobros[P]> : Prisma.GetScalarType<T[P], AggregateCobros[P]>;
};
export type cobrosGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cobrosWhereInput;
    orderBy?: Prisma.cobrosOrderByWithAggregationInput | Prisma.cobrosOrderByWithAggregationInput[];
    by: Prisma.CobrosScalarFieldEnum[] | Prisma.CobrosScalarFieldEnum;
    having?: Prisma.cobrosScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CobrosCountAggregateInputType | true;
    _avg?: CobrosAvgAggregateInputType;
    _sum?: CobrosSumAggregateInputType;
    _min?: CobrosMinAggregateInputType;
    _max?: CobrosMaxAggregateInputType;
};
export type CobrosGroupByOutputType = {
    id: number;
    paciente_id: number;
    cita_id: number | null;
    monto_total: runtime.Decimal;
    monto_pagado: runtime.Decimal;
    saldo_pendiente: runtime.Decimal | null;
    fecha_emision: Date | null;
    _count: CobrosCountAggregateOutputType | null;
    _avg: CobrosAvgAggregateOutputType | null;
    _sum: CobrosSumAggregateOutputType | null;
    _min: CobrosMinAggregateOutputType | null;
    _max: CobrosMaxAggregateOutputType | null;
};
export type GetCobrosGroupByPayload<T extends cobrosGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CobrosGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CobrosGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CobrosGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CobrosGroupByOutputType[P]>;
}>>;
export type cobrosWhereInput = {
    AND?: Prisma.cobrosWhereInput | Prisma.cobrosWhereInput[];
    OR?: Prisma.cobrosWhereInput[];
    NOT?: Prisma.cobrosWhereInput | Prisma.cobrosWhereInput[];
    id?: Prisma.IntFilter<"cobros"> | number;
    paciente_id?: Prisma.IntFilter<"cobros"> | number;
    cita_id?: Prisma.IntNullableFilter<"cobros"> | number | null;
    monto_total?: Prisma.DecimalFilter<"cobros"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    monto_pagado?: Prisma.DecimalFilter<"cobros"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    saldo_pendiente?: Prisma.DecimalNullableFilter<"cobros"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fecha_emision?: Prisma.DateTimeNullableFilter<"cobros"> | Date | string | null;
    citas?: Prisma.XOR<Prisma.CitasNullableScalarRelationFilter, Prisma.citasWhereInput> | null;
    pacientes?: Prisma.XOR<Prisma.PacientesScalarRelationFilter, Prisma.pacientesWhereInput>;
    historial_pagos?: Prisma.Historial_pagosListRelationFilter;
};
export type cobrosOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    paciente_id?: Prisma.SortOrder;
    cita_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    monto_total?: Prisma.SortOrder;
    monto_pagado?: Prisma.SortOrder;
    saldo_pendiente?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_emision?: Prisma.SortOrderInput | Prisma.SortOrder;
    citas?: Prisma.citasOrderByWithRelationInput;
    pacientes?: Prisma.pacientesOrderByWithRelationInput;
    historial_pagos?: Prisma.historial_pagosOrderByRelationAggregateInput;
};
export type cobrosWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.cobrosWhereInput | Prisma.cobrosWhereInput[];
    OR?: Prisma.cobrosWhereInput[];
    NOT?: Prisma.cobrosWhereInput | Prisma.cobrosWhereInput[];
    paciente_id?: Prisma.IntFilter<"cobros"> | number;
    cita_id?: Prisma.IntNullableFilter<"cobros"> | number | null;
    monto_total?: Prisma.DecimalFilter<"cobros"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    monto_pagado?: Prisma.DecimalFilter<"cobros"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    saldo_pendiente?: Prisma.DecimalNullableFilter<"cobros"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fecha_emision?: Prisma.DateTimeNullableFilter<"cobros"> | Date | string | null;
    citas?: Prisma.XOR<Prisma.CitasNullableScalarRelationFilter, Prisma.citasWhereInput> | null;
    pacientes?: Prisma.XOR<Prisma.PacientesScalarRelationFilter, Prisma.pacientesWhereInput>;
    historial_pagos?: Prisma.Historial_pagosListRelationFilter;
}, "id">;
export type cobrosOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    paciente_id?: Prisma.SortOrder;
    cita_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    monto_total?: Prisma.SortOrder;
    monto_pagado?: Prisma.SortOrder;
    saldo_pendiente?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_emision?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.cobrosCountOrderByAggregateInput;
    _avg?: Prisma.cobrosAvgOrderByAggregateInput;
    _max?: Prisma.cobrosMaxOrderByAggregateInput;
    _min?: Prisma.cobrosMinOrderByAggregateInput;
    _sum?: Prisma.cobrosSumOrderByAggregateInput;
};
export type cobrosScalarWhereWithAggregatesInput = {
    AND?: Prisma.cobrosScalarWhereWithAggregatesInput | Prisma.cobrosScalarWhereWithAggregatesInput[];
    OR?: Prisma.cobrosScalarWhereWithAggregatesInput[];
    NOT?: Prisma.cobrosScalarWhereWithAggregatesInput | Prisma.cobrosScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"cobros"> | number;
    paciente_id?: Prisma.IntWithAggregatesFilter<"cobros"> | number;
    cita_id?: Prisma.IntNullableWithAggregatesFilter<"cobros"> | number | null;
    monto_total?: Prisma.DecimalWithAggregatesFilter<"cobros"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    monto_pagado?: Prisma.DecimalWithAggregatesFilter<"cobros"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    saldo_pendiente?: Prisma.DecimalNullableWithAggregatesFilter<"cobros"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fecha_emision?: Prisma.DateTimeNullableWithAggregatesFilter<"cobros"> | Date | string | null;
};
export type cobrosCreateInput = {
    monto_total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    monto_pagado?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    saldo_pendiente?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fecha_emision?: Date | string | null;
    citas?: Prisma.citasCreateNestedOneWithoutCobrosInput;
    pacientes: Prisma.pacientesCreateNestedOneWithoutCobrosInput;
    historial_pagos?: Prisma.historial_pagosCreateNestedManyWithoutCobrosInput;
};
export type cobrosUncheckedCreateInput = {
    id?: number;
    paciente_id: number;
    cita_id?: number | null;
    monto_total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    monto_pagado?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    saldo_pendiente?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fecha_emision?: Date | string | null;
    historial_pagos?: Prisma.historial_pagosUncheckedCreateNestedManyWithoutCobrosInput;
};
export type cobrosUpdateInput = {
    monto_total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    monto_pagado?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    saldo_pendiente?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fecha_emision?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    citas?: Prisma.citasUpdateOneWithoutCobrosNestedInput;
    pacientes?: Prisma.pacientesUpdateOneRequiredWithoutCobrosNestedInput;
    historial_pagos?: Prisma.historial_pagosUpdateManyWithoutCobrosNestedInput;
};
export type cobrosUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    paciente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    cita_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    monto_total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    monto_pagado?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    saldo_pendiente?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fecha_emision?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    historial_pagos?: Prisma.historial_pagosUncheckedUpdateManyWithoutCobrosNestedInput;
};
export type cobrosCreateManyInput = {
    id?: number;
    paciente_id: number;
    cita_id?: number | null;
    monto_total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    monto_pagado?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    saldo_pendiente?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fecha_emision?: Date | string | null;
};
export type cobrosUpdateManyMutationInput = {
    monto_total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    monto_pagado?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    saldo_pendiente?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fecha_emision?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type cobrosUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    paciente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    cita_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    monto_total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    monto_pagado?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    saldo_pendiente?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fecha_emision?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type CobrosListRelationFilter = {
    every?: Prisma.cobrosWhereInput;
    some?: Prisma.cobrosWhereInput;
    none?: Prisma.cobrosWhereInput;
};
export type cobrosOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type cobrosCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    paciente_id?: Prisma.SortOrder;
    cita_id?: Prisma.SortOrder;
    monto_total?: Prisma.SortOrder;
    monto_pagado?: Prisma.SortOrder;
    saldo_pendiente?: Prisma.SortOrder;
    fecha_emision?: Prisma.SortOrder;
};
export type cobrosAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    paciente_id?: Prisma.SortOrder;
    cita_id?: Prisma.SortOrder;
    monto_total?: Prisma.SortOrder;
    monto_pagado?: Prisma.SortOrder;
    saldo_pendiente?: Prisma.SortOrder;
};
export type cobrosMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    paciente_id?: Prisma.SortOrder;
    cita_id?: Prisma.SortOrder;
    monto_total?: Prisma.SortOrder;
    monto_pagado?: Prisma.SortOrder;
    saldo_pendiente?: Prisma.SortOrder;
    fecha_emision?: Prisma.SortOrder;
};
export type cobrosMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    paciente_id?: Prisma.SortOrder;
    cita_id?: Prisma.SortOrder;
    monto_total?: Prisma.SortOrder;
    monto_pagado?: Prisma.SortOrder;
    saldo_pendiente?: Prisma.SortOrder;
    fecha_emision?: Prisma.SortOrder;
};
export type cobrosSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    paciente_id?: Prisma.SortOrder;
    cita_id?: Prisma.SortOrder;
    monto_total?: Prisma.SortOrder;
    monto_pagado?: Prisma.SortOrder;
    saldo_pendiente?: Prisma.SortOrder;
};
export type CobrosScalarRelationFilter = {
    is?: Prisma.cobrosWhereInput;
    isNot?: Prisma.cobrosWhereInput;
};
export type cobrosCreateNestedManyWithoutCitasInput = {
    create?: Prisma.XOR<Prisma.cobrosCreateWithoutCitasInput, Prisma.cobrosUncheckedCreateWithoutCitasInput> | Prisma.cobrosCreateWithoutCitasInput[] | Prisma.cobrosUncheckedCreateWithoutCitasInput[];
    connectOrCreate?: Prisma.cobrosCreateOrConnectWithoutCitasInput | Prisma.cobrosCreateOrConnectWithoutCitasInput[];
    createMany?: Prisma.cobrosCreateManyCitasInputEnvelope;
    connect?: Prisma.cobrosWhereUniqueInput | Prisma.cobrosWhereUniqueInput[];
};
export type cobrosUncheckedCreateNestedManyWithoutCitasInput = {
    create?: Prisma.XOR<Prisma.cobrosCreateWithoutCitasInput, Prisma.cobrosUncheckedCreateWithoutCitasInput> | Prisma.cobrosCreateWithoutCitasInput[] | Prisma.cobrosUncheckedCreateWithoutCitasInput[];
    connectOrCreate?: Prisma.cobrosCreateOrConnectWithoutCitasInput | Prisma.cobrosCreateOrConnectWithoutCitasInput[];
    createMany?: Prisma.cobrosCreateManyCitasInputEnvelope;
    connect?: Prisma.cobrosWhereUniqueInput | Prisma.cobrosWhereUniqueInput[];
};
export type cobrosUpdateManyWithoutCitasNestedInput = {
    create?: Prisma.XOR<Prisma.cobrosCreateWithoutCitasInput, Prisma.cobrosUncheckedCreateWithoutCitasInput> | Prisma.cobrosCreateWithoutCitasInput[] | Prisma.cobrosUncheckedCreateWithoutCitasInput[];
    connectOrCreate?: Prisma.cobrosCreateOrConnectWithoutCitasInput | Prisma.cobrosCreateOrConnectWithoutCitasInput[];
    upsert?: Prisma.cobrosUpsertWithWhereUniqueWithoutCitasInput | Prisma.cobrosUpsertWithWhereUniqueWithoutCitasInput[];
    createMany?: Prisma.cobrosCreateManyCitasInputEnvelope;
    set?: Prisma.cobrosWhereUniqueInput | Prisma.cobrosWhereUniqueInput[];
    disconnect?: Prisma.cobrosWhereUniqueInput | Prisma.cobrosWhereUniqueInput[];
    delete?: Prisma.cobrosWhereUniqueInput | Prisma.cobrosWhereUniqueInput[];
    connect?: Prisma.cobrosWhereUniqueInput | Prisma.cobrosWhereUniqueInput[];
    update?: Prisma.cobrosUpdateWithWhereUniqueWithoutCitasInput | Prisma.cobrosUpdateWithWhereUniqueWithoutCitasInput[];
    updateMany?: Prisma.cobrosUpdateManyWithWhereWithoutCitasInput | Prisma.cobrosUpdateManyWithWhereWithoutCitasInput[];
    deleteMany?: Prisma.cobrosScalarWhereInput | Prisma.cobrosScalarWhereInput[];
};
export type cobrosUncheckedUpdateManyWithoutCitasNestedInput = {
    create?: Prisma.XOR<Prisma.cobrosCreateWithoutCitasInput, Prisma.cobrosUncheckedCreateWithoutCitasInput> | Prisma.cobrosCreateWithoutCitasInput[] | Prisma.cobrosUncheckedCreateWithoutCitasInput[];
    connectOrCreate?: Prisma.cobrosCreateOrConnectWithoutCitasInput | Prisma.cobrosCreateOrConnectWithoutCitasInput[];
    upsert?: Prisma.cobrosUpsertWithWhereUniqueWithoutCitasInput | Prisma.cobrosUpsertWithWhereUniqueWithoutCitasInput[];
    createMany?: Prisma.cobrosCreateManyCitasInputEnvelope;
    set?: Prisma.cobrosWhereUniqueInput | Prisma.cobrosWhereUniqueInput[];
    disconnect?: Prisma.cobrosWhereUniqueInput | Prisma.cobrosWhereUniqueInput[];
    delete?: Prisma.cobrosWhereUniqueInput | Prisma.cobrosWhereUniqueInput[];
    connect?: Prisma.cobrosWhereUniqueInput | Prisma.cobrosWhereUniqueInput[];
    update?: Prisma.cobrosUpdateWithWhereUniqueWithoutCitasInput | Prisma.cobrosUpdateWithWhereUniqueWithoutCitasInput[];
    updateMany?: Prisma.cobrosUpdateManyWithWhereWithoutCitasInput | Prisma.cobrosUpdateManyWithWhereWithoutCitasInput[];
    deleteMany?: Prisma.cobrosScalarWhereInput | Prisma.cobrosScalarWhereInput[];
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type NullableDecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type cobrosCreateNestedOneWithoutHistorial_pagosInput = {
    create?: Prisma.XOR<Prisma.cobrosCreateWithoutHistorial_pagosInput, Prisma.cobrosUncheckedCreateWithoutHistorial_pagosInput>;
    connectOrCreate?: Prisma.cobrosCreateOrConnectWithoutHistorial_pagosInput;
    connect?: Prisma.cobrosWhereUniqueInput;
};
export type cobrosUpdateOneRequiredWithoutHistorial_pagosNestedInput = {
    create?: Prisma.XOR<Prisma.cobrosCreateWithoutHistorial_pagosInput, Prisma.cobrosUncheckedCreateWithoutHistorial_pagosInput>;
    connectOrCreate?: Prisma.cobrosCreateOrConnectWithoutHistorial_pagosInput;
    upsert?: Prisma.cobrosUpsertWithoutHistorial_pagosInput;
    connect?: Prisma.cobrosWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.cobrosUpdateToOneWithWhereWithoutHistorial_pagosInput, Prisma.cobrosUpdateWithoutHistorial_pagosInput>, Prisma.cobrosUncheckedUpdateWithoutHistorial_pagosInput>;
};
export type cobrosCreateNestedManyWithoutPacientesInput = {
    create?: Prisma.XOR<Prisma.cobrosCreateWithoutPacientesInput, Prisma.cobrosUncheckedCreateWithoutPacientesInput> | Prisma.cobrosCreateWithoutPacientesInput[] | Prisma.cobrosUncheckedCreateWithoutPacientesInput[];
    connectOrCreate?: Prisma.cobrosCreateOrConnectWithoutPacientesInput | Prisma.cobrosCreateOrConnectWithoutPacientesInput[];
    createMany?: Prisma.cobrosCreateManyPacientesInputEnvelope;
    connect?: Prisma.cobrosWhereUniqueInput | Prisma.cobrosWhereUniqueInput[];
};
export type cobrosUncheckedCreateNestedManyWithoutPacientesInput = {
    create?: Prisma.XOR<Prisma.cobrosCreateWithoutPacientesInput, Prisma.cobrosUncheckedCreateWithoutPacientesInput> | Prisma.cobrosCreateWithoutPacientesInput[] | Prisma.cobrosUncheckedCreateWithoutPacientesInput[];
    connectOrCreate?: Prisma.cobrosCreateOrConnectWithoutPacientesInput | Prisma.cobrosCreateOrConnectWithoutPacientesInput[];
    createMany?: Prisma.cobrosCreateManyPacientesInputEnvelope;
    connect?: Prisma.cobrosWhereUniqueInput | Prisma.cobrosWhereUniqueInput[];
};
export type cobrosUpdateManyWithoutPacientesNestedInput = {
    create?: Prisma.XOR<Prisma.cobrosCreateWithoutPacientesInput, Prisma.cobrosUncheckedCreateWithoutPacientesInput> | Prisma.cobrosCreateWithoutPacientesInput[] | Prisma.cobrosUncheckedCreateWithoutPacientesInput[];
    connectOrCreate?: Prisma.cobrosCreateOrConnectWithoutPacientesInput | Prisma.cobrosCreateOrConnectWithoutPacientesInput[];
    upsert?: Prisma.cobrosUpsertWithWhereUniqueWithoutPacientesInput | Prisma.cobrosUpsertWithWhereUniqueWithoutPacientesInput[];
    createMany?: Prisma.cobrosCreateManyPacientesInputEnvelope;
    set?: Prisma.cobrosWhereUniqueInput | Prisma.cobrosWhereUniqueInput[];
    disconnect?: Prisma.cobrosWhereUniqueInput | Prisma.cobrosWhereUniqueInput[];
    delete?: Prisma.cobrosWhereUniqueInput | Prisma.cobrosWhereUniqueInput[];
    connect?: Prisma.cobrosWhereUniqueInput | Prisma.cobrosWhereUniqueInput[];
    update?: Prisma.cobrosUpdateWithWhereUniqueWithoutPacientesInput | Prisma.cobrosUpdateWithWhereUniqueWithoutPacientesInput[];
    updateMany?: Prisma.cobrosUpdateManyWithWhereWithoutPacientesInput | Prisma.cobrosUpdateManyWithWhereWithoutPacientesInput[];
    deleteMany?: Prisma.cobrosScalarWhereInput | Prisma.cobrosScalarWhereInput[];
};
export type cobrosUncheckedUpdateManyWithoutPacientesNestedInput = {
    create?: Prisma.XOR<Prisma.cobrosCreateWithoutPacientesInput, Prisma.cobrosUncheckedCreateWithoutPacientesInput> | Prisma.cobrosCreateWithoutPacientesInput[] | Prisma.cobrosUncheckedCreateWithoutPacientesInput[];
    connectOrCreate?: Prisma.cobrosCreateOrConnectWithoutPacientesInput | Prisma.cobrosCreateOrConnectWithoutPacientesInput[];
    upsert?: Prisma.cobrosUpsertWithWhereUniqueWithoutPacientesInput | Prisma.cobrosUpsertWithWhereUniqueWithoutPacientesInput[];
    createMany?: Prisma.cobrosCreateManyPacientesInputEnvelope;
    set?: Prisma.cobrosWhereUniqueInput | Prisma.cobrosWhereUniqueInput[];
    disconnect?: Prisma.cobrosWhereUniqueInput | Prisma.cobrosWhereUniqueInput[];
    delete?: Prisma.cobrosWhereUniqueInput | Prisma.cobrosWhereUniqueInput[];
    connect?: Prisma.cobrosWhereUniqueInput | Prisma.cobrosWhereUniqueInput[];
    update?: Prisma.cobrosUpdateWithWhereUniqueWithoutPacientesInput | Prisma.cobrosUpdateWithWhereUniqueWithoutPacientesInput[];
    updateMany?: Prisma.cobrosUpdateManyWithWhereWithoutPacientesInput | Prisma.cobrosUpdateManyWithWhereWithoutPacientesInput[];
    deleteMany?: Prisma.cobrosScalarWhereInput | Prisma.cobrosScalarWhereInput[];
};
export type cobrosCreateWithoutCitasInput = {
    monto_total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    monto_pagado?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    saldo_pendiente?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fecha_emision?: Date | string | null;
    pacientes: Prisma.pacientesCreateNestedOneWithoutCobrosInput;
    historial_pagos?: Prisma.historial_pagosCreateNestedManyWithoutCobrosInput;
};
export type cobrosUncheckedCreateWithoutCitasInput = {
    id?: number;
    paciente_id: number;
    monto_total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    monto_pagado?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    saldo_pendiente?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fecha_emision?: Date | string | null;
    historial_pagos?: Prisma.historial_pagosUncheckedCreateNestedManyWithoutCobrosInput;
};
export type cobrosCreateOrConnectWithoutCitasInput = {
    where: Prisma.cobrosWhereUniqueInput;
    create: Prisma.XOR<Prisma.cobrosCreateWithoutCitasInput, Prisma.cobrosUncheckedCreateWithoutCitasInput>;
};
export type cobrosCreateManyCitasInputEnvelope = {
    data: Prisma.cobrosCreateManyCitasInput | Prisma.cobrosCreateManyCitasInput[];
    skipDuplicates?: boolean;
};
export type cobrosUpsertWithWhereUniqueWithoutCitasInput = {
    where: Prisma.cobrosWhereUniqueInput;
    update: Prisma.XOR<Prisma.cobrosUpdateWithoutCitasInput, Prisma.cobrosUncheckedUpdateWithoutCitasInput>;
    create: Prisma.XOR<Prisma.cobrosCreateWithoutCitasInput, Prisma.cobrosUncheckedCreateWithoutCitasInput>;
};
export type cobrosUpdateWithWhereUniqueWithoutCitasInput = {
    where: Prisma.cobrosWhereUniqueInput;
    data: Prisma.XOR<Prisma.cobrosUpdateWithoutCitasInput, Prisma.cobrosUncheckedUpdateWithoutCitasInput>;
};
export type cobrosUpdateManyWithWhereWithoutCitasInput = {
    where: Prisma.cobrosScalarWhereInput;
    data: Prisma.XOR<Prisma.cobrosUpdateManyMutationInput, Prisma.cobrosUncheckedUpdateManyWithoutCitasInput>;
};
export type cobrosScalarWhereInput = {
    AND?: Prisma.cobrosScalarWhereInput | Prisma.cobrosScalarWhereInput[];
    OR?: Prisma.cobrosScalarWhereInput[];
    NOT?: Prisma.cobrosScalarWhereInput | Prisma.cobrosScalarWhereInput[];
    id?: Prisma.IntFilter<"cobros"> | number;
    paciente_id?: Prisma.IntFilter<"cobros"> | number;
    cita_id?: Prisma.IntNullableFilter<"cobros"> | number | null;
    monto_total?: Prisma.DecimalFilter<"cobros"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    monto_pagado?: Prisma.DecimalFilter<"cobros"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    saldo_pendiente?: Prisma.DecimalNullableFilter<"cobros"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fecha_emision?: Prisma.DateTimeNullableFilter<"cobros"> | Date | string | null;
};
export type cobrosCreateWithoutHistorial_pagosInput = {
    monto_total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    monto_pagado?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    saldo_pendiente?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fecha_emision?: Date | string | null;
    citas?: Prisma.citasCreateNestedOneWithoutCobrosInput;
    pacientes: Prisma.pacientesCreateNestedOneWithoutCobrosInput;
};
export type cobrosUncheckedCreateWithoutHistorial_pagosInput = {
    id?: number;
    paciente_id: number;
    cita_id?: number | null;
    monto_total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    monto_pagado?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    saldo_pendiente?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fecha_emision?: Date | string | null;
};
export type cobrosCreateOrConnectWithoutHistorial_pagosInput = {
    where: Prisma.cobrosWhereUniqueInput;
    create: Prisma.XOR<Prisma.cobrosCreateWithoutHistorial_pagosInput, Prisma.cobrosUncheckedCreateWithoutHistorial_pagosInput>;
};
export type cobrosUpsertWithoutHistorial_pagosInput = {
    update: Prisma.XOR<Prisma.cobrosUpdateWithoutHistorial_pagosInput, Prisma.cobrosUncheckedUpdateWithoutHistorial_pagosInput>;
    create: Prisma.XOR<Prisma.cobrosCreateWithoutHistorial_pagosInput, Prisma.cobrosUncheckedCreateWithoutHistorial_pagosInput>;
    where?: Prisma.cobrosWhereInput;
};
export type cobrosUpdateToOneWithWhereWithoutHistorial_pagosInput = {
    where?: Prisma.cobrosWhereInput;
    data: Prisma.XOR<Prisma.cobrosUpdateWithoutHistorial_pagosInput, Prisma.cobrosUncheckedUpdateWithoutHistorial_pagosInput>;
};
export type cobrosUpdateWithoutHistorial_pagosInput = {
    monto_total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    monto_pagado?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    saldo_pendiente?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fecha_emision?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    citas?: Prisma.citasUpdateOneWithoutCobrosNestedInput;
    pacientes?: Prisma.pacientesUpdateOneRequiredWithoutCobrosNestedInput;
};
export type cobrosUncheckedUpdateWithoutHistorial_pagosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    paciente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    cita_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    monto_total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    monto_pagado?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    saldo_pendiente?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fecha_emision?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type cobrosCreateWithoutPacientesInput = {
    monto_total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    monto_pagado?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    saldo_pendiente?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fecha_emision?: Date | string | null;
    citas?: Prisma.citasCreateNestedOneWithoutCobrosInput;
    historial_pagos?: Prisma.historial_pagosCreateNestedManyWithoutCobrosInput;
};
export type cobrosUncheckedCreateWithoutPacientesInput = {
    id?: number;
    cita_id?: number | null;
    monto_total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    monto_pagado?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    saldo_pendiente?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fecha_emision?: Date | string | null;
    historial_pagos?: Prisma.historial_pagosUncheckedCreateNestedManyWithoutCobrosInput;
};
export type cobrosCreateOrConnectWithoutPacientesInput = {
    where: Prisma.cobrosWhereUniqueInput;
    create: Prisma.XOR<Prisma.cobrosCreateWithoutPacientesInput, Prisma.cobrosUncheckedCreateWithoutPacientesInput>;
};
export type cobrosCreateManyPacientesInputEnvelope = {
    data: Prisma.cobrosCreateManyPacientesInput | Prisma.cobrosCreateManyPacientesInput[];
    skipDuplicates?: boolean;
};
export type cobrosUpsertWithWhereUniqueWithoutPacientesInput = {
    where: Prisma.cobrosWhereUniqueInput;
    update: Prisma.XOR<Prisma.cobrosUpdateWithoutPacientesInput, Prisma.cobrosUncheckedUpdateWithoutPacientesInput>;
    create: Prisma.XOR<Prisma.cobrosCreateWithoutPacientesInput, Prisma.cobrosUncheckedCreateWithoutPacientesInput>;
};
export type cobrosUpdateWithWhereUniqueWithoutPacientesInput = {
    where: Prisma.cobrosWhereUniqueInput;
    data: Prisma.XOR<Prisma.cobrosUpdateWithoutPacientesInput, Prisma.cobrosUncheckedUpdateWithoutPacientesInput>;
};
export type cobrosUpdateManyWithWhereWithoutPacientesInput = {
    where: Prisma.cobrosScalarWhereInput;
    data: Prisma.XOR<Prisma.cobrosUpdateManyMutationInput, Prisma.cobrosUncheckedUpdateManyWithoutPacientesInput>;
};
export type cobrosCreateManyCitasInput = {
    id?: number;
    paciente_id: number;
    monto_total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    monto_pagado?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    saldo_pendiente?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fecha_emision?: Date | string | null;
};
export type cobrosUpdateWithoutCitasInput = {
    monto_total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    monto_pagado?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    saldo_pendiente?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fecha_emision?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pacientes?: Prisma.pacientesUpdateOneRequiredWithoutCobrosNestedInput;
    historial_pagos?: Prisma.historial_pagosUpdateManyWithoutCobrosNestedInput;
};
export type cobrosUncheckedUpdateWithoutCitasInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    paciente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    monto_total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    monto_pagado?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    saldo_pendiente?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fecha_emision?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    historial_pagos?: Prisma.historial_pagosUncheckedUpdateManyWithoutCobrosNestedInput;
};
export type cobrosUncheckedUpdateManyWithoutCitasInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    paciente_id?: Prisma.IntFieldUpdateOperationsInput | number;
    monto_total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    monto_pagado?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    saldo_pendiente?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fecha_emision?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type cobrosCreateManyPacientesInput = {
    id?: number;
    cita_id?: number | null;
    monto_total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    monto_pagado?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    saldo_pendiente?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fecha_emision?: Date | string | null;
};
export type cobrosUpdateWithoutPacientesInput = {
    monto_total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    monto_pagado?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    saldo_pendiente?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fecha_emision?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    citas?: Prisma.citasUpdateOneWithoutCobrosNestedInput;
    historial_pagos?: Prisma.historial_pagosUpdateManyWithoutCobrosNestedInput;
};
export type cobrosUncheckedUpdateWithoutPacientesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    cita_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    monto_total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    monto_pagado?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    saldo_pendiente?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fecha_emision?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    historial_pagos?: Prisma.historial_pagosUncheckedUpdateManyWithoutCobrosNestedInput;
};
export type cobrosUncheckedUpdateManyWithoutPacientesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    cita_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    monto_total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    monto_pagado?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    saldo_pendiente?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fecha_emision?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type CobrosCountOutputType = {
    historial_pagos: number;
};
export type CobrosCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    historial_pagos?: boolean | CobrosCountOutputTypeCountHistorial_pagosArgs;
};
export type CobrosCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CobrosCountOutputTypeSelect<ExtArgs> | null;
};
export type CobrosCountOutputTypeCountHistorial_pagosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.historial_pagosWhereInput;
};
export type cobrosSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    paciente_id?: boolean;
    cita_id?: boolean;
    monto_total?: boolean;
    monto_pagado?: boolean;
    saldo_pendiente?: boolean;
    fecha_emision?: boolean;
    citas?: boolean | Prisma.cobros$citasArgs<ExtArgs>;
    pacientes?: boolean | Prisma.pacientesDefaultArgs<ExtArgs>;
    historial_pagos?: boolean | Prisma.cobros$historial_pagosArgs<ExtArgs>;
    _count?: boolean | Prisma.CobrosCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cobros"]>;
export type cobrosSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    paciente_id?: boolean;
    cita_id?: boolean;
    monto_total?: boolean;
    monto_pagado?: boolean;
    saldo_pendiente?: boolean;
    fecha_emision?: boolean;
    citas?: boolean | Prisma.cobros$citasArgs<ExtArgs>;
    pacientes?: boolean | Prisma.pacientesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cobros"]>;
export type cobrosSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    paciente_id?: boolean;
    cita_id?: boolean;
    monto_total?: boolean;
    monto_pagado?: boolean;
    saldo_pendiente?: boolean;
    fecha_emision?: boolean;
    citas?: boolean | Prisma.cobros$citasArgs<ExtArgs>;
    pacientes?: boolean | Prisma.pacientesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cobros"]>;
export type cobrosSelectScalar = {
    id?: boolean;
    paciente_id?: boolean;
    cita_id?: boolean;
    monto_total?: boolean;
    monto_pagado?: boolean;
    saldo_pendiente?: boolean;
    fecha_emision?: boolean;
};
export type cobrosOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "paciente_id" | "cita_id" | "monto_total" | "monto_pagado" | "saldo_pendiente" | "fecha_emision", ExtArgs["result"]["cobros"]>;
export type cobrosInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    citas?: boolean | Prisma.cobros$citasArgs<ExtArgs>;
    pacientes?: boolean | Prisma.pacientesDefaultArgs<ExtArgs>;
    historial_pagos?: boolean | Prisma.cobros$historial_pagosArgs<ExtArgs>;
    _count?: boolean | Prisma.CobrosCountOutputTypeDefaultArgs<ExtArgs>;
};
export type cobrosIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    citas?: boolean | Prisma.cobros$citasArgs<ExtArgs>;
    pacientes?: boolean | Prisma.pacientesDefaultArgs<ExtArgs>;
};
export type cobrosIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    citas?: boolean | Prisma.cobros$citasArgs<ExtArgs>;
    pacientes?: boolean | Prisma.pacientesDefaultArgs<ExtArgs>;
};
export type $cobrosPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "cobros";
    objects: {
        citas: Prisma.$citasPayload<ExtArgs> | null;
        pacientes: Prisma.$pacientesPayload<ExtArgs>;
        historial_pagos: Prisma.$historial_pagosPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        paciente_id: number;
        cita_id: number | null;
        monto_total: runtime.Decimal;
        monto_pagado: runtime.Decimal;
        saldo_pendiente: runtime.Decimal | null;
        fecha_emision: Date | null;
    }, ExtArgs["result"]["cobros"]>;
    composites: {};
};
export type cobrosGetPayload<S extends boolean | null | undefined | cobrosDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$cobrosPayload, S>;
export type cobrosCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<cobrosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CobrosCountAggregateInputType | true;
};
export interface cobrosDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['cobros'];
        meta: {
            name: 'cobros';
        };
    };
    findUnique<T extends cobrosFindUniqueArgs>(args: Prisma.SelectSubset<T, cobrosFindUniqueArgs<ExtArgs>>): Prisma.Prisma__cobrosClient<runtime.Types.Result.GetResult<Prisma.$cobrosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends cobrosFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, cobrosFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__cobrosClient<runtime.Types.Result.GetResult<Prisma.$cobrosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends cobrosFindFirstArgs>(args?: Prisma.SelectSubset<T, cobrosFindFirstArgs<ExtArgs>>): Prisma.Prisma__cobrosClient<runtime.Types.Result.GetResult<Prisma.$cobrosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends cobrosFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, cobrosFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__cobrosClient<runtime.Types.Result.GetResult<Prisma.$cobrosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends cobrosFindManyArgs>(args?: Prisma.SelectSubset<T, cobrosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$cobrosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends cobrosCreateArgs>(args: Prisma.SelectSubset<T, cobrosCreateArgs<ExtArgs>>): Prisma.Prisma__cobrosClient<runtime.Types.Result.GetResult<Prisma.$cobrosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends cobrosCreateManyArgs>(args?: Prisma.SelectSubset<T, cobrosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends cobrosCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, cobrosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$cobrosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends cobrosDeleteArgs>(args: Prisma.SelectSubset<T, cobrosDeleteArgs<ExtArgs>>): Prisma.Prisma__cobrosClient<runtime.Types.Result.GetResult<Prisma.$cobrosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends cobrosUpdateArgs>(args: Prisma.SelectSubset<T, cobrosUpdateArgs<ExtArgs>>): Prisma.Prisma__cobrosClient<runtime.Types.Result.GetResult<Prisma.$cobrosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends cobrosDeleteManyArgs>(args?: Prisma.SelectSubset<T, cobrosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends cobrosUpdateManyArgs>(args: Prisma.SelectSubset<T, cobrosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends cobrosUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, cobrosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$cobrosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends cobrosUpsertArgs>(args: Prisma.SelectSubset<T, cobrosUpsertArgs<ExtArgs>>): Prisma.Prisma__cobrosClient<runtime.Types.Result.GetResult<Prisma.$cobrosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends cobrosCountArgs>(args?: Prisma.Subset<T, cobrosCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CobrosCountAggregateOutputType> : number>;
    aggregate<T extends CobrosAggregateArgs>(args: Prisma.Subset<T, CobrosAggregateArgs>): Prisma.PrismaPromise<GetCobrosAggregateType<T>>;
    groupBy<T extends cobrosGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: cobrosGroupByArgs['orderBy'];
    } : {
        orderBy?: cobrosGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, cobrosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCobrosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: cobrosFieldRefs;
}
export interface Prisma__cobrosClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    citas<T extends Prisma.cobros$citasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.cobros$citasArgs<ExtArgs>>): Prisma.Prisma__citasClient<runtime.Types.Result.GetResult<Prisma.$citasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    pacientes<T extends Prisma.pacientesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.pacientesDefaultArgs<ExtArgs>>): Prisma.Prisma__pacientesClient<runtime.Types.Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    historial_pagos<T extends Prisma.cobros$historial_pagosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.cobros$historial_pagosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$historial_pagosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface cobrosFieldRefs {
    readonly id: Prisma.FieldRef<"cobros", 'Int'>;
    readonly paciente_id: Prisma.FieldRef<"cobros", 'Int'>;
    readonly cita_id: Prisma.FieldRef<"cobros", 'Int'>;
    readonly monto_total: Prisma.FieldRef<"cobros", 'Decimal'>;
    readonly monto_pagado: Prisma.FieldRef<"cobros", 'Decimal'>;
    readonly saldo_pendiente: Prisma.FieldRef<"cobros", 'Decimal'>;
    readonly fecha_emision: Prisma.FieldRef<"cobros", 'DateTime'>;
}
export type cobrosFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cobrosSelect<ExtArgs> | null;
    omit?: Prisma.cobrosOmit<ExtArgs> | null;
    include?: Prisma.cobrosInclude<ExtArgs> | null;
    where: Prisma.cobrosWhereUniqueInput;
};
export type cobrosFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cobrosSelect<ExtArgs> | null;
    omit?: Prisma.cobrosOmit<ExtArgs> | null;
    include?: Prisma.cobrosInclude<ExtArgs> | null;
    where: Prisma.cobrosWhereUniqueInput;
};
export type cobrosFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type cobrosFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type cobrosFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type cobrosCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cobrosSelect<ExtArgs> | null;
    omit?: Prisma.cobrosOmit<ExtArgs> | null;
    include?: Prisma.cobrosInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.cobrosCreateInput, Prisma.cobrosUncheckedCreateInput>;
};
export type cobrosCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.cobrosCreateManyInput | Prisma.cobrosCreateManyInput[];
    skipDuplicates?: boolean;
};
export type cobrosCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cobrosSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.cobrosOmit<ExtArgs> | null;
    data: Prisma.cobrosCreateManyInput | Prisma.cobrosCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.cobrosIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type cobrosUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cobrosSelect<ExtArgs> | null;
    omit?: Prisma.cobrosOmit<ExtArgs> | null;
    include?: Prisma.cobrosInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.cobrosUpdateInput, Prisma.cobrosUncheckedUpdateInput>;
    where: Prisma.cobrosWhereUniqueInput;
};
export type cobrosUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.cobrosUpdateManyMutationInput, Prisma.cobrosUncheckedUpdateManyInput>;
    where?: Prisma.cobrosWhereInput;
    limit?: number;
};
export type cobrosUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cobrosSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.cobrosOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.cobrosUpdateManyMutationInput, Prisma.cobrosUncheckedUpdateManyInput>;
    where?: Prisma.cobrosWhereInput;
    limit?: number;
    include?: Prisma.cobrosIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type cobrosUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cobrosSelect<ExtArgs> | null;
    omit?: Prisma.cobrosOmit<ExtArgs> | null;
    include?: Prisma.cobrosInclude<ExtArgs> | null;
    where: Prisma.cobrosWhereUniqueInput;
    create: Prisma.XOR<Prisma.cobrosCreateInput, Prisma.cobrosUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.cobrosUpdateInput, Prisma.cobrosUncheckedUpdateInput>;
};
export type cobrosDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cobrosSelect<ExtArgs> | null;
    omit?: Prisma.cobrosOmit<ExtArgs> | null;
    include?: Prisma.cobrosInclude<ExtArgs> | null;
    where: Prisma.cobrosWhereUniqueInput;
};
export type cobrosDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cobrosWhereInput;
    limit?: number;
};
export type cobros$citasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.citasSelect<ExtArgs> | null;
    omit?: Prisma.citasOmit<ExtArgs> | null;
    include?: Prisma.citasInclude<ExtArgs> | null;
    where?: Prisma.citasWhereInput;
};
export type cobros$historial_pagosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.historial_pagosSelect<ExtArgs> | null;
    omit?: Prisma.historial_pagosOmit<ExtArgs> | null;
    include?: Prisma.historial_pagosInclude<ExtArgs> | null;
    where?: Prisma.historial_pagosWhereInput;
    orderBy?: Prisma.historial_pagosOrderByWithRelationInput | Prisma.historial_pagosOrderByWithRelationInput[];
    cursor?: Prisma.historial_pagosWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Historial_pagosScalarFieldEnum | Prisma.Historial_pagosScalarFieldEnum[];
};
export type cobrosDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cobrosSelect<ExtArgs> | null;
    omit?: Prisma.cobrosOmit<ExtArgs> | null;
    include?: Prisma.cobrosInclude<ExtArgs> | null;
};
