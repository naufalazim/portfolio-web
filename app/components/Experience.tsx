"use client";
import React, { useState } from 'react'
import SectionTitle from './SectionTitle'
import Petronas from './works/Petronas'
import DSS from './works/DSS';
import Silverlake from './works/Silverlake';

const Experience = () => {

    // Add new state here: 
    const [workPetronas, setworkPetronas] = useState(true)
    const [workSilverlake, setworkSilverlake] = useState(false)


    const handlePet = () => {
        setworkSilverlake(false);
        setworkPetronas(true);
    }

    const handleSilverlake = () => {
        setworkSilverlake(true);
        setworkPetronas(false);
    }

  return <section 
        id='experience' 
        className='max-w-containerxs mx-auto py-10 lgl:py-24 px-4'>

        <SectionTitle title='My Experience' titleNo='02' />

    <div className='w-full mt-10 flex flex-col md:flex-row gap-16'>

        <ul className='md:w-32 flex flex-col'>
            {/* Add Company Title Here:  */}

            <li 
            onClick={handleSilverlake} 
            className={` 
                ${workSilverlake ? 
                    " border-l-textGreen text-textGreen ": 
                    " border-l-textDark text-textDark "
                }  
            border-l-2 border-l-textGreen text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm 
            cursor-pointer duration-300 px-8 font-medium`}>
                SILVERLAKE AXIS
            </li>

            <li 
            onClick={handlePet} 
            className={` 
                ${workPetronas ? 
                    " border-l-textGreen text-textGreen ": 
                    " border-l-textDark text-textDark "
                }  
            border-l-2 border-l-textGreen text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm 
            cursor-pointer duration-300 px-8 font-medium`}>
                PETRONAS
            </li>

        </ul>

        {/* When User Click It Shows The Content Below: */}
        {workPetronas && <Petronas />}
        {workSilverlake && <Silverlake />}
        
    </div>
  </section>
}

export default Experience