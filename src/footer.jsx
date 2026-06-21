import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { userContext } from './App'
import facebook from "./assets/facebook_icon.png"
import insta from "./assets/instagram_icon.png"
import twit from "./assets/twitter_icon.png"
import youtube from "./assets/youtube_icon.png"
import './cart.css';



export default function Footer() {
  const val=useContext(userContext);
  return (
    <>
      <div className="footer_cont" id='news'>
        <div className="first">
<img src={facebook} alt="" />
<img src={insta} alt="" />
<img src={twit} alt="" />
<img src={youtube} alt="" />
        </div>
<div className="second">
    <div className="one">
<a href="#">Audio Description</a>
<a href="#">Investor Relations</a>
<a href="#">Legal Notices</a>
    </div>
    <div className="one">
<a href="#">Help Center</a>
<a href="#">Jobs</a>
<a href="#">Cookie Preferences</a>
    </div>
    <div className="one">
<a href="#">Gift Cards</a>
<a href="#">Terms of Use</a>
<a href="#">Corporate information</a>
    </div>
    <div className="one">
<a href="#">Media Center</a>
<a href="#">Privacy</a>
<a href="#">Contact Us</a>
    </div>
</div>
<p className='text-light opacity-50'>1997-2025 Netflix,Inc</p>
      </div>

<div className="bar">
<a href="#"  onClick={()=>{val.setactive(false)}}>Home</a>
<a href="" onClick={(e)=>{val.setactive(true),e.preventDefault()}}>Search</a>
<a href="#">Notify</a>
<a href="#">Children</a>
  </div>  
 
    
    </>
  )
}
