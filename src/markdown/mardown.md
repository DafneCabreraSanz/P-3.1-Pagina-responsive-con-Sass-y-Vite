# P3.1 Maquetación con Vite y SASS

> S2DAW Diseño de Interfaces Web  
> Autor: Dafne Cabrera Sanz

## 1. Descripción

Proyecto de maquetación responsive de un e-commerce de ropa para bebés llamado "Algodón de Luna". El sitio web incluye una landing page con categorías de productos organizadas por temporadas (Otoño, Invierno, Primavera, Verano) y un formulario de registro de usuarios.

### Características principales:
- Diseño responsive adaptado a móvil y desktop
- Sistema de diseño basado en variables SASS exportadas desde Figma
- Menú hamburguesa para dispositivos móviles con overlay
- Formulario de registro con validación en tiempo real
- Arquitectura SASS modular con sistema @use/@forward
- Imágenes circulares de bebés integradas en las secciones de temporada

## 2. Tecnologías utilizadas

- **Vite** - Build tool y servidor de desarrollo
- **SASS/SCSS** - Preprocesador CSS con sintaxis modular
- **HTML5** - Estructura semántica
- **JavaScript (ES6+)** - Funcionalidad e interactividad
- **Google Fonts** - Tipografías Kalam y League Spartan

## 3. Estructura del proyecto

```
P3.1/
├── src/
│   ├── styles/
│   │   ├── _variables.scss    # Variables de diseño (exportadas de Figma)
│   │   ├── _mixins.scss        # Mixins reutilizables y media queries
│   │   ├── _globals.scss       # Reenvío de variables y mixins
│   │   ├── _layout.scss        # Layout general y utilidades
│   │   ├── _header.scss        # Estilos del header
│   │   ├── _footer.scss        # Estilos del footer
│   │   ├── _hero.scss          # Estilos de la sección hero
│   │   ├── _landing.scss       # Estilos de las secciones de temporada
│   │   ├── _form.scss          # Estilos del formulario
│   │   └── main.scss           # Archivo principal SCSS
│   ├── assets/                 # Imágenes, íconos y recursos SVG
│   ├── markdown/               # Documentación del proyecto
│   ├── index.html              # Landing page
│   ├── formulario.html         # Página de registro
│   └── main.js                 # JavaScript principal
├── docs/                       # Build para GitHub Pages
├── vite.config.js              # Configuración de Vite
├── package.json
└── README.md
```

## 4. Instalación y uso

### Requisitos previos
- Node.js (versión 14 o superior)
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone [URL_DEL_REPOSITORIO]

# Navegar al directorio
cd [NOMBRE_DEL_PROYECTO]

# Instalar dependencias
npm install
```

### Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev
```

El proyecto estará disponible en `http://localhost:5173`

### Construcción para producción

```bash
# Generar build en la carpeta docs/
npm run build
```

## 5. Características SASS implementadas

### Variables (_variables.scss)
- ✅ Paleta de colores exportada de Figma (primarios, secundarios, neutrales)
- ✅ Variables tipográficas (familias: Kalam, League Spartan y tamaños)
- ✅ Sistema de espaciados consistente ($spacing-sm, $spacing-md, $spacing-lg, $spacing-xl)
- ✅ Variables para tamaños de texto ($títulos, $párrafos, $texto)

### Mixins (_mixins.scss)
- ✅ `respond-to($breakpoint)` - Gestor de media queries con mapas
- ✅ Sistema de breakpoints: "small" (max-width: 599px), "medium" (600px-1199px), "large" (min-width: 1200px)
- ✅ Mixins para componentes reutilizables

### Características avanzadas
- ✅ Anidamiento de selectores con BEM (Block Element Modifier)
- ✅ Uso de mapas para gestionar breakpoints responsive
- ✅ Sistema modular con `@use` y `@forward` (sin @import deprecado)
- ✅ Uso de `&` para selectores padres y pseudo-clases
- ✅ Variables de color con namespace (ej: $primario-amarillo, $primario-negro)
- ✅ Archivo _globals.scss para reenviar variables y mixins globalmente

## 6. Diseño Responsive

### Breakpoints definidos:
- **Mobile**: hasta 599px (small)
- **Tablet**: 600px - 1199px (medium)
- **Desktop**: desde 1200px (large)

### Adaptaciones responsive:
- **Grid de categorías**: 5 columnas (desktop) → 2 columnas (móvil)
- **Secciones de temporada**: 
  - Desktop: Layout horizontal con imagen circular lateral (350px) posicionada de forma absoluta
  - Móvil: Layout vertical con imagen circular (250px) centrada encima del texto
- **Header**: 
  - Desktop: Logo centrado con acciones en ambos lados
- **Formulario**: 2 columnas → 1 columna en móvil
- **Imágenes circulares**: Posicionamiento absoluto en desktop, estático y centrado en móvil
- **Espaciados**: Ajuste de márgenes y paddings según viewport

## 7. Funcionalidades JavaScript (main.js)

- ✅ **Menú móvil con overlay**: Apertura/cierre del menú hamburguesa con fondo oscuro semitransparente
- ✅ **Validación de formulario en tiempo real**: Feedback inmediato al usuario mientras completa el formulario
- ✅ **Validación de email**: Comprobación de formato correcto del email
- ✅ **Validación de contraseña**: Verificación de requisitos (8+ caracteres, mayúscula, minúscula, número)
- ✅ **Validación de teléfono**: Formato válido para números telefónicos
- ✅ **Gestión de eventos**: Listeners para interacciones del usuario

## 8. Detalles de implementación

### Secciones de temporada
- Fondo con imágenes SVG (`otono.svg`, `invierno.svg`, `primavera.svg`, `verano.svg`)
- Imágenes circulares de bebés (`otonoBebe.svg`, `inviernobebe.svg`, `primaveraBebe.svg`, `veranoBebe.svg`)
- Posicionamiento alternado: Otoño y Primavera alineados a la derecha con imagen circular a 150px del borde derecho
- Invierno y Verano alineados a la izquierda con imagen circular a 150px del borde izquierdo
- Centrado vertical de las imágenes circulares con `transform: translateY(-50%)`
- Espaciado entre secciones: 80px (margin-bottom) y 100px (margin-top)

### Sistema de variables Figma
- Exportación directa de variables de diseño desde Figma a SASS
- Nomenclatura consistente con prefijos descriptivos ($primario-, $secundario-, etc.)
- Integración completa del sistema de diseño

## 9. Enlaces de interés

- [Página desplegada en GitHub Pages](https://github.com/DafneCabreraSanz/P-3.1-Pagina-responsive-con-Sass-y-Vite.git)
- [Diseño en Figma](https://www.figma.com/design/DZKKaGB98078QxxXrHUWea/)
- [Documentación de Vite](https://vitejs.dev/)
- [Documentación de SASS](https://sass-lang.com/documentation)
- [Guía de Markdown](https://www.markdownguide.org/cheat-sheet/)

## 10. Autor

**Dafne Cabrera Sanz**  
S2DAW - Diseño de Interfaces Web  
Curso 2025-2026

---

## 11. Licencia

Este proyecto es de uso educativo para la asignatura de Diseño de Interfaces Web.

---
