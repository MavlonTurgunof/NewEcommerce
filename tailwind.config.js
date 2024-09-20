/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/container/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".custom-scrollbar": {
          /* Chrome, Safari and Edge */
          "::-webkit-scrollbar": {
            width: "8px",
          },
          "::-webkit-scrollbar-track": {
            background: "#f1f1f1",
          },
          "::-webkit-scrollbar-thumb": {
            background: "#888",
            borderRadius: "10px",
          },
          "::-webkit-scrollbar-thumb:hover": {
            background: "#555",
          },

          /* Firefox */
          scrollbarWidth: "thin",
          scrollbarColor: "#888 #f1f1f1",
        },
      });
    },
  ],
};
