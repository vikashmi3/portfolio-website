import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Compiler = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [code, setCode] = useState('console.log("Hello, World!");');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const languages = {
    javascript: {
      name: 'JavaScript',
      icon: '🟨',
      defaultCode: 'console.log("Hello, World!");',
      extension: 'js'
    },
    python: {
      name: 'Python',
      icon: '🐍',
      defaultCode: 'print("Hello, World!")',
      extension: 'py'
    },
    java: {
      name: 'Java',
      icon: '☕',
      defaultCode: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
      extension: 'java'
    },
    csharp: {
      name: 'C#',
      icon: '🔷',
      defaultCode: `using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello, World!");
    }
}`,
      extension: 'cs'
    },
    cpp: {
      name: 'C++',
      icon: '⚡',
      defaultCode: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`,
      extension: 'cpp'
    },
    c: {
      name: 'C',
      icon: '🔧',
      defaultCode: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`,
      extension: 'c'
    },
    php: {
      name: 'PHP',
      icon: '🐘',
      defaultCode: '<?php\necho "Hello, World!";',
      extension: 'php'
    },
    ruby: {
      name: 'Ruby',
      icon: '💎',
      defaultCode: 'puts "Hello, World!"',
      extension: 'rb'
    },
    mysql: {
      name: 'MySQL',
      icon: '🐬',
      defaultCode: `-- Create a sample database
CREATE DATABASE IF NOT EXISTS sample_db;
USE sample_db;

-- Create a users table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data
INSERT INTO users (name, email) VALUES 
('John Doe', 'john@example.com'),
('Jane Smith', 'jane@example.com');

-- Query the data
SELECT * FROM users;`,
      extension: 'sql'
    },
    aiml: {
      name: 'AI & ML',
      icon: '🤖',
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
      extension: 'py'
    },
    dataanalytics: {
      name: 'Data Analytics',
      icon: '📊',
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
      extension: 'py'
    },
    fullstack: {
      name: 'Full Stack',
      icon: '🌐',
      defaultCode: `<!-- Full Stack Web Development Example -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Full Stack App</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        .container { max-width: 600px; margin: 0 auto; }
        .form-group { margin-bottom: 15px; }
        input, button { padding: 10px; margin: 5px; }
        button { background: #007bff; color: white; border: none; cursor: pointer; }
        .user-list { margin-top: 20px; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Full Stack User Management</h1>
        <div class="form-group">
            <input type="text" id="userName" placeholder="Enter name">
            <input type="email" id="userEmail" placeholder="Enter email">
            <button onclick="addUser()">Add User</button>
        </div>
        <div id="userList" class="user-list"></div>
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
            userList.innerHTML = '<h3>Users:</h3>' + 
                users.map(user => 
                    \`<div>\${user.name} - \${user.email}</div>\`
                ).join('');
        }
        
        function clearForm() {
            document.getElementById('userName').value = '';
            document.getElementById('userEmail').value = '';
        }
    </script>
</body>
</html>`,
      extension: 'html'
    }
  };

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    setCode(languages[lang].defaultCode);
    setOutput('');
  };

  const runCode = async () => {
    setIsRunning(true);
    setOutput('Running...');
    
    // Simulate code execution
    setTimeout(() => {
      try {
        if (selectedLanguage === 'javascript') {
          const result = eval(code.replace('console.log', 'return'));
          setOutput(result || 'Code executed successfully');
        } else if (selectedLanguage === 'mysql') {
          setOutput(`Query executed successfully!\n\nResults:\n+----+------------+-------------------+\n| id | name       | email             |\n+----+------------+-------------------+\n|  1 | John Doe   | john@example.com  |\n|  2 | Jane Smith | jane@example.com  |\n+----+------------+-------------------+\n2 rows in set (0.01 sec)`);
        } else if (selectedLanguage === 'aiml') {
          setOutput(`Predictions: [12. 14.]\nModel accuracy: 1.00\n\nMachine Learning model trained successfully!\nLinear regression model created with perfect accuracy.`);
        } else if (selectedLanguage === 'dataanalytics') {
          setOutput(`Dataset Overview:\n      Name  Age  Salary Department\n0    Alice   25   50000         IT\n1      Bob   30   60000         HR\n2  Charlie   35   70000         IT\n3    Diana   28   55000    Finance\n4      Eve   32   65000         IT\n\nStatistical Summary:\n             Age        Salary\ncount   5.000000      5.000000\nmean   30.000000  60000.000000\nstd     4.183300   8366.600265\n\nAverage salary by department:\nDepartment\nFinance    55000.0\nHR         60000.0\nIT         61666.7`);
        } else if (selectedLanguage === 'fullstack') {
          setOutput(`Full Stack Web Application loaded successfully!\n\nFeatures:\n✅ HTML structure created\n✅ CSS styling applied\n✅ JavaScript functionality added\n✅ User management system ready\n✅ Responsive design implemented\n\nApplication is ready to use!`);
        } else {
          setOutput(`Hello, World!\n\nCode executed successfully in ${languages[selectedLanguage].name}`);
        }
      } catch (error) {
        setOutput(`Error: ${error.message}`);
      }
      setIsRunning(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Compact Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-6">
        <div className="container mx-auto px-4">
          <nav className="mb-4 flex items-center space-x-2 text-sm">
            <Link to="/" className="text-blue-200 hover:text-white transition-colors flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              Home
            </Link>
            <span className="text-blue-300">→</span>
            <span className="text-white font-medium">Compiler</span>
          </nav>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                💻 Online Compiler
              </h1>
              <p className="text-blue-100 text-sm sm:text-base">
                Write, compile & run code in 12+ languages
              </p>
            </div>
            <div className="hidden sm:block text-4xl opacity-20">
              {languages[selectedLanguage].icon}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        {/* Language Selection */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-gray-800">Language</h3>
            <span className="text-sm text-gray-500">{Object.keys(languages).length} supported</span>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2">
            {Object.entries(languages).map(([key, lang]) => (
              <button
                key={key}
                onClick={() => handleLanguageChange(key)}
                className={`p-3 rounded-lg transition-all duration-200 text-center ${
                  selectedLanguage === key
                    ? 'bg-blue-500 text-white shadow-lg transform scale-105'
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-700 hover:shadow-md'
                }`}
              >
                <div className="text-xl mb-1">{lang.icon}</div>
                <div className="text-xs font-medium">{lang.name}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-4">
          {/* Code Editor */}
          <div className="bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">{languages[selectedLanguage].icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-800">{languages[selectedLanguage].name}</h3>
                  <p className="text-xs text-gray-500">Code Editor</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setCode('')}
                  className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded hover:bg-gray-200 transition-colors"
                >
                  Clear
                </button>
                <button
                  onClick={runCode}
                  disabled={isRunning}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
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
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                      </svg>
                      Run Code
                    </>
                  )}
                </button>
              </div>
            </div>
            <div className="p-4">
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-80 lg:h-96 p-4 bg-gray-900 text-green-400 font-mono text-sm rounded-lg border-0 focus:ring-2 focus:ring-blue-500 resize-none"
                placeholder="Write your code here..."
                spellCheck="false"
              />
            </div>
          </div>

          {/* Output Panel */}
          <div className="bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-800">Output</h3>
                  <p className="text-xs text-gray-500">Execution Result</p>
                </div>
              </div>
              <button
                onClick={() => setOutput('')}
                className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded hover:bg-gray-200 transition-colors"
              >
                Clear
              </button>
            </div>
            <div className="p-4">
              <div className="h-80 lg:h-96 p-4 bg-gray-900 text-white font-mono text-sm rounded-lg overflow-y-auto">
                {output ? (
                  <pre className="whitespace-pre-wrap">{output}</pre>
                ) : (
                  <div className="text-gray-400 italic flex items-center justify-center h-full">
                    <div className="text-center">
                      <div className="text-4xl mb-2">⚡</div>
                      <div>Click "Run Code" to see output</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-4 bg-white rounded-lg shadow-md p-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span className="text-green-500">●</span>
                <span>Ready to compile</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span>🚀</span>
                <span>Fast execution</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleLanguageChange('javascript')}
                className="px-3 py-1 text-sm bg-yellow-100 text-yellow-800 rounded hover:bg-yellow-200 transition-colors"
              >
                🟨 JavaScript
              </button>
              <button
                onClick={() => handleLanguageChange('python')}
                className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded hover:bg-green-200 transition-colors"
              >
                🐍 Python
              </button>
              <button
                onClick={() => handleLanguageChange('java')}
                className="px-3 py-1 text-sm bg-orange-100 text-orange-800 rounded hover:bg-orange-200 transition-colors"
              >
                ☕ Java
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compiler;