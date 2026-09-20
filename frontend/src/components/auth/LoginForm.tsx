import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner"
import Input from "../ui/input";
import Button from "../ui/button"
import { loginSchema } from "../../utils/loginSchema"; 
import type { LoginFormData } from "../../utils/loginSchema";
import { useAuth } from "../../hooks/useAuth";

export default function LoginForm() {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [loading, setLoading] = useState(false);
    const { 
            register, 
            handleSubmit, 
            formState: { errors } 
        } = useForm<LoginFormData>({
            resolver: zodResolver(loginSchema),
        });

        async function onSubmit(data: LoginFormData) {
            try {
                setLoading(true);
                await login(data);
                toast.success("Bienvenido!");
                navigate("/dashboard");
            } catch (error) {
                toast.error("Correo electrónico o contraseña incorrectos");
            } finally {
                setLoading(false);
            }
        }

        return (
            <form 
                onSubmit={handleSubmit(onSubmit)} 
                className="space-x-0.5"
            >
                <Input
                    label="Correo electrónico"
                    type="email"
                    placeholder="username@ejemplo.com"
                    {...register("correo")}
                    error={errors.correo?.message}
                />
                <Input
                    label="Contraseña"
                    type="password"
                    placeholder="••••••••"
                    {...register("password")}
                    error={errors.password?.message}
                />
                <Button loading={loading}>
                    Iniciar sesión
                </Button>
                <NavLink to="/registro" className="text-sm text-gray-500 hover:text-gray-700">
                    ¿No tienes una cuenta? Regístrate
                </NavLink>
            </form>
        );
}