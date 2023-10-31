import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword,  getAuth,  onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import {app} from '../Firebase/Firebase.config'


export const AuthContext= createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState('')
    const [loading,setLoading]=useState(true)

    const createUser=(email,password)=>
    {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn=(email,password)=>
    {
        setLoading(true)
        return signInWithEmailAndPassword(email,password)
    }

    const logout=()=>
    {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>
    {
        const unSubscribe=onAuthStateChanged(auth,currentUser=>
            {
                setUser(currentUser)
                setLoading(false)
            });
            return ()=>
            {
                unSubscribe();
            }
    },[])

    const authInfo={
        user,
        loading,
        createUser,
        signIn,
        logout

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;