/// <reference types="vitest" />
/// <reference types="vite/client" />

import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    base: '/',
    plugins: [
        react(),
        tailwindcss()
    ],
    test: {
        globals: true,
        environment: "jsdom",
        // this points to the setup file created earlier
        setupFiles: "./src/setupTests.js",
        // you might want to disable the `css: true` line, since we don't have
        // tests that rely on CSS -- and parsing CSS is slow.
        // I'm leaving it in here because often people want to parse CSS in tests.
        css: true,
        coverage: {
            reporter: ["text", "json", "html"], // Generates reports in different formats
        },
    },
})
