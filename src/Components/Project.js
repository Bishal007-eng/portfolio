import React, {useState , useEffect} from 'react';
import axios from 'axios';

import College from '../images/College1.jpg';
import Mobile from '../images/ShopAdmin.jpg';
import Hotel from '../images/hotel1.jpg';
import WeatherApp from '../images/Weather.jpg';



export default function Project() {

  const [postData, setPostData] = useState([])

  useEffect(()=> {
    axios.get('http://localhost:3031/posts')
    .then(res => setPostData(res.data))
    .catch(err => console.log(err))

  }, []);

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
      default:
        return '';
    }
  }

  return postData.map((d) => (
    <div className='w-full text-white py-16 px-4' key={d.id}>
      <div className="max-w-[1540px] mx-auto grid md:grid-cols-2">

        <img className='w-[500px] mx-auto my-4 h-[300px]' src={getImagePath(d.path)} alt='/' />
        
        <div className='flex flex-col justify-center'>

          <p className='text-[#22e68b] font-bold uppercase'>{d.heading}</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>{d.SubHeading}</h1>
          <p>
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
      {/* 
      <div className="max-w-[1540px] mx-auto grid md:grid-cols-2">

        <img className='w-[500px] mx-auto my-4' src={Mobile} alt="/" />

        <div className='flex flex-col justify-center'>

          <p className='text-[#22e68b] font-bold uppercase'>{d.heading}</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Online Mobile Phone Shopping  Website</h1>
          <p>
          E-mobile Shop is an online mobile shopping platform that sells verity of mobile phones and their corresponding products. Users can view the products in our dashboard or via a specific brand like 'Samsung','Apple','Vivo' etc. There is a wide range of products to choose from. Moreover, users can also add their desired products to their wishlist and purchase them later from the wishlist directly. Users can also choose their mode of pay i.e either via Cash on Delivery or Online payment method. There is also a different section for admins to keep track of the stock and also about users order and queries. Admin can respond to the queires of the users and help them to get a good user experience. The system was made using Bootstrap, HTML, CSS, JavaScript, and AJAX.
          </p>
          <button className='bg-[#071952] w-[200px] rounded-md flex font-bold my-6 mx-auto md:mx-0 px-5 py-3 text-[#91ffcb]'>View Project
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
      </div>

      <br />

      <div className="max-w-[1540px] mx-auto grid md:grid-cols-2">

        <img className='w-[500px] mx-auto my-4' src={Hotel} alt="/" />

        <div className='flex flex-col justify-center'>

          <p className='text-[#22e68b] font-bold uppercase'>Hotel Reservation System Dashboard</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Online Hotel Reservation Website</h1>
          <p>
          Hotel reservation system is a replicate system of Nepal's one of the most famous and leading Hotel industry 'Soaltee Hotel'. This system has different sections to look for. It is divided into 2 parts: One for user Interactions and one for Admin. Users can Register themself to the system which allows them to make the reservation of their desired rooms. They can also make queries to the Admin via Contact Us section. Users are presented with an interactive and fun UI which is super easy to understand and use. The system is loaded with functionalities such as email and OTP verification, Forget Password Functionalities, Online Payment System, Room reservation and Query section to ask questions. <br/> Similarly, Admin is the one who controls the backend of the system. They can add or delete rooms, set the activity of the room and let users know if the room is available or is reserved. They manage the carousels of the hotel and answers to users queries. Admin also can manage users and their rooms. <br/> The system was made using Bootstrap, HTML, CSS, JavaScript, SendGrid(For Email verification and forgot password Functionality), and AJAX.
          </p>
          <button className='bg-[#071952] w-[200px] rounded-md flex font-bold my-6 mx-auto md:mx-0 px-5 py-3 text-[#91ffcb]'>View Project
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
      </div>    */}    
          
    </div>
  ))
  
}