import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
         <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20 shadow-2xl max-w-lg w-full text-center">
                
                {/* 404 con animación */}
                <div className="text-9xl font-black text-white mb-4 animate-bounce">
                    404
                </div>

                <h2 className="text-3xl font-bold text-white mb-4">
                    ¡Ups! Página no encontrada
                </h2>

                <p className="text-white/80 mb-8">
                    La página que buscas no existe o fue movida.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center gap-2 
                                   px-6 py-3 rounded-xl font-semibold
                                   bg-white text-purple-600
                                   hover:bg-gray-100 transition-all
                                   transform hover:scale-105"
                    >
                        <Home size={20} />
                        Ir al login
                        <ArrowLeft size={20} />
                    </Link>
                </div>
            </div>
        </div>
    )
}