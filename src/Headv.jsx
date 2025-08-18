import React from 'react'
import { Link } from 'react-router-dom';
import back from 'C:/Users/Victus/netflix_proj/Netflix/src/assets/back_arrow_icon.png'
import './cart.css';
export default function Headv() {
  return (
    <>
        <Link to={'/'}><img src={back} width='50px' /></Link> 
      <div className="players">
 <iframe className='responsive2'  src={`https://www.youtube.com/embed/tHC9ml-TOXg`} frameBorder='0' ></iframe>
      </div>
    </>
  )
}
