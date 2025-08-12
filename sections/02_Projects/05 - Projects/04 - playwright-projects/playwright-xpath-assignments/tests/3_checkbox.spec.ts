import { test, expect } from '@playwright/test';
import { getBaseURL } from '../utils/utils';

test('Check and uncheck terms checkbox using XPath', async ({ page }) => {
  const baseUrl = getBaseURL('heroku') + 'checkboxes';
  await page.goto(baseUrl);
  const checkbox = page.locator("//input[@type='checkbox'][2]");
  await checkbox.check();
  await expect(checkbox).toBeChecked();
  await checkbox.uncheck();
  await expect(checkbox).not.toBeChecked();
});
