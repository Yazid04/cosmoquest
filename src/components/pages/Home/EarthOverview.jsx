import React, { useRef } from "react";
import { FaLocationDot } from "react-icons/fa6";
import earthlayers1 from "../../static/earthlayers1.png";
import earthlayers2 from "../../static/earthlayers2.png";
import PaleBlueDot from "../../static/PaleBlueDot.png";
import { Link } from "react-router-dom";

import earthrise from "../../static/earthrise.jpeg";
import blueDisk from "../../static/BlueDisk.jpg";
import apollo17EarthImg from "../../static/apollo17EarthImg.jpeg";
import blueMarble from "../../static/blueMarble.jpg";
import apollo4EarthImg from "../../static/apollo4EarthImg.jpeg";
import GalileoEarthAndMoon from "../../static/GalileoEarthAndMoon.jpeg";
import EarthCassiniPhoto from "../../static/EarthCassiniPhoto.jpeg";
import CrescentEarth from "../../static/CrescentEarth.jpg";

const EarthOverview = () => {
  const images = [
    {
      id: 500,
      link: "https://en.wikipedia.org/wiki/Earthrise",
      imageLink: earthrise,
      text: "Earthrise from the lunar orbit",
    },
    {
      id: 501,
      link: "https://en.wikipedia.org/wiki/The_Blue_Marble",
      imageLink: blueDisk,
      text: "The blueDisk image of Earth",
    },
    {
      id: 502,
      link: "https://en.m.wikipedia.org/wiki/File:Astronaut_Harrison_%27Jack%27_Schmitt,_American_Flag,_and_Earth_%28Apollo_17_EVA-1%29.jpg",
      imageLink: apollo17EarthImg,
      text: 'Apollo 17 Astronaut Harrison "Jack" Schmitt, American Flag, and Earth',
    },
    {
      id: 503,
      link: "https://en.wikipedia.org/wiki/The_Blue_Marble",
      imageLink: blueMarble,
      text: "blueMarble image of Earth",
    },
    {
      id: 504,
      link: "https://en.wikipedia.org/wiki/Apollo_4",
      imageLink: apollo4EarthImg,
      text: "Apollo 4 image of Earth",
    },
    {
      id: 505,
      link: "https://www.nasa.gov/image-article/galileo-earth-moon/",
      imageLink: GalileoEarthAndMoon,
      text: "Galileo: Earth and Moon",
    },
    {
      id: 506,
      link: "https://www.nasa.gov/image-article/cassini-earth-saturn-day-earth-smiled/",
      imageLink: EarthCassiniPhoto,
      text: "photo of Earth taken by the Cassini-Huygens spacecraft",
    },
    {
      id: 507,
      link: "https://science.nasa.gov/resource/crescent-earth/",
      imageLink: CrescentEarth,
      text: "Waning crescent Earth seen from the moon",
    },
  ];

  const boxRef = useRef(null);
  
  let degrees = 0;
  const handleGalleryScroll = (e) => {
    const box = boxRef.current;
    const text = e.target.textContent;
    if (text === "Next") {
      degrees -= 45;
      box.style = `transform: perspective(1000px) rotateY(${degrees}deg);`;
    } else if (text === "Prev") {
      degrees += 45;
      box.style = `transform: perspective(1000px) rotateY(${degrees}deg);`;
    }
  };

  return (
    <>
      <section className="w-full p-20 bg-DarkerSilver">
        <div className="w-full pb-10">
          <div className="flex h-full justify-center items-center gap-x-5">
            <FaLocationDot className="text-3xl font-bold" />
            <h3 className="text-3xl font-Playpen font-bold">Home</h3>
          </div>
        </div>

        <div className="wrapper relative bg-[#000] w-[65rem] h-[35rem] mx-auto grid place-content-center" style={{  transformStyle: "preserve-3d" }}>
          <div className="wrapper-center">
            <div className="box relative w-[210px] h-[200px] transition-all duration-1000" ref={boxRef}>
              {images.map((image, idx) => {
                const { id, imageLink, text } = image;
                return (
                  <span style={{'--i': idx+1}}
                    className="absolute top-0 left-0 w-full h-full grid place-content-center bg-DarkSlateGray origin-center"
                    key={id}>
                    <img
                      src={imageLink}
                      alt="Earth from space"
                      className="w-[85%] h-[85%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover z-[1] select-none"
                    />
                    <div className="absolute -top-10 text-[8px] text-[white] bg-DarkSlateGray px-2 h-10 w-full grid place-content-center">
                      <p>{text}</p>
                    </div>
                  </span>
                );
              })}
            </div>
            <div className="p-5 absolute bottom-0 left-0 flex justify-center items-center gap-5 w-full">
              <div
                onClick={(e) => handleGalleryScroll(e)}
                className="relative w-24 h-12 border-[Silver] border-[3px] text-Silver cursor-pointer rounded-3xl flex justify-center items-center"
              >
                Prev
              </div>
              <div
                onClick={(e) => handleGalleryScroll(e)}
                className="relative w-24 h-12 border-[Silver] border-[3px] text-Silver cursor-pointer rounded-3xl flex justify-center items-center"
              >
                Next
              </div>
            </div>
          </div>
        </div>

        <div className="w-[80%] mx-auto py-10">
          <p className="font-Playpen leading-loose pb-10">
            Our home, Earth, is a rocky planet, similar to Mercury, Venus, and
            Mars. It's composed of 70% water and 30% land. The structure of
            Earth is divided into four major{" "}
            <Link
              className="font-bold"
              to={"https://en.wikipedia.org/wiki/Internal_structure_of_Earth"}
            >
              layers
            </Link>
            : the crust, the mantle, the outer core, and the inner core.
          </p>

          <div className="flex justify-evenly items-center">
            <div className="pb-10 w-full h-full">
              <img
                src={earthlayers2}
                className="w-[27rem] h-[18rem]"
                alt="Full disk Earth"
              />
            </div>

            <div className="pb-10 w-full h-full">
              <img
                src={earthlayers1}
                className="w-[27rem] h-[18rem]"
                alt="Full disk Earth"
              />
            </div>
          </div>

          <p className="pb-10">
            The crust, where we reside, is approximately 30 km (18.6 miles)
            thick. Earth's crust consists of{" "}
            <Link
              className="font-bold"
              to={"https://en.wikipedia.org/wiki/Continental_crust"}
            >
              continental crust{" "}
            </Link>
            (lighter) and{" "}
            <Link
              className="font-bold"
              to={"https://en.wikipedia.org/wiki/Oceanic_crust"}
            >
              oceanic crust{" "}
            </Link>
            (denser). The most abundant elements in Earth's crust are oxygen and
            silicon. The mantle, the largest layer of Earth's interior, is
            mostly solid rock but behaves like a viscous fluid over long
            periods. It's located between the Earth's core and crust,
            approximately 2,900 kilometers (1,802 miles) thick, making up about
            84% of Earth's volume. The mantle is composed of silicate rock,
            magnesium, silicon, iron, and oxygen. The core, Earth's dense, hot
            center, has two layers: the outer core, a liquid metal layer
            bordering the mantle, and the inner core, a solid metal ball about
            70% the size of the Moon. The core is around 2,900 kilometers (1,802
            miles) below the Earth's surface with a radius of about 3,485
            kilometers (2,165 miles). The outer core's temperature ranges from
            4,400 °C (7952 F) in the outer regions to 6,100 °C (11012 F) near
            the inner core.
          </p>

          <p className="pb-10">
            Earth is the third planet from the sun, situated in the{" "}
            <Link
              className="font-bold"
              to={"https://exoplanets.nasa.gov/resources/323/goldilocks-zone/"}
            >
              "Goldilocks Zone" or "habitable zone."
            </Link>
            When Earth orbits the Sun, it's just the right distance for liquid
            water to remain a liquid and not boil.
          </p>

          <div className="pb-10">
            <li>Mass: {"5.972 × 10^24"} kg </li>
            <li>Radius: 6,371 km </li>
            <li>Gravity: 9.807 m/s² </li>
            <li>Surface area: 510.1 million km² </li>
            <li>Land area: 148.9 million km² </li>
          </div>

          <p className="pb-10">
            To the best of{" "}
            <Link
              className="font-bold"
              to={
                "https://education.nationalgeographic.org/resource/how-did-scientists-calculate-age-earth/"
              }
            >
              {" "}
              geological observations,{" "}
            </Link>{" "}
            Earth is estimated to be 4.54 billion years old, with an uncertainty
            of approximately 50 million years. Scientists have scoured the Earth
            searching for the oldest rocks to radiometrically date, and in
            northwestern Canada, they discovered rocks about 4.03 billion years
            old.
          </p>

          <p className="pb-10">
            Perhaps, there is nothing better to finish this overview of our home
            than the famous excerpt from Carl Sagan's book Pale Blue Dot.
          </p>

          <div className="pb-10 w-full flex justify-center h-full">
            <img
              src={PaleBlueDot}
              className="w-[27rem] h-[20rem]"
              alt="Full disk Earth"
            />
          </div>

          <div className="p-10 rounded-md shadow-md pb-10 bg-Silver">
            <p className="pb-5 font-Playpen">
              "Look again at that dot. That's here. That's home. That's us. On
              it everyone you love, everyone you know, everyone you ever heard
              of, every human being who ever was, lived out their lives. The
              aggregate of our joy and suffering, thousands of confident
              religions, ideologies, and economic doctrines, every hunter and
              forager, every hero and coward, every creator and destroyer of
              civilization, every king and peasant, every young couple in love,
              every mother and father, hopeful child, inventor and explorer,
              every teacher of morals, every corrupt politician, every
              "superstar," every "supreme leader," every saint and sinner in the
              history of our species lived there--on a mote of dust suspended in
              a sunbeam.
            </p>
            <p className="pb-5 font-Playpen">
              The Earth is a very small stage in a vast cosmic arena. Think of
              the rivers of blood spilled by all those generals and emperors so
              that, in glory and triumph, they could become the momentary
              masters of a fraction of a dot. Think of the endless cruelties
              visited by the inhabitants of one corner of this pixel on the
              scarcely distinguishable inhabitants of some other corner, how
              frequent their misunderstandings, how eager they are to kill one
              another, how fervent their hatreds.
            </p>
            <p className="pb-5 font-Playpen">
              Our posturings, our imagined self-importance, the delusion that we
              have some privileged position in the Universe, are challenged by
              this point of pale light. Our planet is a lonely speck in the
              great enveloping cosmic dark. In our obscurity, in all this
              vastness, there is no hint that help will come from elsewhere to
              save us from ourselves.
            </p>
            <p className="pb-5 font-Playpen">
              The Earth is the only world known so far to harbor life. There is
              nowhere else, at least in the near future, to which our species
              could migrate. Visit, yes. Settle, not yet. Like it or not, for
              the moment the Earth is where we make our stand.
            </p>
            <p className="pb-5 font-Playpen">
              It has been said that astronomy is a humbling and
              character-building experience. There is perhaps no better
              demonstration of the folly of human conceits than this distant
              image of our tiny world. To me, it underscores our responsibility
              to deal more kindly with one another, and to preserve and cherish
              the pale blue dot, the only home we've ever known."
            </p>
            <p className="pb-5 font-bold">— Carl Sagan, Pale Blue Dot, 1994</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default EarthOverview;

// add info to pics / DONE
// add links to texts in the paragraphs / DONE
// improve visiuality / DONE
// fix errors / DONE
// replace the css styles with tailwind's / DONE
// apply a footer / DONE
// make all of that responsive