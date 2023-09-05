import React from 'react'
import {AiTwotoneFolderOpen} from 'react-icons/ai'
import {RxOpenInNewWindow} from 'react-icons/rx'

interface Props {
    title:string,
    des:string,
    listItem:string[],
    link:string
}


const AchieveCard = ({ title, des, listItem, link }: Props) => {
  return (
    <a href={link} target='_blank'>
        
    <div className='w-full h-80 rounded-lg bg-[#112240] p-7 
    flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group'>

        <div className='flex justify-between items-center'>
            <AiTwotoneFolderOpen className="text-4xl text-textGreen" />
            <RxOpenInNewWindow className="text-4xl hover:text-textGreen" />
        </div>

        <div>
            <h2 className='text-xl font-titleFont font-semibold tracking-wide group-hover:text-textGreen'>
                {title}
            </h2>
            <p className='text-sm mt-3'> 
            {des}
            </p>
        </div>

        <ul className='text-xs mdl:text-sm text-textDark flex items-center gap-2 flex-wrap'>
            {
                listItem.map((item, i) => (
                    <li className='px-2 py-1 hover:bg-textGreen hover:text-[#112240] text-sm font-medium rounded' key={i}>{item}</li>
                ))
            }
        </ul>
        
    </div>

    </a>
  )
}

export default AchieveCard