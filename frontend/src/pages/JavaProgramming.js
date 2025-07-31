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
      overview: "Java is a powerful, object-oriented programming language developed by Sun Microsystems (now Oracle). It follows the principle of 'Write Once, Run Anywhere' (WORA), making it platform-independent through the Java Virtual Machine (JVM).",
      keyFeatures: [
        "Platform Independence - Java bytecode runs on any system with JVM",
        "Object-Oriented - Everything in Java is an object (except primitives)",
        "Memory Management - Automatic garbage collection",
        "Strong Type System - Compile-time type checking",
        "Rich API - Extensive standard library",
        "Multithreading - Built-in support for concurrent programming",
        "Security - Built-in security features and sandboxing",
        "Enterprise Ready - Robust for large-scale applications",
        "JVM Internals - Class loading, Just-In-Time (JIT) compilation, and memory areas (Heap, Stack, Method Area, etc.)",
        "Java 8+ Features - Lambdas, Streams, Optional, new Date/Time API, default methods in interfaces"
      ],
      advancedTheory: {
        jvm: `// JVM Internals
// The Java Virtual Machine (JVM) is responsible for running Java bytecode. Key components include:
// - Class Loader: Loads .class files into memory
// - Bytecode Verifier: Ensures code safety and integrity
// - Runtime Data Areas: Heap (objects), Stack (method calls, local vars), Method Area (class metadata), PC Register, Native Method Stack
// - Execution Engine: Interprets or JIT-compiles bytecode to native machine code
// - Garbage Collector: Automatically reclaims unused memory
`,
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