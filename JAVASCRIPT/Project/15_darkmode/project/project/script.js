const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  document.documentElement.dataset.theme = savedTheme;
} else {
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.documentElement.dataset.theme = systemDark ? "dark" : "light";
}

const toggleBtn = document.getElementById("themeToggle");
const root = document.documentElement;

function updateIcon() {
  const theme = root.dataset.theme;
  toggleBtn.textContent = theme === "dark" ? "☀️" : "🌙";
}

updateIcon();

toggleBtn.addEventListener("click", () => {
  const currentTheme = root.dataset.theme;

  const newTheme = currentTheme === "dark" ? "light" : "dark";

  root.dataset.theme = newTheme;

  localStorage.setItem("theme", newTheme);

  updateIcon();
});
