import { useCallback, useEffect, useState, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // refHook
  const passwordRef = useRef(null);



  const generatePassword = useCallback(() => {
    let pass = "";
    // A to Z in capital and in small
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    // Numbers
    if (numberAllowed) {
      str += "0123456789";
    }
    // Special characters
    if (charAllowed) {
      str += "!@#$%^&*()_+=-";
    }
    // Generate password
    for (let i = 0; i < length; i++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }
    setPassword(pass);
    console.log(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

const copyPasswordToClipboard = useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0, 99);
  window.navigator.clipboard.writeText(passwordRef.current.value);
}, [password])

useEffect(()=>generatePassword(),[length, numberAllowed, charAllowed, generatePassword])

  return (
    <>
      <div className="w-full max-w-xl mx-auto shadow-md rounded-lg px-8  py-8 my-4 text-orange-500 bg-gray-900">
        <h1 className="text-2xl font-bold text-white w-full text-center">
          Password Generator
        </h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            className="w-full h-12 px-8 text-gray-700 placeholder-gray-400"
            value={password}
            placeholder="Password"
            readOnly
            ref={passwordRef}
          ></input>

          <button className="p-8 bg-blue-600 px-3 py-0.5 text-white shrink-0 hover:bg-red-800"
          onClick={copyPasswordToClipboard}>
          
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-4">
          <div className="flex items-center gap-x-2">
            <input type="range" min={6} max={100} value={length} onChange={(e) => setLength(e.target.value)}/> 
            <label> Length: {length}</label> 
          </div>
          <div className="flex items-center gap-x-2">
            <input type="checkbox" value={numberAllowed} onChange={()=> {setNumberAllowed((prev)=> !prev)}}/> <label>Number</label>
            </div>
            <div className="flex items-center gap-x-2">
               <input type="checkbox" value={charAllowed} onChange={()=> {setCharAllowed((prev) => !prev)}}/> <label>Character</label>
         </div>
           
        </div>
      </div>
    </>
  );
}

export default App;
