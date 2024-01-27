import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { addUser,deleteUser,updateUser } from './features/Users'

function App() {
  const dispatch=useDispatch()
  const userList=useSelector(state=>state.users.value)
  const [name,setName]=useState('')
  const [username,setUserName]=useState('')
  const [newusername,setNewUserName]=useState('')

  return (
    <>
      <div className="App">
          <div className="addUser">
            <input type='text' placeholder='Name..' onChange={(e)=>setName(e.target.value)}/>
            <input type='text' placeholder='UserName..' onChange={(e)=>setUserName(e.target.value)}/>
            <button onClick={()=>{dispatch(addUser(
              {id:userList[userList.length-1].id+1,name,username}))}}>
              Add User
            </button>
          </div>

          <div className="displayUsers">
            {userList.map(user=>{
              return(
                <div>
                  <h1>{user.name}</h1>
                  <h1>{user.username}</h1>
                  <input type='text' placeholder='New UserName..'
                   onChange={(e)=>setNewUserName(e.target.value)} />
                   
                  <button onClick={()=>{dispatch(updateUser(
                     {id:user.id,username:newusername}))}}>
                      Update Username
                  </button>

                  <button onClick={()=>{dispatch(deleteUser(
                     {id:user.id}))}}>
                      Delete Username
                  </button>
                </div>  
              )
            })}
          </div>
      </div>
    </>
  )
}

export default App
