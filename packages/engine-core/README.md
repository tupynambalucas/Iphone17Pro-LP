# 🧠 @iphone17pro-lp/engine-core

The "Brain" of the iPhone 17 Pro Landing Page.

## 🎯 Purpose

To provide a **framework-agnostic**, **strictly typed**, and **testable** foundation for the application. This package defines *what* the iPhone is doing, not *how* it looks.

## 📦 Key Exports

- **`state/` (XState)**:
  - `iphone.machine.ts`: The central state machine controlling the user journey (e.g., `intro` -> `colors` -> `camera`).
- **`constants/`**:
  - Physical constants (dimensions, weight).
  - Animation timings and easing curves (math only).
- **`locales/`**:
  - i18n dictionaries for all text content.
- **`types/`**:
  - Shared interfaces used by both Core and React (e.g., `IPhoneColor`, `ICameraSpecs`).

## 🚫 Constraints

1.  **No React**: `import React` is forbidden.
2.  **No Three.js (Rendering)**: `import { Mesh }` is forbidden. `import { Vector3 }` (Math) is allowed if necessary, but preferred to keep it pure TS.
3.  **Strict Mode**: `strict: true` in `tsconfig.json` is non-negotiable. Explicit return types are required.
