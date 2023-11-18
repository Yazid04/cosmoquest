import React from "react";
import blueDisk from "../../static/BlueDisk.jpg";
import blueDisk2 from "../../static/BlueDisk2.jpg";
import { FaLocationDot } from "react-icons/fa6";
import earthlayers1 from "../../static/earthlayers1.png";
import earthlayers2 from "../../static/earthlayers2.png";
import PaleBlueDot from "../../static/PaleBlueDot.png";

const EarthOverview = () => {
  return (
    <>
      <section className="w-full p-20 bg-DarkerSilver">
        <div className="w-full pb-10">
          <div className="flex h-full items-center gap-x-5">
            <FaLocationDot className="text-3xl font-bold" />
            <h3 className="text-3xl font-Playpen font-bold">Home</h3>
          </div>
        </div>

        <div className="pb-10 w-[31%] h-[25rem]">
          <img
            src={blueDisk}
            className="w-full h-full"
            alt="Full disk image of Earth"
          />
        </div>

        <div className="w-[80%] py-10">
          <p className="font-Playpen leading-loose pb-10">
            Our home, Earth, is a rocky planet, similar to Mercury, Venus, and
            Mars. It's composed of 70% water and 30% land. The structure of
            Earth is divided into four major components: the crust, the mantle,
            the outer core, and the inner core.
          </p>
          <div className="flex justify-evenly items-center">
            <div className="pb-10 w-full h-full">
              <img
                src={earthlayers2}
                className="w-[27rem] h-[18rem]"
                alt="Full disk image of Earth"
              />
            </div>

            <div className="pb-10 w-full h-full">
              <img
                src={earthlayers1}
                className="w-[27rem] h-[18rem]"
                alt="Full disk image of Earth"
              />
            </div>
          </div>
          <p className="pb-10">
            The crust, where we reside, is approximately 30 km thick. Earth's
            crust consists of continental crust (lighter) and oceanic crust
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
            4,400 °C in the outer regions to 6,100 °C near the inner core.
          </p>
          <p className="pb-10">
            Earth is the third planet from the sun, situated in the "Goldilocks
            Zone" or "habitable zone." When Earth orbits the Sun, it's just the
            right distance for liquid water to remain a liquid and not boil.
          </p>
          <div className="pb-10">
            <li>Mass: {"5.972 × 10^24"} kg </li>
            <li>Radius: 6,371 km </li>
            <li>Gravity: 9.807 m/s² </li>
            <li>Surface area: 510.1 million km² </li>
            <li>Land area: 148.9 million km² </li>
          </div>
          <p className="pb-10">
            To the best of geological evidence, Earth is estimated to be 4.54
            billion years old, with an uncertainty of approximately 50 million
            years. Scientists have scoured the Earth searching for the oldest
            rocks to radiometrically date, and in northwestern Canada, they
            discovered rocks about 4.03 billion years old.
          </p>
          <p className="pb-10">
            Perhaps, there is nothing better to finish this overview of our home
            than the famous excerpt from Carl Sagan's book Pale Blue Dot.
          </p>
          <div className="pb-10 w-full h-full">
            <img
              src={PaleBlueDot}
              className="w-[27rem] h-[20rem]"
              alt="Full disk image of Earth"
            />
          </div>
          <div className="p-10 rounded-md shadow-md pb-10 bg-Silver">
          <p className="pb-5 font-Playpen">
            "Look again at that dot. That's here. That's home. That's us. On it
            everyone you love, everyone you know, everyone you ever heard of,
            every human being who ever was, lived out their lives. The aggregate
            of our joy and suffering, thousands of confident religions,
            ideologies, and economic doctrines, every hunter and forager, every
            hero and coward, every creator and destroyer of civilization, every
            king and peasant, every young couple in love, every mother and
            father, hopeful child, inventor and explorer, every teacher of
            morals, every corrupt politician, every "superstar," every "supreme
            leader," every saint and sinner in the history of our species lived
            there--on a mote of dust suspended in a sunbeam. 
        </p>
        <p className="pb-5 font-Playpen">
            The Earth is a very small stage in a vast cosmic arena. Think of the rivers of blood
            spilled by all those generals and emperors so that, in glory and
            triumph, they could become the momentary masters of a fraction of a
            dot. Think of the endless cruelties visited by the inhabitants of
            one corner of this pixel on the scarcely distinguishable inhabitants
            of some other corner, how frequent their misunderstandings, how
            eager they are to kill one another, how fervent their hatreds.
        </p>
        <p className="pb-5 font-Playpen"> 
            Our posturings, our imagined self-importance, the delusion that we have
            some privileged position in the Universe, are challenged by this
            point of pale light. Our planet is a lonely speck in the great
            enveloping cosmic dark. In our obscurity, in all this vastness,
            there is no hint that help will come from elsewhere to save us from
            ourselves. 
        </p>
        <p className="pb-5 font-Playpen"> 
            The Earth is the only world known so far to harbor life.
            There is nowhere else, at least in the near future, to which our
            species could migrate. Visit, yes. Settle, not yet. Like it or not,
            for the moment the Earth is where we make our stand.
        </p> 
        <p className="pb-5 font-Playpen">
            It has been said that astronomy is a humbling and character-building experience.
            There is perhaps no better demonstration of the folly of human
            conceits than this distant image of our tiny world. To me, it
            underscores our responsibility to deal more kindly with one another,
            and to preserve and cherish the pale blue dot, the only home we've
            ever known."
        </p>
        <p className="pb-5 font-bold">
          — Carl Sagan, Pale Blue Dot, 1994
        </p>
        </div>
        </div>
      </section>
    </>
  );
};

export default EarthOverview;

// improve earth pic and layers content visually
