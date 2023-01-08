import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD0M89nn81XqhTvnkCExXUbKAyPzJG0O6w",
    authDomain: "new-york-times-bs-b5d54.firebaseapp.com",
    projectId: "new-york-times-bs-b5d54",
    storageBucket: "new-york-times-bs-b5d54.appspot.com",
    messagingSenderId: "1087517323917",
    appId: "1:1087517323917:web:d538492832fb785b4c68c4",
    measurementId: "G-0464KWMCXT"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
