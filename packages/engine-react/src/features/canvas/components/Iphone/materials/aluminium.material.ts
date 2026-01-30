import { MeshPhysicalNodeMaterial } from 'three/webgpu';
import { color, float, uv, vec2, mix } from 'three/tsl';
// O noise geralmente reside no entry point de nodes
import { noise } from 'three/nodes';

/**
 * Material de Alumínio com tipagem explícita para satisfazer o ESLint.
 * Definimos como MeshPhysicalNodeMaterial para liberar o acesso às propriedades Node.
 */
export const AluminumMaterial: MeshPhysicalNodeMaterial = new MeshPhysicalNodeMaterial({
  name: 'AluminumMaterial',
  metalness: 1.0,
  roughness: 0.15,
});

// 1. Escala do ruído
const noiseScale = vec2(200.0, 200.0);
const scaledUV = uv().mul(noiseScale);

// 2. Ruído procedural (agora com tipo Node reconhecido)
const metalNoise = noise(scaledUV);

// 3. Aplicação nos nós
// O uso de color() e mix() garante que estamos trabalhando com Nodes de TSL
AluminumMaterial.colorNode = mix(color('#8a8a8a'), color('#b0b0b0'), metalNoise.mul(0.05));

const grainIntensity = float(0.1);
AluminumMaterial.roughnessNode = mix(float(0.15), float(0.25), metalNoise.mul(grainIntensity));

// Metalness como Node
AluminumMaterial.metalnessNode = float(1.0);
