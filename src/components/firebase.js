import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDe2VJH5AkN-FzaKRd1nWeP9xokRVTeDPE",
  authDomain: "sign-login-41127.firebaseapp.com",
  projectId: "sign-login-41127",
  storageBucket: "sign-login-41127.firebasestorage.app",
  messagingSenderId: "618508894105",
  appId: "1:618508894105:web:d4f0c19d40814a57b05d08"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }; 
