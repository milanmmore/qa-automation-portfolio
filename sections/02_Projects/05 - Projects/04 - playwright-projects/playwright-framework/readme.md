# Playwright Framework Design

## Step 1: Initialize the Project

```bash
mkdir playwright-framework
cd playwright-framework
npm init -y
npm install -D playwright typescript ts-node @playwright/test
npx playwright install
```

This sets up Playwright with TypeScript support.

## Step 2: Add TypeScript Configuration

Create tsconfig.json:

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "CommonJS",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "outDir": "dist"
  },
  "include": ["tests", "pages", "utils"]
}
```

## Step 3: Create Folder Structure

```bash
mkdir tests pages utils config reports
touch playwright.config.ts
```

Your structure now looks like:

```plaintext

playwright-framework/
│
├── api/                 # API testing utilities
│   └── userApi.ts
│
├── config/
│   ├── env.json
│   ├── testdata.json
│   └── .env
│
├── fixtures/            # Setup/teardown logic
│   └── globalSetup.ts
│
├── pages/
│   ├── BasePage.ts
│   └── LoginPage.ts
│
├── tests/
│   └── login.spec.ts
│
├── utils/
│   ├── logger.ts
│   ├── wait.ts
│   └── dataLoader.ts
│
├── reports/
├── playwright.config.ts
├── tsconfig.json
├── package.json
└── README.md

```

## Step 4: Configure Playwright

Edit playwright.config.ts:

```ts
import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 30000,
  retries: 1,
  use: {
    headless: true,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    baseURL: "https://example.com",
  },
  reporter: [
    ["list"],
    ["html", { outputFolder: "reports/html-report", open: "never" }],
  ],
});
```

## Step 5: Create a Page Object

File: pages/LoginPage.ts

```ts
import { Page } from "@playwright/test";

export class LoginPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto("/login");
  }

  async login(username: string, password: string) {
    await this.page.fill("#username", username);
    await this.page.fill("#password", password);
    await this.page.click('button[type="submit"]');
  }
}
```

## Step 6: Write Your First Test

File: tests/login.spec.ts

```ts
import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test("Login with valid credentials", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login("testuser", "password123");
  await expect(page.locator("text=Welcome")).toBeVisible();
});
```

## Step 7: Add Utility Functions (🧩 Common Utilities)

1. 🔍 File: utils/logger.ts

```ts
export class Logger {
  static info(message: string) {
    console.log(`[INFO] ${message}`);
  }

  static error(message: string) {
    console.error(`[ERROR] ${message}`);
  }

  static debug(message: string) {
    console.debug(`[DEBUG] ${message}`);
  }
}
```

2. ⏳ File: utils/wait.ts

```ts
import { Page } from "@playwright/test";

export async function waitForSelector(
  page: Page,
  selector: string,
  timeout = 5000
) {
  await page.waitForSelector(selector, { timeout });
}
```

3. 📦 File: utils/dataLoader.ts

```ts
import fs from "fs";
import path from "path";

export function loadTestData(fileName: string) {
  const filePath = path.join(__dirname, "../config", fileName);
  const rawData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(rawData);
}
```

Usage in test:

```ts
const data = loadTestData("testdata.json");
```

## Step 8: Add environment configs & Test Data

1. File: config/env.json

```json
{
  "baseURL": "https://example.com",
  "env": "staging"
}
```

2. File: config/testdata.json

```json
{
  "validUser": {
    "username": "testuser",
    "password": "password123"
  }
}
```

Use it in your test via import data from '../config/testdata.json';

## Step 9: Run Tests

```bash
npx playwright test
```

To view HTML report:

```bash
npx playwright show-report
```

## Step 10: Add Allure Reporting (Optional)

```bash
npm install -D allure-playwright
```

Update playwright.config.ts:

```ts
reporter: [['allure-playwright'], ['html', { outputFolder: 'reports/html-report' }]],
```

Generate and view report:

```bash
allure generate reports/allure-results --clean -o reports/allure-report
allure open reports/allure-report
```

## Step 11: Add GitHub Actions CI/CD (Optional)

Create .github/workflows/playwright.yml:

```yaml
name: Playwright Tests

on: [push]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: "18"
      - run: npm install
      - run: npx playwright install
      - run: npx playwright test
```



