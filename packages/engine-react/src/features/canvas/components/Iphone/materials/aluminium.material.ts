import { MeshPhysicalNodeMaterial } from 'three/webgpu';
import { color, float, positionLocal, mx_noise_float, add, mul, bumpMap } from 'three/tsl'; //

export const AluminumMaterial = new MeshPhysicalNodeMaterial({
  name: 'M_Aluminium',
  metalness: 1.0,
  roughness: 0.4,
  clearcoat: 0.02,
  clearcoatRoughness: 0.1,
});

const grainScale = float(3000.0);

const grainPos = positionLocal.mul(grainScale);

const grainNoise = mx_noise_float(grainPos);

AluminumMaterial.colorNode = color('#FFB6C1');

AluminumMaterial.roughnessNode = add(0.3, mul(grainNoise, 0.2));

const bumpIntensity = float(0.002);
AluminumMaterial.normalNode = bumpMap(grainNoise, bumpIntensity);

AluminumMaterial.metalnessNode = add(0.9, mul(grainNoise, 0.1));
