import type { ThreeElements as CoreThreeElements } from '@react-three/fiber';
import type * as THREE from 'three/webgpu';

declare module '@react-three/fiber' {
  interface ThreeElements extends CoreThreeElements {
    // Mantemos apenas os NodeMaterials do WebGPU que não vêm por padrão no Core
    meshBasicNodeMaterial: CoreThreeElements['meshBasicMaterial'];
    meshStandardNodeMaterial: CoreThreeElements['meshStandardMaterial'];
  }

  // Se o seu R3F v9 já tiver a tipagem correta de gl, você pode remover isso.
  // Caso contrário, mantenha para suportar o WebGPURenderer assíncrono.
  interface CanvasProps {
    gl?: (props: { canvas: HTMLCanvasElement }) => Promise<THREE.Renderer> | THREE.Renderer;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements extends CoreThreeElements {
      meshBasicNodeMaterial: any;
      meshStandardNodeMaterial: any;
    }
  }
}
