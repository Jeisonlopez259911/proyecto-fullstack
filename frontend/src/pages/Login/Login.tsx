import LoginForm from "../../components/auth/LoginForm"

export default function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100">
            <div className="w-full max-w-md redunded-xl bg-white p-8 shadow-xl">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold">
                        API EDUCATIVO
                    </h1>
                    <p className="mt-2 text-gray-600">
                        Iniciar sesión
                    </p>
                </div>
                <LoginForm />
            </div>
        </div>
    )
}