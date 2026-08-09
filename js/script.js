const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav ul li a");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  nav.classList.toggle("active");

  if (menuToggle.classList.contains("active")) {
    menuToggle.textContent = "✕";
  } else {
    menuToggle.textContent = "☰";
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    nav.classList.remove("active");
    menuToggle.textContent = "☰";
  });
});
