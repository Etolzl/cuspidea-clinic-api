import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type refresh_tokensModel = runtime.Types.Result.DefaultSelection<Prisma.$refresh_tokensPayload>;
export type AggregateRefresh_tokens = {
    _count: Refresh_tokensCountAggregateOutputType | null;
    _avg: Refresh_tokensAvgAggregateOutputType | null;
    _sum: Refresh_tokensSumAggregateOutputType | null;
    _min: Refresh_tokensMinAggregateOutputType | null;
    _max: Refresh_tokensMaxAggregateOutputType | null;
};
export type Refresh_tokensAvgAggregateOutputType = {
    id: number | null;
};
export type Refresh_tokensSumAggregateOutputType = {
    id: bigint | null;
};
export type Refresh_tokensMinAggregateOutputType = {
    instance_id: string | null;
    id: bigint | null;
    token: string | null;
    user_id: string | null;
    revoked: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
    parent: string | null;
    session_id: string | null;
};
export type Refresh_tokensMaxAggregateOutputType = {
    instance_id: string | null;
    id: bigint | null;
    token: string | null;
    user_id: string | null;
    revoked: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
    parent: string | null;
    session_id: string | null;
};
export type Refresh_tokensCountAggregateOutputType = {
    instance_id: number;
    id: number;
    token: number;
    user_id: number;
    revoked: number;
    created_at: number;
    updated_at: number;
    parent: number;
    session_id: number;
    _all: number;
};
export type Refresh_tokensAvgAggregateInputType = {
    id?: true;
};
export type Refresh_tokensSumAggregateInputType = {
    id?: true;
};
export type Refresh_tokensMinAggregateInputType = {
    instance_id?: true;
    id?: true;
    token?: true;
    user_id?: true;
    revoked?: true;
    created_at?: true;
    updated_at?: true;
    parent?: true;
    session_id?: true;
};
export type Refresh_tokensMaxAggregateInputType = {
    instance_id?: true;
    id?: true;
    token?: true;
    user_id?: true;
    revoked?: true;
    created_at?: true;
    updated_at?: true;
    parent?: true;
    session_id?: true;
};
export type Refresh_tokensCountAggregateInputType = {
    instance_id?: true;
    id?: true;
    token?: true;
    user_id?: true;
    revoked?: true;
    created_at?: true;
    updated_at?: true;
    parent?: true;
    session_id?: true;
    _all?: true;
};
export type Refresh_tokensAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.refresh_tokensWhereInput;
    orderBy?: Prisma.refresh_tokensOrderByWithRelationInput | Prisma.refresh_tokensOrderByWithRelationInput[];
    cursor?: Prisma.refresh_tokensWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Refresh_tokensCountAggregateInputType;
    _avg?: Refresh_tokensAvgAggregateInputType;
    _sum?: Refresh_tokensSumAggregateInputType;
    _min?: Refresh_tokensMinAggregateInputType;
    _max?: Refresh_tokensMaxAggregateInputType;
};
export type GetRefresh_tokensAggregateType<T extends Refresh_tokensAggregateArgs> = {
    [P in keyof T & keyof AggregateRefresh_tokens]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRefresh_tokens[P]> : Prisma.GetScalarType<T[P], AggregateRefresh_tokens[P]>;
};
export type refresh_tokensGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.refresh_tokensWhereInput;
    orderBy?: Prisma.refresh_tokensOrderByWithAggregationInput | Prisma.refresh_tokensOrderByWithAggregationInput[];
    by: Prisma.Refresh_tokensScalarFieldEnum[] | Prisma.Refresh_tokensScalarFieldEnum;
    having?: Prisma.refresh_tokensScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Refresh_tokensCountAggregateInputType | true;
    _avg?: Refresh_tokensAvgAggregateInputType;
    _sum?: Refresh_tokensSumAggregateInputType;
    _min?: Refresh_tokensMinAggregateInputType;
    _max?: Refresh_tokensMaxAggregateInputType;
};
export type Refresh_tokensGroupByOutputType = {
    instance_id: string | null;
    id: bigint;
    token: string | null;
    user_id: string | null;
    revoked: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
    parent: string | null;
    session_id: string | null;
    _count: Refresh_tokensCountAggregateOutputType | null;
    _avg: Refresh_tokensAvgAggregateOutputType | null;
    _sum: Refresh_tokensSumAggregateOutputType | null;
    _min: Refresh_tokensMinAggregateOutputType | null;
    _max: Refresh_tokensMaxAggregateOutputType | null;
};
export type GetRefresh_tokensGroupByPayload<T extends refresh_tokensGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Refresh_tokensGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Refresh_tokensGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Refresh_tokensGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Refresh_tokensGroupByOutputType[P]>;
}>>;
export type refresh_tokensWhereInput = {
    AND?: Prisma.refresh_tokensWhereInput | Prisma.refresh_tokensWhereInput[];
    OR?: Prisma.refresh_tokensWhereInput[];
    NOT?: Prisma.refresh_tokensWhereInput | Prisma.refresh_tokensWhereInput[];
    instance_id?: Prisma.UuidNullableFilter<"refresh_tokens"> | string | null;
    id?: Prisma.BigIntFilter<"refresh_tokens"> | bigint | number;
    token?: Prisma.StringNullableFilter<"refresh_tokens"> | string | null;
    user_id?: Prisma.StringNullableFilter<"refresh_tokens"> | string | null;
    revoked?: Prisma.BoolNullableFilter<"refresh_tokens"> | boolean | null;
    created_at?: Prisma.DateTimeNullableFilter<"refresh_tokens"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"refresh_tokens"> | Date | string | null;
    parent?: Prisma.StringNullableFilter<"refresh_tokens"> | string | null;
    session_id?: Prisma.UuidNullableFilter<"refresh_tokens"> | string | null;
    sessions?: Prisma.XOR<Prisma.SessionsNullableScalarRelationFilter, Prisma.sessionsWhereInput> | null;
};
export type refresh_tokensOrderByWithRelationInput = {
    instance_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    id?: Prisma.SortOrder;
    token?: Prisma.SortOrderInput | Prisma.SortOrder;
    user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    revoked?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    parent?: Prisma.SortOrderInput | Prisma.SortOrder;
    session_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    sessions?: Prisma.sessionsOrderByWithRelationInput;
};
export type refresh_tokensWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    token?: string;
    AND?: Prisma.refresh_tokensWhereInput | Prisma.refresh_tokensWhereInput[];
    OR?: Prisma.refresh_tokensWhereInput[];
    NOT?: Prisma.refresh_tokensWhereInput | Prisma.refresh_tokensWhereInput[];
    instance_id?: Prisma.UuidNullableFilter<"refresh_tokens"> | string | null;
    user_id?: Prisma.StringNullableFilter<"refresh_tokens"> | string | null;
    revoked?: Prisma.BoolNullableFilter<"refresh_tokens"> | boolean | null;
    created_at?: Prisma.DateTimeNullableFilter<"refresh_tokens"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"refresh_tokens"> | Date | string | null;
    parent?: Prisma.StringNullableFilter<"refresh_tokens"> | string | null;
    session_id?: Prisma.UuidNullableFilter<"refresh_tokens"> | string | null;
    sessions?: Prisma.XOR<Prisma.SessionsNullableScalarRelationFilter, Prisma.sessionsWhereInput> | null;
}, "id" | "token">;
export type refresh_tokensOrderByWithAggregationInput = {
    instance_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    id?: Prisma.SortOrder;
    token?: Prisma.SortOrderInput | Prisma.SortOrder;
    user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    revoked?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    parent?: Prisma.SortOrderInput | Prisma.SortOrder;
    session_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.refresh_tokensCountOrderByAggregateInput;
    _avg?: Prisma.refresh_tokensAvgOrderByAggregateInput;
    _max?: Prisma.refresh_tokensMaxOrderByAggregateInput;
    _min?: Prisma.refresh_tokensMinOrderByAggregateInput;
    _sum?: Prisma.refresh_tokensSumOrderByAggregateInput;
};
export type refresh_tokensScalarWhereWithAggregatesInput = {
    AND?: Prisma.refresh_tokensScalarWhereWithAggregatesInput | Prisma.refresh_tokensScalarWhereWithAggregatesInput[];
    OR?: Prisma.refresh_tokensScalarWhereWithAggregatesInput[];
    NOT?: Prisma.refresh_tokensScalarWhereWithAggregatesInput | Prisma.refresh_tokensScalarWhereWithAggregatesInput[];
    instance_id?: Prisma.UuidNullableWithAggregatesFilter<"refresh_tokens"> | string | null;
    id?: Prisma.BigIntWithAggregatesFilter<"refresh_tokens"> | bigint | number;
    token?: Prisma.StringNullableWithAggregatesFilter<"refresh_tokens"> | string | null;
    user_id?: Prisma.StringNullableWithAggregatesFilter<"refresh_tokens"> | string | null;
    revoked?: Prisma.BoolNullableWithAggregatesFilter<"refresh_tokens"> | boolean | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"refresh_tokens"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"refresh_tokens"> | Date | string | null;
    parent?: Prisma.StringNullableWithAggregatesFilter<"refresh_tokens"> | string | null;
    session_id?: Prisma.UuidNullableWithAggregatesFilter<"refresh_tokens"> | string | null;
};
export type refresh_tokensCreateInput = {
    instance_id?: string | null;
    id?: bigint | number;
    token?: string | null;
    user_id?: string | null;
    revoked?: boolean | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    parent?: string | null;
    sessions?: Prisma.sessionsCreateNestedOneWithoutRefresh_tokensInput;
};
export type refresh_tokensUncheckedCreateInput = {
    instance_id?: string | null;
    id?: bigint | number;
    token?: string | null;
    user_id?: string | null;
    revoked?: boolean | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    parent?: string | null;
    session_id?: string | null;
};
export type refresh_tokensUpdateInput = {
    instance_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    revoked?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    parent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sessions?: Prisma.sessionsUpdateOneWithoutRefresh_tokensNestedInput;
};
export type refresh_tokensUncheckedUpdateInput = {
    instance_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    revoked?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    parent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    session_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type refresh_tokensCreateManyInput = {
    instance_id?: string | null;
    id?: bigint | number;
    token?: string | null;
    user_id?: string | null;
    revoked?: boolean | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    parent?: string | null;
    session_id?: string | null;
};
export type refresh_tokensUpdateManyMutationInput = {
    instance_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    revoked?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    parent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type refresh_tokensUncheckedUpdateManyInput = {
    instance_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    revoked?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    parent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    session_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type refresh_tokensCountOrderByAggregateInput = {
    instance_id?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    revoked?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    parent?: Prisma.SortOrder;
    session_id?: Prisma.SortOrder;
};
export type refresh_tokensAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type refresh_tokensMaxOrderByAggregateInput = {
    instance_id?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    revoked?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    parent?: Prisma.SortOrder;
    session_id?: Prisma.SortOrder;
};
export type refresh_tokensMinOrderByAggregateInput = {
    instance_id?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    revoked?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    parent?: Prisma.SortOrder;
    session_id?: Prisma.SortOrder;
};
export type refresh_tokensSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type Refresh_tokensListRelationFilter = {
    every?: Prisma.refresh_tokensWhereInput;
    some?: Prisma.refresh_tokensWhereInput;
    none?: Prisma.refresh_tokensWhereInput;
};
export type refresh_tokensOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number;
    increment?: bigint | number;
    decrement?: bigint | number;
    multiply?: bigint | number;
    divide?: bigint | number;
};
export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null;
};
export type refresh_tokensCreateNestedManyWithoutSessionsInput = {
    create?: Prisma.XOR<Prisma.refresh_tokensCreateWithoutSessionsInput, Prisma.refresh_tokensUncheckedCreateWithoutSessionsInput> | Prisma.refresh_tokensCreateWithoutSessionsInput[] | Prisma.refresh_tokensUncheckedCreateWithoutSessionsInput[];
    connectOrCreate?: Prisma.refresh_tokensCreateOrConnectWithoutSessionsInput | Prisma.refresh_tokensCreateOrConnectWithoutSessionsInput[];
    createMany?: Prisma.refresh_tokensCreateManySessionsInputEnvelope;
    connect?: Prisma.refresh_tokensWhereUniqueInput | Prisma.refresh_tokensWhereUniqueInput[];
};
export type refresh_tokensUncheckedCreateNestedManyWithoutSessionsInput = {
    create?: Prisma.XOR<Prisma.refresh_tokensCreateWithoutSessionsInput, Prisma.refresh_tokensUncheckedCreateWithoutSessionsInput> | Prisma.refresh_tokensCreateWithoutSessionsInput[] | Prisma.refresh_tokensUncheckedCreateWithoutSessionsInput[];
    connectOrCreate?: Prisma.refresh_tokensCreateOrConnectWithoutSessionsInput | Prisma.refresh_tokensCreateOrConnectWithoutSessionsInput[];
    createMany?: Prisma.refresh_tokensCreateManySessionsInputEnvelope;
    connect?: Prisma.refresh_tokensWhereUniqueInput | Prisma.refresh_tokensWhereUniqueInput[];
};
export type refresh_tokensUpdateManyWithoutSessionsNestedInput = {
    create?: Prisma.XOR<Prisma.refresh_tokensCreateWithoutSessionsInput, Prisma.refresh_tokensUncheckedCreateWithoutSessionsInput> | Prisma.refresh_tokensCreateWithoutSessionsInput[] | Prisma.refresh_tokensUncheckedCreateWithoutSessionsInput[];
    connectOrCreate?: Prisma.refresh_tokensCreateOrConnectWithoutSessionsInput | Prisma.refresh_tokensCreateOrConnectWithoutSessionsInput[];
    upsert?: Prisma.refresh_tokensUpsertWithWhereUniqueWithoutSessionsInput | Prisma.refresh_tokensUpsertWithWhereUniqueWithoutSessionsInput[];
    createMany?: Prisma.refresh_tokensCreateManySessionsInputEnvelope;
    set?: Prisma.refresh_tokensWhereUniqueInput | Prisma.refresh_tokensWhereUniqueInput[];
    disconnect?: Prisma.refresh_tokensWhereUniqueInput | Prisma.refresh_tokensWhereUniqueInput[];
    delete?: Prisma.refresh_tokensWhereUniqueInput | Prisma.refresh_tokensWhereUniqueInput[];
    connect?: Prisma.refresh_tokensWhereUniqueInput | Prisma.refresh_tokensWhereUniqueInput[];
    update?: Prisma.refresh_tokensUpdateWithWhereUniqueWithoutSessionsInput | Prisma.refresh_tokensUpdateWithWhereUniqueWithoutSessionsInput[];
    updateMany?: Prisma.refresh_tokensUpdateManyWithWhereWithoutSessionsInput | Prisma.refresh_tokensUpdateManyWithWhereWithoutSessionsInput[];
    deleteMany?: Prisma.refresh_tokensScalarWhereInput | Prisma.refresh_tokensScalarWhereInput[];
};
export type refresh_tokensUncheckedUpdateManyWithoutSessionsNestedInput = {
    create?: Prisma.XOR<Prisma.refresh_tokensCreateWithoutSessionsInput, Prisma.refresh_tokensUncheckedCreateWithoutSessionsInput> | Prisma.refresh_tokensCreateWithoutSessionsInput[] | Prisma.refresh_tokensUncheckedCreateWithoutSessionsInput[];
    connectOrCreate?: Prisma.refresh_tokensCreateOrConnectWithoutSessionsInput | Prisma.refresh_tokensCreateOrConnectWithoutSessionsInput[];
    upsert?: Prisma.refresh_tokensUpsertWithWhereUniqueWithoutSessionsInput | Prisma.refresh_tokensUpsertWithWhereUniqueWithoutSessionsInput[];
    createMany?: Prisma.refresh_tokensCreateManySessionsInputEnvelope;
    set?: Prisma.refresh_tokensWhereUniqueInput | Prisma.refresh_tokensWhereUniqueInput[];
    disconnect?: Prisma.refresh_tokensWhereUniqueInput | Prisma.refresh_tokensWhereUniqueInput[];
    delete?: Prisma.refresh_tokensWhereUniqueInput | Prisma.refresh_tokensWhereUniqueInput[];
    connect?: Prisma.refresh_tokensWhereUniqueInput | Prisma.refresh_tokensWhereUniqueInput[];
    update?: Prisma.refresh_tokensUpdateWithWhereUniqueWithoutSessionsInput | Prisma.refresh_tokensUpdateWithWhereUniqueWithoutSessionsInput[];
    updateMany?: Prisma.refresh_tokensUpdateManyWithWhereWithoutSessionsInput | Prisma.refresh_tokensUpdateManyWithWhereWithoutSessionsInput[];
    deleteMany?: Prisma.refresh_tokensScalarWhereInput | Prisma.refresh_tokensScalarWhereInput[];
};
export type refresh_tokensCreateWithoutSessionsInput = {
    instance_id?: string | null;
    id?: bigint | number;
    token?: string | null;
    user_id?: string | null;
    revoked?: boolean | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    parent?: string | null;
};
export type refresh_tokensUncheckedCreateWithoutSessionsInput = {
    instance_id?: string | null;
    id?: bigint | number;
    token?: string | null;
    user_id?: string | null;
    revoked?: boolean | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    parent?: string | null;
};
export type refresh_tokensCreateOrConnectWithoutSessionsInput = {
    where: Prisma.refresh_tokensWhereUniqueInput;
    create: Prisma.XOR<Prisma.refresh_tokensCreateWithoutSessionsInput, Prisma.refresh_tokensUncheckedCreateWithoutSessionsInput>;
};
export type refresh_tokensCreateManySessionsInputEnvelope = {
    data: Prisma.refresh_tokensCreateManySessionsInput | Prisma.refresh_tokensCreateManySessionsInput[];
    skipDuplicates?: boolean;
};
export type refresh_tokensUpsertWithWhereUniqueWithoutSessionsInput = {
    where: Prisma.refresh_tokensWhereUniqueInput;
    update: Prisma.XOR<Prisma.refresh_tokensUpdateWithoutSessionsInput, Prisma.refresh_tokensUncheckedUpdateWithoutSessionsInput>;
    create: Prisma.XOR<Prisma.refresh_tokensCreateWithoutSessionsInput, Prisma.refresh_tokensUncheckedCreateWithoutSessionsInput>;
};
export type refresh_tokensUpdateWithWhereUniqueWithoutSessionsInput = {
    where: Prisma.refresh_tokensWhereUniqueInput;
    data: Prisma.XOR<Prisma.refresh_tokensUpdateWithoutSessionsInput, Prisma.refresh_tokensUncheckedUpdateWithoutSessionsInput>;
};
export type refresh_tokensUpdateManyWithWhereWithoutSessionsInput = {
    where: Prisma.refresh_tokensScalarWhereInput;
    data: Prisma.XOR<Prisma.refresh_tokensUpdateManyMutationInput, Prisma.refresh_tokensUncheckedUpdateManyWithoutSessionsInput>;
};
export type refresh_tokensScalarWhereInput = {
    AND?: Prisma.refresh_tokensScalarWhereInput | Prisma.refresh_tokensScalarWhereInput[];
    OR?: Prisma.refresh_tokensScalarWhereInput[];
    NOT?: Prisma.refresh_tokensScalarWhereInput | Prisma.refresh_tokensScalarWhereInput[];
    instance_id?: Prisma.UuidNullableFilter<"refresh_tokens"> | string | null;
    id?: Prisma.BigIntFilter<"refresh_tokens"> | bigint | number;
    token?: Prisma.StringNullableFilter<"refresh_tokens"> | string | null;
    user_id?: Prisma.StringNullableFilter<"refresh_tokens"> | string | null;
    revoked?: Prisma.BoolNullableFilter<"refresh_tokens"> | boolean | null;
    created_at?: Prisma.DateTimeNullableFilter<"refresh_tokens"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"refresh_tokens"> | Date | string | null;
    parent?: Prisma.StringNullableFilter<"refresh_tokens"> | string | null;
    session_id?: Prisma.UuidNullableFilter<"refresh_tokens"> | string | null;
};
export type refresh_tokensCreateManySessionsInput = {
    instance_id?: string | null;
    id?: bigint | number;
    token?: string | null;
    user_id?: string | null;
    revoked?: boolean | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    parent?: string | null;
};
export type refresh_tokensUpdateWithoutSessionsInput = {
    instance_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    revoked?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    parent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type refresh_tokensUncheckedUpdateWithoutSessionsInput = {
    instance_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    revoked?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    parent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type refresh_tokensUncheckedUpdateManyWithoutSessionsInput = {
    instance_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    revoked?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    parent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type refresh_tokensSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    instance_id?: boolean;
    id?: boolean;
    token?: boolean;
    user_id?: boolean;
    revoked?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    parent?: boolean;
    session_id?: boolean;
    sessions?: boolean | Prisma.refresh_tokens$sessionsArgs<ExtArgs>;
}, ExtArgs["result"]["refresh_tokens"]>;
export type refresh_tokensSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    instance_id?: boolean;
    id?: boolean;
    token?: boolean;
    user_id?: boolean;
    revoked?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    parent?: boolean;
    session_id?: boolean;
    sessions?: boolean | Prisma.refresh_tokens$sessionsArgs<ExtArgs>;
}, ExtArgs["result"]["refresh_tokens"]>;
export type refresh_tokensSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    instance_id?: boolean;
    id?: boolean;
    token?: boolean;
    user_id?: boolean;
    revoked?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    parent?: boolean;
    session_id?: boolean;
    sessions?: boolean | Prisma.refresh_tokens$sessionsArgs<ExtArgs>;
}, ExtArgs["result"]["refresh_tokens"]>;
export type refresh_tokensSelectScalar = {
    instance_id?: boolean;
    id?: boolean;
    token?: boolean;
    user_id?: boolean;
    revoked?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    parent?: boolean;
    session_id?: boolean;
};
export type refresh_tokensOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"instance_id" | "id" | "token" | "user_id" | "revoked" | "created_at" | "updated_at" | "parent" | "session_id", ExtArgs["result"]["refresh_tokens"]>;
export type refresh_tokensInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sessions?: boolean | Prisma.refresh_tokens$sessionsArgs<ExtArgs>;
};
export type refresh_tokensIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sessions?: boolean | Prisma.refresh_tokens$sessionsArgs<ExtArgs>;
};
export type refresh_tokensIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sessions?: boolean | Prisma.refresh_tokens$sessionsArgs<ExtArgs>;
};
export type $refresh_tokensPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "refresh_tokens";
    objects: {
        sessions: Prisma.$sessionsPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        instance_id: string | null;
        id: bigint;
        token: string | null;
        user_id: string | null;
        revoked: boolean | null;
        created_at: Date | null;
        updated_at: Date | null;
        parent: string | null;
        session_id: string | null;
    }, ExtArgs["result"]["refresh_tokens"]>;
    composites: {};
};
export type refresh_tokensGetPayload<S extends boolean | null | undefined | refresh_tokensDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$refresh_tokensPayload, S>;
export type refresh_tokensCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<refresh_tokensFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Refresh_tokensCountAggregateInputType | true;
};
export interface refresh_tokensDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['refresh_tokens'];
        meta: {
            name: 'refresh_tokens';
        };
    };
    findUnique<T extends refresh_tokensFindUniqueArgs>(args: Prisma.SelectSubset<T, refresh_tokensFindUniqueArgs<ExtArgs>>): Prisma.Prisma__refresh_tokensClient<runtime.Types.Result.GetResult<Prisma.$refresh_tokensPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends refresh_tokensFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, refresh_tokensFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__refresh_tokensClient<runtime.Types.Result.GetResult<Prisma.$refresh_tokensPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends refresh_tokensFindFirstArgs>(args?: Prisma.SelectSubset<T, refresh_tokensFindFirstArgs<ExtArgs>>): Prisma.Prisma__refresh_tokensClient<runtime.Types.Result.GetResult<Prisma.$refresh_tokensPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends refresh_tokensFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, refresh_tokensFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__refresh_tokensClient<runtime.Types.Result.GetResult<Prisma.$refresh_tokensPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends refresh_tokensFindManyArgs>(args?: Prisma.SelectSubset<T, refresh_tokensFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$refresh_tokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends refresh_tokensCreateArgs>(args: Prisma.SelectSubset<T, refresh_tokensCreateArgs<ExtArgs>>): Prisma.Prisma__refresh_tokensClient<runtime.Types.Result.GetResult<Prisma.$refresh_tokensPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends refresh_tokensCreateManyArgs>(args?: Prisma.SelectSubset<T, refresh_tokensCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends refresh_tokensCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, refresh_tokensCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$refresh_tokensPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends refresh_tokensDeleteArgs>(args: Prisma.SelectSubset<T, refresh_tokensDeleteArgs<ExtArgs>>): Prisma.Prisma__refresh_tokensClient<runtime.Types.Result.GetResult<Prisma.$refresh_tokensPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends refresh_tokensUpdateArgs>(args: Prisma.SelectSubset<T, refresh_tokensUpdateArgs<ExtArgs>>): Prisma.Prisma__refresh_tokensClient<runtime.Types.Result.GetResult<Prisma.$refresh_tokensPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends refresh_tokensDeleteManyArgs>(args?: Prisma.SelectSubset<T, refresh_tokensDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends refresh_tokensUpdateManyArgs>(args: Prisma.SelectSubset<T, refresh_tokensUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends refresh_tokensUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, refresh_tokensUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$refresh_tokensPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends refresh_tokensUpsertArgs>(args: Prisma.SelectSubset<T, refresh_tokensUpsertArgs<ExtArgs>>): Prisma.Prisma__refresh_tokensClient<runtime.Types.Result.GetResult<Prisma.$refresh_tokensPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends refresh_tokensCountArgs>(args?: Prisma.Subset<T, refresh_tokensCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Refresh_tokensCountAggregateOutputType> : number>;
    aggregate<T extends Refresh_tokensAggregateArgs>(args: Prisma.Subset<T, Refresh_tokensAggregateArgs>): Prisma.PrismaPromise<GetRefresh_tokensAggregateType<T>>;
    groupBy<T extends refresh_tokensGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: refresh_tokensGroupByArgs['orderBy'];
    } : {
        orderBy?: refresh_tokensGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, refresh_tokensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefresh_tokensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: refresh_tokensFieldRefs;
}
export interface Prisma__refresh_tokensClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    sessions<T extends Prisma.refresh_tokens$sessionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.refresh_tokens$sessionsArgs<ExtArgs>>): Prisma.Prisma__sessionsClient<runtime.Types.Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface refresh_tokensFieldRefs {
    readonly instance_id: Prisma.FieldRef<"refresh_tokens", 'String'>;
    readonly id: Prisma.FieldRef<"refresh_tokens", 'BigInt'>;
    readonly token: Prisma.FieldRef<"refresh_tokens", 'String'>;
    readonly user_id: Prisma.FieldRef<"refresh_tokens", 'String'>;
    readonly revoked: Prisma.FieldRef<"refresh_tokens", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"refresh_tokens", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"refresh_tokens", 'DateTime'>;
    readonly parent: Prisma.FieldRef<"refresh_tokens", 'String'>;
    readonly session_id: Prisma.FieldRef<"refresh_tokens", 'String'>;
}
export type refresh_tokensFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.refresh_tokensSelect<ExtArgs> | null;
    omit?: Prisma.refresh_tokensOmit<ExtArgs> | null;
    include?: Prisma.refresh_tokensInclude<ExtArgs> | null;
    where: Prisma.refresh_tokensWhereUniqueInput;
};
export type refresh_tokensFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.refresh_tokensSelect<ExtArgs> | null;
    omit?: Prisma.refresh_tokensOmit<ExtArgs> | null;
    include?: Prisma.refresh_tokensInclude<ExtArgs> | null;
    where: Prisma.refresh_tokensWhereUniqueInput;
};
export type refresh_tokensFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.refresh_tokensSelect<ExtArgs> | null;
    omit?: Prisma.refresh_tokensOmit<ExtArgs> | null;
    include?: Prisma.refresh_tokensInclude<ExtArgs> | null;
    where?: Prisma.refresh_tokensWhereInput;
    orderBy?: Prisma.refresh_tokensOrderByWithRelationInput | Prisma.refresh_tokensOrderByWithRelationInput[];
    cursor?: Prisma.refresh_tokensWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Refresh_tokensScalarFieldEnum | Prisma.Refresh_tokensScalarFieldEnum[];
};
export type refresh_tokensFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.refresh_tokensSelect<ExtArgs> | null;
    omit?: Prisma.refresh_tokensOmit<ExtArgs> | null;
    include?: Prisma.refresh_tokensInclude<ExtArgs> | null;
    where?: Prisma.refresh_tokensWhereInput;
    orderBy?: Prisma.refresh_tokensOrderByWithRelationInput | Prisma.refresh_tokensOrderByWithRelationInput[];
    cursor?: Prisma.refresh_tokensWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Refresh_tokensScalarFieldEnum | Prisma.Refresh_tokensScalarFieldEnum[];
};
export type refresh_tokensFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.refresh_tokensSelect<ExtArgs> | null;
    omit?: Prisma.refresh_tokensOmit<ExtArgs> | null;
    include?: Prisma.refresh_tokensInclude<ExtArgs> | null;
    where?: Prisma.refresh_tokensWhereInput;
    orderBy?: Prisma.refresh_tokensOrderByWithRelationInput | Prisma.refresh_tokensOrderByWithRelationInput[];
    cursor?: Prisma.refresh_tokensWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Refresh_tokensScalarFieldEnum | Prisma.Refresh_tokensScalarFieldEnum[];
};
export type refresh_tokensCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.refresh_tokensSelect<ExtArgs> | null;
    omit?: Prisma.refresh_tokensOmit<ExtArgs> | null;
    include?: Prisma.refresh_tokensInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.refresh_tokensCreateInput, Prisma.refresh_tokensUncheckedCreateInput>;
};
export type refresh_tokensCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.refresh_tokensCreateManyInput | Prisma.refresh_tokensCreateManyInput[];
    skipDuplicates?: boolean;
};
export type refresh_tokensCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.refresh_tokensSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.refresh_tokensOmit<ExtArgs> | null;
    data: Prisma.refresh_tokensCreateManyInput | Prisma.refresh_tokensCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.refresh_tokensIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type refresh_tokensUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.refresh_tokensSelect<ExtArgs> | null;
    omit?: Prisma.refresh_tokensOmit<ExtArgs> | null;
    include?: Prisma.refresh_tokensInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.refresh_tokensUpdateInput, Prisma.refresh_tokensUncheckedUpdateInput>;
    where: Prisma.refresh_tokensWhereUniqueInput;
};
export type refresh_tokensUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.refresh_tokensUpdateManyMutationInput, Prisma.refresh_tokensUncheckedUpdateManyInput>;
    where?: Prisma.refresh_tokensWhereInput;
    limit?: number;
};
export type refresh_tokensUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.refresh_tokensSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.refresh_tokensOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.refresh_tokensUpdateManyMutationInput, Prisma.refresh_tokensUncheckedUpdateManyInput>;
    where?: Prisma.refresh_tokensWhereInput;
    limit?: number;
    include?: Prisma.refresh_tokensIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type refresh_tokensUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.refresh_tokensSelect<ExtArgs> | null;
    omit?: Prisma.refresh_tokensOmit<ExtArgs> | null;
    include?: Prisma.refresh_tokensInclude<ExtArgs> | null;
    where: Prisma.refresh_tokensWhereUniqueInput;
    create: Prisma.XOR<Prisma.refresh_tokensCreateInput, Prisma.refresh_tokensUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.refresh_tokensUpdateInput, Prisma.refresh_tokensUncheckedUpdateInput>;
};
export type refresh_tokensDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.refresh_tokensSelect<ExtArgs> | null;
    omit?: Prisma.refresh_tokensOmit<ExtArgs> | null;
    include?: Prisma.refresh_tokensInclude<ExtArgs> | null;
    where: Prisma.refresh_tokensWhereUniqueInput;
};
export type refresh_tokensDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.refresh_tokensWhereInput;
    limit?: number;
};
export type refresh_tokens$sessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.sessionsSelect<ExtArgs> | null;
    omit?: Prisma.sessionsOmit<ExtArgs> | null;
    include?: Prisma.sessionsInclude<ExtArgs> | null;
    where?: Prisma.sessionsWhereInput;
};
export type refresh_tokensDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.refresh_tokensSelect<ExtArgs> | null;
    omit?: Prisma.refresh_tokensOmit<ExtArgs> | null;
    include?: Prisma.refresh_tokensInclude<ExtArgs> | null;
};
