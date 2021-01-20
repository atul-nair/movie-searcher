import React, {useContext, useState, useEffect} from 'react'
import {auth} from '../firebase'

//auth context
const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
     //states of user
     const [currentUser, setCurrentUser] = useState()

     //creates users
     function signup(email, password) {
         return auth.createUserWithEmailAndPassword(email, password)
     }

     useEffect(() => {
        //sets current user
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })
        return unsubscribe

     }, [])


    
    const value = {
        currentUser,
        signup
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

