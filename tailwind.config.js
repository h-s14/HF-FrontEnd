/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "body-text-light": "#2A3D40",
        "body-text-dark": "#C4C4C4",

        "light-background": "#F0F4F7",

        "light-gradient-1": "#D1E8E4",
        "light-gradient-2": "#B0D4D2",
        "light-gradient-3": "#E6EFF1",

        "dark-background": "#0B1E26",

        "dark-gradient-1": "#0A4A55",
        "dark-gradient-2": "#08353E",
        "dark-gradient-3": "#092A33",

        "nav-bar-btn-txt-light": "#2A3D40",
        "nav-bar-btn-txt-dark": "#D1E8E4",

        "nav-bar-btn-grad-light-start": "#B0D4D2",
        "nav-bar-btn-grad-light-end": "#D1E8E4",

        "nav-bar-btn-grad-light-hover-start": "#D1E8E4",
        "nav-bar-btn-grad-light-hover-end": "#E6EFF1",

        "nav-bar-btn-grad-dark-start": "#4A747D",
        "nav-bar-btn-grad-dark-end": "#3B5B63",

        "nav-bar-btn-grad-dark-hover-start": "#67B8C2",
        "nav-bar-btn-grad-dark-hover-end": "#4A747D",

        "nav-bar-bg-light": "#D9E4E8",
        "nav-bar-bg-dark": "#2C3A43",

        "nav-bar-link-light": "#2A3D40",
        "nav-bar-link-dark": "#A1CED6",

        "nav-bar-link-hover-light": "#005B5D",
        "nav-bar-link-hover-dark": "#67B8C2",

        "nav-bar-text-light": "#2A3D40",
        "nav-bar-text-dark": "#D1E8E4",
        "nav-bar-text-hover-light": "#3A4F55",
        "nav-bar-text-hover-dark": "#FFFFFF",
        // Background
        "login-form-bg": "#FFFFFF", // Light gray-blue for the login form background in light mode
        "login-form-bg-dark": "#2A3A42", // Darker background for the login form in dark mode

        // Input Fields
        "input-bg-light": "#FFFFFF", // White background for input fields in light mode
        "input-bg-dark": "#2C3A43", // Dark background for input fields in dark mode

        // Input Text
        "input-text-light": "#2A3D40", // Dark teal text for input fields in light mode
        "input-text-dark": "#C4C4C4", // Light gray text for input fields in dark mode

        // Input Border
        "input-border-light": "#D1D1D1", // Light gray border for input fields in light mode
        "input-border-dark": "#4A747D", // Darker border for input fields in dark mode

        // Button Background
        "login-button-bg-light": "#4AB8B5", // Light teal background for login button in light mode
        "login-button-bg-dark": "#008C9E", // Medium teal background for login button in dark mode

        // Button Text
        "login-button-text-light": "#2A3D40", // Dark teal text for login button in light mode
        "login-button-text-dark": "#FFFFFF", // White text for login button in dark mode

        // Hover States
        "login-button-hover-bg-light": "#A3C2C1", // Darker teal for button hover in light mode
        "login-button-hover-bg-dark": "#67B8C2", // Bright teal for button hover in dark mode

        "login-form-placeholder-dark": "#gray-800",
        "login-form-placeholder-light": "gray-600",

        "footer-light": "#000000",
        "footer-dark": "#2B2B2B",

        "footer-text-light": "#4A4A4A",
        "footer-text-dark": "#E0E0E0",
      },
    },
  },
  plugins: [
    // require("tailwind-scrollbar-hide"),
  ],
};
