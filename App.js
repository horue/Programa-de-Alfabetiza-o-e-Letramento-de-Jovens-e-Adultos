import {useState} from 'react';


// Imports from files
import LoginScreen from './screens/login.js';
import { MainScreen } from './screens/main.js';
import FirstLogin from './screens/firstlogin.js';

// Universal Consts
const d = new Date();



export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(''); // Estado aqui

  return(
    isLoggedIn == '' ? 
      <LoginScreen onLogin={() => setIsLoggedIn('firstLogin')}/>: 
       isLoggedIn == 'firstLogin' ?
        <FirstLogin onLogin={() => setIsLoggedIn('loggedIn')}/>:
        <MainScreen onExit={() => setIsLoggedIn('')}/>
  )
}