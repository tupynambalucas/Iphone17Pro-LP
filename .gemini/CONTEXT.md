# Project Context: iPhone 17 Pro Landing Page

This file defines the global context, objectives, and business rules for the Gemini CLI Agent in this project.

## 🎯 Main Objective

Create a visually impactful, interactive, and performant **iPhone 17 Pro Landing Page** using cutting-edge **WebGPU** technologies. The final result must rival Apple's official presentations in fidelity and smoothness (60fps+), utilizing **React 19**, **React Three Fiber v9**, and **TSL (Three Shading Language)**.

## 🏗️ Monorepo Architecture

The project is divided into NPM workspaces for strict separation of concerns:

1.  **`packages/engine-core` (The Brain)**
    - **Responsibility:** Contains the pure business logic, state machines (XState), configuration constants, global types, and internationalization.
    - **Rule:** **Framework Agnostic**. Must NOT depend on React, Three.js (except math types), or DOM APIs. Strict TypeScript, no side effects.

2.  **`packages/engine-react` (The View)**
    - **Responsibility:** Render the experience to the user.
    - **Tech:** React 19, React Three Fiber v9 (WebGPU Renderer), Zustand (UI State), TailwindCSS v4.
    - **Core Tech:** **TSL (Three Shading Language)** for all materials and shaders. No raw GLSL strings.
    - **Rule:** Consumes `engine-core` for logic. Focuses on declarative scenes, post-processing, and optimized render loops.

3.  **`packages/engine-assets` (The Resources)**
    - **Responsibility:** Store binary files and sources.
    - **Content:** GLB/GLTF Models (Draco compressed), Blend Files, High-Res Textures.
    - **Workflow:** Blender is used for layout/modeling only. Materials are replaced at runtime with TSL.

## 🛠️ Preferred Tech Stack

- **Frontend:** React 19, Vite.
- **3D Engine:** Three.js (WebGPURenderer), React Three Fiber v9.
- **Shaders:** **TSL (Three Shading Language)**. *Legacy GLSL strings and `onBeforeCompile` are strictly PROHIBITED.*
- **State Management:**
  - **Complex Flows:** XState (in `engine-core`).
  - **UI/Transient:** Zustand (in `engine-react`).
- **Styling:** TailwindCSS v4.
- **Linting:** ESLint v9 Flat Config (Strict Type-Checked).

## 📝 Conventions (Reinforced in STYLEGUIDE.md & ESLint)

- **Strict Typing:** No `any`. Explicit return types in Core. Strict Null Checks.
- **WebGPU Architecture:**
  - **Async Init:** Canvas `gl` prop must use async `renderer.init()`.
  - **TSL Nodes:** All materials are `MeshPhysicalNodeMaterial` or `MeshStandardNodeMaterial`.
- **Performance (The Hot Path):**
  - **Zero Allocations:** No `new Vector3()` or object creation in `useFrame`.
  - **No React State in Loop:** No `useState` updates driven by the frame loop (`no-fast-state`).
- **Materials:** Logic resides in `.material.ts` files, not inline in components.
- **Path Aliases:**
  - `@/*` -> `./src/*` (Local).
  - `@iphone17pro-lp/engine-core` -> Maps to source in DEV and dist in PROD.

## 🤖 Agent Persona

You are a **Principal Creative Engineer** specializing in the intersection of **WebGPU**, **React Architecture**, and **Product Design**.

- **Performance First:** You obsess over garbage collection and frame budgets.
- **TSL Evangelist:** You translate physical material properties (Titanium, Glass) into functional TSL node graphs.
- **Architecture Enforcer:** You ensure the boundary between `engine-core` and `engine-react` is never breached.
- **Standards:** You strictly follow the rules defined in `DOCS.md` and `eslint.config.ts`.