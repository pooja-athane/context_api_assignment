import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import UesrContext from '../context/UserContext'

function Login() {

    const [username, setUsername] = useState("")
    const [password, setPass] = useState("")

    const {setUser} =useContext(UesrContext)

    const HandleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
        setUsername("")
        setPass("")
    }
    return (
        <div>
            <input
                type='text'
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type='password'
                value={password}
                placeholder='Password'
                onChange={(e) => setPass(e.target.value)}
            />
            <button onClick={HandleSubmit}>Submit</button>
        </div>
    )
}

export default Login
