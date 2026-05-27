import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly audit_log_entries: "audit_log_entries";
    readonly custom_oauth_providers: "custom_oauth_providers";
    readonly flow_state: "flow_state";
    readonly identities: "identities";
    readonly instances: "instances";
    readonly mfa_amr_claims: "mfa_amr_claims";
    readonly mfa_challenges: "mfa_challenges";
    readonly mfa_factors: "mfa_factors";
    readonly oauth_authorizations: "oauth_authorizations";
    readonly oauth_client_states: "oauth_client_states";
    readonly oauth_clients: "oauth_clients";
    readonly oauth_consents: "oauth_consents";
    readonly one_time_tokens: "one_time_tokens";
    readonly refresh_tokens: "refresh_tokens";
    readonly saml_providers: "saml_providers";
    readonly saml_relay_states: "saml_relay_states";
    readonly schema_migrations: "schema_migrations";
    readonly sessions: "sessions";
    readonly sso_domains: "sso_domains";
    readonly sso_providers: "sso_providers";
    readonly users: "users";
    readonly webauthn_challenges: "webauthn_challenges";
    readonly webauthn_credentials: "webauthn_credentials";
    readonly citas: "citas";
    readonly cobros: "cobros";
    readonly documentos_clinicos: "documentos_clinicos";
    readonly historial_pagos: "historial_pagos";
    readonly notas_clinicas: "notas_clinicas";
    readonly pacientes: "pacientes";
    readonly perfiles: "perfiles";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "audit_log_entries" | "custom_oauth_providers" | "flow_state" | "identities" | "instances" | "mfa_amr_claims" | "mfa_challenges" | "mfa_factors" | "oauth_authorizations" | "oauth_client_states" | "oauth_clients" | "oauth_consents" | "one_time_tokens" | "refresh_tokens" | "saml_providers" | "saml_relay_states" | "schema_migrations" | "sessions" | "sso_domains" | "sso_providers" | "users" | "webauthn_challenges" | "webauthn_credentials" | "citas" | "cobros" | "documentos_clinicos" | "historial_pagos" | "notas_clinicas" | "pacientes" | "perfiles";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        audit_log_entries: {
            payload: Prisma.$audit_log_entriesPayload<ExtArgs>;
            fields: Prisma.audit_log_entriesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.audit_log_entriesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$audit_log_entriesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.audit_log_entriesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$audit_log_entriesPayload>;
                };
                findFirst: {
                    args: Prisma.audit_log_entriesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$audit_log_entriesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.audit_log_entriesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$audit_log_entriesPayload>;
                };
                findMany: {
                    args: Prisma.audit_log_entriesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$audit_log_entriesPayload>[];
                };
                create: {
                    args: Prisma.audit_log_entriesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$audit_log_entriesPayload>;
                };
                createMany: {
                    args: Prisma.audit_log_entriesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.audit_log_entriesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$audit_log_entriesPayload>[];
                };
                delete: {
                    args: Prisma.audit_log_entriesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$audit_log_entriesPayload>;
                };
                update: {
                    args: Prisma.audit_log_entriesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$audit_log_entriesPayload>;
                };
                deleteMany: {
                    args: Prisma.audit_log_entriesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.audit_log_entriesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.audit_log_entriesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$audit_log_entriesPayload>[];
                };
                upsert: {
                    args: Prisma.audit_log_entriesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$audit_log_entriesPayload>;
                };
                aggregate: {
                    args: Prisma.Audit_log_entriesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAudit_log_entries>;
                };
                groupBy: {
                    args: Prisma.audit_log_entriesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Audit_log_entriesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.audit_log_entriesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Audit_log_entriesCountAggregateOutputType> | number;
                };
            };
        };
        custom_oauth_providers: {
            payload: Prisma.$custom_oauth_providersPayload<ExtArgs>;
            fields: Prisma.custom_oauth_providersFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.custom_oauth_providersFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$custom_oauth_providersPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.custom_oauth_providersFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$custom_oauth_providersPayload>;
                };
                findFirst: {
                    args: Prisma.custom_oauth_providersFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$custom_oauth_providersPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.custom_oauth_providersFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$custom_oauth_providersPayload>;
                };
                findMany: {
                    args: Prisma.custom_oauth_providersFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$custom_oauth_providersPayload>[];
                };
                create: {
                    args: Prisma.custom_oauth_providersCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$custom_oauth_providersPayload>;
                };
                createMany: {
                    args: Prisma.custom_oauth_providersCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.custom_oauth_providersCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$custom_oauth_providersPayload>[];
                };
                delete: {
                    args: Prisma.custom_oauth_providersDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$custom_oauth_providersPayload>;
                };
                update: {
                    args: Prisma.custom_oauth_providersUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$custom_oauth_providersPayload>;
                };
                deleteMany: {
                    args: Prisma.custom_oauth_providersDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.custom_oauth_providersUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.custom_oauth_providersUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$custom_oauth_providersPayload>[];
                };
                upsert: {
                    args: Prisma.custom_oauth_providersUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$custom_oauth_providersPayload>;
                };
                aggregate: {
                    args: Prisma.Custom_oauth_providersAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCustom_oauth_providers>;
                };
                groupBy: {
                    args: Prisma.custom_oauth_providersGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Custom_oauth_providersGroupByOutputType>[];
                };
                count: {
                    args: Prisma.custom_oauth_providersCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Custom_oauth_providersCountAggregateOutputType> | number;
                };
            };
        };
        flow_state: {
            payload: Prisma.$flow_statePayload<ExtArgs>;
            fields: Prisma.flow_stateFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.flow_stateFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$flow_statePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.flow_stateFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$flow_statePayload>;
                };
                findFirst: {
                    args: Prisma.flow_stateFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$flow_statePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.flow_stateFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$flow_statePayload>;
                };
                findMany: {
                    args: Prisma.flow_stateFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$flow_statePayload>[];
                };
                create: {
                    args: Prisma.flow_stateCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$flow_statePayload>;
                };
                createMany: {
                    args: Prisma.flow_stateCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.flow_stateCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$flow_statePayload>[];
                };
                delete: {
                    args: Prisma.flow_stateDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$flow_statePayload>;
                };
                update: {
                    args: Prisma.flow_stateUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$flow_statePayload>;
                };
                deleteMany: {
                    args: Prisma.flow_stateDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.flow_stateUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.flow_stateUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$flow_statePayload>[];
                };
                upsert: {
                    args: Prisma.flow_stateUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$flow_statePayload>;
                };
                aggregate: {
                    args: Prisma.Flow_stateAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFlow_state>;
                };
                groupBy: {
                    args: Prisma.flow_stateGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Flow_stateGroupByOutputType>[];
                };
                count: {
                    args: Prisma.flow_stateCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Flow_stateCountAggregateOutputType> | number;
                };
            };
        };
        identities: {
            payload: Prisma.$identitiesPayload<ExtArgs>;
            fields: Prisma.identitiesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.identitiesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$identitiesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.identitiesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$identitiesPayload>;
                };
                findFirst: {
                    args: Prisma.identitiesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$identitiesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.identitiesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$identitiesPayload>;
                };
                findMany: {
                    args: Prisma.identitiesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$identitiesPayload>[];
                };
                create: {
                    args: Prisma.identitiesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$identitiesPayload>;
                };
                createMany: {
                    args: Prisma.identitiesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.identitiesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$identitiesPayload>[];
                };
                delete: {
                    args: Prisma.identitiesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$identitiesPayload>;
                };
                update: {
                    args: Prisma.identitiesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$identitiesPayload>;
                };
                deleteMany: {
                    args: Prisma.identitiesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.identitiesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.identitiesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$identitiesPayload>[];
                };
                upsert: {
                    args: Prisma.identitiesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$identitiesPayload>;
                };
                aggregate: {
                    args: Prisma.IdentitiesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateIdentities>;
                };
                groupBy: {
                    args: Prisma.identitiesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.IdentitiesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.identitiesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.IdentitiesCountAggregateOutputType> | number;
                };
            };
        };
        instances: {
            payload: Prisma.$instancesPayload<ExtArgs>;
            fields: Prisma.instancesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.instancesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$instancesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.instancesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$instancesPayload>;
                };
                findFirst: {
                    args: Prisma.instancesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$instancesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.instancesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$instancesPayload>;
                };
                findMany: {
                    args: Prisma.instancesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$instancesPayload>[];
                };
                create: {
                    args: Prisma.instancesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$instancesPayload>;
                };
                createMany: {
                    args: Prisma.instancesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.instancesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$instancesPayload>[];
                };
                delete: {
                    args: Prisma.instancesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$instancesPayload>;
                };
                update: {
                    args: Prisma.instancesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$instancesPayload>;
                };
                deleteMany: {
                    args: Prisma.instancesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.instancesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.instancesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$instancesPayload>[];
                };
                upsert: {
                    args: Prisma.instancesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$instancesPayload>;
                };
                aggregate: {
                    args: Prisma.InstancesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateInstances>;
                };
                groupBy: {
                    args: Prisma.instancesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InstancesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.instancesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InstancesCountAggregateOutputType> | number;
                };
            };
        };
        mfa_amr_claims: {
            payload: Prisma.$mfa_amr_claimsPayload<ExtArgs>;
            fields: Prisma.mfa_amr_claimsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.mfa_amr_claimsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mfa_amr_claimsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.mfa_amr_claimsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mfa_amr_claimsPayload>;
                };
                findFirst: {
                    args: Prisma.mfa_amr_claimsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mfa_amr_claimsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.mfa_amr_claimsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mfa_amr_claimsPayload>;
                };
                findMany: {
                    args: Prisma.mfa_amr_claimsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mfa_amr_claimsPayload>[];
                };
                create: {
                    args: Prisma.mfa_amr_claimsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mfa_amr_claimsPayload>;
                };
                createMany: {
                    args: Prisma.mfa_amr_claimsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.mfa_amr_claimsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mfa_amr_claimsPayload>[];
                };
                delete: {
                    args: Prisma.mfa_amr_claimsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mfa_amr_claimsPayload>;
                };
                update: {
                    args: Prisma.mfa_amr_claimsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mfa_amr_claimsPayload>;
                };
                deleteMany: {
                    args: Prisma.mfa_amr_claimsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.mfa_amr_claimsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.mfa_amr_claimsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mfa_amr_claimsPayload>[];
                };
                upsert: {
                    args: Prisma.mfa_amr_claimsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mfa_amr_claimsPayload>;
                };
                aggregate: {
                    args: Prisma.Mfa_amr_claimsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMfa_amr_claims>;
                };
                groupBy: {
                    args: Prisma.mfa_amr_claimsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Mfa_amr_claimsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.mfa_amr_claimsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Mfa_amr_claimsCountAggregateOutputType> | number;
                };
            };
        };
        mfa_challenges: {
            payload: Prisma.$mfa_challengesPayload<ExtArgs>;
            fields: Prisma.mfa_challengesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.mfa_challengesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mfa_challengesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.mfa_challengesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mfa_challengesPayload>;
                };
                findFirst: {
                    args: Prisma.mfa_challengesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mfa_challengesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.mfa_challengesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mfa_challengesPayload>;
                };
                findMany: {
                    args: Prisma.mfa_challengesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mfa_challengesPayload>[];
                };
                create: {
                    args: Prisma.mfa_challengesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mfa_challengesPayload>;
                };
                createMany: {
                    args: Prisma.mfa_challengesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.mfa_challengesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mfa_challengesPayload>[];
                };
                delete: {
                    args: Prisma.mfa_challengesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mfa_challengesPayload>;
                };
                update: {
                    args: Prisma.mfa_challengesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mfa_challengesPayload>;
                };
                deleteMany: {
                    args: Prisma.mfa_challengesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.mfa_challengesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.mfa_challengesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mfa_challengesPayload>[];
                };
                upsert: {
                    args: Prisma.mfa_challengesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mfa_challengesPayload>;
                };
                aggregate: {
                    args: Prisma.Mfa_challengesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMfa_challenges>;
                };
                groupBy: {
                    args: Prisma.mfa_challengesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Mfa_challengesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.mfa_challengesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Mfa_challengesCountAggregateOutputType> | number;
                };
            };
        };
        mfa_factors: {
            payload: Prisma.$mfa_factorsPayload<ExtArgs>;
            fields: Prisma.mfa_factorsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.mfa_factorsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mfa_factorsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.mfa_factorsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mfa_factorsPayload>;
                };
                findFirst: {
                    args: Prisma.mfa_factorsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mfa_factorsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.mfa_factorsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mfa_factorsPayload>;
                };
                findMany: {
                    args: Prisma.mfa_factorsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mfa_factorsPayload>[];
                };
                create: {
                    args: Prisma.mfa_factorsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mfa_factorsPayload>;
                };
                createMany: {
                    args: Prisma.mfa_factorsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.mfa_factorsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mfa_factorsPayload>[];
                };
                delete: {
                    args: Prisma.mfa_factorsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mfa_factorsPayload>;
                };
                update: {
                    args: Prisma.mfa_factorsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mfa_factorsPayload>;
                };
                deleteMany: {
                    args: Prisma.mfa_factorsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.mfa_factorsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.mfa_factorsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mfa_factorsPayload>[];
                };
                upsert: {
                    args: Prisma.mfa_factorsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mfa_factorsPayload>;
                };
                aggregate: {
                    args: Prisma.Mfa_factorsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMfa_factors>;
                };
                groupBy: {
                    args: Prisma.mfa_factorsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Mfa_factorsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.mfa_factorsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Mfa_factorsCountAggregateOutputType> | number;
                };
            };
        };
        oauth_authorizations: {
            payload: Prisma.$oauth_authorizationsPayload<ExtArgs>;
            fields: Prisma.oauth_authorizationsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.oauth_authorizationsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$oauth_authorizationsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.oauth_authorizationsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$oauth_authorizationsPayload>;
                };
                findFirst: {
                    args: Prisma.oauth_authorizationsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$oauth_authorizationsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.oauth_authorizationsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$oauth_authorizationsPayload>;
                };
                findMany: {
                    args: Prisma.oauth_authorizationsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$oauth_authorizationsPayload>[];
                };
                create: {
                    args: Prisma.oauth_authorizationsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$oauth_authorizationsPayload>;
                };
                createMany: {
                    args: Prisma.oauth_authorizationsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.oauth_authorizationsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$oauth_authorizationsPayload>[];
                };
                delete: {
                    args: Prisma.oauth_authorizationsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$oauth_authorizationsPayload>;
                };
                update: {
                    args: Prisma.oauth_authorizationsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$oauth_authorizationsPayload>;
                };
                deleteMany: {
                    args: Prisma.oauth_authorizationsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.oauth_authorizationsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.oauth_authorizationsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$oauth_authorizationsPayload>[];
                };
                upsert: {
                    args: Prisma.oauth_authorizationsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$oauth_authorizationsPayload>;
                };
                aggregate: {
                    args: Prisma.Oauth_authorizationsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOauth_authorizations>;
                };
                groupBy: {
                    args: Prisma.oauth_authorizationsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Oauth_authorizationsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.oauth_authorizationsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Oauth_authorizationsCountAggregateOutputType> | number;
                };
            };
        };
        oauth_client_states: {
            payload: Prisma.$oauth_client_statesPayload<ExtArgs>;
            fields: Prisma.oauth_client_statesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.oauth_client_statesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$oauth_client_statesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.oauth_client_statesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$oauth_client_statesPayload>;
                };
                findFirst: {
                    args: Prisma.oauth_client_statesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$oauth_client_statesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.oauth_client_statesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$oauth_client_statesPayload>;
                };
                findMany: {
                    args: Prisma.oauth_client_statesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$oauth_client_statesPayload>[];
                };
                create: {
                    args: Prisma.oauth_client_statesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$oauth_client_statesPayload>;
                };
                createMany: {
                    args: Prisma.oauth_client_statesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.oauth_client_statesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$oauth_client_statesPayload>[];
                };
                delete: {
                    args: Prisma.oauth_client_statesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$oauth_client_statesPayload>;
                };
                update: {
                    args: Prisma.oauth_client_statesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$oauth_client_statesPayload>;
                };
                deleteMany: {
                    args: Prisma.oauth_client_statesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.oauth_client_statesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.oauth_client_statesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$oauth_client_statesPayload>[];
                };
                upsert: {
                    args: Prisma.oauth_client_statesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$oauth_client_statesPayload>;
                };
                aggregate: {
                    args: Prisma.Oauth_client_statesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOauth_client_states>;
                };
                groupBy: {
                    args: Prisma.oauth_client_statesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Oauth_client_statesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.oauth_client_statesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Oauth_client_statesCountAggregateOutputType> | number;
                };
            };
        };
        oauth_clients: {
            payload: Prisma.$oauth_clientsPayload<ExtArgs>;
            fields: Prisma.oauth_clientsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.oauth_clientsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$oauth_clientsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.oauth_clientsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$oauth_clientsPayload>;
                };
                findFirst: {
                    args: Prisma.oauth_clientsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$oauth_clientsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.oauth_clientsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$oauth_clientsPayload>;
                };
                findMany: {
                    args: Prisma.oauth_clientsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$oauth_clientsPayload>[];
                };
                create: {
                    args: Prisma.oauth_clientsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$oauth_clientsPayload>;
                };
                createMany: {
                    args: Prisma.oauth_clientsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.oauth_clientsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$oauth_clientsPayload>[];
                };
                delete: {
                    args: Prisma.oauth_clientsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$oauth_clientsPayload>;
                };
                update: {
                    args: Prisma.oauth_clientsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$oauth_clientsPayload>;
                };
                deleteMany: {
                    args: Prisma.oauth_clientsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.oauth_clientsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.oauth_clientsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$oauth_clientsPayload>[];
                };
                upsert: {
                    args: Prisma.oauth_clientsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$oauth_clientsPayload>;
                };
                aggregate: {
                    args: Prisma.Oauth_clientsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOauth_clients>;
                };
                groupBy: {
                    args: Prisma.oauth_clientsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Oauth_clientsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.oauth_clientsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Oauth_clientsCountAggregateOutputType> | number;
                };
            };
        };
        oauth_consents: {
            payload: Prisma.$oauth_consentsPayload<ExtArgs>;
            fields: Prisma.oauth_consentsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.oauth_consentsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$oauth_consentsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.oauth_consentsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$oauth_consentsPayload>;
                };
                findFirst: {
                    args: Prisma.oauth_consentsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$oauth_consentsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.oauth_consentsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$oauth_consentsPayload>;
                };
                findMany: {
                    args: Prisma.oauth_consentsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$oauth_consentsPayload>[];
                };
                create: {
                    args: Prisma.oauth_consentsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$oauth_consentsPayload>;
                };
                createMany: {
                    args: Prisma.oauth_consentsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.oauth_consentsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$oauth_consentsPayload>[];
                };
                delete: {
                    args: Prisma.oauth_consentsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$oauth_consentsPayload>;
                };
                update: {
                    args: Prisma.oauth_consentsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$oauth_consentsPayload>;
                };
                deleteMany: {
                    args: Prisma.oauth_consentsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.oauth_consentsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.oauth_consentsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$oauth_consentsPayload>[];
                };
                upsert: {
                    args: Prisma.oauth_consentsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$oauth_consentsPayload>;
                };
                aggregate: {
                    args: Prisma.Oauth_consentsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOauth_consents>;
                };
                groupBy: {
                    args: Prisma.oauth_consentsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Oauth_consentsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.oauth_consentsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Oauth_consentsCountAggregateOutputType> | number;
                };
            };
        };
        one_time_tokens: {
            payload: Prisma.$one_time_tokensPayload<ExtArgs>;
            fields: Prisma.one_time_tokensFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.one_time_tokensFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$one_time_tokensPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.one_time_tokensFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$one_time_tokensPayload>;
                };
                findFirst: {
                    args: Prisma.one_time_tokensFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$one_time_tokensPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.one_time_tokensFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$one_time_tokensPayload>;
                };
                findMany: {
                    args: Prisma.one_time_tokensFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$one_time_tokensPayload>[];
                };
                create: {
                    args: Prisma.one_time_tokensCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$one_time_tokensPayload>;
                };
                createMany: {
                    args: Prisma.one_time_tokensCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.one_time_tokensCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$one_time_tokensPayload>[];
                };
                delete: {
                    args: Prisma.one_time_tokensDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$one_time_tokensPayload>;
                };
                update: {
                    args: Prisma.one_time_tokensUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$one_time_tokensPayload>;
                };
                deleteMany: {
                    args: Prisma.one_time_tokensDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.one_time_tokensUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.one_time_tokensUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$one_time_tokensPayload>[];
                };
                upsert: {
                    args: Prisma.one_time_tokensUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$one_time_tokensPayload>;
                };
                aggregate: {
                    args: Prisma.One_time_tokensAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOne_time_tokens>;
                };
                groupBy: {
                    args: Prisma.one_time_tokensGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.One_time_tokensGroupByOutputType>[];
                };
                count: {
                    args: Prisma.one_time_tokensCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.One_time_tokensCountAggregateOutputType> | number;
                };
            };
        };
        refresh_tokens: {
            payload: Prisma.$refresh_tokensPayload<ExtArgs>;
            fields: Prisma.refresh_tokensFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.refresh_tokensFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$refresh_tokensPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.refresh_tokensFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$refresh_tokensPayload>;
                };
                findFirst: {
                    args: Prisma.refresh_tokensFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$refresh_tokensPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.refresh_tokensFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$refresh_tokensPayload>;
                };
                findMany: {
                    args: Prisma.refresh_tokensFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$refresh_tokensPayload>[];
                };
                create: {
                    args: Prisma.refresh_tokensCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$refresh_tokensPayload>;
                };
                createMany: {
                    args: Prisma.refresh_tokensCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.refresh_tokensCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$refresh_tokensPayload>[];
                };
                delete: {
                    args: Prisma.refresh_tokensDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$refresh_tokensPayload>;
                };
                update: {
                    args: Prisma.refresh_tokensUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$refresh_tokensPayload>;
                };
                deleteMany: {
                    args: Prisma.refresh_tokensDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.refresh_tokensUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.refresh_tokensUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$refresh_tokensPayload>[];
                };
                upsert: {
                    args: Prisma.refresh_tokensUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$refresh_tokensPayload>;
                };
                aggregate: {
                    args: Prisma.Refresh_tokensAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRefresh_tokens>;
                };
                groupBy: {
                    args: Prisma.refresh_tokensGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Refresh_tokensGroupByOutputType>[];
                };
                count: {
                    args: Prisma.refresh_tokensCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Refresh_tokensCountAggregateOutputType> | number;
                };
            };
        };
        saml_providers: {
            payload: Prisma.$saml_providersPayload<ExtArgs>;
            fields: Prisma.saml_providersFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.saml_providersFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$saml_providersPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.saml_providersFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$saml_providersPayload>;
                };
                findFirst: {
                    args: Prisma.saml_providersFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$saml_providersPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.saml_providersFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$saml_providersPayload>;
                };
                findMany: {
                    args: Prisma.saml_providersFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$saml_providersPayload>[];
                };
                create: {
                    args: Prisma.saml_providersCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$saml_providersPayload>;
                };
                createMany: {
                    args: Prisma.saml_providersCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.saml_providersCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$saml_providersPayload>[];
                };
                delete: {
                    args: Prisma.saml_providersDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$saml_providersPayload>;
                };
                update: {
                    args: Prisma.saml_providersUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$saml_providersPayload>;
                };
                deleteMany: {
                    args: Prisma.saml_providersDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.saml_providersUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.saml_providersUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$saml_providersPayload>[];
                };
                upsert: {
                    args: Prisma.saml_providersUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$saml_providersPayload>;
                };
                aggregate: {
                    args: Prisma.Saml_providersAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSaml_providers>;
                };
                groupBy: {
                    args: Prisma.saml_providersGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Saml_providersGroupByOutputType>[];
                };
                count: {
                    args: Prisma.saml_providersCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Saml_providersCountAggregateOutputType> | number;
                };
            };
        };
        saml_relay_states: {
            payload: Prisma.$saml_relay_statesPayload<ExtArgs>;
            fields: Prisma.saml_relay_statesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.saml_relay_statesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$saml_relay_statesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.saml_relay_statesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$saml_relay_statesPayload>;
                };
                findFirst: {
                    args: Prisma.saml_relay_statesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$saml_relay_statesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.saml_relay_statesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$saml_relay_statesPayload>;
                };
                findMany: {
                    args: Prisma.saml_relay_statesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$saml_relay_statesPayload>[];
                };
                create: {
                    args: Prisma.saml_relay_statesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$saml_relay_statesPayload>;
                };
                createMany: {
                    args: Prisma.saml_relay_statesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.saml_relay_statesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$saml_relay_statesPayload>[];
                };
                delete: {
                    args: Prisma.saml_relay_statesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$saml_relay_statesPayload>;
                };
                update: {
                    args: Prisma.saml_relay_statesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$saml_relay_statesPayload>;
                };
                deleteMany: {
                    args: Prisma.saml_relay_statesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.saml_relay_statesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.saml_relay_statesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$saml_relay_statesPayload>[];
                };
                upsert: {
                    args: Prisma.saml_relay_statesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$saml_relay_statesPayload>;
                };
                aggregate: {
                    args: Prisma.Saml_relay_statesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSaml_relay_states>;
                };
                groupBy: {
                    args: Prisma.saml_relay_statesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Saml_relay_statesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.saml_relay_statesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Saml_relay_statesCountAggregateOutputType> | number;
                };
            };
        };
        schema_migrations: {
            payload: Prisma.$schema_migrationsPayload<ExtArgs>;
            fields: Prisma.schema_migrationsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.schema_migrationsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$schema_migrationsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.schema_migrationsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$schema_migrationsPayload>;
                };
                findFirst: {
                    args: Prisma.schema_migrationsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$schema_migrationsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.schema_migrationsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$schema_migrationsPayload>;
                };
                findMany: {
                    args: Prisma.schema_migrationsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$schema_migrationsPayload>[];
                };
                create: {
                    args: Prisma.schema_migrationsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$schema_migrationsPayload>;
                };
                createMany: {
                    args: Prisma.schema_migrationsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.schema_migrationsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$schema_migrationsPayload>[];
                };
                delete: {
                    args: Prisma.schema_migrationsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$schema_migrationsPayload>;
                };
                update: {
                    args: Prisma.schema_migrationsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$schema_migrationsPayload>;
                };
                deleteMany: {
                    args: Prisma.schema_migrationsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.schema_migrationsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.schema_migrationsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$schema_migrationsPayload>[];
                };
                upsert: {
                    args: Prisma.schema_migrationsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$schema_migrationsPayload>;
                };
                aggregate: {
                    args: Prisma.Schema_migrationsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSchema_migrations>;
                };
                groupBy: {
                    args: Prisma.schema_migrationsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Schema_migrationsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.schema_migrationsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Schema_migrationsCountAggregateOutputType> | number;
                };
            };
        };
        sessions: {
            payload: Prisma.$sessionsPayload<ExtArgs>;
            fields: Prisma.sessionsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.sessionsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sessionsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.sessionsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sessionsPayload>;
                };
                findFirst: {
                    args: Prisma.sessionsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sessionsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.sessionsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sessionsPayload>;
                };
                findMany: {
                    args: Prisma.sessionsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sessionsPayload>[];
                };
                create: {
                    args: Prisma.sessionsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sessionsPayload>;
                };
                createMany: {
                    args: Prisma.sessionsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.sessionsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sessionsPayload>[];
                };
                delete: {
                    args: Prisma.sessionsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sessionsPayload>;
                };
                update: {
                    args: Prisma.sessionsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sessionsPayload>;
                };
                deleteMany: {
                    args: Prisma.sessionsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.sessionsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.sessionsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sessionsPayload>[];
                };
                upsert: {
                    args: Prisma.sessionsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sessionsPayload>;
                };
                aggregate: {
                    args: Prisma.SessionsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSessions>;
                };
                groupBy: {
                    args: Prisma.sessionsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SessionsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.sessionsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SessionsCountAggregateOutputType> | number;
                };
            };
        };
        sso_domains: {
            payload: Prisma.$sso_domainsPayload<ExtArgs>;
            fields: Prisma.sso_domainsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.sso_domainsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sso_domainsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.sso_domainsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sso_domainsPayload>;
                };
                findFirst: {
                    args: Prisma.sso_domainsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sso_domainsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.sso_domainsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sso_domainsPayload>;
                };
                findMany: {
                    args: Prisma.sso_domainsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sso_domainsPayload>[];
                };
                create: {
                    args: Prisma.sso_domainsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sso_domainsPayload>;
                };
                createMany: {
                    args: Prisma.sso_domainsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.sso_domainsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sso_domainsPayload>[];
                };
                delete: {
                    args: Prisma.sso_domainsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sso_domainsPayload>;
                };
                update: {
                    args: Prisma.sso_domainsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sso_domainsPayload>;
                };
                deleteMany: {
                    args: Prisma.sso_domainsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.sso_domainsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.sso_domainsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sso_domainsPayload>[];
                };
                upsert: {
                    args: Prisma.sso_domainsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sso_domainsPayload>;
                };
                aggregate: {
                    args: Prisma.Sso_domainsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSso_domains>;
                };
                groupBy: {
                    args: Prisma.sso_domainsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Sso_domainsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.sso_domainsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Sso_domainsCountAggregateOutputType> | number;
                };
            };
        };
        sso_providers: {
            payload: Prisma.$sso_providersPayload<ExtArgs>;
            fields: Prisma.sso_providersFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.sso_providersFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sso_providersPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.sso_providersFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sso_providersPayload>;
                };
                findFirst: {
                    args: Prisma.sso_providersFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sso_providersPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.sso_providersFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sso_providersPayload>;
                };
                findMany: {
                    args: Prisma.sso_providersFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sso_providersPayload>[];
                };
                create: {
                    args: Prisma.sso_providersCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sso_providersPayload>;
                };
                createMany: {
                    args: Prisma.sso_providersCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.sso_providersCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sso_providersPayload>[];
                };
                delete: {
                    args: Prisma.sso_providersDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sso_providersPayload>;
                };
                update: {
                    args: Prisma.sso_providersUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sso_providersPayload>;
                };
                deleteMany: {
                    args: Prisma.sso_providersDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.sso_providersUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.sso_providersUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sso_providersPayload>[];
                };
                upsert: {
                    args: Prisma.sso_providersUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sso_providersPayload>;
                };
                aggregate: {
                    args: Prisma.Sso_providersAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSso_providers>;
                };
                groupBy: {
                    args: Prisma.sso_providersGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Sso_providersGroupByOutputType>[];
                };
                count: {
                    args: Prisma.sso_providersCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Sso_providersCountAggregateOutputType> | number;
                };
            };
        };
        users: {
            payload: Prisma.$usersPayload<ExtArgs>;
            fields: Prisma.usersFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.usersFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                findFirst: {
                    args: Prisma.usersFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                findMany: {
                    args: Prisma.usersFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>[];
                };
                create: {
                    args: Prisma.usersCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                createMany: {
                    args: Prisma.usersCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>[];
                };
                delete: {
                    args: Prisma.usersDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                update: {
                    args: Prisma.usersUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                deleteMany: {
                    args: Prisma.usersDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.usersUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>[];
                };
                upsert: {
                    args: Prisma.usersUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                aggregate: {
                    args: Prisma.UsersAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUsers>;
                };
                groupBy: {
                    args: Prisma.usersGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsersGroupByOutputType>[];
                };
                count: {
                    args: Prisma.usersCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsersCountAggregateOutputType> | number;
                };
            };
        };
        webauthn_challenges: {
            payload: Prisma.$webauthn_challengesPayload<ExtArgs>;
            fields: Prisma.webauthn_challengesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.webauthn_challengesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$webauthn_challengesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.webauthn_challengesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$webauthn_challengesPayload>;
                };
                findFirst: {
                    args: Prisma.webauthn_challengesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$webauthn_challengesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.webauthn_challengesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$webauthn_challengesPayload>;
                };
                findMany: {
                    args: Prisma.webauthn_challengesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$webauthn_challengesPayload>[];
                };
                create: {
                    args: Prisma.webauthn_challengesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$webauthn_challengesPayload>;
                };
                createMany: {
                    args: Prisma.webauthn_challengesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.webauthn_challengesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$webauthn_challengesPayload>[];
                };
                delete: {
                    args: Prisma.webauthn_challengesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$webauthn_challengesPayload>;
                };
                update: {
                    args: Prisma.webauthn_challengesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$webauthn_challengesPayload>;
                };
                deleteMany: {
                    args: Prisma.webauthn_challengesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.webauthn_challengesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.webauthn_challengesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$webauthn_challengesPayload>[];
                };
                upsert: {
                    args: Prisma.webauthn_challengesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$webauthn_challengesPayload>;
                };
                aggregate: {
                    args: Prisma.Webauthn_challengesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateWebauthn_challenges>;
                };
                groupBy: {
                    args: Prisma.webauthn_challengesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Webauthn_challengesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.webauthn_challengesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Webauthn_challengesCountAggregateOutputType> | number;
                };
            };
        };
        webauthn_credentials: {
            payload: Prisma.$webauthn_credentialsPayload<ExtArgs>;
            fields: Prisma.webauthn_credentialsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.webauthn_credentialsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$webauthn_credentialsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.webauthn_credentialsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$webauthn_credentialsPayload>;
                };
                findFirst: {
                    args: Prisma.webauthn_credentialsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$webauthn_credentialsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.webauthn_credentialsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$webauthn_credentialsPayload>;
                };
                findMany: {
                    args: Prisma.webauthn_credentialsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$webauthn_credentialsPayload>[];
                };
                create: {
                    args: Prisma.webauthn_credentialsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$webauthn_credentialsPayload>;
                };
                createMany: {
                    args: Prisma.webauthn_credentialsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.webauthn_credentialsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$webauthn_credentialsPayload>[];
                };
                delete: {
                    args: Prisma.webauthn_credentialsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$webauthn_credentialsPayload>;
                };
                update: {
                    args: Prisma.webauthn_credentialsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$webauthn_credentialsPayload>;
                };
                deleteMany: {
                    args: Prisma.webauthn_credentialsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.webauthn_credentialsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.webauthn_credentialsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$webauthn_credentialsPayload>[];
                };
                upsert: {
                    args: Prisma.webauthn_credentialsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$webauthn_credentialsPayload>;
                };
                aggregate: {
                    args: Prisma.Webauthn_credentialsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateWebauthn_credentials>;
                };
                groupBy: {
                    args: Prisma.webauthn_credentialsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Webauthn_credentialsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.webauthn_credentialsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Webauthn_credentialsCountAggregateOutputType> | number;
                };
            };
        };
        citas: {
            payload: Prisma.$citasPayload<ExtArgs>;
            fields: Prisma.citasFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.citasFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$citasPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.citasFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$citasPayload>;
                };
                findFirst: {
                    args: Prisma.citasFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$citasPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.citasFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$citasPayload>;
                };
                findMany: {
                    args: Prisma.citasFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$citasPayload>[];
                };
                create: {
                    args: Prisma.citasCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$citasPayload>;
                };
                createMany: {
                    args: Prisma.citasCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.citasCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$citasPayload>[];
                };
                delete: {
                    args: Prisma.citasDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$citasPayload>;
                };
                update: {
                    args: Prisma.citasUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$citasPayload>;
                };
                deleteMany: {
                    args: Prisma.citasDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.citasUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.citasUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$citasPayload>[];
                };
                upsert: {
                    args: Prisma.citasUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$citasPayload>;
                };
                aggregate: {
                    args: Prisma.CitasAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCitas>;
                };
                groupBy: {
                    args: Prisma.citasGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CitasGroupByOutputType>[];
                };
                count: {
                    args: Prisma.citasCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CitasCountAggregateOutputType> | number;
                };
            };
        };
        cobros: {
            payload: Prisma.$cobrosPayload<ExtArgs>;
            fields: Prisma.cobrosFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.cobrosFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cobrosPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.cobrosFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cobrosPayload>;
                };
                findFirst: {
                    args: Prisma.cobrosFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cobrosPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.cobrosFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cobrosPayload>;
                };
                findMany: {
                    args: Prisma.cobrosFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cobrosPayload>[];
                };
                create: {
                    args: Prisma.cobrosCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cobrosPayload>;
                };
                createMany: {
                    args: Prisma.cobrosCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.cobrosCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cobrosPayload>[];
                };
                delete: {
                    args: Prisma.cobrosDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cobrosPayload>;
                };
                update: {
                    args: Prisma.cobrosUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cobrosPayload>;
                };
                deleteMany: {
                    args: Prisma.cobrosDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.cobrosUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.cobrosUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cobrosPayload>[];
                };
                upsert: {
                    args: Prisma.cobrosUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cobrosPayload>;
                };
                aggregate: {
                    args: Prisma.CobrosAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCobros>;
                };
                groupBy: {
                    args: Prisma.cobrosGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CobrosGroupByOutputType>[];
                };
                count: {
                    args: Prisma.cobrosCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CobrosCountAggregateOutputType> | number;
                };
            };
        };
        documentos_clinicos: {
            payload: Prisma.$documentos_clinicosPayload<ExtArgs>;
            fields: Prisma.documentos_clinicosFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.documentos_clinicosFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$documentos_clinicosPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.documentos_clinicosFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$documentos_clinicosPayload>;
                };
                findFirst: {
                    args: Prisma.documentos_clinicosFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$documentos_clinicosPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.documentos_clinicosFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$documentos_clinicosPayload>;
                };
                findMany: {
                    args: Prisma.documentos_clinicosFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$documentos_clinicosPayload>[];
                };
                create: {
                    args: Prisma.documentos_clinicosCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$documentos_clinicosPayload>;
                };
                createMany: {
                    args: Prisma.documentos_clinicosCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.documentos_clinicosCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$documentos_clinicosPayload>[];
                };
                delete: {
                    args: Prisma.documentos_clinicosDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$documentos_clinicosPayload>;
                };
                update: {
                    args: Prisma.documentos_clinicosUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$documentos_clinicosPayload>;
                };
                deleteMany: {
                    args: Prisma.documentos_clinicosDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.documentos_clinicosUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.documentos_clinicosUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$documentos_clinicosPayload>[];
                };
                upsert: {
                    args: Prisma.documentos_clinicosUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$documentos_clinicosPayload>;
                };
                aggregate: {
                    args: Prisma.Documentos_clinicosAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDocumentos_clinicos>;
                };
                groupBy: {
                    args: Prisma.documentos_clinicosGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Documentos_clinicosGroupByOutputType>[];
                };
                count: {
                    args: Prisma.documentos_clinicosCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Documentos_clinicosCountAggregateOutputType> | number;
                };
            };
        };
        historial_pagos: {
            payload: Prisma.$historial_pagosPayload<ExtArgs>;
            fields: Prisma.historial_pagosFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.historial_pagosFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$historial_pagosPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.historial_pagosFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$historial_pagosPayload>;
                };
                findFirst: {
                    args: Prisma.historial_pagosFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$historial_pagosPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.historial_pagosFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$historial_pagosPayload>;
                };
                findMany: {
                    args: Prisma.historial_pagosFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$historial_pagosPayload>[];
                };
                create: {
                    args: Prisma.historial_pagosCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$historial_pagosPayload>;
                };
                createMany: {
                    args: Prisma.historial_pagosCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.historial_pagosCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$historial_pagosPayload>[];
                };
                delete: {
                    args: Prisma.historial_pagosDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$historial_pagosPayload>;
                };
                update: {
                    args: Prisma.historial_pagosUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$historial_pagosPayload>;
                };
                deleteMany: {
                    args: Prisma.historial_pagosDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.historial_pagosUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.historial_pagosUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$historial_pagosPayload>[];
                };
                upsert: {
                    args: Prisma.historial_pagosUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$historial_pagosPayload>;
                };
                aggregate: {
                    args: Prisma.Historial_pagosAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateHistorial_pagos>;
                };
                groupBy: {
                    args: Prisma.historial_pagosGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Historial_pagosGroupByOutputType>[];
                };
                count: {
                    args: Prisma.historial_pagosCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Historial_pagosCountAggregateOutputType> | number;
                };
            };
        };
        notas_clinicas: {
            payload: Prisma.$notas_clinicasPayload<ExtArgs>;
            fields: Prisma.notas_clinicasFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.notas_clinicasFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notas_clinicasPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.notas_clinicasFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notas_clinicasPayload>;
                };
                findFirst: {
                    args: Prisma.notas_clinicasFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notas_clinicasPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.notas_clinicasFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notas_clinicasPayload>;
                };
                findMany: {
                    args: Prisma.notas_clinicasFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notas_clinicasPayload>[];
                };
                create: {
                    args: Prisma.notas_clinicasCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notas_clinicasPayload>;
                };
                createMany: {
                    args: Prisma.notas_clinicasCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.notas_clinicasCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notas_clinicasPayload>[];
                };
                delete: {
                    args: Prisma.notas_clinicasDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notas_clinicasPayload>;
                };
                update: {
                    args: Prisma.notas_clinicasUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notas_clinicasPayload>;
                };
                deleteMany: {
                    args: Prisma.notas_clinicasDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.notas_clinicasUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.notas_clinicasUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notas_clinicasPayload>[];
                };
                upsert: {
                    args: Prisma.notas_clinicasUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notas_clinicasPayload>;
                };
                aggregate: {
                    args: Prisma.Notas_clinicasAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNotas_clinicas>;
                };
                groupBy: {
                    args: Prisma.notas_clinicasGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Notas_clinicasGroupByOutputType>[];
                };
                count: {
                    args: Prisma.notas_clinicasCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Notas_clinicasCountAggregateOutputType> | number;
                };
            };
        };
        pacientes: {
            payload: Prisma.$pacientesPayload<ExtArgs>;
            fields: Prisma.pacientesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.pacientesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pacientesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.pacientesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pacientesPayload>;
                };
                findFirst: {
                    args: Prisma.pacientesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pacientesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.pacientesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pacientesPayload>;
                };
                findMany: {
                    args: Prisma.pacientesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pacientesPayload>[];
                };
                create: {
                    args: Prisma.pacientesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pacientesPayload>;
                };
                createMany: {
                    args: Prisma.pacientesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.pacientesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pacientesPayload>[];
                };
                delete: {
                    args: Prisma.pacientesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pacientesPayload>;
                };
                update: {
                    args: Prisma.pacientesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pacientesPayload>;
                };
                deleteMany: {
                    args: Prisma.pacientesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.pacientesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.pacientesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pacientesPayload>[];
                };
                upsert: {
                    args: Prisma.pacientesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pacientesPayload>;
                };
                aggregate: {
                    args: Prisma.PacientesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePacientes>;
                };
                groupBy: {
                    args: Prisma.pacientesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PacientesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.pacientesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PacientesCountAggregateOutputType> | number;
                };
            };
        };
        perfiles: {
            payload: Prisma.$perfilesPayload<ExtArgs>;
            fields: Prisma.perfilesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.perfilesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$perfilesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.perfilesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$perfilesPayload>;
                };
                findFirst: {
                    args: Prisma.perfilesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$perfilesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.perfilesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$perfilesPayload>;
                };
                findMany: {
                    args: Prisma.perfilesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$perfilesPayload>[];
                };
                create: {
                    args: Prisma.perfilesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$perfilesPayload>;
                };
                createMany: {
                    args: Prisma.perfilesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.perfilesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$perfilesPayload>[];
                };
                delete: {
                    args: Prisma.perfilesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$perfilesPayload>;
                };
                update: {
                    args: Prisma.perfilesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$perfilesPayload>;
                };
                deleteMany: {
                    args: Prisma.perfilesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.perfilesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.perfilesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$perfilesPayload>[];
                };
                upsert: {
                    args: Prisma.perfilesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$perfilesPayload>;
                };
                aggregate: {
                    args: Prisma.PerfilesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePerfiles>;
                };
                groupBy: {
                    args: Prisma.perfilesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PerfilesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.perfilesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PerfilesCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const Audit_log_entriesScalarFieldEnum: {
    readonly instance_id: "instance_id";
    readonly id: "id";
    readonly payload: "payload";
    readonly created_at: "created_at";
    readonly ip_address: "ip_address";
};
export type Audit_log_entriesScalarFieldEnum = (typeof Audit_log_entriesScalarFieldEnum)[keyof typeof Audit_log_entriesScalarFieldEnum];
export declare const Custom_oauth_providersScalarFieldEnum: {
    readonly id: "id";
    readonly provider_type: "provider_type";
    readonly identifier: "identifier";
    readonly name: "name";
    readonly client_id: "client_id";
    readonly client_secret: "client_secret";
    readonly acceptable_client_ids: "acceptable_client_ids";
    readonly scopes: "scopes";
    readonly pkce_enabled: "pkce_enabled";
    readonly attribute_mapping: "attribute_mapping";
    readonly authorization_params: "authorization_params";
    readonly enabled: "enabled";
    readonly email_optional: "email_optional";
    readonly issuer: "issuer";
    readonly discovery_url: "discovery_url";
    readonly skip_nonce_check: "skip_nonce_check";
    readonly cached_discovery: "cached_discovery";
    readonly discovery_cached_at: "discovery_cached_at";
    readonly authorization_url: "authorization_url";
    readonly token_url: "token_url";
    readonly userinfo_url: "userinfo_url";
    readonly jwks_uri: "jwks_uri";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Custom_oauth_providersScalarFieldEnum = (typeof Custom_oauth_providersScalarFieldEnum)[keyof typeof Custom_oauth_providersScalarFieldEnum];
export declare const Flow_stateScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly auth_code: "auth_code";
    readonly code_challenge_method: "code_challenge_method";
    readonly code_challenge: "code_challenge";
    readonly provider_type: "provider_type";
    readonly provider_access_token: "provider_access_token";
    readonly provider_refresh_token: "provider_refresh_token";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly authentication_method: "authentication_method";
    readonly auth_code_issued_at: "auth_code_issued_at";
    readonly invite_token: "invite_token";
    readonly referrer: "referrer";
    readonly oauth_client_state_id: "oauth_client_state_id";
    readonly linking_target_id: "linking_target_id";
    readonly email_optional: "email_optional";
};
export type Flow_stateScalarFieldEnum = (typeof Flow_stateScalarFieldEnum)[keyof typeof Flow_stateScalarFieldEnum];
export declare const IdentitiesScalarFieldEnum: {
    readonly provider_id: "provider_id";
    readonly user_id: "user_id";
    readonly identity_data: "identity_data";
    readonly provider: "provider";
    readonly last_sign_in_at: "last_sign_in_at";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly email: "email";
    readonly id: "id";
};
export type IdentitiesScalarFieldEnum = (typeof IdentitiesScalarFieldEnum)[keyof typeof IdentitiesScalarFieldEnum];
export declare const InstancesScalarFieldEnum: {
    readonly id: "id";
    readonly uuid: "uuid";
    readonly raw_base_config: "raw_base_config";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type InstancesScalarFieldEnum = (typeof InstancesScalarFieldEnum)[keyof typeof InstancesScalarFieldEnum];
export declare const Mfa_amr_claimsScalarFieldEnum: {
    readonly session_id: "session_id";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly authentication_method: "authentication_method";
    readonly id: "id";
};
export type Mfa_amr_claimsScalarFieldEnum = (typeof Mfa_amr_claimsScalarFieldEnum)[keyof typeof Mfa_amr_claimsScalarFieldEnum];
export declare const Mfa_challengesScalarFieldEnum: {
    readonly id: "id";
    readonly factor_id: "factor_id";
    readonly created_at: "created_at";
    readonly verified_at: "verified_at";
    readonly ip_address: "ip_address";
    readonly otp_code: "otp_code";
    readonly web_authn_session_data: "web_authn_session_data";
};
export type Mfa_challengesScalarFieldEnum = (typeof Mfa_challengesScalarFieldEnum)[keyof typeof Mfa_challengesScalarFieldEnum];
export declare const Mfa_factorsScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly friendly_name: "friendly_name";
    readonly factor_type: "factor_type";
    readonly status: "status";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly secret: "secret";
    readonly phone: "phone";
    readonly last_challenged_at: "last_challenged_at";
    readonly web_authn_credential: "web_authn_credential";
    readonly web_authn_aaguid: "web_authn_aaguid";
    readonly last_webauthn_challenge_data: "last_webauthn_challenge_data";
};
export type Mfa_factorsScalarFieldEnum = (typeof Mfa_factorsScalarFieldEnum)[keyof typeof Mfa_factorsScalarFieldEnum];
export declare const Oauth_authorizationsScalarFieldEnum: {
    readonly id: "id";
    readonly authorization_id: "authorization_id";
    readonly client_id: "client_id";
    readonly user_id: "user_id";
    readonly redirect_uri: "redirect_uri";
    readonly scope: "scope";
    readonly state: "state";
    readonly resource: "resource";
    readonly code_challenge: "code_challenge";
    readonly code_challenge_method: "code_challenge_method";
    readonly response_type: "response_type";
    readonly status: "status";
    readonly authorization_code: "authorization_code";
    readonly created_at: "created_at";
    readonly expires_at: "expires_at";
    readonly approved_at: "approved_at";
    readonly nonce: "nonce";
};
export type Oauth_authorizationsScalarFieldEnum = (typeof Oauth_authorizationsScalarFieldEnum)[keyof typeof Oauth_authorizationsScalarFieldEnum];
export declare const Oauth_client_statesScalarFieldEnum: {
    readonly id: "id";
    readonly provider_type: "provider_type";
    readonly code_verifier: "code_verifier";
    readonly created_at: "created_at";
};
export type Oauth_client_statesScalarFieldEnum = (typeof Oauth_client_statesScalarFieldEnum)[keyof typeof Oauth_client_statesScalarFieldEnum];
export declare const Oauth_clientsScalarFieldEnum: {
    readonly id: "id";
    readonly client_secret_hash: "client_secret_hash";
    readonly registration_type: "registration_type";
    readonly redirect_uris: "redirect_uris";
    readonly grant_types: "grant_types";
    readonly client_name: "client_name";
    readonly client_uri: "client_uri";
    readonly logo_uri: "logo_uri";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly deleted_at: "deleted_at";
    readonly client_type: "client_type";
    readonly token_endpoint_auth_method: "token_endpoint_auth_method";
};
export type Oauth_clientsScalarFieldEnum = (typeof Oauth_clientsScalarFieldEnum)[keyof typeof Oauth_clientsScalarFieldEnum];
export declare const Oauth_consentsScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly client_id: "client_id";
    readonly scopes: "scopes";
    readonly granted_at: "granted_at";
    readonly revoked_at: "revoked_at";
};
export type Oauth_consentsScalarFieldEnum = (typeof Oauth_consentsScalarFieldEnum)[keyof typeof Oauth_consentsScalarFieldEnum];
export declare const One_time_tokensScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly token_type: "token_type";
    readonly token_hash: "token_hash";
    readonly relates_to: "relates_to";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type One_time_tokensScalarFieldEnum = (typeof One_time_tokensScalarFieldEnum)[keyof typeof One_time_tokensScalarFieldEnum];
export declare const Refresh_tokensScalarFieldEnum: {
    readonly instance_id: "instance_id";
    readonly id: "id";
    readonly token: "token";
    readonly user_id: "user_id";
    readonly revoked: "revoked";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly parent: "parent";
    readonly session_id: "session_id";
};
export type Refresh_tokensScalarFieldEnum = (typeof Refresh_tokensScalarFieldEnum)[keyof typeof Refresh_tokensScalarFieldEnum];
export declare const Saml_providersScalarFieldEnum: {
    readonly id: "id";
    readonly sso_provider_id: "sso_provider_id";
    readonly entity_id: "entity_id";
    readonly metadata_xml: "metadata_xml";
    readonly metadata_url: "metadata_url";
    readonly attribute_mapping: "attribute_mapping";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly name_id_format: "name_id_format";
};
export type Saml_providersScalarFieldEnum = (typeof Saml_providersScalarFieldEnum)[keyof typeof Saml_providersScalarFieldEnum];
export declare const Saml_relay_statesScalarFieldEnum: {
    readonly id: "id";
    readonly sso_provider_id: "sso_provider_id";
    readonly request_id: "request_id";
    readonly for_email: "for_email";
    readonly redirect_to: "redirect_to";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly flow_state_id: "flow_state_id";
};
export type Saml_relay_statesScalarFieldEnum = (typeof Saml_relay_statesScalarFieldEnum)[keyof typeof Saml_relay_statesScalarFieldEnum];
export declare const Schema_migrationsScalarFieldEnum: {
    readonly version: "version";
};
export type Schema_migrationsScalarFieldEnum = (typeof Schema_migrationsScalarFieldEnum)[keyof typeof Schema_migrationsScalarFieldEnum];
export declare const SessionsScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly factor_id: "factor_id";
    readonly aal: "aal";
    readonly not_after: "not_after";
    readonly refreshed_at: "refreshed_at";
    readonly user_agent: "user_agent";
    readonly ip: "ip";
    readonly tag: "tag";
    readonly oauth_client_id: "oauth_client_id";
    readonly refresh_token_hmac_key: "refresh_token_hmac_key";
    readonly refresh_token_counter: "refresh_token_counter";
    readonly scopes: "scopes";
};
export type SessionsScalarFieldEnum = (typeof SessionsScalarFieldEnum)[keyof typeof SessionsScalarFieldEnum];
export declare const Sso_domainsScalarFieldEnum: {
    readonly id: "id";
    readonly sso_provider_id: "sso_provider_id";
    readonly domain: "domain";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Sso_domainsScalarFieldEnum = (typeof Sso_domainsScalarFieldEnum)[keyof typeof Sso_domainsScalarFieldEnum];
export declare const Sso_providersScalarFieldEnum: {
    readonly id: "id";
    readonly resource_id: "resource_id";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly disabled: "disabled";
};
export type Sso_providersScalarFieldEnum = (typeof Sso_providersScalarFieldEnum)[keyof typeof Sso_providersScalarFieldEnum];
export declare const UsersScalarFieldEnum: {
    readonly instance_id: "instance_id";
    readonly id: "id";
    readonly aud: "aud";
    readonly role: "role";
    readonly email: "email";
    readonly encrypted_password: "encrypted_password";
    readonly email_confirmed_at: "email_confirmed_at";
    readonly invited_at: "invited_at";
    readonly confirmation_token: "confirmation_token";
    readonly confirmation_sent_at: "confirmation_sent_at";
    readonly recovery_token: "recovery_token";
    readonly recovery_sent_at: "recovery_sent_at";
    readonly email_change_token_new: "email_change_token_new";
    readonly email_change: "email_change";
    readonly email_change_sent_at: "email_change_sent_at";
    readonly last_sign_in_at: "last_sign_in_at";
    readonly raw_app_meta_data: "raw_app_meta_data";
    readonly raw_user_meta_data: "raw_user_meta_data";
    readonly is_super_admin: "is_super_admin";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly phone: "phone";
    readonly phone_confirmed_at: "phone_confirmed_at";
    readonly phone_change: "phone_change";
    readonly phone_change_token: "phone_change_token";
    readonly phone_change_sent_at: "phone_change_sent_at";
    readonly confirmed_at: "confirmed_at";
    readonly email_change_token_current: "email_change_token_current";
    readonly email_change_confirm_status: "email_change_confirm_status";
    readonly banned_until: "banned_until";
    readonly reauthentication_token: "reauthentication_token";
    readonly reauthentication_sent_at: "reauthentication_sent_at";
    readonly is_sso_user: "is_sso_user";
    readonly deleted_at: "deleted_at";
    readonly is_anonymous: "is_anonymous";
};
export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum];
export declare const Webauthn_challengesScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly challenge_type: "challenge_type";
    readonly session_data: "session_data";
    readonly created_at: "created_at";
    readonly expires_at: "expires_at";
};
export type Webauthn_challengesScalarFieldEnum = (typeof Webauthn_challengesScalarFieldEnum)[keyof typeof Webauthn_challengesScalarFieldEnum];
export declare const Webauthn_credentialsScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly credential_id: "credential_id";
    readonly public_key: "public_key";
    readonly attestation_type: "attestation_type";
    readonly aaguid: "aaguid";
    readonly sign_count: "sign_count";
    readonly transports: "transports";
    readonly backup_eligible: "backup_eligible";
    readonly backed_up: "backed_up";
    readonly friendly_name: "friendly_name";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly last_used_at: "last_used_at";
};
export type Webauthn_credentialsScalarFieldEnum = (typeof Webauthn_credentialsScalarFieldEnum)[keyof typeof Webauthn_credentialsScalarFieldEnum];
export declare const CitasScalarFieldEnum: {
    readonly id: "id";
    readonly paciente_id: "paciente_id";
    readonly dentista_id: "dentista_id";
    readonly fecha_hora_inicio: "fecha_hora_inicio";
    readonly fecha_hora_fin: "fecha_hora_fin";
    readonly estado: "estado";
    readonly motivo_consulta: "motivo_consulta";
    readonly fecha_creacion: "fecha_creacion";
};
export type CitasScalarFieldEnum = (typeof CitasScalarFieldEnum)[keyof typeof CitasScalarFieldEnum];
export declare const CobrosScalarFieldEnum: {
    readonly id: "id";
    readonly paciente_id: "paciente_id";
    readonly cita_id: "cita_id";
    readonly monto_total: "monto_total";
    readonly monto_pagado: "monto_pagado";
    readonly saldo_pendiente: "saldo_pendiente";
    readonly fecha_emision: "fecha_emision";
};
export type CobrosScalarFieldEnum = (typeof CobrosScalarFieldEnum)[keyof typeof CobrosScalarFieldEnum];
export declare const Documentos_clinicosScalarFieldEnum: {
    readonly id: "id";
    readonly paciente_id: "paciente_id";
    readonly subido_por: "subido_por";
    readonly nombre_archivo: "nombre_archivo";
    readonly tipo_documento: "tipo_documento";
    readonly archivo_url: "archivo_url";
    readonly fecha_subida: "fecha_subida";
};
export type Documentos_clinicosScalarFieldEnum = (typeof Documentos_clinicosScalarFieldEnum)[keyof typeof Documentos_clinicosScalarFieldEnum];
export declare const Historial_pagosScalarFieldEnum: {
    readonly id: "id";
    readonly cobro_id: "cobro_id";
    readonly monto_abonado: "monto_abonado";
    readonly metodo_pago: "metodo_pago";
    readonly fecha_pago: "fecha_pago";
};
export type Historial_pagosScalarFieldEnum = (typeof Historial_pagosScalarFieldEnum)[keyof typeof Historial_pagosScalarFieldEnum];
export declare const Notas_clinicasScalarFieldEnum: {
    readonly id: "id";
    readonly paciente_id: "paciente_id";
    readonly dentista_id: "dentista_id";
    readonly cita_id: "cita_id";
    readonly diagnostico: "diagnostico";
    readonly tratamiento_realizado: "tratamiento_realizado";
    readonly notas_evolucion: "notas_evolucion";
    readonly odontograma_estado: "odontograma_estado";
    readonly fecha_consulta: "fecha_consulta";
};
export type Notas_clinicasScalarFieldEnum = (typeof Notas_clinicasScalarFieldEnum)[keyof typeof Notas_clinicasScalarFieldEnum];
export declare const PacientesScalarFieldEnum: {
    readonly id: "id";
    readonly perfil_id: "perfil_id";
    readonly nombre_completo: "nombre_completo";
    readonly telefono: "telefono";
    readonly correo: "correo";
    readonly fecha_nacimiento: "fecha_nacimiento";
    readonly antecedentes_medicos: "antecedentes_medicos";
    readonly fecha_registro: "fecha_registro";
};
export type PacientesScalarFieldEnum = (typeof PacientesScalarFieldEnum)[keyof typeof PacientesScalarFieldEnum];
export declare const PerfilesScalarFieldEnum: {
    readonly id: "id";
    readonly nombre_completo: "nombre_completo";
    readonly telefono: "telefono";
    readonly rol: "rol";
    readonly fecha_creacion: "fecha_creacion";
};
export type PerfilesScalarFieldEnum = (typeof PerfilesScalarFieldEnum)[keyof typeof PerfilesScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const JsonNullValueInput: {
    readonly JsonNull: runtime.JsonNullClass;
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const JsonNullValueFilter: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
    readonly AnyNull: runtime.AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type Enumcode_challenge_methodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'code_challenge_method'>;
export type ListEnumcode_challenge_methodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'code_challenge_method[]'>;
export type Enumfactor_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'factor_type'>;
export type ListEnumfactor_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'factor_type[]'>;
export type Enumfactor_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'factor_status'>;
export type ListEnumfactor_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'factor_status[]'>;
export type Enumoauth_response_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'oauth_response_type'>;
export type ListEnumoauth_response_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'oauth_response_type[]'>;
export type Enumoauth_authorization_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'oauth_authorization_status'>;
export type ListEnumoauth_authorization_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'oauth_authorization_status[]'>;
export type Enumoauth_registration_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'oauth_registration_type'>;
export type ListEnumoauth_registration_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'oauth_registration_type[]'>;
export type Enumoauth_client_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'oauth_client_type'>;
export type ListEnumoauth_client_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'oauth_client_type[]'>;
export type Enumone_time_token_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'one_time_token_type'>;
export type ListEnumone_time_token_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'one_time_token_type[]'>;
export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>;
export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>;
export type Enumaal_levelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'aal_level'>;
export type ListEnumaal_levelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'aal_level[]'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>;
export type ListBytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes[]'>;
export type Enumestado_citaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'estado_cita'>;
export type ListEnumestado_citaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'estado_cita[]'>;
export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>;
export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>;
export type Enumuser_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_role'>;
export type ListEnumuser_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_role[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    accelerateUrl: string;
    adapter?: never;
}) & {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
};
export type GlobalOmitConfig = {
    audit_log_entries?: Prisma.audit_log_entriesOmit;
    custom_oauth_providers?: Prisma.custom_oauth_providersOmit;
    flow_state?: Prisma.flow_stateOmit;
    identities?: Prisma.identitiesOmit;
    instances?: Prisma.instancesOmit;
    mfa_amr_claims?: Prisma.mfa_amr_claimsOmit;
    mfa_challenges?: Prisma.mfa_challengesOmit;
    mfa_factors?: Prisma.mfa_factorsOmit;
    oauth_authorizations?: Prisma.oauth_authorizationsOmit;
    oauth_client_states?: Prisma.oauth_client_statesOmit;
    oauth_clients?: Prisma.oauth_clientsOmit;
    oauth_consents?: Prisma.oauth_consentsOmit;
    one_time_tokens?: Prisma.one_time_tokensOmit;
    refresh_tokens?: Prisma.refresh_tokensOmit;
    saml_providers?: Prisma.saml_providersOmit;
    saml_relay_states?: Prisma.saml_relay_statesOmit;
    schema_migrations?: Prisma.schema_migrationsOmit;
    sessions?: Prisma.sessionsOmit;
    sso_domains?: Prisma.sso_domainsOmit;
    sso_providers?: Prisma.sso_providersOmit;
    users?: Prisma.usersOmit;
    webauthn_challenges?: Prisma.webauthn_challengesOmit;
    webauthn_credentials?: Prisma.webauthn_credentialsOmit;
    citas?: Prisma.citasOmit;
    cobros?: Prisma.cobrosOmit;
    documentos_clinicos?: Prisma.documentos_clinicosOmit;
    historial_pagos?: Prisma.historial_pagosOmit;
    notas_clinicas?: Prisma.notas_clinicasOmit;
    pacientes?: Prisma.pacientesOmit;
    perfiles?: Prisma.perfilesOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
