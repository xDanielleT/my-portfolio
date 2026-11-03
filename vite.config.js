import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "./",   // <-- Add this line!
  build: {
    rollupOptions: {
      // two pages: the portfolio and the Security Weekly brief
      input: {
        main: "index.html",
        securityWeekly: "security-weekly.html",
      },
    },
  },
})
