// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAo2rIf9Liss0h8Kcxf3jRmrnRNLmVlS1E",
  authDomain: "dragon-news-da498.firebaseapp.com",
  projectId: "dragon-news-da498",
  storageBucket: "dragon-news-da498.firebasestorage.app",
  messagingSenderId: "811560742033",
  appId: "1:811560742033:web:3fa8ef4f917a6aa1a4a330"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)