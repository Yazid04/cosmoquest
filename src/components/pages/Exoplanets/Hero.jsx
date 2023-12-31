import React from "react";
import { useGlobalContext } from "../../context";
import { usePagesContext } from "../pagesContext";
import { useSpring, animated } from "react-spring";

const Hero = () => {
  const { handleMouseChange, GLOBAL_ANIMATION_DURATION } = useGlobalContext();
  const { EXOPLANETS_INTRO_POSITION } = usePagesContext();
  
  const scrollToTarget = () => {
    window.scrollTo({
      top: EXOPLANETS_INTRO_POSITION,
      behavior: "smooth",
    });
  };

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: GLOBAL_ANIMATION_DURATION },
  });

  return (
    <animated.div style={fadeIn}>
      <main
        onMouseOver={handleMouseChange}
        className="closeSubMenu text-start absolute top-[45%] -translate-y-[45%] left-1/2 -translate-x-1/2 w-[80%] mx-auto h-64 lg:text-center lg:top-[60%] lg:max-w-4xl"
      >
        <h2 className="text-[#fff] text-3xl leading-relaxed font-Playpen mb-10">
        “Somewhere, something incredible is waiting to be known.”
        </h2>
        <button
          onClick={scrollToTarget}
          className="w-32 h-11 text-[black] rounded-md bg-[white] font-Playpen text-base font-bold shadow-sm"
        >
          Take a tour
        </button>
      </main>
    </animated.div>
  );
};

export default Hero;
