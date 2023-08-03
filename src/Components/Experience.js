import React from 'react'
import Html from '../assets/html.png'
import Css from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactJs from '../assets/react.png'
import Bootstrap from '../assets/Bootstrap.png'
import Tailwind from '../assets/tailwind.png'
import Github from '../assets/github.png'
import Semantic from '../assets/Semantic.png'

export default function Experience() {

  const experiences = [
    { name: 'HTML', icon: Html },
    { name: 'CSS', icon: Css },
    { name: 'JavaScript', icon: JavaScript },
    { name: 'Bootstrap 5', icon: Bootstrap },
    { name: 'ReactJs', icon: ReactJs },
    { name: 'Tailwind CSS', icon: Tailwind },
    { name: 'Github', icon: Github },
    { name: 'Semantic UI', icon: Semantic },
  ];


  return (
    <div className='text-center w-full h-screen text-white mt-5'>
      <div className='mt-[90px] lg:mt-[-120px] max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-[#91ffcb] lg:text-4xl text-2xl inline border-b-4 border-[#91ffcb] font-bold sm:mx-[50px] lg:mx-auto mb-5'>Experience</p>
          <p className='mt-5 font-bold lg:text-2xl py-4 text-gray-400'>Technologies I am familiar and experienced with!</p>
        </div>

        <div className='w-full grid lg:grid-cols-4 grid-cols-2 gap-4 text-center py-8'>
          {experiences.map((exp , i) =>(

            <div key={i} className='shadow-md shadow-[] hover:scale-110 duration-500'>
              <img src={exp.icon} className='w-20 mt-4 mx-auto' alt="CSS" />
              <p className='my-4  text-[#91ffcb] font-bold'>{exp.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
