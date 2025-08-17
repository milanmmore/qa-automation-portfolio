import { Page } from '@playwright/test';

export async function waitForSelector(page: Page, selector: string, timeout = 5000) {
  await page.waitForSelector(selector, { timeout });
}
