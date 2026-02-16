/* import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
})
*/

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // Не забудь импортировать path

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],
  resolve: {
    alias: {
      // Настраиваем "собачку" на папку src
      "@": path.resolve(__dirname, "./src"),
    },
  },
});