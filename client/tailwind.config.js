// tailwind.config.js
module.exports = {
    purge: [],
    darkMode: false, // Puedes cambiarlo a "media" o "class" según tus necesidades
    theme: {
        extend: {},
    },
    variants: {},
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
};
