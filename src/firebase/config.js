import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAA7xhgW2VrWnUP7YOrEEAnEMoOIfJmHTw",
  authDomain: "myblog-86365.firebaseapp.com",
  projectId: "myblog-86365",
  storageBucket: "myblog-86365.appspot.com",
  messagingSenderId: "811549753687",
  appId: "1:811549753687:web:3adfbfc3a48aa0eaeabe12"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db };