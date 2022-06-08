import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjcF8wNKJittdQiB2mYGxT23xWhYV9X1I",
  authDomain: "twitter-clone-b700f.firebaseapp.com",
  projectId: "twitter-clone-b700f",
  storageBucket: "twitter-clone-b700f.appspot.com",
  messagingSenderId: "869363761255",
  appId: "1:869363761255:web:c412fd85cecf135bdb54c2",
  measurementId: "G-N9H8QLZC5Y"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
