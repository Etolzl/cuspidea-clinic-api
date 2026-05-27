import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PacientesModule } from './pacientes/pacientes.module';
import { CitasModule } from './citas/citas.module';
import { PerfilesModule } from './perfiles/perfiles.module';
import { CobrosModule } from './cobros/cobros.module';
import { NotasClinicasModule } from './notas-clinicas/notas-clinicas.module';
import { DocumentosClinicosModule } from './documentos-clinicos/documentos-clinicos.module';
import { AuthModule } from './auth/auth.module';
import { SupabaseModule } from './supabase/supabase.module';

@Module({
  imports: [
    PrismaModule,
    SupabaseModule,
    AuthModule,
    PacientesModule,
    CitasModule,
    PerfilesModule,
    CobrosModule,
    NotasClinicasModule,
    DocumentosClinicosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
