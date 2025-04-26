document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Theme Preference using LocalStorage ---
    const themeButtons = document.querySelectorAll('.theme-button');
    const body = document.body;
    const preferenceStatus = document.getElementById('preferenceStatus');

    // Function to apply the theme
    const applyTheme = (theme) => {
        body.classList.remove('dark-mode'); // Remove any existing theme class
        if (theme === 'dark') {
            body.classList.add('dark-mode');
        }
        // Update button states
        themeButtons.forEach(btn => {
            if (btn.dataset.theme === theme) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        if (preferenceStatus) {
             preferenceStatus.textContent = `Theme set to: ${theme.charAt(0).toUpperCase() + theme.slice(1)} Mode.`;
        }
    };

    // Function to save the theme preference
    const saveTheme = (theme) => {
        localStorage.setItem('selectedTheme', theme); // Store in localStorage
        applyTheme(theme); // Apply the theme visually
    };

    // Add event listeners to theme buttons
    themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedTheme = button.dataset.theme;
            saveTheme(selectedTheme);
        });
    });

    // On page load, check for saved theme in localStorage
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
        applyTheme(savedTheme); // Apply saved theme
    } else {
        applyTheme('light'); // Default to light theme if nothing is saved
    }


    // --- 2. Animation Triggered by User Action ---
    const triggerButton = document.getElementById('triggerAnimationBtn');
    const impactStoryText = document.getElementById('impactStoryText');

    if (triggerButton && impactStoryText) {
        triggerButton.addEventListener('click', () => {
            // Add the 'animate' class to trigger the CSS fade-in animation
            impactStoryText.classList.add('animate');

             // Optional: Prevent multiple triggers or allow reset
            // triggerButton.disabled = true; // Disable after first click
            // Or toggle: impactStoryText.classList.toggle('animate');
        });
    }


    // --- 3. Dynamic Footer Year ---
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

     // --- Simple function example (could be expanded) ---
     const logDonationClick = (button) => {
        console.log(`Donation button clicked! Source: ${button.textContent}`);
        // In a real app, this might trigger analytics or open a modal
     }

     const donateButtons = document.querySelectorAll('.donate-button');
     donateButtons.forEach(button => {
        button.addEventListener('click', () => logDonationClick(button));
     });


}); // End DOMContentLoaded
