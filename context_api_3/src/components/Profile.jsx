import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile({children}) {
    const {user} =useContext(UserContext)
    if(!user) return (<div>Please Login</div>)
    
  return (
    <div>
Welcome to Your Account {user.username}
    </div>
  )
}

export default Profile
