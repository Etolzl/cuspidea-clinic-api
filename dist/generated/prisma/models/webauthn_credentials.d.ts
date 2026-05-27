import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type webauthn_credentialsModel = runtime.Types.Result.DefaultSelection<Prisma.$webauthn_credentialsPayload>;
export type AggregateWebauthn_credentials = {
    _count: Webauthn_credentialsCountAggregateOutputType | null;
    _avg: Webauthn_credentialsAvgAggregateOutputType | null;
    _sum: Webauthn_credentialsSumAggregateOutputType | null;
    _min: Webauthn_credentialsMinAggregateOutputType | null;
    _max: Webauthn_credentialsMaxAggregateOutputType | null;
};
export type Webauthn_credentialsAvgAggregateOutputType = {
    sign_count: number | null;
};
export type Webauthn_credentialsSumAggregateOutputType = {
    sign_count: bigint | null;
};
export type Webauthn_credentialsMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    credential_id: runtime.Bytes | null;
    public_key: runtime.Bytes | null;
    attestation_type: string | null;
    aaguid: string | null;
    sign_count: bigint | null;
    backup_eligible: boolean | null;
    backed_up: boolean | null;
    friendly_name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    last_used_at: Date | null;
};
export type Webauthn_credentialsMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    credential_id: runtime.Bytes | null;
    public_key: runtime.Bytes | null;
    attestation_type: string | null;
    aaguid: string | null;
    sign_count: bigint | null;
    backup_eligible: boolean | null;
    backed_up: boolean | null;
    friendly_name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    last_used_at: Date | null;
};
export type Webauthn_credentialsCountAggregateOutputType = {
    id: number;
    user_id: number;
    credential_id: number;
    public_key: number;
    attestation_type: number;
    aaguid: number;
    sign_count: number;
    transports: number;
    backup_eligible: number;
    backed_up: number;
    friendly_name: number;
    created_at: number;
    updated_at: number;
    last_used_at: number;
    _all: number;
};
export type Webauthn_credentialsAvgAggregateInputType = {
    sign_count?: true;
};
export type Webauthn_credentialsSumAggregateInputType = {
    sign_count?: true;
};
export type Webauthn_credentialsMinAggregateInputType = {
    id?: true;
    user_id?: true;
    credential_id?: true;
    public_key?: true;
    attestation_type?: true;
    aaguid?: true;
    sign_count?: true;
    backup_eligible?: true;
    backed_up?: true;
    friendly_name?: true;
    created_at?: true;
    updated_at?: true;
    last_used_at?: true;
};
export type Webauthn_credentialsMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    credential_id?: true;
    public_key?: true;
    attestation_type?: true;
    aaguid?: true;
    sign_count?: true;
    backup_eligible?: true;
    backed_up?: true;
    friendly_name?: true;
    created_at?: true;
    updated_at?: true;
    last_used_at?: true;
};
export type Webauthn_credentialsCountAggregateInputType = {
    id?: true;
    user_id?: true;
    credential_id?: true;
    public_key?: true;
    attestation_type?: true;
    aaguid?: true;
    sign_count?: true;
    transports?: true;
    backup_eligible?: true;
    backed_up?: true;
    friendly_name?: true;
    created_at?: true;
    updated_at?: true;
    last_used_at?: true;
    _all?: true;
};
export type Webauthn_credentialsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.webauthn_credentialsWhereInput;
    orderBy?: Prisma.webauthn_credentialsOrderByWithRelationInput | Prisma.webauthn_credentialsOrderByWithRelationInput[];
    cursor?: Prisma.webauthn_credentialsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Webauthn_credentialsCountAggregateInputType;
    _avg?: Webauthn_credentialsAvgAggregateInputType;
    _sum?: Webauthn_credentialsSumAggregateInputType;
    _min?: Webauthn_credentialsMinAggregateInputType;
    _max?: Webauthn_credentialsMaxAggregateInputType;
};
export type GetWebauthn_credentialsAggregateType<T extends Webauthn_credentialsAggregateArgs> = {
    [P in keyof T & keyof AggregateWebauthn_credentials]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWebauthn_credentials[P]> : Prisma.GetScalarType<T[P], AggregateWebauthn_credentials[P]>;
};
export type webauthn_credentialsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.webauthn_credentialsWhereInput;
    orderBy?: Prisma.webauthn_credentialsOrderByWithAggregationInput | Prisma.webauthn_credentialsOrderByWithAggregationInput[];
    by: Prisma.Webauthn_credentialsScalarFieldEnum[] | Prisma.Webauthn_credentialsScalarFieldEnum;
    having?: Prisma.webauthn_credentialsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Webauthn_credentialsCountAggregateInputType | true;
    _avg?: Webauthn_credentialsAvgAggregateInputType;
    _sum?: Webauthn_credentialsSumAggregateInputType;
    _min?: Webauthn_credentialsMinAggregateInputType;
    _max?: Webauthn_credentialsMaxAggregateInputType;
};
export type Webauthn_credentialsGroupByOutputType = {
    id: string;
    user_id: string;
    credential_id: runtime.Bytes;
    public_key: runtime.Bytes;
    attestation_type: string;
    aaguid: string | null;
    sign_count: bigint;
    transports: runtime.JsonValue;
    backup_eligible: boolean;
    backed_up: boolean;
    friendly_name: string;
    created_at: Date;
    updated_at: Date;
    last_used_at: Date | null;
    _count: Webauthn_credentialsCountAggregateOutputType | null;
    _avg: Webauthn_credentialsAvgAggregateOutputType | null;
    _sum: Webauthn_credentialsSumAggregateOutputType | null;
    _min: Webauthn_credentialsMinAggregateOutputType | null;
    _max: Webauthn_credentialsMaxAggregateOutputType | null;
};
export type GetWebauthn_credentialsGroupByPayload<T extends webauthn_credentialsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Webauthn_credentialsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Webauthn_credentialsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Webauthn_credentialsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Webauthn_credentialsGroupByOutputType[P]>;
}>>;
export type webauthn_credentialsWhereInput = {
    AND?: Prisma.webauthn_credentialsWhereInput | Prisma.webauthn_credentialsWhereInput[];
    OR?: Prisma.webauthn_credentialsWhereInput[];
    NOT?: Prisma.webauthn_credentialsWhereInput | Prisma.webauthn_credentialsWhereInput[];
    id?: Prisma.UuidFilter<"webauthn_credentials"> | string;
    user_id?: Prisma.UuidFilter<"webauthn_credentials"> | string;
    credential_id?: Prisma.BytesFilter<"webauthn_credentials"> | runtime.Bytes;
    public_key?: Prisma.BytesFilter<"webauthn_credentials"> | runtime.Bytes;
    attestation_type?: Prisma.StringFilter<"webauthn_credentials"> | string;
    aaguid?: Prisma.UuidNullableFilter<"webauthn_credentials"> | string | null;
    sign_count?: Prisma.BigIntFilter<"webauthn_credentials"> | bigint | number;
    transports?: Prisma.JsonFilter<"webauthn_credentials">;
    backup_eligible?: Prisma.BoolFilter<"webauthn_credentials"> | boolean;
    backed_up?: Prisma.BoolFilter<"webauthn_credentials"> | boolean;
    friendly_name?: Prisma.StringFilter<"webauthn_credentials"> | string;
    created_at?: Prisma.DateTimeFilter<"webauthn_credentials"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"webauthn_credentials"> | Date | string;
    last_used_at?: Prisma.DateTimeNullableFilter<"webauthn_credentials"> | Date | string | null;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
};
export type webauthn_credentialsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    credential_id?: Prisma.SortOrder;
    public_key?: Prisma.SortOrder;
    attestation_type?: Prisma.SortOrder;
    aaguid?: Prisma.SortOrderInput | Prisma.SortOrder;
    sign_count?: Prisma.SortOrder;
    transports?: Prisma.SortOrder;
    backup_eligible?: Prisma.SortOrder;
    backed_up?: Prisma.SortOrder;
    friendly_name?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    last_used_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    users?: Prisma.usersOrderByWithRelationInput;
};
export type webauthn_credentialsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    credential_id?: runtime.Bytes;
    AND?: Prisma.webauthn_credentialsWhereInput | Prisma.webauthn_credentialsWhereInput[];
    OR?: Prisma.webauthn_credentialsWhereInput[];
    NOT?: Prisma.webauthn_credentialsWhereInput | Prisma.webauthn_credentialsWhereInput[];
    user_id?: Prisma.UuidFilter<"webauthn_credentials"> | string;
    public_key?: Prisma.BytesFilter<"webauthn_credentials"> | runtime.Bytes;
    attestation_type?: Prisma.StringFilter<"webauthn_credentials"> | string;
    aaguid?: Prisma.UuidNullableFilter<"webauthn_credentials"> | string | null;
    sign_count?: Prisma.BigIntFilter<"webauthn_credentials"> | bigint | number;
    transports?: Prisma.JsonFilter<"webauthn_credentials">;
    backup_eligible?: Prisma.BoolFilter<"webauthn_credentials"> | boolean;
    backed_up?: Prisma.BoolFilter<"webauthn_credentials"> | boolean;
    friendly_name?: Prisma.StringFilter<"webauthn_credentials"> | string;
    created_at?: Prisma.DateTimeFilter<"webauthn_credentials"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"webauthn_credentials"> | Date | string;
    last_used_at?: Prisma.DateTimeNullableFilter<"webauthn_credentials"> | Date | string | null;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
}, "id" | "credential_id">;
export type webauthn_credentialsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    credential_id?: Prisma.SortOrder;
    public_key?: Prisma.SortOrder;
    attestation_type?: Prisma.SortOrder;
    aaguid?: Prisma.SortOrderInput | Prisma.SortOrder;
    sign_count?: Prisma.SortOrder;
    transports?: Prisma.SortOrder;
    backup_eligible?: Prisma.SortOrder;
    backed_up?: Prisma.SortOrder;
    friendly_name?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    last_used_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.webauthn_credentialsCountOrderByAggregateInput;
    _avg?: Prisma.webauthn_credentialsAvgOrderByAggregateInput;
    _max?: Prisma.webauthn_credentialsMaxOrderByAggregateInput;
    _min?: Prisma.webauthn_credentialsMinOrderByAggregateInput;
    _sum?: Prisma.webauthn_credentialsSumOrderByAggregateInput;
};
export type webauthn_credentialsScalarWhereWithAggregatesInput = {
    AND?: Prisma.webauthn_credentialsScalarWhereWithAggregatesInput | Prisma.webauthn_credentialsScalarWhereWithAggregatesInput[];
    OR?: Prisma.webauthn_credentialsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.webauthn_credentialsScalarWhereWithAggregatesInput | Prisma.webauthn_credentialsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"webauthn_credentials"> | string;
    user_id?: Prisma.UuidWithAggregatesFilter<"webauthn_credentials"> | string;
    credential_id?: Prisma.BytesWithAggregatesFilter<"webauthn_credentials"> | runtime.Bytes;
    public_key?: Prisma.BytesWithAggregatesFilter<"webauthn_credentials"> | runtime.Bytes;
    attestation_type?: Prisma.StringWithAggregatesFilter<"webauthn_credentials"> | string;
    aaguid?: Prisma.UuidNullableWithAggregatesFilter<"webauthn_credentials"> | string | null;
    sign_count?: Prisma.BigIntWithAggregatesFilter<"webauthn_credentials"> | bigint | number;
    transports?: Prisma.JsonWithAggregatesFilter<"webauthn_credentials">;
    backup_eligible?: Prisma.BoolWithAggregatesFilter<"webauthn_credentials"> | boolean;
    backed_up?: Prisma.BoolWithAggregatesFilter<"webauthn_credentials"> | boolean;
    friendly_name?: Prisma.StringWithAggregatesFilter<"webauthn_credentials"> | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"webauthn_credentials"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"webauthn_credentials"> | Date | string;
    last_used_at?: Prisma.DateTimeNullableWithAggregatesFilter<"webauthn_credentials"> | Date | string | null;
};
export type webauthn_credentialsCreateInput = {
    id?: string;
    credential_id: runtime.Bytes;
    public_key: runtime.Bytes;
    attestation_type?: string;
    aaguid?: string | null;
    sign_count?: bigint | number;
    transports?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    backup_eligible?: boolean;
    backed_up?: boolean;
    friendly_name?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    last_used_at?: Date | string | null;
    users: Prisma.usersCreateNestedOneWithoutWebauthn_credentialsInput;
};
export type webauthn_credentialsUncheckedCreateInput = {
    id?: string;
    user_id: string;
    credential_id: runtime.Bytes;
    public_key: runtime.Bytes;
    attestation_type?: string;
    aaguid?: string | null;
    sign_count?: bigint | number;
    transports?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    backup_eligible?: boolean;
    backed_up?: boolean;
    friendly_name?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    last_used_at?: Date | string | null;
};
export type webauthn_credentialsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    credential_id?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    public_key?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    attestation_type?: Prisma.StringFieldUpdateOperationsInput | string;
    aaguid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sign_count?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    transports?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    backup_eligible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    backed_up?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    friendly_name?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_used_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    users?: Prisma.usersUpdateOneRequiredWithoutWebauthn_credentialsNestedInput;
};
export type webauthn_credentialsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    credential_id?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    public_key?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    attestation_type?: Prisma.StringFieldUpdateOperationsInput | string;
    aaguid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sign_count?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    transports?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    backup_eligible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    backed_up?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    friendly_name?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_used_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type webauthn_credentialsCreateManyInput = {
    id?: string;
    user_id: string;
    credential_id: runtime.Bytes;
    public_key: runtime.Bytes;
    attestation_type?: string;
    aaguid?: string | null;
    sign_count?: bigint | number;
    transports?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    backup_eligible?: boolean;
    backed_up?: boolean;
    friendly_name?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    last_used_at?: Date | string | null;
};
export type webauthn_credentialsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    credential_id?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    public_key?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    attestation_type?: Prisma.StringFieldUpdateOperationsInput | string;
    aaguid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sign_count?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    transports?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    backup_eligible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    backed_up?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    friendly_name?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_used_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type webauthn_credentialsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    credential_id?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    public_key?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    attestation_type?: Prisma.StringFieldUpdateOperationsInput | string;
    aaguid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sign_count?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    transports?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    backup_eligible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    backed_up?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    friendly_name?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_used_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Webauthn_credentialsListRelationFilter = {
    every?: Prisma.webauthn_credentialsWhereInput;
    some?: Prisma.webauthn_credentialsWhereInput;
    none?: Prisma.webauthn_credentialsWhereInput;
};
export type webauthn_credentialsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type webauthn_credentialsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    credential_id?: Prisma.SortOrder;
    public_key?: Prisma.SortOrder;
    attestation_type?: Prisma.SortOrder;
    aaguid?: Prisma.SortOrder;
    sign_count?: Prisma.SortOrder;
    transports?: Prisma.SortOrder;
    backup_eligible?: Prisma.SortOrder;
    backed_up?: Prisma.SortOrder;
    friendly_name?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    last_used_at?: Prisma.SortOrder;
};
export type webauthn_credentialsAvgOrderByAggregateInput = {
    sign_count?: Prisma.SortOrder;
};
export type webauthn_credentialsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    credential_id?: Prisma.SortOrder;
    public_key?: Prisma.SortOrder;
    attestation_type?: Prisma.SortOrder;
    aaguid?: Prisma.SortOrder;
    sign_count?: Prisma.SortOrder;
    backup_eligible?: Prisma.SortOrder;
    backed_up?: Prisma.SortOrder;
    friendly_name?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    last_used_at?: Prisma.SortOrder;
};
export type webauthn_credentialsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    credential_id?: Prisma.SortOrder;
    public_key?: Prisma.SortOrder;
    attestation_type?: Prisma.SortOrder;
    aaguid?: Prisma.SortOrder;
    sign_count?: Prisma.SortOrder;
    backup_eligible?: Prisma.SortOrder;
    backed_up?: Prisma.SortOrder;
    friendly_name?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    last_used_at?: Prisma.SortOrder;
};
export type webauthn_credentialsSumOrderByAggregateInput = {
    sign_count?: Prisma.SortOrder;
};
export type webauthn_credentialsCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.webauthn_credentialsCreateWithoutUsersInput, Prisma.webauthn_credentialsUncheckedCreateWithoutUsersInput> | Prisma.webauthn_credentialsCreateWithoutUsersInput[] | Prisma.webauthn_credentialsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.webauthn_credentialsCreateOrConnectWithoutUsersInput | Prisma.webauthn_credentialsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.webauthn_credentialsCreateManyUsersInputEnvelope;
    connect?: Prisma.webauthn_credentialsWhereUniqueInput | Prisma.webauthn_credentialsWhereUniqueInput[];
};
export type webauthn_credentialsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.webauthn_credentialsCreateWithoutUsersInput, Prisma.webauthn_credentialsUncheckedCreateWithoutUsersInput> | Prisma.webauthn_credentialsCreateWithoutUsersInput[] | Prisma.webauthn_credentialsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.webauthn_credentialsCreateOrConnectWithoutUsersInput | Prisma.webauthn_credentialsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.webauthn_credentialsCreateManyUsersInputEnvelope;
    connect?: Prisma.webauthn_credentialsWhereUniqueInput | Prisma.webauthn_credentialsWhereUniqueInput[];
};
export type webauthn_credentialsUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.webauthn_credentialsCreateWithoutUsersInput, Prisma.webauthn_credentialsUncheckedCreateWithoutUsersInput> | Prisma.webauthn_credentialsCreateWithoutUsersInput[] | Prisma.webauthn_credentialsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.webauthn_credentialsCreateOrConnectWithoutUsersInput | Prisma.webauthn_credentialsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.webauthn_credentialsUpsertWithWhereUniqueWithoutUsersInput | Prisma.webauthn_credentialsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.webauthn_credentialsCreateManyUsersInputEnvelope;
    set?: Prisma.webauthn_credentialsWhereUniqueInput | Prisma.webauthn_credentialsWhereUniqueInput[];
    disconnect?: Prisma.webauthn_credentialsWhereUniqueInput | Prisma.webauthn_credentialsWhereUniqueInput[];
    delete?: Prisma.webauthn_credentialsWhereUniqueInput | Prisma.webauthn_credentialsWhereUniqueInput[];
    connect?: Prisma.webauthn_credentialsWhereUniqueInput | Prisma.webauthn_credentialsWhereUniqueInput[];
    update?: Prisma.webauthn_credentialsUpdateWithWhereUniqueWithoutUsersInput | Prisma.webauthn_credentialsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.webauthn_credentialsUpdateManyWithWhereWithoutUsersInput | Prisma.webauthn_credentialsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.webauthn_credentialsScalarWhereInput | Prisma.webauthn_credentialsScalarWhereInput[];
};
export type webauthn_credentialsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.webauthn_credentialsCreateWithoutUsersInput, Prisma.webauthn_credentialsUncheckedCreateWithoutUsersInput> | Prisma.webauthn_credentialsCreateWithoutUsersInput[] | Prisma.webauthn_credentialsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.webauthn_credentialsCreateOrConnectWithoutUsersInput | Prisma.webauthn_credentialsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.webauthn_credentialsUpsertWithWhereUniqueWithoutUsersInput | Prisma.webauthn_credentialsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.webauthn_credentialsCreateManyUsersInputEnvelope;
    set?: Prisma.webauthn_credentialsWhereUniqueInput | Prisma.webauthn_credentialsWhereUniqueInput[];
    disconnect?: Prisma.webauthn_credentialsWhereUniqueInput | Prisma.webauthn_credentialsWhereUniqueInput[];
    delete?: Prisma.webauthn_credentialsWhereUniqueInput | Prisma.webauthn_credentialsWhereUniqueInput[];
    connect?: Prisma.webauthn_credentialsWhereUniqueInput | Prisma.webauthn_credentialsWhereUniqueInput[];
    update?: Prisma.webauthn_credentialsUpdateWithWhereUniqueWithoutUsersInput | Prisma.webauthn_credentialsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.webauthn_credentialsUpdateManyWithWhereWithoutUsersInput | Prisma.webauthn_credentialsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.webauthn_credentialsScalarWhereInput | Prisma.webauthn_credentialsScalarWhereInput[];
};
export type BytesFieldUpdateOperationsInput = {
    set?: runtime.Bytes;
};
export type webauthn_credentialsCreateWithoutUsersInput = {
    id?: string;
    credential_id: runtime.Bytes;
    public_key: runtime.Bytes;
    attestation_type?: string;
    aaguid?: string | null;
    sign_count?: bigint | number;
    transports?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    backup_eligible?: boolean;
    backed_up?: boolean;
    friendly_name?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    last_used_at?: Date | string | null;
};
export type webauthn_credentialsUncheckedCreateWithoutUsersInput = {
    id?: string;
    credential_id: runtime.Bytes;
    public_key: runtime.Bytes;
    attestation_type?: string;
    aaguid?: string | null;
    sign_count?: bigint | number;
    transports?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    backup_eligible?: boolean;
    backed_up?: boolean;
    friendly_name?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    last_used_at?: Date | string | null;
};
export type webauthn_credentialsCreateOrConnectWithoutUsersInput = {
    where: Prisma.webauthn_credentialsWhereUniqueInput;
    create: Prisma.XOR<Prisma.webauthn_credentialsCreateWithoutUsersInput, Prisma.webauthn_credentialsUncheckedCreateWithoutUsersInput>;
};
export type webauthn_credentialsCreateManyUsersInputEnvelope = {
    data: Prisma.webauthn_credentialsCreateManyUsersInput | Prisma.webauthn_credentialsCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type webauthn_credentialsUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.webauthn_credentialsWhereUniqueInput;
    update: Prisma.XOR<Prisma.webauthn_credentialsUpdateWithoutUsersInput, Prisma.webauthn_credentialsUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.webauthn_credentialsCreateWithoutUsersInput, Prisma.webauthn_credentialsUncheckedCreateWithoutUsersInput>;
};
export type webauthn_credentialsUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.webauthn_credentialsWhereUniqueInput;
    data: Prisma.XOR<Prisma.webauthn_credentialsUpdateWithoutUsersInput, Prisma.webauthn_credentialsUncheckedUpdateWithoutUsersInput>;
};
export type webauthn_credentialsUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.webauthn_credentialsScalarWhereInput;
    data: Prisma.XOR<Prisma.webauthn_credentialsUpdateManyMutationInput, Prisma.webauthn_credentialsUncheckedUpdateManyWithoutUsersInput>;
};
export type webauthn_credentialsScalarWhereInput = {
    AND?: Prisma.webauthn_credentialsScalarWhereInput | Prisma.webauthn_credentialsScalarWhereInput[];
    OR?: Prisma.webauthn_credentialsScalarWhereInput[];
    NOT?: Prisma.webauthn_credentialsScalarWhereInput | Prisma.webauthn_credentialsScalarWhereInput[];
    id?: Prisma.UuidFilter<"webauthn_credentials"> | string;
    user_id?: Prisma.UuidFilter<"webauthn_credentials"> | string;
    credential_id?: Prisma.BytesFilter<"webauthn_credentials"> | runtime.Bytes;
    public_key?: Prisma.BytesFilter<"webauthn_credentials"> | runtime.Bytes;
    attestation_type?: Prisma.StringFilter<"webauthn_credentials"> | string;
    aaguid?: Prisma.UuidNullableFilter<"webauthn_credentials"> | string | null;
    sign_count?: Prisma.BigIntFilter<"webauthn_credentials"> | bigint | number;
    transports?: Prisma.JsonFilter<"webauthn_credentials">;
    backup_eligible?: Prisma.BoolFilter<"webauthn_credentials"> | boolean;
    backed_up?: Prisma.BoolFilter<"webauthn_credentials"> | boolean;
    friendly_name?: Prisma.StringFilter<"webauthn_credentials"> | string;
    created_at?: Prisma.DateTimeFilter<"webauthn_credentials"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"webauthn_credentials"> | Date | string;
    last_used_at?: Prisma.DateTimeNullableFilter<"webauthn_credentials"> | Date | string | null;
};
export type webauthn_credentialsCreateManyUsersInput = {
    id?: string;
    credential_id: runtime.Bytes;
    public_key: runtime.Bytes;
    attestation_type?: string;
    aaguid?: string | null;
    sign_count?: bigint | number;
    transports?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    backup_eligible?: boolean;
    backed_up?: boolean;
    friendly_name?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    last_used_at?: Date | string | null;
};
export type webauthn_credentialsUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    credential_id?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    public_key?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    attestation_type?: Prisma.StringFieldUpdateOperationsInput | string;
    aaguid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sign_count?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    transports?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    backup_eligible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    backed_up?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    friendly_name?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_used_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type webauthn_credentialsUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    credential_id?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    public_key?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    attestation_type?: Prisma.StringFieldUpdateOperationsInput | string;
    aaguid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sign_count?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    transports?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    backup_eligible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    backed_up?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    friendly_name?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_used_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type webauthn_credentialsUncheckedUpdateManyWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    credential_id?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    public_key?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    attestation_type?: Prisma.StringFieldUpdateOperationsInput | string;
    aaguid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sign_count?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    transports?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    backup_eligible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    backed_up?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    friendly_name?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_used_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type webauthn_credentialsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    credential_id?: boolean;
    public_key?: boolean;
    attestation_type?: boolean;
    aaguid?: boolean;
    sign_count?: boolean;
    transports?: boolean;
    backup_eligible?: boolean;
    backed_up?: boolean;
    friendly_name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    last_used_at?: boolean;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["webauthn_credentials"]>;
export type webauthn_credentialsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    credential_id?: boolean;
    public_key?: boolean;
    attestation_type?: boolean;
    aaguid?: boolean;
    sign_count?: boolean;
    transports?: boolean;
    backup_eligible?: boolean;
    backed_up?: boolean;
    friendly_name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    last_used_at?: boolean;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["webauthn_credentials"]>;
export type webauthn_credentialsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    credential_id?: boolean;
    public_key?: boolean;
    attestation_type?: boolean;
    aaguid?: boolean;
    sign_count?: boolean;
    transports?: boolean;
    backup_eligible?: boolean;
    backed_up?: boolean;
    friendly_name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    last_used_at?: boolean;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["webauthn_credentials"]>;
export type webauthn_credentialsSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    credential_id?: boolean;
    public_key?: boolean;
    attestation_type?: boolean;
    aaguid?: boolean;
    sign_count?: boolean;
    transports?: boolean;
    backup_eligible?: boolean;
    backed_up?: boolean;
    friendly_name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    last_used_at?: boolean;
};
export type webauthn_credentialsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "credential_id" | "public_key" | "attestation_type" | "aaguid" | "sign_count" | "transports" | "backup_eligible" | "backed_up" | "friendly_name" | "created_at" | "updated_at" | "last_used_at", ExtArgs["result"]["webauthn_credentials"]>;
export type webauthn_credentialsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type webauthn_credentialsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type webauthn_credentialsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type $webauthn_credentialsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "webauthn_credentials";
    objects: {
        users: Prisma.$usersPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        user_id: string;
        credential_id: runtime.Bytes;
        public_key: runtime.Bytes;
        attestation_type: string;
        aaguid: string | null;
        sign_count: bigint;
        transports: runtime.JsonValue;
        backup_eligible: boolean;
        backed_up: boolean;
        friendly_name: string;
        created_at: Date;
        updated_at: Date;
        last_used_at: Date | null;
    }, ExtArgs["result"]["webauthn_credentials"]>;
    composites: {};
};
export type webauthn_credentialsGetPayload<S extends boolean | null | undefined | webauthn_credentialsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$webauthn_credentialsPayload, S>;
export type webauthn_credentialsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<webauthn_credentialsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Webauthn_credentialsCountAggregateInputType | true;
};
export interface webauthn_credentialsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['webauthn_credentials'];
        meta: {
            name: 'webauthn_credentials';
        };
    };
    findUnique<T extends webauthn_credentialsFindUniqueArgs>(args: Prisma.SelectSubset<T, webauthn_credentialsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__webauthn_credentialsClient<runtime.Types.Result.GetResult<Prisma.$webauthn_credentialsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends webauthn_credentialsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, webauthn_credentialsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__webauthn_credentialsClient<runtime.Types.Result.GetResult<Prisma.$webauthn_credentialsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends webauthn_credentialsFindFirstArgs>(args?: Prisma.SelectSubset<T, webauthn_credentialsFindFirstArgs<ExtArgs>>): Prisma.Prisma__webauthn_credentialsClient<runtime.Types.Result.GetResult<Prisma.$webauthn_credentialsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends webauthn_credentialsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, webauthn_credentialsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__webauthn_credentialsClient<runtime.Types.Result.GetResult<Prisma.$webauthn_credentialsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends webauthn_credentialsFindManyArgs>(args?: Prisma.SelectSubset<T, webauthn_credentialsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$webauthn_credentialsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends webauthn_credentialsCreateArgs>(args: Prisma.SelectSubset<T, webauthn_credentialsCreateArgs<ExtArgs>>): Prisma.Prisma__webauthn_credentialsClient<runtime.Types.Result.GetResult<Prisma.$webauthn_credentialsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends webauthn_credentialsCreateManyArgs>(args?: Prisma.SelectSubset<T, webauthn_credentialsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends webauthn_credentialsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, webauthn_credentialsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$webauthn_credentialsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends webauthn_credentialsDeleteArgs>(args: Prisma.SelectSubset<T, webauthn_credentialsDeleteArgs<ExtArgs>>): Prisma.Prisma__webauthn_credentialsClient<runtime.Types.Result.GetResult<Prisma.$webauthn_credentialsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends webauthn_credentialsUpdateArgs>(args: Prisma.SelectSubset<T, webauthn_credentialsUpdateArgs<ExtArgs>>): Prisma.Prisma__webauthn_credentialsClient<runtime.Types.Result.GetResult<Prisma.$webauthn_credentialsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends webauthn_credentialsDeleteManyArgs>(args?: Prisma.SelectSubset<T, webauthn_credentialsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends webauthn_credentialsUpdateManyArgs>(args: Prisma.SelectSubset<T, webauthn_credentialsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends webauthn_credentialsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, webauthn_credentialsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$webauthn_credentialsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends webauthn_credentialsUpsertArgs>(args: Prisma.SelectSubset<T, webauthn_credentialsUpsertArgs<ExtArgs>>): Prisma.Prisma__webauthn_credentialsClient<runtime.Types.Result.GetResult<Prisma.$webauthn_credentialsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends webauthn_credentialsCountArgs>(args?: Prisma.Subset<T, webauthn_credentialsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Webauthn_credentialsCountAggregateOutputType> : number>;
    aggregate<T extends Webauthn_credentialsAggregateArgs>(args: Prisma.Subset<T, Webauthn_credentialsAggregateArgs>): Prisma.PrismaPromise<GetWebauthn_credentialsAggregateType<T>>;
    groupBy<T extends webauthn_credentialsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: webauthn_credentialsGroupByArgs['orderBy'];
    } : {
        orderBy?: webauthn_credentialsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, webauthn_credentialsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebauthn_credentialsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: webauthn_credentialsFieldRefs;
}
export interface Prisma__webauthn_credentialsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    users<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface webauthn_credentialsFieldRefs {
    readonly id: Prisma.FieldRef<"webauthn_credentials", 'String'>;
    readonly user_id: Prisma.FieldRef<"webauthn_credentials", 'String'>;
    readonly credential_id: Prisma.FieldRef<"webauthn_credentials", 'Bytes'>;
    readonly public_key: Prisma.FieldRef<"webauthn_credentials", 'Bytes'>;
    readonly attestation_type: Prisma.FieldRef<"webauthn_credentials", 'String'>;
    readonly aaguid: Prisma.FieldRef<"webauthn_credentials", 'String'>;
    readonly sign_count: Prisma.FieldRef<"webauthn_credentials", 'BigInt'>;
    readonly transports: Prisma.FieldRef<"webauthn_credentials", 'Json'>;
    readonly backup_eligible: Prisma.FieldRef<"webauthn_credentials", 'Boolean'>;
    readonly backed_up: Prisma.FieldRef<"webauthn_credentials", 'Boolean'>;
    readonly friendly_name: Prisma.FieldRef<"webauthn_credentials", 'String'>;
    readonly created_at: Prisma.FieldRef<"webauthn_credentials", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"webauthn_credentials", 'DateTime'>;
    readonly last_used_at: Prisma.FieldRef<"webauthn_credentials", 'DateTime'>;
}
export type webauthn_credentialsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.webauthn_credentialsSelect<ExtArgs> | null;
    omit?: Prisma.webauthn_credentialsOmit<ExtArgs> | null;
    include?: Prisma.webauthn_credentialsInclude<ExtArgs> | null;
    where: Prisma.webauthn_credentialsWhereUniqueInput;
};
export type webauthn_credentialsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.webauthn_credentialsSelect<ExtArgs> | null;
    omit?: Prisma.webauthn_credentialsOmit<ExtArgs> | null;
    include?: Prisma.webauthn_credentialsInclude<ExtArgs> | null;
    where: Prisma.webauthn_credentialsWhereUniqueInput;
};
export type webauthn_credentialsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.webauthn_credentialsSelect<ExtArgs> | null;
    omit?: Prisma.webauthn_credentialsOmit<ExtArgs> | null;
    include?: Prisma.webauthn_credentialsInclude<ExtArgs> | null;
    where?: Prisma.webauthn_credentialsWhereInput;
    orderBy?: Prisma.webauthn_credentialsOrderByWithRelationInput | Prisma.webauthn_credentialsOrderByWithRelationInput[];
    cursor?: Prisma.webauthn_credentialsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Webauthn_credentialsScalarFieldEnum | Prisma.Webauthn_credentialsScalarFieldEnum[];
};
export type webauthn_credentialsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.webauthn_credentialsSelect<ExtArgs> | null;
    omit?: Prisma.webauthn_credentialsOmit<ExtArgs> | null;
    include?: Prisma.webauthn_credentialsInclude<ExtArgs> | null;
    where?: Prisma.webauthn_credentialsWhereInput;
    orderBy?: Prisma.webauthn_credentialsOrderByWithRelationInput | Prisma.webauthn_credentialsOrderByWithRelationInput[];
    cursor?: Prisma.webauthn_credentialsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Webauthn_credentialsScalarFieldEnum | Prisma.Webauthn_credentialsScalarFieldEnum[];
};
export type webauthn_credentialsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.webauthn_credentialsSelect<ExtArgs> | null;
    omit?: Prisma.webauthn_credentialsOmit<ExtArgs> | null;
    include?: Prisma.webauthn_credentialsInclude<ExtArgs> | null;
    where?: Prisma.webauthn_credentialsWhereInput;
    orderBy?: Prisma.webauthn_credentialsOrderByWithRelationInput | Prisma.webauthn_credentialsOrderByWithRelationInput[];
    cursor?: Prisma.webauthn_credentialsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Webauthn_credentialsScalarFieldEnum | Prisma.Webauthn_credentialsScalarFieldEnum[];
};
export type webauthn_credentialsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.webauthn_credentialsSelect<ExtArgs> | null;
    omit?: Prisma.webauthn_credentialsOmit<ExtArgs> | null;
    include?: Prisma.webauthn_credentialsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.webauthn_credentialsCreateInput, Prisma.webauthn_credentialsUncheckedCreateInput>;
};
export type webauthn_credentialsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.webauthn_credentialsCreateManyInput | Prisma.webauthn_credentialsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type webauthn_credentialsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.webauthn_credentialsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.webauthn_credentialsOmit<ExtArgs> | null;
    data: Prisma.webauthn_credentialsCreateManyInput | Prisma.webauthn_credentialsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.webauthn_credentialsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type webauthn_credentialsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.webauthn_credentialsSelect<ExtArgs> | null;
    omit?: Prisma.webauthn_credentialsOmit<ExtArgs> | null;
    include?: Prisma.webauthn_credentialsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.webauthn_credentialsUpdateInput, Prisma.webauthn_credentialsUncheckedUpdateInput>;
    where: Prisma.webauthn_credentialsWhereUniqueInput;
};
export type webauthn_credentialsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.webauthn_credentialsUpdateManyMutationInput, Prisma.webauthn_credentialsUncheckedUpdateManyInput>;
    where?: Prisma.webauthn_credentialsWhereInput;
    limit?: number;
};
export type webauthn_credentialsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.webauthn_credentialsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.webauthn_credentialsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.webauthn_credentialsUpdateManyMutationInput, Prisma.webauthn_credentialsUncheckedUpdateManyInput>;
    where?: Prisma.webauthn_credentialsWhereInput;
    limit?: number;
    include?: Prisma.webauthn_credentialsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type webauthn_credentialsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.webauthn_credentialsSelect<ExtArgs> | null;
    omit?: Prisma.webauthn_credentialsOmit<ExtArgs> | null;
    include?: Prisma.webauthn_credentialsInclude<ExtArgs> | null;
    where: Prisma.webauthn_credentialsWhereUniqueInput;
    create: Prisma.XOR<Prisma.webauthn_credentialsCreateInput, Prisma.webauthn_credentialsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.webauthn_credentialsUpdateInput, Prisma.webauthn_credentialsUncheckedUpdateInput>;
};
export type webauthn_credentialsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.webauthn_credentialsSelect<ExtArgs> | null;
    omit?: Prisma.webauthn_credentialsOmit<ExtArgs> | null;
    include?: Prisma.webauthn_credentialsInclude<ExtArgs> | null;
    where: Prisma.webauthn_credentialsWhereUniqueInput;
};
export type webauthn_credentialsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.webauthn_credentialsWhereInput;
    limit?: number;
};
export type webauthn_credentialsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.webauthn_credentialsSelect<ExtArgs> | null;
    omit?: Prisma.webauthn_credentialsOmit<ExtArgs> | null;
    include?: Prisma.webauthn_credentialsInclude<ExtArgs> | null;
};
