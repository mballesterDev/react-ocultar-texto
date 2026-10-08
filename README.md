# Ocultar texto

Componente React + TypeScript que muestra u oculta un texto con un botón y cuenta sus caracteres.

**Demo:** https://mballesterdev.github.io/react-ocultar-texto/

## Funcionalidades

- Renderizado condicional
- Estado inicial recibido por props

## Tecnologías

React 19 · Vite · TypeScript · Tailwind CSS 4

## Uso en local

```bash
npm install
npm run dev
```

## Despliegue en GitHub Pages

El proyecto ya está configurado para GitHub Pages:

- `vite.config.ts` define `base: '/react-ocultar-texto/'` (el nombre del repositorio).
- `package.json` incluye `homepage` y los scripts `predeploy` y `deploy` (paquete `gh-pages`).

Para publicar una nueva versión:

```bash
npm run deploy
```

Esto genera `dist/` y lo sube a la rama `gh-pages`. En el repositorio, **Settings → Pages** debe tener como origen la rama `gh-pages` y la carpeta `/ (root)`.
