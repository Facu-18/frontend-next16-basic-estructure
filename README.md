# Next.js 16 + Tailwind CSS 4 - Estructura Básica

Este proyecto es una base sólida para aplicaciones modernas utilizando las últimas tecnologías del ecosistema React.

## 🚀 Tecnologías Principales

- **Next.js 16**: Última versión del framework con soporte para App Router y optimizaciones avanzadas.
- **React 19**: Aprovechando las nuevas APIs de renderizado y hooks.
- **Tailwind CSS 4**: Motor de estilos de próxima generación, más rápido y basado en CSS nativo.
- **TypeScript**: Tipado estricto para un mantenimiento sencillo.

## 📂 Estructura del Proyecto

La estructura está organizada siguiendo las mejores prácticas de escalabilidad:

```text
src/
├── app/              # Rutas, layouts y páginas (App Router)
│   ├── globals.css   # Estilos globales y reset
│   ├── layout.tsx    # Layout principal con Header
│   └── page.tsx      # Página de inicio optimizada
├── components/       # Componentes de React
│   ├── layout/       # Componentes estructurales (Header, Footer, Sidebar)
│   └── ui/           # Componentes de UI reutilizables (Botones, Cards, etc.)
├── hooks/            # Hooks personalizados de React
├── lib/              # Utilidades, configuraciones de clientes (API, DB)
├── styles/           # Archivos de estilos específicos si es necesario
└── types/            # Definiciones de tipos globales de TypeScript
```

## 🛠️ Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Compila la aplicación para producción.
- `npm run start`: Inicia la aplicación compilada.
- `npm run lint`: Ejecuta el análisis estático de código.

## 🎨 Personalización de Estilos

El proyecto utiliza **Tailwind CSS 4**. La configuración se realiza directamente en `src/app/globals.css` utilizando la directiva `@theme`.

```css
@theme {
  --color-primary: #3b82f6;
  --font-sans: var(--font-geist-sans);
}
```

---
Creado por **Antigravity** para potenciar tu flujo de trabajo.
