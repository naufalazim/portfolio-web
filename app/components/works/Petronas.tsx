import {BiSolidRightArrow } from 'react-icons/bi'


const Petronas = () => {
  return (
    <div>
        <h3 className="flex gap-1 font-medium text-xl font-titleFont">Software Engineer Trainee @<span className='text-textGreen'>Petronas</span></h3>
        <p className="text-sm mt-1 font-medium text-textDark">March 2023 - Sept 2023</p>

        <ul className='mt-6 flex flex-col gap-3'>
            <li className='text-base flex gap-2 text-textDark'>    
                <span>
                    <BiSolidRightArrow className=" text-textGreen mt-1" />
                </span>
                Project: PITSTOPS
            </li>

            <li className='text-base flex gap-2 text-textDark'>    
                <span>
                    <BiSolidRightArrow className=" text-textGreen mt-1" />
                </span>
                PITSTOPS stands for PETRONAS Integrated Shutdown Turnaround Outage (STO) Planning & Execution Solution
            </li>

            <li className='text-base flex gap-2 text-textDark'>    
                <span>
                    <BiSolidRightArrow className=" text-textGreen mt-1" />
                </span>
                Diagnosed and resolved a critical frontend bug in an Angular web app, enhancing user satisfaction and optimizing performance. This quick fix resulted in a 20% reduction in support requests related to frontend issues.
            </li>

            <li className='text-base flex gap-2 text-textDark'>    
                <span>
                    <BiSolidRightArrow className=" text-textGreen mt-1" />
                </span>
                Developed RESTful APIs using C# (ASP.NET) while also effectively troubleshooting and resolving coding issues to enhance application functionality and user experience.
            </li>

            <li className='text-base flex gap-2 text-textDark'>    
                <span>
                    <BiSolidRightArrow className=" text-textGreen mt-1" />
                </span>
                Designed and implemented efficient database schemas, optimizing data storage and retrieval processes.
            </li>

            <li className='text-base flex gap-2 text-textDark'>    
                <span>
                    <BiSolidRightArrow className=" text-textGreen mt-1" />
                </span>
                Tech Stacks: ASP.NET (5.0), Angular, MySQL, Azure DevOps
            </li>

         
        </ul>
    </div>
  )
}

export default Petronas