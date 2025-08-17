import { chromium, test } from '@playwright/test';

test("login Test demo", async () => {
    const browser = await chromium.launch(
        { headless: true } // Set to false for headful mode
    );
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://ecommerce-playground.lambdatest.io/login");
    await page.hover("//a[@role='button']//span[@class='title'][normalize-space()='My account']")
    //await page.click("text=Login");
    await page.click("'Login'");
    await page.fill("input[name='email']", "milanmmoore2025@gmail.com");
    await page.fill("input[name='password']", "pass@1234");
    await page.click("button[type='submit']");
})
