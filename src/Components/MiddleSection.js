import React from 'react'
import ReactTyped from 'react-typed';
// import { Typed } from './Typed'


export default function MiddleSection() {
  // const text = Typed("React Development" , [200]);
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
          <p className='text-[#91ffcb] text-3xl font-bold p-2'>Hi there!</p>
          <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 '>I'm Bishal Thapa</h1>
          
          <div className='flex justify-center items-center mt-2'>
            <p className=' md:text-4xl sm:text-3xl text-xl font-bold py-4'>My skills </p>
            <ReactTyped 
              className='md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-2 text-[#91ffcb]'
              strings={["React Development", "PHP","JavaScript" , "MySQL"]}
              typeSpeed={100}
              backSpeed={30}
              loop
            />
          </div>
          <p 
            className='md:text-xl text-xl font-bold text-gray-500 mt-3'>
            Hire me for a professional & most responsive web development with up-to-date technologies like ReactJs!
          </p>
          <button className='bg-[#91ffcb] w-[200px] rounded-md font-bold my-6 mx-auto py-3 text-black'>Download CV</button>
        </div>
    </div>
  )
}
