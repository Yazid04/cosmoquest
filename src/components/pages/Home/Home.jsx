import React from "react";
import Navbar from "../../shared/Navbar";
import { useGlobalContext } from "../../context";
import Hero from "../../shared/Hero"
/*import southernRingNebula from '../static/southernRingNebula.png';*/
import cosmicCliffs from '../../static/cosmicCliffs.png'
import EarthOverview from "./EarthOverview";
import { Footer } from "../../shared/Footer"; 

const Home = () => {
  const { handleMouseChange } = useGlobalContext();

  return (
    <>
      <div
        onMouseOver={handleMouseChange}
        className="closeSubMenu overflow-hidden w-full h-screen relative bg-center bg-cover" style={{backgroundImage: `url(${cosmicCliffs})`}}>
        <Navbar />
       <Hero />
      </div>
     <EarthOverview />
     <Footer />
    </>
  );
};

export default Home;
