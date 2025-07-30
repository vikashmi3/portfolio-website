import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaArrowLeft,
  FaCogs,
  FaClipboardList,
  FaFileAlt,
  FaBook,
  FaCode,
  FaCopy,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa';

const MySQL = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('syllabus');
  const [expandedExample, setExpandedExample] = useState(null);

  const courseDetails = {
    name: "MySQL Database",
    description: "Master MySQL database design, queries, optimization, and administration. Learn SQL from basics to advanced.",
    fullDescription: "Complete MySQL course covering database design, SQL queries, stored procedures, triggers, indexing, performance optimization, and database administration. Build real-world database applications.",
    duration: "8 weeks",
    level: "Beginner",
    instructor: "Prof. James Wilson",
    syllabus: [
      {
        week: 1,
        title: "MySQL Fundamentals and Database Design",
        topics: [
          "MySQL installation and setup",
          "Database design principles",
          "Entity-Relationship modeling",
          "Normalization concepts",
          "Creating databases and tables"
        ],
        practicals: [
          "Install MySQL server",
          "Design database schema",
          "Create normalized tables"
        ],
        examples: [
          {
            title: "Complete E-commerce Database Design",
            code: `-- E-commerce Database Design and Implementation

-- Create database
CREATE DATABASE ecommerce_db;
USE ecommerce_db;

-- Users table
CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    phone VARCHAR(20),
    date_of_birth DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE,
    INDEX idx_email (email),
    INDEX idx_username (username)
);

-- Categories table
CREATE TABLE categories (
    category_id INT PRIMARY KEY AUTO_INCREMENT,
    category_name VARCHAR(100) NOT NULL,
    description TEXT,
    parent_category_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (parent_category_id) REFERENCES categories(category_id),
    INDEX idx_parent (parent_category_id)
);

-- Products table
CREATE TABLE products (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(200) NOT NULL,
    description TEXT,
    category_id INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    cost_price DECIMAL(10, 2),
    stock_quantity INT DEFAULT 0,
    min_stock_level INT DEFAULT 5,
    sku VARCHAR(50) UNIQUE,
    weight DECIMAL(8, 2),
    dimensions VARCHAR(50),
    brand VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (category_id) REFERENCES categories(category_id),
    INDEX idx_category (category_id),
    INDEX idx_price (price),
    INDEX idx_sku (sku),
    INDEX idx_stock (stock_quantity)
);

-- Addresses table
CREATE TABLE addresses (
    address_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    address_type ENUM('billing', 'shipping') NOT NULL,
    street_address VARCHAR(255) NOT NULL,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    postal_code VARCHAR(20) NOT NULL,
    country VARCHAR(100) NOT NULL,
    is_default BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    INDEX idx_user (user_id),
    INDEX idx_type (address_type)
);

-- Orders table
CREATE TABLE orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    order_number VARCHAR(50) UNIQUE NOT NULL,
    order_status ENUM('pending', 'processing', 'shipped', 'delivered', 'cancelled') DEFAULT 'pending',
    payment_status ENUM('pending', 'paid', 'failed', 'refunded') DEFAULT 'pending',
    subtotal DECIMAL(10, 2) NOT NULL,
    tax_amount DECIMAL(10, 2) DEFAULT 0,
    shipping_cost DECIMAL(10, 2) DEFAULT 0,
    total_amount DECIMAL(10, 2) NOT NULL,
    billing_address_id INT,
    shipping_address_id INT,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    shipped_date TIMESTAMP NULL,
    delivered_date TIMESTAMP NULL,
    notes TEXT,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (billing_address_id) REFERENCES addresses(address_id),
    FOREIGN KEY (shipping_address_id) REFERENCES addresses(address_id),
    INDEX idx_user (user_id),
    INDEX idx_status (order_status),
    INDEX idx_date (order_date),
    INDEX idx_order_number (order_number)
);

-- Order items table
CREATE TABLE order_items (
    order_item_id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    unit_price DECIMAL(10, 2) NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (order_id) REFERENCES orders(order_id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(product_id),
    INDEX idx_order (order_id),
    INDEX idx_product (product_id)
);

-- Shopping cart table
CREATE TABLE shopping_cart (
    cart_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL DEFAULT 1,
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(product_id) ON DELETE CASCADE,
    UNIQUE KEY unique_user_product (user_id, product_id),
    INDEX idx_user (user_id)
);

-- Product reviews table
CREATE TABLE product_reviews (
    review_id INT PRIMARY KEY AUTO_INCREMENT,
    product_id INT NOT NULL,
    user_id INT NOT NULL,
    rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
    review_title VARCHAR(200),
    review_text TEXT,
    is_verified_purchase BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(product_id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    UNIQUE KEY unique_user_product_review (user_id, product_id),
    INDEX idx_product (product_id),
    INDEX idx_rating (rating)
);

-- Insert sample data
INSERT INTO categories (category_name, description) VALUES
('Electronics', 'Electronic devices and gadgets'),
('Clothing', 'Apparel and fashion items'),
('Books', 'Books and educational materials'),
('Home & Garden', 'Home improvement and garden supplies'),
('Sports', 'Sports equipment and accessories');

INSERT INTO categories (category_name, parent_category_id) VALUES
('Smartphones', 1),
('Laptops', 1),
('Men\\'s Clothing', 2),
('Women\\'s Clothing', 2),
('Fiction Books', 3);

INSERT INTO users (username, email, password_hash, first_name, last_name, phone) VALUES
('john_doe', 'john@example.com', 'hashed_password_1', 'John', 'Doe', '555-0101'),
('jane_smith', 'jane@example.com', 'hashed_password_2', 'Jane', 'Smith', '555-0102'),
('bob_wilson', 'bob@example.com', 'hashed_password_3', 'Bob', 'Wilson', '555-0103');

INSERT INTO products (product_name, description, category_id, price, cost_price, stock_quantity, sku, brand) VALUES
('iPhone 14 Pro', 'Latest iPhone with advanced camera system', 6, 999.99, 750.00, 50, 'IPH14PRO001', 'Apple'),
('Samsung Galaxy S23', 'Flagship Android smartphone', 6, 899.99, 650.00, 30, 'SAM23001', 'Samsung'),
('MacBook Pro 16"', 'Professional laptop for creators', 7, 2499.99, 1800.00, 15, 'MBP16001', 'Apple'),
('Dell XPS 13', 'Ultrabook for professionals', 7, 1299.99, 950.00, 25, 'DELLXPS001', 'Dell'),
('Men\\'s Cotton T-Shirt', 'Comfortable cotton t-shirt', 8, 29.99, 15.00, 100, 'TSHIRT001', 'Generic');

-- Create views for common queries
CREATE VIEW product_catalog AS
SELECT 
    p.product_id,
    p.product_name,
    p.description,
    p.price,
    p.stock_quantity,
    p.brand,
    c.category_name,
    COALESCE(AVG(pr.rating), 0) as avg_rating,
    COUNT(pr.review_id) as review_count
FROM products p
JOIN categories c ON p.category_id = c.category_id
LEFT JOIN product_reviews pr ON p.product_id = pr.product_id
WHERE p.is_active = TRUE
GROUP BY p.product_id, p.product_name, p.description, p.price, p.stock_quantity, p.brand, c.category_name;

CREATE VIEW order_summary AS
SELECT 
    o.order_id,
    o.order_number,
    u.username,
    u.email,
    o.order_status,
    o.payment_status,
    o.total_amount,
    o.order_date,
    COUNT(oi.order_item_id) as item_count
FROM orders o
JOIN users u ON o.user_id = u.user_id
LEFT JOIN order_items oi ON o.order_id = oi.order_id
GROUP BY o.order_id, o.order_number, u.username, u.email, o.order_status, o.payment_status, o.total_amount, o.order_date;

-- Create stored procedures
DELIMITER //

CREATE PROCEDURE GetUserOrderHistory(IN p_user_id INT)
BEGIN
    SELECT 
        o.order_id,
        o.order_number,
        o.order_status,
        o.total_amount,
        o.order_date,
        COUNT(oi.order_item_id) as items_count
    FROM orders o
    LEFT JOIN order_items oi ON o.order_id = oi.order_id
    WHERE o.user_id = p_user_id
    GROUP BY o.order_id
    ORDER BY o.order_date DESC;
END //

CREATE PROCEDURE UpdateProductStock(
    IN p_product_id INT,
    IN p_quantity_change INT,
    IN p_operation VARCHAR(10)
)
BEGIN
    DECLARE current_stock INT;
    DECLARE new_stock INT;
    
    -- Get current stock
    SELECT stock_quantity INTO current_stock 
    FROM products 
    WHERE product_id = p_product_id;
    
    -- Calculate new stock based on operation
    IF p_operation = 'add' THEN
        SET new_stock = current_stock + p_quantity_change;
    ELSEIF p_operation = 'subtract' THEN
        SET new_stock = current_stock - p_quantity_change;
        IF new_stock < 0 THEN
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Insufficient stock';
        END IF;
    ELSE
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Invalid operation';
    END IF;
    
    -- Update stock
    UPDATE products 
    SET stock_quantity = new_stock,
        updated_at = CURRENT_TIMESTAMP
    WHERE product_id = p_product_id;
    
    SELECT new_stock as updated_stock;
END //

DELIMITER ;

-- Create triggers
DELIMITER //

CREATE TRIGGER update_order_total
    AFTER INSERT ON order_items
    FOR EACH ROW
BEGIN
    UPDATE orders 
    SET total_amount = (
        SELECT SUM(total_price) 
        FROM order_items 
        WHERE order_id = NEW.order_id
    )
    WHERE order_id = NEW.order_id;
END //

CREATE TRIGGER check_stock_before_order
    BEFORE INSERT ON order_items
    FOR EACH ROW
BEGIN
    DECLARE available_stock INT;
    
    SELECT stock_quantity INTO available_stock
    FROM products
    WHERE product_id = NEW.product_id;
    
    IF available_stock < NEW.quantity THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'Insufficient stock for this product';
    END IF;
END //

DELIMITER ;

-- Show database structure
SHOW TABLES;

-- Display table information
DESCRIBE users;
DESCRIBE products;
DESCRIBE orders;

-- Show indexes
SHOW INDEX FROM products;
SHOW INDEX FROM orders;

SELECT 'Database setup completed successfully!' as Status;`,
            explanation: "Complete e-commerce database design with normalized tables, relationships, indexes, views, stored procedures, and triggers demonstrating advanced MySQL concepts."
          }
        ]
      },
      {
        week: 2,
        title: "Advanced SQL Queries and Optimization",
        topics: [
          "Complex JOIN operations",
          "Subqueries and CTEs",
          "Window functions",
          "Query optimization",
          "Index strategies"
        ],
        practicals: [
          "Write complex queries",
          "Optimize query performance",
          "Analyze execution plans"
        ],
        examples: [
          {
            title: "Advanced SQL Queries and Analytics",
            code: `-- Advanced SQL Queries and Analytics Examples

USE ecommerce_db;

-- 1. Complex JOINs and Subqueries
-- Find top 5 customers by total spending with their order details
SELECT 
    u.user_id,
    u.username,
    u.email,
    COUNT(DISTINCT o.order_id) as total_orders,
    SUM(o.total_amount) as total_spent,
    AVG(o.total_amount) as avg_order_value,
    MAX(o.order_date) as last_order_date,
    (SELECT COUNT(*) FROM product_reviews pr WHERE pr.user_id = u.user_id) as reviews_written
FROM users u
JOIN orders o ON u.user_id = o.user_id
WHERE o.order_status IN ('delivered', 'shipped')
GROUP BY u.user_id, u.username, u.email
ORDER BY total_spent DESC
LIMIT 5;

-- 2. Window Functions for Analytics
-- Calculate running totals and rankings
SELECT 
    o.order_id,
    o.order_number,
    u.username,
    o.total_amount,
    o.order_date,
    -- Running total of sales
    SUM(o.total_amount) OVER (ORDER BY o.order_date) as running_total,
    -- Rank orders by amount within each month
    RANK() OVER (
        PARTITION BY YEAR(o.order_date), MONTH(o.order_date) 
        ORDER BY o.total_amount DESC
    ) as monthly_rank,
    -- Calculate percentage of total sales
    ROUND(
        (o.total_amount / SUM(o.total_amount) OVER ()) * 100, 2
    ) as percent_of_total,
    -- Previous order amount for comparison
    LAG(o.total_amount) OVER (
        PARTITION BY o.user_id 
        ORDER BY o.order_date
    ) as previous_order_amount
FROM orders o
JOIN users u ON o.user_id = u.user_id
WHERE o.order_status = 'delivered'
ORDER BY o.order_date DESC;

-- 3. Common Table Expressions (CTEs) for Complex Analysis
-- Product performance analysis with multiple metrics
WITH product_metrics AS (
    SELECT 
        p.product_id,
        p.product_name,
        p.price,
        p.stock_quantity,
        c.category_name,
        COUNT(DISTINCT oi.order_id) as orders_count,
        SUM(oi.quantity) as total_sold,
        SUM(oi.total_price) as total_revenue,
        AVG(oi.unit_price) as avg_selling_price,
        COALESCE(AVG(pr.rating), 0) as avg_rating,
        COUNT(pr.review_id) as review_count
    FROM products p
    JOIN categories c ON p.category_id = c.category_id
    LEFT JOIN order_items oi ON p.product_id = oi.product_id
    LEFT JOIN product_reviews pr ON p.product_id = pr.product_id
    GROUP BY p.product_id, p.product_name, p.price, p.stock_quantity, c.category_name
),
category_totals AS (
    SELECT 
        category_name,
        SUM(total_revenue) as category_revenue,
        AVG(avg_rating) as category_avg_rating
    FROM product_metrics
    GROUP BY category_name
)
SELECT 
    pm.*,
    ct.category_revenue,
    ROUND((pm.total_revenue / ct.category_revenue) * 100, 2) as percent_of_category_revenue,
    CASE 
        WHEN pm.total_sold > 50 THEN 'High Performer'
        WHEN pm.total_sold > 20 THEN 'Medium Performer'
        WHEN pm.total_sold > 0 THEN 'Low Performer'
        ELSE 'No Sales'
    END as performance_category
FROM product_metrics pm
JOIN category_totals ct ON pm.category_name = ct.category_name
ORDER BY pm.total_revenue DESC;

-- 4. Advanced Aggregation and Grouping
-- Monthly sales report with year-over-year comparison
SELECT 
    YEAR(o.order_date) as year,
    MONTH(o.order_date) as month,
    MONTHNAME(o.order_date) as month_name,
    COUNT(DISTINCT o.order_id) as orders_count,
    COUNT(DISTINCT o.user_id) as unique_customers,
    SUM(o.total_amount) as monthly_revenue,
    AVG(o.total_amount) as avg_order_value,
    -- Year-over-year growth calculation
    LAG(SUM(o.total_amount)) OVER (
        PARTITION BY MONTH(o.order_date) 
        ORDER BY YEAR(o.order_date)
    ) as previous_year_revenue,
    ROUND(
        ((SUM(o.total_amount) - LAG(SUM(o.total_amount)) OVER (
            PARTITION BY MONTH(o.order_date) 
            ORDER BY YEAR(o.order_date)
        )) / LAG(SUM(o.total_amount)) OVER (
            PARTITION BY MONTH(o.order_date) 
            ORDER BY YEAR(o.order_date)
        )) * 100, 2
    ) as yoy_growth_percent
FROM orders o
WHERE o.order_status = 'delivered'
GROUP BY YEAR(o.order_date), MONTH(o.order_date), MONTHNAME(o.order_date)
ORDER BY year DESC, month DESC;

-- 5. Customer Segmentation Analysis
-- RFM Analysis (Recency, Frequency, Monetary)
WITH customer_rfm AS (
    SELECT 
        u.user_id,
        u.username,
        u.email,
        -- Recency: Days since last order
        DATEDIFF(CURDATE(), MAX(o.order_date)) as recency_days,
        -- Frequency: Number of orders
        COUNT(DISTINCT o.order_id) as frequency,
        -- Monetary: Total amount spent
        SUM(o.total_amount) as monetary_value,
        AVG(o.total_amount) as avg_order_value
    FROM users u
    JOIN orders o ON u.user_id = o.user_id
    WHERE o.order_status = 'delivered'
    GROUP BY u.user_id, u.username, u.email
),
rfm_scores AS (
    SELECT *,
        -- Create quintiles for each RFM component
        NTILE(5) OVER (ORDER BY recency_days DESC) as recency_score,
        NTILE(5) OVER (ORDER BY frequency) as frequency_score,
        NTILE(5) OVER (ORDER BY monetary_value) as monetary_score
    FROM customer_rfm
)
SELECT 
    *,
    CONCAT(recency_score, frequency_score, monetary_score) as rfm_segment,
    CASE 
        WHEN recency_score >= 4 AND frequency_score >= 4 AND monetary_score >= 4 THEN 'Champions'
        WHEN recency_score >= 3 AND frequency_score >= 3 AND monetary_score >= 3 THEN 'Loyal Customers'
        WHEN recency_score >= 3 AND frequency_score <= 2 THEN 'Potential Loyalists'
        WHEN recency_score <= 2 AND frequency_score >= 3 THEN 'At Risk'
        WHEN recency_score <= 2 AND frequency_score <= 2 AND monetary_score >= 3 THEN 'Cannot Lose Them'
        WHEN recency_score <= 2 AND frequency_score <= 2 AND monetary_score <= 2 THEN 'Hibernating'
        ELSE 'Others'
    END as customer_segment
FROM rfm_scores
ORDER BY monetary_value DESC;

-- 6. Inventory Management Queries
-- Products that need restocking
SELECT 
    p.product_id,
    p.product_name,
    p.stock_quantity,
    p.min_stock_level,
    c.category_name,
    -- Calculate reorder quantity based on sales velocity
    COALESCE(
        CEIL(AVG(daily_sales.daily_quantity) * 30), -- 30 days supply
        p.min_stock_level * 2
    ) as suggested_reorder_quantity,
    p.price * COALESCE(
        CEIL(AVG(daily_sales.daily_quantity) * 30),
        p.min_stock_level * 2
    ) as reorder_cost
FROM products p
JOIN categories c ON p.category_id = c.category_id
LEFT JOIN (
    SELECT 
        oi.product_id,
        DATE(o.order_date) as order_date,
        SUM(oi.quantity) as daily_quantity
    FROM order_items oi
    JOIN orders o ON oi.order_id = o.order_id
    WHERE o.order_date >= DATE_SUB(CURDATE(), INTERVAL 30 DAY)
    AND o.order_status = 'delivered'
    GROUP BY oi.product_id, DATE(o.order_date)
) daily_sales ON p.product_id = daily_sales.product_id
WHERE p.stock_quantity <= p.min_stock_level
AND p.is_active = TRUE
GROUP BY p.product_id, p.product_name, p.stock_quantity, p.min_stock_level, c.category_name, p.price
ORDER BY p.stock_quantity ASC;

-- 7. Performance Analysis Query
-- Query execution time analysis
SET @start_time = NOW(6);

SELECT 
    p.product_name,
    COUNT(oi.order_item_id) as times_ordered,
    SUM(oi.quantity) as total_quantity_sold,
    SUM(oi.total_price) as total_revenue
FROM products p
JOIN order_items oi ON p.product_id = oi.product_id
JOIN orders o ON oi.order_id = o.order_id
WHERE o.order_date >= DATE_SUB(CURDATE(), INTERVAL 1 YEAR)
GROUP BY p.product_id, p.product_name
HAVING total_revenue > 1000
ORDER BY total_revenue DESC;

SET @end_time = NOW(6);
SELECT TIMESTAMPDIFF(MICROSECOND, @start_time, @end_time) as execution_time_microseconds;

-- 8. Create indexes for optimization
CREATE INDEX idx_orders_date_status ON orders(order_date, order_status);
CREATE INDEX idx_order_items_product_order ON order_items(product_id, order_id);
CREATE INDEX idx_products_category_active ON products(category_id, is_active);

-- 9. Query optimization examples
-- Before optimization (using EXPLAIN)
EXPLAIN SELECT 
    p.product_name,
    SUM(oi.total_price) as revenue
FROM products p
JOIN order_items oi ON p.product_id = oi.product_id
JOIN orders o ON oi.order_id = o.order_id
WHERE o.order_date >= '2023-01-01'
GROUP BY p.product_id, p.product_name
ORDER BY revenue DESC;

-- Show query execution plan
EXPLAIN FORMAT=JSON
SELECT 
    u.username,
    COUNT(o.order_id) as order_count,
    SUM(o.total_amount) as total_spent
FROM users u
LEFT JOIN orders o ON u.user_id = o.user_id
WHERE u.created_at >= '2023-01-01'
GROUP BY u.user_id, u.username
HAVING total_spent > 500
ORDER BY total_spent DESC;

SELECT 'Advanced SQL queries completed successfully!' as Status;`,
            explanation: "Advanced SQL queries demonstrating JOINs, window functions, CTEs, customer segmentation, inventory management, and query optimization techniques."
          }
        ]
      }
    ],
    features: [
      "32 comprehensive lessons",
      "8 hands-on database projects",
      "Interactive coding exercises",
      "Lifetime access to content",
      "Community support"
    ]
  };

  const handleBack = () => {
    navigate('/courses');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={handleBack}
          className="mb-6 flex items-center gap-2 text-primary hover:text-secondary transition-colors"
        >
          <FaArrowLeft />
          Back to Courses
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8"
        >
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              {courseDetails.name}
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              by {courseDetails.instructor}
            </p>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
            {courseDetails.fullDescription}
          </p>
          <div className="flex flex-wrap gap-4">
            {courseDetails.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <FaFileAlt className="text-secondary" />
                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
        >
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex space-x-8 px-8">
              <button 
                onClick={() => setActiveTab('syllabus')}
                className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium text-sm ${
                  activeTab === 'syllabus' 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <FaBook />
                Syllabus
              </button>
              <button 
                onClick={() => setActiveTab('examples')}
                className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium text-sm ${
                  activeTab === 'examples' 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <FaCode />
                Code Examples
              </button>
            </nav>
          </div>
          
          <div className="p-8">
            {activeTab === 'syllabus' && (
              <div className="space-y-6">
                {courseDetails.syllabus.map((week, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border border-gray-200 dark:border-gray-700 rounded-lg p-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Week {week.week}: {week.title}
                      </h4>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Topics Covered:</h5>
                        <ul className="space-y-2">
                          {week.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="flex items-start gap-2">
                              <FaClipboardList className="text-primary mt-1 text-sm flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300 text-sm">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Practical Exercises:</h5>
                        <ul className="space-y-2">
                          {week.practicals.map((practical, practicalIndex) => (
                            <li key={practicalIndex} className="flex items-start gap-2">
                              <FaCogs className="text-secondary mt-1 text-sm flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300 text-sm">{practical}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
            
            {activeTab === 'examples' && (
              <div className="space-y-6">
                {courseDetails.syllabus.map((week, weekIndex) => (
                  week.examples && (
                    <div key={weekIndex} className="mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Week {week.week}: {week.title}
                      </h3>
                      <div className="space-y-4">
                        {week.examples.map((example, exampleIndex) => (
                          <motion.div
                            key={exampleIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                          >
                            <div 
                              className="bg-gray-50 dark:bg-gray-700 p-4 cursor-pointer flex items-center justify-between"
                              onClick={() => setExpandedExample(
                                expandedExample === `${weekIndex}-${exampleIndex}` 
                                  ? null 
                                  : `${weekIndex}-${exampleIndex}`
                              )}
                            >
                              <div className="flex items-center gap-3">
                                <FaCode className="text-primary" />
                                <h4 className="font-semibold text-gray-900 dark:text-white">
                                  {example.title}
                                </h4>
                              </div>
                              {expandedExample === `${weekIndex}-${exampleIndex}` ? 
                                <FaChevronUp className="text-gray-500" /> : 
                                <FaChevronDown className="text-gray-500" />
                              }
                            </div>
                            
                            {expandedExample === `${weekIndex}-${exampleIndex}` && (
                              <div className="p-4">
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                  {example.explanation}
                                </p>
                                <div className="bg-gray-900 rounded-lg overflow-hidden">
                                  <div className="flex items-center justify-between bg-gray-800 px-4 py-2">
                                    <span className="text-gray-300 text-sm font-mono">SQL Code</span>
                                    <button 
                                      onClick={() => navigator.clipboard.writeText(example.code)}
                                      className="text-gray-400 hover:text-white transition-colors"
                                      title="Copy code"
                                    >
                                      <FaCopy />
                                    </button>
                                  </div>
                                  <pre className="p-4 text-sm text-gray-100 overflow-x-auto">
                                    <code>{example.code}</code>
                                  </pre>
                                </div>
                              </div>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MySQL;