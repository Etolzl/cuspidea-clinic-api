import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type instancesModel = runtime.Types.Result.DefaultSelection<Prisma.$instancesPayload>;
export type AggregateInstances = {
    _count: InstancesCountAggregateOutputType | null;
    _min: InstancesMinAggregateOutputType | null;
    _max: InstancesMaxAggregateOutputType | null;
};
export type InstancesMinAggregateOutputType = {
    id: string | null;
    uuid: string | null;
    raw_base_config: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type InstancesMaxAggregateOutputType = {
    id: string | null;
    uuid: string | null;
    raw_base_config: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type InstancesCountAggregateOutputType = {
    id: number;
    uuid: number;
    raw_base_config: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type InstancesMinAggregateInputType = {
    id?: true;
    uuid?: true;
    raw_base_config?: true;
    created_at?: true;
    updated_at?: true;
};
export type InstancesMaxAggregateInputType = {
    id?: true;
    uuid?: true;
    raw_base_config?: true;
    created_at?: true;
    updated_at?: true;
};
export type InstancesCountAggregateInputType = {
    id?: true;
    uuid?: true;
    raw_base_config?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type InstancesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.instancesWhereInput;
    orderBy?: Prisma.instancesOrderByWithRelationInput | Prisma.instancesOrderByWithRelationInput[];
    cursor?: Prisma.instancesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | InstancesCountAggregateInputType;
    _min?: InstancesMinAggregateInputType;
    _max?: InstancesMaxAggregateInputType;
};
export type GetInstancesAggregateType<T extends InstancesAggregateArgs> = {
    [P in keyof T & keyof AggregateInstances]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInstances[P]> : Prisma.GetScalarType<T[P], AggregateInstances[P]>;
};
export type instancesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.instancesWhereInput;
    orderBy?: Prisma.instancesOrderByWithAggregationInput | Prisma.instancesOrderByWithAggregationInput[];
    by: Prisma.InstancesScalarFieldEnum[] | Prisma.InstancesScalarFieldEnum;
    having?: Prisma.instancesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InstancesCountAggregateInputType | true;
    _min?: InstancesMinAggregateInputType;
    _max?: InstancesMaxAggregateInputType;
};
export type InstancesGroupByOutputType = {
    id: string;
    uuid: string | null;
    raw_base_config: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    _count: InstancesCountAggregateOutputType | null;
    _min: InstancesMinAggregateOutputType | null;
    _max: InstancesMaxAggregateOutputType | null;
};
export type GetInstancesGroupByPayload<T extends instancesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InstancesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InstancesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InstancesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InstancesGroupByOutputType[P]>;
}>>;
export type instancesWhereInput = {
    AND?: Prisma.instancesWhereInput | Prisma.instancesWhereInput[];
    OR?: Prisma.instancesWhereInput[];
    NOT?: Prisma.instancesWhereInput | Prisma.instancesWhereInput[];
    id?: Prisma.UuidFilter<"instances"> | string;
    uuid?: Prisma.UuidNullableFilter<"instances"> | string | null;
    raw_base_config?: Prisma.StringNullableFilter<"instances"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"instances"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"instances"> | Date | string | null;
};
export type instancesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    uuid?: Prisma.SortOrderInput | Prisma.SortOrder;
    raw_base_config?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type instancesWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.instancesWhereInput | Prisma.instancesWhereInput[];
    OR?: Prisma.instancesWhereInput[];
    NOT?: Prisma.instancesWhereInput | Prisma.instancesWhereInput[];
    uuid?: Prisma.UuidNullableFilter<"instances"> | string | null;
    raw_base_config?: Prisma.StringNullableFilter<"instances"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"instances"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"instances"> | Date | string | null;
}, "id">;
export type instancesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    uuid?: Prisma.SortOrderInput | Prisma.SortOrder;
    raw_base_config?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.instancesCountOrderByAggregateInput;
    _max?: Prisma.instancesMaxOrderByAggregateInput;
    _min?: Prisma.instancesMinOrderByAggregateInput;
};
export type instancesScalarWhereWithAggregatesInput = {
    AND?: Prisma.instancesScalarWhereWithAggregatesInput | Prisma.instancesScalarWhereWithAggregatesInput[];
    OR?: Prisma.instancesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.instancesScalarWhereWithAggregatesInput | Prisma.instancesScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"instances"> | string;
    uuid?: Prisma.UuidNullableWithAggregatesFilter<"instances"> | string | null;
    raw_base_config?: Prisma.StringNullableWithAggregatesFilter<"instances"> | string | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"instances"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"instances"> | Date | string | null;
};
export type instancesCreateInput = {
    id: string;
    uuid?: string | null;
    raw_base_config?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type instancesUncheckedCreateInput = {
    id: string;
    uuid?: string | null;
    raw_base_config?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type instancesUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    uuid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    raw_base_config?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type instancesUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    uuid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    raw_base_config?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type instancesCreateManyInput = {
    id: string;
    uuid?: string | null;
    raw_base_config?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type instancesUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    uuid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    raw_base_config?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type instancesUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    uuid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    raw_base_config?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type instancesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    uuid?: Prisma.SortOrder;
    raw_base_config?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type instancesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    uuid?: Prisma.SortOrder;
    raw_base_config?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type instancesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    uuid?: Prisma.SortOrder;
    raw_base_config?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type instancesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    uuid?: boolean;
    raw_base_config?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["instances"]>;
export type instancesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    uuid?: boolean;
    raw_base_config?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["instances"]>;
export type instancesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    uuid?: boolean;
    raw_base_config?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["instances"]>;
export type instancesSelectScalar = {
    id?: boolean;
    uuid?: boolean;
    raw_base_config?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type instancesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "uuid" | "raw_base_config" | "created_at" | "updated_at", ExtArgs["result"]["instances"]>;
export type $instancesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "instances";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        uuid: string | null;
        raw_base_config: string | null;
        created_at: Date | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["instances"]>;
    composites: {};
};
export type instancesGetPayload<S extends boolean | null | undefined | instancesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$instancesPayload, S>;
export type instancesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<instancesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InstancesCountAggregateInputType | true;
};
export interface instancesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['instances'];
        meta: {
            name: 'instances';
        };
    };
    findUnique<T extends instancesFindUniqueArgs>(args: Prisma.SelectSubset<T, instancesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__instancesClient<runtime.Types.Result.GetResult<Prisma.$instancesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends instancesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, instancesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__instancesClient<runtime.Types.Result.GetResult<Prisma.$instancesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends instancesFindFirstArgs>(args?: Prisma.SelectSubset<T, instancesFindFirstArgs<ExtArgs>>): Prisma.Prisma__instancesClient<runtime.Types.Result.GetResult<Prisma.$instancesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends instancesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, instancesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__instancesClient<runtime.Types.Result.GetResult<Prisma.$instancesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends instancesFindManyArgs>(args?: Prisma.SelectSubset<T, instancesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$instancesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends instancesCreateArgs>(args: Prisma.SelectSubset<T, instancesCreateArgs<ExtArgs>>): Prisma.Prisma__instancesClient<runtime.Types.Result.GetResult<Prisma.$instancesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends instancesCreateManyArgs>(args?: Prisma.SelectSubset<T, instancesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends instancesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, instancesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$instancesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends instancesDeleteArgs>(args: Prisma.SelectSubset<T, instancesDeleteArgs<ExtArgs>>): Prisma.Prisma__instancesClient<runtime.Types.Result.GetResult<Prisma.$instancesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends instancesUpdateArgs>(args: Prisma.SelectSubset<T, instancesUpdateArgs<ExtArgs>>): Prisma.Prisma__instancesClient<runtime.Types.Result.GetResult<Prisma.$instancesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends instancesDeleteManyArgs>(args?: Prisma.SelectSubset<T, instancesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends instancesUpdateManyArgs>(args: Prisma.SelectSubset<T, instancesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends instancesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, instancesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$instancesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends instancesUpsertArgs>(args: Prisma.SelectSubset<T, instancesUpsertArgs<ExtArgs>>): Prisma.Prisma__instancesClient<runtime.Types.Result.GetResult<Prisma.$instancesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends instancesCountArgs>(args?: Prisma.Subset<T, instancesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InstancesCountAggregateOutputType> : number>;
    aggregate<T extends InstancesAggregateArgs>(args: Prisma.Subset<T, InstancesAggregateArgs>): Prisma.PrismaPromise<GetInstancesAggregateType<T>>;
    groupBy<T extends instancesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: instancesGroupByArgs['orderBy'];
    } : {
        orderBy?: instancesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, instancesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstancesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: instancesFieldRefs;
}
export interface Prisma__instancesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface instancesFieldRefs {
    readonly id: Prisma.FieldRef<"instances", 'String'>;
    readonly uuid: Prisma.FieldRef<"instances", 'String'>;
    readonly raw_base_config: Prisma.FieldRef<"instances", 'String'>;
    readonly created_at: Prisma.FieldRef<"instances", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"instances", 'DateTime'>;
}
export type instancesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.instancesSelect<ExtArgs> | null;
    omit?: Prisma.instancesOmit<ExtArgs> | null;
    where: Prisma.instancesWhereUniqueInput;
};
export type instancesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.instancesSelect<ExtArgs> | null;
    omit?: Prisma.instancesOmit<ExtArgs> | null;
    where: Prisma.instancesWhereUniqueInput;
};
export type instancesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.instancesSelect<ExtArgs> | null;
    omit?: Prisma.instancesOmit<ExtArgs> | null;
    where?: Prisma.instancesWhereInput;
    orderBy?: Prisma.instancesOrderByWithRelationInput | Prisma.instancesOrderByWithRelationInput[];
    cursor?: Prisma.instancesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InstancesScalarFieldEnum | Prisma.InstancesScalarFieldEnum[];
};
export type instancesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.instancesSelect<ExtArgs> | null;
    omit?: Prisma.instancesOmit<ExtArgs> | null;
    where?: Prisma.instancesWhereInput;
    orderBy?: Prisma.instancesOrderByWithRelationInput | Prisma.instancesOrderByWithRelationInput[];
    cursor?: Prisma.instancesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InstancesScalarFieldEnum | Prisma.InstancesScalarFieldEnum[];
};
export type instancesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.instancesSelect<ExtArgs> | null;
    omit?: Prisma.instancesOmit<ExtArgs> | null;
    where?: Prisma.instancesWhereInput;
    orderBy?: Prisma.instancesOrderByWithRelationInput | Prisma.instancesOrderByWithRelationInput[];
    cursor?: Prisma.instancesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InstancesScalarFieldEnum | Prisma.InstancesScalarFieldEnum[];
};
export type instancesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.instancesSelect<ExtArgs> | null;
    omit?: Prisma.instancesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.instancesCreateInput, Prisma.instancesUncheckedCreateInput>;
};
export type instancesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.instancesCreateManyInput | Prisma.instancesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type instancesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.instancesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.instancesOmit<ExtArgs> | null;
    data: Prisma.instancesCreateManyInput | Prisma.instancesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type instancesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.instancesSelect<ExtArgs> | null;
    omit?: Prisma.instancesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.instancesUpdateInput, Prisma.instancesUncheckedUpdateInput>;
    where: Prisma.instancesWhereUniqueInput;
};
export type instancesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.instancesUpdateManyMutationInput, Prisma.instancesUncheckedUpdateManyInput>;
    where?: Prisma.instancesWhereInput;
    limit?: number;
};
export type instancesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.instancesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.instancesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.instancesUpdateManyMutationInput, Prisma.instancesUncheckedUpdateManyInput>;
    where?: Prisma.instancesWhereInput;
    limit?: number;
};
export type instancesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.instancesSelect<ExtArgs> | null;
    omit?: Prisma.instancesOmit<ExtArgs> | null;
    where: Prisma.instancesWhereUniqueInput;
    create: Prisma.XOR<Prisma.instancesCreateInput, Prisma.instancesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.instancesUpdateInput, Prisma.instancesUncheckedUpdateInput>;
};
export type instancesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.instancesSelect<ExtArgs> | null;
    omit?: Prisma.instancesOmit<ExtArgs> | null;
    where: Prisma.instancesWhereUniqueInput;
};
export type instancesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.instancesWhereInput;
    limit?: number;
};
export type instancesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.instancesSelect<ExtArgs> | null;
    omit?: Prisma.instancesOmit<ExtArgs> | null;
};
