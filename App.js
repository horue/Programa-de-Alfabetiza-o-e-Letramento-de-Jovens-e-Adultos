import { Text, SafeAreaView, StyleSheet, Image, TextInput, Button, Linking} from 'react-native';
import {useState} from 'react';



// Imports from npm
import { Card } from 'react-native-paper';

// Imports from files
import { styles } from './styles.js';
import LoginScreen from './screens/login.js';

// Universal Consts
const d = new Date();
let hour = d.getHours();




export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado aqui

  return(
    isLoggedIn ? 
      <LoginScreen onLogin={() => setIsLoggedIn(false)}/> : 
      <LoginScreen onLogin={() => setIsLoggedIn(true)}/>
  )
}