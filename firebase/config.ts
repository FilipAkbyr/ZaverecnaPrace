// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCcE-IGVeF90tPv4VLBgHt-JFj1SVbS3H0",
    authDomain: "notable-b0fb9.firebaseapp.com",
    projectId: "notable-b0fb9",
    storageBucket: "notable-b0fb9.appspot.com",
    messagingSenderId: "84176392009",
    appId: "1:84176392009:web:7157eb0c0a67a2054cd498",
    measurementId: "G-H6DH6CEFRG"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);