import { useState,useEffect } from 'react'
import './App.css'
import {useDispatch} from 'react-redux'
import authservice from '../appwrite/auth'
import { login,logout } from '../store/authslice'
import {Header,Footer} from './components'
import {Outlet} from 'react-router-dom'

function App() {
  const [loading,setLoading]=useState(true)
  const dispatch=useDispatch()

  useEffect(() => {
   authservice.getCurrentUser()
   .then(userdata=>{
    if(userdata){
      dispatch(login({userdata}))
    }
    else{
      dispatch(logout())
    }
   })
   .finally(()=>setLoading(false))
  }, [])
  

  return !loading? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400' class="place-content-center">
      <div className='w-full block'>
        <Header/>
          <main>
            TODO :     <Outlet/>
          </main>
        <Footer/>
      </div>
    </div>
  ): null
}

export default App
