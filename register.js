// Import the Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQKrf7QS_STQSzSjcOVgGbYpIwbUcA2_c",
  authDomain: "em-powerfit-e1a6e.firebaseapp.com",
  projectId: "em-powerfit-e1a6e",
  storageBucket: "em-powerfit-e1a6e.appspot.com",
  messagingSenderId: "713767651604",
  appId: "1:713767651604:web:a564db6f11b1fb98aa5a01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Utility function to validate email format
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Handle Sign-Up
const signUpForm = document.getElementById('signUpForm');
signUpForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.getElementById('rEmail').value.trim();
  const password = document.getElementById('rPassword').value.trim();

  if (!isValidEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      //alert("Account created successfully! Redirecting to homepage...");
      window.location.href = "homepage.html"; // Redirect to your homepage
    })
    .catch((error) => {
      alert(`Sign-Up Error: ${error.message}`);
    });
});

// Handle Sign-In
const signInForm = document.getElementById('signInForm');
signInForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!isValidEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (!password) {
    alert("Please enter your password.");
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      //alert("Sign-In successful! Redirecting to homepage...");
      window.location.href = "homepage.html"; // Redirect to your homepage
    })
    .catch((error) => {
      alert(`Sign-In Error: ${error.message}`);
    });
});

// Handle Password Recovery
const recoverPasswordButton = document.getElementById('recoverPassword');
recoverPasswordButton.addEventListener('click', (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value.trim();

  if (!isValidEmail(email)) {
    alert("Please enter a valid email address to recover your password.");
    return;
  }

  sendPasswordResetEmail(auth, email)
    .then(() => {
      alert("Password recovery email sent. Check your inbox.");
    })
    .catch((error) => {
      alert(`Password Recovery Error: ${error.message}`);
    });
});
