"use client";
import React from 'react'
// import { motion } from 'framer-motion'

const Banner = () => {
  return <section id="home" 
  className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4">

    <h3 className='text-lg font-titleFont tracking-wide text-textGreen font-bold'>Hello there, I'm 👋🏻</h3>

    <h1 className='text-4xl lgl:text-6xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-500 from-sky-600 font-semibold flex flex-col'>
        Naufal Azim
        <span className="text-xl">
            Former Software Engineer Trainee @ 
            
            <span className='text-textGreen'> Petronas</span> 
        </span>
    </h1>

    <p>
        {""}
            I'm fresh graduate with a passion for creating robust, scalable software solutions. Ex-student from Universiti Pertahanan Nasional Malaysia with a Bachelor's Degree in Computer Science (Cyber-Security).
        {""}
    </p>

    <button className="w-52 h-12 text-sm font-titleFont border border-textGreen border-textGreen-600 text-textGreen tracking-wide hover:bg-hoverColor duration-300">
        <span>My Resume</span>
    </button>


  </section>
}

export default Banner