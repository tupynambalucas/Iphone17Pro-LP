import * as THREE from 'three/webgpu';
import { Canvas, extend, type CanvasProps } from '@react-three/fiber';

extend(THREE as any);

function IphoneCanvas() {
  const glConfig: CanvasProps['gl'] = ({ canvas }) => {
    return new THREE.WebGPURenderer({
      canvas: canvas as HTMLCanvasElement,
      antialias: true,
      alpha: true,
    }) as unknown as THREE.Renderer;
    // O 'as unknown as' é o padrão profissional para converter tipos
    // incompatíveis de bibliotecas externas sem usar 'any' diretamente.
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
