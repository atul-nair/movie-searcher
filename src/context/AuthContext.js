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
     const [loading, setLoading ] = useState(true)

     //creates users
     function signup(email, password) {
         return auth.createUserWithEmailAndPassword(email, password)
     }

     //logs users in
     function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

     useEffect(() => {
        //sets current user
        const unsubscribe = auth.onAuthStateChanged(user => {
            setLoading(false)
            setCurrentUser(user)
        })
        return unsubscribe

     }, [])


    
    const value = {
        currentUser,
        signup,
        login,
        
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

