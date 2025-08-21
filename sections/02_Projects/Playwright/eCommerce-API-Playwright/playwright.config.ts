
import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  use: {
    baseURL: process.env.API_BASE_URL || 'https://api.example.com',
    extraHTTPHeaders: {
      Authorization: `Bearer ${process.env.AUTH_TOKEN}`
    }
  },
  testDir: './tests',
  timeout: 30000,
  retries: 1,
});