// iframe-utils.ts

import { Page, Locator, FrameLocator } from '@playwright/test';

/**
 * Returns a FrameLocator for the given iframe selector.
 * @param page Playwright Page object
 * @param frameSelector CSS selector for the iframe
 */
export function getFrameLocator(page: Page, frameSelector: string): FrameLocator {
  return page.frameLocator(frameSelector);
}

/**
 * Returns a Locator for an element inside an iframe.
 * @param page Playwright Page object
 * @param frameSelector CSS selector for the iframe
 * @param innerSelector Selector for the element inside the iframe
 */
export function getElementInFrame(page: Page, frameSelector: string, innerSelector: string): Locator {
  return page.frameLocator(frameSelector).locator(innerSelector);
}

/**
 * Clicks an element inside an iframe.
 * @param page Playwright Page object
 * @param frameSelector CSS selector for the iframe
 * @param innerSelector Selector for the element inside the iframe
 */
export async function clickInFrame(page: Page, frameSelector: string, innerSelector: string): Promise<void> {
  const element = getElementInFrame(page, frameSelector, innerSelector);
  await element.click();
}

/**
 * Fills an input field inside an iframe.
 * @param page Playwright Page object
 * @param frameSelector CSS selector for the iframe
 * @param inputSelector Selector for the input field inside the iframe
 * @param value Value to fill
 */
export async function fillInputInFrame(page: Page, frameSelector: string, inputSelector: string, value: string): Promise<void> {
  const input = getElementInFrame(page, frameSelector, inputSelector);
  await input.fill(value);
}

/**
 * Waits for an element inside an iframe to be visible.
 * @param page Playwright Page object
 * @param frameSelector CSS selector for the iframe
 * @param innerSelector Selector for the element inside the iframe
 */
export async function waitForElementInFrame(page: Page, frameSelector: string, innerSelector: string): Promise<void> {
  const element = getElementInFrame(page, frameSelector, innerSelector);
  await element.waitFor({ state: 'visible' });
}
