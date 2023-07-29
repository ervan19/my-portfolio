import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from 'tailwindcss';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      injectRegister: 'auto',
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp}'],
      },
      includeAssets: ['**/*'],
      devOptions: {
        enabled: true,
        /* other options */
      },
      manifest: {
        display: 'standalone',
        scope: '/',
        start_url: '/',
        short_name: 'Portfolio',
        description: 'Portfolio Ervan Muhammad Adrian',
        name: 'Portfolio Ervan',
        icons: [
          {
            src: '/e.png',

            type: 'image/png',
          },
        ],
      },
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
});
