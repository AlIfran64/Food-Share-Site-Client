import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from '../../../Firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";

const AuthProvider = ({ children }) => {

  // Google Auth Provider
  const provider = new GoogleAuthProvider();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Signup
  const signup = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // Login
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Logout
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  }

  // Observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    })
    return () => {
      unSubscribe();
    }
  }, [])

  // Google Login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  }

  // Update profile
  const userProfileUpdate = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData)
  }

  // User info
  const userInfo = {
    signup,
    login,
    logout,
    googleLogin,
    user,
    setUser,
    loading,
    setLoading,
    userProfileUpdate
  }
  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;