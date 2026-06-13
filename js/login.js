   document.querySelector(".forms").addEventListener("submit", function (e) {
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