import React from 'react'
import HeaderNav from './components/HeaderNav'
import HistoryBCard from './components/HistoryBCard'





function HistoryB() {
  return (
    <div className=' w-full h-full text-sm font-medium font-headingFont'>
        <HeaderNav />
        <div className=' w-full h-full flex flex-col gap-2  sm:max-w-[500px] mx-auto px-4 py-6  my-2 rounded-md'>
            <HistoryBCard />
            <HistoryBCard />
            <HistoryBCard />
            <HistoryBCard />
            <HistoryBCard />
            <HistoryBCard />
        </div>
    </div>
  )
}

export default HistoryB
