import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from '../../Firebase/Firebase_init_';



export const AuthContext = createContext();

export const auth = getAuth(app);
 
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true)


    const createUser = (email, password) =>{
        setLoading(true)

        return createUserWithEmailAndPassword(auth, email, password)

    }

    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }



    // Update user

    const updateUser = (updatedData)=>{
        return updateProfile(auth.currentUser, updatedData)

    }



    const logOut = () =>{
        return signOut(auth)
         
    }


    const authData = {
        user,
        setUser, 
        createUser,
        logOut,
        signIn,
        loading,
        setLoading,
        updateUser
    
         
    }


    useEffect(()=>{
        const unsSubscribe = onAuthStateChanged(auth, (currentUser) => {

            setUser(currentUser)
            setLoading(false)

            // if (user) {
            //   // User is signed in, see docs for a list of available properties
            //   // https://firebase.google.com/docs/reference/js/auth.user
            //   const uid = user.uid;
            //   // ...
            // } else {
            //   // User is signed out
            //   // ...
            // }

            return()=>{
                unsSubscribe()

            }
          });
          

    },[])


    return <AuthContext value={authData}> {children} </AuthContext>
};

export default AuthProvider;