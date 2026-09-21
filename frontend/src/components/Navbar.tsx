import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"
import { toast } from "sonner";

export default function Navbar() {

    const { logout } = useAuth();
    const navigate = useNavigate();

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
        // en pantalla grande, mostrar el navbar completo
        <nav className="hidden md:flex fixed top-0 left-0 right-0 h-16 bg-gray-800 text-white items-center justify-between px-4 z-40">
            <div className="navbar-brand text-xl font-bold">
                <a href="/">Mi Aplicación</a>
            </div>
            <ul className="navbar-menu flex space-x-4">
                <li className="navbar-item"><a href="/dashboard">Dashboard</a></li>
                <li className="navbar-item"><a href="/profile">Perfil</a></li>
                <li className="navbar-item"><button onClick={handleLogout}>Cerrar Sesion</button></li>
            </ul>
        </nav>
    );
}