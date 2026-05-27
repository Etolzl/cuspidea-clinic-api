import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type one_time_tokensModel = runtime.Types.Result.DefaultSelection<Prisma.$one_time_tokensPayload>;
export type AggregateOne_time_tokens = {
    _count: One_time_tokensCountAggregateOutputType | null;
    _min: One_time_tokensMinAggregateOutputType | null;
    _max: One_time_tokensMaxAggregateOutputType | null;
};
export type One_time_tokensMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    token_type: $Enums.one_time_token_type | null;
    token_hash: string | null;
    relates_to: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type One_time_tokensMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    token_type: $Enums.one_time_token_type | null;
    token_hash: string | null;
    relates_to: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type One_time_tokensCountAggregateOutputType = {
    id: number;
    user_id: number;
    token_type: number;
    token_hash: number;
    relates_to: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type One_time_tokensMinAggregateInputType = {
    id?: true;
    user_id?: true;
    token_type?: true;
    token_hash?: true;
    relates_to?: true;
    created_at?: true;
    updated_at?: true;
};
export type One_time_tokensMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    token_type?: true;
    token_hash?: true;
    relates_to?: true;
    created_at?: true;
    updated_at?: true;
};
export type One_time_tokensCountAggregateInputType = {
    id?: true;
    user_id?: true;
    token_type?: true;
    token_hash?: true;
    relates_to?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type One_time_tokensAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.one_time_tokensWhereInput;
    orderBy?: Prisma.one_time_tokensOrderByWithRelationInput | Prisma.one_time_tokensOrderByWithRelationInput[];
    cursor?: Prisma.one_time_tokensWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | One_time_tokensCountAggregateInputType;
    _min?: One_time_tokensMinAggregateInputType;
    _max?: One_time_tokensMaxAggregateInputType;
};
export type GetOne_time_tokensAggregateType<T extends One_time_tokensAggregateArgs> = {
    [P in keyof T & keyof AggregateOne_time_tokens]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOne_time_tokens[P]> : Prisma.GetScalarType<T[P], AggregateOne_time_tokens[P]>;
};
export type one_time_tokensGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.one_time_tokensWhereInput;
    orderBy?: Prisma.one_time_tokensOrderByWithAggregationInput | Prisma.one_time_tokensOrderByWithAggregationInput[];
    by: Prisma.One_time_tokensScalarFieldEnum[] | Prisma.One_time_tokensScalarFieldEnum;
    having?: Prisma.one_time_tokensScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: One_time_tokensCountAggregateInputType | true;
    _min?: One_time_tokensMinAggregateInputType;
    _max?: One_time_tokensMaxAggregateInputType;
};
export type One_time_tokensGroupByOutputType = {
    id: string;
    user_id: string;
    token_type: $Enums.one_time_token_type;
    token_hash: string;
    relates_to: string;
    created_at: Date;
    updated_at: Date;
    _count: One_time_tokensCountAggregateOutputType | null;
    _min: One_time_tokensMinAggregateOutputType | null;
    _max: One_time_tokensMaxAggregateOutputType | null;
};
export type GetOne_time_tokensGroupByPayload<T extends one_time_tokensGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<One_time_tokensGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof One_time_tokensGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], One_time_tokensGroupByOutputType[P]> : Prisma.GetScalarType<T[P], One_time_tokensGroupByOutputType[P]>;
}>>;
export type one_time_tokensWhereInput = {
    AND?: Prisma.one_time_tokensWhereInput | Prisma.one_time_tokensWhereInput[];
    OR?: Prisma.one_time_tokensWhereInput[];
    NOT?: Prisma.one_time_tokensWhereInput | Prisma.one_time_tokensWhereInput[];
    id?: Prisma.UuidFilter<"one_time_tokens"> | string;
    user_id?: Prisma.UuidFilter<"one_time_tokens"> | string;
    token_type?: Prisma.Enumone_time_token_typeFilter<"one_time_tokens"> | $Enums.one_time_token_type;
    token_hash?: Prisma.StringFilter<"one_time_tokens"> | string;
    relates_to?: Prisma.StringFilter<"one_time_tokens"> | string;
    created_at?: Prisma.DateTimeFilter<"one_time_tokens"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"one_time_tokens"> | Date | string;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
};
export type one_time_tokensOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    token_type?: Prisma.SortOrder;
    token_hash?: Prisma.SortOrder;
    relates_to?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    users?: Prisma.usersOrderByWithRelationInput;
};
export type one_time_tokensWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    user_id_token_type?: Prisma.one_time_tokensUser_idToken_typeCompoundUniqueInput;
    AND?: Prisma.one_time_tokensWhereInput | Prisma.one_time_tokensWhereInput[];
    OR?: Prisma.one_time_tokensWhereInput[];
    NOT?: Prisma.one_time_tokensWhereInput | Prisma.one_time_tokensWhereInput[];
    user_id?: Prisma.UuidFilter<"one_time_tokens"> | string;
    token_type?: Prisma.Enumone_time_token_typeFilter<"one_time_tokens"> | $Enums.one_time_token_type;
    token_hash?: Prisma.StringFilter<"one_time_tokens"> | string;
    relates_to?: Prisma.StringFilter<"one_time_tokens"> | string;
    created_at?: Prisma.DateTimeFilter<"one_time_tokens"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"one_time_tokens"> | Date | string;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
}, "id" | "user_id_token_type">;
export type one_time_tokensOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    token_type?: Prisma.SortOrder;
    token_hash?: Prisma.SortOrder;
    relates_to?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.one_time_tokensCountOrderByAggregateInput;
    _max?: Prisma.one_time_tokensMaxOrderByAggregateInput;
    _min?: Prisma.one_time_tokensMinOrderByAggregateInput;
};
export type one_time_tokensScalarWhereWithAggregatesInput = {
    AND?: Prisma.one_time_tokensScalarWhereWithAggregatesInput | Prisma.one_time_tokensScalarWhereWithAggregatesInput[];
    OR?: Prisma.one_time_tokensScalarWhereWithAggregatesInput[];
    NOT?: Prisma.one_time_tokensScalarWhereWithAggregatesInput | Prisma.one_time_tokensScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"one_time_tokens"> | string;
    user_id?: Prisma.UuidWithAggregatesFilter<"one_time_tokens"> | string;
    token_type?: Prisma.Enumone_time_token_typeWithAggregatesFilter<"one_time_tokens"> | $Enums.one_time_token_type;
    token_hash?: Prisma.StringWithAggregatesFilter<"one_time_tokens"> | string;
    relates_to?: Prisma.StringWithAggregatesFilter<"one_time_tokens"> | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"one_time_tokens"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"one_time_tokens"> | Date | string;
};
export type one_time_tokensCreateInput = {
    id: string;
    token_type: $Enums.one_time_token_type;
    token_hash: string;
    relates_to: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    users: Prisma.usersCreateNestedOneWithoutOne_time_tokensInput;
};
export type one_time_tokensUncheckedCreateInput = {
    id: string;
    user_id: string;
    token_type: $Enums.one_time_token_type;
    token_hash: string;
    relates_to: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type one_time_tokensUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token_type?: Prisma.Enumone_time_token_typeFieldUpdateOperationsInput | $Enums.one_time_token_type;
    token_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    relates_to?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.usersUpdateOneRequiredWithoutOne_time_tokensNestedInput;
};
export type one_time_tokensUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    token_type?: Prisma.Enumone_time_token_typeFieldUpdateOperationsInput | $Enums.one_time_token_type;
    token_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    relates_to?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type one_time_tokensCreateManyInput = {
    id: string;
    user_id: string;
    token_type: $Enums.one_time_token_type;
    token_hash: string;
    relates_to: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type one_time_tokensUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token_type?: Prisma.Enumone_time_token_typeFieldUpdateOperationsInput | $Enums.one_time_token_type;
    token_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    relates_to?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type one_time_tokensUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    token_type?: Prisma.Enumone_time_token_typeFieldUpdateOperationsInput | $Enums.one_time_token_type;
    token_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    relates_to?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type one_time_tokensUser_idToken_typeCompoundUniqueInput = {
    user_id: string;
    token_type: $Enums.one_time_token_type;
};
export type one_time_tokensCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    token_type?: Prisma.SortOrder;
    token_hash?: Prisma.SortOrder;
    relates_to?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type one_time_tokensMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    token_type?: Prisma.SortOrder;
    token_hash?: Prisma.SortOrder;
    relates_to?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type one_time_tokensMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    token_type?: Prisma.SortOrder;
    token_hash?: Prisma.SortOrder;
    relates_to?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type One_time_tokensListRelationFilter = {
    every?: Prisma.one_time_tokensWhereInput;
    some?: Prisma.one_time_tokensWhereInput;
    none?: Prisma.one_time_tokensWhereInput;
};
export type one_time_tokensOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type Enumone_time_token_typeFieldUpdateOperationsInput = {
    set?: $Enums.one_time_token_type;
};
export type one_time_tokensCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.one_time_tokensCreateWithoutUsersInput, Prisma.one_time_tokensUncheckedCreateWithoutUsersInput> | Prisma.one_time_tokensCreateWithoutUsersInput[] | Prisma.one_time_tokensUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.one_time_tokensCreateOrConnectWithoutUsersInput | Prisma.one_time_tokensCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.one_time_tokensCreateManyUsersInputEnvelope;
    connect?: Prisma.one_time_tokensWhereUniqueInput | Prisma.one_time_tokensWhereUniqueInput[];
};
export type one_time_tokensUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.one_time_tokensCreateWithoutUsersInput, Prisma.one_time_tokensUncheckedCreateWithoutUsersInput> | Prisma.one_time_tokensCreateWithoutUsersInput[] | Prisma.one_time_tokensUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.one_time_tokensCreateOrConnectWithoutUsersInput | Prisma.one_time_tokensCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.one_time_tokensCreateManyUsersInputEnvelope;
    connect?: Prisma.one_time_tokensWhereUniqueInput | Prisma.one_time_tokensWhereUniqueInput[];
};
export type one_time_tokensUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.one_time_tokensCreateWithoutUsersInput, Prisma.one_time_tokensUncheckedCreateWithoutUsersInput> | Prisma.one_time_tokensCreateWithoutUsersInput[] | Prisma.one_time_tokensUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.one_time_tokensCreateOrConnectWithoutUsersInput | Prisma.one_time_tokensCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.one_time_tokensUpsertWithWhereUniqueWithoutUsersInput | Prisma.one_time_tokensUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.one_time_tokensCreateManyUsersInputEnvelope;
    set?: Prisma.one_time_tokensWhereUniqueInput | Prisma.one_time_tokensWhereUniqueInput[];
    disconnect?: Prisma.one_time_tokensWhereUniqueInput | Prisma.one_time_tokensWhereUniqueInput[];
    delete?: Prisma.one_time_tokensWhereUniqueInput | Prisma.one_time_tokensWhereUniqueInput[];
    connect?: Prisma.one_time_tokensWhereUniqueInput | Prisma.one_time_tokensWhereUniqueInput[];
    update?: Prisma.one_time_tokensUpdateWithWhereUniqueWithoutUsersInput | Prisma.one_time_tokensUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.one_time_tokensUpdateManyWithWhereWithoutUsersInput | Prisma.one_time_tokensUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.one_time_tokensScalarWhereInput | Prisma.one_time_tokensScalarWhereInput[];
};
export type one_time_tokensUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.one_time_tokensCreateWithoutUsersInput, Prisma.one_time_tokensUncheckedCreateWithoutUsersInput> | Prisma.one_time_tokensCreateWithoutUsersInput[] | Prisma.one_time_tokensUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.one_time_tokensCreateOrConnectWithoutUsersInput | Prisma.one_time_tokensCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.one_time_tokensUpsertWithWhereUniqueWithoutUsersInput | Prisma.one_time_tokensUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.one_time_tokensCreateManyUsersInputEnvelope;
    set?: Prisma.one_time_tokensWhereUniqueInput | Prisma.one_time_tokensWhereUniqueInput[];
    disconnect?: Prisma.one_time_tokensWhereUniqueInput | Prisma.one_time_tokensWhereUniqueInput[];
    delete?: Prisma.one_time_tokensWhereUniqueInput | Prisma.one_time_tokensWhereUniqueInput[];
    connect?: Prisma.one_time_tokensWhereUniqueInput | Prisma.one_time_tokensWhereUniqueInput[];
    update?: Prisma.one_time_tokensUpdateWithWhereUniqueWithoutUsersInput | Prisma.one_time_tokensUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.one_time_tokensUpdateManyWithWhereWithoutUsersInput | Prisma.one_time_tokensUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.one_time_tokensScalarWhereInput | Prisma.one_time_tokensScalarWhereInput[];
};
export type one_time_tokensCreateWithoutUsersInput = {
    id: string;
    token_type: $Enums.one_time_token_type;
    token_hash: string;
    relates_to: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type one_time_tokensUncheckedCreateWithoutUsersInput = {
    id: string;
    token_type: $Enums.one_time_token_type;
    token_hash: string;
    relates_to: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type one_time_tokensCreateOrConnectWithoutUsersInput = {
    where: Prisma.one_time_tokensWhereUniqueInput;
    create: Prisma.XOR<Prisma.one_time_tokensCreateWithoutUsersInput, Prisma.one_time_tokensUncheckedCreateWithoutUsersInput>;
};
export type one_time_tokensCreateManyUsersInputEnvelope = {
    data: Prisma.one_time_tokensCreateManyUsersInput | Prisma.one_time_tokensCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type one_time_tokensUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.one_time_tokensWhereUniqueInput;
    update: Prisma.XOR<Prisma.one_time_tokensUpdateWithoutUsersInput, Prisma.one_time_tokensUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.one_time_tokensCreateWithoutUsersInput, Prisma.one_time_tokensUncheckedCreateWithoutUsersInput>;
};
export type one_time_tokensUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.one_time_tokensWhereUniqueInput;
    data: Prisma.XOR<Prisma.one_time_tokensUpdateWithoutUsersInput, Prisma.one_time_tokensUncheckedUpdateWithoutUsersInput>;
};
export type one_time_tokensUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.one_time_tokensScalarWhereInput;
    data: Prisma.XOR<Prisma.one_time_tokensUpdateManyMutationInput, Prisma.one_time_tokensUncheckedUpdateManyWithoutUsersInput>;
};
export type one_time_tokensScalarWhereInput = {
    AND?: Prisma.one_time_tokensScalarWhereInput | Prisma.one_time_tokensScalarWhereInput[];
    OR?: Prisma.one_time_tokensScalarWhereInput[];
    NOT?: Prisma.one_time_tokensScalarWhereInput | Prisma.one_time_tokensScalarWhereInput[];
    id?: Prisma.UuidFilter<"one_time_tokens"> | string;
    user_id?: Prisma.UuidFilter<"one_time_tokens"> | string;
    token_type?: Prisma.Enumone_time_token_typeFilter<"one_time_tokens"> | $Enums.one_time_token_type;
    token_hash?: Prisma.StringFilter<"one_time_tokens"> | string;
    relates_to?: Prisma.StringFilter<"one_time_tokens"> | string;
    created_at?: Prisma.DateTimeFilter<"one_time_tokens"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"one_time_tokens"> | Date | string;
};
export type one_time_tokensCreateManyUsersInput = {
    id: string;
    token_type: $Enums.one_time_token_type;
    token_hash: string;
    relates_to: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type one_time_tokensUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token_type?: Prisma.Enumone_time_token_typeFieldUpdateOperationsInput | $Enums.one_time_token_type;
    token_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    relates_to?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type one_time_tokensUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token_type?: Prisma.Enumone_time_token_typeFieldUpdateOperationsInput | $Enums.one_time_token_type;
    token_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    relates_to?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type one_time_tokensUncheckedUpdateManyWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token_type?: Prisma.Enumone_time_token_typeFieldUpdateOperationsInput | $Enums.one_time_token_type;
    token_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    relates_to?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type one_time_tokensSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    token_type?: boolean;
    token_hash?: boolean;
    relates_to?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["one_time_tokens"]>;
export type one_time_tokensSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    token_type?: boolean;
    token_hash?: boolean;
    relates_to?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["one_time_tokens"]>;
export type one_time_tokensSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    token_type?: boolean;
    token_hash?: boolean;
    relates_to?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["one_time_tokens"]>;
export type one_time_tokensSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    token_type?: boolean;
    token_hash?: boolean;
    relates_to?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type one_time_tokensOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "token_type" | "token_hash" | "relates_to" | "created_at" | "updated_at", ExtArgs["result"]["one_time_tokens"]>;
export type one_time_tokensInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type one_time_tokensIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type one_time_tokensIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type $one_time_tokensPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "one_time_tokens";
    objects: {
        users: Prisma.$usersPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        user_id: string;
        token_type: $Enums.one_time_token_type;
        token_hash: string;
        relates_to: string;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["one_time_tokens"]>;
    composites: {};
};
export type one_time_tokensGetPayload<S extends boolean | null | undefined | one_time_tokensDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$one_time_tokensPayload, S>;
export type one_time_tokensCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<one_time_tokensFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: One_time_tokensCountAggregateInputType | true;
};
export interface one_time_tokensDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['one_time_tokens'];
        meta: {
            name: 'one_time_tokens';
        };
    };
    findUnique<T extends one_time_tokensFindUniqueArgs>(args: Prisma.SelectSubset<T, one_time_tokensFindUniqueArgs<ExtArgs>>): Prisma.Prisma__one_time_tokensClient<runtime.Types.Result.GetResult<Prisma.$one_time_tokensPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends one_time_tokensFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, one_time_tokensFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__one_time_tokensClient<runtime.Types.Result.GetResult<Prisma.$one_time_tokensPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends one_time_tokensFindFirstArgs>(args?: Prisma.SelectSubset<T, one_time_tokensFindFirstArgs<ExtArgs>>): Prisma.Prisma__one_time_tokensClient<runtime.Types.Result.GetResult<Prisma.$one_time_tokensPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends one_time_tokensFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, one_time_tokensFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__one_time_tokensClient<runtime.Types.Result.GetResult<Prisma.$one_time_tokensPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends one_time_tokensFindManyArgs>(args?: Prisma.SelectSubset<T, one_time_tokensFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$one_time_tokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends one_time_tokensCreateArgs>(args: Prisma.SelectSubset<T, one_time_tokensCreateArgs<ExtArgs>>): Prisma.Prisma__one_time_tokensClient<runtime.Types.Result.GetResult<Prisma.$one_time_tokensPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends one_time_tokensCreateManyArgs>(args?: Prisma.SelectSubset<T, one_time_tokensCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends one_time_tokensCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, one_time_tokensCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$one_time_tokensPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends one_time_tokensDeleteArgs>(args: Prisma.SelectSubset<T, one_time_tokensDeleteArgs<ExtArgs>>): Prisma.Prisma__one_time_tokensClient<runtime.Types.Result.GetResult<Prisma.$one_time_tokensPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends one_time_tokensUpdateArgs>(args: Prisma.SelectSubset<T, one_time_tokensUpdateArgs<ExtArgs>>): Prisma.Prisma__one_time_tokensClient<runtime.Types.Result.GetResult<Prisma.$one_time_tokensPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends one_time_tokensDeleteManyArgs>(args?: Prisma.SelectSubset<T, one_time_tokensDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends one_time_tokensUpdateManyArgs>(args: Prisma.SelectSubset<T, one_time_tokensUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends one_time_tokensUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, one_time_tokensUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$one_time_tokensPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends one_time_tokensUpsertArgs>(args: Prisma.SelectSubset<T, one_time_tokensUpsertArgs<ExtArgs>>): Prisma.Prisma__one_time_tokensClient<runtime.Types.Result.GetResult<Prisma.$one_time_tokensPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends one_time_tokensCountArgs>(args?: Prisma.Subset<T, one_time_tokensCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], One_time_tokensCountAggregateOutputType> : number>;
    aggregate<T extends One_time_tokensAggregateArgs>(args: Prisma.Subset<T, One_time_tokensAggregateArgs>): Prisma.PrismaPromise<GetOne_time_tokensAggregateType<T>>;
    groupBy<T extends one_time_tokensGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: one_time_tokensGroupByArgs['orderBy'];
    } : {
        orderBy?: one_time_tokensGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, one_time_tokensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOne_time_tokensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: one_time_tokensFieldRefs;
}
export interface Prisma__one_time_tokensClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    users<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface one_time_tokensFieldRefs {
    readonly id: Prisma.FieldRef<"one_time_tokens", 'String'>;
    readonly user_id: Prisma.FieldRef<"one_time_tokens", 'String'>;
    readonly token_type: Prisma.FieldRef<"one_time_tokens", 'one_time_token_type'>;
    readonly token_hash: Prisma.FieldRef<"one_time_tokens", 'String'>;
    readonly relates_to: Prisma.FieldRef<"one_time_tokens", 'String'>;
    readonly created_at: Prisma.FieldRef<"one_time_tokens", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"one_time_tokens", 'DateTime'>;
}
export type one_time_tokensFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.one_time_tokensSelect<ExtArgs> | null;
    omit?: Prisma.one_time_tokensOmit<ExtArgs> | null;
    include?: Prisma.one_time_tokensInclude<ExtArgs> | null;
    where: Prisma.one_time_tokensWhereUniqueInput;
};
export type one_time_tokensFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.one_time_tokensSelect<ExtArgs> | null;
    omit?: Prisma.one_time_tokensOmit<ExtArgs> | null;
    include?: Prisma.one_time_tokensInclude<ExtArgs> | null;
    where: Prisma.one_time_tokensWhereUniqueInput;
};
export type one_time_tokensFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.one_time_tokensSelect<ExtArgs> | null;
    omit?: Prisma.one_time_tokensOmit<ExtArgs> | null;
    include?: Prisma.one_time_tokensInclude<ExtArgs> | null;
    where?: Prisma.one_time_tokensWhereInput;
    orderBy?: Prisma.one_time_tokensOrderByWithRelationInput | Prisma.one_time_tokensOrderByWithRelationInput[];
    cursor?: Prisma.one_time_tokensWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.One_time_tokensScalarFieldEnum | Prisma.One_time_tokensScalarFieldEnum[];
};
export type one_time_tokensFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.one_time_tokensSelect<ExtArgs> | null;
    omit?: Prisma.one_time_tokensOmit<ExtArgs> | null;
    include?: Prisma.one_time_tokensInclude<ExtArgs> | null;
    where?: Prisma.one_time_tokensWhereInput;
    orderBy?: Prisma.one_time_tokensOrderByWithRelationInput | Prisma.one_time_tokensOrderByWithRelationInput[];
    cursor?: Prisma.one_time_tokensWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.One_time_tokensScalarFieldEnum | Prisma.One_time_tokensScalarFieldEnum[];
};
export type one_time_tokensFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.one_time_tokensSelect<ExtArgs> | null;
    omit?: Prisma.one_time_tokensOmit<ExtArgs> | null;
    include?: Prisma.one_time_tokensInclude<ExtArgs> | null;
    where?: Prisma.one_time_tokensWhereInput;
    orderBy?: Prisma.one_time_tokensOrderByWithRelationInput | Prisma.one_time_tokensOrderByWithRelationInput[];
    cursor?: Prisma.one_time_tokensWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.One_time_tokensScalarFieldEnum | Prisma.One_time_tokensScalarFieldEnum[];
};
export type one_time_tokensCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.one_time_tokensSelect<ExtArgs> | null;
    omit?: Prisma.one_time_tokensOmit<ExtArgs> | null;
    include?: Prisma.one_time_tokensInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.one_time_tokensCreateInput, Prisma.one_time_tokensUncheckedCreateInput>;
};
export type one_time_tokensCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.one_time_tokensCreateManyInput | Prisma.one_time_tokensCreateManyInput[];
    skipDuplicates?: boolean;
};
export type one_time_tokensCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.one_time_tokensSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.one_time_tokensOmit<ExtArgs> | null;
    data: Prisma.one_time_tokensCreateManyInput | Prisma.one_time_tokensCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.one_time_tokensIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type one_time_tokensUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.one_time_tokensSelect<ExtArgs> | null;
    omit?: Prisma.one_time_tokensOmit<ExtArgs> | null;
    include?: Prisma.one_time_tokensInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.one_time_tokensUpdateInput, Prisma.one_time_tokensUncheckedUpdateInput>;
    where: Prisma.one_time_tokensWhereUniqueInput;
};
export type one_time_tokensUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.one_time_tokensUpdateManyMutationInput, Prisma.one_time_tokensUncheckedUpdateManyInput>;
    where?: Prisma.one_time_tokensWhereInput;
    limit?: number;
};
export type one_time_tokensUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.one_time_tokensSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.one_time_tokensOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.one_time_tokensUpdateManyMutationInput, Prisma.one_time_tokensUncheckedUpdateManyInput>;
    where?: Prisma.one_time_tokensWhereInput;
    limit?: number;
    include?: Prisma.one_time_tokensIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type one_time_tokensUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.one_time_tokensSelect<ExtArgs> | null;
    omit?: Prisma.one_time_tokensOmit<ExtArgs> | null;
    include?: Prisma.one_time_tokensInclude<ExtArgs> | null;
    where: Prisma.one_time_tokensWhereUniqueInput;
    create: Prisma.XOR<Prisma.one_time_tokensCreateInput, Prisma.one_time_tokensUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.one_time_tokensUpdateInput, Prisma.one_time_tokensUncheckedUpdateInput>;
};
export type one_time_tokensDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.one_time_tokensSelect<ExtArgs> | null;
    omit?: Prisma.one_time_tokensOmit<ExtArgs> | null;
    include?: Prisma.one_time_tokensInclude<ExtArgs> | null;
    where: Prisma.one_time_tokensWhereUniqueInput;
};
export type one_time_tokensDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.one_time_tokensWhereInput;
    limit?: number;
};
export type one_time_tokensDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.one_time_tokensSelect<ExtArgs> | null;
    omit?: Prisma.one_time_tokensOmit<ExtArgs> | null;
    include?: Prisma.one_time_tokensInclude<ExtArgs> | null;
};
