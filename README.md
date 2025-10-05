# CrisajuDemy - React (Vite) scaffold

Este proyecto es una conversión inicial de tu proyecto front estático a **React + Vite** usando **Bootstrap por CDN**.
He copiado las imágenes encontradas en tu proyecto original a `public/images/`.
El scaffold incluye rutas (React Router) y componentes base (Navbar, Footer, CursoCard) y una muestra de `cursos.json` en `src/data/`.

## Cómo usar

1. Extrae este ZIP y abre una terminal en la carpeta del proyecto.
2. Instala dependencias:
   ```bash
   npm install
   ```
3. Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Abre `http://localhost:5173` en tu navegador.

## Integración con tu HTML/CSS existente

- Tus imágenes ya están en `public/images/`.
- Copia cualquier CSS que tengas (archivos `.css`) a `src/styles.css` o a `public/` y luego impórtalo desde `src/main.jsx` o referencia desde `public/index.html`.
- Si tienes componentes HTML específicos (ej. secciones o tarjetas), conviértelos a componentes React dentro de `src/components/` y reemplaza el placeholder en las páginas.

## Conexión a "base de datos" simple

Para simular una BD con archivos planos, usa `src/data/*.json`. En los componentes usamos `import cursosData from './data/cursos.json'` para leerlos en tiempo de compilación. Más adelante puedes reemplazar esto por fetch desde `/data/cursos.json` o por una pequeña API.

---
Generado automáticamente. Copié 7 imágenes desde el proyecto original.
