import * as THREE from 'three/webgpu';
import { Canvas, extend, type CanvasProps } from '@react-three/fiber';

// @ts-expect-error - Necessário pois o R3F v9 ainda não mapeia todos os elementos WebGPU nativamente
extend(THREE);

function IphoneCanvas() {
  const glConfig: CanvasProps['gl'] = ({ canvas }) => {
    const renderer = new THREE.WebGPURenderer({
      canvas: canvas as HTMLCanvasElement,
      antialias: true,
      alpha: true,
    });

    /**
     * Para satisfazer a regra 'no-unsafe-return', evitamos o 'as any'.
     * Convertemos para 'unknown' e depois para 'THREE.Renderer' para manter
     * a compatibilidade com a assinatura da prop 'gl' do R3F.
     */
    return renderer as unknown as THREE.Renderer;
  };

  return (
    <Canvas gl={glConfig}>
      <mesh>
        {/* O tipo meshBasicNodeMaterial deve ser declarado no threejs.d.ts para evitar erros aqui */}
        <meshBasicNodeMaterial />
        <boxGeometry />
      </mesh>
    </Canvas>
  );
}

export default IphoneCanvas;
