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