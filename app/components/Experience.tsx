"use client";
import React, { useState } from 'react'
import SectionTitle from './SectionTitle'
import Petronas from './works/Petronas'
import DSS from './works/DSS';

const Experience = () => {

    // Add new state here: 
    const [workPetronas, setworkPetronas] = useState(true)
    const [workDSS, setworkDSS] = useState(false)


    const handlePet = () => {
        setworkPetronas(true);
        setworkDSS(false);
    }

    const handleDSS = () => {
        setworkPetronas(false);
        setworkDSS(true);
    }

  return <section 
        id='experience' 
        className='max-w-containerxs mx-auto py-10 lgl:py-24 px-4'>

        <SectionTitle title='My Experience' titleNo='02' />

    <div className='w-full mt-10 flex flex-col md:flex-row gap-16'>

        <ul className='md:w-32 flex flex-col'>
            {/* Add Company Title Here:  */}

            <li 
            onClick={handlePet} 
            className={` 
                ${workPetronas ? 
                    " border-l-textGreen text-textGreen ": 
                    " border-l-textDark text-textDark "
                }  
            border-l-2 border-l-textGreen text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm 
            cursor-pointer duration-300 px-8 font-medium`}>
                Petronas
            </li>

            <li 
            onClick={handleDSS} 
            className={` ${workDSS ? 
                " border-l-textGreen text-textGreen ": 
                " border-l-textDark text-textDark "
                }  
             border-l-2 border-l-textGreen text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm 
            cursor-pointer duration-300 px-8 font-medium`}>
                DSS
            </li>

        </ul>

        {/* When User Click It Shows The Content Below: */}
        {workPetronas && <Petronas />}
        {workDSS && <DSS />}
        
    </div>
  </section>
}

export default Experience