import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type oauth_client_statesModel = runtime.Types.Result.DefaultSelection<Prisma.$oauth_client_statesPayload>;
export type AggregateOauth_client_states = {
    _count: Oauth_client_statesCountAggregateOutputType | null;
    _min: Oauth_client_statesMinAggregateOutputType | null;
    _max: Oauth_client_statesMaxAggregateOutputType | null;
};
export type Oauth_client_statesMinAggregateOutputType = {
    id: string | null;
    provider_type: string | null;
    code_verifier: string | null;
    created_at: Date | null;
};
export type Oauth_client_statesMaxAggregateOutputType = {
    id: string | null;
    provider_type: string | null;
    code_verifier: string | null;
    created_at: Date | null;
};
export type Oauth_client_statesCountAggregateOutputType = {
    id: number;
    provider_type: number;
    code_verifier: number;
    created_at: number;
    _all: number;
};
export type Oauth_client_statesMinAggregateInputType = {
    id?: true;
    provider_type?: true;
    code_verifier?: true;
    created_at?: true;
};
export type Oauth_client_statesMaxAggregateInputType = {
    id?: true;
    provider_type?: true;
    code_verifier?: true;
    created_at?: true;
};
export type Oauth_client_statesCountAggregateInputType = {
    id?: true;
    provider_type?: true;
    code_verifier?: true;
    created_at?: true;
    _all?: true;
};
export type Oauth_client_statesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.oauth_client_statesWhereInput;
    orderBy?: Prisma.oauth_client_statesOrderByWithRelationInput | Prisma.oauth_client_statesOrderByWithRelationInput[];
    cursor?: Prisma.oauth_client_statesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Oauth_client_statesCountAggregateInputType;
    _min?: Oauth_client_statesMinAggregateInputType;
    _max?: Oauth_client_statesMaxAggregateInputType;
};
export type GetOauth_client_statesAggregateType<T extends Oauth_client_statesAggregateArgs> = {
    [P in keyof T & keyof AggregateOauth_client_states]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOauth_client_states[P]> : Prisma.GetScalarType<T[P], AggregateOauth_client_states[P]>;
};
export type oauth_client_statesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.oauth_client_statesWhereInput;
    orderBy?: Prisma.oauth_client_statesOrderByWithAggregationInput | Prisma.oauth_client_statesOrderByWithAggregationInput[];
    by: Prisma.Oauth_client_statesScalarFieldEnum[] | Prisma.Oauth_client_statesScalarFieldEnum;
    having?: Prisma.oauth_client_statesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Oauth_client_statesCountAggregateInputType | true;
    _min?: Oauth_client_statesMinAggregateInputType;
    _max?: Oauth_client_statesMaxAggregateInputType;
};
export type Oauth_client_statesGroupByOutputType = {
    id: string;
    provider_type: string;
    code_verifier: string | null;
    created_at: Date;
    _count: Oauth_client_statesCountAggregateOutputType | null;
    _min: Oauth_client_statesMinAggregateOutputType | null;
    _max: Oauth_client_statesMaxAggregateOutputType | null;
};
export type GetOauth_client_statesGroupByPayload<T extends oauth_client_statesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Oauth_client_statesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Oauth_client_statesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Oauth_client_statesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Oauth_client_statesGroupByOutputType[P]>;
}>>;
export type oauth_client_statesWhereInput = {
    AND?: Prisma.oauth_client_statesWhereInput | Prisma.oauth_client_statesWhereInput[];
    OR?: Prisma.oauth_client_statesWhereInput[];
    NOT?: Prisma.oauth_client_statesWhereInput | Prisma.oauth_client_statesWhereInput[];
    id?: Prisma.UuidFilter<"oauth_client_states"> | string;
    provider_type?: Prisma.StringFilter<"oauth_client_states"> | string;
    code_verifier?: Prisma.StringNullableFilter<"oauth_client_states"> | string | null;
    created_at?: Prisma.DateTimeFilter<"oauth_client_states"> | Date | string;
};
export type oauth_client_statesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    provider_type?: Prisma.SortOrder;
    code_verifier?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type oauth_client_statesWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.oauth_client_statesWhereInput | Prisma.oauth_client_statesWhereInput[];
    OR?: Prisma.oauth_client_statesWhereInput[];
    NOT?: Prisma.oauth_client_statesWhereInput | Prisma.oauth_client_statesWhereInput[];
    provider_type?: Prisma.StringFilter<"oauth_client_states"> | string;
    code_verifier?: Prisma.StringNullableFilter<"oauth_client_states"> | string | null;
    created_at?: Prisma.DateTimeFilter<"oauth_client_states"> | Date | string;
}, "id">;
export type oauth_client_statesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    provider_type?: Prisma.SortOrder;
    code_verifier?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.oauth_client_statesCountOrderByAggregateInput;
    _max?: Prisma.oauth_client_statesMaxOrderByAggregateInput;
    _min?: Prisma.oauth_client_statesMinOrderByAggregateInput;
};
export type oauth_client_statesScalarWhereWithAggregatesInput = {
    AND?: Prisma.oauth_client_statesScalarWhereWithAggregatesInput | Prisma.oauth_client_statesScalarWhereWithAggregatesInput[];
    OR?: Prisma.oauth_client_statesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.oauth_client_statesScalarWhereWithAggregatesInput | Prisma.oauth_client_statesScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"oauth_client_states"> | string;
    provider_type?: Prisma.StringWithAggregatesFilter<"oauth_client_states"> | string;
    code_verifier?: Prisma.StringNullableWithAggregatesFilter<"oauth_client_states"> | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"oauth_client_states"> | Date | string;
};
export type oauth_client_statesCreateInput = {
    id: string;
    provider_type: string;
    code_verifier?: string | null;
    created_at: Date | string;
};
export type oauth_client_statesUncheckedCreateInput = {
    id: string;
    provider_type: string;
    code_verifier?: string | null;
    created_at: Date | string;
};
export type oauth_client_statesUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    provider_type?: Prisma.StringFieldUpdateOperationsInput | string;
    code_verifier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type oauth_client_statesUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    provider_type?: Prisma.StringFieldUpdateOperationsInput | string;
    code_verifier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type oauth_client_statesCreateManyInput = {
    id: string;
    provider_type: string;
    code_verifier?: string | null;
    created_at: Date | string;
};
export type oauth_client_statesUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    provider_type?: Prisma.StringFieldUpdateOperationsInput | string;
    code_verifier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type oauth_client_statesUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    provider_type?: Prisma.StringFieldUpdateOperationsInput | string;
    code_verifier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type oauth_client_statesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    provider_type?: Prisma.SortOrder;
    code_verifier?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type oauth_client_statesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    provider_type?: Prisma.SortOrder;
    code_verifier?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type oauth_client_statesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    provider_type?: Prisma.SortOrder;
    code_verifier?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type oauth_client_statesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    provider_type?: boolean;
    code_verifier?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["oauth_client_states"]>;
export type oauth_client_statesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    provider_type?: boolean;
    code_verifier?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["oauth_client_states"]>;
export type oauth_client_statesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    provider_type?: boolean;
    code_verifier?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["oauth_client_states"]>;
export type oauth_client_statesSelectScalar = {
    id?: boolean;
    provider_type?: boolean;
    code_verifier?: boolean;
    created_at?: boolean;
};
export type oauth_client_statesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "provider_type" | "code_verifier" | "created_at", ExtArgs["result"]["oauth_client_states"]>;
export type $oauth_client_statesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "oauth_client_states";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        provider_type: string;
        code_verifier: string | null;
        created_at: Date;
    }, ExtArgs["result"]["oauth_client_states"]>;
    composites: {};
};
export type oauth_client_statesGetPayload<S extends boolean | null | undefined | oauth_client_statesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$oauth_client_statesPayload, S>;
export type oauth_client_statesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<oauth_client_statesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Oauth_client_statesCountAggregateInputType | true;
};
export interface oauth_client_statesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['oauth_client_states'];
        meta: {
            name: 'oauth_client_states';
        };
    };
    findUnique<T extends oauth_client_statesFindUniqueArgs>(args: Prisma.SelectSubset<T, oauth_client_statesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__oauth_client_statesClient<runtime.Types.Result.GetResult<Prisma.$oauth_client_statesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends oauth_client_statesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, oauth_client_statesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__oauth_client_statesClient<runtime.Types.Result.GetResult<Prisma.$oauth_client_statesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends oauth_client_statesFindFirstArgs>(args?: Prisma.SelectSubset<T, oauth_client_statesFindFirstArgs<ExtArgs>>): Prisma.Prisma__oauth_client_statesClient<runtime.Types.Result.GetResult<Prisma.$oauth_client_statesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends oauth_client_statesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, oauth_client_statesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__oauth_client_statesClient<runtime.Types.Result.GetResult<Prisma.$oauth_client_statesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends oauth_client_statesFindManyArgs>(args?: Prisma.SelectSubset<T, oauth_client_statesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$oauth_client_statesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends oauth_client_statesCreateArgs>(args: Prisma.SelectSubset<T, oauth_client_statesCreateArgs<ExtArgs>>): Prisma.Prisma__oauth_client_statesClient<runtime.Types.Result.GetResult<Prisma.$oauth_client_statesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends oauth_client_statesCreateManyArgs>(args?: Prisma.SelectSubset<T, oauth_client_statesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends oauth_client_statesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, oauth_client_statesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$oauth_client_statesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends oauth_client_statesDeleteArgs>(args: Prisma.SelectSubset<T, oauth_client_statesDeleteArgs<ExtArgs>>): Prisma.Prisma__oauth_client_statesClient<runtime.Types.Result.GetResult<Prisma.$oauth_client_statesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends oauth_client_statesUpdateArgs>(args: Prisma.SelectSubset<T, oauth_client_statesUpdateArgs<ExtArgs>>): Prisma.Prisma__oauth_client_statesClient<runtime.Types.Result.GetResult<Prisma.$oauth_client_statesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends oauth_client_statesDeleteManyArgs>(args?: Prisma.SelectSubset<T, oauth_client_statesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends oauth_client_statesUpdateManyArgs>(args: Prisma.SelectSubset<T, oauth_client_statesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends oauth_client_statesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, oauth_client_statesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$oauth_client_statesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends oauth_client_statesUpsertArgs>(args: Prisma.SelectSubset<T, oauth_client_statesUpsertArgs<ExtArgs>>): Prisma.Prisma__oauth_client_statesClient<runtime.Types.Result.GetResult<Prisma.$oauth_client_statesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends oauth_client_statesCountArgs>(args?: Prisma.Subset<T, oauth_client_statesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Oauth_client_statesCountAggregateOutputType> : number>;
    aggregate<T extends Oauth_client_statesAggregateArgs>(args: Prisma.Subset<T, Oauth_client_statesAggregateArgs>): Prisma.PrismaPromise<GetOauth_client_statesAggregateType<T>>;
    groupBy<T extends oauth_client_statesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: oauth_client_statesGroupByArgs['orderBy'];
    } : {
        orderBy?: oauth_client_statesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, oauth_client_statesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOauth_client_statesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: oauth_client_statesFieldRefs;
}
export interface Prisma__oauth_client_statesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface oauth_client_statesFieldRefs {
    readonly id: Prisma.FieldRef<"oauth_client_states", 'String'>;
    readonly provider_type: Prisma.FieldRef<"oauth_client_states", 'String'>;
    readonly code_verifier: Prisma.FieldRef<"oauth_client_states", 'String'>;
    readonly created_at: Prisma.FieldRef<"oauth_client_states", 'DateTime'>;
}
export type oauth_client_statesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.oauth_client_statesSelect<ExtArgs> | null;
    omit?: Prisma.oauth_client_statesOmit<ExtArgs> | null;
    where: Prisma.oauth_client_statesWhereUniqueInput;
};
export type oauth_client_statesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.oauth_client_statesSelect<ExtArgs> | null;
    omit?: Prisma.oauth_client_statesOmit<ExtArgs> | null;
    where: Prisma.oauth_client_statesWhereUniqueInput;
};
export type oauth_client_statesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.oauth_client_statesSelect<ExtArgs> | null;
    omit?: Prisma.oauth_client_statesOmit<ExtArgs> | null;
    where?: Prisma.oauth_client_statesWhereInput;
    orderBy?: Prisma.oauth_client_statesOrderByWithRelationInput | Prisma.oauth_client_statesOrderByWithRelationInput[];
    cursor?: Prisma.oauth_client_statesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Oauth_client_statesScalarFieldEnum | Prisma.Oauth_client_statesScalarFieldEnum[];
};
export type oauth_client_statesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.oauth_client_statesSelect<ExtArgs> | null;
    omit?: Prisma.oauth_client_statesOmit<ExtArgs> | null;
    where?: Prisma.oauth_client_statesWhereInput;
    orderBy?: Prisma.oauth_client_statesOrderByWithRelationInput | Prisma.oauth_client_statesOrderByWithRelationInput[];
    cursor?: Prisma.oauth_client_statesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Oauth_client_statesScalarFieldEnum | Prisma.Oauth_client_statesScalarFieldEnum[];
};
export type oauth_client_statesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.oauth_client_statesSelect<ExtArgs> | null;
    omit?: Prisma.oauth_client_statesOmit<ExtArgs> | null;
    where?: Prisma.oauth_client_statesWhereInput;
    orderBy?: Prisma.oauth_client_statesOrderByWithRelationInput | Prisma.oauth_client_statesOrderByWithRelationInput[];
    cursor?: Prisma.oauth_client_statesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Oauth_client_statesScalarFieldEnum | Prisma.Oauth_client_statesScalarFieldEnum[];
};
export type oauth_client_statesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.oauth_client_statesSelect<ExtArgs> | null;
    omit?: Prisma.oauth_client_statesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.oauth_client_statesCreateInput, Prisma.oauth_client_statesUncheckedCreateInput>;
};
export type oauth_client_statesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.oauth_client_statesCreateManyInput | Prisma.oauth_client_statesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type oauth_client_statesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.oauth_client_statesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.oauth_client_statesOmit<ExtArgs> | null;
    data: Prisma.oauth_client_statesCreateManyInput | Prisma.oauth_client_statesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type oauth_client_statesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.oauth_client_statesSelect<ExtArgs> | null;
    omit?: Prisma.oauth_client_statesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.oauth_client_statesUpdateInput, Prisma.oauth_client_statesUncheckedUpdateInput>;
    where: Prisma.oauth_client_statesWhereUniqueInput;
};
export type oauth_client_statesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.oauth_client_statesUpdateManyMutationInput, Prisma.oauth_client_statesUncheckedUpdateManyInput>;
    where?: Prisma.oauth_client_statesWhereInput;
    limit?: number;
};
export type oauth_client_statesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.oauth_client_statesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.oauth_client_statesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.oauth_client_statesUpdateManyMutationInput, Prisma.oauth_client_statesUncheckedUpdateManyInput>;
    where?: Prisma.oauth_client_statesWhereInput;
    limit?: number;
};
export type oauth_client_statesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.oauth_client_statesSelect<ExtArgs> | null;
    omit?: Prisma.oauth_client_statesOmit<ExtArgs> | null;
    where: Prisma.oauth_client_statesWhereUniqueInput;
    create: Prisma.XOR<Prisma.oauth_client_statesCreateInput, Prisma.oauth_client_statesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.oauth_client_statesUpdateInput, Prisma.oauth_client_statesUncheckedUpdateInput>;
};
export type oauth_client_statesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.oauth_client_statesSelect<ExtArgs> | null;
    omit?: Prisma.oauth_client_statesOmit<ExtArgs> | null;
    where: Prisma.oauth_client_statesWhereUniqueInput;
};
export type oauth_client_statesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.oauth_client_statesWhereInput;
    limit?: number;
};
export type oauth_client_statesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.oauth_client_statesSelect<ExtArgs> | null;
    omit?: Prisma.oauth_client_statesOmit<ExtArgs> | null;
};
