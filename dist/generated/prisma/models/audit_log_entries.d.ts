import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type audit_log_entriesModel = runtime.Types.Result.DefaultSelection<Prisma.$audit_log_entriesPayload>;
export type AggregateAudit_log_entries = {
    _count: Audit_log_entriesCountAggregateOutputType | null;
    _min: Audit_log_entriesMinAggregateOutputType | null;
    _max: Audit_log_entriesMaxAggregateOutputType | null;
};
export type Audit_log_entriesMinAggregateOutputType = {
    instance_id: string | null;
    id: string | null;
    created_at: Date | null;
    ip_address: string | null;
};
export type Audit_log_entriesMaxAggregateOutputType = {
    instance_id: string | null;
    id: string | null;
    created_at: Date | null;
    ip_address: string | null;
};
export type Audit_log_entriesCountAggregateOutputType = {
    instance_id: number;
    id: number;
    payload: number;
    created_at: number;
    ip_address: number;
    _all: number;
};
export type Audit_log_entriesMinAggregateInputType = {
    instance_id?: true;
    id?: true;
    created_at?: true;
    ip_address?: true;
};
export type Audit_log_entriesMaxAggregateInputType = {
    instance_id?: true;
    id?: true;
    created_at?: true;
    ip_address?: true;
};
export type Audit_log_entriesCountAggregateInputType = {
    instance_id?: true;
    id?: true;
    payload?: true;
    created_at?: true;
    ip_address?: true;
    _all?: true;
};
export type Audit_log_entriesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.audit_log_entriesWhereInput;
    orderBy?: Prisma.audit_log_entriesOrderByWithRelationInput | Prisma.audit_log_entriesOrderByWithRelationInput[];
    cursor?: Prisma.audit_log_entriesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Audit_log_entriesCountAggregateInputType;
    _min?: Audit_log_entriesMinAggregateInputType;
    _max?: Audit_log_entriesMaxAggregateInputType;
};
export type GetAudit_log_entriesAggregateType<T extends Audit_log_entriesAggregateArgs> = {
    [P in keyof T & keyof AggregateAudit_log_entries]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAudit_log_entries[P]> : Prisma.GetScalarType<T[P], AggregateAudit_log_entries[P]>;
};
export type audit_log_entriesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.audit_log_entriesWhereInput;
    orderBy?: Prisma.audit_log_entriesOrderByWithAggregationInput | Prisma.audit_log_entriesOrderByWithAggregationInput[];
    by: Prisma.Audit_log_entriesScalarFieldEnum[] | Prisma.Audit_log_entriesScalarFieldEnum;
    having?: Prisma.audit_log_entriesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Audit_log_entriesCountAggregateInputType | true;
    _min?: Audit_log_entriesMinAggregateInputType;
    _max?: Audit_log_entriesMaxAggregateInputType;
};
export type Audit_log_entriesGroupByOutputType = {
    instance_id: string | null;
    id: string;
    payload: runtime.JsonValue | null;
    created_at: Date | null;
    ip_address: string;
    _count: Audit_log_entriesCountAggregateOutputType | null;
    _min: Audit_log_entriesMinAggregateOutputType | null;
    _max: Audit_log_entriesMaxAggregateOutputType | null;
};
export type GetAudit_log_entriesGroupByPayload<T extends audit_log_entriesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Audit_log_entriesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Audit_log_entriesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Audit_log_entriesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Audit_log_entriesGroupByOutputType[P]>;
}>>;
export type audit_log_entriesWhereInput = {
    AND?: Prisma.audit_log_entriesWhereInput | Prisma.audit_log_entriesWhereInput[];
    OR?: Prisma.audit_log_entriesWhereInput[];
    NOT?: Prisma.audit_log_entriesWhereInput | Prisma.audit_log_entriesWhereInput[];
    instance_id?: Prisma.UuidNullableFilter<"audit_log_entries"> | string | null;
    id?: Prisma.UuidFilter<"audit_log_entries"> | string;
    payload?: Prisma.JsonNullableFilter<"audit_log_entries">;
    created_at?: Prisma.DateTimeNullableFilter<"audit_log_entries"> | Date | string | null;
    ip_address?: Prisma.StringFilter<"audit_log_entries"> | string;
};
export type audit_log_entriesOrderByWithRelationInput = {
    instance_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    id?: Prisma.SortOrder;
    payload?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    ip_address?: Prisma.SortOrder;
};
export type audit_log_entriesWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.audit_log_entriesWhereInput | Prisma.audit_log_entriesWhereInput[];
    OR?: Prisma.audit_log_entriesWhereInput[];
    NOT?: Prisma.audit_log_entriesWhereInput | Prisma.audit_log_entriesWhereInput[];
    instance_id?: Prisma.UuidNullableFilter<"audit_log_entries"> | string | null;
    payload?: Prisma.JsonNullableFilter<"audit_log_entries">;
    created_at?: Prisma.DateTimeNullableFilter<"audit_log_entries"> | Date | string | null;
    ip_address?: Prisma.StringFilter<"audit_log_entries"> | string;
}, "id">;
export type audit_log_entriesOrderByWithAggregationInput = {
    instance_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    id?: Prisma.SortOrder;
    payload?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    ip_address?: Prisma.SortOrder;
    _count?: Prisma.audit_log_entriesCountOrderByAggregateInput;
    _max?: Prisma.audit_log_entriesMaxOrderByAggregateInput;
    _min?: Prisma.audit_log_entriesMinOrderByAggregateInput;
};
export type audit_log_entriesScalarWhereWithAggregatesInput = {
    AND?: Prisma.audit_log_entriesScalarWhereWithAggregatesInput | Prisma.audit_log_entriesScalarWhereWithAggregatesInput[];
    OR?: Prisma.audit_log_entriesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.audit_log_entriesScalarWhereWithAggregatesInput | Prisma.audit_log_entriesScalarWhereWithAggregatesInput[];
    instance_id?: Prisma.UuidNullableWithAggregatesFilter<"audit_log_entries"> | string | null;
    id?: Prisma.UuidWithAggregatesFilter<"audit_log_entries"> | string;
    payload?: Prisma.JsonNullableWithAggregatesFilter<"audit_log_entries">;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"audit_log_entries"> | Date | string | null;
    ip_address?: Prisma.StringWithAggregatesFilter<"audit_log_entries"> | string;
};
export type audit_log_entriesCreateInput = {
    instance_id?: string | null;
    id: string;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string | null;
    ip_address?: string;
};
export type audit_log_entriesUncheckedCreateInput = {
    instance_id?: string | null;
    id: string;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string | null;
    ip_address?: string;
};
export type audit_log_entriesUpdateInput = {
    instance_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ip_address?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type audit_log_entriesUncheckedUpdateInput = {
    instance_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ip_address?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type audit_log_entriesCreateManyInput = {
    instance_id?: string | null;
    id: string;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string | null;
    ip_address?: string;
};
export type audit_log_entriesUpdateManyMutationInput = {
    instance_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ip_address?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type audit_log_entriesUncheckedUpdateManyInput = {
    instance_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ip_address?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type audit_log_entriesCountOrderByAggregateInput = {
    instance_id?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
    payload?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    ip_address?: Prisma.SortOrder;
};
export type audit_log_entriesMaxOrderByAggregateInput = {
    instance_id?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    ip_address?: Prisma.SortOrder;
};
export type audit_log_entriesMinOrderByAggregateInput = {
    instance_id?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    ip_address?: Prisma.SortOrder;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type audit_log_entriesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    instance_id?: boolean;
    id?: boolean;
    payload?: boolean;
    created_at?: boolean;
    ip_address?: boolean;
}, ExtArgs["result"]["audit_log_entries"]>;
export type audit_log_entriesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    instance_id?: boolean;
    id?: boolean;
    payload?: boolean;
    created_at?: boolean;
    ip_address?: boolean;
}, ExtArgs["result"]["audit_log_entries"]>;
export type audit_log_entriesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    instance_id?: boolean;
    id?: boolean;
    payload?: boolean;
    created_at?: boolean;
    ip_address?: boolean;
}, ExtArgs["result"]["audit_log_entries"]>;
export type audit_log_entriesSelectScalar = {
    instance_id?: boolean;
    id?: boolean;
    payload?: boolean;
    created_at?: boolean;
    ip_address?: boolean;
};
export type audit_log_entriesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"instance_id" | "id" | "payload" | "created_at" | "ip_address", ExtArgs["result"]["audit_log_entries"]>;
export type $audit_log_entriesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "audit_log_entries";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        instance_id: string | null;
        id: string;
        payload: runtime.JsonValue | null;
        created_at: Date | null;
        ip_address: string;
    }, ExtArgs["result"]["audit_log_entries"]>;
    composites: {};
};
export type audit_log_entriesGetPayload<S extends boolean | null | undefined | audit_log_entriesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$audit_log_entriesPayload, S>;
export type audit_log_entriesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<audit_log_entriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Audit_log_entriesCountAggregateInputType | true;
};
export interface audit_log_entriesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['audit_log_entries'];
        meta: {
            name: 'audit_log_entries';
        };
    };
    findUnique<T extends audit_log_entriesFindUniqueArgs>(args: Prisma.SelectSubset<T, audit_log_entriesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__audit_log_entriesClient<runtime.Types.Result.GetResult<Prisma.$audit_log_entriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends audit_log_entriesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, audit_log_entriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__audit_log_entriesClient<runtime.Types.Result.GetResult<Prisma.$audit_log_entriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends audit_log_entriesFindFirstArgs>(args?: Prisma.SelectSubset<T, audit_log_entriesFindFirstArgs<ExtArgs>>): Prisma.Prisma__audit_log_entriesClient<runtime.Types.Result.GetResult<Prisma.$audit_log_entriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends audit_log_entriesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, audit_log_entriesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__audit_log_entriesClient<runtime.Types.Result.GetResult<Prisma.$audit_log_entriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends audit_log_entriesFindManyArgs>(args?: Prisma.SelectSubset<T, audit_log_entriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$audit_log_entriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends audit_log_entriesCreateArgs>(args: Prisma.SelectSubset<T, audit_log_entriesCreateArgs<ExtArgs>>): Prisma.Prisma__audit_log_entriesClient<runtime.Types.Result.GetResult<Prisma.$audit_log_entriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends audit_log_entriesCreateManyArgs>(args?: Prisma.SelectSubset<T, audit_log_entriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends audit_log_entriesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, audit_log_entriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$audit_log_entriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends audit_log_entriesDeleteArgs>(args: Prisma.SelectSubset<T, audit_log_entriesDeleteArgs<ExtArgs>>): Prisma.Prisma__audit_log_entriesClient<runtime.Types.Result.GetResult<Prisma.$audit_log_entriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends audit_log_entriesUpdateArgs>(args: Prisma.SelectSubset<T, audit_log_entriesUpdateArgs<ExtArgs>>): Prisma.Prisma__audit_log_entriesClient<runtime.Types.Result.GetResult<Prisma.$audit_log_entriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends audit_log_entriesDeleteManyArgs>(args?: Prisma.SelectSubset<T, audit_log_entriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends audit_log_entriesUpdateManyArgs>(args: Prisma.SelectSubset<T, audit_log_entriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends audit_log_entriesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, audit_log_entriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$audit_log_entriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends audit_log_entriesUpsertArgs>(args: Prisma.SelectSubset<T, audit_log_entriesUpsertArgs<ExtArgs>>): Prisma.Prisma__audit_log_entriesClient<runtime.Types.Result.GetResult<Prisma.$audit_log_entriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends audit_log_entriesCountArgs>(args?: Prisma.Subset<T, audit_log_entriesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Audit_log_entriesCountAggregateOutputType> : number>;
    aggregate<T extends Audit_log_entriesAggregateArgs>(args: Prisma.Subset<T, Audit_log_entriesAggregateArgs>): Prisma.PrismaPromise<GetAudit_log_entriesAggregateType<T>>;
    groupBy<T extends audit_log_entriesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: audit_log_entriesGroupByArgs['orderBy'];
    } : {
        orderBy?: audit_log_entriesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, audit_log_entriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAudit_log_entriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: audit_log_entriesFieldRefs;
}
export interface Prisma__audit_log_entriesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface audit_log_entriesFieldRefs {
    readonly instance_id: Prisma.FieldRef<"audit_log_entries", 'String'>;
    readonly id: Prisma.FieldRef<"audit_log_entries", 'String'>;
    readonly payload: Prisma.FieldRef<"audit_log_entries", 'Json'>;
    readonly created_at: Prisma.FieldRef<"audit_log_entries", 'DateTime'>;
    readonly ip_address: Prisma.FieldRef<"audit_log_entries", 'String'>;
}
export type audit_log_entriesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.audit_log_entriesSelect<ExtArgs> | null;
    omit?: Prisma.audit_log_entriesOmit<ExtArgs> | null;
    where: Prisma.audit_log_entriesWhereUniqueInput;
};
export type audit_log_entriesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.audit_log_entriesSelect<ExtArgs> | null;
    omit?: Prisma.audit_log_entriesOmit<ExtArgs> | null;
    where: Prisma.audit_log_entriesWhereUniqueInput;
};
export type audit_log_entriesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.audit_log_entriesSelect<ExtArgs> | null;
    omit?: Prisma.audit_log_entriesOmit<ExtArgs> | null;
    where?: Prisma.audit_log_entriesWhereInput;
    orderBy?: Prisma.audit_log_entriesOrderByWithRelationInput | Prisma.audit_log_entriesOrderByWithRelationInput[];
    cursor?: Prisma.audit_log_entriesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Audit_log_entriesScalarFieldEnum | Prisma.Audit_log_entriesScalarFieldEnum[];
};
export type audit_log_entriesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.audit_log_entriesSelect<ExtArgs> | null;
    omit?: Prisma.audit_log_entriesOmit<ExtArgs> | null;
    where?: Prisma.audit_log_entriesWhereInput;
    orderBy?: Prisma.audit_log_entriesOrderByWithRelationInput | Prisma.audit_log_entriesOrderByWithRelationInput[];
    cursor?: Prisma.audit_log_entriesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Audit_log_entriesScalarFieldEnum | Prisma.Audit_log_entriesScalarFieldEnum[];
};
export type audit_log_entriesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.audit_log_entriesSelect<ExtArgs> | null;
    omit?: Prisma.audit_log_entriesOmit<ExtArgs> | null;
    where?: Prisma.audit_log_entriesWhereInput;
    orderBy?: Prisma.audit_log_entriesOrderByWithRelationInput | Prisma.audit_log_entriesOrderByWithRelationInput[];
    cursor?: Prisma.audit_log_entriesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Audit_log_entriesScalarFieldEnum | Prisma.Audit_log_entriesScalarFieldEnum[];
};
export type audit_log_entriesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.audit_log_entriesSelect<ExtArgs> | null;
    omit?: Prisma.audit_log_entriesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.audit_log_entriesCreateInput, Prisma.audit_log_entriesUncheckedCreateInput>;
};
export type audit_log_entriesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.audit_log_entriesCreateManyInput | Prisma.audit_log_entriesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type audit_log_entriesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.audit_log_entriesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.audit_log_entriesOmit<ExtArgs> | null;
    data: Prisma.audit_log_entriesCreateManyInput | Prisma.audit_log_entriesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type audit_log_entriesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.audit_log_entriesSelect<ExtArgs> | null;
    omit?: Prisma.audit_log_entriesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.audit_log_entriesUpdateInput, Prisma.audit_log_entriesUncheckedUpdateInput>;
    where: Prisma.audit_log_entriesWhereUniqueInput;
};
export type audit_log_entriesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.audit_log_entriesUpdateManyMutationInput, Prisma.audit_log_entriesUncheckedUpdateManyInput>;
    where?: Prisma.audit_log_entriesWhereInput;
    limit?: number;
};
export type audit_log_entriesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.audit_log_entriesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.audit_log_entriesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.audit_log_entriesUpdateManyMutationInput, Prisma.audit_log_entriesUncheckedUpdateManyInput>;
    where?: Prisma.audit_log_entriesWhereInput;
    limit?: number;
};
export type audit_log_entriesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.audit_log_entriesSelect<ExtArgs> | null;
    omit?: Prisma.audit_log_entriesOmit<ExtArgs> | null;
    where: Prisma.audit_log_entriesWhereUniqueInput;
    create: Prisma.XOR<Prisma.audit_log_entriesCreateInput, Prisma.audit_log_entriesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.audit_log_entriesUpdateInput, Prisma.audit_log_entriesUncheckedUpdateInput>;
};
export type audit_log_entriesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.audit_log_entriesSelect<ExtArgs> | null;
    omit?: Prisma.audit_log_entriesOmit<ExtArgs> | null;
    where: Prisma.audit_log_entriesWhereUniqueInput;
};
export type audit_log_entriesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.audit_log_entriesWhereInput;
    limit?: number;
};
export type audit_log_entriesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.audit_log_entriesSelect<ExtArgs> | null;
    omit?: Prisma.audit_log_entriesOmit<ExtArgs> | null;
};
