import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDseDio8uL02cZlIX7nwKdeA4BoLyIe85U",
  authDomain: "airbnb-53ff5.firebaseapp.com",
  projectId: "airbnb-53ff5",
  storageBucket: "airbnb-53ff5.appspot.com",
  messagingSenderId: "115077303679",
  appId: "1:115077303679:web:5c78fd620d3b7ce0a95e4a",
  measurementId: "G-VVB6BYP2X2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
