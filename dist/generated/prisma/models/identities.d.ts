import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type identitiesModel = runtime.Types.Result.DefaultSelection<Prisma.$identitiesPayload>;
export type AggregateIdentities = {
    _count: IdentitiesCountAggregateOutputType | null;
    _min: IdentitiesMinAggregateOutputType | null;
    _max: IdentitiesMaxAggregateOutputType | null;
};
export type IdentitiesMinAggregateOutputType = {
    provider_id: string | null;
    user_id: string | null;
    provider: string | null;
    last_sign_in_at: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
    email: string | null;
    id: string | null;
};
export type IdentitiesMaxAggregateOutputType = {
    provider_id: string | null;
    user_id: string | null;
    provider: string | null;
    last_sign_in_at: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
    email: string | null;
    id: string | null;
};
export type IdentitiesCountAggregateOutputType = {
    provider_id: number;
    user_id: number;
    identity_data: number;
    provider: number;
    last_sign_in_at: number;
    created_at: number;
    updated_at: number;
    email: number;
    id: number;
    _all: number;
};
export type IdentitiesMinAggregateInputType = {
    provider_id?: true;
    user_id?: true;
    provider?: true;
    last_sign_in_at?: true;
    created_at?: true;
    updated_at?: true;
    email?: true;
    id?: true;
};
export type IdentitiesMaxAggregateInputType = {
    provider_id?: true;
    user_id?: true;
    provider?: true;
    last_sign_in_at?: true;
    created_at?: true;
    updated_at?: true;
    email?: true;
    id?: true;
};
export type IdentitiesCountAggregateInputType = {
    provider_id?: true;
    user_id?: true;
    identity_data?: true;
    provider?: true;
    last_sign_in_at?: true;
    created_at?: true;
    updated_at?: true;
    email?: true;
    id?: true;
    _all?: true;
};
export type IdentitiesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.identitiesWhereInput;
    orderBy?: Prisma.identitiesOrderByWithRelationInput | Prisma.identitiesOrderByWithRelationInput[];
    cursor?: Prisma.identitiesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | IdentitiesCountAggregateInputType;
    _min?: IdentitiesMinAggregateInputType;
    _max?: IdentitiesMaxAggregateInputType;
};
export type GetIdentitiesAggregateType<T extends IdentitiesAggregateArgs> = {
    [P in keyof T & keyof AggregateIdentities]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateIdentities[P]> : Prisma.GetScalarType<T[P], AggregateIdentities[P]>;
};
export type identitiesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.identitiesWhereInput;
    orderBy?: Prisma.identitiesOrderByWithAggregationInput | Prisma.identitiesOrderByWithAggregationInput[];
    by: Prisma.IdentitiesScalarFieldEnum[] | Prisma.IdentitiesScalarFieldEnum;
    having?: Prisma.identitiesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: IdentitiesCountAggregateInputType | true;
    _min?: IdentitiesMinAggregateInputType;
    _max?: IdentitiesMaxAggregateInputType;
};
export type IdentitiesGroupByOutputType = {
    provider_id: string;
    user_id: string;
    identity_data: runtime.JsonValue;
    provider: string;
    last_sign_in_at: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
    email: string | null;
    id: string;
    _count: IdentitiesCountAggregateOutputType | null;
    _min: IdentitiesMinAggregateOutputType | null;
    _max: IdentitiesMaxAggregateOutputType | null;
};
export type GetIdentitiesGroupByPayload<T extends identitiesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<IdentitiesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof IdentitiesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], IdentitiesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], IdentitiesGroupByOutputType[P]>;
}>>;
export type identitiesWhereInput = {
    AND?: Prisma.identitiesWhereInput | Prisma.identitiesWhereInput[];
    OR?: Prisma.identitiesWhereInput[];
    NOT?: Prisma.identitiesWhereInput | Prisma.identitiesWhereInput[];
    provider_id?: Prisma.StringFilter<"identities"> | string;
    user_id?: Prisma.UuidFilter<"identities"> | string;
    identity_data?: Prisma.JsonFilter<"identities">;
    provider?: Prisma.StringFilter<"identities"> | string;
    last_sign_in_at?: Prisma.DateTimeNullableFilter<"identities"> | Date | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"identities"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"identities"> | Date | string | null;
    email?: Prisma.StringNullableFilter<"identities"> | string | null;
    id?: Prisma.UuidFilter<"identities"> | string;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
};
export type identitiesOrderByWithRelationInput = {
    provider_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    identity_data?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    last_sign_in_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    id?: Prisma.SortOrder;
    users?: Prisma.usersOrderByWithRelationInput;
};
export type identitiesWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    provider_id_provider?: Prisma.identitiesProvider_idProviderCompoundUniqueInput;
    AND?: Prisma.identitiesWhereInput | Prisma.identitiesWhereInput[];
    OR?: Prisma.identitiesWhereInput[];
    NOT?: Prisma.identitiesWhereInput | Prisma.identitiesWhereInput[];
    provider_id?: Prisma.StringFilter<"identities"> | string;
    user_id?: Prisma.UuidFilter<"identities"> | string;
    identity_data?: Prisma.JsonFilter<"identities">;
    provider?: Prisma.StringFilter<"identities"> | string;
    last_sign_in_at?: Prisma.DateTimeNullableFilter<"identities"> | Date | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"identities"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"identities"> | Date | string | null;
    email?: Prisma.StringNullableFilter<"identities"> | string | null;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
}, "id" | "provider_id_provider">;
export type identitiesOrderByWithAggregationInput = {
    provider_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    identity_data?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    last_sign_in_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    id?: Prisma.SortOrder;
    _count?: Prisma.identitiesCountOrderByAggregateInput;
    _max?: Prisma.identitiesMaxOrderByAggregateInput;
    _min?: Prisma.identitiesMinOrderByAggregateInput;
};
export type identitiesScalarWhereWithAggregatesInput = {
    AND?: Prisma.identitiesScalarWhereWithAggregatesInput | Prisma.identitiesScalarWhereWithAggregatesInput[];
    OR?: Prisma.identitiesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.identitiesScalarWhereWithAggregatesInput | Prisma.identitiesScalarWhereWithAggregatesInput[];
    provider_id?: Prisma.StringWithAggregatesFilter<"identities"> | string;
    user_id?: Prisma.UuidWithAggregatesFilter<"identities"> | string;
    identity_data?: Prisma.JsonWithAggregatesFilter<"identities">;
    provider?: Prisma.StringWithAggregatesFilter<"identities"> | string;
    last_sign_in_at?: Prisma.DateTimeNullableWithAggregatesFilter<"identities"> | Date | string | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"identities"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"identities"> | Date | string | null;
    email?: Prisma.StringNullableWithAggregatesFilter<"identities"> | string | null;
    id?: Prisma.UuidWithAggregatesFilter<"identities"> | string;
};
export type identitiesCreateInput = {
    provider_id: string;
    identity_data: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    provider: string;
    last_sign_in_at?: Date | string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    email?: string | null;
    id?: string;
    users: Prisma.usersCreateNestedOneWithoutIdentitiesInput;
};
export type identitiesUncheckedCreateInput = {
    provider_id: string;
    user_id: string;
    identity_data: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    provider: string;
    last_sign_in_at?: Date | string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    email?: string | null;
    id?: string;
};
export type identitiesUpdateInput = {
    provider_id?: Prisma.StringFieldUpdateOperationsInput | string;
    identity_data?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    provider?: Prisma.StringFieldUpdateOperationsInput | string;
    last_sign_in_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    users?: Prisma.usersUpdateOneRequiredWithoutIdentitiesNestedInput;
};
export type identitiesUncheckedUpdateInput = {
    provider_id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    identity_data?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    provider?: Prisma.StringFieldUpdateOperationsInput | string;
    last_sign_in_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type identitiesCreateManyInput = {
    provider_id: string;
    user_id: string;
    identity_data: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    provider: string;
    last_sign_in_at?: Date | string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    email?: string | null;
    id?: string;
};
export type identitiesUpdateManyMutationInput = {
    provider_id?: Prisma.StringFieldUpdateOperationsInput | string;
    identity_data?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    provider?: Prisma.StringFieldUpdateOperationsInput | string;
    last_sign_in_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type identitiesUncheckedUpdateManyInput = {
    provider_id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    identity_data?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    provider?: Prisma.StringFieldUpdateOperationsInput | string;
    last_sign_in_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type identitiesProvider_idProviderCompoundUniqueInput = {
    provider_id: string;
    provider: string;
};
export type identitiesCountOrderByAggregateInput = {
    provider_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    identity_data?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    last_sign_in_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
};
export type identitiesMaxOrderByAggregateInput = {
    provider_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    last_sign_in_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
};
export type identitiesMinOrderByAggregateInput = {
    provider_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    last_sign_in_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
};
export type IdentitiesListRelationFilter = {
    every?: Prisma.identitiesWhereInput;
    some?: Prisma.identitiesWhereInput;
    none?: Prisma.identitiesWhereInput;
};
export type identitiesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type identitiesCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.identitiesCreateWithoutUsersInput, Prisma.identitiesUncheckedCreateWithoutUsersInput> | Prisma.identitiesCreateWithoutUsersInput[] | Prisma.identitiesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.identitiesCreateOrConnectWithoutUsersInput | Prisma.identitiesCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.identitiesCreateManyUsersInputEnvelope;
    connect?: Prisma.identitiesWhereUniqueInput | Prisma.identitiesWhereUniqueInput[];
};
export type identitiesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.identitiesCreateWithoutUsersInput, Prisma.identitiesUncheckedCreateWithoutUsersInput> | Prisma.identitiesCreateWithoutUsersInput[] | Prisma.identitiesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.identitiesCreateOrConnectWithoutUsersInput | Prisma.identitiesCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.identitiesCreateManyUsersInputEnvelope;
    connect?: Prisma.identitiesWhereUniqueInput | Prisma.identitiesWhereUniqueInput[];
};
export type identitiesUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.identitiesCreateWithoutUsersInput, Prisma.identitiesUncheckedCreateWithoutUsersInput> | Prisma.identitiesCreateWithoutUsersInput[] | Prisma.identitiesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.identitiesCreateOrConnectWithoutUsersInput | Prisma.identitiesCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.identitiesUpsertWithWhereUniqueWithoutUsersInput | Prisma.identitiesUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.identitiesCreateManyUsersInputEnvelope;
    set?: Prisma.identitiesWhereUniqueInput | Prisma.identitiesWhereUniqueInput[];
    disconnect?: Prisma.identitiesWhereUniqueInput | Prisma.identitiesWhereUniqueInput[];
    delete?: Prisma.identitiesWhereUniqueInput | Prisma.identitiesWhereUniqueInput[];
    connect?: Prisma.identitiesWhereUniqueInput | Prisma.identitiesWhereUniqueInput[];
    update?: Prisma.identitiesUpdateWithWhereUniqueWithoutUsersInput | Prisma.identitiesUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.identitiesUpdateManyWithWhereWithoutUsersInput | Prisma.identitiesUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.identitiesScalarWhereInput | Prisma.identitiesScalarWhereInput[];
};
export type identitiesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.identitiesCreateWithoutUsersInput, Prisma.identitiesUncheckedCreateWithoutUsersInput> | Prisma.identitiesCreateWithoutUsersInput[] | Prisma.identitiesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.identitiesCreateOrConnectWithoutUsersInput | Prisma.identitiesCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.identitiesUpsertWithWhereUniqueWithoutUsersInput | Prisma.identitiesUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.identitiesCreateManyUsersInputEnvelope;
    set?: Prisma.identitiesWhereUniqueInput | Prisma.identitiesWhereUniqueInput[];
    disconnect?: Prisma.identitiesWhereUniqueInput | Prisma.identitiesWhereUniqueInput[];
    delete?: Prisma.identitiesWhereUniqueInput | Prisma.identitiesWhereUniqueInput[];
    connect?: Prisma.identitiesWhereUniqueInput | Prisma.identitiesWhereUniqueInput[];
    update?: Prisma.identitiesUpdateWithWhereUniqueWithoutUsersInput | Prisma.identitiesUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.identitiesUpdateManyWithWhereWithoutUsersInput | Prisma.identitiesUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.identitiesScalarWhereInput | Prisma.identitiesScalarWhereInput[];
};
export type identitiesCreateWithoutUsersInput = {
    provider_id: string;
    identity_data: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    provider: string;
    last_sign_in_at?: Date | string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    email?: string | null;
    id?: string;
};
export type identitiesUncheckedCreateWithoutUsersInput = {
    provider_id: string;
    identity_data: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    provider: string;
    last_sign_in_at?: Date | string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    email?: string | null;
    id?: string;
};
export type identitiesCreateOrConnectWithoutUsersInput = {
    where: Prisma.identitiesWhereUniqueInput;
    create: Prisma.XOR<Prisma.identitiesCreateWithoutUsersInput, Prisma.identitiesUncheckedCreateWithoutUsersInput>;
};
export type identitiesCreateManyUsersInputEnvelope = {
    data: Prisma.identitiesCreateManyUsersInput | Prisma.identitiesCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type identitiesUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.identitiesWhereUniqueInput;
    update: Prisma.XOR<Prisma.identitiesUpdateWithoutUsersInput, Prisma.identitiesUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.identitiesCreateWithoutUsersInput, Prisma.identitiesUncheckedCreateWithoutUsersInput>;
};
export type identitiesUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.identitiesWhereUniqueInput;
    data: Prisma.XOR<Prisma.identitiesUpdateWithoutUsersInput, Prisma.identitiesUncheckedUpdateWithoutUsersInput>;
};
export type identitiesUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.identitiesScalarWhereInput;
    data: Prisma.XOR<Prisma.identitiesUpdateManyMutationInput, Prisma.identitiesUncheckedUpdateManyWithoutUsersInput>;
};
export type identitiesScalarWhereInput = {
    AND?: Prisma.identitiesScalarWhereInput | Prisma.identitiesScalarWhereInput[];
    OR?: Prisma.identitiesScalarWhereInput[];
    NOT?: Prisma.identitiesScalarWhereInput | Prisma.identitiesScalarWhereInput[];
    provider_id?: Prisma.StringFilter<"identities"> | string;
    user_id?: Prisma.UuidFilter<"identities"> | string;
    identity_data?: Prisma.JsonFilter<"identities">;
    provider?: Prisma.StringFilter<"identities"> | string;
    last_sign_in_at?: Prisma.DateTimeNullableFilter<"identities"> | Date | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"identities"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"identities"> | Date | string | null;
    email?: Prisma.StringNullableFilter<"identities"> | string | null;
    id?: Prisma.UuidFilter<"identities"> | string;
};
export type identitiesCreateManyUsersInput = {
    provider_id: string;
    identity_data: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    provider: string;
    last_sign_in_at?: Date | string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    email?: string | null;
    id?: string;
};
export type identitiesUpdateWithoutUsersInput = {
    provider_id?: Prisma.StringFieldUpdateOperationsInput | string;
    identity_data?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    provider?: Prisma.StringFieldUpdateOperationsInput | string;
    last_sign_in_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type identitiesUncheckedUpdateWithoutUsersInput = {
    provider_id?: Prisma.StringFieldUpdateOperationsInput | string;
    identity_data?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    provider?: Prisma.StringFieldUpdateOperationsInput | string;
    last_sign_in_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type identitiesUncheckedUpdateManyWithoutUsersInput = {
    provider_id?: Prisma.StringFieldUpdateOperationsInput | string;
    identity_data?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    provider?: Prisma.StringFieldUpdateOperationsInput | string;
    last_sign_in_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type identitiesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    provider_id?: boolean;
    user_id?: boolean;
    identity_data?: boolean;
    provider?: boolean;
    last_sign_in_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    email?: boolean;
    id?: boolean;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["identities"]>;
export type identitiesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    provider_id?: boolean;
    user_id?: boolean;
    identity_data?: boolean;
    provider?: boolean;
    last_sign_in_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    email?: boolean;
    id?: boolean;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["identities"]>;
export type identitiesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    provider_id?: boolean;
    user_id?: boolean;
    identity_data?: boolean;
    provider?: boolean;
    last_sign_in_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    email?: boolean;
    id?: boolean;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["identities"]>;
export type identitiesSelectScalar = {
    provider_id?: boolean;
    user_id?: boolean;
    identity_data?: boolean;
    provider?: boolean;
    last_sign_in_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    email?: boolean;
    id?: boolean;
};
export type identitiesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"provider_id" | "user_id" | "identity_data" | "provider" | "last_sign_in_at" | "created_at" | "updated_at" | "email" | "id", ExtArgs["result"]["identities"]>;
export type identitiesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type identitiesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type identitiesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type $identitiesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "identities";
    objects: {
        users: Prisma.$usersPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        provider_id: string;
        user_id: string;
        identity_data: runtime.JsonValue;
        provider: string;
        last_sign_in_at: Date | null;
        created_at: Date | null;
        updated_at: Date | null;
        email: string | null;
        id: string;
    }, ExtArgs["result"]["identities"]>;
    composites: {};
};
export type identitiesGetPayload<S extends boolean | null | undefined | identitiesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$identitiesPayload, S>;
export type identitiesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<identitiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: IdentitiesCountAggregateInputType | true;
};
export interface identitiesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['identities'];
        meta: {
            name: 'identities';
        };
    };
    findUnique<T extends identitiesFindUniqueArgs>(args: Prisma.SelectSubset<T, identitiesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__identitiesClient<runtime.Types.Result.GetResult<Prisma.$identitiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends identitiesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, identitiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__identitiesClient<runtime.Types.Result.GetResult<Prisma.$identitiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends identitiesFindFirstArgs>(args?: Prisma.SelectSubset<T, identitiesFindFirstArgs<ExtArgs>>): Prisma.Prisma__identitiesClient<runtime.Types.Result.GetResult<Prisma.$identitiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends identitiesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, identitiesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__identitiesClient<runtime.Types.Result.GetResult<Prisma.$identitiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends identitiesFindManyArgs>(args?: Prisma.SelectSubset<T, identitiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$identitiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends identitiesCreateArgs>(args: Prisma.SelectSubset<T, identitiesCreateArgs<ExtArgs>>): Prisma.Prisma__identitiesClient<runtime.Types.Result.GetResult<Prisma.$identitiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends identitiesCreateManyArgs>(args?: Prisma.SelectSubset<T, identitiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends identitiesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, identitiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$identitiesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends identitiesDeleteArgs>(args: Prisma.SelectSubset<T, identitiesDeleteArgs<ExtArgs>>): Prisma.Prisma__identitiesClient<runtime.Types.Result.GetResult<Prisma.$identitiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends identitiesUpdateArgs>(args: Prisma.SelectSubset<T, identitiesUpdateArgs<ExtArgs>>): Prisma.Prisma__identitiesClient<runtime.Types.Result.GetResult<Prisma.$identitiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends identitiesDeleteManyArgs>(args?: Prisma.SelectSubset<T, identitiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends identitiesUpdateManyArgs>(args: Prisma.SelectSubset<T, identitiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends identitiesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, identitiesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$identitiesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends identitiesUpsertArgs>(args: Prisma.SelectSubset<T, identitiesUpsertArgs<ExtArgs>>): Prisma.Prisma__identitiesClient<runtime.Types.Result.GetResult<Prisma.$identitiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends identitiesCountArgs>(args?: Prisma.Subset<T, identitiesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], IdentitiesCountAggregateOutputType> : number>;
    aggregate<T extends IdentitiesAggregateArgs>(args: Prisma.Subset<T, IdentitiesAggregateArgs>): Prisma.PrismaPromise<GetIdentitiesAggregateType<T>>;
    groupBy<T extends identitiesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: identitiesGroupByArgs['orderBy'];
    } : {
        orderBy?: identitiesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, identitiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIdentitiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: identitiesFieldRefs;
}
export interface Prisma__identitiesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    users<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface identitiesFieldRefs {
    readonly provider_id: Prisma.FieldRef<"identities", 'String'>;
    readonly user_id: Prisma.FieldRef<"identities", 'String'>;
    readonly identity_data: Prisma.FieldRef<"identities", 'Json'>;
    readonly provider: Prisma.FieldRef<"identities", 'String'>;
    readonly last_sign_in_at: Prisma.FieldRef<"identities", 'DateTime'>;
    readonly created_at: Prisma.FieldRef<"identities", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"identities", 'DateTime'>;
    readonly email: Prisma.FieldRef<"identities", 'String'>;
    readonly id: Prisma.FieldRef<"identities", 'String'>;
}
export type identitiesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.identitiesSelect<ExtArgs> | null;
    omit?: Prisma.identitiesOmit<ExtArgs> | null;
    include?: Prisma.identitiesInclude<ExtArgs> | null;
    where: Prisma.identitiesWhereUniqueInput;
};
export type identitiesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.identitiesSelect<ExtArgs> | null;
    omit?: Prisma.identitiesOmit<ExtArgs> | null;
    include?: Prisma.identitiesInclude<ExtArgs> | null;
    where: Prisma.identitiesWhereUniqueInput;
};
export type identitiesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.identitiesSelect<ExtArgs> | null;
    omit?: Prisma.identitiesOmit<ExtArgs> | null;
    include?: Prisma.identitiesInclude<ExtArgs> | null;
    where?: Prisma.identitiesWhereInput;
    orderBy?: Prisma.identitiesOrderByWithRelationInput | Prisma.identitiesOrderByWithRelationInput[];
    cursor?: Prisma.identitiesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IdentitiesScalarFieldEnum | Prisma.IdentitiesScalarFieldEnum[];
};
export type identitiesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.identitiesSelect<ExtArgs> | null;
    omit?: Prisma.identitiesOmit<ExtArgs> | null;
    include?: Prisma.identitiesInclude<ExtArgs> | null;
    where?: Prisma.identitiesWhereInput;
    orderBy?: Prisma.identitiesOrderByWithRelationInput | Prisma.identitiesOrderByWithRelationInput[];
    cursor?: Prisma.identitiesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IdentitiesScalarFieldEnum | Prisma.IdentitiesScalarFieldEnum[];
};
export type identitiesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.identitiesSelect<ExtArgs> | null;
    omit?: Prisma.identitiesOmit<ExtArgs> | null;
    include?: Prisma.identitiesInclude<ExtArgs> | null;
    where?: Prisma.identitiesWhereInput;
    orderBy?: Prisma.identitiesOrderByWithRelationInput | Prisma.identitiesOrderByWithRelationInput[];
    cursor?: Prisma.identitiesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IdentitiesScalarFieldEnum | Prisma.IdentitiesScalarFieldEnum[];
};
export type identitiesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.identitiesSelect<ExtArgs> | null;
    omit?: Prisma.identitiesOmit<ExtArgs> | null;
    include?: Prisma.identitiesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.identitiesCreateInput, Prisma.identitiesUncheckedCreateInput>;
};
export type identitiesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.identitiesCreateManyInput | Prisma.identitiesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type identitiesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.identitiesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.identitiesOmit<ExtArgs> | null;
    data: Prisma.identitiesCreateManyInput | Prisma.identitiesCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.identitiesIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type identitiesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.identitiesSelect<ExtArgs> | null;
    omit?: Prisma.identitiesOmit<ExtArgs> | null;
    include?: Prisma.identitiesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.identitiesUpdateInput, Prisma.identitiesUncheckedUpdateInput>;
    where: Prisma.identitiesWhereUniqueInput;
};
export type identitiesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.identitiesUpdateManyMutationInput, Prisma.identitiesUncheckedUpdateManyInput>;
    where?: Prisma.identitiesWhereInput;
    limit?: number;
};
export type identitiesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.identitiesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.identitiesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.identitiesUpdateManyMutationInput, Prisma.identitiesUncheckedUpdateManyInput>;
    where?: Prisma.identitiesWhereInput;
    limit?: number;
    include?: Prisma.identitiesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type identitiesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.identitiesSelect<ExtArgs> | null;
    omit?: Prisma.identitiesOmit<ExtArgs> | null;
    include?: Prisma.identitiesInclude<ExtArgs> | null;
    where: Prisma.identitiesWhereUniqueInput;
    create: Prisma.XOR<Prisma.identitiesCreateInput, Prisma.identitiesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.identitiesUpdateInput, Prisma.identitiesUncheckedUpdateInput>;
};
export type identitiesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.identitiesSelect<ExtArgs> | null;
    omit?: Prisma.identitiesOmit<ExtArgs> | null;
    include?: Prisma.identitiesInclude<ExtArgs> | null;
    where: Prisma.identitiesWhereUniqueInput;
};
export type identitiesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.identitiesWhereInput;
    limit?: number;
};
export type identitiesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.identitiesSelect<ExtArgs> | null;
    omit?: Prisma.identitiesOmit<ExtArgs> | null;
    include?: Prisma.identitiesInclude<ExtArgs> | null;
};
