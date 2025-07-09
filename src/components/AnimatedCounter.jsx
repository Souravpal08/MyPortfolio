import React from "react";
import { counterItems } from "../constants";
import CountUp from "react-countup";

const AnimatedCounter = () => {
  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols gap-6">
        {counterItems.map((item) => (
          <div className="bg-zinc-900 rounded-lg p-10 flex flex-col items-center justify-center">
            <div
              key={counterItems.label}
              className="counter-number text-white-50 text-5xl font-bold mb-2"
            >
              
                <CountUp
                    start={0}
                    suffix={item.suffix}
                    end={item.value}
                    duration={2.5}
                  
                    className="text-5xl font-bold text-white-50"
                />
            </div>
            <div> 
                <span className="text-white-50 text-lg ">
                    {item.label}
                </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
