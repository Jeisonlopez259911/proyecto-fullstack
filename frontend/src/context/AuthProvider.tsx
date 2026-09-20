import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {loginService, logoutService, profileService, registerService} from "../services/auth.service";
import type { User, LoginRequest, RegisterRequest } from "../types/auth";

interface Props {
    children: React.ReactNode;
}

export default function AuthProvider({ children }: Props) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        checkSession();
    }, []);

    async function checkSession() {
        try {
            const usuario = await profileService();
            setUser(usuario);
        } catch (error) {
            setUser(null);
        } finally {
            setLoading(false);
        }

    }

    async function login(data: LoginRequest) {
        const usuario = await loginService(data);
        setUser(usuario);
    }

    async function logout() {
        await logoutService();
        setUser(null);
    }

    async function registerUser(data: RegisterRequest) {
        await registerService(data);
    }

    return (
        <AuthContext.Provider value={{ user, loading, registerUser, login, logout, isAuthenticated: !!user }}>
            {children}
        </AuthContext.Provider>
    );
}