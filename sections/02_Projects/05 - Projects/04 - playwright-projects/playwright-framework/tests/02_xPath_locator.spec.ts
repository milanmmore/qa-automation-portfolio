import { test, expect } from '@playwright/test';


//web elements 

test("xPath Vallidation ", async ({ page }) => {
    const browser = await playwright.chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

    await page.goto('https://selectorshub.com/xpath-practice-page/');

})




