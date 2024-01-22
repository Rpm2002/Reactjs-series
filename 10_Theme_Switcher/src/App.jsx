import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './Contexts/Theme'
import ThemeBtn from './Components/ThemeBtn'
import Card from './Components/Card'

function App() {
  const [ThemeMode,setThemeMode]=useState("light")

  const LightTheme=()=>{
    setThemeMode("light")
  }

  const DarkTheme=()=>{
    setThemeMode("dark")
  }

  // Actual change in Theme

  useEffect(() => {
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(ThemeMode)
  }, [ThemeMode])
  

  return (
        <ThemeProvider value={{ThemeMode,LightTheme,DarkTheme}}>
            <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                        <Card/>
                    </div>
                </div>
            </div>
        </ThemeProvider>    
  )
}

export default App
