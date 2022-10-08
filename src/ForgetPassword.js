import React from 'react'
import {Link} from 'react-router-dom'
import email from './assets/Email.jpeg'
import Typed from 'react-typed';
import {BsGithub , BsLinkedin , BsTwitter , BsFacebook, BsInstagram} from 'react-icons/bs'
import {motion} from 'framer-motion'


function ForgetPassword() {
  return (
    <div className='w-full h-screen sm:h-full flex flex-col place-content-center items-center justify-center sm:flex-row text-header_bg_text bg-gray-100 '>
        <div className='hidden sm:grow sm:h-screen bg-cover bg-center bg-no-repeat bg-blend-overlay bg-gray-50 bg-opacity-50 sm:flex flex-col justify-center items-center place-content-center' style={{ backgroundImage : `url(${email})`}}>
            <p>
                <Typed className=' font-Alkalami font-bold text-xl md:text-3xl'
                    strings={['Welcome back to Olakay mail']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                />
            </p>
             
            <div className=' flex gap-4'>
                
                <motion.a initial={{ y:'100vw'}}
                            animate={{y:0}}
                            transition={{ duration:1}}
                    href='https://www.github.com/olakayCoder1' target='_blank' rel="noreferrer" className=' cursor-pointer'><BsGithub className='h-6 w-6  md:h-8 md:w-8'/></motion.a>
                <motion.a initial={{ y:'100vw'}}
                            animate={{y:0}}
                            transition={{ duration:2}} 
                    href='https://web.facebook.com/Kabiru.olakay' target='_blank' rel="noreferrer"><BsFacebook className='h-6 w-6  md:h-8 md:w-8'/></motion.a>
                <motion.a initial={{ y:'100vw'}}
                            animate={{y:0}}
                            transition={{ duration:3}} 
                    href='https://www.linkedin.com/in/olanrewaju-abdulkabeer/' target='_blank' rel="noreferrer"><BsLinkedin className='h-6 w-6  md:h-8 md:w-8'/></motion.a>
                <motion.a initial={{ y:'100vw'}}
                            animate={{y:0}}
                            transition={{ duration:4}} 
                    href='https://twitter.com/olakayCoder1' target='_blank' rel="noreferrer"><BsTwitter className='h-6 w-6  md:h-8 md:w-8'/></motion.a>
                <motion.a initial={{ y:'100vw'}}
                            animate={{y:0}}
                            transition={{ duration:5}} 
                    href='https://www.instagram.com/olakaycoder1/' target='_blank' rel="noreferrer" ><BsInstagram className='h-6 w-6  md:h-8 md:w-8'/></motion.a>
            </div>
        </div>
        <div className='w-full sm:w-[400px] bg-gray-100 flex items-center place-content-center'>
            <form className=' w-full flex flex-col gap-6 max-w-[80%] mx-auto '>
                <h1 className=' text-base font-bold'>Forget password</h1>
                <p className=' text-sm font-normal '>Enter the email address you use for registration. We will send password reset instruction.</p>
                <div class="relative">
                    <input type="email" id="mail_" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none   focus:outline-none focus:ring-[#0c2139]  focus:border-[#0c2139] peer" placeholder=" " />
                    <label for="mail_" class="absolute text-sm   duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-100  px-2 peer-focus:px-2 placeholder:text-sm placeholder:font-normal    peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Email</label>
                </div>
                <button type="button" class=" w-fit py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white   rounded-lg border border-gray-200 bg-header focus:z-10 focus:outline-none focus:ring-0  ">Send instruction</button>
            
                <p className=' text-sm font-medium'>Remembered password ?  
                    <Link to='/login'><span className='ml-3 hover:underline underline-offset-1'>Sign In</span></Link>
                </p> 
            </form>

            
        </div>
        <div className='w-full fixed bottom-4 flex gap-4  items-center place-content-center sm:hidden'>
                
                <motion.a initial={{ y:'100vw'}}
                            animate={{y:0}}
                            transition={{ duration:1}}
                    href='https://www.github.com/olakayCoder1' target='_blank' rel="noreferrer" className=' cursor-pointer'><BsGithub className='h-5 w-5'/></motion.a>
                <motion.a initial={{ y:'100vw'}}
                            animate={{y:0}}
                            transition={{ duration:2}} 
                    href='https://web.facebook.com/Kabiru.olakay' target='_blank' rel="noreferrer"><BsFacebook className='h-5 w-5'/></motion.a>
                <motion.a initial={{ y:'100vw'}}
                            animate={{y:0}}
                            transition={{ duration:3}} 
                    href='https://www.linkedin.com/in/olanrewaju-abdulkabeer/' target='_blank' rel="noreferrer"><BsLinkedin className='h-5 w-5'/></motion.a>
                <motion.a initial={{ y:'100vw'}}
                            animate={{y:0}}
                            transition={{ duration:4}} 
                    href='https://twitter.com/olakayCoder1' target='_blank' rel="noreferrer"><BsTwitter className='h-5 w-5'/></motion.a>
                <motion.a initial={{ y:'100vw'}}
                            animate={{y:0}}
                            transition={{ duration:5}} 
                    href='https://www.instagram.com/olakaycoder1/' target='_blank' rel="noreferrer" ><BsInstagram className='h-5 w-5'/></motion.a>
            </div>
    </div>
  )
}

export default ForgetPassword
