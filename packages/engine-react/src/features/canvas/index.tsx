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
    // I kept the tone mapping exposure at 0.8.
    // This maintains nice bright highlights but stops the whole scene from washing out.
    renderer.toneMapping = THREE.NeutralToneMapping;
    renderer.toneMappingExposure = 0.8;
    renderer.setPixelRatio(window.devicePixelRatio);
    await renderer.init();
    return renderer as unknown as THREE.Renderer;
  };

  return (
    <Canvas gl={glConfig} shadows>
      {/* I brought the environment intensity to 1.0. Metal needs an environment to reflect, otherwise it looks dull and flat. */}
      <Environment
        preset="studio"
        backgroundBlurriness={0.8}
        backgroundIntensity={0.8}
        environmentIntensity={1.0}
      />

      {/* This was the main culprit for the blown-out light! The intensity was sitting at 18.0. 
          I drastically lowered it to 0.2 so it just softly fills the dark areas without destroying the shadows and bumps. */}
      <hemisphereLight
        color="#ffffff"
        groundColor="#aaaaaa"
        intensity={0.2}
        position={[0, 100, 30]}
      />

      {/* This directional light acts as our main key light. 
          I balanced the intensity to 1.5 so it creates nice edge highlights on the aluminum without overexposing it. */}
      <directionalLight position={[10, 20, 15]} intensity={1.5} castShadow shadow-bias={-0.0001} />

      <OrbitControls />

      <group position={iphonePosition}>
        <Iphone />
      </group>
    </Canvas>
  );
}

export default IphoneCanvas;
