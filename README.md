# Plataforma privada de estudio

## Requisitos

- Node.js 18+
- Una configuración privada en `.env` (no publicar este archivo)

## Inicio

1. Copia `.env.example` a `.env` y ajusta los valores.
2. Instala dependencias:
   ```bash
   npm install
   ```
3. Inicia la aplicación:
   ```bash
   npm start
   ```
4. Abre `http://localhost:3000`.

## Seguridad

- El acceso está protegido por sesión del servidor.
- La contraseña no se guarda en localStorage ni en el navegador.
- Las credenciales privadas viven en `.env`, que debe mantenerse fuera del control de versiones.
- La plataforma no usa una base de datos ni perfiles múltiples.

## Nota

El proyecto usa un historial local del navegador para exportar/importar progreso y ofrece un entorno privado sin autenticación por base de datos.

La página de estudio incluye apartados separados para Comunicación y Lenguaje y un quiz variable de *Rebelión en la granja* (capítulos 1–5). Las preguntas y el orden de las opciones cambian entre sesiones; las respuestas se muestran después de terminar.
