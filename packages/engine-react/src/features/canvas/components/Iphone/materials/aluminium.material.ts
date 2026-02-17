import { MeshPhysicalNodeMaterial } from 'three/webgpu';
import { color, float, uv, mx_noise_float, add, mul, bumpMap } from 'three/tsl';

/**
 * Aluminum Material for iPhone 17 Pro.
 * Uses TSL (Three Shading Language) for a fine-grained, sandblasted white aluminum finish.
 */
export const AluminumMaterial = new MeshPhysicalNodeMaterial({
  name: 'M_Aluminium',
  metalness: 1.0, // Alumínio é condutor, metalness deve ser total
  roughness: 0.4, // Base matte
  clearcoat: 0.02,
  clearcoatRoughness: 0.1,
});

// --- Procedural TSL Logic ---

// 1. Extreme Fine Grain Scale: High frequency for sand-like appearance
const grainScale = float(5000.0);
const grainUV = uv().mul(grainScale);

// 2. Ruído Procedural para Relevo e Rugosidade
const grainNoise = mx_noise_float(grainUV);

// 3. Cor: Branco Alumínio Anodizado (ajustado conforme o print)
AluminumMaterial.colorNode = color('#E5E5E5');

// 4. Rugosidade Dinâmica
// O ruído adiciona variações microscópicas na forma como a luz reflete
AluminumMaterial.roughnessNode = add(0.3, mul(grainNoise, 0.2));

// 5. Aplicação do BUMP MAP (O segredo do relevo)
// O bumpMap do TSL altera a normal da superfície baseando-se no gradiente do ruído
const bumpIntensity = float(0.002); // Valor baixo para ser sutil como no iPhone real
AluminumMaterial.normalNode = bumpMap(grainNoise, bumpIntensity);

// 6. Metalness sutilmente afetado pelo ruído (opcional para realismo)
AluminumMaterial.metalnessNode = add(0.9, mul(grainNoise, 0.2));
