import React from 'react'
import BlacklistCard from './components/BlacklistCard'
import HeaderNav from './components/HeaderNav'
import Footer from './Footer'


function Blacklist() {
  return (
    <div className=' w-full h-full text-sm font-medium font-headingFont' >
        <HeaderNav />
        <h2 className=' text-center text-xl font-extrabold py-4'>Blacklist</h2>
        <div className=' w-full h-full flex flex-col gap-2 max-w-[400px] lg:max-w-[500px] mx-auto  bg-gray-100  my-4 rounded-md'>
        <BlacklistCard />            
        <BlacklistCard />            
        <BlacklistCard />            
        <BlacklistCard />            
        <BlacklistCard />            
        <BlacklistCard />            
        <BlacklistCard />            
        <BlacklistCard />            
        <BlacklistCard />            
        <BlacklistCard />            
        <BlacklistCard />            
        <BlacklistCard />            
        <BlacklistCard />            
        </div>
        <Footer />
    </div>
  )
}

export default Blacklist
