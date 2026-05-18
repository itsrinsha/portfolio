import { defineConfig } from 'vite'
<<<<<<< HEAD
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
=======
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
>>>>>>> 0b8e4a5dd17f064ea47dbc194cc158a2f5209b82
