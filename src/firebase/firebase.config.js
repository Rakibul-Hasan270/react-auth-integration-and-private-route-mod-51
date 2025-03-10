// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBBqoMOSc-aWN95enkLBRW2TO7DxmZDmxs",
    authDomain: "react-auth-integration-and-p-r.firebaseapp.com",
    projectId: "react-auth-integration-and-p-r",
    storageBucket: "react-auth-integration-and-p-r.firebasestorage.app",
    messagingSenderId: "618070217334",
    appId: "1:618070217334:web:ad7c2bb0e78b3067b14557"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;