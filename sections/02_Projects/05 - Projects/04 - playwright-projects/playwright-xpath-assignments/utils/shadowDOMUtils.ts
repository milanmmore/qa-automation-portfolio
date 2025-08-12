import { Page, ElementHandle } from '@playwright/test';

type WaitState = 'visible' | 'attached';

/**
 * Waits for a shadow DOM element inside a host to be available and optionally visible.
 * @param page Playwright Page object
 * @param hostSelector Selector for the shadow host element
 * @param shadowSelector Selector inside the shadow root
 * @param options Optional config: timeout and waitFor state
 * @returns ElementHandle of the shadow DOM element
 */
export async function getShadowElement(
  page: Page,
  hostSelector: string,
  shadowSelector: string,
  options?: { timeout?: number; waitFor?: WaitState }
): Promise<ElementHandle<HTMLElement>> {
  const timeout = options?.timeout ?? 10000;
  const waitFor = options?.waitFor ?? 'visible';

  await page.waitForSelector(hostSelector, { state: 'attached', timeout });

  const host = await page.$(hostSelector);
  if (!host) {
    throw new Error(`❌ Host element "${hostSelector}" not found`);
  }

  const start = Date.now();
  while (Date.now() - start < timeout) {
    const shadowHandle = await page.evaluateHandle(
      ({ el, shadowSelector }) => {
        if (!el?.shadowRoot) return null;
        return el?.shadowRoot?.querySelector(shadowSelector);
      },
      { el: host, shadowSelector }
    );

    const shadowElement = shadowHandle.asElement();
    if (shadowElement) {
      // ✅ Wait for visibility or attachment
      if (waitFor === 'visible') {
        await page.waitForFunction(
          el => el && (el as HTMLElement).offsetParent !== null,
          shadowElement,
          { timeout: 5000 }
        );
      } else {
        await page.waitForFunction(
          el => el && document.contains(el),
          shadowElement,
          { timeout: 5000 }
        );
      }

      return shadowElement as ElementHandle<HTMLElement>;
    }

    await page.waitForTimeout(200); // retry delay
  }

  throw new Error(`❌ Shadow element "${shadowSelector}" not found inside "${hostSelector}" within ${timeout}ms`);
}



