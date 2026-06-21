import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './navbar';
import Hero from './hero';
import Carts from './carts';
import Footer from './footer';
import './App.css'

const userContext=createContext();
function App() {
  
 let[active,setactive]=useState(false)

return(
  <>
 
<userContext.Provider value={{active,setactive}}>
  <Nav></Nav>
  

 <Hero></Hero>
 
 <div className="container">
<Carts></Carts>
<Footer></Footer>
</div>
</userContext.Provider>
  </>
)
}

export default App;
export {userContext};