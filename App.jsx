import Nav from './new_project/Navbar'
import About from './new_project/About'
import { useState } from 'react'
import './App.css'
import Fangeslide from './new_project/rangeslide'
import Skills from './new_project/skills'
import Hireme from './new_project/hireme'
import Personal from './new_project/personal'


function App() {
 let [count,setcount]=useState(false);
console.log(count)
  return (
    <>
  <div className="container">
<Nav naem={count} fun={setcount}></Nav>
{/* <Personal coun={count} ></Personal> */}
<About></About> 
  </div>

  
   
   
  
      
       {/* <Fangeslide></Fangeslide> */}
    
    </>
  )
}

export default App
