import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodos from './Components/AddTodos'
import Todos from './Components/Todos'

function App() {

  return (
    <>
      <h1>Redux Toolkit</h1>
      <AddTodos/>
      <Todos/>
    </>
  )
}

export default App
