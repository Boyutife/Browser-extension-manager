const themeToggleBtn = document.querySelector('.theme-toggle_btn');
const body = document.body;
const themeIcon = document.querySelector('.theme-icon');

const toggleSwitch = document.querySelectorAll('.toggle-switch');

let isDarkMode = localStorage.getItem('theme') === 'dark';

function applyTheme() {
  body.classList.toggle('dark-mode', isDarkMode);
  themeIcon.src = isDarkMode
    ? './assets/images/icon-sun.svg'
    : './assets/images/icon-moon.svg';
  themeIcon.alt = isDarkMode ? 'Light Mode' : 'Dark Mode';
}

applyTheme();

themeToggleBtn.addEventListener('click', () => {
  isDarkMode = !isDarkMode;
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  applyTheme();
});

toggleSwitch.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
  });
});

const choices = document.querySelectorAll('.choice');

choices.forEach((choice) => {
  const radio = choice.querySelector('input[type="radio"]');
  radio.addEventListener('change', () => {
    choices.forEach((c) => {
      c.classList.remove('selected');
    });
    choice.classList.add('selected');
  });
});
// When a new user visits the site, the theme defaults to light mode since there is no 'theme' key stored in localStorage. The expression localStorage.getItem('theme') === 'dark' therefore evaluates to false, and isDarkMode is initialized with false.

// Upon clicking the theme toggle button, the isDarkMode state is inverted using the logical NOT operator (!isDarkMode). This updated state is then persisted to localStorage using a ternary operation:
// localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

// The applyTheme() function is immediately invoked to reflect the current theme preference. It conditionally toggles the 'dark-mode' class on the body element and updates the theme icon and its alt text based on the value of isDarkMode.

// On future visits, the script retrieves the saved theme preference from localStorage. If the value is 'dark', isDarkMode is set to true, and applyTheme() is executed to apply dark mode styling upon page load.
