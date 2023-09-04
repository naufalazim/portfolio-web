import React from 'react'
import SectionTitle from './SectionTitle'
import Image from 'next/image'
import { Project1 } from '@/public/assets'
import { SiGithub } from 'react-icons/si'
import Projects from './Projects'

const Project = () => {
  return <section id='project' className='max-w-containerxs mx-auto py-10 lgl:py-24 px-4'>

    <SectionTitle title='My Project I Worked On' titleNo='03' />

    <Projects />

  </section>
  
}

export default Project