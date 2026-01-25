import * as THREE from 'three/webgpu';
import * as TSL from 'three/tsl';
import { Canvas, extend, type CanvasProps } from '@react-three/fiber';

extend(THREE as any);

function IphoneCanvas() {
  const glConfig: CanvasProps['gl'] = (canvas) => {
    return new THREE.WebGPURenderer({ canvas, antialias: true, alpha: true });
  };

  return (
    <Canvas gl={glConfig}>
      <mesh>
        <meshBasicNodeMaterial />
        <boxGeometry />
      </mesh>
    </Canvas>
  );
}

export default IphoneCanvas;