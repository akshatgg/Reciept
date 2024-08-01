import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDfPPj12F39p6r7CIr-MQoiV56KZi-6V50",
    authDomain: "recipe-c2708.firebaseapp.com",
    projectId: "recipe-c2708",
    storageBucket: "recipe-c2708.appspot.com",
    messagingSenderId: "416213171882",
    appId: "1:416213171882:web:31747b8a5c5e035c4b1ad3",
    measurementId: "G-BQB4GLZYCJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase();

export { auth,db, database };
