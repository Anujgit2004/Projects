import React, { useState } from 'react'
import './cart.css';
export default function Login() {
    let [next,setnext]=useState(false);
  return (
    <>
    <div className="mainlogin">
        <div className="finallogin">
 <div className="login_outer">
        <div className="loginpage">
            <h1 className='text-light fw-bolder'>{(next)?'Sign Up':'Sign In'}</h1>
            {(next)?<input type="text" placeholder='Your Name'/>:''}
            <input  type="email" placeholder='Email' />
            <input type="password" placeholder='Password'/>
            <input type="submit" value="Sign In"  className="dange" />
        </div>
        <div className="lowerstuff">
      <lable className='text-light'><input type="checkbox"/>Remember me</lable> 
      <p className='text-light'>Need help?</p>    
        </div>
      </div>
      <div className="login_next">
        <p className='text-light opacity-50'>{(next)?'Already have Account?':'New to Netflix?'}</p>
        <p className='text-light pointer' role='button' onClick={()=>setnext(!next)}>{(next)?'Sign In Now':'Sign Up Now'}</p>
      </div>
      </div>
    </div>
     
    </>
  )
}
