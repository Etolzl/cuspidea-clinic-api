export declare enum UserRole {
    ADMINISTRADOR = "administrador",
    DENTISTA = "dentista",
    RECEPCIONISTA = "recepcionista",
    PACIENTE = "paciente"
}
export declare class RegisterDto {
    email: string;
    password: string;
    nombre_completo: string;
    telefono?: string;
    rol?: UserRole;
}
