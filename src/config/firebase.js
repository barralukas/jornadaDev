// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDak9sWwMSAZLqjrMKMCb5M8KBtm6clgwc",
  authDomain: "tiktok---jornada-74812.firebaseapp.com",
  projectId: "tiktok---jornada-74812",
  storageBucket: "tiktok---jornada-74812.appspot.com",
  messagingSenderId: "37348075027",
  appId: "1:37348075027:web:47c94d5f43a969fd4281e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;