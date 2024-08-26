import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBcnb_rKHnqhsX98kLxUyivRM7EwduPTIA",
  authDomain: "medicontrol-285a2.firebaseapp.com",
  projectId: "medicontrol-285a2",
  storageBucket: "medicontrol-285a2.appspot.com",
  messagingSenderId: "1027286262196",
  appId: "1:1027286262196:web:51e61317e30cef72f212e1",
  measurementId: "G-N72PNFR64F",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth(app);
