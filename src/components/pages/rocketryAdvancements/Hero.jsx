import React from "react";
import { useSpring, animated } from "react-spring";
import { useGlobalContext } from "../../context";

const Hero = () => {
  const { GLOBAL_ANIMATION_DURATION } = useGlobalContext();

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: GLOBAL_ANIMATION_DURATION },
  });

  return (
    <div className="closeSubMenu w-[80%] font-Playpen text-[white] h-96 text-center grid place-content-center absolute top-[50%] -translate-y-[50%] left-1/2 -translate-x-1/2 md:top-[60%] md:-translate-y-[60%]">
      <animated.div style={fadeIn}>
        <h2 className="closeSubMenu text-5xl mb-5 md:text-7xl">
          Breaking Boundaries:
        </h2>
        <p className="text-xl mb-12 p-3 rounded-md">
          {" "}
          The Evolution of Rocketry
        </p>
      </animated.div>
    </div>
  );
};

export default Hero;
