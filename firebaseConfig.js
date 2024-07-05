// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCoqguLxNL1HtNhYm7BJmN3vrLyZVaXZA",
  authDomain: "todoapp1214419.firebaseapp.com",
  projectId: "todoapp1214419",
  storageBucket: "todoapp1214419.appspot.com",
  messagingSenderId: "662326247659",
  appId: "1:662326247659:web:f09283e00e9ec058263eae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
