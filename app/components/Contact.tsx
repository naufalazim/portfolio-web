import React from 'react'
import SectionTitle from './SectionTitle'
import { useState } from 'react'

const Contact = () => {
  return <section
  id='contact'
  className='max-w-containerxs mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center'>
  
  <SectionTitle title='Contact Me' titleNo='04' />

  <h2 className='font-titleFont text-5xl font-semibold mt-10'>Get In Touch</h2>

  <p className='max-w-[600px] text-center text-textDark'>
    Feel free to contact me if you have any questions or just want to say hi!
  </p>
  
  <a href='https://api.whatsapp.com/send?phone=60139057514&text=Hello%20Naufal!' target='_blank' >
  <button className='w-32 h-12 text-sm font-titleFont border mt-5 border-textGreen border-textGreen-600 text-textGreen tracking-wide hover:bg-hoverColor duration-300'>
    Contact Me
  </button>
  </a>

  </section>
}

export default Contact