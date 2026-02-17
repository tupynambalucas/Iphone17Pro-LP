# Material: Sapphire Crystal

This TSL material simulates the sapphire crystal used for the dedicated camera button. It is similar to the glass material but uses a higher `ior` (Index of Refraction) to capture the unique brilliance and light-bending properties of sapphire.

## TSL Code

Create a file at `packages/engine-react/src/features/canvas/components/Iphone/materials/sapphire.material.ts`

```typescript
import { MeshPhysicalNodeMaterial, float } from 'three/tsl';

// 1. Define the Material with physical properties for sapphire
export const SapphireMaterial = new MeshPhysicalNodeMaterial({
  // Core Properties
  transmission: 1.0,  // Fully transparent
  roughness: 0.01,    // Almost perfectly smooth, with slight imperfections
  metalness: 0.0,     // Non-metallic

  // Physical Accuracy for Sapphire
  ior: 1.77,          // Index of Refraction for sapphire is higher than glass
  thickness: 1.0,     // Represents the volume of the crystal

  // Aesthetics for a brilliant, gem-like appearance
  clearcoat: 1.0,
  clearcoatRoughness: 0.0,
  sheen: 0.2,
  specularIntensity: 1.0, // Maximize specular highlights
});
```
