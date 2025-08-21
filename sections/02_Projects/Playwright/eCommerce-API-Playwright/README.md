# 🧪 E-Commerce API Test Suite with Playwright & TypeScript

This capstone project demonstrates a comprehensive test suite for a sample e-commerce API using [Playwright](https://playwright.dev/) and TypeScript. It covers functional testing of core endpoints and performance benchmarking for critical flows like checkout.

Test Scenario :
Build a test suite for a sample e-commerce API.

User authentication
Product listing and details
Cart and checkout APIs
Performance testing for critical endpoints

---

## 🚀 Features Tested

- 🔐 **User Authentication** – Login flow with token validation
- 🛍️ **Product Listing & Details** – Fetching product catalog and individual product info
- 🛒 **Cart Operations** – Adding items to cart
- 💳 **Checkout Flow** – Simulating purchase with payment and address
- ⚡ **Performance Testing** – Load testing checkout endpoint using Artillery

---

## 🛠️ Tech Stack

- **Playwright** – API testing framework
- **TypeScript** – Strongly typed scripting
- **Node.js** – Runtime environment
- **Artillery** – Performance testing tool

---

## 📁 Project Structure

```
ecommerce-api-tests/
├── tests/                    # API test cases
│   ├── auth.test.ts         # Login and authentication tests
│   ├── products.test.ts     # Product listing and details tests
│   ├── cart.test.ts         # Cart operations tests
│   ├── checkout.test.ts     # Checkout flow tests
│
├── utils/                   # Shared utilities
│   └── apiClient.ts         # API client wrapper
│
├── data/                    # Test data files
│   └── testData.json        # Sample payloads and inputs
│
├── performance/             # Load testing config
│   └── checkout-load-test.yml  # Artillery test for checkout
│
├── playwright.config.ts     # Playwright configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Project metadata and dependencies
└── README.md                # Project documentation

```

## 🧪 Test Coverage

The following test files are included:

```
    - `auth.test.ts` – Login and token validation
    - `products.test.ts` – Product catalog and details
    - `cart.test.ts` – Cart operations
    - `checkout.test.ts` – Checkout flow and order confirmation
```

## 🧰 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/ecommerce-api-tests.git
cd ecommerce-api-tests
```

### 2. Install dependencies

```bash
npm install
npx playwright install
```

### 3. Run API tests

```bash
npx ts-node tests/auth.test.ts
npx ts-node tests/products.test.ts
npx ts-node tests/cart.test.ts
npx ts-node tests/checkout.test.ts
```

### 4. Run performance test (Artillery)

```bash
artillery run performance/checkout-load-test.yml
```

## 📊 Sample Test Output

```Code
✓ User login with valid credentials
✓ Fetch product list
✓ Add item to cart
✓ Checkout cart
```

## 📌 Why This Project?

This project showcases:

```
 * Real-world API testing scenarios
 * Modular and scalable test architecture
 * Performance benchmarking for production-readiness
 * TypeScript best practices
```

## 🙋‍♂️ Author

Milan – Passionate about automation, backend testing, and building robust QA pipelines. Connect with me on LinkedIn or check out more projects on GitHub

## 📄 License

This project is licensed under the MIT License.

# DummyJSON API Test Suite

Automated API tests using Playwright Test for DummyJSON e-commerce endpoints.

## Features

- ✅ JWT Authentication
- 🛍️ Product listing & details
- 🧺 Cart operations
- 🚀 Performance benchmarks

## Run Tests

```bash
npx playwright test
```
