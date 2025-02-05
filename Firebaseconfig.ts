// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-yCUe7b3xQ__tUrMfRD40ONOaageiKI0",
  authDomain: "login-firebase-5d54c.firebaseapp.com",
  projectId: "login-firebase-5d54c",
  storageBucket: "login-firebase-5d54c.firebasestorage.app",
  messagingSenderId: "135997503680",
  appId: "1:135997503680:web:f5c1ee447fc77e3be59525"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});


export const db = getFirestore(app);
