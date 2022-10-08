import React from 'react'
import HeaderNav from './components/HeaderNav'
import HistoryCard from './components/HistoryCard'
import Footer from './Footer'

function History() {
  return (
    <div className=' w-full h-full text-sm font-medium font-headingFont' >
        <HeaderNav />
        <h2 className=' text-center text-xl font-extrabold py-4'>History</h2>
        <div className=' w-full h-full flex flex-col gap-2 max-w-[400px] lg:max-w-[500px] mx-auto px-4 py-6 bg-gray-100 my-2 rounded-md'>
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
        </div>
        <Footer />
    </div>
  )
}

export default History
