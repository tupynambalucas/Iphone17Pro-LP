import type * as THREE from 'three'; // 'import type' resolve o erro do ESLint
import { useGLTF } from '@react-three/drei';
import type { GLTF } from 'three-stdlib';
import modelPath from '@iphone17pro-lp/engine-assets/src/models/iphone17.glb';

type GLTFResult = GLTF & {
  nodes: {
    M_Body_main: THREE.Mesh;
    M_Body_main_1: THREE.Mesh;
    M_Body_main_2: THREE.Mesh;
    M_Body_main_3: THREE.Mesh;
    Body_wire: THREE.Mesh;
    Button: THREE.Mesh;
    Button_wire: THREE.Mesh;
    BackGlass_back: THREE.Mesh;
    BackGlass_glass: THREE.Mesh;
    BackGlass_logo: THREE.Mesh;
    BackCameraTop_back: THREE.Mesh;
    BackCameraTop_front: THREE.Mesh;
    M_BackCameraTop_glass: THREE.Mesh;
    M_BackCameraTop_glass_1: THREE.Mesh;
    M_BackCameraTop_lens: THREE.Mesh;
    M_BackCameraTop_lens_1: THREE.Mesh;
    BackCameraBot_back: THREE.Mesh;
    BackCameraBot_front: THREE.Mesh;
    BackCameraBot_lens: THREE.Mesh;
    M_BackCameraBot_mirror: THREE.Mesh;
    M_BackCameraBot_mirror_1: THREE.Mesh;
    BackCameraCenter_back: THREE.Mesh;
    BackCameraCenter_front: THREE.Mesh;
    M_BackCameraCenter_glass: THREE.Mesh;
    M_BackCameraCenter_glass_1: THREE.Mesh;
    BackCameraCenter_lens: THREE.Mesh;
    M_CameraFront: THREE.Mesh;
    M_CameraFront_1: THREE.Mesh;
    Led_back: THREE.Mesh;
    Led_front: THREE.Mesh;
    Lidar: THREE.Mesh;
    Screen_border: THREE.Mesh;
    Screen_display: THREE.Mesh;
    Screen_glass: THREE.Mesh;
    Screws: THREE.Mesh;
    Speakers: THREE.Mesh;
  };
  materials: {
    Aluminum: THREE.MeshStandardMaterial;
    Camera_filter: THREE.MeshStandardMaterial;
    Metal_Screw: THREE.MeshStandardMaterial;
    Plastic_USB_port: THREE.MeshStandardMaterial;
    Plastic_antena: THREE.MeshStandardMaterial;
    Tint_back_glass: THREE.MeshStandardMaterial;
    Frosted_glass: THREE.MeshStandardMaterial;
    Glass: THREE.MeshStandardMaterial;
    Frame: THREE.MeshStandardMaterial;
    Sapphire_miror: THREE.MeshStandardMaterial;
    Mirror_filter: THREE.MeshStandardMaterial;
    Lens: THREE.MeshStandardMaterial;
    material: THREE.MeshStandardMaterial;
    Plastic_LED: THREE.MeshStandardMaterial;
    Display: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(modelPath) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group name="Body_main" userData={{ name: 'Body_main' }}>
        <mesh
          name="M_Body_main"
          castShadow
          receiveShadow
          geometry={nodes.M_Body_main.geometry}
          material={materials.Aluminum}
        />
        <mesh
          name="M_Body_main_1"
          castShadow
          receiveShadow
          geometry={nodes.M_Body_main_1.geometry}
          material={materials.Camera_filter}
        />
        <mesh
          name="M_Body_main_2"
          castShadow
          receiveShadow
          geometry={nodes.M_Body_main_2.geometry}
          material={materials.Metal_Screw}
        />
        <mesh
          name="M_Body_main_3"
          castShadow
          receiveShadow
          geometry={nodes.M_Body_main_3.geometry}
          material={materials.Plastic_USB_port}
        />
      </group>
      <mesh
        name="Body_wire"
        castShadow
        receiveShadow
        geometry={nodes.Body_wire.geometry}
        material={materials.Plastic_antena}
        userData={{ name: 'Body_wire' }}
      />
      <mesh
        name="Button"
        castShadow
        receiveShadow
        geometry={nodes.Button.geometry}
        material={materials.Tint_back_glass}
        userData={{ name: 'Button' }}
      />
      <mesh
        name="Button_wire"
        castShadow
        receiveShadow
        geometry={nodes.Button_wire.geometry}
        material={materials.Metal_Screw}
        userData={{ name: 'Button_wire' }}
      />
      <group name="BackGlass" userData={{ name: 'BackGlass' }}>
        <mesh
          name="BackGlass_back"
          castShadow
          receiveShadow
          geometry={nodes.BackGlass_back.geometry}
          material={materials.Frosted_glass}
          userData={{ name: 'BackGlass_back' }}
        />
        <mesh
          name="BackGlass_glass"
          castShadow
          receiveShadow
          geometry={nodes.BackGlass_glass.geometry}
          material={materials.Tint_back_glass}
          userData={{ name: 'BackGlass_glass' }}
        />
        <mesh
          name="BackGlass_logo"
          castShadow
          receiveShadow
          geometry={nodes.BackGlass_logo.geometry}
          material={materials.Glass}
          userData={{ name: 'BackGlass_logo' }}
        />
      </group>
      <group name="BackCameraTop" userData={{ name: 'BackCameraTop' }}>
        <mesh
          name="BackCameraTop_back"
          castShadow
          receiveShadow
          geometry={nodes.BackCameraTop_back.geometry}
          material={materials.Camera_filter}
          userData={{ name: 'BackCameraTop_back' }}
        />
        <mesh
          name="BackCameraTop_front"
          castShadow
          receiveShadow
          geometry={nodes.BackCameraTop_front.geometry}
          material={materials.Frame}
          userData={{ name: 'BackCameraTop_front' }}
        />
        <group name="BackCameraTop_glass" userData={{ name: 'BackCameraTop_glass' }}>
          <mesh
            name="M_BackCameraTop_glass"
            castShadow
            receiveShadow
            geometry={nodes.M_BackCameraTop_glass.geometry}
            material={materials.Sapphire_miror}
          />
          <mesh
            name="M_BackCameraTop_glass_1"
            castShadow
            receiveShadow
            geometry={nodes.M_BackCameraTop_glass_1.geometry}
            material={materials.Mirror_filter}
          />
        </group>
        <group name="BackCameraTop_lens" userData={{ name: 'BackCameraTop_lens' }}>
          <mesh
            name="M_BackCameraTop_lens"
            castShadow
            receiveShadow
            geometry={nodes.M_BackCameraTop_lens.geometry}
            material={materials.Sapphire_miror}
          />
          <mesh
            name="M_BackCameraTop_lens_1"
            castShadow
            receiveShadow
            geometry={nodes.M_BackCameraTop_lens_1.geometry}
            material={materials.Lens}
          />
        </group>
      </group>
      <group name="BackCameraBot" userData={{ name: 'BackCameraBot' }}>
        <mesh
          name="BackCameraBot_back"
          castShadow
          receiveShadow
          geometry={nodes.BackCameraBot_back.geometry}
          material={materials.Camera_filter}
          userData={{ name: 'BackCameraBot_back' }}
        />
        <mesh
          name="BackCameraBot_front"
          castShadow
          receiveShadow
          geometry={nodes.BackCameraBot_front.geometry}
          material={materials.Frame}
          userData={{ name: 'BackCameraBot_front' }}
        />
        <mesh
          name="BackCameraBot_lens"
          castShadow
          receiveShadow
          geometry={nodes.BackCameraBot_lens.geometry}
          material={materials.Lens}
          userData={{ name: 'BackCameraBot_lens' }}
        />
        <group name="BackCameraBot_mirror" userData={{ name: 'BackCameraBot_mirror' }}>
          <mesh
            name="M_BackCameraBot_mirror"
            castShadow
            receiveShadow
            geometry={nodes.M_BackCameraBot_mirror.geometry}
            material={materials.Sapphire_miror}
          />
          <mesh
            name="M_BackCameraBot_mirror_1"
            castShadow
            receiveShadow
            geometry={nodes.M_BackCameraBot_mirror_1.geometry}
            material={materials.Mirror_filter}
          />
        </group>
      </group>
      <group name="BackCameraCenter" userData={{ name: 'BackCameraCenter' }}>
        <mesh
          name="BackCameraCenter_back"
          castShadow
          receiveShadow
          geometry={nodes.BackCameraCenter_back.geometry}
          material={materials.Camera_filter}
          userData={{ name: 'BackCameraCenter_back' }}
        />
        <mesh
          name="BackCameraCenter_front"
          castShadow
          receiveShadow
          geometry={nodes.BackCameraCenter_front.geometry}
          material={materials.Frame}
          userData={{ name: 'BackCameraCenter_front' }}
        />
        <group name="BackCameraCenter_glass" userData={{ name: 'BackCameraCenter_glass' }}>
          <mesh
            name="M_BackCameraCenter_glass"
            castShadow
            receiveShadow
            geometry={nodes.M_BackCameraCenter_glass.geometry}
            material={materials.Mirror_filter}
          />
          <mesh
            name="M_BackCameraCenter_glass_1"
            castShadow
            receiveShadow
            geometry={nodes.M_BackCameraCenter_glass_1.geometry}
            material={materials.Sapphire_miror}
          />
        </group>
        <mesh
          name="BackCameraCenter_lens"
          castShadow
          receiveShadow
          geometry={nodes.BackCameraCenter_lens.geometry}
          material={materials.Lens}
          userData={{ name: 'BackCameraCenter_lens' }}
        />
      </group>
      <group name="CameraFront" userData={{ name: 'CameraFront' }}>
        <mesh
          name="M_CameraFront"
          castShadow
          receiveShadow
          geometry={nodes.M_CameraFront.geometry}
          material={materials.Lens}
        />
        <mesh
          name="M_CameraFront_1"
          castShadow
          receiveShadow
          geometry={nodes.M_CameraFront_1.geometry}
          material={materials.Camera_filter}
        />
      </group>
      <group name="Led" userData={{ name: 'Led' }}>
        <mesh
          name="Led_back"
          castShadow
          receiveShadow
          geometry={nodes.Led_back.geometry}
          material={materials.material}
          userData={{ name: 'Led_back' }}
        />
        <mesh
          name="Led_front"
          castShadow
          receiveShadow
          geometry={nodes.Led_front.geometry}
          material={materials.Plastic_LED}
          userData={{ name: 'Led_front' }}
        />
      </group>
      <mesh
        name="Lidar"
        castShadow
        receiveShadow
        geometry={nodes.Lidar.geometry}
        material={materials.Frame}
        userData={{ name: 'Lidar' }}
      />
      <group name="Screen" userData={{ name: 'Screen' }}>
        <mesh
          name="Screen_border"
          castShadow
          receiveShadow
          geometry={nodes.Screen_border.geometry}
          material={materials.Frame}
          userData={{ name: 'Screen_border' }}
        />
        <mesh
          name="Screen_display"
          castShadow
          receiveShadow
          geometry={nodes.Screen_display.geometry}
          material={materials.Display}
          userData={{ name: 'Screen_display' }}
        />
        <mesh
          name="Screen_glass"
          castShadow
          receiveShadow
          geometry={nodes.Screen_glass.geometry}
          material={materials.Glass}
          userData={{ name: 'Screen_glass' }}
        />
      </group>
      <mesh
        name="Screws"
        castShadow
        receiveShadow
        geometry={nodes.Screws.geometry}
        material={materials.Metal_Screw}
        userData={{ name: 'Screws' }}
      />
      <mesh
        name="Speakers"
        castShadow
        receiveShadow
        geometry={nodes.Speakers.geometry}
        material={materials.Metal_Screw}
        userData={{ name: 'Speakers' }}
      />
    </group>
  );
}

useGLTF.preload(modelPath);
