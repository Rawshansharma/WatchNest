// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2THDIPdCCdRX5Ef0H-xRYe1JSi7WhSC0",
  authDomain: "reactfirebase-1edfe.firebaseapp.com",
  projectId: "reactfirebase-1edfe",
  storageBucket: "reactfirebase-1edfe.appspot.com",
  messagingSenderId: "340138217063",
  appId: "1:340138217063:web:51d41afdce3e25795fcec2",
  measurementId: "G-F5G5TPVR0F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);