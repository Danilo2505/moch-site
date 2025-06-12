function toggleTheme() {
  document.body.classList.toggle("dark-mode");

  const btn = document.querySelector("#button-switch-theme");
  if (document.body.classList.contains("dark-mode")) {
    btn.textContent = "🌞";
  } else {
    btn.textContent = "🌗";
  }
}
