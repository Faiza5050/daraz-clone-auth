// Firebase ka import
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";

// Firebase ki configuration
const firebaseConfig = {
    apiKey: "AIzaSyDcjBetEYaITeOrxMbDi6RockHv3ktnEDY",
    authDomain: "daraz-html-css.firebaseapp.com",
    projectId: "daraz-html-css",
    storageBucket: "daraz-html-css.appspot.com",
    messagingSenderId: "391164438745",
    appId: "1:391164438745:web:3a88f2fd76cb5099a3b6c8"
};

// Firebase app initialize karna
const app = initializeApp(firebaseConfig);

// Firebase ko export karna taake use kar sakein
export default app;
