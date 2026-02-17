# Material: Screen Glass (Ceramic Shield)

This TSL material simulates the "Ceramic Shield 2" glass used on the screen and back of the iPhone 17 Pro.

It's a `MeshPhysicalNodeMaterial` configured for high transparency and reflectivity, with physical properties like `ior` (Index of Refraction) set to create a realistic, high-quality glass effect suitable for WebGPU rendering.

## TSL Code

Create a file at `packages/engine-react/src/features/canvas/components/Iphone/materials/glass.material.ts`

```typescript
import { MeshPhysicalNodeMaterial, float } from 'three/tsl';

// 1. Define the Material with physical properties for glass
export const GlassMaterial = new MeshPhysicalNodeMaterial({
  // Core Glass Properties
  transmission: 1.0,  // Fully transparent
  roughness: 0.0,     // Perfectly smooth
  metalness: 0.0,     // Non-metallic

  // Physical Accuracy
  ior: 1.5,           // Index of Refraction for typical glass
  thickness: 1.5,     // Represents the volume of the glass for accurate refraction

  // Aesthetics
  clearcoat: 1.0,         // A secondary reflective layer for a polished look
  clearcoatRoughness: 0.0, // Perfectly smooth clearcoat
  sheen: 0.1,             // Subtle sheen for edge-on viewing angles
});

// You can further refine this by adding a `specularColorNode` or `sheenColorNode`
// For example, to tint the reflections slightly.
```
