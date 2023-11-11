import React from 'react'
import { useGlobalContext } from '../context'
import Navbar from './Navbar';

const HomeBg = () => {
const {handleMouseChange} = useGlobalContext();
    return (
    <>
    <div
      onMouseOver={handleMouseChange}
      className="closeSubMenu overflow-hidden w-full h-screen bg-DarkSlateGray relative"
    >
      <Navbar />
      <div className="absolute top-[-48%] left-[0%] -translate-x-[-35%] translate-y-[25%] w-[55rem] h-[95rem] bg-Silver rotate-[78deg] shadow-[00000059 0px 5px 15px]"></div>
    </div>
  </>
  )
}

export default HomeBg