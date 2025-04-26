# Giving.org Kenya - CSS3 Transitions, Animations & Advanced JavaScript Functions

## Objectives

- **Create smooth CSS transitions and animations**
- **Use JavaScript functions for dynamic behavior**
- **Implement local storage for data persistence**

---

## Features Demonstrated

### 1. CSS3 Transitions & Animations

- **Button Animation:**  
  The main "Donate Now" button uses a CSS `@keyframes` pulse animation for attention.  
  ```css
  @keyframes pulse {
      0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(40, 167, 69, 0.5);}
      70% { transform: scale(1.05); box-shadow: 0 0 10px 20px rgba(40, 167, 69, 0);}
      100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(40, 167, 69, 0);}
  }
  .cta-button { animation: pulse 2.5s infinite ease-out; }
  .cta-button:hover { animation-play-state: paused; }
  ```

- **Image Hover Transition:**  
  Images gently scale and fade on hover using CSS transitions.
  ```css
  .content-image {
      transition: transform 0.3s ease, opacity 0.3s ease;
  }
  .content-image:hover {
      transform: scale(1.03);
      opacity: 0.9;
  }
  ```

- **Fade-in Animation (Triggered by JS):**  
  The "impact story" text fades in when the user clicks "See Impact Story".
  ```css
  @keyframes fadeIn {
      from { opacity: 0; transform: translateY(15px);}
      to { opacity: 1; transform: translateY(0);}
  }
  .impact-story { opacity: 0; }
  .impact-story.animate {
      animation: fadeIn 0.8s ease-out forwards;
  }
  ```

---

### 2. JavaScript Functions for Dynamic Behavior

- **Theme Preference with Local Storage:**  
  Users can select Light or Dark mode. The choice is saved in `localStorage` and applied on future visits.
  ```js
  // Save theme to localStorage and apply it
  const saveTheme = (theme) => {
      localStorage.setItem('selectedTheme', theme);
      applyTheme(theme);
  };
  // On page load, apply saved theme
  const savedTheme = localStorage.getItem('selectedTheme');
  if (savedTheme) { applyTheme(savedTheme); }
  ```

- **Animation Triggered by User Action:**  
  Clicking "See Impact Story" adds a class to trigger the fade-in animation.
  ```js
  triggerButton.addEventListener('click', () => {
      impactStoryText.classList.add('animate');
  });
  ```

- **Dynamic Footer Year:**  
  The footer year updates automatically using JavaScript.

- **Button Click Logging:**  
  All donation buttons log a message to the console when clicked (example of a simple JS function).

---

## How to Use

1. **Clone or Download the Project**
2. **Open `index.html` in your browser**

### Try These Features:

- **Switch between Light and Dark mode** in the "Website Preferences" section.  
  Your choice is remembered even if you reload the page.
- **Hover over images and buttons** to see smooth transitions and animations.
- **Click "See Impact Story"** to trigger a fade-in animation for the story text.
- **Click any "Donate" button** to see a log in the browser console.

---

## File Overview

- `index.html` – Main HTML structure
- `style.css` – All CSS transitions, animations, and theme styles
- `script.js` – JavaScript for theme persistence, animation triggers, and dynamic content

---

## Key Code Snippets

### CSS Animation Example

```css
.cta-button {
    animation: pulse 2.5s infinite ease-out;
}
```

### JavaScript: Store & Retrieve Preferences

```js
const saveTheme = (theme) => {
    localStorage.setItem('selectedTheme', theme);
    applyTheme(theme);
};
```

### JavaScript: Trigger Animation

```js
triggerButton.addEventListener('click', () => {
    impactStoryText.classList.add('animate');
});
```

---

## Summary

This project demonstrates how to:

- Add CSS3 transitions and animations to enhance UI/UX.
- Use JavaScript to store and retrieve user preferences with `localStorage`.
- Trigger CSS animations in response to user actions.

Feel free to explore and modify the code to learn more!
