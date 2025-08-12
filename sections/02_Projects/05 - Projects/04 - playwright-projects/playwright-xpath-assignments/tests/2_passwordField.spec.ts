import { test, expect } from '@playwright/test';
import { get } from 'http';
import { getBaseURL } from '../utils/utils';

test('Fill password field using XPath', async ({ page }) => {
  const baseUrl = getBaseURL('selectorHub');
  await page.goto(baseUrl);
  const passwordInput = page.locator('//input[@name="Password"]');
  await passwordInput.fill('SecurePass123');
  await expect(passwordInput).toHaveAttribute('type', 'password');
});

