import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyD8ItIBqb6MICS_wNsnPzqFvg1BZVu1E50",
  authDomain: "inventorymanagementsyste-3a4f4.firebaseapp.com",
  projectId: "inventorymanagementsyste-3a4f4",
  storageBucket: "inventorymanagementsyste-3a4f4.appspot.com",
  messagingSenderId: "144379056339",
  appId: "1:144379056339:web:14ea4069d2f31956534426"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
