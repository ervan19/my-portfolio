/** @type {import('tailwindcss').Config} */

import twElements from 'tw-elements/dist/plugin.cjs';

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  darkMode: ['class', '[theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: '#C078FE',
        secondary: '#FE78F0',
        text: '#B8B8B8',
        dark: '#151515',
        light: '#F3F3F3',
      },
    },
  },
  plugins: [twElements],
};
