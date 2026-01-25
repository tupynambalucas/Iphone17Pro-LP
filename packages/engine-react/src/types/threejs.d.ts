import type { ThreeElements as CoreThreeElements } from '@react-three/fiber';
import type * as THREE from 'three/webgpu';

declare module '@react-three/fiber' {
  // 1. Estendemos o Renderer para aceitar o WebGPURenderer como válido
  interface CanvasProps {
    gl?: (canvas: HTMLCanvasElement) => THREE.Renderer;
  }

  // 2. Adicionamos os elementos NodeMaterial que o R3F ainda não conhece
  interface ThreeElements extends CoreThreeElements {
    meshBasicNodeMaterial: CoreThreeElements['meshBasicMaterial'];
    // Adicione outros materiais conforme for usando (ex: meshStandardNodeMaterial)
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements extends CoreThreeElements {
      // Garante que o JSX aceite as tags sem erro
      meshBasicNodeMaterial: any;
    }
  }
}
