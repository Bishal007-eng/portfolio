import React from 'react'
import ReactTyped from 'react-typed';
import {HiArrowNarrowRight} from 'react-icons/hi';
import { MdCloudDownload } from 'react-icons/md'
import Resume from '../assets/Resume/Resume2.pdf';

// import { Typed } from './Typed'


export default function MiddleSection() {
  // const text = Typed("React Development" , [200]);
  return (
    <div className='text-white' name='middlesection'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen lg:mx-auto sm:mx-[35px] flex flex-col justify-center'>
        <p className='text-[#91ffcb] text-3xl font-bold p-2'>Hi there!</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-2'>I'm Bishal Thapa</h1>
        
        <div className='flex items-center mt-2'>
          <p className=' md:text-4xl sm:text-3xl text-xl font-bold py-2'>My skills </p>
          <ReactTyped 
            className='md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-2 text-[#91ffcb]'
            strings={["React Development", "PHP","JavaScript" , "MySQL"]}
            typeSpeed={100}
            backSpeed={30}
            loop
          />
        </div>
        <p 
          className='md:text-xl text-xl font-bold text-gray-500'>
          Hire me for a professional & most responsive web development with up-to-date technologies like ReactJs!
        </p>
        <div className='flex'>
          <a href={Resume} download={Resume}>
            <button 
              className='text-white hover:text-black hover:bg-[#91ffcb] border-2 flex items-center rounded-md font-bold px-6 py-2 my-6 mr-4'>
                Download CV &nbsp;<MdCloudDownload size={30}
              />
            </button>
          </a>
         
          <a href='/Projects'> 
            <button 
              className='text-white border-2 px-6 py-2 my-6 flex items-center rounded-md hover:bg-[#91ffcb] hover:text-black hover:font-bold'>
                View Work&nbsp;<HiArrowNarrowRight size={30}
              />
            </button>
          
          </a>

        </div>
          
      </div>
    </div>
  )
}
