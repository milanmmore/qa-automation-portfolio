import { Page, ElementHandle } from '@playwright/test';

export async function waitForShadowRoot(page: Page, hostSelector: string, timeout = 10000): Promise<ElementHandle> {
  const host = await page.waitForSelector(hostSelector, { state: 'attached', timeout });
  if (!host) throw new Error(`❌ Host element "${hostSelector}" not found`);

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

  return host;
}

export async function getShadowElement(page: Page, hostSelector: string, innerSelector: string): Promise<ElementHandle> {
  const host = await waitForShadowRoot(page, hostSelector);
  const handle = await host.evaluateHandle((el, selector) => el.shadowRoot?.querySelector(selector), innerSelector);
  const element = handle.asElement();
  if (!element) throw new Error(`❌ Element "${innerSelector}" not found inside shadow root of "${hostSelector}"`);
  return element;
}

export async function fillShadowInput(page: Page, hostSelector: string, inputSelector: string, value: string): Promise<void> {
  const input = await getShadowElement(page, hostSelector, inputSelector);
  await input.fill(value);
}

export async function getShadowContent(page: Page, hostSelector: string, innerSelector: string): Promise<string> {
  const element = await getShadowElement(page, hostSelector, innerSelector);
  return await element.evaluate(el => (el as HTMLElement).textContent || '');
}

export async function getShadowInputValue(page: Page, hostSelector: string, inputSelector: string): Promise<string> {
  const input = await getShadowElement(page, hostSelector, inputSelector);
  return await input.evaluate(el => (el as HTMLInputElement).value);
}

