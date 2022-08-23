// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxNaBuzQVKwvlV8euJ42CwgabX-p_h3fQ",
  authDomain: "fashion-ecommerce-92924.firebaseapp.com",
  projectId: "fashion-ecommerce-92924",
  storageBucket: "fashion-ecommerce-92924.appspot.com",
  messagingSenderId: "95075647489",
  appId: "1:95075647489:web:8949cc535efc356ae7c000"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth