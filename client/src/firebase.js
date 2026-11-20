// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBiFG68VKTrQLxQSmN6u0B08eljAFSTEtw",
  authDomain: "mern-estate-7ab84.firebaseapp.com",
  projectId: "mern-estate-7ab84",
  storageBucket: "mern-estate-7ab84.firebasestorage.app",
  messagingSenderId: "701298185159",
  appId: "1:701298185159:web:44e9103e4f831d628b3fe2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);