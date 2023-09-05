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
                My Project I Worked On
            </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10'>

            <AchieveCard   
            title="CryptoBank Java"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            listItem={['Java', 'Spring Boot', 'MySQL', 'ReactJS']}
            link="https://github.com/naufalazim/CryptoCurrencyBank"
            />

            <AchieveCard   
            title="CryptoBank Java"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            listItem={['Java', 'Spring Boot', 'MySQL', 'ReactJS']}
            link="https://github.com/naufalazim/CryptoCurrencyBank"
            />

            <AchieveCard   
            title="CryptoBank Java"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            listItem={['Java', 'Spring Boot', 'MySQL', 'ReactJS']}
            link="https://github.com/naufalazim/CryptoCurrencyBank"
            />

            {

                showMore && (
                    <>


            <AchieveCard   
            title="CryptoBank Java"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            listItem={['Java', 'Spring Boot', 'MySQL', 'ReactJS']}
            link="https://github.com/naufalazim/CryptoCurrencyBank"
            />

            <AchieveCard   
            title="CryptoBank Java"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            listItem={['Java', 'Spring Boot', 'MySQL', 'ReactJS']}
            link="https://github.com/naufalazim/CryptoCurrencyBank"
            />

            <AchieveCard   
            title="CryptoBank Java"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            listItem={['Java', 'Spring Boot', 'MySQL', 'ReactJS']}
            link="https://github.com/naufalazim/CryptoCurrencyBank"
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