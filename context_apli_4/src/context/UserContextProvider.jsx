import React from 'react'
import { useState } from 'react'
import UesrContext from './UserContext'

const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    return (
        <UesrContext.Provider value={{ user, setUser }}>
            {children}
        </UesrContext.Provider>
    )
}

export default UserContextProvider
