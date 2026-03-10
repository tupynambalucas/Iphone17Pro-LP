import { useState, useEffect, useRef } from 'react';
import * as THREE from 'three/webgpu';
import { Canvas, extend, type CanvasProps } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import Iphone from './components/Iphone';
// Extend R3F to recognize the WebGPU version of THREE.js components.
// This is necessary because R3F's default is WebGL.
extend(THREE as unknown as Record<string, new (...args: unknown[]) => unknown>);

/**
 * The main Game component sets up the rendering environment and the 3D scene.
 * It performs a crucial check for stable WebGPU support and provides a fallback to WebGL if necessary,
 * ensuring the application runs on a wider range of hardware.
 */
function Game() {
  // State to manage the renderer mode: 'pending' (while checking), 'webgpu', or 'webgl'.
  const [rendererMode, setRendererMode] = useState<'pending' | 'webgpu' | 'webgl'>('pending');
  const hasTested = useRef(false);

  useEffect(() => {
    // Ensure the WebGPU test runs only once.
    if (hasTested.current) return;
    hasTested.current = true;

    /**
     * Asynchronously tests for stable WebGPU support.
     * Some drivers (especially on mobile) report WebGPU availability but fail on initial device creation.
     * This "dry run" attempts a minimal WebGPU initialization to confirm stability.
     */
    async function testGPU() {
      // If `navigator.gpu` doesn't exist, fallback directly to WebGL.
      if (!('gpu' in navigator)) {
        setRendererMode('webgl');
        return;
      }

      try {
        // 1. Request a WebGPU adapter from the browser.
        const adapter = await navigator.gpu.requestAdapter();
        if (!adapter) throw new Error('WebGPU adapter unavailable');

        // 2. Request a device from the adapter.
        const device = await adapter.requestDevice();

        // Asynchronously listen for device loss. This is a robust way to catch
        // driver crashes that can occur shortly after initialization.
        const gpuStatus = { isLost: false };
        void device.lost.then(() => {
          gpuStatus.isLost = true;
        });

        // 3. Create a temporary, offscreen canvas to perform a render test.
        const canvas = document.createElement('canvas');
        canvas.style.position = 'absolute';
        canvas.style.opacity = '0';
        document.body.appendChild(canvas);

        const context = canvas.getContext('webgpu');
        if (context) {
          context.configure({
            device,
            format: navigator.gpu.getPreferredCanvasFormat(),
            alphaMode: 'premultiplied',
          });

          // 4. Create and submit a minimal command to the GPU queue.
          // This forces the driver to allocate hardware resources.
          const encoder = device.createCommandEncoder();
          const pass = encoder.beginRenderPass({
            colorAttachments: [
              {
                view: context.getCurrentTexture().createView(),
                clearValue: { r: 0, g: 0, b: 0, a: 0 },
                loadOp: 'clear',
                storeOp: 'store',
              },
            ],
          });
          pass.end();
          device.queue.submit([encoder.finish()]);
        }

        // 5. Wait a short period to see if the device is lost.
        await new Promise((resolve) => setTimeout(resolve, 150));

        // Cleanup the temporary canvas.
        canvas.remove();

        // 6. Check if the device was lost during our test.
        if (gpuStatus.isLost) {
          throw new Error('WebGPU Device Lost (Vulkan Driver Failure)');
        }

        // If everything succeeded, destroy the test device and set mode to 'webgpu'.
        device.destroy();
        console.info('✅ Stable WebGPU. Hardware buffer supported!');
        setRendererMode('webgpu');
      } catch (error) {
        // If any part of the test fails, log the issue and fallback to WebGL.
        console.warn('⚠️ Unstable WebGPU on device. Activating fallback to WebGL2...', error);
        setRendererMode('webgl');
      }
    }

    void testGPU();
  }, []);

  // While the renderer mode is being determined, render nothing.
  if (rendererMode === 'pending') {
    return null;
  }

  // This function configures the renderer for the R3F Canvas.
  // It's asynchronous to support the WebGPURenderer's async `init()` method.
  const glConfig: CanvasProps['gl'] = async ({ canvas }) => {
    const renderer = new THREE.WebGPURenderer({
      canvas: canvas as unknown as HTMLCanvasElement,
      antialias: true,
      alpha: true,
      // Force WebGL renderer if our test decided it was necessary.
      // The WebGPURenderer itself handles the translation of TSL materials.
      forceWebGL: rendererMode === 'webgl',
    });

    // Configure standard rendering properties for high-quality output.
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.NeutralToneMapping;
    renderer.toneMappingExposure = 0.5;
    renderer.setPixelRatio(window.devicePixelRatio);

    // Asynchronously initialize the renderer. This is required for WebGPU.
    await renderer.init();
    return renderer as unknown as THREE.Renderer;
  };

  const iphonePosition: [number, number, number] = [0, 0, 0];
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

      <OrbitControls
        enableDamping={true}
        dampingFactor={0.05}
        minDistance={1}
        maxDistance={20}
        maxPolarAngle={Math.PI / 2}
      />

      <Iphone scale={30} position={iphonePosition} rotation={[0, 0, 0]} />
    </Canvas>
  );
}

export default Game;
