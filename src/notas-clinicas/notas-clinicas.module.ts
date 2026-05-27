import { Module } from '@nestjs/common';
import { NotasClinicasController } from './notas-clinicas.controller';
import { NotasClinicasService } from './notas-clinicas.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [NotasClinicasController],
  providers: [NotasClinicasService],
  exports: [NotasClinicasService],
})
export class NotasClinicasModule {}
