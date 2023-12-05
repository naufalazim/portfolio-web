import {BiSolidRightArrow } from 'react-icons/bi'


const Silverlake = () => {
  return (
    <div>
        <h3 className="flex gap-1 font-medium text-xl font-titleFont">Junior Software Engineer<span className='text-textGreen'>Silverlake Axis</span></h3>
        <p className="text-sm mt-1 font-medium text-textDark">Sept 2023 - Present</p>

        <ul className='mt-6 flex flex-col gap-3'>
            <li className='text-base flex gap-2 text-textDark'>    
                <span>
                    <BiSolidRightArrow className=" text-textGreen mt-1" />
                </span>
                Project: Digital Core Möbius
            </li>

            <li className='text-base flex gap-2 text-textDark'>    
                <span>
                    <BiSolidRightArrow className=" text-textGreen mt-1" />
                </span>
                Spearheaded the development of Mobius Core Banking, a groundbreaking project that revolutionized banking processes.
            </li>

            <li className='text-base flex gap-2 text-textDark'>    
                <span>
                    <BiSolidRightArrow className=" text-textGreen mt-1" />
                </span>
                Engineered seamless API integration with SOAP API using cutting-edge technologies, with a primary focus on Spring Boot.
            </li>

            <li className='text-base flex gap-2 text-textDark'>    
                <span>
                    <BiSolidRightArrow className=" text-textGreen mt-1" />
                </span>
                Demonstrated expertise in handling and processing large volumes of data by implementing robust solutions with Spring Batch, ensuring optimal performance and efficiency.
            </li>

            <li className='text-base flex gap-2 text-textDark'>    
                <span>
                    <BiSolidRightArrow className=" text-textGreen mt-1" />
                </span>
                Played a pivotal role in designing and implementing highly efficient database schemas, significantly enhancing data storage and retrieval processes.
            </li>

         
        </ul>
    </div>
  )
}

export default Silverlake