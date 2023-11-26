import React, { useRef, useState, useEffect } from "react";
import { data } from "./MarsData";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import MarsComparisonCatalog from "./photos/MarsComparisonCatalog.png";
import { usePagesContext } from "../pagesContext";


const MarsOverview = () => {
  const { SET_MARS_INRO_POSITION } = usePagesContext();
  const [activeIndex, setActiveIndex] = useState(0);
  const imgeDescription = data[activeIndex].description;
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
  };
  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const overviewRef = useRef();
  useEffect(() => {
    const refElement = overviewRef.current;
    const height = refElement.getBoundingClientRect().top;
    SET_MARS_INRO_POSITION(height);
  }, [SET_MARS_INRO_POSITION]);

  return (
    <main className="w-[80%] mx-auto mt-20 py-5 max-w-7xl" ref={overviewRef}>
      <div className="mb-14">
        <h2 className="text-4xl mb-5 text-DarkSlateGray">Introduction: </h2>
        <p className="leading-relaxed">
          Mars, the fourth planet from the Sun, has captivated the human
          imagination for centuries. Known as the "Red Planet" due to its
          distinctive reddish hue, Mars stands as a testament to the beauty and
          mysteries of our solar system. With a diameter roughly half that of
          Earth, Mars boasts a diverse landscape marked by towering volcanoes,
          deep valleys, and impact craters. Its reddish appearance is attributed
          to{" "}
          {
            <Link
              className="font-bold"
              to={"https://en.wikipedia.org/wiki/Iron_oxide"}
            >
              {" "}
              iron oxide{" "}
            </Link>
          }
          , or rust, on its surface. Mars orbits the Sun at an average distance
          of 142 million miles, positioning it as a neighbor to our own planet.
          As our understanding of the cosmos has expanded, so has our
          fascination with Mars, fueled by the possibility of unlocking its
          secrets and unraveling the mysteries of its past.
        </p>
      </div>
      <div className="mb-14 max-w-xl">
        <img
          className="w-full h-full object-cover"
          src={MarsComparisonCatalog}
          alt="Mars size comparison"
        />
      </div>
      <div className="mb-14">
        <h2 className="text-4xl mb-5 text-DarkSlateGray">
          Mars Exploration History:
        </h2>
        <p className="leading-relaxed">
          The exploration of Mars has been a testament to human ingenuity and
          the relentless pursuit of knowledge. Early observations from Earth
          hinted at the presence of{" "}
          <Link
            className="font-bold"
            to={"https://science.nasa.gov/resource/dry-ice-on-mars/"}
          >
            {" "}
            polar ice caps
          </Link>{" "}
          and changing surface features. However, it wasn't until the mid-20th
          century that spacecraft exploration began. The Mariner missions of the
          1960s provided the first close-up images of Mars, paving the way for
          more ambitious endeavors.{" "}
          <Link
            className="font-bold"
            to={"https://mars.nasa.gov/mars-exploration/missions/viking-1-2/"}
          >
            {" "}
            The Viking missions in the 1970s{" "}
          </Link>
          marked a historic milestone as the first successful landers on Mars,
          offering valuable insights into the planet's soil and atmosphere.
          Since then, a fleet of robotic explorers, including Spirit,
          Opportunity, Curiosity, and Perseverance, have continued the legacy,
          uncovering the geological history and potential habitability of Mars.
        </p>
      </div>
      <div className="mb-14">
        <h2 className="text-4xl mb-5 text-DarkSlateGray">
          Mars' Atmosphere and Climate:{" "}
        </h2>
        <p className="leading-relaxed">
          Mars, once possessing a thicker atmosphere, has an atmosphere that is
          now thin and composed mostly of carbon dioxide. With an average
          surface pressure less than 1% of Earth's, the Martian atmosphere
          cannot support liquid water. The climate on Mars is marked by extreme
          temperature variations, ranging from about -195°F (-125°C) near the
          poles to 70°F (20°C) in equatorial regions during the day.{" "}
          <Link
            className="font-bold"
            to={
              "https://www.nasa.gov/solar-system/the-fact-and-fiction-of-martian-dust-storms/"
            }
          >
            {" "}
            Dust storms
          </Link>{" "}
          some of which can engulf the entire planet, contribute to the dynamic
          and ever-changing Martian climate. Understanding these atmospheric
          conditions is crucial for future missions, especially those aimed at
          human exploration and potential colonization.
        </p>
      </div>
      <div className="mb-14">
        <h2 className="mb-7 font-bold">
          NASA’s Curiosity Mars rover captured this 360-degree panorama while
          parked below Gediz Vallis Ridge (the hill-like slope at right).
        </h2>
        <iframe
          src="https://mars.nasa.gov/embed/27696/"
          title="NASA’s Curiosity Mars rover captured this 360-degree panorama while parked below Gediz Vallis Ridge (the hill-like slope at right)."
          width="100%"
          height="400"
          scrolling="no"
          frameBorder="0"
        ></iframe>
      </div>
      <div className="mb-14">
        <h2 className="text-4xl mb-5 text-DarkSlateGray">
          Rovers and Landers:
        </h2>
        <p className="leading-relaxed">
          The exploration of Mars has been greatly advanced by a series of
          rovers and landers, each contributing to our understanding of the
          Martian landscape. Landers, such as Viking 1 and Viking 2, provided
          our first glimpses of the Martian surface. In recent decades, rovers
          like Sojourner, Spirit, Opportunity, Curiosity, and{" "}
          <Link
            className="font-bold"
            to={"https://science.nasa.gov/mission/mars-2020-perseverance/"}
          >
            Perseverance{" "}
          </Link>
          have taken center stage. These robotic explorers have traversed the
          Martian terrain, analyzing rocks and soil, conducting experiments, and
          beaming back breathtaking images. Notable successes include the
          discovery of evidence suggesting Mars once had liquid water and the
          ongoing search for signs of past or present life. These rovers,
          equipped with advanced scientific instruments, continue to unravel the
          geological mysteries of Mars, paving the way for future human
          exploration.
        </p>
      </div>

      <div className="mb-14">
        <div className="w-full h-64 bg-[green] relative md:h-96 xl:h-[30rem]">
          <button
            className="absolute top-1/2 -translate-y-1/2 bg-[#f5f5f586] cursor-pointer z-10 w-10 h-10 flex justify-center items-center left-0 -translate-x-0 text-2xl"
            onClick={prevSlide}
          >
            <FaArrowLeftLong />
          </button>
          <button
            className="absolute top-1/2 -translate-y-1/2 bg-[#f5f5f586] cursor-pointer z-10 w-10 h-10 flex justify-center items-center right-0 -translate-x-0 text-2xl"
            onClick={nextSlide}
          >
            <FaArrowRight />
          </button>
          <ul>
            {data.map((item, index) => (
              <li
                key={item.id}
                className={`absolute inset-0 ${
                  index === activeIndex ? "opacity-100" : "opacity-0"
                } transition-all duration-700 ease-in-out`}
                data-active={index === activeIndex}
              >
                <img
                  src={item.image}
                  alt={item.description}
                  className="block w-full h-full object-cover"
                />
              </li>
            ))}
          </ul>
        </div>
        <h2 className="my-5 text-center font-bold">{imgeDescription}</h2>
      </div>
    </main>
  );
};

export default MarsOverview;
