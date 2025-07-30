import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaArrowLeft,
  FaCogs,
  FaClipboardList,
  FaFileAlt,
  FaBook,
  FaUsers,
  FaCode,
  FaPlay,
  FaCopy,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa';

const JavaProgramming = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('syllabus');
  const [expandedExample, setExpandedExample] = useState(null);

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
        "Enterprise Ready - Robust for large-scale applications"
      ],
      syntax: {
        basic: `// Java Basic Syntax Overview

// 1. Class Declaration
public class MyClass {
    // Class body
}

// 2. Variables and Data Types
int number = 42;              // Integer
double price = 19.99;         // Floating point
char grade = 'A';             // Character
boolean isActive = true;      // Boolean
String name = "Java";         // String (object)

// 3. Arrays
int[] numbers = {1, 2, 3, 4, 5};
String[] names = new String[3];

// 4. Control Structures
if (condition) {
    // if block
} else if (anotherCondition) {
    // else if block
} else {
    // else block
}

// 5. Loops
for (int i = 0; i < 10; i++) {
    // for loop
}

while (condition) {
    // while loop
}

// 6. Methods
public static returnType methodName(parameters) {
    // method body
    return value; // if not void
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
            title: "Interactive Console Application",
            code: `import java.util.Scanner;
import java.util.InputMismatchException;

public class InteractiveCalculator {
    private static Scanner scanner = new Scanner(System.in);
    
    public static void main(String[] args) {
        System.out.println("==================================");
        System.out.println("   INTERACTIVE JAVA CALCULATOR   ");
        System.out.println("==================================");
        
        boolean continueCalculating = true;
        
        while (continueCalculating) {
            try {
                displayMenu();
                int choice = getIntInput("Enter your choice (1-6): ");
                
                switch (choice) {
                    case 1:
                        performBasicArithmetic();
                        break;
                    case 2:
                        performAdvancedOperations();
                        break;
                    case 3:
                        performArrayOperations();
                        break;
                    case 4:
                        performStringOperations();
                        break;
                    case 5:
                        performConversions();
                        break;
                    case 6:
                        System.out.println("Thank you for using Java Calculator!");
                        continueCalculating = false;
                        break;
                    default:
                        System.out.println("Invalid choice! Please select 1-6.");
                }
                
                if (continueCalculating) {
                    System.out.println("\\nPress Enter to continue...");
                    scanner.nextLine();
                    clearScreen();
                }
                
            } catch (Exception e) {
                System.out.println("An error occurred: " + e.getMessage());
                scanner.nextLine(); // Clear invalid input
            }
        }
        
        scanner.close();
    }
    
    private static void displayMenu() {
        System.out.println("\\n📋 MAIN MENU:");
        System.out.println("1. ➕ Basic Arithmetic Operations");
        System.out.println("2. 🔢 Advanced Mathematical Operations");
        System.out.println("3. 📊 Array Operations");
        System.out.println("4. 📝 String Operations");
        System.out.println("5. 🔄 Unit Conversions");
        System.out.println("6. 🚪 Exit");
        System.out.println("-".repeat(40));
    }
    
    private static void performBasicArithmetic() {
        System.out.println("\\n➕ BASIC ARITHMETIC OPERATIONS");
        
        double num1 = getDoubleInput("Enter first number: ");
        double num2 = getDoubleInput("Enter second number: ");
        
        System.out.println("\\nResults:");
        System.out.printf("%.2f + %.2f = %.2f%n", num1, num2, (num1 + num2));
        System.out.printf("%.2f - %.2f = %.2f%n", num1, num2, (num1 - num2));
        System.out.printf("%.2f × %.2f = %.2f%n", num1, num2, (num1 * num2));
        
        if (num2 != 0) {
            System.out.printf("%.2f ÷ %.2f = %.2f%n", num1, num2, (num1 / num2));
            System.out.printf("%.2f %% %.2f = %.2f%n", num1, num2, (num1 % num2));
        } else {
            System.out.println("Division by zero is not allowed!");
        }
    }
    
    private static void performAdvancedOperations() {
        System.out.println("\\n🔢 ADVANCED MATHEMATICAL OPERATIONS");
        
        double number = getDoubleInput("Enter a number: ");
        
        System.out.println("\\nResults:");
        System.out.printf("Square root of %.2f = %.2f%n", number, Math.sqrt(number));
        System.out.printf("%.2f squared = %.2f%n", number, Math.pow(number, 2));
        System.out.printf("%.2f cubed = %.2f%n", number, Math.pow(number, 3));
        System.out.printf("Absolute value of %.2f = %.2f%n", number, Math.abs(number));
        System.out.printf("Ceiling of %.2f = %.0f%n", number, Math.ceil(number));
        System.out.printf("Floor of %.2f = %.0f%n", number, Math.floor(number));
        
        // Trigonometric functions (in radians)
        System.out.printf("sin(%.2f) = %.4f%n", number, Math.sin(number));
        System.out.printf("cos(%.2f) = %.4f%n", number, Math.cos(number));
        System.out.printf("tan(%.2f) = %.4f%n", number, Math.tan(number));
    }
    
    private static void performArrayOperations() {
        System.out.println("\\n📊 ARRAY OPERATIONS");
        
        int size = getIntInput("Enter array size: ");
        int[] numbers = new int[size];
        
        // Input array elements
        System.out.println("Enter " + size + " numbers:");
        for (int i = 0; i < size; i++) {
            numbers[i] = getIntInput("Number " + (i + 1) + ": ");
        }
        
        // Display array
        System.out.print("\\nArray: [");
        for (int i = 0; i < numbers.length; i++) {
            System.out.print(numbers[i]);
            if (i < numbers.length - 1) System.out.print(", ");
        }
        System.out.println("]");
        
        // Calculate statistics
        int sum = 0, min = numbers[0], max = numbers[0];
        for (int num : numbers) {
            sum += num;
            if (num < min) min = num;
            if (num > max) max = num;
        }
        
        double average = (double) sum / numbers.length;
        
        System.out.println("\\nStatistics:");
        System.out.println("Sum: " + sum);
        System.out.printf("Average: %.2f%n", average);
        System.out.println("Minimum: " + min);
        System.out.println("Maximum: " + max);
        System.out.println("Range: " + (max - min));
    }
    
    private static void performStringOperations() {
        System.out.println("\\n📝 STRING OPERATIONS");
        
        System.out.print("Enter a text string: ");
        String text = scanner.nextLine();
        
        System.out.println("\\nString Analysis:");
        System.out.println("Original: \"" + text + "\"");
        System.out.println("Length: " + text.length());
        System.out.println("Uppercase: \"" + text.toUpperCase() + "\"");
        System.out.println("Lowercase: \"" + text.toLowerCase() + "\"");
        System.out.println("Reversed: \"" + reverseString(text) + "\"");
        System.out.println("Word count: " + countWords(text));
        System.out.println("Vowel count: " + countVowels(text));
        System.out.println("Is palindrome: " + isPalindrome(text));
    }
    
    private static void performConversions() {
        System.out.println("\\n🔄 UNIT CONVERSIONS");
        System.out.println("1. Temperature (Celsius ↔ Fahrenheit)");
        System.out.println("2. Length (Meters ↔ Feet)");
        System.out.println("3. Weight (Kilograms ↔ Pounds)");
        
        int choice = getIntInput("Choose conversion type (1-3): ");
        
        switch (choice) {
            case 1:
                double temp = getDoubleInput("Enter temperature: ");
                String unit = getStringInput("Enter unit (C/F): ").toUpperCase();
                
                if (unit.equals("C")) {
                    double fahrenheit = (temp * 9/5) + 32;
                    System.out.printf("%.2f°C = %.2f°F%n", temp, fahrenheit);
                } else if (unit.equals("F")) {
                    double celsius = (temp - 32) * 5/9;
                    System.out.printf("%.2f°F = %.2f°C%n", temp, celsius);
                } else {
                    System.out.println("Invalid unit! Use C or F.");
                }
                break;
                
            case 2:
                double length = getDoubleInput("Enter length: ");
                String lengthUnit = getStringInput("Enter unit (M/F): ").toUpperCase();
                
                if (lengthUnit.equals("M")) {
                    double feet = length * 3.28084;
                    System.out.printf("%.2f meters = %.2f feet%n", length, feet);
                } else if (lengthUnit.equals("F")) {
                    double meters = length / 3.28084;
                    System.out.printf("%.2f feet = %.2f meters%n", length, meters);
                } else {
                    System.out.println("Invalid unit! Use M or F.");
                }
                break;
                
            case 3:
                double weight = getDoubleInput("Enter weight: ");
                String weightUnit = getStringInput("Enter unit (K/P): ").toUpperCase();
                
                if (weightUnit.equals("K")) {
                    double pounds = weight * 2.20462;
                    System.out.printf("%.2f kg = %.2f lbs%n", weight, pounds);
                } else if (weightUnit.equals("P")) {
                    double kilograms = weight / 2.20462;
                    System.out.printf("%.2f lbs = %.2f kg%n", weight, kilograms);
                } else {
                    System.out.println("Invalid unit! Use K or P.");
                }
                break;
                
            default:
                System.out.println("Invalid choice!");
        }
    }
    
    // Utility methods
    private static int getIntInput(String prompt) {
        while (true) {
            try {
                System.out.print(prompt);
                return scanner.nextInt();
            } catch (InputMismatchException e) {
                System.out.println("Invalid input! Please enter a valid integer.");
                scanner.nextLine(); // Clear invalid input
            }
        }
    }
    
    private static double getDoubleInput(String prompt) {
        while (true) {
            try {
                System.out.print(prompt);
                return scanner.nextDouble();
            } catch (InputMismatchException e) {
                System.out.println("Invalid input! Please enter a valid number.");
                scanner.nextLine(); // Clear invalid input
            }
        }
    }
    
    private static String getStringInput(String prompt) {
        System.out.print(prompt);
        return scanner.nextLine();
    }
    
    private static String reverseString(String str) {
        StringBuilder reversed = new StringBuilder();
        for (int i = str.length() - 1; i >= 0; i--) {
            reversed.append(str.charAt(i));
        }
        return reversed.toString();
    }
    
    private static int countWords(String str) {
        if (str.trim().isEmpty()) return 0;
        return str.trim().split("\\s+").length;
    }
    
    private static int countVowels(String str) {
        int count = 0;
        String vowels = "aeiouAEIOU";
        for (char c : str.toCharArray()) {
            if (vowels.indexOf(c) != -1) {
                count++;
            }
        }
        return count;
    }
    
    private static boolean isPalindrome(String str) {
        String cleaned = str.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
        return cleaned.equals(reverseString(cleaned));
    }
    
    private static void clearScreen() {
        // Simple way to create space (works in most terminals)
        for (int i = 0; i < 2; i++) {
            System.out.println();
        }
    }
}`,
            explanation: "Complete interactive console application demonstrating user input, exception handling, menu systems, and various Java programming concepts in a practical calculator program."
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
          "Instance vs static members",
          "this keyword and method chaining",
          "Package organization and imports"
        ],
        practicals: [
          "Design and implement custom classes",
          "Create encapsulated data models",
          "Build a complete student management system",
          "Implement method overloading scenarios"
        ],
        examples: [
          {
            title: "Complete OOP Concepts Demonstration",
            code: `// Package declaration
package com.javalearning.oop;

// Imports
import java.util.ArrayList;
import java.util.List;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

// ===== PERSON CLASS (Base concepts) =====
class Person {
    // Instance variables (private for encapsulation)
    private String firstName;
    private String lastName;
    private int age;
    private String email;
    
    // Static variable (shared among all instances)
    private static int totalPersons = 0;
    
    // Static constant
    public static final String SPECIES = "Homo Sapiens";
    
    // Default constructor
    public Person() {
        this("Unknown", "Unknown", 0, "no-email@example.com");
    }
    
    // Parameterized constructor
    public Person(String firstName, String lastName, int age, String email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        totalPersons++; // Increment static counter
        
        System.out.println("Person created: " + getFullName());
    }
    
    // Copy constructor
    public Person(Person other) {
        this(other.firstName, other.lastName, other.age, other.email);
    }
    
    // Getter methods (Accessors)
    public String getFirstName() { return firstName; }
    public String getLastName() { return lastName; }
    public int getAge() { return age; }
    public String getEmail() { return email; }
    
    // Setter methods (Mutators) with validation
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
    
    public void setAge(int age) {
        if (age >= 0 && age <= 150) {
            this.age = age;
        } else {
            throw new IllegalArgumentException("Age must be between 0 and 150");
        }
    }
    
    public void setEmail(String email) {
        if (email != null && email.contains("@")) {
            this.email = email.toLowerCase();
        } else {
            throw new IllegalArgumentException("Invalid email format");
        }
    }
    
    // Computed property
    public String getFullName() {
        return firstName + " " + lastName;
    }
    
    // Method with business logic
    public boolean isAdult() {
        return age >= 18;
    }
    
    // Method overloading examples
    public void displayInfo() {
        displayInfo(true);
    }
    
    public void displayInfo(boolean includeEmail) {
        System.out.println("Name: " + getFullName());
        System.out.println("Age: " + age + " (" + (isAdult() ? "Adult" : "Minor") + ")");
        if (includeEmail) {
            System.out.println("Email: " + email);
        }
    }
    
    public void displayInfo(String format) {
        switch (format.toLowerCase()) {
            case "short":
                System.out.println(getFullName() + " (" + age + ")");
                break;
            case "full":
                displayInfo(true);
                break;
            default:
                displayInfo(false);
        }
    }
    
    // Static methods
    public static int getTotalPersons() {
        return totalPersons;
    }
    
    public static void displaySpeciesInfo() {
        System.out.println("Species: " + SPECIES);
        System.out.println("Total persons created: " + totalPersons);
    }
    
    // toString method override
    @Override
    public String toString() {
        return String.format("Person{name='%s', age=%d, email='%s'}", 
                           getFullName(), age, email);
    }
    
    // equals method override
    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        
        Person person = (Person) obj;
        return age == person.age &&
               firstName.equals(person.firstName) &&
               lastName.equals(person.lastName) &&
               email.equals(person.email);
    }
}

// ===== STUDENT CLASS (Inheritance will be covered later) =====
class Student {
    // Instance variables
    private String studentId;
    private Person personalInfo;
    private String major;
    private double gpa;
    private List<String> courses;
    private LocalDate enrollmentDate;
    
    // Static variables
    private static int nextStudentNumber = 1000;
    private static final double MIN_GPA = 0.0;
    private static final double MAX_GPA = 4.0;
    
    // Constructor
    public Student(Person personalInfo, String major) {
        this.personalInfo = new Person(personalInfo); // Composition
        this.major = major;
        this.studentId = "STU" + (++nextStudentNumber);
        this.gpa = 0.0;
        this.courses = new ArrayList<>();
        this.enrollmentDate = LocalDate.now();
        
        System.out.println("Student enrolled: " + studentId);
    }
    
    // Method overloading for different constructor scenarios
    public Student(String firstName, String lastName, int age, String email, String major) {
        this(new Person(firstName, lastName, age, email), major);
    }
    
    // Getters
    public String getStudentId() { return studentId; }
    public Person getPersonalInfo() { return personalInfo; }
    public String getMajor() { return major; }
    public double getGpa() { return gpa; }
    public List<String> getCourses() { return new ArrayList<>(courses); } // Defensive copy
    public LocalDate getEnrollmentDate() { return enrollmentDate; }
    
    // Setters with validation
    public void setMajor(String major) {
        if (major != null && !major.trim().isEmpty()) {
            this.major = major.trim();
        } else {
            throw new IllegalArgumentException("Major cannot be empty");
        }
    }
    
    public void setGpa(double gpa) {
        if (gpa >= MIN_GPA && gpa <= MAX_GPA) {
            this.gpa = gpa;
        } else {
            throw new IllegalArgumentException(
                String.format("GPA must be between %.1f and %.1f", MIN_GPA, MAX_GPA));
        }
    }
    
    // Business logic methods
    public void enrollInCourse(String courseName) {
        if (courseName != null && !courseName.trim().isEmpty()) {
            if (!courses.contains(courseName)) {
                courses.add(courseName);
                System.out.println("Enrolled in: " + courseName);
            } else {
                System.out.println("Already enrolled in: " + courseName);
            }
        }
    }
    
    public boolean dropCourse(String courseName) {
        boolean removed = courses.remove(courseName);
        if (removed) {
            System.out.println("Dropped course: " + courseName);
        } else {
            System.out.println("Not enrolled in: " + courseName);
        }
        return removed;
    }
    
    public String getAcademicStanding() {
        if (gpa >= 3.5) return "Dean's List";
        else if (gpa >= 3.0) return "Good Standing";
        else if (gpa >= 2.0) return "Satisfactory";
        else return "Academic Probation";
    }
    
    public int getCreditsEnrolled() {
        return courses.size() * 3; // Assuming 3 credits per course
    }
    
    // Method chaining example
    public Student updateInfo(String major, double gpa) {
        setMajor(major);
        setGpa(gpa);
        return this; // Return this for chaining
    }
    
    public Student addCourse(String courseName) {
        enrollInCourse(courseName);
        return this; // Return this for chaining
    }
    
    // Display methods (overloaded)
    public void displayStudentInfo() {
        displayStudentInfo("standard");
    }
    
    public void displayStudentInfo(String format) {
        System.out.println("\\n" + "=".repeat(40));
        System.out.println("STUDENT INFORMATION");
        System.out.println("=".repeat(40));
        
        switch (format.toLowerCase()) {
            case "brief":
                System.out.println("ID: " + studentId);
                System.out.println("Name: " + personalInfo.getFullName());
                System.out.println("Major: " + major);
                break;
                
            case "detailed":
                System.out.println("Student ID: " + studentId);
                System.out.println("Personal Information:");
                personalInfo.displayInfo(true);
                System.out.println("Academic Information:");
                System.out.println("  Major: " + major);
                System.out.printf("  GPA: %.2f (%s)%n", gpa, getAcademicStanding());
                System.out.println("  Credits Enrolled: " + getCreditsEnrolled());
                System.out.println("  Enrollment Date: " + 
                    enrollmentDate.format(DateTimeFormatter.ofPattern("MMM dd, yyyy")));
                System.out.println("  Courses: " + (courses.isEmpty() ? "None" : courses));
                break;
                
            default: // standard
                System.out.println("Student ID: " + studentId);
                System.out.println("Name: " + personalInfo.getFullName());
                System.out.println("Major: " + major);
                System.out.printf("GPA: %.2f%n", gpa);
                System.out.println("Courses: " + courses.size());
        }
        
        System.out.println("=".repeat(40));
    }
    
    // Static methods
    public static int getNextStudentNumber() {
        return nextStudentNumber + 1;
    }
    
    public static void displayGpaScale() {
        System.out.println("\\nGPA Scale:");
        System.out.println("4.0 - A (Excellent)");
        System.out.println("3.0 - B (Good)");
        System.out.println("2.0 - C (Satisfactory)");
        System.out.println("1.0 - D (Poor)");
        System.out.println("0.0 - F (Fail)");
    }
    
    @Override
    public String toString() {
        return String.format("Student{id='%s', name='%s', major='%s', gpa=%.2f}", 
                           studentId, personalInfo.getFullName(), major, gpa);
    }
}

// ===== MAIN CLASS FOR DEMONSTRATION =====
public class OOPDemo {
    public static void main(String[] args) {
        System.out.println("=== OBJECT-ORIENTED PROGRAMMING DEMONSTRATION ===");
        
        // ===== PERSON CLASS DEMONSTRATION =====
        System.out.println("\\n1. PERSON CLASS EXAMPLES:");
        
        // Creating Person objects using different constructors
        Person person1 = new Person(); // Default constructor
        Person person2 = new Person("John", "Doe", 25, "john.doe@email.com");
        Person person3 = new Person("Jane", "Smith", 22, "jane.smith@email.com");
        Person person4 = new Person(person2); // Copy constructor
        
        // Demonstrating method overloading
        System.out.println("\\nMethod Overloading Examples:");
        person2.displayInfo(); // Default - includes email
        person2.displayInfo(false); // Without email
        person2.displayInfo("short"); // Short format
        
        // Static method calls
        System.out.println("\\nStatic Method Examples:");
        Person.displaySpeciesInfo();
        
        // ===== STUDENT CLASS DEMONSTRATION =====
        System.out.println("\\n\\n2. STUDENT CLASS EXAMPLES:");
        
        // Creating Student objects
        Student student1 = new Student(person2, "Computer Science");
        Student student2 = new Student("Alice", "Johnson", 20, "alice@email.com", "Mathematics");
        
        // Method chaining example
        student1.updateInfo("Software Engineering", 3.8)
                .addCourse("Data Structures")
                .addCourse("Algorithms")
                .addCourse("Database Systems");
        
        student2.setGpa(3.9);
        student2.enrollInCourse("Calculus I");
        student2.enrollInCourse("Linear Algebra");
        student2.enrollInCourse("Statistics");
        
        // Display student information in different formats
        student1.displayStudentInfo("detailed");
        student2.displayStudentInfo("brief");
        
        // ===== ENCAPSULATION DEMONSTRATION =====
        System.out.println("\\n\\n3. ENCAPSULATION EXAMPLES:");
        
        try {
            // Valid operations
            student1.setGpa(3.5);
            System.out.println("GPA updated successfully to: " + student1.getGpa());
            
            // This will throw an exception (invalid GPA)
            student1.setGpa(5.0);
        } catch (IllegalArgumentException e) {
            System.out.println("Error: " + e.getMessage());
        }
        
        // ===== STATIC MEMBERS DEMONSTRATION =====
        System.out.println("\\n\\n4. STATIC MEMBERS EXAMPLES:");
        
        System.out.println("Total persons created: " + Person.getTotalPersons());
        System.out.println("Next student number: " + Student.getNextStudentNumber());
        Student.displayGpaScale();
        
        // ===== OBJECT COMPARISON =====
        System.out.println("\\n\\n5. OBJECT COMPARISON:");
        
        Person person5 = new Person("John", "Doe", 25, "john.doe@email.com");
        System.out.println("person2.equals(person4): " + person2.equals(person4)); // true (copy)
        System.out.println("person2.equals(person5): " + person2.equals(person5)); // true (same data)
        System.out.println("person2 == person5: " + (person2 == person5)); // false (different objects)
        
        // ===== toString DEMONSTRATION =====
        System.out.println("\\n\\n6. toString() EXAMPLES:");
        
        System.out.println("Person: " + person2);
        System.out.println("Student: " + student1);
        
        System.out.println("\\n=== DEMONSTRATION COMPLETE ===");
    }
}`,
            explanation: "Comprehensive OOP demonstration covering classes, objects, encapsulation, constructors, method overloading, static members, and best practices with detailed examples."
          },
          {
            title: "Advanced Bank Account System",
            code: `import java.util.*;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

// ===== TRANSACTION CLASS =====
class Transaction {
    private static int nextTransactionId = 1000;
    
    private final int transactionId;
    private final String type;
    private final double amount;
    private final LocalDateTime timestamp;
    private final String description;
    private final double balanceAfter;
    
    public Transaction(String type, double amount, String description, double balanceAfter) {
        this.transactionId = ++nextTransactionId;
        this.type = type;
        this.amount = amount;
        this.description = description;
        this.balanceAfter = balanceAfter;
        this.timestamp = LocalDateTime.now();
    }
    
    // Getters
    public int getTransactionId() { return transactionId; }
    public String getType() { return type; }
    public double getAmount() { return amount; }
    public LocalDateTime getTimestamp() { return timestamp; }
    public String getDescription() { return description; }
    public double getBalanceAfter() { return balanceAfter; }
    
    @Override
    public String toString() {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        return String.format("%s | %s | $%.2f | %s | Balance: $%.2f", 
                           timestamp.format(formatter), type, amount, description, balanceAfter);
    }
}

// ===== BANK ACCOUNT CLASS =====
class BankAccount {
    // Static variables
    private static int nextAccountNumber = 100000;
    private static final double MIN_BALANCE = 0.0;
    private static final double OVERDRAFT_FEE = 35.0;
    
    // Instance variables
    private final String accountNumber;
    private String accountHolderName;
    private double balance;
    private final String accountType;
    private boolean isActive;
    private final LocalDateTime createdDate;
    private List<Transaction> transactionHistory;
    private double dailyWithdrawalLimit;
    private double dailyWithdrawnAmount;
    private LocalDateTime lastWithdrawalDate;
    
    // Constructors
    public BankAccount(String accountHolderName, String accountType) {
        this(accountHolderName, accountType, 0.0);
    }
    
    public BankAccount(String accountHolderName, String accountType, double initialDeposit) {
        if (accountHolderName == null || accountHolderName.trim().isEmpty()) {
            throw new IllegalArgumentException("Account holder name cannot be empty");
        }
        if (initialDeposit < 0) {
            throw new IllegalArgumentException("Initial deposit cannot be negative");
        }
        
        this.accountNumber = String.valueOf(++nextAccountNumber);
        this.accountHolderName = accountHolderName.trim();
        this.accountType = accountType;
        this.balance = initialDeposit;
        this.isActive = true;
        this.createdDate = LocalDateTime.now();
        this.transactionHistory = new ArrayList<>();
        this.dailyWithdrawalLimit = 1000.0; // Default limit
        this.dailyWithdrawnAmount = 0.0;
        this.lastWithdrawalDate = LocalDateTime.now().minusDays(1);
        
        if (initialDeposit > 0) {
            addTransaction("DEPOSIT", initialDeposit, "Initial deposit");
        }
        
        System.out.printf("Account created: %s for %s%n", accountNumber, accountHolderName);
    }
    
    // Getters
    public String getAccountNumber() { return accountNumber; }
    public String getAccountHolderName() { return accountHolderName; }
    public double getBalance() { return balance; }
    public String getAccountType() { return accountType; }
    public boolean isActive() { return isActive; }
    public LocalDateTime getCreatedDate() { return createdDate; }
    public double getDailyWithdrawalLimit() { return dailyWithdrawalLimit; }
    
    // Setters with validation
    public void setAccountHolderName(String name) {
        if (name != null && !name.trim().isEmpty()) {
            this.accountHolderName = name.trim();
        } else {
            throw new IllegalArgumentException("Name cannot be empty");
        }
    }
    
    public void setDailyWithdrawalLimit(double limit) {
        if (limit >= 0) {
            this.dailyWithdrawalLimit = limit;
        } else {
            throw new IllegalArgumentException("Withdrawal limit cannot be negative");
        }
    }
    
    // Core banking operations
    public boolean deposit(double amount) {
        return deposit(amount, "Deposit");
    }
    
    public boolean deposit(double amount, String description) {
        if (!isActive) {
            System.out.println("Account is inactive. Cannot perform deposit.");
            return false;
        }
        
        if (amount <= 0) {
            System.out.println("Deposit amount must be positive.");
            return false;
        }
        
        balance += amount;
        addTransaction("DEPOSIT", amount, description);
        System.out.printf("Deposited $%.2f. New balance: $%.2f%n", amount, balance);
        return true;
    }
    
    public boolean withdraw(double amount) {
        return withdraw(amount, "Withdrawal");
    }
    
    public boolean withdraw(double amount, String description) {
        if (!isActive) {
            System.out.println("Account is inactive. Cannot perform withdrawal.");
            return false;
        }
        
        if (amount <= 0) {
            System.out.println("Withdrawal amount must be positive.");
            return false;
        }
        
        // Check daily withdrawal limit
        if (!checkDailyWithdrawalLimit(amount)) {
            return false;
        }
        
        // Check sufficient funds
        if (amount > balance) {
            System.out.printf("Insufficient funds. Balance: $%.2f, Requested: $%.2f%n", 
                            balance, amount);
            
            // Apply overdraft fee if applicable
            if (accountType.equalsIgnoreCase("checking")) {
                balance -= OVERDRAFT_FEE;
                addTransaction("FEE", OVERDRAFT_FEE, "Overdraft fee");
                System.out.printf("Overdraft fee of $%.2f applied. New balance: $%.2f%n", 
                                OVERDRAFT_FEE, balance);
            }
            return false;
        }
        
        balance -= amount;
        updateDailyWithdrawalAmount(amount);
        addTransaction("WITHDRAWAL", amount, description);
        System.out.printf("Withdrew $%.2f. New balance: $%.2f%n", amount, balance);
        return true;
    }
    
    public boolean transfer(BankAccount targetAccount, double amount) {
        return transfer(targetAccount, amount, "Transfer");
    }
    
    public boolean transfer(BankAccount targetAccount, double amount, String description) {
        if (targetAccount == null) {
            System.out.println("Target account cannot be null.");
            return false;
        }
        
        if (targetAccount == this) {
            System.out.println("Cannot transfer to the same account.");
            return false;
        }
        
        if (withdraw(amount, "Transfer to " + targetAccount.getAccountNumber())) {
            if (targetAccount.deposit(amount, "Transfer from " + this.accountNumber)) {
                System.out.printf("Transfer successful: $%.2f to account %s%n", 
                                amount, targetAccount.getAccountNumber());
                return true;
            } else {
                // Rollback if target deposit fails
                deposit(amount, "Transfer rollback");
                System.out.println("Transfer failed. Amount returned to source account.");
                return false;
            }
        }
        return false;
    }
    
    // Account management
    public void closeAccount() {
        if (balance > 0) {
            System.out.printf("Cannot close account with positive balance: $%.2f%n", balance);
            return;
        }
        
        isActive = false;
        addTransaction("CLOSURE", 0, "Account closed");
        System.out.println("Account " + accountNumber + " has been closed.");
    }
    
    public void reactivateAccount() {
        isActive = true;
        addTransaction("REACTIVATION", 0, "Account reactivated");
        System.out.println("Account " + accountNumber + " has been reactivated.");
    }
    
    // Transaction history and reporting
    public void displayAccountInfo() {
        displayAccountInfo(false);
    }
    
    public void displayAccountInfo(boolean includeTransactions) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        
        System.out.println("\\n" + "=".repeat(50));
        System.out.println("ACCOUNT INFORMATION");
        System.out.println("=".repeat(50));
        System.out.println("Account Number: " + accountNumber);
        System.out.println("Account Holder: " + accountHolderName);
        System.out.println("Account Type: " + accountType);
        System.out.printf("Current Balance: $%.2f%n", balance);
        System.out.println("Status: " + (isActive ? "Active" : "Inactive"));
        System.out.println("Created: " + createdDate.format(formatter));
        System.out.printf("Daily Withdrawal Limit: $%.2f%n", dailyWithdrawalLimit);
        System.out.printf("Daily Withdrawn Today: $%.2f%n", 
                         isToday(lastWithdrawalDate) ? dailyWithdrawnAmount : 0.0);
        System.out.println("Total Transactions: " + transactionHistory.size());
        
        if (includeTransactions && !transactionHistory.isEmpty()) {
            System.out.println("\\nRECENT TRANSACTIONS:");
            System.out.println("-".repeat(50));
            
            // Show last 10 transactions
            int startIndex = Math.max(0, transactionHistory.size() - 10);
            for (int i = startIndex; i < transactionHistory.size(); i++) {
                System.out.println((i + 1) + ". " + transactionHistory.get(i));
            }
        }
        
        System.out.println("=".repeat(50));
    }
    
    public void displayTransactionHistory() {
        displayTransactionHistory(0); // Show all
    }
    
    public void displayTransactionHistory(int limit) {
        if (transactionHistory.isEmpty()) {
            System.out.println("No transactions found.");
            return;
        }
        
        System.out.println("\\nTRANSACTION HISTORY - Account: " + accountNumber);
        System.out.println("=".repeat(80));
        
        int count = limit > 0 ? Math.min(limit, transactionHistory.size()) : transactionHistory.size();
        int startIndex = transactionHistory.size() - count;
        
        for (int i = startIndex; i < transactionHistory.size(); i++) {
            System.out.printf("%3d. %s%n", (i + 1), transactionHistory.get(i));
        }
        
        System.out.println("=".repeat(80));
    }
    
    public double calculateMonthlyAverage() {
        if (transactionHistory.isEmpty()) return 0.0;
        
        LocalDateTime oneMonthAgo = LocalDateTime.now().minusMonths(1);
        double total = 0.0;
        int count = 0;
        
        for (Transaction transaction : transactionHistory) {
            if (transaction.getTimestamp().isAfter(oneMonthAgo) && 
                (transaction.getType().equals("DEPOSIT") || transaction.getType().equals("WITHDRAWAL"))) {
                total += transaction.getAmount();
                count++;
            }
        }
        
        return count > 0 ? total / count : 0.0;
    }
    
    // Private helper methods
    private void addTransaction(String type, double amount, String description) {
        Transaction transaction = new Transaction(type, amount, description, balance);
        transactionHistory.add(transaction);
    }
    
    private boolean checkDailyWithdrawalLimit(double amount) {
        // Reset daily amount if it's a new day
        if (!isToday(lastWithdrawalDate)) {
            dailyWithdrawnAmount = 0.0;
        }
        
        if (dailyWithdrawnAmount + amount > dailyWithdrawalLimit) {
            System.out.printf("Daily withdrawal limit exceeded. Limit: $%.2f, " +
                            "Already withdrawn today: $%.2f, Requested: $%.2f%n",
                            dailyWithdrawalLimit, dailyWithdrawnAmount, amount);
            return false;
        }
        
        return true;
    }
    
    private void updateDailyWithdrawalAmount(double amount) {
        if (!isToday(lastWithdrawalDate)) {
            dailyWithdrawnAmount = 0.0;
        }
        dailyWithdrawnAmount += amount;
        lastWithdrawalDate = LocalDateTime.now();
    }
    
    private boolean isToday(LocalDateTime dateTime) {
        LocalDateTime now = LocalDateTime.now();
        return dateTime.toLocalDate().equals(now.toLocalDate());
    }
    
    // Static methods
    public static int getTotalAccountsCreated() {
        return nextAccountNumber - 100000;
    }
    
    public static void displayBankInfo() {
        System.out.println("\\n=== JAVA BANK SYSTEM ===");
        System.out.println("Total Accounts Created: " + getTotalAccountsCreated());
        System.out.printf("Overdraft Fee: $%.2f%n", OVERDRAFT_FEE);
        System.out.printf("Minimum Balance: $%.2f%n", MIN_BALANCE);
        System.out.println("========================");
    }
    
    @Override
    public String toString() {
        return String.format("BankAccount{number='%s', holder='%s', balance=%.2f, type='%s', active=%s}",
                           accountNumber, accountHolderName, balance, accountType, isActive);
    }
    
    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        
        BankAccount account = (BankAccount) obj;
        return accountNumber.equals(account.accountNumber);
    }
    
    @Override
    public int hashCode() {
        return accountNumber.hashCode();
    }
}

// ===== MAIN DEMONSTRATION CLASS =====
public class BankAccountDemo {
    public static void main(String[] args) {
        System.out.println("=== ADVANCED BANK ACCOUNT SYSTEM DEMO ===");
        
        // Display bank information
        BankAccount.displayBankInfo();
        
        // Create accounts
        System.out.println("\\n1. CREATING ACCOUNTS:");
        BankAccount account1 = new BankAccount("John Doe", "Checking", 1000.0);
        BankAccount account2 = new BankAccount("Jane Smith", "Savings", 500.0);
        BankAccount account3 = new BankAccount("Bob Johnson", "Checking");
        
        // Basic operations
        System.out.println("\\n2. BASIC OPERATIONS:");
        account1.deposit(250.0, "Salary deposit");
        account1.withdraw(100.0, "ATM withdrawal");
        account2.deposit(200.0);
        
        // Transfer operations
        System.out.println("\\n3. TRANSFER OPERATIONS:");
        account1.transfer(account2, 150.0, "Monthly transfer");
        account2.transfer(account3, 75.0);
        
        // Test daily withdrawal limits
        System.out.println("\\n4. DAILY WITHDRAWAL LIMIT TEST:");
        account1.setDailyWithdrawalLimit(200.0);
        account1.withdraw(150.0, "Large withdrawal 1");
        account1.withdraw(100.0, "Large withdrawal 2"); // Should fail
        
        // Test overdraft
        System.out.println("\\n5. OVERDRAFT TEST:");
        account3.withdraw(200.0, "Overdraft test"); // Should trigger overdraft fee
        
        // Display account information
        System.out.println("\\n6. ACCOUNT INFORMATION:");
        account1.displayAccountInfo(true);
        account2.displayAccountInfo();
        
        // Transaction history
        System.out.println("\\n7. TRANSACTION HISTORY:");
        account1.displayTransactionHistory(5); // Last 5 transactions
        
        // Monthly average
        System.out.println("\\n8. ANALYTICS:");
        System.out.printf("Account 1 Monthly Average: $%.2f%n", account1.calculateMonthlyAverage());
        
        // Account management
        System.out.println("\\n9. ACCOUNT MANAGEMENT:");
        account3.closeAccount(); // Should fail due to negative balance
        account3.deposit(Math.abs(account3.getBalance()) + 10); // Make balance positive
        account3.withdraw(account3.getBalance()); // Zero out balance
        account3.closeAccount(); // Should succeed
        
        // Final bank statistics
        System.out.println("\\n10. FINAL STATISTICS:");
        BankAccount.displayBankInfo();
        
        System.out.println("\\n=== DEMONSTRATION COMPLETE ===");
    }
}`,
            explanation: "Advanced bank account system demonstrating comprehensive OOP concepts including encapsulation, method overloading, transaction history, daily limits, transfers, and business logic validation."
          }
        ]
      },
      {
        week: 3,
        title: "Inheritance and Polymorphism",
        topics: [
          "Inheritance concepts",
          "Method overriding",
          "Super keyword",
          "Abstract classes and methods",
          "Interfaces and implementation"
        ],
        practicals: [
          "Create inheritance hierarchies",
          "Implement interfaces",
          "Build polymorphic applications"
        ],
        examples: [
          {
            title: "Vehicle Inheritance Hierarchy",
            code: `// Abstract base class
    // Private instance variables (encapsulation)
    private String accountNumber;
    private String accountHolder;
    private double balance;
    private static int totalAccounts = 0; // Static variable
    
    // Constructor
    public BankAccount(String accountNumber, String accountHolder, double initialBalance) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = initialBalance >= 0 ? initialBalance : 0;
        totalAccounts++; // Increment static counter
    }
    
    // Overloaded constructor
    public BankAccount(String accountNumber, String accountHolder) {
        this(accountNumber, accountHolder, 0.0); // Call main constructor
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
    
    // Static method
    public static int getTotalAccounts() {
        return totalAccounts;
    }
    
    // Instance methods
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: $" + amount);
            System.out.println("New balance: $" + balance);
        } else {
            System.out.println("Invalid deposit amount!");
        }
    }
    
    public boolean withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: $" + amount);
            System.out.println("New balance: $" + balance);
            return true;
        } else {
            System.out.println("Invalid withdrawal amount or insufficient funds!");
            return false;
        }
    }
    
    public void displayAccountInfo() {
        System.out.println("\\n--- Account Information ---");
        System.out.println("Account Number: " + accountNumber);
        System.out.println("Account Holder: " + accountHolder);
        System.out.println("Balance: $" + balance);
    }
}

// Test class
class BankAccountTest {
    public static void main(String[] args) {
        // Create bank accounts
        BankAccount account1 = new BankAccount("ACC001", "John Doe", 1000.0);
        BankAccount account2 = new BankAccount("ACC002", "Jane Smith");
        
        // Display initial information
        account1.displayAccountInfo();
        account2.displayAccountInfo();
        
        // Perform transactions
        account1.deposit(500.0);
        account1.withdraw(200.0);
        account1.withdraw(2000.0); // Should fail
        
        account2.deposit(750.0);
        
        // Display final information
        account1.displayAccountInfo();
        account2.displayAccountInfo();
        
        // Display total accounts
        System.out.println("\\nTotal accounts created: " + BankAccount.getTotalAccounts());
    }
}`,
            explanation: "Comprehensive example showing class creation, encapsulation, constructors, static vs instance members, and method overloading."
          }
        ]
      },
      {
        week: 3,
        title: "Inheritance and Polymorphism",
        topics: [
          "Inheritance concepts",
          "Method overriding",
          "Super keyword",
          "Abstract classes and methods",
          "Interfaces and implementation"
        ],
        practicals: [
          "Create inheritance hierarchies",
          "Implement interfaces",
          "Build polymorphic applications"
        ],
        examples: [
          {
            title: "Vehicle Inheritance Hierarchy",
            code: `// Abstract base class
abstract class Vehicle {
    protected String brand;
    protected String model;
    protected int year;
    protected double price;
    
    // Constructor
    public Vehicle(String brand, String model, int year, double price) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.price = price;
    }
    
    // Concrete method
    public void displayInfo() {
        System.out.println("Brand: " + brand);
        System.out.println("Model: " + model);
        System.out.println("Year: " + year);
        System.out.println("Price: $" + price);
    }
    
    // Abstract methods - must be implemented by subclasses
    public abstract void start();
    public abstract double calculateInsurance();
    public abstract String getFuelType();
}

// Interface for electric vehicles
interface Electric {
    void charge();
    double getBatteryCapacity();
}

// Car class extending Vehicle
class Car extends Vehicle {
    private int doors;
    private String transmission;
    
    public Car(String brand, String model, int year, double price, int doors, String transmission) {
        super(brand, model, year, price); // Call parent constructor
        this.doors = doors;
        this.transmission = transmission;
    }
    
    @Override
    public void start() {
        System.out.println("Car engine started with key ignition");
    }
    
    @Override
    public double calculateInsurance() {
        return price * 0.05; // 5% of car price
    }
    
    @Override
    public String getFuelType() {
        return "Gasoline";
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo(); // Call parent method
        System.out.println("Doors: " + doors);
        System.out.println("Transmission: " + transmission);
        System.out.println("Fuel Type: " + getFuelType());
        System.out.println("Insurance: $" + calculateInsurance());
    }
}

// Electric car class implementing both inheritance and interface
class ElectricCar extends Vehicle implements Electric {
    private double batteryCapacity;
    private double range;
    
    public ElectricCar(String brand, String model, int year, double price, 
                      double batteryCapacity, double range) {
        super(brand, model, year, price);
        this.batteryCapacity = batteryCapacity;
        this.range = range;
    }
    
    @Override
    public void start() {
        System.out.println("Electric car started silently");
    }
    
    @Override
    public double calculateInsurance() {
        return price * 0.03; // 3% for electric cars (lower insurance)
    }
    
    @Override
    public String getFuelType() {
        return "Electric";
    }
    
    @Override
    public void charge() {
        System.out.println("Charging electric car...");
    }
    
    @Override
    public double getBatteryCapacity() {
        return batteryCapacity;
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Battery Capacity: " + batteryCapacity + " kWh");
        System.out.println("Range: " + range + " miles");
        System.out.println("Fuel Type: " + getFuelType());
        System.out.println("Insurance: $" + calculateInsurance());
    }
}

// Test class demonstrating polymorphism
class VehicleTest {
    public static void main(String[] args) {
        // Create different types of vehicles
        Vehicle[] vehicles = {
            new Car("Toyota", "Camry", 2023, 25000, 4, "Automatic"),
            new ElectricCar("Tesla", "Model 3", 2023, 40000, 75.0, 300)
        };
        
        // Polymorphic behavior
        for (Vehicle vehicle : vehicles) {
            System.out.println("\\n--- Vehicle Information ---");
            vehicle.displayInfo(); // Calls appropriate overridden method
            vehicle.start(); // Calls appropriate overridden method
            
            // Check if it's an electric vehicle
            if (vehicle instanceof Electric) {
                Electric electricVehicle = (Electric) vehicle;
                electricVehicle.charge();
                System.out.println("Battery Capacity: " + electricVehicle.getBatteryCapacity() + " kWh");
            }
            
            System.out.println("------------------------");
        }
    }
}`,
            explanation: "Demonstrates inheritance, abstract classes, interfaces, method overriding, polymorphism, and instanceof operator."
          }
        ]
      },
      {
        week: 4,
        title: "Exception Handling and File I/O",
        topics: [
          "Exception hierarchy",
          "Try-catch-finally blocks",
          "Custom exceptions",
          "File reading and writing",
          "Resource management"
        ],
        practicals: [
          "Handle various exceptions",
          "Create custom exception classes",
          "Build file processing applications"
        ],
        examples: [
          {
            title: "File Processing with Exception Handling",
            code: `import java.io.*;
import java.util.*;

// Custom exception class
class InvalidDataException extends Exception {
    public InvalidDataException(String message) {
        super(message);
    }
}

class Student {
    private String name;
    private int age;
    private double gpa;
    
    public Student(String name, int age, double gpa) throws InvalidDataException {
        if (name == null || name.trim().isEmpty()) {
            throw new InvalidDataException("Name cannot be empty");
        }
        if (age < 0 || age > 150) {
            throw new InvalidDataException("Invalid age: " + age);
        }
        if (gpa < 0.0 || gpa > 4.0) {
            throw new InvalidDataException("Invalid GPA: " + gpa);
        }
        
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }
    
    // Getters
    public String getName() { return name; }
    public int getAge() { return age; }
    public double getGpa() { return gpa; }
    
    @Override
    public String toString() {
        return String.format("%s,%d,%.2f", name, age, gpa);
    }
    
    public static Student fromString(String line) throws InvalidDataException {
        String[] parts = line.split(",");
        if (parts.length != 3) {
            throw new InvalidDataException("Invalid data format: " + line);
        }
        
        try {
            String name = parts[0].trim();
            int age = Integer.parseInt(parts[1].trim());
            double gpa = Double.parseDouble(parts[2].trim());
            return new Student(name, age, gpa);
        } catch (NumberFormatException e) {
            throw new InvalidDataException("Invalid number format in: " + line);
        }
    }
}

public class StudentFileProcessor {
    private List<Student> students;
    
    public StudentFileProcessor() {
        students = new ArrayList<>();
    }
    
    // Read students from file
    public void readFromFile(String filename) {
        BufferedReader reader = null;
        try {
            reader = new BufferedReader(new FileReader(filename));
            String line;
            int lineNumber = 0;
            
            while ((line = reader.readLine()) != null) {
                lineNumber++;
                try {
                    Student student = Student.fromString(line);
                    students.add(student);
                    System.out.println("Added student: " + student.getName());
                } catch (InvalidDataException e) {
                    System.err.println("Error on line " + lineNumber + ": " + e.getMessage());
                }
            }
            
            System.out.println("Successfully loaded " + students.size() + " students");
            
        } catch (FileNotFoundException e) {
            System.err.println("File not found: " + filename);
        } catch (IOException e) {
            System.err.println("Error reading file: " + e.getMessage());
        } finally {
            // Always close resources
            if (reader != null) {
                try {
                    reader.close();
                } catch (IOException e) {
                    System.err.println("Error closing file: " + e.getMessage());
                }
            }
        }
    }
    
    // Write students to file using try-with-resources
    public void writeToFile(String filename) {
        try (PrintWriter writer = new PrintWriter(new FileWriter(filename))) {
            for (Student student : students) {
                writer.println(student.toString());
            }
            System.out.println("Successfully wrote " + students.size() + " students to " + filename);
        } catch (IOException e) {
            System.err.println("Error writing to file: " + e.getMessage());
        }
    }
    
    // Add student with validation
    public void addStudent(String name, int age, double gpa) {
        try {
            Student student = new Student(name, age, gpa);
            students.add(student);
            System.out.println("Student added successfully: " + name);
        } catch (InvalidDataException e) {
            System.err.println("Failed to add student: " + e.getMessage());
        }
    }
    
    // Display all students
    public void displayStudents() {
        if (students.isEmpty()) {
            System.out.println("No students found.");
            return;
        }
        
        System.out.println("\\n--- Student List ---");
        for (int i = 0; i < students.size(); i++) {
            Student s = students.get(i);
            System.out.printf("%d. %s (Age: %d, GPA: %.2f)%n", 
                            i + 1, s.getName(), s.getAge(), s.getGpa());
        }
    }
    
    public static void main(String[] args) {
        StudentFileProcessor processor = new StudentFileProcessor();
        
        // Add some students
        processor.addStudent("Alice Johnson", 20, 3.8);
        processor.addStudent("Bob Smith", 22, 3.5);
        processor.addStudent("", 19, 3.9); // Invalid - empty name
        processor.addStudent("Charlie Brown", -5, 3.2); // Invalid - negative age
        processor.addStudent("Diana Prince", 21, 5.0); // Invalid - GPA > 4.0
        
        // Display current students
        processor.displayStudents();
        
        // Write to file
        processor.writeToFile("students.txt");
        
        // Create new processor and read from file
        StudentFileProcessor newProcessor = new StudentFileProcessor();
        newProcessor.readFromFile("students.txt");
        newProcessor.displayStudents();
    }
}`,
            explanation: "Comprehensive example showing custom exceptions, file I/O operations, try-catch-finally blocks, and try-with-resources for automatic resource management."
          }
        ]
      },
      {
        week: 5,
        title: "Collections Framework",
        topics: [
          "List, Set, Map interfaces",
          "ArrayList, LinkedList, HashMap",
          "Iterator and enhanced for loop",
          "Collections utility class",
          "Comparable and Comparator"
        ],
        practicals: [
          "Use various collection types",
          "Implement custom sorting",
          "Build collection-based applications"
        ],
        examples: [
          {
            title: "Collections Framework Demonstration",
            code: `import java.util.*;

class Employee implements Comparable<Employee> {
    private int id;
    private String name;
    private String department;
    private double salary;
    
    public Employee(int id, String name, String department, double salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }
    
    // Getters
    public int getId() { return id; }
    public String getName() { return name; }
    public String getDepartment() { return department; }
    public double getSalary() { return salary; }
    
    // Natural ordering by ID
    @Override
    public int compareTo(Employee other) {
        return Integer.compare(this.id, other.id);
    }
    
    @Override
    public String toString() {
        return String.format("Employee{id=%d, name='%s', dept='%s', salary=%.2f}", 
                           id, name, department, salary);
    }
    
    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Employee employee = (Employee) obj;
        return id == employee.id;
    }
    
    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}

public class CollectionsDemo {
    public static void main(String[] args) {
        // ArrayList - Dynamic array
        List<Employee> employees = new ArrayList<>();
        employees.add(new Employee(103, "Alice Johnson", "Engineering", 75000));
        employees.add(new Employee(101, "Bob Smith", "Marketing", 65000));
        employees.add(new Employee(105, "Charlie Brown", "Engineering", 80000));
        employees.add(new Employee(102, "Diana Prince", "HR", 70000));
        employees.add(new Employee(104, "Eve Wilson", "Finance", 72000));
        
        System.out.println("=== ArrayList Operations ===");
        System.out.println("Original list:");
        employees.forEach(System.out::println);
        
        // Sorting using natural ordering (Comparable)
        Collections.sort(employees);
        System.out.println("\\nSorted by ID (natural ordering):");
        employees.forEach(System.out::println);
        
        // Sorting using Comparator
        employees.sort(Comparator.comparing(Employee::getName));
        System.out.println("\\nSorted by Name:");
        employees.forEach(System.out::println);
        
        // Sorting by salary (descending)
        employees.sort(Comparator.comparing(Employee::getSalary).reversed());
        System.out.println("\\nSorted by Salary (descending):");
        employees.forEach(System.out::println);
        
        // HashSet - Unique elements
        System.out.println("\\n=== HashSet Operations ===");
        Set<String> departments = new HashSet<>();
        for (Employee emp : employees) {
            departments.add(emp.getDepartment());
        }
        System.out.println("Unique departments: " + departments);
        
        // LinkedHashSet - Maintains insertion order
        Set<String> orderedDepartments = new LinkedHashSet<>();
        for (Employee emp : employees) {
            orderedDepartments.add(emp.getDepartment());
        }
        System.out.println("Departments in order: " + orderedDepartments);
        
        // TreeSet - Sorted unique elements
        Set<String> sortedDepartments = new TreeSet<>();
        for (Employee emp : employees) {
            sortedDepartments.add(emp.getDepartment());
        }
        System.out.println("Sorted departments: " + sortedDepartments);
        
        // HashMap - Key-value pairs
        System.out.println("\\n=== HashMap Operations ===");
        Map<String, List<Employee>> employeesByDept = new HashMap<>();
        
        // Group employees by department
        for (Employee emp : employees) {
            String dept = emp.getDepartment();
            employeesByDept.computeIfAbsent(dept, k -> new ArrayList<>()).add(emp);
        }
        
        System.out.println("Employees grouped by department:");
        for (Map.Entry<String, List<Employee>> entry : employeesByDept.entrySet()) {
            System.out.println(entry.getKey() + ":");
            for (Employee emp : entry.getValue()) {
                System.out.println("  " + emp);
            }
        }
        
        // TreeMap - Sorted key-value pairs
        System.out.println("\\n=== TreeMap Operations ===");
        Map<Double, Employee> employeesBySalary = new TreeMap<>(Collections.reverseOrder());
        for (Employee emp : employees) {
            employeesBySalary.put(emp.getSalary(), emp);
        }
        
        System.out.println("Employees by salary (highest first):");
        employeesBySalary.forEach((salary, emp) -> 
            System.out.println(salary + " -> " + emp.getName()));
        
        // Queue operations with LinkedList
        System.out.println("\\n=== Queue Operations ===");
        Queue<Employee> employeeQueue = new LinkedList<>(employees);
        
        System.out.println("Processing employees in queue:");
        while (!employeeQueue.isEmpty()) {
            Employee emp = employeeQueue.poll();
            System.out.println("Processing: " + emp.getName());
            if (employeeQueue.size() == 2) break; // Stop early for demo
        }
        
        // Priority Queue - Natural ordering
        System.out.println("\\n=== PriorityQueue Operations ===");
        PriorityQueue<Employee> priorityQueue = new PriorityQueue<>(employees);
        
        System.out.println("Employees by priority (ID order):");
        while (!priorityQueue.isEmpty()) {
            Employee emp = priorityQueue.poll();
            System.out.println("Priority: " + emp);
            if (priorityQueue.size() == 2) break; // Stop early for demo
        }
        
        // Collections utility methods
        System.out.println("\\n=== Collections Utility Methods ===");
        List<Integer> numbers = Arrays.asList(5, 2, 8, 1, 9, 3);
        System.out.println("Original: " + numbers);
        
        Collections.sort(numbers);
        System.out.println("Sorted: " + numbers);
        
        Collections.reverse(numbers);
        System.out.println("Reversed: " + numbers);
        
        Collections.shuffle(numbers);
        System.out.println("Shuffled: " + numbers);
        
        System.out.println("Max: " + Collections.max(numbers));
        System.out.println("Min: " + Collections.min(numbers));
        
        int index = Collections.binarySearch(Arrays.asList(1, 2, 3, 5, 8, 9), 5);
        System.out.println("Binary search for 5: index " + index);
    }
}`,
            explanation: "Comprehensive demonstration of Java Collections Framework including List, Set, Map, Queue, and utility methods with custom objects and sorting."
          }
        ]
      }
    ],
    features: [
      "60 comprehensive lessons",
      "12 hands-on programming projects",
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

export default JavaProgramming;