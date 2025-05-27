import { Text, SafeAreaView, StyleSheet, Image, TextInput, Button, Linking} from 'react-native';
import {createContext, useEffect, useState} from 'react';
import { onAuthStateChanged } from "firebase/auth";

// Imports from files
import LoginScreen from './screens/login.js';
import LoginEmailScreen from './screens/loginEmail.js';
import { MainScreen } from './screens/main.js';
import { firebaseAuth } from './firebase/firebaseConfig.js';

// Universal Consts
const d = new Date();



export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado aqui

  return(
    isLoggedIn ? 
      <MainScreen onExit={() => setIsLoggedIn(false)}/> : 
      <LoginEmailScreen onLogin={() => setIsLoggedIn(true)}/>
  )
}