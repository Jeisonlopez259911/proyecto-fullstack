# Backend y Frontend
Backend /api_nodeV5A `pnpm run dev or pnpm start`
Frontend /frontend `pnpm run dev`

## Librerias comunes para desarrollar aplicaciones modernas con react
`pnpm install react-router-dom axios react-hook-form zod @hookform/resolvers lucide-react sonner clsx tailwind-merge jwt-decode`

Libreria|¿Para que sirve?|Ejemplo de uso
:---|:---|:---
**react-router-domm**|Manejo de rutas y navegacion de pagina|/login, /dashboard
**axios**|Realizar peticiones HTTP y a una API REST|Obtener usuarios, enviar formularios, Eliminar registros
**react-hook-form**|Manejar formularios de forma eficieente y poco codigo|login, registro, crear producto
**zop**|Validar datos mediante esquemas con TypeScript|Validar que un correo sea valido o que una contraseña tenga minimo 8 caracteres
**@hookform/resolvers**|Conecta React Hook Form con Zop|Permite validar automaticamente un formulario usando un esquema zod
**lucide-react**|Biblioteca de iconos SVG para React|Iconos de usuario, menu, editar ....
**sonner**|Mostrar notificaciones(toast)|Usuario creado correctamente
**clsx**|Construir clases CSS condicionalmente|Agregar clases dependiendo de un estado
**tailwind-merge**|Combina clases de tailwind evitando conflictos|si existen p-2 y p-4 deja solamente el p-4
**jwt-decode**|Leer el contenido de un JWT sin verificar la firma|obtener nombre, rol o correo

`pnpm install tailwindcss @tailwindcss/vite`

Arquitectura Profesional

src
│   App.tsx
│   index.css
│   main.tsx
│   
├───api
│       axios.ts
│       
├───assets
│       hero.png
│       react.svg
│       vite.svg
│       
├───auth
│       AuthContext.tsx
│       PrivateRoutes.tsx
│       
├───components
│       Button.tsx
│       Card.tsx
│       Footer.tsx
│       Input.tsx
│       Modal.tsx
│       Navbar.tsx
│       Sidebar.tsx
│       Table.tsx
│       
├───layout
│       AuthLayout.tsx
│       DashboarLayout.tsx
│       
├───pages
│   ├───Dashboard
│   │       Dashboard.tsx
│   │       
│   ├───Login
│   │       Login.tsx
│   │       
│   └───NotFound
│           NotFound.tsx
│           
├───routes
│       AppRoutes.tsx
│       
├───services
│       auth.service.ts
│       curso.service.ts
│       sede.service.ts
│       usuarios.service.ts
│       
└───utils

D:\Proyectos-Programacion\fullstack\proyecto\frontend\src

Arquitectura
Frontend->AuthContext->AuthService->Axios->Backend Node


# Se agregaron los archivos

Register.tsx
RegisterForm.tsx
RegisterShema.tsx

# Se modificarn los arcihvos

auth.ts
AuthProvider.tsx
auth.service.ts
Dashboard.tsx
Navbar.tsx
Sidebar.tsx
Footer.tsx
