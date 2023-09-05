"use client"
import React, { useState } from 'react'
import AchieveCard from './AchieveCard'
import {motion} from 'framer-motion'

const Achieve = () => {
    const [showMore, setShowMore] = useState(false);
  return (
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
            <motion.div
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.9}}
            >
            <AchieveCard   
            title="CryptoBank Java"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            listItem={['Java', 'Spring Boot', 'MySQL', 'ReactJS']}
            link="https://github.com/naufalazim/CryptoCurrencyBank"
            />
            </motion.div>

            <motion.div
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.9}}
            >
            <AchieveCard   
            title="CryptoBank Java"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            listItem={['Java', 'Spring Boot', 'MySQL', 'ReactJS']}
            link="https://github.com/naufalazim/CryptoCurrencyBank"
            />
            </motion.div>

            <motion.div
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.9}}
            >
            <AchieveCard   
            title="CryptoBank Java"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            listItem={['Java', 'Spring Boot', 'MySQL', 'ReactJS']}
            link="https://github.com/naufalazim/CryptoCurrencyBank"
            />
            </motion.div>

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
  )
}

export default Achieve