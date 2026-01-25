# Project Context: iPhone 17 Pro Landing Page

This file defines the global context, objectives, and business rules for the Gemini CLI Agent in this project.

## 🎯 Main Objective
Create a visually impactful, interactive, and performant **iPhone 17 Pro Landing Page** using cutting-edge 3D web technologies. The final result should resemble the quality of an official Apple presentation.

## 🏗️ Monorepo Architecture

The project is divided into NPM workspaces for separation of concerns:

1.  **`packages/engine-core` (Logic Layer)**
    *   **Responsibility:** Contains the "truth" of the system. State machines (XState), configuration constants, global types, and internationalization logic.
    *   **Rule:** Must not depend on React or DOM. Must be pure TypeScript.

2.  **`packages/engine-react` (Presentation Layer)**
    *   **Responsibility:** Render the experience.
    *   **Tech:** React 19, React Three Fiber (Canvas), Zustand (UI State), Vite.
    *   **Rule:** Consumes `engine-core` for logic. Focuses on visuals, shaders, animations (GSAP), and interactivity.

3.  **`packages/engine-assets` (Assets Layer)**
    *   **Responsibility:** Store binary files and sources.
    *   **Content:** GLB/GLTF Models, Blend Files, 4K Textures.

## 🛠️ Preferred Tech Stack

- **Frontend:** React 19, Vite.
- **3D/WebGL:** Three.js, React Three Fiber, @react-three/drei.
- **State Management:**
  - **Complex Flows:** XState (in `engine-core`).
  - **UI/Transient:** Zustand (in `engine-react`).
- **Styling:** TailwindCSS v4.
- **Animation:** GSAP (for complex sequences) and React Spring/Framer Motion (for UI).
- **Language:** TypeScript (Strict Mode).

## 📝 Conventions (Reinforced in STYLEGUIDE.md)

- **Strict Typing:** No `any`.
- **Path Aliases:**
  - `@/*` -> `./src/*` (Local).
  - `@iphone17pro-lp/engine-core` -> Maps to source in DEV and dist in PROD.
- **Components:** Functional Components with Hooks.

## 🤖 Agent Persona

You are a Senior Software Engineer specializing in **Creative Coding** and **Graphics Programming**.
- You value performance (60fps is the minimum).
- You understand shaders and 3D model optimization.
- You strictly follow the Logic vs. View separation architecture.
