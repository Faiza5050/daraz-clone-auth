import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
import app from "../firebase-config.js";

const auth = getAuth(app);

document.getElementById("login-form").addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful!");

        // User ka data save karna (optional)
        localStorage.setItem("user", JSON.stringify(userCredential.user));

        // Form reset karein
        document.getElementById("login-form").reset();

        // Redirect to homepage after login
        window.location.href = "../index.html"; 
    } catch (error) {
        console.error("Login Error:", error);
        alert("Login failed: " + error.message);
    }
});
