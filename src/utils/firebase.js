// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAr3EfZgkR4q5OADdU55HA_98cJ41Ja4sg",
  authDomain: "zetflix-5d4de.firebaseapp.com",
  projectId: "zetflix-5d4de",
  storageBucket: "zetflix-5d4de.firebasestorage.app",
  messagingSenderId: "417121534588",
  appId: "1:417121534588:web:9f1d562cacf773ea9afff9",
  measurementId: "G-KZWDREH22Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
