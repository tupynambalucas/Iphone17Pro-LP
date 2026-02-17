import * as THREE from 'three/webgpu';
import { Canvas, extend, type CanvasProps } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import Iphone from './components/Iphone';

extend(THREE as unknown as Record<string, new (...args: unknown[]) => unknown>);

function IphoneCanvas() {
  const iphonePosition: [number, number, number] = [0, 0, 0];

  const glConfig: CanvasProps['gl'] = async ({ canvas }) => {
    const renderer = new THREE.WebGPURenderer({
      canvas: canvas as unknown as HTMLCanvasElement,
      antialias: true,
      alpha: true,
    });
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.NeutralToneMapping;
    renderer.toneMappingExposure = 0.5;
    renderer.setPixelRatio(window.devicePixelRatio);
    await renderer.init();
    return renderer as unknown as THREE.Renderer;
  };

  return (
    <Canvas gl={glConfig} shadows>
      <Environment
        preset="studio"
        backgroundBlurriness={0}
        backgroundIntensity={0.7}
        environmentIntensity={0.8}
      />
      <ambientLight intensity={1.0} />
      <hemisphereLight
        color="#ffffff"
        groundColor="#ffffff"
        intensity={10.0}
        position={[0, 100, 0]}
      />

      <directionalLight
        position={[0, 0, 1500]}
        intensity={0.1}
        castShadow
        shadow-bias={-0.0001}
        shadow-normalBias={0.05}
        shadow-mapSize={[2048, 2048]}
        target-position={iphonePosition}
      />

      <OrbitControls makeDefault />

      <Iphone position={iphonePosition} rotation={[0, 2.5, 0]} />
    </Canvas>
  );
}

export default IphoneCanvas;
