// tests/auth-check.spec.ts
import { test, expect } from '@playwright/test';

test('should be logged in', async ({ page }) => {
  await page.goto('/dashboard');
  await expect(page.locator('text=Welcome')).toBeVisible();
});
