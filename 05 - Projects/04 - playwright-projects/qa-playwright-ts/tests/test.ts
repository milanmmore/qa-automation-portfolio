// tests/example.spec.ts
import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com');
  await expect(page).toHaveTitle(/ParaBank/);
});
