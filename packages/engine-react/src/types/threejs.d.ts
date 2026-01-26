import type { ThreeElements as CoreThreeElements } from '@react-three/fiber';
import type * as THREE from 'three/webgpu';
import { extend } from '@react-three/fiber';

extend(THREE as unknown as Record<string, new (...args: unknown[]) => unknown>);

declare module '@react-three/fiber' {
  interface ThreeElements extends CoreThreeElements {
    meshBasicNodeMaterial: CoreThreeElements['meshBasicMaterial'];
    meshStandardNodeMaterial: CoreThreeElements['meshStandardMaterial'];
    group: CoreThreeElements['group'];
    mesh: CoreThreeElements['mesh'];
  }

  // Corrigindo a assinatura da prop 'gl' para o R3F v9
  interface CanvasProps {
    gl?: (props: { canvas: HTMLCanvasElement }) => Promise<THREE.Renderer> | THREE.Renderer;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements extends CoreThreeElements {
      meshBasicNodeMaterial: any;
    }
  }
}
