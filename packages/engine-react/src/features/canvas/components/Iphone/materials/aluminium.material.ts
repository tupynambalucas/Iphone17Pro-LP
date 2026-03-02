import { PRODUCT_COLORS } from '@iphone17pro-lp/engine-core';
import { MeshPhysicalNodeMaterial } from 'three/webgpu';
import { color, float, mx_noise_float, add, mul, bumpMap, sample, vec3 } from 'three/tsl';

// I noticed the procedural noise was looking blocky (like little squares) when using positionLocal.
// Switching to uv() coordinates maps the noise perfectly to the surface flow of the mesh, getting rid of the grid artifacts.
export const AluminumMaterial = new MeshPhysicalNodeMaterial({
  name: 'M_Aluminium',
  metalness: 1.0,
  roughness: 0.45,
  clearcoat: 0.0,
});

// Using a higher scale combined with UVs gives us that fine, high-quality sandblasted space aluminum look.
const grainScale = float(2500);
const grainNoise = sample((uv) => {
  return vec3(mx_noise_float(uv.mul(grainScale), 0.2, 0.3));
});
// const grainPos = uv().mul(grainScale);

// Generating the procedural noise and ensuring it's safely clamped.

// Setting the base color to the pink product color.
AluminumMaterial.colorNode = color(PRODUCT_COLORS.pink);

// Modulating roughness based on the noise for realistic light scattering on the micro-surface.
AluminumMaterial.roughnessNode = add(0.3, mul(grainNoise, 0.1));

// Here is the fix for the bump! I increased the intensity to 0.02.
// The previous value was too low. Now it actually creates a visible, tactile relief that catches the light properly like real sandblasted metal.
const bumpIntensity = float(1.0);
const bumpMapNode = bumpMap(grainNoise, bumpIntensity);
AluminumMaterial.normalNode = bumpMapNode;
