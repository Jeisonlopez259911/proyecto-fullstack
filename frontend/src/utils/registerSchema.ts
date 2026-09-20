// utils/registerSchema.ts
import { z } from "zod";

export const registerSchema = z.object({
    nombre: z.string().min(1, "Ingrese su nombre"),
    apellido: z.string().min(1, "Ingrese su apellido"),
    correo: z.string().email("Correo inválido"),
    password: z.string().min(4, "Ingrese la contraseña"),
    rol: z.enum(["ESTUDIANTE", "DOCENTE"], {
        message: "Seleccione un rol",
    }),
    grado: z.string().optional(),
    especialidad: z.string().optional(),
    profesion: z.string().optional(),
})
// ✅ Validación individual para grado
.refine((data) => {
    if (data.rol === "ESTUDIANTE") return !!data.grado;
    return true;
}, {
    message: "Seleccione un grado",
    path: ["grado"],  // ← El error se asigna a "grado"
})
// ✅ Validación individual para especialidad
.refine((data) => {
    if (data.rol === "DOCENTE") return !!data.especialidad;
    return true;
}, {
    message: "Seleccione una especialidad",
    path: ["especialidad"],
})
// ✅ Validación individual para profesión
.refine((data) => {
    if (data.rol === "DOCENTE") return !!data.profesion;
    return true;
}, {
    message: "Seleccione una profesión",
    path: ["profesion"],
});

export type RegisterFormData = z.infer<typeof registerSchema>;