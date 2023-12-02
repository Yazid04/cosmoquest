import React from "react";
import Navbar from "../../shared/Navbar";
import { useGlobalContext } from "../../context";
import Hero from "./Hero";
//import SSOverview from "./SSOverview";
import { Footer } from "../../shared/Footer";

const InternationalSpaceStation = () => {
  const { handleMouseChange } = useGlobalContext();
  const backgroundStyles = {
    backgroundImage: `url(${'https://www.nasa.gov/wp-content/uploads/2023/03/bwhi1apicaaamlo.jpg_large.jpg'})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "orange !important"
  };

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
      {/*<SSOverview />*/} 
      <Footer />
    </>
  );
};

export default InternationalSpaceStation;