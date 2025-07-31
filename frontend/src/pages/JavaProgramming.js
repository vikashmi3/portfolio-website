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
  FaChevronUp,
  FaDownload,
  FaProjectDiagram,

  FaLaptopCode
} from 'react-icons/fa';

const JavaProgramming = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('syllabus');
  const [expandedExample, setExpandedExample] = useState(null);
  const [showTheory, setShowTheory] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const courseDetails = {
    name: "Java Programming",
    description: "Complete Java development course covering OOP principles, collections, multithreading, and exception handling.",
    fullDescription: "Master Java programming from basics to advanced enterprise development. Learn object-oriented programming, collections framework, multithreading, exception handling, and modern Java features. Build real-world applications with best practices.",
    duration: "12 weeks",
    level: "Beginner",
    instructor: "Dr. Jennifer Smith",
    introduction: {
      overview: "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let application developers write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.",
      history: [
        "1991 - James Gosling, Mike Sheridan, and Patrick Naughton initiated the Java language project",
        "1995 - Sun Microsystems released Java 1.0 with the promise of Write Once, Run Anywhere",
        "1997 - Java 1.1 was released with many new features including inner classes, JavaBeans, JDBC, RMI",
        "1998 - Java 2 (J2SE 1.2) introduced Swing API, Collections framework, and JIT compiler",
        "2000 - J2SE 1.3 brought HotSpot JVM, JavaSound, JNDI",
        "2002 - J2SE 1.4 introduced assert keyword, regular expressions, exception chaining",
        "2004 - J2SE 5.0 added generics, metadata annotations, autoboxing, enumerations",
        "2006 - Java SE 6 brought scripting language support, JDBC 4.0",
        "2011 - Java SE 7 introduced try-with-resources, diamond operator, strings in switch",
        "2014 - Java SE 8 brought lambda expressions, stream API, default methods",
        "2017 - Java SE 9 introduced modules, JShell, private methods in interfaces",
        "2018 - Java SE 10 added local variable type inference (var keyword)",
        "2018 - Java SE 11 LTS brought HTTP client API, string methods",
        "2019 - Java SE 12 introduced switch expressions (preview)",
        "2019 - Java SE 13 brought text blocks (preview)",
        "2020 - Java SE 14 added pattern matching for instanceof (preview)",
        "2020 - Java SE 15 brought sealed classes (preview)",
        "2021 - Java SE 16 added records, pattern matching for instanceof",
        "2021 - Java SE 17 LTS introduced sealed classes, pattern matching enhancements"
      ],
      features: [
        "Simple - Java syntax is based on C++ but simplified and improved",
        "Object-Oriented - Everything in Java is an object except primitive data types",
        "Platform Independent - Java bytecode can run on any platform with JVM",
        "Secure - Java provides security features like bytecode verification, secure class loading",
        "Robust - Strong memory management, exception handling, type checking",
        "Architecture Neutral - Java compiler generates bytecode that is architecture neutral",
        "Portable - Java programs can be easily moved from one platform to another",
        "Dynamic - Java supports dynamic loading of classes and interfaces",
        "Interpreted - Java bytecode is interpreted by JVM at runtime",
        "High Performance - Just-In-Time (JIT) compiler improves performance",
        "Multithreaded - Java supports multithreaded programming for concurrent execution",
        "Distributed - Java supports distributed computing through RMI, EJB"
      ],
      architecture: {
        jvm: {
          title: "Java Virtual Machine (JVM)",
          description: "JVM is a runtime environment that executes Java bytecode. It provides platform independence by abstracting the underlying operating system.",
          components: [
            "Class Loader Subsystem - Loads, links and initializes classes and interfaces",
            "Runtime Data Areas - Memory areas used during program execution",
            "Execution Engine - Executes the bytecode instructions",
            "Native Method Interface - Interface to native method libraries",
            "Native Method Libraries - Libraries written in other languages like C, C++"
          ],
          memoryAreas: [
            "Method Area - Stores class-level data like class definitions, method definitions, constant pool",
            "Heap Area - Stores objects and instance variables, divided into Young and Old generation",
            "Stack Area - Stores method call frames, local variables, and partial results",
            "PC (Program Counter) Register - Stores address of currently executing instruction",
            "Native Method Stack - Stores native method information"
          ]
        },
        jre: {
          title: "Java Runtime Environment (JRE)",
          description: "JRE provides the runtime environment in which Java bytecode can be executed. It includes JVM and core libraries.",
          components: [
            "Java Virtual Machine (JVM)",
            "Core Libraries (java.lang, java.util, java.io, etc.)",
            "Supporting Files (property files, resource files)"
          ]
        },
        jdk: {
          title: "Java Development Kit (JDK)",
          description: "JDK is a software development environment used for developing Java applications. It includes JRE plus development tools.",
          tools: [
            "javac - Java compiler that converts source code to bytecode",
            "java - Java interpreter that executes Java applications",
            "javadoc - Documentation generator for Java source code",
            "jar - Archive tool for packaging Java applications",
            "jdb - Java debugger for debugging Java programs",
            "javap - Class file disassembler",
            "jconsole - JVM monitoring and management console",
            "jvisualvm - Visual profiling tool"
          ]
        }
      },
      keyFeatures: [
        "Write Once, Run Anywhere (WORA) - Platform independence through bytecode",
        "Object-Oriented Programming - Encapsulation, Inheritance, Polymorphism, Abstraction",
        "Automatic Memory Management - Garbage collection handles memory allocation/deallocation",
        "Strong Type System - Static type checking at compile time",
        "Rich Standard Library - Comprehensive API for common programming tasks",
        "Multithreading Support - Built-in concurrency and parallel programming",
        "Security Features - Bytecode verification, secure class loading, sandboxing",
        "Exception Handling - Robust error handling mechanism with try-catch-finally",
        "Dynamic Loading - Classes loaded on demand at runtime",
        "Reflection API - Inspect and modify program behavior at runtime",
        "Networking Support - Built-in support for network programming",
        "Database Connectivity - JDBC for database operations"
      ],
      dataTypes: {
        primitive: {
          title: "Primitive Data Types",
          description: "Java has 8 primitive data types that are predefined by the language and named by a reserved keyword.",
          types: [
            {
              name: "byte",
              size: "8-bit",
              range: "-128 to 127",
              defaultValue: "0",
              example: "byte b = 100;"
            },
            {
              name: "short",
              size: "16-bit",
              range: "-32,768 to 32,767",
              defaultValue: "0",
              example: "short s = 10000;"
            },
            {
              name: "int",
              size: "32-bit",
              range: "-2,147,483,648 to 2,147,483,647",
              defaultValue: "0",
              example: "int i = 100000;"
            },
            {
              name: "long",
              size: "64-bit",
              range: "-9,223,372,036,854,775,808 to 9,223,372,036,854,775,807",
              defaultValue: "0L",
              example: "long l = 100000L;"
            },
            {
              name: "float",
              size: "32-bit",
              range: "approximately ±3.40282347E+38F (6-7 significant decimal digits)",
              defaultValue: "0.0f",
              example: "float f = 234.5f;"
            },
            {
              name: "double",
              size: "64-bit",
              range: "approximately ±1.79769313486231570E+308 (15 significant decimal digits)",
              defaultValue: "0.0d",
              example: "double d = 123.4;"
            },
            {
              name: "boolean",
              size: "1-bit",
              range: "true or false",
              defaultValue: "false",
              example: "boolean flag = true;"
            },
            {
              name: "char",
              size: "16-bit",
              range: "0 to 65,535 (Unicode characters)",
              defaultValue: "'\\u0000'",
              example: "char c = 'A';"
            }
          ]
        },
        nonPrimitive: {
          title: "Non-Primitive (Reference) Data Types",
          description: "Non-primitive data types are created by the programmer and are not predefined by Java.",
          types: [
            {
              name: "String",
              description: "Sequence of characters",
              example: "String name = \"Java Programming\";"
            },
            {
              name: "Arrays",
              description: "Collection of similar data types",
              example: "int[] numbers = {1, 2, 3, 4, 5};"
            },
            {
              name: "Classes",
              description: "User-defined blueprint for creating objects",
              example: "Student student = new Student();"
            },
            {
              name: "Interfaces",
              description: "Contract that classes can implement",
              example: "List<String> list = new ArrayList<>();"
            }
          ]
        }
      },
      operators: {
        arithmetic: {
          title: "Arithmetic Operators",
          operators: [
            {
              symbol: "+",
              name: "Addition",
              description: "Adds two operands",
              example: "int sum = a + b;"
            },
            {
              symbol: "-",
              name: "Subtraction",
              description: "Subtracts second operand from first",
              example: "int diff = a - b;"
            },
            {
              symbol: "*",
              name: "Multiplication",
              description: "Multiplies two operands",
              example: "int product = a * b;"
            },
            {
              symbol: "/",
              name: "Division",
              description: "Divides first operand by second",
              example: "int quotient = a / b;"
            },
            {
              symbol: "%",
              name: "Modulus",
              description: "Returns remainder of division",
              example: "int remainder = a % b;"
            },
            {
              symbol: "++",
              name: "Increment",
              description: "Increases value by 1",
              example: "a++; or ++a;"
            },
            {
              symbol: "--",
              name: "Decrement",
              description: "Decreases value by 1",
              example: "a--; or --a;"
            }
          ]
        },
        relational: {
          title: "Relational Operators",
          operators: [
            {
              symbol: "==",
              name: "Equal to",
              description: "Checks if two operands are equal",
              example: "if (a == b)"
            },
            {
              symbol: "!=",
              name: "Not equal to",
              description: "Checks if two operands are not equal",
              example: "if (a != b)"
            },
            {
              symbol: ">",
              name: "Greater than",
              description: "Checks if left operand is greater than right",
              example: "if (a > b)"
            },
            {
              symbol: "<",
              name: "Less than",
              description: "Checks if left operand is less than right",
              example: "if (a < b)"
            },
            {
              symbol: ">=",
              name: "Greater than or equal to",
              description: "Checks if left operand is greater than or equal to right",
              example: "if (a >= b)"
            },
            {
              symbol: "<=",
              name: "Less than or equal to",
              description: "Checks if left operand is less than or equal to right",
              example: "if (a <= b)"
            }
          ]
        },
        logical: {
          title: "Logical Operators",
          operators: [
            {
              symbol: "&&",
              name: "Logical AND",
              description: "Returns true if both operands are true",
              example: "if (a > 0 && b > 0)"
            },
            {
              symbol: "||",
              name: "Logical OR",
              description: "Returns true if at least one operand is true",
              example: "if (a > 0 || b > 0)"
            },
            {
              symbol: "!",
              name: "Logical NOT",
              description: "Reverses the logical state of operand",
              example: "if (!flag)"
            }
          ]
        },
        assignment: {
          title: "Assignment Operators",
          operators: [
            {
              symbol: "=",
              name: "Simple assignment",
              description: "Assigns right operand to left operand",
              example: "a = b;"
            },
            {
              symbol: "+=",
              name: "Add and assign",
              description: "Adds right operand to left operand and assigns result to left",
              example: "a += b; // equivalent to a = a + b;"
            },
            {
              symbol: "-=",
              name: "Subtract and assign",
              description: "Subtracts right operand from left operand and assigns result to left",
              example: "a -= b; // equivalent to a = a - b;"
            },
            {
              symbol: "*=",
              name: "Multiply and assign",
              description: "Multiplies left operand with right operand and assigns result to left",
              example: "a *= b; // equivalent to a = a * b;"
            },
            {
              symbol: "/=",
              name: "Divide and assign",
              description: "Divides left operand by right operand and assigns result to left",
              example: "a /= b; // equivalent to a = a / b;"
            },
            {
              symbol: "%=",
              name: "Modulus and assign",
              description: "Takes modulus of left operand with right operand and assigns result to left",
              example: "a %= b; // equivalent to a = a % b;"
            }
          ]
        }
      },
      controlFlow: {
        decisionMaking: {
          title: "Decision-Making Statements",
          description: "Decision-making statements allow you to control the flow of program execution based on certain conditions.",
          statements: {
            ifStatement: {
              title: "if statement",
              description: "Executes a block of code if the specified condition is true.",
              syntax: "if (condition) {\n    // code to execute if condition is true\n}",
              example: `int age = 18;
if (age >= 18) {
    System.out.println("You are eligible to vote.");
}`,
              flowchart: ["Start", "Check condition", "If true: Execute block", "Continue", "End"]
            },
            ifElseStatement: {
              title: "if-else statement",
              description: "Executes one block of code if condition is true, another block if condition is false.",
              syntax: "if (condition) {\n    // code if true\n} else {\n    // code if false\n}",
              example: `int number = 15;
if (number % 2 == 0) {
    System.out.println(number + " is even.");
} else {
    System.out.println(number + " is odd.");
}`,
              flowchart: ["Start", "Check condition", "If true: Execute if block", "If false: Execute else block", "Continue", "End"]
            },
            ifElseIfLadder: {
              title: "if-else-if ladder",
              description: "Tests multiple conditions in sequence. First true condition's block is executed.",
              syntax: "if (condition1) {\n    // code\n} else if (condition2) {\n    // code\n} else {\n    // default code\n}",
              example: `int marks = 85;
if (marks >= 90) {
    System.out.println("Grade: A+");
} else if (marks >= 80) {
    System.out.println("Grade: A");
} else if (marks >= 70) {
    System.out.println("Grade: B");
} else if (marks >= 60) {
    System.out.println("Grade: C");
} else {
    System.out.println("Grade: F");
}`,
              flowchart: ["Start", "Check condition1", "If true: Execute block1", "Check condition2", "If true: Execute block2", "Execute else block", "End"]
            },
            nestedIfStatement: {
              title: "nested if statement",
              description: "An if statement inside another if statement. Inner if is executed only if outer if is true.",
              syntax: "if (condition1) {\n    if (condition2) {\n        // nested code\n    }\n}",
              example: `int age = 25;
boolean hasLicense = true;
if (age >= 18) {
    if (hasLicense) {
        System.out.println("You can drive a car.");
    } else {
        System.out.println("You need a driving license.");
    }
} else {
    System.out.println("You are too young to drive.");
}`,
              flowchart: ["Start", "Check outer condition", "If true: Check inner condition", "If inner true: Execute nested block", "End"]
            },
            switchStatement: {
              title: "switch statement",
              description: "Multi-way branch statement that compares a variable against many values.",
              syntax: "switch (expression) {\n    case value1:\n        // code\n        break;\n    case value2:\n        // code\n        break;\n    default:\n        // default code\n}",
              example: `int day = 3;
switch (day) {
    case 1:
        System.out.println("Monday");
        break;
    case 2:
        System.out.println("Tuesday");
        break;
    case 3:
        System.out.println("Wednesday");
        break;
    case 4:
        System.out.println("Thursday");
        break;
    case 5:
        System.out.println("Friday");
        break;
    case 6:
        System.out.println("Saturday");
        break;
    case 7:
        System.out.println("Sunday");
        break;
    default:
        System.out.println("Invalid day");
}`,
              enhancedSwitch: `// Java 14+ Enhanced Switch Expression
String dayType = switch (day) {
    case 1, 2, 3, 4, 5 -> "Weekday";
    case 6, 7 -> "Weekend";
    default -> "Invalid";
};`,
              flowchart: ["Start", "Evaluate expression", "Match case 1?", "Execute case 1", "Match case 2?", "Execute case 2", "Execute default", "End"]
            }
          }
        },
        looping: {
          title: "Looping Statements",
          description: "Looping statements allow you to execute a block of code repeatedly based on a condition.",
          statements: {
            forLoop: {
              title: "for loop",
              description: "Executes a block of code for a specific number of times. Best when you know the number of iterations.",
              syntax: "for (initialization; condition; increment/decrement) {\n    // code to repeat\n}",
              example: `// Print numbers 1 to 10
for (int i = 1; i <= 10; i++) {
    System.out.println("Number: " + i);
}

// Print even numbers from 2 to 20
for (int i = 2; i <= 20; i += 2) {
    System.out.println("Even number: " + i);
}

// Nested for loop - multiplication table
for (int i = 1; i <= 5; i++) {
    for (int j = 1; j <= 10; j++) {
        System.out.print((i * j) + "\t");
    }
    System.out.println();
}`,
              flowchart: ["Start", "Initialize", "Check condition", "If true: Execute body", "Increment/Decrement", "Loop back", "If false: Exit", "End"]
            },
            whileLoop: {
              title: "while loop",
              description: "Executes a block of code as long as the condition is true. Best when number of iterations is unknown.",
              syntax: "while (condition) {\n    // code to repeat\n    // update condition variable\n}",
              example: `// Count from 1 to 5
int count = 1;
while (count <= 5) {
    System.out.println("Count: " + count);
    count++;
}

// Read user input until 'quit'
Scanner scanner = new Scanner(System.in);
String input = "";
while (!input.equals("quit")) {
    System.out.print("Enter command (quit to exit): ");
    input = scanner.nextLine();
    if (!input.equals("quit")) {
        System.out.println("You entered: " + input);
    }
}`,
              flowchart: ["Start", "Check condition", "If true: Execute body", "Update variables", "Loop back", "If false: Exit", "End"]
            },
            doWhileLoop: {
              title: "do-while loop",
              description: "Executes the code block at least once, then repeats as long as condition is true.",
              syntax: "do {\n    // code to repeat\n    // update condition variable\n} while (condition);",
              example: `// Menu-driven program
Scanner scanner = new Scanner(System.in);
int choice;
do {
    System.out.println("\n--- Menu ---");
    System.out.println("1. Add");
    System.out.println("2. Subtract");
    System.out.println("3. Multiply");
    System.out.println("4. Exit");
    System.out.print("Enter your choice: ");
    choice = scanner.nextInt();
    
    switch (choice) {
        case 1:
            System.out.println("Addition selected");
            break;
        case 2:
            System.out.println("Subtraction selected");
            break;
        case 3:
            System.out.println("Multiplication selected");
            break;
        case 4:
            System.out.println("Exiting...");
            break;
        default:
            System.out.println("Invalid choice!");
    }
} while (choice != 4);`,
              flowchart: ["Start", "Execute body", "Update variables", "Check condition", "If true: Loop back", "If false: Exit", "End"]
            },
            enhancedForLoop: {
              title: "Enhanced for-each loop",
              description: "Simplified loop for iterating through arrays and collections. Also called for-each loop.",
              syntax: "for (dataType variable : array/collection) {\n    // code using variable\n}",
              example: `// Iterate through array
int[] numbers = {10, 20, 30, 40, 50};
for (int num : numbers) {
    System.out.println("Number: " + num);
}

// Iterate through String array
String[] fruits = {"Apple", "Banana", "Orange", "Mango"};
for (String fruit : fruits) {
    System.out.println("Fruit: " + fruit);
}

// Iterate through ArrayList
ArrayList<String> cities = new ArrayList<>();
cities.add("New York");
cities.add("London");
cities.add("Tokyo");
for (String city : cities) {
    System.out.println("City: " + city);
}

// Calculate sum using enhanced for loop
int[] scores = {85, 92, 78, 96, 88};
int total = 0;
for (int score : scores) {
    total += score;
}
System.out.println("Total score: " + total);
System.out.println("Average: " + (total / scores.length));`,
              advantages: [
                "Cleaner and more readable code",
                "Eliminates possibility of index out of bounds errors",
                "No need to manage loop counter",
                "Works with arrays and collections"
              ],
              limitations: [
                "Cannot modify array/collection elements",
                "Cannot access index of current element",
                "Cannot iterate in reverse order",
                "Cannot skip elements"
              ],
              flowchart: ["Start", "Get next element", "Element exists?", "If yes: Execute body with element", "Loop back", "If no: Exit", "End"]
            }
          }
        },
        branching: {
          title: "Branching Statements",
          description: "Branching statements alter the normal flow of control in loops and methods.",
          statements: {
            breakStatement: {
              title: "break statement",
              description: "Terminates the loop or switch statement and transfers control to the statement immediately following the terminated statement.",
              types: {
                unlabeled: {
                  title: "Unlabeled break",
                  description: "Terminates the innermost loop or switch statement",
                  example: `// Break in for loop
for (int i = 1; i <= 10; i++) {
    if (i == 5) {
        break; // Exit loop when i equals 5
    }
    System.out.println("i = " + i);
}
System.out.println("Loop ended");

// Break in while loop
int count = 0;
while (true) {
    count++;
    if (count > 3) {
        break; // Exit infinite loop
    }
    System.out.println("Count: " + count);
}

// Break in switch statement
int grade = 2;
switch (grade) {
    case 1:
        System.out.println("First class");
        break;
    case 2:
        System.out.println("Second class");
        break; // Prevents fall-through
    case 3:
        System.out.println("Third class");
        break;
    default:
        System.out.println("Invalid grade");
}`
                },
                labeled: {
                  title: "Labeled break",
                  description: "Terminates the labeled statement (useful in nested loops)",
                  example: `// Labeled break in nested loops
outer: for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        if (i == 2 && j == 2) {
            break outer; // Breaks out of both loops
        }
        System.out.println("i = " + i + ", j = " + j);
    }
}
System.out.println("Both loops ended");

// Search in 2D array
int[][] matrix = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
int target = 5;
boolean found = false;

search: for (int i = 0; i < matrix.length; i++) {
    for (int j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] == target) {
            System.out.println("Found " + target + " at [" + i + "][" + j + "]");
            found = true;
            break search; // Exit both loops
        }
    }
}
if (!found) {
    System.out.println("Target not found");
}`
                }
              },
              flowchart: ["Start", "Enter loop", "Check break condition", "If true: Break (exit loop)", "If false: Continue loop", "End"]
            },
            continueStatement: {
              title: "continue statement",
              description: "Skips the current iteration of the loop and moves to the next iteration.",
              types: {
                unlabeled: {
                  title: "Unlabeled continue",
                  description: "Skips current iteration of innermost loop",
                  example: `// Skip even numbers
for (int i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        continue; // Skip even numbers
    }
    System.out.println("Odd number: " + i);
}

// Skip negative numbers
int[] numbers = {-2, 5, -8, 10, -3, 7};
for (int num : numbers) {
    if (num < 0) {
        continue; // Skip negative numbers
    }
    System.out.println("Positive number: " + num);
}

// Continue in while loop
int count = 0;
while (count < 10) {
    count++;
    if (count % 3 == 0) {
        continue; // Skip multiples of 3
    }
    System.out.println("Count: " + count);
}`
                },
                labeled: {
                  title: "Labeled continue",
                  description: "Skips current iteration of labeled loop",
                  example: `// Labeled continue in nested loops
outer: for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        if (j == 2) {
            continue outer; // Skip to next iteration of outer loop
        }
        System.out.println("i = " + i + ", j = " + j);
    }
}

// Print multiplication table skipping certain rows
outer: for (int i = 1; i <= 5; i++) {
    if (i == 3) {
        continue outer; // Skip row 3
    }
    for (int j = 1; j <= 5; j++) {
        System.out.print((i * j) + "\t");
    }
    System.out.println();
}`
                }
              },
              flowchart: ["Start", "Enter loop", "Check continue condition", "If true: Continue (skip to next iteration)", "If false: Execute remaining code", "End iteration"]
            },
            returnStatement: {
              title: "return statement",
              description: "Exits from the current method and optionally returns a value to the calling method.",
              types: {
                voidReturn: {
                  title: "Return in void method",
                  description: "Simply exits the method without returning any value",
                  example: `public static void printPositiveNumber(int num) {
    if (num <= 0) {
        System.out.println("Number must be positive");
        return; // Exit method early
    }
    System.out.println("Positive number: " + num);
}

public static void processArray(int[] arr) {
    if (arr == null || arr.length == 0) {
        System.out.println("Array is empty or null");
        return; // Exit method early
    }
    
    for (int num : arr) {
        System.out.print(num + " ");
    }
    System.out.println();
}`
                },
                valueReturn: {
                  title: "Return with value",
                  description: "Exits the method and returns a value to the caller",
                  example: `public static int findMax(int[] arr) {
    if (arr == null || arr.length == 0) {
        return -1; // Return error code
    }
    
    int max = arr[0];
    for (int i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max; // Return the maximum value
}

public static String getGrade(int marks) {
    if (marks >= 90) return "A+";
    if (marks >= 80) return "A";
    if (marks >= 70) return "B";
    if (marks >= 60) return "C";
    return "F"; // Default return
}

public static boolean isPrime(int num) {
    if (num <= 1) return false;
    if (num == 2) return true;
    if (num % 2 == 0) return false;
    
    for (int i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i == 0) {
            return false; // Not prime
        }
    }
    return true; // Prime number
}`
                },
                earlyReturn: {
                  title: "Early return pattern",
                  description: "Using return statements to exit method early based on conditions",
                  example: `public static double calculateDiscount(double price, String customerType) {
    // Early returns for invalid input
    if (price <= 0) {
        return 0.0;
    }
    
    if (customerType == null) {
        return 0.0;
    }
    
    // Calculate discount based on customer type
    switch (customerType.toLowerCase()) {
        case "premium":
            return price * 0.20; // 20% discount
        case "gold":
            return price * 0.15; // 15% discount
        case "silver":
            return price * 0.10; // 10% discount
        case "regular":
            return price * 0.05; // 5% discount
        default:
            return 0.0; // No discount
    }
}

public static String validateEmail(String email) {
    if (email == null || email.trim().isEmpty()) {
        return "Email cannot be empty";
    }
    
    if (!email.contains("@")) {
        return "Email must contain @ symbol";
    }
    
    if (!email.contains(".")) {
        return "Email must contain domain extension";
    }
    
    return "Valid email"; // All validations passed
}`
                }
              },
              flowchart: ["Start method", "Check return condition", "If true: Return value/void", "If false: Continue execution", "End method"]
            }
          }
        }
      },
      classAndObject: {
        classInJava: {
          title: "Class in Java",
          description: "A class is a blueprint or template that defines the structure and behavior of objects. It encapsulates data (fields) and methods that operate on that data.",
          definingClass: {
            title: "Defining a class",
            description: "A class is defined using the 'class' keyword followed by the class name and body enclosed in curly braces.",
            syntax: "[access_modifier] class ClassName {\n    // fields (variables)\n    // methods\n    // constructors\n}",
            example: `// Basic class definition
public class Student {
    // Fields (instance variables)
    private String name;
    private int age;
    private String studentId;
    private double gpa;
    
    // Constructor
    public Student(String name, int age, String studentId) {
        this.name = name;
        this.age = age;
        this.studentId = studentId;
        this.gpa = 0.0;
    }
    
    // Methods
    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Student ID: " + studentId);
        System.out.println("GPA: " + gpa);
    }
    
    public void updateGPA(double newGPA) {
        if (newGPA >= 0.0 && newGPA <= 4.0) {
            this.gpa = newGPA;
        }
    }
}`
          },
          classMembers: {
            title: "Class members (fields and methods)",
            description: "Class members include fields (variables) that store data and methods that define behavior.",
            fields: {
              title: "Fields (Instance Variables)",
              description: "Variables declared inside a class but outside any method. They represent the state of an object.",
              types: [
                "Instance variables - Belong to specific object instances",
                "Static variables - Belong to the class itself, shared among all instances",
                "Final variables - Constants that cannot be changed after initialization"
              ],
              example: `public class Car {
    // Instance variables
    private String brand;
    private String model;
    private int year;
    private double price;
    
    // Static variable (class variable)
    private static int totalCars = 0;
    
    // Final variable (constant)
    private final String VIN_PREFIX = "CAR";
    
    // Constructor
    public Car(String brand, String model, int year, double price) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.price = price;
        totalCars++; // Increment static counter
    }
    
    // Static method to get total cars
    public static int getTotalCars() {
        return totalCars;
    }
}`
            },
            methods: {
              title: "Methods",
              description: "Functions defined inside a class that define the behavior of objects.",
              types: [
                "Instance methods - Operate on instance variables, called on objects",
                "Static methods - Belong to class, can be called without creating objects",
                "Abstract methods - Declared without implementation (in abstract classes)",
                "Final methods - Cannot be overridden in subclasses"
              ],
              example: `public class Calculator {
    // Instance variable
    private String calculatorName;
    
    // Constructor
    public Calculator(String name) {
        this.calculatorName = name;
    }
    
    // Instance method
    public double add(double a, double b) {
        System.out.println(calculatorName + " is performing addition");
        return a + b;
    }
    
    // Static method - utility function
    public static double multiply(double a, double b) {
        return a * b;
    }
    
    // Method with multiple parameters
    public double calculateAverage(double... numbers) {
        if (numbers.length == 0) return 0;
        
        double sum = 0;
        for (double num : numbers) {
            sum += num;
        }
        return sum / numbers.length;
    }
    
    // Getter method
    public String getCalculatorName() {
        return calculatorName;
    }
    
    // Setter method
    public void setCalculatorName(String name) {
        this.calculatorName = name;
    }
}`
            }
          },
          constructors: {
            title: "Constructors (default and parameterized)",
            description: "Special methods used to initialize objects when they are created. They have the same name as the class and no return type.",
            defaultConstructor: {
              title: "Default Constructor",
              description: "Constructor with no parameters. If not explicitly defined, Java provides one automatically.",
              example: `public class Book {
    private String title;
    private String author;
    private int pages;
    
    // Default constructor
    public Book() {
        this.title = "Unknown";
        this.author = "Unknown";
        this.pages = 0;
        System.out.println("Default constructor called");
    }
    
    // Method to display book info
    public void displayInfo() {
        System.out.println("Title: " + title);
        System.out.println("Author: " + author);
        System.out.println("Pages: " + pages);
    }
}`
            },
            parameterizedConstructor: {
              title: "Parameterized Constructor",
              description: "Constructor that accepts parameters to initialize object with specific values.",
              example: `public class Employee {
    private String name;
    private int id;
    private String department;
    private double salary;
    
    // Parameterized constructor
    public Employee(String name, int id, String department, double salary) {
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary;
        System.out.println("Employee created: " + name);
    }
    
    // Another parameterized constructor (constructor overloading)
    public Employee(String name, int id) {
        this.name = name;
        this.id = id;
        this.department = "General";
        this.salary = 30000.0;
        System.out.println("Employee created with default department and salary");
    }
    
    public void displayEmployee() {
        System.out.println("ID: " + id);
        System.out.println("Name: " + name);
        System.out.println("Department: " + department);
        System.out.println("Salary: $" + salary);
    }
}`
            },
            constructorChaining: {
              title: "Constructor Chaining",
              description: "Calling one constructor from another using this() keyword.",
              example: `public class Rectangle {
    private double length;
    private double width;
    private String color;
    
    // Constructor with all parameters
    public Rectangle(double length, double width, String color) {
        this.length = length;
        this.width = width;
        this.color = color;
        System.out.println("Rectangle created with all parameters");
    }
    
    // Constructor with length and width (default color)
    public Rectangle(double length, double width) {
        this(length, width, "White"); // Call the main constructor
        System.out.println("Rectangle created with default color");
    }
    
    // Constructor for square (equal length and width)
    public Rectangle(double side) {
        this(side, side, "White"); // Call the main constructor
        System.out.println("Square created");
    }
    
    public double getArea() {
        return length * width;
    }
    
    public void displayInfo() {
        System.out.println("Length: " + length);
        System.out.println("Width: " + width);
        System.out.println("Color: " + color);
        System.out.println("Area: " + getArea());
    }
}`
            }
          },
          staticVsInstance: {
            title: "Static vs instance members",
            description: "Understanding the difference between static (class-level) and instance (object-level) members.",
            instanceMembers: {
              title: "Instance Members",
              description: "Belong to specific object instances. Each object has its own copy.",
              characteristics: [
                "Accessed through object references",
                "Each object has separate copy",
                "Can access both static and instance members",
                "Memory allocated when object is created"
              ]
            },
            staticMembers: {
              title: "Static Members",
              description: "Belong to the class itself. Shared among all instances of the class.",
              characteristics: [
                "Accessed through class name",
                "Single copy shared by all objects",
                "Can only directly access other static members",
                "Memory allocated when class is first loaded"
              ]
            },
            example: `public class Counter {
    // Static variable - shared among all instances
    private static int totalCount = 0;
    
    // Instance variable - unique to each object
    private int instanceCount;
    private String counterName;
    
    // Static block - executed when class is first loaded
    static {
        System.out.println("Counter class loaded");
        totalCount = 0;
    }
    
    // Constructor
    public Counter(String name) {
        this.counterName = name;
        this.instanceCount = 0;
        totalCount++; // Increment static counter
        System.out.println("Counter '" + name + "' created");
    }
    
    // Instance method
    public void increment() {
        instanceCount++;
        totalCount++;
        System.out.println(counterName + " incremented. Instance: " + instanceCount);
    }
    
    // Static method
    public static int getTotalCount() {
        // Can only access static members directly
        return totalCount;
    }
    
    // Static method to reset total count
    public static void resetTotalCount() {
        totalCount = 0;
        System.out.println("Total count reset to 0");
    }
    
    // Instance method to get instance count
    public int getInstanceCount() {
        return instanceCount;
    }
    
    // Instance method that can access both static and instance members
    public void displayCounts() {
        System.out.println("Counter: " + counterName);
        System.out.println("Instance count: " + instanceCount);
        System.out.println("Total count: " + totalCount);
    }
}

// Usage example
public class CounterDemo {
    public static void main(String[] args) {
        // Access static method without creating object
        System.out.println("Initial total: " + Counter.getTotalCount());
        
        // Create objects
        Counter c1 = new Counter("Counter1");
        Counter c2 = new Counter("Counter2");
        
        // Use instance methods
        c1.increment();
        c1.increment();
        c2.increment();
        
        // Display counts
        c1.displayCounts();
        c2.displayCounts();
        
        // Access static method
        System.out.println("Final total: " + Counter.getTotalCount());
    }
}`
          },
          nestedClasses: {
            title: "Nested classes (static and non-static)",
            description: "Classes defined inside other classes. They provide better encapsulation and logical grouping.",
            staticNestedClass: {
              title: "Static Nested Class",
              description: "Nested class that doesn't need reference to outer class instance. Cannot access non-static members of outer class directly.",
              example: `public class OuterClass {
    private static String staticOuterField = "Static Outer Field";
    private String instanceOuterField = "Instance Outer Field";
    
    // Static nested class
    public static class StaticNestedClass {
        private String nestedField = "Nested Field";
        
        public void display() {
            // Can access static members of outer class
            System.out.println("Accessing: " + staticOuterField);
            
            // Cannot access instance members directly
            // System.out.println(instanceOuterField); // Compilation error
            
            System.out.println("Nested field: " + nestedField);
        }
        
        // Static method in nested class
        public static void staticMethod() {
            System.out.println("Static method in nested class");
            System.out.println("Accessing: " + staticOuterField);
        }
    }
    
    public void outerMethod() {
        // Create instance of static nested class
        StaticNestedClass nested = new StaticNestedClass();
        nested.display();
    }
}

// Usage
public class NestedClassDemo {
    public static void main(String[] args) {
        // Create static nested class instance without outer class instance
        OuterClass.StaticNestedClass nested = new OuterClass.StaticNestedClass();
        nested.display();
        
        // Call static method of nested class
        OuterClass.StaticNestedClass.staticMethod();
        
        // Create outer class and use nested class
        OuterClass outer = new OuterClass();
        outer.outerMethod();
    }
}`
            },
            innerClass: {
              title: "Non-static Nested Class (Inner Class)",
              description: "Nested class that has access to all members of outer class, including private members.",
              example: `public class BankAccount {
    private String accountNumber;
    private double balance;
    private String ownerName;
    
    public BankAccount(String accountNumber, String ownerName, double initialBalance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = initialBalance;
    }
    
    // Inner class for transaction history
    public class Transaction {
        private String transactionId;
        private String type;
        private double amount;
        private String date;
        
        public Transaction(String transactionId, String type, double amount, String date) {
            this.transactionId = transactionId;
            this.type = type;
            this.amount = amount;
            this.date = date;
        }
        
        public void processTransaction() {
            // Inner class can access private members of outer class
            System.out.println("Processing transaction for account: " + accountNumber);
            System.out.println("Owner: " + ownerName);
            System.out.println("Transaction: " + type + " of $" + amount);
            
            if (type.equals("DEPOSIT")) {
                balance += amount; // Directly access outer class private field
            } else if (type.equals("WITHDRAWAL")) {
                if (balance >= amount) {
                    balance -= amount;
                } else {
                    System.out.println("Insufficient funds!");
                    return;
                }
            }
            
            System.out.println("New balance: $" + balance);
            System.out.println("Transaction completed on: " + date);
        }
        
        public void displayTransaction() {
            System.out.println("Transaction ID: " + transactionId);
            System.out.println("Type: " + type);
            System.out.println("Amount: $" + amount);
            System.out.println("Date: " + date);
        }
    }
    
    // Method to create and process transaction
    public void makeTransaction(String transactionId, String type, double amount, String date) {
        Transaction transaction = new Transaction(transactionId, type, amount, date);
        transaction.processTransaction();
    }
    
    public void displayAccountInfo() {
        System.out.println("Account Number: " + accountNumber);
        System.out.println("Owner: " + ownerName);
        System.out.println("Balance: $" + balance);
    }
}

// Usage
public class BankDemo {
    public static void main(String[] args) {
        BankAccount account = new BankAccount("ACC001", "John Doe", 1000.0);
        account.displayAccountInfo();
        
        // Make transactions
        account.makeTransaction("TXN001", "DEPOSIT", 500.0, "2024-01-15");
        account.makeTransaction("TXN002", "WITHDRAWAL", 200.0, "2024-01-16");
        
        account.displayAccountInfo();
        
        // Create inner class instance (requires outer class instance)
        BankAccount.Transaction transaction = account.new Transaction("TXN003", "DEPOSIT", 300.0, "2024-01-17");
        transaction.displayTransaction();
        transaction.processTransaction();
    }
}`
            }
          }
        },
        objectInJava: {
          title: "Object in Java",
          description: "An object is an instance of a class. It represents a real-world entity with state (attributes) and behavior (methods).",
          creatingObjects: {
            title: "Creating objects using new keyword",
            description: "Objects are created using the 'new' keyword followed by a constructor call.",
            syntax: "ClassName objectName = new ClassName(parameters);",
            example: `// Creating objects of different classes
public class ObjectCreationDemo {
    public static void main(String[] args) {
        // Creating Student objects
        Student student1 = new Student("Alice Johnson", 20, "STU001");
        Student student2 = new Student("Bob Smith", 19, "STU002");
        
        // Creating Car objects
        Car car1 = new Car("Toyota", "Camry", 2023, 25000.0);
        Car car2 = new Car("Honda", "Civic", 2022, 22000.0);
        
        // Creating objects with different constructors
        Employee emp1 = new Employee("John Doe", 101, "IT", 75000.0);
        Employee emp2 = new Employee("Jane Smith", 102); // Using overloaded constructor
        
        // Array of objects
        Book[] library = new Book[3];
        library[0] = new Book("Java Programming", "James Gosling", 500);
        library[1] = new Book("Data Structures", "Robert Sedgewick", 600);
        library[2] = new Book(); // Using default constructor
        
        // Display object information
        System.out.println("=== Students ===");
        student1.displayInfo();
        student2.displayInfo();
        
        System.out.println("\n=== Cars ===");
        System.out.println("Total cars created: " + Car.getTotalCars());
        
        System.out.println("\n=== Employees ===");
        emp1.displayEmployee();
        emp2.displayEmployee();
        
        System.out.println("\n=== Library Books ===");
        for (int i = 0; i < library.length; i++) {
            System.out.println("Book " + (i + 1) + ":");
            library[i].displayInfo();
            System.out.println();
        }
    }
}`,
            memoryAllocation: {
              title: "Memory allocation during object creation",
              description: "When an object is created, memory is allocated in the heap for instance variables.",
              steps: [
                "Memory is allocated in heap for the object",
                "Instance variables are initialized with default values",
                "Constructor is called to initialize the object",
                "Reference to the object is returned"
              ],
              example: `public class MemoryDemo {
    private int instanceVar = 10;        // Stored in heap
    private static int staticVar = 20;   // Stored in method area
    
    public MemoryDemo(int value) {
        this.instanceVar = value;
        System.out.println("Object created with instanceVar = " + instanceVar);
    }
    
    public void showMemoryInfo() {
        int localVar = 30;  // Stored in stack
        System.out.println("Instance variable (heap): " + instanceVar);
        System.out.println("Static variable (method area): " + staticVar);
        System.out.println("Local variable (stack): " + localVar);
    }
    
    public static void main(String[] args) {
        // Object reference stored in stack, object data in heap
        MemoryDemo obj1 = new MemoryDemo(100);
        MemoryDemo obj2 = new MemoryDemo(200);
        
        obj1.showMemoryInfo();
        obj2.showMemoryInfo();
        
        // Multiple references to same object
        MemoryDemo obj3 = obj1;  // obj3 points to same object as obj1
        obj3.instanceVar = 300;  // Changes obj1's instanceVar too
        
        System.out.println("After modifying through obj3:");
        obj1.showMemoryInfo();
    }
}`
            }
          },
          accessingMembers: {
            title: "Accessing class members via objects",
            description: "Object members are accessed using the dot (.) operator.",
            syntax: "objectName.memberName",
            example: `public class MemberAccessDemo {
    public static void main(String[] args) {
        // Create a Calculator object
        Calculator calc = new Calculator("Scientific Calculator");
        
        // Access instance methods
        double sum = calc.add(10.5, 20.3);
        System.out.println("Sum: " + sum);
        
        double average = calc.calculateAverage(85, 92, 78, 96, 88);
        System.out.println("Average: " + average);
        
        // Access getter method
        String name = calc.getCalculatorName();
        System.out.println("Calculator name: " + name);
        
        // Access setter method
        calc.setCalculatorName("Advanced Calculator");
        System.out.println("Updated name: " + calc.getCalculatorName());
        
        // Access static method (can be called on class or object)
        double product1 = Calculator.multiply(5.0, 4.0);  // Using class name
        double product2 = calc.multiply(3.0, 7.0);        // Using object reference
        System.out.println("Product 1: " + product1);
        System.out.println("Product 2: " + product2);
        
        // Working with Counter objects
        Counter counter1 = new Counter("Counter A");
        Counter counter2 = new Counter("Counter B");
        
        // Access instance methods
        counter1.increment();
        counter1.increment();
        counter2.increment();
        
        // Access instance method that shows both instance and static data
        counter1.displayCounts();
        counter2.displayCounts();
        
        // Access static method
        System.out.println("Total count across all counters: " + Counter.getTotalCount());
    }
}`,
            accessModifiers: {
              title: "Access modifiers and member visibility",
              description: "Different access levels control how class members can be accessed.",
              levels: [
                "public - Accessible from anywhere",
                "protected - Accessible within package and subclasses",
                "default (package-private) - Accessible within same package",
                "private - Accessible only within the same class"
              ],
              example: `public class AccessModifierDemo {
    public String publicField = "Public field";           // Accessible everywhere
    protected String protectedField = "Protected field";  // Package + subclasses
    String defaultField = "Default field";               // Package only
    private String privateField = "Private field";       // Class only
    
    // Public method - accessible everywhere
    public void publicMethod() {
        System.out.println("Public method called");
        // Can access all fields within same class
        System.out.println(privateField);
    }
    
    // Protected method - package + subclasses
    protected void protectedMethod() {
        System.out.println("Protected method called");
    }
    
    // Default method - package only
    void defaultMethod() {
        System.out.println("Default method called");
    }
    
    // Private method - class only
    private void privateMethod() {
        System.out.println("Private method called");
    }
    
    // Public method to demonstrate access
    public void demonstrateAccess() {
        System.out.println("Accessing all fields from within class:");
        System.out.println(publicField);
        System.out.println(protectedField);
        System.out.println(defaultField);
        System.out.println(privateField);
        
        // Can call all methods from within class
        publicMethod();
        protectedMethod();
        defaultMethod();
        privateMethod();
    }
}

// Usage from another class in same package
class AccessTest {
    public static void main(String[] args) {
        AccessModifierDemo demo = new AccessModifierDemo();
        
        // Accessible fields and methods
        System.out.println(demo.publicField);     // OK
        System.out.println(demo.protectedField);  // OK (same package)
        System.out.println(demo.defaultField);    // OK (same package)
        // System.out.println(demo.privateField); // Compilation error
        
        demo.publicMethod();     // OK
        demo.protectedMethod();  // OK (same package)
        demo.defaultMethod();    // OK (same package)
        // demo.privateMethod(); // Compilation error
        
        demo.demonstrateAccess();
    }
}`
            }
          },
          objectLifecycle: {
            title: "Object lifecycle (creation, usage, destruction)",
            description: "Objects go through different phases from creation to destruction.",
            phases: {
              creation: {
                title: "Object Creation",
                description: "Objects are created using 'new' keyword and constructor is called.",
                steps: [
                  "Memory allocation in heap",
                  "Instance variables initialized with default values",
                  "Constructor execution",
                  "Object reference returned"
                ]
              },
              usage: {
                title: "Object Usage",
                description: "Objects are used by calling methods and accessing fields.",
                activities: [
                  "Method invocation",
                  "Field access and modification",
                  "Object interaction",
                  "State changes"
                ]
              },
              destruction: {
                title: "Object Destruction",
                description: "Objects are destroyed by garbage collector when no longer referenced.",
                conditions: [
                  "No more references to the object",
                  "References go out of scope",
                  "References are set to null",
                  "Circular references with no external references"
                ]
              }
            },
            example: `public class ObjectLifecycleDemo {
    private String name;
    private static int objectCount = 0;
    
    // Constructor - Object Creation Phase
    public ObjectLifecycleDemo(String name) {
        this.name = name;
        objectCount++;
        System.out.println("Object '" + name + "' created. Total objects: " + objectCount);
    }
    
    // Method for object usage
    public void doWork() {
        System.out.println(name + " is working...");
    }
    
    // finalize method - called before garbage collection (deprecated in Java 9+)
    @Override
    protected void finalize() throws Throwable {
        objectCount--;
        System.out.println("Object '" + name + "' is being garbage collected. Remaining: " + objectCount);
        super.finalize();
    }
    
    public static void demonstrateLifecycle() {
        System.out.println("=== Object Lifecycle Demonstration ===");
        
        // Creation phase
        ObjectLifecycleDemo obj1 = new ObjectLifecycleDemo("Object1");
        ObjectLifecycleDemo obj2 = new ObjectLifecycleDemo("Object2");
        
        // Usage phase
        obj1.doWork();
        obj2.doWork();
        
        // Creating objects in a block scope
        {
            ObjectLifecycleDemo obj3 = new ObjectLifecycleDemo("Object3");
            obj3.doWork();
            // obj3 goes out of scope here
        }
        
        // Making objects eligible for garbage collection
        obj1 = null;  // Remove reference
        obj2 = new ObjectLifecycleDemo("Object4");  // obj2 now points to new object
        
        // Suggest garbage collection (not guaranteed to run immediately)
        System.gc();
        
        // Give some time for garbage collection
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        
        obj2.doWork();
        
        System.out.println("End of method - local references will be removed");
    }
    
    public static void main(String[] args) {
        demonstrateLifecycle();
        
        // Suggest garbage collection again
        System.gc();
        
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        
        System.out.println("Program ending...");
    }
}`
          },
          garbageCollection: {
            title: "Garbage collection",
            description: "Automatic memory management process that reclaims memory used by objects that are no longer reachable.",
            howItWorks: {
              title: "How Garbage Collection Works",
              description: "GC identifies unreachable objects and frees their memory.",
              steps: [
                "Mark phase - Identify which objects are still reachable",
                "Sweep phase - Remove unreachable objects",
                "Compact phase - Defragment memory (optional)"
              ]
            },
            whenObjectsEligible: {
              title: "When Objects Become Eligible for GC",
              scenarios: [
                "All references to object are set to null",
                "Object goes out of scope",
                "Object is reassigned to another object",
                "Circular reference with no external references"
              ]
            },
            example: `public class GarbageCollectionDemo {
    private String data;
    private static int instanceCount = 0;
    
    public GarbageCollectionDemo(String data) {
        this.data = data;
        instanceCount++;
        System.out.println("Created: " + data + " (Total instances: " + instanceCount + ")");
    }
    
    @Override
    protected void finalize() throws Throwable {
        instanceCount--;
        System.out.println("Finalizing: " + data + " (Remaining instances: " + instanceCount + ")");
        super.finalize();
    }
    
    public static void demonstrateGC() {
        System.out.println("=== Garbage Collection Demo ===");
        
        // Scenario 1: Reference set to null
        GarbageCollectionDemo obj1 = new GarbageCollectionDemo("Object1");
        obj1 = null;  // Object1 becomes eligible for GC
        
        // Scenario 2: Object goes out of scope
        {
            GarbageCollectionDemo obj2 = new GarbageCollectionDemo("Object2");
            // obj2 goes out of scope here
        }
        
        // Scenario 3: Reference reassignment
        GarbageCollectionDemo obj3 = new GarbageCollectionDemo("Object3");
        obj3 = new GarbageCollectionDemo("Object4");  // Object3 becomes eligible
        
        // Scenario 4: Array of objects
        GarbageCollectionDemo[] array = new GarbageCollectionDemo[3];
        for (int i = 0; i < array.length; i++) {
            array[i] = new GarbageCollectionDemo("ArrayObject" + i);
        }
        array = null;  // All array objects become eligible
        
        // Scenario 5: Circular reference
        CircularRefDemo circular1 = new CircularRefDemo("Circular1");
        CircularRefDemo circular2 = new CircularRefDemo("Circular2");
        circular1.setReference(circular2);
        circular2.setReference(circular1);
        circular1 = null;
        circular2 = null;  // Both objects become eligible despite circular reference
        
        // Request garbage collection
        System.out.println("\nRequesting garbage collection...");
        System.gc();
        
        // Give time for GC to run
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        
        System.out.println("\nAfter GC request - Final instance count: " + instanceCount);
    }
    
    // Helper class to demonstrate circular references
    static class CircularRefDemo {
        private String name;
        private CircularRefDemo reference;
        
        public CircularRefDemo(String name) {
            this.name = name;
            System.out.println("Created circular ref object: " + name);
        }
        
        public void setReference(CircularRefDemo ref) {
            this.reference = ref;
        }
        
        @Override
        protected void finalize() throws Throwable {
            System.out.println("Finalizing circular ref object: " + name);
            super.finalize();
        }
    }
    
    public static void main(String[] args) {
        demonstrateGC();
        
        // Final GC request
        System.gc();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        
        System.out.println("Program completed.");
    }
}`
          }
        },
        inheritance: {
          title: "Java Inheritance",
          description: "Inheritance is a fundamental OOP concept that allows a class to inherit properties and methods from another class, promoting code reusability and establishing IS-A relationships.",
          basicsOfInheritance: {
            title: "Basics of Inheritance",
            whatIsInheritance: {
              title: "What is inheritance?",
              description: "Inheritance is a mechanism where a new class (child/subclass) acquires the properties and behaviors of an existing class (parent/superclass). It represents an IS-A relationship.",
              benefits: [
                "Code Reusability - Avoid writing duplicate code",
                "Method Overriding - Provide specific implementation in child class",
                "Polymorphism - Same interface, different implementations",
                "Extensibility - Easy to add new features to existing code",
                "Maintainability - Changes in parent class reflect in child classes"
              ],
              realWorldExample: "A Car IS-A Vehicle, a Dog IS-A Animal, a Student IS-A Person"
            },
            superclass: {
              title: "Superclass (parent class)",
              description: "The class whose properties and methods are inherited by another class. Also called base class or parent class.",
              example: `// Superclass - Vehicle
public class Vehicle {
    // Protected fields - accessible to subclasses
    protected String brand;
    protected String model;
    protected int year;
    protected double price;
    
    // Private field - not directly accessible to subclasses
    private String engineNumber;
    
    // Constructor
    public Vehicle(String brand, String model, int year, double price) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.price = price;
        this.engineNumber = generateEngineNumber();
        System.out.println("Vehicle constructor called");
    }
    
    // Public methods - inherited by subclasses
    public void start() {
        System.out.println(brand + " " + model + " is starting...");
    }
    
    public void stop() {
        System.out.println(brand + " " + model + " has stopped.");
    }
    
    public void displayInfo() {
        System.out.println("Brand: " + brand);
        System.out.println("Model: " + model);
        System.out.println("Year: " + year);
        System.out.println("Price: $" + price);
    }
    
    // Protected method - accessible to subclasses
    protected void performMaintenance() {
        System.out.println("Performing basic vehicle maintenance");
    }
    
    // Private method - not inherited
    private String generateEngineNumber() {
        return "ENG" + System.currentTimeMillis();
    }
    
    // Getter for private field
    public String getEngineNumber() {
        return engineNumber;
    }
}`
            },
            subclass: {
              title: "Subclass (child class)",
              description: "The class that inherits properties and methods from another class. Also called derived class or child class.",
              example: `// Subclass - Car extends Vehicle
public class Car extends Vehicle {
    // Additional fields specific to Car
    private int numberOfDoors;
    private String fuelType;
    private boolean isAutomatic;
    
    // Constructor
    public Car(String brand, String model, int year, double price, 
               int numberOfDoors, String fuelType, boolean isAutomatic) {
        // Call parent class constructor
        super(brand, model, year, price);
        this.numberOfDoors = numberOfDoors;
        this.fuelType = fuelType;
        this.isAutomatic = isAutomatic;
        System.out.println("Car constructor called");
    }
    
    // Additional methods specific to Car
    public void honk() {
        System.out.println(brand + " " + model + " is honking: Beep! Beep!");
    }
    
    public void openTrunk() {
        System.out.println("Car trunk opened");
    }
    
    // Override parent class method
    @Override
    public void displayInfo() {
        // Call parent class method
        super.displayInfo();
        // Add car-specific information
        System.out.println("Number of doors: " + numberOfDoors);
        System.out.println("Fuel type: " + fuelType);
        System.out.println("Automatic: " + (isAutomatic ? "Yes" : "No"));
    }
    
    // Override parent class method with different implementation
    @Override
    public void start() {
        System.out.println("Inserting key and starting " + brand + " " + model);
        super.start(); // Call parent implementation
        System.out.println("Car is ready to drive!");
    }
    
    // Access protected method from parent
    public void serviceCar() {
        System.out.println("Servicing car...");
        performMaintenance(); // Call protected method from parent
        System.out.println("Checking car-specific components");
    }
}`
            },
            extendsKeyword: {
              title: "extends keyword",
              description: "The 'extends' keyword is used to create inheritance relationship between classes.",
              syntax: "class ChildClass extends ParentClass { ... }",
              example: `// Demonstration of extends keyword usage

// Another subclass - Motorcycle extends Vehicle
public class Motorcycle extends Vehicle {
    private boolean hasSidecar;
    private int engineCapacity;
    
    public Motorcycle(String brand, String model, int year, double price, 
                     boolean hasSidecar, int engineCapacity) {
        super(brand, model, year, price);
        this.hasSidecar = hasSidecar;
        this.engineCapacity = engineCapacity;
        System.out.println("Motorcycle constructor called");
    }
    
    public void wheelie() {
        System.out.println(brand + " " + model + " is doing a wheelie!");
    }
    
    @Override
    public void start() {
        System.out.println("Kick-starting " + brand + " " + model);
        super.start();
        System.out.println("Motorcycle is ready to ride!");
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Engine capacity: " + engineCapacity + "cc");
        System.out.println("Has sidecar: " + (hasSidecar ? "Yes" : "No"));
    }
}

// Usage demonstration
public class InheritanceDemo {
    public static void main(String[] args) {
        System.out.println("=== Creating Vehicle ===");
        Vehicle vehicle = new Vehicle("Generic", "Vehicle", 2023, 15000);
        vehicle.displayInfo();
        vehicle.start();
        vehicle.stop();
        
        System.out.println("\n=== Creating Car ===");
        Car car = new Car("Toyota", "Camry", 2023, 30000, 4, "Gasoline", true);
        car.displayInfo();
        car.start();
        car.honk();
        car.serviceCar();
        car.stop();
        
        System.out.println("\n=== Creating Motorcycle ===");
        Motorcycle bike = new Motorcycle("Harley-Davidson", "Street 750", 2023, 8000, false, 750);
        bike.displayInfo();
        bike.start();
        bike.wheelie();
        bike.stop();
        
        // Demonstrating IS-A relationship
        System.out.println("\n=== IS-A Relationship ===");
        System.out.println("car instanceof Vehicle: " + (car instanceof Vehicle));
        System.out.println("bike instanceof Vehicle: " + (bike instanceof Vehicle));
        System.out.println("car instanceof Car: " + (car instanceof Car));
        System.out.println("vehicle instanceof Car: " + (vehicle instanceof Car));
    }
}`
            }
          },
          typesOfInheritance: {
            title: "Types of Inheritance in Java",
            description: "Java supports different types of inheritance patterns, though multiple inheritance with classes is not allowed.",
            singleInheritance: {
              title: "Single inheritance",
              description: "A subclass inherits from only one superclass. This is the most basic form of inheritance.",
              diagram: "Parent Class → Child Class",
              example: `// Single Inheritance Example

// Parent class
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

// Child class - Single inheritance
class Dog extends Animal {
    private String breed;
    
    public Dog(String name, int age, String breed) {
        super(name, age);
        this.breed = breed;
    }
    
    public void bark() {
        System.out.println(name + " is barking: Woof! Woof!");
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Breed: " + breed);
    }
}

// Usage
public class SingleInheritanceDemo {
    public static void main(String[] args) {
        Dog dog = new Dog("Buddy", 3, "Golden Retriever");
        dog.displayInfo();
        dog.eat();    // Inherited method
        dog.sleep();  // Inherited method
        dog.bark();   // Own method
    }
}`
            },
            multilevelInheritance: {
              title: "Multilevel inheritance",
              description: "A chain of inheritance where a class inherits from another class, which in turn inherits from another class.",
              diagram: "Grandparent Class → Parent Class → Child Class",
              example: `// Multilevel Inheritance Example

// Grandparent class
class LivingBeing {
    protected boolean isAlive;
    
    public LivingBeing() {
        this.isAlive = true;
        System.out.println("LivingBeing constructor called");
    }
    
    public void breathe() {
        System.out.println("Breathing...");
    }
    
    public void grow() {
        System.out.println("Growing...");
    }
}

// Parent class - inherits from LivingBeing
class Animal extends LivingBeing {
    protected String species;
    
    public Animal(String species) {
        super();
        this.species = species;
        System.out.println("Animal constructor called");
    }
    
    public void move() {
        System.out.println(species + " is moving");
    }
    
    public void eat() {
        System.out.println(species + " is eating");
    }
}

// Child class - inherits from Animal (which inherits from LivingBeing)
class Mammal extends Animal {
    private boolean hasHair;
    
    public Mammal(String species, boolean hasHair) {
        super(species);
        this.hasHair = hasHair;
        System.out.println("Mammal constructor called");
    }
    
    public void giveBirth() {
        System.out.println(species + " gives birth to live young");
    }
    
    public void produceMilk() {
        System.out.println(species + " produces milk");
    }
    
    public void displayCharacteristics() {
        System.out.println("Species: " + species);
        System.out.println("Has hair: " + hasHair);
        System.out.println("Is alive: " + isAlive);
    }
}

// Usage
public class MultilevelInheritanceDemo {
    public static void main(String[] args) {
        System.out.println("Creating a Mammal:");
        Mammal mammal = new Mammal("Dog", true);
        
        System.out.println("\nMammal capabilities:");
        mammal.breathe();      // From LivingBeing
        mammal.grow();         // From LivingBeing
        mammal.move();         // From Animal
        mammal.eat();          // From Animal
        mammal.giveBirth();    // From Mammal
        mammal.produceMilk();  // From Mammal
        
        mammal.displayCharacteristics();
    }
}`
            },
            hierarchicalInheritance: {
              title: "Hierarchical inheritance",
              description: "Multiple subclasses inherit from a single superclass, creating a tree-like structure.",
              diagram: "Parent Class → Child Class 1, Child Class 2, Child Class 3",
              example: `// Hierarchical Inheritance Example

// Parent class
class Shape {
    protected String color;
    protected boolean filled;
    
    public Shape(String color, boolean filled) {
        this.color = color;
        this.filled = filled;
    }
    
    public void displayInfo() {
        System.out.println("Color: " + color);
        System.out.println("Filled: " + filled);
    }
    
    // Abstract-like method to be overridden
    public void draw() {
        System.out.println("Drawing a shape");
    }
    
    public double getArea() {
        return 0.0; // Default implementation
    }
}

// Child class 1
class Circle extends Shape {
    private double radius;
    
    public Circle(String color, boolean filled, double radius) {
        super(color, filled);
        this.radius = radius;
    }
    
    @Override
    public void draw() {
        System.out.println("Drawing a circle with radius " + radius);
    }
    
    @Override
    public double getArea() {
        return Math.PI * radius * radius;
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Radius: " + radius);
        System.out.println("Area: " + getArea());
    }
}

// Child class 2
class Rectangle extends Shape {
    private double length;
    private double width;
    
    public Rectangle(String color, boolean filled, double length, double width) {
        super(color, filled);
        this.length = length;
        this.width = width;
    }
    
    @Override
    public void draw() {
        System.out.println("Drawing a rectangle " + length + "x" + width);
    }
    
    @Override
    public double getArea() {
        return length * width;
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Length: " + length);
        System.out.println("Width: " + width);
        System.out.println("Area: " + getArea());
    }
}

// Child class 3
class Triangle extends Shape {
    private double base;
    private double height;
    
    public Triangle(String color, boolean filled, double base, double height) {
        super(color, filled);
        this.base = base;
        this.height = height;
    }
    
    @Override
    public void draw() {
        System.out.println("Drawing a triangle with base " + base + " and height " + height);
    }
    
    @Override
    public double getArea() {
        return 0.5 * base * height;
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Base: " + base);
        System.out.println("Height: " + height);
        System.out.println("Area: " + getArea());
    }
}

// Usage
public class HierarchicalInheritanceDemo {
    public static void main(String[] args) {
        // Create different shapes
        Circle circle = new Circle("Red", true, 5.0);
        Rectangle rectangle = new Rectangle("Blue", false, 10.0, 6.0);
        Triangle triangle = new Triangle("Green", true, 8.0, 4.0);
        
        // Array of shapes (polymorphism)
        Shape[] shapes = {circle, rectangle, triangle};
        
        System.out.println("=== Shape Information ===");
        for (Shape shape : shapes) {
            shape.draw();
            shape.displayInfo();
            System.out.println();
        }
    }
}`
            },
            multipleInheritanceInterfaces: {
              title: "Multiple inheritance using interfaces",
              description: "Java doesn't support multiple inheritance with classes but allows it through interfaces.",
              whyNotClasses: [
                "Diamond Problem - Ambiguity when same method exists in multiple parent classes",
                "Complexity in method resolution",
                "Memory layout complications"
              ],
              example: `// Multiple Inheritance using Interfaces

// Interface 1
interface Flyable {
    void fly();
    
    default void takeOff() {
        System.out.println("Taking off...");
    }
}

// Interface 2
interface Swimmable {
    void swim();
    
    default void dive() {
        System.out.println("Diving into water...");
    }
}

// Interface 3
interface Walkable {
    void walk();
    
    default void run() {
        System.out.println("Running fast...");
    }
}

// Base class
class Bird {
    protected String name;
    protected String species;
    
    public Bird(String name, String species) {
        this.name = name;
        this.species = species;
    }
    
    public void eat() {
        System.out.println(name + " is eating");
    }
    
    public void sleep() {
        System.out.println(name + " is sleeping");
    }
}

// Class implementing multiple interfaces
class Duck extends Bird implements Flyable, Swimmable, Walkable {
    public Duck(String name) {
        super(name, "Duck");
    }
    
    @Override
    public void fly() {
        System.out.println(name + " the duck is flying");
    }
    
    @Override
    public void swim() {
        System.out.println(name + " the duck is swimming");
    }
    
    @Override
    public void walk() {
        System.out.println(name + " the duck is walking");
    }
    
    public void quack() {
        System.out.println(name + " says: Quack! Quack!");
    }
}

// Another class with different interface combinations
class Penguin extends Bird implements Swimmable, Walkable {
    public Penguin(String name) {
        super(name, "Penguin");
    }
    
    @Override
    public void swim() {
        System.out.println(name + " the penguin is swimming gracefully");
    }
    
    @Override
    public void walk() {
        System.out.println(name + " the penguin is waddling");
    }
    
    // Penguins can't fly, so no Flyable interface
}

// Class implementing only one interface
class Eagle extends Bird implements Flyable {
    public Eagle(String name) {
        super(name, "Eagle");
    }
    
    @Override
    public void fly() {
        System.out.println(name + " the eagle is soaring high");
    }
    
    public void hunt() {
        System.out.println(name + " is hunting for prey");
    }
}

// Usage
public class MultipleInheritanceDemo {
    public static void main(String[] args) {
        Duck duck = new Duck("Donald");
        Penguin penguin = new Penguin("Pingu");
        Eagle eagle = new Eagle("Eddie");
        
        System.out.println("=== Duck Capabilities ===");
        duck.eat();     // From Bird class
        duck.fly();     // From Flyable interface
        duck.swim();    // From Swimmable interface
        duck.walk();    // From Walkable interface
        duck.takeOff(); // Default method from Flyable
        duck.dive();    // Default method from Swimmable
        duck.run();     // Default method from Walkable
        duck.quack();   // Own method
        
        System.out.println("\n=== Penguin Capabilities ===");
        penguin.eat();  // From Bird class
        penguin.swim(); // From Swimmable interface
        penguin.walk(); // From Walkable interface
        penguin.dive(); // Default method from Swimmable
        penguin.run();  // Default method from Walkable
        // penguin.fly(); // Not available - doesn't implement Flyable
        
        System.out.println("\n=== Eagle Capabilities ===");
        eagle.eat();     // From Bird class
        eagle.fly();     // From Flyable interface
        eagle.takeOff(); // Default method from Flyable
        eagle.hunt();    // Own method
        // eagle.swim();  // Not available - doesn't implement Swimmable
        
        // Demonstrating polymorphism with interfaces
        System.out.println("\n=== Interface Polymorphism ===");
        Flyable[] flyingBirds = {duck, eagle};
        for (Flyable bird : flyingBirds) {
            bird.fly();
            bird.takeOff();
        }
        
        Swimmable[] swimmingBirds = {duck, penguin};
        for (Swimmable bird : swimmingBirds) {
            bird.swim();
            bird.dive();
        }
    }
}`
            }
          },
        polymorphism: {
          title: "Java Polymorphism",
          description: "Polymorphism allows objects of different types to be treated as objects of a common base type, enabling one interface to represent different underlying forms (data types).",
          introduction: {
            title: "Introduction to Polymorphism",
            definition: {
              title: "Definition: One interface, many implementations",
              description: "Polymorphism comes from Greek words 'poly' (many) and 'morph' (forms). It allows a single interface to represent different underlying forms.",
              benefits: [
                "Code Reusability - Write code once, use with multiple types",
                "Flexibility - Easy to extend and maintain code",
                "Abstraction - Hide implementation details behind common interface",
                "Loose Coupling - Reduce dependencies between components"
              ],
              realWorldExample: "A remote control (interface) can operate different devices (TV, AC, Music System) with same buttons but different behaviors."
            },
            compileTimeVsRuntime: {
              title: "Compile-time vs Runtime polymorphism",
              compileTime: {
                title: "Compile-Time Polymorphism (Static Binding)",
                description: "Method calls are resolved at compile time. Also known as early binding.",
                characteristics: [
                  "Resolved during compilation",
                  "Faster execution (no runtime overhead)",
                  "Achieved through method overloading",
                  "Based on method signature"
                ]
              },
              runtime: {
                title: "Runtime Polymorphism (Dynamic Binding)",
                description: "Method calls are resolved at runtime based on actual object type. Also known as late binding.",
                characteristics: [
                  "Resolved during program execution",
                  "Slight runtime overhead for method resolution",
                  "Achieved through method overriding and inheritance",
                  "Based on actual object type"
                ]
              }
            }
          },
          types: {
            title: "Types of Polymorphism in Java",
            compileTime: {
              title: "Compile-Time Polymorphism (Static Binding)",
              description: "Polymorphism resolved at compile time through method and constructor overloading.",
              methodOverloading: {
                title: "Method Overloading",
                description: "Multiple methods with same name but different parameters in the same class.",
                rules: [
                  "Same method name, different parameters",
                  "Different number of parameters",
                  "Different types of parameters",
                  "Different order of parameters",
                  "Cannot overload based only on return type"
                ],
                example: `public class Calculator {
    // Method overloading based on number of parameters
    public int add(int a, int b) {
        System.out.println("Adding two integers: " + a + " + " + b);
        return a + b;
    }
    
    public int add(int a, int b, int c) {
        System.out.println("Adding three integers: " + a + " + " + b + " + " + c);
        return a + b + c;
    }
    
    // Method overloading based on parameter types
    public double add(double a, double b) {
        System.out.println("Adding two doubles: " + a + " + " + b);
        return a + b;
    }
    
    public String add(String a, String b) {
        System.out.println("Concatenating strings: " + a + " + " + b);
        return a + b;
    }
    
    // Method overloading based on parameter order
    public void display(String name, int age) {
        System.out.println("Name: " + name + ", Age: " + age);
    }
    
    public void display(int age, String name) {
        System.out.println("Age: " + age + ", Name: " + name);
    }
    
    // Variable arguments (varargs) overloading
    public int add(int... numbers) {
        System.out.println("Adding variable number of integers");
        int sum = 0;
        for (int num : numbers) {
            sum += num;
        }
        return sum;
    }
    
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        
        // Compiler determines which method to call based on arguments
        System.out.println("Result: " + calc.add(5, 3));           // Calls add(int, int)
        System.out.println("Result: " + calc.add(5, 3, 2));        // Calls add(int, int, int)
        System.out.println("Result: " + calc.add(5.5, 3.2));       // Calls add(double, double)
        System.out.println("Result: " + calc.add("Hello", "World")); // Calls add(String, String)
        
        calc.display("Alice", 25);    // Calls display(String, int)
        calc.display(30, "Bob");       // Calls display(int, String)
        
        System.out.println("Result: " + calc.add(1, 2, 3, 4, 5)); // Calls add(int...)
    }
}`
              },
              constructorOverloading: {
                title: "Constructor Overloading",
                description: "Multiple constructors with different parameters in the same class.",
                example: `public class Student {
    private String name;
    private int age;
    private String studentId;
    private String course;
    private double gpa;
    
    // Default constructor
    public Student() {
        this.name = "Unknown";
        this.age = 0;
        this.studentId = "N/A";
        this.course = "Undeclared";
        this.gpa = 0.0;
        System.out.println("Default constructor called");
    }
    
    // Constructor with name only
    public Student(String name) {
        this(); // Call default constructor
        this.name = name;
        System.out.println("Constructor with name called");
    }
    
    // Constructor with name and age
    public Student(String name, int age) {
        this(name); // Call constructor with name
        this.age = age;
        System.out.println("Constructor with name and age called");
    }
    
    // Constructor with name, age, and studentId
    public Student(String name, int age, String studentId) {
        this(name, age); // Call constructor with name and age
        this.studentId = studentId;
        System.out.println("Constructor with name, age, and ID called");
    }
    
    // Constructor with all parameters
    public Student(String name, int age, String studentId, String course, double gpa) {
        this(name, age, studentId); // Call constructor with name, age, and ID
        this.course = course;
        this.gpa = gpa;
        System.out.println("Full constructor called");
    }
    
    public void displayInfo() {
        System.out.println("Student Info:");
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Student ID: " + studentId);
        System.out.println("Course: " + course);
        System.out.println("GPA: " + gpa);
        System.out.println();
    }
    
    public static void main(String[] args) {
        // Different constructors called based on arguments
        Student student1 = new Student();
        student1.displayInfo();
        
        Student student2 = new Student("Alice");
        student2.displayInfo();
        
        Student student3 = new Student("Bob", 20);
        student3.displayInfo();
        
        Student student4 = new Student("Charlie", 22, "STU001");
        student4.displayInfo();
        
        Student student5 = new Student("Diana", 21, "STU002", "Computer Science", 3.8);
        student5.displayInfo();
    }
}`
              }
            },
            runtime: {
              title: "Runtime Polymorphism (Dynamic Binding)",
              description: "Polymorphism achieved through method overriding and resolved at runtime based on actual object type.",
              methodOverriding: {
                title: "Method Overriding",
                description: "Redefining a parent class method in the subclass with same signature but different implementation.",
                rules: [
                  "Method signature must be exactly the same",
                  "Return type must be same or covariant",
                  "Access modifier cannot be more restrictive",
                  "Cannot override static, final, or private methods",
                  "Use @Override annotation for compile-time checking"
                ],
                example: `// Base class
abstract class Shape {
    protected String color;
    protected boolean filled;
    
    public Shape(String color, boolean filled) {
        this.color = color;
        this.filled = filled;
    }
    
    // Method to be overridden
    public abstract double getArea();
    
    // Method to be overridden
    public abstract double getPerimeter();
    
    // Method that can be overridden
    public void displayInfo() {
        System.out.println("Shape - Color: " + color + ", Filled: " + filled);
    }
    
    // Final method - cannot be overridden
    public final void printType() {
        System.out.println("This is a geometric shape");
    }
}

// Derived class 1
class Circle extends Shape {
    private double radius;
    
    public Circle(String color, boolean filled, double radius) {
        super(color, filled);
        this.radius = radius;
    }
    
    @Override
    public double getArea() {
        return Math.PI * radius * radius;
    }
    
    @Override
    public double getPerimeter() {
        return 2 * Math.PI * radius;
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo(); // Call parent method
        System.out.println("Circle - Radius: " + radius);
        System.out.println("Area: " + getArea());
        System.out.println("Perimeter: " + getPerimeter());
    }
}

// Derived class 2
class Rectangle extends Shape {
    private double length;
    private double width;
    
    public Rectangle(String color, boolean filled, double length, double width) {
        super(color, filled);
        this.length = length;
        this.width = width;
    }
    
    @Override
    public double getArea() {
        return length * width;
    }
    
    @Override
    public double getPerimeter() {
        return 2 * (length + width);
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Rectangle - Length: " + length + ", Width: " + width);
        System.out.println("Area: " + getArea());
        System.out.println("Perimeter: " + getPerimeter());
    }
}

// Derived class 3
class Triangle extends Shape {
    private double side1, side2, side3;
    
    public Triangle(String color, boolean filled, double side1, double side2, double side3) {
        super(color, filled);
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }
    
    @Override
    public double getArea() {
        // Using Heron's formula
        double s = getPerimeter() / 2;
        return Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
    }
    
    @Override
    public double getPerimeter() {
        return side1 + side2 + side3;
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Triangle - Sides: " + side1 + ", " + side2 + ", " + side3);
        System.out.println("Area: " + getArea());
        System.out.println("Perimeter: " + getPerimeter());
    }
}`
              },
              dynamicMethodDispatch: {
                title: "Invoking overridden methods using parent reference",
                description: "Runtime polymorphism allows calling overridden methods through parent class references.",
                example: `public class PolymorphismDemo {
    public static void main(String[] args) {
        // Runtime polymorphism - parent reference, child objects
        Shape[] shapes = {
            new Circle("Red", true, 5.0),
            new Rectangle("Blue", false, 4.0, 6.0),
            new Triangle("Green", true, 3.0, 4.0, 5.0)
        };
        
        System.out.println("=== Polymorphic Method Calls ===");
        
        // Same method call, different implementations
        for (Shape shape : shapes) {
            shape.displayInfo();    // Calls overridden method based on actual object type
            shape.printType();      // Calls final method from parent class
            
            // Calculate and display area and perimeter
            System.out.println("Calculated Area: " + shape.getArea());
            System.out.println("Calculated Perimeter: " + shape.getPerimeter());
            System.out.println("-".repeat(40));
        }
        
        // Demonstrating method resolution at runtime
        System.out.println("\n=== Runtime Method Resolution ===");
        
        Shape shape1 = new Circle("Yellow", true, 3.0);
        Shape shape2 = new Rectangle("Purple", false, 5.0, 8.0);
        
        // Method calls resolved at runtime based on actual object type
        processShape(shape1);  // Calls Circle's methods
        processShape(shape2);  // Calls Rectangle's methods
        
        // Changing reference at runtime
        System.out.println("\n=== Dynamic Reference Change ===");
        Shape dynamicShape = new Circle("Orange", true, 2.5);
        processShape(dynamicShape);
        
        dynamicShape = new Rectangle("Pink", true, 3.0, 7.0);
        processShape(dynamicShape);
    }
    
    // Method that works with any Shape subclass
    public static void processShape(Shape shape) {
        System.out.println("Processing shape...");
        shape.displayInfo();  // Polymorphic method call
        
        // Calculate total measurements
        double area = shape.getArea();
        double perimeter = shape.getPerimeter();
        
        System.out.println("Total measurements - Area: " + area + ", Perimeter: " + perimeter);
        System.out.println();
    }
}`
              }
            }
          },
        abstraction: {
          title: "Java Abstraction",
          description: "Abstraction is the process of hiding implementation details while showing only essential features to the user. It focuses on what an object does rather than how it does it.",
          whatIsAbstraction: {
            title: "What is Abstraction?",
            definition: {
              title: "Hiding internal implementation details",
              description: "Abstraction allows you to focus on what an object does instead of how it does it.",
              characteristics: [
                "Hides complex implementation details",
                "Provides a simplified interface",
                "Reduces code complexity",
                "Enables code maintainability",
                "Supports modularity"
              ]
            },
            essentialFeatures: {
              title: "Showing only essential features",
              description: "Users interact with objects through well-defined interfaces without knowing internal workings.",
              realWorldExample: "A car driver uses steering wheel, pedals, and gear shift without knowing engine mechanics."
            },
            achievedUsing: {
              title: "Achieved using abstract classes and interfaces",
              description: "Java provides two main mechanisms for abstraction.",
              mechanisms: [
                "Abstract Classes - Partial abstraction with some concrete methods",
                "Interfaces - Complete abstraction (traditionally) with contracts"
              ]
            }
          },
          abstractClass: {
            title: "Abstract Class",
            description: "A class declared with abstract keyword that cannot be instantiated and may contain abstract methods.",
            declaration: {
              title: "Declared using abstract keyword",
              syntax: "abstract class ClassName { ... }",
              example: `// Basic abstract class example
abstract class Animal {
    // Abstract method - no implementation
    abstract void makeSound();
    
    // Concrete method - has implementation
    void eat() {
        System.out.println("This animal eats food.");
    }
}`
            },
            canContain: {
              title: "Can contain:",
              abstractMethods: {
                title: "Abstract methods (no body)",
                description: "Methods declared without implementation, must be overridden in subclasses."
              },
              nonAbstractMethods: {
                title: "Non-abstract methods (with body)",
                description: "Regular methods with complete implementation."
              },
              fieldsAndConstructors: {
                title: "Fields and constructors",
                description: "Instance variables and constructors for initialization."
              }
            },
            cannotBeInstantiated: {
              title: "Cannot be instantiated",
              description: "Abstract classes cannot be directly instantiated using new keyword."
            },
            partialAbstraction: {
              title: "Used when partial abstraction is needed",
              description: "When you want to provide some common functionality while forcing subclasses to implement specific methods."
            },
            comprehensiveExample: {
              title: "Comprehensive Abstract Class Example",
              example: `// Abstract class representing a geometric shape
abstract class Shape {
    // Instance variables
    protected String color;
    protected boolean filled;
    
    // Constructor
    public Shape(String color, boolean filled) {
        this.color = color;
        this.filled = filled;
        System.out.println("Shape constructor called");
    }
    
    // Abstract methods - must be implemented by subclasses
    public abstract double getArea();
    public abstract double getPerimeter();
    public abstract void draw();
    
    // Concrete methods - inherited by subclasses
    public void displayInfo() {
        System.out.println("Color: " + color);
        System.out.println("Filled: " + filled);
        System.out.println("Area: " + getArea());
        System.out.println("Perimeter: " + getPerimeter());
    }
    
    public void setColor(String color) {
        this.color = color;
    }
    
    public String getColor() {
        return color;
    }
    
    // Final method - cannot be overridden
    public final void printShapeType() {
        System.out.println("This is a geometric shape");
    }
}

// Concrete subclass - Circle
class Circle extends Shape {
    private double radius;
    
    public Circle(String color, boolean filled, double radius) {
        super(color, filled);
        this.radius = radius;
    }
    
    // Implement abstract methods
    @Override
    public double getArea() {
        return Math.PI * radius * radius;
    }
    
    @Override
    public double getPerimeter() {
        return 2 * Math.PI * radius;
    }
    
    @Override
    public void draw() {
        System.out.println("Drawing a circle with radius " + radius);
    }
    
    // Additional method specific to Circle
    public double getDiameter() {
        return 2 * radius;
    }
}

// Concrete subclass - Rectangle
class Rectangle extends Shape {
    private double length;
    private double width;
    
    public Rectangle(String color, boolean filled, double length, double width) {
        super(color, filled);
        this.length = length;
        this.width = width;
    }
    
    // Implement abstract methods
    @Override
    public double getArea() {
        return length * width;
    }
    
    @Override
    public double getPerimeter() {
        return 2 * (length + width);
    }
    
    @Override
    public void draw() {
        System.out.println("Drawing a rectangle " + length + "x" + width);
    }
    
    // Additional method specific to Rectangle
    public boolean isSquare() {
        return length == width;
    }
}

// Usage demonstration
public class AbstractClassDemo {
    public static void main(String[] args) {
        // Cannot instantiate abstract class
        // Shape shape = new Shape("Red", true); // Compilation error
        
        // Create concrete objects
        Circle circle = new Circle("Blue", true, 5.0);
        Rectangle rectangle = new Rectangle("Green", false, 4.0, 6.0);
        
        // Use abstract class reference for polymorphism
        Shape[] shapes = {circle, rectangle};
        
        System.out.println("=== Shape Information ===");
        for (Shape shape : shapes) {
            shape.draw();           // Calls overridden method
            shape.displayInfo();    // Calls inherited method
            shape.printShapeType(); // Calls final method
            System.out.println("-".repeat(30));
        }
        
        // Access subclass-specific methods
        System.out.println("Circle diameter: " + circle.getDiameter());
        System.out.println("Is rectangle a square? " + rectangle.isSquare());
    }
}`
            }
          },
          interface: {
            title: "Interface",
            description: "A contract that defines what methods a class must implement, providing complete abstraction.",
            fullyAbstract: {
              title: "Fully abstract (until Java 7)",
              description: "Traditional interfaces contained only abstract methods and constants.",
              example: `// Traditional interface (Java 7 and earlier)
interface Vehicle {
    // All methods are implicitly public and abstract
    void start();
    void stop();
    void accelerate();
    
    // All variables are implicitly public, static, and final
    int MAX_SPEED = 200;
    String DEFAULT_COLOR = "White";
}`
            },
            java8Features: {
              title: "Java 8+: Can contain default and static methods",
              description: "Java 8 introduced default and static methods in interfaces.",
              defaultMethods: {
                title: "Default Methods",
                description: "Methods with implementation that can be inherited by implementing classes.",
                syntax: "default returnType methodName() { ... }"
              },
              staticMethods: {
                title: "Static Methods",
                description: "Utility methods that belong to the interface itself.",
                syntax: "static returnType methodName() { ... }"
              },
              example: `// Modern interface with Java 8+ features
interface Drawable {
    // Abstract method - must be implemented
    void draw();
    
    // Default method - can be inherited or overridden
    default void setColor(String color) {
        System.out.println("Setting color to " + color);
    }
    
    // Static method - belongs to interface
    static void printDrawingInfo() {
        System.out.println("This interface provides drawing capabilities");
    }
    
    // Constants
    String DEFAULT_COLOR = "Black";
    int DEFAULT_SIZE = 10;
}`
            },
            java9Features: {
              title: "Java 9+: Can also contain private methods",
              description: "Java 9 added private methods to interfaces for code reuse within the interface.",
              example: `// Java 9+ interface with private methods
interface Calculator {
    // Abstract methods
    double add(double a, double b);
    double subtract(double a, double b);
    
    // Default methods using private helper
    default double addAndPrint(double a, double b) {
        double result = add(a, b);
        printResult("Addition", a, b, result);
        return result;
    }
    
    default double subtractAndPrint(double a, double b) {
        double result = subtract(a, b);
        printResult("Subtraction", a, b, result);
        return result;
    }
    
    // Private method - code reuse within interface
    private void printResult(String operation, double a, double b, double result) {
        System.out.println(operation + ": " + a + " and " + b + " = " + result);
    }
    
    // Static method
    static void printCalculatorInfo() {
        System.out.println("This is a calculator interface");
    }
}`
            },
            multipleInheritance: {
              title: "Used for 100% abstraction (multiple inheritance support)",
              description: "Interfaces enable multiple inheritance of type, allowing a class to implement multiple interfaces.",
              example: `// Multiple interfaces for different capabilities
interface Flyable {
    void fly();
    
    default void takeOff() {
        System.out.println("Taking off for flight");
    }
}

interface Swimmable {
    void swim();
    
    default void dive() {
        System.out.println("Diving into water");
    }
}

interface Walkable {
    void walk();
    
    default void run() {
        System.out.println("Running fast");
    }
}

// Class implementing multiple interfaces
class Duck implements Flyable, Swimmable, Walkable {
    private String name;
    
    public Duck(String name) {
        this.name = name;
    }
    
    @Override
    public void fly() {
        System.out.println(name + " is flying gracefully");
    }
    
    @Override
    public void swim() {
        System.out.println(name + " is swimming in the pond");
    }
    
    @Override
    public void walk() {
        System.out.println(name + " is waddling on land");
    }
    
    // Can override default methods if needed
    @Override
    public void takeOff() {
        System.out.println(name + " flaps wings and takes off");
    }
}

// Usage demonstration
public class MultipleInterfaceDemo {
    public static void main(String[] args) {
        Duck duck = new Duck("Donald");
        
        // Use as different interface types
        Flyable flyingDuck = duck;
        Swimmable swimmingDuck = duck;
        Walkable walkingDuck = duck;
        
        // Polymorphic behavior
        flyingDuck.fly();
        flyingDuck.takeOff();
        
        swimmingDuck.swim();
        swimmingDuck.dive();
        
        walkingDuck.walk();
        walkingDuck.run();
    }
}`
            }
          },
          keyDifferences: {
            title: "Key Differences: Abstract Class vs Interface",
            description: "Understanding when to use abstract classes versus interfaces.",
            comparisonTable: {
              inheritance: {
                feature: "Inheritance",
                abstractClass: "Single",
                interface: "Multiple (via interfaces)"
              },
              methods: {
                feature: "Methods",
                abstractClass: "Abstract + Non-abstract",
                interface: "Abstract (Java 7), also default, static in Java 8+"
              },
              fields: {
                feature: "Fields",
                abstractClass: "Instance variables",
                interface: "Public static final only"
              },
              constructor: {
                feature: "Constructor allowed",
                abstractClass: "Yes",
                interface: "No"
              },
              accessModifiers: {
                feature: "Access Modifiers",
                abstractClass: "All access modifiers",
                interface: "Public (implicitly)"
              },
              instantiation: {
                feature: "Instantiation",
                abstractClass: "Cannot be instantiated",
                interface: "Cannot be instantiated"
              }
            },
            practicalExample: {
              title: "Practical Comparison Example",
              example: `// Abstract class example - partial abstraction
abstract class Employee {
    // Instance variables
    protected String name;
    protected int id;
    protected double baseSalary;
    
    // Constructor
    public Employee(String name, int id, double baseSalary) {
        this.name = name;
        this.id = id;
        this.baseSalary = baseSalary;
    }
    
    // Abstract method - must be implemented
    public abstract double calculateSalary();
    
    // Concrete method - inherited by all subclasses
    public void displayInfo() {
        System.out.println("Employee: " + name + ", ID: " + id);
        System.out.println("Base Salary: $" + baseSalary);
        System.out.println("Total Salary: $" + calculateSalary());
    }
    
    // Getters and setters
    public String getName() { return name; }
    public int getId() { return id; }
}

// Interface example - complete abstraction
interface Payable {
    double calculatePay();
    
    default void processPayment() {
        System.out.println("Processing payment of $" + calculatePay());
    }
    
    static void printPaymentInfo() {
        System.out.println("Payment processing system v1.0");
    }
}

interface Taxable {
    double calculateTax();
    
    default double getNetPay() {
        return calculatePay() - calculateTax();
    }
    
    // This creates a conflict - implementing class must resolve
    double calculatePay();
}

// Concrete class extending abstract class and implementing interfaces
class FullTimeEmployee extends Employee implements Payable, Taxable {
    private double bonus;
    
    public FullTimeEmployee(String name, int id, double baseSalary, double bonus) {
        super(name, id, baseSalary);
        this.bonus = bonus;
    }
    
    @Override
    public double calculateSalary() {
        return baseSalary + bonus;
    }
    
    @Override
    public double calculatePay() {
        return calculateSalary();
    }
    
    @Override
    public double calculateTax() {
        return calculatePay() * 0.2; // 20% tax
    }
    
    @Override
    public void processPayment() {
        System.out.println("Processing full-time employee payment for " + name);
        Payable.super.processPayment(); // Call interface default method
    }
}

class ContractEmployee implements Payable, Taxable {
    private String name;
    private double hourlyRate;
    private int hoursWorked;
    
    public ContractEmployee(String name, double hourlyRate, int hoursWorked) {
        this.name = name;
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    
    @Override
    public double calculatePay() {
        return hourlyRate * hoursWorked;
    }
    
    @Override
    public double calculateTax() {
        return calculatePay() * 0.15; // 15% tax for contractors
    }
    
    public void displayInfo() {
        System.out.println("Contractor: " + name);
        System.out.println("Hourly Rate: $" + hourlyRate + ", Hours: " + hoursWorked);
        System.out.println("Gross Pay: $" + calculatePay());
        System.out.println("Tax: $" + calculateTax());
        System.out.println("Net Pay: $" + getNetPay());
    }
}

// Usage demonstration
public class AbstractVsInterfaceDemo {
    public static void main(String[] args) {
        // Create different types of employees
        FullTimeEmployee fullTime = new FullTimeEmployee("Alice", 101, 5000, 1000);
        ContractEmployee contractor = new ContractEmployee("Bob", 50, 160);
        
        System.out.println("=== Full-Time Employee ===");
        fullTime.displayInfo();  // From abstract class
        fullTime.processPayment(); // From interface
        
        System.out.println("\n=== Contract Employee ===");
        contractor.displayInfo(); // Own method
        contractor.processPayment(); // From interface
        
        // Polymorphism with interfaces
        System.out.println("\n=== Polymorphic Payment Processing ===");
        Payable[] payables = {fullTime, contractor};
        
        for (Payable payable : payables) {
            payable.processPayment();
        }
        
        // Static method call
        Payable.printPaymentInfo();
    }
}`
            }
          },
          implementsAndExtends: {
            title: "Use of implements and extends",
            description: "Understanding the keywords used for inheritance and interface implementation.",
            extends: {
              title: "extends → for class-to-class or class-to-abstract-class",
              description: "Used when a class inherits from another class or abstract class.",
              syntax: "class ChildClass extends ParentClass { ... }",
              rules: [
                "Single inheritance only",
                "Inherits all non-private members",
                "Can override parent methods",
                "Must call parent constructor"
              ]
            },
            implements: {
              title: "implements → class-to-interface",
              description: "Used when a class implements one or more interfaces.",
              syntax: "class ClassName implements Interface1, Interface2 { ... }",
              rules: [
                "Multiple interfaces can be implemented",
                "Must implement all abstract methods",
                "Can override default methods",
                "Inherits default and static methods"
              ]
            },
            combinedUsage: {
              title: "Combined Usage Example",
              example: `// Base abstract class
abstract class Vehicle {
    protected String brand;
    protected String model;
    
    public Vehicle(String brand, String model) {
        this.brand = brand;
        this.model = model;
    }
    
    public abstract void start();
    
    public void displayInfo() {
        System.out.println(brand + " " + model);
    }
}

// Interfaces
interface Electric {
    void chargeBattery();
    
    default void displayBatteryStatus() {
        System.out.println("Battery status: Checking...");
    }
}

interface GPS {
    void navigate(String destination);
    
    static void showGPSVersion() {
        System.out.println("GPS Version 2.0");
    }
}

interface Autonomous {
    void enableAutoPilot();
    void disableAutoPilot();
}

// Class using both extends and implements
class TeslaModel3 extends Vehicle implements Electric, GPS, Autonomous {
    private int batteryLevel;
    private boolean autoPilotEnabled;
    
    public TeslaModel3() {
        super("Tesla", "Model 3");
        this.batteryLevel = 100;
        this.autoPilotEnabled = false;
    }
    
    // Implement abstract method from Vehicle
    @Override
    public void start() {
        System.out.println("Tesla Model 3 starting silently...");
    }
    
    // Implement Electric interface
    @Override
    public void chargeBattery() {
        batteryLevel = 100;
        System.out.println("Battery charged to 100%");
    }
    
    @Override
    public void displayBatteryStatus() {
        System.out.println("Battery level: " + batteryLevel + "%");
    }
    
    // Implement GPS interface
    @Override
    public void navigate(String destination) {
        System.out.println("Navigating to " + destination + " using Tesla GPS");
    }
    
    // Implement Autonomous interface
    @Override
    public void enableAutoPilot() {
        autoPilotEnabled = true;
        System.out.println("AutoPilot enabled - hands-free driving activated");
    }
    
    @Override
    public void disableAutoPilot() {
        autoPilotEnabled = false;
        System.out.println("AutoPilot disabled - manual driving required");
    }
    
    // Additional Tesla-specific method
    public void summonCar() {
        System.out.println("Tesla is coming to your location");
    }
}

// Regular car class - only extends
class ToyotaCamry extends Vehicle {
    public ToyotaCamry() {
        super("Toyota", "Camry");
    }
    
    @Override
    public void start() {
        System.out.println("Toyota Camry engine starting...");
    }
}

// Usage demonstration
public class ExtendsImplementsDemo {
    public static void main(String[] args) {
        TeslaModel3 tesla = new TeslaModel3();
        ToyotaCamry toyota = new ToyotaCamry();
        
        System.out.println("=== Tesla Model 3 Features ===");
        tesla.displayInfo();        // From Vehicle (abstract class)
        tesla.start();              // Overridden method
        tesla.chargeBattery();      // From Electric interface
        tesla.displayBatteryStatus(); // Overridden default method
        tesla.navigate("San Francisco"); // From GPS interface
        tesla.enableAutoPilot();    // From Autonomous interface
        tesla.summonCar();          // Tesla-specific method
        
        System.out.println("\n=== Toyota Camry Features ===");
        toyota.displayInfo();       // From Vehicle (abstract class)
        toyota.start();             // Overridden method
        
        // Polymorphism with abstract class
        System.out.println("\n=== Polymorphic Vehicle Usage ===");
        Vehicle[] vehicles = {tesla, toyota};
        for (Vehicle vehicle : vehicles) {
            vehicle.displayInfo();
            vehicle.start();
        }
        
        // Interface polymorphism
        System.out.println("\n=== Interface Polymorphism ===");
        Electric electricVehicle = tesla;
        electricVehicle.chargeBattery();
        electricVehicle.displayBatteryStatus();
        
        GPS gpsEnabled = tesla;
        gpsEnabled.navigate("Los Angeles");
        GPS.showGPSVersion(); // Static method call
    }
}`
            }
          },
          realWorldExample: {
            title: "Real-world Example",
            description: "Comprehensive example demonstrating abstraction in a payroll system.",
            example: `// Abstract class for Employee hierarchy
abstract class Employee {
    protected String name;
    protected int employeeId;
    protected String department;
    protected double baseSalary;
    
    public Employee(String name, int employeeId, String department, double baseSalary) {
        this.name = name;
        this.employeeId = employeeId;
        this.department = department;
        this.baseSalary = baseSalary;
    }
    
    // Abstract method - each employee type calculates salary differently
    public abstract double calculateSalary();
    
    // Concrete methods - common to all employees
    public void displayBasicInfo() {
        System.out.println("Employee ID: " + employeeId);
        System.out.println("Name: " + name);
        System.out.println("Department: " + department);
        System.out.println("Base Salary: $" + baseSalary);
    }
    
    public String getName() { return name; }
    public int getEmployeeId() { return employeeId; }
    public String getDepartment() { return department; }
}

// Interface for payable entities
interface Payable {
    double calculatePay();
    
    default void processPayment() {
        double amount = calculatePay();
        System.out.println("Processing payment of $" + String.format("%.2f", amount));
    }
    
    static void printPayrollSystem() {
        System.out.println("Payroll Management System v2.0");
    }
}

// Interface for tax calculation
interface Taxable {
    double calculateTax();
    
    default double getNetPay() {
        return calculatePay() - calculateTax();
    }
    
    // Method that creates diamond problem - resolved by implementing class
    double calculatePay();
}

// Interface for benefits
interface BenefitEligible {
    double calculateBenefits();
    
    default void enrollInBenefits() {
        System.out.println("Enrolling in company benefits package");
    }
}

// Concrete class - Full-time employee
class FullTimeEmployee extends Employee implements Payable, Taxable, BenefitEligible {
    private double bonus;
    private double healthInsurance;
    private double retirement401k;
    
    public FullTimeEmployee(String name, int employeeId, String department, 
                           double baseSalary, double bonus) {
        super(name, employeeId, department, baseSalary);
        this.bonus = bonus;
        this.healthInsurance = 500.0; // Monthly health insurance
        this.retirement401k = baseSalary * 0.06; // 6% 401k contribution
    }
    
    @Override
    public double calculateSalary() {
        return baseSalary + bonus;
    }
    
    @Override
    public double calculatePay() {
        return calculateSalary();
    }
    
    @Override
    public double calculateTax() {
        double grossPay = calculatePay();
        if (grossPay <= 50000) {
            return grossPay * 0.15; // 15% tax bracket
        } else if (grossPay <= 100000) {
            return grossPay * 0.22; // 22% tax bracket
        } else {
            return grossPay * 0.28; // 28% tax bracket
        }
    }
    
    @Override
    public double calculateBenefits() {
        return healthInsurance + retirement401k;
    }
    
    public void displayFullDetails() {
        displayBasicInfo();
        System.out.println("Employee Type: Full-Time");
        System.out.println("Bonus: $" + bonus);
        System.out.println("Gross Pay: $" + String.format("%.2f", calculatePay()));
        System.out.println("Tax: $" + String.format("%.2f", calculateTax()));
        System.out.println("Benefits: $" + String.format("%.2f", calculateBenefits()));
        System.out.println("Net Pay: $" + String.format("%.2f", getNetPay()));
    }
}

// Concrete class - Part-time employee
class PartTimeEmployee extends Employee implements Payable, Taxable {
    private int hoursWorked;
    private double hourlyRate;
    
    public PartTimeEmployee(String name, int employeeId, String department, 
                           double hourlyRate, int hoursWorked) {
        super(name, employeeId, department, 0); // No base salary for part-time
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    
    @Override
    public double calculateSalary() {
        return hourlyRate * hoursWorked;
    }
    
    @Override
    public double calculatePay() {
        return calculateSalary();
    }
    
    @Override
    public double calculateTax() {
        return calculatePay() * 0.12; // 12% tax for part-time
    }
    
    public void displayFullDetails() {
        displayBasicInfo();
        System.out.println("Employee Type: Part-Time");
        System.out.println("Hourly Rate: $" + hourlyRate);
        System.out.println("Hours Worked: " + hoursWorked);
        System.out.println("Gross Pay: $" + String.format("%.2f", calculatePay()));
        System.out.println("Tax: $" + String.format("%.2f", calculateTax()));
        System.out.println("Net Pay: $" + String.format("%.2f", getNetPay()));
    }
}

// Concrete class - Contractor (not an employee, but payable)
class Contractor implements Payable, Taxable {
    private String name;
    private String company;
    private double contractAmount;
    private int projectDuration; // in months
    
    public Contractor(String name, String company, double contractAmount, int projectDuration) {
        this.name = name;
        this.company = company;
        this.contractAmount = contractAmount;
        this.projectDuration = projectDuration;
    }
    
    @Override
    public double calculatePay() {
        return contractAmount / projectDuration; // Monthly payment
    }
    
    @Override
    public double calculateTax() {
        return calculatePay() * 0.25; // 25% tax for contractors
    }
    
    public void displayContractorInfo() {
        System.out.println("Contractor: " + name);
        System.out.println("Company: " + company);
        System.out.println("Contract Amount: $" + contractAmount);
        System.out.println("Project Duration: " + projectDuration + " months");
        System.out.println("Monthly Pay: $" + String.format("%.2f", calculatePay()));
        System.out.println("Tax: $" + String.format("%.2f", calculateTax()));
        System.out.println("Net Pay: $" + String.format("%.2f", getNetPay()));
    }
}

// Payroll management system
class PayrollSystem {
    public static void processPayroll(Payable[] payables) {
        System.out.println("\n=== Processing Payroll ===");
        Payable.printPayrollSystem();
        
        double totalPayroll = 0;
        for (Payable payable : payables) {
            payable.processPayment();
            totalPayroll += payable.calculatePay();
        }
        
        System.out.println("Total Payroll: $" + String.format("%.2f", totalPayroll));
    }
    
    public static void generateTaxReport(Taxable[] taxables) {
        System.out.println("\n=== Tax Report ===");
        
        double totalTax = 0;
        for (Taxable taxable : taxables) {
            double tax = taxable.calculateTax();
            totalTax += tax;
            System.out.println("Tax owed: $" + String.format("%.2f", tax));
        }
        
        System.out.println("Total Tax Collected: $" + String.format("%.2f", totalTax));
    }
}

// Main demonstration
public class PayrollSystemDemo {
    public static void main(String[] args) {
        // Create different types of workers
        FullTimeEmployee fullTime1 = new FullTimeEmployee("Alice Johnson", 101, "Engineering", 80000, 10000);
        FullTimeEmployee fullTime2 = new FullTimeEmployee("Bob Smith", 102, "Marketing", 60000, 5000);
        PartTimeEmployee partTime = new PartTimeEmployee("Carol Davis", 201, "Support", 25, 80);
        Contractor contractor = new Contractor("David Wilson", "TechCorp", 120000, 12);
        
        // Display individual details
        System.out.println("=== Employee Details ===");
        fullTime1.displayFullDetails();
        System.out.println();
        
        partTime.displayFullDetails();
        System.out.println();
        
        contractor.displayContractorInfo();
        System.out.println();
        
        // Polymorphic payroll processing
        Payable[] payables = {fullTime1, fullTime2, partTime, contractor};
        PayrollSystem.processPayroll(payables);
        
        // Tax reporting
        Taxable[] taxables = {fullTime1, fullTime2, partTime, contractor};
        PayrollSystem.generateTaxReport(taxables);
        
        // Benefits enrollment for eligible employees
        System.out.println("\n=== Benefits Enrollment ===");
        if (fullTime1 instanceof BenefitEligible) {
            BenefitEligible eligible = (BenefitEligible) fullTime1;
            eligible.enrollInBenefits();
            System.out.println("Benefits value: $" + eligible.calculateBenefits());
        }
    }
}`
          }
        },
        encapsulation: {
          title: "Java Encapsulation",
          description: "Encapsulation is the process of wrapping data (variables) and code (methods) into a single unit (class), hiding internal state and providing controlled access through methods.",
          whatIsEncapsulation: {
            title: "What is Encapsulation?",
            definition: {
              title: "Encapsulation is the process of wrapping data (variables) and code (methods) into a single unit (class).",
              description: "It bundles related data and methods together, creating a protective barrier around the object's internal state.",
              analogy: "Like a capsule that contains medicine - the contents are protected and can only be accessed in controlled ways."
            },
            hidingInternalState: {
              title: "It hides the internal state of the object from the outside world and only allows controlled access via methods.",
              description: "External code cannot directly access or modify the object's internal data, ensuring data integrity and security.",
              benefits: [
                "Prevents unauthorized access to sensitive data",
                "Maintains object consistency and validity",
                "Reduces coupling between classes",
                "Enables controlled modification of internal state"
              ]
            },
            oopPillar: {
              title: "It's one of the four pillars of Object-Oriented Programming (OOP)",
              description: "Encapsulation works together with other OOP principles to create robust, maintainable software.",
              pillars: [
                "Encapsulation - Data hiding and controlled access",
                "Inheritance - Code reuse through parent-child relationships",
                "Polymorphism - One interface, multiple implementations",
                "Abstraction - Hiding implementation complexity"
              ]
            }
          },
          keyFeatures: {
            title: "Key Features of Encapsulation",
            description: "Essential characteristics that make encapsulation effective in protecting and managing object data.",
            privateVariables: {
              title: "Use of private variables",
              description: "Class fields are declared as private to prevent direct external access.",
              example: `public class BankAccount {
    // Private variables - cannot be accessed directly from outside
    private String accountNumber;
    private String accountHolderName;
    private double balance;
    private String pin;
    
    // Constructor
    public BankAccount(String accountNumber, String accountHolderName, String pin, double initialBalance) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.pin = pin;
        this.balance = initialBalance;
    }
}`
            },
            getterSetterMethods: {
              title: "Use of public getter and setter methods to access and modify those variables",
              description: "Controlled access to private data through public methods that can include validation and business logic.",
              example: `public class BankAccount {
    private String accountNumber;
    private String accountHolderName;
    private double balance;
    private String pin;
    private boolean isActive;
    
    // Getter methods - provide read access
    public String getAccountNumber() {
        return accountNumber;
    }
    
    public String getAccountHolderName() {
        return accountHolderName;
    }
    
    public double getBalance() {
        return balance;
    }
    
    public boolean isActive() {
        return isActive;
    }
    
    // Setter methods with validation - provide controlled write access
    public void setAccountHolderName(String accountHolderName) {
        if (accountHolderName != null && !accountHolderName.trim().isEmpty()) {
            this.accountHolderName = accountHolderName.trim();
        } else {
            throw new IllegalArgumentException("Account holder name cannot be empty");
        }
    }
    
    public boolean changePin(String oldPin, String newPin) {
        if (this.pin.equals(oldPin)) {
            if (newPin != null && newPin.length() >= 4) {
                this.pin = newPin;
                return true;
            } else {
                throw new IllegalArgumentException("PIN must be at least 4 characters");
            }
        }
        return false; // Old PIN doesn't match
    }
    
    public void setActive(boolean active) {
        this.isActive = active;
        if (!active) {
            System.out.println("Account " + accountNumber + " has been deactivated");
        }
    }
    
    // Business logic methods that modify private data
    public boolean deposit(double amount) {
        if (amount > 0 && isActive) {
            balance += amount;
            System.out.println("Deposited $" + amount + ". New balance: $" + balance);
            return true;
        }
        return false;
    }
    
    public boolean withdraw(double amount, String enteredPin) {
        if (!isActive) {
            System.out.println("Account is inactive");
            return false;
        }
        
        if (!this.pin.equals(enteredPin)) {
            System.out.println("Invalid PIN");
            return false;
        }
        
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn $" + amount + ". New balance: $" + balance);
            return true;
        } else {
            System.out.println("Insufficient funds or invalid amount");
            return false;
        }
    }
}`
            },
            dataSecurity: {
              title: "Improves data security",
              description: "By controlling access to data, encapsulation prevents unauthorized modifications and maintains data integrity.",
              securityFeatures: [
                "Prevents direct field access",
                "Validates input data",
                "Implements access control",
                "Maintains data consistency"
              ]
            },
            maintainabilityFlexibility: {
              title: "Promotes code maintainability and flexibility",
              description: "Internal implementation can be changed without affecting external code that uses the class.",
              advantages: [
                "Internal changes don't break external code",
                "Easy to add validation and business rules",
                "Simplified debugging and testing",
                "Better code organization"
              ]
            }
          },
          exampleOfEncapsulation: {
            title: "Example of Encapsulation",
            description: "Comprehensive example demonstrating proper encapsulation techniques.",
            basicExample: {
              title: "Basic Student Class Example",
              example: `public class Student {
    private String name;  // private = encapsulated
    private int age;
    private String studentId;
    private double gpa;
    
    // Constructor
    public Student(String name, int age, String studentId) {
        this.name = name;
        this.age = age;
        this.studentId = studentId;
        this.gpa = 0.0;
    }
    
    // Getter methods
    public String getName() {
        return name;
    }
    
    public int getAge() {
        return age;
    }
    
    public String getStudentId() {
        return studentId;
    }
    
    public double getGpa() {
        return gpa;
    }
    
    // Setter methods with validation
    public void setName(String name) {
        if (name != null && !name.trim().isEmpty()) {
            this.name = name.trim();
        } else {
            throw new IllegalArgumentException("Name cannot be empty");
        }
    }
    
    public void setAge(int age) {
        if (age >= 16 && age <= 100) {
            this.age = age;
        } else {
            throw new IllegalArgumentException("Age must be between 16 and 100");
        }
    }
    
    public void setGpa(double gpa) {
        if (gpa >= 0.0 && gpa <= 4.0) {
            this.gpa = gpa;
        } else {
            throw new IllegalArgumentException("GPA must be between 0.0 and 4.0");
        }
    }
    
    // Business logic method
    public void displayStudentInfo() {
        System.out.println("Student Information:");
        System.out.println("ID: " + studentId);
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("GPA: " + gpa);
    }
}

public class Main {
    public static void main(String[] args) {
        Student s = new Student("Alice Johnson", 20, "STU001");
        
        // Setting values using setter methods
        s.setName("Alice Smith");  // Valid name
        s.setGpa(3.8);            // Valid GPA
        
        // Getting values using getter methods
        System.out.println("Student Name: " + s.getName());
        System.out.println("Student GPA: " + s.getGpa());
        
        // Display complete information
        s.displayStudentInfo();
        
        // Attempting invalid operations
        try {
            s.setAge(150);  // This will throw an exception
        } catch (IllegalArgumentException e) {
            System.out.println("Error: " + e.getMessage());
        }
        
        try {
            s.setGpa(5.0);  // This will throw an exception
        } catch (IllegalArgumentException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}`
            },
            advancedExample: {
              title: "Advanced Encapsulation Example - Employee Management",
              example: `import java.time.LocalDate;
import java.time.Period;
import java.util.ArrayList;
import java.util.List;

public class Employee {
    // Private fields - encapsulated data
    private String employeeId;
    private String firstName;
    private String lastName;
    private String email;
    private String department;
    private double salary;
    private LocalDate hireDate;
    private boolean isActive;
    private List<String> skills;
    
    // Constructor
    public Employee(String employeeId, String firstName, String lastName, 
                   String email, String department, double salary) {
        this.employeeId = employeeId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.department = department;
        this.salary = salary;
        this.hireDate = LocalDate.now();
        this.isActive = true;
        this.skills = new ArrayList<>();
    }
    
    // Getter methods - controlled read access
    public String getEmployeeId() {
        return employeeId;
    }
    
    public String getFirstName() {
        return firstName;
    }
    
    public String getLastName() {
        return lastName;
    }
    
    public String getFullName() {
        return firstName + " " + lastName;
    }
    
    public String getEmail() {
        return email;
    }
    
    public String getDepartment() {
        return department;
    }
    
    public double getSalary() {
        return isActive ? salary : 0.0; // Only return salary if employee is active
    }
    
    public LocalDate getHireDate() {
        return hireDate;
    }
    
    public boolean isActive() {
        return isActive;
    }
    
    public List<String> getSkills() {
        return new ArrayList<>(skills); // Return copy to prevent external modification
    }
    
    public int getYearsOfService() {
        return Period.between(hireDate, LocalDate.now()).getYears();
    }
    
    // Setter methods with validation - controlled write access
    public void setFirstName(String firstName) {
        if (firstName != null && !firstName.trim().isEmpty()) {
            this.firstName = firstName.trim();
        } else {
            throw new IllegalArgumentException("First name cannot be empty");
        }
    }
    
    public void setLastName(String lastName) {
        if (lastName != null && !lastName.trim().isEmpty()) {
            this.lastName = lastName.trim();
        } else {
            throw new IllegalArgumentException("Last name cannot be empty");
        }
    }
    
    public void setEmail(String email) {
        if (email != null && email.contains("@") && email.contains(".")) {
            this.email = email.toLowerCase().trim();
        } else {
            throw new IllegalArgumentException("Invalid email format");
        }
    }
    
    public void setDepartment(String department) {
        if (department != null && !department.trim().isEmpty()) {
            this.department = department.trim();
        } else {
            throw new IllegalArgumentException("Department cannot be empty");
        }
    }
    
    public void setSalary(double salary) {
        if (salary >= 0) {
            this.salary = salary;
        } else {
            throw new IllegalArgumentException("Salary cannot be negative");
        }
    }
    
    public void setActive(boolean active) {
        this.isActive = active;
        if (!active) {
            System.out.println("Employee " + getFullName() + " has been deactivated");
        }
    }
    
    // Business logic methods
    public void addSkill(String skill) {
        if (skill != null && !skill.trim().isEmpty() && !skills.contains(skill.trim())) {
            skills.add(skill.trim());
            System.out.println("Skill '" + skill + "' added to " + getFullName());
        }
    }
    
    public boolean removeSkill(String skill) {
        boolean removed = skills.remove(skill);
        if (removed) {
            System.out.println("Skill '" + skill + "' removed from " + getFullName());
        }
        return removed;
    }
    
    public void giveRaise(double percentage) {
        if (isActive && percentage > 0) {
            double oldSalary = salary;
            salary += salary * (percentage / 100);
            System.out.println(getFullName() + " received a " + percentage + "% raise");
            System.out.println("Salary increased from $" + oldSalary + " to $" + salary);
        } else {
            System.out.println("Cannot give raise: Employee inactive or invalid percentage");
        }
    }
    
    public void displayEmployeeDetails() {
        System.out.println("\n=== Employee Details ===");
        System.out.println("ID: " + employeeId);
        System.out.println("Name: " + getFullName());
        System.out.println("Email: " + email);
        System.out.println("Department: " + department);
        System.out.println("Salary: $" + (isActive ? salary : "N/A (Inactive)"));
        System.out.println("Hire Date: " + hireDate);
        System.out.println("Years of Service: " + getYearsOfService());
        System.out.println("Status: " + (isActive ? "Active" : "Inactive"));
        System.out.println("Skills: " + (skills.isEmpty() ? "None" : String.join(", ", skills)));
    }
}

// Usage demonstration
public class EmployeeManagementDemo {
    public static void main(String[] args) {
        // Create employee with encapsulated data
        Employee emp = new Employee("EMP001", "John", "Doe", "john.doe@company.com", "Engineering", 75000);
        
        // Access data through getter methods
        System.out.println("Employee: " + emp.getFullName());
        System.out.println("Department: " + emp.getDepartment());
        System.out.println("Salary: $" + emp.getSalary());
        
        // Modify data through setter methods with validation
        emp.addSkill("Java");
        emp.addSkill("Spring Framework");
        emp.addSkill("Database Design");
        
        // Give a raise
        emp.giveRaise(10); // 10% raise
        
        // Display complete details
        emp.displayEmployeeDetails();
        
        // Demonstrate validation
        try {
            emp.setEmail("invalid-email"); // This will throw an exception
        } catch (IllegalArgumentException e) {
            System.out.println("\nValidation Error: " + e.getMessage());
        }
        
        try {
            emp.setSalary(-1000); // This will throw an exception
        } catch (IllegalArgumentException e) {
            System.out.println("Validation Error: " + e.getMessage());
        }
        
        // Deactivate employee
        emp.setActive(false);
        System.out.println("\nSalary after deactivation: $" + emp.getSalary()); // Returns 0.0
        
        emp.displayEmployeeDetails();
    }
}`
            }
          },
          whyUseEncapsulation: {
            title: "Why Use Encapsulation?",
            description: "Understanding the benefits and advantages of implementing encapsulation in your code.",
            benefits: {
              dataHiding: {
                title: "Data Hiding",
                explanation: "Prevents direct access to sensitive data",
                example: `public class CreditCard {
    private String cardNumber;     // Hidden from external access
    private String cvv;           // Sensitive data protected
    private String expiryDate;
    private double creditLimit;
    
    // Controlled access through methods
    public String getMaskedCardNumber() {
        return "****-****-****-" + cardNumber.substring(cardNumber.length() - 4);
    }
    
    public boolean validateTransaction(double amount, String enteredCvv) {
        // Internal validation logic
        return cvv.equals(enteredCvv) && amount <= creditLimit;
    }
    
    // CVV is never exposed directly
    public void changeCvv(String oldCvv, String newCvv) {
        if (cvv.equals(oldCvv)) {
            cvv = newCvv;
        }
    }
}`
              },
              controlOverData: {
                title: "Control over data",
                explanation: "You can control what values are allowed",
                example: `public class Temperature {
    private double celsius;
    
    public void setCelsius(double celsius) {
        if (celsius >= -273.15) {  // Absolute zero validation
            this.celsius = celsius;
        } else {
            throw new IllegalArgumentException("Temperature cannot be below absolute zero");
        }
    }
    
    public void setFahrenheit(double fahrenheit) {
        double celsiusValue = (fahrenheit - 32) * 5.0 / 9.0;
        setCelsius(celsiusValue);  // Reuse validation
    }
    
    public double getCelsius() {
        return celsius;
    }
    
    public double getFahrenheit() {
        return (celsius * 9.0 / 5.0) + 32;
    }
    
    public double getKelvin() {
        return celsius + 273.15;
    }
}`
              },
              improvedMaintainability: {
                title: "Improved maintainability",
                explanation: "You can change internal implementation without breaking code",
                example: `// Version 1 - Simple implementation
public class UserAccount {
    private String username;
    private String password;  // Plain text (bad practice, but for demo)
    
    public boolean authenticate(String user, String pass) {
        return username.equals(user) && password.equals(pass);
    }
}

// Version 2 - Enhanced security (internal change, same interface)
public class UserAccount {
    private String username;
    private String hashedPassword;  // Now using hashed passwords
    private String salt;
    
    public boolean authenticate(String user, String pass) {
        // Internal implementation changed, but method signature remains same
        return username.equals(user) && 
               hashedPassword.equals(hashPassword(pass, salt));
    }
    
    private String hashPassword(String password, String salt) {
        // Hash implementation (simplified)
        return Integer.toString((password + salt).hashCode());
    }
}`
              },
              reusability: {
                title: "Reusability",
                explanation: "Class code can be reused across multiple applications",
                example: `// Reusable encapsulated class
public class Logger {
    private String logLevel;
    private String logFile;
    private boolean isEnabled;
    
    public Logger(String logLevel, String logFile) {
        this.logLevel = logLevel;
        this.logFile = logFile;
        this.isEnabled = true;
    }
    
    public void log(String level, String message) {
        if (isEnabled && shouldLog(level)) {
            writeToFile(formatMessage(level, message));
        }
    }
    
    public void info(String message) { log("INFO", message); }
    public void warn(String message) { log("WARN", message); }
    public void error(String message) { log("ERROR", message); }
    
    // Private helper methods - implementation details hidden
    private boolean shouldLog(String level) {
        // Logic to determine if message should be logged
        return true;
    }
    
    private String formatMessage(String level, String message) {
        return "[" + level + "] " + java.time.LocalDateTime.now() + ": " + message;
    }
    
    private void writeToFile(String formattedMessage) {
        // File writing implementation
        System.out.println("Writing to " + logFile + ": " + formattedMessage);
    }
}

// Can be reused in different applications
public class WebApplication {
    private Logger logger = new Logger("INFO", "web-app.log");
    
    public void handleRequest() {
        logger.info("Handling web request");
    }
}

public class DatabaseService {
    private Logger logger = new Logger("ERROR", "database.log");
    
    public void executeQuery() {
        logger.info("Executing database query");
    }
}`
              }
            }
          },
          bestPractices: {
            title: "Best Practices for Encapsulation",
            description: "Guidelines for implementing effective encapsulation in Java applications.",
            alwaysPrivateVariables: {
              title: "Always declare class variables as private",
              description: "Make all instance variables private to ensure controlled access.",
              example: `// Good practice
public class GoodPractice {
    private String name;        // Private - good
    private int age;           // Private - good
    private double salary;     // Private - good
    
    // Public methods for controlled access
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
}

// Bad practice
public class BadPractice {
    public String name;        // Public - bad, direct access allowed
    public int age;           // Public - bad, no validation possible
    public double salary;     // Public - bad, sensitive data exposed
}`
            },
            publicGettersSetters: {
              title: "Use public getters/setters for controlled access",
              description: "Provide public methods to access and modify private data with appropriate validation.",
              example: `public class Person {
    private String name;
    private int age;
    private String email;
    
    // Getter with business logic
    public String getName() {
        return name != null ? name : "Unknown";
    }
    
    // Setter with validation
    public void setName(String name) {
        if (name != null && name.trim().length() >= 2) {
            this.name = name.trim();
        } else {
            throw new IllegalArgumentException("Name must be at least 2 characters");
        }
    }
    
    // Getter with computed value
    public String getAgeCategory() {
        if (age < 13) return "Child";
        if (age < 20) return "Teenager";
        if (age < 60) return "Adult";
        return "Senior";
    }
    
    // Setter with range validation
    public void setAge(int age) {
        if (age >= 0 && age <= 150) {
            this.age = age;
        } else {
            throw new IllegalArgumentException("Age must be between 0 and 150");
        }
    }
    
    // Setter with format validation
    public void setEmail(String email) {
        if (email != null && email.matches("^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$")) {
            this.email = email.toLowerCase();
        } else {
            throw new IllegalArgumentException("Invalid email format");
        }
    }
    
    public String getEmail() {
        return email;
    }
}`
            },
            validateInputs: {
              title: "Validate inputs inside setters if needed",
              description: "Implement validation logic in setter methods to ensure data integrity.",
              example: `public class Product {
    private String productId;
    private String name;
    private double price;
    private int quantity;
    private String category;
    
    // Comprehensive validation in setters
    public void setProductId(String productId) {
        if (productId != null && productId.matches("^[A-Z]{2}\\d{4}$")) {
            this.productId = productId;
        } else {
            throw new IllegalArgumentException("Product ID must be in format: XX0000 (e.g., AB1234)");
        }
    }
    
    public void setName(String name) {
        if (name != null && name.trim().length() >= 3 && name.trim().length() <= 50) {
            this.name = name.trim();
        } else {
            throw new IllegalArgumentException("Product name must be 3-50 characters");
        }
    }
    
    public void setPrice(double price) {
        if (price >= 0 && price <= 10000) {
            this.price = Math.round(price * 100.0) / 100.0; // Round to 2 decimal places
        } else {
            throw new IllegalArgumentException("Price must be between $0 and $10,000");
        }
    }
    
    public void setQuantity(int quantity) {
        if (quantity >= 0) {
            this.quantity = quantity;
        } else {
            throw new IllegalArgumentException("Quantity cannot be negative");
        }
    }
    
    public void setCategory(String category) {
        String[] validCategories = {"Electronics", "Clothing", "Books", "Home", "Sports"};
        if (category != null && java.util.Arrays.asList(validCategories).contains(category)) {
            this.category = category;
        } else {
            throw new IllegalArgumentException("Invalid category. Must be one of: " + 
                java.util.Arrays.toString(validCategories));
        }
    }
    
    // Business logic methods
    public double getTotalValue() {
        return price * quantity;
    }
    
    public boolean isInStock() {
        return quantity > 0;
    }
    
    public void reduceQuantity(int amount) {
        if (amount > 0 && amount <= quantity) {
            quantity -= amount;
        } else {
            throw new IllegalArgumentException("Invalid quantity to reduce");
        }
    }
}`
            }
          },
          commonMisunderstanding: {
            title: "Common Misunderstanding",
            description: "Clarifying the difference between encapsulation and abstraction.",
            encapsulationVsAbstraction: {
              title: "Encapsulation ≠ Abstraction",
              description: "While related, encapsulation and abstraction serve different purposes in OOP.",
              encapsulation: {
                title: "Encapsulation",
                description: "Hides the data (variables) and provides controlled access through methods.",
                focus: "Data hiding and access control",
                example: "Private variables with public getters/setters"
              },
              abstraction: {
                title: "Abstraction",
                description: "Hides the implementation complexity and shows only essential features.",
                focus: "Implementation hiding and interface simplification",
                example: "Abstract classes and interfaces"
              },
              comparisonExample: {
                title: "Comparison Example",
                example: `// Encapsulation example - hiding data
class EncapsulatedCar {
    private String engine;      // Data hidden
    private int speed;         // Data hidden
    
    // Controlled access to data
    public int getSpeed() {
        return speed;
    }
    
    public void setSpeed(int speed) {
        if (speed >= 0 && speed <= 200) {
            this.speed = speed;
        }
    }
}

// Abstraction example - hiding implementation complexity
abstract class AbstractCar {
    // Abstract method - implementation hidden
    public abstract void start();
    
    // Concrete method - implementation provided
    public void displayInfo() {
        System.out.println("This is a car");
    }
}

class ConcreteCar extends AbstractCar {
    @Override
    public void start() {
        // Complex implementation hidden from user
        initializeEngine();
        checkFuelLevel();
        engageIgnition();
        System.out.println("Car started");
    }
    
    // Private methods - implementation details hidden
    private void initializeEngine() { /* complex logic */ }
    private void checkFuelLevel() { /* complex logic */ }
    private void engageIgnition() { /* complex logic */ }
}

// Usage demonstrates the difference
public class EncapsulationVsAbstractionDemo {
    public static void main(String[] args) {
        // Encapsulation - controlled access to data
        EncapsulatedCar car1 = new EncapsulatedCar();
        car1.setSpeed(60);  // Controlled access with validation
        System.out.println("Speed: " + car1.getSpeed());
        
        // Abstraction - simplified interface, complex implementation hidden
        AbstractCar car2 = new ConcreteCar();
        car2.start();       // Simple method call, complex implementation hidden
        car2.displayInfo(); // User doesn't need to know how info is displayed
    }
}`
              }
            }
          }
        },
        arrays: {
          title: "Java Arrays",
          description: "Arrays are fundamental data structures in Java that store multiple elements of the same type in contiguous memory locations.",
          whatIsArray: {
            title: "What is an Array in Java?",
            definition: {
              title: "An array is a collection of elements of the same data type stored in contiguous memory locations.",
              description: "Arrays provide a way to store multiple values of the same type under a single variable name.",
              characteristics: [
                "Homogeneous - All elements must be of the same data type",
                "Indexed - Elements accessed using zero-based indexing",
                "Contiguous - Elements stored in adjacent memory locations",
                "Reference type - Arrays are objects in Java"
              ]
            },
            fixedSize: {
              title: "Arrays are fixed in size once created.",
              description: "The size of an array cannot be changed after creation. This is both a limitation and an advantage for memory management.",
              implications: [
                "Memory allocation is done once at creation time",
                "No dynamic resizing - size must be known beforehand",
                "Efficient memory usage with no overhead for resizing",
                "Use ArrayList for dynamic sizing needs"
              ]
            }
          },
          typesOfArrays: {
            title: "Types of Arrays",
            description: "Java supports different types of arrays based on dimensions and structure.",
            singleDimensional: {
              title: "Single-dimensional array",
              description: "A linear array with elements arranged in a single row.",
              example: `// Single-dimensional array examples
public class SingleDimensionalArrayDemo {
    public static void main(String[] args) {
        // Integer array
        int[] numbers = {10, 20, 30, 40, 50};
        
        // String array
        String[] fruits = {"Apple", "Banana", "Orange", "Mango"};
        
        // Double array
        double[] prices = {19.99, 25.50, 12.75, 8.99};
        
        // Boolean array
        boolean[] flags = {true, false, true, false, true};
        
        // Display arrays
        System.out.println("Numbers: ");
        for (int i = 0; i < numbers.length; i++) {
            System.out.print(numbers[i] + " ");
        }
        
        System.out.println("\n\nFruits: ");
        for (String fruit : fruits) {
            System.out.print(fruit + " ");
        }
        
        System.out.println("\n\nPrices: ");
        for (double price : prices) {
            System.out.print("$" + price + " ");
        }
        
        // Array operations
        System.out.println("\n\nArray Operations:");
        System.out.println("First number: " + numbers[0]);
        System.out.println("Last fruit: " + fruits[fruits.length - 1]);
        System.out.println("Array length: " + numbers.length);
        
        // Modify elements
        numbers[2] = 35;
        fruits[1] = "Grape";
        System.out.println("Modified number at index 2: " + numbers[2]);
        System.out.println("Modified fruit at index 1: " + fruits[1]);
    }
}`
            },
            multiDimensional: {
              title: "Multi-dimensional array (e.g., 2D arrays)",
              description: "Arrays with more than one dimension, commonly used for matrices and tables.",
              example: `// Multi-dimensional array examples
public class MultiDimensionalArrayDemo {
    public static void main(String[] args) {
        // 2D array - matrix representation
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        
        // Student grades - 2D array
        double[][] studentGrades = {
            {85.5, 92.0, 78.5},  // Student 1 grades
            {90.0, 88.5, 95.0},  // Student 2 grades
            {76.5, 82.0, 89.5}   // Student 3 grades
        };
        
        // 3D array example
        int[][][] cube = {
            {{1, 2}, {3, 4}},
            {{5, 6}, {7, 8}}
        };
        
        // Display 2D matrix
        System.out.println("Matrix:");
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println();
        }
        
        // Calculate and display student averages
        System.out.println("\nStudent Grade Averages:");
        for (int i = 0; i < studentGrades.length; i++) {
            double sum = 0;
            for (int j = 0; j < studentGrades[i].length; j++) {
                sum += studentGrades[i][j];
            }
            double average = sum / studentGrades[i].length;
            System.out.println("Student " + (i + 1) + ": " + String.format("%.2f", average));
        }
        
        // Access specific elements
        System.out.println("\nSpecific Elements:");
        System.out.println("Matrix[1][2]: " + matrix[1][2]);
        System.out.println("Student 2, Grade 3: " + studentGrades[1][2]);
        System.out.println("Cube[1][0][1]: " + cube[1][0][1]);
        
        // Matrix operations
        System.out.println("\nMatrix Operations:");
        int[][] result = addMatrices(matrix, matrix);
        System.out.println("Matrix + Matrix:");
        printMatrix(result);
    }
    
    // Method to add two matrices
    public static int[][] addMatrices(int[][] a, int[][] b) {
        int rows = a.length;
        int cols = a[0].length;
        int[][] result = new int[rows][cols];
        
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                result[i][j] = a[i][j] + b[i][j];
            }
        }
        return result;
    }
    
    // Method to print matrix
    public static void printMatrix(int[][] matrix) {
        for (int[] row : matrix) {
            for (int element : row) {
                System.out.print(element + " ");
            }
            System.out.println();
        }
    }
}`
            },
            jaggedArray: {
              title: "Jagged array (array of arrays with varying length)",
              description: "Arrays where each row can have different number of columns.",
              example: `// Jagged array examples
public class JaggedArrayDemo {
    public static void main(String[] args) {
        // Jagged array - different row lengths
        int[][] jaggedArray = {
            {1, 2, 3, 4, 5},        // 5 elements
            {10, 20},               // 2 elements
            {100, 200, 300},        // 3 elements
            {1000}                  // 1 element
        };
        
        // Dynamic jagged array creation
        int[][] dynamicJagged = new int[4][];
        dynamicJagged[0] = new int[3];  // First row has 3 elements
        dynamicJagged[1] = new int[5];  // Second row has 5 elements
        dynamicJagged[2] = new int[2];  // Third row has 2 elements
        dynamicJagged[3] = new int[4];  // Fourth row has 4 elements
        
        // Fill dynamic jagged array
        int value = 1;
        for (int i = 0; i < dynamicJagged.length; i++) {
            for (int j = 0; j < dynamicJagged[i].length; j++) {
                dynamicJagged[i][j] = value++;
            }
        }
        
        // Display jagged arrays
        System.out.println("Jagged Array:");
        for (int i = 0; i < jaggedArray.length; i++) {
            System.out.print("Row " + i + ": ");
            for (int j = 0; j < jaggedArray[i].length; j++) {
                System.out.print(jaggedArray[i][j] + " ");
            }
            System.out.println("(Length: " + jaggedArray[i].length + ")");
        }
        
        System.out.println("\nDynamic Jagged Array:");
        for (int i = 0; i < dynamicJagged.length; i++) {
            System.out.print("Row " + i + ": ");
            for (int j = 0; j < dynamicJagged[i].length; j++) {
                System.out.print(dynamicJagged[i][j] + " ");
            }
            System.out.println("(Length: " + dynamicJagged[i].length + ")");
        }
        
        // Real-world example: Student courses
        String[][] studentCourses = {
            {"Math", "Physics", "Chemistry", "Biology"},     // Student 1: 4 courses
            {"English", "History"},                          // Student 2: 2 courses
            {"Art", "Music", "Drama", "Dance", "Photography"}, // Student 3: 5 courses
            {"Computer Science"}                             // Student 4: 1 course
        };
        
        System.out.println("\nStudent Course Enrollment:");
        for (int i = 0; i < studentCourses.length; i++) {
            System.out.println("Student " + (i + 1) + " courses:");
            for (String course : studentCourses[i]) {
                System.out.println("  - " + course);
            }
            System.out.println("  Total courses: " + studentCourses[i].length);
            System.out.println();
        }
    }
}`
            }
          },
          declarationInitialization: {
            title: "Array Declaration and Initialization",
            description: "Different ways to declare and initialize arrays in Java.",
            declaration: {
              title: "Declaration:",
              syntax: "dataType[] arrayName; or dataType arrayName[];",
              example: `// Array declaration examples
public class ArrayDeclarationDemo {
    public static void main(String[] args) {
        // Different declaration syntaxes
        int[] numbers1;        // Preferred style
        int numbers2[];        // Alternative style (C-style)
        
        // Multiple array declarations
        int[] arr1, arr2, arr3;
        
        // Mixed declarations (not recommended)
        int[] arr4, arr5[];    // arr4 is 1D, arr5 is 2D
        
        // Different data types
        String[] names;
        double[] prices;
        boolean[] flags;
        char[] characters;
        
        // Object arrays
        Student[] students;
        Date[] dates;
        
        System.out.println("Arrays declared successfully!");
    }
}`
            },
            initialization: {
              title: "Initialization:",
              syntax: "arrayName = new dataType[size];",
              example: `// Array initialization examples
public class ArrayInitializationDemo {
    public static void main(String[] args) {
        // Method 1: Declaration then initialization
        int[] numbers;
        numbers = new int[5];  // Creates array of 5 integers (default value 0)
        
        // Method 2: Declaration and initialization together
        String[] fruits = new String[3];  // Creates array of 3 strings (default value null)
        
        // Method 3: Initialize with values
        double[] prices = {19.99, 25.50, 12.75, 8.99};
        
        // Method 4: Using new keyword with values
        boolean[] flags = new boolean[]{true, false, true, false};
        
        // Method 5: Anonymous array
        printArray(new int[]{1, 2, 3, 4, 5});
        
        // Fill arrays with values
        for (int i = 0; i < numbers.length; i++) {
            numbers[i] = (i + 1) * 10;
        }
        
        fruits[0] = "Apple";
        fruits[1] = "Banana";
        fruits[2] = "Orange";
        
        // Display arrays
        System.out.println("Numbers array:");
        for (int num : numbers) {
            System.out.print(num + " ");
        }
        
        System.out.println("\n\nFruits array:");
        for (String fruit : fruits) {
            System.out.print(fruit + " ");
        }
        
        System.out.println("\n\nPrices array:");
        for (double price : prices) {
            System.out.print("$" + price + " ");
        }
        
        // Array properties
        System.out.println("\n\nArray Properties:");
        System.out.println("Numbers length: " + numbers.length);
        System.out.println("Fruits length: " + fruits.length);
        System.out.println("Prices length: " + prices.length);
    }
    
    public static void printArray(int[] arr) {
        System.out.print("Anonymous array: ");
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
}`
            },
            declarationPlusInitialization: {
              title: "Declaration + Initialization:",
              syntax: "dataType[] arrayName = {value1, value2, ...};",
              example: `// Combined declaration and initialization
public class CombinedDeclarationDemo {
    public static void main(String[] args) {
        // Primitive arrays with initial values
        int[] numbers = {10, 20, 30, 40, 50};
        double[] temperatures = {98.6, 100.4, 97.8, 99.2};
        char[] vowels = {'a', 'e', 'i', 'o', 'u'};
        boolean[] answers = {true, false, true, true, false};
        
        // String array
        String[] colors = {"Red", "Green", "Blue", "Yellow", "Purple"};
        
        // Multi-dimensional arrays
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        
        String[][] schedule = {
            {"Math", "English", "Science"},
            {"History", "Art", "PE"},
            {"Music", "Computer", "Study Hall"}
        };
        
        // Display arrays
        System.out.println("Numbers: " + java.util.Arrays.toString(numbers));
        System.out.println("Temperatures: " + java.util.Arrays.toString(temperatures));
        System.out.println("Vowels: " + java.util.Arrays.toString(vowels));
        System.out.println("Answers: " + java.util.Arrays.toString(answers));
        System.out.println("Colors: " + java.util.Arrays.toString(colors));
        
        System.out.println("\nMatrix:");
        for (int[] row : matrix) {
            System.out.println(java.util.Arrays.toString(row));
        }
        
        System.out.println("\nClass Schedule:");
        String[] days = {"Monday", "Tuesday", "Wednesday"};
        for (int i = 0; i < schedule.length; i++) {
            System.out.println(days[i] + ": " + java.util.Arrays.toString(schedule[i]));
        }
    }
}`
            }
          },
          accessingElements: {
            title: "Accessing Array Elements",
            description: "How to read and modify array elements using index notation.",
            syntax: "arrayName[index]",
            example: `// Accessing and modifying array elements
public class ArrayAccessDemo {
    public static void main(String[] args) {
        // Create and initialize array
        int[] numbers = {10, 20, 30, 40, 50};
        String[] fruits = {"Apple", "Banana", "Orange", "Mango", "Grape"};
        
        // Accessing elements (zero-based indexing)
        System.out.println("Array Access Examples:");
        System.out.println("First number: " + numbers[0]);     // Output: 10
        System.out.println("Third number: " + numbers[2]);     // Output: 30
        System.out.println("Last number: " + numbers[4]);      // Output: 50
        
        System.out.println("Second fruit: " + fruits[1]);      // Output: Banana
        System.out.println("Last fruit: " + fruits[fruits.length - 1]); // Output: Grape
        
        // Modifying elements
        System.out.println("\nBefore modification:");
        System.out.println("numbers[2] = " + numbers[2]);      // Output: 30
        System.out.println("fruits[1] = " + fruits[1]);        // Output: Banana
        
        numbers[2] = 100;                                      // Modify value
        fruits[1] = "Strawberry";                              // Modify value
        
        System.out.println("\nAfter modification:");
        System.out.println("numbers[2] = " + numbers[2]);      // Output: 100
        System.out.println("fruits[1] = " + fruits[1]);        // Output: Strawberry
        
        // Array bounds checking
        System.out.println("\nArray Bounds:");
        System.out.println("Array length: " + numbers.length);
        System.out.println("Valid indices: 0 to " + (numbers.length - 1));
        
        // Safe array access with bounds checking
        int index = 3;
        if (index >= 0 && index < numbers.length) {
            System.out.println("Safe access - numbers[" + index + "] = " + numbers[index]);
        } else {
            System.out.println("Index " + index + " is out of bounds");
        }
        
        // Demonstrate ArrayIndexOutOfBoundsException
        try {
            System.out.println("Attempting to access invalid index...");
            System.out.println(numbers[10]); // This will throw exception
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Error: " + e.getMessage());
        }
        
        // Working with 2D arrays
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        
        System.out.println("\n2D Array Access:");
        System.out.println("matrix[0][1] = " + matrix[0][1]);  // Output: 2
        System.out.println("matrix[1][2] = " + matrix[1][2]);  // Output: 6
        System.out.println("matrix[2][0] = " + matrix[2][0]);  // Output: 7
        
        // Modify 2D array element
        matrix[1][1] = 99;
        System.out.println("After modification - matrix[1][1] = " + matrix[1][1]); // Output: 99
    }
}`
          },
          iteratingArrays: {
            title: "Iterating Through an Array",
            description: "Different methods to traverse and process array elements.",
            forLoop: {
              title: "Using for loop:",
              description: "Traditional index-based iteration with full control over the loop.",
              example: `// For loop iteration examples
public class ForLoopIterationDemo {
    public static void main(String[] args) {
        int[] numbers = {10, 20, 30, 40, 50};
        String[] fruits = {"Apple", "Banana", "Orange", "Mango"};
        double[] prices = {19.99, 25.50, 12.75, 8.99, 15.25};
        
        // Basic for loop iteration
        System.out.println("Numbers using for loop:");
        for (int i = 0; i < numbers.length; i++) {
            System.out.println("Index " + i + ": " + numbers[i]);
        }
        
        // For loop with modifications
        System.out.println("\nDoubling numbers:");
        for (int i = 0; i < numbers.length; i++) {
            numbers[i] *= 2;
            System.out.println("numbers[" + i + "] = " + numbers[i]);
        }
        
        // Reverse iteration
        System.out.println("\nFruits in reverse order:");
        for (int i = fruits.length - 1; i >= 0; i--) {
            System.out.println((fruits.length - i) + ". " + fruits[i]);
        }
        
        // Skip elements (every other element)
        System.out.println("\nEvery other price:");
        for (int i = 0; i < prices.length; i += 2) {
            System.out.println("Price at index " + i + ": $" + prices[i]);
        }
        
        // Find maximum value
        int max = numbers[0];
        int maxIndex = 0;
        for (int i = 1; i < numbers.length; i++) {
            if (numbers[i] > max) {
                max = numbers[i];
                maxIndex = i;
            }
        }
        System.out.println("\nMaximum value: " + max + " at index " + maxIndex);
        
        // Calculate sum and average
        double sum = 0;
        for (int i = 0; i < prices.length; i++) {
            sum += prices[i];
        }
        double average = sum / prices.length;
        System.out.println("\nPrice Statistics:");
        System.out.println("Sum: $" + String.format("%.2f", sum));
        System.out.println("Average: $" + String.format("%.2f", average));
        
        // 2D array iteration
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        
        System.out.println("\n2D Array (Matrix):");
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println();
        }
    }
}`
            },
            forEachLoop: {
              title: "Using for-each loop:",
              description: "Enhanced for loop for simpler iteration when index is not needed.",
              example: `// For-each loop iteration examples
public class ForEachLoopDemo {
    public static void main(String[] args) {
        int[] numbers = {10, 20, 30, 40, 50};
        String[] fruits = {"Apple", "Banana", "Orange", "Mango"};
        double[] temperatures = {98.6, 100.4, 97.8, 99.2, 101.1};
        
        // Basic for-each loop
        System.out.println("Numbers using for-each loop:");
        for (int num : numbers) {
            System.out.println(num);
        }
        
        // For-each with string processing
        System.out.println("\nFruits with processing:");
        for (String fruit : fruits) {
            System.out.println(fruit.toUpperCase() + " (" + fruit.length() + " letters)");
        }
        
        // Calculate statistics using for-each
        double sum = 0;
        double max = temperatures[0];
        double min = temperatures[0];
        int count = 0;
        
        System.out.println("\nTemperature Analysis:");
        for (double temp : temperatures) {
            System.out.println("Temperature: " + temp + "°F");
            sum += temp;
            if (temp > max) max = temp;
            if (temp < min) min = temp;
            count++;
        }
        
        double average = sum / count;
        System.out.println("\nStatistics:");
        System.out.println("Count: " + count);
        System.out.println("Sum: " + String.format("%.1f", sum) + "°F");
        System.out.println("Average: " + String.format("%.1f", average) + "°F");
        System.out.println("Maximum: " + max + "°F");
        System.out.println("Minimum: " + min + "°F");
        
        // For-each with 2D arrays
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        
        System.out.println("\n2D Array using for-each:");
        for (int[] row : matrix) {
            for (int element : row) {
                System.out.print(element + " ");
            }
            System.out.println();
        }
        
        // For-each with object arrays
        Student[] students = {
            new Student("Alice", 85),
            new Student("Bob", 92),
            new Student("Charlie", 78),
            new Student("Diana", 96)
        };
        
        System.out.println("\nStudent Information:");
        for (Student student : students) {
            System.out.println(student.getName() + ": " + student.getGrade() + "%");
        }
        
        // Find students with high grades
        System.out.println("\nHigh-performing students (90% or above):");
        for (Student student : students) {
            if (student.getGrade() >= 90) {
                System.out.println("- " + student.getName() + ": " + student.getGrade() + "%");
            }
        }
    }
}

// Helper class for demonstration
class Student {
    private String name;
    private int grade;
    
    public Student(String name, int grade) {
        this.name = name;
        this.grade = grade;
    }
    
    public String getName() { return name; }
    public int getGrade() { return grade; }
}`
            }
          },
          multidimensionalArrays: {
            title: "Multidimensional Arrays (2D Arrays)",
            description: "Arrays with multiple dimensions for representing matrices, tables, and complex data structures.",
            syntax: "dataType[][] arrayName = new dataType[rows][columns];",
            example: `// Comprehensive 2D array examples
public class TwoDArrayDemo {
    public static void main(String[] args) {
        // Method 1: Direct initialization
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        
        // Method 2: Declaration and initialization
        double[][] grades = new double[3][4]; // 3 students, 4 subjects
        
        // Fill grades array
        grades[0] = new double[]{85.5, 92.0, 78.5, 88.0}; // Student 1
        grades[1] = new double[]{90.0, 88.5, 95.0, 87.5}; // Student 2
        grades[2] = new double[]{76.5, 82.0, 89.5, 91.0}; // Student 3
        
        // Method 3: Dynamic allocation
        String[][] schedule = new String[5][6]; // 5 days, 6 periods
        
        // Fill schedule
        String[] subjects = {"Math", "English", "Science", "History", "Art", "PE"};
        String[] days = {"Monday", "Tuesday", "Wednesday", "Thursday", "Friday"};
        
        for (int day = 0; day < schedule.length; day++) {
            for (int period = 0; period < schedule[day].length; period++) {
                schedule[day][period] = subjects[period];
            }
        }
        
        // Display matrix
        System.out.println("Matrix:");
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println();
        }
        
        // Calculate and display student averages
        System.out.println("\nStudent Grade Report:");
        String[] subjectNames = {"Math", "English", "Science", "History"};
        
        for (int student = 0; student < grades.length; student++) {
            System.out.println("Student " + (student + 1) + ":");
            double sum = 0;
            for (int subject = 0; subject < grades[student].length; subject++) {
                System.out.println("  " + subjectNames[subject] + ": " + grades[student][subject]);
                sum += grades[student][subject];
            }
            double average = sum / grades[student].length;
            System.out.println("  Average: " + String.format("%.2f", average));
            System.out.println();
        }
        
        // Display class schedule
        System.out.println("Class Schedule:");
        System.out.print("\t\t");
        for (int period = 0; period < subjects.length; period++) {
            System.out.print("Period " + (period + 1) + "\t");
        }
        System.out.println();
        
        for (int day = 0; day < schedule.length; day++) {
            System.out.print(days[day] + "\t");
            for (int period = 0; period < schedule[day].length; period++) {
                System.out.print(schedule[day][period] + "\t\t");
            }
            System.out.println();
        }
        
        // Matrix operations
        System.out.println("\nMatrix Operations:");
        
        // Transpose matrix
        int[][] transpose = transposeMatrix(matrix);
        System.out.println("Original Matrix:");
        printMatrix(matrix);
        System.out.println("Transposed Matrix:");
        printMatrix(transpose);
        
        // Matrix multiplication
        int[][] matrixA = {{1, 2}, {3, 4}};
        int[][] matrixB = {{5, 6}, {7, 8}};
        int[][] product = multiplyMatrices(matrixA, matrixB);
        
        System.out.println("Matrix A:");
        printMatrix(matrixA);
        System.out.println("Matrix B:");
        printMatrix(matrixB);
        System.out.println("A × B:");
        printMatrix(product);
    }
    
    // Method to transpose a matrix
    public static int[][] transposeMatrix(int[][] matrix) {
        int rows = matrix.length;
        int cols = matrix[0].length;
        int[][] transpose = new int[cols][rows];
        
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                transpose[j][i] = matrix[i][j];
            }
        }
        return transpose;
    }
    
    // Method to multiply two matrices
    public static int[][] multiplyMatrices(int[][] a, int[][] b) {
        int rowsA = a.length;
        int colsA = a[0].length;
        int colsB = b[0].length;
        
        int[][] result = new int[rowsA][colsB];
        
        for (int i = 0; i < rowsA; i++) {
            for (int j = 0; j < colsB; j++) {
                for (int k = 0; k < colsA; k++) {
                    result[i][j] += a[i][k] * b[k][j];
                }
            }
        }
        return result;
    }
    
    // Method to print matrix
    public static void printMatrix(int[][] matrix) {
        for (int[] row : matrix) {
            for (int element : row) {
                System.out.print(element + " ");
            }
            System.out.println();
        }
        System.out.println();
    }
}`
          },
          arrayInMemory: {
            title: "Array in Memory",
            description: "Understanding how arrays are stored and managed in Java memory.",
            heapStorage: {
              title: "Arrays in Java are objects stored in heap memory.",
              description: "Arrays are reference types, with the array object stored in heap and reference in stack.",
              memoryLayout: [
                "Array reference stored in stack memory",
                "Array object (with elements) stored in heap memory",
                "Array elements stored contiguously in heap",
                "Array metadata (length, type) stored with the object"
              ]
            },
            lengthProperty: {
              title: "Every array has a built-in property: .length",
              description: "The length property provides the number of elements in the array.",
              characteristics: [
                "Read-only property - cannot be modified",
                "Available for all array types",
                "Returns int value",
                "Useful for bounds checking and iteration"
              ]
            },
            example: `// Array memory and length demonstration
public class ArrayMemoryDemo {
    public static void main(String[] args) {
        // Array creation and memory allocation
        int[] numbers = new int[5];        // Heap: array object with 5 int elements
        String[] names = new String[3];    // Heap: array object with 3 String references
        
        // Array length property
        System.out.println("Array Lengths:");
        System.out.println("numbers.length: " + numbers.length);  // Output: 5
        System.out.println("names.length: " + names.length);      // Output: 3
        
        // Default values in arrays
        System.out.println("\nDefault Values:");
        System.out.println("int array defaults:");
        for (int i = 0; i < numbers.length; i++) {
            System.out.println("numbers[" + i + "] = " + numbers[i]); // Output: 0
        }
        
        System.out.println("\nString array defaults:");
        for (int i = 0; i < names.length; i++) {
            System.out.println("names[" + i + "] = " + names[i]); // Output: null
        }
        
        // Memory sharing demonstration
        int[] original = {1, 2, 3, 4, 5};
        int[] reference = original;  // Both point to same array object
        
        System.out.println("\nMemory Sharing:");
        System.out.println("Original array: " + java.util.Arrays.toString(original));
        System.out.println("Reference array: " + java.util.Arrays.toString(reference));
        
        // Modify through reference
        reference[2] = 99;
        System.out.println("\nAfter modifying through reference:");
        System.out.println("Original array: " + java.util.Arrays.toString(original));
        System.out.println("Reference array: " + java.util.Arrays.toString(reference));
        
        // Array copying (creates new object)
        int[] copy = original.clone();
        copy[1] = 88;
        
        System.out.println("\nAfter cloning and modifying copy:");
        System.out.println("Original array: " + java.util.Arrays.toString(original));
        System.out.println("Copied array: " + java.util.Arrays.toString(copy));
        
        // Memory usage demonstration
        demonstrateMemoryUsage();
        
        // Length property with different array types
        boolean[] flags = {true, false, true};
        double[] prices = {19.99, 25.50, 12.75, 8.99};
        char[] vowels = {'a', 'e', 'i', 'o', 'u'};
        
        System.out.println("\nDifferent Array Lengths:");
        System.out.println("flags.length: " + flags.length);
        System.out.println("prices.length: " + prices.length);
        System.out.println("vowels.length: " + vowels.length);
        
        // 2D array length
        int[][] matrix = {{1, 2, 3}, {4, 5}, {6, 7, 8, 9}};
        System.out.println("\n2D Array Lengths:");
        System.out.println("matrix.length: " + matrix.length);           // Number of rows
        for (int i = 0; i < matrix.length; i++) {
            System.out.println("matrix[" + i + "].length: " + matrix[i].length);
        }
    }
    
    public static void demonstrateMemoryUsage() {
        System.out.println("\nMemory Usage Demonstration:");
        
        // Small array
        int[] small = new int[10];
        System.out.println("Small array length: " + small.length);
        
        // Large array
        int[] large = new int[1000000];
        System.out.println("Large array length: " + large.length);
        
        // Array of objects
        String[] strings = new String[5];
        for (int i = 0; i < strings.length; i++) {
            strings[i] = "String " + i;
        }
        System.out.println("String array length: " + strings.length);
        
        // Demonstrate that length is read-only
        // strings.length = 10; // This would cause compilation error
        
        System.out.println("Array length is read-only and cannot be modified");
    }
}`
          },
          arrayWithMethods: {
            title: "Array with Methods",
            description: "Passing arrays to methods and returning arrays from methods.",
            passingArrays: {
              title: "Passing arrays to methods",
              description: "Arrays are passed by reference, allowing methods to modify the original array."
            },
            returningArrays: {
              title: "Returning arrays from methods",
              description: "Methods can create and return new arrays or return references to existing arrays."
            },
            example: `// Array methods demonstration
public class ArrayMethodsDemo {
    public static void main(String[] args) {
        int[] numbers = {64, 34, 25, 12, 22, 11, 90};
        String[] names = {"Alice", "Bob", "Charlie", "Diana", "Eve"};
        double[] prices = {19.99, 25.50, 12.75, 8.99, 15.25};
        
        System.out.println("Original arrays:");
        System.out.println("Numbers: " + java.util.Arrays.toString(numbers));
        System.out.println("Names: " + java.util.Arrays.toString(names));
        System.out.println("Prices: " + java.util.Arrays.toString(prices));
        
        // Method calls with arrays
        printArray(numbers);
        printStringArray(names);
        
        // Methods that modify arrays
        doubleValues(numbers);
        System.out.println("\nAfter doubling: " + java.util.Arrays.toString(numbers));
        
        capitalizeNames(names);
        System.out.println("Capitalized names: " + java.util.Arrays.toString(names));
        
        // Methods that return values
        int sum = calculateSum(numbers);
        double average = calculateAverage(prices);
        int max = findMaximum(numbers);
        String longest = findLongestString(names);
        
        System.out.println("\nCalculated values:");
        System.out.println("Sum: " + sum);
        System.out.println("Average price: $" + String.format("%.2f", average));
        System.out.println("Maximum number: " + max);
        System.out.println("Longest name: " + longest);
        
        // Methods that return arrays
        int[] evenNumbers = filterEvenNumbers(numbers);
        String[] shortNames = filterShortNames(names, 5);
        double[] discountedPrices = applyDiscount(prices, 0.1);
        
        System.out.println("\nFiltered/Modified arrays:");
        System.out.println("Even numbers: " + java.util.Arrays.toString(evenNumbers));
        System.out.println("Short names: " + java.util.Arrays.toString(shortNames));
        System.out.println("Discounted prices: " + java.util.Arrays.toString(discountedPrices));
        
        // Array sorting and searching
        int[] sortedNumbers = getSortedCopy(numbers);
        System.out.println("\nSorted copy: " + java.util.Arrays.toString(sortedNumbers));
        
        int searchValue = 50;
        int index = linearSearch(numbers, searchValue);
        if (index != -1) {
            System.out.println("Found " + searchValue + " at index " + index);
        } else {
            System.out.println(searchValue + " not found in array");
        }
        
        // 2D array methods
        int[][] matrix = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
        print2DArray(matrix);
        
        int matrixSum = sum2DArray(matrix);
        System.out.println("Matrix sum: " + matrixSum);
        
        int[][] transposed = transpose(matrix);
        System.out.println("\nTransposed matrix:");
        print2DArray(transposed);
    }
    
    // Method to print integer array
    public static void printArray(int[] arr) {
        System.out.println("\nPrinting array:");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }
    
    // Method to print string array
    public static void printStringArray(String[] arr) {
        System.out.println("\nString array contents:");
        for (String str : arr) {
            System.out.println("- " + str);
        }
    }
    
    // Method that modifies array elements
    public static void doubleValues(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            arr[i] *= 2;
        }
    }
    
    // Method that modifies string array
    public static void capitalizeNames(String[] arr) {
        for (int i = 0; i < arr.length; i++) {
            arr[i] = arr[i].toUpperCase();
        }
    }
    
    // Method that returns a calculated value
    public static int calculateSum(int[] arr) {
        int sum = 0;
        for (int num : arr) {
            sum += num;
        }
        return sum;
    }
    
    // Method that calculates average
    public static double calculateAverage(double[] arr) {
        double sum = 0;
        for (double num : arr) {
            sum += num;
        }
        return sum / arr.length;
    }
    
    // Method that finds maximum value
    public static int findMaximum(int[] arr) {
        int max = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }
    
    // Method that finds longest string
    public static String findLongestString(String[] arr) {
        String longest = arr[0];
        for (String str : arr) {
            if (str.length() > longest.length()) {
                longest = str;
            }
        }
        return longest;
    }
    
    // Method that returns a new array
    public static int[] filterEvenNumbers(int[] arr) {
        // Count even numbers first
        int count = 0;
        for (int num : arr) {
            if (num % 2 == 0) count++;
        }
        
        // Create array for even numbers
        int[] evenNumbers = new int[count];
        int index = 0;
        for (int num : arr) {
            if (num % 2 == 0) {
                evenNumbers[index++] = num;
            }
        }
        return evenNumbers;
    }
    
    // Method that filters strings by length
    public static String[] filterShortNames(String[] arr, int maxLength) {
        int count = 0;
        for (String str : arr) {
            if (str.length() < maxLength) count++;
        }
        
        String[] shortNames = new String[count];
        int index = 0;
        for (String str : arr) {
            if (str.length() < maxLength) {
                shortNames[index++] = str;
            }
        }
        return shortNames;
    }
    
    // Method that applies discount to prices
    public static double[] applyDiscount(double[] prices, double discountRate) {
        double[] discounted = new double[prices.length];
        for (int i = 0; i < prices.length; i++) {
            discounted[i] = prices[i] * (1 - discountRate);
        }
        return discounted;
    }
    
    // Method that returns sorted copy
    public static int[] getSortedCopy(int[] arr) {
        int[] copy = arr.clone();
        java.util.Arrays.sort(copy);
        return copy;
    }
    
    // Linear search method
    public static int linearSearch(int[] arr, int target) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
                return i;
            }
        }
        return -1; // Not found
    }
    
    // 2D array methods
    public static void print2DArray(int[][] arr) {
        System.out.println("\n2D Array:");
        for (int[] row : arr) {
            for (int element : row) {
                System.out.print(element + " ");
            }
            System.out.println();
        }
    }
    
    public static int sum2DArray(int[][] arr) {
        int sum = 0;
        for (int[] row : arr) {
            for (int element : row) {
                sum += element;
            }
        }
        return sum;
    }
    
    public static int[][] transpose(int[][] arr) {
        int rows = arr.length;
        int cols = arr[0].length;
        int[][] result = new int[cols][rows];
        
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                result[j][i] = arr[i][j];
            }
        }
        return result;
    }
}`
          },
          arraysAndObjectReferences: {
            title: "Arrays and Object References",
            description: "Understanding how arrays store references to objects rather than the objects themselves.",
            example: `// Arrays with object references demonstration
public class ArrayObjectReferencesDemo {
    public static void main(String[] args) {
        // String array - stores references to String objects
        String[] names = new String[3];
        names[0] = "Alice";
        names[1] = "Bob";
        names[2] = "Charlie";
        
        System.out.println("String Array:");
        for (int i = 0; i < names.length; i++) {
            System.out.println("names[" + i + "] = " + names[i]);
        }
        
        // Student object array
        Student[] students = new Student[3];
        students[0] = new Student("Alice Johnson", 20, 3.8);
        students[1] = new Student("Bob Smith", 19, 3.6);
        students[2] = new Student("Charlie Brown", 21, 3.9);
        
        System.out.println("\nStudent Array:");
        for (Student student : students) {
            student.displayInfo();
        }
        
        // Demonstrate reference sharing
        Student[] studentRefs = new Student[2];
        studentRefs[0] = students[0];  // Same reference as students[0]
        studentRefs[1] = students[1];  // Same reference as students[1]
        
        System.out.println("\nBefore modification:");
        System.out.println("students[0]: " + students[0].getName());
        System.out.println("studentRefs[0]: " + studentRefs[0].getName());
        
        // Modify through one reference
        studentRefs[0].setName("Alice Williams");
        
        System.out.println("\nAfter modification through studentRefs[0]:");
        System.out.println("students[0]: " + students[0].getName());
        System.out.println("studentRefs[0]: " + studentRefs[0].getName());
        
        // Array of different object types
        Object[] objects = new Object[5];
        objects[0] = "Hello World";           // String object
        objects[1] = new Integer(42);         // Integer object
        objects[2] = new Double(3.14);        // Double object
        objects[3] = new Student("Diana", 22, 3.7); // Student object
        objects[4] = new int[]{1, 2, 3};      // Array object
        
        System.out.println("\nObject Array (Polymorphism):");
        for (int i = 0; i < objects.length; i++) {
            System.out.println("objects[" + i + "] = " + objects[i] + 
                             " (Type: " + objects[i].getClass().getSimpleName() + ")");
        }
        
        // Null references in arrays
        String[] nullableStrings = new String[3];
        nullableStrings[0] = "First";
        // nullableStrings[1] remains null
        nullableStrings[2] = "Third";
        
        System.out.println("\nArray with null references:");
        for (int i = 0; i < nullableStrings.length; i++) {
            if (nullableStrings[i] != null) {
                System.out.println("nullableStrings[" + i + "] = " + nullableStrings[i]);
            } else {
                System.out.println("nullableStrings[" + i + "] = null");
            }
        }
        
        // Safe iteration with null checking
        System.out.println("\nSafe iteration:");
        for (String str : nullableStrings) {
            if (str != null) {
                System.out.println("Length of '" + str + "': " + str.length());
            } else {
                System.out.println("Null reference encountered");
            }
        }
        
        // Array copying with object references
        Student[] originalStudents = {students[0], students[1]};
        Student[] copiedStudents = originalStudents.clone();
        
        System.out.println("\nArray copying demonstration:");
        System.out.println("Original and copied arrays are different objects: " + 
                          (originalStudents != copiedStudents));
        System.out.println("But they contain references to same Student objects: " + 
                          (originalStudents[0] == copiedStudents[0]));
        
        // Modify student through copied array
        copiedStudents[0].setGpa(4.0);
        System.out.println("\nAfter modifying student through copied array:");
        System.out.println("Original array student GPA: " + originalStudents[0].getGpa());
        System.out.println("Copied array student GPA: " + copiedStudents[0].getGpa());
    }
}

// Student class for demonstration
class Student {
    private String name;
    private int age;
    private double gpa;
    
    public Student(String name, int age, double gpa) {
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }
    
    public void displayInfo() {
        System.out.println("Student: " + name + ", Age: " + age + ", GPA: " + gpa);
    }
    
    // Getters and setters
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public int getAge() { return age; }
    public void setAge(int age) { this.age = age; }
    public double getGpa() { return gpa; }
    public void setGpa(double gpa) { this.gpa = gpa; }
    
    @Override
    public String toString() {
        return name + "(" + age + ", GPA: " + gpa + ")";
    }
}`
          },
          arraysUtilityClass: {
            title: "Arrays Utility Class (java.util.Arrays)",
            description: "The Arrays class provides static methods for common array operations like sorting, searching, and comparing.",
            methods: {
              sort: {
                method: "Arrays.sort(arr)",
                description: "Sort array in ascending order"
              },
              toString: {
                method: "Arrays.toString(arr)",
                description: "Convert array to string representation"
              },
              copyOf: {
                method: "Arrays.copyOf(arr, newLength)",
                description: "Create a copy of array with specified length"
              },
              equals: {
                method: "Arrays.equals(arr1, arr2)",
                description: "Compare two arrays for equality"
              },
              fill: {
                method: "Arrays.fill(arr, value)",
                description: "Fill array with specified value"
              },
              binarySearch: {
                method: "Arrays.binarySearch(arr, key)",
                description: "Search for element in sorted array"
              }
            },
            example: `import java.util.Arrays;

// Arrays utility class demonstration
public class ArraysUtilityDemo {
    public static void main(String[] args) {
        // Original arrays for demonstration
        int[] numbers = {64, 34, 25, 12, 22, 11, 90};
        String[] fruits = {"banana", "apple", "orange", "grape", "kiwi"};
        double[] prices = {19.99, 25.50, 12.75, 8.99, 15.25};
        
        System.out.println("Original Arrays:");
        System.out.println("Numbers: " + Arrays.toString(numbers));
        System.out.println("Fruits: " + Arrays.toString(fruits));
        System.out.println("Prices: " + Arrays.toString(prices));
        
        // 1. Arrays.sort() - Sort arrays
        int[] sortedNumbers = numbers.clone();
        Arrays.sort(sortedNumbers);
        
        String[] sortedFruits = fruits.clone();
        Arrays.sort(sortedFruits);
        
        double[] sortedPrices = prices.clone();
        Arrays.sort(sortedPrices);
        
        System.out.println("\nAfter Sorting:");
        System.out.println("Sorted Numbers: " + Arrays.toString(sortedNumbers));
        System.out.println("Sorted Fruits: " + Arrays.toString(sortedFruits));
        System.out.println("Sorted Prices: " + Arrays.toString(sortedPrices));
        
        // 2. Arrays.copyOf() - Copy arrays
        int[] shortCopy = Arrays.copyOf(numbers, 3);        // Copy first 3 elements
        int[] longCopy = Arrays.copyOf(numbers, 10);        // Copy with padding
        String[] fruitCopy = Arrays.copyOf(fruits, fruits.length);
        
        System.out.println("\nArray Copying:");
        System.out.println("Short copy (3 elements): " + Arrays.toString(shortCopy));
        System.out.println("Long copy (10 elements): " + Arrays.toString(longCopy));
        System.out.println("Fruit copy: " + Arrays.toString(fruitCopy));
        
        // 3. Arrays.copyOfRange() - Copy specific range
        int[] rangeCopy = Arrays.copyOfRange(numbers, 2, 5); // Copy elements 2-4
        System.out.println("Range copy (index 2-4): " + Arrays.toString(rangeCopy));
        
        // 4. Arrays.equals() - Compare arrays
        int[] numbers2 = {64, 34, 25, 12, 22, 11, 90};
        int[] numbers3 = {1, 2, 3, 4, 5};
        
        System.out.println("\nArray Comparison:");
        System.out.println("numbers equals numbers2: " + Arrays.equals(numbers, numbers2));
        System.out.println("numbers equals numbers3: " + Arrays.equals(numbers, numbers3));
        System.out.println("fruits equals fruitCopy: " + Arrays.equals(fruits, fruitCopy));
        
        // 5. Arrays.fill() - Fill array with value
        int[] fillArray = new int[5];
        Arrays.fill(fillArray, 42);
        
        double[] fillPrices = new double[4];
        Arrays.fill(fillPrices, 9.99);
        
        System.out.println("\nFilled Arrays:");
        System.out.println("Fill with 42: " + Arrays.toString(fillArray));
        System.out.println("Fill with 9.99: " + Arrays.toString(fillPrices));
        
        // Fill specific range
        int[] partialFill = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        Arrays.fill(partialFill, 3, 7, 0); // Fill indices 3-6 with 0
        System.out.println("Partial fill (index 3-6 with 0): " + Arrays.toString(partialFill));
        
        // 6. Arrays.binarySearch() - Search in sorted array
        System.out.println("\nBinary Search (requires sorted array):");
        int searchIndex = Arrays.binarySearch(sortedNumbers, 25);
        System.out.println("Index of 25 in sorted array: " + searchIndex);
        
        int notFoundIndex = Arrays.binarySearch(sortedNumbers, 100);
        System.out.println("Index of 100 (not found): " + notFoundIndex + " (negative value indicates insertion point)");
        
        // String binary search
        int fruitIndex = Arrays.binarySearch(sortedFruits, "grape");
        System.out.println("Index of 'grape' in sorted fruits: " + fruitIndex);
        
        // 7. Arrays.deepToString() - For multidimensional arrays
        int[][] matrix = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
        System.out.println("\n2D Array Representation:");
        System.out.println("Using toString(): " + Arrays.toString(matrix)); // Shows references
        System.out.println("Using deepToString(): " + Arrays.deepToString(matrix)); // Shows content
        
        // 8. Arrays.deepEquals() - For multidimensional arrays
        int[][] matrix2 = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
        int[][] matrix3 = {{1, 2}, {3, 4}};
        
        System.out.println("\n2D Array Comparison:");
        System.out.println("matrix equals matrix2: " + Arrays.deepEquals(matrix, matrix2));
        System.out.println("matrix equals matrix3: " + Arrays.deepEquals(matrix, matrix3));
        
        // 9. Arrays.asList() - Convert array to List
        String[] colorArray = {"Red", "Green", "Blue"};
        java.util.List<String> colorList = Arrays.asList(colorArray);
        
        System.out.println("\nArray to List conversion:");
        System.out.println("Original array: " + Arrays.toString(colorArray));
        System.out.println("Converted list: " + colorList);
        
        // Note: The list is backed by the array, so changes affect both
        colorList.set(0, "Yellow");
        System.out.println("After modifying list:");
        System.out.println("Array: " + Arrays.toString(colorArray));
        System.out.println("List: " + colorList);
        
        // 10. Practical example: Array operations workflow
        demonstrateArrayWorkflow();
    }
    
    public static void demonstrateArrayWorkflow() {
        System.out.println("\n=== Array Operations Workflow ===");
        
        // Step 1: Create and fill array
        int[] data = new int[10];
        Arrays.fill(data, -1);
        System.out.println("1. Initial array: " + Arrays.toString(data));
        
        // Step 2: Add some data
        int[] actualData = {45, 23, 67, 12, 89, 34, 56, 78};
        System.arraycopy(actualData, 0, data, 0, actualData.length);
        System.out.println("2. With data: " + Arrays.toString(data));
        
        // Step 3: Create working copy
        int[] workingCopy = Arrays.copyOf(data, actualData.length);
        System.out.println("3. Working copy: " + Arrays.toString(workingCopy));
        
        // Step 4: Sort the working copy
        Arrays.sort(workingCopy);
        System.out.println("4. Sorted copy: " + Arrays.toString(workingCopy));
        
        // Step 5: Search for values
        int searchValue = 67;
        int index = Arrays.binarySearch(workingCopy, searchValue);
        System.out.println("5. Found " + searchValue + " at index: " + index);
        
        // Step 6: Compare arrays
        boolean arraysEqual = Arrays.equals(data, workingCopy);
        System.out.println("6. Original equals sorted: " + arraysEqual);
        
        System.out.println("Workflow completed successfully!");
    }
}`
          }
        },
        strings: {
          title: "Java Strings",
          description: "Strings are one of the most commonly used classes in Java, representing sequences of characters with powerful manipulation capabilities.",
          whatIsString: {
            title: "What is a String in Java?",
            sequenceOfCharacters: {
              title: "A String is a sequence of characters.",
              description: "Strings represent textual data as an ordered collection of Unicode characters.",
              characteristics: [
                "Sequence of Unicode characters",
                "Can contain letters, digits, symbols, and whitespace",
                "Zero-based indexing for character access",
                "Can be empty (length 0) but not null by default"
              ]
            },
            objectNotPrimitive: {
              title: "In Java, Strings are objects of the String class (not primitive types).",
              description: "Unlike primitive types (int, char, boolean), String is a reference type with methods and properties.",
              implications: [
                "Stored in heap memory",
                "Have methods for manipulation",
                "Can be null",
                "Passed by reference to methods"
              ]
            },
            immutable: {
              title: "Immutable: Once created, their value cannot be changed.",
              description: "String objects cannot be modified after creation. Any 'modification' creates a new String object.",
              benefits: [
                "Thread-safe by default",
                "Can be safely shared between methods",
                "Enables string pooling for memory efficiency",
                "Prevents accidental modifications"
              ],
              example: `// String immutability demonstration
public class StringImmutabilityDemo {
    public static void main(String[] args) {
        String original = "Hello";
        System.out.println("Original string: " + original);
        System.out.println("Original string hashCode: " + original.hashCode());
        
        // Attempting to 'modify' the string
        String modified = original.concat(" World");
        
        System.out.println("\nAfter concat operation:");
        System.out.println("Original string: " + original);        // Still "Hello"
        System.out.println("Modified string: " + modified);        // "Hello World"
        System.out.println("Original hashCode: " + original.hashCode());
        System.out.println("Modified hashCode: " + modified.hashCode());
        
        // Demonstrating that original is unchanged
        System.out.println("\nAre they the same object? " + (original == modified));
        System.out.println("Original string length: " + original.length());
        
        // String methods that appear to modify actually return new strings
        String upperCase = original.toUpperCase();
        String lowerCase = original.toLowerCase();
        String trimmed = original.trim();
        
        System.out.println("\nString transformations (all create new objects):");
        System.out.println("Original: " + original);
        System.out.println("Upper case: " + upperCase);
        System.out.println("Lower case: " + lowerCase);
        System.out.println("Trimmed: " + trimmed);
        
        // Memory implications
        demonstrateMemoryImplications();
    }
    
    public static void demonstrateMemoryImplications() {
        System.out.println("\n=== Memory Implications of Immutability ===");
        
        String result = "Start";
        System.out.println("Initial: " + result);
        
        // Each concatenation creates a new String object
        result = result + " -> Step 1";
        result = result + " -> Step 2";
        result = result + " -> Step 3";
        
        System.out.println("Final result: " + result);
        System.out.println("Note: 4 String objects were created in total!");
        
        // Better approach for multiple concatenations
        StringBuilder sb = new StringBuilder("Start");
        sb.append(" -> Step 1");
        sb.append(" -> Step 2");
        sb.append(" -> Step 3");
        
        System.out.println("StringBuilder result: " + sb.toString());
        System.out.println("Note: Only 1 final String object created!");
    }
}`
            }
          },
          creatingStrings: {
            title: "Creating Strings",
            description: "Different ways to create String objects in Java, each with different memory implications.",
            stringLiterals: {
              title: "Using string literals:",
              syntax: "String variableName = \"string value\";",
              description: "String literals are stored in the string pool for memory efficiency.",
              example: `// String literals demonstration
public class StringLiteralsDemo {
    public static void main(String[] args) {
        // String literals - stored in string pool
        String s1 = "Hello";
        String s2 = "World";
        String s3 = "Hello";  // Reuses the same object as s1
        
        System.out.println("String Literals:");
        System.out.println("s1: " + s1);
        System.out.println("s2: " + s2);
        System.out.println("s3: " + s3);
        
        // Reference comparison
        System.out.println("\nReference Comparison:");
        System.out.println("s1 == s3: " + (s1 == s3));  // true - same reference
        System.out.println("s1 == s2: " + (s1 == s2));  // false - different references
        
        // Different types of string literals
        String empty = "";
        String withSpaces = "  Hello World  ";
        String withNumbers = "Java 17";
        String withSpecialChars = "Hello\nWorld\t!";
        String withUnicode = "Caf\u00e9";  // Café
        
        System.out.println("\nDifferent String Literals:");
        System.out.println("Empty string: '" + empty + "' (length: " + empty.length() + ")");
        System.out.println("With spaces: '" + withSpaces + "' (length: " + withSpaces.length() + ")");
        System.out.println("With numbers: " + withNumbers);
        System.out.println("With special chars: " + withSpecialChars);
        System.out.println("With unicode: " + withUnicode);
        
        // String pool demonstration
        String pooled1 = "Java";
        String pooled2 = "Java";
        String pooled3 = "Ja" + "va";  // Compile-time concatenation
        
        System.out.println("\nString Pool Demonstration:");
        System.out.println("pooled1 == pooled2: " + (pooled1 == pooled2));  // true
        System.out.println("pooled1 == pooled3: " + (pooled1 == pooled3));  // true
        
        // Runtime concatenation doesn't use pool
        String runtime = "Ja";
        String runtimeConcat = runtime + "va";
        System.out.println("pooled1 == runtimeConcat: " + (pooled1 == runtimeConcat));  // false
        
        // But content is the same
        System.out.println("pooled1.equals(runtimeConcat): " + pooled1.equals(runtimeConcat));  // true
    }
}`
            },
            newKeyword: {
              title: "Using the new keyword:",
              syntax: "String variableName = new String(\"string value\");",
              description: "Creates a new String object in heap memory, bypassing the string pool.",
              example: `// String creation with new keyword
public class StringNewKeywordDemo {
    public static void main(String[] args) {
        // Using new keyword - creates new objects in heap
        String s1 = new String("Hello");
        String s2 = new String("Hello");
        String s3 = "Hello";  // String literal
        
        System.out.println("String Creation Comparison:");
        System.out.println("s1: " + s1);
        System.out.println("s2: " + s2);
        System.out.println("s3: " + s3);
        
        // Reference comparison
        System.out.println("\nReference Comparison:");
        System.out.println("s1 == s2: " + (s1 == s2));  // false - different objects
        System.out.println("s1 == s3: " + (s1 == s3));  // false - different objects
        System.out.println("s2 == s3: " + (s2 == s3));  // false - different objects
        
        // Content comparison
        System.out.println("\nContent Comparison:");
        System.out.println("s1.equals(s2): " + s1.equals(s2));  // true - same content
        System.out.println("s1.equals(s3): " + s1.equals(s3));  // true - same content
        System.out.println("s2.equals(s3): " + s2.equals(s3));  // true - same content
        
        // Different constructors
        char[] charArray = {'H', 'e', 'l', 'l', 'o'};
        String fromCharArray = new String(charArray);
        
        byte[] byteArray = {72, 101, 108, 108, 111};  // ASCII values for "Hello"
        String fromByteArray = new String(byteArray);
        
        String fromStringBuilder = new String(new StringBuilder("Hello"));
        
        System.out.println("\nDifferent String Constructors:");
        System.out.println("From char array: " + fromCharArray);
        System.out.println("From byte array: " + fromByteArray);
        System.out.println("From StringBuilder: " + fromStringBuilder);
        
        // Memory usage comparison
        System.out.println("\nMemory Usage Implications:");
        
        // String literals (efficient - uses pool)
        String literal1 = "Java Programming";
        String literal2 = "Java Programming";
        System.out.println("Literals share memory: " + (literal1 == literal2));
        
        // New keyword (less efficient - creates new objects)
        String newString1 = new String("Java Programming");
        String newString2 = new String("Java Programming");
        System.out.println("New objects don't share memory: " + (newString1 == newString2));
        
        // Intern method - adds to string pool
        String interned = newString1.intern();
        System.out.println("Interned string shares with literal: " + (interned == literal1));
        
        // Performance demonstration
        demonstratePerformance();
    }
    
    public static void demonstratePerformance() {
        System.out.println("\n=== Performance Comparison ===");
        
        int iterations = 100000;
        
        // Using string literals
        long startTime = System.currentTimeMillis();
        for (int i = 0; i < iterations; i++) {
            String s = "Test String " + i;
        }
        long literalTime = System.currentTimeMillis() - startTime;
        
        // Using new keyword
        startTime = System.currentTimeMillis();
        for (int i = 0; i < iterations; i++) {
            String s = new String("Test String " + i);
        }
        long newKeywordTime = System.currentTimeMillis() - startTime;
        
        System.out.println("String literal creation time: " + literalTime + "ms");
        System.out.println("New keyword creation time: " + newKeywordTime + "ms");
        System.out.println("Recommendation: Use string literals for better performance");
    }
}`
            }
          },
          commonStringMethods: {
            title: "Common String Methods",
            description: "Essential String methods for text manipulation and analysis.",
            methods: {
              length: {
                method: "length()",
                description: "Returns the string length",
                returnType: "int"
              },
              charAt: {
                method: "charAt(index)",
                description: "Returns character at given index",
                returnType: "char"
              },
              substring: {
                method: "substring(start, end)",
                description: "Extracts substring",
                returnType: "String"
              },
              equals: {
                method: "equals(str)",
                description: "Compares string values (case-sensitive)",
                returnType: "boolean"
              },
              equalsIgnoreCase: {
                method: "equalsIgnoreCase(str)",
                description: "Case-insensitive comparison",
                returnType: "boolean"
              },
              toLowerCase: {
                method: "toLowerCase() / toUpperCase()",
                description: "Changes case",
                returnType: "String"
              },
              trim: {
                method: "trim()",
                description: "Removes leading/trailing spaces",
                returnType: "String"
              },
              replace: {
                method: "replace(old, new)",
                description: "Replaces characters",
                returnType: "String"
              },
              contains: {
                method: "contains(str)",
                description: "Checks if substring exists",
                returnType: "boolean"
              },
              split: {
                method: "split(delimiter)",
                description: "Splits string into array",
                returnType: "String[]"
              },
              indexOf: {
                method: "indexOf(char)",
                description: "Finds position of character/substring",
                returnType: "int"
              }
            },
            example: `// Comprehensive String methods demonstration
public class StringMethodsDemo {
    public static void main(String[] args) {
        String text = "  Java Programming is Fun!  ";
        String sample = "Hello World";
        
        System.out.println("Original text: '" + text + "'");
        System.out.println("Sample text: '" + sample + "'");
        
        // 1. length() - Get string length
        System.out.println("\n1. LENGTH OPERATIONS:");
        System.out.println("text.length(): " + text.length());
        System.out.println("sample.length(): " + sample.length());
        System.out.println("Empty string length: " + "".length());
        
        // 2. charAt() - Get character at index
        System.out.println("\n2. CHARACTER ACCESS:");
        System.out.println("sample.charAt(0): " + sample.charAt(0));  // 'H'
        System.out.println("sample.charAt(6): " + sample.charAt(6));  // 'W'
        System.out.println("Last character: " + sample.charAt(sample.length() - 1));
        
        // Safe character access
        int index = 15;
        if (index < sample.length()) {
            System.out.println("Character at index " + index + ": " + sample.charAt(index));
        } else {
            System.out.println("Index " + index + " is out of bounds");
        }
        
        // 3. substring() - Extract parts of string
        System.out.println("\n3. SUBSTRING OPERATIONS:");
        System.out.println("sample.substring(0, 5): '" + sample.substring(0, 5) + "'");  // "Hello"
        System.out.println("sample.substring(6): '" + sample.substring(6) + "'");      // "World"
        System.out.println("sample.substring(2, 8): '" + sample.substring(2, 8) + "'"); // "llo Wo"
        
        // 4. equals() and equalsIgnoreCase() - String comparison
        System.out.println("\n4. STRING COMPARISON:");
        String str1 = "Java";
        String str2 = "java";
        String str3 = "Java";
        
        System.out.println("str1.equals(str2): " + str1.equals(str2));                    // false
        System.out.println("str1.equals(str3): " + str1.equals(str3));                    // true
        System.out.println("str1.equalsIgnoreCase(str2): " + str1.equalsIgnoreCase(str2)); // true
        
        // Null-safe comparison
        String nullString = null;
        System.out.println("Null-safe comparison: " + Objects.equals(str1, nullString));
        
        // 5. toLowerCase() and toUpperCase() - Case conversion
        System.out.println("\n5. CASE CONVERSION:");
        System.out.println("sample.toLowerCase(): " + sample.toLowerCase());
        System.out.println("sample.toUpperCase(): " + sample.toUpperCase());
        System.out.println("Mixed case: " + "HeLLo WoRLd".toLowerCase());
        
        // 6. trim() - Remove whitespace
        System.out.println("\n6. WHITESPACE REMOVAL:");
        System.out.println("Before trim: '" + text + "' (length: " + text.length() + ")");
        String trimmed = text.trim();
        System.out.println("After trim: '" + trimmed + "' (length: " + trimmed.length() + ")");
        
        // 7. replace() - Replace characters/substrings
        System.out.println("\n7. REPLACEMENT OPERATIONS:");
        System.out.println("Replace 'o' with '0': " + sample.replace('o', '0'));
        System.out.println("Replace 'World' with 'Universe': " + sample.replace("World", "Universe"));
        System.out.println("Replace all 'l' with 'L': " + sample.replace('l', 'L'));
        
        // replaceAll() with regex
        String phoneNumber = "123-456-7890";
        System.out.println("Remove dashes: " + phoneNumber.replaceAll("-", ""));
        
        // 8. contains() - Check for substring
        System.out.println("\n8. SUBSTRING CHECKING:");
        System.out.println("sample.contains(\"Hello\"): " + sample.contains("Hello"));
        System.out.println("sample.contains(\"hello\"): " + sample.contains("hello"));
        System.out.println("sample.contains(\"World\"): " + sample.contains("World"));
        System.out.println("sample.contains(\"xyz\"): " + sample.contains("xyz"));
        
        // 9. split() - Split string into array
        System.out.println("\n9. STRING SPLITTING:");
        String sentence = "Java,Python,JavaScript,C++";
        String[] languages = sentence.split(",");
        System.out.println("Split by comma:");
        for (int i = 0; i < languages.length; i++) {
            System.out.println("  [" + i + "]: " + languages[i]);
        }
        
        // Split with regex
        String data = "apple123banana456cherry";
        String[] fruits = data.split("\\d+");  // Split by digits
        System.out.println("Split by digits: " + Arrays.toString(fruits));
        
        // 10. indexOf() and lastIndexOf() - Find positions
        System.out.println("\n10. POSITION FINDING:");
        String searchText = "Java is great, Java is powerful";
        System.out.println("First 'Java': " + searchText.indexOf("Java"));
        System.out.println("Last 'Java': " + searchText.lastIndexOf("Java"));
        System.out.println("First 'is': " + searchText.indexOf("is"));
        System.out.println("Character 'a': " + searchText.indexOf('a'));
        System.out.println("Not found: " + searchText.indexOf("Python"));  // -1
        
        // Additional useful methods
        demonstrateAdditionalMethods();
    }
    
    public static void demonstrateAdditionalMethods() {
        System.out.println("\n=== ADDITIONAL STRING METHODS ===");
        
        String text = "Java Programming";
        
        // startsWith() and endsWith()
        System.out.println("\nSTART/END CHECKING:");
        System.out.println("Starts with 'Java': " + text.startsWith("Java"));
        System.out.println("Ends with 'ing': " + text.endsWith("ing"));
        System.out.println("Starts with 'Prog' at index 5: " + text.startsWith("Prog", 5));
        
        // isEmpty() and isBlank() (Java 11+)
        System.out.println("\nEMPTY/BLANK CHECKING:");
        System.out.println("Empty string isEmpty(): " + "".isEmpty());
        System.out.println("Whitespace isEmpty(): " + "   ".isEmpty());
        // System.out.println("Whitespace isBlank(): " + "   ".isBlank()); // Java 11+
        
        // compareTo() - Lexicographic comparison
        System.out.println("\nLEXICOGRAPHIC COMPARISON:");
        System.out.println("\"Apple\".compareTo(\"Banana\"): " + "Apple".compareTo("Banana"));  // Negative
        System.out.println("\"Banana\".compareTo(\"Apple\"): " + "Banana".compareTo("Apple"));  // Positive
        System.out.println("\"Apple\".compareTo(\"Apple\"): " + "Apple".compareTo("Apple"));    // Zero
        
        // toCharArray() - Convert to character array
        System.out.println("\nCHARACTER ARRAY CONVERSION:");
        char[] chars = text.toCharArray();
        System.out.println("Character array: " + Arrays.toString(chars));
        
        // valueOf() - Convert other types to String
        System.out.println("\nVALUE CONVERSION:");
        System.out.println("int to String: " + String.valueOf(123));
        System.out.println("double to String: " + String.valueOf(3.14));
        System.out.println("boolean to String: " + String.valueOf(true));
        System.out.println("char array to String: " + String.valueOf(chars));
    }
}`
          },
          stringComparison: {
            title: "String Comparison",
            description: "Understanding different ways to compare strings and their implications.",
            referenceVsContent: {
              title: "Reference comparison (==) vs Content comparison (equals)",
              description: "The == operator compares references, while equals() compares actual content."
            },
            example: `// String comparison comprehensive demonstration
public class StringComparisonDemo {
    public static void main(String[] args) {
        // Different ways to create strings
        String a = "Java";
        String b = "Java";
        String c = new String("Java");
        String d = "Ja" + "va";        // Compile-time concatenation
        String e = "Ja";
        String f = e + "va";           // Runtime concatenation
        
        System.out.println("String Values:");
        System.out.println("a = " + a);
        System.out.println("b = " + b);
        System.out.println("c = " + c);
        System.out.println("d = " + d);
        System.out.println("f = " + f);
        
        // Reference comparison using ==
        System.out.println("\n=== REFERENCE COMPARISON (==) ===");
        System.out.println("a == b: " + (a == b));       // true (same reference from string pool)
        System.out.println("a == c: " + (a == c));       // false (different object)
        System.out.println("a == d: " + (a == d));       // true (compile-time concatenation uses pool)
        System.out.println("a == f: " + (a == f));       // false (runtime concatenation creates new object)
        
        // Content comparison using equals()
        System.out.println("\n=== CONTENT COMPARISON (equals) ===");
        System.out.println("a.equals(b): " + a.equals(b));  // true (same content)
        System.out.println("a.equals(c): " + a.equals(c));  // true (same content)
        System.out.println("a.equals(d): " + a.equals(d));  // true (same content)
        System.out.println("a.equals(f): " + a.equals(f));  // true (same content)
        
        // Case-sensitive vs case-insensitive comparison
        System.out.println("\n=== CASE SENSITIVITY ===");
        String upper = "JAVA";
        String lower = "java";
        String mixed = "JaVa";
        
        System.out.println("Case-sensitive comparison:");
        System.out.println("a.equals(upper): " + a.equals(upper));  // false
        System.out.println("a.equals(lower): " + a.equals(lower));  // false
        System.out.println("a.equals(mixed): " + a.equals(mixed));  // false
        
        System.out.println("\nCase-insensitive comparison:");
        System.out.println("a.equalsIgnoreCase(upper): " + a.equalsIgnoreCase(upper));  // true
        System.out.println("a.equalsIgnoreCase(lower): " + a.equalsIgnoreCase(lower));  // true
        System.out.println("a.equalsIgnoreCase(mixed): " + a.equalsIgnoreCase(mixed));  // true
        
        // Null handling in comparisons
        System.out.println("\n=== NULL HANDLING ===");
        String nullString = null;
        String nonNullString = "Java";
        
        // Unsafe null comparison (can throw NullPointerException)
        try {
            System.out.println("nullString.equals(nonNullString): " + nullString.equals(nonNullString));
        } catch (NullPointerException e) {
            System.out.println("NullPointerException caught: " + e.getMessage());
        }
        
        // Safe null comparison approaches
        System.out.println("nonNullString.equals(nullString): " + nonNullString.equals(nullString));  // false
        System.out.println("Objects.equals(nullString, nonNullString): " + 
                          java.util.Objects.equals(nullString, nonNullString));  // false
        System.out.println("Objects.equals(nullString, null): " + 
                          java.util.Objects.equals(nullString, null));  // true
        
        // Lexicographic comparison
        System.out.println("\n=== LEXICOGRAPHIC COMPARISON ===");
        String[] words = {"Apple", "Banana", "Cherry", "Date", "apple"};
        
        for (int i = 0; i < words.length - 1; i++) {
            int comparison = words[i].compareTo(words[i + 1]);
            System.out.println("\"" + words[i] + "\".compareTo(\"" + words[i + 1] + "\"): " + comparison);
            if (comparison < 0) {
                System.out.println("  " + words[i] + " comes before " + words[i + 1]);
            } else if (comparison > 0) {
                System.out.println("  " + words[i] + " comes after " + words[i + 1]);
            } else {
                System.out.println("  " + words[i] + " is equal to " + words[i + 1]);
            }
        }
        
        // Case-insensitive lexicographic comparison
        System.out.println("\nCase-insensitive comparison:");
        System.out.println("\"Apple\".compareToIgnoreCase(\"apple\"): " + "Apple".compareToIgnoreCase("apple"));
        
        // Practical comparison examples
        demonstratePracticalComparisons();
    }
    
    public static void demonstratePracticalComparisons() {
        System.out.println("\n=== PRACTICAL COMPARISON EXAMPLES ===");
        
        // User authentication simulation
        String storedPassword = "SecurePass123";
        String userInput1 = "SecurePass123";
        String userInput2 = "securepass123";
        String userInput3 = "SecurePass124";
        
        System.out.println("Password Authentication:");
        System.out.println("Correct password: " + authenticateUser(storedPassword, userInput1));
        System.out.println("Wrong case: " + authenticateUser(storedPassword, userInput2));
        System.out.println("Wrong password: " + authenticateUser(storedPassword, userInput3));
        
        // Sorting strings
        String[] names = {"John", "Alice", "Bob", "Charlie", "Diana"};
        System.out.println("\nOriginal names: " + java.util.Arrays.toString(names));
        
        java.util.Arrays.sort(names);
        System.out.println("Sorted names: " + java.util.Arrays.toString(names));
        
        // Custom comparison for case-insensitive sorting
        String[] mixedCaseNames = {"john", "Alice", "bob", "Charlie", "diana"};
        System.out.println("\nMixed case names: " + java.util.Arrays.toString(mixedCaseNames));
        
        java.util.Arrays.sort(mixedCaseNames, String.CASE_INSENSITIVE_ORDER);
        System.out.println("Case-insensitive sorted: " + java.util.Arrays.toString(mixedCaseNames));
    }
    
    public static boolean authenticateUser(String storedPassword, String inputPassword) {
        return storedPassword.equals(inputPassword);
    }
}`
          },
          stringConcatenation: {
            title: "String Concatenation",
            description: "Different methods to combine strings and their performance implications.",
            plusOperator: {
              title: "Using + operator",
              description: "Simple concatenation using the plus operator.",
              syntax: "String result = string1 + string2;"
            },
            concatMethod: {
              title: "Using concat() method",
              description: "String concatenation using the concat() method.",
              syntax: "String result = string1.concat(string2);"
            },
            example: `// String concatenation methods and performance
public class StringConcatenationDemo {
    public static void main(String[] args) {
        String firstName = "John";
        String lastName = "Doe";
        int age = 25;
        
        // Method 1: Using + operator
        System.out.println("=== PLUS OPERATOR CONCATENATION ===");
        String greeting1 = "Hello " + firstName;
        String fullName1 = firstName + " " + lastName;
        String introduction1 = "My name is " + firstName + " " + lastName + " and I am " + age + " years old.";
        
        System.out.println("greeting1: " + greeting1);
        System.out.println("fullName1: " + fullName1);
        System.out.println("introduction1: " + introduction1);
        
        // Method 2: Using concat() method
        System.out.println("\n=== CONCAT METHOD ===");
        String greeting2 = "Hello ".concat(firstName);
        String fullName2 = firstName.concat(" ").concat(lastName);
        
        System.out.println("greeting2: " + greeting2);
        System.out.println("fullName2: " + fullName2);
        
        // Method 3: Using String.join()
        System.out.println("\n=== STRING.JOIN METHOD ===");
        String fullName3 = String.join(" ", firstName, lastName);
        String csvData = String.join(",", "Apple", "Banana", "Cherry", "Date");
        String pathData = String.join("/", "home", "user", "documents", "file.txt");
        
        System.out.println("fullName3: " + fullName3);
        System.out.println("csvData: " + csvData);
        System.out.println("pathData: " + pathData);
        
        // Method 4: Using StringBuilder (for multiple concatenations)
        System.out.println("\n=== STRINGBUILDER ===");
        StringBuilder sb = new StringBuilder();
        sb.append("Hello ");
        sb.append(firstName);
        sb.append(" ");
        sb.append(lastName);
        sb.append(". You are ");
        sb.append(age);
        sb.append(" years old.");
        String introduction2 = sb.toString();
        
        System.out.println("introduction2: " + introduction2);
        
        // Method 5: Using String.format()
        System.out.println("\n=== STRING.FORMAT ===");
        String formatted = String.format("Hello %s %s. You are %d years old.", firstName, lastName, age);
        System.out.println("formatted: " + formatted);
        
        // Concatenation with different data types
        System.out.println("\n=== MIXED DATA TYPES ===");
        double salary = 50000.50;
        boolean isEmployed = true;
        char grade = 'A';
        
        String mixedConcat = "Employee: " + firstName + ", Salary: $" + salary + 
                           ", Employed: " + isEmployed + ", Grade: " + grade;
        System.out.println("mixedConcat: " + mixedConcat);
        
        // Performance comparison
        performanceComparison();
        
        // Best practices demonstration
        demonstrateBestPractices();
    }
    
    public static void performanceComparison() {
        System.out.println("\n=== PERFORMANCE COMPARISON ===");
        
        int iterations = 10000;
        String baseString = "Test";
        
        // Method 1: String concatenation with + (inefficient for loops)
        long startTime = System.currentTimeMillis();
        String result1 = "";
        for (int i = 0; i < iterations; i++) {
            result1 += baseString;  // Creates new String object each time
        }
        long stringConcatTime = System.currentTimeMillis() - startTime;
        
        // Method 2: StringBuilder (efficient for loops)
        startTime = System.currentTimeMillis();
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < iterations; i++) {
            sb.append(baseString);  // Modifies existing buffer
        }
        String result2 = sb.toString();
        long stringBuilderTime = System.currentTimeMillis() - startTime;
        
        System.out.println("String concatenation time: " + stringConcatTime + "ms");
        System.out.println("StringBuilder time: " + stringBuilderTime + "ms");
        System.out.println("Performance improvement: " + 
                          (stringConcatTime > 0 ? (stringConcatTime / (double)stringBuilderTime) : "N/A") + "x faster");
        
        System.out.println("Result lengths are equal: " + (result1.length() == result2.length()));
    }
    
    public static void demonstrateBestPractices() {
        System.out.println("\n=== BEST PRACTICES ===");
        
        // Good: Simple concatenations
        String simple = "Hello" + " " + "World";  // Compile-time optimization
        System.out.println("Simple concatenation: " + simple);
        
        // Good: Few concatenations
        String name = "John";
        String greeting = "Hello " + name + "!";  // Acceptable for few operations
        System.out.println("Few concatenations: " + greeting);
        
        // Better: Multiple concatenations with StringBuilder
        StringBuilder report = new StringBuilder();
        report.append("Employee Report\n");
        report.append("Name: ").append(name).append("\n");
        report.append("Department: IT\n");
        report.append("Status: Active\n");
        System.out.println("StringBuilder result:\n" + report.toString());
        
        // Best: Formatted strings for complex cases
        String formattedReport = String.format(
            "Employee Report\nName: %s\nDepartment: %s\nStatus: %s\n",
            name, "IT", "Active"
        );
        System.out.println("Formatted result:\n" + formattedReport);
        
        // Avoid: Concatenation in loops (shown in performance comparison)
        System.out.println("\nRecommendations:");
        System.out.println("- Use + for simple, few concatenations");
        System.out.println("- Use StringBuilder for multiple concatenations or loops");
        System.out.println("- Use String.format() for complex formatting");
        System.out.println("- Use String.join() for joining arrays/collections");
    }
}`
          },
          stringBuilderBuffer: {
            title: "StringBuilder and StringBuffer",
            description: "Mutable string classes for efficient string manipulation when multiple modifications are needed.",
            stringBuilder: {
              title: "StringBuilder: Faster, not thread-safe",
              description: "Preferred choice for single-threaded applications requiring string manipulation.",
              characteristics: [
                "Mutable - can be modified after creation",
                "Not synchronized - faster performance",
                "Not thread-safe - use in single-threaded environments",
                "Automatic capacity management with resizing"
              ]
            },
            stringBuffer: {
              title: "StringBuffer: Thread-safe, slightly slower",
              description: "Used in multi-threaded environments where thread safety is required.",
              characteristics: [
                "Mutable - can be modified after creation",
                "Synchronized - thread-safe operations",
                "Slightly slower due to synchronization overhead",
                "Automatic capacity management with resizing"
              ]
            },
            example: `// StringBuilder and StringBuffer comprehensive demonstration
public class StringBuilderBufferDemo {
    public static void main(String[] args) {
        // StringBuilder demonstration
        System.out.println("=== STRINGBUILDER DEMONSTRATION ===");
        
        // Creating StringBuilder
        StringBuilder sb1 = new StringBuilder();                    // Default capacity: 16
        StringBuilder sb2 = new StringBuilder(50);                  // Custom capacity: 50
        StringBuilder sb3 = new StringBuilder("Hello");             // Initialize with string
        
        System.out.println("Initial StringBuilder states:");
        System.out.println("sb1 capacity: " + sb1.capacity() + ", length: " + sb1.length());
        System.out.println("sb2 capacity: " + sb2.capacity() + ", length: " + sb2.length());
        System.out.println("sb3 capacity: " + sb3.capacity() + ", length: " + sb3.length() + ", content: " + sb3);
        
        // StringBuilder methods
        System.out.println("\nStringBuilder Methods:");
        
        // append() - Add to end
        sb3.append(" World");
        sb3.append('!');
        sb3.append(123);
        sb3.append(true);
        System.out.println("After appends: " + sb3);
        
        // insert() - Add at specific position
        sb3.insert(6, "Beautiful ");
        System.out.println("After insert: " + sb3);
        
        // delete() and deleteCharAt()
        sb3.delete(6, 16);  // Remove "Beautiful "
        System.out.println("After delete: " + sb3);
        
        sb3.deleteCharAt(sb3.length() - 1);  // Remove last character
        System.out.println("After deleteCharAt: " + sb3);
        
        // replace() - Replace substring
        sb3.replace(0, 5, "Hi");
        System.out.println("After replace: " + sb3);
        
        // reverse() - Reverse the string
        StringBuilder sb4 = new StringBuilder("Hello World");
        sb4.reverse();
        System.out.println("Reversed: " + sb4);
        
        // setCharAt() - Change character at index
        sb4.setCharAt(0, 'X');
        System.out.println("After setCharAt: " + sb4);
        
        // StringBuffer demonstration
        System.out.println("\n=== STRINGBUFFER DEMONSTRATION ===");
        
        StringBuffer sbf = new StringBuffer("Thread-Safe");
        sbf.append(" String");
        sbf.append(" Buffer");
        System.out.println("StringBuffer result: " + sbf);
        
        // Capacity management
        System.out.println("\n=== CAPACITY MANAGEMENT ===");
        StringBuilder capacityDemo = new StringBuilder(10);
        System.out.println("Initial capacity: " + capacityDemo.capacity());
        
        capacityDemo.append("This is a long string that exceeds initial capacity");
        System.out.println("After long append - capacity: " + capacityDemo.capacity() + 
                          ", length: " + capacityDemo.length());
        
        // Manual capacity control
        capacityDemo.ensureCapacity(100);
        System.out.println("After ensureCapacity(100): " + capacityDemo.capacity());
        
        capacityDemo.trimToSize();
        System.out.println("After trimToSize(): " + capacityDemo.capacity());
        
        // Performance comparison
        performanceComparison();
        
        // Thread safety demonstration
        threadSafetyDemo();
        
        // Practical examples
        practicalExamples();
    }
    
    public static void performanceComparison() {
        System.out.println("\n=== PERFORMANCE COMPARISON ===");
        
        int iterations = 50000;
        String baseString = "Test ";
        
        // String concatenation (inefficient)
        long startTime = System.currentTimeMillis();
        String result1 = "";
        for (int i = 0; i < iterations; i++) {
            result1 += baseString;
        }
        long stringTime = System.currentTimeMillis() - startTime;
        
        // StringBuilder (efficient)
        startTime = System.currentTimeMillis();
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < iterations; i++) {
            sb.append(baseString);
        }
        String result2 = sb.toString();
        long sbTime = System.currentTimeMillis() - startTime;
        
        // StringBuffer (thread-safe)
        startTime = System.currentTimeMillis();
        StringBuffer sbf = new StringBuffer();
        for (int i = 0; i < iterations; i++) {
            sbf.append(baseString);
        }
        String result3 = sbf.toString();
        long sbfTime = System.currentTimeMillis() - startTime;
        
        System.out.println("String concatenation: " + stringTime + "ms");
        System.out.println("StringBuilder: " + sbTime + "ms");
        System.out.println("StringBuffer: " + sbfTime + "ms");
        
        if (sbTime > 0) {
            System.out.println("StringBuilder is " + (stringTime / sbTime) + "x faster than String");
            System.out.println("StringBuffer is " + (stringTime / sbfTime) + "x faster than String");
        }
    }
    
    public static void threadSafetyDemo() {
        System.out.println("\n=== THREAD SAFETY DEMONSTRATION ===");
        
        // Shared StringBuilder (not thread-safe)
        StringBuilder sharedSB = new StringBuilder();
        
        // Shared StringBuffer (thread-safe)
        StringBuffer sharedSBF = new StringBuffer();
        
        // Create threads that modify the shared objects
        Thread[] threads = new Thread[5];
        
        // Using StringBuffer (thread-safe)
        for (int i = 0; i < threads.length; i++) {
            final int threadNum = i;
            threads[i] = new Thread(() -> {
                for (int j = 0; j < 100; j++) {
                    sharedSBF.append("T" + threadNum + "-" + j + " ");
                }
            });
        }
        
        // Start all threads
        for (Thread thread : threads) {
            thread.start();
        }
        
        // Wait for all threads to complete
        try {
            for (Thread thread : threads) {
                thread.join();
            }
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        
        System.out.println("StringBuffer result length: " + sharedSBF.length());
        System.out.println("Expected length: " + (5 * 100 * 6)); // 5 threads * 100 iterations * ~6 chars
        System.out.println("StringBuffer maintained consistency: " + 
                          (sharedSBF.length() >= 2900)); // Allow some variance
    }
    
    public static void practicalExamples() {
        System.out.println("\n=== PRACTICAL EXAMPLES ===");
        
        // Example 1: Building HTML
        StringBuilder html = new StringBuilder();
        html.append("<html>\n");
        html.append("  <head><title>My Page</title></head>\n");
        html.append("  <body>\n");
        html.append("    <h1>Welcome</h1>\n");
        html.append("    <p>This is a dynamically generated page.</p>\n");
        html.append("  </body>\n");
        html.append("</html>");
        
        System.out.println("Generated HTML:");
        System.out.println(html.toString());
        
        // Example 2: Building SQL query
        StringBuilder sql = new StringBuilder();
        sql.append("SELECT name, age, email ");
        sql.append("FROM users ");
        sql.append("WHERE age > 18 ");
        sql.append("AND status = 'active' ");
        sql.append("ORDER BY name");
        
        System.out.println("\nGenerated SQL:");
        System.out.println(sql.toString());
        
        // Example 3: Processing log entries
        String[] logEntries = {
            "INFO: Application started",
            "WARN: Low memory detected",
            "ERROR: Database connection failed",
            "INFO: User logged in"
        };
        
        StringBuilder logReport = new StringBuilder();
        logReport.append("=== LOG REPORT ===\n");
        
        int infoCount = 0, warnCount = 0, errorCount = 0;
        
        for (String entry : logEntries) {
            logReport.append(entry).append("\n");
            
            if (entry.startsWith("INFO")) infoCount++;
            else if (entry.startsWith("WARN")) warnCount++;
            else if (entry.startsWith("ERROR")) errorCount++;
        }
        
        logReport.append("\n=== SUMMARY ===\n");
        logReport.append("INFO: ").append(infoCount).append("\n");
        logReport.append("WARN: ").append(warnCount).append("\n");
        logReport.append("ERROR: ").append(errorCount).append("\n");
        
        System.out.println("\nLog Report:");
        System.out.println(logReport.toString());
        
        // Example 4: Method chaining
        String result = new StringBuilder()
            .append("Method ")
            .append("chaining ")
            .append("example")
            .insert(0, "StringBuilder ")
            .reverse()
            .toString();
        
        System.out.println("\nMethod chaining result: " + result);
    }
}`
          },
          stringComparison: {
            title: "String Comparison",
            description: "Understanding different ways to compare strings and their implications.",
            example: `// String comparison demonstration
public class StringComparisonDemo {
    public static void main(String[] args) {
        String a = "Java";
        String b = "Java";
        String c = new String("Java");
        String d = "JAVA";
        
        System.out.println("String Comparison Examples:");
        System.out.println("a = \"Java\" (literal)");
        System.out.println("b = \"Java\" (literal)");
        System.out.println("c = new String(\"Java\")");
        System.out.println("d = \"JAVA\"");
        
        // Reference comparison (==)
        System.out.println("\nReference Comparison (==):");
        System.out.println("a == b: " + (a == b));       // true (same reference from string pool)
        System.out.println("a == c: " + (a == c));       // false (different object)
        System.out.println("b == c: " + (b == c));       // false (different object)
        
        // Content comparison (equals)
        System.out.println("\nContent Comparison (equals):");
        System.out.println("a.equals(b): " + a.equals(b));  // true (same content)
        System.out.println("a.equals(c): " + a.equals(c));  // true (same content)
        System.out.println("a.equals(d): " + a.equals(d));  // false (different case)
        
        // Case-insensitive comparison
        System.out.println("\nCase-insensitive Comparison:");
        System.out.println("a.equalsIgnoreCase(d): " + a.equalsIgnoreCase(d));  // true
        
        // Null-safe comparison
        String nullStr = null;
        System.out.println("\nNull-safe Comparison:");
        System.out.println("a.equals(nullStr): " + a.equals(nullStr));  // false
        // System.out.println(nullStr.equals(a)); // Would throw NullPointerException
        System.out.println("Objects.equals(a, nullStr): " + java.util.Objects.equals(a, nullStr));  // false
        
        // Lexicographic comparison
        System.out.println("\nLexicographic Comparison (compareTo):");
        System.out.println("\"Apple\".compareTo(\"Banana\"): " + "Apple".compareTo("Banana"));  // -1 (negative)
        System.out.println("\"Banana\".compareTo(\"Apple\"): " + "Banana".compareTo("Apple"));  // 1 (positive)
        System.out.println("\"Apple\".compareTo(\"Apple\"): " + "Apple".compareTo("Apple"));    // 0 (equal)
    }
}`
          },
          stringConcatenation: {
            title: "String Concatenation",
            description: "Different methods to combine strings and their performance implications.",
            example: `// String concatenation methods
public class StringConcatenationDemo {
    public static void main(String[] args) {
        String name = "John";
        String lastName = "Doe";
        int age = 25;
        
        // Method 1: Using + operator
        String greeting1 = "Hello " + name;
        String fullInfo1 = "Name: " + name + " " + lastName + ", Age: " + age;
        
        System.out.println("Using + operator:");
        System.out.println(greeting1);
        System.out.println(fullInfo1);
        
        // Method 2: Using concat() method
        String greeting2 = "Hello ".concat(name);
        String fullName = name.concat(" ").concat(lastName);
        
        System.out.println("\nUsing concat() method:");
        System.out.println(greeting2);
        System.out.println(fullName);
        
        // Method 3: Using StringBuilder (recommended for multiple concatenations)
        StringBuilder sb = new StringBuilder();
        sb.append("Name: ").append(name).append(" ").append(lastName)
          .append(", Age: ").append(age);
        String fullInfo2 = sb.toString();
        
        System.out.println("\nUsing StringBuilder:");
        System.out.println(fullInfo2);
        
        // Method 4: Using String.join() (Java 8+)
        String joined = String.join(" ", "Hello", name, lastName);
        System.out.println("\nUsing String.join():");
        System.out.println(joined);
        
        // Performance comparison
        demonstratePerformance();
    }
    
    public static void demonstratePerformance() {
        System.out.println("\n=== Performance Comparison ===");
        int iterations = 10000;
        
        // String concatenation with + (inefficient for loops)
        long startTime = System.currentTimeMillis();
        String result1 = "";
        for (int i = 0; i < iterations; i++) {
            result1 += "a";  // Creates new String object each time
        }
        long stringTime = System.currentTimeMillis() - startTime;
        
        // StringBuilder (efficient)
        startTime = System.currentTimeMillis();
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < iterations; i++) {
            sb.append("a");
        }
        String result2 = sb.toString();
        long sbTime = System.currentTimeMillis() - startTime;
        
        System.out.println("String concatenation time: " + stringTime + "ms");
        System.out.println("StringBuilder time: " + sbTime + "ms");
        System.out.println("StringBuilder is " + (stringTime / (sbTime + 1)) + "x faster");
    }
}`
          },
          stringBuilderBuffer: {
            title: "StringBuilder and StringBuffer",
            description: "Mutable string classes for efficient string manipulation.",
            differences: {
              stringBuilder: {
                title: "StringBuilder: Faster, not thread-safe",
                characteristics: [
                  "Not synchronized",
                  "Better performance in single-threaded applications",
                  "Introduced in Java 5",
                  "Preferred choice for most applications"
                ]
              },
              stringBuffer: {
                title: "StringBuffer: Thread-safe, slightly slower",
                characteristics: [
                  "Synchronized methods",
                  "Thread-safe for multi-threaded applications",
                  "Available since Java 1.0",
                  "Use when thread safety is required"
                ]
              }
            },
            example: `// StringBuilder and StringBuffer demonstration
public class StringBuilderBufferDemo {
    public static void main(String[] args) {
        // StringBuilder example
        StringBuilder sb = new StringBuilder("Hello");
        System.out.println("StringBuilder Operations:");
        System.out.println("Initial: " + sb);
        
        // Append operations
        sb.append(" World");
        sb.append("!");
        sb.append(" Java is ").append("awesome");
        System.out.println("After appends: " + sb);
        
        // Insert operation
        sb.insert(6, "Beautiful ");
        System.out.println("After insert: " + sb);
        
        // Replace operation
        sb.replace(6, 15, "Amazing");
        System.out.println("After replace: " + sb);
        
        // Delete operation
        sb.delete(sb.length() - 9, sb.length());
        System.out.println("After delete: " + sb);
        
        // Reverse operation
        StringBuilder reversed = new StringBuilder("Java").reverse();
        System.out.println("Reversed 'Java': " + reversed);
        
        // StringBuffer example (similar API)
        StringBuffer sbf = new StringBuffer("StringBuffer");
        System.out.println("\nStringBuffer Operations:");
        System.out.println("Initial: " + sbf);
        
        sbf.append(" is thread-safe");
        System.out.println("After append: " + sbf);
        
        // Capacity and length
        System.out.println("\nCapacity and Length:");
        StringBuilder capacity = new StringBuilder();
        System.out.println("Initial capacity: " + capacity.capacity());  // 16
        System.out.println("Initial length: " + capacity.length());      // 0
        
        capacity.append("This is a longer string that exceeds initial capacity");
        System.out.println("After long append:");
        System.out.println("Capacity: " + capacity.capacity());
        System.out.println("Length: " + capacity.length());
        
        // Efficient string building
        demonstrateEfficientBuilding();
        
        // Thread safety demonstration
        demonstrateThreadSafety();
    }
    
    public static void demonstrateEfficientBuilding() {
        System.out.println("\n=== Efficient String Building ===");
        
        // Building a CSV string
        String[] data = {"Name", "Age", "City", "Country", "Email"};
        
        // Using StringBuilder
        StringBuilder csv = new StringBuilder();
        for (int i = 0; i < data.length; i++) {
            csv.append(data[i]);
            if (i < data.length - 1) {
                csv.append(",");
            }
        }
        System.out.println("CSV: " + csv.toString());
        
        // Building HTML
        StringBuilder html = new StringBuilder();
        html.append("<html>");
        html.append("<body>");
        html.append("<h1>Welcome</h1>");
        html.append("<p>This is a paragraph.</p>");
        html.append("</body>");
        html.append("</html>");
        System.out.println("HTML: " + html.toString());
        
        // Method chaining
        String result = new StringBuilder()
            .append("Method ")
            .append("chaining ")
            .append("is ")
            .append("elegant")
            .toString();
        System.out.println("Method chaining: " + result);
    }
    
    public static void demonstrateThreadSafety() {
        System.out.println("\n=== Thread Safety Demonstration ===");
        
        // StringBuffer (thread-safe)
        StringBuffer threadSafeBuffer = new StringBuffer();
        
        // StringBuilder (not thread-safe)
        StringBuilder nonThreadSafeBuilder = new StringBuilder();
        
        System.out.println("StringBuffer is synchronized (thread-safe)");
        System.out.println("StringBuilder is not synchronized (faster, but not thread-safe)");
        System.out.println("Use StringBuffer in multi-threaded environments");
        System.out.println("Use StringBuilder in single-threaded applications for better performance");
    }
}`
          },
          stringImmutability: {
            title: "String Immutability",
            description: "Understanding why strings cannot be modified and the implications.",
            example: `// String immutability detailed demonstration
public class StringImmutabilityDetailedDemo {
    public static void main(String[] args) {
        String s = "Java";
        System.out.println("Original string: " + s);
        System.out.println("Original hashCode: " + s.hashCode());
        
        // Attempting to 'modify' the string
        String result = s.concat(" Programming"); // Does not change 's'
        System.out.println("\nAfter concat operation:");
        System.out.println("Original string 's': " + s);           // Still "Java"
        System.out.println("Result string: " + result);            // "Java Programming"
        System.out.println("s hashCode: " + s.hashCode());
        System.out.println("result hashCode: " + result.hashCode());
        
        // To reflect the change, reassignment is needed
        s = s.concat(" Programming");
        System.out.println("\nAfter reassignment:");
        System.out.println("s is now: " + s);                     // "Java Programming"
        
        // Multiple operations create multiple objects
        System.out.println("\n=== Multiple Operations ===");
        String original = "Hello";
        System.out.println("Starting with: " + original);
        
        // Each operation creates a new String object
        String step1 = original.toUpperCase();     // New object
        String step2 = step1.concat(" WORLD");     // New object
        String step3 = step2.replace('O', '0');    // New object
        String step4 = step3.substring(0, 10);     // New object
        
        System.out.println("Original: " + original);  // Unchanged
        System.out.println("Final result: " + step4);
        System.out.println("Total String objects created: 5 (including original)");
        
        // Demonstrating why immutability matters
        demonstrateImmutabilityBenefits();
        
        // Performance implications
        demonstratePerformanceImplications();
    }
    
    public static void demonstrateImmutabilityBenefits() {
        System.out.println("\n=== Benefits of Immutability ===");
        
        // 1. Thread Safety
        String sharedString = "Shared Data";
        System.out.println("1. Thread Safety: String can be safely shared between threads");
        
        // 2. Caching (String Pool)
        String s1 = "Cache";
        String s2 = "Cache";
        System.out.println("2. Caching: s1 == s2 is " + (s1 == s2) + " (same object from pool)");
        
        // 3. Security
        String password = "secret123";
        processPassword(password);
        System.out.println("3. Security: Original password unchanged: " + password);
        
        // 4. Hashcode caching
        String hashExample = "HashCode Example";
        int hash1 = hashExample.hashCode();
        int hash2 = hashExample.hashCode();
        System.out.println("4. HashCode Caching: Consistent hash values: " + (hash1 == hash2));
    }
    
    public static void processPassword(String pwd) {
        // Even if we try to modify, original is safe
        pwd = pwd.toUpperCase();
        pwd = pwd + "_PROCESSED";
        System.out.println("   Processed in method: " + pwd);
    }
    
    public static void demonstratePerformanceImplications() {
        System.out.println("\n=== Performance Implications ===");
        
        // Inefficient: Multiple string concatenations
        long startTime = System.currentTimeMillis();
        String inefficient = "";
        for (int i = 0; i < 1000; i++) {
            inefficient += "a";  // Creates new object each time
        }
        long inefficientTime = System.currentTimeMillis() - startTime;
        
        // Efficient: Using StringBuilder
        startTime = System.currentTimeMillis();
        StringBuilder efficient = new StringBuilder();
        for (int i = 0; i < 1000; i++) {
            efficient.append("a");
        }
        String efficientResult = efficient.toString();
        long efficientTime = System.currentTimeMillis() - startTime;
        
        System.out.println("Inefficient concatenation time: " + inefficientTime + "ms");
        System.out.println("Efficient StringBuilder time: " + efficientTime + "ms");
        System.out.println("Recommendation: Use StringBuilder for multiple concatenations");
    }
}`
          },
          stringFormatting: {
            title: "String Formatting",
            description: "Various methods to format strings with placeholders and values.",
            example: `// String formatting demonstration
public class StringFormattingDemo {
    public static void main(String[] args) {
        String name = "Alice";
        int age = 25;
        double salary = 75000.50;
        boolean isActive = true;
        
        // Method 1: printf() - C-style formatting
        System.out.println("=== printf() Formatting ===");
        System.out.printf("Name: %s, Age: %d%n", name, age);
        System.out.printf("Salary: $%.2f%n", salary);
        System.out.printf("Active: %b%n", isActive);
        
        // Method 2: String.format() - Returns formatted string
        System.out.println("\n=== String.format() ===");
        String formatted = String.format("Employee: %s (Age: %d, Salary: $%.2f)", name, age, salary);
        System.out.println(formatted);
        
        // Method 3: Format specifiers
        System.out.println("\n=== Format Specifiers ===");
        System.out.printf("String: %s%n", "Hello");
        System.out.printf("Integer: %d%n", 42);
        System.out.printf("Float: %f%n", 3.14159);
        System.out.printf("Float (2 decimals): %.2f%n", 3.14159);
        System.out.printf("Scientific: %e%n", 1234.5);
        System.out.printf("Hexadecimal: %x%n", 255);
        System.out.printf("Octal: %o%n", 64);
        System.out.printf("Boolean: %b%n", true);
        System.out.printf("Character: %c%n", 'A');
        
        // Method 4: Width and alignment
        System.out.println("\n=== Width and Alignment ===");
        System.out.printf("Right aligned: '%10s'%n", "Hello");
        System.out.printf("Left aligned: '%-10s'%n", "Hello");
        System.out.printf("Zero padded: '%08d'%n", 42);
        System.out.printf("Space padded: '%8d'%n", 42);
        
        // Method 5: MessageFormat (Java text formatting)
        System.out.println("\n=== MessageFormat ===");
        String pattern = "At {0,time} on {0,date}, {1} logged in with {2} privileges.";
        Object[] arguments = {new java.util.Date(), "Alice", "admin"};
        String message = java.text.MessageFormat.format(pattern, arguments);
        System.out.println(message);
        
        // Method 6: Practical examples
        demonstratePracticalFormatting();
    }
    
    public static void demonstratePracticalFormatting() {
        System.out.println("\n=== Practical Formatting Examples ===");
        
        // Table formatting
        System.out.println("\nTable Format:");
        System.out.printf("%-10s %-5s %-10s%n", "Name", "Age", "Salary");
        System.out.printf("%-10s %-5s %-10s%n", "-".repeat(10), "-".repeat(5), "-".repeat(10));
        System.out.printf("%-10s %-5d $%-9.2f%n", "Alice", 25, 75000.50);
        System.out.printf("%-10s %-5d $%-9.2f%n", "Bob", 30, 82000.75);
        System.out.printf("%-10s %-5d $%-9.2f%n", "Charlie", 28, 68000.00);
        
        // Currency formatting
        System.out.println("\nCurrency Formatting:");
        double[] prices = {19.99, 1234.56, 0.99, 10000.00};
        for (double price : prices) {
            System.out.printf("Price: $%,.2f%n", price);
        }
        
        // Percentage formatting
        System.out.println("\nPercentage Formatting:");
        double[] rates = {0.15, 0.075, 0.005, 1.25};
        for (double rate : rates) {
            System.out.printf("Rate: %.1f%%%n", rate * 100);
        }
        
        // Date and time formatting
        System.out.println("\nDate/Time Formatting:");
        java.util.Date now = new java.util.Date();
        System.out.printf("Full date/time: %tc%n", now);
        System.out.printf("Date only: %tD%n", now);
        System.out.printf("Time only: %tT%n", now);
        System.out.printf("Custom: %tB %td, %tY%n", now, now, now);
    }
}`
          },
          regexMethods: {
            title: "Useful Methods from java.util.regex",
            description: "Pattern matching and regular expression methods for string validation and manipulation.",
            example: `import java.util.regex.*;

// Regular expression methods demonstration
public class StringRegexDemo {
    public static void main(String[] args) {
        // matches() - for regex pattern matching
        System.out.println("=== matches() Method ===");
        String email = "abc@example.com";
        System.out.println("Email validation:");
        System.out.println(email + " matches email pattern: " + 
                          email.matches(".*@.*\\..*"));
        
        // More specific email validation
        String emailPattern = "^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$";
        System.out.println(email + " matches strict email: " + 
                          email.matches(emailPattern));
        
        // Phone number validation
        System.out.println("\nPhone number validation:");
        String[] phones = {"123-456-7890", "(123) 456-7890", "1234567890", "123-45-6789"};
        String phonePattern = "\\d{3}-\\d{3}-\\d{4}";
        
        for (String phone : phones) {
            System.out.println(phone + " matches pattern: " + phone.matches(phonePattern));
        }
        
        // replaceAll() and replaceFirst() with regex
        System.out.println("\n=== replaceAll() and replaceFirst() ===");
        String text = "The year 2023 was great, and 2024 will be better!";
        System.out.println("Original: " + text);
        
        // Replace all digits
        String noDigits = text.replaceAll("\\d+", "XXXX");
        System.out.println("All digits replaced: " + noDigits);
        
        // Replace first digit sequence only
        String firstDigitReplaced = text.replaceFirst("\\d+", "YYYY");
        System.out.println("First digits replaced: " + firstDigitReplaced);
        
        // split() with regex
        System.out.println("\n=== split() with Regex ===");
        String data = "apple123banana456cherry789grape";
        System.out.println("Original data: " + data);
        
        // Split by digits
        String[] fruits = data.split("\\d+");
        System.out.println("Split by digits: " + java.util.Arrays.toString(fruits));
        
        // Split by non-alphabetic characters
        String mixed = "apple,banana;cherry:grape";
        String[] fruitsMixed = mixed.split("[,;:]");
        System.out.println("Split by punctuation: " + java.util.Arrays.toString(fruitsMixed));
        
        // Pattern and Matcher classes
        System.out.println("\n=== Pattern and Matcher Classes ===");
        demonstratePatternMatcher();
        
        // Common regex patterns
        demonstrateCommonPatterns();
    }
    
    public static void demonstratePatternMatcher() {
        String text = "Contact us at support@company.com or sales@company.com";
        String emailRegex = "[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}";
        
        Pattern pattern = Pattern.compile(emailRegex);
        Matcher matcher = pattern.matcher(text);
        
        System.out.println("Finding all emails in: " + text);
        while (matcher.find()) {
            System.out.println("Found email: " + matcher.group() + 
                             " at position " + matcher.start() + "-" + matcher.end());
        }
        
        // Replace using Matcher
        String masked = matcher.replaceAll("[EMAIL_HIDDEN]");
        System.out.println("Masked text: " + masked);
    }
    
    public static void demonstrateCommonPatterns() {
        System.out.println("\n=== Common Regex Patterns ===");
        
        // Test data
        String[] testData = {
            "john.doe@email.com",
            "123-45-6789",
            "(555) 123-4567",
            "192.168.1.1",
            "https://www.example.com",
            "ABC123",
            "12/25/2023",
            "$1,234.56"
        };
        
        // Patterns
        String[][] patterns = {
            {"Email", "^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$"},
            {"SSN", "^\\d{3}-\\d{2}-\\d{4}$"},
            {"Phone", "^\\(\\d{3}\\)\\s\\d{3}-\\d{4}$"},
            {"IP Address", "^\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}$"},
            {"URL", "^https?://[A-Za-z0-9.-]+\\.[A-Za-z]{2,}.*$"},
            {"Alphanumeric", "^[A-Za-z0-9]+$"},
            {"Date (MM/DD/YYYY)", "^\\d{2}/\\d{2}/\\d{4}$"},
            {"Currency", "^\\$[0-9,]+\\.\\d{2}$"}
        };
        
        System.out.printf("%-20s %-15s %-10s%n", "Pattern Type", "Test Data", "Matches");
        System.out.println("-".repeat(50));
        
        for (int i = 0; i < testData.length && i < patterns.length; i++) {
            boolean matches = testData[i].matches(patterns[i][1]);
            System.out.printf("%-20s %-15s %-10s%n", 
                            patterns[i][0], testData[i], matches);
        }
    }
}`
          }
        },
        exceptionHandling: {
          title: "Java Exception Handling",
          description: "Exception handling is a mechanism to handle runtime errors and maintain normal application flow when unexpected events occur.",
          whatIsException: {
            title: "What is an Exception?",
            definition: {
              title: "An exception is an unexpected event that disrupts the normal flow of a program.",
              description: "Exceptions represent error conditions that occur during program execution.",
              characteristics: [
                "Occurs at runtime",
                "Disrupts normal program flow",
                "Can be handled to prevent program termination",
                "Provides information about the error"
              ]
            },
            objectRepresentation: {
              title: "It is an object that represents an error.",
              description: "In Java, exceptions are objects that contain information about the error condition.",
              information: [
                "Error message describing what went wrong",
                "Stack trace showing where the error occurred",
                "Exception type indicating the kind of error",
                "Cause of the exception (if applicable)"
              ]
            }
          },
          typesOfExceptions: {
            title: "Types of Exceptions",
            description: "Java exceptions are categorized into checked and unchecked exceptions based on when they are detected.",
            checkedExceptions: {
              title: "Checked Exceptions",
              description: "Exceptions that are checked at compile-time and must be handled or declared.",
              characteristics: [
                "Checked at compile-time",
                "Must be either caught or declared",
                "Extend Exception class (but not RuntimeException)",
                "Represent recoverable conditions"
              ],
              examples: ["IOException", "SQLException", "ClassNotFoundException", "InterruptedException"]
            },
            uncheckedExceptions: {
              title: "Unchecked Exceptions",
              description: "Exceptions that are checked at runtime and are not required to be handled.",
              characteristics: [
                "Checked at runtime",
                "Not required to be handled",
                "Extend RuntimeException class",
                "Usually represent programming errors"
              ],
              examples: ["NullPointerException", "ArithmeticException", "ArrayIndexOutOfBoundsException", "IllegalArgumentException"]
            },
            example: `// Exception types demonstration
public class ExceptionTypesDemo {
    public static void main(String[] args) {
        System.out.println("=== Unchecked Exceptions (Runtime) ===");
        
        // These don't need to be declared or caught (but should be handled)
        demonstrateUncheckedExceptions();
        
        System.out.println("\n=== Checked Exceptions (Compile-time) ===");
        
        // These must be handled or declared
        try {
            demonstrateCheckedExceptions();
        } catch (Exception e) {
            System.out.println("Caught checked exception: " + e.getMessage());
        }
    }
    
    public static void demonstrateUncheckedExceptions() {
        try {
            // ArithmeticException
            int result = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("ArithmeticException: " + e.getMessage());
        }
        
        try {
            // NullPointerException
            String str = null;
            int length = str.length();
        } catch (NullPointerException e) {
            System.out.println("NullPointerException: Cannot call method on null");
        }
        
        try {
            // ArrayIndexOutOfBoundsException
            int[] arr = {1, 2, 3};
            int value = arr[5];
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("ArrayIndexOutOfBoundsException: " + e.getMessage());
        }
    }
    
    // This method must declare the checked exception
    public static void demonstrateCheckedExceptions() throws java.io.IOException {
        // Simulating a checked exception
        throw new java.io.IOException("File not found");
    }
}`
          },
          commonExceptionClasses: {
            title: "Common Exception Classes",
            description: "Frequently encountered exception types and their typical causes.",
            exceptions: {
              arithmeticException: {
                type: "ArithmeticException",
                description: "Divide by zero error",
                commonCause: "Division by zero or invalid arithmetic operation"
              },
              nullPointerException: {
                type: "NullPointerException",
                description: "Using null object reference",
                commonCause: "Calling methods or accessing fields on null objects"
              },
              arrayIndexOutOfBounds: {
                type: "ArrayIndexOutOfBoundsException",
                description: "Accessing invalid array index",
                commonCause: "Index less than 0 or greater than array length-1"
              },
              numberFormatException: {
                type: "NumberFormatException",
                description: "Invalid conversion (e.g., 'abc' to int)",
                commonCause: "Parsing non-numeric strings to numbers"
              },
              ioException: {
                type: "IOException",
                description: "Input/Output failure",
                commonCause: "File operations, network operations, stream operations"
              }
            },
            example: `// Common exceptions demonstration
public class CommonExceptionsDemo {
    public static void main(String[] args) {
        System.out.println("=== Common Exception Examples ===");
        
        // 1. ArithmeticException
        demonstrateArithmeticException();
        
        // 2. NullPointerException
        demonstrateNullPointerException();
        
        // 3. ArrayIndexOutOfBoundsException
        demonstrateArrayIndexOutOfBoundsException();
        
        // 4. NumberFormatException
        demonstrateNumberFormatException();
        
        // 5. StringIndexOutOfBoundsException
        demonstrateStringIndexOutOfBoundsException();
        
        // 6. IllegalArgumentException
        demonstrateIllegalArgumentException();
    }
    
    public static void demonstrateArithmeticException() {
        System.out.println("\n1. ArithmeticException:");
        try {
            int a = 10;
            int b = 0;
            int result = a / b;  // Division by zero
            System.out.println("Result: " + result);
        } catch (ArithmeticException e) {
            System.out.println("Error: " + e.getMessage());
            System.out.println("Cannot divide by zero!");
        }
    }
    
    public static void demonstrateNullPointerException() {
        System.out.println("\n2. NullPointerException:");
        try {
            String text = null;
            int length = text.length();  // Calling method on null
            System.out.println("Length: " + length);
        } catch (NullPointerException e) {
            System.out.println("Error: Cannot call method on null object");
            System.out.println("Exception: " + e.getClass().getSimpleName());
        }
    }
    
    public static void demonstrateArrayIndexOutOfBoundsException() {
        System.out.println("\n3. ArrayIndexOutOfBoundsException:");
        try {
            int[] numbers = {1, 2, 3, 4, 5};
            System.out.println("Array length: " + numbers.length);
            int value = numbers[10];  // Invalid index
            System.out.println("Value: " + value);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Error: " + e.getMessage());
            System.out.println("Array index out of bounds!");
        }
    }
    
    public static void demonstrateNumberFormatException() {
        System.out.println("\n4. NumberFormatException:");
        try {
            String invalidNumber = "abc123";
            int number = Integer.parseInt(invalidNumber);  // Invalid conversion
            System.out.println("Number: " + number);
        } catch (NumberFormatException e) {
            System.out.println("Error: " + e.getMessage());
            System.out.println("Cannot convert '" + "abc123" + "' to integer");
        }
    }
    
    public static void demonstrateStringIndexOutOfBoundsException() {
        System.out.println("\n5. StringIndexOutOfBoundsException:");
        try {
            String text = "Hello";
            char character = text.charAt(10);  // Invalid string index
            System.out.println("Character: " + character);
        } catch (StringIndexOutOfBoundsException e) {
            System.out.println("Error: " + e.getMessage());
            System.out.println("String index out of bounds!");
        }
    }
    
    public static void demonstrateIllegalArgumentException() {
        System.out.println("\n6. IllegalArgumentException:");
        try {
            Thread.sleep(-1000);  // Negative sleep time
        } catch (IllegalArgumentException e) {
            System.out.println("Error: " + e.getMessage());
            System.out.println("Sleep time cannot be negative!");
        } catch (InterruptedException e) {
            System.out.println("Thread interrupted");
        }
    }
}`
          },
          tryCatchBlock: {
            title: "Try-Catch Block",
            description: "The fundamental mechanism for handling exceptions in Java.",
            syntax: "try { // risky code } catch (ExceptionType e) { // handle exception }",
            example: `// Try-catch block demonstration
public class TryCatchDemo {
    public static void main(String[] args) {
        System.out.println("=== Basic Try-Catch ===");
        
        // Basic try-catch
        try {
            int result = 10 / 0;  // This will throw ArithmeticException
            System.out.println("Result: " + result);
        } catch (ArithmeticException e) {
            System.out.println("Caught ArithmeticException: " + e.getMessage());
            System.out.println("Cannot divide by zero.");
        }
        
        System.out.println("Program continues after exception handling...");
        
        // Try-catch with different exception types
        demonstrateMultipleScenarios();
        
        // Exception information
        demonstrateExceptionInformation();
        
        // Nested try-catch
        demonstrateNestedTryCatch();
    }
    
    public static void demonstrateMultipleScenarios() {
        System.out.println("\n=== Multiple Scenarios ===");
        
        // Scenario 1: Exception occurs
        System.out.println("\nScenario 1: Exception occurs");
        try {
            String str = null;
            int length = str.length();
            System.out.println("Length: " + length);
        } catch (NullPointerException e) {
            System.out.println("Handled NullPointerException");
        }
        
        // Scenario 2: No exception
        System.out.println("\nScenario 2: No exception");
        try {
            String str = "Hello World";
            int length = str.length();
            System.out.println("Length: " + length);
        } catch (NullPointerException e) {
            System.out.println("This won't be executed");
        }
        
        // Scenario 3: Exception not caught
        System.out.println("\nScenario 3: Different exception type");
        try {
            int[] arr = {1, 2, 3};
            System.out.println("Element: " + arr[1]);  // Valid access
        } catch (NullPointerException e) {
            System.out.println("This won't catch ArrayIndexOutOfBoundsException");
        }
    }
    
    public static void demonstrateExceptionInformation() {
        System.out.println("\n=== Exception Information ===");
        
        try {
            int[] numbers = {1, 2, 3};
            int value = numbers[5];
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Exception class: " + e.getClass().getName());
            System.out.println("Exception message: " + e.getMessage());
            System.out.println("Exception toString: " + e.toString());
            
            System.out.println("\nStack trace:");
            e.printStackTrace();
        }
    }
    
    public static void demonstrateNestedTryCatch() {
        System.out.println("\n=== Nested Try-Catch ===");
        
        try {
            System.out.println("Outer try block");
            
            try {
                System.out.println("Inner try block");
                int result = 10 / 0;
            } catch (ArithmeticException e) {
                System.out.println("Inner catch: " + e.getMessage());
                // Re-throwing the exception
                throw e;
            }
            
        } catch (ArithmeticException e) {
            System.out.println("Outer catch: Handled re-thrown exception");
        }
    }
}`
          },
          multipleCatchBlocks: {
            title: "Multiple Catch Blocks",
            description: "Handling different types of exceptions with separate catch blocks.",
            example: `// Multiple catch blocks demonstration
public class MultipleCatchDemo {
    public static void main(String[] args) {
        System.out.println("=== Multiple Catch Blocks ===");
        
        // Example 1: Different exception types
        demonstrateDifferentExceptions();
        
        // Example 2: Exception hierarchy
        demonstrateExceptionHierarchy();
        
        // Example 3: Multi-catch (Java 7+)
        demonstrateMultiCatch();
    }
    
    public static void demonstrateDifferentExceptions() {
        System.out.println("\n1. Different Exception Types:");
        
        String[] testCases = {null, "123", "abc", "valid"};
        int[] indices = {0, 1, 2, 10};
        
        for (int i = 0; i < testCases.length; i++) {
            try {
                String s = testCases[i];
                System.out.println("Processing: " + s);
                
                // This might throw NullPointerException
                int length = s.length();
                
                // This might throw NumberFormatException
                int number = Integer.parseInt(s);
                
                // This might throw ArrayIndexOutOfBoundsException
                int value = indices[number];
                
                System.out.println("Success: " + value);
                
            } catch (NullPointerException e) {
                System.out.println("Caught NullPointerException: String is null");
            } catch (NumberFormatException e) {
                System.out.println("Caught NumberFormatException: " + e.getMessage());
            } catch (ArrayIndexOutOfBoundsException e) {
                System.out.println("Caught ArrayIndexOutOfBoundsException: " + e.getMessage());
            }
            System.out.println();
        }
    }
    
    public static void demonstrateExceptionHierarchy() {
        System.out.println("\n2. Exception Hierarchy (Order Matters):");
        
        try {
            // This will throw ArithmeticException
            int result = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("Specific: ArithmeticException - " + e.getMessage());
        } catch (RuntimeException e) {
            System.out.println("General: RuntimeException - " + e.getMessage());
        } catch (Exception e) {
            System.out.println("Most General: Exception - " + e.getMessage());
        }
        
        // Note: More specific exceptions must come before general ones
    }
    
    public static void demonstrateMultiCatch() {
        System.out.println("\n3. Multi-catch (Java 7+):");
        
        try {
            // Simulate different exceptions
            String input = "abc";
            int number = Integer.parseInt(input);
            int result = 100 / number;
            
        } catch (NumberFormatException | ArithmeticException e) {
            System.out.println("Caught either NumberFormatException or ArithmeticException");
            System.out.println("Exception type: " + e.getClass().getSimpleName());
            System.out.println("Message: " + e.getMessage());
        }
    }
}`
          },
          finallyBlock: {
            title: "Finally Block",
            description: "Code that always executes regardless of whether an exception occurs or not.",
            example: `// Finally block demonstration
public class FinallyBlockDemo {
    public static void main(String[] args) {
        System.out.println("=== Finally Block Examples ===");
        
        // Example 1: Exception occurs
        System.out.println("\n1. Exception occurs:");
        try {
            int a = 5 / 0;
            System.out.println("This won't print");
        } catch (ArithmeticException e) {
            System.out.println("Exception handled: " + e.getMessage());
        } finally {
            System.out.println("Finally block: This always runs");
        }
        
        // Example 2: No exception
        System.out.println("\n2. No exception:");
        try {
            int a = 10 / 2;
            System.out.println("Result: " + a);
        } catch (ArithmeticException e) {
            System.out.println("This won't execute");
        } finally {
            System.out.println("Finally block: Executed even without exception");
        }
        
        // Example 3: Resource cleanup
        System.out.println("\n3. Resource cleanup:");
        demonstrateResourceCleanup();
        
        // Example 4: Finally with return
        System.out.println("\n4. Finally with return:");
        int result = methodWithFinallyAndReturn();
        System.out.println("Returned value: " + result);
    }
    
    public static void demonstrateResourceCleanup() {
        java.io.FileInputStream fis = null;
        try {
            System.out.println("Opening file...");
            // Simulating file operations
            fis = new java.io.FileInputStream("nonexistent.txt");
            System.out.println("File opened successfully");
            
        } catch (java.io.FileNotFoundException e) {
            System.out.println("File not found: " + e.getMessage());
        } finally {
            // Cleanup resources
            System.out.println("Cleanup: Closing resources...");
            if (fis != null) {
                try {
                    fis.close();
                    System.out.println("File closed successfully");
                } catch (java.io.IOException e) {
                    System.out.println("Error closing file: " + e.getMessage());
                }
            } else {
                System.out.println("No file to close");
            }
        }
    }
    
    public static int methodWithFinallyAndReturn() {
        try {
            System.out.println("In try block");
            return 10;
        } catch (Exception e) {
            System.out.println("In catch block");
            return 20;
        } finally {
            System.out.println("In finally block - executes even with return");
            // Note: return in finally would override try/catch return
        }
    }
}`
          },
          throwAndThrows: {
            title: "Throw and Throws",
            description: "Keywords for manually throwing exceptions and declaring potential exceptions.",
            throwKeyword: {
              title: "throw (used to manually throw an exception):",
              syntax: "throw new ExceptionType(\"message\");",
              description: "Used to explicitly throw an exception from code."
            },
            throwsKeyword: {
              title: "throws (declares that a method may throw an exception):",
              syntax: "public void methodName() throws ExceptionType { ... }",
              description: "Used in method signature to declare potential exceptions."
            },
            example: `// Throw and throws demonstration
public class ThrowThrowsDemo {
    public static void main(String[] args) {
        System.out.println("=== Throw and Throws Examples ===");
        
        // Example 1: Using throw
        System.out.println("\n1. Using throw keyword:");
        try {
            validateAge(15);
        } catch (IllegalArgumentException e) {
            System.out.println("Caught exception: " + e.getMessage());
        }
        
        // Example 2: Using throws
        System.out.println("\n2. Using throws keyword:");
        try {
            readFile("nonexistent.txt");
        } catch (java.io.IOException e) {
            System.out.println("Caught IOException: " + e.getMessage());
        }
        
        // Example 3: Method that throws multiple exceptions
        System.out.println("\n3. Multiple throws:");
        try {
            processData("invalid", -5);
        } catch (NumberFormatException e) {
            System.out.println("Number format error: " + e.getMessage());
        } catch (IllegalArgumentException e) {
            System.out.println("Illegal argument: " + e.getMessage());
        }
    }
    
    // Method using throw keyword
    public static void validateAge(int age) {
        if (age < 18) {
            throw new IllegalArgumentException("Age must be 18 or older. Provided: " + age);
        }
        System.out.println("Age validation passed: " + age);
    }
    
    // Method using throws keyword
    public static void readFile(String filename) throws java.io.IOException {
        System.out.println("Attempting to read file: " + filename);
        // Simulating file reading that might fail
        if (!filename.equals("valid.txt")) {
            throw new java.io.IOException("File not found: " + filename);
        }
        System.out.println("File read successfully");
    }
    
    // Method with multiple throws
    public static void processData(String numberStr, int value) 
            throws NumberFormatException, IllegalArgumentException {
        
        // This might throw NumberFormatException
        int number = Integer.parseInt(numberStr);
        
        // This might throw IllegalArgumentException
        if (value < 0) {
            throw new IllegalArgumentException("Value cannot be negative: " + value);
        }
        
        System.out.println("Data processed successfully: " + number + ", " + value);
    }
    
    // Method that handles and re-throws
    public static void handleAndRethrow() throws Exception {
        try {
            int result = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("Logging error: " + e.getMessage());
            // Re-throw as a different exception
            throw new Exception("Processing failed", e);
        }
    }
}`
          },
          customExceptions: {
            title: "Custom Exceptions",
            description: "Creating application-specific exception classes for better error handling.",
            example: `// Custom exceptions demonstration

// Custom checked exception
class InsufficientFundsException extends Exception {
    private double balance;
    private double requestedAmount;
    
    public InsufficientFundsException(String message, double balance, double requestedAmount) {
        super(message);
        this.balance = balance;
        this.requestedAmount = requestedAmount;
    }
    
    public double getBalance() { return balance; }
    public double getRequestedAmount() { return requestedAmount; }
    public double getShortfall() { return requestedAmount - balance; }
}

// Custom unchecked exception
class InvalidAccountException extends RuntimeException {
    private String accountNumber;
    
    public InvalidAccountException(String message, String accountNumber) {
        super(message);
        this.accountNumber = accountNumber;
    }
    
    public String getAccountNumber() { return accountNumber; }
}

// Custom exception with cause
class BankingException extends Exception {
    public BankingException(String message) {
        super(message);
    }
    
    public BankingException(String message, Throwable cause) {
        super(message, cause);
    }
}

// Bank account class using custom exceptions
class BankAccount {
    private String accountNumber;
    private double balance;
    private boolean isActive;
    
    public BankAccount(String accountNumber, double initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
        this.isActive = true;
    }
    
    public void withdraw(double amount) throws InsufficientFundsException {
        if (!isActive) {
            throw new InvalidAccountException("Account is inactive", accountNumber);
        }
        
        if (amount <= 0) {
            throw new IllegalArgumentException("Withdrawal amount must be positive");
        }
        
        if (amount > balance) {
            throw new InsufficientFundsException(
                "Insufficient funds for withdrawal", balance, amount);
        }
        
        balance -= amount;
        System.out.println("Withdrawal successful. New balance: $" + balance);
    }
    
    public void deposit(double amount) throws BankingException {
        try {
            if (!isActive) {
                throw new InvalidAccountException("Account is inactive", accountNumber);
            }
            
            if (amount <= 0) {
                throw new IllegalArgumentException("Deposit amount must be positive");
            }
            
            balance += amount;
            System.out.println("Deposit successful. New balance: $" + balance);
            
        } catch (Exception e) {
            throw new BankingException("Deposit operation failed", e);
        }
    }
    
    public double getBalance() { return balance; }
    public String getAccountNumber() { return accountNumber; }
    public void deactivate() { isActive = false; }
}

public class CustomExceptionsDemo {
    public static void main(String[] args) {
        System.out.println("=== Custom Exceptions Demo ===");
        
        BankAccount account = new BankAccount("ACC123", 1000.0);
        
        // Test successful operations
        System.out.println("\n1. Successful operations:");
        try {
            account.deposit(500.0);
            account.withdraw(200.0);
        } catch (Exception e) {
            System.out.println("Unexpected error: " + e.getMessage());
        }
        
        // Test insufficient funds
        System.out.println("\n2. Insufficient funds:");
        try {
            account.withdraw(2000.0);
        } catch (InsufficientFundsException e) {
            System.out.println("Custom exception caught:");
            System.out.println("Message: " + e.getMessage());
            System.out.println("Current balance: $" + e.getBalance());
            System.out.println("Requested amount: $" + e.getRequestedAmount());
            System.out.println("Shortfall: $" + e.getShortfall());
        }
        
        // Test inactive account
        System.out.println("\n3. Inactive account:");
        account.deactivate();
        try {
            account.withdraw(100.0);
        } catch (InvalidAccountException e) {
            System.out.println("Runtime exception caught:");
            System.out.println("Message: " + e.getMessage());
            System.out.println("Account: " + e.getAccountNumber());
        } catch (InsufficientFundsException e) {
            System.out.println("This won't be reached");
        }
        
        // Test deposit with inactive account
        System.out.println("\n4. Deposit with inactive account:");
        try {
            account.deposit(100.0);
        } catch (BankingException e) {
            System.out.println("Banking exception caught:");
            System.out.println("Message: " + e.getMessage());
            System.out.println("Cause: " + e.getCause().getClass().getSimpleName());
            System.out.println("Cause message: " + e.getCause().getMessage());
        }
    }
}`
          },
          bestPractices: {
            title: "Best Practices",
            description: "Guidelines for effective exception handling in Java applications.",
            practices: [
              "Catch specific exceptions before generic ones",
              "Avoid catching Exception unless necessary",
              "Always close resources (finally or try-with-resources)",
              "Don't ignore exceptions",
              "Use meaningful exception messages",
              "Log exceptions appropriately"
            ],
            example: `// Exception handling best practices
public class ExceptionBestPracticesDemo {
    public static void main(String[] args) {
        System.out.println("=== Exception Handling Best Practices ===");
        
        // Practice 1: Catch specific exceptions first
        demonstrateSpecificExceptions();
        
        // Practice 2: Proper resource management
        demonstrateResourceManagement();
        
        // Practice 3: Meaningful error messages
        demonstrateMeaningfulMessages();
        
        // Practice 4: Don't ignore exceptions
        demonstrateProperExceptionHandling();
    }
    
    // Good: Catch specific exceptions before general ones
    public static void demonstrateSpecificExceptions() {
        System.out.println("\n1. Specific Exception Handling:");
        
        try {
            String[] data = {"123", "abc", null};
            for (String item : data) {
                int number = Integer.parseInt(item);
                int result = 100 / number;
                System.out.println("Result: " + result);
            }
        } catch (NumberFormatException e) {
            System.out.println("Specific: Invalid number format - " + e.getMessage());
        } catch (ArithmeticException e) {
            System.out.println("Specific: Arithmetic error - " + e.getMessage());
        } catch (NullPointerException e) {
            System.out.println("Specific: Null value encountered");
        } catch (Exception e) {
            System.out.println("General: Unexpected error - " + e.getMessage());
        }
    }
    
    // Good: Proper resource management
    public static void demonstrateResourceManagement() {
        System.out.println("\n2. Resource Management:");
        
        // Traditional approach with finally
        java.io.BufferedReader reader = null;
        try {
            reader = new java.io.BufferedReader(
                new java.io.StringReader("Sample text for reading"));
            String line = reader.readLine();
            System.out.println("Read: " + line);
        } catch (java.io.IOException e) {
            System.out.println("IO Error: " + e.getMessage());
        } finally {
            if (reader != null) {
                try {
                    reader.close();
                    System.out.println("Resource closed in finally block");
                } catch (java.io.IOException e) {
                    System.out.println("Error closing resource: " + e.getMessage());
                }
            }
        }
    }
    
    // Good: Meaningful error messages
    public static void demonstrateMeaningfulMessages() {
        System.out.println("\n3. Meaningful Error Messages:");
        
        try {
            validateUserInput("", -5);
        } catch (IllegalArgumentException e) {
            System.out.println("Validation failed: " + e.getMessage());
        }
    }
    
    public static void validateUserInput(String name, int age) {
        if (name == null || name.trim().isEmpty()) {
            throw new IllegalArgumentException(
                "Name cannot be null or empty. Provided: '" + name + "'");
        }
        
        if (age < 0 || age > 150) {
            throw new IllegalArgumentException(
                "Age must be between 0 and 150. Provided: " + age);
        }
    }
    
    // Good: Don't ignore exceptions
    public static void demonstrateProperExceptionHandling() {
        System.out.println("\n4. Proper Exception Handling:");
        
        // Bad: Empty catch block (don't do this)
        try {
            int result = Integer.parseInt("abc");
        } catch (NumberFormatException e) {
            // Bad: Ignoring the exception
        }
        
        // Good: Handle the exception appropriately
        try {
            int result = Integer.parseInt("abc");
        } catch (NumberFormatException e) {
            System.out.println("Failed to parse number: " + e.getMessage());
            // Log the exception, show user-friendly message, or take corrective action
        }
    }
}`
          },
          tryWithResources: {
            title: "Try-with-Resources (Java 7+)",
            description: "Automatic resource management that ensures resources are closed properly.",
            syntax: "try (ResourceType resource = new ResourceType()) { ... }",
            example: `import java.io.*;

// Try-with-resources demonstration
public class TryWithResourcesDemo {
    public static void main(String[] args) {
        System.out.println("=== Try-with-Resources Examples ===");
        
        // Example 1: Single resource
        demonstrateSingleResource();
        
        // Example 2: Multiple resources
        demonstrateMultipleResources();
        
        // Example 3: Custom resource
        demonstrateCustomResource();
        
        // Example 4: Comparison with traditional approach
        demonstrateComparison();
    }
    
    public static void demonstrateSingleResource() {
        System.out.println("\n1. Single Resource:");
        
        // Try-with-resources automatically closes the resource
        try (BufferedReader reader = new BufferedReader(
                new StringReader("Line 1\nLine 2\nLine 3"))) {
            
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println("Read: " + line);
            }
            
        } catch (IOException e) {
            System.out.println("IO Error: " + e.getMessage());
        }
        // Resource is automatically closed here
        System.out.println("Resource automatically closed");
    }
    
    public static void demonstrateMultipleResources() {
        System.out.println("\n2. Multiple Resources:");
        
        // Multiple resources separated by semicolons
        try (StringReader stringReader = new StringReader("Source data");
             BufferedReader bufferedReader = new BufferedReader(stringReader);
             StringWriter stringWriter = new StringWriter();
             BufferedWriter bufferedWriter = new BufferedWriter(stringWriter)) {
            
            String data = bufferedReader.readLine();
            bufferedWriter.write("Processed: " + data);
            bufferedWriter.flush();
            
            System.out.println("Output: " + stringWriter.toString());
            
        } catch (IOException e) {
            System.out.println("IO Error: " + e.getMessage());
        }
        // All resources are automatically closed in reverse order
        System.out.println("All resources automatically closed");
    }
    
    public static void demonstrateCustomResource() {
        System.out.println("\n3. Custom Resource:");
        
        try (CustomResource resource = new CustomResource("MyResource")) {
            resource.doSomething();
            // Simulate an exception
            if (true) {
                throw new RuntimeException("Simulated error");
            }
        } catch (Exception e) {
            System.out.println("Caught exception: " + e.getMessage());
        }
        // CustomResource.close() is automatically called
    }
    
    public static void demonstrateComparison() {
        System.out.println("\n4. Comparison - Traditional vs Try-with-Resources:");
        
        System.out.println("\nTraditional approach:");
        traditionalResourceHandling();
        
        System.out.println("\nTry-with-resources approach:");
        tryWithResourcesApproach();
    }
    
    // Traditional resource handling (verbose)
    public static void traditionalResourceHandling() {
        BufferedReader reader = null;
        try {
            reader = new BufferedReader(new StringReader("Traditional approach"));
            String line = reader.readLine();
            System.out.println("Read: " + line);
        } catch (IOException e) {
            System.out.println("IO Error: " + e.getMessage());
        } finally {
            if (reader != null) {
                try {
                    reader.close();
                    System.out.println("Manually closed resource");
                } catch (IOException e) {
                    System.out.println("Error closing resource: " + e.getMessage());
                }
            }
        }
    }
    
    // Try-with-resources (concise)
    public static void tryWithResourcesApproach() {
        try (BufferedReader reader = new BufferedReader(
                new StringReader("Try-with-resources approach"))) {
            String line = reader.readLine();
            System.out.println("Read: " + line);
        } catch (IOException e) {
            System.out.println("IO Error: " + e.getMessage());
        }
        System.out.println("Automatically closed resource");
    }
}

// Custom resource class implementing AutoCloseable
class CustomResource implements AutoCloseable {
    private String name;
    
    public CustomResource(String name) {
        this.name = name;
        System.out.println("Resource " + name + " created");
    }
    
    public void doSomething() {
        System.out.println("Resource " + name + " is doing something");
    }
    
    @Override
    public void close() {
        System.out.println("Resource " + name + " is being closed");
    }
}`
          }
        },
        multithreading: {
          title: "Java Multithreading",
          description: "Multithreading enables concurrent execution of multiple threads, allowing programs to perform multiple tasks simultaneously for better performance and responsiveness.",
          whatIsMultithreading: {
            title: "What is Multithreading?",
            definition: {
              title: "Multithreading is the process of executing multiple threads simultaneously.",
              description: "It allows a program to perform multiple operations concurrently, improving efficiency and responsiveness.",
              benefits: [
                "Better CPU utilization",
                "Improved application responsiveness",
                "Parallel processing capabilities",
                "Enhanced user experience"
              ]
            },
            sharedMemory: {
              title: "Threads share the same memory but run independently.",
              description: "All threads in a process share the same memory space, including heap memory, but have their own stack.",
              characteristics: [
                "Shared heap memory for objects",
                "Individual stack memory for each thread",
                "Shared static variables and class-level data",
                "Independent program counters and registers"
              ]
            },
            efficiency: {
              title: "It helps in efficient CPU utilization and faster execution of tasks like animations, downloads, etc.",
              description: "Multithreading enables better resource utilization and concurrent task execution.",
              useCases: [
                "User interface responsiveness",
                "Background file downloads",
                "Database operations",
                "Web server request handling",
                "Real-time data processing"
              ]
            },
            example: `// Basic multithreading demonstration
public class MultithreadingIntroDemo {
    public static void main(String[] args) {
        System.out.println("=== Multithreading Introduction ===");
        
        // Main thread information
        Thread mainThread = Thread.currentThread();
        System.out.println("Main thread: " + mainThread.getName());
        System.out.println("Main thread priority: " + mainThread.getPriority());
        
        // Demonstrate single-threaded vs multi-threaded execution
        System.out.println("\n=== Single-threaded execution ===");
        long startTime = System.currentTimeMillis();
        
        performTask("Task 1", 2000);
        performTask("Task 2", 2000);
        performTask("Task 3", 2000);
        
        long singleThreadTime = System.currentTimeMillis() - startTime;
        System.out.println("Single-threaded total time: " + singleThreadTime + "ms");
        
        // Multi-threaded execution
        System.out.println("\n=== Multi-threaded execution ===");
        startTime = System.currentTimeMillis();
        
        Thread t1 = new Thread(() -> performTask("Task 1", 2000));
        Thread t2 = new Thread(() -> performTask("Task 2", 2000));
        Thread t3 = new Thread(() -> performTask("Task 3", 2000));
        
        t1.start();
        t2.start();
        t3.start();
        
        try {
            t1.join();
            t2.join();
            t3.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        
        long multiThreadTime = System.currentTimeMillis() - startTime;
        System.out.println("Multi-threaded total time: " + multiThreadTime + "ms");
        System.out.println("Performance improvement: " + 
                          (singleThreadTime - multiThreadTime) + "ms");
    }
    
    public static void performTask(String taskName, int duration) {
        System.out.println(taskName + " started by " + Thread.currentThread().getName());
        try {
            Thread.sleep(duration);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println(taskName + " completed by " + Thread.currentThread().getName());
    }
}`
          },
          threadCreation: {
            title: "Thread Creation in Java",
            description: "Java provides two main ways to create threads: extending Thread class or implementing Runnable interface.",
            extendingThread: {
              title: "By Extending the Thread class",
              description: "Create a subclass of Thread and override the run() method.",
              pros: ["Simple and direct approach", "Direct access to Thread methods"],
              cons: ["Single inheritance limitation", "Tight coupling with Thread class"],
              example: `// Thread creation by extending Thread class
class MyThread extends Thread {
    private String threadName;
    private int iterations;
    
    public MyThread(String name, int iterations) {
        this.threadName = name;
        this.iterations = iterations;
        setName(threadName); // Set thread name
    }
    
    @Override
    public void run() {
        System.out.println(threadName + " started");
        
        for (int i = 1; i <= iterations; i++) {
            System.out.println(threadName + " - Iteration " + i);
            try {
                Thread.sleep(1000); // Sleep for 1 second
            } catch (InterruptedException e) {
                System.out.println(threadName + " interrupted");
                return;
            }
        }
        
        System.out.println(threadName + " finished");
    }
}

public class ThreadExtensionDemo {
    public static void main(String[] args) {
        System.out.println("=== Thread Creation by Extension ===");
        
        // Create thread instances
        MyThread thread1 = new MyThread("Worker-1", 3);
        MyThread thread2 = new MyThread("Worker-2", 3);
        MyThread thread3 = new MyThread("Worker-3", 3);
        
        // Display thread information before starting
        System.out.println("Thread 1 state: " + thread1.getState());
        System.out.println("Thread 1 priority: " + thread1.getPriority());
        
        // Start threads
        thread1.start();
        thread2.start();
        thread3.start();
        
        System.out.println("All threads started");
        
        // Wait for threads to complete
        try {
            thread1.join();
            thread2.join();
            thread3.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        
        System.out.println("All threads completed");
    }
}`
            },
            implementingRunnable: {
              title: "By Implementing the Runnable interface",
              description: "Implement the Runnable interface and pass it to a Thread constructor.",
              pros: ["Better OOP design", "Can extend other classes", "Separation of concerns"],
              cons: ["Slightly more verbose", "Indirect access to Thread methods"],
              example: `// Thread creation by implementing Runnable interface
class MyRunnable implements Runnable {
    private String taskName;
    private int count;
    
    public MyRunnable(String taskName, int count) {
        this.taskName = taskName;
        this.count = count;
    }
    
    @Override
    public void run() {
        Thread currentThread = Thread.currentThread();
        System.out.println(taskName + " started by " + currentThread.getName());
        
        for (int i = 1; i <= count; i++) {
            System.out.println(taskName + " - Count " + i + 
                             " (Thread: " + currentThread.getName() + ")");
            try {
                Thread.sleep(800);
            } catch (InterruptedException e) {
                System.out.println(taskName + " interrupted");
                return;
            }
        }
        
        System.out.println(taskName + " completed by " + currentThread.getName());
    }
}

// Alternative: Using lambda expressions (Java 8+)
class LambdaThreadDemo {
    public static void performTask(String taskName, int duration) {
        System.out.println(taskName + " executing on " + Thread.currentThread().getName());
        try {
            Thread.sleep(duration);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        System.out.println(taskName + " completed");
    }
}

public class RunnableImplementationDemo {
    public static void main(String[] args) {
        System.out.println("=== Thread Creation with Runnable ===");
        
        // Method 1: Using Runnable implementation
        MyRunnable task1 = new MyRunnable("Database-Task", 3);
        MyRunnable task2 = new MyRunnable("Network-Task", 3);
        MyRunnable task3 = new MyRunnable("File-Task", 3);
        
        Thread thread1 = new Thread(task1, "DB-Thread");
        Thread thread2 = new Thread(task2, "Network-Thread");
        Thread thread3 = new Thread(task3, "File-Thread");
        
        thread1.start();
        thread2.start();
        thread3.start();
        
        // Method 2: Using anonymous inner class
        Thread anonymousThread = new Thread(new Runnable() {
            @Override
            public void run() {
                System.out.println("Anonymous thread running on " + 
                                 Thread.currentThread().getName());
            }
        }, "Anonymous-Thread");
        anonymousThread.start();
        
        // Method 3: Using lambda expressions (Java 8+)
        Thread lambdaThread1 = new Thread(() -> 
            LambdaThreadDemo.performTask("Lambda-Task-1", 1500), "Lambda-Thread-1");
        
        Thread lambdaThread2 = new Thread(() -> {
            for (int i = 1; i <= 3; i++) {
                System.out.println("Lambda task iteration " + i + 
                                 " on " + Thread.currentThread().getName());
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                    break;
                }
            }
        }, "Lambda-Thread-2");
        
        lambdaThread1.start();
        lambdaThread2.start();
        
        // Wait for all threads to complete
        try {
            thread1.join();
            thread2.join();
            thread3.join();
            anonymousThread.join();
            lambdaThread1.join();
            lambdaThread2.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        
        System.out.println("All threads completed");
    }
}`
            }
          },
          threadMethods: {
            title: "Important Thread Methods",
            description: "Essential methods for thread control and management.",
            methods: {
              start: {
                method: "start()",
                description: "Starts a thread (calls run() method)",
                note: "Can only be called once per thread instance"
              },
              run: {
                method: "run()",
                description: "Defines the task",
                note: "Override this method to define thread behavior"
              },
              sleep: {
                method: "sleep(ms)",
                description: "Suspends thread temporarily",
                note: "Static method, affects current thread"
              },
              join: {
                method: "join()",
                description: "Waits for another thread to finish",
                note: "Blocks calling thread until target thread completes"
              },
              yield: {
                method: "yield()",
                description: "Pauses current thread to let others run",
                note: "Hint to scheduler, not guaranteed"
              },
              isAlive: {
                method: "isAlive()",
                description: "Checks if thread is alive",
                note: "Returns true if thread has started and not yet died"
              }
            },
            example: `// Thread methods demonstration
public class ThreadMethodsDemo {
    public static void main(String[] args) {
        System.out.println("=== Thread Methods Demonstration ===");
        
        // Create worker threads
        WorkerThread worker1 = new WorkerThread("Worker-1", 5);
        WorkerThread worker2 = new WorkerThread("Worker-2", 3);
        
        System.out.println("\n1. Thread state before start():");
        System.out.println("Worker-1 isAlive: " + worker1.isAlive());
        System.out.println("Worker-1 state: " + worker1.getState());
        
        // Start threads
        System.out.println("\n2. Starting threads:");
        worker1.start();
        worker2.start();
        
        System.out.println("Worker-1 isAlive after start: " + worker1.isAlive());
        System.out.println("Worker-1 state after start: " + worker1.getState());
        
        // Demonstrate join() method
        System.out.println("\n3. Main thread waiting for Worker-1 to complete (join):");
        try {
            worker1.join(); // Wait for worker1 to complete
            System.out.println("Worker-1 has completed");
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        
        // Check if worker2 is still alive
        System.out.println("\n4. Checking Worker-2 status:");
        System.out.println("Worker-2 isAlive: " + worker2.isAlive());
        
        // Wait for worker2 with timeout
        try {
            worker2.join(2000); // Wait max 2 seconds
            if (worker2.isAlive()) {
                System.out.println("Worker-2 still running after timeout");
            } else {
                System.out.println("Worker-2 completed within timeout");
            }
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        
        // Demonstrate sleep and yield
        System.out.println("\n5. Demonstrating sleep and yield:");
        Thread sleepYieldDemo = new Thread(new SleepYieldDemo(), "SleepYield-Thread");
        sleepYieldDemo.start();
        
        try {
            sleepYieldDemo.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        
        System.out.println("\nAll demonstrations completed");
    }
}

class WorkerThread extends Thread {
    private String workerName;
    private int taskCount;
    
    public WorkerThread(String name, int taskCount) {
        this.workerName = name;
        this.taskCount = taskCount;
        setName(workerName);
    }
    
    @Override
    public void run() {
        System.out.println(workerName + " started");
        
        for (int i = 1; i <= taskCount; i++) {
            System.out.println(workerName + " executing task " + i);
            try {
                Thread.sleep(1000); // Sleep for 1 second
            } catch (InterruptedException e) {
                System.out.println(workerName + " interrupted");
                return;
            }
        }
        
        System.out.println(workerName + " completed all tasks");
    }
}

class SleepYieldDemo implements Runnable {
    @Override
    public void run() {
        String threadName = Thread.currentThread().getName();
        
        for (int i = 1; i <= 5; i++) {
            System.out.println(threadName + " - Iteration " + i);
            
            if (i % 2 == 0) {
                // Sleep every even iteration
                try {
                    System.out.println(threadName + " sleeping for 500ms");
                    Thread.sleep(500);
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                    return;
                }
            } else {
                // Yield every odd iteration
                System.out.println(threadName + " yielding to other threads");
                Thread.yield();
            }
        }
    }
}`
          },
          threadLifecycle: {
            title: "Thread Lifecycle",
            description: "Understanding the different states a thread goes through during its lifetime.",
            states: {
              newState: {
                title: "New – Thread created",
                description: "Thread object created but start() not called yet"
              },
              runnable: {
                title: "Runnable – Ready to run",
                description: "Thread is ready to run and waiting for CPU time"
              },
              running: {
                title: "Running – Currently executing",
                description: "Thread is currently executing its run() method"
              },
              blocked: {
                title: "Blocked/Waiting – Temporarily inactive",
                description: "Thread is waiting for a resource or another thread"
              },
              terminated: {
                title: "Terminated – Finished",
                description: "Thread has completed execution or was terminated"
              }
            },
            example: `// Thread lifecycle demonstration
public class ThreadLifecycleDemo {
    public static void main(String[] args) {
        System.out.println("=== Thread Lifecycle Demonstration ===");
        
        LifecycleThread thread = new LifecycleThread();
        
        // NEW state
        System.out.println("1. NEW state: " + thread.getState());
        System.out.println("   isAlive: " + thread.isAlive());
        
        // Start thread - moves to RUNNABLE
        thread.start();
        System.out.println("\n2. After start() - RUNNABLE state: " + thread.getState());
        System.out.println("   isAlive: " + thread.isAlive());
        
        // Monitor thread states
        Thread monitor = new Thread(() -> {
            while (thread.isAlive()) {
                Thread.State currentState = thread.getState();
                System.out.println("   Current state: " + currentState);
                try {
                    Thread.sleep(500);
                } catch (InterruptedException e) {
                    break;
                }
            }
        });
        monitor.start();
        
        // Wait for thread to complete
        try {
            thread.join();
            monitor.interrupt();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        
        // TERMINATED state
        System.out.println("\n3. TERMINATED state: " + thread.getState());
        System.out.println("   isAlive: " + thread.isAlive());
        
        // Demonstrate blocked state
        demonstrateBlockedState();
    }
    
    public static void demonstrateBlockedState() {
        System.out.println("\n=== Blocked State Demonstration ===");
        
        Object lock = new Object();
        
        Thread thread1 = new Thread(() -> {
            synchronized (lock) {
                System.out.println("Thread 1 acquired lock");
                try {
                    Thread.sleep(3000); // Hold lock for 3 seconds
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
                System.out.println("Thread 1 releasing lock");
            }
        }, "Thread-1");
        
        Thread thread2 = new Thread(() -> {
            System.out.println("Thread 2 trying to acquire lock");
            synchronized (lock) {
                System.out.println("Thread 2 acquired lock");
            }
        }, "Thread-2");
        
        thread1.start();
        
        // Give thread1 time to acquire lock
        try {
            Thread.sleep(100);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        thread2.start();
        
        // Check thread2 state (should be BLOCKED)
        try {
            Thread.sleep(500);
            System.out.println("Thread 2 state while waiting for lock: " + thread2.getState());
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        try {
            thread1.join();
            thread2.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}

class LifecycleThread extends Thread {
    @Override
    public void run() {
        System.out.println("\n   Thread started - RUNNING state");
        
        // Simulate some work
        for (int i = 1; i <= 3; i++) {
            System.out.println("   Working... step " + i);
            try {
                Thread.sleep(1000); // TIMED_WAITING state
            } catch (InterruptedException e) {
                System.out.println("   Thread interrupted");
                return;
            }
        }
        
        System.out.println("   Thread work completed");
    }
}`
          },
          threadPriority: {
            title: "Thread Priority",
            description: "Thread scheduling based on priority levels from 1 to 10.",
            priorityLevels: {
              min: "Thread.MIN_PRIORITY (1)",
              norm: "Thread.NORM_PRIORITY (5) - Default",
              max: "Thread.MAX_PRIORITY (10)"
            },
            example: `// Thread priority demonstration
public class ThreadPriorityDemo {
    public static void main(String[] args) {
        System.out.println("=== Thread Priority Demonstration ===");
        
        // Create threads with different priorities
        PriorityTask lowPriorityTask = new PriorityTask("Low Priority", 5);
        PriorityTask normalPriorityTask = new PriorityTask("Normal Priority", 5);
        PriorityTask highPriorityTask = new PriorityTask("High Priority", 5);
        
        Thread lowThread = new Thread(lowPriorityTask, "Low-Thread");
        Thread normalThread = new Thread(normalPriorityTask, "Normal-Thread");
        Thread highThread = new Thread(highPriorityTask, "High-Thread");
        
        // Set priorities
        lowThread.setPriority(Thread.MIN_PRIORITY);    // 1
        normalThread.setPriority(Thread.NORM_PRIORITY); // 5 (default)
        highThread.setPriority(Thread.MAX_PRIORITY);   // 10
        
        System.out.println("Thread Priorities:");
        System.out.println("Low Thread: " + lowThread.getPriority());
        System.out.println("Normal Thread: " + normalThread.getPriority());
        System.out.println("High Thread: " + highThread.getPriority());
        
        // Start all threads simultaneously
        System.out.println("\nStarting all threads...");
        long startTime = System.currentTimeMillis();
        
        lowThread.start();
        normalThread.start();
        highThread.start();
        
        // Wait for all threads to complete
        try {
            lowThread.join();
            normalThread.join();
            highThread.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        
        long totalTime = System.currentTimeMillis() - startTime;
        System.out.println("\nAll threads completed in " + totalTime + "ms");
        
        // Display completion order
        System.out.println("\nCompletion order:");
        System.out.println("1st: " + PriorityTask.completionOrder.get(0));
        System.out.println("2nd: " + PriorityTask.completionOrder.get(1));
        System.out.println("3rd: " + PriorityTask.completionOrder.get(2));
        
        // Demonstrate main thread priority
        demonstrateMainThreadPriority();
    }
    
    public static void demonstrateMainThreadPriority() {
        System.out.println("\n=== Main Thread Priority ===");
        
        Thread mainThread = Thread.currentThread();
        System.out.println("Main thread name: " + mainThread.getName());
        System.out.println("Main thread priority: " + mainThread.getPriority());
        System.out.println("Main thread group: " + mainThread.getThreadGroup().getName());
        
        // Create child thread - inherits parent priority
        Thread childThread = new Thread(() -> {
            Thread current = Thread.currentThread();
            System.out.println("Child thread priority (inherited): " + current.getPriority());
        }, "Child-Thread");
        
        childThread.start();
        
        try {
            childThread.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}

class PriorityTask implements Runnable {
    private String taskName;
    private int iterations;
    public static java.util.List<String> completionOrder = 
        new java.util.concurrent.CopyOnWriteArrayList<>();
    
    public PriorityTask(String taskName, int iterations) {
        this.taskName = taskName;
        this.iterations = iterations;
    }
    
    @Override
    public void run() {
        Thread currentThread = Thread.currentThread();
        System.out.println(taskName + " started (Priority: " + 
                          currentThread.getPriority() + ")");
        
        long startTime = System.currentTimeMillis();
        
        // Simulate CPU-intensive work
        for (int i = 1; i <= iterations; i++) {
            // Perform some computation
            for (int j = 0; j < 1000000; j++) {
                Math.sqrt(j);
            }
            
            System.out.println(taskName + " - Iteration " + i + " completed");
            
            // Small delay to allow thread switching
            try {
                Thread.sleep(10);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                return;
            }
        }
        
        long executionTime = System.currentTimeMillis() - startTime;
        System.out.println(taskName + " finished in " + executionTime + "ms");
        
        completionOrder.add(taskName);
    }
}`
          },
          threadSynchronization: {
            title: "Thread Synchronization",
            description: "Preventing race conditions when multiple threads access shared resources.",
            raceCondition: {
              title: "Race Condition Problem",
              description: "When multiple threads access shared data simultaneously, leading to inconsistent results."
            },
            synchronizedMethod: {
              title: "Synchronized Methods",
              syntax: "synchronized void methodName() { ... }",
              description: "Entire method is synchronized, only one thread can execute it at a time."
            },
            synchronizedBlock: {
              title: "Synchronized Blocks",
              syntax: "synchronized(object) { ... }",
              description: "Only specific code block is synchronized, more granular control."
            },
            example: `// Thread synchronization demonstration
public class ThreadSynchronizationDemo {
    public static void main(String[] args) {
        System.out.println("=== Thread Synchronization Demo ===");
        
        // Demonstrate race condition without synchronization
        System.out.println("\n1. Without Synchronization (Race Condition):");
        demonstrateRaceCondition();
        
        // Demonstrate synchronized methods
        System.out.println("\n2. With Synchronized Methods:");
        demonstrateSynchronizedMethods();
        
        // Demonstrate synchronized blocks
        System.out.println("\n3. With Synchronized Blocks:");
        demonstrateSynchronizedBlocks();
    }
    
    public static void demonstrateRaceCondition() {
        UnsafeCounter counter = new UnsafeCounter();
        
        Thread[] threads = new Thread[5];
        for (int i = 0; i < threads.length; i++) {
            threads[i] = new Thread(() -> {
                for (int j = 0; j < 1000; j++) {
                    counter.increment();
                }
            }, "Thread-" + (i + 1));
        }
        
        // Start all threads
        for (Thread thread : threads) {
            thread.start();
        }
        
        // Wait for all threads to complete
        for (Thread thread : threads) {
            try {
                thread.join();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        
        System.out.println("Expected count: 5000");
        System.out.println("Actual count: " + counter.getCount());
        System.out.println("Data corruption occurred: " + (counter.getCount() != 5000));
    }
    
    public static void demonstrateSynchronizedMethods() {
        SafeCounter counter = new SafeCounter();
        
        Thread[] threads = new Thread[5];
        for (int i = 0; i < threads.length; i++) {
            threads[i] = new Thread(() -> {
                for (int j = 0; j < 1000; j++) {
                    counter.increment();
                }
            }, "Safe-Thread-" + (i + 1));
        }
        
        // Start all threads
        for (Thread thread : threads) {
            thread.start();
        }
        
        // Wait for all threads to complete
        for (Thread thread : threads) {
            try {
                thread.join();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        
        System.out.println("Expected count: 5000");
        System.out.println("Actual count: " + counter.getCount());
        System.out.println("Data integrity maintained: " + (counter.getCount() == 5000));
    }
    
    public static void demonstrateSynchronizedBlocks() {
        BankAccount account = new BankAccount(1000);
        
        // Multiple threads trying to withdraw money
        Thread[] withdrawThreads = new Thread[3];
        for (int i = 0; i < withdrawThreads.length; i++) {
            final int threadId = i + 1;
            withdrawThreads[i] = new Thread(() -> {
                for (int j = 0; j < 5; j++) {
                    account.withdraw(50, "Thread-" + threadId);
                    try {
                        Thread.sleep(100);
                    } catch (InterruptedException e) {
                        Thread.currentThread().interrupt();
                    }
                }
            }, "Withdraw-Thread-" + threadId);
        }
        
        // Multiple threads trying to deposit money
        Thread[] depositThreads = new Thread[2];
        for (int i = 0; i < depositThreads.length; i++) {
            final int threadId = i + 1;
            depositThreads[i] = new Thread(() -> {
                for (int j = 0; j < 3; j++) {
                    account.deposit(100, "Deposit-Thread-" + threadId);
                    try {
                        Thread.sleep(150);
                    } catch (InterruptedException e) {
                        Thread.currentThread().interrupt();
                    }
                }
            }, "Deposit-Thread-" + threadId);
        }
        
        // Start all threads
        for (Thread thread : withdrawThreads) {
            thread.start();
        }
        for (Thread thread : depositThreads) {
            thread.start();
        }
        
        // Wait for all threads to complete
        for (Thread thread : withdrawThreads) {
            try {
                thread.join();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        for (Thread thread : depositThreads) {
            try {
                thread.join();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        
        System.out.println("Final account balance: $" + account.getBalance());
    }
}

// Unsafe counter (race condition)
class UnsafeCounter {
    private int count = 0;
    
    public void increment() {
        count++; // Not atomic operation
    }
    
    public int getCount() {
        return count;
    }
}

// Safe counter with synchronized methods
class SafeCounter {
    private int count = 0;
    
    public synchronized void increment() {
        count++; // Atomic operation due to synchronization
    }
    
    public synchronized int getCount() {
        return count;
    }
}

// Bank account with synchronized blocks
class BankAccount {
    private double balance;
    private final Object lock = new Object();
    
    public BankAccount(double initialBalance) {
        this.balance = initialBalance;
    }
    
    public void withdraw(double amount, String threadName) {
        synchronized (lock) {
            if (balance >= amount) {
                System.out.println(threadName + " withdrawing $" + amount);
                balance -= amount;
                System.out.println(threadName + " withdrawal successful. Balance: $" + balance);
            } else {
                System.out.println(threadName + " withdrawal failed. Insufficient funds. Balance: $" + balance);
            }
        }
    }
    
    public void deposit(double amount, String threadName) {
        synchronized (lock) {
            System.out.println(threadName + " depositing $" + amount);
            balance += amount;
            System.out.println(threadName + " deposit successful. Balance: $" + balance);
        }
    }
    
    public synchronized double getBalance() {
        return balance;
    }
}`
          },
          interThreadCommunication: {
            title: "Inter-Thread Communication",
            description: "Coordination between threads using wait(), notify(), and notifyAll() methods.",
            methods: {
              wait: "wait() - Thread releases lock and waits",
              notify: "notify() - Wakes up one waiting thread",
              notifyAll: "notifyAll() - Wakes up all waiting threads"
            },
            example: `// Inter-thread communication demonstration
public class InterThreadCommunicationDemo {
    public static void main(String[] args) {
        System.out.println("=== Inter-Thread Communication Demo ===");
        
        // Producer-Consumer example
        SharedBuffer buffer = new SharedBuffer(5);
        
        Producer producer = new Producer(buffer);
        Consumer consumer = new Consumer(buffer);
        
        Thread producerThread = new Thread(producer, "Producer");
        Thread consumerThread = new Thread(consumer, "Consumer");
        
        producerThread.start();
        consumerThread.start();
        
        try {
            Thread.sleep(10000); // Let them run for 10 seconds
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        // Stop threads
        producer.stop();
        consumer.stop();
        
        try {
            producerThread.join();
            consumerThread.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        
        System.out.println("Demo completed");
    }
}

class SharedBuffer {
    private java.util.Queue<Integer> buffer;
    private int capacity;
    
    public SharedBuffer(int capacity) {
        this.capacity = capacity;
        this.buffer = new java.util.LinkedList<>();
    }
    
    public synchronized void produce(int item) throws InterruptedException {
        while (buffer.size() == capacity) {
            System.out.println("Buffer full. Producer waiting...");
            wait(); // Wait until space is available
        }
        
        buffer.offer(item);
        System.out.println("Produced: " + item + " (Buffer size: " + buffer.size() + ")");
        
        notifyAll(); // Notify waiting consumers
    }
    
    public synchronized int consume() throws InterruptedException {
        while (buffer.isEmpty()) {
            System.out.println("Buffer empty. Consumer waiting...");
            wait(); // Wait until item is available
        }
        
        int item = buffer.poll();
        System.out.println("Consumed: " + item + " (Buffer size: " + buffer.size() + ")");
        
        notifyAll(); // Notify waiting producers
        return item;
    }
}

class Producer implements Runnable {
    private SharedBuffer buffer;
    private volatile boolean running = true;
    private int itemCount = 1;
    
    public Producer(SharedBuffer buffer) {
        this.buffer = buffer;
    }
    
    @Override
    public void run() {
        while (running) {
            try {
                buffer.produce(itemCount++);
                Thread.sleep(1000); // Produce every second
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                break;
            }
        }
        System.out.println("Producer stopped");
    }
    
    public void stop() {
        running = false;
    }
}

class Consumer implements Runnable {
    private SharedBuffer buffer;
    private volatile boolean running = true;
    
    public Consumer(SharedBuffer buffer) {
        this.buffer = buffer;
    }
    
    @Override
    public void run() {
        while (running) {
            try {
                buffer.consume();
                Thread.sleep(1500); // Consume every 1.5 seconds
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                break;
            }
        }
        System.out.println("Consumer stopped");
    }
    
    public void stop() {
        running = false;
    }
}`
          },
          daemonThreads: {
            title: "Daemon Threads",
            description: "Background threads that automatically terminate when all non-daemon threads finish.",
            characteristics: [
              "Background service threads (e.g., garbage collection)",
              "Automatically terminate when all user threads end",
              "Cannot prevent JVM from exiting",
              "Set before calling start() method"
            ],
            example: `// Daemon threads demonstration
public class DaemonThreadsDemo {
    public static void main(String[] args) {
        System.out.println("=== Daemon Threads Demo ===");
        
        // Create regular (user) thread
        Thread userThread = new Thread(new UserTask(), "User-Thread");
        
        // Create daemon thread
        Thread daemonThread = new Thread(new DaemonTask(), "Daemon-Thread");
        daemonThread.setDaemon(true); // Must be set before start()
        
        System.out.println("User thread is daemon: " + userThread.isDaemon());
        System.out.println("Daemon thread is daemon: " + daemonThread.isDaemon());
        
        // Start both threads
        userThread.start();
        daemonThread.start();
        
        // Main thread will finish, but JVM waits for user thread
        System.out.println("Main thread finishing...");
        
        // Demonstrate daemon thread behavior
        demonstrateDaemonBehavior();
    }
    
    public static void demonstrateDaemonBehavior() {
        System.out.println("\n=== Daemon Thread Behavior ===");
        
        // Create a daemon thread that runs indefinitely
        Thread infiniteDaemon = new Thread(() -> {
            int count = 0;
            while (true) {
                System.out.println("Daemon working... " + (++count));
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    break;
                }
            }
        }, "Infinite-Daemon");
        
        infiniteDaemon.setDaemon(true);
        infiniteDaemon.start();
        
        // Short-lived user thread
        Thread shortUserThread = new Thread(() -> {
            for (int i = 1; i <= 3; i++) {
                System.out.println("User thread working... " + i);
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    break;
                }
            }
            System.out.println("User thread completed");
        }, "Short-User-Thread");
        
        shortUserThread.start();
        
        try {
            shortUserThread.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        
        System.out.println("All user threads completed. JVM will exit, terminating daemon threads.");
    }
}

class UserTask implements Runnable {
    @Override
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println("User task iteration " + i);
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                break;
            }
        }
        System.out.println("User task completed");
    }
}

class DaemonTask implements Runnable {
    @Override
    public void run() {
        int count = 0;
        while (true) {
            System.out.println("Daemon task running... " + (++count));
            try {
                Thread.sleep(800);
            } catch (InterruptedException e) {
                System.out.println("Daemon task interrupted");
                break;
            }
        }
    }
}`
          },
          threadGroupAndExecutors: {
            title: "ThreadGroup and Executors (Java 5+)",
            description: "Advanced thread management using ThreadGroup and modern ExecutorService.",
            threadGroup: {
              title: "ThreadGroup: Groups multiple threads (not widely used today)",
              description: "Legacy approach for grouping related threads together."
            },
            executorService: {
              title: "ExecutorService (Preferred modern approach)",
              description: "High-level thread management with thread pools and task scheduling."
            },
            example: `import java.util.concurrent.*;

// ThreadGroup and Executors demonstration
public class ThreadGroupExecutorsDemo {
    public static void main(String[] args) {
        System.out.println("=== ThreadGroup and Executors Demo ===");
        
        // Demonstrate ThreadGroup (legacy approach)
        demonstrateThreadGroup();
        
        // Demonstrate ExecutorService (modern approach)
        demonstrateExecutorService();
        
        // Demonstrate different types of thread pools
        demonstrateThreadPools();
    }
    
    public static void demonstrateThreadGroup() {
        System.out.println("\n1. ThreadGroup Demonstration:");
        
        ThreadGroup workerGroup = new ThreadGroup("WorkerGroup");
        
        Thread worker1 = new Thread(workerGroup, new SimpleTask("Task-1", 3), "Worker-1");
        Thread worker2 = new Thread(workerGroup, new SimpleTask("Task-2", 3), "Worker-2");
        Thread worker3 = new Thread(workerGroup, new SimpleTask("Task-3", 3), "Worker-3");
        
        System.out.println("ThreadGroup name: " + workerGroup.getName());
        System.out.println("Active threads before start: " + workerGroup.activeCount());
        
        worker1.start();
        worker2.start();
        worker3.start();
        
        System.out.println("Active threads after start: " + workerGroup.activeCount());
        
        // Wait for all threads in group to complete
        while (workerGroup.activeCount() > 0) {
            try {
                Thread.sleep(100);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                break;
            }
        }
        
        System.out.println("All threads in group completed");
    }
    
    public static void demonstrateExecutorService() {
        System.out.println("\n2. ExecutorService Demonstration:");
        
        // Create a fixed thread pool with 3 threads
        ExecutorService executor = Executors.newFixedThreadPool(3);
        
        System.out.println("Submitting tasks to ExecutorService...");
        
        // Submit tasks
        for (int i = 1; i <= 6; i++) {
            executor.execute(new SimpleTask("ExecutorTask-" + i, 2));
        }
        
        // Submit callable tasks (with return values)
        Future<String> future1 = executor.submit(new CallableTask("Callable-1", 1000));
        Future<String> future2 = executor.submit(new CallableTask("Callable-2", 1500));
        
        try {
            // Get results from callable tasks
            System.out.println("Result 1: " + future1.get());
            System.out.println("Result 2: " + future2.get());
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        }
        
        // Shutdown executor
        executor.shutdown();
        
        try {
            if (!executor.awaitTermination(10, TimeUnit.SECONDS)) {
                executor.shutdownNow();
            }
        } catch (InterruptedException e) {
            executor.shutdownNow();
        }
        
        System.out.println("ExecutorService shutdown completed");
    }
    
    public static void demonstrateThreadPools() {
        System.out.println("\n3. Different Thread Pool Types:");
        
        // Fixed Thread Pool
        System.out.println("\na) Fixed Thread Pool (3 threads):");
        ExecutorService fixedPool = Executors.newFixedThreadPool(3);
        for (int i = 1; i <= 5; i++) {
            fixedPool.execute(new SimpleTask("Fixed-" + i, 1));
        }
        fixedPool.shutdown();
        
        // Cached Thread Pool
        System.out.println("\nb) Cached Thread Pool:");
        ExecutorService cachedPool = Executors.newCachedThreadPool();
        for (int i = 1; i <= 5; i++) {
            cachedPool.execute(new SimpleTask("Cached-" + i, 1));
        }
        cachedPool.shutdown();
        
        // Single Thread Executor
        System.out.println("\nc) Single Thread Executor:");
        ExecutorService singleExecutor = Executors.newSingleThreadExecutor();
        for (int i = 1; i <= 3; i++) {
            singleExecutor.execute(new SimpleTask("Single-" + i, 1));
        }
        singleExecutor.shutdown();
        
        // Scheduled Thread Pool
        System.out.println("\nd) Scheduled Thread Pool:");
        ScheduledExecutorService scheduledPool = Executors.newScheduledThreadPool(2);
        
        // Schedule task with delay
        scheduledPool.schedule(new SimpleTask("Delayed-Task", 1), 2, TimeUnit.SECONDS);
        
        // Schedule task with fixed rate
        ScheduledFuture<?> periodicTask = scheduledPool.scheduleAtFixedRate(
            new SimpleTask("Periodic-Task", 0), 1, 2, TimeUnit.SECONDS);
        
        // Cancel periodic task after 8 seconds
        scheduledPool.schedule(() -> {
            periodicTask.cancel(false);
            System.out.println("Periodic task cancelled");
        }, 8, TimeUnit.SECONDS);
        
        // Shutdown scheduled pool after 10 seconds
        scheduledPool.schedule(() -> {
            scheduledPool.shutdown();
            System.out.println("Scheduled pool shutdown");
        }, 10, TimeUnit.SECONDS);
        
        // Wait for all pools to complete
        try {
            fixedPool.awaitTermination(5, TimeUnit.SECONDS);
            cachedPool.awaitTermination(5, TimeUnit.SECONDS);
            singleExecutor.awaitTermination(5, TimeUnit.SECONDS);
            scheduledPool.awaitTermination(15, TimeUnit.SECONDS);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        System.out.println("All thread pools completed");
    }
}

class SimpleTask implements Runnable {
    private String taskName;
    private int iterations;
    
    public SimpleTask(String taskName, int iterations) {
        this.taskName = taskName;
        this.iterations = iterations;
    }
    
    @Override
    public void run() {
        String threadName = Thread.currentThread().getName();
        System.out.println(taskName + " started on " + threadName);
        
        for (int i = 1; i <= iterations; i++) {
            System.out.println(taskName + " iteration " + i + " on " + threadName);
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                return;
            }
        }
        
        System.out.println(taskName + " completed on " + threadName);
    }
}

class CallableTask implements Callable<String> {
    private String taskName;
    private int duration;
    
    public CallableTask(String taskName, int duration) {
        this.taskName = taskName;
        this.duration = duration;
    }
    
    @Override
    public String call() throws Exception {
        String threadName = Thread.currentThread().getName();
        System.out.println(taskName + " started on " + threadName);
        
        Thread.sleep(duration);
        
        String result = taskName + " completed on " + threadName + " after " + duration + "ms";
        System.out.println(result);
        return result;
    }
}`
          },
          bestPractices: {
            title: "Best Practices",
            description: "Guidelines for effective multithreading in Java applications.",
            practices: [
              "Use Runnable over Thread for better OOP",
              "Always use synchronized when sharing resources",
              "Prefer Executors for scalable thread management",
              "Avoid blocking threads for too long (sleep, wait)",
              "Use thread-safe collections when possible",
              "Handle InterruptedException properly"
            ],
            example: `// Multithreading best practices demonstration
public class MultithreadingBestPracticesDemo {
    public static void main(String[] args) {
        System.out.println("=== Multithreading Best Practices ===");
        
        // Practice 1: Use Runnable over Thread
        demonstrateRunnableOverThread();
        
        // Practice 2: Use thread-safe collections
        demonstrateThreadSafeCollections();
        
        // Practice 3: Proper exception handling
        demonstrateProperExceptionHandling();
        
        // Practice 4: Use ExecutorService for better management
        demonstrateExecutorServiceBestPractices();
    }
    
    public static void demonstrateRunnableOverThread() {
        System.out.println("\n1. Use Runnable over Thread:");
        
        // Good: Using Runnable allows extending other classes
        class DataProcessor extends SomeBaseClass implements Runnable {
            private String data;
            
            public DataProcessor(String data) {
                this.data = data;
            }
            
            @Override
            public void run() {
                processData(data);
            }
            
            private void processData(String data) {
                System.out.println("Processing: " + data + " on " + Thread.currentThread().getName());
            }
        }
        
        Thread thread = new Thread(new DataProcessor("Sample Data"), "Processor-Thread");
        thread.start();
        
        try {
            thread.join();
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
    
    public static void demonstrateThreadSafeCollections() {
        System.out.println("\n2. Use Thread-Safe Collections:");
        
        // Thread-safe collections
        java.util.concurrent.ConcurrentHashMap<String, Integer> safeMap = 
            new java.util.concurrent.ConcurrentHashMap<>();
        java.util.concurrent.CopyOnWriteArrayList<String> safeList = 
            new java.util.concurrent.CopyOnWriteArrayList<>();
        
        ExecutorService executor = Executors.newFixedThreadPool(3);
        
        // Multiple threads modifying collections safely
        for (int i = 1; i <= 5; i++) {
            final int taskId = i;
            executor.execute(() -> {
                safeMap.put("Key" + taskId, taskId);
                safeList.add("Item" + taskId);
                System.out.println("Thread " + Thread.currentThread().getName() + 
                                 " added Key" + taskId);
            });
        }
        
        executor.shutdown();
        try {
            executor.awaitTermination(5, TimeUnit.SECONDS);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        System.out.println("Final map size: " + safeMap.size());
        System.out.println("Final list size: " + safeList.size());
    }
    
    public static void demonstrateProperExceptionHandling() {
        System.out.println("\n3. Proper Exception Handling:");
        
        Thread interruptibleThread = new Thread(() -> {
            try {
                while (!Thread.currentThread().isInterrupted()) {
                    System.out.println("Working...");
                    Thread.sleep(1000); // This can throw InterruptedException
                }
            } catch (InterruptedException e) {
                // Restore interrupted status
                Thread.currentThread().interrupt();
                System.out.println("Thread was interrupted, cleaning up...");
            }
            System.out.println("Thread finished gracefully");
        }, "Interruptible-Thread");
        
        interruptibleThread.start();
        
        // Interrupt after 3 seconds
        try {
            Thread.sleep(3000);
            interruptibleThread.interrupt();
            interruptibleThread.join();
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
    
    public static void demonstrateExecutorServiceBestPractices() {
        System.out.println("\n4. ExecutorService Best Practices:");
        
        ExecutorService executor = Executors.newFixedThreadPool(2);
        
        try {
            // Submit tasks
            for (int i = 1; i <= 4; i++) {
                final int taskId = i;
                executor.execute(() -> {
                    System.out.println("Task " + taskId + " executing on " + 
                                     Thread.currentThread().getName());
                    try {
                        Thread.sleep(1000);
                    } catch (InterruptedException e) {
                        Thread.currentThread().interrupt();
                    }
                });
            }
        } finally {
            // Always shutdown executor in finally block
            executor.shutdown();
            try {
                if (!executor.awaitTermination(10, TimeUnit.SECONDS)) {
                    System.out.println("Forcing shutdown...");
                    executor.shutdownNow();
                }
            } catch (InterruptedException e) {
                executor.shutdownNow();
                Thread.currentThread().interrupt();
            }
        }
        
        System.out.println("ExecutorService properly shutdown");
    }
}

// Base class to demonstrate inheritance with Runnable
class SomeBaseClass {
    protected void logMessage(String message) {
        System.out.println("Log: " + message);
    }
}`
          }
        },
        synchronization: {
          title: "Java Synchronization",
          description: "Synchronization controls access to shared resources by multiple threads, preventing data corruption and race conditions in concurrent applications.",
          whatIsSynchronization: {
            title: "What is Synchronization?",
            definition: {
              title: "Synchronization is the process of controlling access to shared resources by multiple threads.",
              description: "It ensures that only one thread can access a shared resource at a time, maintaining data integrity.",
              keyPoints: [
                "Controls concurrent access to shared data",
                "Prevents multiple threads from interfering with each other",
                "Maintains data consistency and integrity",
                "Coordinates thread execution for safe resource sharing"
              ]
            },
            prevention: {
              title: "It helps prevent data inconsistency and race conditions in multithreaded environments.",
              description: "Without synchronization, concurrent access can lead to unpredictable results and corrupted data.",
              problems: [
                "Race conditions - unpredictable timing-dependent behavior",
                "Data corruption - partial updates visible to other threads",
                "Lost updates - one thread's changes overwritten by another",
                "Inconsistent state - objects in invalid intermediate states"
              ]
            },
            example: `// Synchronization necessity demonstration
public class SynchronizationNeedDemo {
    public static void main(String[] args) {
        System.out.println("=== Why Synchronization is Needed ===");
        
        // Demonstrate problem without synchronization
        System.out.println("\n1. Without Synchronization (Race Condition):");
        demonstrateRaceCondition();
        
        // Demonstrate solution with synchronization
        System.out.println("\n2. With Synchronization (Thread-Safe):");
        demonstrateSynchronizedSolution();
    }
    
    public static void demonstrateRaceCondition() {
        UnsafeCounter counter = new UnsafeCounter();
        
        // Create multiple threads that increment the counter
        Thread[] threads = new Thread[10];
        for (int i = 0; i < threads.length; i++) {
            threads[i] = new Thread(() -> {
                for (int j = 0; j < 1000; j++) {
                    counter.increment();
                }
            }, "Thread-" + (i + 1));
        }
        
        // Start all threads
        long startTime = System.currentTimeMillis();
        for (Thread thread : threads) {
            thread.start();
        }
        
        // Wait for all threads to complete
        for (Thread thread : threads) {
            try {
                thread.join();
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
        
        long executionTime = System.currentTimeMillis() - startTime;
        System.out.println("Expected count: 10000");
        System.out.println("Actual count: " + counter.getCount());
        System.out.println("Data corruption: " + (counter.getCount() != 10000));
        System.out.println("Execution time: " + executionTime + "ms");
    }
    
    public static void demonstrateSynchronizedSolution() {
        SafeCounter counter = new SafeCounter();
        
        // Create multiple threads that increment the counter
        Thread[] threads = new Thread[10];
        for (int i = 0; i < threads.length; i++) {
            threads[i] = new Thread(() -> {
                for (int j = 0; j < 1000; j++) {
                    counter.increment();
                }
            }, "Safe-Thread-" + (i + 1));
        }
        
        // Start all threads
        long startTime = System.currentTimeMillis();
        for (Thread thread : threads) {
            thread.start();
        }
        
        // Wait for all threads to complete
        for (Thread thread : threads) {
            try {
                thread.join();
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
        
        long executionTime = System.currentTimeMillis() - startTime;
        System.out.println("Expected count: 10000");
        System.out.println("Actual count: " + counter.getCount());
        System.out.println("Data integrity: " + (counter.getCount() == 10000));
        System.out.println("Execution time: " + executionTime + "ms");
    }
}

// Unsafe counter class (demonstrates race condition)
class UnsafeCounter {
    private int count = 0;
    
    public void increment() {
        // This is not atomic - can be interrupted between read and write
        count = count + 1;
    }
    
    public int getCount() {
        return count;
    }
}

// Safe counter class (synchronized)
class SafeCounter {
    private int count = 0;
    
    public synchronized void increment() {
        // This is atomic due to synchronization
        count = count + 1;
    }
    
    public synchronized int getCount() {
        return count;
    }
}`
          },
          whySynchronizationNeeded: {
            title: "Why Synchronization Is Needed",
            description: "Understanding the problems that occur when multiple threads access shared data without proper coordination.",
            risks: {
              dataCorruption: {
                title: "Data corruption",
                description: "Partial updates become visible to other threads, leading to invalid data states."
              },
              inconsistentOutput: {
                title: "Inconsistent output",
                description: "Same input produces different results due to timing variations."
              },
              unexpectedBehavior: {
                title: "Unexpected behavior",
                description: "Program behavior becomes unpredictable and difficult to debug."
              }
            },
            example: `// Problems without synchronization
public class SynchronizationProblemsDemo {
    public static void main(String[] args) {
        System.out.println("=== Problems Without Synchronization ===");
        
        // Problem 1: Data Corruption
        demonstrateDataCorruption();
        
        // Problem 2: Inconsistent Output
        demonstrateInconsistentOutput();
        
        // Problem 3: Lost Updates
        demonstrateLostUpdates();
    }
    
    public static void demonstrateDataCorruption() {
        System.out.println("\n1. Data Corruption Example:");
        
        BankAccount account = new BankAccount(1000);
        
        // Multiple threads trying to withdraw simultaneously
        Thread[] withdrawThreads = new Thread[5];
        for (int i = 0; i < withdrawThreads.length; i++) {
            final int threadId = i + 1;
            withdrawThreads[i] = new Thread(() -> {
                for (int j = 0; j < 3; j++) {
                    account.unsafeWithdraw(50, "Thread-" + threadId);
                    try {
                        Thread.sleep(10);
                    } catch (InterruptedException e) {
                        Thread.currentThread().interrupt();
                    }
                }
            });
        }
        
        // Start all threads
        for (Thread thread : withdrawThreads) {
            thread.start();
        }
        
        // Wait for completion
        for (Thread thread : withdrawThreads) {
            try {
                thread.join();
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
        
        System.out.println("Final balance: $" + account.getBalance());
        System.out.println("Expected balance: $" + (1000 - 5 * 3 * 50) + " (if all withdrawals succeeded)");
    }
    
    public static void demonstrateInconsistentOutput() {
        System.out.println("\n2. Inconsistent Output Example:");
        
        PrinterResource printer = new PrinterResource();
        
        Thread thread1 = new Thread(() -> printer.unsafePrint("AAAAA"), "Printer-A");
        Thread thread2 = new Thread(() -> printer.unsafePrint("BBBBB"), "Printer-B");
        Thread thread3 = new Thread(() -> printer.unsafePrint("CCCCC"), "Printer-C");
        
        thread1.start();
        thread2.start();
        thread3.start();
        
        try {
            thread1.join();
            thread2.join();
            thread3.join();
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
    
    public static void demonstrateLostUpdates() {
        System.out.println("\n3. Lost Updates Example:");
        
        SharedResource resource = new SharedResource();
        
        Thread updater1 = new Thread(() -> {
            for (int i = 0; i < 5; i++) {
                resource.unsafeUpdate("Updater-1", i + 1);
            }
        }, "Updater-1");
        
        Thread updater2 = new Thread(() -> {
            for (int i = 0; i < 5; i++) {
                resource.unsafeUpdate("Updater-2", (i + 1) * 10);
            }
        }, "Updater-2");
        
        updater1.start();
        updater2.start();
        
        try {
            updater1.join();
            updater2.join();
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        System.out.println("Final resource value: " + resource.getValue());
    }
}

class BankAccount {
    private double balance;
    
    public BankAccount(double initialBalance) {
        this.balance = initialBalance;
    }
    
    // Unsafe withdrawal (can cause data corruption)
    public void unsafeWithdraw(double amount, String threadName) {
        if (balance >= amount) {
            System.out.println(threadName + " checking balance: $" + balance);
            // Simulate processing time
            try {
                Thread.sleep(1);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
            balance -= amount;
            System.out.println(threadName + " withdrew $" + amount + ", new balance: $" + balance);
        } else {
            System.out.println(threadName + " insufficient funds. Balance: $" + balance);
        }
    }
    
    public double getBalance() {
        return balance;
    }
}

class PrinterResource {
    public void unsafePrint(String message) {
        for (int i = 0; i < message.length(); i++) {
            System.out.print(message.charAt(i));
            try {
                Thread.sleep(10); // Simulate printing delay
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                return;
            }
        }
        System.out.println(); // New line after message
    }
}

class SharedResource {
    private int value = 0;
    private String lastUpdater = "None";
    
    public void unsafeUpdate(String updaterName, int newValue) {
        System.out.println(updaterName + " reading current value: " + value);
        
        // Simulate processing time
        try {
            Thread.sleep(50);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            return;
        }
        
        value = newValue;
        lastUpdater = updaterName;
        System.out.println(updaterName + " updated value to: " + value);
    }
    
    public int getValue() {
        return value;
    }
    
    public String getLastUpdater() {
        return lastUpdater;
    }
}`
          },
          typesSynchronization: {
            title: "Types of Synchronization",
            description: "Different approaches to implement synchronization in Java applications.",
            synchronizedMethod: {
              title: "Synchronized Method",
              description: "Locks the entire method for a single thread.",
              syntax: "public synchronized void methodName() { ... }",
              characteristics: [
                "Entire method is locked",
                "Uses object's intrinsic lock",
                "Simple to implement",
                "May reduce concurrency"
              ],
              example: `// Synchronized method demonstration
public class SynchronizedMethodDemo {
    public static void main(String[] args) {
        System.out.println("=== Synchronized Method Demo ===");
        
        MultiplicationTable table = new MultiplicationTable();
        
        // Create multiple threads to print different tables
        Thread thread1 = new Thread(() -> table.printTable(5), "Thread-5");
        Thread thread2 = new Thread(() -> table.printTable(7), "Thread-7");
        Thread thread3 = new Thread(() -> table.printTable(3), "Thread-3");
        
        thread1.start();
        thread2.start();
        thread3.start();
        
        try {
            thread1.join();
            thread2.join();
            thread3.join();
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        System.out.println("All tables printed");
    }
}

class MultiplicationTable {
    // Synchronized method - only one thread can execute at a time
    public synchronized void printTable(int n) {
        String threadName = Thread.currentThread().getName();
        System.out.println("\n" + threadName + " printing table of " + n + ":");
        
        for (int i = 1; i <= 5; i++) {
            System.out.println(threadName + ": " + n + " x " + i + " = " + (n * i));
            try {
                Thread.sleep(100); // Simulate processing time
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                return;
            }
        }
        
        System.out.println(threadName + " finished printing table of " + n);
    }
    
    // Another synchronized method
    public synchronized void printMessage(String message) {
        String threadName = Thread.currentThread().getName();
        System.out.println(threadName + ": " + message);
    }
}`
            },
            synchronizedBlock: {
              title: "Synchronized Block",
              description: "Locks only a specific section of code.",
              syntax: "synchronized(lockObject) { ... }",
              characteristics: [
                "More granular control",
                "Better performance",
                "Can use different lock objects",
                "Reduces lock contention"
              ],
              example: `// Synchronized block demonstration
public class SynchronizedBlockDemo {
    public static void main(String[] args) {
        System.out.println("=== Synchronized Block Demo ===");
        
        ResourceManager manager = new ResourceManager();
        
        // Create multiple threads for different operations
        Thread[] threads = new Thread[6];
        
        for (int i = 0; i < 3; i++) {
            final int taskId = i + 1;
            threads[i] = new Thread(() -> manager.processData("Data-" + taskId), "DataProcessor-" + taskId);
        }
        
        for (int i = 3; i < 6; i++) {
            final int taskId = i - 2;
            threads[i] = new Thread(() -> manager.generateReport("Report-" + taskId), "ReportGenerator-" + taskId);
        }
        
        // Start all threads
        for (Thread thread : threads) {
            thread.start();
        }
        
        // Wait for all threads to complete
        for (Thread thread : threads) {
            try {
                thread.join();
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
        
        System.out.println("All operations completed");
    }
}

class ResourceManager {
    private final Object dataLock = new Object();
    private final Object reportLock = new Object();
    private int dataCounter = 0;
    private int reportCounter = 0;
    
    public void processData(String data) {
        String threadName = Thread.currentThread().getName();
        
        // Non-synchronized preparation
        System.out.println(threadName + " preparing to process " + data);
        try {
            Thread.sleep(50); // Simulate preparation
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            return;
        }
        
        // Synchronized block for critical section
        synchronized (dataLock) {
            System.out.println(threadName + " processing " + data);
            dataCounter++;
            
            try {
                Thread.sleep(200); // Simulate processing
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                return;
            }
            
            System.out.println(threadName + " completed processing " + data + 
                             " (Total processed: " + dataCounter + ")");
        }
        
        // Non-synchronized cleanup
        System.out.println(threadName + " cleaning up after " + data);
    }
    
    public void generateReport(String reportName) {
        String threadName = Thread.currentThread().getName();
        
        // Non-synchronized preparation
        System.out.println(threadName + " preparing " + reportName);
        try {
            Thread.sleep(30);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            return;
        }
        
        // Synchronized block for report generation
        synchronized (reportLock) {
            System.out.println(threadName + " generating " + reportName);
            reportCounter++;
            
            try {
                Thread.sleep(150);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                return;
            }
            
            System.out.println(threadName + " completed " + reportName + 
                             " (Total reports: " + reportCounter + ")");
        }
    }
    
    // Method showing synchronized block with 'this'
    public void updateBothCounters() {
        synchronized (this) {
            dataCounter++;
            reportCounter++;
            System.out.println("Both counters updated: Data=" + dataCounter + 
                             ", Report=" + reportCounter);
        }
    }
}`
            },
            staticSynchronization: {
              title: "Static Synchronization",
              description: "Used to lock static methods (locks the class, not object).",
              syntax: "public static synchronized void methodName() { ... }",
              characteristics: [
                "Locks the Class object",
                "Affects all instances",
                "Used for static resources",
                "Class-level synchronization"
              ],
              example: `// Static synchronization demonstration
public class StaticSynchronizationDemo {
    public static void main(String[] args) {
        System.out.println("=== Static Synchronization Demo ===");
        
        // Create multiple instances
        DatabaseConnection db1 = new DatabaseConnection("DB1");
        DatabaseConnection db2 = new DatabaseConnection("DB2");
        DatabaseConnection db3 = new DatabaseConnection("DB3");
        
        // Create threads using different instances
        Thread thread1 = new Thread(() -> db1.connect(), "Connection-1");
        Thread thread2 = new Thread(() -> db2.connect(), "Connection-2");
        Thread thread3 = new Thread(() -> db3.connect(), "Connection-3");
        
        // Also test static method calls
        Thread thread4 = new Thread(() -> DatabaseConnection.getConnectionCount(), "Counter-1");
        Thread thread5 = new Thread(() -> DatabaseConnection.resetConnections(), "Reset-1");
        
        thread1.start();
        thread2.start();
        thread3.start();
        thread4.start();
        thread5.start();
        
        try {
            thread1.join();
            thread2.join();
            thread3.join();
            thread4.join();
            thread5.join();
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        System.out.println("Final connection count: " + DatabaseConnection.getConnectionCount());
    }
}

class DatabaseConnection {
    private static int totalConnections = 0;
    private static final int MAX_CONNECTIONS = 5;
    private String connectionName;
    
    public DatabaseConnection(String name) {
        this.connectionName = name;
    }
    
    // Static synchronized method - locks the class
    public static synchronized boolean canConnect() {
        return totalConnections < MAX_CONNECTIONS;
    }
    
    // Static synchronized method
    public static synchronized void incrementConnections() {
        if (totalConnections < MAX_CONNECTIONS) {
            totalConnections++;
            System.out.println("Connection established. Total: " + totalConnections);
        } else {
            System.out.println("Maximum connections reached!");
        }
    }
    
    // Static synchronized method
    public static synchronized void decrementConnections() {
        if (totalConnections > 0) {
            totalConnections--;
            System.out.println("Connection closed. Total: " + totalConnections);
        }
    }
    
    // Static synchronized method
    public static synchronized int getConnectionCount() {
        System.out.println("Current connections: " + totalConnections);
        return totalConnections;
    }
    
    // Static synchronized method
    public static synchronized void resetConnections() {
        totalConnections = 0;
        System.out.println("All connections reset");
    }
    
    // Instance method that uses static synchronization
    public void connect() {
        String threadName = Thread.currentThread().getName();
        System.out.println(threadName + " attempting to connect " + connectionName);
        
        if (canConnect()) {
            try {
                Thread.sleep(100); // Simulate connection time
                incrementConnections();
                System.out.println(threadName + " successfully connected " + connectionName);
                
                Thread.sleep(200); // Simulate work
                
                decrementConnections();
                System.out.println(threadName + " disconnected " + connectionName);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        } else {
            System.out.println(threadName + " failed to connect " + connectionName + " - max connections reached");
        }
    }
    
    // Synchronized block with class lock
    public void alternativeStaticSync() {
        synchronized (DatabaseConnection.class) {
            // This is equivalent to static synchronized method
            totalConnections++;
        }
    }
}`
            }
          },
          lockConcept: {
            title: "Lock Concept",
            description: "Understanding how Java implements synchronization using intrinsic locks and monitors.",
            intrinsicLocks: {
              title: "Java uses intrinsic locks (or monitors) for every object.",
              description: "Every object in Java has an associated monitor that can be used for synchronization."
            },
            lockAcquisition: {
              title: "When a thread enters a synchronized method/block, it acquires the lock on the object.",
              description: "The thread must obtain the lock before executing synchronized code."
            },
            lockWaiting: {
              title: "Other threads must wait until the lock is released.",
              description: "Only one thread can hold a particular lock at any given time."
            },
            example: `// Lock concept demonstration
public class LockConceptDemo {
    public static void main(String[] args) {
        System.out.println("=== Lock Concept Demonstration ===");
        
        SharedResource resource = new SharedResource();
        
        // Multiple threads trying to access the same resource
        Thread[] threads = new Thread[5];
        for (int i = 0; i < threads.length; i++) {
            final int threadId = i + 1;
            threads[i] = new Thread(() -> {
                resource.accessResource("Thread-" + threadId);
            }, "Worker-" + threadId);
        }
        
        // Start all threads simultaneously
        System.out.println("Starting all threads...");
        long startTime = System.currentTimeMillis();
        
        for (Thread thread : threads) {
            thread.start();
        }
        
        // Wait for all threads to complete
        for (Thread thread : threads) {
            try {
                thread.join();
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
        
        long totalTime = System.currentTimeMillis() - startTime;
        System.out.println("\nAll threads completed in " + totalTime + "ms");
        
        // Demonstrate lock monitoring
        demonstrateLockMonitoring();
    }
    
    public static void demonstrateLockMonitoring() {
        System.out.println("\n=== Lock Monitoring Demo ===");
        
        Object lockObject = new Object();
        
        Thread lockHolder = new Thread(() -> {
            synchronized (lockObject) {
                System.out.println("Thread-1 acquired lock");
                try {
                    Thread.sleep(3000); // Hold lock for 3 seconds
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
                System.out.println("Thread-1 releasing lock");
            }
        }, "LockHolder");
        
        Thread lockWaiter = new Thread(() -> {
            System.out.println("Thread-2 waiting for lock...");
            synchronized (lockObject) {
                System.out.println("Thread-2 acquired lock");
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
                System.out.println("Thread-2 releasing lock");
            }
        }, "LockWaiter");
        
        lockHolder.start();
        
        // Give lockHolder time to acquire lock
        try {
            Thread.sleep(100);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        lockWaiter.start();
        
        // Monitor thread states
        Thread monitor = new Thread(() -> {
            for (int i = 0; i < 50; i++) {
                System.out.println("LockHolder state: " + lockHolder.getState() + 
                                 ", LockWaiter state: " + lockWaiter.getState());
                try {
                    Thread.sleep(100);
                } catch (InterruptedException e) {
                    break;
                }
            }
        }, "Monitor");
        
        monitor.start();
        
        try {
            lockHolder.join();
            lockWaiter.join();
            monitor.interrupt();
            monitor.join();
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
}

class SharedResource {
    private int accessCount = 0;
    
    public synchronized void accessResource(String threadName) {
        System.out.println(threadName + " acquired lock and accessing resource");
        accessCount++;
        
        // Simulate resource access time
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            return;
        }
        
        System.out.println(threadName + " finished accessing resource (Access #" + accessCount + ")");
        System.out.println(threadName + " releasing lock");
    }
    
    public synchronized int getAccessCount() {
        return accessCount;
    }
}`
          },
          interThreadCommunication: {
            title: "Inter-Thread Communication",
            description: "Thread cooperation using wait(), notify(), and notifyAll() methods with synchronization.",
            methods: {
              wait: "wait() - Thread releases lock and waits for notification",
              notify: "notify() - Wakes up one waiting thread",
              notifyAll: "notifyAll() - Wakes up all waiting threads"
            },
            example: `// Inter-thread communication with synchronization
public class InterThreadCommSyncDemo {
    public static void main(String[] args) {
        System.out.println("=== Inter-Thread Communication Demo ===");
        
        // Producer-Consumer with synchronization
        SynchronizedBuffer buffer = new SynchronizedBuffer(3);
        
        Producer producer1 = new Producer(buffer, "Producer-1");
        Producer producer2 = new Producer(buffer, "Producer-2");
        Consumer consumer1 = new Consumer(buffer, "Consumer-1");
        Consumer consumer2 = new Consumer(buffer, "Consumer-2");
        
        Thread p1 = new Thread(producer1);
        Thread p2 = new Thread(producer2);
        Thread c1 = new Thread(consumer1);
        Thread c2 = new Thread(consumer2);
        
        p1.start();
        p2.start();
        c1.start();
        c2.start();
        
        // Let them run for 8 seconds
        try {
            Thread.sleep(8000);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        // Stop all threads
        producer1.stop();
        producer2.stop();
        consumer1.stop();
        consumer2.stop();
        
        try {
            p1.join();
            p2.join();
            c1.join();
            c2.join();
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        System.out.println("Demo completed");
    }
}

class SynchronizedBuffer {
    private java.util.Queue<String> buffer;
    private int capacity;
    
    public SynchronizedBuffer(int capacity) {
        this.capacity = capacity;
        this.buffer = new java.util.LinkedList<>();
    }
    
    public synchronized void produce(String item, String producerName) throws InterruptedException {
        while (buffer.size() == capacity) {
            System.out.println(producerName + " waiting - buffer full (" + buffer.size() + "/" + capacity + ")");
            wait(); // Release lock and wait
        }
        
        buffer.offer(item);
        System.out.println(producerName + " produced: " + item + " (Buffer: " + buffer.size() + "/" + capacity + ")");
        
        notifyAll(); // Wake up all waiting threads
    }
    
    public synchronized String consume(String consumerName) throws InterruptedException {
        while (buffer.isEmpty()) {
            System.out.println(consumerName + " waiting - buffer empty");
            wait(); // Release lock and wait
        }
        
        String item = buffer.poll();
        System.out.println(consumerName + " consumed: " + item + " (Buffer: " + buffer.size() + "/" + capacity + ")");
        
        notifyAll(); // Wake up all waiting threads
        return item;
    }
    
    public synchronized int size() {
        return buffer.size();
    }
}

class Producer implements Runnable {
    private SynchronizedBuffer buffer;
    private String name;
    private volatile boolean running = true;
    private int itemCount = 1;
    
    public Producer(SynchronizedBuffer buffer, String name) {
        this.buffer = buffer;
        this.name = name;
    }
    
    @Override
    public void run() {
        while (running) {
            try {
                String item = name + "-Item-" + itemCount++;
                buffer.produce(item, name);
                Thread.sleep(1000 + (int)(Math.random() * 1000)); // Random delay
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                break;
            }
        }
        System.out.println(name + " stopped");
    }
    
    public void stop() {
        running = false;
    }
}

class Consumer implements Runnable {
    private SynchronizedBuffer buffer;
    private String name;
    private volatile boolean running = true;
    
    public Consumer(SynchronizedBuffer buffer, String name) {
        this.buffer = buffer;
        this.name = name;
    }
    
    @Override
    public void run() {
        while (running) {
            try {
                buffer.consume(name);
                Thread.sleep(1500 + (int)(Math.random() * 1000)); // Random delay
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                break;
            }
        }
        System.out.println(name + " stopped");
    }
    
    public void stop() {
        running = false;
    }
}`
          },
          deadlock: {
            title: "Deadlock (Important Concept)",
            description: "A situation where two or more threads are blocked forever, waiting for each other's locks.",
            causes: [
              "Circular dependency of locks",
              "Multiple threads acquiring locks in different orders",
              "Holding locks while waiting for other locks"
            ],
            prevention: [
              "Always acquire locks in the same order",
              "Use timeout with tryLock()",
              "Avoid nested synchronization when possible",
              "Use higher-level concurrency utilities"
            ],
            example: `// Deadlock demonstration and prevention
public class DeadlockDemo {
    public static void main(String[] args) {
        System.out.println("=== Deadlock Demonstration ===");
        
        // Demonstrate deadlock scenario
        demonstrateDeadlock();
        
        // Wait a bit then demonstrate prevention
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        System.out.println("\n=== Deadlock Prevention ===");
        demonstrateDeadlockPrevention();
    }
    
    public static void demonstrateDeadlock() {
        Object lock1 = new Object();
        Object lock2 = new Object();
        
        Thread thread1 = new Thread(() -> {
            synchronized (lock1) {
                System.out.println("Thread-1: Acquired lock1");
                
                try {
                    Thread.sleep(100); // Give thread2 time to acquire lock2
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
                
                System.out.println("Thread-1: Waiting for lock2...");
                synchronized (lock2) {
                    System.out.println("Thread-1: Acquired lock2");
                }
            }
        }, "DeadlockThread-1");
        
        Thread thread2 = new Thread(() -> {
            synchronized (lock2) {
                System.out.println("Thread-2: Acquired lock2");
                
                try {
                    Thread.sleep(100); // Give thread1 time to acquire lock1
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
                
                System.out.println("Thread-2: Waiting for lock1...");
                synchronized (lock1) {
                    System.out.println("Thread-2: Acquired lock1");
                }
            }
        }, "DeadlockThread-2");
        
        thread1.start();
        thread2.start();
        
        // Monitor for deadlock
        Thread monitor = new Thread(() -> {
            for (int i = 0; i < 30; i++) {
                System.out.println("Monitor: Thread-1 state: " + thread1.getState() + 
                                 ", Thread-2 state: " + thread2.getState());
                try {
                    Thread.sleep(200);
                } catch (InterruptedException e) {
                    break;
                }
            }
            
            if (thread1.isAlive() || thread2.isAlive()) {
                System.out.println("DEADLOCK DETECTED! Interrupting threads...");
                thread1.interrupt();
                thread2.interrupt();
            }
        }, "DeadlockMonitor");
        
        monitor.start();
        
        try {
            thread1.join(2000); // Wait max 2 seconds
            thread2.join(2000);
            monitor.interrupt();
            monitor.join();
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
    
    public static void demonstrateDeadlockPrevention() {
        Object lock1 = new Object();
        Object lock2 = new Object();
        
        // Both threads acquire locks in the same order
        Thread thread1 = new Thread(() -> {
            synchronized (lock1) {
                System.out.println("Thread-1: Acquired lock1");
                
                try {
                    Thread.sleep(100);
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                    return;
                }
                
                synchronized (lock2) {
                    System.out.println("Thread-1: Acquired lock2");
                    System.out.println("Thread-1: Completed successfully");
                }
            }
        }, "SafeThread-1");
        
        Thread thread2 = new Thread(() -> {
            synchronized (lock1) { // Same order as thread1
                System.out.println("Thread-2: Acquired lock1");
                
                try {
                    Thread.sleep(100);
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                    return;
                }
                
                synchronized (lock2) {
                    System.out.println("Thread-2: Acquired lock2");
                    System.out.println("Thread-2: Completed successfully");
                }
            }
        }, "SafeThread-2");
        
        thread1.start();
        thread2.start();
        
        try {
            thread1.join();
            thread2.join();
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        System.out.println("No deadlock - both threads completed successfully");
    }
}`
          },
          synchronizationAlternatives: {
            title: "Java Synchronization Alternatives",
            description: "Modern alternatives to traditional synchronized keyword for better performance and flexibility.",
            reentrantLock: {
              title: "ReentrantLock from java.util.concurrent.locks",
              description: "More flexible locking mechanism with additional features.",
              features: [
                "Explicit lock and unlock",
                "Trylock with timeout",
                "Interruptible locking",
                "Fair/unfair locking"
              ]
            },
            atomicVariables: {
              title: "Atomic variables (e.g., AtomicInteger)",
              description: "Lock-free thread-safe operations for simple data types.",
              benefits: [
                "Better performance",
                "No blocking",
                "Compare-and-swap operations",
                "Suitable for counters and flags"
              ]
            },
            example: `import java.util.concurrent.locks.*;
import java.util.concurrent.atomic.*;

// Synchronization alternatives demonstration
public class SynchronizationAlternativesDemo {
    public static void main(String[] args) {
        System.out.println("=== Synchronization Alternatives Demo ===");
        
        // Compare different approaches
        compareApproaches();
        
        // Demonstrate ReentrantLock features
        demonstrateReentrantLockFeatures();
        
        // Demonstrate atomic variables
        demonstrateAtomicVariables();
    }
    
    public static void compareApproaches() {
        System.out.println("\n1. Performance Comparison:");
        
        int iterations = 100000;
        int threadCount = 4;
        
        // Test synchronized approach
        SynchronizedCounter syncCounter = new SynchronizedCounter();
        long syncTime = testCounter(syncCounter, iterations, threadCount, "Synchronized");
        
        // Test ReentrantLock approach
        ReentrantLockCounter lockCounter = new ReentrantLockCounter();
        long lockTime = testCounter(lockCounter, iterations, threadCount, "ReentrantLock");
        
        // Test atomic approach
        AtomicCounter atomicCounter = new AtomicCounter();
        long atomicTime = testCounter(atomicCounter, iterations, threadCount, "Atomic");
        
        System.out.println("\nPerformance Results:");
        System.out.println("Synchronized: " + syncTime + "ms");
        System.out.println("ReentrantLock: " + lockTime + "ms");
        System.out.println("Atomic: " + atomicTime + "ms");
    }
    
    public static long testCounter(Counter counter, int iterations, int threadCount, String type) {
        Thread[] threads = new Thread[threadCount];
        
        long startTime = System.currentTimeMillis();
        
        for (int i = 0; i < threadCount; i++) {
            threads[i] = new Thread(() -> {
                for (int j = 0; j < iterations; j++) {
                    counter.increment();
                }
            });
        }
        
        for (Thread thread : threads) {
            thread.start();
        }
        
        for (Thread thread : threads) {
            try {
                thread.join();
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
        
        long endTime = System.currentTimeMillis();
        System.out.println(type + " final count: " + counter.getValue() + 
                         " (expected: " + (iterations * threadCount) + ")");
        
        return endTime - startTime;
    }
    
    public static void demonstrateReentrantLockFeatures() {
        System.out.println("\n2. ReentrantLock Features:");
        
        ReentrantLock lock = new ReentrantLock(true); // Fair lock
        
        // Demonstrate tryLock
        Thread tryLockDemo = new Thread(() -> {
            if (lock.tryLock()) {
                try {
                    System.out.println("TryLock: Acquired lock successfully");
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                } finally {
                    lock.unlock();
                    System.out.println("TryLock: Released lock");
                }
            } else {
                System.out.println("TryLock: Failed to acquire lock");
            }
        }, "TryLockThread");
        
        // Demonstrate tryLock with timeout
        Thread timeoutDemo = new Thread(() -> {
            try {
                if (lock.tryLock(2, java.util.concurrent.TimeUnit.SECONDS)) {
                    try {
                        System.out.println("Timeout: Acquired lock within timeout");
                    } finally {
                        lock.unlock();
                        System.out.println("Timeout: Released lock");
                    }
                } else {
                    System.out.println("Timeout: Failed to acquire lock within timeout");
                }
            } catch (InterruptedException e) {
                System.out.println("Timeout: Interrupted while waiting");
                Thread.currentThread().interrupt();
            }
        }, "TimeoutThread");
        
        tryLockDemo.start();
        
        try {
            Thread.sleep(100); // Let first thread acquire lock
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        timeoutDemo.start();
        
        try {
            tryLockDemo.join();
            timeoutDemo.join();
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
    
    public static void demonstrateAtomicVariables() {
        System.out.println("\n3. Atomic Variables Demo:");
        
        AtomicInteger atomicInt = new AtomicInteger(0);
        AtomicBoolean atomicBool = new AtomicBoolean(false);
        AtomicReference<String> atomicRef = new AtomicReference<>("Initial");
        
        Thread[] threads = new Thread[3];
        
        for (int i = 0; i < threads.length; i++) {
            final int threadId = i + 1;
            threads[i] = new Thread(() -> {
                // Atomic integer operations
                int oldValue = atomicInt.getAndIncrement();
                System.out.println("Thread-" + threadId + ": incremented from " + oldValue + 
                                 " to " + atomicInt.get());
                
                // Atomic boolean operations
                if (atomicBool.compareAndSet(false, true)) {
                    System.out.println("Thread-" + threadId + ": set boolean to true");
                    try {
                        Thread.sleep(100);
                    } catch (InterruptedException e) {
                        Thread.currentThread().interrupt();
                    }
                    atomicBool.set(false);
                    System.out.println("Thread-" + threadId + ": reset boolean to false");
                }
                
                // Atomic reference operations
                String expected = "Initial";
                if (atomicRef.compareAndSet(expected, "Updated by Thread-" + threadId)) {
                    System.out.println("Thread-" + threadId + ": updated reference");
                }
            }, "AtomicThread-" + threadId);
        }
        
        for (Thread thread : threads) {
            thread.start();
        }
        
        for (Thread thread : threads) {
            try {
                thread.join();
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
        
        System.out.println("Final atomic integer value: " + atomicInt.get());
        System.out.println("Final atomic reference value: " + atomicRef.get());
    }
}

// Counter interface for comparison
interface Counter {
    void increment();
    int getValue();
}

// Synchronized implementation
class SynchronizedCounter implements Counter {
    private int count = 0;
    
    @Override
    public synchronized void increment() {
        count++;
    }
    
    @Override
    public synchronized int getValue() {
        return count;
    }
}

// ReentrantLock implementation
class ReentrantLockCounter implements Counter {
    private int count = 0;
    private final ReentrantLock lock = new ReentrantLock();
    
    @Override
    public void increment() {
        lock.lock();
        try {
            count++;
        } finally {
            lock.unlock();
        }
    }
    
    @Override
    public int getValue() {
        lock.lock();
        try {
            return count;
        } finally {
            lock.unlock();
        }
    }
}

// Atomic implementation
class AtomicCounter implements Counter {
    private final AtomicInteger count = new AtomicInteger(0);
    
    @Override
    public void increment() {
        count.incrementAndGet();
    }
    
    @Override
    public int getValue() {
        return count.get();
    }
}`
          },
          bestPractices: {
            title: "Best Practices",
            description: "Guidelines for effective synchronization in Java applications.",
            practices: [
              "Keep synchronized code blocks as short as possible",
              "Avoid nested synchronization unless necessary",
              "Use high-level concurrency utilities (ExecutorService, Locks) for complex needs",
              "Always release locks in finally blocks",
              "Use atomic variables for simple operations",
              "Consider lock-free algorithms when possible"
            ],
            example: `// Synchronization best practices
public class SynchronizationBestPracticesDemo {
    public static void main(String[] args) {
        System.out.println("=== Synchronization Best Practices ===");
        
        BestPracticesExample example = new BestPracticesExample();
        
        // Test with multiple threads
        Thread[] threads = new Thread[5];
        for (int i = 0; i < threads.length; i++) {
            final int threadId = i + 1;
            threads[i] = new Thread(() -> {
                example.performOperations("Thread-" + threadId);
            });
        }
        
        for (Thread thread : threads) {
            thread.start();
        }
        
        for (Thread thread : threads) {
            try {
                thread.join();
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
        
        System.out.println("All operations completed successfully");
    }
}

class BestPracticesExample {
    private final Object lock1 = new Object();
    private final Object lock2 = new Object();
    private final AtomicInteger counter = new AtomicInteger(0);
    private int sharedData = 0;
    
    public void performOperations(String threadName) {
        // Practice 1: Keep synchronized blocks short
        System.out.println(threadName + " starting operations");
        
        // Non-synchronized preparation
        String data = prepareData(threadName);
        
        // Short synchronized block
        synchronized (lock1) {
            sharedData++;
            System.out.println(threadName + " updated shared data to " + sharedData);
        }
        
        // Practice 2: Use atomic variables for simple operations
        int currentCount = counter.incrementAndGet();
        System.out.println(threadName + " atomic counter: " + currentCount);
        
        // Practice 3: Avoid nested synchronization
        processDataSafely(data, threadName);
        
        // Practice 4: Use high-level utilities
        useHighLevelUtilities(threadName);
    }
    
    private String prepareData(String threadName) {
        // Non-synchronized preparation work
        try {
            Thread.sleep(50);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        return "Data-" + threadName;
    }
    
    private void processDataSafely(String data, String threadName) {
        // Good: Separate locks for different resources
        synchronized (lock2) {
            System.out.println(threadName + " processing " + data);
            try {
                Thread.sleep(100);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
    }
    
    private void useHighLevelUtilities(String threadName) {
        // Using concurrent collections instead of synchronized collections
        java.util.concurrent.ConcurrentHashMap<String, Integer> map = 
            new java.util.concurrent.ConcurrentHashMap<>();
        
        map.put(threadName, counter.get());
        System.out.println(threadName + " added to concurrent map: " + map.get(threadName));
    }
}

// Example of proper lock management
class ProperLockManagement {
    private final ReentrantLock lock = new ReentrantLock();
    private int data = 0;
    
    public void safeOperation() {
        lock.lock();
        try {
            // Critical section
            data++;
            if (data > 100) {
                throw new RuntimeException("Data overflow");
            }
        } finally {
            // Always release lock in finally block
            lock.unlock();
        }
    }
    
    public boolean tryOperation() {
        if (lock.tryLock()) {
            try {
                data--;
                return true;
            } finally {
                lock.unlock();
            }
        }
        return false;
    }
}`
          },
          realWorldExample: {
            title: "Real-world Example",
            description: "Comprehensive example showing synchronization in a practical scenario.",
            example: `// Real-world printer synchronization example
class Printer {
    private boolean isAvailable = true;
    private String currentJob = null;
    
    // Synchronized method for printing
    public synchronized void print(String document, String user) {
        while (!isAvailable) {
            try {
                System.out.println(user + " waiting for printer...");
                wait(); // Wait until printer is available
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                return;
            }
        }
        
        // Acquire printer
        isAvailable = false;
        currentJob = document;
        System.out.println(user + " started printing: " + document);
        
        // Simulate printing time
        for (int i = 1; i <= 5; i++) {
            System.out.println(user + " printing " + document + " - page " + i + "/5");
            try {
                Thread.sleep(500); // Simulate page printing time
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                return;
            }
        }
        
        // Release printer
        System.out.println(user + " finished printing: " + document);
        isAvailable = true;
        currentJob = null;
        
        notifyAll(); // Notify waiting threads
    }
    
    public synchronized String getStatus() {
        if (isAvailable) {
            return "Printer is available";
        } else {
            return "Printer is busy with: " + currentJob;
        }
    }
}

public class PrinterSynchronizationDemo {
    public static void main(String[] args) {
        System.out.println("=== Printer Synchronization Demo ===");
        
        Printer printer = new Printer();
        
        // Create multiple users trying to print
        String[] users = {"Alice", "Bob", "Charlie", "Diana"};
        String[] documents = {"Report.pdf", "Presentation.ppt", "Invoice.doc", "Manual.pdf"};
        
        Thread[] printThreads = new Thread[users.length];
        
        for (int i = 0; i < users.length; i++) {
            final String user = users[i];
            final String document = documents[i];
            
            printThreads[i] = new Thread(() -> {
                printer.print(document, user);
            }, user + "-PrintThread");
        }
        
        // Status monitoring thread
        Thread statusThread = new Thread(() -> {
            for (int i = 0; i < 20; i++) {
                System.out.println("[STATUS] " + printer.getStatus());
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    break;
                }
            }
        }, "StatusMonitor");
        
        // Start all threads
        statusThread.start();
        for (Thread thread : printThreads) {
            thread.start();
        }
        
        // Wait for all print jobs to complete
        for (Thread thread : printThreads) {
            try {
                thread.join();
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
        
        statusThread.interrupt();
        try {
            statusThread.join();
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        System.out.println("\nAll print jobs completed!");
        System.out.println("Final status: " + printer.getStatus());
    }
}`
          }
        },
        fileHandling: {
          title: "Java File Handling",
          description: "Java provides comprehensive file I/O capabilities through java.io, java.nio.file, and java.util packages for creating, reading, writing, and managing files.",
          whatIsFileHandling: {
            title: "What is File Handling?",
            definition: {
              title: "File handling allows a Java program to create, read, write, update, and delete files on the file system.",
              description: "It enables programs to persist data beyond program execution and interact with external files.",
              operations: [
                "Create new files and directories",
                "Read data from existing files",
                "Write data to files",
                "Update file contents",
                "Delete files and directories",
                "Navigate file system structure"
              ]
            },
            packages: {
              title: "Java provides java.io, java.nio.file, and java.util packages for file operations.",
              description: "Different packages offer various approaches to file handling.",
              javaIo: "java.io - Traditional I/O with streams and readers/writers",
              javaNio: "java.nio.file - Modern NIO.2 API with Path and Files classes",
              javaUtil: "java.util - Utility classes like Scanner for file reading"
            },
            example: `// File handling overview demonstration
import java.io.*;
import java.nio.file.*;
import java.util.*;

public class FileHandlingOverviewDemo {
    public static void main(String[] args) {
        System.out.println("=== File Handling Overview ===");
        
        String fileName = "demo-file.txt";
        String content = "Hello, File Handling!\nThis is a demonstration.";
        
        try {
            // 1. Create and write to file
            createAndWriteFile(fileName, content);
            
            // 2. Read from file
            readFile(fileName);
            
            // 3. File information
            displayFileInfo(fileName);
            
            // 4. Update file
            updateFile(fileName, "\nUpdated content added.");
            
            // 5. Read updated file
            System.out.println("\nAfter update:");
            readFile(fileName);
            
            // 6. Clean up
            deleteFile(fileName);
            
        } catch (IOException e) {
            System.err.println("File operation failed: " + e.getMessage());
        }
    }
    
    public static void createAndWriteFile(String fileName, String content) throws IOException {
        try (FileWriter writer = new FileWriter(fileName)) {
            writer.write(content);
            System.out.println("File created and content written: " + fileName);
        }
    }
    
    public static void readFile(String fileName) throws IOException {
        System.out.println("\nReading file: " + fileName);
        try (BufferedReader reader = new BufferedReader(new FileReader(fileName))) {
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        }
    }
    
    public static void displayFileInfo(String fileName) {
        File file = new File(fileName);
        System.out.println("\nFile Information:");
        System.out.println("Name: " + file.getName());
        System.out.println("Exists: " + file.exists());
        System.out.println("Size: " + file.length() + " bytes");
        System.out.println("Can read: " + file.canRead());
        System.out.println("Can write: " + file.canWrite());
        System.out.println("Last modified: " + new Date(file.lastModified()));
    }
    
    public static void updateFile(String fileName, String additionalContent) throws IOException {
        try (FileWriter writer = new FileWriter(fileName, true)) { // append mode
            writer.write(additionalContent);
            System.out.println("File updated with additional content");
        }
    }
    
    public static void deleteFile(String fileName) {
        File file = new File(fileName);
        if (file.delete()) {
            System.out.println("\nFile deleted: " + fileName);
        } else {
            System.out.println("\nFailed to delete file: " + fileName);
        }
    }
}`
          },
          fileClass: {
            title: "File Class (java.io.File)",
            description: "Used to work with file and directory properties (not content). Provides metadata and file system operations.",
            commonMethods: {
              createNewFile: "createNewFile() - Create file",
              exists: "exists() - Check if file exists",
              getName: "getName() - File name",
              length: "length() - File size",
              delete: "delete() - Delete file",
              mkdir: "mkdir() - Create directory"
            },
            example: `// File class comprehensive demonstration
import java.io.*;
import java.util.Date;

public class FileClassDemo {
    public static void main(String[] args) {
        System.out.println("=== File Class Demonstration ===");
        
        // File operations
        demonstrateFileOperations();
        
        // Directory operations
        demonstrateDirectoryOperations();
        
        // File properties
        demonstrateFileProperties();
        
        // File system navigation
        demonstrateFileSystemNavigation();
    }
    
    public static void demonstrateFileOperations() {
        System.out.println("\n1. File Operations:");
        
        String fileName = "test-file.txt";
        File file = new File(fileName);
        
        try {
            // Create file
            if (file.createNewFile()) {
                System.out.println("File created: " + fileName);
            } else {
                System.out.println("File already exists: " + fileName);
            }
            
            // Check existence
            System.out.println("File exists: " + file.exists());
            
            // Write some content to get file size
            try (FileWriter writer = new FileWriter(file)) {
                writer.write("This is test content for file operations.");
            }
            
            // File properties
            System.out.println("File name: " + file.getName());
            System.out.println("File size: " + file.length() + " bytes");
            System.out.println("Absolute path: " + file.getAbsolutePath());
            System.out.println("Parent directory: " + file.getParent());
            
            // File permissions
            System.out.println("Can read: " + file.canRead());
            System.out.println("Can write: " + file.canWrite());
            System.out.println("Can execute: " + file.canExecute());
            
            // Timestamps
            System.out.println("Last modified: " + new Date(file.lastModified()));
            
            // Delete file
            if (file.delete()) {
                System.out.println("File deleted successfully");
            }
            
        } catch (IOException e) {
            System.err.println("File operation error: " + e.getMessage());
        }
    }
    
    public static void demonstrateDirectoryOperations() {
        System.out.println("\n2. Directory Operations:");
        
        String dirName = "test-directory";
        File directory = new File(dirName);
        
        // Create directory
        if (directory.mkdir()) {
            System.out.println("Directory created: " + dirName);
        } else {
            System.out.println("Directory already exists or creation failed: " + dirName);
        }
        
        // Create nested directories
        File nestedDir = new File(dirName + "/nested/deep");
        if (nestedDir.mkdirs()) {
            System.out.println("Nested directories created: " + nestedDir.getPath());
        }
        
        // Create files in directory
        try {
            File file1 = new File(directory, "file1.txt");
            File file2 = new File(directory, "file2.txt");
            File file3 = new File(nestedDir, "deep-file.txt");
            
            file1.createNewFile();
            file2.createNewFile();
            file3.createNewFile();
            
            System.out.println("Files created in directories");
            
        } catch (IOException e) {
            System.err.println("Error creating files: " + e.getMessage());
        }
        
        // List directory contents
        System.out.println("\nDirectory contents:");
        listDirectoryContents(directory, 0);
        
        // Clean up
        deleteDirectoryRecursively(directory);
        System.out.println("Directory and contents deleted");
    }
    
    public static void demonstrateFileProperties() {
        System.out.println("\n3. File Properties:");
        
        // Current directory
        File currentDir = new File(".");
        System.out.println("Current directory: " + currentDir.getAbsolutePath());
        
        // System properties
        System.out.println("User home: " + System.getProperty("user.home"));
        System.out.println("User directory: " + System.getProperty("user.dir"));
        System.out.println("File separator: '" + File.separator + "'");
        System.out.println("Path separator: '" + File.pathSeparator + "'");
        
        // Root directories
        File[] roots = File.listRoots();
        System.out.println("\nRoot directories:");
        for (File root : roots) {
            System.out.println("Root: " + root.getAbsolutePath());
            System.out.println("  Total space: " + (root.getTotalSpace() / (1024 * 1024 * 1024)) + " GB");
            System.out.println("  Free space: " + (root.getFreeSpace() / (1024 * 1024 * 1024)) + " GB");
            System.out.println("  Usable space: " + (root.getUsableSpace() / (1024 * 1024 * 1024)) + " GB");
        }
    }
    
    public static void demonstrateFileSystemNavigation() {
        System.out.println("\n4. File System Navigation:");
        
        File currentDir = new File(".");
        File[] files = currentDir.listFiles();
        
        if (files != null) {
            System.out.println("Files and directories in current directory:");
            for (File file : files) {
                String type = file.isDirectory() ? "[DIR]" : "[FILE]";
                String size = file.isFile() ? " (" + file.length() + " bytes)" : "";
                System.out.println(type + " " + file.getName() + size);
            }
        }
        
        // File filtering
        System.out.println("\nJava files in current directory:");
        File[] javaFiles = currentDir.listFiles((dir, name) -> name.endsWith(".java"));
        if (javaFiles != null) {
            for (File javaFile : javaFiles) {
                System.out.println("Java file: " + javaFile.getName());
            }
        }
    }
    
    // Helper method to list directory contents recursively
    public static void listDirectoryContents(File directory, int level) {
        if (!directory.isDirectory()) return;
        
        String indent = "  ".repeat(level);
        File[] files = directory.listFiles();
        
        if (files != null) {
            for (File file : files) {
                if (file.isDirectory()) {
                    System.out.println(indent + "[DIR] " + file.getName());
                    listDirectoryContents(file, level + 1);
                } else {
                    System.out.println(indent + "[FILE] " + file.getName() + " (" + file.length() + " bytes)");
                }
            }
        }
    }
    
    // Helper method to delete directory recursively
    public static boolean deleteDirectoryRecursively(File directory) {
        if (directory.isDirectory()) {
            File[] files = directory.listFiles();
            if (files != null) {
                for (File file : files) {
                    deleteDirectoryRecursively(file);
                }
            }
        }
        return directory.delete();
    }
}`
          },
      advancedTheory: {
        jvmInternals: {
          title: "JVM Internal Architecture",
          description: "Understanding how JVM works internally is crucial for Java developers to write efficient code.",
          classLoader: {
            title: "Class Loader Subsystem",
            phases: [
              "Loading - Loads .class files from various sources (file system, network, JAR files)",
              "Linking - Verification (bytecode verification), Preparation (memory allocation), Resolution (symbolic references)",
              "Initialization - Executes static initializers and static blocks"
            ],
            types: [
              "Bootstrap Class Loader - Loads core Java classes (java.lang, java.util, etc.)",
              "Extension Class Loader - Loads classes from extension directories",
              "Application Class Loader - Loads classes from application classpath"
            ]
          },
          executionEngine: {
            title: "Execution Engine",
            components: [
              "Interpreter - Executes bytecode line by line (slower but starts quickly)",
              "JIT Compiler - Compiles frequently used bytecode to native machine code (faster execution)",
              "Garbage Collector - Automatically manages memory by removing unused objects"
            ]
          },
          garbageCollection: {
            title: "Garbage Collection",
            description: "Automatic memory management process that reclaims memory used by objects that are no longer reachable.",
            types: [
              "Serial GC - Single-threaded, suitable for small applications",
              "Parallel GC - Multi-threaded, default for server applications",
              "G1 GC - Low-latency collector for large heap sizes",
              "ZGC - Ultra-low latency collector for very large heaps"
            ],
            phases: [
              "Mark - Identifies which objects are still in use",
              "Sweep - Removes unreferenced objects",
              "Compact - Defragments memory to reduce fragmentation"
            ]
          }
        },
        memory: `// Java Memory Management
// Java uses automatic garbage collection. Key memory areas:
// - Heap: Stores all objects and arrays
// - Stack: Stores method frames, local variables, and partial results
// - Method Area: Stores class definitions, static variables, method code
// - Garbage Collector: Runs in the background, frees memory of unreachable objects
// - Strong, Weak, Soft, Phantom references for advanced memory control
`,
        java8: `// Java 8+ Features
// - Lambda Expressions: Enable functional programming
// - Stream API: Process collections with map/filter/reduce
// - Optional: Avoid null pointer exceptions
// - New Date/Time API: java.time package
// - Default/Static methods in interfaces
// - Method references, functional interfaces
// - Parallel streams for multicore processing
`
      },
      syntax: {
        basic: `// Java Basic Syntax Overview

// 1. Package and Import Statements
package com.example.myapp;
import java.util.Scanner;
import java.util.ArrayList;

// 2. Class Declaration
public class MyClass {
    // Class body
}

// 3. Variables and Data Types
int number = 42;              // Integer
double price = 19.99;         // Floating point
char grade = 'A';             // Character
boolean isActive = true;      // Boolean
String name = "Java";         // String (object)

// 4. Arrays and Collections
int[] numbers = {1, 2, 3, 4, 5};
String[] names = new String[3];
ArrayList<String> list = new ArrayList<>();

// 5. Control Structures
if (condition) {
    // if block
} else if (anotherCondition) {
    // else if block
} else {
    // else block
}

// 6. Loops
for (int i = 0; i < 10; i++) {
    // for loop
}

for (String item : list) {
    // enhanced for loop
}

while (condition) {
    // while loop
}

// 7. Methods
public static returnType methodName(parameters) {
    // method body
    return value; // if not void
}

// 8. Exception Handling
try {
    // risky code
} catch (Exception e) {
    // handle exception
} finally {
    // cleanup code
}`,
        conventions: [
          "Class names use PascalCase (e.g., MyClass, StudentRecord)",
          "Method and variable names use camelCase (e.g., getName, studentAge)",
          "Constants use UPPER_SNAKE_CASE (e.g., MAX_SIZE, PI_VALUE)",
          "Package names use lowercase (e.g., com.company.project)",
          "Indentation: 4 spaces or 1 tab",
          "Braces on same line for methods and classes",
          "Always use meaningful names for variables and methods"
        ]
      },
      extraExamples: [
        {
          title: "File I/O: Reading and Writing Files",
          code: `import java.io.*;

public class FileIODemo {
    public static void main(String[] args) {
        // Writing to a file
        try (BufferedWriter writer = new BufferedWriter(new FileWriter("output.txt"))) {
            writer.write("Hello, Java File I/O!\n");
            writer.write("This is a new line.\n");
        } catch (IOException e) {
            System.err.println("Error writing file: " + e.getMessage());
        }

        // Reading from a file
        try (BufferedReader reader = new BufferedReader(new FileReader("output.txt"))) {
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            System.err.println("Error reading file: " + e.getMessage());
        }
    }
}`,
          explanation: "Demonstrates file writing and reading using BufferedWriter and BufferedReader. Always close resources or use try-with-resources."
        },
        {
          title: "Networking: Simple TCP Client and Server",
          code: `// Simple TCP Server
import java.io.*;
import java.net.*;

public class SimpleServer {
    public static void main(String[] args) throws IOException {
        ServerSocket serverSocket = new ServerSocket(12345);
        System.out.println("Server started on port 12345");
        Socket clientSocket = serverSocket.accept();
        BufferedReader in = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));
        PrintWriter out = new PrintWriter(clientSocket.getOutputStream(), true);
        out.println("Hello from server!");
        String clientMsg = in.readLine();
        System.out.println("Client says: " + clientMsg);
        in.close(); out.close(); clientSocket.close(); serverSocket.close();
    }
}

// Simple TCP Client
import java.io.*;
import java.net.*;

public class SimpleClient {
    public static void main(String[] args) throws IOException {
        Socket socket = new Socket("localhost", 12345);
        BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
        PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
        System.out.println(in.readLine());
        out.println("Hello from client!");
        in.close(); out.close(); socket.close();
    }
}`,
          explanation: "Shows a basic TCP server and client using java.net.ServerSocket and Socket."
        },
        {
          title: "GUI: Simple Java Swing Window",
          code: `import javax.swing.*;

public class SwingDemo {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Swing Demo");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(300, 200);
        JLabel label = new JLabel("Hello, Java Swing!", SwingConstants.CENTER);
        frame.add(label);
        frame.setVisible(true);
    }
}`,
          explanation: "Creates a simple window with a label using Java Swing."
        },
        {
          title: "Lambda Expressions and Stream API",
          code: `import java.util.*;
import java.util.stream.*;

public class LambdaStreamDemo {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "Diana");
        // Print all names in uppercase using lambda
        names.forEach(name -> System.out.println(name.toUpperCase()));

        // Filter names starting with 'C' and collect
        List<String> cNames = names.stream()
            .filter(name -> name.startsWith("C"))
            .collect(Collectors.toList());
        System.out.println("Names starting with C: " + cNames);

        // Sum of squares using streams
        int sum = IntStream.range(1, 6)
            .map(x -> x * x)
            .sum();
        System.out.println("Sum of squares 1-5: " + sum);
    }
}`,
          explanation: "Demonstrates lambda expressions, forEach, filter, map, and collect with the Stream API."
        },
        {
          title: "Multithreading: Runnable and ExecutorService",
          code: `import java.util.concurrent.*;

public class ThreadDemo {
    public static void main(String[] args) {
        Runnable task = () -> {
            for (int i = 1; i <= 5; i++) {
                System.out.println(Thread.currentThread().getName() + " - Count: " + i);
            }
        };
        ExecutorService executor = Executors.newFixedThreadPool(2);
        executor.submit(task);
        executor.submit(task);
        executor.shutdown();
    }
}`,
          explanation: "Shows how to use Runnable and ExecutorService for multithreading."
        },
        {
          title: "JDBC: Database Access Example",
          code: `import java.sql.*;

public class JDBCDemo {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/mydb";
        String user = "root";
        String password = "password";
        try (Connection conn = DriverManager.getConnection(url, user, password)) {
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT id, name FROM students");
            while (rs.next()) {
                System.out.println(rs.getInt("id") + ": " + rs.getString("name"));
            }
        } catch (SQLException e) {
            System.err.println("Database error: " + e.getMessage());
        }
    }
}`,
          explanation: "Basic JDBC example for connecting to a MySQL database and querying data."
        }
      ],
      algorithms: {
        quicksort: {
          title: "Quick Sort Algorithm",
          description: "A divide-and-conquer algorithm that picks a pivot element and partitions the array around it, then recursively sorts the sub-arrays.",
          steps: [
            "Choose a pivot element from the array",
            "Partition array: elements smaller than pivot go left, larger go right",
            "Recursively apply quicksort to left sub-array",
            "Recursively apply quicksort to right sub-array",
            "Combine the results (already sorted in place)",
            "Base case: arrays with 0 or 1 element are already sorted"
          ],
          timeComplexity: "O(n log n) average case, O(n²) worst case",
          spaceComplexity: "O(log n) average case due to recursion stack"
        },
        binarySearch: {
          title: "Binary Search Algorithm",
          description: "An efficient search algorithm for sorted arrays that repeatedly divides the search interval in half.",
          steps: [
            "Start with sorted array and target value",
            "Find middle element of current search range",
            "Compare middle element with target",
            "If equal, return the index (found)",
            "If target is smaller, search left half",
            "If target is larger, search right half",
            "Repeat until found or range is empty"
          ],
          timeComplexity: "O(log n) - logarithmic time complexity",
          spaceComplexity: "O(1) iterative, O(log n) recursive"
        },
        mergeSort: {
          title: "Merge Sort Algorithm",
          description: "A stable, divide-and-conquer sorting algorithm that divides the array into halves, sorts them, and merges back.",
          steps: [
            "Divide array into two halves",
            "Recursively sort left half",
            "Recursively sort right half",
            "Merge the two sorted halves",
            "Compare elements from both halves",
            "Place smaller element in result array",
            "Continue until all elements are merged"
          ],
          timeComplexity: "O(n log n) - consistent for all cases",
          spaceComplexity: "O(n) - requires additional space for merging"
        }
      },
      flowcharts: {
        oop_structure: {
          title: "Object-Oriented Programming Structure",
          description: "Shows the relationship between classes, objects, inheritance, and polymorphism in Java",
          steps: [
            "START",
            "Define Class with Attributes",
            "Define Methods (Behaviors)",
            "Create Constructor",
            "Instantiate Objects",
            "Inheritance? (Diamond)",
            "Extend Parent Class",
            "Override Methods",
            "Polymorphism Implementation",
            "Object Interaction",
            "END"
          ]
        },
        exception_handling: {
          title: "Exception Handling Flow",
          description: "Demonstrates how Java handles exceptions with try-catch-finally blocks",
          steps: [
            "START",
            "Execute Try Block",
            "Exception Thrown? (Diamond)",
            "Continue Normal Execution",
            "Check Catch Blocks",
            "Matching Exception? (Diamond)",
            "Execute Catch Block",
            "Execute Finally Block",
            "Program Continues/Terminates",
            "END"
          ]
        },
        collection_framework: {
          title: "Java Collections Framework",
          description: "Shows the hierarchy and usage of Java collections like List, Set, Map",
          steps: [
            "START",
            "Choose Collection Type",
            "List (Ordered)? (Diamond)",
            "ArrayList/LinkedList",
            "Set (Unique)? (Diamond)",
            "HashSet/TreeSet",
            "Map (Key-Value)? (Diamond)",
            "HashMap/TreeMap",
            "Perform Operations",
            "Iterate Through Collection",
            "END"
          ]
        }
      }
    },
    syllabus: [
      {
        week: 1,
        title: "Java Fundamentals and Syntax",
        topics: [
          "Java platform and JVM architecture",
          "Variables and primitive data types",
          "Operators and expressions",
          "Control structures and loops",
          "Methods and parameter passing",
          "Arrays and string handling"
        ],
        practicals: [
          "Setup Java development environment (JDK, IDE)",
          "Write and compile basic Java programs",
          "Create interactive console applications",
          "Build a comprehensive calculator program"
        ],
        examples: [
          {
            title: "Java Syntax and Data Types",
            code: `public class JavaSyntaxDemo {
    public static void main(String[] args) {
        // ===== PRIMITIVE DATA TYPES =====
        
        // Integer types
        byte smallNumber = 127;           // 8-bit: -128 to 127
        short mediumNumber = 32000;       // 16-bit: -32,768 to 32,767
        int regularNumber = 2147483647;   // 32-bit: -2^31 to 2^31-1
        long bigNumber = 9223372036854775807L; // 64-bit: -2^63 to 2^63-1
        
        // Floating-point types
        float price = 19.99f;             // 32-bit floating point
        double precisePrice = 19.999999;  // 64-bit floating point
        
        // Character and boolean
        char grade = 'A';
        boolean isStudent = true;
        
        // ===== REFERENCE TYPES =====
        String name = "Java Programming";
        String[] subjects = {"Math", "Science", "History"};
        int[] scores = new int[5]; // Array of 5 integers
        
        // ===== OPERATORS =====
        
        // Arithmetic operators
        int a = 10, b = 3;
        System.out.println("Arithmetic Operations:");
        System.out.println("a + b = " + (a + b));  // Addition: 13
        System.out.println("a - b = " + (a - b));  // Subtraction: 7
        System.out.println("a * b = " + (a * b));  // Multiplication: 30
        System.out.println("a / b = " + (a / b));  // Division: 3 (integer)
        System.out.println("a % b = " + (a % b));  // Modulus: 1
        
        // Comparison operators
        System.out.println("\\nComparison Operations:");
        System.out.println("a > b: " + (a > b));   // true
        System.out.println("a < b: " + (a < b));   // false
        System.out.println("a == b: " + (a == b)); // false
        System.out.println("a != b: " + (a != b)); // true
        
        // Logical operators
        boolean x = true, y = false;
        System.out.println("\\nLogical Operations:");
        System.out.println("x && y: " + (x && y)); // AND: false
        System.out.println("x || y: " + (x || y)); // OR: true
        System.out.println("!x: " + (!x));         // NOT: false
        
        // ===== CONTROL STRUCTURES =====
        
        // If-else statement
        int score = 85;
        String letterGrade;
        
        if (score >= 90) {
            letterGrade = "A";
        } else if (score >= 80) {
            letterGrade = "B";
        } else if (score >= 70) {
            letterGrade = "C";
        } else if (score >= 60) {
            letterGrade = "D";
        } else {
            letterGrade = "F";
        }
        
        System.out.println("\\nGrade Calculation:");
        System.out.println("Score: " + score + ", Grade: " + letterGrade);
        
        // Switch statement
        int dayOfWeek = 3;
        String dayName;
        
        switch (dayOfWeek) {
            case 1: dayName = "Monday"; break;
            case 2: dayName = "Tuesday"; break;
            case 3: dayName = "Wednesday"; break;
            case 4: dayName = "Thursday"; break;
            case 5: dayName = "Friday"; break;
            case 6: dayName = "Saturday"; break;
            case 7: dayName = "Sunday"; break;
            default: dayName = "Invalid day"; break;
        }
        
        System.out.println("Day " + dayOfWeek + " is " + dayName);
        
        // ===== LOOPS =====
        
        // For loop
        System.out.println("\\nFor Loop - Numbers 1 to 5:");
        for (int i = 1; i <= 5; i++) {
            System.out.print(i + " ");
        }
        System.out.println();
        
        // Enhanced for loop (for-each)
        System.out.println("\\nEnhanced For Loop - Array elements:");
        for (String subject : subjects) {
            System.out.print(subject + " ");
        }
        System.out.println();
        
        // While loop
        System.out.println("\\nWhile Loop - Countdown:");
        int countdown = 5;
        while (countdown > 0) {
            System.out.print(countdown + " ");
            countdown--;
        }
        System.out.println("Blast off!");
        
        // Do-while loop
        System.out.println("\\nDo-While Loop - At least one execution:");
        int number = 0;
        do {
            System.out.println("Number: " + number);
            number++;
        } while (number < 3);
        
        // ===== METHODS =====
        
        // Call custom methods
        System.out.println("\\nMethod Calls:");
        displayWelcomeMessage();
        
        int sum = addNumbers(15, 25);
        System.out.println("Sum of 15 and 25: " + sum);
        
        double average = calculateAverage(new int[]{85, 92, 78, 96, 88});
        System.out.println("Average score: " + average);
        
        // ===== STRING OPERATIONS =====
        
        System.out.println("\\nString Operations:");
        String text = "Java Programming";
        System.out.println("Original: " + text);
        System.out.println("Length: " + text.length());
        System.out.println("Uppercase: " + text.toUpperCase());
        System.out.println("Lowercase: " + text.toLowerCase());
        System.out.println("Substring: " + text.substring(0, 4));
        System.out.println("Contains 'Java': " + text.contains("Java"));
        System.out.println("Replace 'Java' with 'Advanced': " + text.replace("Java", "Advanced"));
    }
    
    // Custom method - no parameters, no return value
    public static void displayWelcomeMessage() {
        System.out.println("Welcome to Java Programming!");
    }
    
    // Custom method - with parameters and return value
    public static int addNumbers(int num1, int num2) {
        return num1 + num2;
    }
    
    // Custom method - array parameter
    public static double calculateAverage(int[] numbers) {
        if (numbers.length == 0) {
            return 0.0;
        }
        
        int sum = 0;
        for (int number : numbers) {
            sum += number;
        }
        
        return (double) sum / numbers.length;
    }
}`,
            explanation: "Comprehensive Java syntax demonstration covering data types, operators, control structures, loops, methods, and string operations with detailed examples."
          },
          {
            title: "Object-Oriented Programming Example",
            code: `// Complete OOP example with inheritance and polymorphism
class Animal {
    protected String name;
    protected int age;
    
    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public void makeSound() {
        System.out.println(name + " makes a sound");
    }
    
    public void displayInfo() {
        System.out.println("Name: " + name + ", Age: " + age);
    }
}

class Dog extends Animal {
    private String breed;
    
    public Dog(String name, int age, String breed) {
        super(name, age);
        this.breed = breed;
    }
    
    @Override
    public void makeSound() {
        System.out.println(name + " barks: Woof! Woof!");
    }
    
    public void wagTail() {
        System.out.println(name + " is wagging tail happily!");
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Breed: " + breed);
    }
}

class Cat extends Animal {
    private boolean isIndoor;
    
    public Cat(String name, int age, boolean isIndoor) {
        super(name, age);
        this.isIndoor = isIndoor;
    }
    
    @Override
    public void makeSound() {
        System.out.println(name + " meows: Meow! Meow!");
    }
    
    public void purr() {
        System.out.println(name + " is purring contentedly");
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Indoor cat: " + (isIndoor ? "Yes" : "No"));
    }
}

public class AnimalDemo {
    public static void main(String[] args) {
        // Polymorphism in action
        Animal[] animals = {
            new Dog("Buddy", 3, "Golden Retriever"),
            new Cat("Whiskers", 2, true),
            new Dog("Max", 5, "German Shepherd")
        };
        
        System.out.println("=== Animal Shelter Demo ===");
        
        for (Animal animal : animals) {
            animal.displayInfo();
            animal.makeSound();
            
            // Type checking and casting
            if (animal instanceof Dog) {
                Dog dog = (Dog) animal;
                dog.wagTail();
            } else if (animal instanceof Cat) {
                Cat cat = (Cat) animal;
                cat.purr();
            }
            
            System.out.println("-".repeat(30));
        }
    }
}`,
            explanation: "Demonstrates inheritance, method overriding, polymorphism, instanceof operator, and type casting in Java OOP."
          },
          {
            title: "Collections and Exception Handling",
            code: `import java.util.*;
import java.io.*;

class Student {
    private int id;
    private String name;
    private double gpa;
    
    public Student(int id, String name, double gpa) throws IllegalArgumentException {
        if (name == null || name.trim().isEmpty()) {
            throw new IllegalArgumentException("Name cannot be empty");
        }
        if (gpa < 0.0 || gpa > 4.0) {
            throw new IllegalArgumentException("GPA must be between 0.0 and 4.0");
        }
        
        this.id = id;
        this.name = name.trim();
        this.gpa = gpa;
    }
    
    // Getters
    public int getId() { return id; }
    public String getName() { return name; }
    public double getGpa() { return gpa; }
    
    @Override
    public String toString() {
        return String.format("Student{id=%d, name='%s', gpa=%.2f}", id, name, gpa);
    }
    
    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Student student = (Student) obj;
        return id == student.id;
    }
    
    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}

public class StudentManager {
    private List<Student> students;
    private Map<String, List<Student>> studentsByGrade;
    
    public StudentManager() {
        students = new ArrayList<>();
        studentsByGrade = new HashMap<>();
    }
    
    public void addStudent(int id, String name, double gpa) {
        try {
            Student student = new Student(id, name, gpa);
            students.add(student);
            
            // Categorize by grade
            String grade = getGradeCategory(gpa);
            studentsByGrade.computeIfAbsent(grade, k -> new ArrayList<>()).add(student);
            
            System.out.println("Added: " + student);
        } catch (IllegalArgumentException e) {
            System.err.println("Error adding student: " + e.getMessage());
        }
    }
    
    private String getGradeCategory(double gpa) {
        if (gpa >= 3.5) return "Excellent";
        else if (gpa >= 3.0) return "Good";
        else if (gpa >= 2.5) return "Average";
        else return "Below Average";
    }
    
    public void displayStudentsByGrade() {
        System.out.println("\\n=== Students by Grade Category ===");
        
        for (Map.Entry<String, List<Student>> entry : studentsByGrade.entrySet()) {
            System.out.println("\\n" + entry.getKey() + " Students:");
            entry.getValue().forEach(student -> 
                System.out.println("  " + student));
        }
    }
    
    public void findStudentById(int id) {
        Optional<Student> found = students.stream()
            .filter(s -> s.getId() == id)
            .findFirst();
            
        if (found.isPresent()) {
            System.out.println("Found: " + found.get());
        } else {
            System.out.println("Student with ID " + id + " not found");
        }
    }
    
    public void calculateStatistics() {
        if (students.isEmpty()) {
            System.out.println("No students to analyze");
            return;
        }
        
        double avgGpa = students.stream()
            .mapToDouble(Student::getGpa)
            .average()
            .orElse(0.0);
            
        double maxGpa = students.stream()
            .mapToDouble(Student::getGpa)
            .max()
            .orElse(0.0);
            
        double minGpa = students.stream()
            .mapToDouble(Student::getGpa)
            .min()
            .orElse(0.0);
        
        System.out.println("\\n=== Statistics ===");
        System.out.printf("Total Students: %d%n", students.size());
        System.out.printf("Average GPA: %.2f%n", avgGpa);
        System.out.printf("Highest GPA: %.2f%n", maxGpa);
        System.out.printf("Lowest GPA: %.2f%n", minGpa);
    }
    
    public static void main(String[] args) {
        StudentManager manager = new StudentManager();
        
        // Add students with error handling
        manager.addStudent(101, "Alice Johnson", 3.8);
        manager.addStudent(102, "Bob Smith", 3.2);
        manager.addStudent(103, "Charlie Brown", 2.9);
        manager.addStudent(104, "", 3.5); // Invalid - empty name
        manager.addStudent(105, "Diana Prince", 4.5); // Invalid - GPA > 4.0
        manager.addStudent(106, "Eve Wilson", 3.9);
        
        // Display categorized students
        manager.displayStudentsByGrade();
        
        // Search functionality
        System.out.println("\\n=== Search Results ===");
        manager.findStudentById(102);
        manager.findStudentById(999);
        
        // Statistics
        manager.calculateStatistics();
    }
}`,
            explanation: "Advanced example showing collections (List, Map), exception handling, stream API, lambda expressions, and comprehensive error handling."
          },
          {
            title: "Complete Library Management System Project",
            code: `import java.util.*;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

// Book class representing a library book
class Book {
    private String isbn;
    private String title;
    private String author;
    private String category;
    private boolean isAvailable;
    private LocalDate publishDate;
    
    public Book(String isbn, String title, String author, String category, LocalDate publishDate) {
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.category = category;
        this.publishDate = publishDate;
        this.isAvailable = true;
    }
    
    // Getters and setters
    public String getIsbn() { return isbn; }
    public String getTitle() { return title; }
    public String getAuthor() { return author; }
    public String getCategory() { return category; }
    public boolean isAvailable() { return isAvailable; }
    public void setAvailable(boolean available) { this.isAvailable = available; }
    public LocalDate getPublishDate() { return publishDate; }
    
    @Override
    public String toString() {
        return String.format("Book{isbn='%s', title='%s', author='%s', category='%s', available=%s}",
                           isbn, title, author, category, isAvailable);
    }
    
    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Book book = (Book) obj;
        return Objects.equals(isbn, book.isbn);
    }
    
    @Override
    public int hashCode() {
        return Objects.hash(isbn);
    }
}

// Member class representing library members
class Member {
    private String memberId;
    private String name;
    private String email;
    private LocalDate joinDate;
    private List<String> borrowedBooks;
    
    public Member(String memberId, String name, String email) {
        this.memberId = memberId;
        this.name = name;
        this.email = email;
        this.joinDate = LocalDate.now();
        this.borrowedBooks = new ArrayList<>();
    }
    
    // Getters
    public String getMemberId() { return memberId; }
    public String getName() { return name; }
    public String getEmail() { return email; }
    public LocalDate getJoinDate() { return joinDate; }
    public List<String> getBorrowedBooks() { return new ArrayList<>(borrowedBooks); }
    
    public void borrowBook(String isbn) {
        borrowedBooks.add(isbn);
    }
    
    public boolean returnBook(String isbn) {
        return borrowedBooks.remove(isbn);
    }
    
    public int getBorrowedCount() {
        return borrowedBooks.size();
    }
    
    @Override
    public String toString() {
        return String.format("Member{id='%s', name='%s', email='%s', borrowed=%d}",
                           memberId, name, email, borrowedBooks.size());
    }
}

// Main Library Management System
public class LibraryManagementSystem {
    private Map<String, Book> books;
    private Map<String, Member> members;
    private Map<String, String> borrowRecords; // ISBN -> MemberID
    private Scanner scanner;
    
    public LibraryManagementSystem() {
        books = new HashMap<>();
        members = new HashMap<>();
        borrowRecords = new HashMap<>();
        scanner = new Scanner(System.in);
        initializeSampleData();
    }
    
    private void initializeSampleData() {
        // Add sample books
        addBook("978-0134685991", "Effective Java", "Joshua Bloch", "Programming", LocalDate.of(2017, 12, 27));
        addBook("978-0596009205", "Head First Java", "Kathy Sierra", "Programming", LocalDate.of(2005, 2, 9));
        addBook("978-0321356680", "Java: The Complete Reference", "Herbert Schildt", "Programming", LocalDate.of(2020, 3, 23));
        addBook("978-1617291999", "Spring in Action", "Craig Walls", "Framework", LocalDate.of(2018, 10, 1));
        
        // Add sample members
        addMember("M001", "Alice Johnson", "alice@email.com");
        addMember("M002", "Bob Smith", "bob@email.com");
        addMember("M003", "Charlie Brown", "charlie@email.com");
    }
    
    public void addBook(String isbn, String title, String author, String category, LocalDate publishDate) {
        Book book = new Book(isbn, title, author, category, publishDate);
        books.put(isbn, book);
        System.out.println("Book added: " + book.getTitle());
    }
    
    public void addMember(String memberId, String name, String email) {
        Member member = new Member(memberId, name, email);
        members.put(memberId, member);
        System.out.println("Member added: " + member.getName());
    }
    
    public void borrowBook(String isbn, String memberId) {
        Book book = books.get(isbn);
        Member member = members.get(memberId);
        
        if (book == null) {
            System.out.println("Book not found!");
            return;
        }
        
        if (member == null) {
            System.out.println("Member not found!");
            return;
        }
        
        if (!book.isAvailable()) {
            System.out.println("Book is already borrowed!");
            return;
        }
        
        if (member.getBorrowedCount() >= 3) {
            System.out.println("Member has reached borrowing limit (3 books)!");
            return;
        }
        
        book.setAvailable(false);
        member.borrowBook(isbn);
        borrowRecords.put(isbn, memberId);
        
        System.out.printf("Book '%s' borrowed by %s%n", book.getTitle(), member.getName());
    }
    
    public void returnBook(String isbn) {
        Book book = books.get(isbn);
        
        if (book == null) {
            System.out.println("Book not found!");
            return;
        }
        
        if (book.isAvailable()) {
            System.out.println("Book is not currently borrowed!");
            return;
        }
        
        String memberId = borrowRecords.get(isbn);
        Member member = members.get(memberId);
        
        book.setAvailable(true);
        member.returnBook(isbn);
        borrowRecords.remove(isbn);
        
        System.out.printf("Book '%s' returned by %s%n", book.getTitle(), member.getName());
    }
    
    public void searchBooks(String query) {
        System.out.println("\\nSearch Results:");
        boolean found = false;
        
        for (Book book : books.values()) {
            if (book.getTitle().toLowerCase().contains(query.toLowerCase()) ||
                book.getAuthor().toLowerCase().contains(query.toLowerCase()) ||
                book.getCategory().toLowerCase().contains(query.toLowerCase())) {
                
                System.out.printf("[%s] %s by %s (%s) - %s%n",
                    book.getIsbn(),
                    book.getTitle(),
                    book.getAuthor(),
                    book.getCategory(),
                    book.isAvailable() ? "Available" : "Borrowed");
                found = true;
            }
        }
        
        if (!found) {
            System.out.println("No books found matching: " + query);
        }
    }
    
    public void displayAllBooks() {
        System.out.println("\\n=== All Books ===");
        if (books.isEmpty()) {
            System.out.println("No books in library.");
            return;
        }
        
        books.values().forEach(book -> {
            System.out.printf("[%s] %s by %s - %s%n",
                book.getIsbn(),
                book.getTitle(),
                book.getAuthor(),
                book.isAvailable() ? "Available" : "Borrowed");
        });
    }
    
    public void displayAllMembers() {
        System.out.println("\\n=== All Members ===");
        if (members.isEmpty()) {
            System.out.println("No members registered.");
            return;
        }
        
        members.values().forEach(System.out::println);
    }
    
    public void displayStatistics() {
        System.out.println("\\n=== Library Statistics ===");
        System.out.println("Total Books: " + books.size());
        System.out.println("Total Members: " + members.size());
        
        long availableBooks = books.values().stream().filter(Book::isAvailable).count();
        long borrowedBooks = books.size() - availableBooks;
        
        System.out.println("Available Books: " + availableBooks);
        System.out.println("Borrowed Books: " + borrowedBooks);
        
        // Most popular category
        Map<String, Long> categoryCount = books.values().stream()
            .collect(Collectors.groupingBy(Book::getCategory, Collectors.counting()));
            
        categoryCount.entrySet().stream()
            .max(Map.Entry.comparingByValue())
            .ifPresent(entry -> 
                System.out.println("Most Popular Category: " + entry.getKey() + " (" + entry.getValue() + " books)"));
    }
    
    public void showMenu() {
        System.out.println("\\n=== Library Management System ===");
        System.out.println("1. Add Book");
        System.out.println("2. Add Member");
        System.out.println("3. Borrow Book");
        System.out.println("4. Return Book");
        System.out.println("5. Search Books");
        System.out.println("6. Display All Books");
        System.out.println("7. Display All Members");
        System.out.println("8. Show Statistics");
        System.out.println("9. Exit");
        System.out.print("Choose an option: ");
    }
    
    public void run() {
        System.out.println("Welcome to Library Management System!");
        
        while (true) {
            showMenu();
            
            try {
                int choice = scanner.nextInt();
                scanner.nextLine(); // Consume newline
                
                switch (choice) {
                    case 1:
                        System.out.print("Enter ISBN: ");
                        String isbn = scanner.nextLine();
                        System.out.print("Enter Title: ");
                        String title = scanner.nextLine();
                        System.out.print("Enter Author: ");
                        String author = scanner.nextLine();
                        System.out.print("Enter Category: ");
                        String category = scanner.nextLine();
                        addBook(isbn, title, author, category, LocalDate.now());
                        break;
                        
                    case 2:
                        System.out.print("Enter Member ID: ");
                        String memberId = scanner.nextLine();
                        System.out.print("Enter Name: ");
                        String name = scanner.nextLine();
                        System.out.print("Enter Email: ");
                        String email = scanner.nextLine();
                        addMember(memberId, name, email);
                        break;
                        
                    case 3:
                        System.out.print("Enter ISBN to borrow: ");
                        String borrowIsbn = scanner.nextLine();
                        System.out.print("Enter Member ID: ");
                        String borrowMemberId = scanner.nextLine();
                        borrowBook(borrowIsbn, borrowMemberId);
                        break;
                        
                    case 4:
                        System.out.print("Enter ISBN to return: ");
                        String returnIsbn = scanner.nextLine();
                        returnBook(returnIsbn);
                        break;
                        
                    case 5:
                        System.out.print("Enter search query: ");
                        String query = scanner.nextLine();
                        searchBooks(query);
                        break;
                        
                    case 6:
                        displayAllBooks();
                        break;
                        
                    case 7:
                        displayAllMembers();
                        break;
                        
                    case 8:
                        displayStatistics();
                        break;
                        
                    case 9:
                        System.out.println("Thank you for using Library Management System!");
                        return;
                        
                    default:
                        System.out.println("Invalid option! Please try again.");
                }
            } catch (InputMismatchException e) {
                System.out.println("Invalid input! Please enter a number.");
                scanner.nextLine(); // Clear invalid input
            }
        }
    }
    
    public static void main(String[] args) {
        LibraryManagementSystem library = new LibraryManagementSystem();
        library.run();
    }
}`,
            explanation: "Complete Library Management System project demonstrating all Java concepts: OOP, collections, exception handling, stream API, and interactive console application."
          }
        ]
      },
      {
        week: 2,
        title: "Object-Oriented Programming Fundamentals",
        topics: [
          "Classes and objects concepts",
          "Constructors and method overloading",
          "Encapsulation and access modifiers",
          "Inheritance and polymorphism",
          "Abstract classes and interfaces"
        ],
        practicals: [
          "Design class hierarchies",
          "Implement inheritance examples",
          "Create polymorphic applications"
        ],
        projects: [
          {
            title: "Project 1: Student Grade Management System",
            description: "Build a comprehensive system to manage student grades with OOP principles",
            features: [
              "Student class with encapsulation",
              "Grade calculation and validation",
              "Multiple inheritance examples",
              "Polymorphic method implementations",
              "File-based data persistence"
            ],
            technologies: ["Core Java", "OOP Concepts", "File I/O"],
            difficulty: "Beginner",
            duration: "3-4 hours"
          }
        ]
      },
      {
        week: 3,
        title: "Exception Handling and File Operations",
        topics: [
          "Exception hierarchy in Java",
          "Try-catch-finally blocks",
          "Custom exception creation",
          "File reading and writing",
          "Serialization concepts"
        ],
        practicals: [
          "Handle various exception types",
          "Create custom exceptions",
          "Build file processing applications"
        ],
        projects: [
          {
            title: "Project 2: Banking System with Transaction Logging",
            description: "Create a robust banking system with comprehensive error handling and transaction logging",
            features: [
              "Account management with validation",
              "Transaction processing with error handling",
              "Custom exceptions for banking operations",
              "File-based transaction logging",
              "Data backup and recovery system"
            ],
            technologies: ["Exception Handling", "File I/O", "Serialization"],
            difficulty: "Intermediate",
            duration: "4-5 hours"
          }
        ]
      },
      {
        week: 4,
        title: "Collections Framework and Data Structures",
        topics: [
          "List, Set, Map interfaces",
          "ArrayList, LinkedList, HashMap",
          "Iterator and enhanced for loops",
          "Collections utility methods",
          "Comparable and Comparator interfaces"
        ],
        practicals: [
          "Implement various collection types",
          "Create custom sorting algorithms",
          "Build collection-based applications"
        ],
        projects: [
          {
            title: "Project 3: Employee Management System",
            description: "Comprehensive employee management using collections framework with advanced sorting and filtering",
            features: [
              "Employee data management with HashMap",
              "Department-wise organization using TreeMap",
              "Custom sorting with Comparator",
              "Advanced search and filter functionality",
              "Statistical reporting and analytics"
            ],
            technologies: ["Collections Framework", "Lambda Expressions", "Stream API"],
            difficulty: "Intermediate",
            duration: "5-6 hours"
          }
        ]
      },
      {
        week: 5,
        title: "GUI Development with Swing",
        topics: [
          "Swing components and layouts",
          "Event handling mechanisms",
          "Creating interactive interfaces",
          "Menu systems and dialogs",
          "Custom component development"
        ],
        practicals: [
          "Build desktop applications",
          "Create interactive forms",
          "Implement event-driven programming"
        ],
        projects: [
          {
            title: "Project 4: Calculator with Scientific Functions",
            description: "Build a fully functional GUI calculator with basic and scientific operations",
            features: [
              "Interactive button-based interface",
              "Basic arithmetic operations",
              "Scientific functions (sin, cos, tan, log)",
              "Memory operations (M+, M-, MR, MC)",
              "History tracking and display"
            ],
            technologies: ["Java Swing", "Event Handling", "GUI Design"],
            difficulty: "Intermediate",
            duration: "6-7 hours"
          }
        ]
      },
      {
        week: 6,
        title: "Database Connectivity and JDBC",
        topics: [
          "JDBC fundamentals",
          "Database connection management",
          "PreparedStatement and ResultSet",
          "Transaction management",
          "Connection pooling basics"
        ],
        practicals: [
          "Connect to databases",
          "Perform CRUD operations",
          "Handle database transactions"
        ],
        projects: [
          {
            title: "Project 5: Inventory Management System",
            description: "Complete inventory system with database integration and real-time stock management",
            features: [
              "Product catalog with database storage",
              "Real-time inventory tracking",
              "Supplier and customer management",
              "Sales and purchase order processing",
              "Automated low-stock alerts"
            ],
            technologies: ["JDBC", "MySQL/PostgreSQL", "Database Design"],
            difficulty: "Advanced",
            duration: "8-10 hours"
          }
        ]
      },
      {
        week: 7,
        title: "Multithreading and Concurrency",
        topics: [
          "Thread creation and lifecycle",
          "Synchronization mechanisms",
          "Thread communication",
          "Executor framework",
          "Concurrent collections"
        ],
        practicals: [
          "Create multi-threaded applications",
          "Implement thread synchronization",
          "Build concurrent processing systems"
        ],
        projects: [
          {
            title: "Project 6: Multi-threaded File Downloader",
            description: "Build a concurrent file downloader with progress tracking and thread management",
            features: [
              "Parallel file downloading with multiple threads",
              "Real-time progress tracking for each download",
              "Thread pool management and optimization",
              "Download queue with priority handling",
              "Pause, resume, and cancel functionality"
            ],
            technologies: ["Multithreading", "Executor Framework", "Concurrent Collections"],
            difficulty: "Advanced",
            duration: "7-8 hours"
          }
        ]
      },
      {
        week: 8,
        title: "Network Programming and APIs",
        topics: [
          "Socket programming basics",
          "Client-server architecture",
          "HTTP client implementation",
          "RESTful API consumption",
          "JSON parsing and processing"
        ],
        practicals: [
          "Build client-server applications",
          "Consume REST APIs",
          "Create network-based systems"
        ],
        projects: [
          {
            title: "Project 7: Chat Application with Server",
            description: "Real-time chat application with client-server architecture and multiple user support",
            features: [
              "Multi-client chat server implementation",
              "Real-time message broadcasting",
              "User authentication and session management",
              "Private messaging functionality",
              "Chat history and message persistence"
            ],
            technologies: ["Socket Programming", "Multithreading", "Network Protocols"],
            difficulty: "Advanced",
            duration: "10-12 hours"
          }
        ]
      },
      {
        week: 9,
        title: "Advanced Java Features and Frameworks",
        topics: [
          "Lambda expressions and functional programming",
          "Stream API and parallel processing",
          "Optional class and null safety",
          "Date and Time API",
          "Reflection and annotations"
        ],
        practicals: [
          "Implement functional programming concepts",
          "Use advanced Java 8+ features",
          "Build modern Java applications"
        ],
        projects: [
          {
            title: "Project 8: E-commerce Order Processing System",
            description: "Complete e-commerce backend with modern Java features, payment processing, and order management",
            features: [
              "Product catalog with search and filtering",
              "Shopping cart with session management",
              "Order processing with payment integration",
              "User account management and authentication",
              "Admin dashboard with sales analytics",
              "Email notifications and order tracking"
            ],
            technologies: ["Stream API", "Lambda Expressions", "Modern Java Features", "Design Patterns"],
            difficulty: "Expert",
            duration: "15-20 hours"
          }
        ]
      },
      {
        week: 10,
        title: "Java 8+ Features and Best Practices",
        topics: [
          "JVM internals and memory management",
          "Lambda expressions and functional interfaces",
          "Stream API and parallel streams",
          "Optional and null safety",
          "Modern Date/Time API",
          "Best practices for clean code and performance"
        ],
        practicals: [
          "Analyze JVM memory usage",
          "Write code using lambdas and streams",
          "Refactor legacy code to use Java 8+ features"
        ],
        projects: [
          {
            title: "Project 9: Java Modernization Toolkit",
            description: "Refactor a legacy Java application to use Java 8+ features and best practices",
            features: [
              "Replace loops with streams",
              "Use Optional for null safety",
              "Implement new Date/Time API",
              "Profile and optimize memory usage",
              "Document and test modernized code"
            ],
            technologies: ["Java 8+", "Streams", "Optional", "Date/Time API"],
            difficulty: "Advanced",
            duration: "6-8 hours"
          }
        ]
      }
    ],
    features: [
      "72 comprehensive lessons",
      "8 hands-on programming projects",
      "Interactive coding exercises",
      "Complete Library Management System project",
      "Algorithm analysis and implementation",
      "GUI development with Swing",
      "Database integration with JDBC",
      "Multithreading and network programming",
      "Lifetime access to content",
      "Community support",
      "PDF downloads and resources"
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
          <div className="flex flex-wrap gap-4 mb-6">
            {courseDetails.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-lg text-sm">
                <FaFileAlt className="text-secondary" />
                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
          <button
            className="mb-4 px-4 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-secondary transition-colors"
            onClick={() => setShowTheory((v) => !v)}
          >
            {showTheory ? 'Hide' : 'Show'} Java Theory & Key Features
          </button>
          {showTheory && (
            <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-6 mb-4">
              <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-2">Java Theory & Key Features</h2>
              <ul className="list-disc ml-6 mb-4 text-blue-900 dark:text-blue-100">
                {courseDetails.introduction.keyFeatures.map((feature, i) => (
                  <li key={i} className="mb-1">{feature}</li>
                ))}
              </ul>
              <button
                className="mt-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
                onClick={() => setShowAdvanced((v) => !v)}
              >
                {showAdvanced ? 'Hide' : 'Show'} Advanced Theory (JVM, Memory, Java 8+)
              </button>
              {showAdvanced && (
                <div className="mt-4 space-y-4">
                  <div>
                    <h3 className="font-semibold text-blue-700 dark:text-blue-200 mb-1">JVM Internals</h3>
                    <pre className="bg-gray-900 text-gray-100 rounded p-3 text-xs overflow-x-auto">
                      {courseDetails.introduction.advancedTheory.jvm}
                    </pre>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-700 dark:text-blue-200 mb-1">Memory Management</h3>
                    <pre className="bg-gray-900 text-gray-100 rounded p-3 text-xs overflow-x-auto">
                      {courseDetails.introduction.advancedTheory.memory}
                    </pre>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-700 dark:text-blue-200 mb-1">Java 8+ Features</h3>
                    <pre className="bg-gray-900 text-gray-100 rounded p-3 text-xs overflow-x-auto">
                      {courseDetails.introduction.advancedTheory.java8}
                    </pre>
                  </div>
                </div>
              )}
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
        >
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex space-x-8 px-8 overflow-x-auto">
              <button 
                onClick={() => setActiveTab('syllabus')}
                className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === 'syllabus' 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <FaBook />
                Syllabus
              </button>
              <button 
                onClick={() => setActiveTab('allcode')}
                className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === 'allcode' 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <FaCode />
                All Code Examples
              </button>
              <button 
                onClick={() => setActiveTab('algorithms')}
                className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === 'algorithms' 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <FaCogs />
                Algorithms
              </button>
              <button 
                onClick={() => setActiveTab('flowcharts')}
                className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === 'flowcharts' 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <FaProjectDiagram />
                Flowcharts
              </button>
              <button 
                onClick={() => setActiveTab('project')}
                className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === 'project' 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <FaLaptopCode />
                Project
              </button>
              <button 
                onClick={() => setActiveTab('download')}
                className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === 'download' 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <FaDownload />
                Download PDF
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
            
            {activeTab === 'allcode' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">All Java Code Examples</h2>
                  <p className="text-gray-600 dark:text-gray-300">Browse and copy every code example from this course, organized for easy access.</p>
                </div>
                {/* Syllabus Examples */}
                {courseDetails.syllabus.map((week, weekIndex) => (
                  week.examples && week.examples.map((example, exampleIndex) => (
                    <motion.div
                      key={`syllabus-${weekIndex}-${exampleIndex}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                    >
                      <div className="bg-gray-50 dark:bg-gray-700 p-4 flex items-center gap-3">
                        <FaCode className="text-primary" />
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {example.title} <span className="text-xs text-gray-400 ml-2">(Week {week.week})</span>
                        </h4>
                      </div>
                      <div className="p-4">
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          {example.explanation}
                        </p>
                        <div className="bg-gray-900 rounded-lg overflow-hidden">
                          <div className="flex items-center justify-between bg-gray-800 px-4 py-2">
                            <span className="text-gray-300 text-sm font-mono">Java Code</span>
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
                    </motion.div>
                  ))
                ))}
                {/* Extra Examples */}
                {courseDetails.introduction.extraExamples && courseDetails.introduction.extraExamples.map((example, idx) => (
                  <motion.div
                    key={`extra-${idx}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                  >
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 flex items-center gap-3">
                      <FaCode className="text-primary" />
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {example.title} <span className="text-xs text-gray-400 ml-2">(Advanced)</span>
                      </h4>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {example.explanation}
                      </p>
                      <div className="bg-gray-900 rounded-lg overflow-hidden">
                        <div className="flex items-center justify-between bg-gray-800 px-4 py-2">
                          <span className="text-gray-300 text-sm font-mono">Java Code</span>
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
                  </motion.div>
                ))}
              </div>
            )}
            
            {activeTab === 'algorithms' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Java Algorithm Analysis</h2>
                  <p className="text-gray-600 dark:text-gray-300">Master fundamental algorithms with detailed explanations and complexity analysis</p>
                </div>
                
                {Object.entries(courseDetails.introduction.algorithms).map(([key, algorithm]) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-6"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{algorithm.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">{algorithm.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Algorithm Steps:</h4>
                        <ol className="space-y-2">
                          {algorithm.steps.map((step, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                                {index + 1}
                              </span>
                              <span className="text-gray-600 dark:text-gray-300 text-sm">{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Complexity Analysis:</h4>
                        <div className="space-y-3">
                          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                            <div className="font-medium text-gray-800 dark:text-gray-200">Time Complexity:</div>
                            <div className="text-gray-600 dark:text-gray-300 text-sm">{algorithm.timeComplexity}</div>
                          </div>
                          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                            <div className="font-medium text-gray-800 dark:text-gray-200">Space Complexity:</div>
                            <div className="text-gray-600 dark:text-gray-300 text-sm">{algorithm.spaceComplexity}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
            
            {activeTab === 'flowcharts' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Java Programming Flowcharts</h2>
                  <p className="text-gray-600 dark:text-gray-300">Visual representation of Java concepts and program flow</p>
                </div>
                
                {Object.entries(courseDetails.introduction.flowcharts).map(([key, flowchart]) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-6"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{flowchart.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">{flowchart.description}</p>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center">Process Flow:</h4>
                      <div className="flex flex-col items-center space-y-4">
                        {flowchart.steps.map((step, index) => (
                          <div key={index} className="flex flex-col items-center">
                            <div className={`px-4 py-2 rounded-lg text-center min-w-[200px] ${
                              step.includes('?') || step.includes('Diamond') 
                                ? 'bg-yellow-100 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-100 transform rotate-45' 
                                : step === 'START' || step === 'END'
                                ? 'bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 rounded-full'
                                : 'bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-100'
                            }`}>
                              <span className={step.includes('?') || step.includes('Diamond') ? 'transform -rotate-45 block' : ''}>
                                {step}
                              </span>
                            </div>
                            {index < flowchart.steps.length - 1 && (
                              <div className="w-0.5 h-8 bg-gray-400 dark:bg-gray-500"></div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
            
            {activeTab === 'project' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">8 Hands-on Programming Projects</h2>
                  <p className="text-gray-600 dark:text-gray-300">Progressive projects from beginner to expert level covering all Java concepts</p>
                </div>
                
                <div className="grid gap-6">
                  {courseDetails.syllabus.filter(week => week.projects).map((week, weekIndex) => 
                    week.projects.map((project, projectIndex) => (
                      <motion.div
                        key={`${weekIndex}-${projectIndex}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: projectIndex * 0.1 }}
                        className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-6 border border-blue-200 dark:border-gray-600"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                project.difficulty === 'Beginner' ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100' :
                                project.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100' :
                                project.difficulty === 'Advanced' ? 'bg-orange-100 text-orange-800 dark:bg-orange-800 dark:text-orange-100' :
                                'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'
                              }`}>
                                {project.difficulty}
                              </span>
                              <span className="text-sm text-gray-500 dark:text-gray-400">{project.duration}</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Key Features:</h4>
                            <ul className="space-y-2">
                              {project.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-start gap-2">
                                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                                  <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Technologies Used:</h4>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className="px-2 py-1 bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 rounded text-xs">
                                  {tech}
                                </span>
                              ))}
                            </div>
                            
                            <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Week {week.week} Project</div>
                              <div className="font-medium text-gray-800 dark:text-gray-200">{week.title}</div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))
                  )}
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project Progression Path</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Our 8 projects are carefully designed to build upon each other, taking you from basic Java concepts to advanced enterprise-level applications.
                  </p>
                  
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2 font-bold text-lg">
                        2
                      </div>
                      <div className="text-sm font-medium text-gray-800 dark:text-gray-200">Beginner Projects</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Basic OOP & Syntax</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-yellow-100 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2 font-bold text-lg">
                        3
                      </div>
                      <div className="text-sm font-medium text-gray-800 dark:text-gray-200">Intermediate Projects</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Collections & GUI</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-orange-100 dark:bg-orange-800 text-orange-800 dark:text-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2 font-bold text-lg">
                        2
                      </div>
                      <div className="text-sm font-medium text-gray-800 dark:text-gray-200">Advanced Projects</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Database & Threading</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-red-100 dark:bg-red-800 text-red-800 dark:text-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2 font-bold text-lg">
                        1
                      </div>
                      <div className="text-sm font-medium text-gray-800 dark:text-gray-200">Expert Project</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Full-Stack System</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-6">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">🎯 Complete Learning Journey:</h4>
                  <p className="text-green-700 dark:text-green-300 text-sm mb-4">
                    By completing all 8 projects, you'll have hands-on experience with every major Java concept 
                    and be ready to build enterprise-level applications from scratch.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <div className="font-medium text-green-800 dark:text-green-200 text-sm">Core Java Skills:</div>
                      <ul className="text-green-700 dark:text-green-300 text-sm mt-1">
                        <li>• Object-Oriented Programming</li>
                        <li>• Exception Handling</li>
                        <li>• Collections Framework</li>
                        <li>• File I/O Operations</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-medium text-green-800 dark:text-green-200 text-sm">Advanced Concepts:</div>
                      <ul className="text-green-700 dark:text-green-300 text-sm mt-1">
                        <li>• GUI Development</li>
                        <li>• Database Integration</li>
                        <li>• Multithreading</li>
                        <li>• Network Programming</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-medium text-green-800 dark:text-green-200 text-sm">Professional Skills:</div>
                      <ul className="text-green-700 dark:text-green-300 text-sm mt-1">
                        <li>• System Architecture</li>
                        <li>• Code Organization</li>
                        <li>• Testing & Debugging</li>
                        <li>• Documentation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'download' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Download Java Resources</h2>
                  <p className="text-gray-600 dark:text-gray-300">Comprehensive PDF guides, code examples, and reference materials</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-6"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <FaFileAlt className="text-red-500 text-3xl" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Complete Java Course</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Full curriculum with examples</p>
                      </div>
                    </div>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                        12 weeks of structured content
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                        60+ code examples with explanations
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                        Complete Library Management project
                      </li>
                    </ul>
                    <button 
                      onClick={() => window.open('#', '_blank')}
                      className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <FaDownload />
                      Download PDF (4.2 MB)
                    </button>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-6"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <FaCogs className="text-blue-500 text-3xl" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Algorithms & Data Structures</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Advanced concepts guide</p>
                      </div>
                    </div>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        Sorting and searching algorithms
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        Time and space complexity analysis
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        Implementation examples in Java
                      </li>
                    </ul>
                    <button 
                      onClick={() => window.open('#', '_blank')}
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <FaDownload />
                      Download PDF (2.8 MB)
                    </button>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-6"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <FaProjectDiagram className="text-green-500 text-3xl" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">OOP & Design Patterns</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Advanced Java concepts</p>
                      </div>
                    </div>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                        Inheritance and polymorphism
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                        Design patterns implementation
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                        Best practices and conventions
                      </li>
                    </ul>
                    <button 
                      onClick={() => window.open('#', '_blank')}
                      className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <FaDownload />
                      Download PDF (3.1 MB)
                    </button>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-6"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <FaLaptopCode className="text-purple-500 text-3xl" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Complete Project Source</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Library Management System</p>
                      </div>
                    </div>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                        Complete source code with comments
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                        Setup and installation guide
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                        Extension ideas and challenges
                      </li>
                    </ul>
                    <button 
                      onClick={() => window.open('#', '_blank')}
                      className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <FaDownload />
                      Download ZIP (5.4 MB)
                    </button>
                  </motion.div>
                </div>
                
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">📚 Study Guide:</h4>
                  <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                    All materials are designed to complement each other. Start with the complete course PDF, 
                    practice with code examples, understand algorithms, and finally build the complete project. 
                    Regular updates ensure you always have the latest Java best practices.
                  </p>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default JavaProgramming;