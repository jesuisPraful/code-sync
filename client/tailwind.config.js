/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.jsx"],
    theme: {
        extend: {
            colors: {
                dark: "#191722",
                darkHover: "#282a36",
                light: "#f5f5f5",
                primary: "#d6b8fe",
                danger: "#ef4444",
                success: "#4aee88",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            animation: {
                "up-down": "up-down 2s ease-in-out infinite alternate",
            },
        },
    },
    plugins: [],
}
