import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword]=useState("")
    const {setUser}=useContext(UserContext)


    const HandleSubmit =(e)=>{
        e.preventDefault()
        setUser({username, password})
        setUsername("")
        setPassword("")

    }
  return (
    <div>
      <input 
      type='text'
      value={username}
      placeholder='Enter Your Username'
      onChange={(e)=>setUsername(e.target.value)}
      />
      <input 
      type='password'
      value={ password}
      placeholder='Enter Your Password'
      onChange={(e)=>setPassword(e.target.value)}
      />

      <button onClick={HandleSubmit}>Submit</button>
    </div>
  )
}

export default Login
