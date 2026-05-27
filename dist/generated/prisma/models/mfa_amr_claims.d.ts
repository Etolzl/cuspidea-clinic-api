import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type mfa_amr_claimsModel = runtime.Types.Result.DefaultSelection<Prisma.$mfa_amr_claimsPayload>;
export type AggregateMfa_amr_claims = {
    _count: Mfa_amr_claimsCountAggregateOutputType | null;
    _min: Mfa_amr_claimsMinAggregateOutputType | null;
    _max: Mfa_amr_claimsMaxAggregateOutputType | null;
};
export type Mfa_amr_claimsMinAggregateOutputType = {
    session_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    authentication_method: string | null;
    id: string | null;
};
export type Mfa_amr_claimsMaxAggregateOutputType = {
    session_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    authentication_method: string | null;
    id: string | null;
};
export type Mfa_amr_claimsCountAggregateOutputType = {
    session_id: number;
    created_at: number;
    updated_at: number;
    authentication_method: number;
    id: number;
    _all: number;
};
export type Mfa_amr_claimsMinAggregateInputType = {
    session_id?: true;
    created_at?: true;
    updated_at?: true;
    authentication_method?: true;
    id?: true;
};
export type Mfa_amr_claimsMaxAggregateInputType = {
    session_id?: true;
    created_at?: true;
    updated_at?: true;
    authentication_method?: true;
    id?: true;
};
export type Mfa_amr_claimsCountAggregateInputType = {
    session_id?: true;
    created_at?: true;
    updated_at?: true;
    authentication_method?: true;
    id?: true;
    _all?: true;
};
export type Mfa_amr_claimsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.mfa_amr_claimsWhereInput;
    orderBy?: Prisma.mfa_amr_claimsOrderByWithRelationInput | Prisma.mfa_amr_claimsOrderByWithRelationInput[];
    cursor?: Prisma.mfa_amr_claimsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Mfa_amr_claimsCountAggregateInputType;
    _min?: Mfa_amr_claimsMinAggregateInputType;
    _max?: Mfa_amr_claimsMaxAggregateInputType;
};
export type GetMfa_amr_claimsAggregateType<T extends Mfa_amr_claimsAggregateArgs> = {
    [P in keyof T & keyof AggregateMfa_amr_claims]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMfa_amr_claims[P]> : Prisma.GetScalarType<T[P], AggregateMfa_amr_claims[P]>;
};
export type mfa_amr_claimsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.mfa_amr_claimsWhereInput;
    orderBy?: Prisma.mfa_amr_claimsOrderByWithAggregationInput | Prisma.mfa_amr_claimsOrderByWithAggregationInput[];
    by: Prisma.Mfa_amr_claimsScalarFieldEnum[] | Prisma.Mfa_amr_claimsScalarFieldEnum;
    having?: Prisma.mfa_amr_claimsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Mfa_amr_claimsCountAggregateInputType | true;
    _min?: Mfa_amr_claimsMinAggregateInputType;
    _max?: Mfa_amr_claimsMaxAggregateInputType;
};
export type Mfa_amr_claimsGroupByOutputType = {
    session_id: string;
    created_at: Date;
    updated_at: Date;
    authentication_method: string;
    id: string;
    _count: Mfa_amr_claimsCountAggregateOutputType | null;
    _min: Mfa_amr_claimsMinAggregateOutputType | null;
    _max: Mfa_amr_claimsMaxAggregateOutputType | null;
};
export type GetMfa_amr_claimsGroupByPayload<T extends mfa_amr_claimsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Mfa_amr_claimsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Mfa_amr_claimsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Mfa_amr_claimsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Mfa_amr_claimsGroupByOutputType[P]>;
}>>;
export type mfa_amr_claimsWhereInput = {
    AND?: Prisma.mfa_amr_claimsWhereInput | Prisma.mfa_amr_claimsWhereInput[];
    OR?: Prisma.mfa_amr_claimsWhereInput[];
    NOT?: Prisma.mfa_amr_claimsWhereInput | Prisma.mfa_amr_claimsWhereInput[];
    session_id?: Prisma.UuidFilter<"mfa_amr_claims"> | string;
    created_at?: Prisma.DateTimeFilter<"mfa_amr_claims"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"mfa_amr_claims"> | Date | string;
    authentication_method?: Prisma.StringFilter<"mfa_amr_claims"> | string;
    id?: Prisma.UuidFilter<"mfa_amr_claims"> | string;
    sessions?: Prisma.XOR<Prisma.SessionsScalarRelationFilter, Prisma.sessionsWhereInput>;
};
export type mfa_amr_claimsOrderByWithRelationInput = {
    session_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    authentication_method?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
    sessions?: Prisma.sessionsOrderByWithRelationInput;
};
export type mfa_amr_claimsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    session_id_authentication_method?: Prisma.mfa_amr_claimsSession_idAuthentication_methodCompoundUniqueInput;
    AND?: Prisma.mfa_amr_claimsWhereInput | Prisma.mfa_amr_claimsWhereInput[];
    OR?: Prisma.mfa_amr_claimsWhereInput[];
    NOT?: Prisma.mfa_amr_claimsWhereInput | Prisma.mfa_amr_claimsWhereInput[];
    session_id?: Prisma.UuidFilter<"mfa_amr_claims"> | string;
    created_at?: Prisma.DateTimeFilter<"mfa_amr_claims"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"mfa_amr_claims"> | Date | string;
    authentication_method?: Prisma.StringFilter<"mfa_amr_claims"> | string;
    sessions?: Prisma.XOR<Prisma.SessionsScalarRelationFilter, Prisma.sessionsWhereInput>;
}, "id" | "session_id_authentication_method">;
export type mfa_amr_claimsOrderByWithAggregationInput = {
    session_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    authentication_method?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
    _count?: Prisma.mfa_amr_claimsCountOrderByAggregateInput;
    _max?: Prisma.mfa_amr_claimsMaxOrderByAggregateInput;
    _min?: Prisma.mfa_amr_claimsMinOrderByAggregateInput;
};
export type mfa_amr_claimsScalarWhereWithAggregatesInput = {
    AND?: Prisma.mfa_amr_claimsScalarWhereWithAggregatesInput | Prisma.mfa_amr_claimsScalarWhereWithAggregatesInput[];
    OR?: Prisma.mfa_amr_claimsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.mfa_amr_claimsScalarWhereWithAggregatesInput | Prisma.mfa_amr_claimsScalarWhereWithAggregatesInput[];
    session_id?: Prisma.UuidWithAggregatesFilter<"mfa_amr_claims"> | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"mfa_amr_claims"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"mfa_amr_claims"> | Date | string;
    authentication_method?: Prisma.StringWithAggregatesFilter<"mfa_amr_claims"> | string;
    id?: Prisma.UuidWithAggregatesFilter<"mfa_amr_claims"> | string;
};
export type mfa_amr_claimsCreateInput = {
    created_at: Date | string;
    updated_at: Date | string;
    authentication_method: string;
    id: string;
    sessions: Prisma.sessionsCreateNestedOneWithoutMfa_amr_claimsInput;
};
export type mfa_amr_claimsUncheckedCreateInput = {
    session_id: string;
    created_at: Date | string;
    updated_at: Date | string;
    authentication_method: string;
    id: string;
};
export type mfa_amr_claimsUpdateInput = {
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    authentication_method?: Prisma.StringFieldUpdateOperationsInput | string;
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sessions?: Prisma.sessionsUpdateOneRequiredWithoutMfa_amr_claimsNestedInput;
};
export type mfa_amr_claimsUncheckedUpdateInput = {
    session_id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    authentication_method?: Prisma.StringFieldUpdateOperationsInput | string;
    id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type mfa_amr_claimsCreateManyInput = {
    session_id: string;
    created_at: Date | string;
    updated_at: Date | string;
    authentication_method: string;
    id: string;
};
export type mfa_amr_claimsUpdateManyMutationInput = {
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    authentication_method?: Prisma.StringFieldUpdateOperationsInput | string;
    id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type mfa_amr_claimsUncheckedUpdateManyInput = {
    session_id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    authentication_method?: Prisma.StringFieldUpdateOperationsInput | string;
    id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type mfa_amr_claimsSession_idAuthentication_methodCompoundUniqueInput = {
    session_id: string;
    authentication_method: string;
};
export type mfa_amr_claimsCountOrderByAggregateInput = {
    session_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    authentication_method?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
};
export type mfa_amr_claimsMaxOrderByAggregateInput = {
    session_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    authentication_method?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
};
export type mfa_amr_claimsMinOrderByAggregateInput = {
    session_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    authentication_method?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
};
export type Mfa_amr_claimsListRelationFilter = {
    every?: Prisma.mfa_amr_claimsWhereInput;
    some?: Prisma.mfa_amr_claimsWhereInput;
    none?: Prisma.mfa_amr_claimsWhereInput;
};
export type mfa_amr_claimsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type mfa_amr_claimsCreateNestedManyWithoutSessionsInput = {
    create?: Prisma.XOR<Prisma.mfa_amr_claimsCreateWithoutSessionsInput, Prisma.mfa_amr_claimsUncheckedCreateWithoutSessionsInput> | Prisma.mfa_amr_claimsCreateWithoutSessionsInput[] | Prisma.mfa_amr_claimsUncheckedCreateWithoutSessionsInput[];
    connectOrCreate?: Prisma.mfa_amr_claimsCreateOrConnectWithoutSessionsInput | Prisma.mfa_amr_claimsCreateOrConnectWithoutSessionsInput[];
    createMany?: Prisma.mfa_amr_claimsCreateManySessionsInputEnvelope;
    connect?: Prisma.mfa_amr_claimsWhereUniqueInput | Prisma.mfa_amr_claimsWhereUniqueInput[];
};
export type mfa_amr_claimsUncheckedCreateNestedManyWithoutSessionsInput = {
    create?: Prisma.XOR<Prisma.mfa_amr_claimsCreateWithoutSessionsInput, Prisma.mfa_amr_claimsUncheckedCreateWithoutSessionsInput> | Prisma.mfa_amr_claimsCreateWithoutSessionsInput[] | Prisma.mfa_amr_claimsUncheckedCreateWithoutSessionsInput[];
    connectOrCreate?: Prisma.mfa_amr_claimsCreateOrConnectWithoutSessionsInput | Prisma.mfa_amr_claimsCreateOrConnectWithoutSessionsInput[];
    createMany?: Prisma.mfa_amr_claimsCreateManySessionsInputEnvelope;
    connect?: Prisma.mfa_amr_claimsWhereUniqueInput | Prisma.mfa_amr_claimsWhereUniqueInput[];
};
export type mfa_amr_claimsUpdateManyWithoutSessionsNestedInput = {
    create?: Prisma.XOR<Prisma.mfa_amr_claimsCreateWithoutSessionsInput, Prisma.mfa_amr_claimsUncheckedCreateWithoutSessionsInput> | Prisma.mfa_amr_claimsCreateWithoutSessionsInput[] | Prisma.mfa_amr_claimsUncheckedCreateWithoutSessionsInput[];
    connectOrCreate?: Prisma.mfa_amr_claimsCreateOrConnectWithoutSessionsInput | Prisma.mfa_amr_claimsCreateOrConnectWithoutSessionsInput[];
    upsert?: Prisma.mfa_amr_claimsUpsertWithWhereUniqueWithoutSessionsInput | Prisma.mfa_amr_claimsUpsertWithWhereUniqueWithoutSessionsInput[];
    createMany?: Prisma.mfa_amr_claimsCreateManySessionsInputEnvelope;
    set?: Prisma.mfa_amr_claimsWhereUniqueInput | Prisma.mfa_amr_claimsWhereUniqueInput[];
    disconnect?: Prisma.mfa_amr_claimsWhereUniqueInput | Prisma.mfa_amr_claimsWhereUniqueInput[];
    delete?: Prisma.mfa_amr_claimsWhereUniqueInput | Prisma.mfa_amr_claimsWhereUniqueInput[];
    connect?: Prisma.mfa_amr_claimsWhereUniqueInput | Prisma.mfa_amr_claimsWhereUniqueInput[];
    update?: Prisma.mfa_amr_claimsUpdateWithWhereUniqueWithoutSessionsInput | Prisma.mfa_amr_claimsUpdateWithWhereUniqueWithoutSessionsInput[];
    updateMany?: Prisma.mfa_amr_claimsUpdateManyWithWhereWithoutSessionsInput | Prisma.mfa_amr_claimsUpdateManyWithWhereWithoutSessionsInput[];
    deleteMany?: Prisma.mfa_amr_claimsScalarWhereInput | Prisma.mfa_amr_claimsScalarWhereInput[];
};
export type mfa_amr_claimsUncheckedUpdateManyWithoutSessionsNestedInput = {
    create?: Prisma.XOR<Prisma.mfa_amr_claimsCreateWithoutSessionsInput, Prisma.mfa_amr_claimsUncheckedCreateWithoutSessionsInput> | Prisma.mfa_amr_claimsCreateWithoutSessionsInput[] | Prisma.mfa_amr_claimsUncheckedCreateWithoutSessionsInput[];
    connectOrCreate?: Prisma.mfa_amr_claimsCreateOrConnectWithoutSessionsInput | Prisma.mfa_amr_claimsCreateOrConnectWithoutSessionsInput[];
    upsert?: Prisma.mfa_amr_claimsUpsertWithWhereUniqueWithoutSessionsInput | Prisma.mfa_amr_claimsUpsertWithWhereUniqueWithoutSessionsInput[];
    createMany?: Prisma.mfa_amr_claimsCreateManySessionsInputEnvelope;
    set?: Prisma.mfa_amr_claimsWhereUniqueInput | Prisma.mfa_amr_claimsWhereUniqueInput[];
    disconnect?: Prisma.mfa_amr_claimsWhereUniqueInput | Prisma.mfa_amr_claimsWhereUniqueInput[];
    delete?: Prisma.mfa_amr_claimsWhereUniqueInput | Prisma.mfa_amr_claimsWhereUniqueInput[];
    connect?: Prisma.mfa_amr_claimsWhereUniqueInput | Prisma.mfa_amr_claimsWhereUniqueInput[];
    update?: Prisma.mfa_amr_claimsUpdateWithWhereUniqueWithoutSessionsInput | Prisma.mfa_amr_claimsUpdateWithWhereUniqueWithoutSessionsInput[];
    updateMany?: Prisma.mfa_amr_claimsUpdateManyWithWhereWithoutSessionsInput | Prisma.mfa_amr_claimsUpdateManyWithWhereWithoutSessionsInput[];
    deleteMany?: Prisma.mfa_amr_claimsScalarWhereInput | Prisma.mfa_amr_claimsScalarWhereInput[];
};
export type mfa_amr_claimsCreateWithoutSessionsInput = {
    created_at: Date | string;
    updated_at: Date | string;
    authentication_method: string;
    id: string;
};
export type mfa_amr_claimsUncheckedCreateWithoutSessionsInput = {
    created_at: Date | string;
    updated_at: Date | string;
    authentication_method: string;
    id: string;
};
export type mfa_amr_claimsCreateOrConnectWithoutSessionsInput = {
    where: Prisma.mfa_amr_claimsWhereUniqueInput;
    create: Prisma.XOR<Prisma.mfa_amr_claimsCreateWithoutSessionsInput, Prisma.mfa_amr_claimsUncheckedCreateWithoutSessionsInput>;
};
export type mfa_amr_claimsCreateManySessionsInputEnvelope = {
    data: Prisma.mfa_amr_claimsCreateManySessionsInput | Prisma.mfa_amr_claimsCreateManySessionsInput[];
    skipDuplicates?: boolean;
};
export type mfa_amr_claimsUpsertWithWhereUniqueWithoutSessionsInput = {
    where: Prisma.mfa_amr_claimsWhereUniqueInput;
    update: Prisma.XOR<Prisma.mfa_amr_claimsUpdateWithoutSessionsInput, Prisma.mfa_amr_claimsUncheckedUpdateWithoutSessionsInput>;
    create: Prisma.XOR<Prisma.mfa_amr_claimsCreateWithoutSessionsInput, Prisma.mfa_amr_claimsUncheckedCreateWithoutSessionsInput>;
};
export type mfa_amr_claimsUpdateWithWhereUniqueWithoutSessionsInput = {
    where: Prisma.mfa_amr_claimsWhereUniqueInput;
    data: Prisma.XOR<Prisma.mfa_amr_claimsUpdateWithoutSessionsInput, Prisma.mfa_amr_claimsUncheckedUpdateWithoutSessionsInput>;
};
export type mfa_amr_claimsUpdateManyWithWhereWithoutSessionsInput = {
    where: Prisma.mfa_amr_claimsScalarWhereInput;
    data: Prisma.XOR<Prisma.mfa_amr_claimsUpdateManyMutationInput, Prisma.mfa_amr_claimsUncheckedUpdateManyWithoutSessionsInput>;
};
export type mfa_amr_claimsScalarWhereInput = {
    AND?: Prisma.mfa_amr_claimsScalarWhereInput | Prisma.mfa_amr_claimsScalarWhereInput[];
    OR?: Prisma.mfa_amr_claimsScalarWhereInput[];
    NOT?: Prisma.mfa_amr_claimsScalarWhereInput | Prisma.mfa_amr_claimsScalarWhereInput[];
    session_id?: Prisma.UuidFilter<"mfa_amr_claims"> | string;
    created_at?: Prisma.DateTimeFilter<"mfa_amr_claims"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"mfa_amr_claims"> | Date | string;
    authentication_method?: Prisma.StringFilter<"mfa_amr_claims"> | string;
    id?: Prisma.UuidFilter<"mfa_amr_claims"> | string;
};
export type mfa_amr_claimsCreateManySessionsInput = {
    created_at: Date | string;
    updated_at: Date | string;
    authentication_method: string;
    id: string;
};
export type mfa_amr_claimsUpdateWithoutSessionsInput = {
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    authentication_method?: Prisma.StringFieldUpdateOperationsInput | string;
    id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type mfa_amr_claimsUncheckedUpdateWithoutSessionsInput = {
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    authentication_method?: Prisma.StringFieldUpdateOperationsInput | string;
    id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type mfa_amr_claimsUncheckedUpdateManyWithoutSessionsInput = {
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    authentication_method?: Prisma.StringFieldUpdateOperationsInput | string;
    id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type mfa_amr_claimsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    session_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    authentication_method?: boolean;
    id?: boolean;
    sessions?: boolean | Prisma.sessionsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mfa_amr_claims"]>;
export type mfa_amr_claimsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    session_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    authentication_method?: boolean;
    id?: boolean;
    sessions?: boolean | Prisma.sessionsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mfa_amr_claims"]>;
export type mfa_amr_claimsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    session_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    authentication_method?: boolean;
    id?: boolean;
    sessions?: boolean | Prisma.sessionsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mfa_amr_claims"]>;
export type mfa_amr_claimsSelectScalar = {
    session_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    authentication_method?: boolean;
    id?: boolean;
};
export type mfa_amr_claimsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"session_id" | "created_at" | "updated_at" | "authentication_method" | "id", ExtArgs["result"]["mfa_amr_claims"]>;
export type mfa_amr_claimsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sessions?: boolean | Prisma.sessionsDefaultArgs<ExtArgs>;
};
export type mfa_amr_claimsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sessions?: boolean | Prisma.sessionsDefaultArgs<ExtArgs>;
};
export type mfa_amr_claimsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sessions?: boolean | Prisma.sessionsDefaultArgs<ExtArgs>;
};
export type $mfa_amr_claimsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "mfa_amr_claims";
    objects: {
        sessions: Prisma.$sessionsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        session_id: string;
        created_at: Date;
        updated_at: Date;
        authentication_method: string;
        id: string;
    }, ExtArgs["result"]["mfa_amr_claims"]>;
    composites: {};
};
export type mfa_amr_claimsGetPayload<S extends boolean | null | undefined | mfa_amr_claimsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$mfa_amr_claimsPayload, S>;
export type mfa_amr_claimsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<mfa_amr_claimsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Mfa_amr_claimsCountAggregateInputType | true;
};
export interface mfa_amr_claimsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['mfa_amr_claims'];
        meta: {
            name: 'mfa_amr_claims';
        };
    };
    findUnique<T extends mfa_amr_claimsFindUniqueArgs>(args: Prisma.SelectSubset<T, mfa_amr_claimsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__mfa_amr_claimsClient<runtime.Types.Result.GetResult<Prisma.$mfa_amr_claimsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends mfa_amr_claimsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, mfa_amr_claimsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__mfa_amr_claimsClient<runtime.Types.Result.GetResult<Prisma.$mfa_amr_claimsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends mfa_amr_claimsFindFirstArgs>(args?: Prisma.SelectSubset<T, mfa_amr_claimsFindFirstArgs<ExtArgs>>): Prisma.Prisma__mfa_amr_claimsClient<runtime.Types.Result.GetResult<Prisma.$mfa_amr_claimsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends mfa_amr_claimsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, mfa_amr_claimsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__mfa_amr_claimsClient<runtime.Types.Result.GetResult<Prisma.$mfa_amr_claimsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends mfa_amr_claimsFindManyArgs>(args?: Prisma.SelectSubset<T, mfa_amr_claimsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$mfa_amr_claimsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends mfa_amr_claimsCreateArgs>(args: Prisma.SelectSubset<T, mfa_amr_claimsCreateArgs<ExtArgs>>): Prisma.Prisma__mfa_amr_claimsClient<runtime.Types.Result.GetResult<Prisma.$mfa_amr_claimsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends mfa_amr_claimsCreateManyArgs>(args?: Prisma.SelectSubset<T, mfa_amr_claimsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends mfa_amr_claimsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, mfa_amr_claimsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$mfa_amr_claimsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends mfa_amr_claimsDeleteArgs>(args: Prisma.SelectSubset<T, mfa_amr_claimsDeleteArgs<ExtArgs>>): Prisma.Prisma__mfa_amr_claimsClient<runtime.Types.Result.GetResult<Prisma.$mfa_amr_claimsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends mfa_amr_claimsUpdateArgs>(args: Prisma.SelectSubset<T, mfa_amr_claimsUpdateArgs<ExtArgs>>): Prisma.Prisma__mfa_amr_claimsClient<runtime.Types.Result.GetResult<Prisma.$mfa_amr_claimsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends mfa_amr_claimsDeleteManyArgs>(args?: Prisma.SelectSubset<T, mfa_amr_claimsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends mfa_amr_claimsUpdateManyArgs>(args: Prisma.SelectSubset<T, mfa_amr_claimsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends mfa_amr_claimsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, mfa_amr_claimsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$mfa_amr_claimsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends mfa_amr_claimsUpsertArgs>(args: Prisma.SelectSubset<T, mfa_amr_claimsUpsertArgs<ExtArgs>>): Prisma.Prisma__mfa_amr_claimsClient<runtime.Types.Result.GetResult<Prisma.$mfa_amr_claimsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends mfa_amr_claimsCountArgs>(args?: Prisma.Subset<T, mfa_amr_claimsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Mfa_amr_claimsCountAggregateOutputType> : number>;
    aggregate<T extends Mfa_amr_claimsAggregateArgs>(args: Prisma.Subset<T, Mfa_amr_claimsAggregateArgs>): Prisma.PrismaPromise<GetMfa_amr_claimsAggregateType<T>>;
    groupBy<T extends mfa_amr_claimsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: mfa_amr_claimsGroupByArgs['orderBy'];
    } : {
        orderBy?: mfa_amr_claimsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, mfa_amr_claimsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMfa_amr_claimsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: mfa_amr_claimsFieldRefs;
}
export interface Prisma__mfa_amr_claimsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    sessions<T extends Prisma.sessionsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.sessionsDefaultArgs<ExtArgs>>): Prisma.Prisma__sessionsClient<runtime.Types.Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface mfa_amr_claimsFieldRefs {
    readonly session_id: Prisma.FieldRef<"mfa_amr_claims", 'String'>;
    readonly created_at: Prisma.FieldRef<"mfa_amr_claims", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"mfa_amr_claims", 'DateTime'>;
    readonly authentication_method: Prisma.FieldRef<"mfa_amr_claims", 'String'>;
    readonly id: Prisma.FieldRef<"mfa_amr_claims", 'String'>;
}
export type mfa_amr_claimsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mfa_amr_claimsSelect<ExtArgs> | null;
    omit?: Prisma.mfa_amr_claimsOmit<ExtArgs> | null;
    include?: Prisma.mfa_amr_claimsInclude<ExtArgs> | null;
    where: Prisma.mfa_amr_claimsWhereUniqueInput;
};
export type mfa_amr_claimsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mfa_amr_claimsSelect<ExtArgs> | null;
    omit?: Prisma.mfa_amr_claimsOmit<ExtArgs> | null;
    include?: Prisma.mfa_amr_claimsInclude<ExtArgs> | null;
    where: Prisma.mfa_amr_claimsWhereUniqueInput;
};
export type mfa_amr_claimsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mfa_amr_claimsSelect<ExtArgs> | null;
    omit?: Prisma.mfa_amr_claimsOmit<ExtArgs> | null;
    include?: Prisma.mfa_amr_claimsInclude<ExtArgs> | null;
    where?: Prisma.mfa_amr_claimsWhereInput;
    orderBy?: Prisma.mfa_amr_claimsOrderByWithRelationInput | Prisma.mfa_amr_claimsOrderByWithRelationInput[];
    cursor?: Prisma.mfa_amr_claimsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Mfa_amr_claimsScalarFieldEnum | Prisma.Mfa_amr_claimsScalarFieldEnum[];
};
export type mfa_amr_claimsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mfa_amr_claimsSelect<ExtArgs> | null;
    omit?: Prisma.mfa_amr_claimsOmit<ExtArgs> | null;
    include?: Prisma.mfa_amr_claimsInclude<ExtArgs> | null;
    where?: Prisma.mfa_amr_claimsWhereInput;
    orderBy?: Prisma.mfa_amr_claimsOrderByWithRelationInput | Prisma.mfa_amr_claimsOrderByWithRelationInput[];
    cursor?: Prisma.mfa_amr_claimsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Mfa_amr_claimsScalarFieldEnum | Prisma.Mfa_amr_claimsScalarFieldEnum[];
};
export type mfa_amr_claimsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mfa_amr_claimsSelect<ExtArgs> | null;
    omit?: Prisma.mfa_amr_claimsOmit<ExtArgs> | null;
    include?: Prisma.mfa_amr_claimsInclude<ExtArgs> | null;
    where?: Prisma.mfa_amr_claimsWhereInput;
    orderBy?: Prisma.mfa_amr_claimsOrderByWithRelationInput | Prisma.mfa_amr_claimsOrderByWithRelationInput[];
    cursor?: Prisma.mfa_amr_claimsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Mfa_amr_claimsScalarFieldEnum | Prisma.Mfa_amr_claimsScalarFieldEnum[];
};
export type mfa_amr_claimsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mfa_amr_claimsSelect<ExtArgs> | null;
    omit?: Prisma.mfa_amr_claimsOmit<ExtArgs> | null;
    include?: Prisma.mfa_amr_claimsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.mfa_amr_claimsCreateInput, Prisma.mfa_amr_claimsUncheckedCreateInput>;
};
export type mfa_amr_claimsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.mfa_amr_claimsCreateManyInput | Prisma.mfa_amr_claimsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type mfa_amr_claimsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mfa_amr_claimsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.mfa_amr_claimsOmit<ExtArgs> | null;
    data: Prisma.mfa_amr_claimsCreateManyInput | Prisma.mfa_amr_claimsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.mfa_amr_claimsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type mfa_amr_claimsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mfa_amr_claimsSelect<ExtArgs> | null;
    omit?: Prisma.mfa_amr_claimsOmit<ExtArgs> | null;
    include?: Prisma.mfa_amr_claimsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.mfa_amr_claimsUpdateInput, Prisma.mfa_amr_claimsUncheckedUpdateInput>;
    where: Prisma.mfa_amr_claimsWhereUniqueInput;
};
export type mfa_amr_claimsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.mfa_amr_claimsUpdateManyMutationInput, Prisma.mfa_amr_claimsUncheckedUpdateManyInput>;
    where?: Prisma.mfa_amr_claimsWhereInput;
    limit?: number;
};
export type mfa_amr_claimsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mfa_amr_claimsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.mfa_amr_claimsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.mfa_amr_claimsUpdateManyMutationInput, Prisma.mfa_amr_claimsUncheckedUpdateManyInput>;
    where?: Prisma.mfa_amr_claimsWhereInput;
    limit?: number;
    include?: Prisma.mfa_amr_claimsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type mfa_amr_claimsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mfa_amr_claimsSelect<ExtArgs> | null;
    omit?: Prisma.mfa_amr_claimsOmit<ExtArgs> | null;
    include?: Prisma.mfa_amr_claimsInclude<ExtArgs> | null;
    where: Prisma.mfa_amr_claimsWhereUniqueInput;
    create: Prisma.XOR<Prisma.mfa_amr_claimsCreateInput, Prisma.mfa_amr_claimsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.mfa_amr_claimsUpdateInput, Prisma.mfa_amr_claimsUncheckedUpdateInput>;
};
export type mfa_amr_claimsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mfa_amr_claimsSelect<ExtArgs> | null;
    omit?: Prisma.mfa_amr_claimsOmit<ExtArgs> | null;
    include?: Prisma.mfa_amr_claimsInclude<ExtArgs> | null;
    where: Prisma.mfa_amr_claimsWhereUniqueInput;
};
export type mfa_amr_claimsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.mfa_amr_claimsWhereInput;
    limit?: number;
};
export type mfa_amr_claimsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mfa_amr_claimsSelect<ExtArgs> | null;
    omit?: Prisma.mfa_amr_claimsOmit<ExtArgs> | null;
    include?: Prisma.mfa_amr_claimsInclude<ExtArgs> | null;
};
