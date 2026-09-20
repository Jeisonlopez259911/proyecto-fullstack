export interface User {
    id: number;
    nombre: string;
    apellido: string;
    correo: string;
    rol: string;
    estado: boolean;
    grado?: string;
    especialidad?: string;
    profesion?: string;
}

export interface LoginRequest {
    correo: string;
    password: string;
}

export interface RegisterRequest {
    nombre: string;
    apellido: string;
    correo: string;
    password: string;
    rol: "ESTUDIANTE" | "DOCENTE";
    grado?: string;
    especialidad?: string;
    profesion?: string;
}

export interface AuthContextType {
    user: User | null;
    loading: boolean;
    isAuthenticated: boolean;
    login: (data: LoginRequest) => Promise<void>;
    logout: () => Promise<void>;
    registerUser: (data: RegisterRequest) => Promise<void>;

}


