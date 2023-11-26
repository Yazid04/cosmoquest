import React from "react";
import { usePagesContext } from "../pagesContext";
import { useSpring, animated } from "react-spring";
import { useGlobalContext } from "../../context";


const Hero = () => {
   const {GLOBAL_ANIMATION_DURATION} = useGlobalContext();
  const {MARS_INRO_POSITION} = usePagesContext()

  
  const scrollToTarget = () => {
    window.scrollTo({
      top: MARS_INRO_POSITION,
      behavior: "smooth",
    });
  };

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: GLOBAL_ANIMATION_DURATION },
  });

  return (
    <div className="closeSubMenu w-[80%] font-Playpen h-96 text-center grid place-content-center absolute top-[50%] -translate-y-[50%] left-1/2 -translate-x-1/2 text-Silver md:top-[60%] md:-translate-y-[60%]">
       <animated.div style={fadeIn}>
      <h2 className="closeSubMenu text-5xl mb-5 md:text-7xl">Roving Mars:</h2>
      <p className="text-xl mb-12">A Journey to the Martian Landscape</p>
       </animated.div>
      <div>
        <button onClick={scrollToTarget} className="text-xl bg-Silver w-48 p-3 rounded-md text-[#000]">
          Start Exploring
        </button>
      </div>
    </div>
  );
};

export default Hero;