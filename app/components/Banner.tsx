"use client";
import React from 'react'
// import { motion } from 'framer-motion'

const Banner = () => {
  return <section id="home" 
  className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4">

    <h3 className='text-lg font-titleFont tracking-wide text-textGreen font-bold'>Hello, there 👋🏻</h3>

    <h1 className='text-4xl lgl:text-6xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-800 from-sky-300 font-semibold flex flex-col'>
        Naufal Azim
        <span className="text-xl">
            I'm  
            
            <span className='text-textGreen'> Software Engineer</span> 
        </span>
    </h1>

    <p>
        {""}      
      I'm a software engineer driven by a passion for crafting resilient and adaptable 
      software solutions that empower users and organizations.
        {""}
    </p>

    <a href="assets/resume.pdf" target='_blank'>
            <button className="w-32 h-12 text-sm font-titleFont border border-textGreen border-textGreen-600 text-textGreen tracking-wide hover:bg-hoverColor duration-300">
        <span>My Resume</span>
    </button>
    </a>


  </section>
}

export default Banner