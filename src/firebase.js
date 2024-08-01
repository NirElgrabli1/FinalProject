import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBreEeDjk-YgOFYSjEBXh1MpIY6WwKt8tg",
    authDomain: "modestinstyle-4e115.firebaseapp.com",
    projectId: "modestinstyle-4e115",
    storageBucket: "modestinstyle-4e115.appspot.com",
    messagingSenderId: "166220682261",
    appId: "1:166220682261:web:d515d782e19e90feb3ea1c",
    measurementId: "G-JYBE65DW0C"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}