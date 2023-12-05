import React from 'react'
import Tailwind from '../assets/tailwind.png';
import { Link } from 'react-scroll';
import { useState } from 'react';
import { BsMenuButton, BsYoutube } from 'react-icons/bs';
import {FaGithub, FaLinkedin, FaTimes} from 'react-icons/fa'
import {BsMailbox} from 'react-icons/bs'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav);


  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-black text-white '>

    <div>
    <img src={Tailwind} alt="Tailwind logo" style={{width: '100px'}} />
    </div>    

    {/*Menu*/}
    
    <ul className='hidden md:flex px-16'>
    <li className='px-8 cursor-pointer'>
    <Link to='home' smooth={true} duration={500}>Home</Link>
    </li>


    <li className='px-8 cursor-pointer'>
    <Link to='about' smooth={true} duration={500}>About</Link>
    </li>


    <li className='px-8 cursor-pointer'>
    <Link to='skills' smooth={true} duration={500}>Skills</Link>
    </li>


    

    <li className='px-8 cursor-pointer'>
    <Link to='contact' smooth={true} duration={500}>Contact</Link>
    </li>

    </ul>

    
    {/*If nav is false show menu else show true */}
   {/* Hamburger */}
   <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <BsMenuButton size={30}/> : <FaTimes size={30} />}
      </div>




    {/*Mobile Menu */}

    <ul className={
        !nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#000] flex flex-col justify-center items-center'
    }>

        <li className='py-6 text-4xl'>
        <Link onClick={handleClick} to='home' smooth={true} duration={500}>
          Home
        </Link>
      </li>


      <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>



        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>



        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>


        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>

    </ul>


    {/*Social Icons */}

    <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>

    <ul>

    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[2px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-white font-bold ml-2'
              href='/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
    </li>

    

    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[2px] duration-300 bg-gray-600'>
            <a
              className='flex justify-between items-center w-full text-white font-bold ml-2'
              href='/'
            >
              Github <FaGithub size={30} />
            </a>
    </li>




    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[2px] duration-300 bg-red-700'>
            <a
              className='flex justify-between items-center w-full text-white font-bold ml-2'
              href='/'
            >
              Youtube <BsYoutube size={30} />
            </a>
    </li>


    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[2px] duration-300 bg-gray-700'>
            <a
              className='flex justify-between items-center w-full text-white font-bold ml-2'
              href='/'
            >
              Email <BsMailbox size={30} />
            </a>
    </li>


    </ul>

    </div>    




    </div>
  )
}

export default Navbar