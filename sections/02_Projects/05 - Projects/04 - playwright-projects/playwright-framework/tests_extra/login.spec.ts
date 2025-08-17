import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { loadTestData } from '../utils/dataLoader';
import { Logger } from '../utils/logger';

const testData = loadTestData('testdata.json');

test('Login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  Logger.info('Navigating to login page');
  await loginPage.navigate();

  Logger.info('Performing login');
  await loginPage.login(testData.validUser.username, testData.validUser.password);

  Logger.info('Verifying login success');
  await expect(page.locator('text=Welcome')).toBeVisible();
});
