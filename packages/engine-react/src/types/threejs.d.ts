import type { ThreeElements as CoreThreeElements } from '@react-three/fiber';
import type * as THREE from 'three/webgpu';

declare module '@react-three/fiber' {
  interface ThreeElements extends CoreThreeElements {
    meshBasicNodeMaterial: CoreThreeElements['meshBasicMaterial'];
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements extends CoreThreeElements {
      meshBasicNodeMaterial: any;
    }
  }
}
