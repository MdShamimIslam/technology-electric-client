// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMEvuFogdBLRcw04uQ54r6QnSWzJhf0w8",
  authDomain: "technology-electronic.firebaseapp.com",
  projectId: "technology-electronic",
  storageBucket: "technology-electronic.appspot.com",
  messagingSenderId: "215678634752",
  appId: "1:215678634752:web:2d02f7269989f2dd2bc1e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;