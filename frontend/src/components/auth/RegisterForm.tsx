import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner"
import Button from "../ui/button";
import Input from "../ui/input";
import { registerSchema } from "../../utils/registerSchema";
import type { RegisterFormData } from "../../utils/registerSchema";
import { useAuth } from "../../hooks/useAuth";

export default function RegisterForm() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const { registerUser } = useAuth();
    const {
        register,
        handleSubmit,
        watch,
        resetField,
        formState: { errors }
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema)
    });
    const rolSeleccionado = watch("rol");

    const handleRolChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedRol = event.target.value;
        if (selectedRol === "ESTUDIANTE") {
            // Limpiar los campos de grado y especialidad si el rol es estudiante
            resetField("especialidad");
            resetField("profesion");
        } else if (selectedRol === "DOCENTE") {
            // Limpiar el campo de profesión si el rol es docente
            resetField("profesion");
        }
    };

    async function onSubmit(data: RegisterFormData) {
      console.log("onsubmir ejecutado")
      console.log("Datos del formulario:", data);
        try {
            setLoading(true) 
            await registerUser(data);
            // Aquí puedes hacer la lógica para enviar los datos al backend
            toast.success("Registro exitoso!");
            navigate("/");
        } catch (error) {
            toast.error("Error al registrar el usuario");
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
            label="Nombre"
            type="text"
            placeholder="Tu nombre"
            {...register("nombre")}
            error={errors.nombre?.message}
          />
          <Input
            label="Apellido"
            type="text"
            placeholder="Tu apellido"
            {...register("apellido")}
            error={errors.apellido?.message}
          />
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
          <select className="form-control" {...register("rol", { onChange: handleRolChange })}>
            <option value="">Selecciona tu rol</option>
            <option value="ESTUDIANTE">ESTUDIANTE</option>
            <option value="DOCENTE">DOCENTE</option>
          </select>
          {errors.rol && <p className="text-red-500">{errors.rol.message}</p>}
          {rolSeleccionado == "ESTUDIANTE" && (
            <>
              <select className="form-control" {...register("grado")}>
                <option value="">Grado</option>
                <option value="primero">Primero</option>
                <option value="segundo">Segundo</option>
                <option value="tercero">Tercero</option>
              </select>
              {errors.grado && <p className="text-red-500">{errors.grado.message}</p>}
            </>
          )}
          {rolSeleccionado == "DOCENTE" && (
          <>
            <select className="form-control" {...register("especialidad")}>
              <option value="">Especialidad</option>
              <option value="matematicas">Matemáticas</option>
              <option value="ciencias">Ciencias</option>
              <option value="historia">Historia</option>
            </select>
            {errors.especialidad && <p className="text-red-500">{errors.especialidad.message}</p>}
            <select className="form-control" {...register("profesion")}>
              <option value="">Profesión</option>
              <option value="maestro">Maestro</option>
              <option value="ingeniero">Ingeniero</option>
              <option value="medico">Médico</option>
            </select>
            {errors.profesion && <p className="text-red-500">{errors.profesion.message}</p>}

          </>
          )}
          <Button loading={loading}>
            Registrarse
          </Button>
        </form>
    )
}