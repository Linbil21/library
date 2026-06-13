 document.querySelector(".forms").addEventListener("submit", function (e) {
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
      window.location.href = "login.html";
    });