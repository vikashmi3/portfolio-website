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

const CSharpProgramming = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('syllabus');
  const [expandedExample, setExpandedExample] = useState(null);

  const courseDetails = {
    name: "C# Programming",
    description: "Microsoft .NET development with C#. Learn Windows applications, web development, and database integration.",
    fullDescription: "Master C# programming and .NET framework development. Learn object-oriented programming, Windows Forms, ASP.NET, Entity Framework, and modern C# features. Build desktop and web applications with Microsoft technologies.",
    duration: "12 weeks",
    level: "Intermediate",
    instructor: "Mark Johnson",
    introduction: {
      overview: "C# is a modern, object-oriented programming language developed by Microsoft as part of the .NET framework. It combines the power of C++ with the simplicity of Visual Basic, offering strong typing, automatic memory management, and extensive library support.",
      keyFeatures: [
        "Type Safety - Strong static typing with compile-time checking",
        "Memory Management - Automatic garbage collection",
        "Cross-Platform - Runs on Windows, macOS, and Linux with .NET Core",
        "Rich Ecosystem - Extensive .NET library and NuGet packages",
        "Modern Syntax - Clean, readable code with latest language features",
        "Performance - Compiled to intermediate language for fast execution",
        "Versatile - Desktop, web, mobile, and cloud applications",
        "Enterprise Ready - Robust for large-scale business applications"
      ],
      syntax: {
        basic: `// C# Basic Syntax Overview

// 1. Namespace and Using Statements
using System;
using System.Collections.Generic;
using System.Linq;

namespace MyApplication
{
    // 2. Class Declaration
    public class Program
    {
        // 3. Main Method (Entry Point)
        public static void Main(string[] args)
        {
            // Code here
        }
    }
}

// 4. Variables and Data Types
int number = 42;                    // Integer
double price = 19.99;               // Double precision
float rate = 3.14f;                 // Single precision
decimal money = 100.50m;            // Decimal (financial)
char grade = 'A';                   // Character
bool isActive = true;               // Boolean
string name = "C# Programming";      // String
var auto = "Auto-typed";            // Implicit typing

// 5. Arrays and Collections
int[] numbers = {1, 2, 3, 4, 5};
List<string> names = new List<string>();
Dictionary<string, int> scores = new Dictionary<string, int>();

// 6. Control Structures
if (condition)
{
    // if block
}
else if (anotherCondition)
{
    // else if block
}
else
{
    // else block
}

// 7. Loops
for (int i = 0; i < 10; i++)
{
    // for loop
}

foreach (var item in collection)
{
    // foreach loop
}

while (condition)
{
    // while loop
}

// 8. Methods
public static ReturnType MethodName(parameters)
{
    // method body
    return value; // if not void
}

// 9. Properties
public string Name { get; set; }
public int Age { get; private set; }

// 10. Exception Handling
try
{
    // risky code
}
catch (SpecificException ex)
{
    // handle specific exception
}
finally
{
    // cleanup code
}`,
        conventions: [
          "Class names use PascalCase (e.g., MyClass, StudentRecord)",
          "Method names use PascalCase (e.g., GetName, CalculateTotal)",
          "Variable names use camelCase (e.g., firstName, studentAge)",
          "Constants use PascalCase (e.g., MaxSize, DefaultValue)",
          "Private fields prefix with underscore (e.g., _name, _count)",
          "Interfaces start with 'I' (e.g., IDisposable, IComparable)",
          "Indentation: 4 spaces",
          "Braces on new line for classes and methods"
        ]
      }
    },
    syllabus: [
      {
        week: 1,
        title: "C# Fundamentals and .NET Framework",
        topics: [
          "C# syntax and .NET framework",
          "Variables and data types",
          "Control structures",
          "Methods and parameters",
          "Exception handling"
        ],
        practicals: [
          "Setup Visual Studio",
          "Create console applications",
          "Build basic C# programs"
        ],
        examples: [
          {
            title: "C# Fundamentals and Syntax",
            code: `using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CSharpFundamentals
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("=== C# FUNDAMENTALS DEMONSTRATION ===");
            
            // ===== DATA TYPES AND VARIABLES =====
            Console.WriteLine("\\n1. DATA TYPES AND VARIABLES:");
            
            // Value types
            int integerNumber = 42;
            double doubleNumber = 3.14159;
            float floatNumber = 2.71f;
            decimal decimalNumber = 100.50m;  // Best for financial calculations
            char character = 'A';
            bool booleanValue = true;
            
            // Reference types
            string text = "Hello, C#!";
            object obj = "This can hold any type";
            
            // Nullable types
            int? nullableInt = null;
            DateTime? nullableDate = null;
            
            // Implicit typing (var keyword)
            var autoInt = 100;        // Compiler infers int
            var autoString = "Auto";   // Compiler infers string
            var autoArray = new[] { 1, 2, 3, 4, 5 }; // Compiler infers int[]
            
            Console.WriteLine($"Integer: {integerNumber}");
            Console.WriteLine($"Double: {doubleNumber}");
            Console.WriteLine($"Decimal: {decimalNumber:C}"); // Currency format
            Console.WriteLine($"Character: {character}");
            Console.WriteLine($"Boolean: {booleanValue}");
            Console.WriteLine($"String: {text}");
            Console.WriteLine($"Nullable int has value: {nullableInt.HasValue}");
            
            // ===== OPERATORS =====
            Console.WriteLine("\\n2. OPERATORS:");
            
            int a = 10, b = 3;
            
            // Arithmetic operators
            Console.WriteLine($"Arithmetic: {a} + {b} = {a + b}");
            Console.WriteLine($"Arithmetic: {a} - {b} = {a - b}");
            Console.WriteLine($"Arithmetic: {a} * {b} = {a * b}");
            Console.WriteLine($"Arithmetic: {a} / {b} = {a / b}");     // Integer division
            Console.WriteLine($"Arithmetic: {a} % {b} = {a % b}");     // Modulus
            Console.WriteLine($"Arithmetic: {a} / (double){b} = {a / (double)b}"); // Float division
            
            // Comparison operators
            Console.WriteLine($"Comparison: {a} > {b} = {a > b}");
            Console.WriteLine($"Comparison: {a} == {b} = {a == b}");
            Console.WriteLine($"Comparison: {a} != {b} = {a != b}");
            
            // Logical operators
            bool x = true, y = false;
            Console.WriteLine($"Logical: {x} && {y} = {x && y}");  // AND
            Console.WriteLine($"Logical: {x} || {y} = {x || y}");  // OR
            Console.WriteLine($"Logical: !{x} = {!x}");            // NOT
            
            // Null-coalescing operators
            string nullString = null;
            string result1 = nullString ?? "Default Value";  // ?? operator
            Console.WriteLine($"Null coalescing: {result1}");
            
            nullString ??= "Assigned Value";  // ??= operator (C# 8.0+)
            Console.WriteLine($"Null coalescing assignment: {nullString}");
            
            // ===== CONTROL STRUCTURES =====
            Console.WriteLine("\\n3. CONTROL STRUCTURES:");
            
            // If-else statement
            int score = 85;
            string grade;
            
            if (score >= 90)
                grade = "A";
            else if (score >= 80)
                grade = "B";
            else if (score >= 70)
                grade = "C";
            else if (score >= 60)
                grade = "D";
            else
                grade = "F";
            
            Console.WriteLine($"Score: {score}, Grade: {grade}");
            
            // Ternary operator
            string status = score >= 60 ? "Pass" : "Fail";
            Console.WriteLine($"Status: {status}");
            
            // Switch statement (traditional)
            int dayOfWeek = 3;
            string dayName;
            
            switch (dayOfWeek)
            {
                case 1:
                    dayName = "Monday";
                    break;
                case 2:
                    dayName = "Tuesday";
                    break;
                case 3:
                    dayName = "Wednesday";
                    break;
                case 4:
                    dayName = "Thursday";
                    break;
                case 5:
                    dayName = "Friday";
                    break;
                case 6:
                case 7:
                    dayName = "Weekend";
                    break;
                default:
                    dayName = "Invalid day";
                    break;
            }
            
            Console.WriteLine($"Day {dayOfWeek} is {dayName}");
            
            // Switch expression (C# 8.0+)
            string dayType = dayOfWeek switch
            {
                1 or 2 or 3 or 4 or 5 => "Weekday",
                6 or 7 => "Weekend",
                _ => "Invalid"
            };
            
            Console.WriteLine($"Day type: {dayType}");
            
            // ===== LOOPS =====
            Console.WriteLine("\\n4. LOOPS:");
            
            // For loop
            Console.Write("For loop (1-5): ");
            for (int i = 1; i <= 5; i++)
            {
                Console.Write($"{i} ");
            }
            Console.WriteLine();
            
            // Foreach loop
            string[] fruits = { "Apple", "Banana", "Orange", "Grape" };
            Console.Write("Foreach loop: ");
            foreach (string fruit in fruits)
            {
                Console.Write($"{fruit} ");
            }
            Console.WriteLine();
            
            // While loop
            Console.Write("While loop countdown: ");
            int countdown = 5;
            while (countdown > 0)
            {
                Console.Write($"{countdown} ");
                countdown--;
            }
            Console.WriteLine("Blast off!");
            
            // Do-while loop
            Console.Write("Do-while loop: ");
            int number = 1;
            do
            {
                Console.Write($"{number} ");
                number++;
            } while (number <= 3);
            Console.WriteLine();
            
            // ===== ARRAYS AND COLLECTIONS =====
            Console.WriteLine("\\n5. ARRAYS AND COLLECTIONS:");
            
            // Arrays
            int[] numbers = { 10, 20, 30, 40, 50 };
            int[,] matrix = { { 1, 2 }, { 3, 4 }, { 5, 6 } };
            int[][] jaggedArray = new int[3][];
            jaggedArray[0] = new int[] { 1, 2 };
            jaggedArray[1] = new int[] { 3, 4, 5 };
            jaggedArray[2] = new int[] { 6 };
            
            Console.WriteLine($"Array length: {numbers.Length}");
            Console.WriteLine($"First element: {numbers[0]}, Last element: {numbers[^1]}"); // Index from end
            Console.WriteLine($"Matrix element [1,1]: {matrix[1, 1]}");
            
            // Collections
            List<string> namesList = new List<string> { "Alice", "Bob", "Charlie" };
            Dictionary<string, int> ages = new Dictionary<string, int>
            {
                ["Alice"] = 25,
                ["Bob"] = 30,
                ["Charlie"] = 35
            };
            
            namesList.Add("Diana");
            Console.WriteLine($"Names count: {namesList.Count}");
            Console.WriteLine($"Alice's age: {ages["Alice"]}");
            
            // ===== STRING OPERATIONS =====
            Console.WriteLine("\\n6. STRING OPERATIONS:");
            
            string originalText = "  C# Programming Language  ";
            Console.WriteLine($"Original: '{originalText}'");
            Console.WriteLine($"Length: {originalText.Length}");
            Console.WriteLine($"Trimmed: '{originalText.Trim()}'");
            Console.WriteLine($"Upper: '{originalText.ToUpper()}'");
            Console.WriteLine($"Lower: '{originalText.ToLower()}'");
            Console.WriteLine($"Substring: '{originalText.Substring(2, 2)}'");
            Console.WriteLine($"Contains 'C#': {originalText.Contains("C#")}");
            Console.WriteLine($"Replace 'C#' with 'CSharp': '{originalText.Replace("C#", "CSharp")}'");
            
            // String interpolation
            string name = "Developer";
            int age = 25;
            string message = $"Hello, {name}! You are {age} years old.";
            Console.WriteLine($"Interpolated: {message}");
            
            // Verbatim strings
            string path = @"C:\Users\Developer\Documents\file.txt";
            Console.WriteLine($"Verbatim string: {path}");
            
            // ===== METHOD CALLS =====
            Console.WriteLine("\\n7. METHOD CALLS:");
            
            DisplayWelcomeMessage();
            
            int sum = AddNumbers(15, 25);
            Console.WriteLine($"Sum of 15 and 25: {sum}");
            
            double average = CalculateAverage(new int[] { 85, 92, 78, 96, 88 });
            Console.WriteLine($"Average: {average:F2}");
            
            // Method with out parameter
            if (TryParseNumber("123", out int parsedNumber))
            {
                Console.WriteLine($"Parsed number: {parsedNumber}");
            }
            
            // Method with ref parameter
            int value = 10;
            ModifyValue(ref value);
            Console.WriteLine($"Modified value: {value}");
            
            // Method with params parameter
            int total = SumNumbers(1, 2, 3, 4, 5);
            Console.WriteLine($"Sum of multiple numbers: {total}");
            
            Console.WriteLine("\\n=== DEMONSTRATION COMPLETE ===");
        }
        
        // ===== CUSTOM METHODS =====
        
        static void DisplayWelcomeMessage()
        {
            Console.WriteLine("Welcome to C# Programming!");
        }
        
        static int AddNumbers(int num1, int num2)
        {
            return num1 + num2;
        }
        
        static double CalculateAverage(int[] numbers)
        {
            if (numbers == null || numbers.Length == 0)
                return 0.0;
            
            int sum = 0;
            foreach (int number in numbers)
            {
                sum += number;
            }
            
            return (double)sum / numbers.Length;
        }
        
        // Method with out parameter
        static bool TryParseNumber(string input, out int result)
        {
            return int.TryParse(input, out result);
        }
        
        // Method with ref parameter
        static void ModifyValue(ref int value)
        {
            value *= 2;
        }
        
        // Method with params parameter
        static int SumNumbers(params int[] numbers)
        {
            int sum = 0;
            foreach (int number in numbers)
            {
                sum += number;
            }
            return sum;
        }
    }
}`,
            explanation: "Comprehensive C# fundamentals covering data types, operators, control structures, loops, arrays, collections, strings, and methods with modern C# syntax features."
          },
          {
            title: "Exception Handling and File Operations",
            code: `using System;
using System.Collections.Generic;

namespace CSharpBasics
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("C# Programming Fundamentals");
            
            // Variables and data types
            string name = "John Doe";
            int age = 30;
            double salary = 75000.50;
            bool isEmployed = true;
            
            Console.WriteLine($"Name: {name}");
            Console.WriteLine($"Age: {age}");
            Console.WriteLine($"Salary: {salary:C}");
            Console.WriteLine($"Employed: {isEmployed}");
            
            // Method calls
            CalculateArea();
            DemonstrateExceptionHandling();
            
            Console.ReadKey();
        }
        
        static void CalculateArea()
        {
            try
            {
                Console.Write("\\nEnter radius: ");
                double radius = Convert.ToDouble(Console.ReadLine());
                
                if (radius < 0)
                    throw new ArgumentException("Radius cannot be negative");
                
                double area = Math.PI * radius * radius;
                Console.WriteLine($"Area of circle: {area:F2}");
            }
            catch (FormatException)
            {
                Console.WriteLine("Invalid input format!");
            }
            catch (ArgumentException ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
            }
        }
        
        static void DemonstrateExceptionHandling()
        {
            int[] numbers = {1, 2, 3, 4, 5};
            
            try
            {
                Console.WriteLine($"Element at index 10: {numbers[10]}");
            }
            catch (IndexOutOfRangeException)
            {
                Console.WriteLine("Index out of range!");
            }
            finally
            {
                Console.WriteLine("Finally block executed");
            }
        }
    }
}`,
            explanation: "Basic C# program structure showing variables, data types, methods, exception handling with try-catch-finally blocks."
          }
        ]
      },
      {
        week: 2,
        title: "Object-Oriented Programming in C#",
        topics: [
          "Classes and objects",
          "Properties and auto-properties",
          "Inheritance and polymorphism",
          "Interfaces and abstract classes",
          "Access modifiers"
        ],
        practicals: [
          "Create class hierarchies",
          "Implement interfaces",
          "Build OOP applications"
        ],
        examples: [
          {
            title: "Employee Management System",
            code: `using System;
using System.Collections.Generic;

namespace EmployeeManagement
{
    // Abstract base class
    public abstract class Employee
    {
        public string Name { get; set; }
        public int Id { get; set; }
        public DateTime HireDate { get; set; }
        
        protected Employee(string name, int id)
        {
            Name = name;
            Id = id;
            HireDate = DateTime.Now;
        }
        
        public abstract double CalculateSalary();
        
        public virtual void DisplayInfo()
        {
            Console.WriteLine($"ID: {Id}, Name: {Name}, Hire Date: {HireDate:yyyy-MM-dd}");
        }
    }
    
    // Interface for bonus calculation
    public interface IBonusEligible
    {
        double CalculateBonus();
    }
    
    // Full-time employee class
    public class FullTimeEmployee : Employee, IBonusEligible
    {
        public double AnnualSalary { get; set; }
        public int YearsOfService { get; set; }
        
        public FullTimeEmployee(string name, int id, double annualSalary) 
            : base(name, id)
        {
            AnnualSalary = annualSalary;
            YearsOfService = DateTime.Now.Year - HireDate.Year;
        }
        
        public override double CalculateSalary()
        {
            return AnnualSalary / 12; // Monthly salary
        }
        
        public double CalculateBonus()
        {
            return AnnualSalary * 0.1 * YearsOfService; // 10% per year
        }
        
        public override void DisplayInfo()
        {
            base.DisplayInfo();
            Console.WriteLine($"Type: Full-time, Annual Salary: {AnnualSalary:C}");
            Console.WriteLine($"Monthly Salary: {CalculateSalary():C}");
            Console.WriteLine($"Bonus: {CalculateBonus():C}");
        }
    }
    
    // Part-time employee class
    public class PartTimeEmployee : Employee
    {
        public double HourlyRate { get; set; }
        public int HoursWorked { get; set; }
        
        public PartTimeEmployee(string name, int id, double hourlyRate, int hoursWorked) 
            : base(name, id)
        {
            HourlyRate = hourlyRate;
            HoursWorked = hoursWorked;
        }
        
        public override double CalculateSalary()
        {
            return HourlyRate * HoursWorked;
        }
        
        public override void DisplayInfo()
        {
            base.DisplayInfo();
            Console.WriteLine($"Type: Part-time, Hourly Rate: {HourlyRate:C}");
            Console.WriteLine($"Hours Worked: {HoursWorked}, Total Pay: {CalculateSalary():C}");
        }
    }
    
    class Program
    {
        static void Main(string[] args)
        {
            List<Employee> employees = new List<Employee>
            {
                new FullTimeEmployee("Alice Johnson", 101, 80000),
                new PartTimeEmployee("Bob Smith", 102, 25, 20),
                new FullTimeEmployee("Charlie Brown", 103, 95000)
            };
            
            Console.WriteLine("Employee Management System\\n");
            
            foreach (Employee emp in employees)
            {
                emp.DisplayInfo();
                
                // Check if employee is bonus eligible
                if (emp is IBonusEligible bonusEligible)
                {
                    Console.WriteLine($"Bonus Amount: {bonusEligible.CalculateBonus():C}");
                }
                
                Console.WriteLine(new string('-', 40));
            }
            
            Console.ReadKey();
        }
    }
}`,
            explanation: "Comprehensive OOP example showing inheritance, abstract classes, interfaces, properties, and polymorphism in C#."
          }
        ]
      }
    ],
    features: [
      "48 comprehensive lessons",
      "10 hands-on .NET projects",
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
                                    <span className="text-gray-300 text-sm font-mono">C# Code</span>
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

export default CSharpProgramming;