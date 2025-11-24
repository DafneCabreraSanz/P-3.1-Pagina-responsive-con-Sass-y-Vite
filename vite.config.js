import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    root: "./src", // no olvidemos cambiar la raíz del proyecto a "src"
    build: {
        outDir: "../docs", // Directorio de salida para GitHub Pages
        emptyOutDir: true, // Limpia el directorio antes de construir
        rollupOptions: {
            input: {
                main: resolve(__dirname, "./src/index.html"), // Página principal
                formulario: resolve(__dirname, "./src/formulario.html"), // Otra página
                // Añade más entradas si es necesario
            },
        },
    },
    base: "./", // Opcional: rutas relativas para mayor compatibilidad
});