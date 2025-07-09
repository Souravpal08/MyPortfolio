import React from "react";
import TitleHeader from "../components/TitleHeader.jsx";
import { techStackIcons, techStackImgs } from "../constants/index.js";
import Techicon from "../components/Models/TechLogos/Techicon.jsx";
import { useGSAP } from "@gsap/react";
import {gsap} from "gsap";

const TechStack = () => {
 
  useGSAP(()=>{
    gsap.fromTo(".tech-card", 
      {opacity: 0, y: 50}, 
      {
        opacity: 1,
        y: 0,
        duration: 1, 
        stagger: 0.2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".tech-grid",
          start: "top center",
        
        },
      }
    );
  })


  return (
  <section
  id="skills"
  className="relative z-10 flex-center section-padding bg-black overflow-hidden"
>
  <div className="w-full h-full md:px-10 px-5">
    <TitleHeader
      title="My preferred Tech Stack"
      sub="🛠️ Technology which I used to serve"
    />

    {/* Flex Row Layout */}
    <div className="flex flex-wrap justify-center gap-6 mt-8">
      {techStackImgs.map((icon) => (
        <div
          key={icon.name}
          className="w-48 h-auto relative card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
        >
          <div className="tech-card-animated-bg" />

          <div className="tech-card-content flex flex-col items-center justify-center gap-4 p-4">
            {/* Tech image */}
            <div className="tech-icon-wrapper w-20 h-20">
              <img
                src={icon.imgPath}
                alt={icon.name}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Tech name */}
            <p className="text-white text-center font-medium leading-tight">
              {icon.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default TechStack;
