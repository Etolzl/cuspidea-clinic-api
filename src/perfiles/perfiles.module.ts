import { Module } from '@nestjs/common';
import { PerfilesController } from './perfiles.controller';
import { PerfilesService } from './perfiles.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PerfilesController],
  providers: [PerfilesService],
  exports: [PerfilesService],
})
export class PerfilesModule {}
