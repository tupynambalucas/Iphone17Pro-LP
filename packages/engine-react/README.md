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

We utilize a **Feature-Sliced** directory structure.

- **`src/App.tsx`**: Application entry point, sets up the main layout and providers.
- **`src/features/canvas/`**: **The Stage**. Contains the main R3F `Canvas`, lighting, and all 3D objects.
  - **`src/features/canvas/components/Iphone/`**: **The Actor**. Contains the iPhone 3D model, its materials, and animation hooks.
- **`src/features/ui/`**: **The UI Layer**. Contains the page sections (Hero, Specs, etc.) that users interact with. These components drive the application state but do not render 3D objects directly.
- **`src/hooks/`**: Global reusable hooks.

## 🔌 Integration with Engine-Core

This package consumes logic from `@iphone17pro-lp/engine-core`.
- **Dev**: Alias points to `../engine-core/src` (Hot Reload works for logic).
- **Prod**: Alias points to `node_modules/.../dist` (Uses compiled and stable version).