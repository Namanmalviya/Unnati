// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbQi_uMDdSU2Wtii0NGnhLDXxz3XTZaTM",
  authDomain: "dbms-project-8dc7c.firebaseapp.com",
  projectId: "dbms-project-8dc7c",
  storageBucket: "dbms-project-8dc7c.firebasestorage.app",
  messagingSenderId: "727988720401",
  appId: "1:727988720401:web:8ef3c2da775c2dd62e32b0",
  measurementId: "G-M308ZX7TEL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export  { db };