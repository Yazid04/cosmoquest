import React, { useEffect, useRef } from "react";
import { usePagesContext } from "../pagesContext";
import SolarSystem from './imgs/SolarSystem.jpeg'
import Sun from './imgs/Sun.jpeg' 
import InnerPlanets from './imgs/InnerPlanets.jpeg'
import OuterPlanets from './imgs/OuterPlanets.jpeg'

const SSOverview = () => {
  const overviewRef = useRef();
  const { SET_SOLAR_SYSTEM_INRO_POSITION } = usePagesContext();

  useEffect(() => {
    const refElement = overviewRef.current;
    const height = refElement.getBoundingClientRect().top;
    SET_SOLAR_SYSTEM_INRO_POSITION(height);
  }, [SET_SOLAR_SYSTEM_INRO_POSITION]);

  return (
    <main className="w-[80%] mx-auto mt-20 py-5 max-w-7xl" ref={overviewRef}>
      <div className="mb-14">
        <h2 className="text-4xl mb-5 text-DarkSlateGray">
          1. Introduction to the Solar System:
        </h2>
        <div className="mb-5 text-DarkSlateGray lg:max-w-3xl lg:h-[18rem]">
          <img
            className="w-full h-full object-cover"
            src={SolarSystem}
            alt="Introduction to the Solar System"
          />
        </div>
        <p className="leading-relaxed">
          In the cosmic cocktail party known as the Solar System, we find
          ourselves casually orbiting the Sun, a celestial hotspot that's the
          life of the interstellar fiesta. Picture this: you, a tiny Earthling,
          mingling with the neighborhood rocky planets, gas giants, and a few
          dwarf planets just trying to find their groove. It's a cosmic
          neighborhood watch with a dazzling view, and our VIP pass grants us
          access to the ultimate celestial soiree.
        </p>
      </div>
      <div className="mb-14">
        <h2 className="text-4xl mb-5 text-DarkSlateGray">2. The Sun:</h2>
        <div className="mb-5 text-DarkSlateGray lg:max-w-xl lg:h-[35rem]">
          <img
            className="w-full h-full object-cover"
            src={Sun}
            alt="The Sun"
          />
        </div>
        <p className="leading-relaxed">
          Now, imagine the Sun as the DJ of this celestial shindig. It's not
          just a bright ball of gas; it's a fusion-fueled maestro, orchestrating
          the rhythms of the cosmic dance floor. Get ready for a stellar
          performance as we explore the Sun's layers, from its energetic core to
          the radiant surface. It's not just a star; it's the beating heart of
          our cosmic dance party.
        </p>
      </div>
      <div className="mb-14">
        <h2 className="text-4xl mb-5 text-DarkSlateGray">
          3. Inner Planets (Terrestrial Planets):
        </h2>
        <div className="mb-5 text-DarkSlateGray lg:max-w-3xl lg:h-[18rem]">
          <img
            className="w-full h-full object-cover"
            src={InnerPlanets}
            alt="Inner Planets (Terrestrial Planets)"
          />
        </div>
        <p className="leading-relaxed">
          Moving closer to the stage, we encounter the inner planets—Mercury,
          Venus, Earth, and Mars. Each one has its own backstage pass to
          stardom. Mercury, the swift messenger, whizzes by, while Venus struts
          its stuff with a sizzling atmosphere. Earth, our blue oasis, is the
          cool cat of the crew, and Mars, the red planet, adds a dash of
          adventure to the planetary posse.
        </p>
      </div>
      <div className="mb-14">
        <h2 className="text-4xl mb-5 text-DarkSlateGray">
          4. Outer Planets (Gas Giants):
        </h2>
        <div className="mb-5 text-DarkSlateGray lg:max-w-3xl lg:h-[18rem]">
          <img
            className="w-full h-full object-cover"
            src={OuterPlanets}
            alt="Outer Planets (Gas Giants)"
          />
        </div>
        <p className="leading-relaxed">
          Venture beyond the velvet ropes to the outer planets—Jupiter, Saturn,
          Uranus, and Neptune. These gas giants know how to throw a cosmic bash.
          Jupiter's the giant storm-chaser, Saturn flaunts its dazzling ring
          bling, Uranus has a quirky sideways spin, and Neptune, with its winds
          that could blow you away, is the mysterious one in the corner. It's a
          gas giant gala like no other.
        </p>
      </div>
      <div className="mb-14">
        <h2 className="text-4xl mb-5 text-DarkSlateGray">
          6. Moons of the Solar System:
        </h2>
        <p className="leading-relaxed">
          Imagine moons as the Solar System's entourage, stealing the spotlight
          with their cosmic moves. Earth's Moon is the OG, but Europa, Ganymede,
          and Titan are the rising stars, each with its own gravitational charm.
          Join the moonlit dance as we twirl through the fascinating tales of
          these celestial partners, turning the night sky into a planetary
          ballroom.
        </p>
      </div>
      <div className="mb-14">
        <h2 className="text-4xl mb-5 text-DarkSlateGray">
          8. Formation and Evolution:
        </h2>
        <p className="leading-relaxed">
          Now, let's rewind the cosmic playlist to the early days when the Solar
          System was just a starry-eyed dream. Picture a cosmic kitchen where
          stardust, gas, and a dash of cosmic curiosity blended into a recipe
          for celestial wonders. Planets collided, orbits danced, and the grand
          cosmic tapestry unfolded. It's the story of our cosmic origins, where
          science meets the whimsical dance of celestial bodies in the ultimate
          Hitchhiker's Guide to the Galaxy-style narrative.
        </p>
      </div>
    </main>
  );
};

export default SSOverview;
