import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
  
const firebaseConfig = {
    apiKey: "AIzaSyDyo7DbFIuM6tMfIiZvcPm64BqyxBEDgkU",
    authDomain: "intranet-66fd3.firebaseapp.com",
    projectId: "intranet-66fd3",
    storageBucket: "intranet-66fd3.appspot.com",
    messagingSenderId: "140980506274",
    appId: "1:140980506274:web:bfa8a91f4d21a04929d1fb",
    measurementId: "G-XV8NQ5Q4H1"
  };
  
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
  
export default db;