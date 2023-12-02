import React from "react";
import Navbar from "../../shared/Navbar";
import { useGlobalContext } from "../../context";
import Hero from "./Hero";
import { Footer } from "../../shared/Footer";
import HistoryOverview from "./HistoryOverview";

const HistoryOfSpaceExploration = () => {
  // Another great background image option
  // https://cdn.mos.cms.futurecdn.net/Vty42wM9nZEUxDzAp4Csd9.jpg
  
  const { handleMouseChange } = useGlobalContext();
  const backgroundStyles = {
    backgroundImage: `url(https://planetary.s3.amazonaws.com/web/assets/pictures/liftoff-vostok-1.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
  };
// 
  return (
    <>
      <section
        style={{
          ...backgroundStyles,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        className="closeSubMenu w-full h-screen relative"
        onMouseOver={handleMouseChange}
      >
        <Navbar />
        <Hero />
      </section>
      <HistoryOverview />
      <Footer />
    </>
  );
};

export default HistoryOfSpaceExploration;