import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type saml_relay_statesModel = runtime.Types.Result.DefaultSelection<Prisma.$saml_relay_statesPayload>;
export type AggregateSaml_relay_states = {
    _count: Saml_relay_statesCountAggregateOutputType | null;
    _min: Saml_relay_statesMinAggregateOutputType | null;
    _max: Saml_relay_statesMaxAggregateOutputType | null;
};
export type Saml_relay_statesMinAggregateOutputType = {
    id: string | null;
    sso_provider_id: string | null;
    request_id: string | null;
    for_email: string | null;
    redirect_to: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    flow_state_id: string | null;
};
export type Saml_relay_statesMaxAggregateOutputType = {
    id: string | null;
    sso_provider_id: string | null;
    request_id: string | null;
    for_email: string | null;
    redirect_to: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    flow_state_id: string | null;
};
export type Saml_relay_statesCountAggregateOutputType = {
    id: number;
    sso_provider_id: number;
    request_id: number;
    for_email: number;
    redirect_to: number;
    created_at: number;
    updated_at: number;
    flow_state_id: number;
    _all: number;
};
export type Saml_relay_statesMinAggregateInputType = {
    id?: true;
    sso_provider_id?: true;
    request_id?: true;
    for_email?: true;
    redirect_to?: true;
    created_at?: true;
    updated_at?: true;
    flow_state_id?: true;
};
export type Saml_relay_statesMaxAggregateInputType = {
    id?: true;
    sso_provider_id?: true;
    request_id?: true;
    for_email?: true;
    redirect_to?: true;
    created_at?: true;
    updated_at?: true;
    flow_state_id?: true;
};
export type Saml_relay_statesCountAggregateInputType = {
    id?: true;
    sso_provider_id?: true;
    request_id?: true;
    for_email?: true;
    redirect_to?: true;
    created_at?: true;
    updated_at?: true;
    flow_state_id?: true;
    _all?: true;
};
export type Saml_relay_statesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.saml_relay_statesWhereInput;
    orderBy?: Prisma.saml_relay_statesOrderByWithRelationInput | Prisma.saml_relay_statesOrderByWithRelationInput[];
    cursor?: Prisma.saml_relay_statesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Saml_relay_statesCountAggregateInputType;
    _min?: Saml_relay_statesMinAggregateInputType;
    _max?: Saml_relay_statesMaxAggregateInputType;
};
export type GetSaml_relay_statesAggregateType<T extends Saml_relay_statesAggregateArgs> = {
    [P in keyof T & keyof AggregateSaml_relay_states]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSaml_relay_states[P]> : Prisma.GetScalarType<T[P], AggregateSaml_relay_states[P]>;
};
export type saml_relay_statesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.saml_relay_statesWhereInput;
    orderBy?: Prisma.saml_relay_statesOrderByWithAggregationInput | Prisma.saml_relay_statesOrderByWithAggregationInput[];
    by: Prisma.Saml_relay_statesScalarFieldEnum[] | Prisma.Saml_relay_statesScalarFieldEnum;
    having?: Prisma.saml_relay_statesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Saml_relay_statesCountAggregateInputType | true;
    _min?: Saml_relay_statesMinAggregateInputType;
    _max?: Saml_relay_statesMaxAggregateInputType;
};
export type Saml_relay_statesGroupByOutputType = {
    id: string;
    sso_provider_id: string;
    request_id: string;
    for_email: string | null;
    redirect_to: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    flow_state_id: string | null;
    _count: Saml_relay_statesCountAggregateOutputType | null;
    _min: Saml_relay_statesMinAggregateOutputType | null;
    _max: Saml_relay_statesMaxAggregateOutputType | null;
};
export type GetSaml_relay_statesGroupByPayload<T extends saml_relay_statesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Saml_relay_statesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Saml_relay_statesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Saml_relay_statesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Saml_relay_statesGroupByOutputType[P]>;
}>>;
export type saml_relay_statesWhereInput = {
    AND?: Prisma.saml_relay_statesWhereInput | Prisma.saml_relay_statesWhereInput[];
    OR?: Prisma.saml_relay_statesWhereInput[];
    NOT?: Prisma.saml_relay_statesWhereInput | Prisma.saml_relay_statesWhereInput[];
    id?: Prisma.UuidFilter<"saml_relay_states"> | string;
    sso_provider_id?: Prisma.UuidFilter<"saml_relay_states"> | string;
    request_id?: Prisma.StringFilter<"saml_relay_states"> | string;
    for_email?: Prisma.StringNullableFilter<"saml_relay_states"> | string | null;
    redirect_to?: Prisma.StringNullableFilter<"saml_relay_states"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"saml_relay_states"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"saml_relay_states"> | Date | string | null;
    flow_state_id?: Prisma.UuidNullableFilter<"saml_relay_states"> | string | null;
    flow_state?: Prisma.XOR<Prisma.Flow_stateNullableScalarRelationFilter, Prisma.flow_stateWhereInput> | null;
    sso_providers?: Prisma.XOR<Prisma.Sso_providersScalarRelationFilter, Prisma.sso_providersWhereInput>;
};
export type saml_relay_statesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    sso_provider_id?: Prisma.SortOrder;
    request_id?: Prisma.SortOrder;
    for_email?: Prisma.SortOrderInput | Prisma.SortOrder;
    redirect_to?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    flow_state_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    flow_state?: Prisma.flow_stateOrderByWithRelationInput;
    sso_providers?: Prisma.sso_providersOrderByWithRelationInput;
};
export type saml_relay_statesWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.saml_relay_statesWhereInput | Prisma.saml_relay_statesWhereInput[];
    OR?: Prisma.saml_relay_statesWhereInput[];
    NOT?: Prisma.saml_relay_statesWhereInput | Prisma.saml_relay_statesWhereInput[];
    sso_provider_id?: Prisma.UuidFilter<"saml_relay_states"> | string;
    request_id?: Prisma.StringFilter<"saml_relay_states"> | string;
    for_email?: Prisma.StringNullableFilter<"saml_relay_states"> | string | null;
    redirect_to?: Prisma.StringNullableFilter<"saml_relay_states"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"saml_relay_states"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"saml_relay_states"> | Date | string | null;
    flow_state_id?: Prisma.UuidNullableFilter<"saml_relay_states"> | string | null;
    flow_state?: Prisma.XOR<Prisma.Flow_stateNullableScalarRelationFilter, Prisma.flow_stateWhereInput> | null;
    sso_providers?: Prisma.XOR<Prisma.Sso_providersScalarRelationFilter, Prisma.sso_providersWhereInput>;
}, "id">;
export type saml_relay_statesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    sso_provider_id?: Prisma.SortOrder;
    request_id?: Prisma.SortOrder;
    for_email?: Prisma.SortOrderInput | Prisma.SortOrder;
    redirect_to?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    flow_state_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.saml_relay_statesCountOrderByAggregateInput;
    _max?: Prisma.saml_relay_statesMaxOrderByAggregateInput;
    _min?: Prisma.saml_relay_statesMinOrderByAggregateInput;
};
export type saml_relay_statesScalarWhereWithAggregatesInput = {
    AND?: Prisma.saml_relay_statesScalarWhereWithAggregatesInput | Prisma.saml_relay_statesScalarWhereWithAggregatesInput[];
    OR?: Prisma.saml_relay_statesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.saml_relay_statesScalarWhereWithAggregatesInput | Prisma.saml_relay_statesScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"saml_relay_states"> | string;
    sso_provider_id?: Prisma.UuidWithAggregatesFilter<"saml_relay_states"> | string;
    request_id?: Prisma.StringWithAggregatesFilter<"saml_relay_states"> | string;
    for_email?: Prisma.StringNullableWithAggregatesFilter<"saml_relay_states"> | string | null;
    redirect_to?: Prisma.StringNullableWithAggregatesFilter<"saml_relay_states"> | string | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"saml_relay_states"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"saml_relay_states"> | Date | string | null;
    flow_state_id?: Prisma.UuidNullableWithAggregatesFilter<"saml_relay_states"> | string | null;
};
export type saml_relay_statesCreateInput = {
    id: string;
    request_id: string;
    for_email?: string | null;
    redirect_to?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    flow_state?: Prisma.flow_stateCreateNestedOneWithoutSaml_relay_statesInput;
    sso_providers: Prisma.sso_providersCreateNestedOneWithoutSaml_relay_statesInput;
};
export type saml_relay_statesUncheckedCreateInput = {
    id: string;
    sso_provider_id: string;
    request_id: string;
    for_email?: string | null;
    redirect_to?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    flow_state_id?: string | null;
};
export type saml_relay_statesUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    request_id?: Prisma.StringFieldUpdateOperationsInput | string;
    for_email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    redirect_to?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    flow_state?: Prisma.flow_stateUpdateOneWithoutSaml_relay_statesNestedInput;
    sso_providers?: Prisma.sso_providersUpdateOneRequiredWithoutSaml_relay_statesNestedInput;
};
export type saml_relay_statesUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sso_provider_id?: Prisma.StringFieldUpdateOperationsInput | string;
    request_id?: Prisma.StringFieldUpdateOperationsInput | string;
    for_email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    redirect_to?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    flow_state_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type saml_relay_statesCreateManyInput = {
    id: string;
    sso_provider_id: string;
    request_id: string;
    for_email?: string | null;
    redirect_to?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    flow_state_id?: string | null;
};
export type saml_relay_statesUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    request_id?: Prisma.StringFieldUpdateOperationsInput | string;
    for_email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    redirect_to?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type saml_relay_statesUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sso_provider_id?: Prisma.StringFieldUpdateOperationsInput | string;
    request_id?: Prisma.StringFieldUpdateOperationsInput | string;
    for_email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    redirect_to?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    flow_state_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type Saml_relay_statesListRelationFilter = {
    every?: Prisma.saml_relay_statesWhereInput;
    some?: Prisma.saml_relay_statesWhereInput;
    none?: Prisma.saml_relay_statesWhereInput;
};
export type saml_relay_statesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type saml_relay_statesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sso_provider_id?: Prisma.SortOrder;
    request_id?: Prisma.SortOrder;
    for_email?: Prisma.SortOrder;
    redirect_to?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    flow_state_id?: Prisma.SortOrder;
};
export type saml_relay_statesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sso_provider_id?: Prisma.SortOrder;
    request_id?: Prisma.SortOrder;
    for_email?: Prisma.SortOrder;
    redirect_to?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    flow_state_id?: Prisma.SortOrder;
};
export type saml_relay_statesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sso_provider_id?: Prisma.SortOrder;
    request_id?: Prisma.SortOrder;
    for_email?: Prisma.SortOrder;
    redirect_to?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    flow_state_id?: Prisma.SortOrder;
};
export type saml_relay_statesCreateNestedManyWithoutFlow_stateInput = {
    create?: Prisma.XOR<Prisma.saml_relay_statesCreateWithoutFlow_stateInput, Prisma.saml_relay_statesUncheckedCreateWithoutFlow_stateInput> | Prisma.saml_relay_statesCreateWithoutFlow_stateInput[] | Prisma.saml_relay_statesUncheckedCreateWithoutFlow_stateInput[];
    connectOrCreate?: Prisma.saml_relay_statesCreateOrConnectWithoutFlow_stateInput | Prisma.saml_relay_statesCreateOrConnectWithoutFlow_stateInput[];
    createMany?: Prisma.saml_relay_statesCreateManyFlow_stateInputEnvelope;
    connect?: Prisma.saml_relay_statesWhereUniqueInput | Prisma.saml_relay_statesWhereUniqueInput[];
};
export type saml_relay_statesUncheckedCreateNestedManyWithoutFlow_stateInput = {
    create?: Prisma.XOR<Prisma.saml_relay_statesCreateWithoutFlow_stateInput, Prisma.saml_relay_statesUncheckedCreateWithoutFlow_stateInput> | Prisma.saml_relay_statesCreateWithoutFlow_stateInput[] | Prisma.saml_relay_statesUncheckedCreateWithoutFlow_stateInput[];
    connectOrCreate?: Prisma.saml_relay_statesCreateOrConnectWithoutFlow_stateInput | Prisma.saml_relay_statesCreateOrConnectWithoutFlow_stateInput[];
    createMany?: Prisma.saml_relay_statesCreateManyFlow_stateInputEnvelope;
    connect?: Prisma.saml_relay_statesWhereUniqueInput | Prisma.saml_relay_statesWhereUniqueInput[];
};
export type saml_relay_statesUpdateManyWithoutFlow_stateNestedInput = {
    create?: Prisma.XOR<Prisma.saml_relay_statesCreateWithoutFlow_stateInput, Prisma.saml_relay_statesUncheckedCreateWithoutFlow_stateInput> | Prisma.saml_relay_statesCreateWithoutFlow_stateInput[] | Prisma.saml_relay_statesUncheckedCreateWithoutFlow_stateInput[];
    connectOrCreate?: Prisma.saml_relay_statesCreateOrConnectWithoutFlow_stateInput | Prisma.saml_relay_statesCreateOrConnectWithoutFlow_stateInput[];
    upsert?: Prisma.saml_relay_statesUpsertWithWhereUniqueWithoutFlow_stateInput | Prisma.saml_relay_statesUpsertWithWhereUniqueWithoutFlow_stateInput[];
    createMany?: Prisma.saml_relay_statesCreateManyFlow_stateInputEnvelope;
    set?: Prisma.saml_relay_statesWhereUniqueInput | Prisma.saml_relay_statesWhereUniqueInput[];
    disconnect?: Prisma.saml_relay_statesWhereUniqueInput | Prisma.saml_relay_statesWhereUniqueInput[];
    delete?: Prisma.saml_relay_statesWhereUniqueInput | Prisma.saml_relay_statesWhereUniqueInput[];
    connect?: Prisma.saml_relay_statesWhereUniqueInput | Prisma.saml_relay_statesWhereUniqueInput[];
    update?: Prisma.saml_relay_statesUpdateWithWhereUniqueWithoutFlow_stateInput | Prisma.saml_relay_statesUpdateWithWhereUniqueWithoutFlow_stateInput[];
    updateMany?: Prisma.saml_relay_statesUpdateManyWithWhereWithoutFlow_stateInput | Prisma.saml_relay_statesUpdateManyWithWhereWithoutFlow_stateInput[];
    deleteMany?: Prisma.saml_relay_statesScalarWhereInput | Prisma.saml_relay_statesScalarWhereInput[];
};
export type saml_relay_statesUncheckedUpdateManyWithoutFlow_stateNestedInput = {
    create?: Prisma.XOR<Prisma.saml_relay_statesCreateWithoutFlow_stateInput, Prisma.saml_relay_statesUncheckedCreateWithoutFlow_stateInput> | Prisma.saml_relay_statesCreateWithoutFlow_stateInput[] | Prisma.saml_relay_statesUncheckedCreateWithoutFlow_stateInput[];
    connectOrCreate?: Prisma.saml_relay_statesCreateOrConnectWithoutFlow_stateInput | Prisma.saml_relay_statesCreateOrConnectWithoutFlow_stateInput[];
    upsert?: Prisma.saml_relay_statesUpsertWithWhereUniqueWithoutFlow_stateInput | Prisma.saml_relay_statesUpsertWithWhereUniqueWithoutFlow_stateInput[];
    createMany?: Prisma.saml_relay_statesCreateManyFlow_stateInputEnvelope;
    set?: Prisma.saml_relay_statesWhereUniqueInput | Prisma.saml_relay_statesWhereUniqueInput[];
    disconnect?: Prisma.saml_relay_statesWhereUniqueInput | Prisma.saml_relay_statesWhereUniqueInput[];
    delete?: Prisma.saml_relay_statesWhereUniqueInput | Prisma.saml_relay_statesWhereUniqueInput[];
    connect?: Prisma.saml_relay_statesWhereUniqueInput | Prisma.saml_relay_statesWhereUniqueInput[];
    update?: Prisma.saml_relay_statesUpdateWithWhereUniqueWithoutFlow_stateInput | Prisma.saml_relay_statesUpdateWithWhereUniqueWithoutFlow_stateInput[];
    updateMany?: Prisma.saml_relay_statesUpdateManyWithWhereWithoutFlow_stateInput | Prisma.saml_relay_statesUpdateManyWithWhereWithoutFlow_stateInput[];
    deleteMany?: Prisma.saml_relay_statesScalarWhereInput | Prisma.saml_relay_statesScalarWhereInput[];
};
export type saml_relay_statesCreateNestedManyWithoutSso_providersInput = {
    create?: Prisma.XOR<Prisma.saml_relay_statesCreateWithoutSso_providersInput, Prisma.saml_relay_statesUncheckedCreateWithoutSso_providersInput> | Prisma.saml_relay_statesCreateWithoutSso_providersInput[] | Prisma.saml_relay_statesUncheckedCreateWithoutSso_providersInput[];
    connectOrCreate?: Prisma.saml_relay_statesCreateOrConnectWithoutSso_providersInput | Prisma.saml_relay_statesCreateOrConnectWithoutSso_providersInput[];
    createMany?: Prisma.saml_relay_statesCreateManySso_providersInputEnvelope;
    connect?: Prisma.saml_relay_statesWhereUniqueInput | Prisma.saml_relay_statesWhereUniqueInput[];
};
export type saml_relay_statesUncheckedCreateNestedManyWithoutSso_providersInput = {
    create?: Prisma.XOR<Prisma.saml_relay_statesCreateWithoutSso_providersInput, Prisma.saml_relay_statesUncheckedCreateWithoutSso_providersInput> | Prisma.saml_relay_statesCreateWithoutSso_providersInput[] | Prisma.saml_relay_statesUncheckedCreateWithoutSso_providersInput[];
    connectOrCreate?: Prisma.saml_relay_statesCreateOrConnectWithoutSso_providersInput | Prisma.saml_relay_statesCreateOrConnectWithoutSso_providersInput[];
    createMany?: Prisma.saml_relay_statesCreateManySso_providersInputEnvelope;
    connect?: Prisma.saml_relay_statesWhereUniqueInput | Prisma.saml_relay_statesWhereUniqueInput[];
};
export type saml_relay_statesUpdateManyWithoutSso_providersNestedInput = {
    create?: Prisma.XOR<Prisma.saml_relay_statesCreateWithoutSso_providersInput, Prisma.saml_relay_statesUncheckedCreateWithoutSso_providersInput> | Prisma.saml_relay_statesCreateWithoutSso_providersInput[] | Prisma.saml_relay_statesUncheckedCreateWithoutSso_providersInput[];
    connectOrCreate?: Prisma.saml_relay_statesCreateOrConnectWithoutSso_providersInput | Prisma.saml_relay_statesCreateOrConnectWithoutSso_providersInput[];
    upsert?: Prisma.saml_relay_statesUpsertWithWhereUniqueWithoutSso_providersInput | Prisma.saml_relay_statesUpsertWithWhereUniqueWithoutSso_providersInput[];
    createMany?: Prisma.saml_relay_statesCreateManySso_providersInputEnvelope;
    set?: Prisma.saml_relay_statesWhereUniqueInput | Prisma.saml_relay_statesWhereUniqueInput[];
    disconnect?: Prisma.saml_relay_statesWhereUniqueInput | Prisma.saml_relay_statesWhereUniqueInput[];
    delete?: Prisma.saml_relay_statesWhereUniqueInput | Prisma.saml_relay_statesWhereUniqueInput[];
    connect?: Prisma.saml_relay_statesWhereUniqueInput | Prisma.saml_relay_statesWhereUniqueInput[];
    update?: Prisma.saml_relay_statesUpdateWithWhereUniqueWithoutSso_providersInput | Prisma.saml_relay_statesUpdateWithWhereUniqueWithoutSso_providersInput[];
    updateMany?: Prisma.saml_relay_statesUpdateManyWithWhereWithoutSso_providersInput | Prisma.saml_relay_statesUpdateManyWithWhereWithoutSso_providersInput[];
    deleteMany?: Prisma.saml_relay_statesScalarWhereInput | Prisma.saml_relay_statesScalarWhereInput[];
};
export type saml_relay_statesUncheckedUpdateManyWithoutSso_providersNestedInput = {
    create?: Prisma.XOR<Prisma.saml_relay_statesCreateWithoutSso_providersInput, Prisma.saml_relay_statesUncheckedCreateWithoutSso_providersInput> | Prisma.saml_relay_statesCreateWithoutSso_providersInput[] | Prisma.saml_relay_statesUncheckedCreateWithoutSso_providersInput[];
    connectOrCreate?: Prisma.saml_relay_statesCreateOrConnectWithoutSso_providersInput | Prisma.saml_relay_statesCreateOrConnectWithoutSso_providersInput[];
    upsert?: Prisma.saml_relay_statesUpsertWithWhereUniqueWithoutSso_providersInput | Prisma.saml_relay_statesUpsertWithWhereUniqueWithoutSso_providersInput[];
    createMany?: Prisma.saml_relay_statesCreateManySso_providersInputEnvelope;
    set?: Prisma.saml_relay_statesWhereUniqueInput | Prisma.saml_relay_statesWhereUniqueInput[];
    disconnect?: Prisma.saml_relay_statesWhereUniqueInput | Prisma.saml_relay_statesWhereUniqueInput[];
    delete?: Prisma.saml_relay_statesWhereUniqueInput | Prisma.saml_relay_statesWhereUniqueInput[];
    connect?: Prisma.saml_relay_statesWhereUniqueInput | Prisma.saml_relay_statesWhereUniqueInput[];
    update?: Prisma.saml_relay_statesUpdateWithWhereUniqueWithoutSso_providersInput | Prisma.saml_relay_statesUpdateWithWhereUniqueWithoutSso_providersInput[];
    updateMany?: Prisma.saml_relay_statesUpdateManyWithWhereWithoutSso_providersInput | Prisma.saml_relay_statesUpdateManyWithWhereWithoutSso_providersInput[];
    deleteMany?: Prisma.saml_relay_statesScalarWhereInput | Prisma.saml_relay_statesScalarWhereInput[];
};
export type saml_relay_statesCreateWithoutFlow_stateInput = {
    id: string;
    request_id: string;
    for_email?: string | null;
    redirect_to?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    sso_providers: Prisma.sso_providersCreateNestedOneWithoutSaml_relay_statesInput;
};
export type saml_relay_statesUncheckedCreateWithoutFlow_stateInput = {
    id: string;
    sso_provider_id: string;
    request_id: string;
    for_email?: string | null;
    redirect_to?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type saml_relay_statesCreateOrConnectWithoutFlow_stateInput = {
    where: Prisma.saml_relay_statesWhereUniqueInput;
    create: Prisma.XOR<Prisma.saml_relay_statesCreateWithoutFlow_stateInput, Prisma.saml_relay_statesUncheckedCreateWithoutFlow_stateInput>;
};
export type saml_relay_statesCreateManyFlow_stateInputEnvelope = {
    data: Prisma.saml_relay_statesCreateManyFlow_stateInput | Prisma.saml_relay_statesCreateManyFlow_stateInput[];
    skipDuplicates?: boolean;
};
export type saml_relay_statesUpsertWithWhereUniqueWithoutFlow_stateInput = {
    where: Prisma.saml_relay_statesWhereUniqueInput;
    update: Prisma.XOR<Prisma.saml_relay_statesUpdateWithoutFlow_stateInput, Prisma.saml_relay_statesUncheckedUpdateWithoutFlow_stateInput>;
    create: Prisma.XOR<Prisma.saml_relay_statesCreateWithoutFlow_stateInput, Prisma.saml_relay_statesUncheckedCreateWithoutFlow_stateInput>;
};
export type saml_relay_statesUpdateWithWhereUniqueWithoutFlow_stateInput = {
    where: Prisma.saml_relay_statesWhereUniqueInput;
    data: Prisma.XOR<Prisma.saml_relay_statesUpdateWithoutFlow_stateInput, Prisma.saml_relay_statesUncheckedUpdateWithoutFlow_stateInput>;
};
export type saml_relay_statesUpdateManyWithWhereWithoutFlow_stateInput = {
    where: Prisma.saml_relay_statesScalarWhereInput;
    data: Prisma.XOR<Prisma.saml_relay_statesUpdateManyMutationInput, Prisma.saml_relay_statesUncheckedUpdateManyWithoutFlow_stateInput>;
};
export type saml_relay_statesScalarWhereInput = {
    AND?: Prisma.saml_relay_statesScalarWhereInput | Prisma.saml_relay_statesScalarWhereInput[];
    OR?: Prisma.saml_relay_statesScalarWhereInput[];
    NOT?: Prisma.saml_relay_statesScalarWhereInput | Prisma.saml_relay_statesScalarWhereInput[];
    id?: Prisma.UuidFilter<"saml_relay_states"> | string;
    sso_provider_id?: Prisma.UuidFilter<"saml_relay_states"> | string;
    request_id?: Prisma.StringFilter<"saml_relay_states"> | string;
    for_email?: Prisma.StringNullableFilter<"saml_relay_states"> | string | null;
    redirect_to?: Prisma.StringNullableFilter<"saml_relay_states"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"saml_relay_states"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"saml_relay_states"> | Date | string | null;
    flow_state_id?: Prisma.UuidNullableFilter<"saml_relay_states"> | string | null;
};
export type saml_relay_statesCreateWithoutSso_providersInput = {
    id: string;
    request_id: string;
    for_email?: string | null;
    redirect_to?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    flow_state?: Prisma.flow_stateCreateNestedOneWithoutSaml_relay_statesInput;
};
export type saml_relay_statesUncheckedCreateWithoutSso_providersInput = {
    id: string;
    request_id: string;
    for_email?: string | null;
    redirect_to?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    flow_state_id?: string | null;
};
export type saml_relay_statesCreateOrConnectWithoutSso_providersInput = {
    where: Prisma.saml_relay_statesWhereUniqueInput;
    create: Prisma.XOR<Prisma.saml_relay_statesCreateWithoutSso_providersInput, Prisma.saml_relay_statesUncheckedCreateWithoutSso_providersInput>;
};
export type saml_relay_statesCreateManySso_providersInputEnvelope = {
    data: Prisma.saml_relay_statesCreateManySso_providersInput | Prisma.saml_relay_statesCreateManySso_providersInput[];
    skipDuplicates?: boolean;
};
export type saml_relay_statesUpsertWithWhereUniqueWithoutSso_providersInput = {
    where: Prisma.saml_relay_statesWhereUniqueInput;
    update: Prisma.XOR<Prisma.saml_relay_statesUpdateWithoutSso_providersInput, Prisma.saml_relay_statesUncheckedUpdateWithoutSso_providersInput>;
    create: Prisma.XOR<Prisma.saml_relay_statesCreateWithoutSso_providersInput, Prisma.saml_relay_statesUncheckedCreateWithoutSso_providersInput>;
};
export type saml_relay_statesUpdateWithWhereUniqueWithoutSso_providersInput = {
    where: Prisma.saml_relay_statesWhereUniqueInput;
    data: Prisma.XOR<Prisma.saml_relay_statesUpdateWithoutSso_providersInput, Prisma.saml_relay_statesUncheckedUpdateWithoutSso_providersInput>;
};
export type saml_relay_statesUpdateManyWithWhereWithoutSso_providersInput = {
    where: Prisma.saml_relay_statesScalarWhereInput;
    data: Prisma.XOR<Prisma.saml_relay_statesUpdateManyMutationInput, Prisma.saml_relay_statesUncheckedUpdateManyWithoutSso_providersInput>;
};
export type saml_relay_statesCreateManyFlow_stateInput = {
    id: string;
    sso_provider_id: string;
    request_id: string;
    for_email?: string | null;
    redirect_to?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type saml_relay_statesUpdateWithoutFlow_stateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    request_id?: Prisma.StringFieldUpdateOperationsInput | string;
    for_email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    redirect_to?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sso_providers?: Prisma.sso_providersUpdateOneRequiredWithoutSaml_relay_statesNestedInput;
};
export type saml_relay_statesUncheckedUpdateWithoutFlow_stateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sso_provider_id?: Prisma.StringFieldUpdateOperationsInput | string;
    request_id?: Prisma.StringFieldUpdateOperationsInput | string;
    for_email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    redirect_to?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type saml_relay_statesUncheckedUpdateManyWithoutFlow_stateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sso_provider_id?: Prisma.StringFieldUpdateOperationsInput | string;
    request_id?: Prisma.StringFieldUpdateOperationsInput | string;
    for_email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    redirect_to?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type saml_relay_statesCreateManySso_providersInput = {
    id: string;
    request_id: string;
    for_email?: string | null;
    redirect_to?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    flow_state_id?: string | null;
};
export type saml_relay_statesUpdateWithoutSso_providersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    request_id?: Prisma.StringFieldUpdateOperationsInput | string;
    for_email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    redirect_to?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    flow_state?: Prisma.flow_stateUpdateOneWithoutSaml_relay_statesNestedInput;
};
export type saml_relay_statesUncheckedUpdateWithoutSso_providersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    request_id?: Prisma.StringFieldUpdateOperationsInput | string;
    for_email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    redirect_to?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    flow_state_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type saml_relay_statesUncheckedUpdateManyWithoutSso_providersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    request_id?: Prisma.StringFieldUpdateOperationsInput | string;
    for_email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    redirect_to?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    flow_state_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type saml_relay_statesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sso_provider_id?: boolean;
    request_id?: boolean;
    for_email?: boolean;
    redirect_to?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    flow_state_id?: boolean;
    flow_state?: boolean | Prisma.saml_relay_states$flow_stateArgs<ExtArgs>;
    sso_providers?: boolean | Prisma.sso_providersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["saml_relay_states"]>;
export type saml_relay_statesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sso_provider_id?: boolean;
    request_id?: boolean;
    for_email?: boolean;
    redirect_to?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    flow_state_id?: boolean;
    flow_state?: boolean | Prisma.saml_relay_states$flow_stateArgs<ExtArgs>;
    sso_providers?: boolean | Prisma.sso_providersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["saml_relay_states"]>;
export type saml_relay_statesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sso_provider_id?: boolean;
    request_id?: boolean;
    for_email?: boolean;
    redirect_to?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    flow_state_id?: boolean;
    flow_state?: boolean | Prisma.saml_relay_states$flow_stateArgs<ExtArgs>;
    sso_providers?: boolean | Prisma.sso_providersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["saml_relay_states"]>;
export type saml_relay_statesSelectScalar = {
    id?: boolean;
    sso_provider_id?: boolean;
    request_id?: boolean;
    for_email?: boolean;
    redirect_to?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    flow_state_id?: boolean;
};
export type saml_relay_statesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "sso_provider_id" | "request_id" | "for_email" | "redirect_to" | "created_at" | "updated_at" | "flow_state_id", ExtArgs["result"]["saml_relay_states"]>;
export type saml_relay_statesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    flow_state?: boolean | Prisma.saml_relay_states$flow_stateArgs<ExtArgs>;
    sso_providers?: boolean | Prisma.sso_providersDefaultArgs<ExtArgs>;
};
export type saml_relay_statesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    flow_state?: boolean | Prisma.saml_relay_states$flow_stateArgs<ExtArgs>;
    sso_providers?: boolean | Prisma.sso_providersDefaultArgs<ExtArgs>;
};
export type saml_relay_statesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    flow_state?: boolean | Prisma.saml_relay_states$flow_stateArgs<ExtArgs>;
    sso_providers?: boolean | Prisma.sso_providersDefaultArgs<ExtArgs>;
};
export type $saml_relay_statesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "saml_relay_states";
    objects: {
        flow_state: Prisma.$flow_statePayload<ExtArgs> | null;
        sso_providers: Prisma.$sso_providersPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        sso_provider_id: string;
        request_id: string;
        for_email: string | null;
        redirect_to: string | null;
        created_at: Date | null;
        updated_at: Date | null;
        flow_state_id: string | null;
    }, ExtArgs["result"]["saml_relay_states"]>;
    composites: {};
};
export type saml_relay_statesGetPayload<S extends boolean | null | undefined | saml_relay_statesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$saml_relay_statesPayload, S>;
export type saml_relay_statesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<saml_relay_statesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Saml_relay_statesCountAggregateInputType | true;
};
export interface saml_relay_statesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['saml_relay_states'];
        meta: {
            name: 'saml_relay_states';
        };
    };
    findUnique<T extends saml_relay_statesFindUniqueArgs>(args: Prisma.SelectSubset<T, saml_relay_statesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__saml_relay_statesClient<runtime.Types.Result.GetResult<Prisma.$saml_relay_statesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends saml_relay_statesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, saml_relay_statesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__saml_relay_statesClient<runtime.Types.Result.GetResult<Prisma.$saml_relay_statesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends saml_relay_statesFindFirstArgs>(args?: Prisma.SelectSubset<T, saml_relay_statesFindFirstArgs<ExtArgs>>): Prisma.Prisma__saml_relay_statesClient<runtime.Types.Result.GetResult<Prisma.$saml_relay_statesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends saml_relay_statesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, saml_relay_statesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__saml_relay_statesClient<runtime.Types.Result.GetResult<Prisma.$saml_relay_statesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends saml_relay_statesFindManyArgs>(args?: Prisma.SelectSubset<T, saml_relay_statesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$saml_relay_statesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends saml_relay_statesCreateArgs>(args: Prisma.SelectSubset<T, saml_relay_statesCreateArgs<ExtArgs>>): Prisma.Prisma__saml_relay_statesClient<runtime.Types.Result.GetResult<Prisma.$saml_relay_statesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends saml_relay_statesCreateManyArgs>(args?: Prisma.SelectSubset<T, saml_relay_statesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends saml_relay_statesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, saml_relay_statesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$saml_relay_statesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends saml_relay_statesDeleteArgs>(args: Prisma.SelectSubset<T, saml_relay_statesDeleteArgs<ExtArgs>>): Prisma.Prisma__saml_relay_statesClient<runtime.Types.Result.GetResult<Prisma.$saml_relay_statesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends saml_relay_statesUpdateArgs>(args: Prisma.SelectSubset<T, saml_relay_statesUpdateArgs<ExtArgs>>): Prisma.Prisma__saml_relay_statesClient<runtime.Types.Result.GetResult<Prisma.$saml_relay_statesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends saml_relay_statesDeleteManyArgs>(args?: Prisma.SelectSubset<T, saml_relay_statesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends saml_relay_statesUpdateManyArgs>(args: Prisma.SelectSubset<T, saml_relay_statesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends saml_relay_statesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, saml_relay_statesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$saml_relay_statesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends saml_relay_statesUpsertArgs>(args: Prisma.SelectSubset<T, saml_relay_statesUpsertArgs<ExtArgs>>): Prisma.Prisma__saml_relay_statesClient<runtime.Types.Result.GetResult<Prisma.$saml_relay_statesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends saml_relay_statesCountArgs>(args?: Prisma.Subset<T, saml_relay_statesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Saml_relay_statesCountAggregateOutputType> : number>;
    aggregate<T extends Saml_relay_statesAggregateArgs>(args: Prisma.Subset<T, Saml_relay_statesAggregateArgs>): Prisma.PrismaPromise<GetSaml_relay_statesAggregateType<T>>;
    groupBy<T extends saml_relay_statesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: saml_relay_statesGroupByArgs['orderBy'];
    } : {
        orderBy?: saml_relay_statesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, saml_relay_statesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaml_relay_statesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: saml_relay_statesFieldRefs;
}
export interface Prisma__saml_relay_statesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    flow_state<T extends Prisma.saml_relay_states$flow_stateArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.saml_relay_states$flow_stateArgs<ExtArgs>>): Prisma.Prisma__flow_stateClient<runtime.Types.Result.GetResult<Prisma.$flow_statePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    sso_providers<T extends Prisma.sso_providersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.sso_providersDefaultArgs<ExtArgs>>): Prisma.Prisma__sso_providersClient<runtime.Types.Result.GetResult<Prisma.$sso_providersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface saml_relay_statesFieldRefs {
    readonly id: Prisma.FieldRef<"saml_relay_states", 'String'>;
    readonly sso_provider_id: Prisma.FieldRef<"saml_relay_states", 'String'>;
    readonly request_id: Prisma.FieldRef<"saml_relay_states", 'String'>;
    readonly for_email: Prisma.FieldRef<"saml_relay_states", 'String'>;
    readonly redirect_to: Prisma.FieldRef<"saml_relay_states", 'String'>;
    readonly created_at: Prisma.FieldRef<"saml_relay_states", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"saml_relay_states", 'DateTime'>;
    readonly flow_state_id: Prisma.FieldRef<"saml_relay_states", 'String'>;
}
export type saml_relay_statesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.saml_relay_statesSelect<ExtArgs> | null;
    omit?: Prisma.saml_relay_statesOmit<ExtArgs> | null;
    include?: Prisma.saml_relay_statesInclude<ExtArgs> | null;
    where: Prisma.saml_relay_statesWhereUniqueInput;
};
export type saml_relay_statesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.saml_relay_statesSelect<ExtArgs> | null;
    omit?: Prisma.saml_relay_statesOmit<ExtArgs> | null;
    include?: Prisma.saml_relay_statesInclude<ExtArgs> | null;
    where: Prisma.saml_relay_statesWhereUniqueInput;
};
export type saml_relay_statesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.saml_relay_statesSelect<ExtArgs> | null;
    omit?: Prisma.saml_relay_statesOmit<ExtArgs> | null;
    include?: Prisma.saml_relay_statesInclude<ExtArgs> | null;
    where?: Prisma.saml_relay_statesWhereInput;
    orderBy?: Prisma.saml_relay_statesOrderByWithRelationInput | Prisma.saml_relay_statesOrderByWithRelationInput[];
    cursor?: Prisma.saml_relay_statesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Saml_relay_statesScalarFieldEnum | Prisma.Saml_relay_statesScalarFieldEnum[];
};
export type saml_relay_statesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.saml_relay_statesSelect<ExtArgs> | null;
    omit?: Prisma.saml_relay_statesOmit<ExtArgs> | null;
    include?: Prisma.saml_relay_statesInclude<ExtArgs> | null;
    where?: Prisma.saml_relay_statesWhereInput;
    orderBy?: Prisma.saml_relay_statesOrderByWithRelationInput | Prisma.saml_relay_statesOrderByWithRelationInput[];
    cursor?: Prisma.saml_relay_statesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Saml_relay_statesScalarFieldEnum | Prisma.Saml_relay_statesScalarFieldEnum[];
};
export type saml_relay_statesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.saml_relay_statesSelect<ExtArgs> | null;
    omit?: Prisma.saml_relay_statesOmit<ExtArgs> | null;
    include?: Prisma.saml_relay_statesInclude<ExtArgs> | null;
    where?: Prisma.saml_relay_statesWhereInput;
    orderBy?: Prisma.saml_relay_statesOrderByWithRelationInput | Prisma.saml_relay_statesOrderByWithRelationInput[];
    cursor?: Prisma.saml_relay_statesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Saml_relay_statesScalarFieldEnum | Prisma.Saml_relay_statesScalarFieldEnum[];
};
export type saml_relay_statesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.saml_relay_statesSelect<ExtArgs> | null;
    omit?: Prisma.saml_relay_statesOmit<ExtArgs> | null;
    include?: Prisma.saml_relay_statesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.saml_relay_statesCreateInput, Prisma.saml_relay_statesUncheckedCreateInput>;
};
export type saml_relay_statesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.saml_relay_statesCreateManyInput | Prisma.saml_relay_statesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type saml_relay_statesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.saml_relay_statesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.saml_relay_statesOmit<ExtArgs> | null;
    data: Prisma.saml_relay_statesCreateManyInput | Prisma.saml_relay_statesCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.saml_relay_statesIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type saml_relay_statesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.saml_relay_statesSelect<ExtArgs> | null;
    omit?: Prisma.saml_relay_statesOmit<ExtArgs> | null;
    include?: Prisma.saml_relay_statesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.saml_relay_statesUpdateInput, Prisma.saml_relay_statesUncheckedUpdateInput>;
    where: Prisma.saml_relay_statesWhereUniqueInput;
};
export type saml_relay_statesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.saml_relay_statesUpdateManyMutationInput, Prisma.saml_relay_statesUncheckedUpdateManyInput>;
    where?: Prisma.saml_relay_statesWhereInput;
    limit?: number;
};
export type saml_relay_statesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.saml_relay_statesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.saml_relay_statesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.saml_relay_statesUpdateManyMutationInput, Prisma.saml_relay_statesUncheckedUpdateManyInput>;
    where?: Prisma.saml_relay_statesWhereInput;
    limit?: number;
    include?: Prisma.saml_relay_statesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type saml_relay_statesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.saml_relay_statesSelect<ExtArgs> | null;
    omit?: Prisma.saml_relay_statesOmit<ExtArgs> | null;
    include?: Prisma.saml_relay_statesInclude<ExtArgs> | null;
    where: Prisma.saml_relay_statesWhereUniqueInput;
    create: Prisma.XOR<Prisma.saml_relay_statesCreateInput, Prisma.saml_relay_statesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.saml_relay_statesUpdateInput, Prisma.saml_relay_statesUncheckedUpdateInput>;
};
export type saml_relay_statesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.saml_relay_statesSelect<ExtArgs> | null;
    omit?: Prisma.saml_relay_statesOmit<ExtArgs> | null;
    include?: Prisma.saml_relay_statesInclude<ExtArgs> | null;
    where: Prisma.saml_relay_statesWhereUniqueInput;
};
export type saml_relay_statesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.saml_relay_statesWhereInput;
    limit?: number;
};
export type saml_relay_states$flow_stateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.flow_stateSelect<ExtArgs> | null;
    omit?: Prisma.flow_stateOmit<ExtArgs> | null;
    include?: Prisma.flow_stateInclude<ExtArgs> | null;
    where?: Prisma.flow_stateWhereInput;
};
export type saml_relay_statesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.saml_relay_statesSelect<ExtArgs> | null;
    omit?: Prisma.saml_relay_statesOmit<ExtArgs> | null;
    include?: Prisma.saml_relay_statesInclude<ExtArgs> | null;
};
