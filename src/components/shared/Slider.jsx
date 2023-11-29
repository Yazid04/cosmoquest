import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';


function Slider({ title, data }){
  const obj = useState(data);
  const items = obj[0]
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((oldIndex) => (oldIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setIndex((oldIndex) => (oldIndex - 1 + items.length) % items.length);
  };

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => (oldIndex + 1) % items.length);
    }, 5000);
    return () => clearInterval(slider);
  }, [index, items.length]);

  return (
    <section className='w-[90vw] mx-auto my-20 max-w-4xl lg:w-[95vw]'>
      <div className='text-center mb-8'>
        <h2 className='text-5xl font-bold text-DarkSlateGray'>
          <span>/</span>{title}
        </h2>
      </div>
      <div className='w-[80vw] h-[450px] max-w-3xl text-center relative flex overflow-hidden my-0 mx-auto'>
        {items?.map((item, itemIndex) => {
          const { id, image } = item;

          let position = 'nextSlide';
          if (itemIndex === index) {
            position = 'activeSlide';
          }
          if (
            itemIndex === index - 1 ||
            (index === 0 && itemIndex === items.length - 1)
          ) {
            position = 'lastSlide';
          }
          return (
            <article className={`absolute top-0 left-0 w-full h-full opacity-0 transition-all ease-in-out duration-500 ${position === 'nextSlide' ? 'translate-x-full' : position === 'activeSlide' ? 'opacity-100 translate-x-0' : '-translate-x-full'}`} key={id}>
              <img src={image} alt={id} className='w-full h-full object-cover shadow-md' />
            </article>
          );
        })}
        <button className='absolute top-1/2 -translate-y-1/2 bg-DarkSlateGray text-Silver w-10 h-10 grid place-content-center text-4xl rounded-lg cursor-pointer transition-all ease-in-out' onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        <button className='absolute top-1/2 -translate-y-1/2 right-0  bg-DarkSlateGray text-Silver w-10 h-10 grid place-content-center text-4xl rounded-lg cursor-pointer transition-all ease-in-out' onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Slider;