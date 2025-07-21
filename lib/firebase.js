
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyARexS04eoDPPyPAxH4zvkmk6UzD4qCtjE",
  authDomain: "askpi-2025.firebaseapp.com",
  projectId: "askpi-2025",
  storageBucket: "askpi-2025.appspot.com", // Fixed typo: should be .appspot.com
  messagingSenderId: "139619139109",
  appId: "1:139619139109:web:6ac1ae3dabebbbd0da49cc",
  measurementId: "G-7S3FT9TQ7W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

export {auth,db};