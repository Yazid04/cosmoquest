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
    <main className="closeSubMenu w-full px-20 pt-20 mt-10">
    <div className="closeSubMenu w-[70%]">
      <animated.div style={fadeIn} className="closeSubMenu text-5xl leading-relaxed font-bold text-Silver">
        Celestial Chronicles: Uncover the Poetry of the Cosmos in Our
        Virtual Space Sanctuary!
      </animated.div>
    </div>
    <div className='w-[70%]'>
      <button
        type="button"
        className="bg-Silver text-DarkSlateGray font-bold mt-7 py-2 px-4 rounded-md transition duration-300">
        Start Exploring
      </button>
    </div>

  </main>
  )
}

export default Hero