const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector(".theme-toggle__icon");
const themeText = document.querySelector(".theme-toggle__text");

themeToggle.addEventListener("click", function () {
    const isDarkMode =
        document.documentElement.getAttribute("data-theme") === "dark";

    if (isDarkMode) {
        document.documentElement.setAttribute("data-theme", "light");
        themeIcon.textContent = "🌙";
        themeText.textContent = "Dark mode";
        themeToggle.setAttribute("aria-label", "Switch to dark mode");
        themeToggle.setAttribute("aria-pressed", "false");
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
        themeIcon.textContent = "☀️";
        themeText.textContent = "Light mode";
        themeToggle.setAttribute("aria-label", "Switch to light mode");
        themeToggle.setAttribute("aria-pressed", "true");
    }
});