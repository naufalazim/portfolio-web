import {BiSolidRightArrow } from 'react-icons/bi'


const DSS = () => {
  return (
    <div>
        <h3 className='flex gap-1 font-medium text-xl font-titleFont'>Researcher @ <span className='text-textGreen'>UPNM</span></h3>
        <p className='text-sm mt-1 font-medium text-textDark'>July 2022 - August 2022</p>

        <ul className='mt-6 flex flex-col gap-3'>

        <li className='text-base flex gap-2 text-textDark'>    
                <span>
                    <BiSolidRightArrow className=" text-textGreen mt-1" />
                </span>
                Involve in Defence Security and Sustainability (DSS) Exhibition 2022 project.
            </li>

            <li className='text-base flex gap-2 text-textDark'>    
                <span>
                    <BiSolidRightArrow className=" text-textGreen mt-1" />
                </span>
                Developed and implemented a monitoring application for the university's computer lab, ensuring exam integrity and preventing cheating.
            </li>

            <li className='text-base flex gap-2 text-textDark'>    
                <span>
                    <BiSolidRightArrow className=" text-textGreen mt-1" />
                </span>
                Demonstrated outstanding problem-solving and technical skills in addressing a critical issue in the educational environment.
            </li>

            <li className='text-base flex gap-2 text-textDark'>    
                <span>
                    <BiSolidRightArrow className=" text-textGreen mt-1" />
                </span>
                Received bronze medal @ the DEFENCE, SECURITY AND SUSTAINABILITY EXHIBITION 2022 for presenting the innovative project and its contribution to academic integrity.
            </li>


         
        </ul>

    </div>
  )
}

export default DSS