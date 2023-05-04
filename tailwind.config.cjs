/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.jsx"],
    theme: {
        colors: {
            "orange-800": "#81210C",
            "orange-500": "#BF472C",
            "orange-400": "#AF391F",
            "orange-300": "#F2A88D",
            "orange-100": "#FBDFD5",
            "dark-blue": "#0A2740",
            blue: "#3264A6",
            "light-blue": "#79AEF2",
            black: "#000000",
            white: "#ffffff",
            "gray-950": "#030712",
            "gray-900": "#111827",
            "gray-400": "#9ca3af",
            "gray-200": "#e5e7eb",
            "dark-green": "#1E392A",
        },
        extend: {
            fontFamily: {
                sans: "Shantell Sans, sans-serif",
            },
            backgroundImage: {
                bolo: "url('./img/bolo-de-banana.jpg')",
            },
            boxShadow: {
                "shadow-top": "0px -2px 30px 8px black",
            },
        },
    },

    plugins: [],
};
