import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
import app from "../firebaseConfig.js"; // ✅ Path corrected

const auth = getAuth(app);

document.getElementById("login-form").addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        
        // ✅ Login success alert
        alert("Login successful!");

        // ✅ User data localStorage me save karo
        localStorage.setItem("user", JSON.stringify(userCredential.user));

        // ✅ Form reset
        document.getElementById("login-form").reset();

        // ✅ Redirect to homepage
        setTimeout(() => {
            window.location.href = "../index.html";
        }, 1000);

    } catch (error) {
        console.error("Login Error:", error);

        // ✅ Better error message
        alert(`Login failed: ${error.message}`);
    }
});
