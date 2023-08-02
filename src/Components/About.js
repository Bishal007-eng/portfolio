import React from 'react'
export default function About() {
  return (
    <div className='w-full h-screen text-white' name='about'>
      <div className='mt-[-96px] flex flex-col justify-center items-center w-full h-full'>

        <div className='lg:max-w-[1100px] sm:max-w-[800px] w-full p-4 grid grid-cols-2 gap-8'>

          <div className='sm:text-left lg:text-center p-4'>
            <p className='text-[#91ffcb] text-4xl inline border-b-4 border-[#91ffcb] font-bold p-2 sm:mx-[10px] lg:mx-auto'>About Me</p>
          </div>

          <div>           
          </div>

        </div>
        <div className='lg:max-w-[1100px] sm:max-w-[800px] w-full grid sm:grid-cols-0 lg:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-left lg:text-left text-4xl font-bold flex sm:mx-[25px] lg:mx-auto text-justify'>
          
            <p className='text-white'>Hello There ! I'm Bishal Thapa. Nice to meet you! Please Take a look around. </p>
          </div>
          <div className='text-justify sm:mx-[25px] lg:mx-auto text-xl'>
            <p>
              I am a passionate ReactJs developer who developes apps that would be helpful for the company and the people i would be working for. I specialize in creating software for individuals and small businesses all the way to large corporations. Besides coding, i am also a passionate traveler who loves traveling to various places and immerse into the beauty of the nature. 
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
