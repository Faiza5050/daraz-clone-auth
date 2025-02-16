import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
import app from "../firebase-config.js";

const auth = getAuth(app);

document.getElementById("signup-form").addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        alert("Signup successful! Please login.");
        
        // Form reset karein
        document.getElementById("signup-form").reset();

        // Redirect to login page
        window.location.href = "../components/login.html"; 
    } catch (error) {
        console.error("Signup Error:", error);
        alert("Signup failed: " + error.message);
    }
});
