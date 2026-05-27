import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type saml_providersModel = runtime.Types.Result.DefaultSelection<Prisma.$saml_providersPayload>;
export type AggregateSaml_providers = {
    _count: Saml_providersCountAggregateOutputType | null;
    _min: Saml_providersMinAggregateOutputType | null;
    _max: Saml_providersMaxAggregateOutputType | null;
};
export type Saml_providersMinAggregateOutputType = {
    id: string | null;
    sso_provider_id: string | null;
    entity_id: string | null;
    metadata_xml: string | null;
    metadata_url: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    name_id_format: string | null;
};
export type Saml_providersMaxAggregateOutputType = {
    id: string | null;
    sso_provider_id: string | null;
    entity_id: string | null;
    metadata_xml: string | null;
    metadata_url: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    name_id_format: string | null;
};
export type Saml_providersCountAggregateOutputType = {
    id: number;
    sso_provider_id: number;
    entity_id: number;
    metadata_xml: number;
    metadata_url: number;
    attribute_mapping: number;
    created_at: number;
    updated_at: number;
    name_id_format: number;
    _all: number;
};
export type Saml_providersMinAggregateInputType = {
    id?: true;
    sso_provider_id?: true;
    entity_id?: true;
    metadata_xml?: true;
    metadata_url?: true;
    created_at?: true;
    updated_at?: true;
    name_id_format?: true;
};
export type Saml_providersMaxAggregateInputType = {
    id?: true;
    sso_provider_id?: true;
    entity_id?: true;
    metadata_xml?: true;
    metadata_url?: true;
    created_at?: true;
    updated_at?: true;
    name_id_format?: true;
};
export type Saml_providersCountAggregateInputType = {
    id?: true;
    sso_provider_id?: true;
    entity_id?: true;
    metadata_xml?: true;
    metadata_url?: true;
    attribute_mapping?: true;
    created_at?: true;
    updated_at?: true;
    name_id_format?: true;
    _all?: true;
};
export type Saml_providersAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.saml_providersWhereInput;
    orderBy?: Prisma.saml_providersOrderByWithRelationInput | Prisma.saml_providersOrderByWithRelationInput[];
    cursor?: Prisma.saml_providersWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Saml_providersCountAggregateInputType;
    _min?: Saml_providersMinAggregateInputType;
    _max?: Saml_providersMaxAggregateInputType;
};
export type GetSaml_providersAggregateType<T extends Saml_providersAggregateArgs> = {
    [P in keyof T & keyof AggregateSaml_providers]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSaml_providers[P]> : Prisma.GetScalarType<T[P], AggregateSaml_providers[P]>;
};
export type saml_providersGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.saml_providersWhereInput;
    orderBy?: Prisma.saml_providersOrderByWithAggregationInput | Prisma.saml_providersOrderByWithAggregationInput[];
    by: Prisma.Saml_providersScalarFieldEnum[] | Prisma.Saml_providersScalarFieldEnum;
    having?: Prisma.saml_providersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Saml_providersCountAggregateInputType | true;
    _min?: Saml_providersMinAggregateInputType;
    _max?: Saml_providersMaxAggregateInputType;
};
export type Saml_providersGroupByOutputType = {
    id: string;
    sso_provider_id: string;
    entity_id: string;
    metadata_xml: string;
    metadata_url: string | null;
    attribute_mapping: runtime.JsonValue | null;
    created_at: Date | null;
    updated_at: Date | null;
    name_id_format: string | null;
    _count: Saml_providersCountAggregateOutputType | null;
    _min: Saml_providersMinAggregateOutputType | null;
    _max: Saml_providersMaxAggregateOutputType | null;
};
export type GetSaml_providersGroupByPayload<T extends saml_providersGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Saml_providersGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Saml_providersGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Saml_providersGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Saml_providersGroupByOutputType[P]>;
}>>;
export type saml_providersWhereInput = {
    AND?: Prisma.saml_providersWhereInput | Prisma.saml_providersWhereInput[];
    OR?: Prisma.saml_providersWhereInput[];
    NOT?: Prisma.saml_providersWhereInput | Prisma.saml_providersWhereInput[];
    id?: Prisma.UuidFilter<"saml_providers"> | string;
    sso_provider_id?: Prisma.UuidFilter<"saml_providers"> | string;
    entity_id?: Prisma.StringFilter<"saml_providers"> | string;
    metadata_xml?: Prisma.StringFilter<"saml_providers"> | string;
    metadata_url?: Prisma.StringNullableFilter<"saml_providers"> | string | null;
    attribute_mapping?: Prisma.JsonNullableFilter<"saml_providers">;
    created_at?: Prisma.DateTimeNullableFilter<"saml_providers"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"saml_providers"> | Date | string | null;
    name_id_format?: Prisma.StringNullableFilter<"saml_providers"> | string | null;
    sso_providers?: Prisma.XOR<Prisma.Sso_providersScalarRelationFilter, Prisma.sso_providersWhereInput>;
};
export type saml_providersOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    sso_provider_id?: Prisma.SortOrder;
    entity_id?: Prisma.SortOrder;
    metadata_xml?: Prisma.SortOrder;
    metadata_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    attribute_mapping?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    name_id_format?: Prisma.SortOrderInput | Prisma.SortOrder;
    sso_providers?: Prisma.sso_providersOrderByWithRelationInput;
};
export type saml_providersWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    entity_id?: string;
    AND?: Prisma.saml_providersWhereInput | Prisma.saml_providersWhereInput[];
    OR?: Prisma.saml_providersWhereInput[];
    NOT?: Prisma.saml_providersWhereInput | Prisma.saml_providersWhereInput[];
    sso_provider_id?: Prisma.UuidFilter<"saml_providers"> | string;
    metadata_xml?: Prisma.StringFilter<"saml_providers"> | string;
    metadata_url?: Prisma.StringNullableFilter<"saml_providers"> | string | null;
    attribute_mapping?: Prisma.JsonNullableFilter<"saml_providers">;
    created_at?: Prisma.DateTimeNullableFilter<"saml_providers"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"saml_providers"> | Date | string | null;
    name_id_format?: Prisma.StringNullableFilter<"saml_providers"> | string | null;
    sso_providers?: Prisma.XOR<Prisma.Sso_providersScalarRelationFilter, Prisma.sso_providersWhereInput>;
}, "id" | "entity_id">;
export type saml_providersOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    sso_provider_id?: Prisma.SortOrder;
    entity_id?: Prisma.SortOrder;
    metadata_xml?: Prisma.SortOrder;
    metadata_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    attribute_mapping?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    name_id_format?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.saml_providersCountOrderByAggregateInput;
    _max?: Prisma.saml_providersMaxOrderByAggregateInput;
    _min?: Prisma.saml_providersMinOrderByAggregateInput;
};
export type saml_providersScalarWhereWithAggregatesInput = {
    AND?: Prisma.saml_providersScalarWhereWithAggregatesInput | Prisma.saml_providersScalarWhereWithAggregatesInput[];
    OR?: Prisma.saml_providersScalarWhereWithAggregatesInput[];
    NOT?: Prisma.saml_providersScalarWhereWithAggregatesInput | Prisma.saml_providersScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"saml_providers"> | string;
    sso_provider_id?: Prisma.UuidWithAggregatesFilter<"saml_providers"> | string;
    entity_id?: Prisma.StringWithAggregatesFilter<"saml_providers"> | string;
    metadata_xml?: Prisma.StringWithAggregatesFilter<"saml_providers"> | string;
    metadata_url?: Prisma.StringNullableWithAggregatesFilter<"saml_providers"> | string | null;
    attribute_mapping?: Prisma.JsonNullableWithAggregatesFilter<"saml_providers">;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"saml_providers"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"saml_providers"> | Date | string | null;
    name_id_format?: Prisma.StringNullableWithAggregatesFilter<"saml_providers"> | string | null;
};
export type saml_providersCreateInput = {
    id: string;
    entity_id: string;
    metadata_xml: string;
    metadata_url?: string | null;
    attribute_mapping?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    name_id_format?: string | null;
    sso_providers: Prisma.sso_providersCreateNestedOneWithoutSaml_providersInput;
};
export type saml_providersUncheckedCreateInput = {
    id: string;
    sso_provider_id: string;
    entity_id: string;
    metadata_xml: string;
    metadata_url?: string | null;
    attribute_mapping?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    name_id_format?: string | null;
};
export type saml_providersUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    entity_id?: Prisma.StringFieldUpdateOperationsInput | string;
    metadata_xml?: Prisma.StringFieldUpdateOperationsInput | string;
    metadata_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attribute_mapping?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name_id_format?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sso_providers?: Prisma.sso_providersUpdateOneRequiredWithoutSaml_providersNestedInput;
};
export type saml_providersUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sso_provider_id?: Prisma.StringFieldUpdateOperationsInput | string;
    entity_id?: Prisma.StringFieldUpdateOperationsInput | string;
    metadata_xml?: Prisma.StringFieldUpdateOperationsInput | string;
    metadata_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attribute_mapping?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name_id_format?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type saml_providersCreateManyInput = {
    id: string;
    sso_provider_id: string;
    entity_id: string;
    metadata_xml: string;
    metadata_url?: string | null;
    attribute_mapping?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    name_id_format?: string | null;
};
export type saml_providersUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    entity_id?: Prisma.StringFieldUpdateOperationsInput | string;
    metadata_xml?: Prisma.StringFieldUpdateOperationsInput | string;
    metadata_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attribute_mapping?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name_id_format?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type saml_providersUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sso_provider_id?: Prisma.StringFieldUpdateOperationsInput | string;
    entity_id?: Prisma.StringFieldUpdateOperationsInput | string;
    metadata_xml?: Prisma.StringFieldUpdateOperationsInput | string;
    metadata_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attribute_mapping?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name_id_format?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type saml_providersCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sso_provider_id?: Prisma.SortOrder;
    entity_id?: Prisma.SortOrder;
    metadata_xml?: Prisma.SortOrder;
    metadata_url?: Prisma.SortOrder;
    attribute_mapping?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    name_id_format?: Prisma.SortOrder;
};
export type saml_providersMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sso_provider_id?: Prisma.SortOrder;
    entity_id?: Prisma.SortOrder;
    metadata_xml?: Prisma.SortOrder;
    metadata_url?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    name_id_format?: Prisma.SortOrder;
};
export type saml_providersMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sso_provider_id?: Prisma.SortOrder;
    entity_id?: Prisma.SortOrder;
    metadata_xml?: Prisma.SortOrder;
    metadata_url?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    name_id_format?: Prisma.SortOrder;
};
export type Saml_providersListRelationFilter = {
    every?: Prisma.saml_providersWhereInput;
    some?: Prisma.saml_providersWhereInput;
    none?: Prisma.saml_providersWhereInput;
};
export type saml_providersOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type saml_providersCreateNestedManyWithoutSso_providersInput = {
    create?: Prisma.XOR<Prisma.saml_providersCreateWithoutSso_providersInput, Prisma.saml_providersUncheckedCreateWithoutSso_providersInput> | Prisma.saml_providersCreateWithoutSso_providersInput[] | Prisma.saml_providersUncheckedCreateWithoutSso_providersInput[];
    connectOrCreate?: Prisma.saml_providersCreateOrConnectWithoutSso_providersInput | Prisma.saml_providersCreateOrConnectWithoutSso_providersInput[];
    createMany?: Prisma.saml_providersCreateManySso_providersInputEnvelope;
    connect?: Prisma.saml_providersWhereUniqueInput | Prisma.saml_providersWhereUniqueInput[];
};
export type saml_providersUncheckedCreateNestedManyWithoutSso_providersInput = {
    create?: Prisma.XOR<Prisma.saml_providersCreateWithoutSso_providersInput, Prisma.saml_providersUncheckedCreateWithoutSso_providersInput> | Prisma.saml_providersCreateWithoutSso_providersInput[] | Prisma.saml_providersUncheckedCreateWithoutSso_providersInput[];
    connectOrCreate?: Prisma.saml_providersCreateOrConnectWithoutSso_providersInput | Prisma.saml_providersCreateOrConnectWithoutSso_providersInput[];
    createMany?: Prisma.saml_providersCreateManySso_providersInputEnvelope;
    connect?: Prisma.saml_providersWhereUniqueInput | Prisma.saml_providersWhereUniqueInput[];
};
export type saml_providersUpdateManyWithoutSso_providersNestedInput = {
    create?: Prisma.XOR<Prisma.saml_providersCreateWithoutSso_providersInput, Prisma.saml_providersUncheckedCreateWithoutSso_providersInput> | Prisma.saml_providersCreateWithoutSso_providersInput[] | Prisma.saml_providersUncheckedCreateWithoutSso_providersInput[];
    connectOrCreate?: Prisma.saml_providersCreateOrConnectWithoutSso_providersInput | Prisma.saml_providersCreateOrConnectWithoutSso_providersInput[];
    upsert?: Prisma.saml_providersUpsertWithWhereUniqueWithoutSso_providersInput | Prisma.saml_providersUpsertWithWhereUniqueWithoutSso_providersInput[];
    createMany?: Prisma.saml_providersCreateManySso_providersInputEnvelope;
    set?: Prisma.saml_providersWhereUniqueInput | Prisma.saml_providersWhereUniqueInput[];
    disconnect?: Prisma.saml_providersWhereUniqueInput | Prisma.saml_providersWhereUniqueInput[];
    delete?: Prisma.saml_providersWhereUniqueInput | Prisma.saml_providersWhereUniqueInput[];
    connect?: Prisma.saml_providersWhereUniqueInput | Prisma.saml_providersWhereUniqueInput[];
    update?: Prisma.saml_providersUpdateWithWhereUniqueWithoutSso_providersInput | Prisma.saml_providersUpdateWithWhereUniqueWithoutSso_providersInput[];
    updateMany?: Prisma.saml_providersUpdateManyWithWhereWithoutSso_providersInput | Prisma.saml_providersUpdateManyWithWhereWithoutSso_providersInput[];
    deleteMany?: Prisma.saml_providersScalarWhereInput | Prisma.saml_providersScalarWhereInput[];
};
export type saml_providersUncheckedUpdateManyWithoutSso_providersNestedInput = {
    create?: Prisma.XOR<Prisma.saml_providersCreateWithoutSso_providersInput, Prisma.saml_providersUncheckedCreateWithoutSso_providersInput> | Prisma.saml_providersCreateWithoutSso_providersInput[] | Prisma.saml_providersUncheckedCreateWithoutSso_providersInput[];
    connectOrCreate?: Prisma.saml_providersCreateOrConnectWithoutSso_providersInput | Prisma.saml_providersCreateOrConnectWithoutSso_providersInput[];
    upsert?: Prisma.saml_providersUpsertWithWhereUniqueWithoutSso_providersInput | Prisma.saml_providersUpsertWithWhereUniqueWithoutSso_providersInput[];
    createMany?: Prisma.saml_providersCreateManySso_providersInputEnvelope;
    set?: Prisma.saml_providersWhereUniqueInput | Prisma.saml_providersWhereUniqueInput[];
    disconnect?: Prisma.saml_providersWhereUniqueInput | Prisma.saml_providersWhereUniqueInput[];
    delete?: Prisma.saml_providersWhereUniqueInput | Prisma.saml_providersWhereUniqueInput[];
    connect?: Prisma.saml_providersWhereUniqueInput | Prisma.saml_providersWhereUniqueInput[];
    update?: Prisma.saml_providersUpdateWithWhereUniqueWithoutSso_providersInput | Prisma.saml_providersUpdateWithWhereUniqueWithoutSso_providersInput[];
    updateMany?: Prisma.saml_providersUpdateManyWithWhereWithoutSso_providersInput | Prisma.saml_providersUpdateManyWithWhereWithoutSso_providersInput[];
    deleteMany?: Prisma.saml_providersScalarWhereInput | Prisma.saml_providersScalarWhereInput[];
};
export type saml_providersCreateWithoutSso_providersInput = {
    id: string;
    entity_id: string;
    metadata_xml: string;
    metadata_url?: string | null;
    attribute_mapping?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    name_id_format?: string | null;
};
export type saml_providersUncheckedCreateWithoutSso_providersInput = {
    id: string;
    entity_id: string;
    metadata_xml: string;
    metadata_url?: string | null;
    attribute_mapping?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    name_id_format?: string | null;
};
export type saml_providersCreateOrConnectWithoutSso_providersInput = {
    where: Prisma.saml_providersWhereUniqueInput;
    create: Prisma.XOR<Prisma.saml_providersCreateWithoutSso_providersInput, Prisma.saml_providersUncheckedCreateWithoutSso_providersInput>;
};
export type saml_providersCreateManySso_providersInputEnvelope = {
    data: Prisma.saml_providersCreateManySso_providersInput | Prisma.saml_providersCreateManySso_providersInput[];
    skipDuplicates?: boolean;
};
export type saml_providersUpsertWithWhereUniqueWithoutSso_providersInput = {
    where: Prisma.saml_providersWhereUniqueInput;
    update: Prisma.XOR<Prisma.saml_providersUpdateWithoutSso_providersInput, Prisma.saml_providersUncheckedUpdateWithoutSso_providersInput>;
    create: Prisma.XOR<Prisma.saml_providersCreateWithoutSso_providersInput, Prisma.saml_providersUncheckedCreateWithoutSso_providersInput>;
};
export type saml_providersUpdateWithWhereUniqueWithoutSso_providersInput = {
    where: Prisma.saml_providersWhereUniqueInput;
    data: Prisma.XOR<Prisma.saml_providersUpdateWithoutSso_providersInput, Prisma.saml_providersUncheckedUpdateWithoutSso_providersInput>;
};
export type saml_providersUpdateManyWithWhereWithoutSso_providersInput = {
    where: Prisma.saml_providersScalarWhereInput;
    data: Prisma.XOR<Prisma.saml_providersUpdateManyMutationInput, Prisma.saml_providersUncheckedUpdateManyWithoutSso_providersInput>;
};
export type saml_providersScalarWhereInput = {
    AND?: Prisma.saml_providersScalarWhereInput | Prisma.saml_providersScalarWhereInput[];
    OR?: Prisma.saml_providersScalarWhereInput[];
    NOT?: Prisma.saml_providersScalarWhereInput | Prisma.saml_providersScalarWhereInput[];
    id?: Prisma.UuidFilter<"saml_providers"> | string;
    sso_provider_id?: Prisma.UuidFilter<"saml_providers"> | string;
    entity_id?: Prisma.StringFilter<"saml_providers"> | string;
    metadata_xml?: Prisma.StringFilter<"saml_providers"> | string;
    metadata_url?: Prisma.StringNullableFilter<"saml_providers"> | string | null;
    attribute_mapping?: Prisma.JsonNullableFilter<"saml_providers">;
    created_at?: Prisma.DateTimeNullableFilter<"saml_providers"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"saml_providers"> | Date | string | null;
    name_id_format?: Prisma.StringNullableFilter<"saml_providers"> | string | null;
};
export type saml_providersCreateManySso_providersInput = {
    id: string;
    entity_id: string;
    metadata_xml: string;
    metadata_url?: string | null;
    attribute_mapping?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    name_id_format?: string | null;
};
export type saml_providersUpdateWithoutSso_providersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    entity_id?: Prisma.StringFieldUpdateOperationsInput | string;
    metadata_xml?: Prisma.StringFieldUpdateOperationsInput | string;
    metadata_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attribute_mapping?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name_id_format?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type saml_providersUncheckedUpdateWithoutSso_providersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    entity_id?: Prisma.StringFieldUpdateOperationsInput | string;
    metadata_xml?: Prisma.StringFieldUpdateOperationsInput | string;
    metadata_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attribute_mapping?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name_id_format?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type saml_providersUncheckedUpdateManyWithoutSso_providersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    entity_id?: Prisma.StringFieldUpdateOperationsInput | string;
    metadata_xml?: Prisma.StringFieldUpdateOperationsInput | string;
    metadata_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attribute_mapping?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name_id_format?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type saml_providersSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sso_provider_id?: boolean;
    entity_id?: boolean;
    metadata_xml?: boolean;
    metadata_url?: boolean;
    attribute_mapping?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    name_id_format?: boolean;
    sso_providers?: boolean | Prisma.sso_providersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["saml_providers"]>;
export type saml_providersSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sso_provider_id?: boolean;
    entity_id?: boolean;
    metadata_xml?: boolean;
    metadata_url?: boolean;
    attribute_mapping?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    name_id_format?: boolean;
    sso_providers?: boolean | Prisma.sso_providersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["saml_providers"]>;
export type saml_providersSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sso_provider_id?: boolean;
    entity_id?: boolean;
    metadata_xml?: boolean;
    metadata_url?: boolean;
    attribute_mapping?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    name_id_format?: boolean;
    sso_providers?: boolean | Prisma.sso_providersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["saml_providers"]>;
export type saml_providersSelectScalar = {
    id?: boolean;
    sso_provider_id?: boolean;
    entity_id?: boolean;
    metadata_xml?: boolean;
    metadata_url?: boolean;
    attribute_mapping?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    name_id_format?: boolean;
};
export type saml_providersOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "sso_provider_id" | "entity_id" | "metadata_xml" | "metadata_url" | "attribute_mapping" | "created_at" | "updated_at" | "name_id_format", ExtArgs["result"]["saml_providers"]>;
export type saml_providersInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sso_providers?: boolean | Prisma.sso_providersDefaultArgs<ExtArgs>;
};
export type saml_providersIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sso_providers?: boolean | Prisma.sso_providersDefaultArgs<ExtArgs>;
};
export type saml_providersIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sso_providers?: boolean | Prisma.sso_providersDefaultArgs<ExtArgs>;
};
export type $saml_providersPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "saml_providers";
    objects: {
        sso_providers: Prisma.$sso_providersPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        sso_provider_id: string;
        entity_id: string;
        metadata_xml: string;
        metadata_url: string | null;
        attribute_mapping: runtime.JsonValue | null;
        created_at: Date | null;
        updated_at: Date | null;
        name_id_format: string | null;
    }, ExtArgs["result"]["saml_providers"]>;
    composites: {};
};
export type saml_providersGetPayload<S extends boolean | null | undefined | saml_providersDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$saml_providersPayload, S>;
export type saml_providersCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<saml_providersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Saml_providersCountAggregateInputType | true;
};
export interface saml_providersDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['saml_providers'];
        meta: {
            name: 'saml_providers';
        };
    };
    findUnique<T extends saml_providersFindUniqueArgs>(args: Prisma.SelectSubset<T, saml_providersFindUniqueArgs<ExtArgs>>): Prisma.Prisma__saml_providersClient<runtime.Types.Result.GetResult<Prisma.$saml_providersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends saml_providersFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, saml_providersFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__saml_providersClient<runtime.Types.Result.GetResult<Prisma.$saml_providersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends saml_providersFindFirstArgs>(args?: Prisma.SelectSubset<T, saml_providersFindFirstArgs<ExtArgs>>): Prisma.Prisma__saml_providersClient<runtime.Types.Result.GetResult<Prisma.$saml_providersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends saml_providersFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, saml_providersFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__saml_providersClient<runtime.Types.Result.GetResult<Prisma.$saml_providersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends saml_providersFindManyArgs>(args?: Prisma.SelectSubset<T, saml_providersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$saml_providersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends saml_providersCreateArgs>(args: Prisma.SelectSubset<T, saml_providersCreateArgs<ExtArgs>>): Prisma.Prisma__saml_providersClient<runtime.Types.Result.GetResult<Prisma.$saml_providersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends saml_providersCreateManyArgs>(args?: Prisma.SelectSubset<T, saml_providersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends saml_providersCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, saml_providersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$saml_providersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends saml_providersDeleteArgs>(args: Prisma.SelectSubset<T, saml_providersDeleteArgs<ExtArgs>>): Prisma.Prisma__saml_providersClient<runtime.Types.Result.GetResult<Prisma.$saml_providersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends saml_providersUpdateArgs>(args: Prisma.SelectSubset<T, saml_providersUpdateArgs<ExtArgs>>): Prisma.Prisma__saml_providersClient<runtime.Types.Result.GetResult<Prisma.$saml_providersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends saml_providersDeleteManyArgs>(args?: Prisma.SelectSubset<T, saml_providersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends saml_providersUpdateManyArgs>(args: Prisma.SelectSubset<T, saml_providersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends saml_providersUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, saml_providersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$saml_providersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends saml_providersUpsertArgs>(args: Prisma.SelectSubset<T, saml_providersUpsertArgs<ExtArgs>>): Prisma.Prisma__saml_providersClient<runtime.Types.Result.GetResult<Prisma.$saml_providersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends saml_providersCountArgs>(args?: Prisma.Subset<T, saml_providersCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Saml_providersCountAggregateOutputType> : number>;
    aggregate<T extends Saml_providersAggregateArgs>(args: Prisma.Subset<T, Saml_providersAggregateArgs>): Prisma.PrismaPromise<GetSaml_providersAggregateType<T>>;
    groupBy<T extends saml_providersGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: saml_providersGroupByArgs['orderBy'];
    } : {
        orderBy?: saml_providersGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, saml_providersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaml_providersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: saml_providersFieldRefs;
}
export interface Prisma__saml_providersClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    sso_providers<T extends Prisma.sso_providersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.sso_providersDefaultArgs<ExtArgs>>): Prisma.Prisma__sso_providersClient<runtime.Types.Result.GetResult<Prisma.$sso_providersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface saml_providersFieldRefs {
    readonly id: Prisma.FieldRef<"saml_providers", 'String'>;
    readonly sso_provider_id: Prisma.FieldRef<"saml_providers", 'String'>;
    readonly entity_id: Prisma.FieldRef<"saml_providers", 'String'>;
    readonly metadata_xml: Prisma.FieldRef<"saml_providers", 'String'>;
    readonly metadata_url: Prisma.FieldRef<"saml_providers", 'String'>;
    readonly attribute_mapping: Prisma.FieldRef<"saml_providers", 'Json'>;
    readonly created_at: Prisma.FieldRef<"saml_providers", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"saml_providers", 'DateTime'>;
    readonly name_id_format: Prisma.FieldRef<"saml_providers", 'String'>;
}
export type saml_providersFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.saml_providersSelect<ExtArgs> | null;
    omit?: Prisma.saml_providersOmit<ExtArgs> | null;
    include?: Prisma.saml_providersInclude<ExtArgs> | null;
    where: Prisma.saml_providersWhereUniqueInput;
};
export type saml_providersFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.saml_providersSelect<ExtArgs> | null;
    omit?: Prisma.saml_providersOmit<ExtArgs> | null;
    include?: Prisma.saml_providersInclude<ExtArgs> | null;
    where: Prisma.saml_providersWhereUniqueInput;
};
export type saml_providersFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.saml_providersSelect<ExtArgs> | null;
    omit?: Prisma.saml_providersOmit<ExtArgs> | null;
    include?: Prisma.saml_providersInclude<ExtArgs> | null;
    where?: Prisma.saml_providersWhereInput;
    orderBy?: Prisma.saml_providersOrderByWithRelationInput | Prisma.saml_providersOrderByWithRelationInput[];
    cursor?: Prisma.saml_providersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Saml_providersScalarFieldEnum | Prisma.Saml_providersScalarFieldEnum[];
};
export type saml_providersFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.saml_providersSelect<ExtArgs> | null;
    omit?: Prisma.saml_providersOmit<ExtArgs> | null;
    include?: Prisma.saml_providersInclude<ExtArgs> | null;
    where?: Prisma.saml_providersWhereInput;
    orderBy?: Prisma.saml_providersOrderByWithRelationInput | Prisma.saml_providersOrderByWithRelationInput[];
    cursor?: Prisma.saml_providersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Saml_providersScalarFieldEnum | Prisma.Saml_providersScalarFieldEnum[];
};
export type saml_providersFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.saml_providersSelect<ExtArgs> | null;
    omit?: Prisma.saml_providersOmit<ExtArgs> | null;
    include?: Prisma.saml_providersInclude<ExtArgs> | null;
    where?: Prisma.saml_providersWhereInput;
    orderBy?: Prisma.saml_providersOrderByWithRelationInput | Prisma.saml_providersOrderByWithRelationInput[];
    cursor?: Prisma.saml_providersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Saml_providersScalarFieldEnum | Prisma.Saml_providersScalarFieldEnum[];
};
export type saml_providersCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.saml_providersSelect<ExtArgs> | null;
    omit?: Prisma.saml_providersOmit<ExtArgs> | null;
    include?: Prisma.saml_providersInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.saml_providersCreateInput, Prisma.saml_providersUncheckedCreateInput>;
};
export type saml_providersCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.saml_providersCreateManyInput | Prisma.saml_providersCreateManyInput[];
    skipDuplicates?: boolean;
};
export type saml_providersCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.saml_providersSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.saml_providersOmit<ExtArgs> | null;
    data: Prisma.saml_providersCreateManyInput | Prisma.saml_providersCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.saml_providersIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type saml_providersUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.saml_providersSelect<ExtArgs> | null;
    omit?: Prisma.saml_providersOmit<ExtArgs> | null;
    include?: Prisma.saml_providersInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.saml_providersUpdateInput, Prisma.saml_providersUncheckedUpdateInput>;
    where: Prisma.saml_providersWhereUniqueInput;
};
export type saml_providersUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.saml_providersUpdateManyMutationInput, Prisma.saml_providersUncheckedUpdateManyInput>;
    where?: Prisma.saml_providersWhereInput;
    limit?: number;
};
export type saml_providersUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.saml_providersSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.saml_providersOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.saml_providersUpdateManyMutationInput, Prisma.saml_providersUncheckedUpdateManyInput>;
    where?: Prisma.saml_providersWhereInput;
    limit?: number;
    include?: Prisma.saml_providersIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type saml_providersUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.saml_providersSelect<ExtArgs> | null;
    omit?: Prisma.saml_providersOmit<ExtArgs> | null;
    include?: Prisma.saml_providersInclude<ExtArgs> | null;
    where: Prisma.saml_providersWhereUniqueInput;
    create: Prisma.XOR<Prisma.saml_providersCreateInput, Prisma.saml_providersUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.saml_providersUpdateInput, Prisma.saml_providersUncheckedUpdateInput>;
};
export type saml_providersDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.saml_providersSelect<ExtArgs> | null;
    omit?: Prisma.saml_providersOmit<ExtArgs> | null;
    include?: Prisma.saml_providersInclude<ExtArgs> | null;
    where: Prisma.saml_providersWhereUniqueInput;
};
export type saml_providersDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.saml_providersWhereInput;
    limit?: number;
};
export type saml_providersDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.saml_providersSelect<ExtArgs> | null;
    omit?: Prisma.saml_providersOmit<ExtArgs> | null;
    include?: Prisma.saml_providersInclude<ExtArgs> | null;
};
