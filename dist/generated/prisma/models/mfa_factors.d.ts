import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type mfa_factorsModel = runtime.Types.Result.DefaultSelection<Prisma.$mfa_factorsPayload>;
export type AggregateMfa_factors = {
    _count: Mfa_factorsCountAggregateOutputType | null;
    _min: Mfa_factorsMinAggregateOutputType | null;
    _max: Mfa_factorsMaxAggregateOutputType | null;
};
export type Mfa_factorsMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    friendly_name: string | null;
    factor_type: $Enums.factor_type | null;
    status: $Enums.factor_status | null;
    created_at: Date | null;
    updated_at: Date | null;
    secret: string | null;
    phone: string | null;
    last_challenged_at: Date | null;
    web_authn_aaguid: string | null;
};
export type Mfa_factorsMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    friendly_name: string | null;
    factor_type: $Enums.factor_type | null;
    status: $Enums.factor_status | null;
    created_at: Date | null;
    updated_at: Date | null;
    secret: string | null;
    phone: string | null;
    last_challenged_at: Date | null;
    web_authn_aaguid: string | null;
};
export type Mfa_factorsCountAggregateOutputType = {
    id: number;
    user_id: number;
    friendly_name: number;
    factor_type: number;
    status: number;
    created_at: number;
    updated_at: number;
    secret: number;
    phone: number;
    last_challenged_at: number;
    web_authn_credential: number;
    web_authn_aaguid: number;
    last_webauthn_challenge_data: number;
    _all: number;
};
export type Mfa_factorsMinAggregateInputType = {
    id?: true;
    user_id?: true;
    friendly_name?: true;
    factor_type?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    secret?: true;
    phone?: true;
    last_challenged_at?: true;
    web_authn_aaguid?: true;
};
export type Mfa_factorsMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    friendly_name?: true;
    factor_type?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    secret?: true;
    phone?: true;
    last_challenged_at?: true;
    web_authn_aaguid?: true;
};
export type Mfa_factorsCountAggregateInputType = {
    id?: true;
    user_id?: true;
    friendly_name?: true;
    factor_type?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    secret?: true;
    phone?: true;
    last_challenged_at?: true;
    web_authn_credential?: true;
    web_authn_aaguid?: true;
    last_webauthn_challenge_data?: true;
    _all?: true;
};
export type Mfa_factorsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.mfa_factorsWhereInput;
    orderBy?: Prisma.mfa_factorsOrderByWithRelationInput | Prisma.mfa_factorsOrderByWithRelationInput[];
    cursor?: Prisma.mfa_factorsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Mfa_factorsCountAggregateInputType;
    _min?: Mfa_factorsMinAggregateInputType;
    _max?: Mfa_factorsMaxAggregateInputType;
};
export type GetMfa_factorsAggregateType<T extends Mfa_factorsAggregateArgs> = {
    [P in keyof T & keyof AggregateMfa_factors]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMfa_factors[P]> : Prisma.GetScalarType<T[P], AggregateMfa_factors[P]>;
};
export type mfa_factorsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.mfa_factorsWhereInput;
    orderBy?: Prisma.mfa_factorsOrderByWithAggregationInput | Prisma.mfa_factorsOrderByWithAggregationInput[];
    by: Prisma.Mfa_factorsScalarFieldEnum[] | Prisma.Mfa_factorsScalarFieldEnum;
    having?: Prisma.mfa_factorsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Mfa_factorsCountAggregateInputType | true;
    _min?: Mfa_factorsMinAggregateInputType;
    _max?: Mfa_factorsMaxAggregateInputType;
};
export type Mfa_factorsGroupByOutputType = {
    id: string;
    user_id: string;
    friendly_name: string | null;
    factor_type: $Enums.factor_type;
    status: $Enums.factor_status;
    created_at: Date;
    updated_at: Date;
    secret: string | null;
    phone: string | null;
    last_challenged_at: Date | null;
    web_authn_credential: runtime.JsonValue | null;
    web_authn_aaguid: string | null;
    last_webauthn_challenge_data: runtime.JsonValue | null;
    _count: Mfa_factorsCountAggregateOutputType | null;
    _min: Mfa_factorsMinAggregateOutputType | null;
    _max: Mfa_factorsMaxAggregateOutputType | null;
};
export type GetMfa_factorsGroupByPayload<T extends mfa_factorsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Mfa_factorsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Mfa_factorsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Mfa_factorsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Mfa_factorsGroupByOutputType[P]>;
}>>;
export type mfa_factorsWhereInput = {
    AND?: Prisma.mfa_factorsWhereInput | Prisma.mfa_factorsWhereInput[];
    OR?: Prisma.mfa_factorsWhereInput[];
    NOT?: Prisma.mfa_factorsWhereInput | Prisma.mfa_factorsWhereInput[];
    id?: Prisma.UuidFilter<"mfa_factors"> | string;
    user_id?: Prisma.UuidFilter<"mfa_factors"> | string;
    friendly_name?: Prisma.StringNullableFilter<"mfa_factors"> | string | null;
    factor_type?: Prisma.Enumfactor_typeFilter<"mfa_factors"> | $Enums.factor_type;
    status?: Prisma.Enumfactor_statusFilter<"mfa_factors"> | $Enums.factor_status;
    created_at?: Prisma.DateTimeFilter<"mfa_factors"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"mfa_factors"> | Date | string;
    secret?: Prisma.StringNullableFilter<"mfa_factors"> | string | null;
    phone?: Prisma.StringNullableFilter<"mfa_factors"> | string | null;
    last_challenged_at?: Prisma.DateTimeNullableFilter<"mfa_factors"> | Date | string | null;
    web_authn_credential?: Prisma.JsonNullableFilter<"mfa_factors">;
    web_authn_aaguid?: Prisma.UuidNullableFilter<"mfa_factors"> | string | null;
    last_webauthn_challenge_data?: Prisma.JsonNullableFilter<"mfa_factors">;
    mfa_challenges?: Prisma.Mfa_challengesListRelationFilter;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
};
export type mfa_factorsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    friendly_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    factor_type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    secret?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    last_challenged_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    web_authn_credential?: Prisma.SortOrderInput | Prisma.SortOrder;
    web_authn_aaguid?: Prisma.SortOrderInput | Prisma.SortOrder;
    last_webauthn_challenge_data?: Prisma.SortOrderInput | Prisma.SortOrder;
    mfa_challenges?: Prisma.mfa_challengesOrderByRelationAggregateInput;
    users?: Prisma.usersOrderByWithRelationInput;
};
export type mfa_factorsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    last_challenged_at?: Date | string;
    friendly_name_user_id?: Prisma.mfa_factorsFriendly_nameUser_idCompoundUniqueInput;
    user_id_phone?: Prisma.mfa_factorsUser_idPhoneCompoundUniqueInput;
    AND?: Prisma.mfa_factorsWhereInput | Prisma.mfa_factorsWhereInput[];
    OR?: Prisma.mfa_factorsWhereInput[];
    NOT?: Prisma.mfa_factorsWhereInput | Prisma.mfa_factorsWhereInput[];
    user_id?: Prisma.UuidFilter<"mfa_factors"> | string;
    friendly_name?: Prisma.StringNullableFilter<"mfa_factors"> | string | null;
    factor_type?: Prisma.Enumfactor_typeFilter<"mfa_factors"> | $Enums.factor_type;
    status?: Prisma.Enumfactor_statusFilter<"mfa_factors"> | $Enums.factor_status;
    created_at?: Prisma.DateTimeFilter<"mfa_factors"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"mfa_factors"> | Date | string;
    secret?: Prisma.StringNullableFilter<"mfa_factors"> | string | null;
    phone?: Prisma.StringNullableFilter<"mfa_factors"> | string | null;
    web_authn_credential?: Prisma.JsonNullableFilter<"mfa_factors">;
    web_authn_aaguid?: Prisma.UuidNullableFilter<"mfa_factors"> | string | null;
    last_webauthn_challenge_data?: Prisma.JsonNullableFilter<"mfa_factors">;
    mfa_challenges?: Prisma.Mfa_challengesListRelationFilter;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
}, "id" | "last_challenged_at" | "friendly_name_user_id" | "user_id_phone">;
export type mfa_factorsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    friendly_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    factor_type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    secret?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    last_challenged_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    web_authn_credential?: Prisma.SortOrderInput | Prisma.SortOrder;
    web_authn_aaguid?: Prisma.SortOrderInput | Prisma.SortOrder;
    last_webauthn_challenge_data?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.mfa_factorsCountOrderByAggregateInput;
    _max?: Prisma.mfa_factorsMaxOrderByAggregateInput;
    _min?: Prisma.mfa_factorsMinOrderByAggregateInput;
};
export type mfa_factorsScalarWhereWithAggregatesInput = {
    AND?: Prisma.mfa_factorsScalarWhereWithAggregatesInput | Prisma.mfa_factorsScalarWhereWithAggregatesInput[];
    OR?: Prisma.mfa_factorsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.mfa_factorsScalarWhereWithAggregatesInput | Prisma.mfa_factorsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"mfa_factors"> | string;
    user_id?: Prisma.UuidWithAggregatesFilter<"mfa_factors"> | string;
    friendly_name?: Prisma.StringNullableWithAggregatesFilter<"mfa_factors"> | string | null;
    factor_type?: Prisma.Enumfactor_typeWithAggregatesFilter<"mfa_factors"> | $Enums.factor_type;
    status?: Prisma.Enumfactor_statusWithAggregatesFilter<"mfa_factors"> | $Enums.factor_status;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"mfa_factors"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"mfa_factors"> | Date | string;
    secret?: Prisma.StringNullableWithAggregatesFilter<"mfa_factors"> | string | null;
    phone?: Prisma.StringNullableWithAggregatesFilter<"mfa_factors"> | string | null;
    last_challenged_at?: Prisma.DateTimeNullableWithAggregatesFilter<"mfa_factors"> | Date | string | null;
    web_authn_credential?: Prisma.JsonNullableWithAggregatesFilter<"mfa_factors">;
    web_authn_aaguid?: Prisma.UuidNullableWithAggregatesFilter<"mfa_factors"> | string | null;
    last_webauthn_challenge_data?: Prisma.JsonNullableWithAggregatesFilter<"mfa_factors">;
};
export type mfa_factorsCreateInput = {
    id: string;
    friendly_name?: string | null;
    factor_type: $Enums.factor_type;
    status: $Enums.factor_status;
    created_at: Date | string;
    updated_at: Date | string;
    secret?: string | null;
    phone?: string | null;
    last_challenged_at?: Date | string | null;
    web_authn_credential?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    web_authn_aaguid?: string | null;
    last_webauthn_challenge_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    mfa_challenges?: Prisma.mfa_challengesCreateNestedManyWithoutMfa_factorsInput;
    users: Prisma.usersCreateNestedOneWithoutMfa_factorsInput;
};
export type mfa_factorsUncheckedCreateInput = {
    id: string;
    user_id: string;
    friendly_name?: string | null;
    factor_type: $Enums.factor_type;
    status: $Enums.factor_status;
    created_at: Date | string;
    updated_at: Date | string;
    secret?: string | null;
    phone?: string | null;
    last_challenged_at?: Date | string | null;
    web_authn_credential?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    web_authn_aaguid?: string | null;
    last_webauthn_challenge_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    mfa_challenges?: Prisma.mfa_challengesUncheckedCreateNestedManyWithoutMfa_factorsInput;
};
export type mfa_factorsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    friendly_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    factor_type?: Prisma.Enumfactor_typeFieldUpdateOperationsInput | $Enums.factor_type;
    status?: Prisma.Enumfactor_statusFieldUpdateOperationsInput | $Enums.factor_status;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    secret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    last_challenged_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    web_authn_credential?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    web_authn_aaguid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    last_webauthn_challenge_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    mfa_challenges?: Prisma.mfa_challengesUpdateManyWithoutMfa_factorsNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutMfa_factorsNestedInput;
};
export type mfa_factorsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    friendly_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    factor_type?: Prisma.Enumfactor_typeFieldUpdateOperationsInput | $Enums.factor_type;
    status?: Prisma.Enumfactor_statusFieldUpdateOperationsInput | $Enums.factor_status;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    secret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    last_challenged_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    web_authn_credential?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    web_authn_aaguid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    last_webauthn_challenge_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    mfa_challenges?: Prisma.mfa_challengesUncheckedUpdateManyWithoutMfa_factorsNestedInput;
};
export type mfa_factorsCreateManyInput = {
    id: string;
    user_id: string;
    friendly_name?: string | null;
    factor_type: $Enums.factor_type;
    status: $Enums.factor_status;
    created_at: Date | string;
    updated_at: Date | string;
    secret?: string | null;
    phone?: string | null;
    last_challenged_at?: Date | string | null;
    web_authn_credential?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    web_authn_aaguid?: string | null;
    last_webauthn_challenge_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type mfa_factorsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    friendly_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    factor_type?: Prisma.Enumfactor_typeFieldUpdateOperationsInput | $Enums.factor_type;
    status?: Prisma.Enumfactor_statusFieldUpdateOperationsInput | $Enums.factor_status;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    secret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    last_challenged_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    web_authn_credential?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    web_authn_aaguid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    last_webauthn_challenge_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type mfa_factorsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    friendly_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    factor_type?: Prisma.Enumfactor_typeFieldUpdateOperationsInput | $Enums.factor_type;
    status?: Prisma.Enumfactor_statusFieldUpdateOperationsInput | $Enums.factor_status;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    secret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    last_challenged_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    web_authn_credential?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    web_authn_aaguid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    last_webauthn_challenge_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type Mfa_factorsScalarRelationFilter = {
    is?: Prisma.mfa_factorsWhereInput;
    isNot?: Prisma.mfa_factorsWhereInput;
};
export type mfa_factorsFriendly_nameUser_idCompoundUniqueInput = {
    friendly_name: string;
    user_id: string;
};
export type mfa_factorsUser_idPhoneCompoundUniqueInput = {
    user_id: string;
    phone: string;
};
export type mfa_factorsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    friendly_name?: Prisma.SortOrder;
    factor_type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    secret?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    last_challenged_at?: Prisma.SortOrder;
    web_authn_credential?: Prisma.SortOrder;
    web_authn_aaguid?: Prisma.SortOrder;
    last_webauthn_challenge_data?: Prisma.SortOrder;
};
export type mfa_factorsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    friendly_name?: Prisma.SortOrder;
    factor_type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    secret?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    last_challenged_at?: Prisma.SortOrder;
    web_authn_aaguid?: Prisma.SortOrder;
};
export type mfa_factorsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    friendly_name?: Prisma.SortOrder;
    factor_type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    secret?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    last_challenged_at?: Prisma.SortOrder;
    web_authn_aaguid?: Prisma.SortOrder;
};
export type Mfa_factorsListRelationFilter = {
    every?: Prisma.mfa_factorsWhereInput;
    some?: Prisma.mfa_factorsWhereInput;
    none?: Prisma.mfa_factorsWhereInput;
};
export type mfa_factorsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type mfa_factorsCreateNestedOneWithoutMfa_challengesInput = {
    create?: Prisma.XOR<Prisma.mfa_factorsCreateWithoutMfa_challengesInput, Prisma.mfa_factorsUncheckedCreateWithoutMfa_challengesInput>;
    connectOrCreate?: Prisma.mfa_factorsCreateOrConnectWithoutMfa_challengesInput;
    connect?: Prisma.mfa_factorsWhereUniqueInput;
};
export type mfa_factorsUpdateOneRequiredWithoutMfa_challengesNestedInput = {
    create?: Prisma.XOR<Prisma.mfa_factorsCreateWithoutMfa_challengesInput, Prisma.mfa_factorsUncheckedCreateWithoutMfa_challengesInput>;
    connectOrCreate?: Prisma.mfa_factorsCreateOrConnectWithoutMfa_challengesInput;
    upsert?: Prisma.mfa_factorsUpsertWithoutMfa_challengesInput;
    connect?: Prisma.mfa_factorsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.mfa_factorsUpdateToOneWithWhereWithoutMfa_challengesInput, Prisma.mfa_factorsUpdateWithoutMfa_challengesInput>, Prisma.mfa_factorsUncheckedUpdateWithoutMfa_challengesInput>;
};
export type Enumfactor_typeFieldUpdateOperationsInput = {
    set?: $Enums.factor_type;
};
export type Enumfactor_statusFieldUpdateOperationsInput = {
    set?: $Enums.factor_status;
};
export type mfa_factorsCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.mfa_factorsCreateWithoutUsersInput, Prisma.mfa_factorsUncheckedCreateWithoutUsersInput> | Prisma.mfa_factorsCreateWithoutUsersInput[] | Prisma.mfa_factorsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.mfa_factorsCreateOrConnectWithoutUsersInput | Prisma.mfa_factorsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.mfa_factorsCreateManyUsersInputEnvelope;
    connect?: Prisma.mfa_factorsWhereUniqueInput | Prisma.mfa_factorsWhereUniqueInput[];
};
export type mfa_factorsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.mfa_factorsCreateWithoutUsersInput, Prisma.mfa_factorsUncheckedCreateWithoutUsersInput> | Prisma.mfa_factorsCreateWithoutUsersInput[] | Prisma.mfa_factorsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.mfa_factorsCreateOrConnectWithoutUsersInput | Prisma.mfa_factorsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.mfa_factorsCreateManyUsersInputEnvelope;
    connect?: Prisma.mfa_factorsWhereUniqueInput | Prisma.mfa_factorsWhereUniqueInput[];
};
export type mfa_factorsUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.mfa_factorsCreateWithoutUsersInput, Prisma.mfa_factorsUncheckedCreateWithoutUsersInput> | Prisma.mfa_factorsCreateWithoutUsersInput[] | Prisma.mfa_factorsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.mfa_factorsCreateOrConnectWithoutUsersInput | Prisma.mfa_factorsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.mfa_factorsUpsertWithWhereUniqueWithoutUsersInput | Prisma.mfa_factorsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.mfa_factorsCreateManyUsersInputEnvelope;
    set?: Prisma.mfa_factorsWhereUniqueInput | Prisma.mfa_factorsWhereUniqueInput[];
    disconnect?: Prisma.mfa_factorsWhereUniqueInput | Prisma.mfa_factorsWhereUniqueInput[];
    delete?: Prisma.mfa_factorsWhereUniqueInput | Prisma.mfa_factorsWhereUniqueInput[];
    connect?: Prisma.mfa_factorsWhereUniqueInput | Prisma.mfa_factorsWhereUniqueInput[];
    update?: Prisma.mfa_factorsUpdateWithWhereUniqueWithoutUsersInput | Prisma.mfa_factorsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.mfa_factorsUpdateManyWithWhereWithoutUsersInput | Prisma.mfa_factorsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.mfa_factorsScalarWhereInput | Prisma.mfa_factorsScalarWhereInput[];
};
export type mfa_factorsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.mfa_factorsCreateWithoutUsersInput, Prisma.mfa_factorsUncheckedCreateWithoutUsersInput> | Prisma.mfa_factorsCreateWithoutUsersInput[] | Prisma.mfa_factorsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.mfa_factorsCreateOrConnectWithoutUsersInput | Prisma.mfa_factorsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.mfa_factorsUpsertWithWhereUniqueWithoutUsersInput | Prisma.mfa_factorsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.mfa_factorsCreateManyUsersInputEnvelope;
    set?: Prisma.mfa_factorsWhereUniqueInput | Prisma.mfa_factorsWhereUniqueInput[];
    disconnect?: Prisma.mfa_factorsWhereUniqueInput | Prisma.mfa_factorsWhereUniqueInput[];
    delete?: Prisma.mfa_factorsWhereUniqueInput | Prisma.mfa_factorsWhereUniqueInput[];
    connect?: Prisma.mfa_factorsWhereUniqueInput | Prisma.mfa_factorsWhereUniqueInput[];
    update?: Prisma.mfa_factorsUpdateWithWhereUniqueWithoutUsersInput | Prisma.mfa_factorsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.mfa_factorsUpdateManyWithWhereWithoutUsersInput | Prisma.mfa_factorsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.mfa_factorsScalarWhereInput | Prisma.mfa_factorsScalarWhereInput[];
};
export type mfa_factorsCreateWithoutMfa_challengesInput = {
    id: string;
    friendly_name?: string | null;
    factor_type: $Enums.factor_type;
    status: $Enums.factor_status;
    created_at: Date | string;
    updated_at: Date | string;
    secret?: string | null;
    phone?: string | null;
    last_challenged_at?: Date | string | null;
    web_authn_credential?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    web_authn_aaguid?: string | null;
    last_webauthn_challenge_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    users: Prisma.usersCreateNestedOneWithoutMfa_factorsInput;
};
export type mfa_factorsUncheckedCreateWithoutMfa_challengesInput = {
    id: string;
    user_id: string;
    friendly_name?: string | null;
    factor_type: $Enums.factor_type;
    status: $Enums.factor_status;
    created_at: Date | string;
    updated_at: Date | string;
    secret?: string | null;
    phone?: string | null;
    last_challenged_at?: Date | string | null;
    web_authn_credential?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    web_authn_aaguid?: string | null;
    last_webauthn_challenge_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type mfa_factorsCreateOrConnectWithoutMfa_challengesInput = {
    where: Prisma.mfa_factorsWhereUniqueInput;
    create: Prisma.XOR<Prisma.mfa_factorsCreateWithoutMfa_challengesInput, Prisma.mfa_factorsUncheckedCreateWithoutMfa_challengesInput>;
};
export type mfa_factorsUpsertWithoutMfa_challengesInput = {
    update: Prisma.XOR<Prisma.mfa_factorsUpdateWithoutMfa_challengesInput, Prisma.mfa_factorsUncheckedUpdateWithoutMfa_challengesInput>;
    create: Prisma.XOR<Prisma.mfa_factorsCreateWithoutMfa_challengesInput, Prisma.mfa_factorsUncheckedCreateWithoutMfa_challengesInput>;
    where?: Prisma.mfa_factorsWhereInput;
};
export type mfa_factorsUpdateToOneWithWhereWithoutMfa_challengesInput = {
    where?: Prisma.mfa_factorsWhereInput;
    data: Prisma.XOR<Prisma.mfa_factorsUpdateWithoutMfa_challengesInput, Prisma.mfa_factorsUncheckedUpdateWithoutMfa_challengesInput>;
};
export type mfa_factorsUpdateWithoutMfa_challengesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    friendly_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    factor_type?: Prisma.Enumfactor_typeFieldUpdateOperationsInput | $Enums.factor_type;
    status?: Prisma.Enumfactor_statusFieldUpdateOperationsInput | $Enums.factor_status;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    secret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    last_challenged_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    web_authn_credential?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    web_authn_aaguid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    last_webauthn_challenge_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    users?: Prisma.usersUpdateOneRequiredWithoutMfa_factorsNestedInput;
};
export type mfa_factorsUncheckedUpdateWithoutMfa_challengesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    friendly_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    factor_type?: Prisma.Enumfactor_typeFieldUpdateOperationsInput | $Enums.factor_type;
    status?: Prisma.Enumfactor_statusFieldUpdateOperationsInput | $Enums.factor_status;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    secret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    last_challenged_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    web_authn_credential?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    web_authn_aaguid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    last_webauthn_challenge_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type mfa_factorsCreateWithoutUsersInput = {
    id: string;
    friendly_name?: string | null;
    factor_type: $Enums.factor_type;
    status: $Enums.factor_status;
    created_at: Date | string;
    updated_at: Date | string;
    secret?: string | null;
    phone?: string | null;
    last_challenged_at?: Date | string | null;
    web_authn_credential?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    web_authn_aaguid?: string | null;
    last_webauthn_challenge_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    mfa_challenges?: Prisma.mfa_challengesCreateNestedManyWithoutMfa_factorsInput;
};
export type mfa_factorsUncheckedCreateWithoutUsersInput = {
    id: string;
    friendly_name?: string | null;
    factor_type: $Enums.factor_type;
    status: $Enums.factor_status;
    created_at: Date | string;
    updated_at: Date | string;
    secret?: string | null;
    phone?: string | null;
    last_challenged_at?: Date | string | null;
    web_authn_credential?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    web_authn_aaguid?: string | null;
    last_webauthn_challenge_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    mfa_challenges?: Prisma.mfa_challengesUncheckedCreateNestedManyWithoutMfa_factorsInput;
};
export type mfa_factorsCreateOrConnectWithoutUsersInput = {
    where: Prisma.mfa_factorsWhereUniqueInput;
    create: Prisma.XOR<Prisma.mfa_factorsCreateWithoutUsersInput, Prisma.mfa_factorsUncheckedCreateWithoutUsersInput>;
};
export type mfa_factorsCreateManyUsersInputEnvelope = {
    data: Prisma.mfa_factorsCreateManyUsersInput | Prisma.mfa_factorsCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type mfa_factorsUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.mfa_factorsWhereUniqueInput;
    update: Prisma.XOR<Prisma.mfa_factorsUpdateWithoutUsersInput, Prisma.mfa_factorsUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.mfa_factorsCreateWithoutUsersInput, Prisma.mfa_factorsUncheckedCreateWithoutUsersInput>;
};
export type mfa_factorsUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.mfa_factorsWhereUniqueInput;
    data: Prisma.XOR<Prisma.mfa_factorsUpdateWithoutUsersInput, Prisma.mfa_factorsUncheckedUpdateWithoutUsersInput>;
};
export type mfa_factorsUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.mfa_factorsScalarWhereInput;
    data: Prisma.XOR<Prisma.mfa_factorsUpdateManyMutationInput, Prisma.mfa_factorsUncheckedUpdateManyWithoutUsersInput>;
};
export type mfa_factorsScalarWhereInput = {
    AND?: Prisma.mfa_factorsScalarWhereInput | Prisma.mfa_factorsScalarWhereInput[];
    OR?: Prisma.mfa_factorsScalarWhereInput[];
    NOT?: Prisma.mfa_factorsScalarWhereInput | Prisma.mfa_factorsScalarWhereInput[];
    id?: Prisma.UuidFilter<"mfa_factors"> | string;
    user_id?: Prisma.UuidFilter<"mfa_factors"> | string;
    friendly_name?: Prisma.StringNullableFilter<"mfa_factors"> | string | null;
    factor_type?: Prisma.Enumfactor_typeFilter<"mfa_factors"> | $Enums.factor_type;
    status?: Prisma.Enumfactor_statusFilter<"mfa_factors"> | $Enums.factor_status;
    created_at?: Prisma.DateTimeFilter<"mfa_factors"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"mfa_factors"> | Date | string;
    secret?: Prisma.StringNullableFilter<"mfa_factors"> | string | null;
    phone?: Prisma.StringNullableFilter<"mfa_factors"> | string | null;
    last_challenged_at?: Prisma.DateTimeNullableFilter<"mfa_factors"> | Date | string | null;
    web_authn_credential?: Prisma.JsonNullableFilter<"mfa_factors">;
    web_authn_aaguid?: Prisma.UuidNullableFilter<"mfa_factors"> | string | null;
    last_webauthn_challenge_data?: Prisma.JsonNullableFilter<"mfa_factors">;
};
export type mfa_factorsCreateManyUsersInput = {
    id: string;
    friendly_name?: string | null;
    factor_type: $Enums.factor_type;
    status: $Enums.factor_status;
    created_at: Date | string;
    updated_at: Date | string;
    secret?: string | null;
    phone?: string | null;
    last_challenged_at?: Date | string | null;
    web_authn_credential?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    web_authn_aaguid?: string | null;
    last_webauthn_challenge_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type mfa_factorsUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    friendly_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    factor_type?: Prisma.Enumfactor_typeFieldUpdateOperationsInput | $Enums.factor_type;
    status?: Prisma.Enumfactor_statusFieldUpdateOperationsInput | $Enums.factor_status;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    secret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    last_challenged_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    web_authn_credential?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    web_authn_aaguid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    last_webauthn_challenge_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    mfa_challenges?: Prisma.mfa_challengesUpdateManyWithoutMfa_factorsNestedInput;
};
export type mfa_factorsUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    friendly_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    factor_type?: Prisma.Enumfactor_typeFieldUpdateOperationsInput | $Enums.factor_type;
    status?: Prisma.Enumfactor_statusFieldUpdateOperationsInput | $Enums.factor_status;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    secret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    last_challenged_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    web_authn_credential?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    web_authn_aaguid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    last_webauthn_challenge_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    mfa_challenges?: Prisma.mfa_challengesUncheckedUpdateManyWithoutMfa_factorsNestedInput;
};
export type mfa_factorsUncheckedUpdateManyWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    friendly_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    factor_type?: Prisma.Enumfactor_typeFieldUpdateOperationsInput | $Enums.factor_type;
    status?: Prisma.Enumfactor_statusFieldUpdateOperationsInput | $Enums.factor_status;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    secret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    last_challenged_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    web_authn_credential?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    web_authn_aaguid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    last_webauthn_challenge_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type Mfa_factorsCountOutputType = {
    mfa_challenges: number;
};
export type Mfa_factorsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    mfa_challenges?: boolean | Mfa_factorsCountOutputTypeCountMfa_challengesArgs;
};
export type Mfa_factorsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Mfa_factorsCountOutputTypeSelect<ExtArgs> | null;
};
export type Mfa_factorsCountOutputTypeCountMfa_challengesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.mfa_challengesWhereInput;
};
export type mfa_factorsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    friendly_name?: boolean;
    factor_type?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    secret?: boolean;
    phone?: boolean;
    last_challenged_at?: boolean;
    web_authn_credential?: boolean;
    web_authn_aaguid?: boolean;
    last_webauthn_challenge_data?: boolean;
    mfa_challenges?: boolean | Prisma.mfa_factors$mfa_challengesArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.Mfa_factorsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mfa_factors"]>;
export type mfa_factorsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    friendly_name?: boolean;
    factor_type?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    secret?: boolean;
    phone?: boolean;
    last_challenged_at?: boolean;
    web_authn_credential?: boolean;
    web_authn_aaguid?: boolean;
    last_webauthn_challenge_data?: boolean;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mfa_factors"]>;
export type mfa_factorsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    friendly_name?: boolean;
    factor_type?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    secret?: boolean;
    phone?: boolean;
    last_challenged_at?: boolean;
    web_authn_credential?: boolean;
    web_authn_aaguid?: boolean;
    last_webauthn_challenge_data?: boolean;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mfa_factors"]>;
export type mfa_factorsSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    friendly_name?: boolean;
    factor_type?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    secret?: boolean;
    phone?: boolean;
    last_challenged_at?: boolean;
    web_authn_credential?: boolean;
    web_authn_aaguid?: boolean;
    last_webauthn_challenge_data?: boolean;
};
export type mfa_factorsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "friendly_name" | "factor_type" | "status" | "created_at" | "updated_at" | "secret" | "phone" | "last_challenged_at" | "web_authn_credential" | "web_authn_aaguid" | "last_webauthn_challenge_data", ExtArgs["result"]["mfa_factors"]>;
export type mfa_factorsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    mfa_challenges?: boolean | Prisma.mfa_factors$mfa_challengesArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.Mfa_factorsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type mfa_factorsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type mfa_factorsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type $mfa_factorsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "mfa_factors";
    objects: {
        mfa_challenges: Prisma.$mfa_challengesPayload<ExtArgs>[];
        users: Prisma.$usersPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        user_id: string;
        friendly_name: string | null;
        factor_type: $Enums.factor_type;
        status: $Enums.factor_status;
        created_at: Date;
        updated_at: Date;
        secret: string | null;
        phone: string | null;
        last_challenged_at: Date | null;
        web_authn_credential: runtime.JsonValue | null;
        web_authn_aaguid: string | null;
        last_webauthn_challenge_data: runtime.JsonValue | null;
    }, ExtArgs["result"]["mfa_factors"]>;
    composites: {};
};
export type mfa_factorsGetPayload<S extends boolean | null | undefined | mfa_factorsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$mfa_factorsPayload, S>;
export type mfa_factorsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<mfa_factorsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Mfa_factorsCountAggregateInputType | true;
};
export interface mfa_factorsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['mfa_factors'];
        meta: {
            name: 'mfa_factors';
        };
    };
    findUnique<T extends mfa_factorsFindUniqueArgs>(args: Prisma.SelectSubset<T, mfa_factorsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__mfa_factorsClient<runtime.Types.Result.GetResult<Prisma.$mfa_factorsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends mfa_factorsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, mfa_factorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__mfa_factorsClient<runtime.Types.Result.GetResult<Prisma.$mfa_factorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends mfa_factorsFindFirstArgs>(args?: Prisma.SelectSubset<T, mfa_factorsFindFirstArgs<ExtArgs>>): Prisma.Prisma__mfa_factorsClient<runtime.Types.Result.GetResult<Prisma.$mfa_factorsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends mfa_factorsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, mfa_factorsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__mfa_factorsClient<runtime.Types.Result.GetResult<Prisma.$mfa_factorsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends mfa_factorsFindManyArgs>(args?: Prisma.SelectSubset<T, mfa_factorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$mfa_factorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends mfa_factorsCreateArgs>(args: Prisma.SelectSubset<T, mfa_factorsCreateArgs<ExtArgs>>): Prisma.Prisma__mfa_factorsClient<runtime.Types.Result.GetResult<Prisma.$mfa_factorsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends mfa_factorsCreateManyArgs>(args?: Prisma.SelectSubset<T, mfa_factorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends mfa_factorsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, mfa_factorsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$mfa_factorsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends mfa_factorsDeleteArgs>(args: Prisma.SelectSubset<T, mfa_factorsDeleteArgs<ExtArgs>>): Prisma.Prisma__mfa_factorsClient<runtime.Types.Result.GetResult<Prisma.$mfa_factorsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends mfa_factorsUpdateArgs>(args: Prisma.SelectSubset<T, mfa_factorsUpdateArgs<ExtArgs>>): Prisma.Prisma__mfa_factorsClient<runtime.Types.Result.GetResult<Prisma.$mfa_factorsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends mfa_factorsDeleteManyArgs>(args?: Prisma.SelectSubset<T, mfa_factorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends mfa_factorsUpdateManyArgs>(args: Prisma.SelectSubset<T, mfa_factorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends mfa_factorsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, mfa_factorsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$mfa_factorsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends mfa_factorsUpsertArgs>(args: Prisma.SelectSubset<T, mfa_factorsUpsertArgs<ExtArgs>>): Prisma.Prisma__mfa_factorsClient<runtime.Types.Result.GetResult<Prisma.$mfa_factorsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends mfa_factorsCountArgs>(args?: Prisma.Subset<T, mfa_factorsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Mfa_factorsCountAggregateOutputType> : number>;
    aggregate<T extends Mfa_factorsAggregateArgs>(args: Prisma.Subset<T, Mfa_factorsAggregateArgs>): Prisma.PrismaPromise<GetMfa_factorsAggregateType<T>>;
    groupBy<T extends mfa_factorsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: mfa_factorsGroupByArgs['orderBy'];
    } : {
        orderBy?: mfa_factorsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, mfa_factorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMfa_factorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: mfa_factorsFieldRefs;
}
export interface Prisma__mfa_factorsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    mfa_challenges<T extends Prisma.mfa_factors$mfa_challengesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.mfa_factors$mfa_challengesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$mfa_challengesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    users<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface mfa_factorsFieldRefs {
    readonly id: Prisma.FieldRef<"mfa_factors", 'String'>;
    readonly user_id: Prisma.FieldRef<"mfa_factors", 'String'>;
    readonly friendly_name: Prisma.FieldRef<"mfa_factors", 'String'>;
    readonly factor_type: Prisma.FieldRef<"mfa_factors", 'factor_type'>;
    readonly status: Prisma.FieldRef<"mfa_factors", 'factor_status'>;
    readonly created_at: Prisma.FieldRef<"mfa_factors", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"mfa_factors", 'DateTime'>;
    readonly secret: Prisma.FieldRef<"mfa_factors", 'String'>;
    readonly phone: Prisma.FieldRef<"mfa_factors", 'String'>;
    readonly last_challenged_at: Prisma.FieldRef<"mfa_factors", 'DateTime'>;
    readonly web_authn_credential: Prisma.FieldRef<"mfa_factors", 'Json'>;
    readonly web_authn_aaguid: Prisma.FieldRef<"mfa_factors", 'String'>;
    readonly last_webauthn_challenge_data: Prisma.FieldRef<"mfa_factors", 'Json'>;
}
export type mfa_factorsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mfa_factorsSelect<ExtArgs> | null;
    omit?: Prisma.mfa_factorsOmit<ExtArgs> | null;
    include?: Prisma.mfa_factorsInclude<ExtArgs> | null;
    where: Prisma.mfa_factorsWhereUniqueInput;
};
export type mfa_factorsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mfa_factorsSelect<ExtArgs> | null;
    omit?: Prisma.mfa_factorsOmit<ExtArgs> | null;
    include?: Prisma.mfa_factorsInclude<ExtArgs> | null;
    where: Prisma.mfa_factorsWhereUniqueInput;
};
export type mfa_factorsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mfa_factorsSelect<ExtArgs> | null;
    omit?: Prisma.mfa_factorsOmit<ExtArgs> | null;
    include?: Prisma.mfa_factorsInclude<ExtArgs> | null;
    where?: Prisma.mfa_factorsWhereInput;
    orderBy?: Prisma.mfa_factorsOrderByWithRelationInput | Prisma.mfa_factorsOrderByWithRelationInput[];
    cursor?: Prisma.mfa_factorsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Mfa_factorsScalarFieldEnum | Prisma.Mfa_factorsScalarFieldEnum[];
};
export type mfa_factorsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mfa_factorsSelect<ExtArgs> | null;
    omit?: Prisma.mfa_factorsOmit<ExtArgs> | null;
    include?: Prisma.mfa_factorsInclude<ExtArgs> | null;
    where?: Prisma.mfa_factorsWhereInput;
    orderBy?: Prisma.mfa_factorsOrderByWithRelationInput | Prisma.mfa_factorsOrderByWithRelationInput[];
    cursor?: Prisma.mfa_factorsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Mfa_factorsScalarFieldEnum | Prisma.Mfa_factorsScalarFieldEnum[];
};
export type mfa_factorsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mfa_factorsSelect<ExtArgs> | null;
    omit?: Prisma.mfa_factorsOmit<ExtArgs> | null;
    include?: Prisma.mfa_factorsInclude<ExtArgs> | null;
    where?: Prisma.mfa_factorsWhereInput;
    orderBy?: Prisma.mfa_factorsOrderByWithRelationInput | Prisma.mfa_factorsOrderByWithRelationInput[];
    cursor?: Prisma.mfa_factorsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Mfa_factorsScalarFieldEnum | Prisma.Mfa_factorsScalarFieldEnum[];
};
export type mfa_factorsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mfa_factorsSelect<ExtArgs> | null;
    omit?: Prisma.mfa_factorsOmit<ExtArgs> | null;
    include?: Prisma.mfa_factorsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.mfa_factorsCreateInput, Prisma.mfa_factorsUncheckedCreateInput>;
};
export type mfa_factorsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.mfa_factorsCreateManyInput | Prisma.mfa_factorsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type mfa_factorsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mfa_factorsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.mfa_factorsOmit<ExtArgs> | null;
    data: Prisma.mfa_factorsCreateManyInput | Prisma.mfa_factorsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.mfa_factorsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type mfa_factorsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mfa_factorsSelect<ExtArgs> | null;
    omit?: Prisma.mfa_factorsOmit<ExtArgs> | null;
    include?: Prisma.mfa_factorsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.mfa_factorsUpdateInput, Prisma.mfa_factorsUncheckedUpdateInput>;
    where: Prisma.mfa_factorsWhereUniqueInput;
};
export type mfa_factorsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.mfa_factorsUpdateManyMutationInput, Prisma.mfa_factorsUncheckedUpdateManyInput>;
    where?: Prisma.mfa_factorsWhereInput;
    limit?: number;
};
export type mfa_factorsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mfa_factorsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.mfa_factorsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.mfa_factorsUpdateManyMutationInput, Prisma.mfa_factorsUncheckedUpdateManyInput>;
    where?: Prisma.mfa_factorsWhereInput;
    limit?: number;
    include?: Prisma.mfa_factorsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type mfa_factorsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mfa_factorsSelect<ExtArgs> | null;
    omit?: Prisma.mfa_factorsOmit<ExtArgs> | null;
    include?: Prisma.mfa_factorsInclude<ExtArgs> | null;
    where: Prisma.mfa_factorsWhereUniqueInput;
    create: Prisma.XOR<Prisma.mfa_factorsCreateInput, Prisma.mfa_factorsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.mfa_factorsUpdateInput, Prisma.mfa_factorsUncheckedUpdateInput>;
};
export type mfa_factorsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mfa_factorsSelect<ExtArgs> | null;
    omit?: Prisma.mfa_factorsOmit<ExtArgs> | null;
    include?: Prisma.mfa_factorsInclude<ExtArgs> | null;
    where: Prisma.mfa_factorsWhereUniqueInput;
};
export type mfa_factorsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.mfa_factorsWhereInput;
    limit?: number;
};
export type mfa_factors$mfa_challengesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mfa_challengesSelect<ExtArgs> | null;
    omit?: Prisma.mfa_challengesOmit<ExtArgs> | null;
    include?: Prisma.mfa_challengesInclude<ExtArgs> | null;
    where?: Prisma.mfa_challengesWhereInput;
    orderBy?: Prisma.mfa_challengesOrderByWithRelationInput | Prisma.mfa_challengesOrderByWithRelationInput[];
    cursor?: Prisma.mfa_challengesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Mfa_challengesScalarFieldEnum | Prisma.Mfa_challengesScalarFieldEnum[];
};
export type mfa_factorsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mfa_factorsSelect<ExtArgs> | null;
    omit?: Prisma.mfa_factorsOmit<ExtArgs> | null;
    include?: Prisma.mfa_factorsInclude<ExtArgs> | null;
};
