// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCcE-IGVeF90tPv4VLBgHt-JFj1SVbS3H0",
    authDomain: "notable-b0fb9.firebaseapp.com",
    projectId: "notable-b0fb9",
    storageBucket: "notable-b0fb9.appspot.com",
    messagingSenderId: "84176392009",
    appId: "1:84176392009:web:7157eb0c0a67a2054cd498",
    measurementId: "G-H6DH6CEFRG"
  };

// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export default firebase_app;