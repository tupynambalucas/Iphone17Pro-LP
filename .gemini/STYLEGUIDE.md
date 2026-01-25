# 🎨 Style Guide & Coding Standards

This guide defines the coding standards for the **iPhone 17 Pro Landing Page** project. It is directly derived from the strict rules configured in our `eslint.config.ts`.

## 🛡️ TypeScript & Typing (Rigorous)

Type safety is our number one priority to prevent runtime bugs.

- **ZERO `any`**: The use of `any` is strictly prohibited (`@typescript-eslint/no-explicit-any`).
  - *Alternative:* Use `unknown` with type guards or define the correct interface.
- **Explicit Return Types**:
  - In `@packages/engine-core`: **Mandatory** for all exported functions (`explicit-module-boundary-types`).
  - In `@packages/engine-react`: Recommended, but inference is accepted for simple components.
- **Type Imports**: Always separate type imports from value imports.
  ```typescript
  // ✅ Correct
  import type { IState } from './types';
  import { constants } from './constants';
  
  // ❌ Incorrect
  import { IState, constants } from './types';
  ```
- **Null Safety**:
  - Use Optional Chaining (`?.`) and Nullish Coalescing (`??`) preferentially (`prefer-optional-chain`, `prefer-nullish-coalescing`).
  - Avoid non-null assertions (`!`) unless strictly necessary.

## 🏗️ SOLID Principles & Architecture

Adherence to **SOLID** principles is mandatory to maintain scalability.

1.  **S - Single Responsibility Principle**: Each component or hook must do ONE thing.
    *   *Example:* `IphoneModel.tsx` only renders the GLB. `IphoneController.tsx` handles the animation logic. They should not be mixed.
2.  **O - Open/Closed Principle**: Components should be open for extension (via props/composition) but closed for modification.
    *   *Rule:* Don't add `if (isFeatureX)` inside a generic component. Create a specialized wrapper or use composition.
3.  **L - Liskov Substitution**: (More applicable to classes, but for React types): Sub-components should satisfy the props contract of their parents.
4.  **I - Interface Segregation**: Props interfaces should be specific. Don't pass the entire `User` object if a component only needs `avatarUrl`.
5.  **D - Dependency Inversion**: High-level modules (features) should not depend on low-level modules directly; they should depend on abstractions (hooks/contexts).

## 📂 File Structure (Feature-First)

We follow a domain-driven structure, NOT "technology-driven" (no broad `components/` or `hooks/` folders unless global).

- **`src/iphone/`**: **The Core Domain**.
  - Contains the SINGLE instance of the 3D iPhone model.
  - Controls its own materials, mesh logic, and adaptation to global state.
  - *Concept:* The iPhone is a persistent "actor" on the stage.
- **`src/land/`**: **The Context/Scene**.
  - Contains the landing page sections (Hero, Camera, Titanium).
  - Each section *orchestrates* the iPhone's position via state, but doesn't "own" the model.

## ⚛️ React (Engine-React)

- **Functional Components**: Only functional components.
- **Hooks Rules**:
  - `useEffect` and `useCallback` dependencies must be exhaustive (`react-hooks/exhaustive-deps`).
  - Never call Hooks conditionally.
- **Props**:
  - Avoid passing object literals directly to optimized component props to prevent unnecessary re-renders.
- **State**:
  - **Local UI**: Use `useState`.
  - **Global/Complex**: Use **Zustand** or **XState** (via `@packages/engine-core`).

## 🧠 Core Logic (Engine-Core)

- **Purity**: Functions in `engine-core` should be, whenever possible, pure and testable.
- **Framework Agnostic**: The `core` must not depend on `react`, `three.js` (except for math types if necessary), or the DOM. It should contain only business logic and state machines.

## 🧹 Code Quality

- **Console Logs**: Prohibited in production (`no-console`). Use a custom logger if necessary.
- **Promises**: Floating promises (without `await` or `.catch`) are prohibited (`no-floating-promises`).
- **Comparison**: Always use triple equals `===` (`eqeqeq`).

## 📂 File Structure

- **Naming**:
  - Files: `kebab-case.ts` (e.g., `iphone-controller.ts`).
  - React Components: `PascalCase.tsx` (e.g., `HeroSection.tsx`).
  - Hooks: `camelCase.ts` (e.g., `useAnimation.ts`).

## 🔍 ESLint Highlights

Our config applies "Production Grade" rules:
- `@typescript-eslint/await-thenable`: Ensures you only await real promises.
- `@typescript-eslint/no-unsafe-*`: Blocks unsafe operations that bypass the type system.