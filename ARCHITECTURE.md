# 🏗️ Architecture Overview

This document describes the high-level architecture of the **iPhone 17 Pro Landing Page**. We utilize a **Monorepo** strategy to strictly separate business logic from the high-fidelity presentation layer, leveraging **WebGPU** and **TSL**.

## 📦 Monorepo Structure

```mermaid
graph TD
    User[User Interaction] --> View[@iphone17pro-lp/engine-react]
    View --> Core[@iphone17pro-lp/engine-core]
    View --> Assets[@iphone17pro-lp/engine-assets]
    
    subgraph "Presentation Layer (WebGPU)"
        View
        R3F[React Three Fiber v9]
        TSL[Three Shading Language]
    end
    
    subgraph "Logic Layer (Pure TS)"
        Core
        XState[State Machines]
        Constants[Physics/Camera Config]
    end
    
    subgraph "Resource Layer"
        Assets
        Models[GLB Models]
        Textures[4K Textures]
    end
```

### 1. `@iphone17pro-lp/engine-core` (The Brain)
**Role:** The single source of truth for the application state and business rules.
- **Framework Agnostic:** Zero dependencies on React or Three.js (except math types).
- **State Management:** XState machines define the possible states of the iPhone (e.g., `ViewingColors`, `ExploringCamera`, `StorageSelection`).
- **Internationalization:** Contains all text and translation logic.

### 2. `@iphone17pro-lp/engine-react` (The View)
**Role:** The visual runtime. It translates state into pixels.
- **Tech Stack:** React 19, R3F v9, WebGPURenderer, TailwindCSS v4.
- **Architecture Pattern: The Single Persistent Actor**
  - We do not destroy/recreate the iPhone model between sections.
  - A single `IphoneActor` component exists in the canvas.
  - It listens to state changes from `engine-core` and transitions properties (rotation, material states, lighting) smoothly.
- **TSL Implementation:** All shaders are written in TypeScript using TSL nodes, enabling runtime compilation for WebGPU.

### 3. `@iphone17pro-lp/engine-assets` (The Resources)
**Role:** Passive storage for heavy assets.
- **Workflow:**
  1.  **Blender:** Used for modeling and defining "Placeholders" (e.g., a mesh named `Screen_Glass`).
  2.  **Export:** GLB (Draco Compressed).
  3.  **Runtime:** `engine-react` loads the GLB, finds `Screen_Glass`, and replaces its material with a high-fidelity `GlassNodeMaterial` defined in TSL.

## 🔄 Data Flow

1.  **Input:** User scrolls or clicks a UI button in `engine-react`.
2.  **Dispatch:** An action is sent to the `engine-core` State Machine (e.g., `Events.SELECT_COLOR`).
3.  **Transition:** The Machine updates its context (e.g., `context.color = 'titanium-blue'`).
4.  **Reaction:**
    - The UI updates the text description.
    - The 3D Scene detects the change.
    - The `IphoneActor` triggers a GSAP animation to interpolate the `colorNode` of the TSL material.

## 🛠️ Build & Tooling

- **Workspace Manager:** NPM Workspaces.
- **Linting:** ESLint v9 Flat Config (Strict).
- **Bundling:**
  - `engine-core`: `tsc` (Outputs ESM).
  - `engine-react`: `vite` (WebGPU optimized build).
