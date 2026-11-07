const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

const closeMenu = () => {
  nav.classList.remove("open");
  menuBtn.setAttribute("aria-expanded", "false");
  menuBtn.setAttribute("aria-label", "Open navigation");
};

menuBtn.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
  menuBtn.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", closeMenu);
});

nav.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeMenu();
    menuBtn.focus();
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
