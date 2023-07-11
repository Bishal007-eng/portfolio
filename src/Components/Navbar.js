import React , {useState} from 'react';
import {AiOutlineClose , AiOutlineMenu} from 'react-icons/ai';

export default function Navbar() {
  const [nav , setNav] = useState(false)

  const HandleNav = () =>{
    setNav(!nav)
  }
  return (
    <div className='flex justify-between items-center h-24 max-w-[1540px] mx-auto px-4 text-white'> 
      <h1 className='w-full text-3xl font-bold text-[#2ec1ac]'>Portfolio</h1>
      <ul className='hidden md:flex'>
        <a className='p-4 text-[#279e8c] font-bold text-xl' href="/">Home</a>
        <a className='p-4 text-[#279e8c] font-bold text-xl' href='/'>About</a>
        <a className='p-4 text-[#279e8c] font-bold text-xl' href='/Projects'>Projects</a>
        <a className='p-4 text-[#279e8c] font-bold text-xl' href='/TravelBlogs'>TravelBlogs</a>
        <li className='p-4 text-[#279e8c] font-bold text-xl' href='/'>Contact</li>
      </ul>
      
      <div onClick={HandleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/> }
        <div className= {nav ? 'fixed left-0 top-0 w-[60%] h-full border-r  bg-[#000300] ease-in duration-300' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold m-4 text-[#2ec1ac]'>Portfolio</h1>
        <ul className='uppercase p-4'>
          <li className='p-4 border-b border-white-600 text-xl text-[#2ec1ac]'>Home</li>
          <li className='p-4 border-b border-white-600 text-xl text-[#2ec1ac]'>About</li>
          <li className='p-4 border-b border-white-600 text-xl text-[#2ec1ac]'>projects</li>
          <li className='p-4 border-b border-white-600 text-xl text-[#2ec1ac]'>Blogs</li>
          <li className='p-4 text-xl text-[#2ec1ac]'>Contact</li>
        </ul>
      </div>
      </div>       
    </div>
  )
}

