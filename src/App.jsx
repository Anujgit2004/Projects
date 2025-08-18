import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './navbar';
import Hero from './hero';
import Carts from './carts';
import Footer from './footer';
import './App.css'


function App() {
 let[active,setactive]=useState(false)

return(
  <>
 

  <Nav active={active}></Nav>
  

 <Hero></Hero>
 
 <div className="container">
<Carts></Carts>
<Footer active={active}  setactive={setactive}></Footer>
</div>

  </>
)
}

export default App;
