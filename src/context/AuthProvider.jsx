import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import axios from 'axios';

const googleProvider=new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [loading,setLoading]=useState(true)
    const [user,setUser]=useState(null)
    const createUser=(emai,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,emai,password)
    }

    //for user login
    const userLogin=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signInWithGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
    //logout
    const userLogout=()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false);
            if(currentUser?.email){
                const userData={ emai: currentUser. email}
                axios.post('http://localhost:5000/jwt',userData)
                .then(res=>{
                    console.log('Token after jwt',res.data)
                })
                .catch(error=>{
                    console.log(error)
                })
            }
            console.log('User in the auth state change:',currentUser)
        })
        return ()=>{
            unSubscribe();
        }
    },[])
    const authInfo={
        loading,
        user,
        createUser,
        userLogin,
        signInWithGoogle,
        userLogout

    }
    return (
        <AuthContext value={authInfo}>
            {children}

        </AuthContext>
    );
};

export default AuthProvider;