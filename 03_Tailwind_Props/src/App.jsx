import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Componenets/Card'

function App() {
  let myObj={
    username:'Rhythm',
    age:21
}
  let newArray=[1,3,34]  
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card username="Chai aur react" btnText='Click Me'/>
      <Card username="Hitesh"/>
    </>
  )
}

export default App
