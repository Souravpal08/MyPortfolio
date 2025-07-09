import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";

const ComputerModel = () => {
  const { scene } = useGLTF("/models/computer-optimized.glb");
  return <primitive object={scene} scale={2} position={[0, -1.5, 0]} />;
};

const ContactModel = () => {
  return (
    <Canvas shadows camera={{ position: [0, 2, 5], fov: 50 }}>
      <ambientLight intensity={0.4} />
      <directionalLight intensity={1.2} position={[5, 10, 5]} castShadow />
      <Suspense fallback={null}>
        <Environment preset="city" />
        <ComputerModel />
        <OrbitControls enableZoom={false} />
      </Suspense>
    </Canvas>
  );
};

export default ContactModel;
