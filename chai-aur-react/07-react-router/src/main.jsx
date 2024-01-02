import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Layout from './Layout.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './component/Home/Home'
import About from './component/About/About'
import Contact from './component/Contact/Contact.jsx'

const router = createBrowserRouter([
  
    {
      path: '/',element: <Layout />,
      children: [
        {path: "", element: <Home />},
        {path: "/about", element: <About />},
        {path: "/contact", element: <Contact />},
      ]
    },
  
 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
