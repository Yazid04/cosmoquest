import React from "react";
import blueDisk from "../../static/BlueDisk.jpg";
import blueDisk2 from "../../static/BlueDisk2.jpg";
import { FaLocationDot } from "react-icons/fa6";
import earthlayers1 from '../../static/earthlayers1.png'
import earthlayers2 from '../../static/earthlayers2.png'

const EarthOverview = () => {
  return (
    <>
      <section className="w-full p-20 bg-[#e6e4e4]">
        <div className="w-full pb-10">
          <div className="flex h-full items-center gap-x-5">
            <h3 className="text-3xl font-Playpen font-bold">Home</h3>
            <FaLocationDot className="text-3xl font-bold" />
          </div>
        </div>

        <div className="pb-10 w-[55%] h-[42rem]">
          <img
            src={blueDisk2}
            className="w-full h-full"
            alt="Full disk image of Earth"
          />
        </div>

        <div className="w-[80%] pt-10">
          <p className="font-Playpen leading-loose">
            Our home, Earth, is a rocky planet, similar to Mercury, Venus, and
            Mars. It's composed of 70% water and 30% land. The structure of
            Earth is divided into four major components: the crust, the mantle,
            the outer core, and the inner core. 
          </p>
          
           [Insert Image of Earth Layers here...] 
        
        <div className="pb-10 w-full h-[42rem]">
          <img
            src={earthlayers2}
            className="w-[50rem] h-[35rem]"
            alt="Full disk image of Earth"
          />
        </div>
        
        <div className="pb-10 w-full h-[42rem]">
          <img
            src={earthlayers1}
            className="w-[45rem] h-[35rem]"
            alt="Full disk image of Earth"
          />
        </div>
        
           
           <p className="pb-10">
            The crust, where we reside, is approximately 30 km thick.
            Earth's crust consists of continental crust (lighter) and oceanic
            crust (denser). The most abundant elements in Earth's crust are
            oxygen and silicon. The mantle, the largest layer of Earth's
            interior, is mostly solid rock but behaves like a viscous fluid over
            long periods. It's located between the Earth's core and crust,
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
            Earth is the third planet from the sun, situated in the "Goldilocks Zone"
            or "habitable zone." When Earth orbits the Sun, it's just the right
            distance for liquid water to remain a liquid and not boil. 
            </p>
            
            <div className="pb-10">
            <li>Mass: {"5.972 × 10^24"} kg </li>
            <li>Radius: 6,371 km </li>
            <li>Gravity: 9.807 m/s² </li>
            <li>Surface area: 510.1 million km² </li> 
            <li>Land area: 148.9 million km² </li>
            </div>

            <p className="pb-10">To the best of geological evidence, Earth is estimated to be 4.54 billion years old, with an
            uncertainty of approximately 50 million years. Scientists have
            scoured the Earth searching for the oldest rocks to radiometrically
            date, and in northwestern Canada, they discovered rocks about 4.03
            billion years old. 
            </p>
            
            <p className="pb-10">
            Perhaps, there is nothing better to finish this overview of our home
            than the famous excerpt from Carl Sagan's book Pale Blue Dot.
            </p>

            [Insert Famous Blue Pale Dot Picture here...]
            [Insert Excerpt from Carl Sagan's Pale Blue Dot here...]
        
        </div>
      </section>
    </>
  );
};

export default EarthOverview;
