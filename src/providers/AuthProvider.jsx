import React, { useState, useEffect, createContext } from 'react';

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider
} from "firebase/auth";

import app from "./../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  const updateUser = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    });
  }
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const signInUser = (email, password) => {
    setLoading(true);

    return signInWithEmailAndPassword(auth, email, password);
  }

  const signOutUser = () => {
    setLoading(true);

    return signOut(auth);
  }

  const signInGoogle = () => {
    setLoading(true);

    return signInWithPopup(auth, googleProvider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, loggedInUser => {
      setUserInfo(loggedInUser);
     
       // get and set token
       if(loggedInUser){
        axios.post('https://summer-camp-server-ten.vercel.app/jwt', {email: loggedInUser.email})
        .then(data =>{
            localStorage.setItem('access-token', data.data.token)
            setLoading(false);
        })
    }
    else{
        localStorage.removeItem('access-token')
    }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    userInfo,
    loading,
    createUser,
    updateUser,
    signInUser,
    signOutUser,
    signInGoogle
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider