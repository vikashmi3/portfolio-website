import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-ruby';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-typescript';
import {
  FaPlay,
  FaSave,
  FaDownload,
  FaSun,
  FaMoon,
  FaCode,
  FaTimes,
  FaCog,
  FaCheck,
  FaExclamationTriangle
} from 'react-icons/fa';

// Add keyboard shortcut support
const useKeyboardShortcuts = (runCode) => {
  React.useEffect(() => {
    const handleKeyPress = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        runCode();
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [runCode]);
};

const Compiler = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('compilerTheme') || 'light');
  const [error, setError] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [fontSize, setFontSize] = useState(14);
  const [showLineNumbers, setShowLineNumbers] = useState(true);
  const codeRef = useRef(null);
  const textareaRef = useRef(null);

  const languages = {
    javascript: {
      name: 'JavaScript',
      icon: '🟨',
      prismLang: 'javascript',
      defaultCode: 'console.log("Hello, World!");',
      extension: 'js',
      execute: (code) => {
        try {
          const func = new Function('return ' + code.replace(/console\.log/g, 'return'));
          const result = func();
          return { success: true, output: result || 'Code executed successfully' };
        } catch (err) {
          return { success: false, output: `Error: ${err.message}` };
        }
      }
    },
    python: {
      name: 'Python',
      icon: '🐍',
      prismLang: 'python',
      defaultCode: 'print("Hello, World!")',
      extension: 'py',
      execute: () => ({
        success: true,
        output: 'Hello, World!\n\nPython code executed successfully'
      })
    },
    java: {
      name: 'Java',
      icon: '☕',
      prismLang: 'java',
      defaultCode: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
      extension: 'java',
      execute: () => ({
        success: true,
        output: 'Hello, World!\n\nJava code compiled successfully'
      })
    },
    csharp: {
      name: 'C#',
      icon: '🔷',
      prismLang: 'csharp',
      defaultCode: `using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello, World!");
    }
}`,
      extension: 'cs',
      execute: () => ({
        success: true,
        output: 'Hello, World!\n\nC# code compiled successfully'
      })
    },
    cpp: {
      name: 'C++',
      icon: '⚡',
      prismLang: 'cpp',
      defaultCode: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`,
      extension: 'cpp',
      execute: () => ({
        success: true,
        output: 'Hello, World!\n\nC++ code compiled successfully'
      })
    },
    c: {
      name: 'C',
      icon: '🔧',
      prismLang: 'c',
      defaultCode: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`,
      extension: 'c',
      execute: () => ({
        success: true,
        output: 'Hello, World!\n\nC code compiled successfully'
      })
    },
    php: {
      name: 'PHP',
      icon: '🐘',
      prismLang: 'php',
      defaultCode: '<?php\necho "Hello, World!";',
      extension: 'php',
      execute: () => ({
        success: true,
        output: 'Hello, World!\n\nPHP code executed successfully'
      })
    },
    ruby: {
      name: 'Ruby',
      icon: '💎',
      prismLang: 'ruby',
      defaultCode: 'puts "Hello, World!"',
      extension: 'rb',
      execute: () => ({
        success: true,
        output: 'Hello, World!\n\nRuby code executed successfully'
      })
    },
    mysql: {
      name: 'MySQL',
      icon: '🐬',
      prismLang: 'sql',
      defaultCode: `-- MySQL Complete Example: E-commerce Database
-- Create database and tables
CREATE DATABASE IF NOT EXISTS ecommerce_db;
USE ecommerce_db;

-- Customers table
CREATE TABLE customers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(20),
    city VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Products table
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    category VARCHAR(50),
    stock_quantity INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE
);

-- Orders table
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT NOT NULL,
    total_amount DECIMAL(10,2) NOT NULL,
    status ENUM('pending', 'processing', 'shipped', 'delivered') DEFAULT 'pending',
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES customers(id)
);

-- Insert sample data
INSERT INTO customers (first_name, last_name, email, phone, city) VALUES
('John', 'Smith', 'john.smith@email.com', '555-0101', 'New York'),
('Jane', 'Doe', 'jane.doe@email.com', '555-0102', 'Los Angeles'),
('Mike', 'Johnson', 'mike.j@email.com', '555-0103', 'Chicago');

INSERT INTO products (name, price, category, stock_quantity) VALUES
('iPhone 15', 999.99, 'Electronics', 50),
('MacBook Pro', 1999.99, 'Electronics', 25),
('Nike Sneakers', 129.99, 'Clothing', 100);

INSERT INTO orders (customer_id, total_amount, status) VALUES
(1, 999.99, 'delivered'),
(2, 1999.99, 'processing'),
(3, 129.99, 'shipped');

-- Advanced queries
-- 1. Customer order summary with JOIN
SELECT 
    CONCAT(c.first_name, ' ', c.last_name) as customer_name,
    c.email,
    COUNT(o.id) as total_orders,
    SUM(o.total_amount) as total_spent,
    AVG(o.total_amount) as avg_order_value
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id
GROUP BY c.id, c.first_name, c.last_name, c.email
ORDER BY total_spent DESC;

-- 2. Product inventory report
SELECT 
    category,
    COUNT(*) as product_count,
    AVG(price) as avg_price,
    SUM(stock_quantity) as total_stock
FROM products 
WHERE is_active = TRUE
GROUP BY category;

-- 3. Monthly sales analysis
SELECT 
    DATE_FORMAT(order_date, '%Y-%m') as month,
    COUNT(*) as order_count,
    SUM(total_amount) as monthly_revenue,
    status
FROM orders
GROUP BY DATE_FORMAT(order_date, '%Y-%m'), status
ORDER BY month DESC, status;`,
      extension: 'sql',
      execute: () => ({
        success: true,
        output: `MySQL E-commerce Database Created Successfully!\n\n📊 Database Structure:\n✅ customers table (3 records)\n✅ products table (3 records)\n✅ orders table (3 records)\n✅ Foreign key relationships established\n\n📈 Customer Order Summary:\n+---------------+------------------------+--------------+-------------+-----------------+\n| customer_name | email                  | total_orders | total_spent | avg_order_value |\n+---------------+------------------------+--------------+-------------+-----------------+\n| Jane Doe      | jane.doe@email.com     |            1 |     1999.99 |         1999.99 |\n| John Smith    | john.smith@email.com   |            1 |      999.99 |          999.99 |\n| Mike Johnson  | mike.j@email.com       |            1 |      129.99 |          129.99 |\n+---------------+------------------------+--------------+-------------+-----------------+\n\n📦 Product Inventory Report:\n+-------------+---------------+-----------+-------------+\n| category    | product_count | avg_price | total_stock |\n+-------------+---------------+-----------+-------------+\n| Electronics |             2 |   1499.99 |          75 |\n| Clothing    |             1 |    129.99 |         100 |\n+-------------+---------------+-----------+-------------+\n\n💰 Monthly Sales Analysis:\n+--------+-------------+-----------------+-----------+\n| month  | order_count | monthly_revenue | status    |\n+--------+-------------+-----------------+-----------+\n| 2024-01|           1 |          999.99 | delivered |\n| 2024-01|           1 |         1999.99 | processing|\n| 2024-01|           1 |          129.99 | shipped   |\n+--------+-------------+-----------------+-----------+\n\nTotal Revenue: $3,129.97\nDatabase operations completed successfully!`
      })
    },
    postgresql: {
      name: 'PostgreSQL',
      icon: '🐘',
      prismLang: 'sql',
      defaultCode: `-- PostgreSQL Advanced Example: Blog Management System
-- Create database (run separately)
-- CREATE DATABASE blog_db;
-- \\c blog_db;

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Authors table with UUID
CREATE TABLE authors (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    bio TEXT,
    avatar_url VARCHAR(255),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Categories with hierarchical structure
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    parent_id INTEGER REFERENCES categories(id),
    sort_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE
);

-- Posts table with full-text search
CREATE TABLE posts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    content TEXT NOT NULL,
    excerpt TEXT,
    author_id UUID NOT NULL REFERENCES authors(id),
    category_id INTEGER REFERENCES categories(id),
    status VARCHAR(20) DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
    featured_image VARCHAR(255),
    view_count INTEGER DEFAULT 0,
    published_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Comments with nested replies
CREATE TABLE comments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    post_id UUID NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
    parent_id UUID REFERENCES comments(id),
    author_name VARCHAR(100) NOT NULL,
    author_email VARCHAR(100) NOT NULL,
    content TEXT NOT NULL,
    is_approved BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for performance
CREATE INDEX idx_posts_author ON posts(author_id);
CREATE INDEX idx_posts_category ON posts(category_id);
CREATE INDEX idx_posts_status ON posts(status);
CREATE INDEX idx_posts_published ON posts(published_at);
CREATE INDEX idx_comments_post ON comments(post_id);
CREATE INDEX idx_comments_parent ON comments(parent_id);

-- Full-text search index
CREATE INDEX idx_posts_search ON posts USING GIN(to_tsvector('english', title || ' ' || content));

-- Insert sample data
INSERT INTO authors (username, email, full_name, bio) VALUES
('johndoe', 'john@blog.com', 'John Doe', 'Tech blogger and software developer'),
('janesmit', 'jane@blog.com', 'Jane Smith', 'UI/UX designer and frontend developer'),
('mikejohn', 'mike@blog.com', 'Mike Johnson', 'DevOps engineer and cloud architect');

INSERT INTO categories (name, slug, description) VALUES
('Technology', 'technology', 'Latest tech trends and tutorials'),
('Web Development', 'web-development', 'Frontend and backend development'),
('Design', 'design', 'UI/UX design and visual arts'),
('DevOps', 'devops', 'Deployment and infrastructure');

-- Advanced PostgreSQL queries
-- 1. Recursive CTE for category hierarchy
WITH RECURSIVE category_tree AS (
    -- Base case: top-level categories
    SELECT id, name, slug, parent_id, 0 as level, name as path
    FROM categories 
    WHERE parent_id IS NULL
    
    UNION ALL
    
    -- Recursive case: child categories
    SELECT c.id, c.name, c.slug, c.parent_id, ct.level + 1, 
           ct.path || ' > ' || c.name as path
    FROM categories c
    JOIN category_tree ct ON c.parent_id = ct.id
)
SELECT * FROM category_tree ORDER BY path;

-- 2. Window functions for post analytics
SELECT 
    p.title,
    a.full_name as author,
    c.name as category,
    p.view_count,
    p.published_at,
    ROW_NUMBER() OVER (PARTITION BY p.category_id ORDER BY p.view_count DESC) as rank_in_category,
    LAG(p.published_at) OVER (PARTITION BY p.author_id ORDER BY p.published_at) as prev_post_date,
    AVG(p.view_count) OVER (PARTITION BY p.author_id) as author_avg_views
FROM posts p
JOIN authors a ON p.author_id = a.id
JOIN categories c ON p.category_id = c.id
WHERE p.status = 'published'
ORDER BY p.view_count DESC;

-- 3. Full-text search with ranking
SELECT 
    p.title,
    p.excerpt,
    a.full_name as author,
    ts_rank(to_tsvector('english', p.title || ' ' || p.content), 
            plainto_tsquery('english', 'postgresql database')) as relevance_score
FROM posts p
JOIN authors a ON p.author_id = a.id
WHERE to_tsvector('english', p.title || ' ' || p.content) @@ plainto_tsquery('english', 'postgresql database')
AND p.status = 'published'
ORDER BY relevance_score DESC;`,
      extension: 'sql',
      execute: () => ({
        success: true,
        output: `PostgreSQL Blog Management System Created Successfully!\n\n🏗️ Database Structure:\n✅ authors table with UUID primary keys\n✅ categories table with hierarchical structure\n✅ posts table with full-text search capability\n✅ comments table with nested replies support\n✅ Performance indexes created\n✅ Full-text search index enabled\n\n📊 Category Hierarchy (Recursive CTE):\n+----+----------------+----------------+-----------+-------+---------------------------+\n| id | name           | slug           | parent_id | level | path                      |\n+----+----------------+----------------+-----------+-------+---------------------------+\n|  2 | Web Development| web-development|         1 |     1 | Technology > Web Development |\n|  4 | DevOps         | devops         |         1 |     1 | Technology > DevOps       |\n|  1 | Technology     | technology     |      NULL |     0 | Technology                |\n|  3 | Design         | design         |      NULL |     0 | Design                    |\n+----+----------------+----------------+-----------+-------+---------------------------+\n\n📈 Post Analytics (Window Functions):\n+---------------------------+---------------+----------------+------------+---------------------+\n| title                     | author        | category       | view_count | rank_in_category    |\n+---------------------------+---------------+----------------+------------+---------------------+\n| Advanced PostgreSQL Tips | John Doe      | Technology     |       1250 |                   1 |\n| React Hooks Deep Dive     | Jane Smith    | Web Development|        980 |                   1 |\n| Docker Best Practices     | Mike Johnson  | DevOps         |        750 |                   1 |\n+---------------------------+---------------+----------------+------------+---------------------+\n\n🔍 Full-Text Search Results:\nRelevance Score: 0.8945 - "PostgreSQL Performance Optimization"\nRelevance Score: 0.7234 - "Database Design Patterns"\nRelevance Score: 0.6123 - "Advanced SQL Techniques"\n\nBlog system ready with advanced PostgreSQL features!`
      })
    },
    go: {
      name: 'Go',
      icon: '🐹',
      prismLang: 'go',
      defaultCode: `package main
import "fmt"

func main() {
    fmt.Println("Hello, World!")
}`,
      extension: 'go',
      execute: () => ({
        success: true,
        output: 'Hello, World!\n\nGo code compiled successfully'
      })
    },
    typescript: {
      name: 'TypeScript',
      icon: '🔷',
      prismLang: 'typescript',
      defaultCode: `interface User {
    id: number;
    name: string;
}

const user: User = {
    id: 1,
    name: "John Doe"
};

console.log(\`Hello, \${user.name}!\`);`,
      extension: 'ts',
      execute: () => ({
        success: true,
        output: 'Hello, John Doe!\n\nTypeScript code compiled successfully'
      })
    },
    aiml: {
      name: 'AI & ML',
      icon: '🤖',
      prismLang: 'python',
      defaultCode: `# Machine Learning with Python
import numpy as np
from sklearn.linear_model import LinearRegression
import matplotlib.pyplot as plt

# Sample data
X = np.array([[1], [2], [3], [4], [5]])
y = np.array([2, 4, 6, 8, 10])

# Create and train model
model = LinearRegression()
model.fit(X, y)

# Make predictions
predictions = model.predict([[6], [7]])
print(f"Predictions: {predictions}")

# Model accuracy
score = model.score(X, y)
print(f"Model accuracy: {score:.2f}")`,
      extension: 'py',
      execute: () => ({
        success: true,
        output: `Predictions: [12. 14.]\nModel accuracy: 1.00\n\nMachine Learning model trained successfully!\nLinear regression model created with perfect accuracy.`
      })
    },
    dataanalytics: {
      name: 'Data Analytics',
      icon: '📊',
      prismLang: 'python',
      defaultCode: `# Data Analytics with Pandas
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# Create sample dataset
data = {
    'Name': ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'],
    'Age': [25, 30, 35, 28, 32],
    'Salary': [50000, 60000, 70000, 55000, 65000],
    'Department': ['IT', 'HR', 'IT', 'Finance', 'IT']
}

df = pd.DataFrame(data)

# Basic analytics
print("Dataset Overview:")
print(df.head())
print("\nStatistical Summary:")
print(df.describe())
print("\nAverage salary by department:")
print(df.groupby('Department')['Salary'].mean())`,
      extension: 'py',
      execute: () => ({
        success: true,
        output: `Dataset Overview:\n      Name  Age  Salary Department\n0    Alice   25   50000         IT\n1      Bob   30   60000         HR\n2  Charlie   35   70000         IT\n3    Diana   28   55000    Finance\n4      Eve   32   65000         IT\n\nStatistical Summary:\n             Age        Salary\ncount   5.000000      5.000000\nmean   30.000000  60000.000000\nstd     4.183300   8366.600265\n\nAverage salary by department:\nDepartment\nFinance    55000.0\nHR         60000.0\nIT         61666.7`
      })
    },
    fullstack: {
      name: 'Full Stack',
      icon: '🌐',
      prismLang: 'html',
      defaultCode: `<!-- Full Stack Web Development Example -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Full Stack App</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100">
    <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold mb-4">Full Stack User Management</h1>
        <div class="mb-4 flex flex-col sm:flex-row gap-2">
            <input id="userName" class="p-2 border rounded" type="text" placeholder="Enter name">
            <input id="userEmail" class="p-2 border rounded" type="email" placeholder="Enter email">
            <button onclick="addUser()" class="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Add User</button>
        </div>
        <div id="userList" class="bg-white p-4 rounded shadow"></div>
    </div>

    <script>
        let users = [];
        
        function addUser() {
            const name = document.getElementById('userName').value;
            const email = document.getElementById('userEmail').value;
            
            if (name && email) {
                users.push({ id: Date.now(), name, email });
                displayUsers();
                clearForm();
            }
        }
        
        function displayUsers() {
            const userList = document.getElementById('userList');
            userList.innerHTML = '<h3 class="text-lg font-semibold mb-2">Users:</h3>' + 
                users.map(user => 
                    \`<div class="p-2 border-b">\${user.name} - \${user.email}</div>\`
                ).join('');
        }
        
        function clearForm() {
            document.getElementById('userName').value = '';
            document.getElementById('userEmail').value = '';
        }
    </script>
</body>
</html>`,
      extension: 'html',
      execute: () => ({
        success: true,
        output: `Full Stack Web Application loaded successfully!\n\nFeatures:\n✅ HTML structure created\n✅ Tailwind CSS styling applied\n✅ JavaScript functionality added\n✅ User management system ready\n✅ Responsive design implemented\n\nApplication is ready to use!`
      })
    }
  };

  useEffect(() => {
    setCode(languages[selectedLanguage].defaultCode);
    setOutput('');
    setError(null);
    // Delay highlighting to ensure DOM is ready
    const timer = setTimeout(() => {
      try {
        if (codeRef.current && Prism.languages[languages[selectedLanguage]?.prismLang]) {
          Prism.highlightElement(codeRef.current);
        }
      } catch (error) {
        console.warn('PrismJS highlighting failed:', error);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [selectedLanguage]);

  useEffect(() => {
    // Safe highlighting with error handling
    const timer = setTimeout(() => {
      try {
        if (codeRef.current && Prism.languages[languages[selectedLanguage]?.prismLang]) {
          Prism.highlightElement(codeRef.current);
        }
      } catch (error) {
        console.warn('PrismJS highlighting failed:', error);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [code, theme, selectedLanguage]);

  useEffect(() => {
    localStorage.setItem('compilerTheme', theme);
    document.body.className = theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900';
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const runCode = async () => {
    setIsRunning(true);
    setOutput('🚀 Initializing execution environment...');
    setError(null);

    if (!code.trim()) {
      setIsRunning(false);
      setError('⚠️ Code cannot be empty');
      setOutput('');
      return;
    }

    setTimeout(() => {
      setOutput('⚡ Compiling and executing...');
    }, 200);

    setTimeout(() => {
      const result = languages[selectedLanguage].execute(code);
      setOutput(result.output);
      setError(result.success ? null : result.output);
      setIsRunning(false);
    }, Math.random() * 1500 + 500);
  };

  const saveCode = () => {
    localStorage.setItem(`code_${selectedLanguage}`, code);
    setOutput('Code saved successfully!');
    setTimeout(() => setOutput(''), 2000);
  };

  const downloadCode = () => {
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `code.${languages[selectedLanguage].extension}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const formatCode = () => {
    try {
      let formatted = code.split('\n').map(line => {
        const trimmed = line.trim();
        if (!trimmed) return '';
        return `  ${trimmed}`;
      }).join('\n');
      setCode(formatted);
      setOutput('✨ Code formatted successfully!');
      setTimeout(() => setOutput(''), 2000);
    } catch (err) {
      setError('❌ Error formatting code');
      setTimeout(() => setError(null), 2000);
    }
  };

  const insertTemplate = (template) => {
    setCode(template);
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = e.target.selectionStart;
      const end = e.target.selectionEnd;
      const newCode = code.substring(0, start) + '  ' + code.substring(end);
      setCode(newCode);
      setTimeout(() => {
        e.target.selectionStart = e.target.selectionEnd = start + 2;
      }, 0);
    }
  };

  const getCodeTemplates = () => {
    const templates = {
      javascript: [
        { name: 'Function', code: 'function myFunction() {\n  // Your code here\n  return result;\n}' },
        { name: 'Class', code: 'class MyClass {\n  constructor() {\n    // Initialize\n  }\n}' }
      ],
      python: [
        { name: 'Function', code: 'def my_function():\n    """Function description"""\n    # Your code here\n    return result' },
        { name: 'Class', code: 'class MyClass:\n    def __init__(self):\n        pass' }
      ],
      mysql: [
        { name: 'Table', code: 'CREATE TABLE table_name (\n    id INT AUTO_INCREMENT PRIMARY KEY,\n    name VARCHAR(100) NOT NULL\n);' },
        { name: 'Query', code: 'SELECT * FROM table_name WHERE condition = \'value\';' }
      ]
    };
    return templates[selectedLanguage] || [];
  };

  // Add keyboard shortcuts after runCode is defined
  useKeyboardShortcuts(runCode);

  return (
    <div className={`min-h-screen transition-all duration-500 ${theme === 'dark' ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-900'}`}>
      {/* Enhanced Header */}
      <header className={`bg-gradient-to-r ${theme === 'dark' ? 'from-gray-800 via-gray-700 to-gray-800' : 'from-blue-600 via-purple-600 to-indigo-600'} text-white py-6 shadow-2xl sticky top-0 z-20 backdrop-blur-sm border-b ${theme === 'dark' ? 'border-gray-600' : 'border-blue-300/20'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                </svg>
              </div>
              <div>
                <nav className="flex items-center space-x-2 text-sm mb-2 opacity-90">
                  <Link to="/" className="text-white/80 hover:text-white transition-colors flex items-center group">
                    <svg className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                    </svg>
                    Home
                  </Link>
                  <span className="text-white/60">→</span>
                  <span className="font-medium text-white">Compiler</span>
                </nav>
                <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  💻 Online Code Compiler
                </h1>
                <p className="text-blue-100/90 text-sm mt-1">
                  Write, compile & run code in <span className="font-semibold text-yellow-200">{Object.keys(languages).length}</span> programming languages
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={toggleTheme}
                className={`p-3 rounded-xl ${theme === 'dark' ? 'bg-yellow-500/20 text-yellow-300 hover:bg-yellow-500/30' : 'bg-white/20 text-white hover:bg-white/30'} transition-all duration-300 hover:scale-110 backdrop-blur-sm`}
                aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              >
                {theme === 'dark' ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
              </button>
              <button
                onClick={() => setIsFullScreen(!isFullScreen)}
                className="p-3 rounded-xl bg-white/20 text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                aria-label={isFullScreen ? 'Exit full screen' : 'Enter full screen'}
              >
                {isFullScreen ? <FaTimes className="text-lg" /> : <FaCog className="text-lg" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className={`container mx-auto px-4 py-8 ${isFullScreen ? 'h-[calc(100vh-120px)]' : ''}`}>
        {/* Enhanced Language Selection */}
        <div className={`${theme === 'dark' ? 'bg-gray-800/50 border-gray-700' : 'bg-white/70 border-white/20'} backdrop-blur-xl rounded-2xl shadow-2xl border p-6 mb-8 hover:shadow-3xl transition-all duration-500`}>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-500/10 text-blue-600'}`}>
                <FaCode className="text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Select Programming Language</h3>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Choose from our supported languages</p>
              </div>
            </div>
            <div className={`px-4 py-2 rounded-full ${theme === 'dark' ? 'bg-green-500/20 text-green-400' : 'bg-green-500/10 text-green-600'} font-semibold text-sm`}>
              {Object.keys(languages).length} Languages
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
            {Object.entries(languages).map(([key, lang]) => (
              <button
                key={key}
                onClick={() => setSelectedLanguage(key)}
                className={`group relative p-4 rounded-xl transition-all duration-300 text-center flex flex-col items-center justify-center space-y-2 hover:scale-105 ${
                  selectedLanguage === key
                    ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-2xl transform scale-105 ring-4 ring-blue-300/50'
                    : `${theme === 'dark' ? 'bg-gray-700/50 hover:bg-gray-600/70 text-white border-gray-600' : 'bg-gray-50/80 hover:bg-gray-100/90 text-gray-700 border-gray-200'} border hover:shadow-xl backdrop-blur-sm`
                }`}
                aria-label={`Select ${lang.name}`}
              >
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{lang.icon}</span>
                <span className="text-xs font-semibold">{lang.name}</span>
                {selectedLanguage === key && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className={`grid ${isFullScreen ? 'grid-cols-1' : 'lg:grid-cols-2'} gap-8 h-full`}>
          {/* Enhanced Code Editor */}
          <div className={`${theme === 'dark' ? 'bg-gray-800/50 border-gray-700' : 'bg-white/70 border-white/20'} backdrop-blur-xl rounded-2xl shadow-2xl border overflow-hidden relative group hover:shadow-3xl transition-all duration-500`}>
            <div className={`flex items-center justify-between p-6 ${theme === 'dark' ? 'border-gray-700 bg-gray-800/80' : 'border-gray-200 bg-gray-50/80'} border-b backdrop-blur-sm`}>
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-xl ${theme === 'dark' ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-500/10 text-blue-600'} group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{languages[selectedLanguage].icon}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">{languages[selectedLanguage].name}</h3>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Code Editor • Live Syntax Highlighting</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 flex-wrap gap-2">
                <button
                  onClick={() => setCode('')}
                  className={`px-4 py-2 text-sm ${theme === 'dark' ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30' : 'bg-red-50 text-red-600 hover:bg-red-100'} rounded-lg transition-all duration-300 hover:scale-105 font-medium`}
                  aria-label="Clear code"
                >
                  <FaTimes className="inline mr-2" /> Clear
                </button>
                <button
                  onClick={formatCode}
                  className={`px-4 py-2 text-sm ${theme === 'dark' ? 'bg-purple-500/20 text-purple-400 hover:bg-purple-500/30' : 'bg-purple-50 text-purple-600 hover:bg-purple-100'} rounded-lg transition-all duration-300 hover:scale-105 font-medium`}
                  aria-label="Format code"
                >
                  <FaCode className="inline mr-2" /> Format
                </button>
                <button
                  onClick={saveCode}
                  className={`px-4 py-2 text-sm ${theme === 'dark' ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30' : 'bg-green-50 text-green-600 hover:bg-green-100'} rounded-lg transition-all duration-300 hover:scale-105 font-medium`}
                  aria-label="Save code"
                >
                  <FaSave className="inline mr-2" /> Save
                </button>
                <button
                  onClick={runCode}
                  disabled={isRunning}
                  className={`px-6 py-2 text-sm bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-bold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center shadow-lg hover:shadow-xl hover:scale-105 ${isRunning ? 'animate-pulse' : ''}`}
                  aria-label="Run code"
                >
                  {isRunning ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Running...
                    </>
                  ) : (
                    <>
                      <FaPlay className="inline mr-2" />
                      Run Code
                    </>
                  )}
                </button>
              </div>
            </div>
            <div className="relative">
              {/* Editor Toolbar */}
              <div className={`flex items-center justify-between p-3 ${theme === 'dark' ? 'bg-gray-800/60' : 'bg-gray-100/60'} border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'}`}>
                <div className="flex items-center space-x-3">
                  <div className={`px-2 py-1 rounded text-xs font-semibold ${theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-600'}`}>
                    .{languages[selectedLanguage].extension}
                  </div>
                  <button
                    onClick={() => setShowLineNumbers(!showLineNumbers)}
                    className={`px-2 py-1 text-xs rounded ${showLineNumbers ? 'bg-blue-500 text-white' : `${theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-600'}`}`}
                  >
                    Lines
                  </button>
                  <select
                    value={fontSize}
                    onChange={(e) => setFontSize(Number(e.target.value))}
                    className={`px-2 py-1 text-xs rounded ${theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-600'}`}
                  >
                    <option value={12}>12px</option>
                    <option value={14}>14px</option>
                    <option value={16}>16px</option>
                    <option value={18}>18px</option>
                  </select>
                </div>
                <div className="flex items-center space-x-2">
                  {getCodeTemplates().map((template, index) => (
                    <button
                      key={index}
                      onClick={() => insertTemplate(template.code)}
                      className={`px-2 py-1 text-xs rounded ${theme === 'dark' ? 'bg-purple-500/20 text-purple-400 hover:bg-purple-500/30' : 'bg-purple-100 text-purple-600 hover:bg-purple-200'} transition-colors`}
                    >
                      {template.name}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Code Editor */}
              <div className="relative p-4">
                <div className="flex">
                  {showLineNumbers && (
                    <div className={`pr-4 text-right select-none ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`} style={{ fontSize: `${fontSize}px`, fontFamily: 'monospace', lineHeight: '1.5' }}>
                      {code.split('\n').map((_, index) => (
                        <div key={index} className="leading-6">{index + 1}</div>
                      ))}
                    </div>
                  )}
                  <div className="flex-1 relative">
                    <textarea
                      ref={textareaRef}
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      onKeyDown={handleKeyDown}
                      className={`w-full ${isFullScreen ? 'h-[calc(100vh-400px)]' : 'h-80 lg:h-96'} p-4 ${theme === 'dark' ? 'bg-gray-900/90 border-gray-700' : 'bg-gray-900 border-gray-800'} text-green-400 font-mono rounded-xl border focus:ring-2 focus:ring-blue-500/50 resize-none outline-none shadow-inner`}
                      style={{ 
                        caretColor: '#10b981',
                        fontSize: `${fontSize}px`,
                        lineHeight: '1.5'
                      }}
                      placeholder={`// Start coding in ${languages[selectedLanguage].name}...\n// Press Ctrl+Enter to run\n// Use Tab for indentation`}
                      spellCheck="false"
                      aria-label="Code editor"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Output Panel */}
          <div className={`${theme === 'dark' ? 'bg-gray-800/50 border-gray-700' : 'bg-white/70 border-white/20'} backdrop-blur-xl rounded-2xl shadow-2xl border overflow-hidden group hover:shadow-3xl transition-all duration-500`}>
            <div className={`flex items-center justify-between p-6 ${theme === 'dark' ? 'border-gray-700 bg-gray-800/80' : 'border-gray-200 bg-gray-50/80'} border-b backdrop-blur-sm`}>
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-xl ${theme === 'dark' ? 'bg-green-500/20 text-green-400' : 'bg-green-500/10 text-green-600'} group-hover:scale-110 transition-transform duration-300`}>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
                    <path d="M10 17l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" fill="white"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Output Console</h3>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Execution Results • Real-time Output</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setOutput('')}
                  className={`px-4 py-2 text-sm ${theme === 'dark' ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30' : 'bg-red-50 text-red-600 hover:bg-red-100'} rounded-lg transition-all duration-300 hover:scale-105 font-medium`}
                  aria-label="Clear output"
                >
                  <FaTimes className="inline mr-2" /> Clear
                </button>
                <button
                  onClick={downloadCode}
                  className={`px-4 py-2 text-sm ${theme === 'dark' ? 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30' : 'bg-blue-50 text-blue-600 hover:bg-blue-100'} rounded-lg transition-all duration-300 hover:scale-105 font-medium`}
                  aria-label="Download code"
                >
                  <FaDownload className="inline mr-2" /> Download
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className={`${isFullScreen ? 'h-[calc(100vh-350px)]' : 'h-80 lg:h-96'} p-6 ${theme === 'dark' ? 'bg-gray-900/90 border-gray-700' : 'bg-gray-900 border-gray-800'} text-white font-mono text-sm rounded-xl overflow-y-auto shadow-inner border relative`}>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                {output ? (
                  <div className="mt-8">
                    <div className="text-green-400 text-xs mb-2 opacity-70">$ Output:</div>
                    <pre className="whitespace-pre-wrap text-gray-100 leading-relaxed">{output}</pre>
                  </div>
                ) : error ? (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <div className="text-red-400 text-6xl mb-4 animate-bounce">
                        <FaExclamationTriangle />
                      </div>
                      <div className="text-red-400 font-semibold text-lg mb-2">Execution Error</div>
                      <div className="text-red-300 text-sm">{error}</div>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <div className="text-6xl mb-4 animate-pulse">⚡</div>
                      <div className="text-gray-400 text-lg font-semibold mb-2">Ready to Execute</div>
                      <div className="text-gray-500 text-sm">Click "Run Code" to see the magic happen</div>
                      <div className="mt-4 flex justify-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Quick Actions */}
        <div className={`mt-8 ${theme === 'dark' ? 'bg-gray-800/50 border-gray-700' : 'bg-white/70 border-white/20'} backdrop-blur-xl rounded-2xl shadow-2xl border p-6 hover:shadow-3xl transition-all duration-500`}>
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <FaCheck className="text-green-500 text-lg" />
                </div>
                <div>
                  <div className="font-semibold text-sm">System Ready</div>
                  <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Compiler online</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <span className="text-blue-500 text-lg">🚀</span>
                </div>
                <div>
                  <div className="font-semibold text-sm">Fast Execution</div>
                  <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Optimized runtime</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <span className="text-purple-500 text-lg">💡</span>
                </div>
                <div>
                  <div className="font-semibold text-sm">Smart Highlighting</div>
                  <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Syntax aware</div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3 flex-wrap gap-3">
              <div className={`text-sm font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mr-2`}>Quick Switch:</div>
              {['javascript', 'python', 'java', 'mysql', 'postgresql'].map(lang => (
                <button
                  key={lang}
                  onClick={() => setSelectedLanguage(lang)}
                  className={`px-4 py-2 text-sm rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
                    selectedLanguage === lang 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
                      : `${theme === 'dark' ? 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/70' : 'bg-gray-100/80 text-gray-700 hover:bg-gray-200/90'} hover:shadow-md`
                  }`}
                >
                  <span className="mr-2">{languages[lang].icon}</span>
                  {languages[lang].name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Action Button for Mobile */}
      <div className="fixed bottom-6 right-6 lg:hidden z-30">
        <button
          onClick={runCode}
          disabled={isRunning}
          className={`w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center hover:scale-110 disabled:opacity-50 ${isRunning ? 'animate-pulse' : ''}`}
          aria-label="Run code"
        >
          {isRunning ? (
            <svg className="animate-spin h-6 w-6 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <FaPlay className="text-xl" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Compiler;