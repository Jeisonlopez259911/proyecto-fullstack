import { Menu, X } from "lucide-react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"
import { toast } from "sonner";

export default function Sidebar() {

    const  [ burguer, setBurguer ] = useState(false);
    const { logout } = useAuth();
    const navigate = useNavigate();

    const menuOpen = () => {
        setBurguer(!burguer)
    }

        const handleLogout = async () => {
        try {
            await logout();
            toast.success("¡Hasta pronto!", {
                duration: 3000
            });
            navigate("/");  // ← Redirigir al login
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }
    };

    return (
        // en pantalla pequeña, mostrar un botón para abrir/cerrar el sidebar
        <div className="md:hidden bg-gray-800 text-white">
            <div className="h-16 flex items-center justify-between px-4">
                <div className="sidebar-brand text-xl font-bold">
                    <a href="">Mi Aplicación</a>
                </div>

                <button
                    className="sidebar-toggle bg-gray-300 text-gray-800 p-2 rounded"
                    onClick={menuOpen}
                    aria-label="Abrir menú"
                >
                    {burguer ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* ✅ Menú desplegable (relative, empuja el contenido) */}
            {burguer && (
                <ul className="sidebar-menu bg-gray-900 text-white flex flex-col gap-2 p-4">
                    <li className="sidebar-item">
                        <a
                            href="/dashboard"
                            className="block py-3 px-4 hover:bg-gray-700 rounded transition-colors"
                        >
                            Dashboard
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a
                            href="/profile"
                            className="block py-3 px-4 hover:bg-gray-700 rounded transition-colors"
                        >
                            Perfil
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <button
                            className="block py-3 px-4 hover:bg-gray-700 rounded transitncion-colors"
                            onClick={handleLogout}
                        >
                            Cerrar Sesion
                        </button>
                    </li>
                </ul>
            )}
        </div>
    );
}