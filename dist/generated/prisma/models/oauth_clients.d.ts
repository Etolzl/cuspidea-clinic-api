import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type oauth_clientsModel = runtime.Types.Result.DefaultSelection<Prisma.$oauth_clientsPayload>;
export type AggregateOauth_clients = {
    _count: Oauth_clientsCountAggregateOutputType | null;
    _min: Oauth_clientsMinAggregateOutputType | null;
    _max: Oauth_clientsMaxAggregateOutputType | null;
};
export type Oauth_clientsMinAggregateOutputType = {
    id: string | null;
    client_secret_hash: string | null;
    registration_type: $Enums.oauth_registration_type | null;
    redirect_uris: string | null;
    grant_types: string | null;
    client_name: string | null;
    client_uri: string | null;
    logo_uri: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    deleted_at: Date | null;
    client_type: $Enums.oauth_client_type | null;
    token_endpoint_auth_method: string | null;
};
export type Oauth_clientsMaxAggregateOutputType = {
    id: string | null;
    client_secret_hash: string | null;
    registration_type: $Enums.oauth_registration_type | null;
    redirect_uris: string | null;
    grant_types: string | null;
    client_name: string | null;
    client_uri: string | null;
    logo_uri: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    deleted_at: Date | null;
    client_type: $Enums.oauth_client_type | null;
    token_endpoint_auth_method: string | null;
};
export type Oauth_clientsCountAggregateOutputType = {
    id: number;
    client_secret_hash: number;
    registration_type: number;
    redirect_uris: number;
    grant_types: number;
    client_name: number;
    client_uri: number;
    logo_uri: number;
    created_at: number;
    updated_at: number;
    deleted_at: number;
    client_type: number;
    token_endpoint_auth_method: number;
    _all: number;
};
export type Oauth_clientsMinAggregateInputType = {
    id?: true;
    client_secret_hash?: true;
    registration_type?: true;
    redirect_uris?: true;
    grant_types?: true;
    client_name?: true;
    client_uri?: true;
    logo_uri?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
    client_type?: true;
    token_endpoint_auth_method?: true;
};
export type Oauth_clientsMaxAggregateInputType = {
    id?: true;
    client_secret_hash?: true;
    registration_type?: true;
    redirect_uris?: true;
    grant_types?: true;
    client_name?: true;
    client_uri?: true;
    logo_uri?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
    client_type?: true;
    token_endpoint_auth_method?: true;
};
export type Oauth_clientsCountAggregateInputType = {
    id?: true;
    client_secret_hash?: true;
    registration_type?: true;
    redirect_uris?: true;
    grant_types?: true;
    client_name?: true;
    client_uri?: true;
    logo_uri?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
    client_type?: true;
    token_endpoint_auth_method?: true;
    _all?: true;
};
export type Oauth_clientsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.oauth_clientsWhereInput;
    orderBy?: Prisma.oauth_clientsOrderByWithRelationInput | Prisma.oauth_clientsOrderByWithRelationInput[];
    cursor?: Prisma.oauth_clientsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Oauth_clientsCountAggregateInputType;
    _min?: Oauth_clientsMinAggregateInputType;
    _max?: Oauth_clientsMaxAggregateInputType;
};
export type GetOauth_clientsAggregateType<T extends Oauth_clientsAggregateArgs> = {
    [P in keyof T & keyof AggregateOauth_clients]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOauth_clients[P]> : Prisma.GetScalarType<T[P], AggregateOauth_clients[P]>;
};
export type oauth_clientsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.oauth_clientsWhereInput;
    orderBy?: Prisma.oauth_clientsOrderByWithAggregationInput | Prisma.oauth_clientsOrderByWithAggregationInput[];
    by: Prisma.Oauth_clientsScalarFieldEnum[] | Prisma.Oauth_clientsScalarFieldEnum;
    having?: Prisma.oauth_clientsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Oauth_clientsCountAggregateInputType | true;
    _min?: Oauth_clientsMinAggregateInputType;
    _max?: Oauth_clientsMaxAggregateInputType;
};
export type Oauth_clientsGroupByOutputType = {
    id: string;
    client_secret_hash: string | null;
    registration_type: $Enums.oauth_registration_type;
    redirect_uris: string;
    grant_types: string;
    client_name: string | null;
    client_uri: string | null;
    logo_uri: string | null;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    client_type: $Enums.oauth_client_type;
    token_endpoint_auth_method: string;
    _count: Oauth_clientsCountAggregateOutputType | null;
    _min: Oauth_clientsMinAggregateOutputType | null;
    _max: Oauth_clientsMaxAggregateOutputType | null;
};
export type GetOauth_clientsGroupByPayload<T extends oauth_clientsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Oauth_clientsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Oauth_clientsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Oauth_clientsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Oauth_clientsGroupByOutputType[P]>;
}>>;
export type oauth_clientsWhereInput = {
    AND?: Prisma.oauth_clientsWhereInput | Prisma.oauth_clientsWhereInput[];
    OR?: Prisma.oauth_clientsWhereInput[];
    NOT?: Prisma.oauth_clientsWhereInput | Prisma.oauth_clientsWhereInput[];
    id?: Prisma.UuidFilter<"oauth_clients"> | string;
    client_secret_hash?: Prisma.StringNullableFilter<"oauth_clients"> | string | null;
    registration_type?: Prisma.Enumoauth_registration_typeFilter<"oauth_clients"> | $Enums.oauth_registration_type;
    redirect_uris?: Prisma.StringFilter<"oauth_clients"> | string;
    grant_types?: Prisma.StringFilter<"oauth_clients"> | string;
    client_name?: Prisma.StringNullableFilter<"oauth_clients"> | string | null;
    client_uri?: Prisma.StringNullableFilter<"oauth_clients"> | string | null;
    logo_uri?: Prisma.StringNullableFilter<"oauth_clients"> | string | null;
    created_at?: Prisma.DateTimeFilter<"oauth_clients"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"oauth_clients"> | Date | string;
    deleted_at?: Prisma.DateTimeNullableFilter<"oauth_clients"> | Date | string | null;
    client_type?: Prisma.Enumoauth_client_typeFilter<"oauth_clients"> | $Enums.oauth_client_type;
    token_endpoint_auth_method?: Prisma.StringFilter<"oauth_clients"> | string;
    oauth_authorizations?: Prisma.Oauth_authorizationsListRelationFilter;
    oauth_consents?: Prisma.Oauth_consentsListRelationFilter;
    sessions?: Prisma.SessionsListRelationFilter;
};
export type oauth_clientsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    client_secret_hash?: Prisma.SortOrderInput | Prisma.SortOrder;
    registration_type?: Prisma.SortOrder;
    redirect_uris?: Prisma.SortOrder;
    grant_types?: Prisma.SortOrder;
    client_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    client_uri?: Prisma.SortOrderInput | Prisma.SortOrder;
    logo_uri?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    deleted_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    client_type?: Prisma.SortOrder;
    token_endpoint_auth_method?: Prisma.SortOrder;
    oauth_authorizations?: Prisma.oauth_authorizationsOrderByRelationAggregateInput;
    oauth_consents?: Prisma.oauth_consentsOrderByRelationAggregateInput;
    sessions?: Prisma.sessionsOrderByRelationAggregateInput;
};
export type oauth_clientsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.oauth_clientsWhereInput | Prisma.oauth_clientsWhereInput[];
    OR?: Prisma.oauth_clientsWhereInput[];
    NOT?: Prisma.oauth_clientsWhereInput | Prisma.oauth_clientsWhereInput[];
    client_secret_hash?: Prisma.StringNullableFilter<"oauth_clients"> | string | null;
    registration_type?: Prisma.Enumoauth_registration_typeFilter<"oauth_clients"> | $Enums.oauth_registration_type;
    redirect_uris?: Prisma.StringFilter<"oauth_clients"> | string;
    grant_types?: Prisma.StringFilter<"oauth_clients"> | string;
    client_name?: Prisma.StringNullableFilter<"oauth_clients"> | string | null;
    client_uri?: Prisma.StringNullableFilter<"oauth_clients"> | string | null;
    logo_uri?: Prisma.StringNullableFilter<"oauth_clients"> | string | null;
    created_at?: Prisma.DateTimeFilter<"oauth_clients"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"oauth_clients"> | Date | string;
    deleted_at?: Prisma.DateTimeNullableFilter<"oauth_clients"> | Date | string | null;
    client_type?: Prisma.Enumoauth_client_typeFilter<"oauth_clients"> | $Enums.oauth_client_type;
    token_endpoint_auth_method?: Prisma.StringFilter<"oauth_clients"> | string;
    oauth_authorizations?: Prisma.Oauth_authorizationsListRelationFilter;
    oauth_consents?: Prisma.Oauth_consentsListRelationFilter;
    sessions?: Prisma.SessionsListRelationFilter;
}, "id">;
export type oauth_clientsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    client_secret_hash?: Prisma.SortOrderInput | Prisma.SortOrder;
    registration_type?: Prisma.SortOrder;
    redirect_uris?: Prisma.SortOrder;
    grant_types?: Prisma.SortOrder;
    client_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    client_uri?: Prisma.SortOrderInput | Prisma.SortOrder;
    logo_uri?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    deleted_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    client_type?: Prisma.SortOrder;
    token_endpoint_auth_method?: Prisma.SortOrder;
    _count?: Prisma.oauth_clientsCountOrderByAggregateInput;
    _max?: Prisma.oauth_clientsMaxOrderByAggregateInput;
    _min?: Prisma.oauth_clientsMinOrderByAggregateInput;
};
export type oauth_clientsScalarWhereWithAggregatesInput = {
    AND?: Prisma.oauth_clientsScalarWhereWithAggregatesInput | Prisma.oauth_clientsScalarWhereWithAggregatesInput[];
    OR?: Prisma.oauth_clientsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.oauth_clientsScalarWhereWithAggregatesInput | Prisma.oauth_clientsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"oauth_clients"> | string;
    client_secret_hash?: Prisma.StringNullableWithAggregatesFilter<"oauth_clients"> | string | null;
    registration_type?: Prisma.Enumoauth_registration_typeWithAggregatesFilter<"oauth_clients"> | $Enums.oauth_registration_type;
    redirect_uris?: Prisma.StringWithAggregatesFilter<"oauth_clients"> | string;
    grant_types?: Prisma.StringWithAggregatesFilter<"oauth_clients"> | string;
    client_name?: Prisma.StringNullableWithAggregatesFilter<"oauth_clients"> | string | null;
    client_uri?: Prisma.StringNullableWithAggregatesFilter<"oauth_clients"> | string | null;
    logo_uri?: Prisma.StringNullableWithAggregatesFilter<"oauth_clients"> | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"oauth_clients"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"oauth_clients"> | Date | string;
    deleted_at?: Prisma.DateTimeNullableWithAggregatesFilter<"oauth_clients"> | Date | string | null;
    client_type?: Prisma.Enumoauth_client_typeWithAggregatesFilter<"oauth_clients"> | $Enums.oauth_client_type;
    token_endpoint_auth_method?: Prisma.StringWithAggregatesFilter<"oauth_clients"> | string;
};
export type oauth_clientsCreateInput = {
    id: string;
    client_secret_hash?: string | null;
    registration_type: $Enums.oauth_registration_type;
    redirect_uris: string;
    grant_types: string;
    client_name?: string | null;
    client_uri?: string | null;
    logo_uri?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    client_type?: $Enums.oauth_client_type;
    token_endpoint_auth_method: string;
    oauth_authorizations?: Prisma.oauth_authorizationsCreateNestedManyWithoutOauth_clientsInput;
    oauth_consents?: Prisma.oauth_consentsCreateNestedManyWithoutOauth_clientsInput;
    sessions?: Prisma.sessionsCreateNestedManyWithoutOauth_clientsInput;
};
export type oauth_clientsUncheckedCreateInput = {
    id: string;
    client_secret_hash?: string | null;
    registration_type: $Enums.oauth_registration_type;
    redirect_uris: string;
    grant_types: string;
    client_name?: string | null;
    client_uri?: string | null;
    logo_uri?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    client_type?: $Enums.oauth_client_type;
    token_endpoint_auth_method: string;
    oauth_authorizations?: Prisma.oauth_authorizationsUncheckedCreateNestedManyWithoutOauth_clientsInput;
    oauth_consents?: Prisma.oauth_consentsUncheckedCreateNestedManyWithoutOauth_clientsInput;
    sessions?: Prisma.sessionsUncheckedCreateNestedManyWithoutOauth_clientsInput;
};
export type oauth_clientsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    client_secret_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    registration_type?: Prisma.Enumoauth_registration_typeFieldUpdateOperationsInput | $Enums.oauth_registration_type;
    redirect_uris?: Prisma.StringFieldUpdateOperationsInput | string;
    grant_types?: Prisma.StringFieldUpdateOperationsInput | string;
    client_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    client_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    client_type?: Prisma.Enumoauth_client_typeFieldUpdateOperationsInput | $Enums.oauth_client_type;
    token_endpoint_auth_method?: Prisma.StringFieldUpdateOperationsInput | string;
    oauth_authorizations?: Prisma.oauth_authorizationsUpdateManyWithoutOauth_clientsNestedInput;
    oauth_consents?: Prisma.oauth_consentsUpdateManyWithoutOauth_clientsNestedInput;
    sessions?: Prisma.sessionsUpdateManyWithoutOauth_clientsNestedInput;
};
export type oauth_clientsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    client_secret_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    registration_type?: Prisma.Enumoauth_registration_typeFieldUpdateOperationsInput | $Enums.oauth_registration_type;
    redirect_uris?: Prisma.StringFieldUpdateOperationsInput | string;
    grant_types?: Prisma.StringFieldUpdateOperationsInput | string;
    client_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    client_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    client_type?: Prisma.Enumoauth_client_typeFieldUpdateOperationsInput | $Enums.oauth_client_type;
    token_endpoint_auth_method?: Prisma.StringFieldUpdateOperationsInput | string;
    oauth_authorizations?: Prisma.oauth_authorizationsUncheckedUpdateManyWithoutOauth_clientsNestedInput;
    oauth_consents?: Prisma.oauth_consentsUncheckedUpdateManyWithoutOauth_clientsNestedInput;
    sessions?: Prisma.sessionsUncheckedUpdateManyWithoutOauth_clientsNestedInput;
};
export type oauth_clientsCreateManyInput = {
    id: string;
    client_secret_hash?: string | null;
    registration_type: $Enums.oauth_registration_type;
    redirect_uris: string;
    grant_types: string;
    client_name?: string | null;
    client_uri?: string | null;
    logo_uri?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    client_type?: $Enums.oauth_client_type;
    token_endpoint_auth_method: string;
};
export type oauth_clientsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    client_secret_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    registration_type?: Prisma.Enumoauth_registration_typeFieldUpdateOperationsInput | $Enums.oauth_registration_type;
    redirect_uris?: Prisma.StringFieldUpdateOperationsInput | string;
    grant_types?: Prisma.StringFieldUpdateOperationsInput | string;
    client_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    client_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    client_type?: Prisma.Enumoauth_client_typeFieldUpdateOperationsInput | $Enums.oauth_client_type;
    token_endpoint_auth_method?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type oauth_clientsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    client_secret_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    registration_type?: Prisma.Enumoauth_registration_typeFieldUpdateOperationsInput | $Enums.oauth_registration_type;
    redirect_uris?: Prisma.StringFieldUpdateOperationsInput | string;
    grant_types?: Prisma.StringFieldUpdateOperationsInput | string;
    client_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    client_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    client_type?: Prisma.Enumoauth_client_typeFieldUpdateOperationsInput | $Enums.oauth_client_type;
    token_endpoint_auth_method?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Oauth_clientsScalarRelationFilter = {
    is?: Prisma.oauth_clientsWhereInput;
    isNot?: Prisma.oauth_clientsWhereInput;
};
export type oauth_clientsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    client_secret_hash?: Prisma.SortOrder;
    registration_type?: Prisma.SortOrder;
    redirect_uris?: Prisma.SortOrder;
    grant_types?: Prisma.SortOrder;
    client_name?: Prisma.SortOrder;
    client_uri?: Prisma.SortOrder;
    logo_uri?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    deleted_at?: Prisma.SortOrder;
    client_type?: Prisma.SortOrder;
    token_endpoint_auth_method?: Prisma.SortOrder;
};
export type oauth_clientsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    client_secret_hash?: Prisma.SortOrder;
    registration_type?: Prisma.SortOrder;
    redirect_uris?: Prisma.SortOrder;
    grant_types?: Prisma.SortOrder;
    client_name?: Prisma.SortOrder;
    client_uri?: Prisma.SortOrder;
    logo_uri?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    deleted_at?: Prisma.SortOrder;
    client_type?: Prisma.SortOrder;
    token_endpoint_auth_method?: Prisma.SortOrder;
};
export type oauth_clientsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    client_secret_hash?: Prisma.SortOrder;
    registration_type?: Prisma.SortOrder;
    redirect_uris?: Prisma.SortOrder;
    grant_types?: Prisma.SortOrder;
    client_name?: Prisma.SortOrder;
    client_uri?: Prisma.SortOrder;
    logo_uri?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    deleted_at?: Prisma.SortOrder;
    client_type?: Prisma.SortOrder;
    token_endpoint_auth_method?: Prisma.SortOrder;
};
export type Oauth_clientsNullableScalarRelationFilter = {
    is?: Prisma.oauth_clientsWhereInput | null;
    isNot?: Prisma.oauth_clientsWhereInput | null;
};
export type oauth_clientsCreateNestedOneWithoutOauth_authorizationsInput = {
    create?: Prisma.XOR<Prisma.oauth_clientsCreateWithoutOauth_authorizationsInput, Prisma.oauth_clientsUncheckedCreateWithoutOauth_authorizationsInput>;
    connectOrCreate?: Prisma.oauth_clientsCreateOrConnectWithoutOauth_authorizationsInput;
    connect?: Prisma.oauth_clientsWhereUniqueInput;
};
export type oauth_clientsUpdateOneRequiredWithoutOauth_authorizationsNestedInput = {
    create?: Prisma.XOR<Prisma.oauth_clientsCreateWithoutOauth_authorizationsInput, Prisma.oauth_clientsUncheckedCreateWithoutOauth_authorizationsInput>;
    connectOrCreate?: Prisma.oauth_clientsCreateOrConnectWithoutOauth_authorizationsInput;
    upsert?: Prisma.oauth_clientsUpsertWithoutOauth_authorizationsInput;
    connect?: Prisma.oauth_clientsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.oauth_clientsUpdateToOneWithWhereWithoutOauth_authorizationsInput, Prisma.oauth_clientsUpdateWithoutOauth_authorizationsInput>, Prisma.oauth_clientsUncheckedUpdateWithoutOauth_authorizationsInput>;
};
export type Enumoauth_registration_typeFieldUpdateOperationsInput = {
    set?: $Enums.oauth_registration_type;
};
export type Enumoauth_client_typeFieldUpdateOperationsInput = {
    set?: $Enums.oauth_client_type;
};
export type oauth_clientsCreateNestedOneWithoutOauth_consentsInput = {
    create?: Prisma.XOR<Prisma.oauth_clientsCreateWithoutOauth_consentsInput, Prisma.oauth_clientsUncheckedCreateWithoutOauth_consentsInput>;
    connectOrCreate?: Prisma.oauth_clientsCreateOrConnectWithoutOauth_consentsInput;
    connect?: Prisma.oauth_clientsWhereUniqueInput;
};
export type oauth_clientsUpdateOneRequiredWithoutOauth_consentsNestedInput = {
    create?: Prisma.XOR<Prisma.oauth_clientsCreateWithoutOauth_consentsInput, Prisma.oauth_clientsUncheckedCreateWithoutOauth_consentsInput>;
    connectOrCreate?: Prisma.oauth_clientsCreateOrConnectWithoutOauth_consentsInput;
    upsert?: Prisma.oauth_clientsUpsertWithoutOauth_consentsInput;
    connect?: Prisma.oauth_clientsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.oauth_clientsUpdateToOneWithWhereWithoutOauth_consentsInput, Prisma.oauth_clientsUpdateWithoutOauth_consentsInput>, Prisma.oauth_clientsUncheckedUpdateWithoutOauth_consentsInput>;
};
export type oauth_clientsCreateNestedOneWithoutSessionsInput = {
    create?: Prisma.XOR<Prisma.oauth_clientsCreateWithoutSessionsInput, Prisma.oauth_clientsUncheckedCreateWithoutSessionsInput>;
    connectOrCreate?: Prisma.oauth_clientsCreateOrConnectWithoutSessionsInput;
    connect?: Prisma.oauth_clientsWhereUniqueInput;
};
export type oauth_clientsUpdateOneWithoutSessionsNestedInput = {
    create?: Prisma.XOR<Prisma.oauth_clientsCreateWithoutSessionsInput, Prisma.oauth_clientsUncheckedCreateWithoutSessionsInput>;
    connectOrCreate?: Prisma.oauth_clientsCreateOrConnectWithoutSessionsInput;
    upsert?: Prisma.oauth_clientsUpsertWithoutSessionsInput;
    disconnect?: Prisma.oauth_clientsWhereInput | boolean;
    delete?: Prisma.oauth_clientsWhereInput | boolean;
    connect?: Prisma.oauth_clientsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.oauth_clientsUpdateToOneWithWhereWithoutSessionsInput, Prisma.oauth_clientsUpdateWithoutSessionsInput>, Prisma.oauth_clientsUncheckedUpdateWithoutSessionsInput>;
};
export type oauth_clientsCreateWithoutOauth_authorizationsInput = {
    id: string;
    client_secret_hash?: string | null;
    registration_type: $Enums.oauth_registration_type;
    redirect_uris: string;
    grant_types: string;
    client_name?: string | null;
    client_uri?: string | null;
    logo_uri?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    client_type?: $Enums.oauth_client_type;
    token_endpoint_auth_method: string;
    oauth_consents?: Prisma.oauth_consentsCreateNestedManyWithoutOauth_clientsInput;
    sessions?: Prisma.sessionsCreateNestedManyWithoutOauth_clientsInput;
};
export type oauth_clientsUncheckedCreateWithoutOauth_authorizationsInput = {
    id: string;
    client_secret_hash?: string | null;
    registration_type: $Enums.oauth_registration_type;
    redirect_uris: string;
    grant_types: string;
    client_name?: string | null;
    client_uri?: string | null;
    logo_uri?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    client_type?: $Enums.oauth_client_type;
    token_endpoint_auth_method: string;
    oauth_consents?: Prisma.oauth_consentsUncheckedCreateNestedManyWithoutOauth_clientsInput;
    sessions?: Prisma.sessionsUncheckedCreateNestedManyWithoutOauth_clientsInput;
};
export type oauth_clientsCreateOrConnectWithoutOauth_authorizationsInput = {
    where: Prisma.oauth_clientsWhereUniqueInput;
    create: Prisma.XOR<Prisma.oauth_clientsCreateWithoutOauth_authorizationsInput, Prisma.oauth_clientsUncheckedCreateWithoutOauth_authorizationsInput>;
};
export type oauth_clientsUpsertWithoutOauth_authorizationsInput = {
    update: Prisma.XOR<Prisma.oauth_clientsUpdateWithoutOauth_authorizationsInput, Prisma.oauth_clientsUncheckedUpdateWithoutOauth_authorizationsInput>;
    create: Prisma.XOR<Prisma.oauth_clientsCreateWithoutOauth_authorizationsInput, Prisma.oauth_clientsUncheckedCreateWithoutOauth_authorizationsInput>;
    where?: Prisma.oauth_clientsWhereInput;
};
export type oauth_clientsUpdateToOneWithWhereWithoutOauth_authorizationsInput = {
    where?: Prisma.oauth_clientsWhereInput;
    data: Prisma.XOR<Prisma.oauth_clientsUpdateWithoutOauth_authorizationsInput, Prisma.oauth_clientsUncheckedUpdateWithoutOauth_authorizationsInput>;
};
export type oauth_clientsUpdateWithoutOauth_authorizationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    client_secret_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    registration_type?: Prisma.Enumoauth_registration_typeFieldUpdateOperationsInput | $Enums.oauth_registration_type;
    redirect_uris?: Prisma.StringFieldUpdateOperationsInput | string;
    grant_types?: Prisma.StringFieldUpdateOperationsInput | string;
    client_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    client_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    client_type?: Prisma.Enumoauth_client_typeFieldUpdateOperationsInput | $Enums.oauth_client_type;
    token_endpoint_auth_method?: Prisma.StringFieldUpdateOperationsInput | string;
    oauth_consents?: Prisma.oauth_consentsUpdateManyWithoutOauth_clientsNestedInput;
    sessions?: Prisma.sessionsUpdateManyWithoutOauth_clientsNestedInput;
};
export type oauth_clientsUncheckedUpdateWithoutOauth_authorizationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    client_secret_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    registration_type?: Prisma.Enumoauth_registration_typeFieldUpdateOperationsInput | $Enums.oauth_registration_type;
    redirect_uris?: Prisma.StringFieldUpdateOperationsInput | string;
    grant_types?: Prisma.StringFieldUpdateOperationsInput | string;
    client_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    client_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    client_type?: Prisma.Enumoauth_client_typeFieldUpdateOperationsInput | $Enums.oauth_client_type;
    token_endpoint_auth_method?: Prisma.StringFieldUpdateOperationsInput | string;
    oauth_consents?: Prisma.oauth_consentsUncheckedUpdateManyWithoutOauth_clientsNestedInput;
    sessions?: Prisma.sessionsUncheckedUpdateManyWithoutOauth_clientsNestedInput;
};
export type oauth_clientsCreateWithoutOauth_consentsInput = {
    id: string;
    client_secret_hash?: string | null;
    registration_type: $Enums.oauth_registration_type;
    redirect_uris: string;
    grant_types: string;
    client_name?: string | null;
    client_uri?: string | null;
    logo_uri?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    client_type?: $Enums.oauth_client_type;
    token_endpoint_auth_method: string;
    oauth_authorizations?: Prisma.oauth_authorizationsCreateNestedManyWithoutOauth_clientsInput;
    sessions?: Prisma.sessionsCreateNestedManyWithoutOauth_clientsInput;
};
export type oauth_clientsUncheckedCreateWithoutOauth_consentsInput = {
    id: string;
    client_secret_hash?: string | null;
    registration_type: $Enums.oauth_registration_type;
    redirect_uris: string;
    grant_types: string;
    client_name?: string | null;
    client_uri?: string | null;
    logo_uri?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    client_type?: $Enums.oauth_client_type;
    token_endpoint_auth_method: string;
    oauth_authorizations?: Prisma.oauth_authorizationsUncheckedCreateNestedManyWithoutOauth_clientsInput;
    sessions?: Prisma.sessionsUncheckedCreateNestedManyWithoutOauth_clientsInput;
};
export type oauth_clientsCreateOrConnectWithoutOauth_consentsInput = {
    where: Prisma.oauth_clientsWhereUniqueInput;
    create: Prisma.XOR<Prisma.oauth_clientsCreateWithoutOauth_consentsInput, Prisma.oauth_clientsUncheckedCreateWithoutOauth_consentsInput>;
};
export type oauth_clientsUpsertWithoutOauth_consentsInput = {
    update: Prisma.XOR<Prisma.oauth_clientsUpdateWithoutOauth_consentsInput, Prisma.oauth_clientsUncheckedUpdateWithoutOauth_consentsInput>;
    create: Prisma.XOR<Prisma.oauth_clientsCreateWithoutOauth_consentsInput, Prisma.oauth_clientsUncheckedCreateWithoutOauth_consentsInput>;
    where?: Prisma.oauth_clientsWhereInput;
};
export type oauth_clientsUpdateToOneWithWhereWithoutOauth_consentsInput = {
    where?: Prisma.oauth_clientsWhereInput;
    data: Prisma.XOR<Prisma.oauth_clientsUpdateWithoutOauth_consentsInput, Prisma.oauth_clientsUncheckedUpdateWithoutOauth_consentsInput>;
};
export type oauth_clientsUpdateWithoutOauth_consentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    client_secret_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    registration_type?: Prisma.Enumoauth_registration_typeFieldUpdateOperationsInput | $Enums.oauth_registration_type;
    redirect_uris?: Prisma.StringFieldUpdateOperationsInput | string;
    grant_types?: Prisma.StringFieldUpdateOperationsInput | string;
    client_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    client_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    client_type?: Prisma.Enumoauth_client_typeFieldUpdateOperationsInput | $Enums.oauth_client_type;
    token_endpoint_auth_method?: Prisma.StringFieldUpdateOperationsInput | string;
    oauth_authorizations?: Prisma.oauth_authorizationsUpdateManyWithoutOauth_clientsNestedInput;
    sessions?: Prisma.sessionsUpdateManyWithoutOauth_clientsNestedInput;
};
export type oauth_clientsUncheckedUpdateWithoutOauth_consentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    client_secret_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    registration_type?: Prisma.Enumoauth_registration_typeFieldUpdateOperationsInput | $Enums.oauth_registration_type;
    redirect_uris?: Prisma.StringFieldUpdateOperationsInput | string;
    grant_types?: Prisma.StringFieldUpdateOperationsInput | string;
    client_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    client_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    client_type?: Prisma.Enumoauth_client_typeFieldUpdateOperationsInput | $Enums.oauth_client_type;
    token_endpoint_auth_method?: Prisma.StringFieldUpdateOperationsInput | string;
    oauth_authorizations?: Prisma.oauth_authorizationsUncheckedUpdateManyWithoutOauth_clientsNestedInput;
    sessions?: Prisma.sessionsUncheckedUpdateManyWithoutOauth_clientsNestedInput;
};
export type oauth_clientsCreateWithoutSessionsInput = {
    id: string;
    client_secret_hash?: string | null;
    registration_type: $Enums.oauth_registration_type;
    redirect_uris: string;
    grant_types: string;
    client_name?: string | null;
    client_uri?: string | null;
    logo_uri?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    client_type?: $Enums.oauth_client_type;
    token_endpoint_auth_method: string;
    oauth_authorizations?: Prisma.oauth_authorizationsCreateNestedManyWithoutOauth_clientsInput;
    oauth_consents?: Prisma.oauth_consentsCreateNestedManyWithoutOauth_clientsInput;
};
export type oauth_clientsUncheckedCreateWithoutSessionsInput = {
    id: string;
    client_secret_hash?: string | null;
    registration_type: $Enums.oauth_registration_type;
    redirect_uris: string;
    grant_types: string;
    client_name?: string | null;
    client_uri?: string | null;
    logo_uri?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    client_type?: $Enums.oauth_client_type;
    token_endpoint_auth_method: string;
    oauth_authorizations?: Prisma.oauth_authorizationsUncheckedCreateNestedManyWithoutOauth_clientsInput;
    oauth_consents?: Prisma.oauth_consentsUncheckedCreateNestedManyWithoutOauth_clientsInput;
};
export type oauth_clientsCreateOrConnectWithoutSessionsInput = {
    where: Prisma.oauth_clientsWhereUniqueInput;
    create: Prisma.XOR<Prisma.oauth_clientsCreateWithoutSessionsInput, Prisma.oauth_clientsUncheckedCreateWithoutSessionsInput>;
};
export type oauth_clientsUpsertWithoutSessionsInput = {
    update: Prisma.XOR<Prisma.oauth_clientsUpdateWithoutSessionsInput, Prisma.oauth_clientsUncheckedUpdateWithoutSessionsInput>;
    create: Prisma.XOR<Prisma.oauth_clientsCreateWithoutSessionsInput, Prisma.oauth_clientsUncheckedCreateWithoutSessionsInput>;
    where?: Prisma.oauth_clientsWhereInput;
};
export type oauth_clientsUpdateToOneWithWhereWithoutSessionsInput = {
    where?: Prisma.oauth_clientsWhereInput;
    data: Prisma.XOR<Prisma.oauth_clientsUpdateWithoutSessionsInput, Prisma.oauth_clientsUncheckedUpdateWithoutSessionsInput>;
};
export type oauth_clientsUpdateWithoutSessionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    client_secret_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    registration_type?: Prisma.Enumoauth_registration_typeFieldUpdateOperationsInput | $Enums.oauth_registration_type;
    redirect_uris?: Prisma.StringFieldUpdateOperationsInput | string;
    grant_types?: Prisma.StringFieldUpdateOperationsInput | string;
    client_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    client_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    client_type?: Prisma.Enumoauth_client_typeFieldUpdateOperationsInput | $Enums.oauth_client_type;
    token_endpoint_auth_method?: Prisma.StringFieldUpdateOperationsInput | string;
    oauth_authorizations?: Prisma.oauth_authorizationsUpdateManyWithoutOauth_clientsNestedInput;
    oauth_consents?: Prisma.oauth_consentsUpdateManyWithoutOauth_clientsNestedInput;
};
export type oauth_clientsUncheckedUpdateWithoutSessionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    client_secret_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    registration_type?: Prisma.Enumoauth_registration_typeFieldUpdateOperationsInput | $Enums.oauth_registration_type;
    redirect_uris?: Prisma.StringFieldUpdateOperationsInput | string;
    grant_types?: Prisma.StringFieldUpdateOperationsInput | string;
    client_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    client_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo_uri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    client_type?: Prisma.Enumoauth_client_typeFieldUpdateOperationsInput | $Enums.oauth_client_type;
    token_endpoint_auth_method?: Prisma.StringFieldUpdateOperationsInput | string;
    oauth_authorizations?: Prisma.oauth_authorizationsUncheckedUpdateManyWithoutOauth_clientsNestedInput;
    oauth_consents?: Prisma.oauth_consentsUncheckedUpdateManyWithoutOauth_clientsNestedInput;
};
export type Oauth_clientsCountOutputType = {
    oauth_authorizations: number;
    oauth_consents: number;
    sessions: number;
};
export type Oauth_clientsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    oauth_authorizations?: boolean | Oauth_clientsCountOutputTypeCountOauth_authorizationsArgs;
    oauth_consents?: boolean | Oauth_clientsCountOutputTypeCountOauth_consentsArgs;
    sessions?: boolean | Oauth_clientsCountOutputTypeCountSessionsArgs;
};
export type Oauth_clientsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Oauth_clientsCountOutputTypeSelect<ExtArgs> | null;
};
export type Oauth_clientsCountOutputTypeCountOauth_authorizationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.oauth_authorizationsWhereInput;
};
export type Oauth_clientsCountOutputTypeCountOauth_consentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.oauth_consentsWhereInput;
};
export type Oauth_clientsCountOutputTypeCountSessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.sessionsWhereInput;
};
export type oauth_clientsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    client_secret_hash?: boolean;
    registration_type?: boolean;
    redirect_uris?: boolean;
    grant_types?: boolean;
    client_name?: boolean;
    client_uri?: boolean;
    logo_uri?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    deleted_at?: boolean;
    client_type?: boolean;
    token_endpoint_auth_method?: boolean;
    oauth_authorizations?: boolean | Prisma.oauth_clients$oauth_authorizationsArgs<ExtArgs>;
    oauth_consents?: boolean | Prisma.oauth_clients$oauth_consentsArgs<ExtArgs>;
    sessions?: boolean | Prisma.oauth_clients$sessionsArgs<ExtArgs>;
    _count?: boolean | Prisma.Oauth_clientsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["oauth_clients"]>;
export type oauth_clientsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    client_secret_hash?: boolean;
    registration_type?: boolean;
    redirect_uris?: boolean;
    grant_types?: boolean;
    client_name?: boolean;
    client_uri?: boolean;
    logo_uri?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    deleted_at?: boolean;
    client_type?: boolean;
    token_endpoint_auth_method?: boolean;
}, ExtArgs["result"]["oauth_clients"]>;
export type oauth_clientsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    client_secret_hash?: boolean;
    registration_type?: boolean;
    redirect_uris?: boolean;
    grant_types?: boolean;
    client_name?: boolean;
    client_uri?: boolean;
    logo_uri?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    deleted_at?: boolean;
    client_type?: boolean;
    token_endpoint_auth_method?: boolean;
}, ExtArgs["result"]["oauth_clients"]>;
export type oauth_clientsSelectScalar = {
    id?: boolean;
    client_secret_hash?: boolean;
    registration_type?: boolean;
    redirect_uris?: boolean;
    grant_types?: boolean;
    client_name?: boolean;
    client_uri?: boolean;
    logo_uri?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    deleted_at?: boolean;
    client_type?: boolean;
    token_endpoint_auth_method?: boolean;
};
export type oauth_clientsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "client_secret_hash" | "registration_type" | "redirect_uris" | "grant_types" | "client_name" | "client_uri" | "logo_uri" | "created_at" | "updated_at" | "deleted_at" | "client_type" | "token_endpoint_auth_method", ExtArgs["result"]["oauth_clients"]>;
export type oauth_clientsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    oauth_authorizations?: boolean | Prisma.oauth_clients$oauth_authorizationsArgs<ExtArgs>;
    oauth_consents?: boolean | Prisma.oauth_clients$oauth_consentsArgs<ExtArgs>;
    sessions?: boolean | Prisma.oauth_clients$sessionsArgs<ExtArgs>;
    _count?: boolean | Prisma.Oauth_clientsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type oauth_clientsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type oauth_clientsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $oauth_clientsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "oauth_clients";
    objects: {
        oauth_authorizations: Prisma.$oauth_authorizationsPayload<ExtArgs>[];
        oauth_consents: Prisma.$oauth_consentsPayload<ExtArgs>[];
        sessions: Prisma.$sessionsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        client_secret_hash: string | null;
        registration_type: $Enums.oauth_registration_type;
        redirect_uris: string;
        grant_types: string;
        client_name: string | null;
        client_uri: string | null;
        logo_uri: string | null;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
        client_type: $Enums.oauth_client_type;
        token_endpoint_auth_method: string;
    }, ExtArgs["result"]["oauth_clients"]>;
    composites: {};
};
export type oauth_clientsGetPayload<S extends boolean | null | undefined | oauth_clientsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$oauth_clientsPayload, S>;
export type oauth_clientsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<oauth_clientsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Oauth_clientsCountAggregateInputType | true;
};
export interface oauth_clientsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['oauth_clients'];
        meta: {
            name: 'oauth_clients';
        };
    };
    findUnique<T extends oauth_clientsFindUniqueArgs>(args: Prisma.SelectSubset<T, oauth_clientsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__oauth_clientsClient<runtime.Types.Result.GetResult<Prisma.$oauth_clientsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends oauth_clientsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, oauth_clientsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__oauth_clientsClient<runtime.Types.Result.GetResult<Prisma.$oauth_clientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends oauth_clientsFindFirstArgs>(args?: Prisma.SelectSubset<T, oauth_clientsFindFirstArgs<ExtArgs>>): Prisma.Prisma__oauth_clientsClient<runtime.Types.Result.GetResult<Prisma.$oauth_clientsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends oauth_clientsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, oauth_clientsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__oauth_clientsClient<runtime.Types.Result.GetResult<Prisma.$oauth_clientsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends oauth_clientsFindManyArgs>(args?: Prisma.SelectSubset<T, oauth_clientsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$oauth_clientsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends oauth_clientsCreateArgs>(args: Prisma.SelectSubset<T, oauth_clientsCreateArgs<ExtArgs>>): Prisma.Prisma__oauth_clientsClient<runtime.Types.Result.GetResult<Prisma.$oauth_clientsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends oauth_clientsCreateManyArgs>(args?: Prisma.SelectSubset<T, oauth_clientsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends oauth_clientsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, oauth_clientsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$oauth_clientsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends oauth_clientsDeleteArgs>(args: Prisma.SelectSubset<T, oauth_clientsDeleteArgs<ExtArgs>>): Prisma.Prisma__oauth_clientsClient<runtime.Types.Result.GetResult<Prisma.$oauth_clientsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends oauth_clientsUpdateArgs>(args: Prisma.SelectSubset<T, oauth_clientsUpdateArgs<ExtArgs>>): Prisma.Prisma__oauth_clientsClient<runtime.Types.Result.GetResult<Prisma.$oauth_clientsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends oauth_clientsDeleteManyArgs>(args?: Prisma.SelectSubset<T, oauth_clientsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends oauth_clientsUpdateManyArgs>(args: Prisma.SelectSubset<T, oauth_clientsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends oauth_clientsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, oauth_clientsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$oauth_clientsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends oauth_clientsUpsertArgs>(args: Prisma.SelectSubset<T, oauth_clientsUpsertArgs<ExtArgs>>): Prisma.Prisma__oauth_clientsClient<runtime.Types.Result.GetResult<Prisma.$oauth_clientsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends oauth_clientsCountArgs>(args?: Prisma.Subset<T, oauth_clientsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Oauth_clientsCountAggregateOutputType> : number>;
    aggregate<T extends Oauth_clientsAggregateArgs>(args: Prisma.Subset<T, Oauth_clientsAggregateArgs>): Prisma.PrismaPromise<GetOauth_clientsAggregateType<T>>;
    groupBy<T extends oauth_clientsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: oauth_clientsGroupByArgs['orderBy'];
    } : {
        orderBy?: oauth_clientsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, oauth_clientsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOauth_clientsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: oauth_clientsFieldRefs;
}
export interface Prisma__oauth_clientsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    oauth_authorizations<T extends Prisma.oauth_clients$oauth_authorizationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.oauth_clients$oauth_authorizationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$oauth_authorizationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    oauth_consents<T extends Prisma.oauth_clients$oauth_consentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.oauth_clients$oauth_consentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$oauth_consentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    sessions<T extends Prisma.oauth_clients$sessionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.oauth_clients$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface oauth_clientsFieldRefs {
    readonly id: Prisma.FieldRef<"oauth_clients", 'String'>;
    readonly client_secret_hash: Prisma.FieldRef<"oauth_clients", 'String'>;
    readonly registration_type: Prisma.FieldRef<"oauth_clients", 'oauth_registration_type'>;
    readonly redirect_uris: Prisma.FieldRef<"oauth_clients", 'String'>;
    readonly grant_types: Prisma.FieldRef<"oauth_clients", 'String'>;
    readonly client_name: Prisma.FieldRef<"oauth_clients", 'String'>;
    readonly client_uri: Prisma.FieldRef<"oauth_clients", 'String'>;
    readonly logo_uri: Prisma.FieldRef<"oauth_clients", 'String'>;
    readonly created_at: Prisma.FieldRef<"oauth_clients", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"oauth_clients", 'DateTime'>;
    readonly deleted_at: Prisma.FieldRef<"oauth_clients", 'DateTime'>;
    readonly client_type: Prisma.FieldRef<"oauth_clients", 'oauth_client_type'>;
    readonly token_endpoint_auth_method: Prisma.FieldRef<"oauth_clients", 'String'>;
}
export type oauth_clientsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.oauth_clientsSelect<ExtArgs> | null;
    omit?: Prisma.oauth_clientsOmit<ExtArgs> | null;
    include?: Prisma.oauth_clientsInclude<ExtArgs> | null;
    where: Prisma.oauth_clientsWhereUniqueInput;
};
export type oauth_clientsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.oauth_clientsSelect<ExtArgs> | null;
    omit?: Prisma.oauth_clientsOmit<ExtArgs> | null;
    include?: Prisma.oauth_clientsInclude<ExtArgs> | null;
    where: Prisma.oauth_clientsWhereUniqueInput;
};
export type oauth_clientsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.oauth_clientsSelect<ExtArgs> | null;
    omit?: Prisma.oauth_clientsOmit<ExtArgs> | null;
    include?: Prisma.oauth_clientsInclude<ExtArgs> | null;
    where?: Prisma.oauth_clientsWhereInput;
    orderBy?: Prisma.oauth_clientsOrderByWithRelationInput | Prisma.oauth_clientsOrderByWithRelationInput[];
    cursor?: Prisma.oauth_clientsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Oauth_clientsScalarFieldEnum | Prisma.Oauth_clientsScalarFieldEnum[];
};
export type oauth_clientsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.oauth_clientsSelect<ExtArgs> | null;
    omit?: Prisma.oauth_clientsOmit<ExtArgs> | null;
    include?: Prisma.oauth_clientsInclude<ExtArgs> | null;
    where?: Prisma.oauth_clientsWhereInput;
    orderBy?: Prisma.oauth_clientsOrderByWithRelationInput | Prisma.oauth_clientsOrderByWithRelationInput[];
    cursor?: Prisma.oauth_clientsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Oauth_clientsScalarFieldEnum | Prisma.Oauth_clientsScalarFieldEnum[];
};
export type oauth_clientsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.oauth_clientsSelect<ExtArgs> | null;
    omit?: Prisma.oauth_clientsOmit<ExtArgs> | null;
    include?: Prisma.oauth_clientsInclude<ExtArgs> | null;
    where?: Prisma.oauth_clientsWhereInput;
    orderBy?: Prisma.oauth_clientsOrderByWithRelationInput | Prisma.oauth_clientsOrderByWithRelationInput[];
    cursor?: Prisma.oauth_clientsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Oauth_clientsScalarFieldEnum | Prisma.Oauth_clientsScalarFieldEnum[];
};
export type oauth_clientsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.oauth_clientsSelect<ExtArgs> | null;
    omit?: Prisma.oauth_clientsOmit<ExtArgs> | null;
    include?: Prisma.oauth_clientsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.oauth_clientsCreateInput, Prisma.oauth_clientsUncheckedCreateInput>;
};
export type oauth_clientsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.oauth_clientsCreateManyInput | Prisma.oauth_clientsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type oauth_clientsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.oauth_clientsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.oauth_clientsOmit<ExtArgs> | null;
    data: Prisma.oauth_clientsCreateManyInput | Prisma.oauth_clientsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type oauth_clientsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.oauth_clientsSelect<ExtArgs> | null;
    omit?: Prisma.oauth_clientsOmit<ExtArgs> | null;
    include?: Prisma.oauth_clientsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.oauth_clientsUpdateInput, Prisma.oauth_clientsUncheckedUpdateInput>;
    where: Prisma.oauth_clientsWhereUniqueInput;
};
export type oauth_clientsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.oauth_clientsUpdateManyMutationInput, Prisma.oauth_clientsUncheckedUpdateManyInput>;
    where?: Prisma.oauth_clientsWhereInput;
    limit?: number;
};
export type oauth_clientsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.oauth_clientsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.oauth_clientsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.oauth_clientsUpdateManyMutationInput, Prisma.oauth_clientsUncheckedUpdateManyInput>;
    where?: Prisma.oauth_clientsWhereInput;
    limit?: number;
};
export type oauth_clientsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.oauth_clientsSelect<ExtArgs> | null;
    omit?: Prisma.oauth_clientsOmit<ExtArgs> | null;
    include?: Prisma.oauth_clientsInclude<ExtArgs> | null;
    where: Prisma.oauth_clientsWhereUniqueInput;
    create: Prisma.XOR<Prisma.oauth_clientsCreateInput, Prisma.oauth_clientsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.oauth_clientsUpdateInput, Prisma.oauth_clientsUncheckedUpdateInput>;
};
export type oauth_clientsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.oauth_clientsSelect<ExtArgs> | null;
    omit?: Prisma.oauth_clientsOmit<ExtArgs> | null;
    include?: Prisma.oauth_clientsInclude<ExtArgs> | null;
    where: Prisma.oauth_clientsWhereUniqueInput;
};
export type oauth_clientsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.oauth_clientsWhereInput;
    limit?: number;
};
export type oauth_clients$oauth_authorizationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.oauth_authorizationsSelect<ExtArgs> | null;
    omit?: Prisma.oauth_authorizationsOmit<ExtArgs> | null;
    include?: Prisma.oauth_authorizationsInclude<ExtArgs> | null;
    where?: Prisma.oauth_authorizationsWhereInput;
    orderBy?: Prisma.oauth_authorizationsOrderByWithRelationInput | Prisma.oauth_authorizationsOrderByWithRelationInput[];
    cursor?: Prisma.oauth_authorizationsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Oauth_authorizationsScalarFieldEnum | Prisma.Oauth_authorizationsScalarFieldEnum[];
};
export type oauth_clients$oauth_consentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type oauth_clients$sessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.sessionsSelect<ExtArgs> | null;
    omit?: Prisma.sessionsOmit<ExtArgs> | null;
    include?: Prisma.sessionsInclude<ExtArgs> | null;
    where?: Prisma.sessionsWhereInput;
    orderBy?: Prisma.sessionsOrderByWithRelationInput | Prisma.sessionsOrderByWithRelationInput[];
    cursor?: Prisma.sessionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SessionsScalarFieldEnum | Prisma.SessionsScalarFieldEnum[];
};
export type oauth_clientsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.oauth_clientsSelect<ExtArgs> | null;
    omit?: Prisma.oauth_clientsOmit<ExtArgs> | null;
    include?: Prisma.oauth_clientsInclude<ExtArgs> | null;
};
