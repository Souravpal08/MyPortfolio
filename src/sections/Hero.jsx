import React from "react";
import { words } from "../constants";
import Button from "../components/Button";
import HeroExperience from "../components/HeroModels/HeroExperience";
import { useGSAP } from "@gsap/react";

import gasp from "gsap";
import AnimatedCounter from "../components/AnimatedCounter";



const Hero = () => {
  // GSAP animation for the hero section
  useGSAP(()=>{
    gasp.fromTo('.hero-text h1',
      { yPercent: 50, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1, stagger: 0.4, ease: "power2.inOut" }
    )
  }, );
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>
      <div className="hero-layout">
        {/* LEFT CONTENT */}
        <header className="flex flex-col  justify-center md:w-full w-screen md:px-20 px-3 ">
          <div className="flex flex-col gap-9">
            <div className="hero-text ">
              <h1>
                {" "}
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl-size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              
              <h1> Into real projects </h1>
              <h1>that Deliver solutions</h1>
            </div>
            <div className="flex flex-col items-start gap-4">
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none ">
                {" "}
                Hey👋! I'm <span className="bg-gradient-to-r from-blue-500 via-pink-400 to-purple-500 bg-clip-text text-transparent font-bold">Sourav</span> a passionate developer and a tech enthusiast.{" "}
              </p>
              </div >
              <Button
              className= "md:w-80 md:h-16 w-60 h-12 inline-block mt-8 z-50 relative"
                text="See my work"
                id="button"
               />
          </div>
        </header>
        {/* RIGHT 3d model */}
        <figure>
          <div className="hero-3d-layout " >
          
                  <HeroExperience />
          </div>
        </figure>
      </div>
      <AnimatedCounter />
    </section>
  );
};

export default Hero;
