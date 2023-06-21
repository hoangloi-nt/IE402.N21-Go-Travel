import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCedOkRODjWfDM6lRHxaT5UpC-2tzTpAU4",
  authDomain: "go-travel-ad001.firebaseapp.com",
  projectId: "go-travel-ad001",
  storageBucket: "go-travel-ad001.appspot.com",
  messagingSenderId: "826871226068",
  appId: "1:826871226068:web:8eaaad70d58133904f6541",
  measurementId: "G-98Q45LR1ZJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
