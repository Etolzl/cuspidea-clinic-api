import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(PrismaService.name);
  private readonly client: InstanceType<typeof PrismaClient>;

  constructor() {
    // Prisma v7 requires a driver adapter instead of a direct datasourceUrl
    const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
    this.client = new PrismaClient({ adapter });
  }

  async onModuleInit() {
    await this.client.$connect();
    this.logger.log('Prisma connected to database');
  }

  async onModuleDestroy() {
    await this.client.$disconnect();
    this.logger.log('Prisma disconnected from database');
  }

  /**
   * Expose the underlying PrismaClient instance.
   * Use in services: `this.prisma.db.pacientes.findMany()`
   */
  get db() {
    return this.client;
  }
}
