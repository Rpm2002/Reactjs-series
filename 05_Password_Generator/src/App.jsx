import { useCallback, useState, useEffect, useRef } from 'react'

/*
  => useState is a React Hook that lets you add a state variable to your component.
  => const [state, setState] = useState(initialState)
  => useState returns an array with exactly two values:
        The current state. During the first render, it will match the initialState you have passed.
        The set function that lets you update the state to a different value and trigger a re-render.
*/

function App() {
  const [length,setLength]=useState(8);
  const [numbersAllowed,setnumbersAllowed]=useState(false);
  const [charactersAllowed,setcharactersAllowed]=useState(false);
  const [password,setPassword]=useState("");
 
  /* => useRef is a React Hook that lets you reference a value that’s not needed for rendering.
     => const ref = useRef(initialValue)
     => initialValue: The value you want the ref object’s current property to be initially. It can be a value of 
     any type. This argument is ignored after the initial render. 
     => useRef returns an object with a single property:
            current: Initially, it’s set to the initialValue you have passed. You can later set it to 
            something else. If you pass the ref object to React as a ref attribute to a JSX node, React 
            will set its current property.

  */

  const passwordRef=useRef(null)

  /* => useCallback is a React Hook that lets you cache a function definition between re-renders.
     => const cachedFn = useCallback(fn, dependencies) 
     => You should only rely on useCallback as a performance optimization. 
     => Parameters 
        fn: The function value that you want to cache. It can take any arguments and return any values.
        dependencies: The list of all reactive values referenced inside of the fn code. Reactive values include 
        props, state, and all the variables and functions declared directly inside your component body. 
  */

  const passwordGenerator=useCallback(()=>{
    let password="";
    let string="ABCDEFGHIJKLMNOPQRSTUVWXYZacdefghijklmnopqrstuvwxyz";
    if(numbersAllowed) string+="0123456789";
    if(charactersAllowed) string+="~!@#$%^&*()_+?/,.:;";

    for(let i=1;i<=length;i++)
    {
      let char=Math.floor(Math.random()*string.length+1);
      password+=string.charAt(char);
    }

    setPassword(password);
    
  },[length,numbersAllowed,charactersAllowed,setPassword])

  const copyPasswordtoClipBoard=useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  /* => useEffect is a React Hook that lets you synchronize a component with an external system.
     => useEffect(setup, dependencies?)
     => setup: The function with your Effect’s logic.
     => optional dependencies: The list of all reactive values referenced inside of the setup code. Reactive values
        include props, state, and all the variables and functions declared directly inside your component body. 
  */
 
  useEffect(()=>{
    passwordGenerator()
  },[length,numbersAllowed,charactersAllowed,passwordGenerator])

  return (
    <>
      <div className='w-auto max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-3
      text-orange-600 bg-gray-700'>
      <h1 className='flex shadow rounded-lg overflow-hidden' class='text-center text-yellow-400'>Password Generator</h1>
      <div className='flex shadow items-center gap-x-1  flex-row rounded-lg overflow-hidden mb-4' >
        <input 
          type='text'
          value={password}
          className='outline-none w-full'
          placeholder='password'
          readOnly
          ref={passwordRef}
         />
         <button onClick={copyPasswordtoClipBoard} className=' bg-blue-700 text-white px-1 py-0.5 shrink-0'>Copy</button>
        </div> 

        <div className='flex text-sm gap-x-3'>
          <div className='flex items-center gap-x-2'>
              <input
                type='range'
                min={6}
                max={100}
                value={length}
                className='cursor-pointer'
                onChange={(e)=>{setLength(e.target.value)}}
              />
              <label>Length : {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
              <input
                type='checkbox'
                defaultChecked={numbersAllowed}
                id='numberInput'
                onChange={()=>{setnumbersAllowed((prev)>=!prev)}}
              />
              <label htmlFor='numberInput'>Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
              <input
                type='checkbox'
                defaultChecked={charactersAllowed}
                id='charcterInput'
                onChange={()=>{setcharactersAllowed((prev)>=!prev)}}
              />
              <label htmlFor='characterInput'>Characters</label>
          </div>

        </div>     
      </div>
    </>
  )
}

export default App
