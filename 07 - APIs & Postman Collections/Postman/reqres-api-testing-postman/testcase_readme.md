# 🧪 API Test Case Documentation

**Project Title:** API Testing with Postman & Newman – Reqres Demo  
**Tools Used:** Postman, Newman, htmlextra reporter, GitHub Actions  
**Environment:** Reqres Public API (`https://reqres.in`)

---

## ✅ Test Cases Overview

```
| Test Case ID | Endpoint          | Description                   | Expected Result                         |
| ------------ | ----------------- | ----------------------------- | --------------------------------------- |
| TC_API_001   | `GET /api/users`  | Retrieve user list            | Status 200, response contains `data[]`  |
| TC_API_002   | `POST /api/users` | Create a new user             | Status 201, response contains `id`      |
| TC_API_003   | `POST /api/login` | Login with valid credentials  | Status 200, response contains `token`   |
| TC_API_004   | `POST /api/users` | Data-driven user creation     | Status 201 for each iteration           |
| TC_API_005   | GitHub Actions CI | CI pipeline runs Newman tests | Workflow success, HTML report generated |

```

---

## 🔍 Detailed Test Cases

### TC_API_001 – Get List of Users

- **Method:** GET `/api/users?page=2`
- **Assertions:**
  - `pm.response.to.have.status(200)`
  - `pm.expect(jsonData.data).to.be.an('array')`

---

### TC_API_002 – Create User

- **Method:** POST `/api/users`
- **Body:** `{ "name": "Milan", "job": "QA Lead" }`
- **Assertions:**
  - `pm.response.to.have.status(201)`
  - `pm.expect(jsonData).to.have.property('id')`

---

### TC_API_003 – Login with Valid Credentials

- **Method:** POST `/api/login`
- **Body:** `{ "email": "eve.holt@reqres.in", "password": "cityslicka" }`
- **Assertions:**
  - `pm.response.to.have.status(200)`
  - `pm.expect(jsonData).to.have.property('token')`

---

### TC_API_004 – Data-Driven User Creation

- **Method:** POST `/api/users`
- **Data File:** `users_data.json`
- **Assertions:**
  - `pm.response.to.have.status(201)`
  - `pm.expect(jsonData).to.have.property('id')`

---

### TC_API_005 – CI Execution via GitHub Actions

- **Workflow File:** `.github/workflows/api-tests.yml`
- **Trigger:** Push or PR
- **Assertions:**
  - Workflow status = success
  - HTML report generated in `Reports/`

---
