import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../firebase'

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}
export function AuthProvider({children}){
    const [currentUser,setCurrentUser] = useState();
    const [Loading,setLoading] = useState()
    function signup(email,password){
       return auth.createUserWithEmailAndPassword(email,password);
    }

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user => {
            setLoading(false)
            setCurrentUser(user)
          })
          return unsubscribe;
    },[])
    const  value={
        currentUser,
        signup
    }
    return(
        <AuthContext.Provider value={value}>
            {Loading && children}
        </AuthContext.Provider>
    );
}