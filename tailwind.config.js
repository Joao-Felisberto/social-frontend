module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      's-gray': {
        300: "#42423F",
        200: "#5F5F59",
        100: "#E8DFCC"
      },
      's-accent': '#919AAC',
      's-red': '#C75B64'
    }
  },
  plugins: [],
};
