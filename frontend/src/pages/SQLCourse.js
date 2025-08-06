import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaDatabase, FaCode, FaPlay, FaCopy, FaChevronDown, FaChevronUp, FaBookOpen, FaQuestionCircle } from 'react-icons/fa';

const SQLCourse = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [copiedCode, setCopiedCode] = useState('');
  const [expandedTopics, setExpandedTopics] = useState({});

  const copyToClipboard = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  const toggleTopic = (topicId) => {
    setExpandedTopics(prev => ({
      ...prev,
      [topicId]: !prev[topicId]
    }));
  };

  const courseContent = {
    introduction: {
      title: '🔰 Introduction to SQL & Databases',
      topics: [
        {
          id: 'what-is-database',
          title: 'What is a Database?',
          explanation: 'A database is an organized collection of structured information, or data, typically stored electronically in a computer system. It allows for efficient storage, retrieval, and management of data.',
          code: `-- Database Example: Company Database
-- Contains multiple tables like employees, departments, projects
-- Each table has rows (records) and columns (fields)

-- Example structure:
EMPLOYEES Table:
+----+----------+------------+--------+
| ID | Name     | Department | Salary |
+----+----------+------------+--------+
| 1  | John Doe | IT         | 75000  |
| 2  | Jane Smith| HR        | 65000  |
+----+----------+------------+--------+`,
          output: 'Database concept understood!\nKey benefits:\n• Data organization\n• Data integrity\n• Concurrent access\n• Data security\n• Backup and recovery'
        },
        {
          id: 'what-is-rdbms',
          title: 'What is RDBMS?',
          explanation: 'RDBMS (Relational Database Management System) is software that manages relational databases. It uses tables with rows and columns, and relationships between tables.',
          code: `-- RDBMS Examples: MySQL, PostgreSQL, Oracle, SQL Server
-- Key Features:
-- 1. Tables with relationships
-- 2. ACID properties (Atomicity, Consistency, Isolation, Durability)
-- 3. SQL support
-- 4. Data integrity constraints

-- Example of relationships:
CUSTOMERS table ←→ ORDERS table (One-to-Many)
ORDERS table ←→ ORDER_ITEMS table (One-to-Many)
PRODUCTS table ←→ ORDER_ITEMS table (One-to-Many)`,
          output: 'RDBMS Features:\n✅ Data stored in tables\n✅ Relationships between tables\n✅ ACID compliance\n✅ SQL query language\n✅ Data integrity\n✅ Concurrent user access'
        }
      ]
    },
    datatypes: {
      title: '📦 Data Types in SQL',
      topics: [
        {
          id: 'numeric-types',
          title: 'Numeric Data Types',
          explanation: 'SQL supports various numeric types for storing integers, decimals, and floating-point numbers with different precision and storage requirements.',
          code: `-- Numeric Data Types Examples
CREATE TABLE numeric_examples (
    -- Integer types
    tiny_number TINYINT,        -- -128 to 127 (1 byte)
    small_number SMALLINT,      -- -32,768 to 32,767 (2 bytes)
    medium_number MEDIUMINT,    -- -8,388,608 to 8,388,607 (3 bytes)
    regular_number INT,         -- -2,147,483,648 to 2,147,483,647 (4 bytes)
    big_number BIGINT,          -- Very large range (8 bytes)
    
    -- Decimal types
    price DECIMAL(10,2),        -- Fixed-point: 99999999.99
    percentage FLOAT,           -- Single precision floating-point
    scientific DOUBLE,          -- Double precision floating-point
    
    -- Unsigned variants (positive only)
    positive_int INT UNSIGNED,  -- 0 to 4,294,967,295
    auto_id INT AUTO_INCREMENT  -- Auto-incrementing integer
);

-- Insert examples
INSERT INTO numeric_examples (
    tiny_number, small_number, regular_number, 
    price, percentage, positive_int
) VALUES (
    127, 32000, 1000000, 
    999.99, 85.5, 500
);`,
          output: 'Numeric types created successfully!\n\nStorage comparison:\n• TINYINT: 1 byte\n• SMALLINT: 2 bytes\n• INT: 4 bytes\n• BIGINT: 8 bytes\n• DECIMAL: Fixed precision\n• FLOAT/DOUBLE: Approximate values'
        },
        {
          id: 'string-types',
          title: 'String Data Types',
          explanation: 'String data types store text data with different storage methods and size limitations.',
          code: `-- String Data Types Examples
CREATE TABLE string_examples (
    -- Fixed length strings
    country_code CHAR(2),           -- Always 2 characters: 'US', 'UK'
    status_flag CHAR(1),            -- Single character: 'Y', 'N'
    
    -- Variable length strings
    first_name VARCHAR(50),         -- Up to 50 characters
    email VARCHAR(255),             -- Up to 255 characters
    
    -- Text types for large content
    description TEXT,               -- Up to 65,535 characters
    article MEDIUMTEXT,             -- Up to 16,777,215 characters
    book_content LONGTEXT,          -- Up to 4,294,967,295 characters
    
    -- Binary data
    profile_image BLOB,             -- Binary data
    document MEDIUMBLOB             -- Larger binary data
);

-- Insert examples
INSERT INTO string_examples (
    country_code, status_flag, first_name, 
    email, description
) VALUES (
    'US', 'Y', 'John Doe', 
    'john.doe@email.com', 
    'This is a sample description text.'
);

-- String functions examples
SELECT 
    UPPER(first_name) AS uppercase_name,
    LENGTH(email) AS email_length,
    SUBSTRING(description, 1, 20) AS short_desc,
    CONCAT(first_name, ' - ', country_code) AS name_country
FROM string_examples;`,
          output: 'String types demonstration:\n\n+----------------+-------------+------------+\n| uppercase_name | email_length| short_desc |\n+----------------+-------------+------------+\n| JOHN DOE       |          19 | This is a sample   |\n+----------------+-------------+------------+\n\nString functions:\n✅ UPPER/LOWER - Case conversion\n✅ LENGTH - String length\n✅ SUBSTRING - Extract part\n✅ CONCAT - Join strings'
        }
      ]
    },
    ddl: {
      title: '🔨 DDL - Data Definition Language',
      topics: [
        {
          id: 'create-operations',
          title: 'CREATE Operations',
          explanation: 'CREATE statements are used to create database objects like databases, tables, indexes, and views.',
          code: `-- CREATE DATABASE
CREATE DATABASE company_management;
USE company_management;

-- CREATE TABLE with constraints
CREATE TABLE departments (
    dept_id INT AUTO_INCREMENT PRIMARY KEY,
    dept_name VARCHAR(100) NOT NULL UNIQUE,
    location VARCHAR(100),
    budget DECIMAL(12,2) DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE employees (
    emp_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(20),
    hire_date DATE NOT NULL,
    salary DECIMAL(10,2) CHECK (salary > 0),
    dept_id INT,
    manager_id INT,
    is_active BOOLEAN DEFAULT TRUE,
    
    -- Foreign key constraints
    FOREIGN KEY (dept_id) REFERENCES departments(dept_id) 
        ON DELETE SET NULL ON UPDATE CASCADE,
    FOREIGN KEY (manager_id) REFERENCES employees(emp_id) 
        ON DELETE SET NULL
);`,
          output: 'Database objects created successfully!\n\n📊 Created Objects:\n✅ Database: company_management\n✅ Tables: departments, employees\n✅ Constraints: PRIMARY KEY, FOREIGN KEY, UNIQUE, CHECK\n\nTable relationships established:\n• departments ← employees (One-to-Many)\n• employees ← employees (Self-referencing for manager)'
        }
      ]
    },
    dml: {
      title: '🧹 DML - Data Manipulation Language',
      topics: [
        {
          id: 'insert-operations',
          title: 'INSERT Operations',
          explanation: 'INSERT statements add new records to database tables. You can insert single or multiple rows at once.',
          code: `-- Insert single record
INSERT INTO departments (dept_name, location, budget)
VALUES ('Information Technology', 'New York', 500000.00);

-- Insert multiple records
INSERT INTO departments (dept_name, location, budget) VALUES
('Human Resources', 'Chicago', 200000.00),
('Finance', 'Boston', 300000.00),
('Marketing', 'Los Angeles', 250000.00);

-- Insert employees
INSERT INTO employees (first_name, last_name, email, hire_date, salary, dept_id) VALUES
('John', 'Doe', 'john.doe@company.com', '2023-01-15', 75000.00, 1),
('Jane', 'Smith', 'jane.smith@company.com', '2023-02-01', 80000.00, 1),
('Mike', 'Johnson', 'mike.johnson@company.com', '2023-03-10', 65000.00, 2),
('Sarah', 'Wilson', 'sarah.wilson@company.com', '2023-04-05', 70000.00, 3);

-- Insert with SELECT (copy data)
INSERT INTO employees_backup 
SELECT * FROM employees WHERE hire_date >= '2023-01-01';`,
          output: 'Records inserted successfully!\n\n📊 Insertion Results:\n✅ 4 departments added\n✅ 4 employees added\n✅ Data copied to backup table\n\nDepartments:\n• IT (Budget: $500,000)\n• HR (Budget: $200,000)\n• Finance (Budget: $300,000)\n• Marketing (Budget: $250,000)'
        }
      ]
    },
    select: {
      title: '🔍 SELECT Statement & Filtering',
      topics: [
        {
          id: 'basic-select',
          title: 'Basic SELECT Operations',
          explanation: 'SELECT is the most important SQL statement for retrieving data from tables with various filtering and sorting options.',
          code: `-- Basic SELECT
SELECT * FROM employees;

-- Select specific columns
SELECT first_name, last_name, salary FROM employees;

-- SELECT with aliases
SELECT 
    first_name AS 'First Name',
    last_name AS 'Last Name',
    salary AS 'Monthly Salary'
FROM employees;

-- WHERE clause filtering
SELECT * FROM employees WHERE salary > 70000;

-- Multiple conditions
SELECT * FROM employees 
WHERE salary BETWEEN 65000 AND 80000 
AND dept_id IN (1, 2);

-- Pattern matching with LIKE
SELECT * FROM employees WHERE first_name LIKE 'J%';
SELECT * FROM employees WHERE email LIKE '%@company.com';

-- NULL handling
SELECT * FROM employees WHERE manager_id IS NULL;
SELECT * FROM employees WHERE phone IS NOT NULL;

-- Sorting results
SELECT * FROM employees ORDER BY salary DESC, hire_date ASC;

-- Limiting results
SELECT * FROM employees ORDER BY salary DESC LIMIT 3;`,
          output: '+--------+------------+-----------+------------------------+----------+
| emp_id | first_name | last_name | email                  | salary   |
+--------+------------+-----------+------------------------+----------+
|      2 | Jane       | Smith     | jane.smith@company.com | 80000.00 |
|      1 | John       | Doe       | john.doe@company.com   | 75000.00 |
|      4 | Sarah      | Wilson    | sarah.wilson@company.com| 70000.00 |
+--------+------------+-----------+------------------------+----------+

Filtering Results:
✅ WHERE clause for conditions
✅ LIKE for pattern matching
✅ BETWEEN for ranges
✅ IN for multiple values
✅ ORDER BY for sorting
✅ LIMIT for pagination'
        }
      ]
    },
    joins: {
      title: '🔗 SQL Joins & Relationships',
      topics: [
        {
          id: 'join-types',
          title: 'Types of JOINs',
          explanation: 'JOINs combine data from multiple tables based on relationships. Different types serve different purposes.',
          code: `-- INNER JOIN: Returns matching records from both tables
SELECT 
    e.first_name,
    e.last_name,
    e.salary,
    d.dept_name
FROM employees e
INNER JOIN departments d ON e.dept_id = d.dept_id;

-- LEFT JOIN: All records from left table + matching from right
SELECT 
    e.first_name,
    e.last_name,
    COALESCE(d.dept_name, 'No Department') AS department
FROM employees e
LEFT JOIN departments d ON e.dept_id = d.dept_id;

-- RIGHT JOIN: All records from right table + matching from left
SELECT 
    d.dept_name,
    COUNT(e.emp_id) AS employee_count
FROM employees e
RIGHT JOIN departments d ON e.dept_id = d.dept_id
GROUP BY d.dept_id, d.dept_name;

-- SELF JOIN: Join table with itself
SELECT 
    e.first_name AS employee,
    m.first_name AS manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.emp_id;

-- Multiple table JOIN
SELECT 
    e.first_name,
    e.last_name,
    d.dept_name,
    p.project_name
FROM employees e
JOIN departments d ON e.dept_id = d.dept_id
JOIN employee_projects ep ON e.emp_id = ep.emp_id
JOIN projects p ON ep.project_id = p.project_id;`,
          output: 'JOIN Results:

+------------+-----------+----------+----------------------+
| first_name | last_name | salary   | dept_name           |
+------------+-----------+----------+----------------------+
| John       | Doe       | 75000.00 | Information Technology|
| Jane       | Smith     | 80000.00 | Information Technology|
| Mike       | Johnson   | 65000.00 | Human Resources     |
| Sarah      | Wilson    | 70000.00 | Finance             |
+------------+-----------+----------+----------------------+

JOIN Types Summary:
✅ INNER JOIN: Only matching records
✅ LEFT JOIN: All left + matching right
✅ RIGHT JOIN: All right + matching left
✅ SELF JOIN: Table joined with itself'
        }
      ]
    },
    functions: {
      title: '🧮 Aggregate Functions & GROUP BY',
      topics: [
        {
          id: 'aggregate-functions',
          title: 'Aggregate Functions',
          explanation: 'Aggregate functions perform calculations on multiple rows and return a single result.',
          code: `-- Basic aggregate functions
SELECT 
    COUNT(*) AS total_employees,
    AVG(salary) AS average_salary,
    SUM(salary) AS total_payroll
FROM employees;

-- GROUP BY with aggregates
SELECT 
    d.dept_name,
    COUNT(e.emp_id) AS employee_count,
    AVG(e.salary) AS avg_salary
FROM employees e
JOIN departments d ON e.dept_id = d.dept_id
GROUP BY d.dept_id, d.dept_name;`,
          output: 'Aggregate Results:
📊 Total: 4 employees, Avg: $72,500
📈 IT: 2 employees, Finance: 1 employee'
        }
      ]
    },
    subqueries: {
      title: '🔍 Subqueries & CTEs',
      topics: [
        {
          id: 'subquery-types',
          title: 'Subqueries and Common Table Expressions',
          explanation: 'Subqueries are nested queries that can return scalar values, rows, or tables. CTEs provide readable alternatives.',
          code: `-- Scalar subquery
SELECT name, salary,
    (SELECT AVG(salary) FROM employees) AS company_avg
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);

-- Correlated subquery
SELECT e1.name, e1.salary
FROM employees e1
WHERE e1.salary > (
    SELECT AVG(e2.salary)
    FROM employees e2
    WHERE e2.dept_id = e1.dept_id
);

-- Common Table Expression (CTE)
WITH high_earners AS (
    SELECT * FROM employees WHERE salary > 70000
),
dept_stats AS (
    SELECT dept_id, COUNT(*) as emp_count
    FROM high_earners
    GROUP BY dept_id
)
SELECT d.dept_name, ds.emp_count
FROM dept_stats ds
JOIN departments d ON ds.dept_id = d.dept_id;`,
          output: 'Subquery Results:
✅ Employees above average found
✅ Department comparisons completed
✅ CTE provided clean, readable solution'}
      ]
    },
    advanced: {
      title: '🎯 Advanced SQL Features',
      topics: [
        {
          id: 'window-functions',
          title: 'Window Functions & Analytics',
          explanation: 'Window functions perform calculations across related rows without grouping, providing powerful analytical capabilities.',
          code: `-- ROW_NUMBER and RANK
SELECT 
    name, salary,
    ROW_NUMBER() OVER (ORDER BY salary DESC) as row_num,
    RANK() OVER (ORDER BY salary DESC) as rank_num,
    DENSE_RANK() OVER (ORDER BY salary DESC) as dense_rank
FROM employees;

-- Partition by department
SELECT 
    name, dept_id, salary,
    AVG(salary) OVER (PARTITION BY dept_id) as dept_avg,
    salary - AVG(salary) OVER (PARTITION BY dept_id) as diff_from_avg
FROM employees;

-- LAG and LEAD functions
SELECT 
    name, hire_date, salary,
    LAG(salary) OVER (ORDER BY hire_date) as prev_salary,
    LEAD(salary) OVER (ORDER BY hire_date) as next_salary
FROM employees;

-- Running totals
SELECT 
    name, salary,
    SUM(salary) OVER (ORDER BY hire_date ROWS UNBOUNDED PRECEDING) as running_total
FROM employees;`,
          output: 'Window Function Results:
🏆 Rankings: Jane(1), John(2), Sarah(3)
📊 Dept Averages: IT=$77,500, Finance=$70,000
📈 Running Total: $75K → $155K → $220K → $290K
⚡ Advanced analytics completed successfully!'
        }
      ]
    },
    procedures: {
      title: '⚙️ Stored Procedures & Functions',
      topics: [
        {
          id: 'stored-procedures',
          title: 'Stored Procedures and Functions',
          explanation: 'Reusable SQL code blocks that accept parameters and perform complex database operations efficiently.',
          code: `-- Simple stored procedure
DELIMITER //
CREATE PROCEDURE GetEmployeesByDept(IN dept_id INT)
BEGIN
    SELECT name, salary FROM employees
    WHERE employees.dept_id = dept_id
    ORDER BY salary DESC;
END //
DELIMITER ;

-- Call procedure
CALL GetEmployeesByDept(1);

-- Procedure with OUT parameters
DELIMITER //
CREATE PROCEDURE GetDeptStats(
    IN dept_id INT,
    OUT emp_count INT,
    OUT avg_salary DECIMAL(10,2)
)
BEGIN
    SELECT COUNT(*), AVG(salary)
    INTO emp_count, avg_salary
    FROM employees
    WHERE employees.dept_id = dept_id;
END //
DELIMITER ;

-- Stored function
DELIMITER //
CREATE FUNCTION CalculateBonus(salary DECIMAL(10,2))
RETURNS DECIMAL(10,2)
DETERMINISTIC
BEGIN
    IF salary > 75000 THEN
        RETURN salary * 0.15;
    ELSE
        RETURN salary * 0.10;
    END IF;
END //
DELIMITER ;`,
          output: 'Stored Procedures Created:
📞 GetEmployeesByDept: Returns filtered employees
📊 GetDeptStats: Returns count and average
💰 CalculateBonus: Returns bonus amount
✅ Reusable database logic implemented!'
        }
      ]
    },
    transactions: {
      title: '🔐 Transactions & ACID',
      topics: [
        {
          id: 'transaction-control',
          title: 'Transaction Management',
          explanation: 'Transactions ensure data integrity by grouping operations that must all succeed or all fail together.',
          code: `-- Basic transaction
START TRANSACTION;

UPDATE accounts SET balance = balance - 1000 WHERE id = 1;
UPDATE accounts SET balance = balance + 1000 WHERE id = 2;

-- Check and commit
IF @@ERROR = 0
    COMMIT;
ELSE
    ROLLBACK;

-- Savepoints
START TRANSACTION;

INSERT INTO departments (name) VALUES ('Research');
SAVEPOINT sp1;

INSERT INTO employees (name, dept_id) VALUES ('Alice', LAST_INSERT_ID());
SAVEPOINT sp2;

-- Rollback to savepoint if needed
ROLLBACK TO sp1;

COMMIT;

-- Isolation levels
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;`,
          output: 'Transaction Results:
💳 Money transfer: $1000 moved safely
🔄 ACID Properties maintained:
  • Atomicity: All or nothing
  • Consistency: Data integrity
  • Isolation: Concurrent safety
  • Durability: Permanent changes
✅ Transaction completed successfully!'
        }
      ]
    },
    performance: {
      title: '📈 Performance & Optimization',
      topics: [
        {
          id: 'indexes-optimization',
          title: 'Indexes and Query Optimization',
          explanation: 'Indexes dramatically improve query performance but require careful planning and maintenance.',
          code: `-- Create indexes
CREATE INDEX idx_employee_email ON employees(email);
CREATE INDEX idx_dept_salary ON employees(dept_id, salary);

-- Query optimization
EXPLAIN SELECT * FROM employees WHERE email = 'john@company.com';

-- Use specific columns
SELECT name, salary FROM employees WHERE dept_id = 1;

-- Optimize JOINs
SELECT e.name, d.dept_name
FROM employees e
INNER JOIN departments d ON e.dept_id = d.dept_id;`,
          output: 'Performance improved by 95%
⚡ Email lookups: 0.001s
🎯 Optimized JOINs implemented'
        }
      ]
    },
    views: {
      title: '📜 Views & Virtual Tables',
      topics: [
        {
          id: 'create-views',
          title: 'Creating and Managing Views',
          explanation: 'Views are virtual tables that simplify complex queries and provide data security layers.',
          code: `-- Create employee summary view
CREATE VIEW employee_summary AS
SELECT 
    CONCAT(first_name, ' ', last_name) AS full_name,
    email, salary, d.dept_name
FROM employees e
JOIN departments d ON e.dept_id = d.dept_id
WHERE e.is_active = TRUE;

-- Use the view
SELECT * FROM employee_summary WHERE salary > 70000;

-- Create materialized view (PostgreSQL)
CREATE MATERIALIZED VIEW dept_stats AS
SELECT 
    d.dept_name,
    COUNT(e.emp_id) AS employee_count,
    AVG(e.salary) AS avg_salary
FROM departments d
LEFT JOIN employees e ON d.dept_id = e.dept_id
GROUP BY d.dept_id, d.dept_name;

-- Refresh materialized view
REFRESH MATERIALIZED VIEW dept_stats;

-- Drop view
DROP VIEW employee_summary;`,
          output: 'Views created successfully!
📋 employee_summary: Simplified employee data
📊 dept_stats: Department analytics
✅ Data security and simplification achieved'
        }
      ]
    },
    triggers: {
      title: '⚡ Triggers & Automation',
      topics: [
        {
          id: 'database-triggers',
          title: 'Database Triggers',
          explanation: 'Triggers automatically execute code in response to database events like INSERT, UPDATE, or DELETE.',
          code: `-- Create audit table
CREATE TABLE employee_audit (
    audit_id INT AUTO_INCREMENT PRIMARY KEY,
    employee_id INT,
    action VARCHAR(10),
    old_salary DECIMAL(10,2),
    new_salary DECIMAL(10,2),
    changed_by VARCHAR(100),
    changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- AFTER UPDATE trigger
DELIMITER //
CREATE TRIGGER employee_salary_audit
AFTER UPDATE ON employees
FOR EACH ROW
BEGIN
    IF OLD.salary != NEW.salary THEN
        INSERT INTO employee_audit (
            employee_id, action, old_salary, new_salary, changed_by
        ) VALUES (
            NEW.emp_id, 'UPDATE', OLD.salary, NEW.salary, USER()
        );
    END IF;
END //
DELIMITER ;

-- BEFORE INSERT trigger
DELIMITER //
CREATE TRIGGER employee_email_check
BEFORE INSERT ON employees
FOR EACH ROW
BEGIN
    IF NEW.email NOT LIKE '%@%.%' THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Invalid email format';
    END IF;
END //
DELIMITER ;

-- Test triggers
UPDATE employees SET salary = 82000 WHERE emp_id = 1;
SELECT * FROM employee_audit;`,
          output: 'Triggers created successfully!
⚡ Salary changes automatically logged
📝 Audit trail: John Doe salary $75,000 → $82,000
✅ Data validation and logging automated'
        }
      ]
    },
    normalization: {
      title: '🧱 Database Design & Normalization',
      topics: [
        {
          id: 'normal-forms',
          title: 'Database Normalization',
          explanation: 'Normalization eliminates data redundancy and ensures data integrity through structured design principles.',
          code: `-- 1NF: Atomic values, no repeating groups
-- BAD DESIGN
CREATE TABLE bad_employees (
    id INT,
    name VARCHAR(100),
    skills VARCHAR(500)  -- 'Java,Python,SQL' - violates 1NF
);

-- GOOD DESIGN (1NF)
CREATE TABLE employees_1nf (
    emp_id INT PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE employee_skills (
    emp_id INT,
    skill VARCHAR(50),
    PRIMARY KEY (emp_id, skill),
    FOREIGN KEY (emp_id) REFERENCES employees_1nf(emp_id)
);

-- 2NF: 1NF + No partial dependencies
-- BAD: product_name depends only on product_id
CREATE TABLE order_items_bad (
    order_id INT,
    product_id INT,
    product_name VARCHAR(100),  -- Partial dependency
    quantity INT,
    PRIMARY KEY (order_id, product_id)
);

-- GOOD (2NF): Separate product information
CREATE TABLE products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(100)
);

CREATE TABLE order_items_2nf (
    order_id INT,
    product_id INT,
    quantity INT,
    PRIMARY KEY (order_id, product_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

-- 3NF: 2NF + No transitive dependencies
-- Remove department_location from employees table
CREATE TABLE employees_3nf (
    emp_id INT PRIMARY KEY,
    name VARCHAR(100),
    dept_id INT,
    FOREIGN KEY (dept_id) REFERENCES departments(dept_id)
);

CREATE TABLE departments_3nf (
    dept_id INT PRIMARY KEY,
    dept_name VARCHAR(100),
    location VARCHAR(100)  -- No transitive dependency
);`,
          output: 'Normalization completed!

🎯 1NF: Atomic values achieved
  • Skills separated into individual records
  • No repeating groups

🎯 2NF: Partial dependencies eliminated
  • Product info moved to separate table
  • Each non-key attribute depends on full primary key

🎯 3NF: Transitive dependencies removed
  • Department location moved to departments table
  • No indirect dependencies

✅ Data redundancy eliminated, integrity improved!'
        }
      ]
    },
    security: {
      title: '🔒 Database Security',
      topics: [
        {
          id: 'user-management',
          title: 'User Management & Permissions',
          explanation: 'Database security involves creating users, assigning roles, and managing permissions to protect sensitive data.',
          code: `-- Create database users
CREATE USER 'app_user'@'localhost' IDENTIFIED BY 'secure_password123';
CREATE USER 'read_only'@'%' IDENTIFIED BY 'readonly_pass';
CREATE USER 'admin_user'@'localhost' IDENTIFIED BY 'admin_secure_pass';

-- Grant specific permissions
-- Application user - limited access
GRANT SELECT, INSERT, UPDATE ON company_db.employees TO 'app_user'@'localhost';
GRANT SELECT ON company_db.departments TO 'app_user'@'localhost';

-- Read-only user - reporting access
GRANT SELECT ON company_db.* TO 'read_only'@'%';

-- Admin user - full access
GRANT ALL PRIVILEGES ON company_db.* TO 'admin_user'@'localhost';

-- Create roles (MySQL 8.0+)
CREATE ROLE 'hr_role', 'finance_role', 'it_role';

-- Grant permissions to roles
GRANT SELECT, INSERT, UPDATE ON employees TO 'hr_role';
GRANT SELECT ON employees TO 'finance_role';
GRANT ALL PRIVILEGES ON *.* TO 'it_role';

-- Assign roles to users
GRANT 'hr_role' TO 'hr_manager'@'localhost';
GRANT 'finance_role' TO 'accountant'@'localhost';

-- Revoke permissions
REVOKE INSERT ON employees FROM 'app_user'@'localhost';

-- Show user permissions
SHOW GRANTS FOR 'app_user'@'localhost';

-- Security best practices
-- 1. Use SSL connections
-- REQUIRE SSL when creating users
CREATE USER 'secure_user'@'%' IDENTIFIED BY 'password' REQUIRE SSL;

-- 2. Password validation
SET GLOBAL validate_password.policy = STRONG;

-- 3. Connection limits
CREATE USER 'limited_user'@'localhost' 
IDENTIFIED BY 'password'
WITH MAX_CONNECTIONS_PER_HOUR 100
MAX_QUERIES_PER_HOUR 1000;`,
          output: 'Database security implemented!

👥 Users created:
  • app_user: Application access
  • read_only: Reporting access
  • admin_user: Full administrative access

🛡️ Roles defined:
  • hr_role: Employee management
  • finance_role: Financial data access
  • it_role: System administration

🔒 Security measures:
  • SSL connections required
  • Strong password policy
  • Connection rate limiting
  • Principle of least privilege

✅ Database secured with proper access controls!'
        }
      ]
    },
    projects: {
      title: '🛠️ Real-World Projects',
      topics: [
        {
          id: 'ecommerce-project',
          title: 'E-commerce Database Project',
          explanation: 'Complete e-commerce database design with customers, products, orders, and comprehensive analytics.',
          code: `-- E-commerce Database Schema
CREATE DATABASE ecommerce_system;
USE ecommerce_system;

-- Customers table
CREATE TABLE customers (
    customer_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(20),
    address TEXT,
    city VARCHAR(50),
    state VARCHAR(50),
    zip_code VARCHAR(10),
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Categories table
CREATE TABLE categories (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(100) NOT NULL,
    description TEXT,
    parent_category_id INT,
    FOREIGN KEY (parent_category_id) REFERENCES categories(category_id)
);

-- Products table
CREATE TABLE products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(200) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    cost DECIMAL(10,2),
    sku VARCHAR(50) UNIQUE,
    category_id INT,
    stock_quantity INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
);

-- Orders table
CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT NOT NULL,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status ENUM('pending', 'processing', 'shipped', 'delivered', 'cancelled') DEFAULT 'pending',
    total_amount DECIMAL(10,2) NOT NULL,
    shipping_address TEXT,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

-- Order items table
CREATE TABLE order_items (
    order_item_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    unit_price DECIMAL(10,2) NOT NULL,
    total_price DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

-- Business Analytics Queries
-- 1. Monthly sales report
SELECT 
    DATE_FORMAT(order_date, '%Y-%m') as month,
    COUNT(order_id) as total_orders,
    SUM(total_amount) as monthly_revenue,
    AVG(total_amount) as avg_order_value
FROM orders
WHERE status != 'cancelled'
GROUP BY DATE_FORMAT(order_date, '%Y-%m')
ORDER BY month DESC;

-- 2. Top selling products
SELECT 
    p.product_name,
    SUM(oi.quantity) as total_sold,
    SUM(oi.total_price) as revenue
FROM products p
JOIN order_items oi ON p.product_id = oi.product_id
JOIN orders o ON oi.order_id = o.order_id
WHERE o.status != 'cancelled'
GROUP BY p.product_id
ORDER BY total_sold DESC
LIMIT 10;

-- 3. Customer lifetime value
SELECT 
    c.customer_id,
    CONCAT(c.first_name, ' ', c.last_name) as customer_name,
    COUNT(o.order_id) as total_orders,
    SUM(o.total_amount) as lifetime_value,
    AVG(o.total_amount) as avg_order_value
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_id
ORDER BY lifetime_value DESC;`,
          output: 'E-commerce Database Project Completed!

📊 Database Structure:
  • 5 core tables with proper relationships
  • Foreign key constraints for data integrity
  • Optimized for e-commerce operations

📈 Analytics Implemented:
  • Monthly sales reporting
  • Product performance tracking
  • Customer lifetime value analysis

💰 Sample Results:
  • Monthly Revenue: $45,230
  • Top Product: iPhone 15 (127 units sold)
  • Best Customer: $2,340 lifetime value

✅ Production-ready e-commerce system created!'
        },
        {
          id: 'hospital-project',
          title: 'Hospital Management System',
          explanation: 'Comprehensive hospital database managing patients, doctors, appointments, and medical records.',
          code: `-- Hospital Management System
CREATE DATABASE hospital_management;
USE hospital_management;

-- Departments table
CREATE TABLE departments (
    dept_id INT AUTO_INCREMENT PRIMARY KEY,
    dept_name VARCHAR(100) NOT NULL,
    location VARCHAR(100),
    head_doctor_id INT
);

-- Doctors table
CREATE TABLE doctors (
    doctor_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    specialization VARCHAR(100),
    phone VARCHAR(20),
    email VARCHAR(100),
    dept_id INT,
    hire_date DATE,
    FOREIGN KEY (dept_id) REFERENCES departments(dept_id)
);

-- Patients table
CREATE TABLE patients (
    patient_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    date_of_birth DATE,
    gender ENUM('M', 'F', 'Other'),
    phone VARCHAR(20),
    email VARCHAR(100),
    address TEXT,
    emergency_contact VARCHAR(100),
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Appointments table
CREATE TABLE appointments (
    appointment_id INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT NOT NULL,
    doctor_id INT NOT NULL,
    appointment_date DATETIME NOT NULL,
    status ENUM('scheduled', 'completed', 'cancelled', 'no_show') DEFAULT 'scheduled',
    reason TEXT,
    notes TEXT,
    FOREIGN KEY (patient_id) REFERENCES patients(patient_id),
    FOREIGN KEY (doctor_id) REFERENCES doctors(doctor_id)
);

-- Medical records table
CREATE TABLE medical_records (
    record_id INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT NOT NULL,
    doctor_id INT NOT NULL,
    visit_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    diagnosis TEXT,
    treatment TEXT,
    prescription TEXT,
    follow_up_date DATE,
    FOREIGN KEY (patient_id) REFERENCES patients(patient_id),
    FOREIGN KEY (doctor_id) REFERENCES doctors(doctor_id)
);

-- Hospital Analytics
-- 1. Doctor workload analysis
SELECT 
    CONCAT(d.first_name, ' ', d.last_name) as doctor_name,
    d.specialization,
    COUNT(a.appointment_id) as total_appointments,
    COUNT(CASE WHEN a.status = 'completed' THEN 1 END) as completed_appointments,
    ROUND(COUNT(CASE WHEN a.status = 'completed' THEN 1 END) * 100.0 / COUNT(a.appointment_id), 2) as completion_rate
FROM doctors d
LEFT JOIN appointments a ON d.doctor_id = a.doctor_id
GROUP BY d.doctor_id
ORDER BY total_appointments DESC;

-- 2. Patient visit history
SELECT 
    CONCAT(p.first_name, ' ', p.last_name) as patient_name,
    COUNT(mr.record_id) as total_visits,
    MAX(mr.visit_date) as last_visit,
    GROUP_CONCAT(DISTINCT d.specialization) as specializations_visited
FROM patients p
LEFT JOIN medical_records mr ON p.patient_id = mr.patient_id
LEFT JOIN doctors d ON mr.doctor_id = d.doctor_id
GROUP BY p.patient_id
HAVING total_visits > 0
ORDER BY total_visits DESC;`,
          output: 'Hospital Management System Created!

🏥 System Components:
  • Patient registration and management
  • Doctor and department organization
  • Appointment scheduling system
  • Medical records tracking

📈 Analytics Dashboard:
  • Doctor workload: Dr. Smith (95% completion rate)
  • Patient visits: John Doe (12 visits, 3 specializations)
  • Department efficiency tracking

👩‍⚕️ Healthcare Features:
  • Patient history tracking
  • Appointment management
  • Medical record security
  • Emergency contact system

✅ Complete healthcare management solution!'
        }
      ]
    },
    constraints: {
      title: '🔒 Constraints & Data Integrity',
      topics: [
        {
          id: 'sql-constraints',
          title: 'SQL Constraints',
          explanation: 'Constraints enforce rules on data to maintain accuracy and reliability of the database.',
          code: `-- PRIMARY KEY constraint
CREATE TABLE students (
    student_id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL
);

-- FOREIGN KEY constraint
CREATE TABLE enrollments (
    enrollment_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    course_id INT,
    enrollment_date DATE DEFAULT (CURRENT_DATE),
    FOREIGN KEY (student_id) REFERENCES students(student_id)
        ON DELETE CASCADE ON UPDATE CASCADE
);

-- CHECK constraint
CREATE TABLE products (
    product_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) CHECK (price > 0),
    discount_percent INT CHECK (discount_percent BETWEEN 0 AND 100),
    category ENUM('electronics', 'clothing', 'books') NOT NULL
);

-- DEFAULT constraint
CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20) DEFAULT 'pending',
    total_amount DECIMAL(10,2) DEFAULT 0.00
);

-- Add constraints to existing table
ALTER TABLE students 
ADD CONSTRAINT chk_email_format 
CHECK (email LIKE '%@%.%');

ALTER TABLE students 
ADD CONSTRAINT uk_student_email UNIQUE (email);

-- Drop constraints
ALTER TABLE students DROP CONSTRAINT chk_email_format;`,
          output: 'Constraints implemented successfully!\n\n🔐 Data Integrity Rules:\n  • PRIMARY KEY: Unique identification\n  • FOREIGN KEY: Referential integrity\n  • UNIQUE: No duplicate values\n  • CHECK: Data validation\n  • NOT NULL: Required fields\n  • DEFAULT: Automatic values\n\n✅ Database integrity enforced!'
        }
      ]
    },
    setops: {
      title: '🔁 Set Operations',
      topics: [
        {
          id: 'union-operations',
          title: 'UNION, INTERSECT, EXCEPT',
          explanation: 'Set operations combine results from multiple queries, treating them as mathematical sets.',
          code: `-- Sample data setup
CREATE TABLE employees_2023 (
    emp_id INT, name VARCHAR(100), department VARCHAR(50)
);
CREATE TABLE employees_2024 (
    emp_id INT, name VARCHAR(100), department VARCHAR(50)
);

-- UNION: Combines results, removes duplicates
SELECT name, department FROM employees_2023
UNION
SELECT name, department FROM employees_2024;

-- UNION ALL: Combines results, keeps duplicates
SELECT name, department FROM employees_2023
UNION ALL
SELECT name, department FROM employees_2024;

-- INTERSECT: Common records in both tables
SELECT name, department FROM employees_2023
INTERSECT
SELECT name, department FROM employees_2024;

-- EXCEPT (MINUS): Records in first table but not in second
SELECT name, department FROM employees_2023
EXCEPT
SELECT name, department FROM employees_2024;

-- Practical example: Active vs Inactive employees
SELECT 'Active' as status, COUNT(*) as count
FROM employees WHERE is_active = TRUE
UNION ALL
SELECT 'Inactive' as status, COUNT(*) as count
FROM employees WHERE is_active = FALSE;

-- Complex set operations
(SELECT product_name FROM products WHERE category = 'electronics'
 UNION
 SELECT product_name FROM products WHERE price > 1000)
INTERSECT
SELECT product_name FROM products WHERE stock_quantity > 0;`,
          output: 'Set Operations Results:\n\n🔄 UNION Results:\n  • Combined 2023 & 2024 employees\n  • Duplicates removed automatically\n  • Total unique records: 156\n\n🔄 UNION ALL Results:\n  • All records included\n  • Duplicates preserved\n  • Total records: 203\n\n🔄 INTERSECT Results:\n  • Common employees: 47\n  • Employees present in both years\n\n🔄 EXCEPT Results:\n  • 2023 only employees: 78\n  • Left company in 2024\n\n✅ Set theory applied to SQL successfully!'
        }
      ]
    },
    dataops: {
      title: '📁 Data Import/Export & Backup',
      topics: [
        {
          id: 'data-operations',
          title: 'Data Import, Export & Backup',
          explanation: 'Essential operations for data migration, backup, and recovery in production environments.',
          code: `-- Data Export (mysqldump)
-- Export entire database
-- mysqldump -u root -p company_db > company_backup.sql

-- Export specific tables
-- mysqldump -u root -p company_db employees departments > tables_backup.sql

-- Export with conditions
-- mysqldump -u root -p company_db employees --where="salary > 50000" > high_earners.sql

-- Data Import
-- mysql -u root -p company_db < company_backup.sql

-- CSV Export using SELECT INTO OUTFILE
SELECT emp_id, name, salary, dept_name
FROM employees e
JOIN departments d ON e.dept_id = d.dept_id
INTO OUTFILE '/tmp/employee_report.csv'
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n';

-- CSV Import using LOAD DATA INFILE
LOAD DATA INFILE '/tmp/new_employees.csv'
INTO TABLE employees
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
(first_name, last_name, email, salary, dept_id);

-- JSON Export (MySQL 5.7+)
SELECT JSON_OBJECT(
    'employee_id', emp_id,
    'name', CONCAT(first_name, ' ', last_name),
    'department', dept_name,
    'salary', salary
) as employee_json
FROM employees e
JOIN departments d ON e.dept_id = d.dept_id;

-- Backup strategies
-- 1. Full backup
CREATE EVENT daily_backup
ON SCHEDULE EVERY 1 DAY
STARTS '2024-01-01 02:00:00'
DO
  CALL backup_database();

-- 2. Incremental backup using binary logs
-- FLUSH LOGS;
-- mysqlbinlog mysql-bin.000001 > incremental_backup.sql

-- 3. Point-in-time recovery
-- mysql -u root -p < full_backup.sql
-- mysqlbinlog --start-datetime="2024-01-15 10:00:00" 
--             --stop-datetime="2024-01-15 11:00:00" 
--             mysql-bin.000001 | mysql -u root -p

-- Data validation after import
SELECT 
    COUNT(*) as total_records,
    COUNT(DISTINCT email) as unique_emails,
    MIN(salary) as min_salary,
    MAX(salary) as max_salary,
    AVG(salary) as avg_salary
FROM employees;`,
          output: 'Data Operations Completed!\n\n📤 Export Operations:\n  • Database backup: company_backup.sql (2.3MB)\n  • CSV export: employee_report.csv (156 records)\n  • JSON export: Structured employee data\n\n📥 Import Operations:\n  • CSV import: 45 new employees added\n  • Data validation: All records verified\n  • No duplicate emails found\n\n💾 Backup Strategy:\n  • Daily full backup scheduled\n  • Binary log rotation enabled\n  • Point-in-time recovery ready\n\n✅ Data migration and backup systems operational!'
        }
      ]
    },
    bestpractices: {
      title: '🎯 Best Practices & Tips',
      topics: [
        {
          id: 'sql-best-practices',
          title: 'SQL Best Practices',
          explanation: 'Industry-standard practices for writing efficient, maintainable, and secure SQL code.',
          code: `-- 1. Use meaningful table and column names
-- BAD
CREATE TABLE t1 (id INT, n VARCHAR(50), d DATE);

-- GOOD
CREATE TABLE customer_orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_name VARCHAR(100) NOT NULL,
    order_date DATE NOT NULL
);

-- 2. Always use explicit JOINs
-- BAD (implicit join)
SELECT e.name, d.dept_name
FROM employees e, departments d
WHERE e.dept_id = d.dept_id;

-- GOOD (explicit join)
SELECT e.name, d.dept_name
FROM employees e
INNER JOIN departments d ON e.dept_id = d.dept_id;

-- 3. Use specific column names instead of SELECT *
-- BAD
SELECT * FROM employees WHERE dept_id = 1;

-- GOOD
SELECT emp_id, first_name, last_name, salary
FROM employees 
WHERE dept_id = 1;

-- 4. Use parameterized queries to prevent SQL injection
-- BAD (vulnerable to SQL injection)
-- query = "SELECT * FROM users WHERE username = '" + username + "'";

-- GOOD (parameterized query)
-- PREPARE stmt FROM 'SELECT * FROM users WHERE username = ?';
-- SET @username = 'john_doe';
-- EXECUTE stmt USING @username;

-- 5. Use appropriate data types
-- BAD
CREATE TABLE products (
    price VARCHAR(20),  -- Should be DECIMAL
    is_active VARCHAR(5)  -- Should be BOOLEAN
);

-- GOOD
CREATE TABLE products (
    price DECIMAL(10,2),
    is_active BOOLEAN DEFAULT TRUE
);

-- 6. Use indexes wisely
-- Index frequently queried columns
CREATE INDEX idx_employee_email ON employees(email);
CREATE INDEX idx_order_date ON orders(order_date);

-- Composite index for multi-column queries
CREATE INDEX idx_employee_dept_salary ON employees(dept_id, salary);

-- 7. Use LIMIT for large result sets
SELECT * FROM large_table 
ORDER BY created_date DESC 
LIMIT 100;

-- 8. Use EXISTS instead of IN for better performance
-- SLOWER
SELECT * FROM employees 
WHERE dept_id IN (SELECT dept_id FROM departments WHERE budget > 100000);

-- FASTER
SELECT * FROM employees e
WHERE EXISTS (
    SELECT 1 FROM departments d 
    WHERE d.dept_id = e.dept_id AND d.budget > 100000
);

-- 9. Use proper transaction handling
START TRANSACTION;
TRY {
    INSERT INTO orders (customer_id, total) VALUES (1, 100.00);
    UPDATE inventory SET quantity = quantity - 1 WHERE product_id = 1;
    COMMIT;
} CATCH {
    ROLLBACK;
    -- Handle error
}

-- 10. Regular maintenance
ANALYZE TABLE employees;  -- Update statistics
OPTIMIZE TABLE employees; -- Defragment table
CHECK TABLE employees;    -- Check for errors`,
          output: 'SQL Best Practices Implemented!\n\n📋 Code Quality:\n  ✅ Meaningful naming conventions\n  ✅ Explicit JOIN syntax\n  ✅ Specific column selection\n  ✅ Proper data types\n\n🔒 Security:\n  ✅ Parameterized queries\n  ✅ Input validation\n  ✅ Principle of least privilege\n\n⚡ Performance:\n  ✅ Strategic indexing\n  ✅ Query optimization\n  ✅ EXISTS over IN\n  ✅ Result set limiting\n\n🛠️ Maintenance:\n  ✅ Regular table analysis\n  ✅ Index optimization\n  ✅ Error checking\n\n🎯 Production-ready SQL practices established!'
        }
      ]
    },
    partitioning: {
      title: '📏 Table Partitioning',
      topics: [
        {
          id: 'table-partitioning',
          title: 'Database Partitioning Strategies',
          explanation: 'Partitioning divides large tables into smaller, manageable pieces while maintaining logical unity.',
          code: `-- RANGE Partitioning (MySQL)
CREATE TABLE sales_data (
    id INT AUTO_INCREMENT,
    sale_date DATE,
    amount DECIMAL(10,2),
    region VARCHAR(50),
    PRIMARY KEY (id, sale_date)
)
PARTITION BY RANGE (YEAR(sale_date)) (
    PARTITION p2020 VALUES LESS THAN (2021),
    PARTITION p2021 VALUES LESS THAN (2022),
    PARTITION p2022 VALUES LESS THAN (2023),
    PARTITION p2023 VALUES LESS THAN (2024),
    PARTITION p_future VALUES LESS THAN MAXVALUE
);

-- HASH Partitioning
CREATE TABLE user_sessions (
    session_id BIGINT AUTO_INCREMENT,
    user_id INT,
    login_time TIMESTAMP,
    ip_address VARCHAR(45),
    PRIMARY KEY (session_id, user_id)
)
PARTITION BY HASH(user_id)
PARTITIONS 8;

-- LIST Partitioning
CREATE TABLE regional_sales (
    id INT AUTO_INCREMENT,
    region VARCHAR(20),
    sales_amount DECIMAL(12,2),
    sale_date DATE,
    PRIMARY KEY (id, region)
)
PARTITION BY LIST COLUMNS(region) (
    PARTITION p_north VALUES IN ('NY', 'MA', 'CT'),
    PARTITION p_south VALUES IN ('FL', 'TX', 'GA'),
    PARTITION p_west VALUES IN ('CA', 'WA', 'OR'),
    PARTITION p_central VALUES IN ('IL', 'OH', 'MI')
);

-- Partition Management
-- Add new partition
ALTER TABLE sales_data 
ADD PARTITION (PARTITION p2024 VALUES LESS THAN (2025));

-- Drop old partition
ALTER TABLE sales_data DROP PARTITION p2020;

-- Query specific partition
SELECT * FROM sales_data PARTITION (p2023)
WHERE amount > 1000;

-- Partition pruning example
EXPLAIN PARTITIONS
SELECT * FROM sales_data 
WHERE sale_date BETWEEN '2023-01-01' AND '2023-12-31';

-- Subpartitioning (composite partitioning)
CREATE TABLE orders_partitioned (
    order_id BIGINT AUTO_INCREMENT,
    customer_id INT,
    order_date DATE,
    status VARCHAR(20),
    total_amount DECIMAL(10,2),
    PRIMARY KEY (order_id, order_date, customer_id)
)
PARTITION BY RANGE (YEAR(order_date))
SUBPARTITION BY HASH(customer_id)
SUBPARTITIONS 4 (
    PARTITION p2023 VALUES LESS THAN (2024),
    PARTITION p2024 VALUES LESS THAN (2025)
);`,
          output: 'Partitioning implemented successfully!\n\n📏 Partition Types:\n  • RANGE: Date-based partitions (2020-2024)\n  • HASH: Even distribution across 8 partitions\n  • LIST: Region-based logical grouping\n  • Composite: Range + Hash subpartitioning\n\n⚡ Performance Benefits:\n  • Query pruning: Only scan relevant partitions\n  • Parallel processing: Multiple partitions simultaneously\n  • Maintenance: Drop old partitions efficiently\n  • Storage: Distribute across different tablespaces\n\n✅ Large table management optimized!'
        }
      ]
    },
    replication: {
      title: '🔄 Database Replication & Clustering',
      topics: [
        {
          id: 'replication-setup',
          title: 'Master-Slave Replication',
          explanation: 'Database replication provides high availability, load distribution, and disaster recovery capabilities.',
          code: `-- Master Server Configuration (my.cnf)
-- [mysqld]
-- server-id = 1
-- log-bin = mysql-bin
-- binlog-format = ROW
-- gtid-mode = ON
-- enforce-gtid-consistency = ON

-- Create replication user on master
CREATE USER 'replication_user'@'%' IDENTIFIED BY 'secure_password';
GRANT REPLICATION SLAVE ON *.* TO 'replication_user'@'%';
FLUSH PRIVILEGES;

-- Get master status
SHOW MASTER STATUS;
-- Note: File and Position values

-- Slave Server Configuration (my.cnf)
-- [mysqld]
-- server-id = 2
-- relay-log = relay-bin
-- read-only = 1
-- gtid-mode = ON
-- enforce-gtid-consistency = ON

-- Configure slave on slave server
CHANGE MASTER TO
    MASTER_HOST = '192.168.1.100',
    MASTER_USER = 'replication_user',
    MASTER_PASSWORD = 'secure_password',
    MASTER_LOG_FILE = 'mysql-bin.000001',
    MASTER_LOG_POS = 154,
    MASTER_AUTO_POSITION = 1;

-- Start replication
START SLAVE;

-- Check replication status
SHOW SLAVE STATUS\G

-- Master-Master Replication Setup
-- Server 1 configuration
-- server-id = 1
-- auto-increment-increment = 2
-- auto-increment-offset = 1
-- log-bin = mysql-bin

-- Server 2 configuration
-- server-id = 2
-- auto-increment-increment = 2
-- auto-increment-offset = 2
-- log-bin = mysql-bin

-- Read/Write Splitting Application Logic
-- Connection routing example (pseudo-code)
/*
class DatabaseRouter {
    private $masterConnection;
    private $slaveConnections = [];
    
    public function query($sql) {
        if (this.isWriteQuery($sql)) {
            return $this->masterConnection->query($sql);
        } else {
            $slave = $this->getRandomSlave();
            return $slave->query($sql);
        }
    }
    
    private function isWriteQuery($sql) {
        return preg_match('/^(INSERT|UPDATE|DELETE|CREATE|ALTER|DROP)/i', trim($sql));
    }
}
*/

-- Monitoring replication lag
SELECT 
    SECONDS_BEHIND_MASTER,
    MASTER_LOG_FILE,
    READ_MASTER_LOG_POS,
    RELAY_MASTER_LOG_FILE,
    EXEC_MASTER_LOG_POS
FROM INFORMATION_SCHEMA.REPLICA_HOST_STATUS;

-- Failover procedures
-- 1. Stop application writes
-- 2. Ensure slave is caught up
SHOW SLAVE STATUS\G
-- 3. Promote slave to master
STOP SLAVE;
RESET SLAVE ALL;
SET GLOBAL read_only = OFF;
-- 4. Update application connection strings

-- Group Replication (MySQL 8.0+)
INSTALL PLUGIN group_replication SONAME 'group_replication.so';
SET GLOBAL group_replication_group_name = 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa';
SET GLOBAL group_replication_start_on_boot = OFF;
SET GLOBAL group_replication_local_address = '192.168.1.100:33061';
SET GLOBAL group_replication_group_seeds = '192.168.1.100:33061,192.168.1.101:33061,192.168.1.102:33061';
SET GLOBAL group_replication_bootstrap_group = ON;
START GROUP_REPLICATION;`,
          output: 'Database Replication Configured!\n\n🔄 Replication Types:\n  • Master-Slave: Read scaling, backup\n  • Master-Master: Bidirectional sync\n  • Group Replication: Multi-master cluster\n\n📊 Performance Metrics:\n  • Replication lag: < 1 second\n  • Read queries: Distributed to slaves\n  • Write queries: Routed to master\n  • Failover time: < 30 seconds\n\n🔒 High Availability:\n  • Automatic failover configured\n  • Data consistency maintained\n  • Load balancing active\n\n✅ Enterprise-grade database cluster ready!'
        }
      ]
    },
    nosql: {
      title: '🔄 SQL + NoSQL Integration',
      topics: [
        {
          id: 'polyglot-persistence',
          title: 'Polyglot Persistence & Hybrid Databases',
          explanation: 'Modern applications often combine SQL and NoSQL databases for optimal performance and flexibility.',
          code: `-- JSON Support in MySQL 8.0+
CREATE TABLE user_profiles (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    profile_data JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert JSON data
INSERT INTO user_profiles (username, profile_data) VALUES
('john_doe', '{
    "firstName": "John",
    "lastName": "Doe",
    "age": 30,
    "interests": ["programming", "music", "travel"],
    "address": {
        "street": "123 Main St",
        "city": "New York",
        "zipCode": "10001"
    },
    "preferences": {
        "theme": "dark",
        "notifications": true
    }
}');

-- Query JSON data
SELECT 
    username,
    JSON_EXTRACT(profile_data, '$.firstName') as first_name,
    JSON_EXTRACT(profile_data, '$.age') as age,
    JSON_EXTRACT(profile_data, '$.interests') as interests
FROM user_profiles;

-- JSON path queries
SELECT username FROM user_profiles
WHERE JSON_EXTRACT(profile_data, '$.age') > 25;

SELECT username FROM user_profiles
WHERE JSON_CONTAINS(profile_data, '"programming"', '$.interests');

-- Update JSON fields
UPDATE user_profiles 
SET profile_data = JSON_SET(
    profile_data, 
    '$.age', 31,
    '$.preferences.theme', 'light'
)
WHERE username = 'john_doe';

-- Create indexes on JSON fields
CREATE INDEX idx_user_age ON user_profiles(
    (CAST(JSON_EXTRACT(profile_data, '$.age') AS UNSIGNED))
);

-- PostgreSQL JSONB example
-- CREATE TABLE products (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(100),
--     attributes JSONB
-- );
-- 
-- INSERT INTO products (name, attributes) VALUES
-- ('Laptop', '{
--     "brand": "Dell",
--     "specs": {
--         "cpu": "Intel i7",
--         "ram": "16GB",
--         "storage": "512GB SSD"
--     },
--     "features": ["touchscreen", "backlit keyboard"]
-- }');
-- 
-- -- JSONB queries (PostgreSQL)
-- SELECT name FROM products 
-- WHERE attributes @> '{"brand": "Dell"}';
-- 
-- SELECT name FROM products 
-- WHERE attributes -> 'specs' ->> 'cpu' = 'Intel i7';

-- Hybrid Architecture Example
-- SQL for transactions, NoSQL for analytics

-- 1. OLTP in MySQL (normalized)
CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT,
    order_date TIMESTAMP,
    total_amount DECIMAL(10,2)
);

CREATE TABLE order_items (
    item_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT,
    product_id INT,
    quantity INT,
    price DECIMAL(10,2)
);

-- 2. Analytics in document store (denormalized)
-- MongoDB-style document for analytics
/*
{
  "_id": ObjectId("..."),
  "orderId": 12345,
  "customerId": 67890,
  "orderDate": ISODate("2024-01-15"),
  "totalAmount": 299.99,
  "items": [
    {
      "productId": 1,
      "productName": "Laptop",
      "category": "Electronics",
      "quantity": 1,
      "price": 299.99
    }
  ],
  "customer": {
    "name": "John Doe",
    "email": "john@example.com",
    "segment": "Premium"
  },
  "metrics": {
    "processingTime": 120,
    "shippingCost": 15.99,
    "profit": 89.99
  }
}
*/

-- Data synchronization strategy
-- ETL process to sync OLTP to OLAP
CREATE EVENT sync_to_analytics
ON SCHEDULE EVERY 1 HOUR
DO
BEGIN
    -- Extract new/updated orders
    SELECT o.order_id, o.customer_id, o.order_date, o.total_amount,
           GROUP_CONCAT(
               JSON_OBJECT(
                   'productId', oi.product_id,
                   'quantity', oi.quantity,
                   'price', oi.price
               )
           ) as items_json
    FROM orders o
    JOIN order_items oi ON o.order_id = oi.order_id
    WHERE o.updated_at > (SELECT last_sync FROM sync_status)
    GROUP BY o.order_id;
    
    -- Transform and load to analytics store
    -- (Application code would handle MongoDB insertion)
END;

-- Graph database integration example
-- Neo4j Cypher queries for recommendations
/*
-- Find similar customers
MATCH (c1:Customer)-[:PURCHASED]->(p:Product)<-[:PURCHASED]-(c2:Customer)
WHERE c1.id = 12345 AND c1 <> c2
RETURN c2, count(p) as common_products
ORDER BY common_products DESC
LIMIT 10;

-- Product recommendations
MATCH (c:Customer {id: 12345})-[:PURCHASED]->(p1:Product),
      (p1)-[:SIMILAR_TO]->(p2:Product)
WHERE NOT (c)-[:PURCHASED]->(p2)
RETURN p2.name, p2.category, count(*) as recommendation_score
ORDER BY recommendation_score DESC
LIMIT 5;
*/`,
          output: 'Polyglot Persistence Implemented!\n\n📊 Hybrid Architecture:\n  • MySQL: OLTP transactions (orders, customers)\n  • MongoDB: Analytics & reporting\n  • Neo4j: Recommendations & relationships\n  • Redis: Caching & sessions\n\n📝 JSON in SQL:\n  • Native JSON support in MySQL 8.0+\n  • JSONB performance in PostgreSQL\n  • Flexible schema for user profiles\n  • Indexed JSON queries\n\n🔄 Data Flow:\n  • Real-time: OLTP → Application\n  • Batch ETL: OLTP → Analytics store\n  • Graph sync: Orders → Recommendation engine\n\n✅ Modern polyglot data architecture ready!'
        }
      ]
    }
  };

  const interviewQuestions = [
    {
      id: 1,
      question: "What is the difference between DELETE, TRUNCATE, and DROP?",
      answer: `-- DELETE: Removes specific rows, can be rolled back, slower
DELETE FROM employees WHERE dept_id = 5;

-- TRUNCATE: Removes all rows, faster, cannot be rolled back
TRUNCATE TABLE temp_data;

-- DROP: Removes entire table structure and data
DROP TABLE old_table;`,
      explanation: "DELETE is DML (can rollback), TRUNCATE is DDL (faster, no rollback), DROP removes table completely."
    },
    {
      id: 2,
      question: "Explain different types of JOINs with examples.",
      answer: `-- INNER JOIN: Returns matching records from both tables
SELECT e.name, d.dept_name 
FROM employees e 
INNER JOIN departments d ON e.dept_id = d.dept_id;

-- LEFT JOIN: All records from left table + matching from right
SELECT e.name, d.dept_name 
FROM employees e 
LEFT JOIN departments d ON e.dept_id = d.dept_id;

-- RIGHT JOIN: All records from right table + matching from left
SELECT e.name, d.dept_name 
FROM employees e 
RIGHT JOIN departments d ON e.dept_id = d.dept_id;

-- FULL OUTER JOIN: All records from both tables
SELECT e.name, d.dept_name 
FROM employees e 
FULL OUTER JOIN departments d ON e.dept_id = d.dept_id;`,
      explanation: "JOINs combine data from multiple tables based on relationships between columns."
    },
    {
      id: 3,
      question: "What is the difference between WHERE and HAVING clauses?",
      answer: `-- WHERE: Filters rows before grouping
SELECT dept_id, COUNT(*) 
FROM employees 
WHERE salary > 50000 
GROUP BY dept_id;

-- HAVING: Filters groups after grouping
SELECT dept_id, COUNT(*) as emp_count
FROM employees 
GROUP BY dept_id 
HAVING COUNT(*) > 2;

-- Both together
SELECT dept_id, AVG(salary) as avg_sal
FROM employees 
WHERE is_active = TRUE
GROUP BY dept_id 
HAVING AVG(salary) > 60000;`,
      explanation: "WHERE filters individual rows, HAVING filters grouped results. WHERE comes before GROUP BY, HAVING comes after."
    },
    {
      id: 4,
      question: "Explain SQL constraints with examples.",
      answer: `-- PRIMARY KEY: Unique identifier
CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(100)
);

-- FOREIGN KEY: References another table
CREATE TABLE enrollments (
    student_id INT,
    course_id INT,
    FOREIGN KEY (student_id) REFERENCES students(id)
);

-- UNIQUE: No duplicate values
ALTER TABLE students ADD CONSTRAINT uk_email UNIQUE (email);

-- CHECK: Validates data
ALTER TABLE students ADD CONSTRAINT chk_age CHECK (age >= 18);

-- NOT NULL: Mandatory field
ALTER TABLE students MODIFY name VARCHAR(100) NOT NULL;`,
      explanation: "Constraints ensure data integrity: PRIMARY KEY (unique identifier), FOREIGN KEY (referential integrity), UNIQUE (no duplicates), CHECK (validation), NOT NULL (mandatory)."
    },
    {
      id: 5,
      question: "Write a query to find the second highest salary.",
      answer: `-- Method 1: Using LIMIT and OFFSET
SELECT salary 
FROM employees 
ORDER BY salary DESC 
LIMIT 1 OFFSET 1;

-- Method 2: Using subquery
SELECT MAX(salary) as second_highest
FROM employees 
WHERE salary < (SELECT MAX(salary) FROM employees);

-- Method 3: Using ROW_NUMBER()
SELECT salary
FROM (
    SELECT salary, ROW_NUMBER() OVER (ORDER BY salary DESC) as rn
    FROM employees
) ranked
WHERE rn = 2;

-- Method 4: Using DENSE_RANK() for handling ties
SELECT salary
FROM (
    SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) as rank
    FROM employees
) ranked
WHERE rank = 2;`,
      explanation: "Multiple approaches: LIMIT/OFFSET (simple), subquery (readable), window functions (handles ties). DENSE_RANK() is best for handling duplicate salaries."
    },
    {
      id: 6,
      question: "How do you handle NULL values in SQL?",
      answer: `-- Check for NULL values
SELECT * FROM employees WHERE manager_id IS NULL;
SELECT * FROM employees WHERE manager_id IS NOT NULL;

-- Replace NULL with default value
SELECT 
    name,
    COALESCE(phone, 'No Phone') as contact,
    ISNULL(bonus, 0) as bonus_amount,
    CASE 
        WHEN manager_id IS NULL THEN 'No Manager'
        ELSE 'Has Manager'
    END as manager_status
FROM employees;

-- NULL in calculations
SELECT 
    name,
    salary + COALESCE(bonus, 0) as total_compensation
FROM employees;

-- NULL in aggregations (ignored)
SELECT 
    COUNT(*) as total_rows,
    COUNT(manager_id) as non_null_managers,
    AVG(bonus) as avg_bonus  -- NULLs ignored
FROM employees;`,
      explanation: "Use IS NULL/IS NOT NULL for checking, COALESCE/ISNULL for defaults, CASE for conditional logic. NULLs are ignored in aggregations except COUNT(*)."
    },
    {
      id: 7,
      question: "Explain the difference between UNION and UNION ALL.",
      answer: `-- UNION: Removes duplicates, slower
SELECT name FROM employees WHERE dept_id = 1
UNION
SELECT name FROM employees WHERE salary > 70000;

-- UNION ALL: Keeps duplicates, faster
SELECT name FROM employees WHERE dept_id = 1
UNION ALL
SELECT name FROM employees WHERE salary > 70000;

-- Example with different tables
SELECT 'Employee' as type, name FROM employees
UNION ALL
SELECT 'Customer' as type, name FROM customers;

-- Requirements for UNION
-- 1. Same number of columns
-- 2. Compatible data types
-- 3. Same column order
SELECT emp_id, name, 'Active' as status FROM employees
UNION
SELECT emp_id, name, 'Inactive' as status FROM former_employees;`,
      explanation: "UNION removes duplicates and sorts results (slower), UNION ALL keeps all records including duplicates (faster). Both require same column structure."
    },
    {
      id: 8,
      question: "Write a query to find employees with salary above department average.",
      answer: `-- Using correlated subquery
SELECT 
    e1.name,
    e1.dept_id,
    e1.salary,
    (SELECT AVG(e2.salary) 
     FROM employees e2 
     WHERE e2.dept_id = e1.dept_id) as dept_avg
FROM employees e1
WHERE e1.salary > (
    SELECT AVG(e2.salary)
    FROM employees e2
    WHERE e2.dept_id = e1.dept_id
);

-- Using window function (more efficient)
SELECT 
    name,
    dept_id,
    salary,
    dept_avg
FROM (
    SELECT 
        name,
        dept_id,
        salary,
        AVG(salary) OVER (PARTITION BY dept_id) as dept_avg
    FROM employees
) t
WHERE salary > dept_avg;

-- Using CTE for better readability
WITH dept_averages AS (
    SELECT dept_id, AVG(salary) as avg_salary
    FROM employees
    GROUP BY dept_id
)
SELECT e.name, e.salary, da.avg_salary
FROM employees e
JOIN dept_averages da ON e.dept_id = da.dept_id
WHERE e.salary > da.avg_salary;`,
      explanation: "Three approaches: correlated subquery (simple but slower), window function (efficient), CTE (readable). Window functions are generally preferred for performance."
    },
    {
      id: 9,
      question: "What are indexes and how do they improve performance?",
      answer: `-- Create different types of indexes
-- Single column index
CREATE INDEX idx_employee_email ON employees(email);

-- Composite index
CREATE INDEX idx_dept_salary ON employees(dept_id, salary);

-- Unique index
CREATE UNIQUE INDEX idx_employee_ssn ON employees(ssn);

-- Partial index (PostgreSQL)
CREATE INDEX idx_active_employees ON employees(name) 
WHERE is_active = TRUE;

-- Check index usage
EXPLAIN SELECT * FROM employees WHERE email = 'john@company.com';

-- Drop index
DROP INDEX idx_employee_email;

-- Index on expression
CREATE INDEX idx_full_name ON employees(CONCAT(first_name, ' ', last_name));

-- Show all indexes on a table
SHOW INDEX FROM employees;`,
      explanation: "Indexes speed up SELECT queries but slow down INSERT/UPDATE/DELETE. Use on frequently queried columns, foreign keys, and WHERE/ORDER BY columns. Avoid over-indexing."
    },
    {
      id: 10,
      question: "Explain database normalization with examples.",
      answer: `-- 1NF: Atomic values, no repeating groups
-- BAD: Multiple values in one column
CREATE TABLE bad_design (
    emp_id INT,
    name VARCHAR(100),
    skills VARCHAR(500)  -- 'Java,Python,SQL'
);

-- GOOD: Separate table for skills
CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE employee_skills (
    emp_id INT,
    skill VARCHAR(50),
    PRIMARY KEY (emp_id, skill),
    FOREIGN KEY (emp_id) REFERENCES employees(emp_id)
);`,
      explanation: "1NF: Atomic values, unique rows. 2NF: 1NF + no partial dependencies. 3NF: 2NF + no transitive dependencies. Reduces redundancy and improves data integrity."
    },
    {
      id: 11,
      question: "How do you optimize slow SQL queries?",
      answer: `-- 1. Use EXPLAIN to analyze query execution
EXPLAIN SELECT * FROM employees e
JOIN departments d ON e.dept_id = d.dept_id
WHERE e.salary > 50000;

-- 2. Add appropriate indexes
CREATE INDEX idx_employee_salary ON employees(salary);
CREATE INDEX idx_employee_dept ON employees(dept_id);

-- 3. Rewrite subqueries as JOINs
-- SLOW subquery
SELECT * FROM employees 
WHERE dept_id IN (SELECT dept_id FROM departments WHERE budget > 100000);

-- FAST JOIN
SELECT DISTINCT e.* FROM employees e
JOIN departments d ON e.dept_id = d.dept_id
WHERE d.budget > 100000;

-- 4. Use LIMIT for pagination
SELECT * FROM employees 
ORDER BY hire_date DESC 
LIMIT 20 OFFSET 40;

-- 5. Avoid functions in WHERE clause
-- SLOW
SELECT * FROM orders WHERE YEAR(order_date) = 2024;

-- FAST
SELECT * FROM orders 
WHERE order_date >= '2024-01-01' AND order_date < '2025-01-01';`,
      explanation: "Query optimization involves analyzing execution plans, adding indexes, rewriting queries, and avoiding performance anti-patterns."
    },
    {
      id: 12,
      question: "What are CTEs and when should you use them?",
      answer: `-- Common Table Expression (CTE) - temporary named result set
WITH high_earners AS (
    SELECT emp_id, name, salary, dept_id
    FROM employees
    WHERE salary > 75000
),
dept_summary AS (
    SELECT 
        d.dept_name,
        COUNT(he.emp_id) as high_earner_count,
        AVG(he.salary) as avg_high_salary
    FROM departments d
    LEFT JOIN high_earners he ON d.dept_id = he.dept_id
    GROUP BY d.dept_id, d.dept_name
)
SELECT * FROM dept_summary WHERE high_earner_count > 0;

-- Recursive CTE for hierarchical data
WITH RECURSIVE employee_hierarchy AS (
    -- Base case: top-level managers
    SELECT emp_id, name, manager_id, 0 as level
    FROM employees
    WHERE manager_id IS NULL
    
    UNION ALL
    
    -- Recursive case: subordinates
    SELECT e.emp_id, e.name, e.manager_id, eh.level + 1
    FROM employees e
    JOIN employee_hierarchy eh ON e.manager_id = eh.emp_id
)
SELECT * FROM employee_hierarchy ORDER BY level, name;

-- CTE vs Subquery comparison
-- Complex subquery (hard to read)
SELECT d.dept_name, 
       (SELECT AVG(salary) FROM employees WHERE dept_id = d.dept_id) as avg_sal
FROM departments d
WHERE d.dept_id IN (
    SELECT dept_id FROM employees 
    GROUP BY dept_id 
    HAVING COUNT(*) > 5
);

-- Same logic with CTE (more readable)
WITH large_departments AS (
    SELECT dept_id
    FROM employees
    GROUP BY dept_id
    HAVING COUNT(*) > 5
),
dept_averages AS (
    SELECT dept_id, AVG(salary) as avg_salary
    FROM employees
    GROUP BY dept_id
)
SELECT d.dept_name, da.avg_salary
FROM departments d
JOIN large_departments ld ON d.dept_id = ld.dept_id
JOIN dept_averages da ON d.dept_id = da.dept_id;`,
      explanation: "CTEs improve query readability, enable recursive queries, and can be reused within the same query. Use them for complex logic that would otherwise require nested subqueries."
    },
    {
      id: 13,
      question: "Explain ACID properties with examples.",
      answer: `-- ACID Properties in Database Transactions

-- ATOMICITY: All operations succeed or all fail
START TRANSACTION;
TRY {
    -- Transfer $1000 from Account A to Account B
    UPDATE accounts SET balance = balance - 1000 WHERE account_id = 'A';
    UPDATE accounts SET balance = balance + 1000 WHERE account_id = 'B';
    
    -- Both operations must succeed
    COMMIT;
} CATCH {
    -- If any operation fails, rollback everything
    ROLLBACK;
}

-- CONSISTENCY: Database remains in valid state
-- Example: Account balance cannot be negative
CREATE TABLE accounts (
    account_id VARCHAR(10) PRIMARY KEY,
    balance DECIMAL(10,2) CHECK (balance >= 0),  -- Consistency rule
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ISOLATION: Concurrent transactions don't interfere
-- Transaction 1
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
START TRANSACTION;
SELECT balance FROM accounts WHERE account_id = 'A';  -- Reads committed data only
UPDATE accounts SET balance = balance - 500 WHERE account_id = 'A';
COMMIT;

-- Transaction 2 (running concurrently)
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
START TRANSACTION;
SELECT balance FROM accounts WHERE account_id = 'A';  -- Won't see uncommitted changes
COMMIT;

-- DURABILITY: Committed changes persist
-- Once transaction commits, changes survive system crashes
START TRANSACTION;
INSERT INTO audit_log (action, timestamp) VALUES ('TRANSFER_COMPLETED', NOW());
COMMIT;  -- This change is now permanent, even if system crashes

-- Isolation Levels demonstration
-- READ UNCOMMITTED: Can read uncommitted changes (dirty reads)
SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;

-- READ COMMITTED: Only reads committed data
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;

-- REPEATABLE READ: Same query returns same results within transaction
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;

-- SERIALIZABLE: Highest isolation, prevents all phenomena
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;`,
      explanation: "ACID ensures database reliability: Atomicity (all-or-nothing), Consistency (valid states), Isolation (concurrent safety), Durability (permanent changes)."
    },
    {
      id: 14,
      question: "How do you handle database deadlocks?",
      answer: `-- Deadlock occurs when two transactions wait for each other

-- Example deadlock scenario:
-- Transaction 1:
START TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE account_id = 'A';
-- ... waiting for lock on account B
UPDATE accounts SET balance = balance + 100 WHERE account_id = 'B';
COMMIT;

-- Transaction 2 (simultaneously):
START TRANSACTION;
UPDATE accounts SET balance = balance - 50 WHERE account_id = 'B';
-- ... waiting for lock on account A
UPDATE accounts SET balance = balance + 50 WHERE account_id = 'A';
COMMIT;

-- Prevention Strategy 1: Consistent lock ordering
-- Always lock resources in same order (e.g., by account_id)
START TRANSACTION;
-- Lock accounts in alphabetical order
SELECT * FROM accounts WHERE account_id IN ('A', 'B') ORDER BY account_id FOR UPDATE;
UPDATE accounts SET balance = balance - 100 WHERE account_id = 'A';
UPDATE accounts SET balance = balance + 100 WHERE account_id = 'B';
COMMIT;

-- Prevention Strategy 2: Use shorter transactions
-- BAD: Long transaction holding locks
START TRANSACTION;
SELECT * FROM accounts WHERE account_id = 'A' FOR UPDATE;
-- ... lots of business logic ...
UPDATE accounts SET balance = balance - 100 WHERE account_id = 'A';
COMMIT;

-- GOOD: Short transaction
START TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE account_id = 'A';
COMMIT;

-- Detection and handling
-- MySQL automatically detects deadlocks and rolls back one transaction
DELIMITER //
CREATE PROCEDURE transfer_money(
    IN from_account VARCHAR(10),
    IN to_account VARCHAR(10),
    IN amount DECIMAL(10,2)
)
BEGIN
    DECLARE deadlock_found CONDITION FOR SQLSTATE '40001';
    DECLARE retry_count INT DEFAULT 0;
    
    retry_loop: LOOP
        BEGIN
            DECLARE CONTINUE HANDLER FOR deadlock_found
            BEGIN
                ROLLBACK;
                SET retry_count = retry_count + 1;
                IF retry_count >= 3 THEN
                    RESIGNAL;
                END IF;
            END;
            
            START TRANSACTION;
            UPDATE accounts SET balance = balance - amount 
            WHERE account_id = from_account;
            UPDATE accounts SET balance = balance + amount 
            WHERE account_id = to_account;
            COMMIT;
            
            LEAVE retry_loop;
        END;
    END LOOP;
END //
DELIMITER ;

-- Monitoring deadlocks
SHOW ENGINE INNODB STATUS;  -- Shows recent deadlock information
SELECT * FROM INFORMATION_SCHEMA.INNODB_LOCKS;
SELECT * FROM INFORMATION_SCHEMA.INNODB_LOCK_WAITS;`,
      explanation: "Prevent deadlocks with consistent lock ordering and short transactions. Handle them with retry logic and proper error handling. Monitor using SHOW ENGINE INNODB STATUS."
    },
    {
      id: 15,
      question: "What are the differences between clustered and non-clustered indexes?",
      answer: `-- CLUSTERED INDEX
-- - Data rows are stored in order of the index key
-- - Table can have only ONE clustered index
-- - Primary key creates clustered index by default
-- - Faster for range queries and sorting

-- Example: Primary key creates clustered index
CREATE TABLE employees (
    emp_id INT AUTO_INCREMENT PRIMARY KEY,  -- Clustered index
    name VARCHAR(100),
    salary DECIMAL(10,2)
);
-- Data is physically stored ordered by emp_id

-- NON-CLUSTERED INDEX
-- - Separate structure pointing to data rows
-- - Table can have multiple non-clustered indexes
-- - Faster for specific value lookups

-- Example: Non-clustered indexes
CREATE INDEX idx_employee_name ON employees(name);     -- Non-clustered
CREATE INDEX idx_employee_salary ON employees(salary); -- Non-clustered

-- Performance comparison
-- Clustered index scan (fast for ranges)
SELECT * FROM employees 
WHERE emp_id BETWEEN 100 AND 200  -- Uses clustered index efficiently
ORDER BY emp_id;  -- No additional sorting needed

-- Non-clustered index seek (fast for specific values)
SELECT * FROM employees 
WHERE name = 'John Smith';  -- Uses non-clustered index on name

-- Covering index (non-clustered index that includes all needed columns)
CREATE INDEX idx_employee_covering 
ON employees(name) 
INCLUDE (salary, hire_date);  -- SQL Server syntax

-- Query can be satisfied entirely from index
SELECT name, salary, hire_date 
FROM employees 
WHERE name LIKE 'J%';  -- No need to access table data

-- Index maintenance considerations
-- Clustered index: INSERT/UPDATE can be slower due to page splits
INSERT INTO employees (emp_id, name, salary) 
VALUES (150, 'New Employee', 50000);  -- May cause page reorganization

-- Non-clustered index: Additional overhead on DML operations
UPDATE employees SET salary = 55000 WHERE emp_id = 150;
-- Updates both table and all affected indexes

-- Choosing the right clustered index
-- Good clustered index characteristics:
-- 1. Unique or nearly unique
-- 2. Narrow (few bytes)
-- 3. Static (rarely updated)
-- 4. Ever-increasing (like IDENTITY or timestamp)

-- Example of optimal clustered index
CREATE TABLE orders (
    order_id BIGINT IDENTITY(1,1) PRIMARY KEY,  -- Good clustered index
    customer_id INT,
    order_date DATETIME2 DEFAULT GETDATE(),
    total_amount DECIMAL(10,2)
);

-- Composite clustered index example
CREATE TABLE sales_data (
    year_month INT,      -- YYYYMM format
    product_id INT,
    sales_amount DECIMAL(12,2),
    PRIMARY KEY (year_month, product_id)  -- Composite clustered index
);
-- Data stored ordered by year_month, then product_id`,
      explanation: "Clustered index determines physical data storage order (one per table), while non-clustered indexes are separate structures pointing to data (multiple allowed). Choose clustered index carefully as it affects all queries."
    }
  ];

  const CodeBlock = ({ code, output, id }) => (
    <div className="bg-gray-900 rounded-lg overflow-hidden mb-6">
      <div className="flex items-center justify-between bg-gray-800 px-4 py-2">
        <span className="text-green-400 text-sm font-mono">SQL</span>
        <button
          onClick={() => copyToClipboard(code, id)}
          className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors"
        >
          <FaCopy className="text-sm" />
          <span className="text-sm">{copiedCode === id ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>
      <pre className="p-4 text-green-400 font-mono text-sm overflow-x-auto">
        <code>{code}</code>
      </pre>
      {output && (
        <div className="border-t border-gray-700 bg-gray-800 p-4">
          <div className="text-blue-400 text-sm mb-2">📊 Output:</div>
          <pre className="text-gray-300 font-mono text-sm whitespace-pre-wrap">{output}</pre>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-8 shadow-2xl">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm mb-4">
            <Link to="/" className="text-blue-200 hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-blue-300">→</span>
            <span className="font-medium">SQL Full Course</span>
          </nav>
          <div className="flex items-center space-x-6">
            <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
              <FaDatabase className="text-5xl" />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">SQL Full Course</h1>
              <p className="text-blue-100 text-lg">Complete SQL Tutorial - Beginner to Advanced</p>
              <div className="flex items-center space-x-4 mt-3">
                <span className="bg-green-500/20 text-green-200 px-3 py-1 rounded-full text-sm">
                  35+ Topics
                </span>
                <span className="bg-yellow-500/20 text-yellow-200 px-3 py-1 rounded-full text-sm">
                  15+ Interview Questions
                </span>
                <span className="bg-purple-500/20 text-purple-200 px-3 py-1 rounded-full text-sm">
                  Hands-on Examples
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-6 sticky top-4">
              <h3 className="font-bold text-xl mb-6 text-gray-800 flex items-center">
                <FaBookOpen className="mr-3 text-blue-600" />
                Course Content
              </h3>
              <nav className="space-y-3">
                {Object.entries(courseContent).map(([key, section]) => (
                  <button
                    key={key}
                    onClick={() => setActiveSection(key)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                      activeSection === key
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                        : 'text-gray-700 hover:bg-gray-100/80 hover:shadow-md'
                    }`}
                  >
                    <div className="font-medium">{section.title}</div>
                    <div className="text-xs opacity-75 mt-1">
                      {section.topics.length} topics
                    </div>
                  </button>
                ))}
                <button
                  onClick={() => setActiveSection('interview')}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                    activeSection === 'interview'
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-gray-100/80 hover:shadow-md'
                  }`}
                >
                  <div className="font-medium flex items-center">
                    <FaQuestionCircle className="mr-2" />
                    Interview Questions
                  </div>
                  <div className="text-xs opacity-75 mt-1">
                    100 questions with answers
                  </div>
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeSection !== 'interview' ? (
              <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
                  <FaCode className="mr-4 text-blue-600" />
                  {courseContent[activeSection]?.title}
                </h2>

                <div className="space-y-8">
                  {courseContent[activeSection]?.topics.map((topic, index) => (
                    <div key={topic.id} className="border-b border-gray-200 pb-8 last:border-b-0">
                      <button
                        onClick={() => toggleTopic(topic.id)}
                        className="w-full flex items-center justify-between text-left mb-4 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl hover:from-blue-50 hover:to-purple-50 transition-all duration-300"
                      >
                        <h3 className="text-xl font-semibold text-gray-800">
                          {topic.title}
                        </h3>
                        {expandedTopics[topic.id] ? 
                          <FaChevronUp className="text-blue-600" /> : 
                          <FaChevronDown className="text-blue-600" />
                        }
                      </button>
                      
                      {(expandedTopics[topic.id] || Object.keys(expandedTopics).length === 0) && (
                        <div className="space-y-6">
                          <div className="bg-blue-50/50 rounded-xl p-6">
                            <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                              Explanation
                            </h4>
                            <p className="text-gray-700 leading-relaxed">
                              {topic.explanation}
                            </p>
                          </div>
                          <CodeBlock 
                            code={topic.code} 
                            output={topic.output} 
                            id={`${activeSection}-${topic.id}`}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
                  <FaQuestionCircle className="mr-4 text-green-600" />
                  SQL Interview Questions & Answers
                </h2>
                
                <div className="space-y-6">
                  {interviewQuestions.map((item, index) => (
                    <div key={item.id} className="border border-gray-200 rounded-xl overflow-hidden">
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6">
                        <h3 className="font-semibold text-gray-800 mb-2">
                          Q{item.id}. {item.question}
                        </h3>
                        <p className="text-gray-600 text-sm">{item.explanation}</p>
                      </div>
                      <CodeBlock 
                        code={item.answer} 
                        id={`interview-${item.id}`}
                      />
                    </div>
                  ))}
                  
                  <div className="text-center py-8">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl inline-block">
                      <span className="font-semibold">✅ All 10 sample questions completed! Full course contains 100+ questions with detailed explanations.</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SQLCourse;