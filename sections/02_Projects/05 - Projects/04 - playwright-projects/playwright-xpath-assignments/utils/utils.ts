import { Page, ElementHandle } from '@playwright/test';

export function getBaseURL(env: string): string {
  const baseURLs: Record<string, string> = {
  selectorHub: 'https://selectorshub.com/xpath-practice-page/',
  heroku: 'https://the-internet.herokuapp.com/',
  paraBank: 'https://parabank.parasoft.com',
  };

  return baseURLs[env] || baseURLs['selectorHub'];
}


/*
export async function getShadowElement(
  page: Page,
  hostSelector: string,
  shadowSelector: string
): Promise<ElementHandle<HTMLElement>> {
  const elementHandle = await page.evaluateHandle(
    ({ hostSel, shadowSel }) => {
      const host = document.querySelector(hostSel);
      if (!host || !host.shadowRoot) return null;
      return host?.shadowRoot?.querySelector(shadowSel);
    },
    { hostSel: hostSelector, shadowSel: shadowSelector }
  );

  const isNull = await elementHandle.evaluate((el) => el === null);
  if (isNull) {
    throw new Error(`❌ Shadow element '${shadowSelector}' not found inside '${hostSelector}'`);
  }

  console.log(`✅ Found shadow element '${shadowSelector}' inside '${hostSelector}'`);
  return elementHandle as ElementHandle<HTMLElement>;
}


export async function getShadowElementWithRetry(
  page: Page,
  hostSelector: string,
  shadowSelector: string,
  retries = 5,
  delayMs = 500
): Promise<ElementHandle<HTMLElement>> {
  for (let i = 0; i < retries; i++) {
    const elementHandle = await page.evaluateHandle(({ hostSel, shadowSel }) => {
      const host = document.querySelector(hostSel);
      return host?.shadowRoot?.querySelector(shadowSel) ?? null;
    }, { hostSel: hostSelector, shadowSel: shadowSelector });

    const isNull = await elementHandle.evaluate((el) => el === null);
    if (!isNull) {
      console.log(`✅ Found shadow element '${shadowSelector}' on attempt ${i + 1}`);
      return elementHandle as ElementHandle<HTMLElement>;
    }

    console.warn(`⏳ Retry ${i + 1}: Shadow element '${shadowSelector}' not found`);
    await page.waitForTimeout(delayMs);
  }

  throw new Error(`❌ Shadow element '${shadowSelector}' not found inside '${hostSelector}' after ${retries} retries`);
}
  */
