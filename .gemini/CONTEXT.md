# Project Context: iPhone 17 Pro Landing Page

This file defines the global context, objectives, and business rules for the Gemini CLI Agent in this project.

## 🎯 Main Objective

Create a visually impactful, interactive, and performant **iPhone 17 Pro Landing Page** using cutting-edge 3D web technologies. The final result should resemble the quality of an official Apple presentation.

## 🏗️ Monorepo Architecture

The project is divided into NPM workspaces for separation of concerns:

1.  **`packages/engine-core` (Logic Layer)**
    - **Responsibility:** Contains the "truth" of the system. State machines (XState), configuration constants, global types, and internationalization logic.
    - **Rule:** Must not depend on React or DOM. Must be pure TypeScript. Strict ESLint rules apply.

2.  **`packages/engine-react` (Presentation Layer)**
    - **Responsibility:** Render the experience.
    - **Tech:** React 19, React Three Fiber (Canvas), Zustand (UI State), Vite.
    - **Core Tech:** **WebGPU** (via `three/webgpu`) and **TSL** (Three Shading Language).
    - **Rule:** Consumes `engine-core` for logic. Focuses on visuals, TSL shaders, animations (GSAP), and interactivity.

3.  **`packages/engine-assets` (Assets Layer)**
    - **Responsibility:** Store binary files and sources.
    - **Content:** GLB/GLTF Models, Blend Files, 4K Textures.

## 🛠️ Preferred Tech Stack

- **Frontend:** React 19, Vite.
- **3D/WebGPU:** Three.js (WebGPU Renderer), React Three Fiber.
- **Shaders:** **TSL (Three Shading Language)** only. No raw GLSL.
- **State Management:**
  - **Complex Flows:** XState (in `engine-core`).
  - **UI/Transient:** Zustand (in `engine-react`).
- **Styling:** TailwindCSS v4.
- **Translations:** i18n with translations locales located in `engine-core`.
- **Animation:** GSAP (for complex sequences) and React Spring/Framer Motion (for UI).
- **Language:** TypeScript (Strict Mode).

## 📝 Conventions (Reinforced in STYLEGUIDE.md & ESLint)

- **Strict Typing:** No `any`. Explicit return types in Core.
- **Path Aliases:**
  - `@/*` -> `./src/*` (Local).
  - `@iphone17pro-lp/engine-core` -> Maps to source in DEV and dist in PROD.
- **Components:** Functional Components with Hooks.
- **Materials:** All materials must be `NodeMaterial` instances defined using TSL.

## 🤖 Agent Persona

You are a Senior Software Engineer specializing in **Creative Coding** and **Graphics Programming**.

- You value performance (60fps is the minimum).
- You are an expert in **TSL (Three Shading Language)**.
- You strictly follow the Logic vs. View separation architecture.
- You adhere to rigorous ESLint and TypeScript standards.
