import React from 'react'
import { useContext } from 'react'
import UesrContext from '../context/UserContext'

function Profile({children}) {

    const {user} =useContext(UesrContext)
        if(!user) return (<div>Please Login</div>)
    
  return (
    <div>
      Welcome {user.password}
    </div>
  )
}

export default Profile
