import { MeshPhysicalNodeMaterial } from 'three/webgpu';
import { color, float, uv, vec2, mix, noise } from 'three/tsl'; // noise agora importado daqui

/**
 * Material de Alumínio com tipagem explícita.
 */
export const AluminumMaterial = new MeshPhysicalNodeMaterial({
  name: 'AluminumMaterial',
  metalness: 1.0,
  roughness: 0.15,
});

// 1. Escala do ruído
const noiseScale = vec2(200.0, 200.0);
const scaledUV = uv().mul(noiseScale);

// 2. Ruído procedural
// Com o .d.ts atualizado, metalNoise não será mais 'any'
const metalNoise = noise(scaledUV);

// 3. Aplicação nos nós
AluminumMaterial.colorNode = mix(color('#8a8a8a'), color('#b0b0b0'), metalNoise.mul(0.05));

const grainIntensity = float(0.1);
AluminumMaterial.roughnessNode = mix(float(0.15), float(0.25), metalNoise.mul(grainIntensity));

// Metalness como Node
AluminumMaterial.metalnessNode = float(1.0);
