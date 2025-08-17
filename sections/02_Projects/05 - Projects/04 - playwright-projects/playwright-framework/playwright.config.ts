import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 1,
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    baseURL: 'https://reqres.in/',

    },
    
    reporter: [['list'], ['html', { outputFolder: 'reports/html-report', open: 'never' }]],
});




  
  
