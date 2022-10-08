import React, { useState } from 'react'
import {FiChevronUp , FiChevronDown} from 'react-icons/fi'

function HistoryCard() {

    const [ showBody , setShowBody ] = useState(false)
  return (
    <div className=' w-full border-b border-[#0c2139] mb-2 pb-2'>
        <div className=' flex justify-between items-center'>
            <div>
                <h3 className=' text-base'>programmerolakay@gmail.com</h3>
                <time className=' text-xs text-light_'>27-4-2020</time>
            </div>
            <p onClick={()=>setShowBody(!showBody)}
                className={`${showBody ? "bg-gray-300 text-header_bg_text " : " bg-header text-white"} cursor-pointer  p-1 rounded-full`}>
                    {showBody ? <FiChevronUp className=' w-5 h-5'/> : <FiChevronDown className=' w-5 h-5'/>}
            </p>
        </div>
       {showBody && (
            <div>
                <p>
                    HTML doesn't offer an option to create a form that sends an email after submission. However, you can use the form action element to set a mailto 
                    HTML doesn't offer an option to create a form that sends an email after submission. However, you can use the form action element to set a mailto 
                </p>

                <p  class="w-fit  text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs px-5 py-2 m-2 mb-0 cursor-pointer">Delete</p>
            </div>
       )}
       
    </div>
  )
}

export default HistoryCard
