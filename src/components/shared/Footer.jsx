import React from 'react'
import {RiCopyrightLine} from 'react-icons/ri'

export const Footer = () => {
    const date = new Date().getFullYear();

  return (
    <section className={`w-full h-min font-sourceSansPro bg-Silver max-w-[85rem] mx-auto grid place-content-center`}>
       <div className='w-min h-min px-3'>
         <div className='flex items-center gap-x-3 min-w-[18rem] justify-around my-4'>           
         </div>
         <div className='md:flex md:w-min'>
         <div className='min-w-[18rem] h-min grid grid-cols-2 grid-rows-2 text-center gap-5 my-4'>
             <li className='list-none'><button>Privacy & Terms</button></li>
             <li className='list-none'><button>Contact Us</button></li>
             <li className='list-none'><button>Support</button></li>
             <li className='list-none'><button>FAQ</button></li>
         </div>
         <div className={` mb-4 md:w-72 text-DarkSlateGray grid place-content-center`}>
           <h1 className='text-3xl font-bold'>CosmoQuest</h1>
         </div>
         </div>
         <div className='flex items-center justify-center h-10'>
           <RiCopyrightLine className='h-full' />
           <p>Copyright {date}. All rights reserved.</p>
        </div>
       </div>
    </section>
  )
}