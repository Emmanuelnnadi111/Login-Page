// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtaVEluLCl4N8MyQK5jrBLP8H7gN3V-d8",
  authDomain: "user-dashboard-21ba5.firebaseapp.com",
  projectId: "user-dashboard-21ba5",
  storageBucket: "user-dashboard-21ba5.appspot.com",
  messagingSenderId: "82723492847",
  appId: "1:82723492847:web:247b6e90e32b996ccd1c1a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export default app;
