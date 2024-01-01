import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header/Header'
import Home from './component/Home/Home'
import Footer from './component/Footer/Footer'
import { Outlet } from 'react-router-dom' 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header/>
        <Outlet/>
        <Footer/>

       </div>
    </>
  )
}

export default App
