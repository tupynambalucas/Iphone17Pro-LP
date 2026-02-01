/**
 * @fileoverview This file contains centralized TypeScript declarations for the
 * entire project.
 *
 * @IMPORTANT
 * This file is intentionally verbose and manually declares modules for
 * `three/tsl`, `three/nodes`, and `three/webgpu`. Attempts to simplify this
 * into a more minimal augmentation file have failed due to type resolution
 * issues with this specific version of `three.js` and our project's setup.
 *
 * Do NOT "clean up" or remove these declarations unless you have a proven,
 * alternative strategy for TypeScript module resolution that works at both
 * compile-time and runtime. This file, in its current state, is the stable
 * foundation for our TSL and WebGPU workflow.
 */

/* eslint-disable @typescript-eslint/no-empty-interface */
import * as THREE from 'three';
import type { Object3DNode, MaterialNode } from '@react-three/fiber';
// Important: importing React to ensure this file is treated as a module
// and to bring React types into scope if needed.
import * as React from 'react';

// =============================================================================
// 1. Module Augmentation for @react-three/fiber
// =============================================================================
declare module '@react-three/fiber' {
  interface ThreeElements {
    meshBasicNodeMaterial: MaterialNode<THREE.MeshBasicMaterial, typeof THREE.MeshBasicMaterial>;
    meshStandardNodeMaterial: MaterialNode<THREE.MeshStandardMaterial, typeof THREE.MeshStandardMaterial>;
    meshPhysicalNodeMaterial: MaterialNode<THREE.MeshPhysicalMaterial, typeof THREE.MeshPhysicalMaterial>;
  }
}

// =============================================================================
// 2. Global JSX Intrinsic Elements Augmentation
// =============================================================================
declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshBasicNodeMaterial: Object3DNode<THREE.MeshBasicMaterial, typeof THREE.MeshBasicMaterial>;
      meshStandardNodeMaterial: Object3DNode<THREE.MeshStandardMaterial, typeof THREE.MeshStandardMaterial>;
      meshPhysicalNodeMaterial: Object3DNode<THREE.MeshPhysicalMaterial, typeof THREE.MeshPhysicalMaterial>;
    }
  }
}

// =============================================================================
// 3. Three Shading Language (TSL) Definitions
// =============================================================================
declare module 'three/tsl' {
  export interface Node {
    add(val: Node | number): Node;
    sub(val: Node | number): Node;
    mul(val: Node | number): Node;
    div(val: Node | number): Node;
    mod(val: Node | number): Node;
    pow(val: Node | number): Node;
    
    x: Node; y: Node; z: Node; w: Node;
    r: Node; g: Node; b: Node; a: Node;
    xyz: Node; rgb: Node;
    
    toVar(name?: string): Node;
    clamp(min?: Node | number, max?: Node | number): Node;
    mix(b: Node | number, t: Node | number): Node;
    assign(val: Node | number): Node;
  }

  export interface FloatNode extends Node { _brand: 'float' }
  export interface Vec2Node extends Node { _brand: 'vec2' }
  export interface Vec3Node extends Node { _brand: 'vec3' }
  export interface Vec4Node extends Node { _brand: 'vec4' }
  export interface ColorNode extends Node { _brand: 'color' }

  export function float(val: number | Node): FloatNode;
  export function int(val: number | Node): Node;
  export function uint(val: number | Node): Node;
  export function bool(val: boolean | Node): Node;
  export function vec2(x?: number | Node, y?: number | Node): Vec2Node;
  export function vec3(x?: number | Node, y?: number | Node, z?: number | Node): Vec3Node;
  export function vec4(x?: number | Node, y?: number | Node, z?: number | Node, w?: number | Node): Vec4Node;
  export function color(c: THREE.ColorRepresentation): ColorNode;

  export function uv(index?: number): Vec2Node;
  export function texture(map: THREE.Texture, uvNode?: Node): Vec4Node;
  export function uniform(val: any): Node;
  export function attribute(name: string, type: string): Node;

  export function mix(a: Node | number, b: Node | number, t: Node | number): Node;
  export function smoothstep(edge0: Node | number, edge1: Node | number, x: Node | number): Node;
  export function step(edge: Node | number, x: Node | number): Node;
  export function abs(x: Node | number): Node;
  export function sin(x: Node | number): Node;
  export function cos(x: Node | number): Node;
  export function max(a: Node | number, b: Node | number): Node;
  export function min(a: Node | number, b: Node | number): Node;
  
  export function mx_noise_vec3(coord: Node | number): FloatNode;
  
  export function Fn<T>(fn: (inputs: any) => T): (...args: any[]) => T;
  export function If(condition: Node, thenBlock: () => void): void;
}

// =============================================================================
// 4. WebGPU Materials & Renderer
// =============================================================================
declare module 'three/webgpu' {
  import { Node } from 'three/tsl';

  export class WebGPURenderer extends THREE.Renderer {
    constructor(parameters?: any);
    init(): Promise<void>;
  }

  export class MeshBasicNodeMaterial extends THREE.MeshBasicMaterial {
    constructor(parameters?: THREE.MeshBasicMaterialParameters);
    colorNode?: Node | null;
    opacityNode?: Node | null;
    positionNode?: Node | null;
  }

  export class MeshStandardNodeMaterial extends THREE.MeshStandardMaterial {
    constructor(parameters?: THREE.MeshStandardMaterialParameters);
    colorNode?: Node | null;
    opacityNode?: Node | null;
    roughnessNode?: Node | null;
    metalnessNode?: Node | null;
    normalNode?: Node | null;
    positionNode?: Node | null;
  }

  export class MeshPhysicalNodeMaterial extends THREE.MeshPhysicalMaterial {
    constructor(parameters?: THREE.MeshPhysicalMaterialParameters);
    colorNode?: Node | null;
    opacityNode?: Node | null;
    roughnessNode?: Node | null;
    metalnessNode?: Node | null;
    normalNode?: Node | null;
    clearcoatNode?: Node | null;
    clearcoatRoughnessNode?: Node | null;
    transmissionNode?: Node | null;
    thicknessNode?: Node | null;
    iorNode?: Node | null;
    iridescenceNode?: Node | null;
    anisotropyNode?: Node | null;
    positionNode?: Node | null;
  }
    
  export * from 'three';
}

declare module 'three/nodes' {
  export * from 'three/tsl';
}
