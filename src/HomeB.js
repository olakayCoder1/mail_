import React from 'react'
import HeaderNav from './components/HeaderNav'
import Footer from './Footer'
import {BsSearch} from 'react-icons/bs'
import hero from './assets/hero-icons.png'
import BookCard from './components/BookCard'

function HomeB() {
  return (
    <div className=' w-full h-full text-sm font-medium font-headingFont' >
        <HeaderNav />
        <form class="flex items-center my-2 max-w-5xl mx-auto bg-header_light rounded-lg">   
            <div class="relative w-full  ">
                <input type="text" id="simple-search" class=" bg-header_light border border-[#eff3f6] focus:border-[#eff3f6] rounded-tl-lg rounded-bl-lg text-base  focus:outline-none focus:ring-0  block w-full pl-10 p-2.5 " placeholder="Search for books" required />
            </div>
            <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-header_light rounded-tr-lg rounded-br-lg focus:outline-none focus:ring-0">
                <BsSearch className='w-5 h-5 text-light_'/>
            </button>
        </form>
        <div className=' w-full h-full  mx-auto px-4 py-6 bg-gray-100  rounded-md'>
            <div>
                <h2 className=' p-6 text-xl font-bold'>Popular Books</h2>

                <div className=' grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6'>
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                </div>
            </div>
            
        </div>
        <Footer />
    </div>
  )
}

export default HomeB
