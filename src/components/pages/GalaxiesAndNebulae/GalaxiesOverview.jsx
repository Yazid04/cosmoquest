import React, { useEffect, useRef } from "react";
import { usePagesContext } from "../pagesContext";
import andromeda2 from "./imgs/andromeda2.jpeg";
//import nebulaImg from "../../static/nebulaImg.jpeg";


const GalaxiesOverview = () => {
  const { SET_GALAXIES_INTRO_POSITION } = usePagesContext();

  const overviewRef = useRef();
  useEffect(() => {
    const refElement = overviewRef.current;
    const height = refElement.getBoundingClientRect().top;
    SET_GALAXIES_INTRO_POSITION(height);
  }, [SET_GALAXIES_INTRO_POSITION]);

  return (
    <main
      ref={overviewRef}
      className="closeSubMenu w-[80%] mx-auto mt-20 py-5 max-w-7xl"
    >
      <div className="mb-14">
        <h2 className="text-6xl mb-5 text-DarkSlateGray font-bold">
          1. Galaxies:
        </h2>
        <div className="mb-5 text-DarkSlateGray lg:max-w-3xl lg:h-[18rem]">
          <img
            className="w-full h-full object-cover"
            src={andromeda2}
            alt="Introduction to the Solar System"
          />
        </div>
        <p className="leading-relaxed font-Playpen">
          Galaxies, vast cosmic structures comprising stars, gas, dust, and dark
          matter, represent the fundamental building blocks of the universe. The
          Milky Way, our home galaxy, is just one of an estimated two trillion
          galaxies in the observable universe. Galaxies exhibit diverse
          morphologies, ranging from spiral and elliptical to irregular shapes.
          Their sizes can vary dramatically, with some dwarf galaxies containing
          only a few billion stars, while giant galaxies may host hundreds of
          billions. The immense distances between stars within galaxies render
          them mostly empty space, yet their collective gravitational pull
          maintains stellar cohesion. Galaxies are dynamic entities, constantly
          evolving through processes such as star formation, supernova
          explosions, and interactions with neighboring galaxies. Additionally,
          supermassive black holes often reside at the centers of galaxies,
          exerting a profound influence on their evolution. Studying galaxies
          unveils crucial insights into the cosmos' structure, composition, and
          the forces that have shaped the universe over billions of years.
        </p>
      </div>
      <div className="mb-14">
        <h2 className="text-4xl mb-5 text-DarkSlateGray font-bold">
          I Spiral galaxies:
        </h2>
        <div className="mb-5 text-DarkSlateGray lg:max-w-3xl lg:h-[18rem]">
          <img
            className="w-full h-full object-cover"
            src={andromeda2}
            alt="Introduction to the Solar System"
          />
        </div>
        <p className="leading-relaxed font-Playpen">
          Spiral galaxies enchant us with their mesmerizing, spiral-arm
          structures that gracefully wind around a central nucleus. Within these
          majestic arms, young, luminous stars are born, casting their brilliant
          glow across the galactic expanse. The Milky Way, our own cosmic abode,
          is a prime example of a spiral galaxy, where the interplay of gravity
          and rotation gives rise to the intricate patterns that define its
          celestial majesty. Spirals symbolize dynamism and ongoing stellar
          creation, offering a window into the cosmic dance of birth and
          renewal.
        </p>
      </div>
      <div className="mb-14">
        <h2 className="text-4xl mb-5 text-DarkSlateGray font-bold">
          II elliptical galaxies:
        </h2>
        <div className="mb-5 text-DarkSlateGray lg:max-w-3xl lg:h-[18rem]">
          <img
            className="w-full h-full object-cover"
            src={andromeda2}
            alt="Introduction to the Solar System"
          />
        </div>
        <p className="leading-relaxed font-Playpen">
          In stark contrast to the spiraling grace of their counterparts,
          elliptical galaxies exude a sense of cosmic serenity. Shaped like
          three-dimensional ellipsoids, these galaxies are often populated by
          aging stars and lack the distinctive spiral arms seen in their
          counterparts. Their structure hints at a history rich with galactic
          mergers and interactions, resulting in a symmetrical and elliptical
          form. While the cosmic ballet of star formation may be less pronounced
          in ellipticals, their sheer size and stellar density make them crucial
          players in the intricate cosmic ecosystem.
        </p>
      </div>
      <div className="mb-14">
        <h2 className="text-4xl mb-5 text-DarkSlateGray font-bold">
          III Irregular galaxies:
        </h2>
        <div className="mb-5 text-DarkSlateGray lg:max-w-3xl lg:h-[18rem]">
          <img
            className="w-full h-full object-cover"
            src={andromeda2}
            alt="Introduction to the Solar System"
          />
        </div>
        <p className="leading-relaxed font-Playpen">
          Irregular galaxies defy convention with their unique and asymmetrical
          shapes, breaking free from the structured norms of spirals and
          ellipticals. These celestial rebels showcase the aftermath of chaotic
          cosmic events, such as gravitational interactions or collisions with
          neighboring galaxies. Their irregularity sparks the imagination,
          offering a glimpse into the dynamic and unpredictable nature of the
          universe. Within these galaxies, a diverse array of stellar phenomena
          unfolds, ranging from intense bursts of star formation to the
          enigmatic dance of cosmic forces sculpting the galactic landscape.
        </p>
      </div>
    </main>
  );
};

export default GalaxiesOverview;
