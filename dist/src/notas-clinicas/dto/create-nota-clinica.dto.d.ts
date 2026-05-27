export declare class CreateNotaClinicaDto {
    paciente_id: number;
    dentista_id: string;
    cita_id?: number;
    diagnostico: string;
    tratamiento_realizado?: string;
    notas_evolucion?: string;
    odontograma_estado?: Record<string, any>;
}
