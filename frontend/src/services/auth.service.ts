import api from "../api/axios";
import type { User, LoginRequest, RegisterRequest } from "../types/auth";

interface LoginResponse {
    usuario: User;
}

interface ProfileResponse {
    usuario: User;
}

interface RegisterResponse {
    usuario: User;
}

export async function loginService(data:LoginRequest): Promise<User> {
    const response = await api.post<LoginResponse>("/auth/login", data);
    return response.data.usuario;
}

export async function logoutService(): Promise<void> {
    await api.post("/auth/logout");
}

export async function profileService(): Promise<User> {
    const response = await api.get<ProfileResponse>("/auth/perfil");
    return response.data.usuario;
}

export async function registerService(data: RegisterRequest): Promise<User> {
    const response = await api.post<RegisterResponse>("/auth/registro", data);
    return response.data.usuario;
}

/*
export interface LoginData {
    correo: string;
    password: string;
}

export const login = async (data: LoginData) => {
    const response = await api.post("/auth/login", data);
    return response.data;
}

export const logout = async () => {
    await api.post("/auth/logout");
}

export const profile = async () => {
    const response = await api.get("/auth/perfil");
    return response.data;
}
*/