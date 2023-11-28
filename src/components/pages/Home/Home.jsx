import React from "react";
import Navbar from "../../shared/Navbar";
import { useGlobalContext } from "../../context";
import Hero from "./Hero";
import EarthOverview from "./EarthOverview";
import { Footer } from "../../shared/Footer";
import cosmicCliffs from '../../static/cosmicCliffs.png';


const Home = () => {
  const { handleMouseChange } = useGlobalContext();

  return (
    <>
      <section
        onMouseOver={handleMouseChange}
        className="closeSubMenu overflow-hidden max-w-[3000px] text-center mx-auto h-screen relative bg-center bg-cover"
        style={{
          backgroundImage: `url(${cosmicCliffs})`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Navbar />
        <Hero />
      </section>
      <EarthOverview />
      <Footer />
    </>
  );
};

export default Home;
