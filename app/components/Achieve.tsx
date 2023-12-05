"use client"
import React, { useState } from 'react'
import AchieveCard from './AchieveCard'
import SectionTitle from './SectionTitle';

const Achieve = () => {
    const [showMore, setShowMore] = useState(false);
  return  <section id='project' className=''>

    {/* <SectionTitle title='My Project I Worked On' titleNo='03' /> */}

    <div className='max-w-contentComtainer mx-auto px-20 py-24'>
        <div className='w-full flex flex-col items-center'>
            
            <h2 className='text-3xl font-titleFont font-semibold '>
                Project 
            </h2>

            <p className='text-sm font-titleFont text-textGreen '>
                Project I Worked/Involved
            </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10'>

            <AchieveCard   
            title="PITSTOPS"
            des="PETRONAS Integrated Shutdown Turnaround Outage (STO) Planning & Execution Solution."
            listItem={['ASP.NET', 'Angular', 'MySQL', 'Azure DevOps']}
            link="https://pitstops.petronas.com/"
            />

            <AchieveCard   
            title="Möbius"
            des="The Möbius platform contains everything you would expect from a newly designed banking platform – cloud-ready, API-based, customer-centric and ready for the emerging financial eco-systems and market-places."
            listItem={['Java 11', 'Spring Boot', 'Spring Batch', 'TiDB', 'Jenkins', 'Gitlab']}
            link="https://github.com/naufalazim/CryptoCurrencyBank"
            />

            <AchieveCard   
            title="Music Player"
            des="CRUD Spring Boot app for music player using amazon S3"
            listItem={['Java', 'Spring Boot', 'Amazon S3']}
            link="https://github.com/naufalazim/music-player"
            />

            {

                showMore && (
                    <>


            <AchieveCard   
            title="Tuah Barbershop"
            des="Barbershop Application CRUD."
            listItem={['PHP', 'HTML', 'CSS', 'MySQL', 'Javascript', 'Bootstrap 4.0']}
            link="hhttps://github.com/naufalazim/tuah-barbershop-app"
            />

            <AchieveCard   
            title="CryptoBank Java"
            des="Java Bank Application"
            listItem={['Java', 'Java Gui']}
            link="https://github.com/naufalazim/CryptoCurrencyBank"
            />

            <AchieveCard   
            title="Rick & Morty"
            des="React Web App"
            listItem={['React', 'Axios']}
            link="https://github.com/naufalazim/rick-and-morty"
            />


             </>

                )

            }

        </div>

        <div className='mt-12 flex justify-center items-center'>
            {

                // If user click show more, show less button will appear:    
                showMore ?             
                <button 
                onClick={() => setShowMore(false)}
                className='w-36 h-12 rounded-md text-textGreen text=[13px] border border-textGreen hover:bg-hoverColor duration-300'>
                    Show Less
                </button>:             
                
                <button 
                onClick={() => setShowMore(true)}
                className='w-36 h-12 rounded-md text-textGreen text=[13px] border border-textGreen hover:bg-hoverColor duration-300'>
                    Show More
                </button>
            }
        </div>
    </div>


  </section>
  
}

export default Achieve