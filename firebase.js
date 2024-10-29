import {initializeApp} from "firebase/app";
import{getFirestore}from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig ={
    apiKey: "AIzaSyC84XG3GKITkeD-FNWHGVj2fynWw6qa29o",
    authDomain: "apprefeicoeszamara.firebaseapp.com",
    projectId: "apprefeicoeszamara",
    storageBucket: "apprefeicoeszamara.appspot.com",
    messagingSenderId: "611205962875",
    appId: "1:611205962875:web:321d5c8a6f829d0174d6de"
}

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
}); 
export { signInWithEmailAndPassword, onAuthStateChanged };