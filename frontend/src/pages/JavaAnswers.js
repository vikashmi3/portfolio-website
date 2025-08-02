import React from 'react';

const JavaAnswers = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Java Practice Questions - Answers</h1>
          <p className="text-xl text-gray-600">Detailed answers to all 100 Java practice questions</p>
        </div>

        {/* Basic Syntax Answers */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-green-700">Basic Syntax Answers (1-20)</h2>
          
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">1. What is the difference between JDK, JRE, and JVM?</h3>
              <p className="text-gray-700 mb-2"><strong>Answer:</strong></p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li><strong>JVM (Java Virtual Machine):</strong> Executes Java bytecode, provides runtime environment</li>
                <li><strong>JRE (Java Runtime Environment):</strong> Contains JVM + standard libraries needed to run Java applications</li>
                <li><strong>JDK (Java Development Kit):</strong> Contains JRE + development tools (compiler, debugger, etc.)</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">2. What are the primitive data types in Java?</h3>
              <p className="text-gray-700 mb-2"><strong>Answer:</strong></p>
              <p className="text-gray-700">8 primitive data types: byte (1 byte), short (2 bytes), int (4 bytes), long (8 bytes), float (4 bytes), double (8 bytes), char (2 bytes), boolean (1 bit)</p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">3. What is the difference between == and .equals() method?</h3>
              <p className="text-gray-700 mb-2"><strong>Answer:</strong></p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li><strong>==</strong> compares references (memory addresses) for objects, values for primitives</li>
                <li><strong>.equals()</strong> compares actual content/values of objects</li>
              </ul>
              <pre className="bg-gray-800 text-green-400 p-3 rounded mt-2 text-sm">
{`String s1 = new String("Hello");
String s2 = new String("Hello");
System.out.println(s1 == s2);      // false (different references)
System.out.println(s1.equals(s2)); // true (same content)`}
              </pre>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">4. What is autoboxing and unboxing in Java?</h3>
              <p className="text-gray-700 mb-2"><strong>Answer:</strong></p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li><strong>Autoboxing:</strong> Automatic conversion of primitive to wrapper class</li>
                <li><strong>Unboxing:</strong> Automatic conversion of wrapper class to primitive</li>
              </ul>
              <pre className="bg-gray-800 text-green-400 p-3 rounded mt-2 text-sm">
{`Integer i = 10;        // Autoboxing (int to Integer)
int j = i;             // Unboxing (Integer to int)`}
              </pre>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">5. What is the difference between String, StringBuilder, and StringBuffer?</h3>
              <p className="text-gray-700 mb-2"><strong>Answer:</strong></p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li><strong>String:</strong> Immutable, thread-safe, creates new object for each modification</li>
                <li><strong>StringBuilder:</strong> Mutable, not thread-safe, efficient for single-threaded operations</li>
                <li><strong>StringBuffer:</strong> Mutable, thread-safe (synchronized), slower than StringBuilder</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">6. What are access modifiers in Java?</h3>
              <p className="text-gray-700 mb-2"><strong>Answer:</strong></p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li><strong>public:</strong> Accessible from anywhere</li>
                <li><strong>protected:</strong> Accessible within package and subclasses</li>
                <li><strong>default (package-private):</strong> Accessible within same package</li>
                <li><strong>private:</strong> Accessible only within same class</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">7. What is the difference between static and non-static methods?</h3>
              <p className="text-gray-700 mb-2"><strong>Answer:</strong></p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li><strong>Static methods:</strong> Belong to class, called without creating instance, cannot access instance variables</li>
                <li><strong>Non-static methods:</strong> Belong to instance, require object creation, can access both static and instance variables</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">8. What is method overloading?</h3>
              <p className="text-gray-700 mb-2"><strong>Answer:</strong></p>
              <p className="text-gray-700">Multiple methods with same name but different parameters (number, type, or order). Resolved at compile time.</p>
              <pre className="bg-gray-800 text-green-400 p-3 rounded mt-2 text-sm">
{`public void print(int x) { }
public void print(String s) { }
public void print(int x, int y) { }`}
              </pre>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">9. What is the purpose of the 'final' keyword?</h3>
              <p className="text-gray-700 mb-2"><strong>Answer:</strong></p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li><strong>final variable:</strong> Cannot be reassigned (constant)</li>
                <li><strong>final method:</strong> Cannot be overridden</li>
                <li><strong>final class:</strong> Cannot be extended (e.g., String class)</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">10. What is the difference between break and continue statements?</h3>
              <p className="text-gray-700 mb-2"><strong>Answer:</strong></p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li><strong>break:</strong> Exits the loop completely</li>
                <li><strong>continue:</strong> Skips current iteration and moves to next iteration</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">11-20. Additional Basic Syntax Answers</h3>
              <div className="text-gray-700 space-y-2">
                <p><strong>11.</strong> Constructor: Special method to initialize objects, same name as class, no return type</p>
                <p><strong>12.</strong> Constructor overloading: Multiple constructors with different parameters</p>
                <p><strong>13.</strong> 'this' refers to current instance, 'super' refers to parent class</p>
                <p><strong>14.</strong> Array: Collection of similar elements. Declaration: int[] arr = new int[5];</p>
                <p><strong>15.</strong> 'length' is array property, 'length()' is String method</p>
                <p><strong>16.</strong> Package: Namespace for organizing related classes and interfaces</p>
                <p><strong>17.</strong> Import: Makes classes from other packages available</p>
                <p><strong>18.</strong> No difference - order of modifiers doesn't matter</p>
                <p><strong>19.</strong> Prints text to console output stream</p>
                <p><strong>20.</strong> Prefix (++i) increments then returns, postfix (i++) returns then increments</p>
              </div>
            </div>
          </div>
        </section>

        {/* OOP Concepts Answers */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-blue-700">OOP Concepts Answers (21-40)</h2>
          
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">21. What are the four pillars of Object-Oriented Programming?</h3>
              <p className="text-gray-700 mb-2"><strong>Answer:</strong></p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li><strong>Encapsulation:</strong> Bundling data and methods, controlling access</li>
                <li><strong>Inheritance:</strong> Creating new classes based on existing ones</li>
                <li><strong>Polymorphism:</strong> One interface, multiple implementations</li>
                <li><strong>Abstraction:</strong> Hiding implementation details, showing only essential features</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">22. What is encapsulation? Provide an example.</h3>
              <p className="text-gray-700 mb-2"><strong>Answer:</strong></p>
              <p className="text-gray-700 mb-2">Encapsulation is wrapping data and methods together and controlling access through access modifiers.</p>
              <pre className="bg-gray-800 text-green-400 p-3 rounded mt-2 text-sm">
{`class Student {
    private String name;  // Private data
    private int age;
    
    // Public methods to access private data
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
}`}
              </pre>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">23-30. Core OOP Concepts</h3>
              <div className="text-gray-700 space-y-2">
                <p><strong>23.</strong> Inheritance: IS-A relationship. Types: Single, Multilevel, Hierarchical</p>
                <p><strong>24.</strong> Polymorphism: Method overloading (compile-time), Method overriding (runtime)</p>
                <p><strong>25.</strong> Abstraction: Achieved through abstract classes and interfaces</p>
                <p><strong>26.</strong> Method overriding: Redefining parent class method in child class</p>
                <p><strong>27.</strong> Overloading: Same method name, different parameters. Overriding: Same signature, different implementation</p>
                <p><strong>28.</strong> Abstract class: Cannot be instantiated, can have abstract and concrete methods</p>
                <p><strong>29.</strong> Interface: Contract with abstract methods (Java 8+ allows default methods)</p>
                <p><strong>30.</strong> Abstract class can have constructors, instance variables. Interface cannot</p>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">31-40. Advanced OOP Concepts</h3>
              <div className="text-gray-700 space-y-2">
                <p><strong>31.</strong> No, abstract classes cannot be instantiated directly</p>
                <p><strong>32.</strong> Multiple inheritance: Class inheriting from multiple classes. Java doesn't support it for classes</p>
                <p><strong>33.</strong> Composition: HAS-A relationship, strong association</p>
                <p><strong>34.</strong> Aggregation: HAS-A relationship, weak association</p>
                <p><strong>35.</strong> Composition: Dependent lifecycle. Aggregation: Independent lifecycle</p>
                <p><strong>36.</strong> Nested class: Class defined inside another class</p>
                <p><strong>37.</strong> Inner class: Non-static nested class</p>
                <p><strong>38.</strong> Anonymous class: Class without name, defined and instantiated together</p>
                <p><strong>39.</strong> instanceof: Checks if object is instance of specific class/interface</p>
                <p><strong>40.</strong> Dynamic method dispatch: Runtime method resolution based on object type</p>
              </div>
            </div>
          </div>
        </section>

        {/* Exception Handling Answers */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-yellow-700">Exception Handling Answers (41-50)</h2>
          
          <div className="space-y-4">
            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">41-50. Exception Handling Concepts</h3>
              <div className="text-gray-700 space-y-2">
                <p><strong>41.</strong> Exception: Runtime error that disrupts normal program flow</p>
                <p><strong>42.</strong> Checked: Must be handled (IOException). Unchecked: Runtime exceptions (NullPointerException)</p>
                <p><strong>43.</strong> Throwable → Error/Exception → RuntimeException/Other Exceptions</p>
                <p><strong>44.</strong> 'throw': Throws exception explicitly. 'throws': Declares method may throw exception</p>
                <p><strong>45.</strong> finally: Always executes, used for cleanup code</p>
                <p><strong>46.</strong> Yes, multiple catch blocks for different exception types</p>
                <p><strong>47.</strong> try-with-resources: Automatic resource management, auto-closes resources</p>
                <p><strong>48.</strong> Extend Exception class or RuntimeException class</p>
                <p><strong>49.</strong> Program terminates with stack trace</p>
                <p><strong>50.</strong> Yes, but not recommended as it overrides try/catch return values</p>
              </div>
            </div>
          </div>
        </section>

        {/* Collections Answers */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-purple-700">Collections Answers (51-70)</h2>
          
          <div className="space-y-4">
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">51-70. Collections Framework</h3>
              <div className="text-gray-700 space-y-2">
                <p><strong>51.</strong> Framework providing interfaces and classes for storing/manipulating groups of objects</p>
                <p><strong>52.</strong> Collection: Interface. Collections: Utility class with static methods</p>
                <p><strong>53.</strong> ArrayList: Dynamic array, fast access. LinkedList: Doubly-linked list, fast insertion/deletion</p>
                <p><strong>54.</strong> ArrayList: Not synchronized, faster. Vector: Synchronized, thread-safe</p>
                <p><strong>55.</strong> HashSet: Hash table, no order. TreeSet: Red-black tree, sorted order</p>
                <p><strong>56.</strong> HashMap: Hash table, no order. TreeMap: Red-black tree, sorted by keys</p>
                <p><strong>57.</strong> HashMap: Not synchronized, allows null. Hashtable: Synchronized, no null</p>
                <p><strong>58.</strong> Load factor: Threshold for resizing hash table (default 0.75)</p>
                <p><strong>59.</strong> Iterator: Forward only. ListIterator: Bidirectional, only for Lists</p>
                <p><strong>60.</strong> Fail-fast: Throws ConcurrentModificationException if collection modified during iteration</p>
                <p><strong>61-70.</strong> Comparable: Natural ordering. Comparator: Custom ordering. PriorityQueue: Heap-based priority queue. Deque: Double-ended queue. LinkedHashMap: Maintains insertion order. WeakHashMap: Weak references. ConcurrentHashMap: Thread-safe HashMap alternative</p>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Topics Answers */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-red-700">Advanced Topics Answers (71-100)</h2>
          
          <div className="space-y-4">
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">71-90. Advanced Java Concepts</h3>
              <div className="text-gray-700 space-y-2">
                <p><strong>71.</strong> Multithreading: Concurrent execution of multiple threads</p>
                <p><strong>72.</strong> Thread: Class to extend. Runnable: Interface to implement</p>
                <p><strong>73.</strong> Synchronization: Controlling access to shared resources</p>
                <p><strong>74.</strong> Deadlock: Two or more threads waiting for each other indefinitely</p>
                <p><strong>75.</strong> Generics: Type safety at compile time, parameterized types</p>
                <p><strong>76.</strong> Type erasure: Generic type information removed at runtime</p>
                <p><strong>77.</strong> Wildcards: ? extends (upper bound), ? super (lower bound)</p>
                <p><strong>78.</strong> Reflection: Examining/modifying classes at runtime</p>
                <p><strong>79.</strong> Annotations: Metadata for classes, methods, fields</p>
                <p><strong>80.</strong> Serialization: Converting objects to byte stream</p>
                <p><strong>81.</strong> Lambda expressions: Anonymous functions (Java 8+)</p>
                <p><strong>82.</strong> Stream API: Functional-style operations on collections</p>
                <p><strong>83.</strong> Optional: Container for potentially null values</p>
                <p><strong>84.</strong> Functional interfaces: Interfaces with single abstract method</p>
                <p><strong>85.</strong> Method reference: Shorthand for lambda expressions</p>
                <p><strong>86.</strong> Intermediate: Return stream. Terminal: Return result</p>
                <p><strong>87.</strong> Garbage collection: Automatic memory management</p>
                <p><strong>88.</strong> Serial, Parallel, G1, ZGC, etc.</p>
                <p><strong>89.</strong> Memory management: Heap, stack, method area</p>
                <p><strong>90.</strong> Heap: Objects storage. Stack: Method calls, local variables</p>
              </div>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">91-100. Programming Problems Solutions</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">91. Reverse a string without built-in methods:</p>
                  <pre className="bg-gray-800 text-green-400 p-3 rounded mt-2 text-sm">
{`public static String reverse(String str) {
    char[] chars = str.toCharArray();
    int left = 0, right = chars.length - 1;
    while (left < right) {
        char temp = chars[left];
        chars[left] = chars[right];
        chars[right] = temp;
        left++; right--;
    }
    return new String(chars);
}`}
                  </pre>
                </div>

                <div>
                  <p className="font-semibold">92. Check if number is prime:</p>
                  <pre className="bg-gray-800 text-green-400 p-3 rounded mt-2 text-sm">
{`public static boolean isPrime(int n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 == 0 || n % 3 == 0) return false;
    for (int i = 5; i * i <= n; i += 6) {
        if (n % i == 0 || n % (i + 2) == 0) return false;
    }
    return true;
}`}
                  </pre>
                </div>

                <div>
                  <p className="font-semibold">93. Factorial using recursion:</p>
                  <pre className="bg-gray-800 text-green-400 p-3 rounded mt-2 text-sm">
{`public static int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}`}
                  </pre>
                </div>

                <div>
                  <p className="font-semibold">94. Binary search:</p>
                  <pre className="bg-gray-800 text-green-400 p-3 rounded mt-2 text-sm">
{`public static int binarySearch(int[] arr, int target) {
    int left = 0, right = arr.length - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}`}
                  </pre>
                </div>

                <div>
                  <p className="font-semibold">95. Bubble sort:</p>
                  <pre className="bg-gray-800 text-green-400 p-3 rounded mt-2 text-sm">
{`public static void bubbleSort(int[] arr) {
    int n = arr.length;
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}`}
                  </pre>
                </div>

                <div className="text-gray-700 space-y-1">
                  <p><strong>96.</strong> Find duplicates: Use HashSet to track seen elements</p>
                  <p><strong>97.</strong> Calculator: Use switch statement for operations</p>
                  <p><strong>98.</strong> Count vowels: Iterate and check each character</p>
                  <p><strong>99.</strong> Stack with arrays: Use array with top pointer</p>
                  <p><strong>100.</strong> Linked list: Node class with data and next pointer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="bg-blue-50 rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold mb-4">Practice More!</h3>
          <p className="text-gray-700 mb-4">
            These answers provide a foundation. Practice implementing these concepts in your own projects.
          </p>
          <div className="space-x-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Back to Questions
            </button>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
              More Practice Problems
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JavaAnswers;