import React, { useEffect, useState } from 'react'
import item_img from "C:/Users/Victus/netflix_proj/Netflix/src/assets/cards/card1.jpg";
import { getdata } from './picking';
import Footer from './footer';
import './cart.css';
import { cards_data } from './assets/cards/Cards_data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
export default function Carts() {
 let pre='https://image.tmdb.org/t/p/w500';
let [no,setno]=useState(0);
 let [click,setclick]=useState(0);
useEffect(()=>{

},[])
  return (
   <>

<div className="cart_items" id="movie" > 


{getdata.map((vars,index)=>{




  let [con,setcon]=useState([]);

 let [count,setcount]=useState(0); 

const btn_style={
   left:(count<9)? `-${660*count}px`:'',
   }

if(count==9){
setcount(0)
}
useEffect(()=>{
   fetch(`https://api.themoviedb.org/3/movie/${vars.http}?api_key=f2611da25966a2bddb8b7d2927991cc8`)
.then((res)=>res.json()).then((dat)=>setcon(dat.results));


},[])
  return(
    
 <div className="cart_cont" key={index}>
      <h1 className='text-light'>{vars.name}</h1>
 <div className="cart" >
       <FontAwesomeIcon icon={faCircleArrowLeft} className='cart_icon left_cart_icon' onClick={()=>{(count>0)?setcount(count-1):''}}></FontAwesomeIcon>
       
        <div className="cart1">
           {
con.map((vx,ide)=>{
return(
<Link to={`/home/${vx.id}`}>
          <div className='items' style={btn_style} key={ide}>
            <img src={pre+vx.backdrop_path} />
            <p>{vx.title}</p>
        </div>
      </Link>
)
})
           }  
        </div>
       <FontAwesomeIcon icon={faCircleArrowRight}  className='cart_icon right_cart_icon' onClick={()=>{
 setcount(count+1),
 console.log(count,vars.id)}}></FontAwesomeIcon>
    </div>
     </div>
  )
})
}  
</div>

   </>
  )
}
