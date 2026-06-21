import React, { useContext, useState } from 'react'
import navlogo from "./assets/logo.png";
import profile from "./assets/profile_img.png";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCaretDown, faCross, faSearch, faX } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import './navbar.css';
import { userContext } from './App';
import './responsive.css';



export default function Nav() {
  const val=useContext(userContext);
let [color,setcolor]=useState(false);
  document.addEventListener('scroll',()=>{
    if(window.scrollY>0){
      setcolor(true)
    }
    else{
      setcolor(false)
    }
  })
  let [style,setstyle]=useState(true);
  const show={
    display:"block",
    transition: "1s ease-in",
backgroundColor:"#333",
opacity:"0.9"
  }
  const hide={
    display:"none"
  }
 
  
      const bgcolor={
background: "#141414",
  }
  const nocolor={

  }
  return (
    <>
    <div className={`nav_cont ${val.active?'hides':''}`} style={(color)?bgcolor:nocolor}>
    <div className="nav_left">
<div className="logo">
    <img src={navlogo}/>
</div>
<div className="head">
   <a href="#">Home</a>
   <a href="#">TV Shows</a>
   <a href="#movie">Movies</a>
   <a href="#news">News&Popular</a>
   <a href="#">My List</a>
</div>
    </div>

    <div className="nav_right" >
   
      <input type="search" placeholder="Enter after search" style={(style)?hide:show} onKeyDown={(e)=>{
        if(e.key==="Enter"){
          alert("No data available");
          e.target.value=""
        }
      }}/>
<FontAwesomeIcon icon={(style)?faSearch:faX} className='search' onClick={()=>setstyle(!style)}></FontAwesomeIcon>
<p className='mt-3'>Children</p>
<FontAwesomeIcon icon={faBell} className='notify'></FontAwesomeIcon>
<Link to={'/login'}><img src={profile} height="25px" className='mb-2'/></Link>
</div>


    </div>
  


<div className={`searchbox ${val.active?'shows':''}`}>
  <input type="search" placeholder='Enter Your Search' />
  <FontAwesomeIcon icon={faSearch} className='fs-2 text-light'></FontAwesomeIcon>
</div>
    </>
  )
}
