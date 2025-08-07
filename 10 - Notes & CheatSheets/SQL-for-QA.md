# 🗄️ SQL for QA CheatSheet

<div align="center">

![SQL](https://img.shields.io/badge/SQL-Database%20Testing-blue?style=flat)
![QA](https://img.shields.io/badge/QA-Data%20Validation-green?style=flat)
![Queries](https://img.shields.io/badge/Queries-Common%20Patterns-orange?style=flat)

**Essential SQL Queries for QA Data Validation & Testing**

</div>

---

## 🔍 Basic SELECT Queries

### Simple Data Retrieval
```sql
-- Get all users
SELECT * FROM users;

-- Get specific columns
SELECT id, username, email FROM users;

-- Get first 10 records
SELECT * FROM users LIMIT 10;

-- Get unique values
SELECT DISTINCT status FROM orders;
```

### Filtering Data
```sql
-- Filter by condition
SELECT * FROM users WHERE status = 'active';

-- Multiple conditions
SELECT * FROM orders 
WHERE status = 'completed' 
AND total_amount > 100;

-- Pattern matching
SELECT * FROM users 
WHERE email LIKE '%@gmail.com';

-- Date filtering
SELECT * FROM orders 
WHERE created_date >= '2024-01-01';
```

---

## 📊 Data Validation Queries

### User Registration Validation
```sql
-- Check for duplicate emails
SELECT email, COUNT(*) as count
FROM users 
GROUP BY email 
HAVING COUNT(*) > 1;

-- Check for invalid email format
SELECT * FROM users 
WHERE email NOT LIKE '%@%.%';

-- Check for empty required fields
SELECT * FROM users 
WHERE username IS NULL 
OR email IS NULL 
OR password IS NULL;
```

### Order Data Validation
```sql
-- Check for orders without users
SELECT o.* FROM orders o
LEFT JOIN users u ON o.user_id = u.id
WHERE u.id IS NULL;

-- Check for negative amounts
SELECT * FROM orders 
WHERE total_amount < 0;

-- Check for future order dates
SELECT * FROM orders 
WHERE order_date > CURRENT_DATE;
```

### Product Data Validation
```sql
-- Check for products without categories
SELECT p.* FROM products p
LEFT JOIN categories c ON p.category_id = c.id
WHERE c.id IS NULL;

-- Check for zero or negative prices
SELECT * FROM products 
WHERE price <= 0;

-- Check for duplicate product names
SELECT name, COUNT(*) as count
FROM products 
GROUP BY name 
HAVING COUNT(*) > 1;
```

---

## 🔗 JOIN Queries for Testing

### Inner JOIN Examples
```sql
-- Get user details with their orders
SELECT u.username, u.email, o.order_id, o.total_amount
FROM users u
INNER JOIN orders o ON u.id = o.user_id;

-- Get product details with category
SELECT p.name, p.price, c.category_name
FROM products p
INNER JOIN categories c ON p.category_id = c.id;
```

### Left JOIN Examples
```sql
-- Get all users and their orders (including users with no orders)
SELECT u.username, u.email, o.order_id
FROM users u
LEFT JOIN orders o ON u.id = o.user_id;

-- Find users without orders
SELECT u.* FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE o.id IS NULL;
```

### Right JOIN Examples
```sql
-- Get all orders and user details (including orphaned orders)
SELECT o.order_id, o.total_amount, u.username
FROM users u
RIGHT JOIN orders o ON u.id = o.user_id;
```

---

## 📈 Aggregation Queries

### Count Queries
```sql
-- Total number of users
SELECT COUNT(*) as total_users FROM users;

-- Users by status
SELECT status, COUNT(*) as count
FROM users 
GROUP BY status;

-- Orders per user
SELECT u.username, COUNT(o.id) as order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.username;
```

### Sum and Average Queries
```sql
-- Total revenue
SELECT SUM(total_amount) as total_revenue 
FROM orders 
WHERE status = 'completed';

-- Average order value
SELECT AVG(total_amount) as avg_order_value 
FROM orders;

-- Revenue by month
SELECT 
    DATE_FORMAT(order_date, '%Y-%m') as month,
    SUM(total_amount) as revenue
FROM orders 
GROUP BY month 
ORDER BY month;
```

### Min and Max Queries
```sql
-- Highest and lowest order amounts
SELECT 
    MIN(total_amount) as min_order,
    MAX(total_amount) as max_order
FROM orders;

-- Most expensive product
SELECT name, price 
FROM products 
WHERE price = (SELECT MAX(price) FROM products);
```

---

## 🔄 Data Comparison Queries

### Before/After Testing
```sql
-- Compare data before and after test
SELECT 
    'Before' as period,
    COUNT(*) as user_count
FROM users_backup
UNION ALL
SELECT 
    'After' as period,
    COUNT(*) as user_count
FROM users;

-- Check for data changes
SELECT 
    u1.id,
    u1.username as old_username,
    u2.username as new_username
FROM users_backup u1
INNER JOIN users u2 ON u1.id = u2.id
WHERE u1.username != u2.username;
```

### Data Integrity Checks
```sql
-- Check referential integrity
SELECT 'Orphaned orders' as issue, COUNT(*) as count
FROM orders o
LEFT JOIN users u ON o.user_id = u.id
WHERE u.id IS NULL
UNION ALL
SELECT 'Orphaned order_items' as issue, COUNT(*) as count
FROM order_items oi
LEFT JOIN orders o ON oi.order_id = o.id
WHERE o.id IS NULL;
```

---

## 🧪 Test Data Management

### Creating Test Data
```sql
-- Insert test user
INSERT INTO users (username, email, password, status)
VALUES ('testuser', 'test@example.com', 'password123', 'active');

-- Insert test order
INSERT INTO orders (user_id, total_amount, status, order_date)
VALUES (1, 99.99, 'pending', CURRENT_DATE);
```

### Cleaning Test Data
```sql
-- Delete test users
DELETE FROM users 
WHERE email LIKE '%test%';

-- Delete test orders
DELETE FROM orders 
WHERE user_id IN (
    SELECT id FROM users WHERE email LIKE '%test%'
);
```

### Data Reset for Testing
```sql
-- Reset user status
UPDATE users 
SET status = 'inactive' 
WHERE status = 'active';

-- Reset order status
UPDATE orders 
SET status = 'pending' 
WHERE status = 'completed';
```

---

## 🔍 Advanced Testing Queries

### Performance Testing Data
```sql
-- Check for slow queries (if you have query logs)
SELECT 
    query_text,
    execution_time,
    created_at
FROM query_logs 
WHERE execution_time > 1000
ORDER BY execution_time DESC;
```

### Security Testing Queries
```sql
-- Check for SQL injection vulnerabilities
SELECT * FROM users 
WHERE username = 'admin' OR '1'='1';

-- Check for weak passwords
SELECT * FROM users 
WHERE password IN ('password', '123456', 'admin');
```

### Load Testing Data
```sql
-- Generate load test data
INSERT INTO orders (user_id, total_amount, status)
SELECT 
    FLOOR(RAND() * 100) + 1,
    RAND() * 1000,
    'pending'
FROM information_schema.tables
LIMIT 1000;
```

---

## 📊 Reporting Queries

### Test Execution Reports
```sql
-- Test results summary
SELECT 
    test_suite,
    COUNT(*) as total_tests,
    SUM(CASE WHEN status = 'PASS' THEN 1 ELSE 0 END) as passed,
    SUM(CASE WHEN status = 'FAIL' THEN 1 ELSE 0 END) as failed
FROM test_results 
GROUP BY test_suite;
```

### Bug Reports
```sql
-- Bugs by severity
SELECT 
    severity,
    COUNT(*) as bug_count,
    AVG(DATEDIFF(resolved_date, created_date)) as avg_resolution_days
FROM bugs 
GROUP BY severity;
```

### User Activity Reports
```sql
-- Daily active users
SELECT 
    DATE(login_time) as date,
    COUNT(DISTINCT user_id) as active_users
FROM user_logins 
GROUP BY DATE(login_time)
ORDER BY date DESC;
```

---

## 🛠️ Database Tools for QA

### MySQL Commands
```sql
-- Show database structure
DESCRIBE users;
SHOW TABLES;
SHOW CREATE TABLE users;

-- Check database size
SELECT 
    table_name,
    ROUND(((data_length + index_length) / 1024 / 1024), 2) AS 'Size (MB)'
FROM information_schema.tables 
WHERE table_schema = 'your_database';
```

### PostgreSQL Commands
```sql
-- Show table structure
\d users;
\dt;
\d+ users;

-- Check database size
SELECT 
    pg_size_pretty(pg_total_relation_size('users')) as table_size;
```

---

## 🚀 Best Practices

### Query Optimization
- **Use indexes** on frequently queried columns
- **Limit results** with LIMIT clause
- **Use specific columns** instead of SELECT *
- **Avoid subqueries** when possible

### Data Validation
- **Always check for NULL values**
- **Validate data types** and formats
- **Check referential integrity**
- **Verify business rules**

### Security
- **Use parameterized queries** to prevent SQL injection
- **Limit database permissions** for QA users
- **Never use production data** for testing
- **Sanitize test data** before cleanup

---

<div align="center">
  <i>Part of <a href="https://github.com/Yasin-asif/SQA-Professional-Portfolio">Muhammad Yasin's SQA Professional Portfolio</a></i>
</div> 