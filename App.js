import { Text, SafeAreaView, StyleSheet, Image, TextInput, Button, Linking} from 'react-native';
import {useState} from 'react';


// Imports from files
import LoginScreen from './screens/login.js';
import { MainScreen } from './screens/main.js';

// Universal Consts
const d = new Date();




export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado aqui

  return(
    isLoggedIn ? 
      <MainScreen onExit={() => setIsLoggedIn(false)}/> : 
      <LoginScreen onLogin={() => setIsLoggedIn(true)}/>
  )
}