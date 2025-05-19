import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase.init";
import React, { useEffect, useState } from "react";
import { AuthContext } from "./Authcontext";

const googleProvider = new GoogleAuthProvider();

function AuthPorvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignInUser = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // onAuthStateChanged(auth, (currentUser) => {
  //   if(currentUser) {
  //     console.log("Has current user", currentUser);
  //   }
  //   else {
  //     console.log("Hasn't Current User", currentUser);
  //   }
  // })

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Inside useEffect on auth state change", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const userInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signOutUser,
    googleSignInUser,
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
}

export default AuthPorvider;
