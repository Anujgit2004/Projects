import React, { useEffect, useState } from 'react'
import item_img from "./assets/cards/card1.jpg";

import { getdata } from './picking';
import Footer from './footer';
import './cart.css';
import { cards_data } from './assets/cards/Cards_data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
export default function Carts() {
 let pre='https://image.tmdb.org/t/p/w500';
let [no,setno]=useState(660);
 let [click,setclick]=useState(9);
console.log(no)
useEffect(()=>{
   (window.innerWidth<1400&&window.innerWidth>767)?setclick(10):'';
   (window.innerWidth<767&&window.innerWidth>576)?setno(625)+setclick(10):'';
   (window.innerWidth<576&&window.innerWidth>450)?setno(410)+setclick(15):'';
    (window.innerWidth<450&&window.innerWidth>350)?setno(390)+setclick(16):'';
  (window.innerWidth<350)?setno(275)+setclick(19):'';
},[])

 let [con,setcon]=useState([]);
 
let A_key=import.meta.env.VITE_API_KEY;

useEffect(()=>{
  getdata.map((v,key)=>{
    return(
  fetch(`https://api.themoviedb.org/3/movie/${v.http}?api_key=${A_key}&language=en-US&page=1`)
.then((res)=>res.json()).then((dat)=>{
  setcon((pro)=>[...pro,dat.results])

}).catch((err)=>console.log(err))
    )
  })
 
},[])
  return (
   <>

<div className="cart_items" id="movie" > 


{getdata.map((vars,index)=>{
 let [count,setcount]=useState(0); 

const btn_style={
   left:(count<click)? `-${no*count}px`:'',
   }

if(count==click){
setcount(0)
}
  return(
    
 <div className="cart_cont" key={index}>
      <h1 className='text-light'>{vars.name}</h1>
 <div className="cart" >
       <FontAwesomeIcon icon={faCircleArrowLeft} className='cart_icon left_cart_icon' onClick={()=>{(count>0)?setcount(count-1):''}}></FontAwesomeIcon>
       
        <div className="cart1">
          
           {
con[vars.id]?.map((vx,ide)=>{
  return(
<Link to={`/home/${vx.id}`}>
          <div className='items' style={btn_style} key={ide}>
            <img src={`https://image.tmdb.org/t/p/w500${vx.backdrop_path}`} />
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
