// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHyabGabem-rd4wR3udXMLQ9p_MUt6bsg",
  authDomain: "livechatapp-42640.firebaseapp.com",
  projectId: "livechatapp-42640",
  storageBucket: "livechatapp-42640.appspot.com",
  messagingSenderId: "569186489018",
  appId: "1:569186489018:web:63ed86dffec5fec67a2883"
};

// Initialize Firebase & export
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app) 
export const db = getFirestore(app)