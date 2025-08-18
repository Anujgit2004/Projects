import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { cards_data } from './assets/cards/Cards_data.jsx';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Video from './video.jsx';
import './index.css'
import App from './App.jsx'
import Login from './login.jsx';
import Carts from './carts.jsx';
import Headv from './Headv.jsx';

let id;
let allroute=createBrowserRouter(
  [
    {
path:'',
element:<App></App>
    },
{
path:'Headv',
element:<Headv></Headv>
},
 {
      path:'home/:id',
      element:<Video></Video>
    },
  {
    path:'login',
    element:<Login></Login>
  }  
   
  ]
)


createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <RouterProvider router={allroute}></RouterProvider>
  // </StrictMode>,
)
