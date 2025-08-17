# 🧭 Locator Strategy Guide for Playwright

## 🎯 Goal

Use the **most semantic, stable, and readable selector** available for each element. Avoid brittle selectors like `.nth()` or deeply nested CSS unless absolutely necessary.

---

## 🥇 Locator Priority Order

| Priority | Selector Type      | Use When...                                                | Example                                        |
| -------- | ------------------ | ---------------------------------------------------------- | ---------------------------------------------- |
| 1️⃣       | `getByRole`        | Element has a semantic role (button, link, checkbox, etc.) | `page.getByRole('button', { name: 'Submit' })` |
| 2️⃣       | `getByLabel`       | Form control is associated with a `<label>`                | `page.getByLabel('Email')`                     |
| 3️⃣       | `getByPlaceholder` | Input has a visible placeholder but no label               | `page.getByPlaceholder('Enter your email')`    |
| 4️⃣       | `getByTestId`      | Element has a stable test hook like `data-testid`          | `page.getByTestId('login-button')`             |
| 5️⃣       | `getByText`        | Element has unique visible text                            | `page.getByText('Welcome back')`               |
| 6️⃣       | `locator(css)`     | No semantic hooks, but CSS class or ID is stable           | `page.locator('.btn.primary')`                 |
| 7️⃣       | `locator(xpath)`   | Complex DOM structure or dynamic content                   | `page.locator('//button[text()="Submit"]')`    |
| 8️⃣       | `locator().nth()`  | Multiple similar elements, no other way to distinguish     | `page.locator('button').nth(2)`                |

---

## 🧪 Selector Examples by Element Type

| Element Type       | Recommended Selector                           | Fallbacks                              |
| ------------------ | ---------------------------------------------- | -------------------------------------- |
| Button             | `getByRole('button', { name: 'Submit' })`      | `getByText('Submit')`, `getByTestId()` |
| Input (with label) | `getByLabel('Email')`                          | `getByPlaceholder()`, `getByTestId()`  |
| Input (no label)   | `getByPlaceholder('Enter email')`              | `locator('input[name="email"]')`       |
| Checkbox           | `getByRole('checkbox', { name: 'Accept' })`    | `getByLabel()`, `getByTestId()`        |
| Link               | `getByRole('link', { name: 'Home' })`          | `getByText('Home')`                    |
| Static Text        | `getByText('Welcome')`                         | `locator('h1')`                        |
| Shadow DOM         | `locator('host >> inner')` or utility function | `evaluateHandle()`                     |
| Iframe             | `frameLocator('#frame').locator('text=Go')`    | `frameLocator().getByRole()`           |

---

## 🧼 Best Practices

- ✅ Prefer **semantic selectors** (`getByRole`, `getByLabel`) for accessibility and clarity.
- ✅ Use **`data-testid`** attributes for automation hooks in your app.
- ✅ Avoid **deep CSS chains** like `.container > div > ul > li > a`.
- ✅ Avoid **index-based selectors** (`.nth()`) unless absolutely necessary.
- ✅ Use **utility functions** for complex structures like shadow DOM or iframes.

---

## 🧰 Bonus: Utility Functions You Should Have

```ts
// Get element inside shadow DOM
async function getShadowElement(page, hostSelector, innerSelector) {
  const host = await page.locator(hostSelector);
  return await host.evaluateHandle(
    (el, sel) => el.shadowRoot.querySelector(sel),
    innerSelector
  );
}

// Fill input inside shadow DOM
async function fillShadowInput(page, hostSelector, inputSelector, value) {
  const input = await getShadowElement(page, hostSelector, inputSelector);
  await input.type(value);
}

// Get element inside iframe
async function getIframeElement(page, frameSelector, innerSelector) {
  const frame = page.frameLocator(frameSelector);
  return frame.locator(innerSelector);
}

// Click by visible text
async function clickByText(page, text) {
  await page.getByText(text).click();
}
```
