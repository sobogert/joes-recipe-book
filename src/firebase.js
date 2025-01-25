// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCheUfdMINA_UeYc2ex4Bw3dw2fYaYvKoQ",
    authDomain: "joes-recipe-book.firebaseapp.com",
    projectId: "joes-recipe-book",
    storageBucket: "joes-recipe-book.firebasestorage.app",
    messagingSenderId: "104872852525",
    appId: "1:104872852525:web:e9b0ec23dde57a2d9c8ca4",
    measurementId: "G-QMQKXGH1PG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);