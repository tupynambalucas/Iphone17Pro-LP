---
name: tsl-material-generator
description: Creates high-fidelity, physically-based TSL (Three Shading Language) materials for React Three Fiber, based on real-world properties of materials like Aluminum, Glass, and Sapphire for the iPhone 17 Pro project.
---

# TSL Material Generator

This skill provides expert-level, physically-based TSL (Three Shading Language) materials for the iPhone 17 Pro project. The materials are designed for the WebGPU pipeline and follow the strict architectural and performance standards of this project.

## Workflow

The process is straightforward:

1.  **Select a Base Material**: Choose from Aluminum, Glass, or Sapphire.
2.  **Get the Code**: Navigate to the corresponding reference file to get the TSL code for the `NodeMaterial`.
3.  **Apply Color (for Aluminum)**: If you are using the aluminum chassis, consult the `colors.md` reference to apply the official product colors.
4.  **Integrate**: Assign the TSL material to the appropriate mesh in your React Three Fiber scene.

---

## 1. Select a Base Material & Get the Code

Each material is defined in its own reference file. They are pre-configured to match the physical properties described in the project's `PRODUCT.md`.

- **For the main chassis:** See `references/aluminium.md`
- **For the screen and back:** See `references/glass.md`
- **For the camera button:** See `references/sapphire.md`

These files contain ready-to-use `MeshPhysicalNodeMaterial` instances.

## 2. Apply Color (for Aluminum)

The iPhone 17 Pro comes in several specific colors. The `references/colors.md` file contains the TSL `color` nodes for each official finish.

After creating your base aluminum material, you can set its color using the nodes from that file.

**Example:**

```typescript
import { AluminumMaterial } from './materials/aluminium.material';
import { CosmicOrangeColor } from './materials/colors.material';

// Set the colorNode of the material
AluminumMaterial.colorNode = CosmicOrangeColor;
```

## 3. Integration into the Scene

Follow the project's "Blender to Web" pipeline:

1.  **Load your GLB model**: Use `useGLTF` from `@react-three/drei`.
2.  **Traverse the scene graph**: Find the meshes by the names you assigned in Blender (e.g., `Frame_Aluminum`, `Screen_Glass`).
3.  **Assign the material**: Set the `.material` property of the mesh to the TSL material instance you've imported.

```tsx
import { useGLTF } from '@react-three/drei';
import { GlassMaterial } from './materials/glass.material';

export function IphoneModel() {
  const { nodes } = useGLTF('path/to/iphone17.glb');

  // Assuming you have a mesh named 'Screen_Glass' in your Blender file
  const screenMesh = nodes.Screen_Glass as THREE.Mesh;

  if (screenMesh) {
    screenMesh.material = GlassMaterial;
  }

  return <primitive object={nodes.Scene} />;
}
```
