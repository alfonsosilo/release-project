import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { readFileSync } from 'fs';

// Leer la versión del package.json
const packageJson = JSON.parse(
  readFileSync('./package.json', 'utf8')
);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Exponer la versión como variable de entorno
    'import.meta.env.VITE_APP_VERSION': JSON.stringify(packageJson.version),
  },
})
