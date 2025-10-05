import {useState} from 'react';

// Imports from files
import LoginScreen from './screens/login.js';
import { MainScreen } from './screens/main.js';
import FirstLogin from './screens/firstlogin.js';
import { AppProvider } from './contexts/appcontext.js';

// Universal Consts
const d = new Date();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState('');

  return(
    <AppProvider>
      {
        isLoggedIn == '' ? 
          <LoginScreen onLogin={() => setIsLoggedIn('firstLogin')}/> : 
          <MainScreen onExit={() => setIsLoggedIn('')}/>
      }
    </AppProvider>
  )
}