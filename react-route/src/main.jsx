import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import Home from './components/Home/Home'
import About from './About/About'
import Services from './components/Services/Services'
import User from './components/User/User'
import { RouterProvider,createBrowserRouter} from 'react-router-dom'


const routertera = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>, 
    children: [
      {
        path:"",
        element: <Home/>
      },
      {
        path:"about",
        element: <About/>
      },
      {
        path:"services",
        element: <Services/>
      },
      {
        path:"user/:userid",
        element: <User/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routertera}/>
  </React.StrictMode>,
)