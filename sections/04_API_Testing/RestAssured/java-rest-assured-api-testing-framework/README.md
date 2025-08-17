# Java REST Assured API Testing Framework

A comprehensive, production-ready API testing framework built with Java, REST Assured, TestNG, and Maven. This framework provides a robust foundation for API testing with features like data-driven testing, parallel execution, detailed reporting, and CI/CD integration.

## Features

### Core Testing Capabilities
- **REST API Testing**: Comprehensive HTTP methods support (GET, POST, PUT, DELETE, PATCH)
- **Authentication**: Multiple auth methods (Basic, Bearer Token, OAuth2, API Key)
- **Request/Response Validation**: Schema validation, response assertions, data extraction
- **Data-Driven Testing**: Excel, CSV, JSON, and database-driven test data
- **Parallel Execution**: TestNG parallel execution with thread safety
- **Environment Management**: Multi-environment configuration support

### Advanced Features
- **Request/Response Logging**: Detailed logging with configurable levels
- **Test Data Management**: Faker integration for dynamic test data generation
- **Database Integration**: Support for MySQL, PostgreSQL, MongoDB
- **File Upload/Download**: Multipart form data and file handling
- **Performance Testing**: Response time validation and performance metrics
- **Mock Server Integration**: WireMock integration for testing
- **Retry Mechanism**: Configurable retry logic for flaky tests

### Reporting and Monitoring
- **ExtentReports**: Rich HTML reports with screenshots and logs
- **Allure Reports**: Interactive test reporting with history
- **TestNG Reports**: Native TestNG HTML and XML reports
- **Custom Listeners**: Test execution listeners for monitoring
- **Slack Integration**: Test results notifications
- **Email Reports**: Automated email notifications

### CI/CD Integration
- **Jenkins**: Complete Jenkins pipeline configuration
- **GitHub Actions**: Automated workflow configuration
- **Docker**: Containerized test execution
- **Maven**: Build lifecycle management
- **Quality Gates**: SonarQube integration for code quality

## Project Structure

```
java-rest-assured-api-testing-framework/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/
│   │   │       └── framework/
│   │   │           ├── config/
│   │   │           │   ├── Configuration.java
│   │   │           │   ├── Environment.java
│   │   │           │   └── TestDataConfig.java
│   │   │           ├── core/
│   │   │           │   ├── BaseTest.java
│   │   │           │   ├── APIClient.java
│   │   │           │   ├── RequestBuilder.java
│   │   │           │   └── ResponseValidator.java
│   │   │           ├── utils/
│   │   │           │   ├── DataGenerator.java
│   │   │           │   ├── FileUtils.java
│   │   │           │   ├── DatabaseUtils.java
│   │   │           │   ├── JsonUtils.java
│   │   │           │   └── ExcelUtils.java
│   │   │           ├── models/
│   │   │           │   ├── User.java
│   │   │           │   ├── Product.java
│   │   │           │   └── Order.java
│   │   │           ├── listeners/
│   │   │           │   ├── TestListener.java
│   │   │           │   ├── RetryAnalyzer.java
│   │   │           │   └── SlackNotifier.java
│   │   │           └── reporting/
│   │   │               ├── ExtentManager.java
│   │   │               ├── ReportUtils.java
│   │   │               └── AllureUtils.java
│   │   └── resources/
│   │       ├── config/
│   │       │   ├── application.properties
│   │       │   ├── dev-config.properties
│   │       │   ├── test-config.properties
│   │       │   └── prod-config.properties
│   │       ├── schemas/
│   │       │   ├── user-schema.json
│   │       │   ├── product-schema.json
│   │       │   └── order-schema.json
│   │       ├── test-data/
│   │       │   ├── users.xlsx
│   │       │   ├── products.csv
│   │       │   └── test-scenarios.json
│   │       └── logback.xml
│   └── test/
│       ├── java/
│       │   └── com/
│       │       └── tests/
│       │           ├── api/
│       │           │   ├── UserApiTests.java
│       │           │   ├── ProductApiTests.java
│       │           │   ├── OrderApiTests.java
│       │           │   └── AuthenticationTests.java
│       │           ├── integration/
│       │           │   ├── WorkflowTests.java
│       │           │   └── EndToEndTests.java
│       │           ├── performance/
│       │           │   └── PerformanceTests.java
│       │           └── smoke/
│       │               └── SmokeTests.java
│       └── resources/
│           ├── testng.xml
│           ├── testng-parallel.xml
│           ├── testng-smoke.xml
│           └── allure.properties
├── docker/
│   ├── Dockerfile
│   └── docker-compose.yml
├── scripts/
│   ├── run-tests.sh
│   ├── run-smoke-tests.sh
│   └── generate-reports.sh
├── .github/
│   └── workflows/
│       └── ci-cd.yml
├── jenkins/
│   └── Jenkinsfile
├── pom.xml
├── README.md
└── .gitignore
```

## Prerequisites

- **Java**: JDK 11 or higher
- **Maven**: 3.6.0 or higher
- **IDE**: IntelliJ IDEA or Eclipse (optional)
- **Git**: Version control system

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/demo/java-rest-assured-api-testing-framework.git
cd java-rest-assured-api-testing-framework
```

### 2. Install Dependencies

```bash
mvn clean install -DskipTests
```

### 3. Configure Environment

```bash
# Copy configuration template
cp src/main/resources/config/application.properties.template src/main/resources/config/application.properties

# Edit configuration
nano src/main/resources/config/application.properties
```

### 4. Run Sample Tests

```bash
# Run smoke tests
mvn clean test -Dsuite=smoke

# Run all tests
mvn clean test

# Run specific test class
mvn clean test -Dtest=UserApiTests
```

## Quick Start

### 1. Basic API Test

```java
import com.framework.core.BaseTest;
import com.framework.core.APIClient;
import io.restassured.response.Response;
import org.testng.annotations.Test;

public class QuickStartTest extends BaseTest {
    
    @Test
    public void testGetUser() {
        Response response = APIClient.getInstance()
            .get("/users/1")
            .then()
            .statusCode(200)
            .extract().response();
        
        // Validate response
        assertThat(response.jsonPath().getString("name")).isNotNull();
    }
    
    @Test
    public void testCreateUser() {
        String requestBody = """
            {
                "name": "John Doe",
                "email": "john@example.com",
                "phone": "1234567890"
            }
            """;
        
        Response response = APIClient.getInstance()
            .post("/users", requestBody)
            .then()
            .statusCode(201)
            .extract().response();
        
        // Validate created user
        assertThat(response.jsonPath().getString("id")).isNotNull();
    }
}
```

### 2. Data-Driven Test

```java
@Test(dataProvider = "userData")
public void testCreateUserWithData(String name, String email, String phone) {
    User user = User.builder()
        .name(name)
        .email(email)
        .phone(phone)
        .build();
    
    Response response = APIClient.getInstance()
        .post("/users", user)
        .then()
        .statusCode(201)
        .extract().response();
    
    // Validate response
    assertThat(response.jsonPath().getString("email")).isEqualTo(email);
}

@DataProvider(name = "userData")
public Object[][] userData() {
    return ExcelUtils.getTestData("users.xlsx", "UserData");
}
```

### 3. Schema Validation

```java
@Test
public void testUserSchemaValidation() {
    APIClient.getInstance()
        .get("/users/1")
        .then()
        .statusCode(200)
        .body(matchesJsonSchema(getSchema("user-schema.json")));
}
```

## Framework Architecture

### Core Components

#### 1. APIClient
- Centralized HTTP client with request/response handling
- Authentication management
- Request/response logging
- Error handling and retry logic

#### 2. BaseTest
- Common test setup and teardown
- Test data management
- Reporting integration
- Configuration management

#### 3. RequestBuilder
- Fluent API for building requests
- Header management
- Query parameter handling
- Request body serialization

#### 4. ResponseValidator
- Response assertion utilities
- Schema validation
- Data extraction helpers
- Performance validation

### Configuration Management

The framework supports multiple environments with centralized configuration:

```properties
# application.properties
base.url=https://api.example.com
auth.type=bearer
auth.token=${AUTH_TOKEN}
timeout.connection=30000
timeout.read=60000
retry.count=3
retry.delay=1000
```

### Test Data Management

#### Excel Integration
```java
// Read test data from Excel
Object[][] testData = ExcelUtils.getTestData("users.xlsx", "UserData");

// Write test results to Excel
ExcelUtils.writeTestResults("results.xlsx", testResults);
```

#### JSON Test Data
```java
// Load test data from JSON
List<User> users = JsonUtils.loadTestData("users.json", User.class);

// Generate dynamic test data
User user = DataGenerator.generateUser();
```

## Test Categories

### 1. Smoke Tests
Basic functionality validation:
- Health check endpoints
- Authentication tests
- Critical path validation

### 2. API Tests
Comprehensive API testing:
- CRUD operations
- Input validation
- Error handling
- Edge cases

### 3. Integration Tests
Cross-service testing:
- Workflow validation
- Data consistency
- Service dependencies

### 4. Performance Tests
Response time validation:
- Latency testing
- Throughput testing
- Stress testing

## Advanced Features

### 1. Database Integration

```java
@Test
public void testUserFromDatabase() {
    // Get user from database
    User dbUser = DatabaseUtils.getUserById(1);
    
    // Validate via API
    Response response = APIClient.getInstance()
        .get("/users/" + dbUser.getId())
        .then()
        .statusCode(200)
        .extract().response();
    
    // Compare data
    assertThat(response.jsonPath().getString("name")).isEqualTo(dbUser.getName());
}
```

### 2. File Upload Testing

```java
@Test
public void testFileUpload() {
    File file = new File("test-file.pdf");
    
    Response response = APIClient.getInstance()
        .multipart("file", file)
        .post("/upload")
        .then()
        .statusCode(200)
        .extract().response();
    
    assertThat(response.jsonPath().getString("filename")).isEqualTo("test-file.pdf");
}
```

### 3. Authentication Testing

```java
@Test
public void testOAuth2Authentication() {
    String token = AuthUtils.getOAuth2Token("client_id", "client_secret");
    
    Response response = APIClient.getInstance()
        .auth(token)
        .get("/protected-resource")
        .then()
        .statusCode(200)
        .extract().response();
}
```

## Reporting

### 1. ExtentReports
Rich HTML reports with:
- Test execution timeline
- Request/response details
- Screenshots and logs
- Test categorization

### 2. Allure Reports
Interactive reports with:
- Test history
- Trend analysis
- Test categorization
- Attachments

### 3. Custom Reporting
```java
@Test
public void testWithCustomReporting() {
    ExtentTest test = ExtentManager.createTest("User API Test");
    
    try {
        Response response = APIClient.getInstance()
            .get("/users/1")
            .then()
            .statusCode(200)
            .extract().response();
        
        test.pass("API call successful");
        test.info("Response: " + response.asString());
    } catch (Exception e) {
        test.fail("Test failed: " + e.getMessage());
        throw e;
    }
}
```

## CI/CD Integration

### Jenkins Pipeline
```groovy
pipeline {
    agent any
    
    stages {
        stage('Test') {
            steps {
                sh 'mvn clean test'
            }
        }
        
        stage('Reports') {
            steps {
                publishHTML([
                    allowMissing: false,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: 'target/reports',
                    reportFiles: 'index.html',
                    reportName: 'Test Report'
                ])
            }
        }
    }
}
```

### GitHub Actions
```yaml
name: API Tests
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Set up JDK 11
      uses: actions/setup-java@v2
      with:
        java-version: '11'
        distribution: 'temurin'
    
    - name: Run tests
      run: mvn clean test
    
    - name: Generate reports
      run: mvn allure:report
```

## Docker Support

### Run Tests in Docker
```bash
# Build Docker image
docker build -t api-tests .

# Run tests
docker run --rm -v $(pwd)/target:/app/target api-tests

# Run with environment variables
docker run --rm -e BASE_URL=https://api.staging.com api-tests
```

### Docker Compose
```yaml
version: '3.8'
services:
  api-tests:
    build: .
    environment:
      - BASE_URL=https://api.example.com
      - AUTH_TOKEN=${AUTH_TOKEN}
    volumes:
      - ./target:/app/target
```

## Best Practices

### 1. Test Organization
- Group related tests in test classes
- Use descriptive test names
- Implement proper test data cleanup
- Use test categories for different test types

### 2. Data Management
- Use external test data files
- Implement data generators for dynamic data
- Clean up test data after execution
- Use database transactions for data isolation

### 3. Error Handling
- Implement comprehensive error handling
- Use custom exceptions for better error messages
- Log detailed error information
- Implement retry mechanisms for flaky tests

### 4. Performance
- Use parallel execution for faster test runs
- Implement connection pooling
- Cache authentication tokens
- Use efficient data structures

### 5. Maintenance
- Keep dependencies updated
- Regular code reviews
- Implement code quality checks
- Monitor test execution metrics

## Troubleshooting

### Common Issues

#### 1. Connection Timeouts
```java
// Increase timeout values
APIClient.getInstance()
    .timeout(60000)
    .get("/endpoint");
```

#### 2. Authentication Failures
```java
// Verify token validity
String token = AuthUtils.refreshToken();
APIClient.getInstance().auth(token);
```

#### 3. Schema Validation Errors
```java
// Debug schema validation
Response response = APIClient.getInstance().get("/users/1");
System.out.println("Response: " + response.asString());
System.out.println("Schema: " + getSchema("user-schema.json"));
```

### Debug Mode
```bash
# Enable debug logging
mvn clean test -Dlog.level=DEBUG

# Run single test with debug
mvn clean test -Dtest=UserApiTests#testGetUser -Ddebug=true
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Implement your changes
4. Add tests for new functionality
5. Run all tests to ensure nothing is broken
6. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions:
- Create an issue in the repository
- Check the documentation
- Contact the development team

---

**Happy Testing!** 🚀 