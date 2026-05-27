import { Module } from '@nestjs/common';
import { CobrosController } from './cobros.controller';
import { CobrosService } from './cobros.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CobrosController],
  providers: [CobrosService],
  exports: [CobrosService],
})
export class CobrosModule {}
