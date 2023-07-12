import axios from 'axios';
import React, {useEffect , useState} from 'react'


export default function ProjectData() {

  const[postData ,setPostData ] = useState([]);

  useEffect(()=> {
    axios.get('http://localhost:3031/posts')
    .then(res => setPostData(res.data))
    .catch(err => console.log(err))

  }, []);


  return (
    <div className='container mt-5 text-white text-center'>
      <table className='table mt-4'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Heading</th>
            <th>SubHeading</th>
            <th>Description</th>
          </tr>
          
        </thead>
        <tbody>
          {postData.map((d,i)=>{
            return <tr key={i}>
              <td>{d.id}</td>
              <td>{d.img}</td>
              <td>{d.heading}</td>
              <td>{d.SubHeading}</td>
              <td>{d.Description}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}
