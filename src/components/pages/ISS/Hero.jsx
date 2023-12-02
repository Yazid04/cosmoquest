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

  function yearsInOrbit() {
    // Launch date of the ISS
    const launchDate = new Date('1998-11-20');

    // Current date
    const currentDate = new Date();

    // Calculate the number of milliseconds in a year
    const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;

    // Calculate the number of years
    const yearsInOrbit = (currentDate - launchDate) / millisecondsInYear;

    return Math.floor(yearsInOrbit);
}


  return (
    <div className="closeSubMenu w-[80%] font-Playpen h-96 text-center grid place-content-center absolute top-[50%] -translate-y-[50%] left-1/2 -translate-x-1/2 text-Silver md:top-[60%] md:-translate-y-[60%]">
      <animated.div style={fadeIn}>
        <h2 className="closeSubMenu text-5xl mb-5 md:text-7xl">
          International Space Station:
        </h2>
        <p className="text-xl mb-12 text-[white] mx-auto bg-[black] p-3 max-w-md rounded-md">
          {" "}
            {yearsInOrbit() + ' Years in Orbit!'}          
       </p>
      </animated.div>
      <div>
      </div>
    </div>
  );
};

export default Hero;
