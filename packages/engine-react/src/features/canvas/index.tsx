import * as THREE from 'three/webgpu';
import { Canvas, extend, type CanvasProps } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Iphone from './components/Iphone';

extend(THREE as unknown as Record<string, new (...args: unknown[]) => unknown>);

function IphoneCanvas() {
  const iphonePosition: [number, number, number] = [0, 0, 0];

  const glConfig: CanvasProps['gl'] = async ({ canvas }) => {
    const renderer = new THREE.WebGPURenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    await renderer.init();
    return renderer as unknown as THREE.Renderer;
  };

  return (
    <Canvas gl={glConfig} shadows>
      <ambientLight intensity={0.5} />

      <directionalLight
        position={[0, 2, 7]}
        intensity={2}
        castShadow
        target-position={iphonePosition}
      />

      <OrbitControls makeDefault />

      <Iphone position={iphonePosition} rotation={[0, 2.5, 0]} />
    </Canvas>
  );
}

export default IphoneCanvas;
