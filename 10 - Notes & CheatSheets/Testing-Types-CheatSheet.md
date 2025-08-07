# 🧪 Testing Types CheatSheet

<div align="center">

![Testing](https://img.shields.io/badge/Testing-Types%20Guide-blue?style=flat)
![Levels](https://img.shields.io/badge/Levels-Unit%20to%20UAT-green?style=flat)
![Methods](https://img.shields.io/badge/Methods-Black%20Box%20to%20White%20Box-orange?style=flat)

**Complete Guide to Testing Types & Levels**

</div>

---

## 📊 Testing Levels (V-Model)

| Level | Description | When | Tools |
|-------|-------------|------|-------|
| **Unit Testing** | Test smallest piece (function/module) | During development | PyTest, JUnit, NUnit |
| **Integration Testing** | Test combined modules/components | After unit testing | Postman, Selenium |
| **System Testing** | Validate the system end-to-end | Before UAT | Selenium, Cypress |
| **Acceptance Testing** | Testing by actual users | Before production | Manual, UAT tools |

---

## 🔍 Testing Types by Purpose

### Functional Testing
| Type | Purpose | Example |
|------|---------|---------|
| **Unit Testing** | Test individual functions | `test_login_function()` |
| **Integration Testing** | Test module interactions | API endpoint testing |
| **System Testing** | Test complete system | End-to-end user flows |
| **Regression Testing** | Ensure no new bugs introduced | Automated test suites |
| **Smoke Testing** | Quick health check | Basic functionality test |
| **Sanity Testing** | Focused testing on specific area | Recent bug fix verification |

### Non-Functional Testing
| Type | Purpose | Tools |
|------|---------|-------|
| **Performance Testing** | Speed, scalability, stability | JMeter, LoadRunner |
| **Load Testing** | System under expected load | Apache Bench, Gatling |
| **Stress Testing** | System beyond capacity | JMeter, Artillery |
| **Security Testing** | Vulnerability assessment | OWASP ZAP, Burp Suite |
| **Usability Testing** | User experience evaluation | Manual, UserTesting |
| **Compatibility Testing** | Cross-platform/browser testing | BrowserStack, Sauce Labs |

---

## 🎯 Testing Methods

### Black Box Testing
- **Definition:** Testing without knowing internal code
- **Focus:** Input → Output validation
- **Techniques:** ECP, BVA, Decision Table, State Transition
- **When:** Functional testing, user acceptance

### White Box Testing
- **Definition:** Testing with knowledge of internal code
- **Focus:** Code coverage, logic paths
- **Techniques:** Statement, Branch, Path coverage
- **When:** Unit testing, code review

### Gray Box Testing
- **Definition:** Partial knowledge of internal structure
- **Focus:** Integration, database testing
- **Techniques:** API testing, database validation
- **When:** Integration testing

---

## 🚀 Testing Techniques

### Equivalence Class Partitioning (ECP)
```
Valid Input: 1-100 → Test: 50
Invalid Input: <1 or >100 → Test: 0, 101
```

### Boundary Value Analysis (BVA)
```
Range: 1-100
Test Values: 0, 1, 2, 99, 100, 101
```

### Decision Table Testing
| Condition | Rule 1 | Rule 2 | Rule 3 |
|-----------|--------|--------|--------|
| Valid User | Y | Y | N |
| Valid Password | Y | N | Y |
| **Result** | **Login** | **Error** | **Error** |

---

## 📱 Specialized Testing

### Mobile Testing
- **Device Testing:** iOS, Android, tablets
- **Network Testing:** 3G, 4G, WiFi, offline
- **App Store Testing:** Installation, updates
- **Performance:** Battery, memory, CPU usage

### API Testing
- **REST API:** CRUD operations, status codes
- **GraphQL:** Query validation, schema testing
- **SOAP:** XML validation, WSDL testing
- **Authentication:** OAuth, JWT, API keys

### Database Testing
- **Data Integrity:** CRUD operations
- **Performance:** Query optimization
- **Migration:** Schema changes, data migration
- **Backup/Recovery:** Data restoration

---

## 🎭 Testing Approaches

### Manual Testing
- **Pros:** Human intuition, exploratory testing
- **Cons:** Time-consuming, error-prone
- **When:** Usability, exploratory, ad-hoc testing

### Automated Testing
- **Pros:** Fast, repeatable, consistent
- **Cons:** Initial setup cost, maintenance
- **When:** Regression, performance, repetitive tasks

### Hybrid Approach
- **Manual:** Exploratory, usability, ad-hoc
- **Automated:** Regression, smoke, performance

---

## 📈 Testing Pyramid

```
        /\
       /  \     E2E Tests (Few)
      /____\    
     /      \   Integration Tests (Some)
    /________\  
   /          \ Unit Tests (Many)
  /____________\
```

**Rule:** More unit tests, fewer integration tests, minimal E2E tests

---

## 🎯 When to Use Each Type

### Development Phase
- **Unit Testing:** During coding
- **Integration Testing:** After modules complete
- **System Testing:** Before release

### Release Phase
- **Smoke Testing:** Before full test suite
- **Regression Testing:** After bug fixes
- **UAT:** Before production deployment

### Maintenance Phase
- **Performance Testing:** After major changes
- **Security Testing:** Regular intervals
- **Compatibility Testing:** New browser/OS releases

---

<div align="center">
  <i>Part of <a href="https://github.com/Yasin-asif/SQA-Professional-Portfolio">Muhammad Yasin's SQA Professional Portfolio</a></i>
</div> 