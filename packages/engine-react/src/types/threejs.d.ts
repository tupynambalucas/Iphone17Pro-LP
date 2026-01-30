import type { ThreeElements as CoreThreeElements } from '@react-three/fiber';
import type * as THREE from 'three/webgpu';

declare module '@react-three/fiber' {
  interface ThreeElements extends CoreThreeElements {
    meshBasicNodeMaterial: CoreThreeElements['meshBasicMaterial'];
    meshStandardNodeMaterial: CoreThreeElements['meshStandardMaterial'];
  }

  interface CanvasProps {
    gl?: (props: { canvas: HTMLCanvasElement }) => Promise<THREE.Renderer> | THREE.Renderer;
  }
}

declare global {
  type GLTFAction = THREE.AnimationClip;
  namespace JSX {
    interface IntrinsicElements extends CoreThreeElements {
      meshBasicNodeMaterial: any;
      meshStandardNodeMaterial: any;
    }
  }
}

declare module 'three/webgpu';
declare module 'three/tsl';
declare module 'three/nodes';
