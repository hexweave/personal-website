const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-menu");
const element = document.body;

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navmenu.classList.toggle("active");
});

function themeSwitcher() {
  // toggle class
  element.classList.toggle("light-mode");

  // save
  const isLightMode = element.classList.contains("light-mode");
  localStorage.setItem("theme", isLightMode ? "light" : "dark");
}

// on page load retrieve and apply saved pref
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  if (savedTheme === "light") {
    element.classList.add("light-mode");
  } else {
    element.classList.remove("light-mode");
  }
});
