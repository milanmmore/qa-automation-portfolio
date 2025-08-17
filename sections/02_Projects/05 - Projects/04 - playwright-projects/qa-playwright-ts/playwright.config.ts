import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'https://parabank.parasoft.com',
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'on',
  },
});
