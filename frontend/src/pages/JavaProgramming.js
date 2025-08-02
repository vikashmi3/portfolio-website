import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaHome, FaGraduationCap } from 'react-icons/fa';

const JavaProgramming = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600 flex items-center gap-1">
              <FaHome /> Home
            </Link>
            <span>/</span>
            <Link to="/courses" className="hover:text-blue-600 flex items-center gap-1">
              <FaGraduationCap /> Courses
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Java Programming</span>
          </nav>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Java Programming Complete Guide</h1>
          <p className="text-xl text-gray-600">Master Java from basics to advanced concepts with practical examples</p>
          
          {/* Quick Navigation */}
          <div className="mt-6 flex justify-center gap-4">
            <Link 
              to="/courses" 
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <FaArrowLeft /> Back to Courses
            </Link>
            <Link 
              to="/advanced-java" 
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Advanced Java <FaGraduationCap />
            </Link>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Table of Contents</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li><a href="#basics" className="text-blue-600 hover:underline">1. Java Basics</a></li>
              <li><a href="#variables" className="text-blue-600 hover:underline">2. Variables & Data Types</a></li>
              <li><a href="#operators" className="text-blue-600 hover:underline">3. Operators</a></li>
              <li><a href="#control" className="text-blue-600 hover:underline">4. Control Structures</a></li>
              <li><a href="#arrays" className="text-blue-600 hover:underline">5. Arrays</a></li>
              <li><a href="#methods" className="text-blue-600 hover:underline">6. Methods</a></li>
              <li><a href="#oop" className="text-blue-600 hover:underline">7. Object-Oriented Programming</a></li>
            </ul>
            <ul className="space-y-2">
              
              <li><a href="#inheritance" className="text-blue-600 hover:underline">8. Inheritance</a></li>
              <li><a href="#polymorphism" className="text-blue-600 hover:underline">9. Polymorphism</a></li>
              <li><a href="#encapsulation" className="text-blue-600 hover:underline">10. Encapsulation</a></li>
              <li><a href="#abstraction" className="text-blue-600 hover:underline">11. Abstraction</a></li>
              <li><a href="#exceptions" className="text-blue-600 hover:underline">11. Exception Handling</a></li>
              <li><a href="#exceptions" className="text-blue-600 hover:underline">12. Multithreading & Synchronization</a></li>
              <li><a href="#project1" className="text-blue-600 hover:underline">13. Project 1: Library Management</a></li>
              <li><a href="#project2" className="text-blue-600 hover:underline">14. Project 2: Banking System</a></li>
            </ul>
          </div>
        </div>

        {/* Java Basics */}
        <section id="basics" className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-3xl font-bold mb-6">1. Java Basics</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">What is Java?</h3>
            <p className="text-gray-700 mb-4">
              Java is a high-level, object-oriented programming language developed by Sun Microsystems (now owned by Oracle). It was first released in 1995. Java is known for being platform-independent, which means code written in Java can run on any device that has a Java Virtual Machine (JVM). This concept is called "write once, run anywhere."
            </p>
            
            <h4 className="text-lg font-semibold mb-2">Key Features:</h4>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Object-Oriented: Everything in Java is treated as an object.</li>
              <li>Platform-Independent: Compiled Java code (bytecode) can run on any device with a JVM.</li>
              <li>Strongly Typed and Statically Typed: Variables must be declared with a type.</li>
              <li>Automatic Memory Management: Java uses garbage collection to manage memory.</li>
              <li>Rich Standard Library: It has a huge set of built-in classes and packages.</li>
              <li>Multithreaded: Supports running multiple threads (small units of a process) simultaneously.</li>
              <li>Secure: Java runs inside the JVM, offering a controlled environment.</li>
            </ul>
            <p>Common Uses:
                Web Applications (Back-End): using frameworks like Spring.

                Mobile Applications: Android apps are primarily built using Java (though Kotlin is now popular too).

                Enterprise Applications: Large-scale business software.

                Desktop Applications: Though less common now.

                Embedded Systems and IoT Devices.</p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Basic Java Program Structure</h3>
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto">
{`// Basic Java Program
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`}
            </pre>
          </div>
        </section>

        {/* Variables and Data Types */}
        <section id="variables" className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-3xl font-bold mb-6">2. Variables & Data Types</h2>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">What are Variables?</h3>
            <p className="text-gray-700 mb-4">
              Variables are containers that store data values. In Java, every variable must be declared with a specific data type before it can be used.
            </p>
            
            <h4 className="text-lg font-semibold mb-3">Variable Declaration Syntax:</h4>
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto mb-4">
{`// Syntax: dataType variableName = value;
int age = 25;
String name = "John";
double salary = 50000.50;
boolean isActive = true;`}
            </pre>
            
            <h4 className="text-lg font-semibold mb-3">Variable Naming Rules:</h4>
            <div className="bg-yellow-50 p-4 rounded-lg mb-6">
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Must start with a letter, underscore (_), or dollar sign ($)</li>
                <li>Cannot start with a number</li>
                <li>Case-sensitive (age and Age are different)</li>
                <li>Cannot use Java keywords (int, class, public, etc.)</li>
                <li>Use camelCase convention (firstName, lastName)</li>
              </ul>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">Primitive Data Types</h3>
            <p className="text-gray-700 mb-4">
              Primitive data types are the basic building blocks of data manipulation in Java. They are predefined by the language and stored directly in memory.
            </p>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2">Key Characteristics:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Stored directly in stack memory</li>
                <li>Have default values</li>
                <li>Cannot be null</li>
                <li>Passed by value</li>
                <li>8 primitive types in Java</li>
              </ul>
            </div>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2">Data Type</th>
                    <th className="border border-gray-300 px-4 py-2">Size</th>
                    <th className="border border-gray-300 px-4 py-2">Range</th>
                    <th className="border border-gray-300 px-4 py-2">Default</th>
                    <th className="border border-gray-300 px-4 py-2">Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">byte</td>
                    <td className="border border-gray-300 px-4 py-2">1 byte</td>
                    <td className="border border-gray-300 px-4 py-2">-128 to 127</td>
                    <td className="border border-gray-300 px-4 py-2">0</td>
                    <td className="border border-gray-300 px-4 py-2">byte b = 100;</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">short</td>
                    <td className="border border-gray-300 px-4 py-2">2 bytes</td>
                    <td className="border border-gray-300 px-4 py-2">-32,768 to 32,767</td>
                    <td className="border border-gray-300 px-4 py-2">0</td>
                    <td className="border border-gray-300 px-4 py-2">short s = 1000;</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">int</td>
                    <td className="border border-gray-300 px-4 py-2">4 bytes</td>
                    <td className="border border-gray-300 px-4 py-2">-2,147,483,648 to 2,147,483,647</td>
                    <td className="border border-gray-300 px-4 py-2">0</td>
                    <td className="border border-gray-300 px-4 py-2">int i = 100000;</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">long</td>
                    <td className="border border-gray-300 px-4 py-2">8 bytes</td>
                    <td className="border border-gray-300 px-4 py-2">-9,223,372,036,854,775,808 to 9,223,372,036,854,775,807</td>
                    <td className="border border-gray-300 px-4 py-2">0L</td>
                    <td className="border border-gray-300 px-4 py-2">long l = 100000L;</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">float</td>
                    <td className="border border-gray-300 px-4 py-2">4 bytes</td>
                    <td className="border border-gray-300 px-4 py-2">6-7 decimal digits</td>
                    <td className="border border-gray-300 px-4 py-2">0.0f</td>
                    <td className="border border-gray-300 px-4 py-2">float f = 3.14f;</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">double</td>
                    <td className="border border-gray-300 px-4 py-2">8 bytes</td>
                    <td className="border border-gray-300 px-4 py-2">15 decimal digits</td>
                    <td className="border border-gray-300 px-4 py-2">0.0d</td>
                    <td className="border border-gray-300 px-4 py-2">double d = 3.14159;</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">char</td>
                    <td className="border border-gray-300 px-4 py-2">2 bytes</td>
                    <td className="border border-gray-300 px-4 py-2">0 to 65,535</td>
                    <td className="border border-gray-300 px-4 py-2">'\u0000'</td>
                    <td className="border border-gray-300 px-4 py-2">char c = 'A';</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">boolean</td>
                    <td className="border border-gray-300 px-4 py-2">1 bit</td>
                    <td className="border border-gray-300 px-4 py-2">true or false</td>
                    <td className="border border-gray-300 px-4 py-2">false</td>
                    <td className="border border-gray-300 px-4 py-2">boolean flag = true;</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h4 className="text-lg font-semibold mb-3">Primitive Data Types Examples:</h4>
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto mb-6">
{`public class PrimitiveExample {
    public static void main(String[] args) {
        // Integer types
        byte age = 25;
        short year = 2024;
        int population = 1000000;
        long distance = 9876543210L;
        
        // Floating-point types
        float price = 19.99f;
        double pi = 3.14159265359;
        
        // Character type
        char grade = 'A';
        char symbol = '@';
        
        // Boolean type
        boolean isJavaFun = true;
        boolean isComplete = false;
        
        // Display values
        System.out.println("Age: " + age);
        System.out.println("Year: " + year);
        System.out.println("Population: " + population);
        System.out.println("Distance: " + distance);
        System.out.println("Price: $" + price);
        System.out.println("Pi: " + pi);
        System.out.println("Grade: " + grade);
        System.out.println("Is Java Fun? " + isJavaFun);
    }
}`}
            </pre>
          </div>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-purple-700">Non-Primitive Data Types</h3>
            <p className="text-gray-700 mb-4">
              Non-primitive data types are created by the programmer and are not predefined by Java. They are also called reference types because they refer to objects.
            </p>
            
            <div className="bg-purple-50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2">Key Characteristics:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Stored in heap memory</li>
                <li>Default value is null</li>
                <li>Can be null</li>
                <li>Passed by reference</li>
                <li>Have methods and properties</li>
              </ul>
            </div>
            
            <h4 className="text-lg font-semibold mb-3">1. String</h4>
            <p className="text-gray-700 mb-3">String is a sequence of characters. It's immutable in Java.</p>
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto mb-4">
{`// String examples
String name = "John Doe";
String message = "Hello, World!";
String empty = "";
String nullString = null;

// String methods
System.out.println(name.length());        // 8
System.out.println(name.toUpperCase());   // JOHN DOE
System.out.println(name.toLowerCase());   // john doe
System.out.println(name.charAt(0));       // J
System.out.println(name.substring(0, 4)); // John`}
            </pre>
            
            <h4 className="text-lg font-semibold mb-3">2. Arrays</h4>
            <p className="text-gray-700 mb-3">Arrays store multiple values of the same type in a single variable.</p>
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto mb-4">
{`// Array examples
int[] numbers = {1, 2, 3, 4, 5};
String[] names = {"Alice", "Bob", "Charlie"};
double[] prices = new double[5];

// Accessing array elements
System.out.println(numbers[0]);    // 1
System.out.println(names.length);  // 3
prices[0] = 19.99;`}
            </pre>
            
            <h4 className="text-lg font-semibold mb-3">3. Classes</h4>
            <p className="text-gray-700 mb-3">Classes are blueprints for creating objects.</p>
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto mb-4">
{`// Class example
class Student {
    String name;
    int age;
    
    void displayInfo() {
        System.out.println("Name: " + name + ", Age: " + age);
    }
}

// Using the class
Student student1 = new Student();
student1.name = "Alice";
student1.age = 20;
student1.displayInfo();`}
            </pre>
            
            <h4 className="text-lg font-semibold mb-3">4. Interfaces</h4>
            <p className="text-gray-700 mb-3">Interfaces define a contract that classes must follow.</p>
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto mb-6">
{`// Interface example
interface Drawable {
    void draw();
}

class Circle implements Drawable {
    public void draw() {
        System.out.println("Drawing a circle");
    }
}`}
            </pre>
          </div>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Type Conversion and Casting</h3>
            
            <h4 className="text-lg font-semibold mb-3">Implicit Type Conversion (Widening)</h4>
            <p className="text-gray-700 mb-3">Java automatically converts smaller data types to larger ones.</p>
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto mb-4">
{`// Implicit conversion
int intValue = 100;
long longValue = intValue;     // int to long
float floatValue = longValue;  // long to float
double doubleValue = floatValue; // float to double

System.out.println("Int: " + intValue);
System.out.println("Long: " + longValue);
System.out.println("Float: " + floatValue);
System.out.println("Double: " + doubleValue);`}
            </pre>
            
            <h4 className="text-lg font-semibold mb-3">Explicit Type Conversion (Narrowing)</h4>
            <p className="text-gray-700 mb-3">Manual conversion from larger to smaller data types using casting.</p>
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto mb-6">
{`// Explicit conversion (casting)
double doubleValue = 9.78;
int intValue = (int) doubleValue;  // 9 (decimal part lost)

long longValue = 1000L;
int intFromLong = (int) longValue;

float floatValue = 3.14f;
int intFromFloat = (int) floatValue; // 3

System.out.println("Original double: " + doubleValue);
System.out.println("Casted to int: " + intValue);`}
            </pre>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="text-lg font-semibold mb-3">Comparison: Primitive vs Non-Primitive</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2">Aspect</th>
                    <th className="border border-gray-300 px-4 py-2">Primitive</th>
                    <th className="border border-gray-300 px-4 py-2">Non-Primitive</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Memory</td>
                    <td className="border border-gray-300 px-4 py-2">Stack memory</td>
                    <td className="border border-gray-300 px-4 py-2">Heap memory</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Null Value</td>
                    <td className="border border-gray-300 px-4 py-2">Cannot be null</td>
                    <td className="border border-gray-300 px-4 py-2">Can be null</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Methods</td>
                    <td className="border border-gray-300 px-4 py-2">No methods</td>
                    <td className="border border-gray-300 px-4 py-2">Have methods</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Performance</td>
                    <td className="border border-gray-300 px-4 py-2">Faster</td>
                    <td className="border border-gray-300 px-4 py-2">Slower</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-purple-700">Non-Primitive Data Types</h3>
            <p className="text-gray-700 mb-4">
              Non-primitive data types are reference types that store references to objects in memory. They are created by the programmer and can be null.
            </p>
            
            <div className="bg-purple-50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2">Key Characteristics:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Stored in heap memory with references in stack</li>
                <li>Can be null</li>
                <li>Passed by reference</li>
                <li>Have methods and properties</li>
                <li>Created using 'new' keyword</li>
              </ul>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-3 text-purple-700">1. String</h4>
                <p className="text-sm text-gray-700 mb-2">Sequence of characters</p>
                <pre className="bg-gray-800 text-green-400 p-2 rounded text-xs">
{`String name = "Java";
String title = new String("Programming");
String empty = null;`}
                </pre>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-3 text-purple-700">2. Arrays</h4>
                <p className="text-sm text-gray-700 mb-2">Collection of similar elements</p>
                <pre className="bg-gray-800 text-green-400 p-2 rounded text-xs">
{`int[] numbers = {1, 2, 3, 4, 5};
String[] names = new String[10];
int[][] matrix = new int[3][3];`}
                </pre>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-3 text-purple-700">3. Classes</h4>
                <p className="text-sm text-gray-700 mb-2">User-defined blueprints</p>
                <pre className="bg-gray-800 text-green-400 p-2 rounded text-xs">
{`Student student = new Student();
Car myCar = new Car("Toyota");
Person person = null;`}
                </pre>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-3 text-purple-700">4. Interfaces</h4>
                <p className="text-sm text-gray-700 mb-2">Contracts for classes</p>
                <pre className="bg-gray-800 text-green-400 p-2 rounded text-xs">
{`List<String> list = new ArrayList<>();
Runnable task = new MyTask();
Comparable<String> comp = "Hello";`}
                </pre>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <h4 className="text-lg font-semibold mb-3">Comparison: Primitive vs Non-Primitive</h4>
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2">Aspect</th>
                    <th className="border border-gray-300 px-4 py-2">Primitive Types</th>
                    <th className="border border-gray-300 px-4 py-2">Non-Primitive Types</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Memory</td>
                    <td className="border border-gray-300 px-4 py-2">Stack memory</td>
                    <td className="border border-gray-300 px-4 py-2">Heap memory</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Null Values</td>
                    <td className="border border-gray-300 px-4 py-2">Cannot be null</td>
                    <td className="border border-gray-300 px-4 py-2">Can be null</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Methods</td>
                    <td className="border border-gray-300 px-4 py-2">No methods</td>
                    <td className="border border-gray-300 px-4 py-2">Have methods</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Performance</td>
                    <td className="border border-gray-300 px-4 py-2">Faster access</td>
                    <td className="border border-gray-300 px-4 py-2">Slower due to indirection</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Variable Declaration Examples</h3>
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto">
{`public class VariableExample {
    public static void main(String[] args) {
        // Integer variables
        int age = 25;
        long population = 7800000000L;
        
        // Floating-point variables
        float price = 99.99f;
        double pi = 3.14159265359;
        
        // Character and String
        char grade = 'A';
        String name = "John Doe";
        
        // Boolean
        boolean isActive = true;
        
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }
}`}
            </pre>
          </div>
        </section>

        {/* Operators */}
        <section id="operators" className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-3xl font-bold mb-6">3. Operators</h2>
          <h3>Operators in programming are special symbols that perform operations on variables and values. They are used to manipulate data and variables in various ways, such as performing arithmetic, comparison, and logical operations. Operators are a fundamental part of programming.</h3>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Arithmetic Operators</h3>
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto">
{`public class ArithmeticOperators {
    public static void main(String[] args) {
        int a = 10, b = 3;
        
        System.out.println("Addition: " + (a + b));       // 13
        System.out.println("Subtraction: " + (a - b));    // 7
        System.out.println("Multiplication: " + (a * b)); // 30
        System.out.println("Division: " + (a / b));       // 3
        System.out.println("Modulus: " + (a % b));        // 1
    }
}`}
            </pre>
          </div>
        </section>

        {/* Control Structures */}
        <section id="control" className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-3xl font-bold mb-6">4. Control Structures</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">If-Else Statements</h3>
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto">
{`public class IfElseExample {
    public static void main(String[] args) {
        int score = 85;
        
        if (score >= 90) {
            System.out.println("Grade: A");
        } else if (score >= 80) {
            System.out.println("Grade: B");
        } else {
            System.out.println("Grade: F");
        }
    }
}`}
            </pre>
          </div>
        </section>

        {/* Arrays */}
        <section id="arrays" className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-3xl font-bold mb-6">5. Arrays</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Array Examples</h3>
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto">
{`public class ArrayExample {
    public static void main(String[] args) {
        int[] numbers = {10, 20, 30, 40, 50};
        
        System.out.println("Array length: " + numbers.length);
        
        for (int num : numbers) {
            System.out.print(num + " ");
        }
    }
}`}
            </pre>
          </div>
        </section>

        {/* Methods */}
        <section id="methods" className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-3xl font-bold mb-6">6. Methods</h2>
          <p className="text-gray-700 mb-6">
            Methods are blocks of code that perform specific tasks. They help organize code, promote reusability, and make programs more modular.
          </p>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">Method Syntax</h3>
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto mb-4">
{`// Method syntax
accessModifier returnType methodName(parameters) {
    // method body
    return value; // if returnType is not void
}

// Examples:
public static int add(int a, int b) {
    return a + b;
}

public void displayMessage() {
    System.out.println("Hello World!");
}

private double calculateArea(double radius) {
    return Math.PI * radius * radius;
}`}
            </pre>
          </div>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-green-700">Method Types</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-blue-700">Static Methods</h4>
                <p className="text-sm text-gray-700">Belong to class, called without creating object</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-green-700">Instance Methods</h4>
                <p className="text-sm text-gray-700">Belong to object, require object creation</p>
              </div>
            </div>
            
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto mb-6">
{`public class MethodTypes {
    // Static method
    public static int multiply(int a, int b) {
        return a * b;
    }
    
    // Instance method
    public void greet(String name) {
        System.out.println("Hello, " + name + "!");
    }
    
    public static void main(String[] args) {
        // Calling static method
        int result = multiply(5, 3);
        System.out.println("Result: " + result);
        
        // Calling instance method
        MethodTypes obj = new MethodTypes();
        obj.greet("Alice");
    }
}`}
            </pre>
          </div>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-purple-700">Method Parameters</h3>
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto mb-6">
{`public class MethodParameters {
    // Method with no parameters
    public static void sayHello() {
        System.out.println("Hello!");
    }
    
    // Method with single parameter
    public static void printNumber(int num) {
        System.out.println("Number: " + num);
    }
    
    // Method with multiple parameters
    public static double calculateRectangleArea(double length, double width) {
        return length * width;
    }
    
    // Method with variable arguments (varargs)
    public static int sum(int... numbers) {
        int total = 0;
        for (int num : numbers) {
            total += num;
        }
        return total;
    }
    
    public static void main(String[] args) {
        sayHello();
        printNumber(42);
        
        double area = calculateRectangleArea(5.0, 3.0);
        System.out.println("Area: " + area);
        
        // Varargs examples
        System.out.println("Sum of 1,2,3: " + sum(1, 2, 3));
        System.out.println("Sum of 1,2,3,4,5: " + sum(1, 2, 3, 4, 5));
    }
}`}
            </pre>
          </div>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-red-700">Method Overloading</h3>
            <p className="text-gray-700 mb-4">Multiple methods with same name but different parameters.</p>
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto mb-6">
{`public class MethodOverloading {
    // Overloaded add methods
    public static int add(int a, int b) {
        return a + b;
    }
    
    public static double add(double a, double b) {
        return a + b;
    }
    
    public static int add(int a, int b, int c) {
        return a + b + c;
    }
    
    // Overloaded display methods
    public static void display(String message) {
        System.out.println("String: " + message);
    }
    
    public static void display(int number) {
        System.out.println("Integer: " + number);
    }
    
    public static void display(double number) {
        System.out.println("Double: " + number);
    }
    
    public static void main(String[] args) {
        System.out.println("add(5, 3): " + add(5, 3));
        System.out.println("add(5.5, 3.2): " + add(5.5, 3.2));
        System.out.println("add(1, 2, 3): " + add(1, 2, 3));
        
        display("Hello");
        display(42);
        display(3.14);
    }
}`}
            </pre>
          </div>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-orange-700">Recursive Methods</h3>
            <p className="text-gray-700 mb-4">Methods that call themselves to solve problems.</p>
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto">
{`public class RecursiveMethods {
    // Factorial calculation
    public static long factorial(int n) {
        if (n <= 1) {
            return 1; // Base case
        }
        return n * factorial(n - 1); // Recursive call
    }
    
    // Fibonacci sequence
    public static int fibonacci(int n) {
        if (n <= 1) {
            return n;
        }
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
    
    // Power calculation
    public static double power(double base, int exponent) {
        if (exponent == 0) {
            return 1;
        }
        if (exponent < 0) {
            return 1 / power(base, -exponent);
        }
        return base * power(base, exponent - 1);
    }
    
    public static void main(String[] args) {
        System.out.println("5! = " + factorial(5));
        System.out.println("Fibonacci(7) = " + fibonacci(7));
        System.out.println("2^3 = " + power(2, 3));
    }
}`}
            </pre>
          </div>
        </section>

        {/* OOP */}
        <section id="oop" className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-3xl font-bold mb-6">7. Object-Oriented Programming</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Classes and Objects</h3>
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto">
{`class Student {
    private String name;
    private int age;
    
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public void displayInfo() {
        System.out.println("Name: " + name + ", Age: " + age);
    }
}

public class OOPExample {
    public static void main(String[] args) {
        Student student = new Student("Alice", 20);
        student.displayInfo();
    }
}`}
            </pre>
          </div>
        </section>

        {/* Inheritance */}
        <section id="inheritance" className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-3xl font-bold mb-6">8. Inheritance</h2>
          <p className="text-gray-700 mb-6">
            Inheritance allows a class to inherit properties and methods from another class. It promotes code reusability and establishes an "is-a" relationship.
          </p>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">Basic Inheritance</h3>
            <p className="text-gray-700 mb-4">Child class inherits from parent class using the 'extends' keyword.</p>
            
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto mb-6">
{`// Parent class (Superclass)
class Animal {
    protected String name;
    protected int age;
    
    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public void eat() {
        System.out.println(name + " is eating");
    }
    
    public void sleep() {
        System.out.println(name + " is sleeping");
    }
    
    public void displayInfo() {
        System.out.println("Name: " + name + ", Age: " + age);
    }
}

// Child class (Subclass)
class Dog extends Animal {
    private String breed;
    
    public Dog(String name, int age, String breed) {
        super(name, age); // Call parent constructor
        this.breed = breed;
    }
    
    public void bark() {
        System.out.println(name + " is barking");
    }
    
    public void wagTail() {
        System.out.println(name + " is wagging tail");
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo(); // Call parent method
        System.out.println("Breed: " + breed);
    }
}

public class InheritanceExample {
    public static void main(String[] args) {
        Dog dog = new Dog("Buddy", 3, "Golden Retriever");
        
        // Inherited methods
        dog.eat();
        dog.sleep();
        
        // Own methods
        dog.bark();
        dog.wagTail();
        
        // Overridden method
        dog.displayInfo();
    }
}`}
            </pre>
          </div>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-green-700">Types of Inheritance</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-blue-700">Single Inheritance</h4>
                <p className="text-sm text-gray-700">One child class inherits from one parent class</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-green-700">Multilevel Inheritance</h4>
                <p className="text-sm text-gray-700">Chain of inheritance: A → B → C</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-purple-700">Hierarchical Inheritance</h4>
                <p className="text-sm text-gray-700">Multiple child classes inherit from one parent</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-red-700">Multiple Inheritance</h4>
                <p className="text-sm text-gray-700">Not supported in Java (use interfaces)</p>
              </div>
            </div>
            
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto mb-6">
{`// Multilevel Inheritance Example
class Vehicle {
    protected String brand;
    protected int year;
    
    public Vehicle(String brand, int year) {
        this.brand = brand;
        this.year = year;
    }
    
    public void start() {
        System.out.println(brand + " is starting");
    }
}

class Car extends Vehicle {
    protected int doors;
    
    public Car(String brand, int year, int doors) {
        super(brand, year);
        this.doors = doors;
    }
    
    public void drive() {
        System.out.println("Driving the " + brand);
    }
}

class SportsCar extends Car {
    private int topSpeed;
    
    public SportsCar(String brand, int year, int doors, int topSpeed) {
        super(brand, year, doors);
        this.topSpeed = topSpeed;
    }
    
    public void turboBoost() {
        System.out.println(brand + " activating turbo! Top speed: " + topSpeed + " mph");
    }
}

// Hierarchical Inheritance Example
class Shape {
    protected String color;
    
    public Shape(String color) {
        this.color = color;
    }
    
    public void display() {
        System.out.println("This is a " + color + " shape");
    }
}

class Circle extends Shape {
    private double radius;
    
    public Circle(String color, double radius) {
        super(color);
        this.radius = radius;
    }
    
    public double getArea() {
        return Math.PI * radius * radius;
    }
}

class Rectangle extends Shape {
    private double length, width;
    
    public Rectangle(String color, double length, double width) {
        super(color);
        this.length = length;
        this.width = width;
    }
    
    public double getArea() {
        return length * width;
    }
}`}
            </pre>
          </div>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-purple-700">Super Keyword</h3>
            <p className="text-gray-700 mb-4">Used to access parent class members and constructors.</p>
            
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto mb-6">
{`class Parent {
    protected String name = "Parent";
    
    public Parent() {
        System.out.println("Parent constructor called");
    }
    
    public Parent(String message) {
        System.out.println("Parent constructor: " + message);
    }
    
    public void display() {
        System.out.println("Parent display method");
    }
    
    public void greet() {
        System.out.println("Hello from Parent");
    }
}

class Child extends Parent {
    private String name = "Child";
    
    public Child() {
        super(); // Call parent default constructor
        System.out.println("Child constructor called");
    }
    
    public Child(String message) {
        super(message); // Call parent parameterized constructor
        System.out.println("Child constructor: " + message);
    }
    
    @Override
    public void display() {
        super.display(); // Call parent method
        System.out.println("Child display method");
    }
    
    public void showNames() {
        System.out.println("Child name: " + this.name);
        System.out.println("Parent name: " + super.name);
    }
    
    public void greet() {
        super.greet(); // Call parent greet
        System.out.println("Hello from Child");
    }
}

public class SuperKeywordExample {
    public static void main(String[] args) {
        Child child = new Child("Hello");
        child.display();
        child.showNames();
        child.greet();
    }
}`}
            </pre>
          </div>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-red-700">Method Overriding</h3>
            <p className="text-gray-700 mb-4">Child class provides specific implementation of parent class method.</p>
            
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto mb-6">
{`class Employee {
    protected String name;
    protected double baseSalary;
    
    public Employee(String name, double baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    
    public double calculateSalary() {
        return baseSalary;
    }
    
    public void displayInfo() {
        System.out.println("Employee: " + name + ", Salary: $" + calculateSalary());
    }
}

class Manager extends Employee {
    private double bonus;
    
    public Manager(String name, double baseSalary, double bonus) {
        super(name, baseSalary);
        this.bonus = bonus;
    }
    
    @Override
    public double calculateSalary() {
        return baseSalary + bonus;
    }
    
    @Override
    public void displayInfo() {
        System.out.println("Manager: " + name + ", Base: $" + baseSalary + 
                          ", Bonus: $" + bonus + ", Total: $" + calculateSalary());
    }
}

class Developer extends Employee {
    private double overtimePay;
    
    public Developer(String name, double baseSalary, double overtimePay) {
        super(name, baseSalary);
        this.overtimePay = overtimePay;
    }
    
    @Override
    public double calculateSalary() {
        return baseSalary + overtimePay;
    }
}

public class MethodOverridingExample {
    public static void main(String[] args) {
        Employee emp = new Employee("John", 50000);
        Manager mgr = new Manager("Alice", 70000, 15000);
        Developer dev = new Developer("Bob", 60000, 8000);
        
        emp.displayInfo();
        mgr.displayInfo();
        dev.displayInfo();
        
        // Polymorphic behavior
        Employee[] employees = {emp, mgr, dev};
        for (Employee e : employees) {
            System.out.println(e.name + "'s salary: $" + e.calculateSalary());
        }
    }
}`}
            </pre>
          </div>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-orange-700">Inheritance Benefits and Rules</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-green-700">Benefits</h4>
                <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                  <li>Code reusability</li>
                  <li>Method overriding</li>
                  <li>Runtime polymorphism</li>
                  <li>Hierarchical classification</li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-red-700">Rules</h4>
                <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                  <li>Single inheritance only</li>
                  <li>Private members not inherited</li>
                  <li>Constructors not inherited</li>
                  <li>Use super() for parent constructor</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Polymorphism */}
        <section id="polymorphism" className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-3xl font-bold mb-6">9. Polymorphism</h2>
          <p className="text-gray-700 mb-6">
            Polymorphism means "many forms". It allows objects of different types to be treated as objects of a common base type, with each type providing its own specific implementation.
          </p>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">Types of Polymorphism</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-blue-700">Compile-time Polymorphism</h4>
                <p className="text-sm text-gray-700">Method overloading, operator overloading</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-green-700">Runtime Polymorphism</h4>
                <p className="text-sm text-gray-700">Method overriding, dynamic method dispatch</p>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-green-700">Runtime Polymorphism</h3>
            <p className="text-gray-700 mb-4">Achieved through method overriding and inheritance. The actual method called is determined at runtime.</p>
            
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto mb-6">
{`// Base class
class Animal {
    public void makeSound() {
        System.out.println("Animal makes a sound");
    }
    
    public void move() {
        System.out.println("Animal moves");
    }
}

// Derived classes
class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Dog barks: Woof!");
    }
    
    @Override
    public void move() {
        System.out.println("Dog runs on four legs");
    }
}

class Cat extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Cat meows: Meow!");
    }
    
    @Override
    public void move() {
        System.out.println("Cat walks silently");
    }
}

class Bird extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Bird chirps: Tweet!");
    }
    
    @Override
    public void move() {
        System.out.println("Bird flies in the sky");
    }
}

public class PolymorphismExample {
    public static void main(String[] args) {
        // Polymorphic array
        Animal[] animals = {
            new Dog(),
            new Cat(),
            new Bird(),
            new Animal()
        };
        
        // Runtime polymorphism in action
        for (Animal animal : animals) {
            animal.makeSound(); // Calls overridden method
            animal.move();      // Calls overridden method
            System.out.println("---");
        }
        
        // Dynamic method dispatch
        Animal myPet;
        
        myPet = new Dog();
        myPet.makeSound(); // Calls Dog's makeSound()
        
        myPet = new Cat();
        myPet.makeSound(); // Calls Cat's makeSound()
    }
}`}
            </pre>
          </div>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-purple-700">Interface Polymorphism</h3>
            <p className="text-gray-700 mb-4">Polymorphism through interfaces allows unrelated classes to be treated uniformly.</p>
            
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto mb-6">
{`// Interface definition
interface Drawable {
    void draw();
    void resize(double factor);
}

interface Colorable {
    void setColor(String color);
    String getColor();
}

// Classes implementing interfaces
class Circle implements Drawable, Colorable {
    private double radius;
    private String color;
    
    public Circle(double radius, String color) {
        this.radius = radius;
        this.color = color;
    }
    
    @Override
    public void draw() {
        System.out.println("Drawing a " + color + " circle with radius " + radius);
    }
    
    @Override
    public void resize(double factor) {
        radius *= factor;
        System.out.println("Circle resized. New radius: " + radius);
    }
    
    @Override
    public void setColor(String color) {
        this.color = color;
    }
    
    @Override
    public String getColor() {
        return color;
    }
}

class Rectangle implements Drawable, Colorable {
    private double width, height;
    private String color;
    
    public Rectangle(double width, double height, String color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    
    @Override
    public void draw() {
        System.out.println("Drawing a " + color + " rectangle " + width + "x" + height);
    }
    
    @Override
    public void resize(double factor) {
        width *= factor;
        height *= factor;
        System.out.println("Rectangle resized. New dimensions: " + width + "x" + height);
    }
    
    @Override
    public void setColor(String color) {
        this.color = color;
    }
    
    @Override
    public String getColor() {
        return color;
    }
}

public class InterfacePolymorphismExample {
    public static void main(String[] args) {
        // Interface polymorphism
        Drawable[] shapes = {
            new Circle(5.0, "Red"),
            new Rectangle(4.0, 6.0, "Blue")
        };
        
        // Polymorphic behavior through interface
        for (Drawable shape : shapes) {
            shape.draw();
            shape.resize(1.5);
            
            // Check if shape is also Colorable
            if (shape instanceof Colorable) {
                Colorable colorableShape = (Colorable) shape;
                System.out.println("Current color: " + colorableShape.getColor());
                colorableShape.setColor("Green");
                System.out.println("New color: " + colorableShape.getColor());
            }
            System.out.println("---");
        }
    }
}`}
            </pre>
          </div>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-red-700">Method Overloading vs Overriding</h3>
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2">Aspect</th>
                    <th className="border border-gray-300 px-4 py-2">Method Overloading</th>
                    <th className="border border-gray-300 px-4 py-2">Method Overriding</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Definition</td>
                    <td className="border border-gray-300 px-4 py-2">Same method name, different parameters</td>
                    <td className="border border-gray-300 px-4 py-2">Child class redefines parent method</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Polymorphism Type</td>
                    <td className="border border-gray-300 px-4 py-2">Compile-time</td>
                    <td className="border border-gray-300 px-4 py-2">Runtime</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Inheritance</td>
                    <td className="border border-gray-300 px-4 py-2">Not required</td>
                    <td className="border border-gray-300 px-4 py-2">Required</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Method Signature</td>
                    <td className="border border-gray-300 px-4 py-2">Must be different</td>
                    <td className="border border-gray-300 px-4 py-2">Must be same</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto">
{`class Calculator {
    // Method Overloading Examples
    public int add(int a, int b) {
        return a + b;
    }
    
    public double add(double a, double b) {
        return a + b;
    }
    
    public int add(int a, int b, int c) {
        return a + b + c;
    }
    
    public String add(String a, String b) {
        return a + b;
    }
}

// Method Overriding Example
class Vehicle {
    public void start() {
        System.out.println("Vehicle is starting");
    }
}

class Car extends Vehicle {
    @Override
    public void start() {
        System.out.println("Car engine is starting");
    }
}

class Motorcycle extends Vehicle {
    @Override
    public void start() {
        System.out.println("Motorcycle is kick-starting");
    }
}

public class OverloadingVsOverriding {
    public static void main(String[] args) {
        // Method Overloading
        Calculator calc = new Calculator();
        System.out.println("Overloading examples:");
        System.out.println(calc.add(5, 3));
        System.out.println(calc.add(5.5, 3.2));
        System.out.println(calc.add(1, 2, 3));
        System.out.println(calc.add("Hello", "World"));
        
        // Method Overriding
        System.out.println("\nOverriding examples:");
        Vehicle[] vehicles = {new Vehicle(), new Car(), new Motorcycle()};
        for (Vehicle v : vehicles) {
            v.start(); // Calls overridden method
        }
    }
}`}
            </pre>
          </div>
        </section>

        {/* Encapsulation */}
        <section id="encapsulation" className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-3xl font-bold mb-6">10. Encapsulation</h2>
          <p className="text-gray-700 mb-6">
            Encapsulation is the bundling of data and methods that operate on that data within a single unit (class). It restricts direct access to some components and prevents accidental modification of data.
          </p>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">Data Hiding with Getters and Setters</h3>
            <p className="text-gray-700 mb-4">Private fields with public methods to control access.</p>
            
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto mb-6">
{`class BankAccount {
    private String accountNumber;
    private String accountHolder;
    private double balance;
    private String pin;
    
    public BankAccount(String accountNumber, String accountHolder, String pin) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.pin = pin;
        this.balance = 0.0;
    }
    
    // Getter methods
    public String getAccountNumber() {
        return accountNumber;
    }
    
    public String getAccountHolder() {
        return accountHolder;
    }
    
    public double getBalance() {
        return balance;
    }
    
    // Controlled setter methods
    public void setAccountHolder(String accountHolder) {
        if (accountHolder != null && !accountHolder.trim().isEmpty()) {
            this.accountHolder = accountHolder;
        }
    }
    
    public boolean changePin(String oldPin, String newPin) {
        if (this.pin.equals(oldPin) && newPin.length() == 4) {
            this.pin = newPin;
            return true;
        }
        return false;
    }
    
    // Business logic methods with validation
    public boolean deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: $" + amount);
            return true;
        }
        System.out.println("Invalid deposit amount");
        return false;
    }
    
    public boolean withdraw(double amount, String pin) {
        if (!this.pin.equals(pin)) {
            System.out.println("Invalid PIN");
            return false;
        }
        
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: $" + amount);
            return true;
        }
        
        System.out.println("Invalid withdrawal amount or insufficient funds");
        return false;
    }
    
    public void displayAccountInfo() {
        System.out.println("Account: " + accountNumber);
        System.out.println("Holder: " + accountHolder);
        System.out.println("Balance: $" + balance);
    }
}

public class EncapsulationExample {
    public static void main(String[] args) {
        BankAccount account = new BankAccount("12345", "John Doe", "1234");
        
        // Using encapsulated methods
        account.deposit(1000);
        account.withdraw(200, "1234");
        account.displayAccountInfo();
        
        // Trying to access private fields directly would cause compilation error
        // account.balance = 1000000; // This won't work!
        
        // Controlled access through methods
        System.out.println("Current balance: $" + account.getBalance());
        account.changePin("1234", "5678");
    }
}`}
            </pre>
          </div>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-green-700">Benefits of Encapsulation</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-green-700">Data Protection</h4>
                <p className="text-sm text-gray-700">Prevents unauthorized access and modification</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-blue-700">Flexibility</h4>
                <p className="text-sm text-gray-700">Can change internal implementation without affecting users</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-purple-700">Maintainability</h4>
                <p className="text-sm text-gray-700">Easier to maintain and debug code</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-red-700">Validation</h4>
                <p className="text-sm text-gray-700">Can validate data before setting values</p>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-purple-700">Real-world Example: Student Management</h3>
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto">
{`class Student {
    private String studentId;
    private String name;
    private int age;
    private double gpa;
    private String email;
    
    public Student(String studentId, String name, int age, String email) {
        this.studentId = studentId;
        setName(name);
        setAge(age);
        setEmail(email);
        this.gpa = 0.0;
    }
    
    // Getters
    public String getStudentId() { return studentId; }
    public String getName() { return name; }
    public int getAge() { return age; }
    public double getGpa() { return gpa; }
    public String getEmail() { return email; }
    
    // Validated setters
    public void setName(String name) {
        if (name != null && name.trim().length() >= 2) {
            this.name = name.trim();
        } else {
            throw new IllegalArgumentException("Name must be at least 2 characters");
        }
    }
    
    public void setAge(int age) {
        if (age >= 16 && age <= 100) {
            this.age = age;
        } else {
            throw new IllegalArgumentException("Age must be between 16 and 100");
        }
    }
    
    public void setEmail(String email) {
        if (email != null && email.contains("@") && email.contains(".")) {
            this.email = email.toLowerCase();
        } else {
            throw new IllegalArgumentException("Invalid email format");
        }
    }
    
    public void updateGpa(double gpa) {
        if (gpa >= 0.0 && gpa <= 4.0) {
            this.gpa = gpa;
        } else {
            throw new IllegalArgumentException("GPA must be between 0.0 and 4.0");
        }
    }
    
    // Computed properties
    public String getGradeLevel() {
        if (gpa >= 3.7) return "A";
        else if (gpa >= 3.3) return "B+";
        else if (gpa >= 3.0) return "B";
        else if (gpa >= 2.7) return "C+";
        else if (gpa >= 2.0) return "C";
        else return "F";
    }
    
    public boolean isHonorStudent() {
        return gpa >= 3.5;
    }
    
    @Override
    public String toString() {
        return String.format("Student[ID=%s, Name=%s, Age=%d, GPA=%.2f, Grade=%s]", 
                           studentId, name, age, gpa, getGradeLevel());
    }
}

public class StudentManagementExample {
    public static void main(String[] args) {
        try {
            Student student = new Student("S001", "Alice Johnson", 20, "alice@email.com");
            student.updateGpa(3.8);
            
            System.out.println(student);
            System.out.println("Honor Student: " + student.isHonorStudent());
            
            // Trying to set invalid data
            student.setAge(150); // This will throw an exception
            
        } catch (IllegalArgumentException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}`}
            </pre>
          </div>
        </section>

        {/* Abstraction */}
        <section id="abstraction" className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-3xl font-bold mb-6">11. Abstraction</h2>
          <p className="text-gray-700 mb-6">
            Abstraction hides complex implementation details and shows only essential features. It's achieved through abstract classes and interfaces.
          </p>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">Abstract Classes</h3>
            <p className="text-gray-700 mb-4">Classes that cannot be instantiated and may contain abstract methods.</p>
            
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto mb-6">
{`// Abstract class
abstract class Shape {
    protected String color;
    
    public Shape(String color) {
        this.color = color;
    }
    
    // Concrete method
    public void displayColor() {
        System.out.println("Color: " + color);
    }
    
    // Abstract methods - must be implemented by subclasses
    public abstract double calculateArea();
    public abstract void draw();
}

// Concrete implementation
class Circle extends Shape {
    private double radius;
    
    public Circle(String color, double radius) {
        super(color);
        this.radius = radius;
    }
    
    @Override
    public double calculateArea() {
        return Math.PI * radius * radius;
    }
    
    @Override
    public void draw() {
        System.out.println("Drawing a " + color + " circle");
    }
}

class Rectangle extends Shape {
    private double width, height;
    
    public Rectangle(String color, double width, double height) {
        super(color);
        this.width = width;
        this.height = height;
    }
    
    @Override
    public double calculateArea() {
        return width * height;
    }
    
    @Override
    public void draw() {
        System.out.println("Drawing a " + color + " rectangle");
    }
}

public class AbstractExample {
    public static void main(String[] args) {
        // Cannot instantiate abstract class
        // Shape shape = new Shape(); // Error
        
        Shape circle = new Circle("Red", 5);
        Shape rectangle = new Rectangle("Blue", 4, 6);
        
        circle.displayColor();
        circle.draw();
        System.out.println("Area: " + circle.calculateArea());
        
        rectangle.displayColor();
        rectangle.draw();
        System.out.println("Area: " + rectangle.calculateArea());
    }
}`}
            </pre>
          </div>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-green-700">Interfaces</h3>
            <p className="text-gray-700 mb-4">Contracts that define what methods a class must implement.</p>
            
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto mb-6">
{`// Interface definitions
interface Drawable {
    void draw();
    void resize(double factor);
}

interface Movable {
    void move(int x, int y);
    void getPosition();
}

// Multiple interface implementation
class GameCharacter implements Drawable, Movable {
    private String name;
    private int x, y;
    private double size;
    
    public GameCharacter(String name, int x, int y, double size) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.size = size;
    }
    
    @Override
    public void draw() {
        System.out.println("Drawing " + name + " at (" + x + ", " + y + ")");
    }
    
    @Override
    public void resize(double factor) {
        size *= factor;
        System.out.println(name + " resized to " + size);
    }
    
    @Override
    public void move(int newX, int newY) {
        this.x = newX;
        this.y = newY;
        System.out.println(name + " moved to (" + x + ", " + y + ")");
    }
    
    @Override
    public void getPosition() {
        System.out.println(name + " is at (" + x + ", " + y + ")");
    }
}

public class InterfaceExample {
    public static void main(String[] args) {
        GameCharacter player = new GameCharacter("Hero", 0, 0, 1.0);
        
        player.draw();
        player.move(10, 20);
        player.resize(1.5);
        player.getPosition();
        
        // Polymorphism with interfaces
        Drawable drawable = player;
        drawable.draw();
        
        Movable movable = player;
        movable.move(30, 40);
    }
}`}
            </pre>
          </div>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-purple-700">Abstract Class vs Interface</h3>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2">Feature</th>
                    <th className="border border-gray-300 px-4 py-2">Abstract Class</th>
                    <th className="border border-gray-300 px-4 py-2">Interface</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Methods</td>
                    <td className="border border-gray-300 px-4 py-2">Abstract and concrete methods</td>
                    <td className="border border-gray-300 px-4 py-2">Only abstract methods (default in Java 8+)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Variables</td>
                    <td className="border border-gray-300 px-4 py-2">Instance variables allowed</td>
                    <td className="border border-gray-300 px-4 py-2">Only public static final constants</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Inheritance</td>
                    <td className="border border-gray-300 px-4 py-2">Single inheritance (extends)</td>
                    <td className="border border-gray-300 px-4 py-2">Multiple inheritance (implements)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Constructor</td>
                    <td className="border border-gray-300 px-4 py-2">Can have constructors</td>
                    <td className="border border-gray-300 px-4 py-2">Cannot have constructors</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-red-700">Real-world Example: Payment System</h3>
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto">
{`// Abstract class for common payment functionality
abstract class Payment {
    protected double amount;
    protected String currency;
    
    public Payment(double amount, String currency) {
        this.amount = amount;
        this.currency = currency;
    }
    
    // Concrete method
    public void displayAmount() {
        System.out.println("Amount: " + amount + " " + currency);
    }
    
    // Abstract methods
    public abstract boolean processPayment();
    public abstract void sendConfirmation();
}

// Interface for refundable payments
interface Refundable {
    boolean refund(double amount);
    double getRefundableAmount();
}

// Concrete implementations
class CreditCardPayment extends Payment implements Refundable {
    private String cardNumber;
    
    public CreditCardPayment(double amount, String currency, String cardNumber) {
        super(amount, currency);
        this.cardNumber = cardNumber;
    }
    
    @Override
    public boolean processPayment() {
        System.out.println("Processing credit card payment");
        return true;
    }
    
    @Override
    public void sendConfirmation() {
        System.out.println("Credit card payment confirmation sent");
    }
    
    @Override
    public boolean refund(double refundAmount) {
        System.out.println("Refunding " + refundAmount + " to credit card");
        return true;
    }
    
    @Override
    public double getRefundableAmount() {
        return amount;
    }
}

class PayPalPayment extends Payment implements Refundable {
    private String email;
    
    public PayPalPayment(double amount, String currency, String email) {
        super(amount, currency);
        this.email = email;
    }
    
    @Override
    public boolean processPayment() {
        System.out.println("Processing PayPal payment");
        return true;
    }
    
    @Override
    public void sendConfirmation() {
        System.out.println("PayPal confirmation sent to " + email);
    }
    
    @Override
    public boolean refund(double refundAmount) {
        System.out.println("Refunding to PayPal account");
        return true;
    }
    
    @Override
    public double getRefundableAmount() {
        return amount * 0.95; // 5% processing fee
    }
}

public class PaymentSystemExample {
    public static void main(String[] args) {
        Payment[] payments = {
            new CreditCardPayment(100.0, "USD", "1234-5678"),
            new PayPalPayment(75.0, "EUR", "user@email.com")
        };
        
        for (Payment payment : payments) {
            payment.displayAmount();
            payment.processPayment();
            payment.sendConfirmation();
            
            if (payment instanceof Refundable) {
                Refundable refundablePayment = (Refundable) payment;
                System.out.println("Refundable: " + refundablePayment.getRefundableAmount());
            }
            System.out.println("---");
        }
    }
}`}
            </pre>
          </div>
        </section>

        {/* Exception Handling */}
        <section id="exceptions" className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-3xl font-bold mb-6">12. Exception Handling</h2>
          <p className="text-gray-700 mb-6">
            Exception handling allows programs to handle runtime errors gracefully without crashing. It provides a way to catch and handle exceptional situations.
          </p>
          <p>
            <h1>What is an Exception?
            An exception is an unwanted or unexpected event that occurs during the execution of a program, disrupting the normal flow of instructions.</h1>

            <b>For example:</b>

            Dividing a number by zero.

            Accessing an invalid array index.

            File not found during read/write.


          </p>
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">Exception Hierarchy</h3>
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2">Exception Class Hierarchy:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li><strong>Throwable</strong> - Root class for all exceptions</li>
                <li><strong>Exception</strong> - Checked exceptions (must be handled)</li>
                <li><strong>RuntimeException</strong> - Unchecked exceptions</li>
                <li><strong>Error</strong> - System-level errors (not handled by programs)</li>
              </ul>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-green-700">Try-Catch-Finally</h3>
            <p className="text-gray-700 mb-4">Basic exception handling structure with try, catch, and finally blocks.</p>
            
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto mb-6">
{`public class ExceptionHandling {
    public static void main(String[] args) {
        try {
            // Code that might throw an exception
            int[] arr = {1, 2, 3};
            System.out.println(arr[5]); // ArrayIndexOutOfBoundsException
            
            int result = 10 / 0; // ArithmeticException
            
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Array index out of bounds: " + e.getMessage());
            
        } catch (ArithmeticException e) {
            System.out.println("Arithmetic error: " + e.getMessage());
            
        } catch (Exception e) {
            // Generic catch block for any other exception
            System.out.println("General exception: " + e.getMessage());
            
        } finally {
            // This block always executes
            System.out.println("Finally block executed");
        }
        
        System.out.println("Program continues...");
    }
}`}
            </pre>
          </div>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-purple-700">Checked vs Unchecked Exceptions</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-red-700">Checked Exceptions</h4>
                <p className="text-sm text-gray-700 mb-2">Must be handled at compile time</p>
                <ul className="text-xs text-gray-600 list-disc list-inside">
                  <li>IOException</li>
                  <li>SQLException</li>
                  <li>ClassNotFoundException</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-orange-700">Unchecked Exceptions</h4>
                <p className="text-sm text-gray-700 mb-2">Runtime exceptions, optional to handle</p>
                <ul className="text-xs text-gray-600 list-disc list-inside">
                  <li>NullPointerException</li>
                  <li>ArrayIndexOutOfBoundsException</li>
                  <li>IllegalArgumentException</li>
                </ul>
              </div>
            </div>
            
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto mb-6">
{`import java.io.*;

public class CheckedVsUnchecked {
    public static void main(String[] args) {
        // Checked Exception - Must be handled
        try {
            FileReader file = new FileReader("nonexistent.txt");
            BufferedReader reader = new BufferedReader(file);
            String line = reader.readLine();
            reader.close();
        } catch (IOException e) {
            System.out.println("File not found: " + e.getMessage());
        }
        
        // Unchecked Exception - Optional to handle
        try {
            String str = null;
            int length = str.length(); // NullPointerException
        } catch (NullPointerException e) {
            System.out.println("Null pointer exception: " + e.getMessage());
        }
        
        // Multiple exceptions in one catch (Java 7+)
        try {
            int[] arr = new int[5];
            arr[10] = 50;
            int result = 10 / 0;
        } catch (ArrayIndexOutOfBoundsException | ArithmeticException e) {
            System.out.println("Multiple exception handling: " + e.getMessage());
        }
    }
}`}
            </pre>
          </div>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-red-700">Throws and Throw Keywords</h3>
            <p className="text-gray-700 mb-4">Using throws to declare exceptions and throw to manually throw exceptions.</p>
            
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto mb-6">
{`public class ThrowsAndThrow {
    
    // Method declares it might throw an exception
    public static void validateAge(int age) throws IllegalArgumentException {
        if (age < 0 || age > 150) {
            throw new IllegalArgumentException("Age must be between 0 and 150");
        }
        System.out.println("Valid age: " + age);
    }
    
    // Method that throws checked exception
    public static void readFile(String filename) throws IOException {
        FileReader file = new FileReader(filename);
        // File operations
        file.close();
    }
    
    // Method with multiple exceptions
    public static void processData(String data) throws IOException, NumberFormatException {
        if (data == null) {
            throw new IOException("Data cannot be null");
        }
        
        int number = Integer.parseInt(data); // Can throw NumberFormatException
        System.out.println("Processed number: " + number);
    }
    
    public static void main(String[] args) {
        // Handling thrown exceptions
        try {
            validateAge(25);  // Valid
            validateAge(-5);  // Throws exception
        } catch (IllegalArgumentException e) {
            System.out.println("Age validation error: " + e.getMessage());
        }
        
        try {
            readFile("test.txt");
        } catch (IOException e) {
            System.out.println("File error: " + e.getMessage());
        }
        
        try {
            processData("123");    // Valid
            processData("abc");    // NumberFormatException
        } catch (IOException | NumberFormatException e) {
            System.out.println("Processing error: " + e.getMessage());
        }
    }
}`}
            </pre>
          </div>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-orange-700">Custom Exceptions</h3>
            <p className="text-gray-700 mb-4">Creating your own exception classes for specific error conditions.</p>
            
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto mb-6">
{`// Custom checked exception
class InsufficientFundsException extends Exception {
    private double amount;
    
    public InsufficientFundsException(double amount) {
        super("Insufficient funds. Required: $" + amount);
        this.amount = amount;
    }
    
    public double getAmount() {
        return amount;
    }
}

// Custom unchecked exception
class InvalidAccountException extends RuntimeException {
    public InvalidAccountException(String message) {
        super(message);
    }
}

class BankAccount {
    private String accountNumber;
    private double balance;
    
    public BankAccount(String accountNumber, double initialBalance) {
        if (accountNumber == null || accountNumber.length() < 5) {
            throw new InvalidAccountException("Account number must be at least 5 characters");
        }
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }
    
    public void withdraw(double amount) throws InsufficientFundsException {
        if (amount > balance) {
            throw new InsufficientFundsException(amount - balance);
        }
        balance -= amount;
        System.out.println("Withdrawn: $" + amount + ", Balance: $" + balance);
    }
    
    public void deposit(double amount) {
        if (amount <= 0) {
            throw new IllegalArgumentException("Deposit amount must be positive");
        }
        balance += amount;
        System.out.println("Deposited: $" + amount + ", Balance: $" + balance);
    }
    
    public double getBalance() {
        return balance;
    }
}

public class CustomExceptionExample {
    public static void main(String[] args) {
        try {
            BankAccount account = new BankAccount("ACC123456", 1000.0);
            
            account.deposit(500.0);
            account.withdraw(800.0);
            account.withdraw(1000.0); // This will throw InsufficientFundsException
            
        } catch (InsufficientFundsException e) {
            System.out.println("Transaction failed: " + e.getMessage());
            System.out.println("Shortfall: $" + e.getAmount());
        } catch (InvalidAccountException e) {
            System.out.println("Account error: " + e.getMessage());
        } catch (IllegalArgumentException e) {
            System.out.println("Invalid input: " + e.getMessage());
        }
        
        // This will throw InvalidAccountException
        try {
            BankAccount invalidAccount = new BankAccount("123", 100.0);
        } catch (InvalidAccountException e) {
            System.out.println("Account creation failed: " + e.getMessage());
        }
    }
}`}
            </pre>
          </div>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-indigo-700">Try-with-Resources</h3>
            <p className="text-gray-700 mb-4">Automatic resource management for objects that implement AutoCloseable.</p>
            
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto mb-6">
{`import java.io.*;
import java.util.Scanner;

public class TryWithResources {
    
    // Traditional approach (verbose)
    public static void readFileTraditional(String filename) {
        FileReader file = null;
        BufferedReader reader = null;
        
        try {
            file = new FileReader(filename);
            reader = new BufferedReader(file);
            String line = reader.readLine();
            System.out.println("First line: " + line);
            
        } catch (IOException e) {
            System.out.println("Error reading file: " + e.getMessage());
        } finally {
            try {
                if (reader != null) reader.close();
                if (file != null) file.close();
            } catch (IOException e) {
                System.out.println("Error closing file: " + e.getMessage());
            }
        }
    }
    
    // Try-with-resources approach (clean)
    public static void readFileWithResources(String filename) {
        try (FileReader file = new FileReader(filename);
             BufferedReader reader = new BufferedReader(file)) {
            
            String line = reader.readLine();
            System.out.println("First line: " + line);
            
        } catch (IOException e) {
            System.out.println("Error reading file: " + e.getMessage());
        }
        // Resources automatically closed
    }
    
    // Multiple resources
    public static void copyFile(String source, String destination) {
        try (FileInputStream input = new FileInputStream(source);
             FileOutputStream output = new FileOutputStream(destination);
             Scanner scanner = new Scanner(input)) {
            
            while (scanner.hasNextLine()) {
                String line = scanner.nextLine();
                output.write((line + "\n").getBytes());
            }
            System.out.println("File copied successfully");
            
        } catch (IOException e) {
            System.out.println("Error copying file: " + e.getMessage());
        }
    }
    
    public static void main(String[] args) {
        readFileTraditional("test.txt");
        readFileWithResources("test.txt");
        copyFile("source.txt", "destination.txt");
    }
}`}
            </pre>
          </div>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-teal-700">Exception Handling Best Practices</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-green-700">Do's</h4>
                <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                  <li>Catch specific exceptions first</li>
                  <li>Use try-with-resources for AutoCloseable</li>
                  <li>Log exceptions with meaningful messages</li>
                  <li>Clean up resources in finally block</li>
                  <li>Create custom exceptions for business logic</li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-red-700">Don'ts</h4>
                <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                  <li>Don't catch and ignore exceptions</li>
                  <li>Don't use exceptions for control flow</li>
                  <li>Don't catch Exception or Throwable</li>
                  <li>Don't throw exceptions in finally block</li>
                  <li>Don't create unnecessary custom exceptions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Collections */}
        <section id="collections" className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-3xl font-bold mb-6">11. Collections Framework</h2>
          <p className="text-gray-700 mb-6">
            Java Collections Framework provides data structures to store and manipulate groups of objects efficiently.
          </p>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">HashMap - Detailed Implementation</h3>
            <p className="text-gray-700 mb-4">
              HashMap uses hash table for storage. It allows null values and keys, is not synchronized.
            </p>
            
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto mb-6">
{`import java.util.*;

public class HashMapExample {
    public static void main(String[] args) {
        // Creating HashMap
        HashMap<String, Integer> map = new HashMap<>();
        
        // Adding elements
        map.put("Apple", 100);
        map.put("Banana", 200);
        map.put("Orange", 150);
        map.put(null, 50); // null key allowed
        
        System.out.println("HashMap: " + map);
        
        // Accessing elements
        System.out.println("Apple price: " + map.get("Apple"));
        System.out.println("Contains Banana: " + map.containsKey("Banana"));
        
        // Iterating through HashMap
        for (Map.Entry<String, Integer> entry : map.entrySet()) {
            System.out.println(entry.getKey() + " = " + entry.getValue());
        }
        
        // HashMap methods
        System.out.println("Size: " + map.size());
        System.out.println("Keys: " + map.keySet());
        System.out.println("Values: " + map.values());
    }
}`}
            </pre>
          </div>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-green-700">TreeMap - Detailed Implementation</h3>
            <p className="text-gray-700 mb-4">
              TreeMap uses Red-Black tree. It maintains sorted order of keys and doesn't allow null keys.
            </p>
            
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto mb-6">
{`import java.util.*;

public class TreeMapExample {
    public static void main(String[] args) {
        // Creating TreeMap
        TreeMap<String, Integer> treeMap = new TreeMap<>();
        
        // Adding elements (will be sorted by keys)
        treeMap.put("Zebra", 100);
        treeMap.put("Apple", 200);
        treeMap.put("Mango", 150);
        treeMap.put("Banana", 180);
        
        System.out.println("TreeMap (sorted): " + treeMap);
        
        // NavigableMap methods
        System.out.println("First key: " + treeMap.firstKey());
        System.out.println("Last key: " + treeMap.lastKey());
        System.out.println("Higher key than 'Banana': " + treeMap.higherKey("Banana"));
        
        // SubMap operations
        System.out.println("SubMap from 'Banana' to 'Mango': " + 
                          treeMap.subMap("Banana", "Mango"));
        
        // Descending operations
        System.out.println("Descending KeySet: " + treeMap.descendingKeySet());
    }
}`}
            </pre>
          </div>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-purple-700">HashMap vs TreeMap Comparison</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2">Feature</th>
                    <th className="border border-gray-300 px-4 py-2">HashMap</th>
                    <th className="border border-gray-300 px-4 py-2">TreeMap</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Data Structure</td>
                    <td className="border border-gray-300 px-4 py-2">Hash Table</td>
                    <td className="border border-gray-300 px-4 py-2">Red-Black Tree</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Time Complexity</td>
                    <td className="border border-gray-300 px-4 py-2">O(1) average</td>
                    <td className="border border-gray-300 px-4 py-2">O(log n)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Ordering</td>
                    <td className="border border-gray-300 px-4 py-2">No ordering</td>
                    <td className="border border-gray-300 px-4 py-2">Sorted by keys</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Null Keys</td>
                    <td className="border border-gray-300 px-4 py-2">Allowed (one null key)</td>
                    <td className="border border-gray-300 px-4 py-2">Not allowed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Project 1 */}
        <section id="project1" className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-3xl font-bold mb-6">12. Project 1: Library Management System</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Project Overview</h3>
            <p className="text-gray-700 mb-4">
              A comprehensive library management system demonstrating OOP concepts.
            </p>
            
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto">
{`class Book {
    private String title;
    private String author;
    private boolean isAvailable;
    
    public Book(String title, String author) {
        this.title = title;
        this.author = author;
        this.isAvailable = true;
    }
    
    public String getTitle() { return title; }
    public boolean isAvailable() { return isAvailable; }
}`}
            </pre>
          </div>
        </section>

        {/* Project 2 */}
        <section id="project2" className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-3xl font-bold mb-6">14. Project 2: Banking System</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Project Overview</h3>
            <p className="text-gray-700 mb-4">
              Complete banking system demonstrating inheritance, polymorphism, abstraction, and exception handling.
            </p>
            
            <div className="bg-green-50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2">Features:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Multiple account types (Savings, Checking, Credit)</li>
                <li>Customer management</li>
                <li>Transaction processing</li>
                <li>Interest calculation</li>
                <li>Account statements and reports</li>
              </ul>
            </div>
            
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto mb-6">
{`import java.util.*;
import java.time.*;
import java.time.format.DateTimeFormatter;

// Custom Exceptions
class InsufficientFundsException extends Exception {
    public InsufficientFundsException(String message) {
        super(message);
    }
}

class InvalidAmountException extends Exception {
    public InvalidAmountException(String message) {
        super(message);
    }
}

class AccountNotFoundException extends Exception {
    public AccountNotFoundException(String message) {
        super(message);
    }
}

// Transaction class
class Transaction {
    private String transactionId;
    private String type;
    private double amount;
    private LocalDateTime timestamp;
    private double balanceAfter;
    
    public Transaction(String type, double amount, double balanceAfter) {
        this.transactionId = "TXN" + System.currentTimeMillis();
        this.type = type;
        this.amount = amount;
        this.balanceAfter = balanceAfter;
        this.timestamp = LocalDateTime.now();
    }
    
    @Override
    public String toString() {
        return String.format("%s | %s | $%.2f | Balance: $%.2f | %s",
                           transactionId, type, amount, balanceAfter,
                           timestamp.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")));
    }
    
    // Getters
    public String getTransactionId() { return transactionId; }
    public String getType() { return type; }
    public double getAmount() { return amount; }
    public LocalDateTime getTimestamp() { return timestamp; }
    public double getBalanceAfter() { return balanceAfter; }
}

// Abstract Account class
abstract class Account {
    protected String accountNumber;
    protected String customerName;
    protected double balance;
    protected List<Transaction> transactions;
    protected LocalDate dateOpened;
    
    public Account(String accountNumber, String customerName, double initialBalance) {
        this.accountNumber = accountNumber;
        this.customerName = customerName;
        this.balance = initialBalance;
        this.transactions = new ArrayList<>();
        this.dateOpened = LocalDate.now();
        
        if (initialBalance > 0) {
            transactions.add(new Transaction("INITIAL_DEPOSIT", initialBalance, balance));
        }
    }
    
    // Abstract methods
    public abstract void deposit(double amount) throws InvalidAmountException;
    public abstract void withdraw(double amount) throws InsufficientFundsException, InvalidAmountException;
    public abstract double calculateInterest();
    public abstract String getAccountType();
    
    // Concrete methods
    public String getAccountNumber() { return accountNumber; }
    public String getCustomerName() { return customerName; }
    public double getBalance() { return balance; }
    public List<Transaction> getTransactions() { return transactions; }
    public LocalDate getDateOpened() { return dateOpened; }
    
    protected void addTransaction(String type, double amount) {
        transactions.add(new Transaction(type, amount, balance));
    }
    
    public void printStatement() {
        System.out.println("\n=== ACCOUNT STATEMENT ===");
        System.out.println("Account: " + accountNumber + " (" + getAccountType() + ")");
        System.out.println("Customer: " + customerName);
        System.out.println("Current Balance: $" + String.format("%.2f", balance));
        System.out.println("Date Opened: " + dateOpened);
        System.out.println("\n--- TRANSACTIONS ---");
        for (Transaction t : transactions) {
            System.out.println(t);
        }
        System.out.println("========================\n");
    }
}`}
            </pre>
            
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto mb-6">
{`// Savings Account
class SavingsAccount extends Account {
    private static final double MIN_BALANCE = 100.0;
    private static final double INTEREST_RATE = 0.03; // 3% annual
    private static final double WITHDRAWAL_LIMIT = 1000.0;
    
    public SavingsAccount(String accountNumber, String customerName, double initialBalance) {
        super(accountNumber, customerName, initialBalance);
    }
    
    @Override
    public void deposit(double amount) throws InvalidAmountException {
        if (amount <= 0) {
            throw new InvalidAmountException("Deposit amount must be positive");
        }
        balance += amount;
        addTransaction("DEPOSIT", amount);
        System.out.println("Deposited $" + amount + " to Savings Account");
    }
    
    @Override
    public void withdraw(double amount) throws InsufficientFundsException, InvalidAmountException {
        if (amount <= 0) {
            throw new InvalidAmountException("Withdrawal amount must be positive");
        }
        if (amount > WITHDRAWAL_LIMIT) {
            throw new InvalidAmountException("Withdrawal limit exceeded. Max: $" + WITHDRAWAL_LIMIT);
        }
        if (balance - amount < MIN_BALANCE) {
            throw new InsufficientFundsException("Insufficient funds. Minimum balance required: $" + MIN_BALANCE);
        }
        balance -= amount;
        addTransaction("WITHDRAWAL", amount);
        System.out.println("Withdrawn $" + amount + " from Savings Account");
    }
    
    @Override
    public double calculateInterest() {
        return balance * INTEREST_RATE / 12; // Monthly interest
    }
    
    @Override
    public String getAccountType() {
        return "SAVINGS";
    }
}

// Checking Account
class CheckingAccount extends Account {
    private static final double OVERDRAFT_LIMIT = 500.0;
    private static final double OVERDRAFT_FEE = 35.0;
    private static final double MONTHLY_FEE = 10.0;
    
    public CheckingAccount(String accountNumber, String customerName, double initialBalance) {
        super(accountNumber, customerName, initialBalance);
    }
    
    @Override
    public void deposit(double amount) throws InvalidAmountException {
        if (amount <= 0) {
            throw new InvalidAmountException("Deposit amount must be positive");
        }
        balance += amount;
        addTransaction("DEPOSIT", amount);
        System.out.println("Deposited $" + amount + " to Checking Account");
    }
    
    @Override
    public void withdraw(double amount) throws InsufficientFundsException, InvalidAmountException {
        if (amount <= 0) {
            throw new InvalidAmountException("Withdrawal amount must be positive");
        }
        
        if (balance >= amount) {
            // Normal withdrawal
            balance -= amount;
            addTransaction("WITHDRAWAL", amount);
        } else if (balance + OVERDRAFT_LIMIT >= amount) {
            // Overdraft withdrawal
            balance -= amount;
            balance -= OVERDRAFT_FEE;
            addTransaction("WITHDRAWAL", amount);
            addTransaction("OVERDRAFT_FEE", OVERDRAFT_FEE);
            System.out.println("Overdraft fee of $" + OVERDRAFT_FEE + " applied");
        } else {
            throw new InsufficientFundsException("Insufficient funds including overdraft limit");
        }
        
        System.out.println("Withdrawn $" + amount + " from Checking Account");
    }
    
    public void applyMonthlyFee() {
        balance -= MONTHLY_FEE;
        addTransaction("MONTHLY_FEE", MONTHLY_FEE);
        System.out.println("Monthly fee of $" + MONTHLY_FEE + " applied");
    }
    
    @Override
    public double calculateInterest() {
        return 0.0; // No interest on checking accounts
    }
    
    @Override
    public String getAccountType() {
        return "CHECKING";
    }
}

// Credit Account
class CreditAccount extends Account {
    private double creditLimit;
    private static final double INTEREST_RATE = 0.18; // 18% annual
    private static final double MIN_PAYMENT_RATE = 0.02; // 2% of balance
    
    public CreditAccount(String accountNumber, String customerName, double creditLimit) {
        super(accountNumber, customerName, 0.0);
        this.creditLimit = creditLimit;
    }
    
    @Override
    public void deposit(double amount) throws InvalidAmountException {
        if (amount <= 0) {
            throw new InvalidAmountException("Payment amount must be positive");
        }
        balance -= amount; // Credit accounts have negative balance for debt
        addTransaction("PAYMENT", amount);
        System.out.println("Payment of $" + amount + " applied to Credit Account");
    }
    
    @Override
    public void withdraw(double amount) throws InsufficientFundsException, InvalidAmountException {
        if (amount <= 0) {
            throw new InvalidAmountException("Charge amount must be positive");
        }
        if (balance + amount > creditLimit) {
            throw new InsufficientFundsException("Credit limit exceeded");
        }
        balance += amount;
        addTransaction("CHARGE", amount);
        System.out.println("Charged $" + amount + " to Credit Account");
    }
    
    @Override
    public double calculateInterest() {
        return balance > 0 ? balance * INTEREST_RATE / 12 : 0.0;
    }
    
    public double getMinimumPayment() {
        return balance > 0 ? Math.max(25.0, balance * MIN_PAYMENT_RATE) : 0.0;
    }
    
    public double getAvailableCredit() {
        return creditLimit - balance;
    }
    
    @Override
    public String getAccountType() {
        return "CREDIT";
    }
    
    public double getCreditLimit() { return creditLimit; }
}`}
            </pre>
            
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto">
{`// Banking System
class BankingSystem {
    private Map<String, Account> accounts;
    private int accountCounter;
    
    public BankingSystem() {
        accounts = new HashMap<>();
        accountCounter = 1000;
    }
    
    public String createSavingsAccount(String customerName, double initialDeposit) {
        String accountNumber = "SAV" + (++accountCounter);
        Account account = new SavingsAccount(accountNumber, customerName, initialDeposit);
        accounts.put(accountNumber, account);
        System.out.println("Savings account created: " + accountNumber);
        return accountNumber;
    }
    
    public String createCheckingAccount(String customerName, double initialDeposit) {
        String accountNumber = "CHK" + (++accountCounter);
        Account account = new CheckingAccount(accountNumber, customerName, initialDeposit);
        accounts.put(accountNumber, account);
        System.out.println("Checking account created: " + accountNumber);
        return accountNumber;
    }
    
    public String createCreditAccount(String customerName, double creditLimit) {
        String accountNumber = "CRD" + (++accountCounter);
        Account account = new CreditAccount(accountNumber, customerName, creditLimit);
        accounts.put(accountNumber, account);
        System.out.println("Credit account created: " + accountNumber);
        return accountNumber;
    }
    
    public Account getAccount(String accountNumber) throws AccountNotFoundException {
        Account account = accounts.get(accountNumber);
        if (account == null) {
            throw new AccountNotFoundException("Account not found: " + accountNumber);
        }
        return account;
    }
    
    public void transfer(String fromAccount, String toAccount, double amount) 
            throws AccountNotFoundException, InsufficientFundsException, InvalidAmountException {
        
        Account from = getAccount(fromAccount);
        Account to = getAccount(toAccount);
        
        from.withdraw(amount);
        to.deposit(amount);
        
        System.out.println("Transferred $" + amount + " from " + fromAccount + " to " + toAccount);
    }
    
    public void applyInterestToAllAccounts() {
        System.out.println("\n=== Applying Monthly Interest ===");
        for (Account account : accounts.values()) {
            double interest = account.calculateInterest();
            if (interest > 0) {
                try {
                    account.deposit(interest);
                    System.out.println("Interest applied to " + account.getAccountNumber() + ": $" + 
                                     String.format("%.2f", interest));
                } catch (InvalidAmountException e) {
                    System.out.println("Error applying interest: " + e.getMessage());
                }
            }
        }
    }
    
    public void generateMonthlyReport() {
        System.out.println("\n=== MONTHLY BANK REPORT ===");
        double totalDeposits = 0;
        int savingsCount = 0, checkingCount = 0, creditCount = 0;
        
        for (Account account : accounts.values()) {
            System.out.println(account.getAccountNumber() + " (" + account.getAccountType() + ") - " +
                             account.getCustomerName() + " - Balance: $" + 
                             String.format("%.2f", account.getBalance()));
            
            totalDeposits += account.getBalance();
            
            switch (account.getAccountType()) {
                case "SAVINGS": savingsCount++; break;
                case "CHECKING": checkingCount++; break;
                case "CREDIT": creditCount++; break;
            }
        }
        
        System.out.println("\nSummary:");
        System.out.println("Total Accounts: " + accounts.size());
        System.out.println("Savings: " + savingsCount + ", Checking: " + checkingCount + ", Credit: " + creditCount);
        System.out.println("Total Deposits: $" + String.format("%.2f", totalDeposits));
        System.out.println("===========================\n");
    }
}

// Main Banking Application
public class BankingSystemApp {
    public static void main(String[] args) {
        BankingSystem bank = new BankingSystem();
        
        try {
            // Create accounts
            String savings1 = bank.createSavingsAccount("Alice Johnson", 1000.0);
            String checking1 = bank.createCheckingAccount("Bob Smith", 500.0);
            String credit1 = bank.createCreditAccount("Charlie Brown", 2000.0);
            
            // Perform transactions
            Account aliceAccount = bank.getAccount(savings1);
            aliceAccount.deposit(200.0);
            aliceAccount.withdraw(150.0);
            
            Account bobAccount = bank.getAccount(checking1);
            bobAccount.withdraw(600.0); // This will trigger overdraft
            
            Account charlieAccount = bank.getAccount(credit1);
            charlieAccount.withdraw(500.0); // Charge to credit
            charlieAccount.deposit(100.0);  // Payment
            
            // Transfer money
            bank.transfer(savings1, checking1, 300.0);
            
            // Print statements
            aliceAccount.printStatement();
            bobAccount.printStatement();
            charlieAccount.printStatement();
            
            // Apply interest
            bank.applyInterestToAllAccounts();
            
            // Generate report
            bank.generateMonthlyReport();
            
        } catch (AccountNotFoundException | InsufficientFundsException | InvalidAmountException e) {
            System.out.println("Banking Error: " + e.getMessage());
        }
    }
}`}
            </pre>
          </div>
        </section>

        {/* Practice Questions */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-3xl font-bold mb-6">100 Java Practice Questions</h2>
          
          <div className="mb-6">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
              <p className="text-yellow-800">
                <strong>Instructions:</strong> Try to answer these questions on your own before checking the answers. 
                Questions are organized by difficulty level and topic.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Question Categories:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Basic Syntax (Questions 1-20)</li>
                  <li>OOP Concepts (Questions 21-40)</li>
                  <li>Exception Handling (Questions 41-50)</li>
                  <li>Collections (Questions 51-70)</li>
                  <li>Advanced Topics (Questions 71-90)</li>
                  <li>Practical Problems (Questions 91-100)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Difficulty Levels:</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                    <span className="text-gray-700">Beginner (Questions 1-40)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></span>
                    <span className="text-gray-700">Intermediate (Questions 41-80)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-4 h-4 bg-red-500 rounded-full mr-2"></span>
                    <span className="text-gray-700">Advanced (Questions 81-100)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Questions Section */}
          <div className="space-y-6">
            <div className="bg-green-50 border-l-4 border-green-500 p-4">
              <h3 className="text-lg font-semibold text-green-800 mb-3">Basic Syntax Questions (1-20)</h3>
              <div className="space-y-3 text-sm">
                <div className="bg-white p-3 rounded">
                  <p><strong>1.</strong> What is the difference between JDK, JRE, and JVM?</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p><strong>2.</strong> What are the primitive data types in Java?</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p><strong>3.</strong> What is the difference between == and .equals() method?</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p><strong>4.</strong> What is autoboxing and unboxing in Java?</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p><strong>5.</strong> What is the difference between String, StringBuilder, and StringBuffer?</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Congratulations! 🎉</h2>
          <p className="text-xl mb-4">
            You've completed the comprehensive Java programming guide with two major projects!
          </p>
          
          {/* Navigation Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link 
              to="/courses" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              <FaGraduationCap /> Explore More Courses
            </Link>
            <Link 
              to="/advanced-java" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              Continue to Advanced Java
            </Link>
            <Link 
              to="/projects" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold"
            >
              View My Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JavaProgramming;