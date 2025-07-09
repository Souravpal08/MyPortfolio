import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

 

  useGSAP(() => {
     // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT CONTENT */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/project3.jpg" alt="First Project" />
            </div>
            <div className="text-content">
              <h2>Summize, an AI Powered Article Summarizer</h2>
              <p className="text-white-50 md:text-xl ">
                Summize is a SAAS application that uses openAI's gpt-3.5 model
                to summarize articles and blogs by providing the URL of it. it
                is made by Reactjs, redux and tailwindCSS.
              </p>
            </div>
          </div>
          {/* RIGHT CONTENT */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/project1.jpg" alt="Project 2" />
              </div>
              <h2>BuzzIQ, an online quiz platform</h2>
              <p className="text-white-50 md:text-xl">
                BuzzIQ is an full-stack web application.
              </p>
            </div>

            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="/images/project2.jpg" alt="Project 3" />
              </div>
              <h2>Bookify an online Bookstore </h2>
              <p className="text-white-50 md:text-xl">
                Bookify is a full-stack web application made by me.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
