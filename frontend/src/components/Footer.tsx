export default function Footer() {

    const añoActual = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-white py-6 mt-auto">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <p className="text-gray-400 text-sm">
                    © {añoActual} Mi Aplicación. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
}