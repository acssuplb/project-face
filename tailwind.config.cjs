/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{svelte,js,ts}"],
    theme: {
        screens: {
            'ss': '425px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
            '3xl': '1920px',
        },
        letterSpacing: {
            wide: '.025em',
        },
        extend: {
            colors: {
                base: {
                    'black': "#060217",
                    'egyptian-blue': "#2E3792",
                    violet: "1E0E37",
                    purple: "#5E35DA",
                    blue: "#3B7FEF",
                    "sky-blue": "#00F5F1",
                    white: "#F4F1FF",
                    dark: {
                        purple: "#3D338D",
                        blue: "#3B7FEF",
                        "sky-blue": "#30CAF2",
                        1: '#1E0E37',
                        2: '#0A041F',
                        3: '#060217',
                        4: '#03010c'
                    },
                    gray: {
                        1: "#9593A4",
                        2: '#83828C',
                        3: '#3E3B4C'
                    }
                },
            },
        },
    },
    plugins: [],
};
