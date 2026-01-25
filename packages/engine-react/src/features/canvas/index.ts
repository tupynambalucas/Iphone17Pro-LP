import * as THREE from 'three/webgpu'
import * as TSL from 'three/tsl'
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber'

extend(THREE as any)

export default () => (
  <Canvas
    gl={async (props) => {
      const renderer = new THREE.WebGPURenderer(props as any)
      await renderer.init()
      return renderer
    }}>
      <mesh>
        <meshBasicNodeMaterial />
        <boxGeometry />
      </mesh>
  </Canvas>
)