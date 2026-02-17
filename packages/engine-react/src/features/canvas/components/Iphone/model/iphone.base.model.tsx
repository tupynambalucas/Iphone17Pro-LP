import * as THREE from 'three';
import React from 'react';
import { useGLTF } from '@react-three/drei';
import { ThreeElements } from '@react-three/fiber';
import { GLTF } from 'three-stdlib';
import modelPath from '@iphone17pro-lp/engine-assets/models/gltf/iphone17.glb';
import { AluminumMaterial } from '../materials/aluminium.material';

type GLTFResult = GLTF & {
  nodes: {
    MSH_Antenna_Bands: THREE.Mesh;
    MSH_Antenna_Window: THREE.Mesh;
    MSH_Button_Action: THREE.Mesh;
    MSH_Button_Camera_Control: THREE.Mesh;
    MSH_Button_Side: THREE.Mesh;
    MSH_Button_Volume_Down: THREE.Mesh;
    MSH_Button_Volume_Up: THREE.Mesh;
    MSH_Camera_Main_Front: THREE.Mesh;
    MSH_Camera_Main_Mirror: THREE.Mesh;
    MSH_Camera_Telephoto_Front: THREE.Mesh;
    MSH_Camera_Telephoto_Mirror: THREE.Mesh;
    MSH_Camera_Wide_Front: THREE.Mesh;
    MSH_Camera_Wide_Mirror: THREE.Mesh;
    MSH_Camera_Plateau_Forged: THREE.Mesh;
    MSH_Camera_Main_Body: THREE.Mesh;
    MSH_Camera_Main_Lens: THREE.Mesh;
    MSH_Camera_Selfie_Attach: THREE.Mesh;
    MSH_Camera_Selfie_Body: THREE.Mesh;
    MSH_Camera_Selfie_Lens: THREE.Mesh;
    MSH_Camera_Selfie_Mirror: THREE.Mesh;
    MSH_Camera_Telephoto_Body: THREE.Mesh;
    MSH_Camera_Telephoto_Lens: THREE.Mesh;
    MSH_Camera_Telephoto_Lens_Glass: THREE.Mesh;
    MSH_Camera_Wide_Body: THREE.Mesh;
    MSH_Camera_Wide_Lens: THREE.Mesh;
    MHS_Camera_Led: THREE.Mesh;
    MHS_Camera_Lidar: THREE.Mesh;
    MSH_Chassis_Screws: THREE.Mesh;
    MSH_Chassis_Speakers: THREE.Mesh;
    MSH_Chassis_Unibody_Frame: THREE.Mesh;
    MSH_Rear_Ceramic_Pane: THREE.Mesh;
    MSH_Rear_Logo: THREE.Mesh;
    MHS_Screen_Border: THREE.Mesh;
    MHS_Screen_Display: THREE.Mesh;
    GEO_Screen_Glass: THREE.Mesh;
  };
  materials: {
    M_Plastic_Detail: THREE.MeshStandardMaterial;
    M_Aluminum: THREE.MeshStandardMaterial;
    M_Black_Plastic: THREE.MeshStandardMaterial;
    M_Camera_Glass: THREE.MeshPhysicalMaterial;
    M_Camera_Body: THREE.MeshStandardMaterial;
    M_Camera_Lens: THREE.MeshStandardMaterial;
    M_Camera_Lens_Outer: THREE.MeshStandardMaterial;
    M_Led_Glass: THREE.MeshStandardMaterial;
    M_Metal: THREE.MeshStandardMaterial;
    M_Ceramic_Pane: THREE.MeshStandardMaterial;
    M_Logo_Material: THREE.MeshStandardMaterial;
    M_Screen_Display: THREE.MeshStandardMaterial;
    ['Glass.001']: THREE.MeshStandardMaterial;
  };
};

export function Model(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF(modelPath) as unknown as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <group name="GRP_Iphone_17">
          <group name="GRP_Antenna_System">
            <mesh
              name="MSH_Antenna_Bands"
              castShadow
              receiveShadow
              geometry={nodes.MSH_Antenna_Bands.geometry}
              material={materials.M_Plastic_Detail}
            />
            <mesh
              name="MSH_Antenna_Window"
              castShadow
              receiveShadow
              geometry={nodes.MSH_Antenna_Window.geometry}
              material={materials.M_Plastic_Detail}
            />
          </group>
          <group name="GRP_Button_System">
            <mesh
              name="MSH_Button_Action"
              castShadow
              receiveShadow
              geometry={nodes.MSH_Button_Action.geometry}
              material={AluminumMaterial}
            />
            <mesh
              name="MSH_Button_Camera_Control"
              castShadow
              receiveShadow
              geometry={nodes.MSH_Button_Camera_Control.geometry}
              material={materials.M_Plastic_Detail}
            />
            <mesh
              name="MSH_Button_Side"
              castShadow
              receiveShadow
              geometry={nodes.MSH_Button_Side.geometry}
              material={AluminumMaterial}
            />
            <mesh
              name="MSH_Button_Volume_Down"
              castShadow
              receiveShadow
              geometry={nodes.MSH_Button_Volume_Down.geometry}
              material={AluminumMaterial}
            />
            <mesh
              name="MSH_Button_Volume_Up"
              castShadow
              receiveShadow
              geometry={nodes.MSH_Button_Volume_Up.geometry}
              material={AluminumMaterial}
            />
          </group>
          <group name="GRP_Camera_Plateau">
            <group name="GRP_Camera_Main_Cover">
              <mesh
                name="MSH_Camera_Main_Front"
                castShadow
                receiveShadow
                geometry={nodes.MSH_Camera_Main_Front.geometry}
                material={materials.M_Black_Plastic}
              />
              <mesh
                name="MSH_Camera_Main_Mirror"
                castShadow
                receiveShadow
                geometry={nodes.MSH_Camera_Main_Mirror.geometry}
                material={materials.M_Camera_Glass}
              />
            </group>
            <group name="GRP_Camera_Telephoto_Cover">
              <mesh
                name="MSH_Camera_Telephoto_Front"
                castShadow
                receiveShadow
                geometry={nodes.MSH_Camera_Telephoto_Front.geometry}
                material={materials.M_Black_Plastic}
              />
              <mesh
                name="MSH_Camera_Telephoto_Mirror"
                castShadow
                receiveShadow
                geometry={nodes.MSH_Camera_Telephoto_Mirror.geometry}
                material={materials.M_Camera_Glass}
              />
            </group>
            <group name="GRP_Camera_Wide_Cover">
              <mesh
                name="MSH_Camera_Wide_Front"
                castShadow
                receiveShadow
                geometry={nodes.MSH_Camera_Wide_Front.geometry}
                material={materials.M_Black_Plastic}
              />
              <mesh
                name="MSH_Camera_Wide_Mirror"
                castShadow
                receiveShadow
                geometry={nodes.MSH_Camera_Wide_Mirror.geometry}
                material={materials.M_Camera_Glass}
              />
            </group>
            <mesh
              name="MSH_Camera_Plateau_Forged"
              castShadow
              receiveShadow
              geometry={nodes.MSH_Camera_Plateau_Forged.geometry}
              material={AluminumMaterial}
            />
          </group>
          <group name="GRP_Camera_System">
            <group name="GRP_Camera_Main">
              <mesh
                name="MSH_Camera_Main_Body"
                castShadow
                receiveShadow
                geometry={nodes.MSH_Camera_Main_Body.geometry}
                material={materials.M_Camera_Body}
              />
              <mesh
                name="MSH_Camera_Main_Lens"
                castShadow
                receiveShadow
                geometry={nodes.MSH_Camera_Main_Lens.geometry}
                material={materials.M_Camera_Lens}
              />
            </group>
            <group name="GRP_Camera_Selfie">
              <mesh
                name="MSH_Camera_Selfie_Attach"
                castShadow
                receiveShadow
                geometry={nodes.MSH_Camera_Selfie_Attach.geometry}
                material={AluminumMaterial}
              />
              <mesh
                name="MSH_Camera_Selfie_Body"
                castShadow
                receiveShadow
                geometry={nodes.MSH_Camera_Selfie_Body.geometry}
                material={materials.M_Camera_Body}
              />
              <mesh
                name="MSH_Camera_Selfie_Lens"
                castShadow
                receiveShadow
                geometry={nodes.MSH_Camera_Selfie_Lens.geometry}
                material={materials.M_Camera_Lens}
              />
              <mesh
                name="MSH_Camera_Selfie_Mirror"
                castShadow
                receiveShadow
                geometry={nodes.MSH_Camera_Selfie_Mirror.geometry}
                material={materials.M_Camera_Glass}
              />
            </group>
            <group name="GRP_Camera_Telephoto">
              <mesh
                name="MSH_Camera_Telephoto_Body"
                castShadow
                receiveShadow
                geometry={nodes.MSH_Camera_Telephoto_Body.geometry}
                material={materials.M_Camera_Body}
              />
              <mesh
                name="MSH_Camera_Telephoto_Lens"
                castShadow
                receiveShadow
                geometry={nodes.MSH_Camera_Telephoto_Lens.geometry}
                material={materials.M_Camera_Lens}
              />
              <mesh
                name="MSH_Camera_Telephoto_Lens_Glass"
                castShadow
                receiveShadow
                geometry={nodes.MSH_Camera_Telephoto_Lens_Glass.geometry}
                material={materials.M_Camera_Lens_Outer}
              />
            </group>
            <group name="GRP_Camera_Wide">
              <mesh
                name="MSH_Camera_Wide_Body"
                castShadow
                receiveShadow
                geometry={nodes.MSH_Camera_Wide_Body.geometry}
                material={materials.M_Camera_Body}
              />
              <mesh
                name="MSH_Camera_Wide_Lens"
                castShadow
                receiveShadow
                geometry={nodes.MSH_Camera_Wide_Lens.geometry}
                material={materials.M_Camera_Lens}
              />
            </group>
            <mesh
              name="MHS_Camera_Led"
              castShadow
              receiveShadow
              geometry={nodes.MHS_Camera_Led.geometry}
              material={materials.M_Led_Glass}
            />
            <mesh
              name="MHS_Camera_Lidar"
              castShadow
              receiveShadow
              geometry={nodes.MHS_Camera_Lidar.geometry}
              material={materials.M_Black_Plastic}
            />
          </group>
          <group name="GRP_Chassis_Main">
            <mesh
              name="MSH_Chassis_Screws"
              castShadow
              receiveShadow
              geometry={nodes.MSH_Chassis_Screws.geometry}
              material={AluminumMaterial}
            />
            <mesh
              name="MSH_Chassis_Speakers"
              castShadow
              receiveShadow
              geometry={nodes.MSH_Chassis_Speakers.geometry}
              material={AluminumMaterial}
            />
            <mesh
              name="MSH_Chassis_Unibody_Frame"
              castShadow
              receiveShadow
              geometry={nodes.MSH_Chassis_Unibody_Frame.geometry}
              material={AluminumMaterial}
            />
          </group>
          <group name="GRP_Rear_Assembly">
            <mesh
              name="MSH_Rear_Ceramic_Pane"
              castShadow
              receiveShadow
              geometry={nodes.MSH_Rear_Ceramic_Pane.geometry}
              material={materials.M_Ceramic_Pane}
            />
            <mesh
              name="MSH_Rear_Logo"
              castShadow
              receiveShadow
              geometry={nodes.MSH_Rear_Logo.geometry}
              material={materials.M_Logo_Material}
            />
          </group>
          <group name="GRP_Screen_System">
            <mesh
              name="MHS_Screen_Border"
              castShadow
              receiveShadow
              geometry={nodes.MHS_Screen_Border.geometry}
              material={materials.M_Black_Plastic}
            />
            <mesh
              name="MHS_Screen_Display"
              castShadow
              receiveShadow
              geometry={nodes.MHS_Screen_Display.geometry}
              material={materials.M_Screen_Display}
            />
            <group name="MHS_Screen_Glass">
              <mesh
                name="GEO_Screen_Glass"
                castShadow
                receiveShadow
                geometry={nodes.GEO_Screen_Glass.geometry}
                material={materials['Glass.001']}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(modelPath);
