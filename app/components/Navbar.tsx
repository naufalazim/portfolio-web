"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Logo } from '@/public/assets'

const Navbar = () => {
  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4">
        <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
            <div>
            <Image className="w-14" src={Logo} alt="logo" />
            </div>
            <div className="hidden md:inline-flex items-center gap-7">
                <ul className="flex text-[13px] gap-8">
                    <Link 
                    href="#home" 
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
                    <li>Home</li>
                    </Link>

                    <Link 
                    href="#about" 
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
                    <span>01.</span> About{""}
                    </Link>

                    <Link 
                    href="#experience" 
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
                    <span>02.</span> Experience{""}
                    </Link>

                    <Link 
                    href="#project" 
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
                    <span>03.</span> Project{""}
                    </Link>

                    <Link 
                    href="#contact" 
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
                    <span>04.</span> Hire me!{""}
                    </Link>

                    {/* <a href="assets/resume.pdf" target="_blank">
                    <button className="px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300">
                       Resume
                    </button>
                    </a> */}
                </ul>
            </div>

                 {/* Mobile Section  */}
                 <div className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group">
                    <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300">

                    </span>
                    <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300">

                    </span>
                    <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300">

                    </span>
                 </div>
        </div>
    </div>
  )
}

export default Navbar