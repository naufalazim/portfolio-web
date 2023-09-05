import Image from 'next/image'
import Navbar from './components/Navbar'
import LeftSide from './components/LeftSide'
import RightSide from './components/RightSide'
import Banner from './components/Banner'
import About from './components/About'
import Experience from './components/Experience'
import Album from './components/Album'
import Project from './components/Project'
import Achieve from './components/Achieve'
import Contact from './components/Contact'

export default function Home() {
  return (
    <>
    
    <main className='w-full h-screen font-bodyFont bg-bodyColor 
    text-textLight overflow-x-hidden overflow-y-scroll'>
      
      <Navbar />

      <div className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0">
          <LeftSide />
        </div>

        <div className="h-[88vh] w-full mx-auto p-4">
            <Banner />
            <About />
            <Experience />
            {/* <Project /> */}
            <Achieve />
            <Album />
            <Contact />
            {/* Footer */}
        </div>

      <div className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0">
        <RightSide />
        </div>

    </main>
    
    </>
  )
}
