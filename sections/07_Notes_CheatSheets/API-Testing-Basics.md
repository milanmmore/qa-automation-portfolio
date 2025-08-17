# 🌐 API Testing Basics CheatSheet

<div align="center">

![API](https://img.shields.io/badge/API-Testing-blue?style=flat)
![REST](https://img.shields.io/badge/REST-CRUD%20Operations-green?style=flat)
![Tools](https://img.shields.io/badge/Tools-Postman%20%26%20More-orange?style=flat)

**Essential API Testing Concepts & Techniques**

</div>

---

## 🔍 What is API Testing?

**API Testing** is testing application programming interfaces to ensure they meet functionality, reliability, performance, and security requirements.

### Why API Testing?
- **Early Testing:** Test before UI is ready
- **Faster Execution:** No browser overhead
- **Better Coverage:** Test business logic directly
- **Language Independent:** Test any API regardless of implementation

---

## 📊 API Types

### REST APIs
- **Full Form:** Representational State Transfer
- **Protocol:** HTTP/HTTPS
- **Data Format:** JSON, XML
- **Methods:** GET, POST, PUT, DELETE, PATCH
- **Stateless:** Each request is independent

### SOAP APIs
- **Full Form:** Simple Object Access Protocol
- **Protocol:** HTTP, SMTP, TCP
- **Data Format:** XML
- **Standards:** WSDL, WS-Security
- **Stateful:** Can maintain state

### GraphQL APIs
- **Full Form:** Graph Query Language
- **Protocol:** HTTP
- **Data Format:** JSON
- **Single Endpoint:** One endpoint for all operations
- **Flexible Queries:** Clients specify exact data needed

---

## 🔧 HTTP Methods (CRUD Operations)

### GET - Read
```http
GET /api/users
GET /api/users/123
GET /api/users?page=1&limit=10
```
- **Purpose:** Retrieve data
- **Idempotent:** Yes (same result every time)
- **Safe:** Yes (doesn't modify data)
- **Response:** 200 OK, 404 Not Found

### POST - Create
```http
POST /api/users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com"
}
```
- **Purpose:** Create new resource
- **Idempotent:** No (creates new resource each time)
- **Safe:** No (modifies data)
- **Response:** 201 Created, 400 Bad Request

### PUT - Update (Complete)
```http
PUT /api/users/123
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30
}
```
- **Purpose:** Update entire resource
- **Idempotent:** Yes
- **Safe:** No
- **Response:** 200 OK, 404 Not Found

### PATCH - Update (Partial)
```http
PATCH /api/users/123
Content-Type: application/json

{
  "age": 31
}
```
- **Purpose:** Update partial resource
- **Idempotent:** Yes
- **Safe:** No
- **Response:** 200 OK, 404 Not Found

### DELETE - Delete
```http
DELETE /api/users/123
```
- **Purpose:** Delete resource
- **Idempotent:** Yes
- **Safe:** No
- **Response:** 204 No Content, 404 Not Found

---

## 🔐 Authentication Methods

### API Key
```http
GET /api/users
X-API-Key: your-api-key-here
```

### Bearer Token
```http
GET /api/users
Authorization: Bearer your-jwt-token-here
```

### Basic Authentication
```http
GET /api/users
Authorization: Basic base64(username:password)
```

### OAuth 2.0
```http
GET /api/users
Authorization: Bearer access-token
```

---

## 📋 API Testing Checklist

### Functional Testing
- [ ] **Valid requests** return expected responses
- [ ] **Invalid requests** return appropriate error codes
- [ ] **Required fields** are validated
- [ ] **Optional fields** are handled correctly
- [ ] **Data types** are validated
- [ ] **Business rules** are enforced

### Error Handling
- [ ] **400 Bad Request** for invalid input
- [ ] **401 Unauthorized** for missing auth
- [ ] **403 Forbidden** for insufficient permissions
- [ ] **404 Not Found** for invalid resources
- [ ] **422 Unprocessable Entity** for validation errors
- [ ] **500 Internal Server Error** for server issues

### Performance Testing
- [ ] **Response time** is within acceptable limits
- [ ] **Throughput** meets requirements
- [ ] **Concurrent requests** are handled properly
- [ ] **Load testing** under expected load
- [ ] **Stress testing** beyond capacity

### Security Testing
- [ ] **Authentication** is required where needed
- [ ] **Authorization** is properly enforced
- [ ] **Input validation** prevents injection attacks
- [ ] **HTTPS** is used for sensitive data
- [ ] **Rate limiting** is implemented

---

## 🛠️ Testing Tools

### Postman
```javascript
// Test script example
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response has required fields", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property('id');
    pm.expect(jsonData).to.have.property('name');
});
```

### Python Requests
```python
import requests
import json

# GET request
response = requests.get('https://api.example.com/users')
assert response.status_code == 200

# POST request
data = {'name': 'John Doe', 'email': 'john@example.com'}
response = requests.post('https://api.example.com/users', 
                        json=data)
assert response.status_code == 201
```

### cURL
```bash
# GET request
curl -X GET https://api.example.com/users

# POST request
curl -X POST https://api.example.com/users \
  -H "Content-Type: application/json" \
  -d '{"name": "John Doe", "email": "john@example.com"}'
```

---

## 📊 Response Validation

### Status Codes
```http
200 OK - Request successful
201 Created - Resource created
204 No Content - Request successful, no content
400 Bad Request - Invalid request
401 Unauthorized - Authentication required
403 Forbidden - Insufficient permissions
404 Not Found - Resource not found
422 Unprocessable Entity - Validation error
500 Internal Server Error - Server error
```

### Response Headers
```http
Content-Type: application/json
Cache-Control: no-cache
X-Rate-Limit-Limit: 100
X-Rate-Limit-Remaining: 99
X-Rate-Limit-Reset: 1640995200
```

### Response Body Validation
```json
// Success Response
{
  "status": "success",
  "data": {
    "id": 123,
    "name": "John Doe",
    "email": "john@example.com"
  }
}

// Error Response
{
  "status": "error",
  "message": "Validation failed",
  "errors": [
    {
      "field": "email",
      "message": "Invalid email format"
    }
  ]
}
```

---

## 🧪 Test Scenarios

### CRUD Operations
```http
# Create user
POST /api/users
{
  "name": "John Doe",
  "email": "john@example.com"
}
Expected: 201 Created

# Read user
GET /api/users/123
Expected: 200 OK

# Update user
PUT /api/users/123
{
  "name": "John Smith",
  "email": "john@example.com"
}
Expected: 200 OK

# Delete user
DELETE /api/users/123
Expected: 204 No Content
```

### Error Scenarios
```http
# Invalid email
POST /api/users
{
  "name": "John Doe",
  "email": "invalid-email"
}
Expected: 422 Unprocessable Entity

# Missing required field
POST /api/users
{
  "name": "John Doe"
}
Expected: 400 Bad Request

# Non-existent resource
GET /api/users/999
Expected: 404 Not Found
```

---

## 🔍 Advanced Testing

### Data-Driven Testing
```python
test_data = [
    {"name": "John", "email": "john@example.com"},
    {"name": "Jane", "email": "jane@example.com"},
    {"name": "Bob", "email": "bob@example.com"}
]

for data in test_data:
    response = requests.post('/api/users', json=data)
    assert response.status_code == 201
```

### Performance Testing
```python
import time
import concurrent.futures

def make_request():
    start_time = time.time()
    response = requests.get('https://api.example.com/users')
    end_time = time.time()
    return end_time - start_time

# Concurrent requests
with concurrent.futures.ThreadPoolExecutor(max_workers=10) as executor:
    times = list(executor.map(lambda x: make_request(), range(100)))
    
avg_time = sum(times) / len(times)
print(f"Average response time: {avg_time:.2f} seconds")
```

### Security Testing
```python
# SQL Injection test
payloads = [
    "'; DROP TABLE users; --",
    "' OR '1'='1",
    "admin'--"
]

for payload in payloads:
    response = requests.post('/api/login', 
                           json={'username': payload})
    # Should return 400 or 422, not 200
    assert response.status_code in [400, 422]
```

---

## 📈 API Testing Metrics

### Quality Metrics
- **Response Time:** Average time for API responses
- **Success Rate:** Percentage of successful requests
- **Error Rate:** Percentage of failed requests
- **Availability:** Uptime percentage

### Coverage Metrics
- **Endpoint Coverage:** Percentage of endpoints tested
- **Parameter Coverage:** Percentage of parameters tested
- **Scenario Coverage:** Percentage of business scenarios tested

---

## 🚀 Best Practices

### Test Design
- **Use descriptive test names** that explain the scenario
- **Test both positive and negative cases**
- **Validate response structure and data types**
- **Test boundary values and edge cases**

### Test Organization
- **Group related tests** by functionality
- **Use test data** for maintainability
- **Implement test hooks** for setup and teardown
- **Document test scenarios** clearly

### Automation
- **Automate repetitive tests** for efficiency
- **Use data-driven testing** for multiple scenarios
- **Implement CI/CD integration** for continuous testing
- **Monitor test results** and trends

---

<div align="center">
  <i>Part of <a href="https://github.com/Yasin-asif/SQA-Professional-Portfolio">Muhammad Yasin's SQA Professional Portfolio</a></i>
</div> 