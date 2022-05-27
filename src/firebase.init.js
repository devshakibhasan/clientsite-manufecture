// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfAMTp04veCoyEMil4b23EeLZfmxZHWxQ",
  authDomain: "manufacturers-web.firebaseapp.com",
  projectId: "manufacturers-web",
  storageBucket: "manufacturers-web.appspot.com",
  messagingSenderId: "678617612380",
  appId: "1:678617612380:web:b5f28c509a300954006699",
  measurementId: "G-NPC9T4WD8H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;