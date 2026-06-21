import React from 'react'
import heroban from "./assets/hero_banner.jpg";
import herotitle from "./assets/hero_title.png";

import './navbar.css';
import './responsive.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faInfoCircle, faPlay } from '@fortawesome/free-solid-svg-icons';
import { faInfo } from '@fortawesome/free-solid-svg-icons/faInfo';
export default function Hero() {
  return (
    <>
<div className="hero_cont">
    <div className="herocont">
<div className="hero_title">
<img src={herotitle}/>
<p className='text-light opacity-75'>Discovering his ties to a secret ancient order,a youngman living in modern istanbul embarks on a quest to save a city from an immortal enemy</p>
<div className="hero_btn">
  <Link to={'/Headv'}> <button className='play'>
        <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>&nbsp;
        Play
    </button></Link> 
     <button className='info text-light'>
        <FontAwesomeIcon icon={faCircleInfo}></FontAwesomeIcon>&nbsp;
        More info
    </button>
</div>
</div>


    </div>
    <div className="heroimg" >
<img src={heroban}/>
    </div>
    
</div>

    </>
  )
}

