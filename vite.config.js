import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "vikas-ee",
    project: "javascript"
  }), sentryVitePlugin({
    org: "vikas-ee",
    project: "javascript"
  })],

  build: {
    sourcemap: true
  }
})