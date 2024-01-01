import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("red")

  return (
    <>
      <div className="w-full h-screen " style={{backgroundColor : color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 gap-3 inset-x-0 px-2' >
          <div className='flex flex-wrap bottom-12 justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-full' >
            <button onClick={ ()=>
              setColor("red")
            } className='outline-none px-4 rounded-xl px-2 mx-2 text-white' style={{backgroundColor : "red"}}> Red</button>
            <button  onClick={()=>
              setColor("black")
            }  className='outline-none px-4 rounded-xl px-2 mx-2 text-white' style={{backgroundColor : "black"}}> Black</button>
            <button  onClick={()=>
              setColor("purple")
            } className='outline-none px-4 rounded-xl px-2 mx-2 text-white' style={{backgroundColor : "purple"}}> Purple</button>
            <button  onClick={()=>
              setColor("green")
            } className='outline-none px-4 rounded-xl px-2 mx-2 text-white' style={{backgroundColor : "green"}}> Green</button>
            <button  onClick={()=>
              setColor("grey")
            } className='outline-none px-4 rounded-xl px-2 mx-2 text-white' style={{backgroundColor : "grey"}}> Grey</button>
            <button  onClick={()=>
              setColor("violet")
            } className='outline-none px-4 rounded-xl px-2 mx-2 text-white' style={{backgroundColor : "violet"}}> Violet</button>


          </div>
          
        </div>
        </div>
    
     
    </>
  )
}

export default App
