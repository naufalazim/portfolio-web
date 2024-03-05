import React from 'react'
import SectionTitle from './SectionTitle'
import {MdGames} from 'react-icons/md'
import Image from 'next/image'
import { profileImg } from '@/public/assets'

const About = () => {
  return <section id='about' className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8'>
    <SectionTitle title="About Me" titleNo="01" />

    {/* <span className='text-textGreen'></span> */}

    <div className='flex flex-col lgl:flex-row gap-16'>
    <div className='w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4'>
            <p>
            My name is <span className='text-textGreen'>Naufal</span> and I am <span className='text-textGreen'>software engineer</span>. 
            </p>

            <p>
            I bring <span className='text-textGreen'>full-stack development </span>capabilities to the table, 
            comfortable working on both <span className='text-textGreen'>server-side</span> and <span className='text-textGreen'>client-side </span>
             aspects of web applications.
            </p>

            <p>
            I leverage my diverse experience across <span className='text-textGreen'>financial industry </span>and <span className='text-textGreen'>engineering industry </span> 
            to empower users and organizations.
            </p>

            <p>
            My passion for <span className='text-textGreen'>continuous learning </span>keeps me at the forefront of technology, ready to tackle any challenge
            </p>

      


            <p>Here a few <span className='text-textGreen'>technologies</span> I have been working recently:</p>
            <ul className='max-w-[450] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6'>
                <li className='flex items-center gap-2'> 
                <span className='text-textGreen'><MdGames /></span>
                Spring Frameworks (JAVA)
                </li>

                <li className='flex items-center gap-2'> 
                <span className='text-textGreen'><MdGames /></span>
                ASP.NET (C#)
                </li>

                <li className='flex items-center gap-2'> 
                <span className='text-textGreen'><MdGames /></span>
                Angular (TYPESCRIPT)
                </li>

                <li className='flex items-center gap-2'> 
                <span className='text-textGreen'><MdGames /></span>
                NextJS
                </li>

                <li className='flex items-center gap-2'> 
                <span className='text-textGreen'><MdGames /></span>
                Docker
                </li>

                <li className='flex items-center gap-2'> 
                <span className='text-textGreen'><MdGames /></span>
                Jenkins
                </li>

                <li className='flex items-center gap-2'> 
                <span className='text-textGreen'><MdGames /></span>
                MySQL
                </li>


                <li className='flex items-center gap-2'> 
                <span className='text-textGreen'><MdGames /></span>
                Azure DevOps
                </li>
            </ul>
        </div>

        <div className='w-full lgl:w-1/3 h-80 relative group'>
            <div className='absolute w-full h-80 -left-6 -top-6 rounded-lg'>
                <div className='w-full h-full relative z-20 flex pl-6 lgl:pl-0'>
                    <Image className='rounded-lg h-full object-cover'
                    src={profileImg}
                    alt='profile Image'
                    />
                    <div className='hidden lgl:inline-block absolute w-full h-80 
                     20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300'>

                    <div className='hidden lgl:inline-flex w-full h-80 border-2 
                    border-textGreen rounded-md group-hover:-translate-x-2 
                    group-hover:-translate-y-2 transition-transform duration-300'>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

    

  </section>
}

export default About