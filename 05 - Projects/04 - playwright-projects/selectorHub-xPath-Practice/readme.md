## Prerequisites to set up Playwright with TypeScript

- Node.js: Ensure that you have Node.js installed on your system. You can download it from the official Node.js website https://nodejs.org/en/download
- Code Editor: Choose your favorite code editor. If you’re not already using one, consider using Visual Studio Code (VS Code), which provides excellent TypeScript support.

With these prerequisites in place, you’ll be ready to set up Playwright with TypeScript and start automating your tests!

## Setting Up Your Project

To set up Playwright with TypeScript (TS) in Visual Studio Code (VS Code), follow these steps:

1. Create a New Directory:
   Create a fresh new directory (e.g., “PlaywrightDemo”) where you’ll organize your Playwright tests
2. Open the Directory in VS Code:
   From VS Code, click on File > Open Folder.
   Choose the newly created folder (e.g., “PlaywrightDemo”).
3. Open a Terminal & Install Playwright:
   In the terminal, enter the following command to start the Playwright installation:

```bash
npm init playwright@latest
```

4. Create a new file named ‘firstTest.spec.ts’ in a directory named ‘tests’ and add the following code:

```ts
import { test, chromium, firefox } from “@playwright/test”;

test(To launch the browser,async () => {

//Create a new browser instance
const browser = await chromium.launch({headless:false, channel:’msedge’});
// Get the browser context
const browserContext = await browser.newContext();
// Create a new page
const page = await browserContext.newPage();
// Load the url
await page.goto(“http://leaftaps.com/opentaps/control/main”);
//To print the title
const title = await page.title();
console.log(title);

})
```

5.  Running Your Tests

```bash
npx playwright test firstTest.spec.ts
```

The Playwright test runner will launch a browser instance, execute your test case, and provide detailed output regarding the test results. 6. Organizing Your Test Suites

As your test suite grows, it’s essential to organize your tests into logical groups.
Create separate test files for different features or components of your application. For example:

tests/

├── loginPage.spec.ts

└── homePage.spec.ts

7. Adding Assertions

Playwright provides a rich set of assertion functions for verifying the behavior of web applications. You can use these assertions to validate elements, text content, URLs, and more. Let’s illustrate by performing a search on Leaftaps application:

```bash
import { chromium, test } from “@playwright/test”;

test(Locate different web elements,async ({page}) => {

    await page.goto(“http://leaftaps.com/opentaps/control/main”);
    // Enter the username
    await page.locator(“#username”).fill(“Demosalesmanager”);
    // Enter the password
    await page.locator(“[name=’PASSWORD’]”).fill(“crmsfa”);
    // Click the login button
    await page.locator(“.decorativeSubmit”).click();
    expect(title).toBe(‘Leaftaps – TestLeaf Automation Platform’);
})
```

🧪 XPath Practice Test Cases
🔹 Basic XPath
✅ Locate the username Kevin.Mathews using exact text match.

✅ Find the status of John.Smith using relative XPath.

✅ Select all rows where the status is Enabled.

🔹 XPath with Attributes
✅ Identify the input field using its placeholder attribute.

✅ Locate buttons using @id, @class, or @name.

🔹 XPath with Functions
✅ Use contains() to find usernames that include "Mathews".

✅ Use starts-with() to locate usernames starting with "J".

✅ Use normalize-space() to handle extra spaces in text.

🔹 Axes-Based XPath
✅ Use following-sibling::td to get the status next to a username.

✅ Use ancestor::tr to get the entire row for a given cell.

✅ Use preceding::td to find the employee name before the status.

🔹 Indexing and Position
✅ Select the third row in the user table.

✅ Get the last row using last() function.

✅ Select the second column of every row.

🔹 Shadow DOM
✅ Practice locating elements inside shadow DOM using Playwright’s shadowRoot handling.

✅ Identify nested shadow DOM elements and validate their text.

🔹 Iframe and Nested Iframes
✅ Switch to iframe and locate a button inside it.

✅ Handle nested iframe and extract text from a field inside.

🔹 Dynamic Elements
✅ Locate elements that appear after clicking “Open Modal”.

✅ Handle alerts and prompts using XPath and Playwright’s dialog handling.

🎯 Bonus Challenges
🔍 Validate broken links using XPath.

🧩 Practice XPath on system distribution tables (OS, browser, city).

🧪 Write XPath to extract all usernames with role ESS.
