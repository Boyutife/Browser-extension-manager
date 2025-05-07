const themeToggleBtn = document.querySelector('.theme-toggle_btn');
const body = document.body;
const themeIcon = document.querySelector('.theme-icon');
const extensionCard = document.querySelectorAll('.extension-card');
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

toggleSwitch.forEach((toggle, index) => {
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    localStorage.setItem(
      `toggleState-${index}`,
      toggle.classList.contains('active')
    );
  });
});

// function loadToggleStates() {
//   toggleSwitch.forEach((toggle, index) => {
//     const state = localStorage.getItem(`toggleState-${index}`);
//     if (state === 'true') {
//       toggle.classList.add('active');
//     } else {
//       toggle.classList.remove('active');
//     }
//   });
// }

// loadToggleStates();

window.addEventListener('DOMContentLoaded', () => {
  toggleSwitch.forEach((toggle, index) => {
    const state = localStorage.getItem(`toggleState-${index}`);
    if (state === 'true') {
      toggle.classList.add('active');
    } else {
      toggle.classList.remove('active');
    }
  });
});

const choices = document.querySelectorAll('.choice');

choices.forEach((choice) => {
  const radioBtn = choice.querySelector('input[type="radio"]');
  radioBtn.addEventListener('change', (e) => {
    const selectedValue = e.target.value;
    // update selected class
    choices.forEach((c) => c.classList.remove('selected'));
    choice.classList.add('selected');
    // Filter extension cards based on selected value
    extensionCard.forEach((card) => {
      const isActive = card
        .querySelector('.toggle-switch')
        .classList.contains('active');
      if (selectedValue === 'all') {
        card.style.display = 'flex';
      } else if (selectedValue === 'active') {
        card.style.display = isActive ? 'flex' : 'none';
      } else if (selectedValue === 'inactive') {
        card.style.display = !isActive ? 'flex' : 'none';
      }
    });
  });
});

const rmvBtns = document.querySelectorAll('.btn-rmv');

rmvBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    extensionCard.forEach((card) => {
      if (card.contains(e.target)) {
        card.style.display = 'none';
      }
    });
  });
});
