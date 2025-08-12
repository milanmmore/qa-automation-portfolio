import { test, expect } from '@playwright/test';
import { getBaseURL } from '../utils/utils';

test('Select country from dropdown using XPath', async ({ page }) => {
  const baseUrl = getBaseURL('heroku') + 'dropdown';
  await page.goto(baseUrl);
  const countryDropdown = page.locator("//select[@id='dropdown']");
  countryDropdown.selectOption("Option 2");
  console.log(countryDropdown.textContent());
  await expect(countryDropdown).toHaveValue('2');
});

