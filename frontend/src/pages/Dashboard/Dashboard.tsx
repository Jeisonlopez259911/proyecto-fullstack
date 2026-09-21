import { useAuth } from "../../hooks/useAuth";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


export default function Dashboard() {

    const { user, loading } = useAuth();
    const navigate = useNavigate();

  
    useEffect(() => {
        if (!user) {
            navigate("/");
        }   
    }, [user, navigate]);

        // ✅ Mientras carga, mostrar spinner
    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-slate-100 via-white to-slate-100">
                <div className="flex gap-2">
                    <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                    <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                    <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                </div>
                <p className="mt-6 text-lg font-semibold text-slate-600">
                    Cargando...
                </p>
            </div>
        );
    }

    // ✅ Si no hay usuario, no renderizar (el useEffect redirige)
    if (!user) {
        return null;
    }


    return (
        <>
        <div className="min-h-screen flex flex-col">
                <Navbar />
                <Sidebar />
                <main className="grow pt-16 p-4">
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                    <p>Bienvenido, {user.nombre}</p>

                    {user.rol === "ADMIN" && (
                        <div className="bg-blue-100 p-4 rounded mt-4">
                            <h2>Panel de Administrador</h2>
                        </div>
                    )}
                    {user.rol === "ESTUDIANTE" && (
                        <div className="bg-green-100 p-4 rounded mt-4">
                            <h2>Panel de Estudiante</h2>
                        </div>
                    )}
                    {user.rol === "DOCENTE" && (
                        <div className="bg-yellow-100 p-4 rounded mt-4">
                            <h2>Panel de Docente</h2>
                        </div>
                    )}
                </main>
                <Footer />
        </div>

    
        </>

        
    )
}