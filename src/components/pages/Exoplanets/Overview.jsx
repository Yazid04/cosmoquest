import React, {useRef, useEffect} from "react";
import { usePagesContext } from "../pagesContext";
//import { Link } from "react-router-dom";

const Overview = () => {
const {setEXOPLANET_INTRO_POSITION} = usePagesContext();

  const overviewRef = useRef();
  useEffect(() => {
    const refElement = overviewRef.current;
    const height = refElement.getBoundingClientRect().top;
    setEXOPLANET_INTRO_POSITION(height);
  }, [setEXOPLANET_INTRO_POSITION]);


  return (
    <main ref={overviewRef} className="closeSubMenu w-[80%] mx-auto mt-20 py-5 max-w-7xl">
      <div className="mb-14">
        <h2 className="text-4xl mb-5 font-bold text-DarkSlateGray">
          What are Exoplanets?{" "}
        </h2>
        <p className="leading-loose font-Playpen">
          Exoplanets, short for "extrasolar planets," are planets that orbit
          stars outside our solar system. They are celestial bodies that share
          similarities with planets in our own system but exist in distant
          planetary systems. Exoplanets come in various sizes, compositions, and
          orbits, ranging from gas giants, rocky planets, to ocean worlds! (Like
          Miller's planet from the movie "Interstellar") Their discovery has
          revolutionized our understanding of the cosmos, prompting questions
          about the potential habitability of other worlds and the diversity of
          planetary systems throughout the universe.
        </p>
      </div>
      <div>
        <h2 className="text-4xl mb-5 font-bold text-DarkSlateGray">
          How are Exoplanets discovered?{" "}
        </h2>
        <p className="leading-loose font-Playpen">
          Exoplanets are discovered through a variety of observational
          techniques. The most common methods include the transit method, where
          astronomers observe the slight dimming of a star as a planet passes in
          front of it, and the radial velocity method, which detects the
          gravitational tug of an orbiting planet on its host star, causing it
          to wobble. Direct imaging involves capturing actual images of the
          exoplanet, often challenging due to the overwhelming brightness of the
          host star. Other methods include microlensing, astrometry, and the
          study of pulsars. The combination of these techniques has led to the
          identification of thousands of exoplanets, expanding our knowledge of
          planetary systems beyond our own.
        </p>
      </div>
    </main>
  );
};

export default Overview;
