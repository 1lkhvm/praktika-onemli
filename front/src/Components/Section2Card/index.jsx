import React, { useEffect, useState } from 'react'
import axios from "axios";
import './style.scss'
function Section2Card() {
  const [users, setUsers] = useState([]);

  const getUsers=()=>{
    axios.get("http://localhost:3129/").then((response) => {
      setUsers(response.data);

    });
  }

  
  useEffect(() => {
   getUsers()
  }, []);
  const handleDelete=(id)=>{
    axios.delete(`http://localhost:3129/${id}`).then(()=>getUsers())
  }

  console.log(users);
  return (
    <>
      <h2>SERVICES</h2>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      <div className='cards'>
        {users.map((element) => {
          return (

            <div className='map-card'>
              <div className='mokoko'>
                <i className={element.imgURL}></i>
                <h3>{element.name}</h3>
                {element.title}</div>
              <button onClick={()=>handleDelete(element._id)}>XXXXXXX</button>
            </div>
          )
        })}
      </div>
    </>
  );
}

export default Section2Card