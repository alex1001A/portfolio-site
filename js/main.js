const btnDarkMode = document.querySelector(".dark-mode-button");

// Проверка темной темы на уровне системных настроек
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
  btnDarkMode.classList.add("dark-mode-button--active");
  document.body.classList.add("dark");
}

// Проверка темной темы в LocalStorage
if (localStorage.getItem('dark-mode') === 'dark') {
    btnDarkMode.classList.add("dark-mode-button--active")
    document.body.classList.add("dark")
} else if (localStorage.getItem('dark-mode') === 'light') {
    btnDarkMode.classList.remove("dark-mode-button--active");
    document.body.classList.remove("dark");
}

// Если меняются системные настройки - меняется и тема
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
  const newColorScheme = e.matches ? "dark" : "light";

  if (newColorScheme === "dark") {
    btnDarkMode.classList.add("dark-mode-button--active");
    document.body.classList.add("dark");
    localStorage.setItem('dark-mode', 'dark')
  } else {
    btnDarkMode.classList.remove("dark-mode-button--active");
    document.body.classList.remove("dark");
    localStorage.setItem("dark-mode", "light");
  }
});

// Включение ночного режима по кнопке
btnDarkMode.onclick = function () {
  btnDarkMode.classList.toggle("dark-mode-button--active");
  const isDark = document.body.classList.toggle("dark");

  if (isDark) {
    localStorage.setItem("dark-mode", "dark");
  } else {
    localStorage.setItem("dark-mode", "light");
  }
};
