import React from 'react'
import {BsGithub , BsFacebook , BsInstagram , BsTwitter, BsLinkedin} from 'react-icons/bs'
import {SiSololearn} from 'react-icons/si'
import omkit from './assets/olakay-twit.jpeg'
import {motion} from 'framer-motion'

function Footer() {
  return (
    <div className=' w-full p-6 py-12 lg:p-12 lg:pb-32 bg-header flex justify-around md:justify-start text-white mt-4'>
      {/* stay connected  */}
      <div className=' flex flex-col '>
        <img src={omkit} className='w-16'/>
        <h3 className=' font-headingFont text-base font-bold'>Olanrewaju Abdulkabeer</h3>
      </div>
      <div className=' grid grid-cols-2 md:grow md:flex flex-col gap-6 md:flex-row justify-evenly'>
        {/* payment  */}
        <div className=' flex flex-col gap-2'>
            <p className=' text-xs font-normal flex flex-col gap-3 ' > 
                <a href='https://www.github.com/olakayCoder1' target='_blank' rel="noreferrer" className='p-2 rounded-full hover:text-omkit cursor-pointer'><BsGithub className='w-5 h-5'/> Github</a>
                <a href='https://www.linkedin.com/in/olanrewaju-abdulkabeer/' target='_blank' rel="noreferrer"  className='p-2 rounded-full hover:text-omkit cursor-pointer'><BsLinkedin className='w-5 h-5'/> Linkedin</a>
            </p>
        </div>
        {/* payment  */}
        <div className=' flex flex-col gap-2'>
            <p className=' text-xs font-normal flex flex-col gap-3 ' > 
                <a href='https://www.sololearn.com/profile/18461184' target='_blank' rel="noreferrer"  ><SiSololearn className='w-5 h-5'/> Sololearn</a>
                <a href='https://twitter.com/olakayCoder1' target='_blank' rel="noreferrer"  className='p-2 rounded-full hover:text-omkit cursor-pointer'><BsTwitter className='w-5 h-5'/> Twitter</a>
            </p>
        </div>
        {/* payment  */}
        <div className=' flex flex-col gap-2'>
            <ul className=' text-xs font-normal flex flex-col gap-3 ' > 
                <a href='https://www.instagram.com/olakaycoder1/' target='_blank' rel="noreferrer"   className='p-2 rounded-full hover:text-omkit cursor-pointer'><BsInstagram className='w-5 h-5'/> Instagram</a>
                <a href='https://web.facebook.com/Kabiru.olakay' target='_blank' rel="noreferrer" className='p-2 rounded-full hover:text-omkit cursor-pointer'><BsFacebook className='w-5 h-5'/> Facebook</a>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer

