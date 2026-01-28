# 🍎 iPhone 17 Pro Landing Page

Welcome to the **iPhone 17 Pro Landing Page** project repository. This is a high-fidelity visual project focused on recreating the Apple presentation experience using modern web technologies and real-time 3D.

## 📚 Overview

The project is a **Monorepo** organized to clearly separate business logic from the visual presentation layer.

### Workspaces

| Package | Path | Description |
| :--- | :--- | :--- |
| **`@iphone17pro-lp/engine-core`** | [`packages/engine-core`](packages/engine-core) | Business logic, XState, Types, and Constants. |
| **`@iphone17pro-lp/engine-react`** | [`packages/engine-react`](packages/engine-react) | Frontend, 3D Scene (R3F), UI, and Vite. |
| **`@iphone17pro-lp/engine-assets`**| [`packages/engine-assets`](packages/engine-assets) | 3D Models, Textures, and original Shaders. |

## 🛠️ Installation & Setup

This project uses **NPM Workspaces**.

1.  **Prerequisites**: Node.js v20+ installed.
2.  **Install dependencies**:
    ```bash
    npm install
    ```
    *This will install dependencies for all packages and link the workspaces.*

## 💻 Main Commands

Run from the project root:

- **Development (Frontend)**:
  ```bash
  npm run dev:frontend
  # Starts Vite in packages/engine-react
  ```

- **General Build**:
  ```bash
  npm run build -w @iphone17pro-lp/engine-core
  npm run build -w @iphone17pro-lp/engine-react
  ```

- **Linting**:
  ```bash
  npm run lint
  ```

## 📖 Documentation

- [Project Architecture](docs/ARCHITECTURE.md)
- [Style Guide & Standards](.gemini/STYLEGUIDE.md)

## 🤖 Automation & AI

This project is configured with the Gemini CLI (`.gemini/`) and features GitHub Actions integration for:
- Automatic Code Review (`gemini-review`).
- Issue Triage (`gemini-triage`).

---
*Project developed with React, Three.js, and ❤️.*