import { Text, SafeAreaView, StyleSheet, Image, TextInput, Button, Linking} from 'react-native';
import {useState} from 'react';



// Imports from npm
import { Card } from 'react-native-paper';

// Imports from files
import { styles } from './styles.js';
import LoginScreen from './screens/login.js';
import { MainScreen } from './screens/main.js';

// Universal Consts
const d = new Date();
let hour = d.getHours();




export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado aqui

  return(
    isLoggedIn ? 
      <MainScreen onExit={() => setIsLoggedIn(false)}/> : 
      <LoginScreen onLogin={() => setIsLoggedIn(true)}/>
  )
}