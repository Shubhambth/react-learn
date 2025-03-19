import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import Home from './components/Home/Home'
import About from './About/About'
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
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routertera}/>
  </React.StrictMode>,
)