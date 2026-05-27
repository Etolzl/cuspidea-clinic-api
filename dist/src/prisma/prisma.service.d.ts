import { OnModuleInit, OnModuleDestroy } from '@nestjs/common';
export declare class PrismaService implements OnModuleInit, OnModuleDestroy {
    private readonly logger;
    private readonly client;
    constructor();
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
    get db(): import("../../generated/prisma/internal/class").PrismaClient<never, import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined, import("@prisma/client/runtime/client").InternalArgs>;
}
