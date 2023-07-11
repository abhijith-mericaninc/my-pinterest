// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

  const firebaseConfig = {
    apiKey: "AIzaSyCYUslC2akKiiJnDNKNQ1x50_HROGt2Ju8",
    authDomain: "my-pinterest-3c5ab.firebaseapp.com",
    projectId: "my-pinterest-3c5ab",
    storageBucket: "my-pinterest-3c5ab.appspot.com",
    messagingSenderId: "763621267116",
    appId: "1:763621267116:web:f09a995a8c0f2f56993109"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
export const auth = getAuth(app);
