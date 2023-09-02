import React from 'react'
import {ImGithub} from "react-icons/im";
import {GrLinkedin} from "react-icons/gr";

const LeftSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
        <div className="flex flex-col gap-4">

            <a href="https://github.com/naufalazim" target="_blank">
                <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                    <ImGithub/>
                </span>
            </a>

            <a href="https://www.linkedin.com/in/mnaufalazim/" target="_blank">
                <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                    <GrLinkedin/>
                </span>
            </a>

        </div>

        <div className="w-[2px] h-32 bg-textDark">

        </div>
    </div>
  )
}

export default LeftSide