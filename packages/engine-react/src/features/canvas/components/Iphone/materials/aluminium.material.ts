import { MeshPhysicalNodeMaterial } from 'three/webgpu';
import { color, float, uv, mx_noise_float, add, mul, bumpMap } from 'three/tsl';

/**
 * Aluminum Material for iPhone 17 Pro.
 * Uses TSL (Three Shading Language) for a fine-grained, sandblasted white aluminum finish.
 */
export const AluminumMaterial = new MeshPhysicalNodeMaterial({
  name: 'AluminumMaterial',
  metalness: 0.1, // Sligth metallic hint for the white anodized look
  roughness: 0.6, // Matte finish
  clearcoat: 0.05,
  clearcoatRoughness: 0.1,
});

// --- Procedural TSL Logic ---

// 1. Extreme Fine Grain Scale: High frequency for sand-like appearance
const grainScale = float(2500.0);
const grainUV = uv().mul(grainScale);

// 2. Procedural Fine Grain (Sand Texture)
// file cannot perfectly match the internal 'OperatorNodeParameter' type, causing
// a persistent TS error here despite the runtime being correct. This is a targeted
// suppression to unblock the build.
const grainNoise = mx_noise_float(grainUV);

// 3. Color: Pure White
AluminumMaterial.colorNode = color('#f5f5f5');

// 4. Roughness: Subtle micro-surface variation
AluminumMaterial.roughnessNode = add(0.5, mul(grainNoise, 0.5));

// 5. Bump/Normal Mapping: Creating the "sand" relief
// We use the grain noise to perturb the surface normal via bumpMap
const bumpScale = float(0.1);
AluminumMaterial.normalNode = bumpMap(grainNoise, bumpScale);

// 6. Metalness
AluminumMaterial.metalnessNode = float(0.1);
