// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpX9T93okpEj5d0yGynjZozl8srfsf4Ig",
  authDomain: "netflixgpt-e6643.firebaseapp.com",
  projectId: "netflixgpt-e6643",
  storageBucket: "netflixgpt-e6643.appspot.com",
  messagingSenderId: "133525821671",
  appId: "1:133525821671:web:a0033b6e80a8e5efa56a42",
  measurementId: "G-GCHMMKGWWW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();