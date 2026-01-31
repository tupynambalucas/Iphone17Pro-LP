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

declare module 'three/tsl' {
  import { Node, ColorNode, FloatNode, Vec2Node } from 'three/webgpu';

  export interface TSLNode extends Node {
    mul(val: any): TSLNode;
    add(val: any): TSLNode;
  }

  export function color(c: string | number): ColorNode;
  export function float(n: number): FloatNode;
  export function uv(): Vec2Node;
  export function vec2(x: number, y: number): Vec2Node;
  export function mix(a: any, b: any, c: any): TSLNode;
  export function noise(node: Node): TSLNode;
}

declare module 'three/webgpu' {
  import { MeshPhysicalMaterial } from 'three';
  export class MeshPhysicalNodeMaterial extends MeshPhysicalMaterial {
    colorNode: any;
    roughnessNode: any;
    metalnessNode: any;
    normalNode: any;
    anisotropyNode: any;
  }
  // Exportamos os tipos base para uso no tsl
  export interface Node {}
  export interface ColorNode extends Node {}
  export interface FloatNode extends Node {}
  export interface Vec2Node extends Node {}
}

declare module 'three/nodes' {
  export * from 'three/tsl';
}
