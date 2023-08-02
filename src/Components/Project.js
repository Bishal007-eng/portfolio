import React, { useState } from 'react';
// import axios from 'axios';

import College from '../images/College1.jpg';
import Mobile from '../images/ShopAdmin.jpg';
import Hotel from '../images/hotel1.jpg';
import WeatherApp from '../images/Weather.jpg';
import TodoApp from '../images/todo_app.jpg';
import TextUtility from '../images/textUtility.jpg';
import RecipeBook from '../images/RecipeBook.jpg';
import projectDatabase from './projectDatabase.json';


export default function Project() {

  const postData = projectDatabase.posts;
  const [visibleProjects, setVisibleProjects] = useState(3);

  // useEffect(()=> {
  //   axios.get('/projectDatabase.json')
  //   .then(res => setPostData(res.data))
  //   .catch(err => console.log(err))

  // }, []);

  const getImagePath = (path) => {
    switch (path) {
      case '../images/College1.jpg':
        return College;
      case '../images/ShopAdmin.jpg':
        return Mobile;
      case '../images/hotel1.jpg':
        return Hotel;
      case '../images/Weather.jpg':
        return WeatherApp;
      case '../images/todo_app.jpg':
        return TodoApp;
      case '../images/textUtility.jpg':
        return TextUtility;
      case '../images/RecipeBook.jpg':
        return RecipeBook;
      default:
        return '';
    }
  }

  const showMoreProjects = () => {
    setVisibleProjects(postData.length); // Show all projects
  };

  const showLessProjects = () => {
    setVisibleProjects(3); // Show only 3 projects
  };

  return(
    <div>
      {postData.slice(0, visibleProjects).map((d) => (
        <div className='w-full text-white py-16 px-4' key={d.id}>
          <div className="max-w-[1540px] mx-auto grid md:grid-cols-2">

            <img className='w-[500px] mx-auto my-4 h-[300px]' src={getImagePath(d.path)} alt='/' />
            
            <div className='flex flex-col justify-center'>

              <p className='text-[#22e68b] mx-4 font-bold uppercase'>{d.heading}</p>
              <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 mx-4'>{d.SubHeading}</h1>
              <p className='mx-4'>
                {d.Description}
              </p>
              <a href='https://github.com/Bishal007-eng/CollegeWebSite.git'>
                <button className='bg-[#071952] w-[250px] flex rounded-md font-bold my-6 mx-auto md:mx-0 px-5 py-3 text-[#91ffcb]'>
                  View Project in GitHub
                  <svg 
                    className="mx-5 w-6 h-[45px] text-white-800 dark:text-white" 
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
              </a>
            </div>      
          </div>

          <br />
              
        </div>

      ))}
      <div className="flex justify-center">
        {postData.length > 3 && visibleProjects === 3 && (
          // Show "Show More" button if there are more than 4 projects
          <button
            className="bg-[#071952] text-center w-[200px] rounded-md flex font-bold my-6 mx-auto md:mx-0 px-5 py-3 text-[#91ffcb]"
            onClick={showMoreProjects}
          >
            Show More Projects
          </button>
        )}
        
        {visibleProjects > 3 && (
          // Show "Show Less" button if more than 3 projects are visible
          <button
            className="bg-[#071952] w-[200px] rounded-md flex font-bold my-6 mx-auto md:mx-0 px-5 py-3 text-[#91ffcb]"
            onClick={showLessProjects}
          >
            Show Less Projects
          </button>
        )}
      </div>      

    </div>
  ) 
  
}