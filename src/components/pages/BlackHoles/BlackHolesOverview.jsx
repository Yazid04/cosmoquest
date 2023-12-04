import React from "react";
import blackHole from "./imgs/blackHole.jpeg";
import { useGlobalContext } from "../../context";

const BlackHolesOverview = () => {
  const { handleMouseChange } = useGlobalContext();

  return (
    <main
      className={`closeSubMenu w-[85%] mx-auto h-min pt-14`}
      onMouseOver={handleMouseChange}
    >
      <div className="mb-10" onMouseOver={handleMouseChange}>
        <h1 className="text-5xl text-Silver font-bold my-5">Black Holes</h1>
        <div className="mb-2 text-DarkSlateGray lg:max-w-3xl lg:h-[30rem]">
          <img
            className="w-full h-full object-cover"
            src={blackHole}
            alt="A black hole Illustration"
          />
        </div>

        <div className="mb-5 text-Silver">
          <a href={'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wired.com%2F2020%2F11%2Fgeeks-guide-black-holes%2F&psig=AOvVaw1ChzoKMehM7BPH0Nxu9uuO&ust=1701765561864000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIDS8fCw9YIDFQAAAAAdAAAAABAE'} className="mb-5 text-sm">
            credit: WIRED
          </a>
        </div>

        <p className="leading-relaxed font-Playpen text-Silver mb-5">
          A black hole forms from the remnants of a large star that undergoes a
          supernova explosion. They exist in the center of each galaxy. Stars,
          like our sun, live for a certain amount of time until they can't keep
          expanding and releasing energy through nuclear thermal fusion. At that
          time, the star essentially collapses into itself, and if the star was
          massive enough, it would form a black hole. Our star, the Sun, for
          example, will not become a black hole. Instead, in several billion
          years, the Sun will shed its outer layers, and its core will form a
          white dwarf—a dense ball of carbon and oxygen that no longer undergoes
          nuclear fusion but shines because it is very hot.
        </p>
        <p className="leading-relaxed font-Playpen text-Silver mb-5">
          When observing a black hole from the outside, you would perceive an
          'event horizon' delineating the boundary between the external universe
          and the interior of the black hole. Crossing this event horizon is a
          one-way journey into the black hole's gravitational grasp. Black holes
          possess an extraordinary gravitational field so potent that nothing,
          not even light, can escape. This gravitational influence arises from
          the mass of the black hole warping the fabric of spacetime, a
          fundamental aspect of Einstein's general relativity.
        </p>
        <p className="leading-relaxed font-Playpen text-Silver">
          Black holes possess a peculiar gravitational field so strong that
          nothing, not even light, can escape. You might wonder why. Well, black
          holes warp the fabric of spacetime around them. To help you grasp this
          concept, imagine you can measure the circumference of a black hole,
          and let's say that circumference is roughly 30 miles. If you then
          measure the diameter of the black hole, you might think it should be
          roughly 10 miles because the circumference divided by Pi (30 / 3.14)
          is approximately 10 miles. However, you would find that the diameter
          is perhaps 100, 1000, or even 1,000,000 miles. How does that work?
          Space is warped! The intense gravitational field of a black hole
          results from the mass of the black hole warping the surrounding
          spacetime, a fundamental aspect of general relativity.
        </p>
      </div>

      <div className="closeSubMenu mb-10" onMouseOver={handleMouseChange}>
        <h1 className="text-5xl text-Silver font-bold my-5">
          History of black holes
        </h1>
        <p className="leading-relaxed font-Playpen text-Silver mb-5">
          Albert Einstein first predicted the existence of black holes in 1916,
          with his general theory of relativity. The term "black hole" was
          coined many years later in 1967 by American astronomer John Wheeler.
          After decades of black holes being known only as theoretical objects.{" "}
        </p>
        <p className="leading-relaxed font-Playpen text-Silver mb-5">
          The first black hole ever discovered was Cygnus X-1, located within
          the Milky Way in the constellation of Cygnus, the Swan. Astronomers
          saw the first signs of the black hole in 1964 when a sounding rocket
          detected celestial sources of X-rays according to NASA. In 1971,
          astronomers determined that the X-rays were coming from a bright blue
          star orbiting a strange dark object. It was suggested that the
          detected X-rays were a result of stellar material being stripped away
          from the bright star and "gobbled" up by the dark object — an
          all-consuming black hole.
        </p>
      </div>

      <div className="closeSubMenu py-5">
        <h1 className="text-5xl text-Silver font-bold my-5">
          The Size of Black Holes
        </h1>
        <p className="leading-relaxed font-Playpen text-Silver">
          Black holes come in a variety of sizes, and their dimensions are a key
          factor in understanding their gravitational influence. Notable
          examples include M87, Cygnus X-1, and TON 618. M87, located in the
          center of the Virgo Cluster, boasts a supermassive black hole with an
          estimated mass of around 6.5 billion times that of our sun. In
          contrast, Cygnus X-1, the first black hole ever discovered, is a
          stellar-mass black hole in our Milky Way, with a mass roughly 15 times
          that of the sun. On the other hand, TON 618 is a captivating example
          of an ultramassive black hole that stretches the limits of our cosmic
          imagination. Nestled in the center of a distant quasar, TON 618 boasts
          a mind-boggling and staggering mass estimated to be around 66 billion
          times that of our sun. This cosmic behemoth defies the conventions of
          ordinary black holes, challenging our understanding of the extremes
          that nature can achieve. To put this in perspective, TON 618's
          gravitational influence is so profound that it could devour entire
          star systems with casual cosmic nonchalance. Imagine a celestial
          giant, lurking in the depths of the cosmos, its appetite for matter
          and energy unmatched in the cosmic buffet of the universe. TON 618
          stands as a testament to the awe-inspiring scale and diversity within
          the enigmatic family of black holes.
        </p>
      </div>
    </main>
  );
};

export default BlackHolesOverview;
