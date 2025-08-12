import { test, expect } from '@playwright/test';
import { getBaseURL } from '../utils/utils';

test('Fill User Email input using XPath', async ({ page }) => {
  const baseUrl = getBaseURL('selectorHub');
  await page.goto(baseUrl, {
  timeout: 60000, // wait up to 60 seconds
  waitUntil: 'networkidle' // wait until no network requests for 500ms
  });
  const userEmailInput = page.locator("//input[@name='email']");
  // 
  await userEmailInput.scrollIntoViewIfNeeded();
  await userEmailInput.focus();
  await userEmailInput.fill("milan@test.com");
  //debugger;
  await expect(userEmailInput).toHaveValue("milan@test.com");
  console.log(userEmailInput.textContent);
});

