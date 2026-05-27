import { Module } from '@nestjs/common';
import { DocumentosClinicosController } from './documentos-clinicos.controller';
import { DocumentosClinicosService } from './documentos-clinicos.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [DocumentosClinicosController],
  providers: [DocumentosClinicosService],
  exports: [DocumentosClinicosService],
})
export class DocumentosClinicosModule {}
