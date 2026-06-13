document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("container");
  const signUpButton = document.getElementById("signUp");
  const signInButton = document.getElementById("signIn");
  
  const toRegisterMobile = document.getElementById("toRegisterMobile");
  const toLoginMobile = document.getElementById("toLoginMobile");

  // Function to update panel based on URL hash
  function updatePanelFromHash() {
    if (window.location.hash === "#register") {
      container.classList.add("right-panel-active");
      document.title = "Register - Library Portal";
    } else {
      container.classList.remove("right-panel-active");
      document.title = "Login - Library Portal";
    }
  }

  // Event listeners for desktop toggle buttons updating hash
  if (signUpButton) {
    signUpButton.addEventListener("click", () => {
      window.location.hash = "register";
    });
  }

  if (signInButton) {
    signInButton.addEventListener("click", () => {
      window.location.hash = "login";
    });
  }

  // Event listeners for mobile toggle links updating hash
  if (toRegisterMobile) {
    toRegisterMobile.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.hash = "register";
    });
  }

  if (toLoginMobile) {
    toLoginMobile.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.hash = "login";
    });
  }

  // Listen for hash changes to smoothly transition
  window.addEventListener("hashchange", updatePanelFromHash);

  // Run initial state update based on starting URL
  updatePanelFromHash();

  // Login Form Submission Logic
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const inputId = document.querySelector(".input-username").value.trim();
      const inputPass = document.querySelector(".input-password").value.trim();

      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (!storedUser) {
        alert("No user found. Please register first.");
        return;
      }

      if (inputId === storedUser.studentId && inputPass === storedUser.password) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("loggedInName", storedUser.name);
        alert("Login successful!");
        window.location.href = "dashboard.html";
      } else {
        alert("Incorrect Student ID or Password.");
      }
    });
  }

  // Register Form Submission Logic
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const studentId = document.querySelector(".input-id").value.trim();
      const name = document.querySelector(".input-Studentname").value.trim();
      const email = document.querySelector(".input-EmailAddress").value.trim();
      const password = document.querySelector(".input-Password").value.trim();
      const confirmPassword = document.querySelector(".input-ConfirmPassword").value.trim();

      if (!studentId || !name || !email || !password || !confirmPassword) {
        alert("Please fill in all fields.");
        return;
      }

      if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
      }

      const user = {
        studentId,
        name,
        email,
        password,
      };
      localStorage.setItem("user", JSON.stringify(user));
      alert("Registered successfully! Please log in.");
      window.location.hash = "login"; // Transition to login form dynamically
    });
  }
});