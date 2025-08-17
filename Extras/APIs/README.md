# 🧪 API Testing with Postman & Newman

This section showcases my expertise in API testing using **Postman**, **Newman**, and **HTML reporting**. The sample project uses the [Reqres](https://reqres.in/) public API to demonstrate key testing concepts.

---

## 🚀 Tools Used

- **Postman** – for creating and executing API requests
- **Newman** – command-line runner for Postman collections
- **newman-reporter-htmlextra** – for generating rich HTML reports

---

## 📁 Project Structure

```
Postman-Demo/
│
├── Postman_Collections/
│   └── reqres_collection.json    # Sample Postman collection
├── Environments/
│   └── reqres_env.json
├── Data/
│   └── data.json
├── Reports/
│   └── data_report.html           # Newman HTML report
└── newman-run.sh                  # Shell script to run tests via Newman

Postman_Collections/
└── reqres_collection.json # Sample Postman collection

Reports/
└── sample_report.html # Newman HTML report

    newman-run.sh # Shell script to run tests via Newman

```

---

## 📌 Sample API Endpoints Tested

| Method | Endpoint            | Description |
| ------ | ------------------- | ----------- |
| GET    | `/api/users?page=2` | List users  |
| POST   | `/api/users`        | Create user |
| PUT    | `/api/users/:id`    | Update user |
| DELETE | `/api/users/:id`    | Delete user |

---

## ✅ Sample Test Scripts in Postman

```javascript
pm.test("Status code is 200", () => {
  pm.response.to.have.status(200);
});

pm.test("Response contains user data", () => {
  const jsonData = pm.response.json();
  pm.expect(jsonData.data).to.be.an("array");
});
```

## 🖥️ Running Tests with Newman

1. Install Newman globally

```bash
npm install -g newman
```

2. Install HTML Reporter

```bash
npm install -g newman-reporter-htmlextra
```

3. Run the collection

```bash
newman run Postman_Collections/reqres_collection.json \
  -r htmlextra \
  --reporter-htmlextra-export Reports/sample_report.html
```

Or use the included script:

```bash
bash newman-run.sh
```

## 📊 Sample Report

## 🌐 Environment Variables in Postman

### ✅ Why Use Them?

- Centralize values like base URLs, tokens, or user IDs
- Easily switch between environments (e.g., dev, staging, prod)

### 🛠️ How to Create

In Postman, go to Environments → click Add
Define variables like:
In your requests, use:
{{base_url}}/users/{{user_id}}

### 🧪 Sample Request

```http
GET {{base_url}}/users/{{user_id}}
```

### 🧪 Sample Test Script

```js
pm.test("Status code is 200", () => {
  pm.response.to.have.status(200);
});
```

## 📦 Data-Driven Testing with CSV/JSON

### ✅ Why Use It?

Run the same test with multiple data sets

Ideal for login, registration, or CRUD scenarios

### 🛠️ How to Set Up

Create a data.json file:

```json
[
  { "name": "Milan", "job": "QA Lead" },
  { "name": "Asif", "job": "Tester" },
  { "name": "Yasin", "job": "Engineer" }
]
```

In Postman, use variables:

```http
POST {{base_url}}/users
Body (raw JSON):

json
{
  "name": "{{name}}",
  "job": "{{job}}"
}
```

## ⚙️ Newman + HTML Report

- Install Newman and htmlextra:

```bash
npm install -g newman newman-reporter-htmlextra
```

Run locally:

```bash
newman run collections/reqres_collection.json \
  -e environments/reqres_environment.json \
  --iteration-data data/users_data.json \
  -r htmlextra \
  --reporter-htmlextra-export Reports/report.html
```

## 🔄 GitHub Actions CI Integration

Create .github/workflows/newman.yml:

```yaml
name: Run Newman Tests

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  run-api-tests:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Install Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "18"

      - name: Install Newman
        run: npm install -g newman newman-reporter-htmlextra

      - name: Run API Tests
        run: |
          newman run collections/reqres_collection.json \
            -e environments/reqres_environment.json \
            --iteration-data data/users_data.json \
            -r htmlextra \
            --reporter-htmlextra-export Reports/report.html
```

## 🎯 Future Enhancements

- Create video walkthroughs and tutorials

## 🙌 Credits

Public API: Reqres

HTML Reporter: newman-reporter-htmlextra
