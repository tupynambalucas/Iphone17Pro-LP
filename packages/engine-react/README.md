# ⚛️ @iphone17pro-lp/engine-react

The presentation layer of the iPhone 17 Pro Landing Page. This package is a modern React application powered by Vite, focused on delivering a high-fidelity visual experience using WebGL.

## 🌟 Features

- **React 19**: Latest version for better performance and features.
- **React Three Fiber (R3F)**: Declarative 3D rendering.
- **Drei & Postprocessing**: Advanced visual effects (DOF, Bloom, etc.).
- **Zustand**: Transient UI state management.
- **TailwindCSS v4**: Fast and responsive styling.
- **Internationalization (i18n)**: Support for multiple languages.

## 🚀 How to Run

Ensure you are in the monorepo root or inside this folder.

```bash
# Start development server (HMR active)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗️ Component Architecture (SOLID)

We utilize a **Domain-Driven** directory structure.

- **`src/App.tsx`**: Application entry point, sets up the main Canvas and Layout.
- **`src/iphone/`**: **The Actor**. Contains the iPhone 3D model, its internal logic, materials, and the controller that listens to state changes to animate it.
- **`src/land/`**: **The Stage**. Contains the landing page sections (Hero, Specs, etc.). These sections dictate *where* the iPhone should be, but do not render it directly.
- **`src/hooks/`**: Global reusable hooks.

## 🔌 Integration with Engine-Core

This package consumes logic from `@iphone17pro-lp/engine-core`.
- **Dev**: Alias points to `../engine-core/src` (Hot Reload works for logic).
- **Prod**: Alias points to `node_modules/.../dist` (Uses compiled and stable version).