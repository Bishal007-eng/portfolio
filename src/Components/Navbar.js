import React , {useState} from 'react';
import {AiOutlineClose , AiOutlineMenu} from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import { FaFacebook , FaGithub , FaLinkedin} from 'react-icons/fa'

export default function Navbar() {
  const [nav , setNav] = useState(false)

  const HandleNav = () =>{
    setNav(!nav)
  }


  return (
    <div className='flex justify-between items-center h-24 max-w-[1850px] mx-auto px-4 text-white'> 
      <h1 className='w-full text-3xl font-bold text-[#2ec1ac]'>Portfolio</h1>

      <ul className='hidden lg:flex'>
        <a className='p-4 text-[#279e8c] flex font-bold text-xl' href="/" >Home</a>
        <a className='p-4 text-[#279e8c] font-bold text-xl' href='/About'>About</a>
        <a className='p-4 text-[#279e8c] font-bold text-xl' href='/Experience'>Experience</a>
        <a className='p-4 text-[#279e8c] font-bold text-xl' href='/Projects'>Projects</a>
        <a className='p-4 text-[#279e8c] font-bold text-xl' href='/TravelBlogs'>TravelBlogs</a>
        <a className='p-4 text-[#279e8c] font-bold text-xl' href='/Contact'>Contact</a>
      </ul>
      
      <div onClick={HandleNav} className=' block lg:hidden'>
        {!nav ? <AiOutlineMenu size={30}/> : <AiOutlineClose size={30}/> }
      </div>  
        
      <ul 
        className = {nav ? 'absolute left-0 top-0 w-[60%] h-full border-r bg-[#000300] ease-in duration-300' : 'hidden'}>
        <h1 className='w-full text-3xl font-bold m-4 text-[#2ec1ac]'>Portfolio</h1>
        <li className='p-4 border-b border-white-600 text-xl text-[#2ec1ac]'><a href='/'>Home</a></li>
        <li className='p-4 border-b border-white-600 text-xl text-[#2ec1ac]'><a href='/About'>About</a></li>
        <li className='p-4 border-b border-white-600 text-xl text-[#2ec1ac]'><a href='/Experience'>Experience</a></li>
        <li className='p-4 border-b border-white-600 text-xl text-[#2ec1ac]'><a href='/Projects'>projects</a></li>
        <li className='p-4 border-b border-white-600 text-xl text-[#2ec1ac]'><a href='/TravelBlogs'>TravelBlogs</a></li>
        <li className='p-4 text-xl text-[#2ec1ac]'><a href='/Contact'>Contact</a></li>
      </ul>       

      <div className='hidden lg:flex fixed flex-col top-[35%] left-0 '>
        <ul> 
          {/* Facebook Link */}
          <li className='w-[180px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a 
              className='flex mx-3 justify-between items-center w-full text-gray-300'
              href="/"
            >
              <p className='ml-5'>Facebook</p><FaFacebook size={30} />
            </a>
          </li>

          {/* instagram Link */}
          <li className='w-[180px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-[#e2403b]'>
            <a
              className='flex mx-3 justify-between items-center w-full text-gray-300'
              href='/'
            >
              <p className='ml-5'>E-mail</p><HiOutlineMail size={30} />
            </a>
          </li>
          
          {/* linkedin Link */}
          <li className='w-[180px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-[#0f0887]'>
            <a
              className='flex mx-3 justify-between items-center w-full text-gray-300'
              href='/'
            >
              <p className='ml-5'>linkedIn</p> <FaLinkedin size={30} />
            </a>
          </li>

          {/* Github link */}
          <li className='w-[180px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex mx-3 justify-between items-center w-full text-gray-300'
              href='/'
            >
              <p className='ml-5'>Github</p> <FaGithub size={30} />
            </a>
          </li>
        </ul>
      </div>
      
    </div>
  )
}

