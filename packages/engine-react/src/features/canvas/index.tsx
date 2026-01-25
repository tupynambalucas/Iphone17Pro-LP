import * as THREE from 'three/webgpu';
import { Canvas, extend, type CanvasProps } from '@react-three/fiber';
import Iphone from './components/Iphone';
extend(THREE as unknown as Record<string, new (...args: unknown[]) => unknown>);

function IphoneCanvas() {
  const glConfig: CanvasProps['gl'] = async ({ canvas }) => {
    const renderer = new THREE.WebGPURenderer({
      canvas,
      antialias: true,
      alpha: true,
    });

    // É OBRIGATÓRIO aguardar a inicialização do backend WebGPU
    await renderer.init();

    return renderer as unknown as THREE.Renderer;
  };

  return (
    <Canvas gl={glConfig}>
      <ambientLight intensity={30} />
      <Iphone position={[0, 0, 4.5]} rotation={[0, 0, 0]} />
    </Canvas>
  );
}

export default IphoneCanvas;
