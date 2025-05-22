// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth, getReactNativePersistence, getAuth } from "firebase/auth";
import ReactNativeAsyncStorage  from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDM4yCUDo6uOz9XOcuWt1zDyYz-5c3FdGk",
  authDomain: "palja-mobauth.firebaseapp.com",
  projectId: "palja-mobauth",
  storageBucket: "palja-mobauth.firebasestorage.app",
  messagingSenderId: "469240617197",
  appId: "1:469240617197:web:d5c482a1a59caed9eb14e4",
  measurementId: "G-4Q4JTZJT1N"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
const analytics = getAnalytics(firebaseApp);