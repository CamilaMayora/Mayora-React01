import {initializeApp} from "firebase/app"

import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCFEJ-hLs7WCzhA24ChrB0ReoOPjo8jOp0",
    authDomain: "react-97ed6.firebaseapp.com",
    projectId: "react-97ed6",
    storageBucket: "react-97ed6.firebasestorage.app",
    messagingSenderId: "483208477679",
    appId: "1:483208477679:web:fc7d990b4aa64e3b4e941a",
    measurementId: "G-MX7PNT9CVM"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);