import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiqnFjjVwg2xv7oG4hP61N7ZQmgwEfZuY",
  authDomain: "todolist-6b73d.firebaseapp.com",
  projectId: "todolist-6b73d",
  storageBucket: "todolist-6b73d.appspot.com",
  messagingSenderId: "1019153212067",
  appId: "1:1019153212067:web:f5d8851e75d84d87389516"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP)