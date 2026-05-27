import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type sso_domainsModel = runtime.Types.Result.DefaultSelection<Prisma.$sso_domainsPayload>;
export type AggregateSso_domains = {
    _count: Sso_domainsCountAggregateOutputType | null;
    _min: Sso_domainsMinAggregateOutputType | null;
    _max: Sso_domainsMaxAggregateOutputType | null;
};
export type Sso_domainsMinAggregateOutputType = {
    id: string | null;
    sso_provider_id: string | null;
    domain: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Sso_domainsMaxAggregateOutputType = {
    id: string | null;
    sso_provider_id: string | null;
    domain: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Sso_domainsCountAggregateOutputType = {
    id: number;
    sso_provider_id: number;
    domain: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type Sso_domainsMinAggregateInputType = {
    id?: true;
    sso_provider_id?: true;
    domain?: true;
    created_at?: true;
    updated_at?: true;
};
export type Sso_domainsMaxAggregateInputType = {
    id?: true;
    sso_provider_id?: true;
    domain?: true;
    created_at?: true;
    updated_at?: true;
};
export type Sso_domainsCountAggregateInputType = {
    id?: true;
    sso_provider_id?: true;
    domain?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type Sso_domainsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.sso_domainsWhereInput;
    orderBy?: Prisma.sso_domainsOrderByWithRelationInput | Prisma.sso_domainsOrderByWithRelationInput[];
    cursor?: Prisma.sso_domainsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Sso_domainsCountAggregateInputType;
    _min?: Sso_domainsMinAggregateInputType;
    _max?: Sso_domainsMaxAggregateInputType;
};
export type GetSso_domainsAggregateType<T extends Sso_domainsAggregateArgs> = {
    [P in keyof T & keyof AggregateSso_domains]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSso_domains[P]> : Prisma.GetScalarType<T[P], AggregateSso_domains[P]>;
};
export type sso_domainsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.sso_domainsWhereInput;
    orderBy?: Prisma.sso_domainsOrderByWithAggregationInput | Prisma.sso_domainsOrderByWithAggregationInput[];
    by: Prisma.Sso_domainsScalarFieldEnum[] | Prisma.Sso_domainsScalarFieldEnum;
    having?: Prisma.sso_domainsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Sso_domainsCountAggregateInputType | true;
    _min?: Sso_domainsMinAggregateInputType;
    _max?: Sso_domainsMaxAggregateInputType;
};
export type Sso_domainsGroupByOutputType = {
    id: string;
    sso_provider_id: string;
    domain: string;
    created_at: Date | null;
    updated_at: Date | null;
    _count: Sso_domainsCountAggregateOutputType | null;
    _min: Sso_domainsMinAggregateOutputType | null;
    _max: Sso_domainsMaxAggregateOutputType | null;
};
export type GetSso_domainsGroupByPayload<T extends sso_domainsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Sso_domainsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Sso_domainsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Sso_domainsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Sso_domainsGroupByOutputType[P]>;
}>>;
export type sso_domainsWhereInput = {
    AND?: Prisma.sso_domainsWhereInput | Prisma.sso_domainsWhereInput[];
    OR?: Prisma.sso_domainsWhereInput[];
    NOT?: Prisma.sso_domainsWhereInput | Prisma.sso_domainsWhereInput[];
    id?: Prisma.UuidFilter<"sso_domains"> | string;
    sso_provider_id?: Prisma.UuidFilter<"sso_domains"> | string;
    domain?: Prisma.StringFilter<"sso_domains"> | string;
    created_at?: Prisma.DateTimeNullableFilter<"sso_domains"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"sso_domains"> | Date | string | null;
    sso_providers?: Prisma.XOR<Prisma.Sso_providersScalarRelationFilter, Prisma.sso_providersWhereInput>;
};
export type sso_domainsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    sso_provider_id?: Prisma.SortOrder;
    domain?: Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    sso_providers?: Prisma.sso_providersOrderByWithRelationInput;
};
export type sso_domainsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.sso_domainsWhereInput | Prisma.sso_domainsWhereInput[];
    OR?: Prisma.sso_domainsWhereInput[];
    NOT?: Prisma.sso_domainsWhereInput | Prisma.sso_domainsWhereInput[];
    sso_provider_id?: Prisma.UuidFilter<"sso_domains"> | string;
    domain?: Prisma.StringFilter<"sso_domains"> | string;
    created_at?: Prisma.DateTimeNullableFilter<"sso_domains"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"sso_domains"> | Date | string | null;
    sso_providers?: Prisma.XOR<Prisma.Sso_providersScalarRelationFilter, Prisma.sso_providersWhereInput>;
}, "id">;
export type sso_domainsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    sso_provider_id?: Prisma.SortOrder;
    domain?: Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.sso_domainsCountOrderByAggregateInput;
    _max?: Prisma.sso_domainsMaxOrderByAggregateInput;
    _min?: Prisma.sso_domainsMinOrderByAggregateInput;
};
export type sso_domainsScalarWhereWithAggregatesInput = {
    AND?: Prisma.sso_domainsScalarWhereWithAggregatesInput | Prisma.sso_domainsScalarWhereWithAggregatesInput[];
    OR?: Prisma.sso_domainsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.sso_domainsScalarWhereWithAggregatesInput | Prisma.sso_domainsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"sso_domains"> | string;
    sso_provider_id?: Prisma.UuidWithAggregatesFilter<"sso_domains"> | string;
    domain?: Prisma.StringWithAggregatesFilter<"sso_domains"> | string;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"sso_domains"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"sso_domains"> | Date | string | null;
};
export type sso_domainsCreateInput = {
    id: string;
    domain: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    sso_providers: Prisma.sso_providersCreateNestedOneWithoutSso_domainsInput;
};
export type sso_domainsUncheckedCreateInput = {
    id: string;
    sso_provider_id: string;
    domain: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type sso_domainsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    domain?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sso_providers?: Prisma.sso_providersUpdateOneRequiredWithoutSso_domainsNestedInput;
};
export type sso_domainsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sso_provider_id?: Prisma.StringFieldUpdateOperationsInput | string;
    domain?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type sso_domainsCreateManyInput = {
    id: string;
    sso_provider_id: string;
    domain: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type sso_domainsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    domain?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type sso_domainsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sso_provider_id?: Prisma.StringFieldUpdateOperationsInput | string;
    domain?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type sso_domainsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sso_provider_id?: Prisma.SortOrder;
    domain?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type sso_domainsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sso_provider_id?: Prisma.SortOrder;
    domain?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type sso_domainsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sso_provider_id?: Prisma.SortOrder;
    domain?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type Sso_domainsListRelationFilter = {
    every?: Prisma.sso_domainsWhereInput;
    some?: Prisma.sso_domainsWhereInput;
    none?: Prisma.sso_domainsWhereInput;
};
export type sso_domainsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type sso_domainsCreateNestedManyWithoutSso_providersInput = {
    create?: Prisma.XOR<Prisma.sso_domainsCreateWithoutSso_providersInput, Prisma.sso_domainsUncheckedCreateWithoutSso_providersInput> | Prisma.sso_domainsCreateWithoutSso_providersInput[] | Prisma.sso_domainsUncheckedCreateWithoutSso_providersInput[];
    connectOrCreate?: Prisma.sso_domainsCreateOrConnectWithoutSso_providersInput | Prisma.sso_domainsCreateOrConnectWithoutSso_providersInput[];
    createMany?: Prisma.sso_domainsCreateManySso_providersInputEnvelope;
    connect?: Prisma.sso_domainsWhereUniqueInput | Prisma.sso_domainsWhereUniqueInput[];
};
export type sso_domainsUncheckedCreateNestedManyWithoutSso_providersInput = {
    create?: Prisma.XOR<Prisma.sso_domainsCreateWithoutSso_providersInput, Prisma.sso_domainsUncheckedCreateWithoutSso_providersInput> | Prisma.sso_domainsCreateWithoutSso_providersInput[] | Prisma.sso_domainsUncheckedCreateWithoutSso_providersInput[];
    connectOrCreate?: Prisma.sso_domainsCreateOrConnectWithoutSso_providersInput | Prisma.sso_domainsCreateOrConnectWithoutSso_providersInput[];
    createMany?: Prisma.sso_domainsCreateManySso_providersInputEnvelope;
    connect?: Prisma.sso_domainsWhereUniqueInput | Prisma.sso_domainsWhereUniqueInput[];
};
export type sso_domainsUpdateManyWithoutSso_providersNestedInput = {
    create?: Prisma.XOR<Prisma.sso_domainsCreateWithoutSso_providersInput, Prisma.sso_domainsUncheckedCreateWithoutSso_providersInput> | Prisma.sso_domainsCreateWithoutSso_providersInput[] | Prisma.sso_domainsUncheckedCreateWithoutSso_providersInput[];
    connectOrCreate?: Prisma.sso_domainsCreateOrConnectWithoutSso_providersInput | Prisma.sso_domainsCreateOrConnectWithoutSso_providersInput[];
    upsert?: Prisma.sso_domainsUpsertWithWhereUniqueWithoutSso_providersInput | Prisma.sso_domainsUpsertWithWhereUniqueWithoutSso_providersInput[];
    createMany?: Prisma.sso_domainsCreateManySso_providersInputEnvelope;
    set?: Prisma.sso_domainsWhereUniqueInput | Prisma.sso_domainsWhereUniqueInput[];
    disconnect?: Prisma.sso_domainsWhereUniqueInput | Prisma.sso_domainsWhereUniqueInput[];
    delete?: Prisma.sso_domainsWhereUniqueInput | Prisma.sso_domainsWhereUniqueInput[];
    connect?: Prisma.sso_domainsWhereUniqueInput | Prisma.sso_domainsWhereUniqueInput[];
    update?: Prisma.sso_domainsUpdateWithWhereUniqueWithoutSso_providersInput | Prisma.sso_domainsUpdateWithWhereUniqueWithoutSso_providersInput[];
    updateMany?: Prisma.sso_domainsUpdateManyWithWhereWithoutSso_providersInput | Prisma.sso_domainsUpdateManyWithWhereWithoutSso_providersInput[];
    deleteMany?: Prisma.sso_domainsScalarWhereInput | Prisma.sso_domainsScalarWhereInput[];
};
export type sso_domainsUncheckedUpdateManyWithoutSso_providersNestedInput = {
    create?: Prisma.XOR<Prisma.sso_domainsCreateWithoutSso_providersInput, Prisma.sso_domainsUncheckedCreateWithoutSso_providersInput> | Prisma.sso_domainsCreateWithoutSso_providersInput[] | Prisma.sso_domainsUncheckedCreateWithoutSso_providersInput[];
    connectOrCreate?: Prisma.sso_domainsCreateOrConnectWithoutSso_providersInput | Prisma.sso_domainsCreateOrConnectWithoutSso_providersInput[];
    upsert?: Prisma.sso_domainsUpsertWithWhereUniqueWithoutSso_providersInput | Prisma.sso_domainsUpsertWithWhereUniqueWithoutSso_providersInput[];
    createMany?: Prisma.sso_domainsCreateManySso_providersInputEnvelope;
    set?: Prisma.sso_domainsWhereUniqueInput | Prisma.sso_domainsWhereUniqueInput[];
    disconnect?: Prisma.sso_domainsWhereUniqueInput | Prisma.sso_domainsWhereUniqueInput[];
    delete?: Prisma.sso_domainsWhereUniqueInput | Prisma.sso_domainsWhereUniqueInput[];
    connect?: Prisma.sso_domainsWhereUniqueInput | Prisma.sso_domainsWhereUniqueInput[];
    update?: Prisma.sso_domainsUpdateWithWhereUniqueWithoutSso_providersInput | Prisma.sso_domainsUpdateWithWhereUniqueWithoutSso_providersInput[];
    updateMany?: Prisma.sso_domainsUpdateManyWithWhereWithoutSso_providersInput | Prisma.sso_domainsUpdateManyWithWhereWithoutSso_providersInput[];
    deleteMany?: Prisma.sso_domainsScalarWhereInput | Prisma.sso_domainsScalarWhereInput[];
};
export type sso_domainsCreateWithoutSso_providersInput = {
    id: string;
    domain: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type sso_domainsUncheckedCreateWithoutSso_providersInput = {
    id: string;
    domain: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type sso_domainsCreateOrConnectWithoutSso_providersInput = {
    where: Prisma.sso_domainsWhereUniqueInput;
    create: Prisma.XOR<Prisma.sso_domainsCreateWithoutSso_providersInput, Prisma.sso_domainsUncheckedCreateWithoutSso_providersInput>;
};
export type sso_domainsCreateManySso_providersInputEnvelope = {
    data: Prisma.sso_domainsCreateManySso_providersInput | Prisma.sso_domainsCreateManySso_providersInput[];
    skipDuplicates?: boolean;
};
export type sso_domainsUpsertWithWhereUniqueWithoutSso_providersInput = {
    where: Prisma.sso_domainsWhereUniqueInput;
    update: Prisma.XOR<Prisma.sso_domainsUpdateWithoutSso_providersInput, Prisma.sso_domainsUncheckedUpdateWithoutSso_providersInput>;
    create: Prisma.XOR<Prisma.sso_domainsCreateWithoutSso_providersInput, Prisma.sso_domainsUncheckedCreateWithoutSso_providersInput>;
};
export type sso_domainsUpdateWithWhereUniqueWithoutSso_providersInput = {
    where: Prisma.sso_domainsWhereUniqueInput;
    data: Prisma.XOR<Prisma.sso_domainsUpdateWithoutSso_providersInput, Prisma.sso_domainsUncheckedUpdateWithoutSso_providersInput>;
};
export type sso_domainsUpdateManyWithWhereWithoutSso_providersInput = {
    where: Prisma.sso_domainsScalarWhereInput;
    data: Prisma.XOR<Prisma.sso_domainsUpdateManyMutationInput, Prisma.sso_domainsUncheckedUpdateManyWithoutSso_providersInput>;
};
export type sso_domainsScalarWhereInput = {
    AND?: Prisma.sso_domainsScalarWhereInput | Prisma.sso_domainsScalarWhereInput[];
    OR?: Prisma.sso_domainsScalarWhereInput[];
    NOT?: Prisma.sso_domainsScalarWhereInput | Prisma.sso_domainsScalarWhereInput[];
    id?: Prisma.UuidFilter<"sso_domains"> | string;
    sso_provider_id?: Prisma.UuidFilter<"sso_domains"> | string;
    domain?: Prisma.StringFilter<"sso_domains"> | string;
    created_at?: Prisma.DateTimeNullableFilter<"sso_domains"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"sso_domains"> | Date | string | null;
};
export type sso_domainsCreateManySso_providersInput = {
    id: string;
    domain: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type sso_domainsUpdateWithoutSso_providersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    domain?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type sso_domainsUncheckedUpdateWithoutSso_providersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    domain?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type sso_domainsUncheckedUpdateManyWithoutSso_providersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    domain?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type sso_domainsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sso_provider_id?: boolean;
    domain?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    sso_providers?: boolean | Prisma.sso_providersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["sso_domains"]>;
export type sso_domainsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sso_provider_id?: boolean;
    domain?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    sso_providers?: boolean | Prisma.sso_providersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["sso_domains"]>;
export type sso_domainsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sso_provider_id?: boolean;
    domain?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    sso_providers?: boolean | Prisma.sso_providersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["sso_domains"]>;
export type sso_domainsSelectScalar = {
    id?: boolean;
    sso_provider_id?: boolean;
    domain?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type sso_domainsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "sso_provider_id" | "domain" | "created_at" | "updated_at", ExtArgs["result"]["sso_domains"]>;
export type sso_domainsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sso_providers?: boolean | Prisma.sso_providersDefaultArgs<ExtArgs>;
};
export type sso_domainsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sso_providers?: boolean | Prisma.sso_providersDefaultArgs<ExtArgs>;
};
export type sso_domainsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sso_providers?: boolean | Prisma.sso_providersDefaultArgs<ExtArgs>;
};
export type $sso_domainsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "sso_domains";
    objects: {
        sso_providers: Prisma.$sso_providersPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        sso_provider_id: string;
        domain: string;
        created_at: Date | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["sso_domains"]>;
    composites: {};
};
export type sso_domainsGetPayload<S extends boolean | null | undefined | sso_domainsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$sso_domainsPayload, S>;
export type sso_domainsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<sso_domainsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Sso_domainsCountAggregateInputType | true;
};
export interface sso_domainsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['sso_domains'];
        meta: {
            name: 'sso_domains';
        };
    };
    findUnique<T extends sso_domainsFindUniqueArgs>(args: Prisma.SelectSubset<T, sso_domainsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__sso_domainsClient<runtime.Types.Result.GetResult<Prisma.$sso_domainsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends sso_domainsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, sso_domainsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__sso_domainsClient<runtime.Types.Result.GetResult<Prisma.$sso_domainsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends sso_domainsFindFirstArgs>(args?: Prisma.SelectSubset<T, sso_domainsFindFirstArgs<ExtArgs>>): Prisma.Prisma__sso_domainsClient<runtime.Types.Result.GetResult<Prisma.$sso_domainsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends sso_domainsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, sso_domainsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__sso_domainsClient<runtime.Types.Result.GetResult<Prisma.$sso_domainsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends sso_domainsFindManyArgs>(args?: Prisma.SelectSubset<T, sso_domainsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$sso_domainsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends sso_domainsCreateArgs>(args: Prisma.SelectSubset<T, sso_domainsCreateArgs<ExtArgs>>): Prisma.Prisma__sso_domainsClient<runtime.Types.Result.GetResult<Prisma.$sso_domainsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends sso_domainsCreateManyArgs>(args?: Prisma.SelectSubset<T, sso_domainsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends sso_domainsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, sso_domainsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$sso_domainsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends sso_domainsDeleteArgs>(args: Prisma.SelectSubset<T, sso_domainsDeleteArgs<ExtArgs>>): Prisma.Prisma__sso_domainsClient<runtime.Types.Result.GetResult<Prisma.$sso_domainsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends sso_domainsUpdateArgs>(args: Prisma.SelectSubset<T, sso_domainsUpdateArgs<ExtArgs>>): Prisma.Prisma__sso_domainsClient<runtime.Types.Result.GetResult<Prisma.$sso_domainsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends sso_domainsDeleteManyArgs>(args?: Prisma.SelectSubset<T, sso_domainsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends sso_domainsUpdateManyArgs>(args: Prisma.SelectSubset<T, sso_domainsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends sso_domainsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, sso_domainsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$sso_domainsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends sso_domainsUpsertArgs>(args: Prisma.SelectSubset<T, sso_domainsUpsertArgs<ExtArgs>>): Prisma.Prisma__sso_domainsClient<runtime.Types.Result.GetResult<Prisma.$sso_domainsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends sso_domainsCountArgs>(args?: Prisma.Subset<T, sso_domainsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Sso_domainsCountAggregateOutputType> : number>;
    aggregate<T extends Sso_domainsAggregateArgs>(args: Prisma.Subset<T, Sso_domainsAggregateArgs>): Prisma.PrismaPromise<GetSso_domainsAggregateType<T>>;
    groupBy<T extends sso_domainsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: sso_domainsGroupByArgs['orderBy'];
    } : {
        orderBy?: sso_domainsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, sso_domainsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSso_domainsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: sso_domainsFieldRefs;
}
export interface Prisma__sso_domainsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    sso_providers<T extends Prisma.sso_providersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.sso_providersDefaultArgs<ExtArgs>>): Prisma.Prisma__sso_providersClient<runtime.Types.Result.GetResult<Prisma.$sso_providersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface sso_domainsFieldRefs {
    readonly id: Prisma.FieldRef<"sso_domains", 'String'>;
    readonly sso_provider_id: Prisma.FieldRef<"sso_domains", 'String'>;
    readonly domain: Prisma.FieldRef<"sso_domains", 'String'>;
    readonly created_at: Prisma.FieldRef<"sso_domains", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"sso_domains", 'DateTime'>;
}
export type sso_domainsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.sso_domainsSelect<ExtArgs> | null;
    omit?: Prisma.sso_domainsOmit<ExtArgs> | null;
    include?: Prisma.sso_domainsInclude<ExtArgs> | null;
    where: Prisma.sso_domainsWhereUniqueInput;
};
export type sso_domainsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.sso_domainsSelect<ExtArgs> | null;
    omit?: Prisma.sso_domainsOmit<ExtArgs> | null;
    include?: Prisma.sso_domainsInclude<ExtArgs> | null;
    where: Prisma.sso_domainsWhereUniqueInput;
};
export type sso_domainsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.sso_domainsSelect<ExtArgs> | null;
    omit?: Prisma.sso_domainsOmit<ExtArgs> | null;
    include?: Prisma.sso_domainsInclude<ExtArgs> | null;
    where?: Prisma.sso_domainsWhereInput;
    orderBy?: Prisma.sso_domainsOrderByWithRelationInput | Prisma.sso_domainsOrderByWithRelationInput[];
    cursor?: Prisma.sso_domainsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Sso_domainsScalarFieldEnum | Prisma.Sso_domainsScalarFieldEnum[];
};
export type sso_domainsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.sso_domainsSelect<ExtArgs> | null;
    omit?: Prisma.sso_domainsOmit<ExtArgs> | null;
    include?: Prisma.sso_domainsInclude<ExtArgs> | null;
    where?: Prisma.sso_domainsWhereInput;
    orderBy?: Prisma.sso_domainsOrderByWithRelationInput | Prisma.sso_domainsOrderByWithRelationInput[];
    cursor?: Prisma.sso_domainsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Sso_domainsScalarFieldEnum | Prisma.Sso_domainsScalarFieldEnum[];
};
export type sso_domainsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.sso_domainsSelect<ExtArgs> | null;
    omit?: Prisma.sso_domainsOmit<ExtArgs> | null;
    include?: Prisma.sso_domainsInclude<ExtArgs> | null;
    where?: Prisma.sso_domainsWhereInput;
    orderBy?: Prisma.sso_domainsOrderByWithRelationInput | Prisma.sso_domainsOrderByWithRelationInput[];
    cursor?: Prisma.sso_domainsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Sso_domainsScalarFieldEnum | Prisma.Sso_domainsScalarFieldEnum[];
};
export type sso_domainsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.sso_domainsSelect<ExtArgs> | null;
    omit?: Prisma.sso_domainsOmit<ExtArgs> | null;
    include?: Prisma.sso_domainsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.sso_domainsCreateInput, Prisma.sso_domainsUncheckedCreateInput>;
};
export type sso_domainsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.sso_domainsCreateManyInput | Prisma.sso_domainsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type sso_domainsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.sso_domainsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.sso_domainsOmit<ExtArgs> | null;
    data: Prisma.sso_domainsCreateManyInput | Prisma.sso_domainsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.sso_domainsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type sso_domainsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.sso_domainsSelect<ExtArgs> | null;
    omit?: Prisma.sso_domainsOmit<ExtArgs> | null;
    include?: Prisma.sso_domainsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.sso_domainsUpdateInput, Prisma.sso_domainsUncheckedUpdateInput>;
    where: Prisma.sso_domainsWhereUniqueInput;
};
export type sso_domainsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.sso_domainsUpdateManyMutationInput, Prisma.sso_domainsUncheckedUpdateManyInput>;
    where?: Prisma.sso_domainsWhereInput;
    limit?: number;
};
export type sso_domainsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.sso_domainsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.sso_domainsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.sso_domainsUpdateManyMutationInput, Prisma.sso_domainsUncheckedUpdateManyInput>;
    where?: Prisma.sso_domainsWhereInput;
    limit?: number;
    include?: Prisma.sso_domainsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type sso_domainsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.sso_domainsSelect<ExtArgs> | null;
    omit?: Prisma.sso_domainsOmit<ExtArgs> | null;
    include?: Prisma.sso_domainsInclude<ExtArgs> | null;
    where: Prisma.sso_domainsWhereUniqueInput;
    create: Prisma.XOR<Prisma.sso_domainsCreateInput, Prisma.sso_domainsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.sso_domainsUpdateInput, Prisma.sso_domainsUncheckedUpdateInput>;
};
export type sso_domainsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.sso_domainsSelect<ExtArgs> | null;
    omit?: Prisma.sso_domainsOmit<ExtArgs> | null;
    include?: Prisma.sso_domainsInclude<ExtArgs> | null;
    where: Prisma.sso_domainsWhereUniqueInput;
};
export type sso_domainsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.sso_domainsWhereInput;
    limit?: number;
};
export type sso_domainsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.sso_domainsSelect<ExtArgs> | null;
    omit?: Prisma.sso_domainsOmit<ExtArgs> | null;
    include?: Prisma.sso_domainsInclude<ExtArgs> | null;
};
