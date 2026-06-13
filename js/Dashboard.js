 const isLoggedIn = localStorage.getItem("isLoggedIn");
    const name = localStorage.getItem("loggedInName");

    if (!isLoggedIn || !name) {
      alert("You must login first.");
      window.location.href = "login.html";
    } else {
      document.getElementById("welcome-message").textContent = `Welcome, ${name}!`;
    }

    function logout() {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("loggedInName");
      window.location.href = "login.html";
    }