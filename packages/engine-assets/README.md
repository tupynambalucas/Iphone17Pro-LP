# 📦 @iphone17pro-lp/engine-assets

The central repository for static assets. This package acts as the "Content Delivery Network" for the local monorepo.

## 📂 Structure

- **`src/models/`**:
  - `blender/`: Source `.blend` files.
    - **Strategy**: Use Blender for **Geometry** and **Layout**. Do not spend time creating complex Shader Node materials in Blender that won't export.
    - **Naming**: Name meshes clearly (e.g., `Lens_Glass`, `Frame_Titanium`). These names are keys used by `engine-react` to attach TSL materials.
  - `gltf/`: Exported `.glb` files.
    - **Optimization**: Must use Draco Compression.
- **`src/textures/`**: High-resolution maps (4k/8k).
  - **Color Space**: Ensure textures are saved in the correct color space.

## 🚀 Integration

This package is consumed by `engine-react`.
- **Development**: Files are served directly or imported.
- **Production**: Assets are copied to the public/dist folder of the frontend.

## ⚠️ Large File Storage

Binary files (`.blend`, `.glb`, `.png`) should be tracked with **Git LFS** to avoid bloating the repository history.
