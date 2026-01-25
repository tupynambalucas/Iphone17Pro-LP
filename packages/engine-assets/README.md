# 📦 @iphone17pro-lp/engine-assets

This package is the central repository for all digital assets used in the iPhone 17 Pro Landing Page. It serves as the "source of truth" for 3D models, textures, and materials.

## 📂 Structure

- **`src/models/`**: 3D model files.
  - `.blend`: Original Blender files (Editable).
  - `.glb`: Binary files optimized for export and web usage (Draco Compression recommended).
- **`src/textures/`**: Texture maps (Diffuse, Normal, Roughness, Metalness).
- **`src/shaders/`**: Custom Fragment and Vertex shaders (GLSL).

## 🚀 Usage

This package is primarily consumed by `@packages/engine-react`.

### How to add new assets

1.  Place the source file (e.g., `.blend`) in the corresponding folder.
2.  Export the optimized version (`.glb`) to the same folder.
3.  Ensure assets are optimized for web (reduced size, compressed textures).

## ⚠️ Note on Binary Files

Large files like `.blend` and `.glb` are tracked via Git, but using Git LFS (Large File Storage) is recommended if the repository size grows significantly.