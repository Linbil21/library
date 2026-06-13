document.addEventListener("DOMContentLoaded", () => {

  // Authentication Logic
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const name = localStorage.getItem("loggedInName");

  if (!isLoggedIn || !name) {
    alert("You must login first.");
    window.location.href = "login.html";
  } else {
    const sidebarUserName = document.getElementById("sidebar-user-name");
    if (sidebarUserName) {
      sidebarUserName.textContent = `Welcome, ${name}!`;
    }
  }

  // Sidebar Toggle Logic
  const menuBtn = document.getElementById("menu-btn");
  const sidebar = document.getElementById("sidebar");
  const closeBtn = document.getElementById("menu-btn-sidebar");
  const overlay = document.getElementById("overlay");

  function openSidebar() {
    sidebar.classList.add("open");
    overlay.classList.add("show");
    document.body.style.overflow = "hidden";
  }

  function closeSidebar() {
    sidebar.classList.remove("open");
    overlay.classList.remove("show");
    document.body.style.overflow = "";
  }

  if (menuBtn) menuBtn.addEventListener("click", openSidebar);
  if (closeBtn) closeBtn.addEventListener("click", closeSidebar);
  if (overlay) overlay.addEventListener("click", closeSidebar);

  // Close sidebar on pressing Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && sidebar.classList.contains("open")) {
      closeSidebar();
    }
  });

  // Highlight active sidebar link based on current page
  const currentPage = window.location.pathname.split("/").pop();
  const sidebarLinks = document.querySelectorAll(".sidebar-links a");
  sidebarLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPage || (currentPage === "" && href === "Dashboard.html")) {
      link.classList.add("active");
    }
  });
});

function logout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("loggedInName");
  window.location.href = "login.html";
}