import React from 'react'
import Image from 'next/image'
import {SiGithub} from 'react-icons/si'
import { Project1 } from '@/public/assets'

const Projects = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>


      {/* First Project  */}
       <div className='flex flex-col xl:flex-row gap-6'>

          <a className='w-full h-auto  relative group' href='google.com' target='_blank'>
            <div>
            <Image className="w-full h-full object-contain" src={Project1} alt='Project Pitstops' />
            </div>
          </a>

        <div className='w-full flex flex-col gap-6 items-end text-left xl:-ml-16 z-10'>
              <p className='font-titleFont text-textGreen text-sm tracking-wide'>Feature Project</p>
              <h3 className='text-2xl font-bold'>PITSTOPS</h3>
              <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Repudiandae qui dolorum vitae cum aut nam corrupti mollitia illum aliquid facilis 
              tempora commodi molestias recusandae perspiciatis, ex impedit totam voluptatibus velit.</p>

          <ul className='text-sm md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
            <li>Angular</li>
            <li>C#</li>
            <li>Angular</li>
            <li>C#</li>
            <li>Angular</li>
            <li>C#</li>
          </ul>
          <div className='text-2xl flex gap-4 '>
            <a className='hover:text-textGreen duration-300'>
            <SiGithub />
            </a>
          </div>
          </div>
    </div>


    {/* Next Project  */}




  </div>

  
  )
}

export default Projects