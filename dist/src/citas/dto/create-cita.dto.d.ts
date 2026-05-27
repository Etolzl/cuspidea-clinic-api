export declare enum EstadoCita {
    PROGRAMADA = "programada",
    CONFIRMADA = "confirmada",
    CANCELADA = "cancelada",
    COMPLETADA = "completada",
    NO_ASISTIO = "no_asistio"
}
export declare class CreateCitaDto {
    paciente_id: number;
    dentista_id: string;
    fecha_hora_inicio: string;
    fecha_hora_fin: string;
    estado?: EstadoCita;
    motivo_consulta?: string;
}
