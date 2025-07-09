import React, { useEffect } from 'react'
import { Environment, useGLTF ,Float} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { mod } from 'three/tsl'


const Techicon = ({model}) => {
    const scene = useGLTF(model.modelPath)
    
    useEffect(() => {
  if (model.name === "Interactive Developer") {
    scene.scene.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({ color: "#ffffff" });
        child.material.needsUpdate = true;
      }
    });
  }
}, [scene, model.name]);


  return (
   <Canvas>
    <ambientLight intensity={0.3} />
    <directionalLight position={[5, 10, 5]} intensity={1} />
    <Environment preset="city" />

     <OrbitControls
      enableZoom={false}
      />

   
    <Float speed={5.5} rotationIntensity={1.2} floatIntensity={0.9} >
        <group scale={model.scale} rotation={model.rotation}>
            <primitive object={scene.scene} />
        </group>
    </Float>
   </Canvas>
  )
}

export default Techicon
