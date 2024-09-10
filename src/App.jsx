import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react"

function App() {
  const [length, setLength] = useState(8);
  const [allowNum, setAllowNum] = useState(false);
  const [allowChar, setAllowChar] = useState(false);
  const [password, setPassword] = useState(null);

  const passwordGenerator = useCallback(()=>{
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if(allowNum) str += '123456789';
    if(allowChar) str += '!@#$%&_+-=';

    for(let i=0; i <= length; i++){
       pass += str[Math.floor(Math.random() * str.length)];
    };

    setPassword(pass);

  }, [allowNum, allowChar, length, setPassword]);

  useEffect(()=>{
    passwordGenerator();
  }, [allowNum, allowChar, length]);



  return (
    <>
      <div className="content-center w-full mt-10">
          <h1 className="text-2xl text-center">Random Password</h1>
          <h2 className="text-center text-xl mt-5">{password}</h2>
          <div className="text-center my-10">
          <button
          className="bg-slate-100 text-black font-semibold px-2 py-1 rounded-md"
          onClick={passwordGenerator}
          >Generate New</button>
          </div>
          <div className="text-center flex justify-center gap-5">
            <button 
            className="bg-slate-100 text-black font-semibold px-2 py-1 rounded-md"
            onClick={()=> {setAllowNum(prev => !prev)}}
            >Allow Numbers</button>
            <button 
            className="bg-slate-100 text-black font-semibold px-2 py-1 rounded-md"
            onClick={()=> {setAllowChar(prev => !prev)}}
            >Allow Chars</button>
          </div>

          <div className="flex justify-center items-center gap-5 my-5">
            <input type="range" min={6} max={100} value={length} onChange={(e) => setLength(e.target.value)} />
            <span>
              Length: {length}
            </span>
          </div>
      </div>
    </>
  )
}

export default App
