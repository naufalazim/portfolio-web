import React from 'react'
import SectionTitle from './SectionTitle'
import {MdGames} from 'react-icons/md'
import Image from 'next/image'
import { profileImg } from '@/public/assets'

const About = () => {
  return <section id='about' className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8'>
    <SectionTitle title="About Me" titleNo="01" />

    <div className='flex flex-col lgl:flex-row gap-16'>
    <div className='w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4'>
            <p>
            Back in 2020, <span className='text-textGreen'>I decided to change</span> my university program from E&E Engineering to Computer Science (Cyber-Security) because I found out that I'm more interested in programming and software development.
            Fast-forward to today, I've had privilege of building software for Petronas as a Software Engineer Trainee. 
            Futhermore, I achieve first class degree in Computer Science! 
            </p>

            <p>
            My main focus these days is building products for an <span className='text-textGreen'>advertising agency</span>, a <span className="text-textGreen">start-up</span>, a <span className='text-textGreen'>student-led project</span> and <span className='text-textGreen'>huge corporation</span> too. 
            In my free time I always learn new things about technology and software development.
            </p>

            <p>
            And if you`re interested in working together,<span className='text-textGreen'>don`t hesitate to reach out!</span> I`m always happy to chat with fellow tech enthusiasts. 
            </p>

            <p>Here a few <span className='text-textGreen'>technologies</span> I have been working recently:</p>
            <ul className='max-w-[450] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6'>
                <li className='flex items-center gap-2'> 
                <span className='text-textGreen'><MdGames /></span>
                Java
                </li>

                <li className='flex items-center gap-2'> 
                <span className='text-textGreen'><MdGames /></span>
                C#
                </li>

                <li className='flex items-center gap-2'> 
                <span className='text-textGreen'><MdGames /></span>
                TypeScript
                </li>

                <li className='flex items-center gap-2'> 
                <span className='text-textGreen'><MdGames /></span>
                Javascript (ES6+)
                </li>

                <li className='flex items-center gap-2'> 
                <span className='text-textGreen'><MdGames /></span>
                ASP.NET
                </li>

                <li className='flex items-center gap-2'> 
                <span className='text-textGreen'><MdGames /></span>
                Nextjs
                </li>

                <li className='flex items-center gap-2'> 
                <span className='text-textGreen'><MdGames /></span>
                Angular
                </li>


                <li className='flex items-center gap-2'> 
                <span className='text-textGreen'><MdGames /></span>
                Spring Boot
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