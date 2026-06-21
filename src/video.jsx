import React, { useEffect, useState } from 'react'
import { cards_data } from './assets/cards/Cards_data'
import { useLocation } from 'react-router-dom'
import back from './assets/back_arrow_icon.png'
import Carts from './carts';
import { Link } from 'react-router-dom';
export default function Video() {
  let show=useLocation();
   console.log(show)
  let more=show.pathname.split('/')[2];
 
 let [mdata,setdmdata]=useState([])
console.log(mdata)
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjYxMWRhMjU5NjZhMmJkZGI4YjdkMjkyNzk5MWNjOCIsIm5iZiI6MTc1NDgwMTI3OS43NjksInN1YiI6IjY4OTgyNDdmY2E3Y2U5ZDNlYjJjMGRlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xTWorx0wbBgl3s25TUpC_uZSJz4tqSl3Wz9JAYsTKfI'
  }
};

useEffect(()=>{
fetch(`https://api.themoviedb.org/3/movie/${more}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setdmdata(res.results[0]))
  .catch(err => console.error(err));

},[])


  return (
    <>
  <Link to={'/'}><img src={back} width='50px' /></Link> 
      <div className="player">
 <iframe className='responsive-iframe' src={`https://www.youtube.com/embed/${mdata.key}`} frameBorder='0' ></iframe>
      </div>
   
    </>
  )
}
