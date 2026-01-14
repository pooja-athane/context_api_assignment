import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContexr'
import { useState } from 'react'

function Login() {


    const [username, setUsername] = useState("")
    const [pass, setPass] = useState("")
    const { setUser } = useContext(UserContext)

    const HandleSubmit = (e) => {
        e.preventDefault()
        setUser({ username, pass })
        setUsername("")
        setPass("")
    }
    return (
        <div>
            <input
                type='text'
                value={username}
                placeholder='username'
                onChange={(e) => setUsername(e.target.value)}

            />
            <input
                type='password'
                placeholder='password'
                value={pass}
                onChange={(e) => setPass(e.target.value)}

            />

            <button onClick={HandleSubmit}>Submit</button>
        </div>
    )
}

export default Login
