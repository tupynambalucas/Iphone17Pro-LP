import { MeshPhysicalNodeMaterial } from 'three/webgpu';
import { color, float, uv, vec2, mix, mx_noise_vec3 } from 'three/tsl';
import type { Node } from 'three/tsl';

/**
 * Aluminum Material for iPhone 17 Pro.
 * Uses TSL (Three Shading Language) for procedural grain and anodized finish.
 */
export const AluminumMaterial = new MeshPhysicalNodeMaterial({
  name: 'AluminumMaterial',
  metalness: 1.0, // Base PBR property
  roughness: 0.2, // Base PBR property
});

// --- Procedural TSL Logic ---

// 1. Noise Scale: Controls the density of the aluminum grain
const noiseScale: Node = vec2(200.0, 200.0);
const scaledUV: Node = uv().mul(noiseScale);

// 2. Procedural Noise
// We use noise to simulate the micro-surface texture of anodized aluminum
const metalNoise: Node = mx_noise_vec3(scaledUV);

// 3. Color Mixing
// Mix between two shades of silver based on the noise for a subtle metallic shimmer
const baseColor = color('#8a8a8a');
const accentColor = color('#b0b0b0');
const colorVariation = metalNoise.mul(0.05);

AluminumMaterial.colorNode = mix(baseColor, accentColor, colorVariation);

// 4. Roughness Variation
// Procedural roughness gives it a more realistic, non-uniform finish
const minRoughness = float(0.15);
const maxRoughness = float(0.25);
const roughnessIntensity = float(0.1);

AluminumMaterial.roughnessNode = mix(
  minRoughness,
  maxRoughness,
  metalNoise.mul(roughnessIntensity),
);

// 5. Metalness
// Ensure it's fully metallic at the node level as well
AluminumMaterial.metalnessNode = float(1.0);
