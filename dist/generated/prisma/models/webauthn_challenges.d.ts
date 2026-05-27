import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type webauthn_challengesModel = runtime.Types.Result.DefaultSelection<Prisma.$webauthn_challengesPayload>;
export type AggregateWebauthn_challenges = {
    _count: Webauthn_challengesCountAggregateOutputType | null;
    _min: Webauthn_challengesMinAggregateOutputType | null;
    _max: Webauthn_challengesMaxAggregateOutputType | null;
};
export type Webauthn_challengesMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    challenge_type: string | null;
    created_at: Date | null;
    expires_at: Date | null;
};
export type Webauthn_challengesMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    challenge_type: string | null;
    created_at: Date | null;
    expires_at: Date | null;
};
export type Webauthn_challengesCountAggregateOutputType = {
    id: number;
    user_id: number;
    challenge_type: number;
    session_data: number;
    created_at: number;
    expires_at: number;
    _all: number;
};
export type Webauthn_challengesMinAggregateInputType = {
    id?: true;
    user_id?: true;
    challenge_type?: true;
    created_at?: true;
    expires_at?: true;
};
export type Webauthn_challengesMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    challenge_type?: true;
    created_at?: true;
    expires_at?: true;
};
export type Webauthn_challengesCountAggregateInputType = {
    id?: true;
    user_id?: true;
    challenge_type?: true;
    session_data?: true;
    created_at?: true;
    expires_at?: true;
    _all?: true;
};
export type Webauthn_challengesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.webauthn_challengesWhereInput;
    orderBy?: Prisma.webauthn_challengesOrderByWithRelationInput | Prisma.webauthn_challengesOrderByWithRelationInput[];
    cursor?: Prisma.webauthn_challengesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Webauthn_challengesCountAggregateInputType;
    _min?: Webauthn_challengesMinAggregateInputType;
    _max?: Webauthn_challengesMaxAggregateInputType;
};
export type GetWebauthn_challengesAggregateType<T extends Webauthn_challengesAggregateArgs> = {
    [P in keyof T & keyof AggregateWebauthn_challenges]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWebauthn_challenges[P]> : Prisma.GetScalarType<T[P], AggregateWebauthn_challenges[P]>;
};
export type webauthn_challengesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.webauthn_challengesWhereInput;
    orderBy?: Prisma.webauthn_challengesOrderByWithAggregationInput | Prisma.webauthn_challengesOrderByWithAggregationInput[];
    by: Prisma.Webauthn_challengesScalarFieldEnum[] | Prisma.Webauthn_challengesScalarFieldEnum;
    having?: Prisma.webauthn_challengesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Webauthn_challengesCountAggregateInputType | true;
    _min?: Webauthn_challengesMinAggregateInputType;
    _max?: Webauthn_challengesMaxAggregateInputType;
};
export type Webauthn_challengesGroupByOutputType = {
    id: string;
    user_id: string | null;
    challenge_type: string;
    session_data: runtime.JsonValue;
    created_at: Date;
    expires_at: Date;
    _count: Webauthn_challengesCountAggregateOutputType | null;
    _min: Webauthn_challengesMinAggregateOutputType | null;
    _max: Webauthn_challengesMaxAggregateOutputType | null;
};
export type GetWebauthn_challengesGroupByPayload<T extends webauthn_challengesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Webauthn_challengesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Webauthn_challengesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Webauthn_challengesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Webauthn_challengesGroupByOutputType[P]>;
}>>;
export type webauthn_challengesWhereInput = {
    AND?: Prisma.webauthn_challengesWhereInput | Prisma.webauthn_challengesWhereInput[];
    OR?: Prisma.webauthn_challengesWhereInput[];
    NOT?: Prisma.webauthn_challengesWhereInput | Prisma.webauthn_challengesWhereInput[];
    id?: Prisma.UuidFilter<"webauthn_challenges"> | string;
    user_id?: Prisma.UuidNullableFilter<"webauthn_challenges"> | string | null;
    challenge_type?: Prisma.StringFilter<"webauthn_challenges"> | string;
    session_data?: Prisma.JsonFilter<"webauthn_challenges">;
    created_at?: Prisma.DateTimeFilter<"webauthn_challenges"> | Date | string;
    expires_at?: Prisma.DateTimeFilter<"webauthn_challenges"> | Date | string;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
};
export type webauthn_challengesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    challenge_type?: Prisma.SortOrder;
    session_data?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    expires_at?: Prisma.SortOrder;
    users?: Prisma.usersOrderByWithRelationInput;
};
export type webauthn_challengesWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.webauthn_challengesWhereInput | Prisma.webauthn_challengesWhereInput[];
    OR?: Prisma.webauthn_challengesWhereInput[];
    NOT?: Prisma.webauthn_challengesWhereInput | Prisma.webauthn_challengesWhereInput[];
    user_id?: Prisma.UuidNullableFilter<"webauthn_challenges"> | string | null;
    challenge_type?: Prisma.StringFilter<"webauthn_challenges"> | string;
    session_data?: Prisma.JsonFilter<"webauthn_challenges">;
    created_at?: Prisma.DateTimeFilter<"webauthn_challenges"> | Date | string;
    expires_at?: Prisma.DateTimeFilter<"webauthn_challenges"> | Date | string;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
}, "id">;
export type webauthn_challengesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    challenge_type?: Prisma.SortOrder;
    session_data?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    expires_at?: Prisma.SortOrder;
    _count?: Prisma.webauthn_challengesCountOrderByAggregateInput;
    _max?: Prisma.webauthn_challengesMaxOrderByAggregateInput;
    _min?: Prisma.webauthn_challengesMinOrderByAggregateInput;
};
export type webauthn_challengesScalarWhereWithAggregatesInput = {
    AND?: Prisma.webauthn_challengesScalarWhereWithAggregatesInput | Prisma.webauthn_challengesScalarWhereWithAggregatesInput[];
    OR?: Prisma.webauthn_challengesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.webauthn_challengesScalarWhereWithAggregatesInput | Prisma.webauthn_challengesScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"webauthn_challenges"> | string;
    user_id?: Prisma.UuidNullableWithAggregatesFilter<"webauthn_challenges"> | string | null;
    challenge_type?: Prisma.StringWithAggregatesFilter<"webauthn_challenges"> | string;
    session_data?: Prisma.JsonWithAggregatesFilter<"webauthn_challenges">;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"webauthn_challenges"> | Date | string;
    expires_at?: Prisma.DateTimeWithAggregatesFilter<"webauthn_challenges"> | Date | string;
};
export type webauthn_challengesCreateInput = {
    id?: string;
    challenge_type: string;
    session_data: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
    expires_at: Date | string;
    users?: Prisma.usersCreateNestedOneWithoutWebauthn_challengesInput;
};
export type webauthn_challengesUncheckedCreateInput = {
    id?: string;
    user_id?: string | null;
    challenge_type: string;
    session_data: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
    expires_at: Date | string;
};
export type webauthn_challengesUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    challenge_type?: Prisma.StringFieldUpdateOperationsInput | string;
    session_data?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expires_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.usersUpdateOneWithoutWebauthn_challengesNestedInput;
};
export type webauthn_challengesUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    challenge_type?: Prisma.StringFieldUpdateOperationsInput | string;
    session_data?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expires_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type webauthn_challengesCreateManyInput = {
    id?: string;
    user_id?: string | null;
    challenge_type: string;
    session_data: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
    expires_at: Date | string;
};
export type webauthn_challengesUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    challenge_type?: Prisma.StringFieldUpdateOperationsInput | string;
    session_data?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expires_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type webauthn_challengesUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    challenge_type?: Prisma.StringFieldUpdateOperationsInput | string;
    session_data?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expires_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Webauthn_challengesListRelationFilter = {
    every?: Prisma.webauthn_challengesWhereInput;
    some?: Prisma.webauthn_challengesWhereInput;
    none?: Prisma.webauthn_challengesWhereInput;
};
export type webauthn_challengesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type webauthn_challengesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    challenge_type?: Prisma.SortOrder;
    session_data?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    expires_at?: Prisma.SortOrder;
};
export type webauthn_challengesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    challenge_type?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    expires_at?: Prisma.SortOrder;
};
export type webauthn_challengesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    challenge_type?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    expires_at?: Prisma.SortOrder;
};
export type webauthn_challengesCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.webauthn_challengesCreateWithoutUsersInput, Prisma.webauthn_challengesUncheckedCreateWithoutUsersInput> | Prisma.webauthn_challengesCreateWithoutUsersInput[] | Prisma.webauthn_challengesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.webauthn_challengesCreateOrConnectWithoutUsersInput | Prisma.webauthn_challengesCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.webauthn_challengesCreateManyUsersInputEnvelope;
    connect?: Prisma.webauthn_challengesWhereUniqueInput | Prisma.webauthn_challengesWhereUniqueInput[];
};
export type webauthn_challengesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.webauthn_challengesCreateWithoutUsersInput, Prisma.webauthn_challengesUncheckedCreateWithoutUsersInput> | Prisma.webauthn_challengesCreateWithoutUsersInput[] | Prisma.webauthn_challengesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.webauthn_challengesCreateOrConnectWithoutUsersInput | Prisma.webauthn_challengesCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.webauthn_challengesCreateManyUsersInputEnvelope;
    connect?: Prisma.webauthn_challengesWhereUniqueInput | Prisma.webauthn_challengesWhereUniqueInput[];
};
export type webauthn_challengesUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.webauthn_challengesCreateWithoutUsersInput, Prisma.webauthn_challengesUncheckedCreateWithoutUsersInput> | Prisma.webauthn_challengesCreateWithoutUsersInput[] | Prisma.webauthn_challengesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.webauthn_challengesCreateOrConnectWithoutUsersInput | Prisma.webauthn_challengesCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.webauthn_challengesUpsertWithWhereUniqueWithoutUsersInput | Prisma.webauthn_challengesUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.webauthn_challengesCreateManyUsersInputEnvelope;
    set?: Prisma.webauthn_challengesWhereUniqueInput | Prisma.webauthn_challengesWhereUniqueInput[];
    disconnect?: Prisma.webauthn_challengesWhereUniqueInput | Prisma.webauthn_challengesWhereUniqueInput[];
    delete?: Prisma.webauthn_challengesWhereUniqueInput | Prisma.webauthn_challengesWhereUniqueInput[];
    connect?: Prisma.webauthn_challengesWhereUniqueInput | Prisma.webauthn_challengesWhereUniqueInput[];
    update?: Prisma.webauthn_challengesUpdateWithWhereUniqueWithoutUsersInput | Prisma.webauthn_challengesUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.webauthn_challengesUpdateManyWithWhereWithoutUsersInput | Prisma.webauthn_challengesUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.webauthn_challengesScalarWhereInput | Prisma.webauthn_challengesScalarWhereInput[];
};
export type webauthn_challengesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.webauthn_challengesCreateWithoutUsersInput, Prisma.webauthn_challengesUncheckedCreateWithoutUsersInput> | Prisma.webauthn_challengesCreateWithoutUsersInput[] | Prisma.webauthn_challengesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.webauthn_challengesCreateOrConnectWithoutUsersInput | Prisma.webauthn_challengesCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.webauthn_challengesUpsertWithWhereUniqueWithoutUsersInput | Prisma.webauthn_challengesUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.webauthn_challengesCreateManyUsersInputEnvelope;
    set?: Prisma.webauthn_challengesWhereUniqueInput | Prisma.webauthn_challengesWhereUniqueInput[];
    disconnect?: Prisma.webauthn_challengesWhereUniqueInput | Prisma.webauthn_challengesWhereUniqueInput[];
    delete?: Prisma.webauthn_challengesWhereUniqueInput | Prisma.webauthn_challengesWhereUniqueInput[];
    connect?: Prisma.webauthn_challengesWhereUniqueInput | Prisma.webauthn_challengesWhereUniqueInput[];
    update?: Prisma.webauthn_challengesUpdateWithWhereUniqueWithoutUsersInput | Prisma.webauthn_challengesUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.webauthn_challengesUpdateManyWithWhereWithoutUsersInput | Prisma.webauthn_challengesUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.webauthn_challengesScalarWhereInput | Prisma.webauthn_challengesScalarWhereInput[];
};
export type webauthn_challengesCreateWithoutUsersInput = {
    id?: string;
    challenge_type: string;
    session_data: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
    expires_at: Date | string;
};
export type webauthn_challengesUncheckedCreateWithoutUsersInput = {
    id?: string;
    challenge_type: string;
    session_data: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
    expires_at: Date | string;
};
export type webauthn_challengesCreateOrConnectWithoutUsersInput = {
    where: Prisma.webauthn_challengesWhereUniqueInput;
    create: Prisma.XOR<Prisma.webauthn_challengesCreateWithoutUsersInput, Prisma.webauthn_challengesUncheckedCreateWithoutUsersInput>;
};
export type webauthn_challengesCreateManyUsersInputEnvelope = {
    data: Prisma.webauthn_challengesCreateManyUsersInput | Prisma.webauthn_challengesCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type webauthn_challengesUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.webauthn_challengesWhereUniqueInput;
    update: Prisma.XOR<Prisma.webauthn_challengesUpdateWithoutUsersInput, Prisma.webauthn_challengesUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.webauthn_challengesCreateWithoutUsersInput, Prisma.webauthn_challengesUncheckedCreateWithoutUsersInput>;
};
export type webauthn_challengesUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.webauthn_challengesWhereUniqueInput;
    data: Prisma.XOR<Prisma.webauthn_challengesUpdateWithoutUsersInput, Prisma.webauthn_challengesUncheckedUpdateWithoutUsersInput>;
};
export type webauthn_challengesUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.webauthn_challengesScalarWhereInput;
    data: Prisma.XOR<Prisma.webauthn_challengesUpdateManyMutationInput, Prisma.webauthn_challengesUncheckedUpdateManyWithoutUsersInput>;
};
export type webauthn_challengesScalarWhereInput = {
    AND?: Prisma.webauthn_challengesScalarWhereInput | Prisma.webauthn_challengesScalarWhereInput[];
    OR?: Prisma.webauthn_challengesScalarWhereInput[];
    NOT?: Prisma.webauthn_challengesScalarWhereInput | Prisma.webauthn_challengesScalarWhereInput[];
    id?: Prisma.UuidFilter<"webauthn_challenges"> | string;
    user_id?: Prisma.UuidNullableFilter<"webauthn_challenges"> | string | null;
    challenge_type?: Prisma.StringFilter<"webauthn_challenges"> | string;
    session_data?: Prisma.JsonFilter<"webauthn_challenges">;
    created_at?: Prisma.DateTimeFilter<"webauthn_challenges"> | Date | string;
    expires_at?: Prisma.DateTimeFilter<"webauthn_challenges"> | Date | string;
};
export type webauthn_challengesCreateManyUsersInput = {
    id?: string;
    challenge_type: string;
    session_data: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
    expires_at: Date | string;
};
export type webauthn_challengesUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    challenge_type?: Prisma.StringFieldUpdateOperationsInput | string;
    session_data?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expires_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type webauthn_challengesUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    challenge_type?: Prisma.StringFieldUpdateOperationsInput | string;
    session_data?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expires_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type webauthn_challengesUncheckedUpdateManyWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    challenge_type?: Prisma.StringFieldUpdateOperationsInput | string;
    session_data?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expires_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type webauthn_challengesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    challenge_type?: boolean;
    session_data?: boolean;
    created_at?: boolean;
    expires_at?: boolean;
    users?: boolean | Prisma.webauthn_challenges$usersArgs<ExtArgs>;
}, ExtArgs["result"]["webauthn_challenges"]>;
export type webauthn_challengesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    challenge_type?: boolean;
    session_data?: boolean;
    created_at?: boolean;
    expires_at?: boolean;
    users?: boolean | Prisma.webauthn_challenges$usersArgs<ExtArgs>;
}, ExtArgs["result"]["webauthn_challenges"]>;
export type webauthn_challengesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    challenge_type?: boolean;
    session_data?: boolean;
    created_at?: boolean;
    expires_at?: boolean;
    users?: boolean | Prisma.webauthn_challenges$usersArgs<ExtArgs>;
}, ExtArgs["result"]["webauthn_challenges"]>;
export type webauthn_challengesSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    challenge_type?: boolean;
    session_data?: boolean;
    created_at?: boolean;
    expires_at?: boolean;
};
export type webauthn_challengesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "challenge_type" | "session_data" | "created_at" | "expires_at", ExtArgs["result"]["webauthn_challenges"]>;
export type webauthn_challengesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.webauthn_challenges$usersArgs<ExtArgs>;
};
export type webauthn_challengesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.webauthn_challenges$usersArgs<ExtArgs>;
};
export type webauthn_challengesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.webauthn_challenges$usersArgs<ExtArgs>;
};
export type $webauthn_challengesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "webauthn_challenges";
    objects: {
        users: Prisma.$usersPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        user_id: string | null;
        challenge_type: string;
        session_data: runtime.JsonValue;
        created_at: Date;
        expires_at: Date;
    }, ExtArgs["result"]["webauthn_challenges"]>;
    composites: {};
};
export type webauthn_challengesGetPayload<S extends boolean | null | undefined | webauthn_challengesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$webauthn_challengesPayload, S>;
export type webauthn_challengesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<webauthn_challengesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Webauthn_challengesCountAggregateInputType | true;
};
export interface webauthn_challengesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['webauthn_challenges'];
        meta: {
            name: 'webauthn_challenges';
        };
    };
    findUnique<T extends webauthn_challengesFindUniqueArgs>(args: Prisma.SelectSubset<T, webauthn_challengesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__webauthn_challengesClient<runtime.Types.Result.GetResult<Prisma.$webauthn_challengesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends webauthn_challengesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, webauthn_challengesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__webauthn_challengesClient<runtime.Types.Result.GetResult<Prisma.$webauthn_challengesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends webauthn_challengesFindFirstArgs>(args?: Prisma.SelectSubset<T, webauthn_challengesFindFirstArgs<ExtArgs>>): Prisma.Prisma__webauthn_challengesClient<runtime.Types.Result.GetResult<Prisma.$webauthn_challengesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends webauthn_challengesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, webauthn_challengesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__webauthn_challengesClient<runtime.Types.Result.GetResult<Prisma.$webauthn_challengesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends webauthn_challengesFindManyArgs>(args?: Prisma.SelectSubset<T, webauthn_challengesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$webauthn_challengesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends webauthn_challengesCreateArgs>(args: Prisma.SelectSubset<T, webauthn_challengesCreateArgs<ExtArgs>>): Prisma.Prisma__webauthn_challengesClient<runtime.Types.Result.GetResult<Prisma.$webauthn_challengesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends webauthn_challengesCreateManyArgs>(args?: Prisma.SelectSubset<T, webauthn_challengesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends webauthn_challengesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, webauthn_challengesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$webauthn_challengesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends webauthn_challengesDeleteArgs>(args: Prisma.SelectSubset<T, webauthn_challengesDeleteArgs<ExtArgs>>): Prisma.Prisma__webauthn_challengesClient<runtime.Types.Result.GetResult<Prisma.$webauthn_challengesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends webauthn_challengesUpdateArgs>(args: Prisma.SelectSubset<T, webauthn_challengesUpdateArgs<ExtArgs>>): Prisma.Prisma__webauthn_challengesClient<runtime.Types.Result.GetResult<Prisma.$webauthn_challengesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends webauthn_challengesDeleteManyArgs>(args?: Prisma.SelectSubset<T, webauthn_challengesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends webauthn_challengesUpdateManyArgs>(args: Prisma.SelectSubset<T, webauthn_challengesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends webauthn_challengesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, webauthn_challengesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$webauthn_challengesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends webauthn_challengesUpsertArgs>(args: Prisma.SelectSubset<T, webauthn_challengesUpsertArgs<ExtArgs>>): Prisma.Prisma__webauthn_challengesClient<runtime.Types.Result.GetResult<Prisma.$webauthn_challengesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends webauthn_challengesCountArgs>(args?: Prisma.Subset<T, webauthn_challengesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Webauthn_challengesCountAggregateOutputType> : number>;
    aggregate<T extends Webauthn_challengesAggregateArgs>(args: Prisma.Subset<T, Webauthn_challengesAggregateArgs>): Prisma.PrismaPromise<GetWebauthn_challengesAggregateType<T>>;
    groupBy<T extends webauthn_challengesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: webauthn_challengesGroupByArgs['orderBy'];
    } : {
        orderBy?: webauthn_challengesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, webauthn_challengesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebauthn_challengesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: webauthn_challengesFieldRefs;
}
export interface Prisma__webauthn_challengesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    users<T extends Prisma.webauthn_challenges$usersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.webauthn_challenges$usersArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface webauthn_challengesFieldRefs {
    readonly id: Prisma.FieldRef<"webauthn_challenges", 'String'>;
    readonly user_id: Prisma.FieldRef<"webauthn_challenges", 'String'>;
    readonly challenge_type: Prisma.FieldRef<"webauthn_challenges", 'String'>;
    readonly session_data: Prisma.FieldRef<"webauthn_challenges", 'Json'>;
    readonly created_at: Prisma.FieldRef<"webauthn_challenges", 'DateTime'>;
    readonly expires_at: Prisma.FieldRef<"webauthn_challenges", 'DateTime'>;
}
export type webauthn_challengesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.webauthn_challengesSelect<ExtArgs> | null;
    omit?: Prisma.webauthn_challengesOmit<ExtArgs> | null;
    include?: Prisma.webauthn_challengesInclude<ExtArgs> | null;
    where: Prisma.webauthn_challengesWhereUniqueInput;
};
export type webauthn_challengesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.webauthn_challengesSelect<ExtArgs> | null;
    omit?: Prisma.webauthn_challengesOmit<ExtArgs> | null;
    include?: Prisma.webauthn_challengesInclude<ExtArgs> | null;
    where: Prisma.webauthn_challengesWhereUniqueInput;
};
export type webauthn_challengesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.webauthn_challengesSelect<ExtArgs> | null;
    omit?: Prisma.webauthn_challengesOmit<ExtArgs> | null;
    include?: Prisma.webauthn_challengesInclude<ExtArgs> | null;
    where?: Prisma.webauthn_challengesWhereInput;
    orderBy?: Prisma.webauthn_challengesOrderByWithRelationInput | Prisma.webauthn_challengesOrderByWithRelationInput[];
    cursor?: Prisma.webauthn_challengesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Webauthn_challengesScalarFieldEnum | Prisma.Webauthn_challengesScalarFieldEnum[];
};
export type webauthn_challengesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.webauthn_challengesSelect<ExtArgs> | null;
    omit?: Prisma.webauthn_challengesOmit<ExtArgs> | null;
    include?: Prisma.webauthn_challengesInclude<ExtArgs> | null;
    where?: Prisma.webauthn_challengesWhereInput;
    orderBy?: Prisma.webauthn_challengesOrderByWithRelationInput | Prisma.webauthn_challengesOrderByWithRelationInput[];
    cursor?: Prisma.webauthn_challengesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Webauthn_challengesScalarFieldEnum | Prisma.Webauthn_challengesScalarFieldEnum[];
};
export type webauthn_challengesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.webauthn_challengesSelect<ExtArgs> | null;
    omit?: Prisma.webauthn_challengesOmit<ExtArgs> | null;
    include?: Prisma.webauthn_challengesInclude<ExtArgs> | null;
    where?: Prisma.webauthn_challengesWhereInput;
    orderBy?: Prisma.webauthn_challengesOrderByWithRelationInput | Prisma.webauthn_challengesOrderByWithRelationInput[];
    cursor?: Prisma.webauthn_challengesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Webauthn_challengesScalarFieldEnum | Prisma.Webauthn_challengesScalarFieldEnum[];
};
export type webauthn_challengesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.webauthn_challengesSelect<ExtArgs> | null;
    omit?: Prisma.webauthn_challengesOmit<ExtArgs> | null;
    include?: Prisma.webauthn_challengesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.webauthn_challengesCreateInput, Prisma.webauthn_challengesUncheckedCreateInput>;
};
export type webauthn_challengesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.webauthn_challengesCreateManyInput | Prisma.webauthn_challengesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type webauthn_challengesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.webauthn_challengesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.webauthn_challengesOmit<ExtArgs> | null;
    data: Prisma.webauthn_challengesCreateManyInput | Prisma.webauthn_challengesCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.webauthn_challengesIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type webauthn_challengesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.webauthn_challengesSelect<ExtArgs> | null;
    omit?: Prisma.webauthn_challengesOmit<ExtArgs> | null;
    include?: Prisma.webauthn_challengesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.webauthn_challengesUpdateInput, Prisma.webauthn_challengesUncheckedUpdateInput>;
    where: Prisma.webauthn_challengesWhereUniqueInput;
};
export type webauthn_challengesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.webauthn_challengesUpdateManyMutationInput, Prisma.webauthn_challengesUncheckedUpdateManyInput>;
    where?: Prisma.webauthn_challengesWhereInput;
    limit?: number;
};
export type webauthn_challengesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.webauthn_challengesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.webauthn_challengesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.webauthn_challengesUpdateManyMutationInput, Prisma.webauthn_challengesUncheckedUpdateManyInput>;
    where?: Prisma.webauthn_challengesWhereInput;
    limit?: number;
    include?: Prisma.webauthn_challengesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type webauthn_challengesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.webauthn_challengesSelect<ExtArgs> | null;
    omit?: Prisma.webauthn_challengesOmit<ExtArgs> | null;
    include?: Prisma.webauthn_challengesInclude<ExtArgs> | null;
    where: Prisma.webauthn_challengesWhereUniqueInput;
    create: Prisma.XOR<Prisma.webauthn_challengesCreateInput, Prisma.webauthn_challengesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.webauthn_challengesUpdateInput, Prisma.webauthn_challengesUncheckedUpdateInput>;
};
export type webauthn_challengesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.webauthn_challengesSelect<ExtArgs> | null;
    omit?: Prisma.webauthn_challengesOmit<ExtArgs> | null;
    include?: Prisma.webauthn_challengesInclude<ExtArgs> | null;
    where: Prisma.webauthn_challengesWhereUniqueInput;
};
export type webauthn_challengesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.webauthn_challengesWhereInput;
    limit?: number;
};
export type webauthn_challenges$usersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
};
export type webauthn_challengesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.webauthn_challengesSelect<ExtArgs> | null;
    omit?: Prisma.webauthn_challengesOmit<ExtArgs> | null;
    include?: Prisma.webauthn_challengesInclude<ExtArgs> | null;
};
