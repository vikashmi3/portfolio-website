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
  FaJava,
  FaDatabase,
  FaServer,
  FaShieldAlt
} from 'react-icons/fa';

const AdvancedJava = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('syllabus');
  const [expandedExample, setExpandedExample] = useState(null);

  const courseDetails = {
    name: "Advanced Java Programming",
    description: "Master enterprise Java development with advanced concepts including multithreading, web services, Spring framework, and database connectivity.",
    fullDescription: "Take your Java skills to the next level with advanced topics including I/O streams, multithreading, JDBC, servlets, JSP, Spring framework, web services, and enterprise application development.",
    duration: "20 weeks",
    level: "Advanced",
    instructor: "Dr. James Rodriguez",
    syllabus: [
      {
        week: 1,
        title: "Advanced I/O and File Handling",
        topics: [
          "Byte streams vs Character streams",
          "Buffered I/O for performance",
          "Serialization and Deserialization",
          "NIO (New I/O) package",
          "File operations with java.nio.file",
          "Memory-mapped files"
        ],
        practicals: [
          "File processing utilities",
          "Object serialization system",
          "High-performance file operations",
          "Custom serialization implementation"
        ],
        examples: [
          {
            title: "Advanced File I/O and Serialization System",
            code: `import java.io.*;
import java.nio.file.*;
import java.util.*;

class Employee implements Serializable {
    private static final long serialVersionUID = 1L;
    private String name;
    private int id;
    private double salary;
    private transient String password;
    
    public Employee(String name, int id, double salary) {
        this.name = name;
        this.id = id;
        this.salary = salary;
    }
    
    // Custom serialization
    private void writeObject(ObjectOutputStream out) throws IOException {
        out.defaultWriteObject();
        System.out.println("Serializing: " + name);
    }
    
    private void readObject(ObjectInputStream in) throws IOException, ClassNotFoundException {
        in.defaultReadObject();
        System.out.println("Deserializing: " + name);
    }
    
    @Override
    public String toString() {
        return String.format("Employee{name='%s', id=%d, salary=%.2f}", name, id, salary);
    }
}

public class AdvancedIODemo {
    public static void main(String[] args) throws IOException, ClassNotFoundException {
        // Serialization example
        Employee emp = new Employee("John Doe", 101, 75000);
        
        // Serialize to file
        try (ObjectOutputStream oos = new ObjectOutputStream(
                new FileOutputStream("employee.ser"))) {
            oos.writeObject(emp);
        }
        
        // Deserialize from file
        try (ObjectInputStream ois = new ObjectInputStream(
                new FileInputStream("employee.ser"))) {
            Employee deserializedEmp = (Employee) ois.readObject();
            System.out.println("Deserialized: " + deserializedEmp);
        }
        
        // NIO File operations
        Path path = Paths.get("data.txt");
        List<String> lines = Arrays.asList("Line 1", "Line 2", "Line 3");
        Files.write(path, lines);
        
        List<String> readLines = Files.readAllLines(path);
        readLines.forEach(System.out::println);
    }
}`,
            explanation: "Comprehensive example showing advanced I/O operations including custom serialization, NIO file operations, and performance optimizations."
          }
        ]
      },
      {
        week: 2,
        title: "Multithreading and Concurrency",
        topics: [
          "Thread lifecycle and states",
          "Synchronization mechanisms",
          "Thread pools and ExecutorService",
          "Callable and Future interfaces",
          "Concurrent collections",
          "Lock framework and atomic operations"
        ],
        practicals: [
          "Producer-consumer implementation",
          "Thread pool management",
          "Concurrent data processing",
          "Deadlock prevention strategies"
        ],
        examples: [
          {
            title: "Advanced Multithreading with ExecutorService",
            code: `import java.util.concurrent.*;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.*;

class BankAccount {
    private double balance;
    private final Object lock = new Object();
    
    public BankAccount(double initialBalance) {
        this.balance = initialBalance;
    }
    
    public void deposit(double amount) {
        synchronized(lock) {
            balance += amount;
            System.out.println("Deposited: " + amount + ", Balance: " + balance);
        }
    }
    
    public boolean withdraw(double amount) {
        synchronized(lock) {
            if (balance >= amount) {
                balance -= amount;
                System.out.println("Withdrew: " + amount + ", Balance: " + balance);
                return true;
            }
            return false;
        }
    }
    
    public double getBalance() {
        synchronized(lock) {
            return balance;
        }
    }
}

class DataProcessor implements Callable<Integer> {
    private final List<Integer> data;
    private final String processorName;
    
    public DataProcessor(List<Integer> data, String name) {
        this.data = data;
        this.processorName = name;
    }
    
    @Override
    public Integer call() throws Exception {
        System.out.println(processorName + " started processing...");
        Thread.sleep(1000); // Simulate processing time
        
        int sum = data.stream().mapToInt(Integer::intValue).sum();
        System.out.println(processorName + " completed. Sum: " + sum);
        return sum;
    }
}

public class ConcurrencyDemo {
    public static void main(String[] args) throws InterruptedException, ExecutionException {
        // Thread pool example
        ExecutorService executor = Executors.newFixedThreadPool(3);
        
        // Bank account concurrent operations
        BankAccount account = new BankAccount(1000);
        
        // Submit multiple tasks
        for (int i = 0; i < 5; i++) {
            final int taskId = i;
            executor.submit(() -> {
                account.deposit(100);
                account.withdraw(50);
            });
        }
        
        // Callable and Future example
        List<Future<Integer>> futures = new ArrayList<>();
        
        for (int i = 0; i < 3; i++) {
            List<Integer> data = Arrays.asList(1, 2, 3, 4, 5);
            DataProcessor processor = new DataProcessor(data, "Processor-" + i);
            Future<Integer> future = executor.submit(processor);
            futures.add(future);
        }
        
        // Collect results
        int totalSum = 0;
        for (Future<Integer> future : futures) {
            totalSum += future.get(); // Blocking call
        }
        
        System.out.println("Total sum from all processors: " + totalSum);
        
        executor.shutdown();
        executor.awaitTermination(5, TimeUnit.SECONDS);
    }
}`,
            explanation: "Advanced multithreading example with thread pools, synchronized operations, Callable/Future pattern, and concurrent data processing."
          }
        ]
      }
    ],
    features: [
      "200+ comprehensive lessons",
      "50+ enterprise projects",
      "Spring Framework mastery",
      "Database connectivity (JDBC)",
      "Web development (Servlets, JSP)",
      "RESTful web services",
      "Multithreading and concurrency",
      "Design patterns implementation",
      "Testing with JUnit and Mockito",
      "Build tools (Maven, Gradle)",
      "Security best practices",
      "Performance optimization",
      "Microservices architecture",
      "Cloud deployment strategies",
      "Interactive coding exercises",
      "Lifetime access to content",
      "Community support"
    ]
  };

  const handleBack = () => {
    navigate('/courses');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-red-900/20 dark:to-orange-900/20">
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
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-3">
              <FaJava className="text-red-500" />
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
                onClick={() => setActiveTab('projects')}
                className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === 'projects' 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <FaProjectDiagram />
                Enterprise Projects
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
                  week.examples && week.examples.length > 0 && (
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

            {activeTab === 'projects' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Enterprise Java Projects</h2>
                  <p className="text-gray-600 dark:text-gray-300">Real-world projects using advanced Java technologies</p>
                </div>
                
                <div className="grid gap-6">
                  {[
                    { 
                      title: "Student Management System", 
                      desc: "Complete CRUD application with JDBC, Swing GUI, and MySQL database integration", 
                      tech: ["JDBC", "Swing", "MySQL", "MVC Pattern"],
                      level: "Intermediate" 
                    },
                    { 
                      title: "Online Book Store", 
                      desc: "Web application using Servlets, JSP, and database connectivity with shopping cart", 
                      tech: ["Servlets", "JSP", "JDBC", "Session Management"],
                      level: "Advanced" 
                    },
                    { 
                      title: "REST API Task Manager", 
                      desc: "RESTful web service using Spring Boot with JWT authentication and database", 
                      tech: ["Spring Boot", "REST API", "JWT", "JPA"],
                      level: "Advanced" 
                    },
                    { 
                      title: "Real-time Chat Application", 
                      desc: "Multi-client chat system using Socket programming and multithreading", 
                      tech: ["Socket Programming", "Multithreading", "GUI"],
                      level: "Expert" 
                    }
                  ].map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-6 border border-red-200 dark:border-gray-600"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          project.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100' :
                          project.level === 'Advanced' ? 'bg-orange-100 text-orange-800 dark:bg-orange-800 dark:text-orange-100' :
                          'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'
                        }`}>
                          {project.level}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.desc}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, idx) => (
                          <span key={idx} className="px-2 py-1 bg-red-100 dark:bg-red-800 text-red-800 dark:text-red-100 rounded text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-2">
                        <FaJava className="text-red-500" />
                        <span className="text-sm text-gray-500 dark:text-gray-400">Complete source code and documentation included</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'download' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Download Advanced Java Resources</h2>
                  <p className="text-gray-600 dark:text-gray-300">Enterprise Java development materials and frameworks</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-6"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <FaJava className="text-red-500 text-3xl" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Complete Advanced Java Course</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Enterprise development guide</p>
                      </div>
                    </div>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                        20 weeks of advanced content
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                        200+ pages of enterprise concepts
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                        50+ enterprise projects
                      </li>
                    </ul>
                    <button 
                      onClick={() => window.open('#', '_blank')}
                      className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <FaDownload />
                      Download PDF (18.7 MB)
                    </button>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-6"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <FaServer className="text-orange-500 text-3xl" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Spring Framework Guide</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Complete Spring ecosystem</p>
                      </div>
                    </div>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                        Spring Core and Spring Boot
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                        Spring MVC and REST APIs
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                        Spring Security and Data JPA
                      </li>
                    </ul>
                    <button 
                      onClick={() => window.open('#', '_blank')}
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <FaDownload />
                      Download PDF (14.3 MB)
                    </button>
                  </motion.div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdvancedJava;