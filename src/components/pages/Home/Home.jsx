import React from "react";
import Navbar from "../../shared/Navbar";
import { useGlobalContext } from "../../context";
import Hero from "./Hero"
/*import southernRingNebula from '../static/southernRingNebula.png';*/
import cosmicCliffs from '../../static/cosmicCliffs.png'
import EarthOverview from "./EarthOverview";
import { Footer } from "../../shared/Footer"; 

const Home = () => {
  const { handleMouseChange } = useGlobalContext();

  return (
    <>
      <section
        onMouseOver={handleMouseChange}
        className="closeSubMenu overflow-hidden max-w-[3000px] text-center mx-auto h-screen relative bg-center bg-cover" style={{backgroundImage: `url(${cosmicCliffs})`}}>
        <Navbar />
       <Hero />
      </section>
     <EarthOverview />
     <Footer />
    </>
  );
};

export default Home;
