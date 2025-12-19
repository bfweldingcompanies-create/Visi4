import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "freemind-app-e9d0e.firebaseapp.com",
  projectId: "freemind-app-e9d0e",
  storageBucket: "freemind-app-e9d0e.appspot.com",
  messagingSenderId: "960645940778",
  appId: "APP_ID"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
