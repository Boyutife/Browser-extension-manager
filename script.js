const themeToggleBtn = document.querySelector('.theme-toggle_btn');

let isDarkMode = false;

themeToggleBtn.addEventListener('click', () => {
  const body = document.body;
  isDarkMode = !isDarkMode;
  body.classList.toggle('dark-mode', isDarkMode);
  const themeIcon = document.querySelector('.theme-icon');
  themeIcon.src = isDarkMode
    ? './assets/images/icon-sun.svg'
    : './assets/images/icon-moon.svg';
  themeIcon.alt = isDarkMode ? 'Light Mode' : 'Dark Mode';
});
