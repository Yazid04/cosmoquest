import React from 'react'

const Hero = () => {

  const styles = {
      background: 'radial-gradient(circle, #000000, #030303, #0a0a0a, #1f1f1f, #333333)',
  };
  
  
  return (
    <div style={styles} className='block lg:hidden text-center p-5 text-Silver w-[85%] mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      <h1 className='text-[2.7rem] font-bold font-Playpen leading-relaxed'>
      Infinite Gravity: The Phenomenon of Black Holes
      </h1>
    </div>
  )
}

export default Hero