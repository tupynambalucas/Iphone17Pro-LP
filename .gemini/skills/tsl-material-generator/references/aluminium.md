# Material: Aerospace-Grade Aluminum

This TSL material simulates the "Aerospace-Grade Hot-Forged Aluminum" of the iPhone 17 Pro chassis. It uses a high metalness value and subtle procedural noise on the roughness map to create a realistic, high-performance look.

This follows the "Proceduralism First" principle, avoiding the need for a separate roughness texture.

## TSL Code

Create a file at `packages/engine-react/src/features/canvas/components/Iphone/materials/aluminium.material.ts`

```typescript
import {
  MeshPhysicalNodeMaterial,
  float,
  uv,
  vec2,
  mix,
  mx_noise_vec3,
} from 'three/tsl';

// 1. Define the Material with base physical properties
export const AluminumMaterial = new MeshPhysicalNodeMaterial({
  metalness: 0.95, // Very high metalness for a conductive look
  roughness: 0.2,  // A base roughness for a semi-matte finish
});

// 2. Define the Procedural Logic (The Graph)
// We use noise to simulate the micro-surface variations of forged aluminum.
// This adds realism without needing a texture map.
const scaledUV = uv().mul(vec2(250.0, 250.0));
const metalNoise = mx_noise_vec3(scaledUV);

// 3. Assign Nodes to Material Properties
// The base color will be set by the color references. Here we just prepare the roughness.
const minRoughness = float(0.18);
const maxRoughness = float(0.3);

// Mix between min and max roughness based on the noise pattern
AluminumMaterial.roughnessNode = mix(minRoughness, maxRoughness, metalNoise.x);

```
