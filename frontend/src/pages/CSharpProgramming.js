import React from 'react';
import { Link } from 'react-router-dom';

const CSharpProgramming = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-yellow-300 opacity-20 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-400 opacity-15 rounded-full animate-ping"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <nav className="mb-8 flex items-center space-x-2 text-sm">
            <Link to="/" className="text-purple-200 hover:text-white transition-colors duration-200 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              Home
            </Link>
            <span className="text-purple-300">→</span>
            <Link to="/courses" className="text-purple-200 hover:text-white transition-colors duration-200">Courses</Link>
            <span className="text-purple-300">→</span>
            <span className="text-white font-medium">C# Programming</span>
          </nav>
          
          <div className="text-center">
            <div className="inline-flex items-center bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-medium mb-6">
              🚀 Microsoft Technology
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              C# Programming
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-8 text-purple-100">
              Master .NET Development from Beginner to Advanced
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-purple-100 mb-10 max-w-3xl mx-auto leading-relaxed px-4">
              Learn C# programming with comprehensive examples, practical projects, and real-world applications using .NET framework.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-8 px-4">
              <Link to="/courses" className="group bg-white text-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center">
                <span className="flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
                  </svg>
                  Back to Courses
                </span>
              </Link>
              <Link to="#introduction" className="group bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center">
                <span className="flex items-center justify-center">
                  Start Learning
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </span>
              </Link>
            </div>
            
            <div className="flex justify-center space-x-4 sm:space-x-8 text-purple-200 px-4">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-white">18</div>
                <div className="text-xs sm:text-sm">Topics</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-white">3</div>
                <div className="text-xs sm:text-sm">Levels</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-white">100+</div>
                <div className="text-xs sm:text-sm">Examples</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-80 lg:sticky lg:top-8 lg:h-fit order-2 lg:order-1">
            <div className="bg-white rounded-xl shadow-lg p-4 lg:p-6 border border-gray-200">
              <h3 className="text-base lg:text-lg font-bold text-gray-800 mb-4 flex items-center">
                <svg className="w-4 h-4 lg:w-5 lg:h-5 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Course Navigation
              </h3>
              <nav className="grid grid-cols-2 lg:grid-cols-1 gap-1 lg:gap-2 lg:max-h-96 lg:overflow-y-auto">
                <a href="#introduction" className="block px-2 lg:px-3 py-1 lg:py-2 text-xs lg:text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded-lg transition-colors">
                  <span className="font-medium">01.</span> <span className="hidden sm:inline">Introduction to</span> C#
                </a>
                <a href="#basic-syntax" className="block px-2 lg:px-3 py-1 lg:py-2 text-xs lg:text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded-lg transition-colors">
                  <span className="font-medium">02.</span> Basic Syntax
                </a>
                <a href="#data-types" className="block px-2 lg:px-3 py-1 lg:py-2 text-xs lg:text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded-lg transition-colors">
                  <span className="font-medium">03.</span> <span className="hidden sm:inline">Data Types &</span> Variables
                </a>
                <a href="#operators" className="block px-2 lg:px-3 py-1 lg:py-2 text-xs lg:text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded-lg transition-colors">
                  <span className="font-medium">04.</span> Operators
                </a>
                <a href="#control-statements" className="block px-2 lg:px-3 py-1 lg:py-2 text-xs lg:text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded-lg transition-colors">
                  <span className="font-medium">05.</span> <span className="hidden sm:inline">Control</span> Statements
                </a>
                <a href="#methods" className="block px-2 lg:px-3 py-1 lg:py-2 text-xs lg:text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded-lg transition-colors">
                  <span className="font-medium">06.</span> Methods
                </a>
                <a href="#arrays-strings" className="block px-2 lg:px-3 py-1 lg:py-2 text-xs lg:text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded-lg transition-colors">
                  <span className="font-medium">07.</span> <span className="hidden sm:inline">Arrays &</span> Strings
                </a>
                <a href="#oop" className="block px-2 lg:px-3 py-1 lg:py-2 text-xs lg:text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded-lg transition-colors">
                  <span className="font-medium">08.</span> OOP
                </a>
                <a href="#exception-handling" className="block px-2 lg:px-3 py-1 lg:py-2 text-xs lg:text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded-lg transition-colors">
                  <span className="font-medium">09.</span> <span className="hidden sm:inline">Exception</span> Handling
                </a>
                <a href="#collections" className="block px-2 lg:px-3 py-1 lg:py-2 text-xs lg:text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded-lg transition-colors">
                  <span className="font-medium">10.</span> Collections
                </a>
                <a href="#inheritance" className="block px-2 lg:px-3 py-1 lg:py-2 text-xs lg:text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded-lg transition-colors">
                  <span className="font-medium">11.</span> Inheritance
                </a>
                <a href="#file-handling" className="block px-2 lg:px-3 py-1 lg:py-2 text-xs lg:text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded-lg transition-colors">
                  <span className="font-medium">12.</span> <span className="hidden sm:inline">File</span> Handling
                </a>
                <a href="#delegates" className="block px-2 lg:px-3 py-1 lg:py-2 text-xs lg:text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded-lg transition-colors">
                  <span className="font-medium">13.</span> <span className="hidden sm:inline">Delegates &</span> Events
                </a>
                <a href="#async" className="block px-2 lg:px-3 py-1 lg:py-2 text-xs lg:text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded-lg transition-colors">
                  <span className="font-medium">14.</span> <span className="hidden sm:inline">Async</span> Programming
                </a>
                <a href="#generics" className="block px-2 lg:px-3 py-1 lg:py-2 text-xs lg:text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded-lg transition-colors">
                  <span className="font-medium">15.</span> Generics
                </a>
                <a href="#linq-advanced" className="block px-2 lg:px-3 py-1 lg:py-2 text-xs lg:text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded-lg transition-colors">
                  <span className="font-medium">16.</span> <span className="hidden sm:inline">Advanced</span> LINQ
                </a>
                <a href="#database" className="block px-2 lg:px-3 py-1 lg:py-2 text-xs lg:text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded-lg transition-colors">
                  <span className="font-medium">17.</span> <span className="hidden sm:inline">Database</span> Connectivity
                </a>
                <a href="#testing" className="block px-2 lg:px-3 py-1 lg:py-2 text-xs lg:text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded-lg transition-colors">
                  <span className="font-medium">18.</span> <span className="hidden sm:inline">Unit</span> Testing
                </a>
              </nav>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="text-xs text-gray-500 mb-2">Progress</div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full" style={{width: '0%'}}></div>
                </div>
                <div className="text-xs text-gray-500 mt-1">0% Complete</div>
              </div>
            </div>
          </aside>
          
          <main className="flex-1 max-w-4xl order-1 lg:order-2">
            {/* Introduction */}
            <section id="introduction" className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 lg:mb-8 border border-gray-200">
              <div className="flex items-center mb-4 lg:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-purple-600 font-bold text-sm sm:text-lg">01</span>
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Introduction to C#</h2>
                  <p className="text-xs sm:text-sm text-gray-500">Learn the fundamentals of C# programming</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-purple-700">What is C#?</h3>
                <p className="text-gray-700 mb-4">
                  C# (pronounced "C-Sharp") is a modern, object-oriented programming language developed by Microsoft. 
                  It's part of the .NET framework and is designed for building a wide range of applications.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-purple-700">Key Features</h4>
                    <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                      <li>Object-oriented programming</li>
                      <li>Type-safe and memory-managed</li>
                      <li>Rich library support</li>
                      <li>Cross-platform development</li>
                      <li>Strong community support</li>
                      <li>Excellent tooling (Visual Studio)</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-700">Applications</h4>
                    <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                      <li>Desktop applications (WPF, WinForms)</li>
                      <li>Web applications (ASP.NET)</li>
                      <li>Mobile apps (Xamarin)</li>
                      <li>Games (Unity)</li>
                      <li>Web APIs and services</li>
                      <li>Cloud applications</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold mb-2">Setting up Development Environment</h4>
                  <ol className="text-sm text-gray-700 list-decimal list-inside space-y-2">
                    <li>Download and install <strong>Visual Studio Community</strong> (free)</li>
                    <li>Install <strong>.NET SDK</strong> (latest version)</li>
                    <li>Create your first C# project</li>
                    <li>Choose "Console Application" template</li>
                  </ol>
                </div>
              </div>
            </section>

            {/* Basic Syntax */}
            <section id="basic-syntax" className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 lg:mb-8 border border-gray-200">
              <div className="flex items-center mb-4 lg:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-purple-600 font-bold text-sm sm:text-lg">02</span>
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Basic Syntax</h2>
                  <p className="text-xs sm:text-sm text-gray-500">Understanding C# program structure</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-purple-700">Hello World Program</h3>
                
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
{`using System;

namespace HelloWorld
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
            Console.WriteLine("Welcome to C# Programming!");
            Console.ReadLine(); // Wait for user input
        }
    }
}`}
                  </pre>
                </div>

                <div className="bg-green-50 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold mb-2 text-green-700">Output:</h4>
                  <pre className="text-sm text-gray-700">
{`Hello, World!
Welcome to C# Programming!`}
                  </pre>
                </div>

                <h4 className="text-lg font-semibold mb-3 text-gray-800">Program Structure Explanation:</h4>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex">
                    <span className="font-mono bg-gray-100 px-2 py-1 rounded mr-3">using System;</span>
                    <span>Imports the System namespace for basic functionality</span>
                  </div>
                  <div className="flex">
                    <span className="font-mono bg-gray-100 px-2 py-1 rounded mr-3">namespace</span>
                    <span>Organizes code into logical groups</span>
                  </div>
                  <div className="flex">
                    <span className="font-mono bg-gray-100 px-2 py-1 rounded mr-3">class Program</span>
                    <span>Defines a class named Program</span>
                  </div>
                  <div className="flex">
                    <span className="font-mono bg-gray-100 px-2 py-1 rounded mr-3">static void Main</span>
                    <span>Entry point of the program</span>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-purple-700">Comments in C#</h3>
                
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
{`// Single line comment

/* 
   Multi-line comment
   Can span multiple lines
*/

/// <summary>
/// XML documentation comment
/// Used for generating documentation
/// </summary>
static void Main(string[] args)
{
    // This is a single line comment
    Console.WriteLine("Hello!"); // Comment at end of line
    
    /*
       This is a multi-line comment
       Very useful for longer explanations
    */
}`}
                  </pre>
                </div>
              </div>
            </section>

            {/* Data Types and Variables */}
            <section id="data-types" className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 lg:mb-8 border border-gray-200">
              <div className="flex items-center mb-4 lg:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-purple-600 font-bold text-sm sm:text-lg">03</span>
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Data Types and Variables</h2>
                  <p className="text-xs sm:text-sm text-gray-500">Understanding C# data types and variable declaration</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-purple-700">Value Types</h3>
                
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
{`using System;

class DataTypesExample
{
    static void Main()
    {
        // Integer types
        int age = 25;
        long population = 7800000000L;
        short temperature = -10;
        byte score = 95;
        
        // Floating-point types
        float price = 19.99f;
        double pi = 3.14159265359;
        decimal salary = 50000.50m;
        
        // Character and Boolean
        char grade = 'A';
        bool isActive = true;
        
        // Display values
        Console.WriteLine("Age: " + age);
        Console.WriteLine("Population: " + population);
        Console.WriteLine("Temperature: " + temperature);
        Console.WriteLine("Score: " + score);
        Console.WriteLine("Price: " + price);
        Console.WriteLine("Pi: " + pi);
        Console.WriteLine("Salary: " + salary.ToString("C"));
        Console.WriteLine("Grade: " + grade);
        Console.WriteLine("Is Active: " + isActive);
    }
}`}
                  </pre>
                </div>

                <div className="bg-green-50 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold mb-2 text-green-700">Output:</h4>
                  <pre className="text-sm text-gray-700">
{`Age: 25
Population: 7800000000
Temperature: -10
Score: 95
Price: 19.99
Pi: 3.14159265359
Salary: $50,000.50
Grade: A
Is Active: True`}
                  </pre>
                </div>

                <h4 className="text-lg font-semibold mb-3 text-gray-800">Data Type Ranges:</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Size</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Range</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="border border-gray-300 px-4 py-2">int</td><td className="border border-gray-300 px-4 py-2">4 bytes</td><td className="border border-gray-300 px-4 py-2">-2,147,483,648 to 2,147,483,647</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2">long</td><td className="border border-gray-300 px-4 py-2">8 bytes</td><td className="border border-gray-300 px-4 py-2">-9,223,372,036,854,775,808 to 9,223,372,036,854,775,807</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2">float</td><td className="border border-gray-300 px-4 py-2">4 bytes</td><td className="border border-gray-300 px-4 py-2">±1.5 x 10^-45 to ±3.4 x 10^38</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2">double</td><td className="border border-gray-300 px-4 py-2">8 bytes</td><td className="border border-gray-300 px-4 py-2">±5.0 × 10^-324 to ±1.7 × 10^308</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2">char</td><td className="border border-gray-300 px-4 py-2">2 bytes</td><td className="border border-gray-300 px-4 py-2">U+0000 to U+FFFF</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2">bool</td><td className="border border-gray-300 px-4 py-2">1 byte</td><td className="border border-gray-300 px-4 py-2">true or false</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-purple-700">Reference Types and Type Inference</h3>
                
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
{`using System;

class ReferenceTypesExample
{
    static void Main()
    {
        // String (reference type)
        string firstName = "John";
        string lastName = "Doe";
        string fullName = firstName + " " + lastName;
        
        // Object type
        object obj1 = 42;
        object obj2 = "Hello";
        object obj3 = true;
        
        // Type inference with var
        var number = 100;        // Inferred as int
        var message = "Hello";   // Inferred as string
        var isValid = false;     // Inferred as bool
        
        // Constants
        const double PI = 3.14159;
        const string COMPANY = "Microsoft";
        
        // Display results
        Console.WriteLine("Full Name: " + fullName);
        Console.WriteLine("Object 1: " + obj1 + " (Type: " + obj1.GetType() + ")");
        Console.WriteLine("Object 2: " + obj2 + " (Type: " + obj2.GetType() + ")");
        Console.WriteLine("Object 3: " + obj3 + " (Type: " + obj3.GetType() + ")");
        Console.WriteLine("Number: " + number + " (Type: " + number.GetType() + ")");
        Console.WriteLine("Message: " + message + " (Type: " + message.GetType() + ")");
        Console.WriteLine("Is Valid: " + isValid + " (Type: " + isValid.GetType() + ")");
        Console.WriteLine("PI: " + PI);
        Console.WriteLine("Company: " + COMPANY);
    }
}`}
                  </pre>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-green-700">Output:</h4>
                  <pre className="text-sm text-gray-700">
{`Full Name: John Doe
Object 1: 42 (Type: System.Int32)
Object 2: Hello (Type: System.String)
Object 3: True (Type: System.Boolean)
Number: 100 (Type: System.Int32)
Message: Hello (Type: System.String)
Is Valid: False (Type: System.Boolean)
PI: 3.14159
Company: Microsoft`}
                  </pre>
                </div>
              </div>
            </section>

            {/* Operators */}
            <section id="operators" className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 lg:mb-8 border border-gray-200">
              <div className="flex items-center mb-4 lg:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-purple-600 font-bold text-sm sm:text-lg">04</span>
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Operators</h2>
                  <p className="text-xs sm:text-sm text-gray-500">Arithmetic, logical, and assignment operators</p>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <pre className="text-green-400 text-sm overflow-x-auto">
{`using System;

class OperatorsExample
{
    static void Main()
    {
        int a = 10, b = 3;
        
        // Arithmetic operators
        Console.WriteLine("Addition: " + a + " + " + b + " = " + (a + b));
        Console.WriteLine("Subtraction: " + a + " - " + b + " = " + (a - b));
        Console.WriteLine("Multiplication: " + a + " * " + b + " = " + (a * b));
        Console.WriteLine("Division: " + a + " / " + b + " = " + (a / b));
        Console.WriteLine("Modulus: " + a + " % " + b + " = " + (a % b));
        
        // Comparison operators
        Console.WriteLine(a + " > " + b + ": " + (a > b));
        Console.WriteLine(a + " < " + b + ": " + (a < b));
        Console.WriteLine(a + " == " + b + ": " + (a == b));
        Console.WriteLine(a + " != " + b + ": " + (a != b));
        
        // Logical operators
        bool x = true, y = false;
        Console.WriteLine("x && y: " + (x && y));
        Console.WriteLine("x || y: " + (x || y));
        Console.WriteLine("!x: " + (!x));
        
        // Assignment operators
        int c = 5;
        c += 3; // c = c + 3
        Console.WriteLine("c += 3: " + c);
        c *= 2; // c = c * 2
        Console.WriteLine("c *= 2: " + c);
        
        // Ternary operator
        string result = (a > b) ? "a is greater" : "b is greater";
        Console.WriteLine("Ternary result: " + result);
    }
}`}
                </pre>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-green-700">Output:</h4>
                <pre className="text-sm text-gray-700">
{`Addition: 10 + 3 = 13
Subtraction: 10 - 3 = 7
Multiplication: 10 * 3 = 30
Division: 10 / 3 = 3
Modulus: 10 % 3 = 1
10 > 3: True
10 < 3: False
10 == 3: False
10 != 3: True
x && y: False
x || y: True
!x: False
c += 3: 8
c *= 2: 16
Ternary result: a is greater`}
                </pre>
              </div>
            </section>

            {/* Control Statements */}
            <section id="control-statements" className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 lg:mb-8 border border-gray-200">
              <div className="flex items-center mb-4 lg:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-purple-600 font-bold text-sm sm:text-lg">05</span>
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Control Statements</h2>
                  <p className="text-xs sm:text-sm text-gray-500">if/else, loops, and switch statements</p>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <pre className="text-green-400 text-sm overflow-x-auto">
{`using System;

class ControlStatementsExample
{
    static void Main()
    {
        // if-else statement
        int score = 85;
        if (score >= 90)
            Console.WriteLine("Grade: A");
        else if (score >= 80)
            Console.WriteLine("Grade: B");
        else if (score >= 70)
            Console.WriteLine("Grade: C");
        else
            Console.WriteLine("Grade: F");
        
        // switch statement
        int day = 3;
        switch (day)
        {
            case 1:
                Console.WriteLine("Monday");
                break;
            case 2:
                Console.WriteLine("Tuesday");
                break;
            case 3:
                Console.WriteLine("Wednesday");
                break;
            default:
                Console.WriteLine("Other day");
                break;
        }
        
        // for loop
        Console.WriteLine("For loop:");
        for (int i = 1; i <= 5; i++)
        {
            Console.WriteLine("Count: " + i);
        }
        
        // while loop
        Console.WriteLine("While loop:");
        int j = 1;
        while (j <= 3)
        {
            Console.WriteLine("While: " + j);
            j++;
        }
        
        // do-while loop
        Console.WriteLine("Do-while loop:");
        int k = 1;
        do
        {
            Console.WriteLine("Do-while: " + k);
            k++;
        } while (k <= 2);
    }
}`}
                </pre>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-green-700">Output:</h4>
                <pre className="text-sm text-gray-700">
{`Grade: B
Wednesday
For loop:
Count: 1
Count: 2
Count: 3
Count: 4
Count: 5
While loop:
While: 1
While: 2
While: 3
Do-while loop:
Do-while: 1
Do-while: 2`}
                </pre>
              </div>
            </section>

            {/* Methods */}
            <section id="methods" className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 lg:mb-8 border border-gray-200">
              <div className="flex items-center mb-4 lg:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-purple-600 font-bold text-sm sm:text-lg">06</span>
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Methods and Functions</h2>
                  <p className="text-xs sm:text-sm text-gray-500">Method declaration, parameters, and overloading</p>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <pre className="text-green-400 text-sm overflow-x-auto">
{`using System;

class MethodsExample
{
    // Method with no parameters and no return value
    static void SayHello()
    {
        Console.WriteLine("Hello from method!");
    }
    
    // Method with parameters and return value
    static int Add(int a, int b)
    {
        return a + b;
    }
    
    // Method overloading - same name, different parameters
    static double Add(double a, double b)
    {
        return a + b;
    }
    
    static string Add(string a, string b)
    {
        return a + b;
    }
    
    // Method with optional parameters
    static void Greet(string name, string greeting = "Hello")
    {
        Console.WriteLine(greeting + ", " + name + "!");
    }
    
    // Method with params keyword (variable arguments)
    static int Sum(params int[] numbers)
    {
        int total = 0;
        foreach (int num in numbers)
        {
            total += num;
        }
        return total;
    }
    
    // Recursive method
    static int Factorial(int n)
    {
        if (n <= 1)
            return 1;
        return n * Factorial(n - 1);
    }
    
    static void Main()
    {
        // Calling methods
        SayHello();
        
        int result1 = Add(5, 3);
        Console.WriteLine("Add(5, 3) = " + result1);
        
        double result2 = Add(5.5, 3.2);
        Console.WriteLine("Add(5.5, 3.2) = " + result2);
        
        string result3 = Add("Hello ", "World");
        Console.WriteLine("Add strings = " + result3);
        
        Greet("Alice");
        Greet("Bob", "Hi");
        
        int sum = Sum(1, 2, 3, 4, 5);
        Console.WriteLine("Sum(1,2,3,4,5) = " + sum);
        
        int fact = Factorial(5);
        Console.WriteLine("Factorial(5) = " + fact);
    }
}`}
                  </pre>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-green-700">Output:</h4>
                <pre className="text-sm text-gray-700">
{`Hello from method!
Add(5, 3) = 8
Add(5.5, 3.2) = 8.7
Add strings = Hello World
Hello, Alice!
Hi, Bob!
Sum(1,2,3,4,5) = 15
Factorial(5) = 120`}
                </pre>
              </div>
            </section>

            {/* Arrays and Strings */}
            <section id="arrays-strings" className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 lg:mb-8 border border-gray-200">
              <div className="flex items-center mb-4 lg:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-purple-600 font-bold text-sm sm:text-lg">07</span>
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Arrays and Strings</h2>
                  <p className="text-xs sm:text-sm text-gray-500">Working with arrays and string manipulation</p>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <pre className="text-green-400 text-sm overflow-x-auto">
{`using System;

class ArraysStringsExample
{
    static void Main()
    {
        // One-dimensional array
        int[] numbers = {1, 2, 3, 4, 5};
        Console.WriteLine("Array elements:");
        for (int i = 0; i < numbers.Length; i++)
        {
            Console.WriteLine("numbers[" + i + "] = " + numbers[i]);
        }
        
        // foreach loop
        Console.WriteLine("Using foreach:");
        foreach (int num in numbers)
        {
            Console.WriteLine("Value: " + num);
        }
        
        // Multi-dimensional array
        int[,] matrix = {{1, 2}, {3, 4}, {5, 6}};
        Console.WriteLine("Matrix:");
        for (int i = 0; i < matrix.GetLength(0); i++)
        {
            for (int j = 0; j < matrix.GetLength(1); j++)
            {
                Console.Write(matrix[i, j] + " ");
            }
            Console.WriteLine();
        }
        
        // Jagged array
        int[][] jaggedArray = new int[3][];
        jaggedArray[0] = new int[] {1, 2};
        jaggedArray[1] = new int[] {3, 4, 5};
        jaggedArray[2] = new int[] {6};
        
        Console.WriteLine("Jagged array:");
        for (int i = 0; i < jaggedArray.Length; i++)
        {
            for (int j = 0; j < jaggedArray[i].Length; j++)
            {
                Console.Write(jaggedArray[i][j] + " ");
            }
            Console.WriteLine();
        }
        
        // String operations
        string text = "Hello World";
        Console.WriteLine("Original: " + text);
        Console.WriteLine("Length: " + text.Length);
        Console.WriteLine("Upper: " + text.ToUpper());
        Console.WriteLine("Lower: " + text.ToLower());
        Console.WriteLine("Substring: " + text.Substring(0, 5));
        Console.WriteLine("Replace: " + text.Replace("World", "C#"));
        Console.WriteLine("Contains 'Hello': " + text.Contains("Hello"));
        
        // String splitting
        string[] words = text.Split(' ');
        Console.WriteLine("Words:");
        foreach (string word in words)
        {
            Console.WriteLine("- " + word);
        }
    }
}`}
                  </pre>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-green-700">Output:</h4>
                <pre className="text-sm text-gray-700">
{`Array elements:
numbers[0] = 1
numbers[1] = 2
numbers[2] = 3
numbers[3] = 4
numbers[4] = 5
Using foreach:
Value: 1
Value: 2
Value: 3
Value: 4
Value: 5
Matrix:
1 2
3 4
5 6
Jagged array:
1 2
3 4 5
6
Original: Hello World
Length: 11
Upper: HELLO WORLD
Lower: hello world
Substring: Hello
Replace: Hello C#
Contains 'Hello': True
Words:
- Hello
- World`}
                </pre>
              </div>
            </section>

            {/* OOP */}
            <section id="oop" className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 lg:mb-8 border border-gray-200">
              <div className="flex items-center mb-4 lg:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-purple-600 font-bold text-sm sm:text-lg">08</span>
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Object-Oriented Programming</h2>
                  <p className="text-xs sm:text-sm text-gray-500">Classes, objects, constructors, and properties</p>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <pre className="text-green-400 text-sm overflow-x-auto">
{`using System;

// Class definition
class Student
{
    // Fields (private)
    private string name;
    private int age;
    private double gpa;
    
    // Properties (public)
    public string Name
    {
        get { return name; }
        set { name = value; }
    }
    
    public int Age
    {
        get { return age; }
        set 
        { 
            if (value > 0)
                age = value;
        }
    }
    
    // Auto-implemented property
    public string Major { get; set; }
    
    // Constructor
    public Student(string name, int age, string major)
    {
        this.name = name;
        this.age = age;
        this.Major = major;
        this.gpa = 0.0;
    }
    
    // Default constructor
    public Student() : this("Unknown", 0, "Undeclared")
    {
    }
    
    // Methods
    public void SetGPA(double gpa)
    {
        if (gpa >= 0.0 && gpa <= 4.0)
            this.gpa = gpa;
    }
    
    public double GetGPA()
    {
        return gpa;
    }
    
    public void DisplayInfo()
    {
        Console.WriteLine("Name: " + name);
        Console.WriteLine("Age: " + age);
        Console.WriteLine("Major: " + Major);
        Console.WriteLine("GPA: " + gpa.ToString("F2"));
    }
    
    // Static method
    public static void ShowUniversityInfo()
    {
        Console.WriteLine("Welcome to C# University!");
    }
}

class OOPExample
{
    static void Main()
    {
        // Creating objects
        Student student1 = new Student("Alice", 20, "Computer Science");
        student1.SetGPA(3.8);
        
        Student student2 = new Student();
        student2.Name = "Bob";
        student2.Age = 19;
        student2.Major = "Mathematics";
        student2.SetGPA(3.5);
        
        // Using objects
        Console.WriteLine("Student 1:");
        student1.DisplayInfo();
        
        Console.WriteLine("\nStudent 2:");
        student2.DisplayInfo();
        
        // Static method call
        Student.ShowUniversityInfo();
    }
}`}
                  </pre>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-green-700">Output:</h4>
                <pre className="text-sm text-gray-700">
{`Student 1:
Name: Alice
Age: 20
Major: Computer Science
GPA: 3.80

Student 2:
Name: Bob
Age: 19
Major: Mathematics
GPA: 3.50
Welcome to C# University!`}
                </pre>
              </div>
            </section>

            {/* Exception Handling */}
            <section id="exception-handling" className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 lg:mb-8 border border-gray-200">
              <div className="flex items-center mb-4 lg:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-purple-600 font-bold text-sm sm:text-lg">09</span>
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Exception Handling</h2>
                  <p className="text-xs sm:text-sm text-gray-500">try, catch, finally, and custom exceptions</p>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <pre className="text-green-400 text-sm overflow-x-auto">
{`using System;

class ExceptionHandlingExample
{
    static void Main()
    {
        // Basic try-catch
        try
        {
            int[] numbers = {1, 2, 3};
            Console.WriteLine(numbers[5]); // This will cause an exception
        }
        catch (IndexOutOfRangeException ex)
        {
            Console.WriteLine("Index error: " + ex.Message);
        }
        
        // Multiple catch blocks
        try
        {
            Console.Write("Enter a number: ");
            string input = "abc"; // Simulating invalid input
            int number = int.Parse(input);
            int result = 10 / number;
            Console.WriteLine("Result: " + result);
        }
        catch (FormatException)
        {
            Console.WriteLine("Invalid number format!");
        }
        catch (DivideByZeroException)
        {
            Console.WriteLine("Cannot divide by zero!");
        }
        catch (Exception ex)
        {
            Console.WriteLine("General error: " + ex.Message);
        }
        finally
        {
            Console.WriteLine("This always executes.");
        }
        
        // Throwing custom exceptions
        try
        {
            ValidateAge(-5);
        }
        catch (ArgumentException ex)
        {
            Console.WriteLine("Validation error: " + ex.Message);
        }
    }
    
    static void ValidateAge(int age)
    {
        if (age < 0)
        {
            throw new ArgumentException("Age cannot be negative");
        }
        Console.WriteLine("Valid age: " + age);
    }
}`}
                </pre>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-green-700">Output:</h4>
                <pre className="text-sm text-gray-700">
{`Index error: Index was outside the bounds of the array.
Invalid number format!
This always executes.
Validation error: Age cannot be negative`}
                </pre>
              </div>
            </section>

            {/* Collections */}
            <section id="collections" className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 lg:mb-8 border border-gray-200">
              <div className="flex items-center mb-4 lg:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-purple-600 font-bold text-sm sm:text-lg">10</span>
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Collections</h2>
                  <p className="text-xs sm:text-sm text-gray-500">Lists, dictionaries, and LINQ basics</p>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <pre className="text-green-400 text-sm overflow-x-auto">
{`using System;
using System.Collections.Generic;
using System.Linq;

class CollectionsExample
{
    static void Main()
    {
        // List<T>
        List<string> fruits = new List<string>();
        fruits.Add("Apple");
        fruits.Add("Banana");
        fruits.Add("Orange");
        fruits.AddRange(new[] {"Grape", "Mango"});
        
        Console.WriteLine("Fruits list:");
        foreach (string fruit in fruits)
        {
            Console.WriteLine("- " + fruit);
        }
        
        // Dictionary<TKey, TValue>
        Dictionary<string, int> ages = new Dictionary<string, int>();
        ages["Alice"] = 25;
        ages["Bob"] = 30;
        ages.Add("Charlie", 35);
        
        Console.WriteLine("\nAges dictionary:");
        foreach (var kvp in ages)
        {
            Console.WriteLine(kvp.Key + ": " + kvp.Value);
        }
        
        // LINQ operations
        List<int> numbers = new List<int> {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        
        // Where (filter)
        var evenNumbers = numbers.Where(n => n % 2 == 0);
        Console.WriteLine("\nEven numbers:");
        foreach (int num in evenNumbers)
        {
            Console.Write(num + " ");
        }
        Console.WriteLine();
        
        // Select (map)
        var squares = numbers.Select(n => n * n);
        Console.WriteLine("\nSquares:");
        foreach (int square in squares)
        {
            Console.Write(square + " ");
        }
        Console.WriteLine();
        
        // Aggregate functions
        int sum = numbers.Sum();
        double average = numbers.Average();
        int max = numbers.Max();
        int min = numbers.Min();
        
        Console.WriteLine("\nSum: " + sum);
        Console.WriteLine("Average: " + average.ToString("F2"));
        Console.WriteLine("Max: " + max);
        Console.WriteLine("Min: " + min);
        
        // Method chaining
        var result = numbers
            .Where(n => n > 5)
            .Select(n => n * 2)
            .OrderByDescending(n => n)
            .ToList();
        
        Console.WriteLine("\nFiltered, doubled, and sorted:");
        foreach (int num in result)
        {
            Console.Write(num + " ");
        }
        Console.WriteLine();
    }
}`}
                </pre>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-green-700">Output:</h4>
                <pre className="text-sm text-gray-700">
{`Fruits list:
- Apple
- Banana
- Orange
- Grape
- Mango

Ages dictionary:
Alice: 25
Bob: 30
Charlie: 35

Even numbers:
2 4 6 8 10

Squares:
1 4 9 16 25 36 49 64 81 100

Sum: 55
Average: 5.50
Max: 10
Min: 1

Filtered, doubled, and sorted:
20 18 16 14 12`}
                </pre>
              </div>
            </section>

            {/* Inheritance */}
            <section id="inheritance" className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 lg:mb-8 border border-gray-200">
              <div className="flex items-center mb-4 lg:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-purple-600 font-bold text-sm sm:text-lg">11</span>
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Inheritance & Polymorphism</h2>
                  <p className="text-xs sm:text-sm text-gray-500">Base classes, virtual methods, and interfaces</p>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <pre className="text-green-400 text-sm overflow-x-auto">
{`using System;

// Base class
abstract class Animal
{
    public string Name { get; set; }
    protected int age;
    
    public Animal(string name, int age)
    {
        Name = name;
        this.age = age;
    }
    
    // Virtual method (can be overridden)
    public virtual void MakeSound()
    {
        Console.WriteLine(Name + " makes a sound");
    }
    
    // Abstract method (must be implemented)
    public abstract void Move();
    
    public void ShowInfo()
    {
        Console.WriteLine("Name: " + Name + ", Age: " + age);
    }
}

// Interface
interface IFlyable
{
    void Fly();
    int MaxAltitude { get; set; }
}

// Derived class
class Dog : Animal
{
    public string Breed { get; set; }
    
    public Dog(string name, int age, string breed) : base(name, age)
    {
        Breed = breed;
    }
    
    // Override virtual method
    public override void MakeSound()
    {
        Console.WriteLine(Name + " barks: Woof!");
    }
    
    // Implement abstract method
    public override void Move()
    {
        Console.WriteLine(Name + " runs on four legs");
    }
}

class Bird : Animal, IFlyable
{
    public int MaxAltitude { get; set; }
    
    public Bird(string name, int age, int maxAltitude) : base(name, age)
    {
        MaxAltitude = maxAltitude;
    }
    
    public override void MakeSound()
    {
        Console.WriteLine(Name + " chirps: Tweet!");
    }
    
    public override void Move()
    {
        Console.WriteLine(Name + " flies in the sky");
    }
    
    public void Fly()
    {
        Console.WriteLine(Name + " is flying at " + MaxAltitude + " feet");
    }
}

class InheritanceExample
{
    static void Main()
    {
        Dog dog = new Dog("Buddy", 3, "Golden Retriever");
        Bird bird = new Bird("Tweety", 1, 1000);
        
        // Polymorphism - treating derived objects as base type
        Animal[] animals = {dog, bird};
        
        foreach (Animal animal in animals)
        {
            animal.ShowInfo();
            animal.MakeSound();
            animal.Move();
            Console.WriteLine();
        }
        
        // Interface usage
        if (bird is IFlyable flyable)
        {
            flyable.Fly();
        }
    }
}`}
                </pre>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-green-700">Output:</h4>
                <pre className="text-sm text-gray-700">
{`Name: Buddy, Age: 3
Buddy barks: Woof!
Buddy runs on four legs

Name: Tweety, Age: 1
Tweety chirps: Tweet!
Tweety flies in the sky

Tweety is flying at 1000 feet`}
                </pre>
              </div>
            </section>

            {/* File Handling */}
            <section id="file-handling" className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 lg:mb-8 border border-gray-200">
              <div className="flex items-center mb-4 lg:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-purple-600 font-bold text-sm sm:text-lg">12</span>
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">File Handling</h2>
                  <p className="text-xs sm:text-sm text-gray-500">Reading and writing files, streams</p>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <pre className="text-green-400 text-sm overflow-x-auto">
{`using System;
using System.IO;
using System.Text;

class FileHandlingExample
{
    static void Main()
    {
        string fileName = "sample.txt";
        
        // Writing to file
        try
        {
            // Method 1: File.WriteAllText
            string content = "Hello, C# File Handling!\nThis is line 2.\nThis is line 3.";
            File.WriteAllText(fileName, content);
            Console.WriteLine("File written successfully.");
            
            // Method 2: StreamWriter
            using (StreamWriter writer = new StreamWriter("data.txt"))
            {
                writer.WriteLine("Name: John Doe");
                writer.WriteLine("Age: 30");
                writer.WriteLine("City: New York");
            }
            
            // Reading from file
            // Method 1: File.ReadAllText
            string fileContent = File.ReadAllText(fileName);
            Console.WriteLine("File content:");
            Console.WriteLine(fileContent);
            
            // Method 2: File.ReadAllLines
            string[] lines = File.ReadAllLines(fileName);
            Console.WriteLine("\nReading line by line:");
            for (int i = 0; i < lines.Length; i++)
            {
                Console.WriteLine("Line " + (i + 1) + ": " + lines[i]);
            }
            
            // Method 3: StreamReader
            Console.WriteLine("\nUsing StreamReader:");
            using (StreamReader reader = new StreamReader("data.txt"))
            {
                string line;
                while ((line = reader.ReadLine()) != null)
                {
                    Console.WriteLine(line);
                }
            }
            
            // File operations
            Console.WriteLine("\nFile exists: " + File.Exists(fileName));
            Console.WriteLine("File size: " + new FileInfo(fileName).Length + " bytes");
            Console.WriteLine("Creation time: " + File.GetCreationTime(fileName));
            
            // Directory operations
            string dirName = "TestDirectory";
            if (!Directory.Exists(dirName))
            {
                Directory.CreateDirectory(dirName);
                Console.WriteLine("Directory '" + dirName + "' created.");
            }
            
            // List files in current directory
            Console.WriteLine("\nFiles in current directory:");
            string[] files = Directory.GetFiles(".", "*.txt");
            foreach (string file in files)
            {
                Console.WriteLine("- " + Path.GetFileName(file));
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine("Error: " + ex.Message);
        }
        finally
        {
            // Cleanup
            if (File.Exists(fileName))
                File.Delete(fileName);
            if (File.Exists("data.txt"))
                File.Delete("data.txt");
            if (Directory.Exists("TestDirectory"))
                Directory.Delete("TestDirectory");
        }
    }
}`}
                </pre>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-green-700">Output:</h4>
                <pre className="text-sm text-gray-700">
{`File written successfully.
File content:
Hello, C# File Handling!
This is line 2.
This is line 3.

Reading line by line:
Line 1: Hello, C# File Handling!
Line 2: This is line 2.
Line 3: This is line 3.

Using StreamReader:
Name: John Doe
Age: 30
City: New York

File exists: True
File size: 52 bytes
Creation time: 12/10/2023 10:30:45 AM
Directory 'TestDirectory' created.

Files in current directory:
- sample.txt
- data.txt`}
                </pre>
              </div>
            </section>

            {/* Delegates and Events */}
            <section id="delegates" className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 lg:mb-8 border border-gray-200">
              <div className="flex items-center mb-4 lg:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-purple-600 font-bold text-sm sm:text-lg">13</span>
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Delegates and Events</h2>
                  <p className="text-xs sm:text-sm text-gray-500">Function pointers and event handling</p>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <pre className="text-green-400 text-sm overflow-x-auto">
{`using System;

// Delegate declaration
delegate void MyDelegate(string message);
delegate int MathOperation(int a, int b);

class Publisher
{
    // Event declaration
    public event Action<string> SomethingHappened;
    
    public void DoSomething()
    {
        Console.WriteLine("Publisher is doing something...");
        
        // Raise the event
        if (SomethingHappened != null)
            SomethingHappened("Something important happened!");
    }
}

class DelegatesEventsExample
{
    static void Method1(string msg)
    {
        Console.WriteLine("Method1: " + msg);
    }
    
    static void Method2(string msg)
    {
        Console.WriteLine("Method2: " + msg);
    }
    
    static int Add(int a, int b)
    {
        return a + b;
    }
    
    static int Multiply(int a, int b)
    {
        return a * b;
    }
    
    static void Main()
    {
        // Single delegate
        MyDelegate del = Method1;
        del("Hello from delegate!");
        
        // Multicast delegate
        del += Method2;
        Console.WriteLine("\nMulticast delegate:");
        del("Hello from multicast!");
        
        // Delegate with return values
        MathOperation operation = Add;
        Console.WriteLine("\nAdd: " + operation(5, 3));
        
        operation = Multiply;
        Console.WriteLine("Multiply: " + operation(5, 3));
        
        // Anonymous methods
        MyDelegate anonymousDelegate = delegate(string msg)
        {
            Console.WriteLine("Anonymous: " + msg);
        };
        anonymousDelegate("Hello from anonymous method!");
        
        // Lambda expressions
        MyDelegate lambdaDelegate = (msg) => Console.WriteLine("Lambda: " + msg);
        lambdaDelegate("Hello from lambda!");
        
        // Events
        Publisher publisher = new Publisher();
        
        // Subscribe to event
        publisher.SomethingHappened += (message) => 
        {
            Console.WriteLine("Subscriber 1 received: " + message);
        };
        
        publisher.SomethingHappened += (message) => 
        {
            Console.WriteLine("Subscriber 2 received: " + message);
        };
        
        Console.WriteLine("\nEvent example:");
        publisher.DoSomething();
        
        // Built-in delegates
        Action<string> action = (msg) => Console.WriteLine("Action: " + msg);
        action("Hello from Action!");
        
        Func<int, int, int> func = (a, b) => a + b;
        Console.WriteLine("Func result: " + func(10, 20));
        
        Predicate<int> isEven = (num) => num % 2 == 0;
        Console.WriteLine("Is 4 even? " + isEven(4));
    }
}`}
                </pre>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-green-700">Output:</h4>
                <pre className="text-sm text-gray-700">
{`Method1: Hello from delegate!

Multicast delegate:
Method1: Hello from multicast!
Method2: Hello from multicast!

Add: 8
Multiply: 15
Anonymous: Hello from anonymous method!
Lambda: Hello from lambda!

Event example:
Publisher is doing something...
Subscriber 1 received: Something important happened!
Subscriber 2 received: Something important happened!
Action: Hello from Action!
Func result: 30
Is 4 even? True`}
                </pre>
              </div>
            </section>

            {/* Async Programming */}
            <section id="async" className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 lg:mb-8 border border-gray-200">
              <div className="flex items-center mb-4 lg:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-purple-600 font-bold text-sm sm:text-lg">14</span>
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Async Programming</h2>
                  <p className="text-xs sm:text-sm text-gray-500">async/await and Task-based operations</p>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <pre className="text-green-400 text-sm overflow-x-auto">
{`using System;
using System.Threading.Tasks;

class AsyncExample
{
    // Async method that simulates a long-running operation
    static async Task<string> GetDataAsync(string source)
    {
        Console.WriteLine("Starting to get data from " + source + "...");
        
        // Simulate async work
        await Task.Delay(2000); // Wait for 2 seconds
        
        Console.WriteLine("Data retrieved from " + source);
        return "Data from " + source;
    }
    
    // Async method with exception handling
    static async Task<int> CalculateAsync(int number)
    {
        try
        {
            await Task.Delay(1000);
            
            if (number < 0)
                throw new ArgumentException("Number cannot be negative");
                
            return number * number;
        }
        catch (Exception ex)
        {
            Console.WriteLine("Error in CalculateAsync: " + ex.Message);
            return -1;
        }
    }
    
    // Multiple async operations
    static async Task RunMultipleOperationsAsync()
    {
        Console.WriteLine("Starting multiple async operations...");
        
        // Run operations concurrently
        Task<string> task1 = GetDataAsync("Database");
        Task<string> task2 = GetDataAsync("API");
        Task<string> task3 = GetDataAsync("File");
        
        // Wait for all to complete
        string[] results = await Task.WhenAll(task1, task2, task3);
        
        Console.WriteLine("All operations completed:");
        foreach (string result in results)
        {
            Console.WriteLine("- " + result);
        }
    }
    
    static async Task Main(string[] args)
    {
        Console.WriteLine("=== Async Programming Demo ===");
        
        // Single async operation
        string data = await GetDataAsync("Server");
        Console.WriteLine("Received: " + data + "\n");
        
        // Async with exception handling
        int result1 = await CalculateAsync(5);
        Console.WriteLine("Calculate(5) = " + result1);
        
        int result2 = await CalculateAsync(-3);
        Console.WriteLine("Calculate(-3) = " + result2 + "\n");
        
        // Multiple concurrent operations
        await RunMultipleOperationsAsync();
        
        // Task.Run for CPU-bound work
        Console.WriteLine("\nRunning CPU-bound task...");
        int cpuResult = await Task.Run(() => 
        {
            // Simulate CPU-intensive work
            int sum = 0;
            for (int i = 0; i < 1000000; i++)
            {
                sum += i;
            }
            return sum;
        });
        Console.WriteLine("CPU task result: " + cpuResult);
        
        Console.WriteLine("\nAll async operations completed!");
    }
}`}
                </pre>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-green-700">Output:</h4>
                <pre className="text-sm text-gray-700">
{`=== Async Programming Demo ===
Starting to get data from Server...
Data retrieved from Server
Received: Data from Server

Calculate(5) = 25
Error in CalculateAsync: Number cannot be negative
Calculate(-3) = -1

Starting multiple async operations...
Starting to get data from Database...
Starting to get data from API...
Starting to get data from File...
Data retrieved from Database
Data retrieved from API
Data retrieved from File
All operations completed:
- Data from Database
- Data from API
- Data from File

Running CPU-bound task...
CPU task result: 499999500000

All async operations completed!`}
                </pre>
              </div>
            </section>

            {/* Generics */}
            <section id="generics" className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 lg:mb-8 border border-gray-200">
              <div className="flex items-center mb-4 lg:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-purple-600 font-bold text-sm sm:text-lg">15</span>
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Generics</h2>
                  <p className="text-xs sm:text-sm text-gray-500">Generic classes, methods, and constraints</p>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <pre className="text-green-400 text-sm overflow-x-auto">
{`using System;
using System.Collections.Generic;

// Generic class
public class GenericRepository<T> where T : class
{
    private List<T> items = new List<T>();
    
    public void Add(T item)
    {
        items.Add(item);
        Console.WriteLine("Added " + typeof(T).Name + ": " + item);
    }
    
    public T Get(int index)
    {
        if (index >= 0 && index < items.Count)
            return items[index];
        return null;
    }
    
    public List<T> GetAll()
    {
        return new List<T>(items);
    }
    
    public int Count { get { return items.Count; } }
}

// Generic method
public class Utilities
{
    public static void Swap<T>(ref T a, ref T b)
    {
        T temp = a;
        a = b;
        b = temp;
    }
    
    public static T FindMax<T>(T[] array) where T : IComparable<T>
    {
        if (array.Length == 0)
            throw new ArgumentException("Array cannot be empty");
            
        T max = array[0];
        for (int i = 1; i < array.Length; i++)
        {
            if (array[i].CompareTo(max) > 0)
                max = array[i];
        }
        return max;
    }
}

// Generic interface
public interface IProcessor<TInput, TOutput>
{
    TOutput Process(TInput input);
}

// Implementation of generic interface
public class StringProcessor : IProcessor<string, int>
{
    public int Process(string input)
    {
        return input != null ? input.Length : 0;
    }
}

class GenericsExample
{
    static void Main()
    {
        // Generic class usage
        var stringRepo = new GenericRepository<string>();
        stringRepo.Add("Hello");
        stringRepo.Add("World");
        stringRepo.Add("C#");
        
        Console.WriteLine("String repository count: " + stringRepo.Count);
        Console.WriteLine("First item: " + stringRepo.Get(0));
        
        // Generic method usage
        int x = 10, y = 20;
        Console.WriteLine("Before swap: x=" + x + ", y=" + y);
        Utilities.Swap(ref x, ref y);
        Console.WriteLine("After swap: x=" + x + ", y=" + y);
        
        string a = "Apple", b = "Banana";
        Console.WriteLine("Before swap: a=" + a + ", b=" + b);
        Utilities.Swap(ref a, ref b);
        Console.WriteLine("After swap: a=" + a + ", b=" + b);
        
        // Generic method with constraints
        int[] numbers = {3, 7, 2, 9, 1};
        int maxNumber = Utilities.FindMax(numbers);
        Console.WriteLine("Max number: " + maxNumber);
        
        string[] words = {"apple", "zebra", "banana"};
        string maxWord = Utilities.FindMax(words);
        Console.WriteLine("Max word: " + maxWord);
        
        // Generic interface
        var processor = new StringProcessor();
        int length = processor.Process("Hello World");
        Console.WriteLine("Processed result: " + length);
        
        // Built-in generic collections
        var dictionary = new Dictionary<string, int>();
        dictionary["apple"] = 5;
        dictionary["banana"] = 3;
        dictionary["orange"] = 8;
        
        Console.WriteLine("Dictionary contents:");
        foreach (var kvp in dictionary)
        {
            Console.WriteLine(kvp.Key + ": " + kvp.Value);
        }
    }
}`}
                </pre>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-green-700">Output:</h4>
                <pre className="text-sm text-gray-700">
{`Added String: Hello
Added String: World
Added String: C#
String repository count: 3
First item: Hello
Before swap: x=10, y=20
After swap: x=20, y=10
Before swap: a=Apple, b=Banana
After swap: a=Banana, b=Apple
Max number: 9
Max word: zebra
Processed result: 11
Dictionary contents:
apple: 5
banana: 3
orange: 8`}
                </pre>
              </div>
            </section>

            {/* Advanced LINQ */}
            <section id="linq-advanced" className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 lg:mb-8 border border-gray-200">
              <div className="flex items-center mb-4 lg:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-purple-600 font-bold text-sm sm:text-lg">16</span>
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Advanced LINQ</h2>
                  <p className="text-xs sm:text-sm text-gray-500">Complex queries and lambda expressions</p>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <pre className="text-green-400 text-sm overflow-x-auto">
{`using System;
using System.Collections.Generic;
using System.Linq;

public class Student
{
    public int Id { get; set; }
    public string Name { get; set; }
    public int Age { get; set; }
    public string Department { get; set; }
    public double GPA { get; set; }
    public List<string> Courses { get; set; } = new List<string>();
}

class AdvancedLINQExample
{
    static void Main()
    {
        var students = new List<Student>
        {
            new Student { Id = 1, Name = "Alice", Age = 20, Department = "CS", GPA = 3.8, 
                         Courses = new List<string> {"Math", "Physics", "Programming"} },
            new Student { Id = 2, Name = "Bob", Age = 22, Department = "EE", GPA = 3.5, 
                         Courses = new List<string> {"Math", "Electronics", "Signals"} },
            new Student { Id = 3, Name = "Charlie", Age = 19, Department = "CS", GPA = 3.9, 
                         Courses = new List<string> {"Programming", "Algorithms", "Database"} },
            new Student { Id = 4, Name = "Diana", Age = 21, Department = "Math", GPA = 3.7, 
                         Courses = new List<string> {"Calculus", "Statistics", "Algebra"} },
            new Student { Id = 5, Name = "Eve", Age = 20, Department = "CS", GPA = 3.6, 
                         Courses = new List<string> {"Programming", "Networks", "Security"} }
        };
        
        // Complex filtering and projection
        var topCSStudents = students
            .Where(s => s.Department == "CS" && s.GPA > 3.7)
            .Select(s => new { s.Name, s.GPA, CourseCount = s.Courses.Count })
            .OrderByDescending(s => s.GPA);
        
        Console.WriteLine("Top CS Students:");
        foreach (var student in topCSStudents)
        {
            Console.WriteLine(student.Name + ": GPA " + student.GPA + ", " + student.CourseCount + " courses");
        }
        
        // Grouping
        var studentsByDepartment = students
            .GroupBy(s => s.Department)
            .Select(g => new 
            {
                Department = g.Key,
                Count = g.Count(),
                AverageGPA = g.Average(s => s.GPA),
                Students = g.Select(s => s.Name).ToList()
            });
        
        Console.WriteLine("\nStudents by Department:");
        foreach (var dept in studentsByDepartment)
        {
            Console.WriteLine(dept.Department + ": " + dept.Count + " students, Avg GPA: " + dept.AverageGPA.ToString("F2"));
            Console.WriteLine("  Students: " + string.Join(", ", dept.Students));
        }
        
        // Advanced aggregations
        var stats = new
        {
            TotalStudents = students.Count(),
            AverageAge = students.Average(s => s.Age),
            HighestGPA = students.Max(s => s.GPA),
            LowestGPA = students.Min(s => s.GPA),
            DepartmentCount = students.Select(s => s.Department).Distinct().Count(),
            StudentsWithProgramming = students.Count(s => s.Courses.Contains("Programming"))
        };
        
        Console.WriteLine("\nStatistics:");
        Console.WriteLine("Total Students: " + stats.TotalStudents);
        Console.WriteLine("Average Age: " + stats.AverageAge.ToString("F1"));
        Console.WriteLine("Highest GPA: " + stats.HighestGPA);
        Console.WriteLine("Lowest GPA: " + stats.LowestGPA);
        Console.WriteLine("Departments: " + stats.DepartmentCount);
        Console.WriteLine("Students taking Programming: " + stats.StudentsWithProgramming);
        
        // Custom extension method usage
        var topPerformers = students.Where(s => s.GPA >= 3.8);
        Console.WriteLine("\nTop Performers: " + string.Join(", ", topPerformers.Select(s => s.Name)));
    }
}`}
                </pre>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-green-700">Output:</h4>
                <pre className="text-sm text-gray-700">
{`Top CS Students:
Charlie: GPA 3.9, 3 courses
Alice: GPA 3.8, 3 courses

Students by Department:
CS: 3 students, Avg GPA: 3.77
  Students: Alice, Charlie, Eve
EE: 1 students, Avg GPA: 3.50
  Students: Bob
Math: 1 students, Avg GPA: 3.70
  Students: Diana

Statistics:
Total Students: 5
Average Age: 20.4
Highest GPA: 3.9
Lowest GPA: 3.5
Departments: 3
Students taking Programming: 3

Top Performers: Alice, Charlie`}
                </pre>
              </div>
            </section>

            {/* Database Connectivity */}
            <section id="database" className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 lg:mb-8 border border-gray-200">
              <div className="flex items-center mb-4 lg:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-purple-600 font-bold text-sm sm:text-lg">17</span>
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Database Connectivity</h2>
                  <p className="text-xs sm:text-sm text-gray-500">ADO.NET and SQL Server integration</p>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <pre className="text-green-400 text-sm overflow-x-auto">
{`using System;
using System.Data;
using System.Data.SqlClient;
using System.Collections.Generic;

public class Employee
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Department { get; set; }
    public decimal Salary { get; set; }
    public DateTime HireDate { get; set; }
}

public class DatabaseManager
{
    private string connectionString = "Server=localhost;Database=CompanyDB;Integrated Security=true;";
    
    // Create table
    public void CreateEmployeeTable()
    {
        string createTableQuery = @"
            IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='Employees' AND xtype='U')
            CREATE TABLE Employees (
                Id INT IDENTITY(1,1) PRIMARY KEY,
                Name NVARCHAR(100) NOT NULL,
                Department NVARCHAR(50) NOT NULL,
                Salary DECIMAL(10,2) NOT NULL,
                HireDate DATETIME NOT NULL
            )";
        
        using (SqlConnection connection = new SqlConnection(connectionString))
        {
            connection.Open();
            using (SqlCommand command = new SqlCommand(createTableQuery, connection))
            {
                command.ExecuteNonQuery();
                Console.WriteLine("Employee table created successfully.");
            }
        }
    }
    
    // Insert employee
    public void InsertEmployee(Employee employee)
    {
        string insertQuery = @"
            INSERT INTO Employees (Name, Department, Salary, HireDate) 
            VALUES (@Name, @Department, @Salary, @HireDate)";
        
        using (SqlConnection connection = new SqlConnection(connectionString))
        {
            connection.Open();
            using (SqlCommand command = new SqlCommand(insertQuery, connection))
            {
                command.Parameters.AddWithValue("@Name", employee.Name);
                command.Parameters.AddWithValue("@Department", employee.Department);
                command.Parameters.AddWithValue("@Salary", employee.Salary);
                command.Parameters.AddWithValue("@HireDate", employee.HireDate);
                
                int rowsAffected = command.ExecuteNonQuery();
                Console.WriteLine("Inserted " + rowsAffected + " employee record.");
            }
        }
    }
    
    // Get all employees
    public List<Employee> GetAllEmployees()
    {
        List<Employee> employees = new List<Employee>();
        string selectQuery = "SELECT Id, Name, Department, Salary, HireDate FROM Employees";
        
        using (SqlConnection connection = new SqlConnection(connectionString))
        {
            connection.Open();
            using (SqlCommand command = new SqlCommand(selectQuery, connection))
            {
                using (SqlDataReader reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        employees.Add(new Employee
                        {
                            Id = reader.GetInt32("Id"),
                            Name = reader.GetString("Name"),
                            Department = reader.GetString("Department"),
                            Salary = reader.GetDecimal("Salary"),
                            HireDate = reader.GetDateTime("HireDate")
                        });
                    }
                }
            }
        }
        
        return employees;
    }
    
    // Update employee salary
    public void UpdateEmployeeSalary(int employeeId, decimal newSalary)
    {
        string updateQuery = "UPDATE Employees SET Salary = @Salary WHERE Id = @Id";
        
        using (SqlConnection connection = new SqlConnection(connectionString))
        {
            connection.Open();
            using (SqlCommand command = new SqlCommand(updateQuery, connection))
            {
                command.Parameters.AddWithValue("@Salary", newSalary);
                command.Parameters.AddWithValue("@Id", employeeId);
                
                int rowsAffected = command.ExecuteNonQuery();
                Console.WriteLine("Updated " + rowsAffected + " employee record.");
            }
        }
    }
}

class DatabaseExample
{
    static void Main()
    {
        try
        {
            var dbManager = new DatabaseManager();
            
            // Create table
            dbManager.CreateEmployeeTable();
            
            // Insert sample employees
            var employees = new List<Employee>
            {
                new Employee { Name = "John Doe", Department = "IT", Salary = 75000, HireDate = DateTime.Now.AddYears(-2) },
                new Employee { Name = "Jane Smith", Department = "HR", Salary = 65000, HireDate = DateTime.Now.AddYears(-1) },
                new Employee { Name = "Mike Johnson", Department = "IT", Salary = 80000, HireDate = DateTime.Now.AddMonths(-6) }
            };
            
            foreach (var emp in employees)
            {
                dbManager.InsertEmployee(emp);
            }
            
            // Retrieve and display all employees
            Console.WriteLine("\nAll Employees:");
            var allEmployees = dbManager.GetAllEmployees();
            foreach (var emp in allEmployees)
            {
                Console.WriteLine(emp.Id + ": " + emp.Name + " - " + emp.Department + " - $" + emp.Salary + " - " + emp.HireDate);
            }
            
            // Update salary
            if (allEmployees.Count > 0)
            {
                dbManager.UpdateEmployeeSalary(allEmployees[0].Id, 78000);
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine("Database error: " + ex.Message);
            Console.WriteLine("Note: This example requires SQL Server connection.");
        }
    }
}`}
                </pre>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-green-700">Expected Output (with SQL Server):</h4>
                <pre className="text-sm text-gray-700">
{`Employee table created successfully.
Inserted 1 employee record.
Inserted 1 employee record.
Inserted 1 employee record.

All Employees:
1: John Doe - IT - $75,000 - 2021-12-10
2: Jane Smith - HR - $65,000 - 2022-12-10
3: Mike Johnson - IT - $80,000 - 2023-06-10
Updated 1 employee record.`}
                </pre>
              </div>
            </section>

            {/* Unit Testing */}
            <section id="testing" className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 lg:mb-8 border border-gray-200">
              <div className="flex items-center mb-4 lg:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-purple-600 font-bold text-sm sm:text-lg">18</span>
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Unit Testing</h2>
                  <p className="text-xs sm:text-sm text-gray-500">MSTest, NUnit, and testing best practices</p>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <pre className="text-green-400 text-sm overflow-x-auto">
{`using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;

// Class to be tested
public class Calculator
{
    public int Add(int a, int b)
    {
        return a + b;
    }
    
    public int Subtract(int a, int b)
    {
        return a - b;
    }
    
    public double Divide(double a, double b)
    {
        if (b == 0)
            throw new DivideByZeroException("Cannot divide by zero");
        return a / b;
    }
    
    public bool IsEven(int number)
    {
        return number % 2 == 0;
    }
}

public class StringHelper
{
    public static string Reverse(string input)
    {
        if (string.IsNullOrEmpty(input))
            return input;
            
        char[] chars = input.ToCharArray();
        Array.Reverse(chars);
        return new string(chars);
    }
    
    public static bool IsPalindrome(string input)
    {
        if (string.IsNullOrEmpty(input))
            return true;
            
        string cleaned = input.ToLower().Replace(" ", "");
        return cleaned == Reverse(cleaned).ToLower();
    }
}

// Test class using MSTest
[TestClass]
public class CalculatorTests
{
    private Calculator calculator;
    
    [TestInitialize]
    public void Setup()
    {
        calculator = new Calculator();
    }
    
    [TestMethod]
    public void Add_TwoPositiveNumbers_ReturnsCorrectSum()
    {
        // Arrange
        int a = 5;
        int b = 3;
        int expected = 8;
        
        // Act
        int result = calculator.Add(a, b);
        
        // Assert
        Assert.AreEqual(expected, result);
    }
    
    [TestMethod]
    public void Add_PositiveAndNegativeNumber_ReturnsCorrectSum()
    {
        // Arrange
        int a = 10;
        int b = -3;
        int expected = 7;
        
        // Act
        int result = calculator.Add(a, b);
        
        // Assert
        Assert.AreEqual(expected, result);
    }
    
    [TestMethod]
    public void Subtract_TwoNumbers_ReturnsCorrectDifference()
    {
        // Arrange
        int a = 10;
        int b = 4;
        int expected = 6;
        
        // Act
        int result = calculator.Subtract(a, b);
        
        // Assert
        Assert.AreEqual(expected, result);
    }
    
    [TestMethod]
    public void Divide_TwoValidNumbers_ReturnsCorrectQuotient()
    {
        // Arrange
        double a = 10.0;
        double b = 2.0;
        double expected = 5.0;
        
        // Act
        double result = calculator.Divide(a, b);
        
        // Assert
        Assert.AreEqual(expected, result, 0.001); // Delta for floating point
    }
    
    [TestMethod]
    [ExpectedException(typeof(DivideByZeroException))]
    public void Divide_ByZero_ThrowsException()
    {
        // Arrange
        double a = 10.0;
        double b = 0.0;
        
        // Act & Assert
        calculator.Divide(a, b);
    }
}

[TestClass]
public class StringHelperTests
{
    [TestMethod]
    public void Reverse_ValidString_ReturnsReversedString()
    {
        // Arrange
        string input = "hello";
        string expected = "olleh";
        
        // Act
        string result = StringHelper.Reverse(input);
        
        // Assert
        Assert.AreEqual(expected, result);
    }
    
    [TestMethod]
    public void Reverse_EmptyString_ReturnsEmptyString()
    {
        // Arrange
        string input = "";
        string expected = "";
        
        // Act
        string result = StringHelper.Reverse(input);
        
        // Assert
        Assert.AreEqual(expected, result);
    }
    
    [TestMethod]
    public void IsPalindrome_ValidPalindrome_ReturnsTrue()
    {
        // Arrange
        string input = "A man a plan a canal Panama";
        
        // Act
        bool result = StringHelper.IsPalindrome(input);
        
        // Assert
        Assert.IsTrue(result);
    }
    
    [TestMethod]
    public void IsPalindrome_NotPalindrome_ReturnsFalse()
    {
        // Arrange
        string input = "hello";
        
        // Act
        bool result = StringHelper.IsPalindrome(input);
        
        // Assert
        Assert.IsFalse(result);
    }
}

// Example test runner
class TestRunner
{
    static void Main()
    {
        Console.WriteLine("Running Unit Tests...");
        Console.WriteLine("Note: In real projects, tests are run using Test Explorer or dotnet test command.");
        
        // Manual test execution for demonstration
        var calculatorTests = new CalculatorTests();
        var stringTests = new StringHelperTests();
        
        try
        {
            calculatorTests.Setup();
            calculatorTests.Add_TwoPositiveNumbers_ReturnsCorrectSum();
            Console.WriteLine("✓ Calculator Add test passed");
            
            calculatorTests.Divide_TwoValidNumbers_ReturnsCorrectQuotient();
            Console.WriteLine("✓ Calculator Divide test passed");
            
            stringTests.Reverse_ValidString_ReturnsReversedString();
            Console.WriteLine("✓ String Reverse test passed");
            
            stringTests.IsPalindrome_ValidPalindrome_ReturnsTrue();
            Console.WriteLine("✓ String Palindrome test passed");
            
            Console.WriteLine("\nAll tests passed successfully!");
        }
        catch (Exception ex)
        {
            Console.WriteLine("Test failed: " + ex.Message);
        }
    }
}`}
                </pre>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-green-700">Output:</h4>
                <pre className="text-sm text-gray-700">
{`Running Unit Tests...
Note: In real projects, tests are run using Test Explorer or dotnet test command.
✓ Calculator Add test passed
✓ Calculator Divide test passed
✓ String Reverse test passed
✓ String Palindrome test passed

All tests passed successfully!`}
                </pre>
              </div>
            </section>

            {/* Course Completion */}
            <div className="text-center py-6 lg:py-8">
              <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white p-4 sm:p-6 lg:p-8 rounded-lg mb-6 lg:mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">🎉 Congratulations!</h2>
                <p className="text-lg sm:text-xl mb-6">You've mastered C# Programming - From Beginner to Professional!</p>
                <div className="bg-white/20 rounded-lg p-4 mb-6">
                  <h3 className="text-lg font-semibold mb-3">Complete Skill Set Acquired:</h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
                    <div>✅ C# Fundamentals & Syntax</div>
                    <div>✅ Object-Oriented Programming</div>
                    <div>✅ Exception Handling</div>
                    <div>✅ Collections & LINQ</div>
                    <div>✅ Inheritance & Polymorphism</div>
                    <div>✅ File I/O Operations</div>
                    <div>✅ Delegates & Events</div>
                    <div>✅ Async Programming</div>
                    <div>✅ Generics & Constraints</div>
                    <div>✅ Advanced LINQ Queries</div>
                    <div>✅ Database Connectivity</div>
                    <div>✅ Unit Testing</div>
                  </div>
                </div>
                <div className="bg-yellow-400/20 rounded-lg p-3 mb-6">
                  <p className="text-sm">
                    🏆 You're now ready for enterprise C# development, .NET applications, and advanced software engineering roles!
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 flex-wrap">
                  <Link to="/courses" className="bg-white text-purple-600 px-4 sm:px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                    <span className="sm:inline hidden">← Back to Courses</span>
                    <span className="sm:hidden">← Courses</span>
                  </Link>
                  <Link to="/advanced-csharp" className="bg-purple-500 text-white px-4 sm:px-6 py-3 rounded-lg font-semibold hover:bg-purple-400 transition-colors">
                    <span className="sm:inline hidden">Enterprise C# →</span>
                    <span className="sm:hidden">Enterprise →</span>
                  </Link>
                  <Link to="/csharp-projects" className="bg-blue-500 text-white px-4 sm:px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors">
                    <span className="sm:inline hidden">Build Real Projects</span>
                    <span className="sm:hidden">Projects</span>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default CSharpProgramming;