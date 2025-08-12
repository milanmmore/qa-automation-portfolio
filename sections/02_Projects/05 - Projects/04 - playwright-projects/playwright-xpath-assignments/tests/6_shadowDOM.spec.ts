import { test, expect } from '@playwright/test';
import { getBaseURL } from '../utils/utils';
import { getShadowElement } from '../utils/shadowDOMUtils';
//import { getBaseURL, getShadowElement, getShadowElementWithRetry } from '../utils/utils';

/* import { fillShadowInput, getShadowContent, getShadowText } from '../utils/shadowDOMUtils';

test.only('interact with shadow DOM - utils', async ({ page }) => {
  const baseUrl = getBaseURL('selectorHub');
  await page.goto(baseUrl);
  await fillShadowInput(page, '.jackPart', '#kils', 'milan.qa');
  
  //await clickShadowElement(page, '#host', '#submit');
  const message = await getShadowContent(page,'.jackPart', '#kils');
  expect(message).toContain('milan.qa');
});
*/

test.only('interact with shadow DOM - direct access', async ({ page }) => {
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

  /*

  const hostExists = await page.$('.jackPart');
  console.log(`🧪 Host element found: ${!!hostExists}`);

  // Wait for shadow root to be attached
  const host = await page.waitForSelector('.jackPart', { state: 'attached', timeout: 10000 });
  if (!host) throw new Error('❌ Host element not found');
  await page.waitForTimeout(20000);

  const hasShadowRoot = await host.evaluate(el => !!(el as HTMLElement).shadowRoot);
  console.log('Shadow root attached:', hasShadowRoot);

      const userNameHandle = await page.evaluateHandle(
      ({ el, shadowSelector }) => {
        if (!el?.shadowRoot) return null;
        return el?.shadowRoot?.querySelector(shadowSelector);
      },
      { el: host, shadowSelector :'#kils' }
      );
  
  
  
 
  const userNameInput = userNameHandle.asElement();
  if (!userNameInput) throw new Error('❌ #kils input not found');
   
  console.log("value");

  // Interact with input
  await userNameInput.fill('Playwright');

  const value = await userNameInput.evaluate(el => (el as HTMLInputElement).value);
  console.log(value);
  expect(value).toBe('Playwright'); */

});
