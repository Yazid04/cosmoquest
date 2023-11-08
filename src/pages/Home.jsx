import React from "react";
import Navbar from "../shared/Navbar";

const Home = () => {
  return (
    <>
      <div className="overflow-hidden w-full h-screen bg-[#2F4F4F] relative">
        <Navbar />
        <div className="absolute top-[-48%] left-[0%] -translate-x-[-35%] translate-y-[25%] w-[55rem] h-[95rem] bg-[#C0C0C0] rotate-[78deg] shadow-[00000059 0px 5px 15px]"></div>
      </div>
    </>
  );
};

export default Home;

/*
position: absolute;
top: 10%;
left: 25%;
transform: translate(-35%, 15%);
width: 55rem;
height: 95rem;
background-color: #C0C0C0;
transform: rotate(80deg);
box-shadow: #00000059 0px 5px 15px;*/