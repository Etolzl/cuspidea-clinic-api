import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type historial_pagosModel = runtime.Types.Result.DefaultSelection<Prisma.$historial_pagosPayload>;
export type AggregateHistorial_pagos = {
    _count: Historial_pagosCountAggregateOutputType | null;
    _avg: Historial_pagosAvgAggregateOutputType | null;
    _sum: Historial_pagosSumAggregateOutputType | null;
    _min: Historial_pagosMinAggregateOutputType | null;
    _max: Historial_pagosMaxAggregateOutputType | null;
};
export type Historial_pagosAvgAggregateOutputType = {
    id: number | null;
    cobro_id: number | null;
    monto_abonado: runtime.Decimal | null;
};
export type Historial_pagosSumAggregateOutputType = {
    id: number | null;
    cobro_id: number | null;
    monto_abonado: runtime.Decimal | null;
};
export type Historial_pagosMinAggregateOutputType = {
    id: number | null;
    cobro_id: number | null;
    monto_abonado: runtime.Decimal | null;
    metodo_pago: string | null;
    fecha_pago: Date | null;
};
export type Historial_pagosMaxAggregateOutputType = {
    id: number | null;
    cobro_id: number | null;
    monto_abonado: runtime.Decimal | null;
    metodo_pago: string | null;
    fecha_pago: Date | null;
};
export type Historial_pagosCountAggregateOutputType = {
    id: number;
    cobro_id: number;
    monto_abonado: number;
    metodo_pago: number;
    fecha_pago: number;
    _all: number;
};
export type Historial_pagosAvgAggregateInputType = {
    id?: true;
    cobro_id?: true;
    monto_abonado?: true;
};
export type Historial_pagosSumAggregateInputType = {
    id?: true;
    cobro_id?: true;
    monto_abonado?: true;
};
export type Historial_pagosMinAggregateInputType = {
    id?: true;
    cobro_id?: true;
    monto_abonado?: true;
    metodo_pago?: true;
    fecha_pago?: true;
};
export type Historial_pagosMaxAggregateInputType = {
    id?: true;
    cobro_id?: true;
    monto_abonado?: true;
    metodo_pago?: true;
    fecha_pago?: true;
};
export type Historial_pagosCountAggregateInputType = {
    id?: true;
    cobro_id?: true;
    monto_abonado?: true;
    metodo_pago?: true;
    fecha_pago?: true;
    _all?: true;
};
export type Historial_pagosAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.historial_pagosWhereInput;
    orderBy?: Prisma.historial_pagosOrderByWithRelationInput | Prisma.historial_pagosOrderByWithRelationInput[];
    cursor?: Prisma.historial_pagosWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Historial_pagosCountAggregateInputType;
    _avg?: Historial_pagosAvgAggregateInputType;
    _sum?: Historial_pagosSumAggregateInputType;
    _min?: Historial_pagosMinAggregateInputType;
    _max?: Historial_pagosMaxAggregateInputType;
};
export type GetHistorial_pagosAggregateType<T extends Historial_pagosAggregateArgs> = {
    [P in keyof T & keyof AggregateHistorial_pagos]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateHistorial_pagos[P]> : Prisma.GetScalarType<T[P], AggregateHistorial_pagos[P]>;
};
export type historial_pagosGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.historial_pagosWhereInput;
    orderBy?: Prisma.historial_pagosOrderByWithAggregationInput | Prisma.historial_pagosOrderByWithAggregationInput[];
    by: Prisma.Historial_pagosScalarFieldEnum[] | Prisma.Historial_pagosScalarFieldEnum;
    having?: Prisma.historial_pagosScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Historial_pagosCountAggregateInputType | true;
    _avg?: Historial_pagosAvgAggregateInputType;
    _sum?: Historial_pagosSumAggregateInputType;
    _min?: Historial_pagosMinAggregateInputType;
    _max?: Historial_pagosMaxAggregateInputType;
};
export type Historial_pagosGroupByOutputType = {
    id: number;
    cobro_id: number;
    monto_abonado: runtime.Decimal;
    metodo_pago: string | null;
    fecha_pago: Date | null;
    _count: Historial_pagosCountAggregateOutputType | null;
    _avg: Historial_pagosAvgAggregateOutputType | null;
    _sum: Historial_pagosSumAggregateOutputType | null;
    _min: Historial_pagosMinAggregateOutputType | null;
    _max: Historial_pagosMaxAggregateOutputType | null;
};
export type GetHistorial_pagosGroupByPayload<T extends historial_pagosGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Historial_pagosGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Historial_pagosGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Historial_pagosGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Historial_pagosGroupByOutputType[P]>;
}>>;
export type historial_pagosWhereInput = {
    AND?: Prisma.historial_pagosWhereInput | Prisma.historial_pagosWhereInput[];
    OR?: Prisma.historial_pagosWhereInput[];
    NOT?: Prisma.historial_pagosWhereInput | Prisma.historial_pagosWhereInput[];
    id?: Prisma.IntFilter<"historial_pagos"> | number;
    cobro_id?: Prisma.IntFilter<"historial_pagos"> | number;
    monto_abonado?: Prisma.DecimalFilter<"historial_pagos"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodo_pago?: Prisma.StringNullableFilter<"historial_pagos"> | string | null;
    fecha_pago?: Prisma.DateTimeNullableFilter<"historial_pagos"> | Date | string | null;
    cobros?: Prisma.XOR<Prisma.CobrosScalarRelationFilter, Prisma.cobrosWhereInput>;
};
export type historial_pagosOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    cobro_id?: Prisma.SortOrder;
    monto_abonado?: Prisma.SortOrder;
    metodo_pago?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_pago?: Prisma.SortOrderInput | Prisma.SortOrder;
    cobros?: Prisma.cobrosOrderByWithRelationInput;
};
export type historial_pagosWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.historial_pagosWhereInput | Prisma.historial_pagosWhereInput[];
    OR?: Prisma.historial_pagosWhereInput[];
    NOT?: Prisma.historial_pagosWhereInput | Prisma.historial_pagosWhereInput[];
    cobro_id?: Prisma.IntFilter<"historial_pagos"> | number;
    monto_abonado?: Prisma.DecimalFilter<"historial_pagos"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodo_pago?: Prisma.StringNullableFilter<"historial_pagos"> | string | null;
    fecha_pago?: Prisma.DateTimeNullableFilter<"historial_pagos"> | Date | string | null;
    cobros?: Prisma.XOR<Prisma.CobrosScalarRelationFilter, Prisma.cobrosWhereInput>;
}, "id">;
export type historial_pagosOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    cobro_id?: Prisma.SortOrder;
    monto_abonado?: Prisma.SortOrder;
    metodo_pago?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_pago?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.historial_pagosCountOrderByAggregateInput;
    _avg?: Prisma.historial_pagosAvgOrderByAggregateInput;
    _max?: Prisma.historial_pagosMaxOrderByAggregateInput;
    _min?: Prisma.historial_pagosMinOrderByAggregateInput;
    _sum?: Prisma.historial_pagosSumOrderByAggregateInput;
};
export type historial_pagosScalarWhereWithAggregatesInput = {
    AND?: Prisma.historial_pagosScalarWhereWithAggregatesInput | Prisma.historial_pagosScalarWhereWithAggregatesInput[];
    OR?: Prisma.historial_pagosScalarWhereWithAggregatesInput[];
    NOT?: Prisma.historial_pagosScalarWhereWithAggregatesInput | Prisma.historial_pagosScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"historial_pagos"> | number;
    cobro_id?: Prisma.IntWithAggregatesFilter<"historial_pagos"> | number;
    monto_abonado?: Prisma.DecimalWithAggregatesFilter<"historial_pagos"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodo_pago?: Prisma.StringNullableWithAggregatesFilter<"historial_pagos"> | string | null;
    fecha_pago?: Prisma.DateTimeNullableWithAggregatesFilter<"historial_pagos"> | Date | string | null;
};
export type historial_pagosCreateInput = {
    monto_abonado: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodo_pago?: string | null;
    fecha_pago?: Date | string | null;
    cobros: Prisma.cobrosCreateNestedOneWithoutHistorial_pagosInput;
};
export type historial_pagosUncheckedCreateInput = {
    id?: number;
    cobro_id: number;
    monto_abonado: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodo_pago?: string | null;
    fecha_pago?: Date | string | null;
};
export type historial_pagosUpdateInput = {
    monto_abonado?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodo_pago?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_pago?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cobros?: Prisma.cobrosUpdateOneRequiredWithoutHistorial_pagosNestedInput;
};
export type historial_pagosUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    cobro_id?: Prisma.IntFieldUpdateOperationsInput | number;
    monto_abonado?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodo_pago?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_pago?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type historial_pagosCreateManyInput = {
    id?: number;
    cobro_id: number;
    monto_abonado: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodo_pago?: string | null;
    fecha_pago?: Date | string | null;
};
export type historial_pagosUpdateManyMutationInput = {
    monto_abonado?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodo_pago?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_pago?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type historial_pagosUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    cobro_id?: Prisma.IntFieldUpdateOperationsInput | number;
    monto_abonado?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodo_pago?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_pago?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Historial_pagosListRelationFilter = {
    every?: Prisma.historial_pagosWhereInput;
    some?: Prisma.historial_pagosWhereInput;
    none?: Prisma.historial_pagosWhereInput;
};
export type historial_pagosOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type historial_pagosCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cobro_id?: Prisma.SortOrder;
    monto_abonado?: Prisma.SortOrder;
    metodo_pago?: Prisma.SortOrder;
    fecha_pago?: Prisma.SortOrder;
};
export type historial_pagosAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cobro_id?: Prisma.SortOrder;
    monto_abonado?: Prisma.SortOrder;
};
export type historial_pagosMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cobro_id?: Prisma.SortOrder;
    monto_abonado?: Prisma.SortOrder;
    metodo_pago?: Prisma.SortOrder;
    fecha_pago?: Prisma.SortOrder;
};
export type historial_pagosMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cobro_id?: Prisma.SortOrder;
    monto_abonado?: Prisma.SortOrder;
    metodo_pago?: Prisma.SortOrder;
    fecha_pago?: Prisma.SortOrder;
};
export type historial_pagosSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cobro_id?: Prisma.SortOrder;
    monto_abonado?: Prisma.SortOrder;
};
export type historial_pagosCreateNestedManyWithoutCobrosInput = {
    create?: Prisma.XOR<Prisma.historial_pagosCreateWithoutCobrosInput, Prisma.historial_pagosUncheckedCreateWithoutCobrosInput> | Prisma.historial_pagosCreateWithoutCobrosInput[] | Prisma.historial_pagosUncheckedCreateWithoutCobrosInput[];
    connectOrCreate?: Prisma.historial_pagosCreateOrConnectWithoutCobrosInput | Prisma.historial_pagosCreateOrConnectWithoutCobrosInput[];
    createMany?: Prisma.historial_pagosCreateManyCobrosInputEnvelope;
    connect?: Prisma.historial_pagosWhereUniqueInput | Prisma.historial_pagosWhereUniqueInput[];
};
export type historial_pagosUncheckedCreateNestedManyWithoutCobrosInput = {
    create?: Prisma.XOR<Prisma.historial_pagosCreateWithoutCobrosInput, Prisma.historial_pagosUncheckedCreateWithoutCobrosInput> | Prisma.historial_pagosCreateWithoutCobrosInput[] | Prisma.historial_pagosUncheckedCreateWithoutCobrosInput[];
    connectOrCreate?: Prisma.historial_pagosCreateOrConnectWithoutCobrosInput | Prisma.historial_pagosCreateOrConnectWithoutCobrosInput[];
    createMany?: Prisma.historial_pagosCreateManyCobrosInputEnvelope;
    connect?: Prisma.historial_pagosWhereUniqueInput | Prisma.historial_pagosWhereUniqueInput[];
};
export type historial_pagosUpdateManyWithoutCobrosNestedInput = {
    create?: Prisma.XOR<Prisma.historial_pagosCreateWithoutCobrosInput, Prisma.historial_pagosUncheckedCreateWithoutCobrosInput> | Prisma.historial_pagosCreateWithoutCobrosInput[] | Prisma.historial_pagosUncheckedCreateWithoutCobrosInput[];
    connectOrCreate?: Prisma.historial_pagosCreateOrConnectWithoutCobrosInput | Prisma.historial_pagosCreateOrConnectWithoutCobrosInput[];
    upsert?: Prisma.historial_pagosUpsertWithWhereUniqueWithoutCobrosInput | Prisma.historial_pagosUpsertWithWhereUniqueWithoutCobrosInput[];
    createMany?: Prisma.historial_pagosCreateManyCobrosInputEnvelope;
    set?: Prisma.historial_pagosWhereUniqueInput | Prisma.historial_pagosWhereUniqueInput[];
    disconnect?: Prisma.historial_pagosWhereUniqueInput | Prisma.historial_pagosWhereUniqueInput[];
    delete?: Prisma.historial_pagosWhereUniqueInput | Prisma.historial_pagosWhereUniqueInput[];
    connect?: Prisma.historial_pagosWhereUniqueInput | Prisma.historial_pagosWhereUniqueInput[];
    update?: Prisma.historial_pagosUpdateWithWhereUniqueWithoutCobrosInput | Prisma.historial_pagosUpdateWithWhereUniqueWithoutCobrosInput[];
    updateMany?: Prisma.historial_pagosUpdateManyWithWhereWithoutCobrosInput | Prisma.historial_pagosUpdateManyWithWhereWithoutCobrosInput[];
    deleteMany?: Prisma.historial_pagosScalarWhereInput | Prisma.historial_pagosScalarWhereInput[];
};
export type historial_pagosUncheckedUpdateManyWithoutCobrosNestedInput = {
    create?: Prisma.XOR<Prisma.historial_pagosCreateWithoutCobrosInput, Prisma.historial_pagosUncheckedCreateWithoutCobrosInput> | Prisma.historial_pagosCreateWithoutCobrosInput[] | Prisma.historial_pagosUncheckedCreateWithoutCobrosInput[];
    connectOrCreate?: Prisma.historial_pagosCreateOrConnectWithoutCobrosInput | Prisma.historial_pagosCreateOrConnectWithoutCobrosInput[];
    upsert?: Prisma.historial_pagosUpsertWithWhereUniqueWithoutCobrosInput | Prisma.historial_pagosUpsertWithWhereUniqueWithoutCobrosInput[];
    createMany?: Prisma.historial_pagosCreateManyCobrosInputEnvelope;
    set?: Prisma.historial_pagosWhereUniqueInput | Prisma.historial_pagosWhereUniqueInput[];
    disconnect?: Prisma.historial_pagosWhereUniqueInput | Prisma.historial_pagosWhereUniqueInput[];
    delete?: Prisma.historial_pagosWhereUniqueInput | Prisma.historial_pagosWhereUniqueInput[];
    connect?: Prisma.historial_pagosWhereUniqueInput | Prisma.historial_pagosWhereUniqueInput[];
    update?: Prisma.historial_pagosUpdateWithWhereUniqueWithoutCobrosInput | Prisma.historial_pagosUpdateWithWhereUniqueWithoutCobrosInput[];
    updateMany?: Prisma.historial_pagosUpdateManyWithWhereWithoutCobrosInput | Prisma.historial_pagosUpdateManyWithWhereWithoutCobrosInput[];
    deleteMany?: Prisma.historial_pagosScalarWhereInput | Prisma.historial_pagosScalarWhereInput[];
};
export type historial_pagosCreateWithoutCobrosInput = {
    monto_abonado: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodo_pago?: string | null;
    fecha_pago?: Date | string | null;
};
export type historial_pagosUncheckedCreateWithoutCobrosInput = {
    id?: number;
    monto_abonado: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodo_pago?: string | null;
    fecha_pago?: Date | string | null;
};
export type historial_pagosCreateOrConnectWithoutCobrosInput = {
    where: Prisma.historial_pagosWhereUniqueInput;
    create: Prisma.XOR<Prisma.historial_pagosCreateWithoutCobrosInput, Prisma.historial_pagosUncheckedCreateWithoutCobrosInput>;
};
export type historial_pagosCreateManyCobrosInputEnvelope = {
    data: Prisma.historial_pagosCreateManyCobrosInput | Prisma.historial_pagosCreateManyCobrosInput[];
    skipDuplicates?: boolean;
};
export type historial_pagosUpsertWithWhereUniqueWithoutCobrosInput = {
    where: Prisma.historial_pagosWhereUniqueInput;
    update: Prisma.XOR<Prisma.historial_pagosUpdateWithoutCobrosInput, Prisma.historial_pagosUncheckedUpdateWithoutCobrosInput>;
    create: Prisma.XOR<Prisma.historial_pagosCreateWithoutCobrosInput, Prisma.historial_pagosUncheckedCreateWithoutCobrosInput>;
};
export type historial_pagosUpdateWithWhereUniqueWithoutCobrosInput = {
    where: Prisma.historial_pagosWhereUniqueInput;
    data: Prisma.XOR<Prisma.historial_pagosUpdateWithoutCobrosInput, Prisma.historial_pagosUncheckedUpdateWithoutCobrosInput>;
};
export type historial_pagosUpdateManyWithWhereWithoutCobrosInput = {
    where: Prisma.historial_pagosScalarWhereInput;
    data: Prisma.XOR<Prisma.historial_pagosUpdateManyMutationInput, Prisma.historial_pagosUncheckedUpdateManyWithoutCobrosInput>;
};
export type historial_pagosScalarWhereInput = {
    AND?: Prisma.historial_pagosScalarWhereInput | Prisma.historial_pagosScalarWhereInput[];
    OR?: Prisma.historial_pagosScalarWhereInput[];
    NOT?: Prisma.historial_pagosScalarWhereInput | Prisma.historial_pagosScalarWhereInput[];
    id?: Prisma.IntFilter<"historial_pagos"> | number;
    cobro_id?: Prisma.IntFilter<"historial_pagos"> | number;
    monto_abonado?: Prisma.DecimalFilter<"historial_pagos"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodo_pago?: Prisma.StringNullableFilter<"historial_pagos"> | string | null;
    fecha_pago?: Prisma.DateTimeNullableFilter<"historial_pagos"> | Date | string | null;
};
export type historial_pagosCreateManyCobrosInput = {
    id?: number;
    monto_abonado: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodo_pago?: string | null;
    fecha_pago?: Date | string | null;
};
export type historial_pagosUpdateWithoutCobrosInput = {
    monto_abonado?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodo_pago?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_pago?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type historial_pagosUncheckedUpdateWithoutCobrosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    monto_abonado?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodo_pago?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_pago?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type historial_pagosUncheckedUpdateManyWithoutCobrosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    monto_abonado?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodo_pago?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_pago?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type historial_pagosSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cobro_id?: boolean;
    monto_abonado?: boolean;
    metodo_pago?: boolean;
    fecha_pago?: boolean;
    cobros?: boolean | Prisma.cobrosDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["historial_pagos"]>;
export type historial_pagosSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cobro_id?: boolean;
    monto_abonado?: boolean;
    metodo_pago?: boolean;
    fecha_pago?: boolean;
    cobros?: boolean | Prisma.cobrosDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["historial_pagos"]>;
export type historial_pagosSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cobro_id?: boolean;
    monto_abonado?: boolean;
    metodo_pago?: boolean;
    fecha_pago?: boolean;
    cobros?: boolean | Prisma.cobrosDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["historial_pagos"]>;
export type historial_pagosSelectScalar = {
    id?: boolean;
    cobro_id?: boolean;
    monto_abonado?: boolean;
    metodo_pago?: boolean;
    fecha_pago?: boolean;
};
export type historial_pagosOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "cobro_id" | "monto_abonado" | "metodo_pago" | "fecha_pago", ExtArgs["result"]["historial_pagos"]>;
export type historial_pagosInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cobros?: boolean | Prisma.cobrosDefaultArgs<ExtArgs>;
};
export type historial_pagosIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cobros?: boolean | Prisma.cobrosDefaultArgs<ExtArgs>;
};
export type historial_pagosIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cobros?: boolean | Prisma.cobrosDefaultArgs<ExtArgs>;
};
export type $historial_pagosPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "historial_pagos";
    objects: {
        cobros: Prisma.$cobrosPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        cobro_id: number;
        monto_abonado: runtime.Decimal;
        metodo_pago: string | null;
        fecha_pago: Date | null;
    }, ExtArgs["result"]["historial_pagos"]>;
    composites: {};
};
export type historial_pagosGetPayload<S extends boolean | null | undefined | historial_pagosDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$historial_pagosPayload, S>;
export type historial_pagosCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<historial_pagosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Historial_pagosCountAggregateInputType | true;
};
export interface historial_pagosDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['historial_pagos'];
        meta: {
            name: 'historial_pagos';
        };
    };
    findUnique<T extends historial_pagosFindUniqueArgs>(args: Prisma.SelectSubset<T, historial_pagosFindUniqueArgs<ExtArgs>>): Prisma.Prisma__historial_pagosClient<runtime.Types.Result.GetResult<Prisma.$historial_pagosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends historial_pagosFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, historial_pagosFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__historial_pagosClient<runtime.Types.Result.GetResult<Prisma.$historial_pagosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends historial_pagosFindFirstArgs>(args?: Prisma.SelectSubset<T, historial_pagosFindFirstArgs<ExtArgs>>): Prisma.Prisma__historial_pagosClient<runtime.Types.Result.GetResult<Prisma.$historial_pagosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends historial_pagosFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, historial_pagosFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__historial_pagosClient<runtime.Types.Result.GetResult<Prisma.$historial_pagosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends historial_pagosFindManyArgs>(args?: Prisma.SelectSubset<T, historial_pagosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$historial_pagosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends historial_pagosCreateArgs>(args: Prisma.SelectSubset<T, historial_pagosCreateArgs<ExtArgs>>): Prisma.Prisma__historial_pagosClient<runtime.Types.Result.GetResult<Prisma.$historial_pagosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends historial_pagosCreateManyArgs>(args?: Prisma.SelectSubset<T, historial_pagosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends historial_pagosCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, historial_pagosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$historial_pagosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends historial_pagosDeleteArgs>(args: Prisma.SelectSubset<T, historial_pagosDeleteArgs<ExtArgs>>): Prisma.Prisma__historial_pagosClient<runtime.Types.Result.GetResult<Prisma.$historial_pagosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends historial_pagosUpdateArgs>(args: Prisma.SelectSubset<T, historial_pagosUpdateArgs<ExtArgs>>): Prisma.Prisma__historial_pagosClient<runtime.Types.Result.GetResult<Prisma.$historial_pagosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends historial_pagosDeleteManyArgs>(args?: Prisma.SelectSubset<T, historial_pagosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends historial_pagosUpdateManyArgs>(args: Prisma.SelectSubset<T, historial_pagosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends historial_pagosUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, historial_pagosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$historial_pagosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends historial_pagosUpsertArgs>(args: Prisma.SelectSubset<T, historial_pagosUpsertArgs<ExtArgs>>): Prisma.Prisma__historial_pagosClient<runtime.Types.Result.GetResult<Prisma.$historial_pagosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends historial_pagosCountArgs>(args?: Prisma.Subset<T, historial_pagosCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Historial_pagosCountAggregateOutputType> : number>;
    aggregate<T extends Historial_pagosAggregateArgs>(args: Prisma.Subset<T, Historial_pagosAggregateArgs>): Prisma.PrismaPromise<GetHistorial_pagosAggregateType<T>>;
    groupBy<T extends historial_pagosGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: historial_pagosGroupByArgs['orderBy'];
    } : {
        orderBy?: historial_pagosGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, historial_pagosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistorial_pagosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: historial_pagosFieldRefs;
}
export interface Prisma__historial_pagosClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    cobros<T extends Prisma.cobrosDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.cobrosDefaultArgs<ExtArgs>>): Prisma.Prisma__cobrosClient<runtime.Types.Result.GetResult<Prisma.$cobrosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface historial_pagosFieldRefs {
    readonly id: Prisma.FieldRef<"historial_pagos", 'Int'>;
    readonly cobro_id: Prisma.FieldRef<"historial_pagos", 'Int'>;
    readonly monto_abonado: Prisma.FieldRef<"historial_pagos", 'Decimal'>;
    readonly metodo_pago: Prisma.FieldRef<"historial_pagos", 'String'>;
    readonly fecha_pago: Prisma.FieldRef<"historial_pagos", 'DateTime'>;
}
export type historial_pagosFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.historial_pagosSelect<ExtArgs> | null;
    omit?: Prisma.historial_pagosOmit<ExtArgs> | null;
    include?: Prisma.historial_pagosInclude<ExtArgs> | null;
    where: Prisma.historial_pagosWhereUniqueInput;
};
export type historial_pagosFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.historial_pagosSelect<ExtArgs> | null;
    omit?: Prisma.historial_pagosOmit<ExtArgs> | null;
    include?: Prisma.historial_pagosInclude<ExtArgs> | null;
    where: Prisma.historial_pagosWhereUniqueInput;
};
export type historial_pagosFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type historial_pagosFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type historial_pagosFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type historial_pagosCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.historial_pagosSelect<ExtArgs> | null;
    omit?: Prisma.historial_pagosOmit<ExtArgs> | null;
    include?: Prisma.historial_pagosInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.historial_pagosCreateInput, Prisma.historial_pagosUncheckedCreateInput>;
};
export type historial_pagosCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.historial_pagosCreateManyInput | Prisma.historial_pagosCreateManyInput[];
    skipDuplicates?: boolean;
};
export type historial_pagosCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.historial_pagosSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.historial_pagosOmit<ExtArgs> | null;
    data: Prisma.historial_pagosCreateManyInput | Prisma.historial_pagosCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.historial_pagosIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type historial_pagosUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.historial_pagosSelect<ExtArgs> | null;
    omit?: Prisma.historial_pagosOmit<ExtArgs> | null;
    include?: Prisma.historial_pagosInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.historial_pagosUpdateInput, Prisma.historial_pagosUncheckedUpdateInput>;
    where: Prisma.historial_pagosWhereUniqueInput;
};
export type historial_pagosUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.historial_pagosUpdateManyMutationInput, Prisma.historial_pagosUncheckedUpdateManyInput>;
    where?: Prisma.historial_pagosWhereInput;
    limit?: number;
};
export type historial_pagosUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.historial_pagosSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.historial_pagosOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.historial_pagosUpdateManyMutationInput, Prisma.historial_pagosUncheckedUpdateManyInput>;
    where?: Prisma.historial_pagosWhereInput;
    limit?: number;
    include?: Prisma.historial_pagosIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type historial_pagosUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.historial_pagosSelect<ExtArgs> | null;
    omit?: Prisma.historial_pagosOmit<ExtArgs> | null;
    include?: Prisma.historial_pagosInclude<ExtArgs> | null;
    where: Prisma.historial_pagosWhereUniqueInput;
    create: Prisma.XOR<Prisma.historial_pagosCreateInput, Prisma.historial_pagosUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.historial_pagosUpdateInput, Prisma.historial_pagosUncheckedUpdateInput>;
};
export type historial_pagosDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.historial_pagosSelect<ExtArgs> | null;
    omit?: Prisma.historial_pagosOmit<ExtArgs> | null;
    include?: Prisma.historial_pagosInclude<ExtArgs> | null;
    where: Prisma.historial_pagosWhereUniqueInput;
};
export type historial_pagosDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.historial_pagosWhereInput;
    limit?: number;
};
export type historial_pagosDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.historial_pagosSelect<ExtArgs> | null;
    omit?: Prisma.historial_pagosOmit<ExtArgs> | null;
    include?: Prisma.historial_pagosInclude<ExtArgs> | null;
};
