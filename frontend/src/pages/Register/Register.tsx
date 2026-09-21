import RegisterForm from "../../components/auth/RegisterForm";

export default function Register() {
    return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-100 via-white to-slate-100 p-4">
        <div className="w-full max-w-2xl rounded-2xl bg-white p-10 shadow-2xl border border-slate-200">
            <div className="mb-10 text-center">
                <h1 className="text-4xl font-bold text-slate-800">
                    Crea tu cuenta
                </h1>
                <p className="mt-3 text-lg text-slate-500">
                    Regístrate para comenzar
                </p>
            </div>
            <RegisterForm />
        </div>
    </div>
    )
}