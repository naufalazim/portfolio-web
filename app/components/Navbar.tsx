"use client";
import React, { useState } from 'react'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Logo } from '@/public/assets'

const Navbar = () => {
const ref = useRef<string | any>("");
const [showMenu, setShowMenu] = useState(false);
const handleScroll = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  e.preventDefault();
  const href = e.currentTarget.href; 
  const targetId = href.replace(/.*\#/, "");
  const elem = document.getElementById(targetId);
  elem?.scrollIntoView({ behavior: "smooth" });
  
  //Update the class name
  const links = document.querySelectorAll(".nav-link");
  links.forEach((link) => {
    link.classList.remove("active");
  }
  );

  e.currentTarget.classList.add("active");

 }

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
                    onClick={handleScroll}
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
                    <li>Home</li>
                    </Link>

                    <Link 
                    href="#about" 
                    onClick={handleScroll}
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
                    <span>01.</span> About{""}
                    </Link>

                    <Link 
                    href="#experience" 
                    onClick={handleScroll}
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
                    <span>02.</span> Experience{""}
                    </Link>

                    <Link 
                    href="#project" 
                    onClick={handleScroll}
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
                    <span>03.</span> Project{""}
                    </Link>

                    <Link 
                    href="#contact" 
                    onClick={handleScroll}
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
                    <span>04.</span> Hire me!{""}
                    </Link>

                </ul>
            </div>

                 {/* Mobile Section  */}
                 <div 
                onClick={() => setShowMenu(true)}
                 className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group">
                    <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300">

                    </span>
                    <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300">

                    </span>
                    <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300">

                    </span>
                 </div>
                 {
                      showMenu && (
                        <div ref={(node) => (ref.current = node)}
                        className='absolute mdl:hidden top-0 right-0-w-full h-screen bg-black bg-opacity-50 flex flex-col items-end'
                        >
                          {/* onClick={handleClick} */}
                        </div>
                      )
                 }
        </div>
    </div>
  )
}

export default Navbar