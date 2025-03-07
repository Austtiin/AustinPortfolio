// filepath: d:\Documents\GitHub\AustinPortfolio\AustinPortfolio\vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import dotenv from 'dotenv'

// Load environment variables from .env file
dotenv.config()

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})