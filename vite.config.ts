import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  test: {
    projects: [
      {
        extends: true,
        test: {
          name: 'unit',
          environment: 'jsdom',
          globals: true,
          setupFiles: ['./src/test/setup.ts'],
          testTimeout: 5000,
          include: ['src/**/*.{test,spec}.{js,ts,tsx}'],
          exclude: [
            '**/node_modules/**',
          ],
        },
      },
      {
        extends: true,
        plugins: [
          storybookTest({
            configDir: '.storybook',
            storybookScript: 'npm run storybook --ci',
            tags: {
              include: ['test'],
              exclude: ['skip-test'],
            },
          }),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: 'playwright',
            instances: [{ browser: 'chromium' }],
          },
          setupFiles: ['./.storybook/vitest.setup.ts'],
        },
      },
    ],
  },
});