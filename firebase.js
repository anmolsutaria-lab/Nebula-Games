    // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCb-NQ4sV_pHJrbihYhOVAkbOirEqf3jDI",
  authDomain: "nebula-unblocked-games.firebaseapp.com",
  projectId: "nebula-unblocked-games",
  storageBucket: "nebula-unblocked-games.firebasestorage.app",
  messagingSenderId: "522877947204",
  appId: "1:522877947204:web:1c3eaade0799464cbedb11",
  measurementId: "G-K53B4PT4TN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
