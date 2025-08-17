# 🌐 HTTP Status Codes CheatSheet

<div align="center">

![HTTP](https://img.shields.io/badge/HTTP-Status%20Codes-blue?style=flat)
![API](https://img.shields.io/badge/API-Testing-green?style=flat)
![Response](https://img.shields.io/badge/Response-Validation-orange?style=flat)

**Complete Guide to HTTP Status Codes for API Testing**

</div>

---

## 📊 Status Code Categories

| Range | Category | Description |
|-------|----------|-------------|
| **1xx** | Informational | Request received, continuing process |
| **2xx** | Success | Request successfully received, understood, and accepted |
| **3xx** | Redirection | Further action needed to complete request |
| **4xx** | Client Error | Request contains bad syntax or cannot be fulfilled |
| **5xx** | Server Error | Server failed to fulfill valid request |

---

## ✅ 2xx Success Codes

### 200 OK
- **Meaning:** Request succeeded
- **Use Case:** GET, POST, PUT, DELETE successful
- **Example:** User data retrieved successfully
- **Testing:** Verify response body contains expected data

### 201 Created
- **Meaning:** Resource created successfully
- **Use Case:** POST request creating new resource
- **Example:** New user account created
- **Testing:** Verify resource exists and has correct data

### 202 Accepted
- **Meaning:** Request accepted for processing
- **Use Case:** Asynchronous operations
- **Example:** Background job started
- **Testing:** Verify job ID returned, check status later

### 204 No Content
- **Meaning:** Request succeeded, no content to return
- **Use Case:** DELETE operations, successful updates
- **Example:** User deleted successfully
- **Testing:** Verify no response body, check resource deleted

---

## 🔄 3xx Redirection Codes

### 301 Moved Permanently
- **Meaning:** Resource permanently moved
- **Use Case:** URL changes, domain redirects
- **Example:** Old API endpoint redirects to new one
- **Testing:** Verify redirects to correct URL

### 302 Found (Temporary)
- **Meaning:** Resource temporarily moved
- **Use Case:** Temporary redirects
- **Example:** Maintenance page redirect
- **Testing:** Verify temporary nature, check original URL later

### 304 Not Modified
- **Meaning:** Resource not modified since last request
- **Use Case:** Caching, conditional requests
- **Example:** Browser cache validation
- **Testing:** Verify no response body, check cache headers

---

## ❌ 4xx Client Error Codes

### 400 Bad Request
- **Meaning:** Request syntax error or invalid
- **Use Case:** Missing required fields, invalid data
- **Example:** Invalid JSON in request body
- **Testing:** Verify error message explains the issue

### 401 Unauthorized
- **Meaning:** Authentication required
- **Use Case:** Missing or invalid credentials
- **Example:** API key missing or expired
- **Testing:** Verify authentication headers required

### 403 Forbidden
- **Meaning:** Server understood but refuses to authorize
- **Use Case:** Insufficient permissions
- **Example:** User doesn't have admin rights
- **Testing:** Verify permission requirements

### 404 Not Found
- **Meaning:** Resource not found
- **Use Case:** Invalid URL, deleted resource
- **Example:** User ID doesn't exist
- **Testing:** Verify resource doesn't exist

### 405 Method Not Allowed
- **Meaning:** HTTP method not supported
- **Use Case:** Wrong HTTP verb
- **Example:** Using POST instead of GET
- **Testing:** Verify allowed methods in response headers

### 409 Conflict
- **Meaning:** Request conflicts with current state
- **Use Case:** Duplicate data, business rule violation
- **Example:** Email already exists
- **Testing:** Verify conflict resolution

### 422 Unprocessable Entity
- **Meaning:** Request well-formed but semantically incorrect
- **Use Case:** Validation errors, business logic failures
- **Example:** Invalid email format
- **Testing:** Verify validation error details

### 429 Too Many Requests
- **Meaning:** Rate limit exceeded
- **Use Case:** API throttling, abuse prevention
- **Example:** Too many requests per minute
- **Testing:** Verify rate limit headers and retry logic

---

## 🔥 5xx Server Error Codes

### 500 Internal Server Error
- **Meaning:** Server encountered unexpected condition
- **Use Case:** Application errors, unhandled exceptions
- **Example:** Database connection failed
- **Testing:** Verify error logging, check server logs

### 501 Not Implemented
- **Meaning:** Server doesn't support the functionality
- **Use Case:** Unsupported HTTP methods
- **Example:** Server doesn't support PATCH
- **Testing:** Verify method support

### 502 Bad Gateway
- **Meaning:** Invalid response from upstream server
- **Use Case:** Proxy/gateway issues
- **Example:** Backend service down
- **Testing:** Verify upstream service health

### 503 Service Unavailable
- **Meaning:** Server temporarily unavailable
- **Use Case:** Maintenance, overload
- **Example:** Server under heavy load
- **Testing:** Verify retry logic, check maintenance windows

### 504 Gateway Timeout
- **Meaning:** Upstream server timeout
- **Use Case:** Slow backend services
- **Example:** Database query timeout
- **Testing:** Verify timeout configurations

---

## 🧪 API Testing Scenarios

### Authentication Testing
```http
# Missing API key
GET /api/users
Response: 401 Unauthorized

# Invalid API key
GET /api/users
Authorization: Bearer invalid-token
Response: 401 Unauthorized

# Valid API key
GET /api/users
Authorization: Bearer valid-token
Response: 200 OK
```

### Data Validation Testing
```http
# Valid data
POST /api/users
Content-Type: application/json
{
  "name": "John Doe",
  "email": "john@example.com"
}
Response: 201 Created

# Invalid email
POST /api/users
Content-Type: application/json
{
  "name": "John Doe",
  "email": "invalid-email"
}
Response: 422 Unprocessable Entity
```

### Resource Testing
```http
# Existing resource
GET /api/users/123
Response: 200 OK

# Non-existent resource
GET /api/users/999
Response: 404 Not Found

# Delete resource
DELETE /api/users/123
Response: 204 No Content
```

---

## 📊 Status Code Testing Checklist

### Success Scenarios (2xx)
- [ ] **200 OK** - Verify response body and headers
- [ ] **201 Created** - Verify resource created and accessible
- [ ] **202 Accepted** - Verify async operation started
- [ ] **204 No Content** - Verify no response body

### Client Error Scenarios (4xx)
- [ ] **400 Bad Request** - Test invalid request formats
- [ ] **401 Unauthorized** - Test missing/invalid auth
- [ ] **403 Forbidden** - Test insufficient permissions
- [ ] **404 Not Found** - Test invalid resources
- [ ] **409 Conflict** - Test duplicate data scenarios
- [ ] **422 Unprocessable Entity** - Test validation errors
- [ ] **429 Too Many Requests** - Test rate limiting

### Server Error Scenarios (5xx)
- [ ] **500 Internal Server Error** - Test error handling
- [ ] **502 Bad Gateway** - Test upstream failures
- [ ] **503 Service Unavailable** - Test maintenance scenarios
- [ ] **504 Gateway Timeout** - Test timeout handling

---

## 🔍 Response Validation

### Headers to Check
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

## 🛠️ Testing Tools

### Postman Tests
```javascript
// Status code validation
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// Response time validation
pm.test("Response time is less than 2000ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(2000);
});

// Response body validation
pm.test("Response has required fields", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property('id');
    pm.expect(jsonData).to.have.property('name');
});
```

### Python Requests
```python
import requests

# Test different status codes
response = requests.get('https://api.example.com/users/999')
assert response.status_code == 404

response = requests.post('https://api.example.com/users', 
                        json={'invalid': 'data'})
assert response.status_code == 422
```

---

## 🚀 Best Practices

### Testing Approach
- **Test all status codes** your API should return
- **Verify error messages** are helpful and secure
- **Check response headers** for additional info
- **Test edge cases** and boundary conditions

### Error Handling
- **Log all errors** with appropriate details
- **Return consistent error formats**
- **Include error codes** for programmatic handling
- **Provide user-friendly messages**

### Security
- **Don't expose sensitive info** in error messages
- **Use appropriate status codes** for security issues
- **Implement rate limiting** to prevent abuse
- **Validate all inputs** thoroughly

---

<div align="center">
  <i>Part of <a href="https://github.com/Yasin-asif/SQA-Professional-Portfolio">Muhammad Yasin's SQA Professional Portfolio</a></i>
</div> 