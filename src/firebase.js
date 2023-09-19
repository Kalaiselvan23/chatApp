
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQc22e66FN-HCy8uAijFRFQlqY9QnNfAo",
  authDomain: "chat-app-a5f32.firebaseapp.com",
  projectId: "chat-app-a5f32",
  storageBucket: "chat-app-a5f32.appspot.com",
  messagingSenderId: "213972381736",
  appId: "1:213972381736:web:552f790d27dd91fcde451d",
  measurementId: "G-4FP6K1HPQ6"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()