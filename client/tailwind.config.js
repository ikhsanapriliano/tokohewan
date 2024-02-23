/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "node_modules/flowbite-react/lib/esm/**/*.js"],
  theme: {
    extend: {
      colors: {
        "primary-1": "#163020",
        "primary-2": "#304D30",
        "primary-3": "#B6C4B6",
        "primary-4": "#EEF0E5",
      },
    },
  },
  plugins: [],
};
