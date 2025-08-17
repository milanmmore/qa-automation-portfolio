# 🧪 Test Plan – ParaBank Online Banking Demo App

## 1. Introduction

This test plan outlines the strategy, scope, and approach for testing the ParaBank demo application. The goal is to validate core banking functionalities including login, account overview, fund transfer, and customer service.

## 2. Objectives

- Ensure critical workflows function correctly across browsers
- Validate UI and API responses
- Identify and report defects with reproducible steps

## 3. Scope

### In Scope

- Login/logout functionality
- Account overview and balances
- Fund transfer between accounts
- Contact form submission
- API validation for login and account details

### Out of Scope

- Backend database validation
- Performance/load testing

## 4. Test Strategy

- **Manual Testing** for exploratory and UI validation
- **Automation Testing** using Selenium, Cypress, and Playwright
- **API Testing** using Postman

## 5. Test Environment

- Web: [https://parabank.parasoft.com/parabank/index.htm](https://parabank.parasoft.com/parabank/index.htm)
- Browsers: Chrome, Firefox, Edge
- OS: Windows 10, macOS Ventura

## 6. Test Data

```
| Username | Password | From Account | To Account | Amount |
|----------|----------|--------------|------------|--------|
| john     | demo     | 12345        | 54321      | 100    |
```

## 7. Entry & Exit Criteria

### Entry

- Test environment is set up
- Test data is available
- Application is accessible

### Exit

- All critical test cases executed
- Major bugs resolved or documented
- Test summary report shared

## 8. Deliverables

- Test cases document
- Bug report
- Automation scripts
- Test summary report

## 9. Risks

- Unstable demo environment
- Limited access to backend logs
