// Import the functions you need from the SDKs you need

// This is not working - docs firebase need to updated - DO NOT USE
// import { initializeApp } from "firebase/app";


// THIS IS CORRECT
import firebase from 'firebase'
import 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase


let auth

try{
    const app = firebase.initializeApp(firebaseConfig);
    auth = app.auth()
} catch (error){
    auth = error.code
}

export default auth

