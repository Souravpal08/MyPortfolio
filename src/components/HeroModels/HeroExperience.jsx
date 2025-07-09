import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { Room } from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";

const HeroExperience = () => {
    const isTablet = useMediaQuery({ query: "(max-width: 1024px)" }); //for tablet and smaller screens
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" }); 
  return (
    <Canvas camera={{ position: [10,4,10], fov: 25 }}>
     
     // Lights
     <HeroLights />
      {/* Particles */}

      { <Particles count={300}  /> }

        <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 3}
        minAzimuthAngle={-Math.PI / 3} // ~ -30 degrees
maxAzimuthAngle={Math.PI / 2}  // ~ 30 degrees

         
        />
      
      <group
        scale={isMobile ? 0.35 :0.55}
        position={[-1.1, -2.7, 0]}
        rotation={[0, 0.35, 0]}
        className="md:ml-10 xl:ml-16 ml-0"
      >
              <Room />
      </group>
     
    </Canvas>
  );
};

export default HeroExperience;
