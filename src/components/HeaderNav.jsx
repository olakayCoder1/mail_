import React, { useState } from 'react'
import logo from '../assets/flaticon_negative.svg'
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaRegUser} from 'react-icons/fa'
import {GrClose} from 'react-icons/gr'
import {useNavigate} from 'react-router-dom'

function HeaderNav() {

    const navigate = useNavigate()
    const [ showNav , setShowNav ] = useState(false)
    const [ showDrop , setShowDrop ] = useState(false)
  return (
    <div className='w-full bg-header flex  justify-between items-center lg:px-12 md:px-6 px-3 text-white  sticky top-0 z-50'>
        
        <p className='hidden md:block'>
            <Link to='/'><img src={logo} alt='logo'  className=' w-16 h-12'/></Link>
        </p>
        <ul className='hidden  md:flex md:gap-6 lg:gap-8'>
            <li>
                <Link to='/'>
                    <span>Home</span>
                </Link>
            </li>
            <li>
                <Link to='/history'>
                    <span>History</span>
                </Link>
            </li>
            <li>
                <Link to='/blacklist'>
                    <span>Blacklisted</span>
                </Link>
            </li>
            <li>
                <Link to='/'>
                    <span>Account</span>
                </Link>
            </li>

            <li>
                <Link to='/home'>
                    <span>Books</span>
                </Link>
            </li>

            <li>
                <Link to='/home/in-hand'>
                    <span>In-hand</span>
                </Link>
            </li>
            <li>
                <Link to='/home/history'>
                    <span>book-history</span>
                </Link>
            </li>
        </ul>

        <p onClick={()=> navigate('/login')}
            className='hidden md:block border p-1.5 px-4 rounded-md hover:bg-white hover:text-header_bg_text cursor-pointer'>
            <span>
                Logout
            </span>
        </p>
        

        {/* SMALL SCREEN  */}
        <p onClick={()=> setShowNav(true)}
             className=' md:hidden cursor-pointer'>
            <GiHamburgerMenu  className=' w-10 h-6'/>
        </p>

        <p className=' md:hidden'>
            <Link to='/'><img src={logo} alt='logo'  className=' w-16 h-14'/></Link>
        </p>
        

        <p onClick={()=> setShowDrop(!showDrop)} className=' md:hidden cursor-pointer'>
            <FaRegUser className=' w-10 h-6'/>
        </p>
        <ul className={`${showDrop ? "fixed " : "hidden"} md:hidden right-3 top-12 text-light_  bg-gray-200 border p-6 py-2 flex flex-col gap-4 rounded-md`}>
            <li className=' hover:text-header_bg_text'>
                <Link to='/'>
                        <span>Account</span>
                </Link>
            </li>
            <li className=' hover:text-header_bg_text'>
                <Link to='/'>
                        <span>Login</span>
                </Link>
            </li>
            <li className=' hover:text-header_bg_text'>
                <Link to='/'>
                        <span>Delete Acct</span>
                </Link>
            </li>
        </ul>

        <ul className={`${showNav ? "fixed" : "hidden"} left-0 top-0 bottom-0 w-[250px] z-50 bg-red-500 flex flex-col  gap-8 px-6 py-6 text-header_bg_text border`}>

            <li>
                <p onClick={()=> setShowNav(false)}
                className=' cursor-pointer'>
                    <GrClose  className=' w-10 h-6'/>
                </p>
            </li>

            <li>
                <Link to='/'>
                    <span>Home</span>
                </Link>
            </li>
            <li>
                <Link to='/history'>
                    <span>History</span>
                </Link>
            </li>
            <li>
                <Link to='/blacklist'>
                    <span>Blacklisted</span>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default HeaderNav
