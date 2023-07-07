import React from 'react';
import College from '../images/College1.jpg';
import Mobile from '../images/ShopAdmin.jpg';
import Hotel from '../images/hotel1.jpg';

export default function Project() {
  return (
    <div className='w-full bg-white py-16 px-4'>

      <div className="max-w-[1540px] mx-auto grid md:grid-cols-2">

        <img className='w-[500px] mx-auto my-4' src={College} alt="/" />

        <div className='flex flex-col justify-center'>

          <p className='text-[#22e68b] font-bold uppercase'>College website Dashboard</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>kathmandu BernHardt College Website</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis et pariatur odit esse quasi cupiditate maxime fugit 
            soluta,dolorum distinctio inventore neque quisquam architecto assumenda veritatis commodi quidem, iusto ut provident temporibus 
            quaerat placeat! A, non. Sint rerum officiis unde praesentium dicta reprehenderit dolorem eius nemo eos, assumenda ipsa 
            doloribus.
          </p>
          <button className='bg-black w-[200px] rounded-md flex font-bold my-6 mx-auto md:mx-0 px-5 py-3 text-[#91ffcb]'>View Project
            <svg 
              className="mx-5 w-6 h-6 text-white-800 dark:text-white" 
              aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 14 10"
            >
              <path 
                stroke="currentColor" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>      
      </div>

      <br />
      <hr />

      <div className="max-w-[1540px] mx-auto grid md:grid-cols-2">

        <img className='w-[500px] mx-auto my-4' src={Mobile} alt="/" />

        <div className='flex flex-col justify-center'>

          <p className='text-[#22e68b] font-bold uppercase'>E-Mobile Shop Dashboard</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Online Mobile Phone Shopping  Website</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis et pariatur odit esse quasi cupiditate maxime fugit 
            soluta,dolorum distinctio inventore neque quisquam architecto assumenda veritatis commodi quidem, iusto ut provident temporibus 
            quaerat placeat! A, non. Sint rerum officiis unde praesentium dicta reprehenderit dolorem eius nemo eos, assumenda ipsa 
            doloribus.
          </p>
          <button className='bg-black w-[200px] rounded-md flex font-bold my-6 mx-auto md:mx-0 px-5 py-3 text-[#91ffcb]'>View Project
            <svg 
              className="mx-5 w-6 h-6 text-white-800 dark:text-white" 
              aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 14 10"
            >
              <path 
                stroke="currentColor" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>

        <br />
        <hr />


      </div>

      <br />
      <hr />

      <div className="max-w-[1540px] mx-auto grid md:grid-cols-2">

        <img className='w-[500px] mx-auto my-4' src={Hotel} alt="/" />

        <div className='flex flex-col justify-center'>

          <p className='text-[#22e68b] font-bold uppercase'>Hotel Reservation System Dashboard</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Online Mobile Phone Shopping  Website</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis et pariatur odit esse quasi cupiditate maxime fugit 
            soluta,dolorum distinctio inventore neque quisquam architecto assumenda veritatis commodi quidem, iusto ut provident temporibus 
            quaerat placeat! A, non. Sint rerum officiis unde praesentium dicta reprehenderit dolorem eius nemo eos, assumenda ipsa 
            doloribus.
          </p>
          <button className='bg-black w-[200px] rounded-md flex font-bold my-6 mx-auto md:mx-0 px-5 py-3 text-[#91ffcb]'>View Project
            <svg 
              className="mx-5 w-6 h-6 text-white-800 dark:text-white" 
              aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 14 10"
            >
              <path 
                stroke="currentColor" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>

        <br />
        <hr />


      </div>

      
    </div>
  )
}