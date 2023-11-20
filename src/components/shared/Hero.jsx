import React from 'react'
import { useSpring, animated } from 'react-spring';
import { useGlobalContext } from '../context';


const Hero = () => {
    
  const {GLOBAL_ANIMATION_DURATION} = useGlobalContext
  
  const fadeIn = useSpring({
      opacity: 1,
      from: { opacity: 0 },
      config: { duration: GLOBAL_ANIMATION_DURATION },
    });


  return (
    <main className="closeSubMenu w-full px-20 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-0 max-w-[1920px]">
    <div className="closeSubMenu w-[70%] 2xl:w-[80%] 2xl:mx-auto 2xl:mt-20">
      <animated.div style={fadeIn} className="closeSubMenu text-5xl leading-relaxed font-bold text-Silver 2xl:leading-[1.4] 2xl:text-center 2xl:text-7xl">
        Celestial Chronicles: Uncover the Poetry of the Cosmos in Our
        Virtual Space Sanctuary!
      </animated.div>
    </div>
    <div className='w-[70%] 2xl:mx-auto 2xl:grid 2xl:place-content-center'>
      <button
        type="button"
        className="bg-Silver text-DarkSlateGray font-bold mt-7 py-2 px-4 rounded-md transition duration-300 2xl:mt-11 2xl:px-10 2xl:py-6 2xl:text-2xl">
        Start Exploring
      </button>
    </div>
 
  </main>
  )
}

export default Hero