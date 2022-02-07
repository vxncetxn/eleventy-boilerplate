const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    mode: 'jit',
    content: ['./src/**/*.{njk,html,js}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Atkinson Hyperlegible', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};
