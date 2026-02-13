# ⚛️ @iphone17pro-lp/engine-react

The "View" layer, powered by **React 19** and **WebGPU**.

## 🌟 Key Features

- **React Three Fiber v9**: Utilizes the latest R3F version with support for async renderer initialization.
- **WebGPURenderer**: The default renderer. Fallback to WebGL2 is handled transparently by Three.js (if configured), but we target WebGPU first.
- **TSL (Three Shading Language)**: All materials (Titanium, Glass, Screen) are procedural `NodeMaterial` instances.
- **TailwindCSS v4**: For the HTML UI overlays.

## 🏗️ Architecture: Feature-Sliced

- **`src/features/canvas/`**: The 3D World.
  - **`components/Iphone/`**: The main actor.
    - `materials/`: **TSL** definitions (e.g., `titanium.material.ts`).
    - `model/`: The GLTF JSX graph (Geometry only).
    - `hooks/`: Animation controllers (GSAP/Spring).
- **`src/features/ui/`**: The 2D Overlay.
  - Controls the `engine-core` state machine based on user interaction (scroll, clicks).

## 🛡️ Typing (R3F v9)

We use `ThreeElements` for strict typing of Three.js elements.
- ❌ `import { GroupProps } from '@react-three/fiber'`
- ✅ `import { ThreeElements } from '@react-three/fiber'` -> `ThreeElements['group']`

## ⚠️ Performance Rules (Strict Linting)

This package uses strict ESLint rules to prevent common 3D performance pitfalls:
1.  **`react-three/no-clone-in-frame-loop`**: Do not allocate objects in `useFrame`.
2.  **`react-three/no-fast-state`**: Do not use `useState` for animation values.

## 🚀 Development

```bash
npm run dev
# Starts Vite server. 
# Aliases '@iphone17pro-lp/engine-core' to the local source for easy debugging.
```
