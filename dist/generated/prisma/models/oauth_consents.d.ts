import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type oauth_consentsModel = runtime.Types.Result.DefaultSelection<Prisma.$oauth_consentsPayload>;
export type AggregateOauth_consents = {
    _count: Oauth_consentsCountAggregateOutputType | null;
    _min: Oauth_consentsMinAggregateOutputType | null;
    _max: Oauth_consentsMaxAggregateOutputType | null;
};
export type Oauth_consentsMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    client_id: string | null;
    scopes: string | null;
    granted_at: Date | null;
    revoked_at: Date | null;
};
export type Oauth_consentsMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    client_id: string | null;
    scopes: string | null;
    granted_at: Date | null;
    revoked_at: Date | null;
};
export type Oauth_consentsCountAggregateOutputType = {
    id: number;
    user_id: number;
    client_id: number;
    scopes: number;
    granted_at: number;
    revoked_at: number;
    _all: number;
};
export type Oauth_consentsMinAggregateInputType = {
    id?: true;
    user_id?: true;
    client_id?: true;
    scopes?: true;
    granted_at?: true;
    revoked_at?: true;
};
export type Oauth_consentsMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    client_id?: true;
    scopes?: true;
    granted_at?: true;
    revoked_at?: true;
};
export type Oauth_consentsCountAggregateInputType = {
    id?: true;
    user_id?: true;
    client_id?: true;
    scopes?: true;
    granted_at?: true;
    revoked_at?: true;
    _all?: true;
};
export type Oauth_consentsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.oauth_consentsWhereInput;
    orderBy?: Prisma.oauth_consentsOrderByWithRelationInput | Prisma.oauth_consentsOrderByWithRelationInput[];
    cursor?: Prisma.oauth_consentsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Oauth_consentsCountAggregateInputType;
    _min?: Oauth_consentsMinAggregateInputType;
    _max?: Oauth_consentsMaxAggregateInputType;
};
export type GetOauth_consentsAggregateType<T extends Oauth_consentsAggregateArgs> = {
    [P in keyof T & keyof AggregateOauth_consents]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOauth_consents[P]> : Prisma.GetScalarType<T[P], AggregateOauth_consents[P]>;
};
export type oauth_consentsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.oauth_consentsWhereInput;
    orderBy?: Prisma.oauth_consentsOrderByWithAggregationInput | Prisma.oauth_consentsOrderByWithAggregationInput[];
    by: Prisma.Oauth_consentsScalarFieldEnum[] | Prisma.Oauth_consentsScalarFieldEnum;
    having?: Prisma.oauth_consentsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Oauth_consentsCountAggregateInputType | true;
    _min?: Oauth_consentsMinAggregateInputType;
    _max?: Oauth_consentsMaxAggregateInputType;
};
export type Oauth_consentsGroupByOutputType = {
    id: string;
    user_id: string;
    client_id: string;
    scopes: string;
    granted_at: Date;
    revoked_at: Date | null;
    _count: Oauth_consentsCountAggregateOutputType | null;
    _min: Oauth_consentsMinAggregateOutputType | null;
    _max: Oauth_consentsMaxAggregateOutputType | null;
};
export type GetOauth_consentsGroupByPayload<T extends oauth_consentsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Oauth_consentsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Oauth_consentsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Oauth_consentsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Oauth_consentsGroupByOutputType[P]>;
}>>;
export type oauth_consentsWhereInput = {
    AND?: Prisma.oauth_consentsWhereInput | Prisma.oauth_consentsWhereInput[];
    OR?: Prisma.oauth_consentsWhereInput[];
    NOT?: Prisma.oauth_consentsWhereInput | Prisma.oauth_consentsWhereInput[];
    id?: Prisma.UuidFilter<"oauth_consents"> | string;
    user_id?: Prisma.UuidFilter<"oauth_consents"> | string;
    client_id?: Prisma.UuidFilter<"oauth_consents"> | string;
    scopes?: Prisma.StringFilter<"oauth_consents"> | string;
    granted_at?: Prisma.DateTimeFilter<"oauth_consents"> | Date | string;
    revoked_at?: Prisma.DateTimeNullableFilter<"oauth_consents"> | Date | string | null;
    oauth_clients?: Prisma.XOR<Prisma.Oauth_clientsScalarRelationFilter, Prisma.oauth_clientsWhereInput>;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
};
export type oauth_consentsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    client_id?: Prisma.SortOrder;
    scopes?: Prisma.SortOrder;
    granted_at?: Prisma.SortOrder;
    revoked_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    oauth_clients?: Prisma.oauth_clientsOrderByWithRelationInput;
    users?: Prisma.usersOrderByWithRelationInput;
};
export type oauth_consentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    user_id_client_id?: Prisma.oauth_consentsUser_idClient_idCompoundUniqueInput;
    AND?: Prisma.oauth_consentsWhereInput | Prisma.oauth_consentsWhereInput[];
    OR?: Prisma.oauth_consentsWhereInput[];
    NOT?: Prisma.oauth_consentsWhereInput | Prisma.oauth_consentsWhereInput[];
    user_id?: Prisma.UuidFilter<"oauth_consents"> | string;
    client_id?: Prisma.UuidFilter<"oauth_consents"> | string;
    scopes?: Prisma.StringFilter<"oauth_consents"> | string;
    granted_at?: Prisma.DateTimeFilter<"oauth_consents"> | Date | string;
    revoked_at?: Prisma.DateTimeNullableFilter<"oauth_consents"> | Date | string | null;
    oauth_clients?: Prisma.XOR<Prisma.Oauth_clientsScalarRelationFilter, Prisma.oauth_clientsWhereInput>;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
}, "id" | "user_id_client_id">;
export type oauth_consentsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    client_id?: Prisma.SortOrder;
    scopes?: Prisma.SortOrder;
    granted_at?: Prisma.SortOrder;
    revoked_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.oauth_consentsCountOrderByAggregateInput;
    _max?: Prisma.oauth_consentsMaxOrderByAggregateInput;
    _min?: Prisma.oauth_consentsMinOrderByAggregateInput;
};
export type oauth_consentsScalarWhereWithAggregatesInput = {
    AND?: Prisma.oauth_consentsScalarWhereWithAggregatesInput | Prisma.oauth_consentsScalarWhereWithAggregatesInput[];
    OR?: Prisma.oauth_consentsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.oauth_consentsScalarWhereWithAggregatesInput | Prisma.oauth_consentsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"oauth_consents"> | string;
    user_id?: Prisma.UuidWithAggregatesFilter<"oauth_consents"> | string;
    client_id?: Prisma.UuidWithAggregatesFilter<"oauth_consents"> | string;
    scopes?: Prisma.StringWithAggregatesFilter<"oauth_consents"> | string;
    granted_at?: Prisma.DateTimeWithAggregatesFilter<"oauth_consents"> | Date | string;
    revoked_at?: Prisma.DateTimeNullableWithAggregatesFilter<"oauth_consents"> | Date | string | null;
};
export type oauth_consentsCreateInput = {
    id: string;
    scopes: string;
    granted_at?: Date | string;
    revoked_at?: Date | string | null;
    oauth_clients: Prisma.oauth_clientsCreateNestedOneWithoutOauth_consentsInput;
    users: Prisma.usersCreateNestedOneWithoutOauth_consentsInput;
};
export type oauth_consentsUncheckedCreateInput = {
    id: string;
    user_id: string;
    client_id: string;
    scopes: string;
    granted_at?: Date | string;
    revoked_at?: Date | string | null;
};
export type oauth_consentsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scopes?: Prisma.StringFieldUpdateOperationsInput | string;
    granted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revoked_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    oauth_clients?: Prisma.oauth_clientsUpdateOneRequiredWithoutOauth_consentsNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutOauth_consentsNestedInput;
};
export type oauth_consentsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    client_id?: Prisma.StringFieldUpdateOperationsInput | string;
    scopes?: Prisma.StringFieldUpdateOperationsInput | string;
    granted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revoked_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type oauth_consentsCreateManyInput = {
    id: string;
    user_id: string;
    client_id: string;
    scopes: string;
    granted_at?: Date | string;
    revoked_at?: Date | string | null;
};
export type oauth_consentsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scopes?: Prisma.StringFieldUpdateOperationsInput | string;
    granted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revoked_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type oauth_consentsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    client_id?: Prisma.StringFieldUpdateOperationsInput | string;
    scopes?: Prisma.StringFieldUpdateOperationsInput | string;
    granted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revoked_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Oauth_consentsListRelationFilter = {
    every?: Prisma.oauth_consentsWhereInput;
    some?: Prisma.oauth_consentsWhereInput;
    none?: Prisma.oauth_consentsWhereInput;
};
export type oauth_consentsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type oauth_consentsUser_idClient_idCompoundUniqueInput = {
    user_id: string;
    client_id: string;
};
export type oauth_consentsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    client_id?: Prisma.SortOrder;
    scopes?: Prisma.SortOrder;
    granted_at?: Prisma.SortOrder;
    revoked_at?: Prisma.SortOrder;
};
export type oauth_consentsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    client_id?: Prisma.SortOrder;
    scopes?: Prisma.SortOrder;
    granted_at?: Prisma.SortOrder;
    revoked_at?: Prisma.SortOrder;
};
export type oauth_consentsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    client_id?: Prisma.SortOrder;
    scopes?: Prisma.SortOrder;
    granted_at?: Prisma.SortOrder;
    revoked_at?: Prisma.SortOrder;
};
export type oauth_consentsCreateNestedManyWithoutOauth_clientsInput = {
    create?: Prisma.XOR<Prisma.oauth_consentsCreateWithoutOauth_clientsInput, Prisma.oauth_consentsUncheckedCreateWithoutOauth_clientsInput> | Prisma.oauth_consentsCreateWithoutOauth_clientsInput[] | Prisma.oauth_consentsUncheckedCreateWithoutOauth_clientsInput[];
    connectOrCreate?: Prisma.oauth_consentsCreateOrConnectWithoutOauth_clientsInput | Prisma.oauth_consentsCreateOrConnectWithoutOauth_clientsInput[];
    createMany?: Prisma.oauth_consentsCreateManyOauth_clientsInputEnvelope;
    connect?: Prisma.oauth_consentsWhereUniqueInput | Prisma.oauth_consentsWhereUniqueInput[];
};
export type oauth_consentsUncheckedCreateNestedManyWithoutOauth_clientsInput = {
    create?: Prisma.XOR<Prisma.oauth_consentsCreateWithoutOauth_clientsInput, Prisma.oauth_consentsUncheckedCreateWithoutOauth_clientsInput> | Prisma.oauth_consentsCreateWithoutOauth_clientsInput[] | Prisma.oauth_consentsUncheckedCreateWithoutOauth_clientsInput[];
    connectOrCreate?: Prisma.oauth_consentsCreateOrConnectWithoutOauth_clientsInput | Prisma.oauth_consentsCreateOrConnectWithoutOauth_clientsInput[];
    createMany?: Prisma.oauth_consentsCreateManyOauth_clientsInputEnvelope;
    connect?: Prisma.oauth_consentsWhereUniqueInput | Prisma.oauth_consentsWhereUniqueInput[];
};
export type oauth_consentsUpdateManyWithoutOauth_clientsNestedInput = {
    create?: Prisma.XOR<Prisma.oauth_consentsCreateWithoutOauth_clientsInput, Prisma.oauth_consentsUncheckedCreateWithoutOauth_clientsInput> | Prisma.oauth_consentsCreateWithoutOauth_clientsInput[] | Prisma.oauth_consentsUncheckedCreateWithoutOauth_clientsInput[];
    connectOrCreate?: Prisma.oauth_consentsCreateOrConnectWithoutOauth_clientsInput | Prisma.oauth_consentsCreateOrConnectWithoutOauth_clientsInput[];
    upsert?: Prisma.oauth_consentsUpsertWithWhereUniqueWithoutOauth_clientsInput | Prisma.oauth_consentsUpsertWithWhereUniqueWithoutOauth_clientsInput[];
    createMany?: Prisma.oauth_consentsCreateManyOauth_clientsInputEnvelope;
    set?: Prisma.oauth_consentsWhereUniqueInput | Prisma.oauth_consentsWhereUniqueInput[];
    disconnect?: Prisma.oauth_consentsWhereUniqueInput | Prisma.oauth_consentsWhereUniqueInput[];
    delete?: Prisma.oauth_consentsWhereUniqueInput | Prisma.oauth_consentsWhereUniqueInput[];
    connect?: Prisma.oauth_consentsWhereUniqueInput | Prisma.oauth_consentsWhereUniqueInput[];
    update?: Prisma.oauth_consentsUpdateWithWhereUniqueWithoutOauth_clientsInput | Prisma.oauth_consentsUpdateWithWhereUniqueWithoutOauth_clientsInput[];
    updateMany?: Prisma.oauth_consentsUpdateManyWithWhereWithoutOauth_clientsInput | Prisma.oauth_consentsUpdateManyWithWhereWithoutOauth_clientsInput[];
    deleteMany?: Prisma.oauth_consentsScalarWhereInput | Prisma.oauth_consentsScalarWhereInput[];
};
export type oauth_consentsUncheckedUpdateManyWithoutOauth_clientsNestedInput = {
    create?: Prisma.XOR<Prisma.oauth_consentsCreateWithoutOauth_clientsInput, Prisma.oauth_consentsUncheckedCreateWithoutOauth_clientsInput> | Prisma.oauth_consentsCreateWithoutOauth_clientsInput[] | Prisma.oauth_consentsUncheckedCreateWithoutOauth_clientsInput[];
    connectOrCreate?: Prisma.oauth_consentsCreateOrConnectWithoutOauth_clientsInput | Prisma.oauth_consentsCreateOrConnectWithoutOauth_clientsInput[];
    upsert?: Prisma.oauth_consentsUpsertWithWhereUniqueWithoutOauth_clientsInput | Prisma.oauth_consentsUpsertWithWhereUniqueWithoutOauth_clientsInput[];
    createMany?: Prisma.oauth_consentsCreateManyOauth_clientsInputEnvelope;
    set?: Prisma.oauth_consentsWhereUniqueInput | Prisma.oauth_consentsWhereUniqueInput[];
    disconnect?: Prisma.oauth_consentsWhereUniqueInput | Prisma.oauth_consentsWhereUniqueInput[];
    delete?: Prisma.oauth_consentsWhereUniqueInput | Prisma.oauth_consentsWhereUniqueInput[];
    connect?: Prisma.oauth_consentsWhereUniqueInput | Prisma.oauth_consentsWhereUniqueInput[];
    update?: Prisma.oauth_consentsUpdateWithWhereUniqueWithoutOauth_clientsInput | Prisma.oauth_consentsUpdateWithWhereUniqueWithoutOauth_clientsInput[];
    updateMany?: Prisma.oauth_consentsUpdateManyWithWhereWithoutOauth_clientsInput | Prisma.oauth_consentsUpdateManyWithWhereWithoutOauth_clientsInput[];
    deleteMany?: Prisma.oauth_consentsScalarWhereInput | Prisma.oauth_consentsScalarWhereInput[];
};
export type oauth_consentsCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.oauth_consentsCreateWithoutUsersInput, Prisma.oauth_consentsUncheckedCreateWithoutUsersInput> | Prisma.oauth_consentsCreateWithoutUsersInput[] | Prisma.oauth_consentsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.oauth_consentsCreateOrConnectWithoutUsersInput | Prisma.oauth_consentsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.oauth_consentsCreateManyUsersInputEnvelope;
    connect?: Prisma.oauth_consentsWhereUniqueInput | Prisma.oauth_consentsWhereUniqueInput[];
};
export type oauth_consentsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.oauth_consentsCreateWithoutUsersInput, Prisma.oauth_consentsUncheckedCreateWithoutUsersInput> | Prisma.oauth_consentsCreateWithoutUsersInput[] | Prisma.oauth_consentsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.oauth_consentsCreateOrConnectWithoutUsersInput | Prisma.oauth_consentsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.oauth_consentsCreateManyUsersInputEnvelope;
    connect?: Prisma.oauth_consentsWhereUniqueInput | Prisma.oauth_consentsWhereUniqueInput[];
};
export type oauth_consentsUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.oauth_consentsCreateWithoutUsersInput, Prisma.oauth_consentsUncheckedCreateWithoutUsersInput> | Prisma.oauth_consentsCreateWithoutUsersInput[] | Prisma.oauth_consentsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.oauth_consentsCreateOrConnectWithoutUsersInput | Prisma.oauth_consentsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.oauth_consentsUpsertWithWhereUniqueWithoutUsersInput | Prisma.oauth_consentsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.oauth_consentsCreateManyUsersInputEnvelope;
    set?: Prisma.oauth_consentsWhereUniqueInput | Prisma.oauth_consentsWhereUniqueInput[];
    disconnect?: Prisma.oauth_consentsWhereUniqueInput | Prisma.oauth_consentsWhereUniqueInput[];
    delete?: Prisma.oauth_consentsWhereUniqueInput | Prisma.oauth_consentsWhereUniqueInput[];
    connect?: Prisma.oauth_consentsWhereUniqueInput | Prisma.oauth_consentsWhereUniqueInput[];
    update?: Prisma.oauth_consentsUpdateWithWhereUniqueWithoutUsersInput | Prisma.oauth_consentsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.oauth_consentsUpdateManyWithWhereWithoutUsersInput | Prisma.oauth_consentsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.oauth_consentsScalarWhereInput | Prisma.oauth_consentsScalarWhereInput[];
};
export type oauth_consentsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.oauth_consentsCreateWithoutUsersInput, Prisma.oauth_consentsUncheckedCreateWithoutUsersInput> | Prisma.oauth_consentsCreateWithoutUsersInput[] | Prisma.oauth_consentsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.oauth_consentsCreateOrConnectWithoutUsersInput | Prisma.oauth_consentsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.oauth_consentsUpsertWithWhereUniqueWithoutUsersInput | Prisma.oauth_consentsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.oauth_consentsCreateManyUsersInputEnvelope;
    set?: Prisma.oauth_consentsWhereUniqueInput | Prisma.oauth_consentsWhereUniqueInput[];
    disconnect?: Prisma.oauth_consentsWhereUniqueInput | Prisma.oauth_consentsWhereUniqueInput[];
    delete?: Prisma.oauth_consentsWhereUniqueInput | Prisma.oauth_consentsWhereUniqueInput[];
    connect?: Prisma.oauth_consentsWhereUniqueInput | Prisma.oauth_consentsWhereUniqueInput[];
    update?: Prisma.oauth_consentsUpdateWithWhereUniqueWithoutUsersInput | Prisma.oauth_consentsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.oauth_consentsUpdateManyWithWhereWithoutUsersInput | Prisma.oauth_consentsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.oauth_consentsScalarWhereInput | Prisma.oauth_consentsScalarWhereInput[];
};
export type oauth_consentsCreateWithoutOauth_clientsInput = {
    id: string;
    scopes: string;
    granted_at?: Date | string;
    revoked_at?: Date | string | null;
    users: Prisma.usersCreateNestedOneWithoutOauth_consentsInput;
};
export type oauth_consentsUncheckedCreateWithoutOauth_clientsInput = {
    id: string;
    user_id: string;
    scopes: string;
    granted_at?: Date | string;
    revoked_at?: Date | string | null;
};
export type oauth_consentsCreateOrConnectWithoutOauth_clientsInput = {
    where: Prisma.oauth_consentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.oauth_consentsCreateWithoutOauth_clientsInput, Prisma.oauth_consentsUncheckedCreateWithoutOauth_clientsInput>;
};
export type oauth_consentsCreateManyOauth_clientsInputEnvelope = {
    data: Prisma.oauth_consentsCreateManyOauth_clientsInput | Prisma.oauth_consentsCreateManyOauth_clientsInput[];
    skipDuplicates?: boolean;
};
export type oauth_consentsUpsertWithWhereUniqueWithoutOauth_clientsInput = {
    where: Prisma.oauth_consentsWhereUniqueInput;
    update: Prisma.XOR<Prisma.oauth_consentsUpdateWithoutOauth_clientsInput, Prisma.oauth_consentsUncheckedUpdateWithoutOauth_clientsInput>;
    create: Prisma.XOR<Prisma.oauth_consentsCreateWithoutOauth_clientsInput, Prisma.oauth_consentsUncheckedCreateWithoutOauth_clientsInput>;
};
export type oauth_consentsUpdateWithWhereUniqueWithoutOauth_clientsInput = {
    where: Prisma.oauth_consentsWhereUniqueInput;
    data: Prisma.XOR<Prisma.oauth_consentsUpdateWithoutOauth_clientsInput, Prisma.oauth_consentsUncheckedUpdateWithoutOauth_clientsInput>;
};
export type oauth_consentsUpdateManyWithWhereWithoutOauth_clientsInput = {
    where: Prisma.oauth_consentsScalarWhereInput;
    data: Prisma.XOR<Prisma.oauth_consentsUpdateManyMutationInput, Prisma.oauth_consentsUncheckedUpdateManyWithoutOauth_clientsInput>;
};
export type oauth_consentsScalarWhereInput = {
    AND?: Prisma.oauth_consentsScalarWhereInput | Prisma.oauth_consentsScalarWhereInput[];
    OR?: Prisma.oauth_consentsScalarWhereInput[];
    NOT?: Prisma.oauth_consentsScalarWhereInput | Prisma.oauth_consentsScalarWhereInput[];
    id?: Prisma.UuidFilter<"oauth_consents"> | string;
    user_id?: Prisma.UuidFilter<"oauth_consents"> | string;
    client_id?: Prisma.UuidFilter<"oauth_consents"> | string;
    scopes?: Prisma.StringFilter<"oauth_consents"> | string;
    granted_at?: Prisma.DateTimeFilter<"oauth_consents"> | Date | string;
    revoked_at?: Prisma.DateTimeNullableFilter<"oauth_consents"> | Date | string | null;
};
export type oauth_consentsCreateWithoutUsersInput = {
    id: string;
    scopes: string;
    granted_at?: Date | string;
    revoked_at?: Date | string | null;
    oauth_clients: Prisma.oauth_clientsCreateNestedOneWithoutOauth_consentsInput;
};
export type oauth_consentsUncheckedCreateWithoutUsersInput = {
    id: string;
    client_id: string;
    scopes: string;
    granted_at?: Date | string;
    revoked_at?: Date | string | null;
};
export type oauth_consentsCreateOrConnectWithoutUsersInput = {
    where: Prisma.oauth_consentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.oauth_consentsCreateWithoutUsersInput, Prisma.oauth_consentsUncheckedCreateWithoutUsersInput>;
};
export type oauth_consentsCreateManyUsersInputEnvelope = {
    data: Prisma.oauth_consentsCreateManyUsersInput | Prisma.oauth_consentsCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type oauth_consentsUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.oauth_consentsWhereUniqueInput;
    update: Prisma.XOR<Prisma.oauth_consentsUpdateWithoutUsersInput, Prisma.oauth_consentsUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.oauth_consentsCreateWithoutUsersInput, Prisma.oauth_consentsUncheckedCreateWithoutUsersInput>;
};
export type oauth_consentsUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.oauth_consentsWhereUniqueInput;
    data: Prisma.XOR<Prisma.oauth_consentsUpdateWithoutUsersInput, Prisma.oauth_consentsUncheckedUpdateWithoutUsersInput>;
};
export type oauth_consentsUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.oauth_consentsScalarWhereInput;
    data: Prisma.XOR<Prisma.oauth_consentsUpdateManyMutationInput, Prisma.oauth_consentsUncheckedUpdateManyWithoutUsersInput>;
};
export type oauth_consentsCreateManyOauth_clientsInput = {
    id: string;
    user_id: string;
    scopes: string;
    granted_at?: Date | string;
    revoked_at?: Date | string | null;
};
export type oauth_consentsUpdateWithoutOauth_clientsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scopes?: Prisma.StringFieldUpdateOperationsInput | string;
    granted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revoked_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    users?: Prisma.usersUpdateOneRequiredWithoutOauth_consentsNestedInput;
};
export type oauth_consentsUncheckedUpdateWithoutOauth_clientsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    scopes?: Prisma.StringFieldUpdateOperationsInput | string;
    granted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revoked_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type oauth_consentsUncheckedUpdateManyWithoutOauth_clientsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    scopes?: Prisma.StringFieldUpdateOperationsInput | string;
    granted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revoked_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type oauth_consentsCreateManyUsersInput = {
    id: string;
    client_id: string;
    scopes: string;
    granted_at?: Date | string;
    revoked_at?: Date | string | null;
};
export type oauth_consentsUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scopes?: Prisma.StringFieldUpdateOperationsInput | string;
    granted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revoked_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    oauth_clients?: Prisma.oauth_clientsUpdateOneRequiredWithoutOauth_consentsNestedInput;
};
export type oauth_consentsUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    client_id?: Prisma.StringFieldUpdateOperationsInput | string;
    scopes?: Prisma.StringFieldUpdateOperationsInput | string;
    granted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revoked_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type oauth_consentsUncheckedUpdateManyWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    client_id?: Prisma.StringFieldUpdateOperationsInput | string;
    scopes?: Prisma.StringFieldUpdateOperationsInput | string;
    granted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revoked_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type oauth_consentsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    client_id?: boolean;
    scopes?: boolean;
    granted_at?: boolean;
    revoked_at?: boolean;
    oauth_clients?: boolean | Prisma.oauth_clientsDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["oauth_consents"]>;
export type oauth_consentsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    client_id?: boolean;
    scopes?: boolean;
    granted_at?: boolean;
    revoked_at?: boolean;
    oauth_clients?: boolean | Prisma.oauth_clientsDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["oauth_consents"]>;
export type oauth_consentsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    client_id?: boolean;
    scopes?: boolean;
    granted_at?: boolean;
    revoked_at?: boolean;
    oauth_clients?: boolean | Prisma.oauth_clientsDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["oauth_consents"]>;
export type oauth_consentsSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    client_id?: boolean;
    scopes?: boolean;
    granted_at?: boolean;
    revoked_at?: boolean;
};
export type oauth_consentsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "client_id" | "scopes" | "granted_at" | "revoked_at", ExtArgs["result"]["oauth_consents"]>;
export type oauth_consentsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    oauth_clients?: boolean | Prisma.oauth_clientsDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type oauth_consentsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    oauth_clients?: boolean | Prisma.oauth_clientsDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type oauth_consentsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    oauth_clients?: boolean | Prisma.oauth_clientsDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type $oauth_consentsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "oauth_consents";
    objects: {
        oauth_clients: Prisma.$oauth_clientsPayload<ExtArgs>;
        users: Prisma.$usersPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        user_id: string;
        client_id: string;
        scopes: string;
        granted_at: Date;
        revoked_at: Date | null;
    }, ExtArgs["result"]["oauth_consents"]>;
    composites: {};
};
export type oauth_consentsGetPayload<S extends boolean | null | undefined | oauth_consentsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$oauth_consentsPayload, S>;
export type oauth_consentsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<oauth_consentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Oauth_consentsCountAggregateInputType | true;
};
export interface oauth_consentsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['oauth_consents'];
        meta: {
            name: 'oauth_consents';
        };
    };
    findUnique<T extends oauth_consentsFindUniqueArgs>(args: Prisma.SelectSubset<T, oauth_consentsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__oauth_consentsClient<runtime.Types.Result.GetResult<Prisma.$oauth_consentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends oauth_consentsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, oauth_consentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__oauth_consentsClient<runtime.Types.Result.GetResult<Prisma.$oauth_consentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends oauth_consentsFindFirstArgs>(args?: Prisma.SelectSubset<T, oauth_consentsFindFirstArgs<ExtArgs>>): Prisma.Prisma__oauth_consentsClient<runtime.Types.Result.GetResult<Prisma.$oauth_consentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends oauth_consentsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, oauth_consentsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__oauth_consentsClient<runtime.Types.Result.GetResult<Prisma.$oauth_consentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends oauth_consentsFindManyArgs>(args?: Prisma.SelectSubset<T, oauth_consentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$oauth_consentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends oauth_consentsCreateArgs>(args: Prisma.SelectSubset<T, oauth_consentsCreateArgs<ExtArgs>>): Prisma.Prisma__oauth_consentsClient<runtime.Types.Result.GetResult<Prisma.$oauth_consentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends oauth_consentsCreateManyArgs>(args?: Prisma.SelectSubset<T, oauth_consentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends oauth_consentsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, oauth_consentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$oauth_consentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends oauth_consentsDeleteArgs>(args: Prisma.SelectSubset<T, oauth_consentsDeleteArgs<ExtArgs>>): Prisma.Prisma__oauth_consentsClient<runtime.Types.Result.GetResult<Prisma.$oauth_consentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends oauth_consentsUpdateArgs>(args: Prisma.SelectSubset<T, oauth_consentsUpdateArgs<ExtArgs>>): Prisma.Prisma__oauth_consentsClient<runtime.Types.Result.GetResult<Prisma.$oauth_consentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends oauth_consentsDeleteManyArgs>(args?: Prisma.SelectSubset<T, oauth_consentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends oauth_consentsUpdateManyArgs>(args: Prisma.SelectSubset<T, oauth_consentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends oauth_consentsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, oauth_consentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$oauth_consentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends oauth_consentsUpsertArgs>(args: Prisma.SelectSubset<T, oauth_consentsUpsertArgs<ExtArgs>>): Prisma.Prisma__oauth_consentsClient<runtime.Types.Result.GetResult<Prisma.$oauth_consentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends oauth_consentsCountArgs>(args?: Prisma.Subset<T, oauth_consentsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Oauth_consentsCountAggregateOutputType> : number>;
    aggregate<T extends Oauth_consentsAggregateArgs>(args: Prisma.Subset<T, Oauth_consentsAggregateArgs>): Prisma.PrismaPromise<GetOauth_consentsAggregateType<T>>;
    groupBy<T extends oauth_consentsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: oauth_consentsGroupByArgs['orderBy'];
    } : {
        orderBy?: oauth_consentsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, oauth_consentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOauth_consentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: oauth_consentsFieldRefs;
}
export interface Prisma__oauth_consentsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    oauth_clients<T extends Prisma.oauth_clientsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.oauth_clientsDefaultArgs<ExtArgs>>): Prisma.Prisma__oauth_clientsClient<runtime.Types.Result.GetResult<Prisma.$oauth_clientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    users<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface oauth_consentsFieldRefs {
    readonly id: Prisma.FieldRef<"oauth_consents", 'String'>;
    readonly user_id: Prisma.FieldRef<"oauth_consents", 'String'>;
    readonly client_id: Prisma.FieldRef<"oauth_consents", 'String'>;
    readonly scopes: Prisma.FieldRef<"oauth_consents", 'String'>;
    readonly granted_at: Prisma.FieldRef<"oauth_consents", 'DateTime'>;
    readonly revoked_at: Prisma.FieldRef<"oauth_consents", 'DateTime'>;
}
export type oauth_consentsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.oauth_consentsSelect<ExtArgs> | null;
    omit?: Prisma.oauth_consentsOmit<ExtArgs> | null;
    include?: Prisma.oauth_consentsInclude<ExtArgs> | null;
    where: Prisma.oauth_consentsWhereUniqueInput;
};
export type oauth_consentsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.oauth_consentsSelect<ExtArgs> | null;
    omit?: Prisma.oauth_consentsOmit<ExtArgs> | null;
    include?: Prisma.oauth_consentsInclude<ExtArgs> | null;
    where: Prisma.oauth_consentsWhereUniqueInput;
};
export type oauth_consentsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.oauth_consentsSelect<ExtArgs> | null;
    omit?: Prisma.oauth_consentsOmit<ExtArgs> | null;
    include?: Prisma.oauth_consentsInclude<ExtArgs> | null;
    where?: Prisma.oauth_consentsWhereInput;
    orderBy?: Prisma.oauth_consentsOrderByWithRelationInput | Prisma.oauth_consentsOrderByWithRelationInput[];
    cursor?: Prisma.oauth_consentsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Oauth_consentsScalarFieldEnum | Prisma.Oauth_consentsScalarFieldEnum[];
};
export type oauth_consentsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.oauth_consentsSelect<ExtArgs> | null;
    omit?: Prisma.oauth_consentsOmit<ExtArgs> | null;
    include?: Prisma.oauth_consentsInclude<ExtArgs> | null;
    where?: Prisma.oauth_consentsWhereInput;
    orderBy?: Prisma.oauth_consentsOrderByWithRelationInput | Prisma.oauth_consentsOrderByWithRelationInput[];
    cursor?: Prisma.oauth_consentsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Oauth_consentsScalarFieldEnum | Prisma.Oauth_consentsScalarFieldEnum[];
};
export type oauth_consentsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.oauth_consentsSelect<ExtArgs> | null;
    omit?: Prisma.oauth_consentsOmit<ExtArgs> | null;
    include?: Prisma.oauth_consentsInclude<ExtArgs> | null;
    where?: Prisma.oauth_consentsWhereInput;
    orderBy?: Prisma.oauth_consentsOrderByWithRelationInput | Prisma.oauth_consentsOrderByWithRelationInput[];
    cursor?: Prisma.oauth_consentsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Oauth_consentsScalarFieldEnum | Prisma.Oauth_consentsScalarFieldEnum[];
};
export type oauth_consentsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.oauth_consentsSelect<ExtArgs> | null;
    omit?: Prisma.oauth_consentsOmit<ExtArgs> | null;
    include?: Prisma.oauth_consentsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.oauth_consentsCreateInput, Prisma.oauth_consentsUncheckedCreateInput>;
};
export type oauth_consentsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.oauth_consentsCreateManyInput | Prisma.oauth_consentsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type oauth_consentsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.oauth_consentsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.oauth_consentsOmit<ExtArgs> | null;
    data: Prisma.oauth_consentsCreateManyInput | Prisma.oauth_consentsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.oauth_consentsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type oauth_consentsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.oauth_consentsSelect<ExtArgs> | null;
    omit?: Prisma.oauth_consentsOmit<ExtArgs> | null;
    include?: Prisma.oauth_consentsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.oauth_consentsUpdateInput, Prisma.oauth_consentsUncheckedUpdateInput>;
    where: Prisma.oauth_consentsWhereUniqueInput;
};
export type oauth_consentsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.oauth_consentsUpdateManyMutationInput, Prisma.oauth_consentsUncheckedUpdateManyInput>;
    where?: Prisma.oauth_consentsWhereInput;
    limit?: number;
};
export type oauth_consentsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.oauth_consentsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.oauth_consentsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.oauth_consentsUpdateManyMutationInput, Prisma.oauth_consentsUncheckedUpdateManyInput>;
    where?: Prisma.oauth_consentsWhereInput;
    limit?: number;
    include?: Prisma.oauth_consentsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type oauth_consentsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.oauth_consentsSelect<ExtArgs> | null;
    omit?: Prisma.oauth_consentsOmit<ExtArgs> | null;
    include?: Prisma.oauth_consentsInclude<ExtArgs> | null;
    where: Prisma.oauth_consentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.oauth_consentsCreateInput, Prisma.oauth_consentsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.oauth_consentsUpdateInput, Prisma.oauth_consentsUncheckedUpdateInput>;
};
export type oauth_consentsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.oauth_consentsSelect<ExtArgs> | null;
    omit?: Prisma.oauth_consentsOmit<ExtArgs> | null;
    include?: Prisma.oauth_consentsInclude<ExtArgs> | null;
    where: Prisma.oauth_consentsWhereUniqueInput;
};
export type oauth_consentsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.oauth_consentsWhereInput;
    limit?: number;
};
export type oauth_consentsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.oauth_consentsSelect<ExtArgs> | null;
    omit?: Prisma.oauth_consentsOmit<ExtArgs> | null;
    include?: Prisma.oauth_consentsInclude<ExtArgs> | null;
};
