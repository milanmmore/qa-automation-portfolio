import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' }); // Load local env vars

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  expect: { timeout: 5000 },
  retries: process.env.CI ? 2 : 0,
  reporter: [['list'], ['html', { outputFolder: 'playwright-report' }]],
  use: {
    baseURL: process.env.BASE_URL,
    trace: 'on-first-retry',
    extraHTTPHeaders: {
      Authorization: `Bearer ${process.env.API_KEY || ''}`,
    },
  },
  projects: [
    {
      name: 'API-Tests',
      use: { ...devices['Desktop Chrome'] },
      testMatch: ['**/*.spec.ts'], // ✅ Exclude master from default
    },
  ],
});
