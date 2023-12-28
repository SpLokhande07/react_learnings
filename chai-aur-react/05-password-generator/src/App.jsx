import { useCallback, useState } from "react"


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const generatePassword = useCallback(()=>{
    let pass = ""
    // A to Z in capital and in small
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    // Numbers
    if(numberAllowed){
      str += "0123456789"
    }
    // Special characters
    if(charAllowed){
      str += "!@#$%^&*()_+=-"
    }
    // Generate password
    for(let i = 0; i < length; i++){
      pass += str[Math.floor(Math.random() * str.length)]
    }
    setPassword(pass)
    console.log(pass)



    
  },[
    length, numberAllowed, charAllowed, password
  ])

  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-900">
    <h1 className="text-2xl font-bold text-white">Password Generator</h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" className="w-full h-12 px-4 text-gray-700 placeholder-gray-400" 
          value={password}
          placeholder="Password"
          readOnly
          ></input>
      </div>


    </div>
    </>
  )
}

export default App
