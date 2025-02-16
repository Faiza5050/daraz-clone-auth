import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
import app from "../firebaseConfig.js"; // ✅ Path corrected

const auth = getAuth(app);

document.getElementById("signup-form").addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        
        // ✅ Signup success alert
        alert("Signup successful! Please login.");

        // ✅ Form reset
        document.getElementById("signup-form").reset();

        // ✅ Redirect to login page after 1 second
        setTimeout(() => {
            window.location.href = "../components/login.html";
        }, 1000);

    } catch (error) {
        console.error("Signup Error:", error);

        // ✅ Better error messages
        alert(`Signup failed: ${error.message}`);
    }
});
