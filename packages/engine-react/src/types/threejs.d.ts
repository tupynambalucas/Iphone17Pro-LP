import type { ThreeElements as CoreThreeElements } from '@react-three/fiber'
import type * as THREE from 'three/webgpu'

declare module '@react-three/fiber' {
  interface ThreeElements extends CoreThreeElements {
    // Extend ThreeElements here for custom elements or WebGPU-specific types if needed in the future
  }
}

// This re-declares the JSX namespace to include the augmented ThreeElements.
// It's the officially recommended way for R3F v9.
declare global {
  namespace JSX {
    interface IntrinsicElements extends CoreThreeElements {}
  }
}
