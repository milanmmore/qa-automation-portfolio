import { test, expect, chromium } from '@playwright/test';

test('Validate xPath from user table', async () => {

    //Create a new browser instance
    const browser = await chromium.launch({
        headless: false // Set to true if you want to run in headless mode
    });
    
    // Get the browser context
    const browserContext = await browser.newContext();
    // Create a new page
    const page = await browserContext.newPage();
    // Load the url
    await page.goto("https://selectorshub.com/xpath-practice-page/");

    const username = "Kevin.Mathews";
    const xPath = `//td/a[text()='${username}']//parent::td//following-sibling::td[3]`;
    //await page.locator(xpath).textContent();
    const userStatus    = await page.locator(xPath).textContent();
    console.log(`Status of ${username} is: ${userStatus}`);

})

