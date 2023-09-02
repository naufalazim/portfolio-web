import Image from 'next/image'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <>
    
    <main className='w-full h-screen font-bodyFont bg-bodyColor 
    text-textLight overflow-x-hidden overflow-y-scroll'>
      
      <Navbar />

      <div>
        LeftSide
      </div>

      <div>
        Banner
      </div>

      <div>
        Rightside
      </div>

    </main>
    
    </>
  )
}
