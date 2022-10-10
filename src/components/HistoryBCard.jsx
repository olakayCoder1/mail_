import React from 'react'
import image26 from '../assets/Email.jpeg'

function HistoryBCard() {
  return (
    <div className='h-32 flex items-center gap-3  p-2 border-b'>
      <div className='w-5/12'>
        <img src={image26} />
      </div>
        <div className='w-7/12 flex flex-col gap-1'>
            <h3 className=' text-base font-bold'>Python documentation</h3>
            <time className=' text-xs text-light_'>loan at : 20-30-3030</time>
            <time className=' text-xs text-red-500'>Due date : 20-30-3030</time>
            <p className=' p-1.5 px-4  w-fit cursor-pointer bg-header text-white rounded-md'>Return</p>
        </div>
    </div>
  )
}

export default HistoryBCard
