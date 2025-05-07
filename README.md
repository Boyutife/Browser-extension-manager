# Frontend Mentor - Browser extensions manager UI solution

This is a solution to the [Browser extensions manager UI challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Toggle extensions between active and inactive states
- Filter active and inactive extensions
- Remove extensions from the list
- Select their color theme
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot/Extension_UI%20screenshot.jpeg)

### Links

- Solution URL: (https://www.frontendmentor.io/solutions/browser-extension-manager-ui-GJHFOnfVG4)
- Live Site URL: (https://boyutife.github.io/Browser-extension-manager/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

What I learned
Working on the Chrome Extension UI project was a great learning experience that helped me improve not just my frontend skills but also how I think about browser behavior, user interaction, and code structure. Some of the key things I learned and practiced include:

🧠 Local Storage: I learned how to persist data using localStorage, which allows the extension to remember user input or changes even after the browser is closed or refreshed.

```js
localStorage.setItem('key', value);
const savedData = localStorage.getItem('key');
```

⚡ DOMContentLoaded: I learned the importance of waiting for the DOM to be fully loaded before accessing or manipulating elements to avoid errors.

```js
document.addEventListener('DOMContentLoaded', () => {
  // Safe to access DOM elements here
});
```

🎯 Event Targeting & closest(): I worked a lot with event.target and element.closest() to precisely detect user interactions and respond accordingly — especially useful in nested or dynamically generated elements.

```js
document.addEventListener('click', (e) => {
  const card = e.target.closest('.task-card');
  if (card) {
    card.classList.toggle('selected');
  }
});
```

🧩 addEventListener Everywhere: I deeply understood how flexible and powerful addEventListener can be — not just for clicks, but also for form inputs, key presses, and more.

```js
button.addEventListener('click', handleClick);
```

🎨 Nested Styles & CSS Structure: I learned how to better organize CSS using class selectors and nesting ideas (visually, not using a preprocessor yet). I also saw how consistent class naming makes styling easier to maintain.

```css
.task-card {
  padding: 1rem;
  background-color: #fff;
}
.task-card .task-title {
  font-weight: bold;
}
```

🗂 HTML Best Practices: I focused on using the right HTML tags (like <button> instead of clickable <div>s), properly labeling elements, and maintaining semantic structure for clarity and accessibility.

```html
<form id="task-form">
  <label for="task-title">Title</label>
  <input type="text" id="task-title" name="task-title" />
  <button type="submit">Add Task</button>
</form>
```

✅ Clean Git Commits: I started writing clearer, more intentional commit messages — using the present tense and making each commit focused on a specific change.
✅ Improve task card rendering on reload
🔧 Fix bug with localStorage data overwrite
🎨 Refactor CSS for card spacing

### Continued development

I want to focus more on JS project then move on to js framework

### Useful resources

- I used chatgpt and github copilot

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@Boyutife](https://www.frontendmentor.io/profile/Boyutife)
- Twitter - [@Boluwatife_Ven](https://www.twitter.com/Boluwatife_Ven)

## Acknowledgments

Thank God for the inspiration to start this journey
