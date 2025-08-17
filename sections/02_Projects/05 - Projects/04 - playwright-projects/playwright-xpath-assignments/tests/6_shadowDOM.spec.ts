import { test, expect } from '@playwright/test';
import { getBaseURL } from '../utils/utils';
import { fillShadowInput, getShadowInputValue, waitForShadowRoot } from '../utils/shadow-utils';


test('interact with shadow DOM using utils', async ({ page }) => {
  const baseUrl = getBaseURL('selectorHub');
  console.log(`🔍 Navigating to: ${baseUrl}`);
  await page.goto(baseUrl, { waitUntil: 'networkidle' });

  await page.evaluate(() => localStorage.clear());
  await page.evaluate(() => sessionStorage.clear());
  page.setDefaultTimeout(40000);

  // Trigger shadow root attachment
  await page.mouse.click(100, 100);

  // Wait for shadow root
  await waitForShadowRoot(page, '.jackPart');

  // Fill input inside shadow DOM
  await fillShadowInput(page, '.jackPart', '#kils', 'ShadowUser');

  // Verify input value
  const value = await getShadowInputValue(page, '.jackPart', '#kils');
  console.log('✅ Input value:', value);
  expect(value).toBe('ShadowUser');
});


test('interact with shadow DOM - direct access', async ({ page }) => {
  const baseUrl = getBaseURL('selectorHub');
  console.log(`🔍 Navigating to: ${baseUrl}`);
  await page.goto(baseUrl, { waitUntil: 'networkidle' });

  await page.evaluate(() => localStorage.clear());
  await page.evaluate(() => sessionStorage.clear());
  page.setDefaultTimeout(40000);

  // Optional: wait for page scripts or animations
  //await page.waitForTimeout(5000);

// Check if host exists
  const hostExists = await page.$('.jackPart');
  console.log(`🧪 Host element found: ${!!hostExists}`);
  
  await page.mouse.click(100, 100);

  //await page.waitForTimeout(5000);
// Wait for host to be attached
const host = await page.waitForSelector('.jackPart', { state: 'attached', timeout: 10000 });
if (!host) throw new Error('❌ Host element not found');

  

  clearTimeout(20000);
// Wait for shadow root to be attached
await host.evaluate(el => {
  return new Promise<void>((resolve, reject) => {
    const timeout = setTimeout(() => reject('Shadow root not attached in time'), 20000);
    const check = () => {
      if (el?.shadowRoot) {
        clearTimeout(timeout);
        return resolve();
      }
      requestAnimationFrame(check);
    };
    check();
  });
});


  
// Confirm shadow root is attached
const hasShadowRoot = await host.evaluate(el => !!el.shadowRoot);
console.log('Shadow root attached:', hasShadowRoot);

// Wait a bit (optional, if needed)
await page.waitForTimeout(500); // Use a short delay if necessary

// Get input inside shadow root
const inputHandle = await host.evaluateHandle((el, selector) => {
  return el.shadowRoot?.querySelector(selector);
}, '#kils');

// Convert JSHandle to ElementHandle
const inputElement = inputHandle.asElement();
if (!inputElement) throw new Error('❌ #kils input not found');

// Interact with input
await inputElement.fill('Playwright');

// Verify value
const value = await inputElement.evaluate(el => (el as HTMLInputElement).value);
console.log('✅ Input value:', value);
expect(value).toBe('Playwright');
  

});
