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
  FaCopy,
  FaChevronDown,
  FaChevronUp,
  FaDownload,
  FaProjectDiagram,

} from 'react-icons/fa';

// This is the main CProgramming component
const CProgramming = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('syllabus');
  const [expandedExample, setExpandedExample] = useState(null);

  const courseDetails = {
    name: "C Programming",
    description: "Master the fundamentals of C programming language. Learn memory management, pointers, and system-level programming concepts.",
    fullDescription: "This comprehensive C programming course takes you from absolute beginner to confident programmer. You'll master fundamental concepts like variables, data types, control structures, functions, arrays, and pointers. Advanced topics include dynamic memory allocation, file handling, and data structures. Perfect for those starting their programming journey or looking to strengthen their foundation.",
    duration: "8 weeks",
    level: "Beginner",
    instructor: "Dr. Sarah Johnson",
    introduction: {
      overview: "C is a general-purpose, procedural programming language developed by Dennis Ritchie at Bell Labs in 1972. It's the foundation of modern programming languages and operating systems. C provides low-level access to memory and system resources while maintaining high-level programming constructs.",
      keyFeatures: [
        "Procedural Programming - Structured approach with functions and modules",
        "Low-level Access - Direct memory manipulation with pointers",
        "Portable - Code can run on different platforms with minimal changes",
        "Efficient - Compiled language with optimized performance",
        "Rich Library - Standard library with extensive functions",
        "Structured - Supports modular programming with functions",
        "Case Sensitive - Distinguishes between uppercase and lowercase",
        "Foundation Language - Base for C++, Java, and many others"
      ],
      syntax: {
        basic: `// C Basic Syntax Overview

// 1. Preprocessor Directives
#include <stdio.h>    // Include standard I/O library
#include <stdlib.h>   // Include standard library
#define MAX 100       // Define constants

// 2. Function Declaration
int main() {
    // Program execution starts here
    return 0;  // Return success status
}

// 3. Variables and Data Types
int age = 25;           // Integer
float height = 5.8f;    // Floating point
char grade = 'A';       // Character
double pi = 3.14159;    // Double precision

// 4. Arrays
int numbers[5] = {1, 2, 3, 4, 5};
char name[20] = "Programming";

// 5. Control Structures
if (condition) {
    // statements
} else {
    // alternative statements
}

// 6. Loops
for (int i = 0; i < 10; i++) {
    // loop body
}

while (condition) {
    // loop body
}

// 7. Functions
return_type function_name(parameters) {
    // function body
    return value;
}`,
        conventions: [
          "Use lowercase for variable and function names (e.g., my_variable, calculate_sum)",
          "Use UPPERCASE for constants and macros (e.g., MAX_SIZE, PI)",
          "Use meaningful names that describe purpose (e.g., student_count, not sc)",
          "Indentation: 4 spaces or 1 tab consistently",
          "Place opening brace on same line for functions",
          "Add comments to explain complex logic",
          "Declare variables at the beginning of blocks",
          "Use const for values that don't change"
        ]
      },
      algorithms: {
        sorting: {
          title: "Bubble Sort Algorithm",
          description: "A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they're in wrong order.",
          steps: [
            "Start with the first element of the array",
            "Compare current element with the next element",
            "If current > next, swap them",
            "Move to the next pair and repeat",
            "Continue until no swaps are needed",
            "Array is now sorted"
          ],
          timeComplexity: "O(n²) - worst and average case, O(n) - best case",
          spaceComplexity: "O(1) - constant space"
        },
        searching: {
          title: "Linear Search Algorithm",
          description: "A simple search algorithm that checks every element in the array sequentially until the target is found.",
          steps: [
            "Start from the first element of array",
            "Compare current element with target",
            "If match found, return the index",
            "If not found, move to next element",
            "Repeat until element found or array ends",
            "Return -1 if element not found"
          ],
          timeComplexity: "O(n) - linear time complexity",
          spaceComplexity: "O(1) - constant space"
        }
      },
      flowcharts: {
        program_structure: {
          title: "C Program Structure Flowchart",
          description: "Shows the basic flow of a C program from start to finish",
          steps: [
            "START",
            "Include Header Files (#include)",
            "Define Constants and Macros (#define)",
            "Declare Global Variables",
            "Function Prototypes",
            "main() Function",
            "Variable Declarations",
            "Program Logic",
            "Return Statement",
            "END"
          ]
        },
        decision_making: {
          title: "Decision Making Flowchart",
          description: "Illustrates how conditional statements work in C programming",
          steps: [
            "START",
            "Input/Initialize Variables",
            "Evaluate Condition",
            "Condition True? (Diamond)",
            "Execute True Block",
            "Execute False Block",
            "Continue Program",
            "END"
          ]
        },
        loop_structure: {
          title: "Loop Structure Flowchart",
          description: "Shows how loops work in C programming with initialization, condition, and increment",
          steps: [
            "START",
            "Initialize Loop Variable",
            "Check Loop Condition",
            "Condition True? (Diamond)",
            "Execute Loop Body",
            "Update Loop Variable",
            "Go Back to Condition Check",
            "Exit Loop (Condition False)",
            "END"
          ]
        }
      }
    },
    syllabus: [
      {
        week: 1,
        title: "Introduction to Programming and C",
        topics: [
          "History and evolution of C programming",
          "Setting up development environment",
          "Your first C program",
          "Understanding compilation process",
          "Basic syntax and structure"
        ],
        practicals: [
          "Install and configure IDE",
          "Write and compile Hello World program",
          "Create basic input/output programs"
        ],
        examples: [
          {
            title: "Hello World Program",
            code: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`,
            explanation: "This is your first C program. It includes the stdio.h header for input/output functions, defines the main function, prints 'Hello, World!' and returns 0 to indicate successful execution."
          },
          {
            title: "Basic Input/Output",
            code: `#include <stdio.h>

int main() {
    char name[50];
    int age;
    
    printf("Enter your name: ");
    scanf("%s", name);
    
    printf("Enter your age: ");
    scanf("%d", &age);
    
    printf("Hello %s, you are %d years old!\\n", name, age);
    
    return 0;
}`,
            explanation: "This program demonstrates basic input/output operations using scanf() for input and printf() for formatted output."
          }
        ]
      },
      {
        week: 2,
        title: "Variables, Data Types, and Operators",
        topics: [
          "Primitive data types (int, float, char, double)",
          "Variable declaration and initialization",
          "Constants and literals",
          "Arithmetic, relational, and logical operators",
          "Type conversion and casting"
        ],
        practicals: [
          "Create calculator program",
          "Build temperature converter",
          "Implement grade calculator"
        ],
        examples: [
          {
            title: "Data Types and Variables",
            code: `#include <stdio.h>

int main() {
    // Integer types
    int age = 25;
    short year = 2024;
    long population = 1000000L;
    
    // Floating point types
    float height = 5.8f;
    double pi = 3.14159265359;
    
    // Character type
    char grade = 'A';
    
    // Constants
    const int MAX_SIZE = 100;
    
    printf("Age: %d\\n", age);
    printf("Height: %.2f\\n", height);
    printf("Pi: %.10f\\n", pi);
    printf("Grade: %c\\n", grade);
    
    return 0;
}`,
            explanation: "This example shows different data types in C including integers, floating-point numbers, characters, and constants with their proper format specifiers."
          },
          {
            title: "Simple Calculator",
            code: `#include <stdio.h>

int main() {
    float num1, num2, result;
    char operator;
    
    printf("Enter first number: ");
    scanf("%f", &num1);
    
    printf("Enter operator (+, -, *, /): ");
    scanf(" %c", &operator);
    
    printf("Enter second number: ");
    scanf("%f", &num2);
    
    switch(operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if(num2 != 0)
                result = num1 / num2;
            else {
                printf("Error: Division by zero!\\n");
                return 1;
            }
            break;
        default:
            printf("Invalid operator!\\n");
            return 1;
    }
    
    printf("%.2f %c %.2f = %.2f\\n", num1, operator, num2, result);
    return 0;
}`,
            explanation: "A complete calculator program demonstrating arithmetic operators, switch statements, and error handling for division by zero."
          }
        ]
      },
      {
        week: 3,
        title: "Control Structures and Loops",
        topics: [
          "Conditional statements (if, else, switch)",
          "Loop constructs (for, while, do-while)",
          "Nested loops and conditions",
          "Break and continue statements",
          "Logical flow control"
        ],
        practicals: [
          "Build number guessing game",
          "Create pattern printing programs",
          "Implement menu-driven calculator"
        ],
        examples: [
          {
            title: "Number Guessing Game",
            code: `#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    int number, guess, attempts = 0;
    
    srand(time(0));
    number = rand() % 100 + 1;
    
    printf("Guess the number between 1 and 100!\\n");
    
    do {
        printf("Enter your guess: ");
        scanf("%d", &guess);
        attempts++;
        
        if (guess > number) {
            printf("Too high! Try again.\\n");
        } else if (guess < number) {
            printf("Too low! Try again.\\n");
        } else {
            printf("Congratulations! You guessed it in %d attempts!\\n", attempts);
        }
    } while (guess != number);
    
    return 0;
}`,
            explanation: "A complete guessing game using do-while loop, random number generation, and conditional statements."
          },
          {
            title: "Pattern Printing",
            code: `#include <stdio.h>

int main() {
    int rows = 5;
    
    // Right triangle pattern
    printf("Right Triangle:\\n");
    for(int i = 1; i <= rows; i++) {
        for(int j = 1; j <= i; j++) {
            printf("* ");
        }
        printf("\\n");
    }
    
    // Pyramid pattern
    printf("\\nPyramid:\\n");
    for(int i = 1; i <= rows; i++) {
        for(int j = 1; j <= rows - i; j++) {
            printf(" ");
        }
        for(int k = 1; k <= 2*i - 1; k++) {
            printf("*");
        }
        printf("\\n");
    }
    
    return 0;
}`,
            explanation: "Demonstrates nested loops to create different patterns - a right triangle and a pyramid using asterisks."
          }
        ]
      },
      {
        week: 4,
        title: "Functions and Scope",
        topics: [
          "Function definition and declaration",
          "Parameter passing (by value)",
          "Return types and void functions",
          "Local and global variables",
          "Function prototypes and headers"
        ],
        practicals: [
          "Create function library",
          "Build modular calculator",
          "Implement utility functions"
        ],
        examples: [
          {
            title: "Mathematical Functions",
            code: `#include <stdio.h>

// Function prototypes
int factorial(int n);
int isPrime(int n);
float average(int arr[], int size);

int main() {
    int num = 5;
    int numbers[] = {10, 20, 30, 40, 50};
    int size = 5;
    
    printf("Factorial of %d: %d\\n", num, factorial(num));
    printf("%d is %s\\n", num, isPrime(num) ? "prime" : "not prime");
    printf("Average: %.2f\\n", average(numbers, size));
    
    return 0;
}

int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

int isPrime(int n) {
    if (n <= 1) return 0;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) return 0;
    }
    return 1;
}

float average(int arr[], int size) {
    int sum = 0;
    for (int i = 0; i < size; i++) {
        sum += arr[i];
    }
    return (float)sum / size;
}`,
            explanation: "Shows function prototypes, recursive functions (factorial), boolean functions (isPrime), and functions working with arrays."
          }
        ]
      },
      {
        week: 5,
        title: "Arrays and Strings",
        topics: [
          "One-dimensional and multi-dimensional arrays",
          "Array initialization and manipulation",
          "Character arrays and strings",
          "String manipulation functions",
          "Array algorithms (sorting, searching)"
        ],
        practicals: [
          "Build student grade management system",
          "Create text processing program",
          "Implement sorting algorithms"
        ],
        examples: [
          {
            title: "Array Operations",
            code: `#include <stdio.h>

void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n-1; i++) {
        for (int j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}

int linearSearch(int arr[], int n, int key) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == key) return i;
    }
    return -1;
}

int main() {
    int numbers[] = {64, 34, 25, 12, 22, 11, 90};
    int n = 7;
    int key = 25;
    
    printf("Original array: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", numbers[i]);
    }
    
    bubbleSort(numbers, n);
    
    printf("\\nSorted array: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", numbers[i]);
    }
    
    int index = linearSearch(numbers, n, key);
    printf("\\nElement %d found at index: %d\\n", key, index);
    
    return 0;
}`,
            explanation: "Demonstrates array manipulation with bubble sort algorithm and linear search, showing how to pass arrays to functions."
          },
          {
            title: "String Processing",
            code: `#include <stdio.h>
#include <string.h>
#include <ctype.h>

void reverseString(char str[]) {
    int len = strlen(str);
    for (int i = 0; i < len/2; i++) {
        char temp = str[i];
        str[i] = str[len-1-i];
        str[len-1-i] = temp;
    }
}

int countWords(char str[]) {
    int count = 0, inWord = 0;
    for (int i = 0; str[i]; i++) {
        if (isspace(str[i])) {
            inWord = 0;
        } else if (!inWord) {
            inWord = 1;
            count++;
        }
    }
    return count;
}

int main() {
    char text[100] = "Hello World Programming";
    char copy[100];
    
    printf("Original: %s\\n", text);
    printf("Length: %lu\\n", strlen(text));
    printf("Word count: %d\\n", countWords(text));
    
    strcpy(copy, text);
    reverseString(copy);
    printf("Reversed: %s\\n", copy);
    
    return 0;
}`,
            explanation: "Shows string manipulation including length calculation, copying, reversing, and word counting using character arrays."
          }
        ]
      },
      {
        week: 6,
        title: "Pointers and Memory Management",
        topics: [
          "Understanding memory and addresses",
          "Pointer declaration and initialization",
          "Pointer arithmetic",
          "Dynamic memory allocation (malloc, free)",
          "Common pointer pitfalls"
        ],
        practicals: [
          "Create dynamic array programs",
          "Build linked list implementation",
          "Memory management exercises"
        ],
        examples: [
          {
            title: "Pointer Basics",
            code: `#include <stdio.h>

void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int x = 10, y = 20;
    int *ptr = &x;
    
    printf("Before swap: x = %d, y = %d\\n", x, y);
    printf("Address of x: %p\\n", (void*)&x);
    printf("Value of ptr: %p\\n", (void*)ptr);
    printf("Value at ptr: %d\\n", *ptr);
    
    swap(&x, &y);
    
    printf("After swap: x = %d, y = %d\\n", x, y);
    
    return 0;
}`,
            explanation: "Demonstrates pointer declaration, dereferencing, address-of operator, and passing pointers to functions for swapping values."
          },
          {
            title: "Dynamic Memory Allocation",
            code: `#include <stdio.h>
#include <stdlib.h>

int main() {
    int n;
    printf("Enter number of elements: ");
    scanf("%d", &n);
    
    // Dynamic allocation
    int *arr = (int*)malloc(n * sizeof(int));
    if (arr == NULL) {
        printf("Memory allocation failed!\\n");
        return 1;
    }
    
    // Input elements
    printf("Enter %d elements: ", n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }
    
    // Calculate sum
    int sum = 0;
    for (int i = 0; i < n; i++) {
        sum += arr[i];
    }
    
    printf("Sum: %d\\n", sum);
    printf("Average: %.2f\\n", (float)sum / n);
    
    // Free memory
    free(arr);
    
    return 0;
}`,
            explanation: "Shows dynamic memory allocation with malloc(), error checking, array operations, and proper memory deallocation with free()."
          }
        ]
      },
      {
        week: 7,
        title: "Structures and File Handling",
        topics: [
          "Structure definition and usage",
          "Nested structures and arrays of structures",
          "File operations (fopen, fclose, fread, fwrite)",
          "Text and binary file handling",
          "Error handling in file operations"
        ],
        practicals: [
          "Build employee management system",
          "Create file-based database",
          "Implement data backup program"
        ],
        examples: [
          {
            title: "Student Management System",
            code: `#include <stdio.h>
#include <string.h>

typedef struct {
    int id;
    char name[50];
    float marks[3];
    float average;
} Student;

void calculateAverage(Student *s) {
    float sum = 0;
    for (int i = 0; i < 3; i++) {
        sum += s->marks[i];
    }
    s->average = sum / 3;
}

void displayStudent(Student s) {
    printf("ID: %d\\n", s.id);
    printf("Name: %s\\n", s.name);
    printf("Marks: %.2f, %.2f, %.2f\\n", s.marks[0], s.marks[1], s.marks[2]);
    printf("Average: %.2f\\n", s.average);
    printf("Grade: %c\\n\\n", s.average >= 90 ? 'A' : s.average >= 80 ? 'B' : s.average >= 70 ? 'C' : 'D');
}

int main() {
    Student students[3] = {
        {1, "Alice", {85.5, 92.0, 78.5}, 0},
        {2, "Bob", {76.0, 84.5, 91.0}, 0},
        {3, "Charlie", {95.5, 88.0, 92.5}, 0}
    };
    
    for (int i = 0; i < 3; i++) {
        calculateAverage(&students[i]);
        displayStudent(students[i]);
    }
    
    return 0;
}`,
            explanation: "Demonstrates structures, arrays of structures, pointer to structures, and typedef for creating a student management system."
          },
          {
            title: "File Operations",
            code: `#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int id;
    char name[30];
    float salary;
} Employee;

void writeEmployees() {
    FILE *file = fopen("employees.dat", "wb");
    if (file == NULL) {
        printf("Error opening file for writing!\\n");
        return;
    }
    
    Employee emp[] = {
        {101, "John Doe", 50000.0},
        {102, "Jane Smith", 55000.0},
        {103, "Mike Johnson", 48000.0}
    };
    
    fwrite(emp, sizeof(Employee), 3, file);
    fclose(file);
    printf("Employee data written to file.\\n");
}

void readEmployees() {
    FILE *file = fopen("employees.dat", "rb");
    if (file == NULL) {
        printf("Error opening file for reading!\\n");
        return;
    }
    
    Employee emp;
    printf("\\nEmployee Records:\\n");
    printf("ID\\tName\\t\\tSalary\\n");
    printf("--------------------------------\\n");
    
    while (fread(&emp, sizeof(Employee), 1, file) == 1) {
        printf("%d\\t%s\\t\\t%.2f\\n", emp.id, emp.name, emp.salary);
    }
    
    fclose(file);
}

int main() {
    writeEmployees();
    readEmployees();
    return 0;
}`,
            explanation: "Shows binary file operations with structures, including writing to and reading from files with proper error handling."
          }
        ]
      },
      {
        week: 8,
        title: "Final Project and Best Practices",
        topics: [
          "Code organization and modularity",
          "Debugging techniques",
          "Code optimization strategies",
          "Documentation and commenting",
          "Version control basics"
        ],
        practicals: [
          "Complete capstone project",
          "Code review and optimization",
          "Project presentation"
        ],
        examples: [
          {
            title: "Library Management System (Final Project)",
            code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_BOOKS 100
#define MAX_TITLE 100
#define MAX_AUTHOR 50

typedef struct {
    int id;
    char title[MAX_TITLE];
    char author[MAX_AUTHOR];
    int available;
} Book;

Book library[MAX_BOOKS];
int bookCount = 0;

void addBook() {
    if (bookCount >= MAX_BOOKS) {
        printf("Library is full!\\n");
        return;
    }
    
    Book *book = &library[bookCount];
    book->id = bookCount + 1;
    
    printf("Enter book title: ");
    getchar(); // Clear buffer
    fgets(book->title, MAX_TITLE, stdin);
    book->title[strcspn(book->title, "\\n")] = 0; // Remove newline
    
    printf("Enter author name: ");
    fgets(book->author, MAX_AUTHOR, stdin);
    book->author[strcspn(book->author, "\\n")] = 0;
    
    book->available = 1;
    bookCount++;
    
    printf("Book added successfully!\\n");
}

void displayBooks() {
    if (bookCount == 0) {
        printf("No books in library.\\n");
        return;
    }
    
    printf("\\nLibrary Books:\\n");
    printf("ID\\tTitle\\t\\t\\tAuthor\\t\\tStatus\\n");
    printf("--------------------------------------------------------\\n");
    
    for (int i = 0; i < bookCount; i++) {
        printf("%d\\t%-20s\\t%-15s\\t%s\\n", 
               library[i].id, 
               library[i].title, 
               library[i].author,
               library[i].available ? "Available" : "Borrowed");
    }
}

int main() {
    int choice;
    
    do {
        printf("\\n=== Library Management System ===\\n");
        printf("1. Add Book\\n");
        printf("2. Display Books\\n");
        printf("3. Exit\\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);
        
        switch (choice) {
            case 1:
                addBook();
                break;
            case 2:
                displayBooks();
                break;
            case 3:
                printf("Thank you for using Library Management System!\\n");
                break;
            default:
                printf("Invalid choice!\\n");
        }
    } while (choice != 3);
    
    return 0;
}`,
            explanation: "A complete library management system demonstrating all concepts learned: structures, arrays, functions, file I/O, and menu-driven programming."
          }
        ]
      }
    ],
    features: [
      "45 comprehensive lessons",
      "8 hands-on programming projects",
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
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={handleBack}
          className="mb-6 flex items-center gap-2 text-primary hover:text-secondary transition-colors"
        >
          <FaArrowLeft />
          Back to Courses
        </motion.button>

        {/* Course Information */}
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

        {/* Course Content Tabs */}
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
                onClick={() => setActiveTab('examples')}
                className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === 'examples' 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <FaCode />
                Code Examples
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
                                    <span className="text-gray-300 text-sm font-mono">C Code</span>
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
            
            {activeTab === 'algorithms' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Algorithm Analysis</h2>
                  <p className="text-gray-600 dark:text-gray-300">Understanding fundamental algorithms with step-by-step explanations</p>
                </div>
                
                {Object.entries(courseDetails.introduction.algorithms).map(([key, algorithm]) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-6"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{algorithm.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">{algorithm.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Algorithm Steps:</h4>
                        <ol className="space-y-2">
                          {algorithm.steps.map((step, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
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
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Program Flowcharts</h2>
                  <p className="text-gray-600 dark:text-gray-300">Visual representation of program logic and control flow</p>
                </div>
                
                {Object.entries(courseDetails.introduction.flowcharts).map(([key, flowchart]) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-6"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{flowchart.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">{flowchart.description}</p>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center">Flowchart Steps:</h4>
                      <div className="flex flex-col items-center space-y-4">
                        {flowchart.steps.map((step, index) => (
                          <div key={index} className="flex flex-col items-center">
                            <div className={`px-4 py-2 rounded-lg text-center min-w-[200px] ${
                              step.includes('?') || step.includes('Diamond') 
                                ? 'bg-yellow-100 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-100 transform rotate-45' 
                                : step === 'START' || step === 'END'
                                ? 'bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 rounded-full'
                                : 'bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100'
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
            
            {activeTab === 'download' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Download Course Materials</h2>
                  <p className="text-gray-600 dark:text-gray-300">Get comprehensive PDF guides and reference materials</p>
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
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Complete Course Guide</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Full syllabus with examples</p>
                      </div>
                    </div>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                        8 weeks of structured content
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                        45+ code examples with explanations
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                        Practice exercises and solutions
                      </li>
                    </ul>
                    <button 
                      onClick={() => window.open('#', '_blank')}
                      className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <FaDownload />
                      Download PDF (2.5 MB)
                    </button>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-6"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <FaProjectDiagram className="text-blue-500 text-3xl" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Algorithms & Flowcharts</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Visual learning materials</p>
                      </div>
                    </div>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        Detailed algorithm explanations
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        Step-by-step flowcharts
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        Complexity analysis charts
                      </li>
                    </ul>
                    <button 
                      onClick={() => window.open('#', '_blank')}
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <FaDownload />
                      Download PDF (1.8 MB)
                    </button>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-6"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <FaCode className="text-green-500 text-3xl" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Quick Reference Guide</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Syntax and functions cheat sheet</p>
                      </div>
                    </div>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                        C syntax reference
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                        Standard library functions
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                        Common programming patterns
                      </li>
                    </ul>
                    <button 
                      onClick={() => window.open('#', '_blank')}
                      className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <FaDownload />
                      Download PDF (0.8 MB)
                    </button>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-6"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <FaCogs className="text-purple-500 text-3xl" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Project Templates</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Ready-to-use project starters</p>
                      </div>
                    </div>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                        8 project templates
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                        Complete source code
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                        Setup instructions
                      </li>
                    </ul>
                    <button 
                      onClick={() => window.open('#', '_blank')}
                      className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <FaDownload />
                      Download ZIP (3.2 MB)
                    </button>
                  </motion.div>
                </div>
                
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">📝 Note:</h4>
                  <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                    All PDF materials are regularly updated with the latest content. Downloads include lifetime access to updates. 
                    For the best learning experience, we recommend downloading all materials before starting the course.
                  </p>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Course Materials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <FaFileAlt className="text-primary" />
            Course Materials & Resources
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Learning Materials:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <FaBook className="text-secondary mt-1 text-sm flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Comprehensive text tutorials for each topic</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaBook className="text-secondary mt-1 text-sm flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Code examples with detailed explanations</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaBook className="text-secondary mt-1 text-sm flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Step-by-step programming exercises</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaBook className="text-secondary mt-1 text-sm flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Quick reference guides and cheat sheets</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Tools & Software:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <FaCogs className="text-primary mt-1 text-sm flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Code::Blocks IDE setup guide</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCogs className="text-primary mt-1 text-sm flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">GCC Compiler installation</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCogs className="text-primary mt-1 text-sm flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Visual Studio Code configuration</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCogs className="text-primary mt-1 text-sm flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Online coding platforms access</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Learning Path */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Master C Programming?</h3>
          <p className="text-lg mb-6 opacity-90">
            Join 245+ students who have successfully completed this comprehensive course
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-2xl font-bold">8 Weeks</div>
              <div className="text-sm">Duration</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-2xl font-bold">45+</div>
              <div className="text-sm">Lessons</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-2xl font-bold">8</div>
              <div className="text-sm">Projects</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-2xl font-bold">FREE</div>
              <div className="text-sm">Cost</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "What are the prerequisites for this course?",
      answer: "No prior programming experience is required. Basic computer literacy is sufficient to start this course."
    },
    {
      question: "Will I get a certificate after completing the course?",
      answer: "Yes, you will receive a certificate of completion after successfully finishing all course requirements."
    },
    {
      question: "What kind of support is available during the course?",
      answer: "You will have access to community forums, live Q&A sessions, and direct instructor support."
    },
    {
      question: "Are there any projects included in the course?",
      answer: "Yes, the course includes 8 hands-on programming projects to help you apply what you learn."
    },
    {
      question: "Can I access the course materials after completion?",
      answer: "Yes, you will have lifetime access to all course materials and resources."
    },
    {
      question: "Is this course suitable for career beginners?",
      answer: "Absolutely, this course is designed for beginners and will build a strong foundation in C programming."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8"
    >
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
        <FaUsers className="text-primary" />
        Frequently Asked Questions
      </h3>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{faq.question}</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{faq.answer}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

// Don't forget to export the CProgramming component so it can be used in other files.
export default CProgramming;