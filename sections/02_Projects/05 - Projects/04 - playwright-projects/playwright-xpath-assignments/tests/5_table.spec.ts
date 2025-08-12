import { test, expect } from '@playwright/test';
import { getBaseURL } from '../utils/utils';

test('Extract company name from table using XPath', async ({ page }) => {
  
  const baseUrl = getBaseURL('selectorHub');
  await page.goto(baseUrl);
  const companyCell = page.locator('//table[@id="resultTable"]//tr[2]/td[1]');
  const companyName = await companyCell.textContent();
  console.log(companyName);
  //expect(companyName?.trim()).toContain('SelectorsHub');
});

test('Extract status of given user name from table using XPath as sibling-following', async ({ page }) => {
  
  const baseUrl = getBaseURL('selectorHub');
  await page.goto(baseUrl);

  const username = "Kevin.Mathews";
    const xPath = `//td/a[text()='${username}']//parent::td//following-sibling::td[3]`;
    //await page.locator(xpath).textContent();
    const userStatus    = await page.locator(xPath).textContent();
    console.log(`Status of ${username} is: ${userStatus}`);
});

