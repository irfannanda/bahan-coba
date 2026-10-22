const themeToggle = document.querySelector(".theme-toggle");
const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "dark") {
  document.documentElement.dataset.theme = "dark";
}

themeToggle?.addEventListener("click", () => {
  const isDark = document.documentElement.dataset.theme !== "dark";

  document.documentElement.dataset.theme = isDark ? "dark" : "light";
  themeToggle.textContent = isDark ? "Mode terang" : "Mode gelap";
  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Aktifkan mode terang" : "Aktifkan mode gelap",
  );
  themeToggle.setAttribute("aria-pressed", String(isDark));
  localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
});

if (savedTheme === "dark") {
  themeToggle.textContent = "Mode terang";
  themeToggle.setAttribute("aria-label", "Aktifkan mode terang");
  themeToggle.setAttribute("aria-pressed", "true");
}
