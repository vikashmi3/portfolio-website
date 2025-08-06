import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaDatabase, FaCode, FaPlay, FaCopy, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const MySQL = () => {
  const [activeSection, setActiveSection] = useState('basics');
  const [copiedCode, setCopiedCode] = useState('');

  const copyToClipboard = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  const sections = {
    introduction: {
      title: '1. Introduction to SQL & Databases',
      content: [
        {
          topic: 'What is a Database?',
          explanation: 'A database is an organized collection of structured information stored electronically in a computer system.',
          code: `-- Database characteristics:
-- • Organized data storage
-- • Easy data retrieval
-- • Data integrity and security
-- • Multiple user access
-- • ACID properties (Atomicity, Consistency, Isolation, Durability)`,
          output: 'Database: Structured data storage system\nBenefits: Organization, Security, Integrity, Accessibility'
        },
        {
          topic: 'What is RDBMS?',
          explanation: 'RDBMS (Relational Database Management System) stores data in tables with relationships between them.',
          code: `-- RDBMS Features:
-- • Tables with rows and columns
-- • Primary and Foreign keys
-- • Relationships between tables
-- • SQL for data manipulation
-- • Examples: MySQL, PostgreSQL, Oracle, SQL Server`,
          output: 'RDBMS: Relational model with tables\nKey Features: Tables, Keys, Relationships, SQL'
        },
        {
          topic: 'What is SQL?',
          explanation: 'SQL (Structured Query Language) is a standard language for managing relational databases.',
          code: `-- SQL capabilities:
-- • Create and modify database structure
-- • Insert, update, delete data
-- • Query and retrieve data
-- • Control access and security
-- • Manage transactions`,
          output: 'SQL: Standard database language\nPurpose: Database management and data manipulation'
        },
        {
          topic: 'Types of SQL Commands',
          explanation: 'SQL commands are categorized into four main types based on their functionality.',
          code: `-- DDL (Data Definition Language)
-- CREATE, ALTER, DROP, TRUNCATE

-- DML (Data Manipulation Language) 
-- INSERT, UPDATE, DELETE, SELECT

-- DCL (Data Control Language)
-- GRANT, REVOKE

-- TCL (Transaction Control Language)
-- COMMIT, ROLLBACK, SAVEPOINT`,
          output: 'SQL Types:\n• DDL: Structure definition\n• DML: Data manipulation\n• DCL: Access control\n• TCL: Transaction control'
        }
      ]
    },
    setup: {
      title: '2. SQL Environment Setup',
      content: [
        {
          topic: 'Install MySQL',
          explanation: 'Setting up MySQL database server and client tools for development.',
          code: `-- Download MySQL from official website
-- Install MySQL Server
-- Install MySQL Workbench (GUI tool)
-- Configure root password
-- Start MySQL service

-- Command line connection:
mysql -u root -p

-- Check version:
SELECT VERSION();`,
          output: 'MySQL installation completed\nVersion: 8.0.x\nWorkbench: GUI tool ready\nConnection: Successful'
        },
        {
          topic: 'SQL Tools Overview',
          explanation: 'Various tools available for SQL development and database management.',
          code: `-- Command Line Tools:
-- mysql (MySQL CLI)
-- psql (PostgreSQL CLI)

-- GUI Tools:
-- MySQL Workbench
-- phpMyAdmin
-- DBeaver (Universal)
-- HeidiSQL
-- Navicat`,
          output: 'Tools available:\n• CLI: Direct command access\n• GUI: Visual interface\n• Web: Browser-based management'
        }
      ]
    },
    datatypes: {
      title: '3. Data Types in SQL',
      content: [
        {
          topic: 'Numeric Data Types',
          explanation: 'Different numeric types for storing integer and decimal values.',
          code: `-- Integer Types
TINYINT     -- 1 byte (-128 to 127)
SMALLINT    -- 2 bytes (-32,768 to 32,767)
MEDIUMINT   -- 3 bytes (-8,388,608 to 8,388,607)
INT         -- 4 bytes (-2,147,483,648 to 2,147,483,647)
BIGINT      -- 8 bytes (very large numbers)

-- Decimal Types
DECIMAL(10,2)  -- Fixed-point (exact)
FLOAT          -- Single precision floating-point
DOUBLE         -- Double precision floating-point`,
          output: 'Numeric types configured:\n• Integers: TINYINT to BIGINT\n• Decimals: DECIMAL, FLOAT, DOUBLE\n• Usage: Choose based on range and precision needs'
        },
        {
          topic: 'String Data Types',
          explanation: 'Text storage options with different characteristics and use cases.',
          code: `-- Fixed Length
CHAR(10)        -- Fixed 10 characters, padded with spaces

-- Variable Length  
VARCHAR(255)    -- Variable up to 255 characters

-- Large Text
TEXT            -- Up to 65,535 characters
MEDIUMTEXT      -- Up to 16,777,215 characters
LONGTEXT        -- Up to 4,294,967,295 characters

-- Binary Data
BINARY(10)      -- Fixed binary data
VARBINARY(255)  -- Variable binary data
BLOB            -- Binary Large Object`,
          output: 'String types:\n• CHAR: Fixed length, faster\n• VARCHAR: Variable length, space-efficient\n• TEXT: Large content storage'
        },
        {
          topic: 'Date and Time Types',
          explanation: 'Temporal data types for storing dates, times, and timestamps.',
          code: `-- Date and Time Types
DATE            -- YYYY-MM-DD (1000-01-01 to 9999-12-31)
TIME            -- HH:MM:SS (-838:59:59 to 838:59:59)
DATETIME        -- YYYY-MM-DD HH:MM:SS
TIMESTAMP       -- Auto-updating timestamp
YEAR            -- 4-digit year (1901 to 2155)

-- Example usage
CREATE TABLE events (
    id INT,
    event_date DATE,
    event_time TIME,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`,
          output: 'Date/Time types ready:\n• DATE: Date only\n• TIME: Time only\n• DATETIME: Date and time\n• TIMESTAMP: Auto-updating'
        },
        {
          topic: 'Other Data Types',
          explanation: 'Boolean, JSON, and other specialized data types.',
          code: `-- Boolean
BOOLEAN         -- TRUE/FALSE (stored as TINYINT)

-- JSON (MySQL 5.7+)
JSON            -- Native JSON data type

-- Enumeration
ENUM('small', 'medium', 'large')  -- Predefined values

-- Set
SET('red', 'green', 'blue')       -- Multiple values

-- Example table
CREATE TABLE products (
    id INT,
    name VARCHAR(100),
    size ENUM('S', 'M', 'L', 'XL'),
    colors SET('red', 'blue', 'green'),
    is_active BOOLEAN,
    metadata JSON
);`,
          output: 'Special types:\n• BOOLEAN: True/false values\n• JSON: Structured data\n• ENUM: Predefined options\n• SET: Multiple selections'
        }
      ]
    },
    ddl: {
      title: '4. DDL - Data Definition Language',
      content: [
        {
          topic: 'CREATE - Creating Tables',
          explanation: 'CREATE statement is used to create databases, tables, and other database objects.',
          code: `-- Create database
CREATE DATABASE company_db;
USE company_db;

-- Create table with constraints
CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    salary DECIMAL(10,2) CHECK (salary > 0),
    department VARCHAR(50) DEFAULT 'General',
    hire_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Show table structure
DESCRIBE employees;`,
          output: `Database and table created successfully!
+------------+--------------+------+-----+-------------------+
| Field      | Type         | Null | Key | Default           |
+------------+--------------+------+-----+-------------------+
| id         | int          | NO   | PRI | NULL              |
| name       | varchar(100) | NO   |     | NULL              |
| email      | varchar(100) | YES  | UNI | NULL              |
| salary     | decimal(10,2)| YES  |     | NULL              |
+------------+--------------+------+-----+-------------------+`
        },
        {
          topic: 'ALTER - Modifying Tables',
          explanation: 'ALTER statement modifies existing database objects like adding/dropping columns.',
          code: `-- Add new column
ALTER TABLE employees ADD phone VARCHAR(15);

-- Add column with position
ALTER TABLE employees ADD age INT AFTER name;

-- Modify column data type
ALTER TABLE employees MODIFY salary DECIMAL(12,2);

-- Change column name and type
ALTER TABLE employees CHANGE phone phone_number VARCHAR(20);

-- Add constraint
ALTER TABLE employees ADD CONSTRAINT chk_age CHECK (age >= 18);

-- Drop column
ALTER TABLE employees DROP COLUMN age;`,
          output: `Table structure modified:
✅ Column added: phone
✅ Column modified: salary precision increased
✅ Column renamed: phone → phone_number
✅ Constraint added: age check
✅ Column dropped: age`
        },
        {
          topic: 'DROP - Removing Objects',
          explanation: 'DROP statement permanently removes database objects.',
          code: `-- Drop table (removes structure and data)
DROP TABLE IF EXISTS old_employees;

-- Drop database
DROP DATABASE IF EXISTS old_company_db;

-- Drop index
DROP INDEX idx_employee_email ON employees;

-- Drop constraint
ALTER TABLE employees DROP CONSTRAINT chk_age;

-- Drop column (alternative syntax)
ALTER TABLE employees DROP phone_number;`,
          output: `Objects removed:
✅ Table dropped: old_employees
✅ Database dropped: old_company_db
✅ Index dropped: idx_employee_email
✅ Constraint dropped: chk_age`
        },
        {
          topic: 'TRUNCATE - Removing Data',
          explanation: 'TRUNCATE removes all data from table but keeps the structure.',
          code: `-- TRUNCATE vs DELETE comparison

-- TRUNCATE (faster, resets AUTO_INCREMENT)
TRUNCATE TABLE employees;

-- DELETE (slower, keeps AUTO_INCREMENT)
DELETE FROM employees;

-- TRUNCATE characteristics:
-- • Faster than DELETE
-- • Cannot be rolled back
-- • Resets AUTO_INCREMENT counter
-- • Cannot use WHERE clause
-- • Triggers are not fired`,
          output: `TRUNCATE completed:
✅ All data removed from employees table
✅ Table structure preserved
✅ AUTO_INCREMENT counter reset to 1
✅ Operation completed instantly`
        }
      ]
    },
    dml: {
      title: '5. DML - Data Manipulation Language',
      content: [
        {
          topic: 'INSERT - Adding Data',
          explanation: 'INSERT statement adds new records to tables.',
          code: `-- Insert single record
INSERT INTO employees (name, email, salary, department)
VALUES ('John Doe', 'john@company.com', 50000, 'Engineering');

-- Insert multiple records
INSERT INTO employees (name, email, salary, department) VALUES
    ('Jane Smith', 'jane@company.com', 55000, 'Marketing'),
    ('Mike Johnson', 'mike@company.com', 48000, 'Sales'),
    ('Sarah Wilson', 'sarah@company.com', 52000, 'Engineering');

-- Insert with SELECT
INSERT INTO employees (name, email, salary, department)
SELECT 'Admin User', 'admin@company.com', 60000, 'IT'
WHERE NOT EXISTS (SELECT 1 FROM employees WHERE email = 'admin@company.com');`,
          output: `Data inserted successfully:
✅ 1 employee added: John Doe
✅ 3 employees added in batch
✅ 1 conditional insert: Admin User

Total records: 5 employees`
        },
        {
          topic: 'UPDATE - Modifying Data',
          explanation: 'UPDATE statement modifies existing records in tables.',
          code: `-- Update single record
UPDATE employees 
SET salary = 55000 
WHERE name = 'John Doe';

-- Update multiple columns
UPDATE employees 
SET salary = salary * 1.10, department = 'Senior Engineering'
WHERE department = 'Engineering' AND salary > 50000;

-- Update with calculation
UPDATE employees 
SET salary = CASE 
    WHEN department = 'Engineering' THEN salary * 1.15
    WHEN department = 'Marketing' THEN salary * 1.10
    ELSE salary * 1.05
END;

-- Update with JOIN
UPDATE employees e
JOIN departments d ON e.department = d.name
SET e.salary = e.salary + d.bonus
WHERE d.bonus > 0;`,
          output: `Updates completed:
✅ John Doe salary: $50,000 → $55,000
✅ Engineering team: 10% raise applied
✅ Department-based raises: Applied to all
✅ Bonus updates: Applied where applicable`
        },
        {
          topic: 'DELETE - Removing Data',
          explanation: 'DELETE statement removes records from tables.',
          code: `-- Delete specific record
DELETE FROM employees 
WHERE name = 'John Doe';

-- Delete with conditions
DELETE FROM employees 
WHERE salary < 45000 AND department = 'Sales';

-- Delete with LIMIT (safety measure)
DELETE FROM employees 
WHERE department = 'Temp' 
LIMIT 5;

-- Delete with JOIN
DELETE e FROM employees e
JOIN departments d ON e.department = d.name
WHERE d.status = 'Closed';

-- Safe delete pattern
SELECT * FROM employees WHERE salary < 30000; -- Preview first
-- DELETE FROM employees WHERE salary < 30000; -- Then delete`,
          output: `Deletions completed:
✅ John Doe record removed
✅ Low-salary sales records: 2 removed
✅ Temp department: 5 records removed
✅ Closed departments: All related records removed`
        }
      ]
    },
    select: {
      title: '6. SELECT Statement',
      content: [
        {
          topic: 'Basic SELECT',
          explanation: 'SELECT statement retrieves data from tables. It\'s the most commonly used SQL command.',
          code: `-- Select all columns
SELECT * FROM employees;

-- Select specific columns
SELECT name, email, salary FROM employees;

-- Select with calculations
SELECT name, salary, salary * 12 AS annual_salary FROM employees;

-- Select distinct values
SELECT DISTINCT department FROM employees;

-- Select with constants
SELECT name, 'Employee' AS type, salary FROM employees;`,
          output: `+------------+------------------------+----------+
| name       | email                  | salary   |
+------------+------------------------+----------+
| John Doe   | john@company.com       | 50000.00 |
| Jane Smith | jane@company.com       | 55000.00 |
| Mike Johnson| mike@company.com      | 48000.00 |
+------------+------------------------+----------+`
        },
        {
          topic: 'Using Aliases',
          explanation: 'Aliases provide temporary names for columns and tables to make queries more readable.',
          code: `-- Column aliases
SELECT 
    name AS employee_name,
    email AS contact_email,
    salary AS monthly_salary,
    salary * 12 AS annual_salary
FROM employees;

-- Table aliases
SELECT 
    e.name AS EmployeeName,
    e.salary AS MonthlySalary
FROM employees AS e;

-- Aliases without AS keyword
SELECT 
    name EmployeeName,
    salary MonthlySalary
FROM employees e;`,
          output: `+---------------+------------------------+----------------+
| employee_name | contact_email          | monthly_salary |
+---------------+------------------------+----------------+
| John Doe      | john@company.com       |       50000.00 |
| Jane Smith    | jane@company.com       |       55000.00 |
+---------------+------------------------+----------------+`
        }
      ]
    },
    filtering: {
      title: '7. Filtering Data',
      content: [
        {
          topic: 'WHERE Clause',
          explanation: 'WHERE clause filters records based on specified conditions.',
          code: `-- Basic WHERE conditions
SELECT * FROM employees WHERE salary > 50000;

-- Multiple conditions with AND
SELECT * FROM employees 
WHERE salary > 45000 AND department = 'Engineering';

-- Multiple conditions with OR
SELECT * FROM employees 
WHERE department = 'Sales' OR department = 'Marketing';

-- NOT condition
SELECT * FROM employees 
WHERE NOT department = 'HR';`,
          output: `Filtered results:
+----+------------+----------+-------------+
| id | name       | salary   | department  |
+----+------------+----------+-------------+
|  1 | John Doe   | 55000.00 | Engineering |
|  4 | Sarah Wilson| 52000.00| Engineering |
+----+------------+----------+-------------+`
        },
        {
          topic: 'BETWEEN and IN',
          explanation: 'BETWEEN checks for values within a range, IN checks for values in a list.',
          code: `-- BETWEEN for range queries
SELECT * FROM employees 
WHERE salary BETWEEN 45000 AND 55000;

-- IN for multiple specific values
SELECT * FROM employees 
WHERE department IN ('Sales', 'Marketing', 'HR');

-- NOT BETWEEN
SELECT * FROM employees 
WHERE salary NOT BETWEEN 40000 AND 50000;

-- NOT IN
SELECT * FROM employees 
WHERE department NOT IN ('Engineering', 'IT');`,
          output: `BETWEEN results: 3 employees with salary $45K-$55K
IN results: 5 employees in Sales/Marketing/HR
NOT BETWEEN: 2 employees outside $40K-$50K range`
        },
        {
          topic: 'LIKE and Wildcards',
          explanation: 'LIKE operator searches for patterns in text using wildcards.',
          code: `-- LIKE with % (zero or more characters)
SELECT * FROM employees WHERE name LIKE 'J%';        -- Starts with J
SELECT * FROM employees WHERE name LIKE '%son';      -- Ends with son
SELECT * FROM employees WHERE name LIKE '%oh%';      -- Contains oh

-- LIKE with _ (single character)
SELECT * FROM employees WHERE name LIKE 'J_hn';      -- J_hn pattern

-- Case insensitive search
SELECT * FROM employees WHERE name LIKE '%SMITH%';

-- NOT LIKE
SELECT * FROM employees WHERE email NOT LIKE '%gmail%';`,
          output: `Pattern matching results:
• Names starting with 'J': John Doe, Jane Smith
• Names ending with 'son': Mike Johnson, Sarah Wilson
• Names containing 'oh': John Doe
• Non-Gmail emails: 8 employees`
        },
        {
          topic: 'IS NULL and IS NOT NULL',
          explanation: 'NULL checks for missing or undefined values.',
          code: `-- Find records with NULL values
SELECT * FROM employees WHERE phone IS NULL;

-- Find records with non-NULL values
SELECT * FROM employees WHERE phone IS NOT NULL;

-- Count NULL values
SELECT COUNT(*) as employees_without_phone 
FROM employees 
WHERE phone IS NULL;

-- Handle NULL in calculations
SELECT 
    name,
    COALESCE(phone, 'No phone') as contact_phone
FROM employees;`,
          output: `NULL handling:
• Employees without phone: 3
• Employees with phone: 7
• NULL values replaced with 'No phone' in display`
        }
      ]
    },
    sorting: {
      title: '8. Sorting Data',
      content: [
        {
          topic: 'ORDER BY Basics',
          explanation: 'ORDER BY sorts query results in ascending or descending order.',
          code: `-- Sort by single column (ascending by default)
SELECT * FROM employees ORDER BY salary;

-- Sort in descending order
SELECT * FROM employees ORDER BY salary DESC;

-- Sort by multiple columns
SELECT * FROM employees 
ORDER BY department ASC, salary DESC;

-- Sort by column position
SELECT name, salary, department FROM employees 
ORDER BY 2 DESC;  -- Sort by salary (2nd column)`,
          output: `Sorting results:
+------------+----------+-------------+
| name       | salary   | department  |
+------------+----------+-------------+
| Sarah Wilson| 55000.00| Engineering |
| John Doe   | 52000.00 | Engineering |
| Jane Smith | 50000.00 | Marketing   |
+------------+----------+-------------+`
        },
        {
          topic: 'Advanced Sorting',
          explanation: 'Complex sorting with expressions, NULL handling, and custom orders.',
          code: `-- Sort by calculated values
SELECT name, salary, salary * 12 as annual_salary
FROM employees 
ORDER BY annual_salary DESC;

-- Custom sort order with CASE
SELECT * FROM employees 
ORDER BY 
    CASE department
        WHEN 'Engineering' THEN 1
        WHEN 'Sales' THEN 2
        WHEN 'Marketing' THEN 3
        ELSE 4
    END,
    salary DESC;

-- Handle NULL values in sorting
SELECT * FROM employees 
ORDER BY phone IS NULL, phone;  -- NULLs last`,
          output: `Advanced sorting applied:
• By annual salary: Highest earners first
• Custom department priority: Engineering → Sales → Marketing
• NULL phone numbers: Sorted to end of list`
        }
      ]
    },
    limit: {
      title: '9. LIMIT / TOP',
      content: [
        {
          topic: 'LIMIT in MySQL',
          explanation: 'LIMIT restricts the number of rows returned by a query.',
          code: `-- Get first 5 employees
SELECT * FROM employees LIMIT 5;

-- Get top 3 highest paid employees
SELECT * FROM employees 
ORDER BY salary DESC 
LIMIT 3;

-- Pagination with OFFSET
SELECT * FROM employees 
ORDER BY id 
LIMIT 5 OFFSET 10;  -- Skip first 10, get next 5

-- Alternative LIMIT syntax
SELECT * FROM employees 
ORDER BY id 
LIMIT 10, 5;  -- Skip 10, get 5`,
          output: `LIMIT results:
• First 5 employees: Records 1-5
• Top 3 salaries: $60K, $55K, $52K
• Page 3 (records 11-15): 5 employees
• Pagination: Efficient data retrieval`
        },
        {
          topic: 'TOP in SQL Server',
          explanation: 'TOP clause limits results in SQL Server (alternative to LIMIT).',
          code: `-- SQL Server TOP syntax
SELECT TOP 5 * FROM employees;

-- TOP with percentage
SELECT TOP 10 PERCENT * FROM employees;

-- TOP with ORDER BY
SELECT TOP 3 * FROM employees 
ORDER BY salary DESC;

-- TOP with TIES (include tied values)
SELECT TOP 3 WITH TIES * FROM employees 
ORDER BY salary DESC;`,
          output: `TOP results (SQL Server):
• TOP 5: First 5 records
• TOP 10%: 10% of total records
• WITH TIES: Includes employees with same salary as 3rd highest`
        }
      ]
    },
    aggregates: {
      title: '10. Aggregate Functions',
      content: [
        {
          topic: 'Basic Aggregate Functions',
          explanation: 'Aggregate functions perform calculations on multiple rows and return a single result.',
          code: `-- COUNT - count rows
SELECT COUNT(*) as total_employees FROM employees;
SELECT COUNT(phone) as employees_with_phone FROM employees;

-- SUM - total of numeric values
SELECT SUM(salary) as total_payroll FROM employees;

-- AVG - average value
SELECT AVG(salary) as average_salary FROM employees;

-- MAX and MIN - highest and lowest values
SELECT 
    MAX(salary) as highest_salary,
    MIN(salary) as lowest_salary
FROM employees;`,
          output: `Aggregate results:
• Total employees: 10
• Employees with phone: 7
• Total payroll: $520,000
• Average salary: $52,000
• Salary range: $45,000 - $60,000`
        },
        {
          topic: 'Advanced Aggregates',
          explanation: 'Complex aggregate calculations with conditions and expressions.',
          code: `-- Conditional aggregation
SELECT 
    COUNT(*) as total_employees,
    COUNT(CASE WHEN salary > 50000 THEN 1 END) as high_earners,
    AVG(CASE WHEN department = 'Engineering' THEN salary END) as eng_avg_salary
FROM employees;

-- String aggregation (MySQL)
SELECT 
    department,
    GROUP_CONCAT(name ORDER BY salary DESC) as employee_list
FROM employees 
GROUP BY department;

-- Statistical functions
SELECT 
    STDDEV(salary) as salary_std_dev,
    VARIANCE(salary) as salary_variance
FROM employees;`,
          output: `Advanced aggregates:
• High earners (>$50K): 6 out of 10
• Engineering avg: $54,000
• Employee lists by department: Grouped and sorted
• Salary std deviation: $4,500`
        }
      ]
    },
    groupby: {
      title: '11. GROUP BY and HAVING',
      content: [
        {
          topic: 'GROUP BY Basics',
          explanation: 'GROUP BY groups rows with same values and allows aggregate calculations per group.',
          code: `-- Group by single column
SELECT department, COUNT(*) as employee_count
FROM employees 
GROUP BY department;

-- Group by multiple columns
SELECT department, hire_year, COUNT(*) as count
FROM employees 
GROUP BY department, YEAR(hire_date);

-- Group with aggregates
SELECT 
    department,
    COUNT(*) as employee_count,
    AVG(salary) as avg_salary,
    MAX(salary) as max_salary
FROM employees 
GROUP BY department;`,
          output: `Grouping results:
+-------------+----------------+------------+
| department  | employee_count | avg_salary |
+-------------+----------------+------------+
| Engineering |              4 |   54000.00 |
| Marketing   |              3 |   51000.00 |
| Sales       |              3 |   48000.00 |
+-------------+----------------+------------+`
        },
        {
          topic: 'HAVING Clause',
          explanation: 'HAVING filters groups after GROUP BY, similar to WHERE but for aggregated data.',
          code: `-- Filter groups with HAVING
SELECT department, COUNT(*) as employee_count
FROM employees 
GROUP BY department 
HAVING COUNT(*) > 3;

-- HAVING with multiple conditions
SELECT department, AVG(salary) as avg_salary
FROM employees 
GROUP BY department 
HAVING AVG(salary) > 50000 AND COUNT(*) >= 2;

-- WHERE vs HAVING
SELECT department, COUNT(*) as count
FROM employees 
WHERE salary > 45000  -- Filter rows before grouping
GROUP BY department 
HAVING COUNT(*) > 1;  -- Filter groups after grouping`,
          output: `HAVING results:
• Departments with >3 employees: Engineering (4)
• High-paying departments: Engineering ($54K avg), Marketing ($51K avg)
• Combined filtering: 2 departments meet both criteria`
        }
      ]
    },
    joins: {
      title: '12. SQL Joins',
      content: [
        {
          topic: 'INNER JOIN',
          explanation: 'INNER JOIN returns only records that have matching values in both tables.',
          code: `-- Setup tables for examples
CREATE TABLE departments (
    id INT PRIMARY KEY,
    name VARCHAR(50)
);

INSERT INTO departments VALUES 
(1, 'Engineering'), (2, 'Marketing'), (3, 'Sales');

-- Basic INNER JOIN
SELECT 
    e.name,
    e.salary,
    d.name as department_name
FROM employees e
INNER JOIN departments d ON e.department_id = d.id;

-- Multiple table INNER JOIN
SELECT 
    e.name as employee_name,
    d.name as department,
    p.name as project_name
FROM employees e
INNER JOIN departments d ON e.department_id = d.id
INNER JOIN projects p ON d.id = p.department_id;`,
          output: `INNER JOIN results:
+------------+----------+-----------------+
| name       | salary   | department_name |
+------------+----------+-----------------+
| John Doe   | 50000.00 | Engineering     |
| Jane Smith | 55000.00 | Marketing       |
| Mike Johnson| 48000.00| Engineering     |
+------------+----------+-----------------+

Only employees with matching departments shown`
        },
        {
          topic: 'LEFT JOIN',
          explanation: 'LEFT JOIN returns all records from left table and matched records from right table.',
          code: `-- LEFT JOIN - all employees, with or without departments
SELECT 
    e.name,
    e.salary,
    COALESCE(d.name, 'No Department') as department_name
FROM employees e
LEFT JOIN departments d ON e.department_id = d.id;

-- LEFT JOIN with aggregation
SELECT 
    d.name as department_name,
    COUNT(e.id) as employee_count,
    COALESCE(AVG(e.salary), 0) as avg_salary
FROM departments d
LEFT JOIN employees e ON d.id = e.department_id
GROUP BY d.id, d.name;`,
          output: `LEFT JOIN results:
+------------+----------+-----------------+
| name       | salary   | department_name |
+------------+----------+-----------------+
| John Doe   | 50000.00 | Engineering     |
| Jane Smith | 55000.00 | Marketing       |
| Tom Brown  | 45000.00 | No Department   |
+------------+----------+-----------------+

All employees shown, even without departments`
        },
        {
          topic: 'RIGHT JOIN and FULL OUTER JOIN',
          explanation: 'RIGHT JOIN returns all records from right table. FULL OUTER JOIN returns all records from both tables.',
          code: `-- RIGHT JOIN - all departments, with or without employees
SELECT 
    COALESCE(e.name, 'No Employee') as employee_name,
    d.name as department_name
FROM employees e
RIGHT JOIN departments d ON e.department_id = d.id;

-- FULL OUTER JOIN (MySQL doesn't support, use UNION)
SELECT e.name, d.name as department
FROM employees e
LEFT JOIN departments d ON e.department_id = d.id
UNION
SELECT e.name, d.name as department
FROM employees e
RIGHT JOIN departments d ON e.department_id = d.id;

-- SELF JOIN - employees and their managers
SELECT 
    e1.name as employee,
    e2.name as manager
FROM employees e1
LEFT JOIN employees e2 ON e1.manager_id = e2.id;`,
          output: `RIGHT JOIN: All departments shown\nFULL OUTER: All employees and departments\nSELF JOIN: Employee-manager relationships\n\n+------------+-------------+\n| employee   | manager     |\n+------------+-------------+\n| John Doe   | Jane Smith  |\n| Mike Johnson| Jane Smith |\n+------------+-------------+`
        }
      ]
    },
    subqueries: {
      title: '13. Subqueries',
      content: [
        {
          topic: 'Scalar Subqueries',
          explanation: 'Scalar subqueries return a single value and can be used in SELECT, WHERE, or HAVING clauses.',
          code: `-- Subquery in WHERE clause
SELECT name, salary 
FROM employees 
WHERE salary > (SELECT AVG(salary) FROM employees);

-- Subquery in SELECT clause
SELECT 
    name,
    salary,
    (SELECT AVG(salary) FROM employees) as company_avg,
    salary - (SELECT AVG(salary) FROM employees) as difference
FROM employees;

-- Subquery with MAX/MIN
SELECT name, salary
FROM employees
WHERE salary = (SELECT MAX(salary) FROM employees);`,
          output: `Above average earners:
+------------+----------+
| name       | salary   |
+------------+----------+
| Jane Smith | 55000.00 |
| Sarah Wilson| 52000.00|
+------------+----------+

Highest paid: Jane Smith ($55,000)`
        },
        {
          topic: 'Row and Table Subqueries',
          explanation: 'Row subqueries return single rows, table subqueries return multiple rows and columns.',
          code: `-- Row subquery (multiple columns, single row)
SELECT name, salary, department
FROM employees
WHERE (salary, department) = (
    SELECT MAX(salary), 'Engineering'
    FROM employees
    WHERE department = 'Engineering'
);

-- Table subquery with IN
SELECT name, salary
FROM employees
WHERE department_id IN (
    SELECT id FROM departments 
    WHERE name IN ('Engineering', 'Marketing')
);

-- Table subquery with EXISTS
SELECT name
FROM employees e
WHERE EXISTS (
    SELECT 1 FROM departments d 
    WHERE d.id = e.department_id AND d.budget > 100000
);`,
          output: `Row subquery: Top Engineering employee\nIN subquery: 7 employees in Eng/Marketing\nEXISTS subquery: 5 employees in well-funded departments`
        },
        {
          topic: 'Correlated Subqueries',
          explanation: 'Correlated subqueries reference columns from the outer query and execute once per outer row.',
          code: `-- Find employees earning above department average
SELECT name, salary, department
FROM employees e1
WHERE salary > (
    SELECT AVG(salary)
    FROM employees e2
    WHERE e2.department = e1.department
);

-- Find departments with above-average employee count
SELECT department, 
       (SELECT COUNT(*) FROM employees e2 WHERE e2.department = e1.department) as emp_count
FROM employees e1
WHERE (
    SELECT COUNT(*) FROM employees e2 WHERE e2.department = e1.department
) > (
    SELECT AVG(dept_count) FROM (
        SELECT COUNT(*) as dept_count FROM employees GROUP BY department
    ) as dept_avg
)
GROUP BY department;`,
          output: `Correlated results:\n• Above dept avg: 4 employees\n• Large departments: Engineering (4), Marketing (3)\n• Performance: Slower due to repeated execution`
        }
      ]
    },
    setops: {
      title: '14. Set Operations',
      content: [
        {
          topic: 'UNION and UNION ALL',
          explanation: 'UNION combines results from multiple SELECT statements, removing duplicates. UNION ALL keeps duplicates.',
          code: `-- UNION - combines and removes duplicates
SELECT name, 'Current' as status FROM employees WHERE is_active = 1
UNION
SELECT name, 'Former' as status FROM former_employees;

-- UNION ALL - keeps all records including duplicates
SELECT department FROM employees
UNION ALL
SELECT department FROM contractors;

-- UNION with ORDER BY
SELECT name, salary FROM employees WHERE department = 'Engineering'
UNION
SELECT name, salary FROM employees WHERE department = 'Marketing'
ORDER BY salary DESC;`,
          output: `UNION results:\n+------------+---------+\n| name       | status  |\n+------------+---------+\n| John Doe   | Current |\n| Jane Smith | Current |\n| Bob Wilson | Former  |\n+------------+---------+\n\nCombined 15 current + 8 former employees`
        },
        {
          topic: 'INTERSECT and EXCEPT',
          explanation: 'INTERSECT returns common records. EXCEPT returns records from first query not in second.',
          code: `-- INTERSECT (MySQL doesn't support directly, use JOIN)
-- Find employees who are also managers
SELECT e1.name
FROM employees e1
INNER JOIN employees e2 ON e1.id = e2.manager_id;

-- EXCEPT equivalent (MySQL doesn't support, use NOT EXISTS)
-- Find employees who are not managers
SELECT name
FROM employees e1
WHERE NOT EXISTS (
    SELECT 1 FROM employees e2 WHERE e2.manager_id = e1.id
);

-- Alternative using LEFT JOIN
SELECT e1.name
FROM employees e1
LEFT JOIN employees e2 ON e1.id = e2.manager_id
WHERE e2.manager_id IS NULL;`,
          output: `Set operations (MySQL alternatives):\n• Managers: 3 employees who manage others\n• Non-managers: 7 employees with no direct reports\n• Implementation: Using JOINs and NOT EXISTS`
        }
      ]
    },
    aliases: {
      title: '15. Aliases',
      content: [
        {
          topic: 'Column and Table Aliases',
          explanation: 'Aliases provide temporary names for columns and tables to improve readability.',
          code: `-- Column aliases
SELECT 
    name AS employee_name,
    salary AS monthly_pay,
    salary * 12 AS annual_pay,
    UPPER(department) AS dept_upper
FROM employees;

-- Table aliases
SELECT 
    e.name,
    e.salary,
    d.name AS department_name
FROM employees e
JOIN departments d ON e.department_id = d.id;

-- Aliases in calculations
SELECT 
    name,
    salary,
    CASE 
        WHEN salary > 55000 THEN 'High'
        WHEN salary > 45000 THEN 'Medium'
        ELSE 'Low'
    END AS salary_grade
FROM employees;`,
          output: `Aliases applied:\n+---------------+-------------+------------+\n| employee_name | monthly_pay | annual_pay |\n+---------------+-------------+------------+\n| John Doe      |    50000.00 |  600000.00 |\n| Jane Smith    |    55000.00 |  660000.00 |\n+---------------+-------------+------------+`
        }
      ]
    },
    views: {
      title: '16. Views',
      content: [
        {
          topic: 'Creating and Using Views',
          explanation: 'Views are virtual tables based on SQL queries that simplify complex operations.',
          code: `-- Create a simple view
CREATE VIEW employee_summary AS
SELECT 
    name,
    email,
    salary,
    department,
    CASE 
        WHEN salary >= 55000 THEN 'Senior'
        WHEN salary >= 45000 THEN 'Mid-level'
        ELSE 'Junior'
    END as level
FROM employees
WHERE is_active = 1;

-- Use the view
SELECT * FROM employee_summary WHERE level = 'Senior';

-- Create view with joins
CREATE VIEW department_stats AS
SELECT 
    d.name as department_name,
    COUNT(e.id) as employee_count,
    AVG(e.salary) as avg_salary,
    MAX(e.salary) as max_salary
FROM departments d
LEFT JOIN employees e ON d.id = e.department_id
GROUP BY d.id, d.name;`,
          output: `Views created successfully:\n✅ employee_summary: Simplified employee data\n✅ department_stats: Aggregated department metrics\n\nUsage: SELECT * FROM employee_summary;\nBenefits: Simplified queries, security, reusability`
        },
        {
          topic: 'Managing Views',
          explanation: 'Operations to modify, replace, and drop views.',
          code: `-- Replace existing view
CREATE OR REPLACE VIEW employee_summary AS
SELECT 
    id,
    name,
    email,
    salary,
    department,
    hire_date,
    DATEDIFF(CURDATE(), hire_date) as days_employed
FROM employees
WHERE is_active = 1;

-- Show view definition
SHOW CREATE VIEW employee_summary;

-- List all views
SHOW FULL TABLES WHERE Table_type = 'VIEW';

-- Drop view
DROP VIEW IF EXISTS old_employee_view;`,
          output: `View management:\n✅ View updated with new columns\n✅ View definition displayed\n✅ All views listed: 3 views found\n✅ Old view removed`
        }
      ]
    },
    indexes: {
      title: '17. Indexes',
      content: [
        {
          topic: 'Creating Indexes',
          explanation: 'Indexes improve query performance by creating fast access paths to data.',
          code: `-- Create single column index
CREATE INDEX idx_employee_email ON employees(email);

-- Create composite index
CREATE INDEX idx_dept_salary ON employees(department, salary);

-- Create unique index
CREATE UNIQUE INDEX idx_employee_id ON employees(employee_id);

-- Create partial index (with condition)
CREATE INDEX idx_active_employees ON employees(department) 
WHERE is_active = 1;

-- Show indexes on table
SHOW INDEX FROM employees;`,
          output: `Indexes created:\n✅ Email index: Fast email lookups\n✅ Composite index: Optimized dept+salary queries\n✅ Unique index: Enforces uniqueness\n✅ Partial index: Only active employees\n\nQuery performance improved significantly`
        },
        {
          topic: 'Index Management',
          explanation: 'Monitoring and maintaining indexes for optimal performance.',
          code: `-- Analyze index usage
SELECT 
    TABLE_NAME,
    INDEX_NAME,
    CARDINALITY,
    INDEX_TYPE
FROM information_schema.STATISTICS
WHERE TABLE_SCHEMA = 'company_db';

-- Check query execution plan
EXPLAIN SELECT * FROM employees WHERE email = 'john@company.com';

-- Drop unused index
DROP INDEX idx_old_column ON employees;

-- Rebuild index (optimize)
ALTER TABLE employees DROP INDEX idx_dept_salary,
ADD INDEX idx_dept_salary (department, salary);`,
          output: `Index management:\n• Usage analysis: 5 indexes, 3 actively used\n• Query plan: Using idx_employee_email (fast)\n• Cleanup: 2 unused indexes removed\n• Optimization: Indexes rebuilt for better performance`
        }
      ]
    },
    constraints: {
      title: '18. Constraints',
      content: [
        {
          topic: 'Indexes',
          explanation: 'Indexes improve query performance by creating fast access paths to data.',
          code: `-- Create single column index
CREATE INDEX idx_employee_email ON employees(email);

-- Create composite index
CREATE INDEX idx_employee_dept_salary ON employees(department_id, salary);

-- Create unique index
CREATE UNIQUE INDEX idx_employee_employee_id ON employees(employee_id);

-- Show indexes
SHOW INDEX FROM employees;

-- Drop index
DROP INDEX idx_employee_email ON employees;`,
          output: `Index created successfully!
Query performance improved for email lookups.

+----------+------------+------------------+--------------+
| Table    | Non_unique | Key_name         | Column_name  |
+----------+------------+------------------+--------------+
| employees| 0          | PRIMARY          | id           |
| employees| 0          | idx_employee_email| email       |
+----------+------------+------------------+--------------+`
        },
        {
          topic: 'Views',
          explanation: 'Views are virtual tables based on SQL queries that simplify complex operations.',
          code: `-- Create a view
CREATE VIEW employee_summary AS
SELECT 
    e.id,
    CONCAT(e.first_name, ' ', e.last_name) as full_name,
    e.email,
    e.salary,
    d.name as department_name,
    CASE 
        WHEN e.salary >= 80000 THEN 'Senior'
        WHEN e.salary >= 60000 THEN 'Mid-level'
        ELSE 'Junior'
    END as level
FROM employees e
LEFT JOIN departments d ON e.department_id = d.id
WHERE e.is_active = TRUE;

-- Use the view
SELECT * FROM employee_summary 
WHERE level = 'Senior';

-- Update view
CREATE OR REPLACE VIEW employee_summary AS
SELECT 
    e.id,
    CONCAT(e.first_name, ' ', e.last_name) as full_name,
    e.email,
    e.salary,
    d.name as department_name,
    d.budget as dept_budget
FROM employees e
LEFT JOIN departments d ON e.department_id = d.id;`,
          output: `View created successfully!

+----+--------------+------------------------+----------+-----------+
| id | full_name    | email                  | salary   | level     |
+----+--------------+------------------------+----------+-----------+
|  2 | Jane Smith   | jane.smith@company.com | 80000.00 | Senior    |
|  4 | Sarah Wilson | sarah.wilson@company.com| 85000.00 | Senior    |
+----+--------------+------------------------+----------+-----------+`
        },
        {
          topic: 'Stored Procedures',
          explanation: 'Stored procedures are reusable SQL code blocks that can accept parameters.',
          code: `-- Create stored procedure
DELIMITER //
CREATE PROCEDURE GetEmployeesByDepartment(
    IN dept_id INT,
    IN min_salary DECIMAL(10,2)
)
BEGIN
    SELECT 
        e.first_name,
        e.last_name,
        e.salary,
        d.name as department_name
    FROM employees e
    JOIN departments d ON e.department_id = d.id
    WHERE e.department_id = dept_id 
    AND e.salary >= min_salary
    ORDER BY e.salary DESC;
END //
DELIMITER ;

-- Call stored procedure
CALL GetEmployeesByDepartment(1, 70000);

-- Create procedure with OUT parameter
DELIMITER //
CREATE PROCEDURE GetDepartmentStats(
    IN dept_id INT,
    OUT emp_count INT,
    OUT avg_salary DECIMAL(10,2)
)
BEGIN
    SELECT COUNT(*), AVG(salary)
    INTO emp_count, avg_salary
    FROM employees
    WHERE department_id = dept_id;
END //
DELIMITER ;

-- Call with OUT parameters
CALL GetDepartmentStats(1, @count, @avg);
SELECT @count as employee_count, @avg as average_salary;`,
          output: `Procedure created successfully!

+------------+-----------+----------+-----------------+
| first_name | last_name | salary   | department_name |
+------------+-----------+----------+-----------------+
| John       | Doe       | 78000.00 | Engineering     |
| Mike       | Johnson   | 70000.00 | Engineering     |
+------------+-----------+----------+-----------------+

Department Stats:
Employee Count: 2, Average Salary: $74,000`
        },
        {
          topic: 'Triggers',
          explanation: 'Triggers are special procedures that automatically execute in response to database events.',
          code: `-- Create audit table
CREATE TABLE employee_audit (
    id INT AUTO_INCREMENT PRIMARY KEY,
    employee_id INT,
    action VARCHAR(10),
    old_salary DECIMAL(10,2),
    new_salary DECIMAL(10,2),
    changed_by VARCHAR(100),
    changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create AFTER UPDATE trigger
DELIMITER //
CREATE TRIGGER employee_salary_audit
AFTER UPDATE ON employees
FOR EACH ROW
BEGIN
    IF OLD.salary != NEW.salary THEN
        INSERT INTO employee_audit (
            employee_id, 
            action, 
            old_salary, 
            new_salary, 
            changed_by
        )
        VALUES (
            NEW.id, 
            'UPDATE', 
            OLD.salary, 
            NEW.salary, 
            USER()
        );
    END IF;
END //
DELIMITER ;

-- Test the trigger
UPDATE employees SET salary = 82000 WHERE id = 1;

-- Check audit log
SELECT * FROM employee_audit;`,
          output: `Trigger created successfully!

Salary update logged:
+----+-------------+--------+------------+------------+------------------+
| id | employee_id | action | old_salary | new_salary | changed_by       |
+----+-------------+--------+------------+------------+------------------+
|  1 |           1 | UPDATE |   78000.00 |   82000.00 | root@localhost   |
+----+-------------+--------+------------+------------+------------------+`
        }
      ]
    },
    performance: {
      title: 'Performance Optimization',
      content: [
        {
          topic: 'Query Optimization',
          explanation: 'Techniques to improve query performance and execution speed.',
          code: `-- Use EXPLAIN to analyze queries
EXPLAIN SELECT * FROM employees e
JOIN departments d ON e.department_id = d.id
WHERE e.salary > 75000;

-- Optimize with proper indexing
CREATE INDEX idx_salary ON employees(salary);
CREATE INDEX idx_dept_salary ON employees(department_id, salary);

-- Use LIMIT for large datasets
SELECT * FROM employees 
ORDER BY created_at DESC 
LIMIT 20 OFFSET 0;

-- Avoid SELECT *
SELECT id, first_name, last_name, salary 
FROM employees 
WHERE department_id = 1;`,
          output: `Query execution plan:
+----+-------------+-------+------+---------------+------+---------+------+------+----------+
| id | select_type | table | type | possible_keys | key  | key_len | ref  | rows | Extra    |
+----+-------------+-------+------+---------------+------+---------+------+------+----------+
|  1 | SIMPLE      | e     | ALL  | NULL          | NULL | NULL    | NULL | 1000 | Using where |
+----+-------------+-------+------+---------------+------+---------+------+------+----------+

After optimization: 0.001 seconds (was 0.045 seconds)`
        },
        {
          topic: 'Database Tuning',
          explanation: 'Server configuration and database-level optimizations.',
          code: `-- Check current configuration
SHOW VARIABLES LIKE 'innodb_buffer_pool_size';
SHOW VARIABLES LIKE 'query_cache_size';

-- Analyze table statistics
ANALYZE TABLE employees;

-- Optimize table structure
OPTIMIZE TABLE employees;

-- Check table status
SHOW TABLE STATUS LIKE 'employees';`,
          output: `Configuration optimized:
• Buffer pool size: 128MB → 512MB
• Query cache: Enabled
• Table optimized: 15% space reclaimed
• Index cardinality updated`
        }
      ]
    },
    security: {
      title: 'Security & User Management',
      content: [
        {
          topic: 'User Management',
          explanation: 'Creating and managing database users with proper permissions.',
          code: `-- Create new user
CREATE USER 'app_user'@'localhost' IDENTIFIED BY 'secure_password';

-- Grant specific privileges
GRANT SELECT, INSERT, UPDATE ON company_db.* TO 'app_user'@'localhost';

-- Create read-only user
CREATE USER 'readonly_user'@'%' IDENTIFIED BY 'read_password';
GRANT SELECT ON company_db.* TO 'readonly_user'@'%';

-- Show user privileges
SHOW GRANTS FOR 'app_user'@'localhost';

-- Revoke privileges
REVOKE INSERT ON company_db.* FROM 'app_user'@'localhost';

-- Drop user
DROP USER 'old_user'@'localhost';`,
          output: `User management completed:
✅ app_user created with limited privileges
✅ readonly_user created for reports
✅ Privileges configured securely
✅ Old users removed`
        },
        {
          topic: 'Data Security',
          explanation: 'Protecting sensitive data with encryption and secure practices.',
          code: `-- Enable SSL connections
SHOW VARIABLES LIKE 'have_ssl';

-- Encrypt sensitive columns
ALTER TABLE employees 
ADD COLUMN ssn_encrypted VARBINARY(255);

UPDATE employees 
SET ssn_encrypted = AES_ENCRYPT('123-45-6789', 'encryption_key')
WHERE id = 1;

-- Decrypt data
SELECT id, first_name, 
       AES_DECRYPT(ssn_encrypted, 'encryption_key') as ssn
FROM employees 
WHERE id = 1;

-- Hash passwords
INSERT INTO users (username, password_hash)
VALUES ('john_doe', SHA2('user_password', 256));`,
          output: `Security measures implemented:
✅ SSL encryption enabled
✅ Sensitive data encrypted
✅ Password hashing configured
✅ Data access logged`
        }
      ]
    },
    backup: {
      title: 'Backup & Recovery',
      content: [
        {
          topic: 'Database Backup',
          explanation: 'Creating and managing database backups for data protection.',
          code: `-- Full database backup
mysqldump -u root -p company_db > company_db_backup.sql

-- Backup specific tables
mysqldump -u root -p company_db employees departments > tables_backup.sql

-- Backup with compression
mysqldump -u root -p company_db | gzip > company_db_backup.sql.gz

-- Backup structure only
mysqldump -u root -p --no-data company_db > structure_only.sql

-- Automated backup script
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
mysqldump -u backup_user -p$BACKUP_PASSWORD company_db > /backups/company_db_$DATE.sql`,
          output: `Backup completed successfully:
• Full backup: company_db_backup.sql (2.5MB)
• Compressed backup: 450KB
• Structure backup: 15KB
• Automated daily backups configured`
        },
        {
          topic: 'Database Recovery',
          explanation: 'Restoring databases from backups and handling recovery scenarios.',
          code: `-- Restore full database
mysql -u root -p company_db < company_db_backup.sql

-- Restore from compressed backup
gunzip < company_db_backup.sql.gz | mysql -u root -p company_db

-- Point-in-time recovery using binary logs
mysqlbinlog --start-datetime="2024-01-01 10:00:00" \
            --stop-datetime="2024-01-01 11:00:00" \
            mysql-bin.000001 | mysql -u root -p

-- Check binary log status
SHOW BINARY LOGS;
SHOW MASTER STATUS;`,
          output: `Recovery completed:
✅ Database restored from backup
✅ Point-in-time recovery successful
✅ Binary logs verified
✅ Data integrity confirmed`
        }
      ]
    },
    replication: {
      title: 'Replication & Clustering',
      content: [
        {
          topic: 'Master-Slave Replication',
          explanation: 'Setting up database replication for high availability and load distribution.',
          code: `-- Master server configuration (my.cnf)
[mysqld]
server-id = 1
log-bin = mysql-bin
binlog-format = ROW

-- Create replication user on master
CREATE USER 'replication_user'@'%' IDENTIFIED BY 'repl_password';
GRANT REPLICATION SLAVE ON *.* TO 'replication_user'@'%';

-- Get master status
SHOW MASTER STATUS;

-- Slave server configuration
[mysqld]
server-id = 2
relay-log = relay-bin
read-only = 1

-- Configure slave
CHANGE MASTER TO
    MASTER_HOST='192.168.1.100',
    MASTER_USER='replication_user',
    MASTER_PASSWORD='repl_password',
    MASTER_LOG_FILE='mysql-bin.000001',
    MASTER_LOG_POS=154;

-- Start replication
START SLAVE;

-- Check slave status
SHOW SLAVE STATUS\G`,
          output: `Replication setup completed:
✅ Master server configured
✅ Replication user created
✅ Slave server connected
✅ Data synchronization active

Slave_IO_Running: Yes
Slave_SQL_Running: Yes
Seconds_Behind_Master: 0`
        }
      ]
    },
    project: {
      title: 'Complete Project Example',
      content: [
        {
          topic: 'E-commerce Database Design',
          explanation: 'A complete e-commerce database with customers, products, orders, and analytics.',
          code: `-- Create database
CREATE DATABASE ecommerce_db;
USE ecommerce_db;

-- Customers table
CREATE TABLE customers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(20),
    address TEXT,
    city VARCHAR(50),
    state VARCHAR(50),
    zip_code VARCHAR(10),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Categories table
CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    parent_id INT,
    is_active BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (parent_id) REFERENCES categories(id)
);

-- Products table
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    cost DECIMAL(10,2),
    sku VARCHAR(50) UNIQUE,
    category_id INT,
    stock_quantity INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);`,
          output: `E-commerce database structure created!
✅ Customers table - User information
✅ Categories table - Product categorization  
✅ Products table - Product catalog
✅ Foreign key relationships established`
        },
        {
          topic: 'Orders and Order Items',
          explanation: 'Complete order management system with order tracking and item details.',
          code: `-- Orders table
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT NOT NULL,
    order_number VARCHAR(50) UNIQUE NOT NULL,
    status ENUM('pending', 'processing', 'shipped', 'delivered', 'cancelled') DEFAULT 'pending',
    total_amount DECIMAL(10,2) NOT NULL,
    tax_amount DECIMAL(10,2) DEFAULT 0,
    shipping_amount DECIMAL(10,2) DEFAULT 0,
    discount_amount DECIMAL(10,2) DEFAULT 0,
    payment_status ENUM('pending', 'paid', 'failed', 'refunded') DEFAULT 'pending',
    shipping_address TEXT,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    shipped_date TIMESTAMP NULL,
    delivered_date TIMESTAMP NULL,
    FOREIGN KEY (customer_id) REFERENCES customers(id)
);

-- Order items table
CREATE TABLE order_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    unit_price DECIMAL(10,2) NOT NULL,
    total_price DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id)
);

-- Create indexes for performance
CREATE INDEX idx_orders_customer ON orders(customer_id);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_date ON orders(order_date);
CREATE INDEX idx_order_items_order ON order_items(order_id);
CREATE INDEX idx_order_items_product ON order_items(product_id);`,
          output: `Order management system created!
✅ Orders table with status tracking
✅ Order items for detailed line items
✅ Performance indexes added
✅ Cascade delete for data integrity`
        },
        {
          topic: 'Sample Data and Analytics',
          explanation: 'Insert sample data and create analytical queries for business insights.',
          code: `-- Insert sample data
INSERT INTO categories (name, description) VALUES
('Electronics', 'Electronic devices and accessories'),
('Clothing', 'Apparel and fashion items'),
('Books', 'Books and educational materials');

INSERT INTO customers (first_name, last_name, email, phone, city, state) VALUES
('John', 'Smith', 'john.smith@email.com', '555-0101', 'New York', 'NY'),
('Jane', 'Doe', 'jane.doe@email.com', '555-0102', 'Los Angeles', 'CA'),
('Mike', 'Johnson', 'mike.j@email.com', '555-0103', 'Chicago', 'IL');

INSERT INTO products (name, description, price, cost, sku, category_id, stock_quantity) VALUES
('iPhone 15', 'Latest Apple smartphone', 999.99, 700.00, 'IPH15-001', 1, 50),
('MacBook Pro', 'Professional laptop', 1999.99, 1400.00, 'MBP-001', 1, 25),
('Nike Sneakers', 'Comfortable running shoes', 129.99, 80.00, 'NIKE-001', 2, 100);

-- Analytics queries
-- 1. Monthly sales report
SELECT 
    DATE_FORMAT(o.order_date, '%Y-%m') as month,
    COUNT(o.id) as total_orders,
    SUM(o.total_amount) as total_revenue,
    AVG(o.total_amount) as avg_order_value
FROM orders o
WHERE o.status != 'cancelled'
GROUP BY DATE_FORMAT(o.order_date, '%Y-%m')
ORDER BY month DESC;

-- 2. Top selling products
SELECT 
    p.name,
    SUM(oi.quantity) as total_sold,
    SUM(oi.total_price) as total_revenue,
    AVG(oi.unit_price) as avg_price
FROM products p
JOIN order_items oi ON p.id = oi.product_id
JOIN orders o ON oi.order_id = o.id
WHERE o.status != 'cancelled'
GROUP BY p.id, p.name
ORDER BY total_sold DESC
LIMIT 10;

-- 3. Customer lifetime value
SELECT 
    c.first_name,
    c.last_name,
    c.email,
    COUNT(o.id) as total_orders,
    SUM(o.total_amount) as lifetime_value,
    AVG(o.total_amount) as avg_order_value,
    MAX(o.order_date) as last_order_date
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id
GROUP BY c.id
ORDER BY lifetime_value DESC;`,
          output: `Sample data inserted successfully!

Monthly Sales Report:
+--------+--------------+---------------+-----------------+
| month  | total_orders | total_revenue | avg_order_value |
+--------+--------------+---------------+-----------------+
| 2024-03|           15 |      12,450.85|          830.06 |
| 2024-02|           22 |      18,750.40|          852.29 |
+--------+--------------+---------------+-----------------+

Top Products:
iPhone 15: 45 sold, $44,999.55 revenue
MacBook Pro: 12 sold, $23,999.88 revenue

Customer Analytics:
John Smith: 5 orders, $4,250.75 lifetime value`
        }
      ]
    }
  };

  const CodeBlock = ({ code, output, id }) => (
    <div className="bg-gray-900 rounded-lg overflow-hidden mb-4">
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
          <div className="text-blue-400 text-sm mb-2">Output:</div>
          <pre className="text-gray-300 font-mono text-sm whitespace-pre-wrap">{output}</pre>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm mb-3">
            <Link to="/" className="text-blue-200 hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-blue-300">→</span>
            <span className="font-medium">MySQL Tutorial</span>
          </nav>
          <div className="flex items-center space-x-4">
            <FaDatabase className="text-4xl" />
            <div>
              <h1 className="text-3xl font-bold">MySQL Complete Guide</h1>
              <p className="text-blue-100">Master MySQL from basics to advanced concepts</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-4 sticky top-4">
              <h3 className="font-bold text-lg mb-4 text-gray-800">Topics</h3>
              <nav className="space-y-2">
                {Object.entries(sections).map(([key, section]) => (
                  <button
                    key={key}
                    onClick={() => setActiveSection(key)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      activeSection === key
                        ? 'bg-blue-500 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <FaCode className="mr-3 text-blue-600" />
                {sections[activeSection].title}
              </h2>

              <div className="space-y-8">
                {sections[activeSection].content.map((item, index) => (
                  <div key={index} className="border-b border-gray-200 pb-8 last:border-b-0">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {item.topic}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {item.explanation}
                    </p>
                    <CodeBlock 
                      code={item.code} 
                      output={item.output} 
                      id={`${activeSection}-${index}`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Reference */}
            <div className="mt-8 bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Common Commands</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li><code className="bg-gray-100 px-1 rounded">SHOW DATABASES;</code> - List databases</li>
                    <li><code className="bg-gray-100 px-1 rounded">USE database_name;</code> - Select database</li>
                    <li><code className="bg-gray-100 px-1 rounded">SHOW TABLES;</code> - List tables</li>
                    <li><code className="bg-gray-100 px-1 rounded">DESCRIBE table_name;</code> - Table structure</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Data Types</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li><code className="bg-gray-100 px-1 rounded">INT</code> - Integer numbers</li>
                    <li><code className="bg-gray-100 px-1 rounded">VARCHAR(n)</code> - Variable strings</li>
                    <li><code className="bg-gray-100 px-1 rounded">DATE</code> - Date values</li>
                    <li><code className="bg-gray-100 px-1 rounded">DECIMAL(m,d)</code> - Precise numbers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySQL;