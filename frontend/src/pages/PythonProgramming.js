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

const PythonProgramming = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('syllabus');
  const [expandedExample, setExpandedExample] = useState(null);

  const courseDetails = {
    name: "Python Programming",
    description: "Learn Python from basics to advanced topics. Covers data structures, algorithms, and real-world applications.",
    fullDescription: "Master Python programming with comprehensive coverage of syntax, data structures, object-oriented programming, web development, data analysis, and automation. Build real-world projects and learn industry best practices.",
    duration: "10 weeks",
    level: "Beginner",
    instructor: "Dr. Lisa Wang",
    introduction: {
      overview: "Python is a high-level, interpreted programming language known for its simplicity and readability. Created by Guido van Rossum, Python emphasizes code readability and allows programmers to express concepts in fewer lines of code than languages like C++ or Java.",
      keyFeatures: [
        "Simple Syntax - Easy to learn and read, similar to English",
        "Interpreted Language - No compilation step, immediate execution",
        "Dynamic Typing - Variables don't need explicit type declarations",
        "Extensive Libraries - Rich standard library and third-party packages",
        "Cross-Platform - Runs on Windows, macOS, Linux, and more",
        "Versatile - Web development, data science, AI, automation, and more",
        "Large Community - Active community with extensive documentation",
        "Open Source - Free to use and modify"
      ],
      syntax: {
        basic: `# Python Basic Syntax Overview

# 1. Variables and Data Types
name = "Python"              # String
age = 30                     # Integer
height = 5.9                 # Float
is_student = True            # Boolean
scores = [85, 92, 78]        # List
info = {"name": "John"}      # Dictionary
coordinates = (10, 20)       # Tuple
unique_items = {1, 2, 3}     # Set

# 2. Control Structures
if condition:
    # if block
elif another_condition:
    # elif block
else:
    # else block

# 3. Loops
for item in iterable:
    # for loop

while condition:
    # while loop

# 4. Functions
def function_name(parameters):
    """Function docstring"""
    # function body
    return value  # optional

# 5. Classes
class ClassName:
    def __init__(self, parameters):
        self.attribute = value
    
    def method_name(self):
        # method body
        pass

# 6. List Comprehensions
new_list = [expression for item in iterable if condition]

# 7. Exception Handling
try:
    # risky code
except SpecificException as e:
    # handle exception
finally:
    # cleanup code

# 8. File Operations
with open('file.txt', 'r') as file:
    content = file.read()

# 9. Imports
import module_name
from module import function
import module as alias`,
        conventions: [
          "Use snake_case for variables and functions (e.g., my_variable, calculate_total)",
          "Use PascalCase for classes (e.g., MyClass, StudentRecord)",
          "Use UPPER_SNAKE_CASE for constants (e.g., MAX_SIZE, PI_VALUE)",
          "Indentation: 4 spaces (no tabs)",
          "Line length: maximum 79 characters",
          "Use descriptive names for variables and functions",
          "Add docstrings to functions and classes",
          "Follow PEP 8 style guide"
        ]
      }
    },
    syllabus: [
      {
        week: 1,
        title: "Python Basics and Syntax",
        topics: [
          "Python installation and setup",
          "Variables and data types",
          "Input/output operations",
          "Basic operators",
          "Control structures"
        ],
        practicals: [
          "Setup Python environment",
          "Create basic programs",
          "Build simple calculator"
        ],
        examples: [
          {
            title: "Python Syntax and Data Types",
            code: `#!/usr/bin/env python3
"""
Python Fundamentals and Syntax Demonstration
This script covers basic Python concepts with detailed examples.
"""

import math
import random
from datetime import datetime, timedelta
from collections import Counter, defaultdict

def main():
    """Main function demonstrating Python fundamentals."""
    print("=== PYTHON FUNDAMENTALS DEMONSTRATION ===")
    
    # ===== DATA TYPES AND VARIABLES =====
    print("\n1. DATA TYPES AND VARIABLES:")
    
    # Basic data types
    integer_num = 42
    float_num = 3.14159
    string_text = "Hello, Python!"
    boolean_val = True
    none_val = None
    
    # Complex data types
    list_data = [1, 2, 3, "mixed", True]
    tuple_data = (10, 20, 30)  # Immutable
    dict_data = {"name": "Alice", "age": 25, "city": "New York"}
    set_data = {1, 2, 3, 4, 5}  # Unique elements
    
    print(f"Integer: {integer_num} (type: {type(integer_num).__name__})")
    print(f"Float: {float_num} (type: {type(float_num).__name__})")
    print(f"String: '{string_text}' (type: {type(string_text).__name__})")
    print(f"Boolean: {boolean_val} (type: {type(boolean_val).__name__})")
    print(f"None: {none_val} (type: {type(none_val).__name__})")
    print(f"List: {list_data} (length: {len(list_data)})")
    print(f"Tuple: {tuple_data} (length: {len(tuple_data)})")
    print(f"Dictionary: {dict_data} (keys: {len(dict_data)})")
    print(f"Set: {set_data} (unique elements: {len(set_data)})")
    
    # Type checking and conversion
    print(f"\nType checking: isinstance(42, int) = {isinstance(42, int)}")
    print(f"Type conversion: int('123') = {int('123')}")
    print(f"Type conversion: str(456) = '{str(456)}'")
    print(f"Type conversion: float('3.14') = {float('3.14')}")
    
    # ===== OPERATORS =====
    print("\n2. OPERATORS:")
    
    a, b = 10, 3
    
    # Arithmetic operators
    print(f"Arithmetic: {a} + {b} = {a + b}")
    print(f"Arithmetic: {a} - {b} = {a - b}")
    print(f"Arithmetic: {a} * {b} = {a * b}")
    print(f"Arithmetic: {a} / {b} = {a / b:.2f}")      # Float division
    print(f"Arithmetic: {a} // {b} = {a // b}")        # Integer division
    print(f"Arithmetic: {a} % {b} = {a % b}")          # Modulus
    print(f"Arithmetic: {a} ** {b} = {a ** b}")        # Exponentiation
    
    # Comparison operators
    print(f"Comparison: {a} > {b} = {a > b}")
    print(f"Comparison: {a} == {b} = {a == b}")
    print(f"Comparison: {a} != {b} = {a != b}")
    
    # Logical operators
    x, y = True, False
    print(f"Logical: {x} and {y} = {x and y}")
    print(f"Logical: {x} or {y} = {x or y}")
    print(f"Logical: not {x} = {not x}")
    
    # Membership operators
    numbers = [1, 2, 3, 4, 5]
    print(f"Membership: 3 in {numbers} = {3 in numbers}")
    print(f"Membership: 6 not in {numbers} = {6 not in numbers}")
    
    # Identity operators
    list1 = [1, 2, 3]
    list2 = [1, 2, 3]
    list3 = list1
    print(f"Identity: list1 is list2 = {list1 is list2}")  # False (different objects)
    print(f"Identity: list1 is list3 = {list1 is list3}")  # True (same object)
    print(f"Equality: list1 == list2 = {list1 == list2}")  # True (same content)
    
    # ===== CONTROL STRUCTURES =====
    print("\n3. CONTROL STRUCTURES:")
    
    # If-elif-else
    score = 85
    if score >= 90:
        grade = "A"
    elif score >= 80:
        grade = "B"
    elif score >= 70:
        grade = "C"
    elif score >= 60:
        grade = "D"
    else:
        grade = "F"
    
    print(f"Score: {score}, Grade: {grade}")
    
    # Ternary operator (conditional expression)
    status = "Pass" if score >= 60 else "Fail"
    print(f"Status: {status}")
    
    # Match statement (Python 3.10+)
    day_num = 3
    match day_num:
        case 1:
            day_name = "Monday"
        case 2:
            day_name = "Tuesday"
        case 3:
            day_name = "Wednesday"
        case 4:
            day_name = "Thursday"
        case 5:
            day_name = "Friday"
        case 6 | 7:  # Multiple patterns
            day_name = "Weekend"
        case _:  # Default case
            day_name = "Invalid day"
    
    print(f"Day {day_num} is {day_name}")
    
    # ===== LOOPS =====
    print("\n4. LOOPS:")
    
    # For loop with range
    print("For loop (1-5): ", end="")
    for i in range(1, 6):
        print(i, end=" ")
    print()
    
    # For loop with list
    fruits = ["apple", "banana", "orange", "grape"]
    print("Fruits: ", end="")
    for fruit in fruits:
        print(fruit, end=" ")
    print()
    
    # For loop with enumerate (index and value)
    print("Enumerated fruits:")
    for index, fruit in enumerate(fruits, 1):
        print(f"  {index}. {fruit}")
    
    # For loop with dictionary
    person = {"name": "John", "age": 30, "city": "NYC"}
    print("Person info:")
    for key, value in person.items():
        print(f"  {key}: {value}")
    
    # While loop
    print("While loop countdown: ", end="")
    countdown = 5
    while countdown > 0:
        print(countdown, end=" ")
        countdown -= 1
    print("Blast off!")
    
    # List comprehensions
    print("\nList comprehensions:")
    squares = [x**2 for x in range(1, 6)]
    print(f"Squares: {squares}")
    
    even_squares = [x**2 for x in range(1, 11) if x % 2 == 0]
    print(f"Even squares: {even_squares}")
    
    # Dictionary comprehension
    square_dict = {x: x**2 for x in range(1, 6)}
    print(f"Square dictionary: {square_dict}")
    
    # Set comprehension
    unique_lengths = {len(word) for word in ["python", "java", "c", "javascript", "go"]}
    print(f"Unique word lengths: {unique_lengths}")
    
    # ===== FUNCTIONS =====
    print("\n5. FUNCTIONS:")
    
    # Basic function
    def greet(name, greeting="Hello"):
        """Greet a person with a custom or default greeting."""
        return f"{greeting}, {name}!"
    
    print(greet("Alice"))
    print(greet("Bob", "Hi"))
    
    # Function with *args and **kwargs
    def flexible_function(*args, **kwargs):
        """Function that accepts any number of arguments."""
        print(f"Positional arguments: {args}")
        print(f"Keyword arguments: {kwargs}")
        return len(args) + len(kwargs)
    
    result = flexible_function(1, 2, 3, name="John", age=30)
    print(f"Total arguments: {result}")
    
    # Lambda functions
    square = lambda x: x**2
    add = lambda x, y: x + y
    
    print(f"Lambda square(5): {square(5)}")
    print(f"Lambda add(3, 4): {add(3, 4)}")
    
    # Higher-order functions
    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    
    # map() function
    squared_numbers = list(map(lambda x: x**2, numbers))
    print(f"Mapped squares: {squared_numbers[:5]}...")  # Show first 5
    
    # filter() function
    even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
    print(f"Filtered evens: {even_numbers}")
    
    # reduce() function
    from functools import reduce
    sum_all = reduce(lambda x, y: x + y, numbers)
    print(f"Reduced sum: {sum_all}")
    
    # ===== STRING OPERATIONS =====
    print("\n6. STRING OPERATIONS:")
    
    text = "  Python Programming Language  "
    print(f"Original: '{text}'")
    print(f"Length: {len(text)}")
    print(f"Stripped: '{text.strip()}'")
    print(f"Upper: '{text.upper()}'")
    print(f"Lower: '{text.lower()}'")
    print(f"Title: '{text.title()}'")
    print(f"Replace: '{text.replace('Python', 'Advanced Python')}'")
    
    # String formatting
    name = "Developer"
    age = 25
    salary = 75000.50
    
    # f-strings (Python 3.6+)
    message1 = f"Hello, {name}! You are {age} years old and earn \${salary:,.2f}"
    print(f"f-string: {message1}")
    
    # .format() method
    message2 = "Hello, {}! You are {} years old and earn \${:,.2f}".format(name, age, salary)
    print(f"format(): {message2}")
    
    # % formatting (older style)
    message3 = "Hello, %s! You are %d years old and earn \$%.2f" % (name, age, salary)
    print(f"% formatting: {message3}")
    
    # String methods
    sample_text = "python,java,javascript,c++,go"
    languages = sample_text.split(",")
    print(f"Split: {languages}")
    print(f"Join: {' | '.join(languages)}")
    print(f"Starts with 'python': {sample_text.startswith('python')}")
    print(f"Ends with 'go': {sample_text.endswith('go')}")
    print(f"Find 'java': {sample_text.find('java')}")
    print(f"Count 'a': {sample_text.count('a')}")
    
    # ===== COLLECTIONS AND DATA STRUCTURES =====
    print("\n7. COLLECTIONS AND DATA STRUCTURES:")
    
    # Lists (mutable, ordered)
    my_list = [1, 2, 3, 4, 5]
    my_list.append(6)
    my_list.insert(0, 0)
    my_list.extend([7, 8, 9])
    print(f"List operations: {my_list}")
    print(f"List slicing [2:5]: {my_list[2:5]}")
    print(f"List slicing [::-1]: {my_list[::-1]}")  # Reverse
    
    # Tuples (immutable, ordered)
    coordinates = (10, 20, 30)
    x, y, z = coordinates  # Unpacking
    print(f"Tuple unpacking: x={x}, y={y}, z={z}")
    
    # Dictionaries (mutable, key-value pairs)
    student = {
        "name": "Alice",
        "age": 22,
        "grades": [85, 92, 78, 96],
        "is_enrolled": True
    }
    
    student["gpa"] = sum(student["grades"]) / len(student["grades"])
    print(f"Student: {student['name']}, GPA: {student['gpa']:.2f}")
    print(f"Dictionary keys: {list(student.keys())}")
    print(f"Dictionary values: {list(student.values())}")
    
    # Sets (mutable, unique elements)
    set1 = {1, 2, 3, 4, 5}
    set2 = {4, 5, 6, 7, 8}
    
    print(f"Set union: {set1 | set2}")
    print(f"Set intersection: {set1 & set2}")
    print(f"Set difference: {set1 - set2}")
    print(f"Set symmetric difference: {set1 ^ set2}")
    
    # Advanced collections
    from collections import Counter, defaultdict, namedtuple
    
    # Counter
    text_sample = "hello world"
    char_count = Counter(text_sample)
    print(f"Character count: {char_count}")
    print(f"Most common: {char_count.most_common(3)}")
    
    # defaultdict
    dd = defaultdict(list)
    dd['fruits'].append('apple')
    dd['fruits'].append('banana')
    dd['vegetables'].append('carrot')
    print(f"defaultdict: {dict(dd)}")
    
    # namedtuple
    Point = namedtuple('Point', ['x', 'y'])
    p1 = Point(10, 20)
    print(f"Named tuple: {p1}, x={p1.x}, y={p1.y}")
    
    # ===== FILE OPERATIONS =====
    print("\n8. FILE OPERATIONS:")
    
    # Writing to file
    filename = "sample_output.txt"
    with open(filename, 'w') as file:
        file.write("Hello, Python!\n")
        file.write("This is a sample file.\n")
        file.writelines(["Line 1\n", "Line 2\n", "Line 3\n"])
    
    print(f"File '{filename}' created and written.")
    
    # Reading from file
    try:
        with open(filename, 'r') as file:
            content = file.read()
            print(f"File content:\n{content}")
    except FileNotFoundError:
        print(f"File '{filename}' not found.")
    
    # ===== ERROR HANDLING =====
    print("\n9. ERROR HANDLING:")
    
    def safe_divide(a, b):
        """Safely divide two numbers with error handling."""
        try:
            result = a / b
            return result
        except ZeroDivisionError:
            print(f"Error: Cannot divide {a} by zero!")
            return None
        except TypeError:
            print(f"Error: Invalid types for division: {type(a)}, {type(b)}")
            return None
        finally:
            print(f"Division operation attempted: {a} / {b}")
    
    print(f"Safe divide 10/2: {safe_divide(10, 2)}")
    print(f"Safe divide 10/0: {safe_divide(10, 0)}")
    print(f"Safe divide 'a'/2: {safe_divide('a', 2)}")
    
    # ===== MODULES AND IMPORTS =====
    print("\n10. MODULES AND IMPORTS:")
    
    # Math module
    print(f"Math.pi: {math.pi:.4f}")
    print(f"Math.sqrt(16): {math.sqrt(16)}")
    print(f"Math.factorial(5): {math.factorial(5)}")
    
    # Random module
    print(f"Random integer (1-10): {random.randint(1, 10)}")
    print(f"Random choice: {random.choice(['apple', 'banana', 'orange'])}")
    
    # Datetime module
    now = datetime.now()
    tomorrow = now + timedelta(days=1)
    print(f"Current time: {now.strftime('%Y-%m-%d %H:%M:%S')}")
    print(f"Tomorrow: {tomorrow.strftime('%Y-%m-%d')}")
    
    print("\n=== DEMONSTRATION COMPLETE ===")

if __name__ == "__main__":
    main()`,
            explanation: "Comprehensive Python fundamentals covering all basic concepts including data types, operators, control structures, functions, collections, file operations, and error handling with practical examples."
          },
          {
            title: "Advanced Python Features and Best Practices",
            code: `# Python Basics - Variables and Data Types
name = "Python Programmer"
age = 25
height = 5.8
is_student = True
languages = ["Python", "JavaScript", "Java"]

print(f"Name: {name}")
print(f"Age: {age}")
print(f"Height: {height}")
print(f"Is Student: {is_student}")
print(f"Languages: {', '.join(languages)}")

# Input and basic operations
user_name = input("Enter your name: ")
user_age = int(input("Enter your age: "))

if user_age >= 18:
    print(f"Hello {user_name}, you are an adult!")
else:
    print(f"Hello {user_name}, you are a minor!")

# Loop example
print("\\nCounting from 1 to 5:")
for i in range(1, 6):
    print(i, end=" ")
print()

# List operations
numbers = [1, 2, 3, 4, 5]
squares = [x**2 for x in numbers]
print(f"Numbers: {numbers}")
print(f"Squares: {squares}")`,
            explanation: "Basic Python syntax showing variables, data types, input/output, control structures, and list comprehensions."
          }
        ]
      },
      {
        week: 2,
        title: "Data Structures and Functions",
        topics: [
          "Lists, tuples, dictionaries, sets",
          "Function definition and parameters",
          "Lambda functions",
          "Scope and closures",
          "Decorators basics"
        ],
        practicals: [
          "Work with data structures",
          "Create custom functions",
          "Build data processing tools"
        ],
        examples: [
          {
            title: "Data Structures and Functions",
            code: `# Working with different data structures
students = {
    "Alice": {"age": 20, "grades": [85, 92, 78]},
    "Bob": {"age": 21, "grades": [76, 84, 91]},
    "Charlie": {"age": 19, "grades": [95, 88, 92]}
}

def calculate_average(grades):
    """Calculate average of grades"""
    return sum(grades) / len(grades) if grades else 0

def get_grade_letter(average):
    """Convert numeric grade to letter grade"""
    if average >= 90: return 'A'
    elif average >= 80: return 'B'
    elif average >= 70: return 'C'
    elif average >= 60: return 'D'
    else: return 'F'

# Process student data
print("Student Report:")
print("-" * 40)
for name, info in students.items():
    avg = calculate_average(info["grades"])
    letter = get_grade_letter(avg)
    print(f"{name}: Age {info['age']}, Average: {avg:.1f}, Grade: {letter}")

# Lambda functions and higher-order functions
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Filter even numbers
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(f"\\nEven numbers: {evens}")

# Map to squares
squares = list(map(lambda x: x**2, numbers))
print(f"Squares: {squares}")

# Reduce to sum (using functools)
from functools import reduce
total = reduce(lambda x, y: x + y, numbers)
print(f"Sum: {total}")

# Set operations
set1 = {1, 2, 3, 4, 5}
set2 = {4, 5, 6, 7, 8}
print(f"\\nSet 1: {set1}")
print(f"Set 2: {set2}")
print(f"Union: {set1 | set2}")
print(f"Intersection: {set1 & set2}")
print(f"Difference: {set1 - set2}")`,
            explanation: "Demonstrates Python data structures (dict, list, set), functions, lambda expressions, and built-in functions like map, filter, reduce."
          }
        ]
      },
      {
        week: 3,
        title: "Object-Oriented Programming",
        topics: [
          "Classes and objects",
          "Inheritance and polymorphism",
          "Encapsulation and properties",
          "Magic methods",
          "Class and static methods"
        ],
        practicals: [
          "Create class hierarchies",
          "Implement OOP principles",
          "Build object-oriented applications"
        ],
        examples: [
          {
            title: "OOP in Python",
            code: `class BankAccount:
    """A simple bank account class demonstrating OOP concepts"""
    
    # Class variable
    bank_name = "Python Bank"
    account_count = 0
    
    def __init__(self, account_holder, initial_balance=0):
        self.account_holder = account_holder
        self._balance = max(0, initial_balance)  # Protected attribute
        self.__account_number = f"ACC{BankAccount.account_count + 1:04d}"  # Private
        BankAccount.account_count += 1
    
    @property
    def balance(self):
        """Getter for balance"""
        return self._balance
    
    @property
    def account_number(self):
        """Getter for account number"""
        return self.__account_number
    
    def deposit(self, amount):
        """Deposit money to account"""
        if amount > 0:
            self._balance += amount
            print(f"Deposited \${amount:.2f}. New balance: \${self._balance:.2f}")
        else:
            print("Invalid deposit amount!")
    
    def withdraw(self, amount):
        """Withdraw money from account"""
        if 0 < amount <= self._balance:
            self._balance -= amount
            print(f"Withdrew \${amount:.2f}. New balance: \${self._balance:.2f}")
            return True
        else:
            print("Invalid withdrawal amount or insufficient funds!")
            return False
    
    def __str__(self):
        """String representation"""
        return f"Account({self.__account_number}, {self.account_holder}, \${self._balance:.2f})"
    
    def __repr__(self):
        """Developer representation"""
        return f"BankAccount('{self.account_holder}', {self._balance})"
    
    @classmethod
    def get_bank_info(cls):
        """Class method to get bank information"""
        return f"{cls.bank_name} - Total Accounts: {cls.account_count}"
    
    @staticmethod
    def validate_amount(amount):
        """Static method to validate amount"""
        return isinstance(amount, (int, float)) and amount > 0

class SavingsAccount(BankAccount):
    """Savings account with interest"""
    
    def __init__(self, account_holder, initial_balance=0, interest_rate=0.02):
        super().__init__(account_holder, initial_balance)
        self.interest_rate = interest_rate
    
    def add_interest(self):
        """Add interest to account"""
        interest = self._balance * self.interest_rate
        self._balance += interest
        print(f"Interest added: \${interest:.2f}. New balance: \${self._balance:.2f}")
    
    def __str__(self):
        return f"SavingsAccount({self.account_number}, {self.account_holder}, \${self._balance:.2f}, {self.interest_rate*100}%)"

# Usage example
print("=== Bank Account Demo ===")
account1 = BankAccount("Alice Johnson", 1000)
account2 = SavingsAccount("Bob Smith", 500, 0.03)

print(account1)
print(account2)

account1.deposit(250)
account1.withdraw(100)

account2.deposit(200)
account2.add_interest()

print(f"\\n{BankAccount.get_bank_info()}")

# Demonstrate polymorphism
accounts = [account1, account2]
print("\\nAll accounts:")
for account in accounts:
    print(account)`,
            explanation: "Comprehensive OOP example showing classes, inheritance, encapsulation, properties, magic methods, and class/static methods."
          }
        ]
      }
    ],
    features: [
      "50 comprehensive lessons",
      "10 hands-on programming projects",
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
                                    <span className="text-gray-300 text-sm font-mono">Python Code</span>
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

export default PythonProgramming;