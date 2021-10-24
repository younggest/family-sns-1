// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKyox4bShGINkD8YOJqPMkXfuYewP9Pi8",
  authDomain: "family-sns-1.firebaseapp.com",
  projectId: "family-sns-1",
  storageBucket: "family-sns-1.appspot.com",
  messagingSenderId: "958819766655",
  appId: "1:958819766655:web:56d6a974205a9cb7348a4a"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };