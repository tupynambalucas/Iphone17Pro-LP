# 🎨 Style Guide & Coding Standards

This guide defines the coding standards for the **iPhone 17 Pro Landing Page** project. It is directly derived from the strict rules configured in our `eslint.config.ts`.

## 🛡️ TypeScript & Typing (Rigorous)

Type safety is our number one priority to prevent runtime bugs.

- **ZERO `any`**: The use of `any` is strictly prohibited (`@typescript-eslint/no-explicit-any`).
  - *Alternative:* Use `unknown` with type guards or define the correct interface.
- **Explicit Return Types**:
  - In `@iphone17pro-lp/engine-core`: **Mandatory** for all exported functions (`explicit-module-boundary-types`).
  - In `@iphone17pro-lp/engine-react`: Recommended, but inference is accepted for simple components.
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
    *   *Example:* `iphone.base.model.tsx` only renders the GLB. Animation logic is handled in hooks like `features/canvas/components/Iphone/hooks/iphone.animations.ts`. They should not be mixed.
2.  **O - Open/Closed Principle**: Components should be open for extension (via props/composition) but closed for modification.
    *   *Rule:* Don't add `if (isFeatureX)` inside a generic component. Create a specialized wrapper or use composition.
3.  **L - Liskov Substitution**: (More applicable to classes, but for React types): Sub-components should satisfy the props contract of their parents.
4.  **I - Interface Segregation**: Props interfaces should be specific. Don't pass the entire `User` object if a component only needs `avatarUrl`.
5.  **D - Dependency Inversion**: High-level modules (features) should not depend on low-level modules directly; they should depend on abstractions (hooks/contexts).

## 📂 File Structure (Feature-Sliced)

We follow a feature-sliced structure, NOT "technology-driven" (no broad `components/` or `hooks/` folders unless global).

- **`src/features/canvas/`**: **The 3D "Stage"**.
  - Contains the main `<Canvas>` element, lighting, and all 3D components.
  - The iPhone model itself lives in `src/features/canvas/components/Iphone/`.
- **`src/features/ui/`**: **The 2D "UI Layer"**.
  - Contains the landing page sections (Hero, Camera, etc.) built with HTML.
  - These components *orchestrate* the 3D scene by updating state, but do not render 3D elements directly.

## ⚛️ React & R3F (Engine-React)

- **Functional Components**: Only functional components.
- **Hooks Rules**:
  - `useEffect` and `useCallback` dependencies must be exhaustive (`react-hooks/exhaustive-deps`).
  - Never call Hooks conditionally.
- **Props**:
  - Avoid passing object literals directly to optimized component props (`<MemoizedComponent obj={{}} />`) to prevent unnecessary re-renders.
- **State**:
  - **Local UI**: Use `useState`.
  - **Global/Complex**: Use **Zustand** or **XState** (via `@iphone17pro-lp/engine-core`).
- **R3F Props**: Our ESLint configuration allows for non-standard React props common in R3F (e.g., `attach`, `args`, `rotation-x`). See `eslint.config.ts` for the full list under `react/no-unknown-property`.

## 🧠 Core Logic (Engine-Core)

- **Purity**: Functions in `engine-core` should be, whenever possible, pure and testable.
- **Framework Agnostic**: The `core` must not depend on `react`, `three.js` (except for math types if necessary), or the DOM. It should contain only business logic and state machines.

## 🧹 Code Quality

- **Console Logs**: Prohibited in production (`no-console`). Use a custom logger if necessary.
- **Promises**: Floating promises (without `await` or `.catch`) are prohibited (`no-floating-promises`).
- **Comparison**: Always use triple equals `===` (`eqeqeq`).

## 📂 File Naming

- **Files**: `kebab-case.ts` (e.g., `iphone-animations.ts`).
- **React Components**: `PascalCase.tsx` (e.g., `HeroSection.tsx`).
- **Hooks**: `useCamelCase.ts` (e.g., `useScrollAnimation.ts`).

## 🔍 ESLint Highlights

Our config applies "Production Grade" rules:
- `@typescript-eslint/await-thenable`: Ensures you only await real promises.
- `@typescript-eslint/no-unsafe-*`: Blocks unsafe operations that bypass the type system.