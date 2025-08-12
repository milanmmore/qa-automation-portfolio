import { defineConfig } from '@playwright/test';

const env = process.env.ENV || 'selectorHub';

const baseURLs: Record<string, string> = {
  selectorHub: 'https://selectorshub.com/xpath-practice-page/',
  heroku: 'https://the-internet.herokuapp.com/',
  paraBank: 'https://parabank.parasoft.com/',
};

export default defineConfig({
  use: {
    baseURL: baseURLs[env],
    trace: 'retain-on-failure',
    headless: false,
  },
});
