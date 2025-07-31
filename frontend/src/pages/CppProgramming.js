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

const CppProgramming = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('syllabus');
  const [expandedExample, setExpandedExample] = useState(null);

  const courseDetails = {
    name: "C++ Programming",
    description: "Advanced object-oriented programming with C++. Learn classes, inheritance, polymorphism, and STL containers.",
    fullDescription: "Master C++ programming from fundamentals to advanced concepts. This comprehensive course covers object-oriented programming principles, memory management, templates, STL containers, and modern C++ features. Build real-world applications and understand system-level programming concepts.",
    duration: "10 weeks",
    level: "Intermediate",
    instructor: "Prof. Michael Chen",
    syllabus: [
      {
        week: 1,
        title: "C++ Fundamentals and OOP Basics",
        topics: [
          "C++ vs C differences",
          "Classes and objects",
          "Constructors and destructors",
          "Access specifiers",
          "Member functions"
        ],
        practicals: [
          "Create basic class structures",
          "Implement constructors/destructors",
          "Build simple object-oriented programs"
        ],
        examples: [
          {
            title: "Basic Class Implementation",
            code: `#include <iostream>
#include <string>
using namespace std;

class Student {
private:
    string name;
    int age;
    float gpa;

public:
    // Constructor
    Student(string n, int a, float g) : name(n), age(a), gpa(g) {
        cout << "Student object created for " << name << endl;
    }
    
    // Destructor
    ~Student() {
        cout << "Student object destroyed for " << name << endl;
    }
    
    // Getter methods
    string getName() const { return name; }
    int getAge() const { return age; }
    float getGPA() const { return gpa; }
    
    // Setter methods
    void setGPA(float g) { 
        if(g >= 0.0 && g <= 4.0) gpa = g; 
    }
    
    // Display method
    void display() const {
        cout << "Name: " << name << ", Age: " << age << ", GPA: " << gpa << endl;
    }
};

int main() {
    Student s1("Alice", 20, 3.8);
    Student s2("Bob", 21, 3.5);
    
    s1.display();
    s2.display();
    
    s1.setGPA(3.9);
    cout << "Updated GPA: " << s1.getGPA() << endl;
    
    return 0;
}`,
            explanation: "Demonstrates basic class structure with private data members, constructors, destructors, and member functions with proper encapsulation."
          }
        ]
      },
      {
        week: 2,
        title: "Inheritance and Polymorphism",
        topics: [
          "Single and multiple inheritance",
          "Virtual functions",
          "Abstract classes",
          "Function overriding",
          "Runtime polymorphism"
        ],
        practicals: [
          "Create inheritance hierarchies",
          "Implement virtual functions",
          "Build polymorphic applications"
        ],
        examples: [
          {
            title: "Inheritance and Virtual Functions",
            code: `#include <iostream>
#include <vector>
#include <memory>
using namespace std;

// Base class
class Shape {
protected:
    string color;
    
public:
    Shape(string c) : color(c) {}
    virtual ~Shape() = default;
    
    // Pure virtual function - makes Shape abstract
    virtual double area() const = 0;
    virtual void display() const = 0;
    
    string getColor() const { return color; }
};

// Derived class - Circle
class Circle : public Shape {
private:
    double radius;
    
public:
    Circle(string c, double r) : Shape(c), radius(r) {}
    
    double area() const override {
        return 3.14159 * radius * radius;
    }
    
    void display() const override {
        cout << color << " Circle - Radius: " << radius 
             << ", Area: " << area() << endl;
    }
};

// Derived class - Rectangle
class Rectangle : public Shape {
private:
    double width, height;
    
public:
    Rectangle(string c, double w, double h) : Shape(c), width(w), height(h) {}
    
    double area() const override {
        return width * height;
    }
    
    void display() const override {
        cout << color << " Rectangle - " << width << "x" << height 
             << ", Area: " << area() << endl;
    }
};

int main() {
    vector<unique_ptr<Shape>> shapes;
    
    shapes.push_back(make_unique<Circle>("Red", 5.0));
    shapes.push_back(make_unique<Rectangle>("Blue", 4.0, 6.0));
    shapes.push_back(make_unique<Circle>("Green", 3.0));
    
    cout << "All Shapes:" << endl;
    for(const auto& shape : shapes) {
        shape->display();  // Polymorphic call
    }
    
    return 0;
}`,
            explanation: "Shows inheritance hierarchy with abstract base class, virtual functions, and polymorphism using smart pointers."
          }
        ]
      },
      {
        week: 3,
        title: "Operator Overloading and Friend Functions",
        topics: [
          "Operator overloading concepts",
          "Overloading arithmetic operators",
          "Stream operators",
          "Friend functions and classes",
          "Copy constructor and assignment operator"
        ],
        practicals: [
          "Implement custom operators",
          "Create friend functions",
          "Build complex number class"
        ],
        examples: [
          {
            title: "Complex Number Class with Operator Overloading",
            code: `#include <iostream>
using namespace std;

class Complex {
private:
    double real, imag;
    
public:
    // Constructors
    Complex(double r = 0, double i = 0) : real(r), imag(i) {}
    
    // Copy constructor
    Complex(const Complex& other) : real(other.real), imag(other.imag) {
        cout << "Copy constructor called" << endl;
    }
    
    // Assignment operator
    Complex& operator=(const Complex& other) {
        if(this != &other) {
            real = other.real;
            imag = other.imag;
        }
        return *this;
    }
    
    // Arithmetic operators
    Complex operator+(const Complex& other) const {
        return Complex(real + other.real, imag + other.imag);
    }
    
    Complex operator-(const Complex& other) const {
        return Complex(real - other.real, imag - other.imag);
    }
    
    Complex operator*(const Complex& other) const {
        return Complex(real * other.real - imag * other.imag,
                      real * other.imag + imag * other.real);
    }
    
    // Comparison operator
    bool operator==(const Complex& other) const {
        return (real == other.real && imag == other.imag);
    }
    
    // Stream operators (friend functions)
    friend ostream& operator<<(ostream& os, const Complex& c);
    friend istream& operator>>(istream& is, Complex& c);
    
    // Getter methods
    double getReal() const { return real; }
    double getImag() const { return imag; }
};

// Friend function implementations
ostream& operator<<(ostream& os, const Complex& c) {
    os << c.real;
    if(c.imag >= 0) os << " + " << c.imag << "i";
    else os << " - " << -c.imag << "i";
    return os;
}

istream& operator>>(istream& is, Complex& c) {
    cout << "Enter real part: ";
    is >> c.real;
    cout << "Enter imaginary part: ";
    is >> c.imag;
    return is;
}

int main() {
    Complex c1(3, 4);
    Complex c2(1, 2);
    
    cout << "c1 = " << c1 << endl;
    cout << "c2 = " << c2 << endl;
    
    Complex c3 = c1 + c2;
    cout << "c1 + c2 = " << c3 << endl;
    
    Complex c4 = c1 * c2;
    cout << "c1 * c2 = " << c4 << endl;
    
    if(c1 == c2) {
        cout << "c1 and c2 are equal" << endl;
    } else {
        cout << "c1 and c2 are not equal" << endl;
    }
    
    return 0;
}`,
            explanation: "Complete example of operator overloading including arithmetic, comparison, and stream operators with friend functions."
          }
        ]
      },
      {
        week: 4,
        title: "Templates and Generic Programming",
        topics: [
          "Function templates",
          "Class templates",
          "Template specialization",
          "Template parameters",
          "Generic algorithms"
        ],
        practicals: [
          "Create template functions",
          "Build generic data structures",
          "Implement template classes"
        ],
        examples: [
          {
            title: "Generic Stack Implementation",
            code: `#include <iostream>
#include <vector>
#include <stdexcept>
using namespace std;

template<typename T>
class Stack {
private:
    vector<T> elements;
    
public:
    // Push element onto stack
    void push(const T& element) {
        elements.push_back(element);
    }
    
    // Pop element from stack
    T pop() {
        if(empty()) {
            throw runtime_error("Stack is empty");
        }
        T top = elements.back();
        elements.pop_back();
        return top;
    }
    
    // Get top element without removing
    T& top() {
        if(empty()) {
            throw runtime_error("Stack is empty");
        }
        return elements.back();
    }
    
    const T& top() const {
        if(empty()) {
            throw runtime_error("Stack is empty");
        }
        return elements.back();
    }
    
    // Check if stack is empty
    bool empty() const {
        return elements.empty();
    }
    
    // Get stack size
    size_t size() const {
        return elements.size();
    }
    
    // Display stack contents
    void display() const {
        cout << "Stack contents (top to bottom): ";
        for(auto it = elements.rbegin(); it != elements.rend(); ++it) {
            cout << *it << " ";
        }
        cout << endl;
    }
};

// Template function for finding maximum
template<typename T>
T findMax(const T& a, const T& b) {
    return (a > b) ? a : b;
}

// Template specialization for strings
template<>
string findMax<string>(const string& a, const string& b) {
    return (a.length() > b.length()) ? a : b;
}

int main() {
    // Integer stack
    Stack<int> intStack;
    intStack.push(10);
    intStack.push(20);
    intStack.push(30);
    intStack.display();
    
    cout << "Top element: " << intStack.top() << endl;
    cout << "Popped: " << intStack.pop() << endl;
    intStack.display();
    
    // String stack
    Stack<string> stringStack;
    stringStack.push("Hello");
    stringStack.push("World");
    stringStack.push("C++");
    stringStack.display();
    
    // Template function usage
    cout << "Max of 10 and 20: " << findMax(10, 20) << endl;
    cout << "Max string by length: " << findMax(string("Hi"), string("Hello")) << endl;
    
    return 0;
}`,
            explanation: "Demonstrates class templates, function templates, and template specialization with a generic stack implementation."
          }
        ]
      },
      {
        week: 5,
        title: "STL Containers and Iterators",
        topics: [
          "Vector, list, deque",
          "Set, map, multiset, multimap",
          "Unordered containers",
          "Iterator types and usage",
          "Container adapters"
        ],
        practicals: [
          "Use various STL containers",
          "Implement iterator-based algorithms",
          "Build container-based applications"
        ],
        examples: [
          {
            title: "STL Containers Demonstration",
            code: `#include <iostream>
#include <vector>
#include <map>
#include <set>
#include <algorithm>
#include <string>
using namespace std;

int main() {
    // Vector operations
    vector<int> numbers = {5, 2, 8, 1, 9, 3};
    cout << "Original vector: ";
    for(int n : numbers) cout << n << " ";
    cout << endl;
    
    // Sort vector
    sort(numbers.begin(), numbers.end());
    cout << "Sorted vector: ";
    for(int n : numbers) cout << n << " ";
    cout << endl;
    
    // Find element
    auto it = find(numbers.begin(), numbers.end(), 8);
    if(it != numbers.end()) {
        cout << "Found 8 at position: " << distance(numbers.begin(), it) << endl;
    }
    
    // Map for word counting
    map<string, int> wordCount;
    vector<string> words = {"hello", "world", "hello", "cpp", "world", "programming"};
    
    for(const string& word : words) {
        wordCount[word]++;
    }
    
    cout << "\\nWord frequencies:" << endl;
    for(const auto& pair : wordCount) {
        cout << pair.first << ": " << pair.second << endl;
    }
    
    // Set for unique elements
    set<int> uniqueNumbers = {5, 2, 8, 2, 1, 9, 3, 5};
    cout << "\\nUnique numbers in set: ";
    for(int n : uniqueNumbers) cout << n << " ";
    cout << endl;
    
    // Using algorithms with containers
    vector<int> squares;
    transform(numbers.begin(), numbers.end(), back_inserter(squares),
              [](int n) { return n * n; });
    
    cout << "Squares: ";
    for(int n : squares) cout << n << " ";
    cout << endl;
    
    // Count elements greater than 10
    int count = count_if(squares.begin(), squares.end(),
                        [](int n) { return n > 10; });
    cout << "Numbers > 10: " << count << endl;
    
    return 0;
}`,
            explanation: "Shows usage of various STL containers (vector, map, set) with algorithms and lambda expressions."
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

        {/* Gradient Header with Icon and Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-lg shadow-lg p-8 mb-8 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-white bg-opacity-20 rounded-full p-4 text-4xl">
                <FaCode />
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-1">{courseDetails.name}</h1>
                <p className="text-indigo-100">by {courseDetails.instructor}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
              <span className="px-4 py-1 rounded-full bg-white bg-opacity-20 text-white font-semibold text-sm border border-white/30">
                <FaBook className="inline mr-1" /> {courseDetails.level}
              </span>
              <span className="px-4 py-1 rounded-full bg-white bg-opacity-20 text-white font-semibold text-sm border border-white/30">
                <FaUsers className="inline mr-1" /> Duration: {courseDetails.duration}
              </span>
              <span className="px-4 py-1 rounded-full bg-white bg-opacity-20 text-white font-semibold text-sm border border-white/30">
                <FaFileAlt className="inline mr-1" /> Programming
              </span>
            </div>
          </div>
          <p className="text-indigo-100 text-lg leading-relaxed mb-4">
            {courseDetails.fullDescription}
          </p>
          <div className="flex flex-wrap gap-4">
            {courseDetails.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 bg-white bg-opacity-20 px-3 py-1 rounded-lg text-sm">
                <FaFileAlt className="text-white" />
                <span>{feature}</span>
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
                                    <span className="text-gray-300 text-sm font-mono">C++ Code</span>
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

export default CppProgramming;