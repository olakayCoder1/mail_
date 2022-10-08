import React from 'react'
import HeaderNav from './components/HeaderNav'
import Footer from './Footer'


function Home() {
  return (
    <div className=' w-full h-full text-sm font-medium font-headingFont' >
        <HeaderNav />
        <h2 className=' text-center text-xl font-extrabold py-4'>Send Mail to your friends</h2>
        <div className=' w-full h-full max-w-[400px] lg:max-w-[450px] mx-auto px-4 py-6 bg-gray-100 my-2 rounded-md'>
            <h2 className=' font-semibold text-center py-6 pt-3'>Send Mail to your friends</h2>
            <form className=' flex flex-col gap-6'>
                <div class="relative">
                    <input type="text" id="mail_subject" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none   focus:outline-none focus:ring-[#0c2139]  focus:border-[#0c2139] peer" placeholder=" " />
                    <label for="mail_subject" class="absolute text-sm   duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-100  px-2 peer-focus:px-2 placeholder:text-sm placeholder:font-normal    peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Mail Subject</label>
                </div>
                <div class="relative">
                    <input type="email" id="mail_subject" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none   focus:outline-none focus:ring-[#0c2139]  focus:border-[#0c2139] peer" placeholder=" " />
                    <label for="mail_subject" class="absolute text-sm font-medium   duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-100 px-2 peer-focus:px-2 placeholder:text-sm placeholder:font-normal    peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Mail Destination</label>
                </div>

                <div class="relative">
                    <textarea type="text" id="mail_content" rows="4" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none   focus:outline-none focus:ring-[#0c2139]  focus:border-[#0c2139] peer" placeholder=" " />
                    <label for="mail_content" class="absolute text-sm font-medium   duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-100 px-2 peer-focus:px-2 placeholder:text-sm placeholder:font-normal    peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/4 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Mail Content</label>
                </div>
                <button type="button" class=" w-fit py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white   rounded-lg border border-gray-200 bg-header focus:z-10 focus:outline-none focus:ring-0  ">Send</button>
            </form>
        </div>
        <Footer />
    </div>
  )
}

export default Home
