// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDX2YG_-_JPlMHA35T46zgRqRZECU5a1ZY",
  authDomain: "grocery-app-e81c6.firebaseapp.com",
  projectId: "grocery-app-e81c6",
  storageBucket: "grocery-app-e81c6.appspot.com",
  messagingSenderId: "636084480826",
  appId: "1:636084480826:web:51c2fc661973b1cc58fe03",
  measurementId: "G-XFS89B9YC2",
  databaseURL: "https://grocery-app-e81c6-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
export const database = getDatabase(app);
export default app;

//export var database = app.database();
