# 🧠 @iphone17pro-lp/engine-core

The "brain" of the application. This package contains all business logic, complex state management, constants, and type definitions that are agnostic to the view layer.

## 🎯 Objective

Centralize logic to ensure product business rules (iPhone 17 Pro) are consistent and testable, regardless of how they are rendered (Web, Mobile, CLI, etc.).

## 🛠️ Tech Stack

- **TypeScript**: Strict typing.
- **XState**: Finite state machines for complex flows (e.g., Entrance Animation, Color Selection, Storage Configuration).

## 📦 Main Modules

- **`state/`**: State Machine definitions (XState).
  - `iphone.state.ts`: Controls the current model state (selected color, rotation, zoom).
- **`constants/`**: Immutable values.
  - `camera.constants.ts`: Camera positions for different breakpoints.
  - `physics.constants.ts`: Physics configurations (if applicable).
- **`types/`**: Shared TypeScript type definitions.
- **`locales/`**: Translation strings and text data.

## 🏗️ Build & Development

This package is compiled using `tsc`.

```bash
# Install dependencies
npm install

# Build (Generates /dist folder)
npm run build

# Development (Watch mode)
npm run dev
```

## 🤝 Integration

This package is consumed by `@packages/engine-react`. In development mode, `engine-react` uses an alias to read directly from `src/`, allowing instant feedback.