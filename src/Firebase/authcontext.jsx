import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { ref, set } from 'firebase/database';
import { auth, database } from './firebase.js';
import toast from 'react-hot-toast';

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  const signup = async (email, password, username, name, number) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  
      const userRef = ref(database, 'Users/' + userCredential.user.uid);
      await set(userRef, {
        Username: username,
        Email: email,
        Name: name,
        Number: number,
        // avatar: avatar.name,
      });
  
      return userCredential;
    } catch (error) {
      console.error("Error during signup: ", error.message);
      throw error; // Re-throw the error after logging it
    }
  };
  

  const login = async (email, password) =>{
    try{
    await signInWithEmailAndPassword(auth, email, password);

    console.log("login successfully");
    toast.success("login successfully");
  }
    catch(error){
      console.error("Error during login: ", error.message);
      toast.error("credentials is not true");
      
    }
  }
  
    const logout = () =>{
      try{
      signOut(auth);
      }
      catch(error){
       console.log(error.message);
       
      }
    } 
 
  const value = {
    currentUser,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;

};

export { useAuth, AuthProvider };
