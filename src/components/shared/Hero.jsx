import React from "react";
import { useSpring, animated } from "react-spring";
import { useGlobalContext } from "../context";

const Hero = () => {
  const { GLOBAL_ANIMATION_DURATION, galleryPosition } = useGlobalContext();

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: GLOBAL_ANIMATION_DURATION },
  });

  const scrollToTarget = () => {
    window.scrollTo({
      top: galleryPosition,
      behavior: "smooth",
    });
  };

  return (
    <main className="closeSubMenu w-[85%] mx-auto text-center absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] z-0 lg:top-[65%] lg:-translate-y-[65%] 2xl:grid 2xl:place-content-center">
      <div className="closeSubMenu md:text-center lg:text-start lg:max-w-4xl 2xl:text-center 2xl:max-w-[1800px]">
        <animated.div
          style={fadeIn}
          className="closeSubMenu leading-relaxed font-bold text-Silver text-3xl mb-10 lg:text-5xl lg:leading-relaxed 2xl:text-7xl 2xl:leading-relaxed"
        >
          Celestial Chronicles: Uncover the Poetry of the Cosmos in Our Virtual
          Space Sanctuary!
        </animated.div>
      </div>

      <div className="md:text-center lg:text-start 2xl:text-center">
        <button
          onClick={scrollToTarget}
          type="button"
          className="bg-Silver text-DarkSlateGray font-bold transition duration-300 p-2 rounded-md 2xl:p-8 2xl:text-4xl"
        >
          Start Exploring
        </button>
      </div>
    </main>
  );
};

export default Hero;