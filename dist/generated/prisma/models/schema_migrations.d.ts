import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type schema_migrationsModel = runtime.Types.Result.DefaultSelection<Prisma.$schema_migrationsPayload>;
export type AggregateSchema_migrations = {
    _count: Schema_migrationsCountAggregateOutputType | null;
    _min: Schema_migrationsMinAggregateOutputType | null;
    _max: Schema_migrationsMaxAggregateOutputType | null;
};
export type Schema_migrationsMinAggregateOutputType = {
    version: string | null;
};
export type Schema_migrationsMaxAggregateOutputType = {
    version: string | null;
};
export type Schema_migrationsCountAggregateOutputType = {
    version: number;
    _all: number;
};
export type Schema_migrationsMinAggregateInputType = {
    version?: true;
};
export type Schema_migrationsMaxAggregateInputType = {
    version?: true;
};
export type Schema_migrationsCountAggregateInputType = {
    version?: true;
    _all?: true;
};
export type Schema_migrationsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.schema_migrationsWhereInput;
    orderBy?: Prisma.schema_migrationsOrderByWithRelationInput | Prisma.schema_migrationsOrderByWithRelationInput[];
    cursor?: Prisma.schema_migrationsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Schema_migrationsCountAggregateInputType;
    _min?: Schema_migrationsMinAggregateInputType;
    _max?: Schema_migrationsMaxAggregateInputType;
};
export type GetSchema_migrationsAggregateType<T extends Schema_migrationsAggregateArgs> = {
    [P in keyof T & keyof AggregateSchema_migrations]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSchema_migrations[P]> : Prisma.GetScalarType<T[P], AggregateSchema_migrations[P]>;
};
export type schema_migrationsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.schema_migrationsWhereInput;
    orderBy?: Prisma.schema_migrationsOrderByWithAggregationInput | Prisma.schema_migrationsOrderByWithAggregationInput[];
    by: Prisma.Schema_migrationsScalarFieldEnum[] | Prisma.Schema_migrationsScalarFieldEnum;
    having?: Prisma.schema_migrationsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Schema_migrationsCountAggregateInputType | true;
    _min?: Schema_migrationsMinAggregateInputType;
    _max?: Schema_migrationsMaxAggregateInputType;
};
export type Schema_migrationsGroupByOutputType = {
    version: string;
    _count: Schema_migrationsCountAggregateOutputType | null;
    _min: Schema_migrationsMinAggregateOutputType | null;
    _max: Schema_migrationsMaxAggregateOutputType | null;
};
export type GetSchema_migrationsGroupByPayload<T extends schema_migrationsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Schema_migrationsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Schema_migrationsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Schema_migrationsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Schema_migrationsGroupByOutputType[P]>;
}>>;
export type schema_migrationsWhereInput = {
    AND?: Prisma.schema_migrationsWhereInput | Prisma.schema_migrationsWhereInput[];
    OR?: Prisma.schema_migrationsWhereInput[];
    NOT?: Prisma.schema_migrationsWhereInput | Prisma.schema_migrationsWhereInput[];
    version?: Prisma.StringFilter<"schema_migrations"> | string;
};
export type schema_migrationsOrderByWithRelationInput = {
    version?: Prisma.SortOrder;
};
export type schema_migrationsWhereUniqueInput = Prisma.AtLeast<{
    version?: string;
    AND?: Prisma.schema_migrationsWhereInput | Prisma.schema_migrationsWhereInput[];
    OR?: Prisma.schema_migrationsWhereInput[];
    NOT?: Prisma.schema_migrationsWhereInput | Prisma.schema_migrationsWhereInput[];
}, "version">;
export type schema_migrationsOrderByWithAggregationInput = {
    version?: Prisma.SortOrder;
    _count?: Prisma.schema_migrationsCountOrderByAggregateInput;
    _max?: Prisma.schema_migrationsMaxOrderByAggregateInput;
    _min?: Prisma.schema_migrationsMinOrderByAggregateInput;
};
export type schema_migrationsScalarWhereWithAggregatesInput = {
    AND?: Prisma.schema_migrationsScalarWhereWithAggregatesInput | Prisma.schema_migrationsScalarWhereWithAggregatesInput[];
    OR?: Prisma.schema_migrationsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.schema_migrationsScalarWhereWithAggregatesInput | Prisma.schema_migrationsScalarWhereWithAggregatesInput[];
    version?: Prisma.StringWithAggregatesFilter<"schema_migrations"> | string;
};
export type schema_migrationsCreateInput = {
    version: string;
};
export type schema_migrationsUncheckedCreateInput = {
    version: string;
};
export type schema_migrationsUpdateInput = {
    version?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type schema_migrationsUncheckedUpdateInput = {
    version?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type schema_migrationsCreateManyInput = {
    version: string;
};
export type schema_migrationsUpdateManyMutationInput = {
    version?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type schema_migrationsUncheckedUpdateManyInput = {
    version?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type schema_migrationsCountOrderByAggregateInput = {
    version?: Prisma.SortOrder;
};
export type schema_migrationsMaxOrderByAggregateInput = {
    version?: Prisma.SortOrder;
};
export type schema_migrationsMinOrderByAggregateInput = {
    version?: Prisma.SortOrder;
};
export type schema_migrationsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    version?: boolean;
}, ExtArgs["result"]["schema_migrations"]>;
export type schema_migrationsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    version?: boolean;
}, ExtArgs["result"]["schema_migrations"]>;
export type schema_migrationsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    version?: boolean;
}, ExtArgs["result"]["schema_migrations"]>;
export type schema_migrationsSelectScalar = {
    version?: boolean;
};
export type schema_migrationsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"version", ExtArgs["result"]["schema_migrations"]>;
export type $schema_migrationsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "schema_migrations";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        version: string;
    }, ExtArgs["result"]["schema_migrations"]>;
    composites: {};
};
export type schema_migrationsGetPayload<S extends boolean | null | undefined | schema_migrationsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$schema_migrationsPayload, S>;
export type schema_migrationsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<schema_migrationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Schema_migrationsCountAggregateInputType | true;
};
export interface schema_migrationsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['schema_migrations'];
        meta: {
            name: 'schema_migrations';
        };
    };
    findUnique<T extends schema_migrationsFindUniqueArgs>(args: Prisma.SelectSubset<T, schema_migrationsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__schema_migrationsClient<runtime.Types.Result.GetResult<Prisma.$schema_migrationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends schema_migrationsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, schema_migrationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__schema_migrationsClient<runtime.Types.Result.GetResult<Prisma.$schema_migrationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends schema_migrationsFindFirstArgs>(args?: Prisma.SelectSubset<T, schema_migrationsFindFirstArgs<ExtArgs>>): Prisma.Prisma__schema_migrationsClient<runtime.Types.Result.GetResult<Prisma.$schema_migrationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends schema_migrationsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, schema_migrationsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__schema_migrationsClient<runtime.Types.Result.GetResult<Prisma.$schema_migrationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends schema_migrationsFindManyArgs>(args?: Prisma.SelectSubset<T, schema_migrationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$schema_migrationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends schema_migrationsCreateArgs>(args: Prisma.SelectSubset<T, schema_migrationsCreateArgs<ExtArgs>>): Prisma.Prisma__schema_migrationsClient<runtime.Types.Result.GetResult<Prisma.$schema_migrationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends schema_migrationsCreateManyArgs>(args?: Prisma.SelectSubset<T, schema_migrationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends schema_migrationsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, schema_migrationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$schema_migrationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends schema_migrationsDeleteArgs>(args: Prisma.SelectSubset<T, schema_migrationsDeleteArgs<ExtArgs>>): Prisma.Prisma__schema_migrationsClient<runtime.Types.Result.GetResult<Prisma.$schema_migrationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends schema_migrationsUpdateArgs>(args: Prisma.SelectSubset<T, schema_migrationsUpdateArgs<ExtArgs>>): Prisma.Prisma__schema_migrationsClient<runtime.Types.Result.GetResult<Prisma.$schema_migrationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends schema_migrationsDeleteManyArgs>(args?: Prisma.SelectSubset<T, schema_migrationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends schema_migrationsUpdateManyArgs>(args: Prisma.SelectSubset<T, schema_migrationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends schema_migrationsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, schema_migrationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$schema_migrationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends schema_migrationsUpsertArgs>(args: Prisma.SelectSubset<T, schema_migrationsUpsertArgs<ExtArgs>>): Prisma.Prisma__schema_migrationsClient<runtime.Types.Result.GetResult<Prisma.$schema_migrationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends schema_migrationsCountArgs>(args?: Prisma.Subset<T, schema_migrationsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Schema_migrationsCountAggregateOutputType> : number>;
    aggregate<T extends Schema_migrationsAggregateArgs>(args: Prisma.Subset<T, Schema_migrationsAggregateArgs>): Prisma.PrismaPromise<GetSchema_migrationsAggregateType<T>>;
    groupBy<T extends schema_migrationsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: schema_migrationsGroupByArgs['orderBy'];
    } : {
        orderBy?: schema_migrationsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, schema_migrationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchema_migrationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: schema_migrationsFieldRefs;
}
export interface Prisma__schema_migrationsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface schema_migrationsFieldRefs {
    readonly version: Prisma.FieldRef<"schema_migrations", 'String'>;
}
export type schema_migrationsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.schema_migrationsSelect<ExtArgs> | null;
    omit?: Prisma.schema_migrationsOmit<ExtArgs> | null;
    where: Prisma.schema_migrationsWhereUniqueInput;
};
export type schema_migrationsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.schema_migrationsSelect<ExtArgs> | null;
    omit?: Prisma.schema_migrationsOmit<ExtArgs> | null;
    where: Prisma.schema_migrationsWhereUniqueInput;
};
export type schema_migrationsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.schema_migrationsSelect<ExtArgs> | null;
    omit?: Prisma.schema_migrationsOmit<ExtArgs> | null;
    where?: Prisma.schema_migrationsWhereInput;
    orderBy?: Prisma.schema_migrationsOrderByWithRelationInput | Prisma.schema_migrationsOrderByWithRelationInput[];
    cursor?: Prisma.schema_migrationsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Schema_migrationsScalarFieldEnum | Prisma.Schema_migrationsScalarFieldEnum[];
};
export type schema_migrationsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.schema_migrationsSelect<ExtArgs> | null;
    omit?: Prisma.schema_migrationsOmit<ExtArgs> | null;
    where?: Prisma.schema_migrationsWhereInput;
    orderBy?: Prisma.schema_migrationsOrderByWithRelationInput | Prisma.schema_migrationsOrderByWithRelationInput[];
    cursor?: Prisma.schema_migrationsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Schema_migrationsScalarFieldEnum | Prisma.Schema_migrationsScalarFieldEnum[];
};
export type schema_migrationsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.schema_migrationsSelect<ExtArgs> | null;
    omit?: Prisma.schema_migrationsOmit<ExtArgs> | null;
    where?: Prisma.schema_migrationsWhereInput;
    orderBy?: Prisma.schema_migrationsOrderByWithRelationInput | Prisma.schema_migrationsOrderByWithRelationInput[];
    cursor?: Prisma.schema_migrationsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Schema_migrationsScalarFieldEnum | Prisma.Schema_migrationsScalarFieldEnum[];
};
export type schema_migrationsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.schema_migrationsSelect<ExtArgs> | null;
    omit?: Prisma.schema_migrationsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.schema_migrationsCreateInput, Prisma.schema_migrationsUncheckedCreateInput>;
};
export type schema_migrationsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.schema_migrationsCreateManyInput | Prisma.schema_migrationsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type schema_migrationsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.schema_migrationsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.schema_migrationsOmit<ExtArgs> | null;
    data: Prisma.schema_migrationsCreateManyInput | Prisma.schema_migrationsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type schema_migrationsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.schema_migrationsSelect<ExtArgs> | null;
    omit?: Prisma.schema_migrationsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.schema_migrationsUpdateInput, Prisma.schema_migrationsUncheckedUpdateInput>;
    where: Prisma.schema_migrationsWhereUniqueInput;
};
export type schema_migrationsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.schema_migrationsUpdateManyMutationInput, Prisma.schema_migrationsUncheckedUpdateManyInput>;
    where?: Prisma.schema_migrationsWhereInput;
    limit?: number;
};
export type schema_migrationsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.schema_migrationsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.schema_migrationsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.schema_migrationsUpdateManyMutationInput, Prisma.schema_migrationsUncheckedUpdateManyInput>;
    where?: Prisma.schema_migrationsWhereInput;
    limit?: number;
};
export type schema_migrationsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.schema_migrationsSelect<ExtArgs> | null;
    omit?: Prisma.schema_migrationsOmit<ExtArgs> | null;
    where: Prisma.schema_migrationsWhereUniqueInput;
    create: Prisma.XOR<Prisma.schema_migrationsCreateInput, Prisma.schema_migrationsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.schema_migrationsUpdateInput, Prisma.schema_migrationsUncheckedUpdateInput>;
};
export type schema_migrationsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.schema_migrationsSelect<ExtArgs> | null;
    omit?: Prisma.schema_migrationsOmit<ExtArgs> | null;
    where: Prisma.schema_migrationsWhereUniqueInput;
};
export type schema_migrationsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.schema_migrationsWhereInput;
    limit?: number;
};
export type schema_migrationsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.schema_migrationsSelect<ExtArgs> | null;
    omit?: Prisma.schema_migrationsOmit<ExtArgs> | null;
};
