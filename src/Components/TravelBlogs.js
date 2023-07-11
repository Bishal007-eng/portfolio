import React from 'react';
import ReactTyped from 'react-typed';


export default function TravelBlogs() {

  return (
    
    <div className='bg-black max-w-[800px] mt-[-96px] w-full mx-auto h-screen text-center flex flex-col justify-center'>
      <h1 className='text-4xl text-[#91ffcb] p-5'>
          Travel Blogs
      </h1>
      <p 
        className='text-[#91ffcb] text-xl p-5'>
        This is a section for my travel blogs and stories of different places i have been to inside Nepal
      </p>
      <ReactTyped 
        className='md:text-xl sm:text-3xl font-bold md:pl-4 pl-2  p-5 text-gray-500'
        strings={["Coming Soon ...","Will be Updated soon","<div style='display: flex; justify-content: center;'>Thank you for your Patience <img style='height: 34px; margin-left: 10px;' src='https://cdn-icons-png.flaticon.com/512/803/803087.png' alt='...'/></div> "]}
        typeSpeed={100}
        backSpeed={30}
        loop
      />
      
    </div>
  )
}
