// JavaScript source code
// Import the functions you need from the SDKs you need

import { getAnalytics } from "firebase/analytics";
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyADdHLHtHvQc2X4GS4FoVu5vNpmbJMQ1ME",
    authDomain: "voilitionsphereapp.firebaseapp.com",
    projectId: "voilitionsphereapp",
    storageBucket: "voilitionsphereapp.appspot.com",
    messagingSenderId: "834075368641",
    appId: "1:834075368641:web:4bd1462c0e85ff5cf04840",
    measurementId: "G-L3JW08DE2X"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
// Initialize Firebase

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export default database;

