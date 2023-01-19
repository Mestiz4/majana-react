// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0xEOlpg1IzFq5gwfLT0vy4HsLpEI95Bw",
  authDomain: "majana-prueba.firebaseapp.com",
  projectId: "majana-prueba",
  storageBucket: "majana-prueba.appspot.com",
  messagingSenderId: "218487883824",
  appId: "1:218487883824:web:e2a347319d90e6ff5505f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)