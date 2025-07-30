import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaSearch, 
  FaClock, 
  FaSignal, 
  FaUsers, 
  FaPlay, 
  FaInfoCircle, 
  FaStar,
  FaGraduationCap,
  FaCode,
  FaDatabase,
  FaReact,
  FaBrain,
  FaFilter,
  FaTimes,
  FaHeart,
  FaShare,
  FaLaptopCode,
  FaMobile,
  FaServer,
  FaChartBar,
  FaCheckCircle,
  FaVideo,
  FaBook,
  FaCertificate,
  FaDownload,
  FaEnvelope,
  FaUser,
  FaPhone,
  FaCalendarAlt,
  FaArrowRight,
  FaArrowLeft,
  FaSpinner
} from 'react-icons/fa';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const Courses = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [popularCourses, setPopularCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalCourses: 0
  });
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  const [enrollmentStep, setEnrollmentStep] = useState(1);
  const [enrollmentData, setEnrollmentData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    motivation: '',
    preferredSchedule: '',
    agreeToTerms: false
  });
  const [enrollmentLoading, setEnrollmentLoading] = useState(false);

  // API Functions
  const fetchCourses = async () => {
    try {
      const response = await fetch(`${API_URL}/courses?limit=50`);
      const data = await response.json();
      
      if (data.success) {
        return data.data.map(course => ({
          ...course,
          id: course._id,
          icon: getCategoryIcon(course.category)
        }));
      } else {
        throw new Error(data.message || 'Failed to fetch courses');
      }
    } catch (error) {
      console.error('Error fetching courses:', error);
      // Fallback to static data if API fails
      return getStaticCourses();
    }
  };

  const fetchPopularCourses = async () => {
    try {
      const response = await fetch(`${API_URL}/courses/popular?limit=6`);
      const data = await response.json();
      
      if (data.success) {
        return data.data.map(course => ({
          ...course,
          id: course._id,
          icon: getCategoryIcon(course.category)
        }));
      } else {
        throw new Error(data.message || 'Failed to fetch popular courses');
      }
    } catch (error) {
      console.error('Error fetching popular courses:', error);
      return [];
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'programming': return <FaCode />;
      case 'web': return <FaCode />;
      case 'database': return <FaDatabase />;
      case 'data-science': return <FaBrain />;
      case 'framework': return <FaReact />;
      default: return <FaCode />;
    }
  };

  const getStaticCourses = () => [
    // Programming Languages
    {
      id: 1,
      name: "C Programming",
      description: "Master the fundamentals of C programming language. Learn memory management, pointers, and system-level programming concepts.",
      fullDescription: "This comprehensive C programming course takes you from absolute beginner to confident programmer. You'll master fundamental concepts like variables, data types, control structures, functions, arrays, and pointers. Advanced topics include dynamic memory allocation, file handling, and data structures. Perfect for those starting their programming journey or looking to strengthen their foundation.",
      duration: "8 weeks",
      level: "Beginner",
      category: "programming",
      reviews: 245,
      popular: true,
      icon: <FaCode />,
      instructor: "Dr. Sarah Johnson",
      lessons: 45,
      projects: 8,
      prerequisites: "Basic computer literacy",
      syllabus: [
        "Introduction to Programming and C",
        "Variables, Data Types, and Operators",
        "Control Structures and Loops",
        "Functions and Scope",
        "Arrays and Strings",
        "Pointers and Memory Management",
        "Structures and File Handling",
        "Final Project and Best Practices"
      ],
      features: [
        "45 video lessons",
        "8 hands-on projects",
        "Downloadable resources",
        "Lifetime access",
        "Community support"
      ]
    },
    {
      id: 2,
      name: "C++ Programming",
      description: "Advanced object-oriented programming with C++. Learn classes, inheritance, polymorphism, and STL containers.",
      duration: "10 weeks",
      level: "Intermediate",
      category: "programming",
      reviews: 189,
      popular: true,
      icon: <FaCode />
    },
    {
      id: 3,
      name: "Java Programming",
      description: "Complete Java development course covering OOP principles, collections, multithreading, and exception handling.",
      duration: "12 weeks",
      level: "Beginner",
      category: "programming",
      reviews: 356,
      popular: true,
      icon: <FaCode />
    },
    {
      id: 4,
      name: "Advanced Java",
      description: "Enterprise Java development with Spring Boot, Hibernate, microservices, and advanced design patterns.",
      duration: "16 weeks",
      level: "Advanced",
      category: "programming",
      reviews: 156,
      icon: <FaCode />
    },
    {
      id: 5,
      name: "Python Programming",
      description: "Learn Python from basics to advanced topics. Covers data structures, algorithms, and real-world applications.",
      duration: "10 weeks",
      level: "Beginner",
      category: "programming",
      reviews: 421,
      popular: true,
      icon: <FaCode />
    },
    {
      id: 6,
      name: "C# Programming",
      description: "Microsoft .NET development with C#. Learn Windows applications, web development, and database integration.",
      duration: "12 weeks",
      level: "Intermediate",
      category: "programming",
      reviews: 134,
      icon: <FaCode />
    },
    {
      id: 7,
      name: "JavaScript Fundamentals",
      description: "Complete JavaScript course covering ES6+, DOM manipulation, async programming, and modern JavaScript features.",
      duration: "8 weeks",
      level: "Beginner",
      category: "programming",
      reviews: 298,
      popular: true,
      icon: <FaCode />
    },

    // Web Development
    {
      id: 8,
      name: "HTML & CSS Mastery",
      description: "Build responsive and modern websites with HTML5 and CSS3. Learn Flexbox, Grid, and responsive design principles.",
      duration: "6 weeks",
      level: "Beginner",
      category: "web",
      reviews: 278,
      icon: <FaCode />
    },
    {
      id: 9,
      name: "Full Stack Web Development",
      description: "Complete web development bootcamp covering frontend and backend technologies, databases, and deployment.",
      duration: "24 weeks",
      level: "Intermediate",
      category: "web",
      reviews: 198,
      popular: true,
      icon: <FaCode />
    },

    // Databases
    {
      id: 10,
      name: "MySQL Database",
      description: "Master MySQL database design, queries, optimization, and administration. Learn SQL from basics to advanced.",
      duration: "8 weeks",
      level: "Beginner",
      category: "database",
      reviews: 167,
      icon: <FaDatabase />
    },
    {
      id: 11,
      name: "MongoDB",
      description: "NoSQL database development with MongoDB. Learn document-based data modeling and aggregation pipelines.",
      duration: "6 weeks",
      level: "Intermediate",
      category: "database",
      reviews: 123,
      icon: <FaDatabase />
    },

    // Data Science & AI/ML
    {
      id: 12,
      name: "Data Science",
      description: "Complete data science course with Python, pandas, NumPy, and statistical analysis. Real-world projects included.",
      duration: "16 weeks",
      level: "Intermediate",
      category: "data-science",
      reviews: 245,
      popular: true,
      icon: <FaBrain />
    },
    {
      id: 13,
      name: "Data Analytics",
      description: "Learn data visualization, statistical analysis, and business intelligence tools like Tableau and Power BI.",
      duration: "12 weeks",
      level: "Beginner",
      category: "data-science",
      reviews: 189,
      icon: <FaBrain />
    },
    {
      id: 14,
      name: "Machine Learning",
      description: "Comprehensive ML course covering algorithms, neural networks, and practical implementation with Python and scikit-learn.",
      duration: "20 weeks",
      level: "Advanced",
      category: "data-science",
      reviews: 312,
      popular: true,
      icon: <FaBrain />
    },
    {
      id: 15,
      name: "Artificial Intelligence",
      description: "AI fundamentals including deep learning, computer vision, NLP, and AI ethics. Hands-on projects with TensorFlow.",
      duration: "24 weeks",
      level: "Advanced",
      category: "data-science",
      reviews: 156,
      icon: <FaBrain />
    },

    // Frameworks & Tools
    {
      id: 16,
      name: "React JS",
      description: "Modern React development with hooks, context API, and state management. Build dynamic single-page applications.",
      duration: "10 weeks",
      level: "Intermediate",
      category: "framework",
      reviews: 267,
      popular: true,
      icon: <FaReact />
    },
    {
      id: 17,
      name: "Node.js",
      description: "Server-side JavaScript with Node.js and Express. Learn REST APIs, authentication, and real-time applications.",
      duration: "12 weeks",
      level: "Intermediate",
      category: "framework",
      reviews: 198,
      icon: <FaCode />
    },
    {
      id: 18,
      name: "Django",
      description: "Python web framework for rapid development. Learn MVC architecture, ORM, authentication, and deployment.",
      duration: "14 weeks",
      level: "Intermediate",
      category: "framework",
      reviews: 145,
      icon: <FaCode />
    },
    {
      id: 19,
      name: "Git & GitHub",
      description: "Version control mastery with Git and GitHub. Learn branching, merging, collaboration, and CI/CD workflows.",
      duration: "4 weeks",
      level: "Beginner",
      category: "framework",
      reviews: 234,
      icon: <FaCode />
    },
    {
      id: 20,
      name: "Software Testing",
      description: "Complete testing course covering unit testing, integration testing, automation tools, and testing strategies.",
      duration: "10 weeks",
      level: "Intermediate",
      category: "framework",
      reviews: 112,
      icon: <FaCode />
    },
    {
      id: 21,
      name: "Android Development",
      description: "Build native Android apps with Java and Kotlin. Learn UI design, data storage, and Google Play deployment.",
      duration: "16 weeks",
      level: "Intermediate",
      category: "framework",
      reviews: 178,
      icon: <FaCode />
    }
  ];

  const categories = [
    { value: '', label: 'All Categories', icon: <FaGraduationCap /> },
    { value: 'programming', label: 'Programming Languages', icon: <FaCode /> },
    { value: 'web', label: 'Web Development', icon: <FaCode /> },
    { value: 'database', label: 'Databases', icon: <FaDatabase /> },
    { value: 'data-science', label: 'Data Science & AI/ML', icon: <FaBrain /> },
    { value: 'framework', label: 'Frameworks & Tools', icon: <FaReact /> }
  ];

  const levels = ['', 'Beginner', 'Intermediate', 'Advanced'];

  // Load courses on component mount
  useEffect(() => {
    const loadCourses = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const [allCourses, popularCoursesData] = await Promise.all([
          fetchCourses(),
          fetchPopularCourses()
        ]);
        
        setCourses(allCourses);
        setPopularCourses(popularCoursesData);
        setFilteredCourses(allCourses);
      } catch (error) {
        console.error('Error loading courses:', error);
        setError('Failed to load courses. Please try again later.');
        // Fallback to static data
        const staticCourses = getStaticCourses();
        setCourses(staticCourses);
        setFilteredCourses(staticCourses);
        setPopularCourses(staticCourses.filter(course => course.popular).slice(0, 6));
      } finally {
        setLoading(false);
      }
    };
    
    loadCourses();
  }, []);

  useEffect(() => {
    filterCourses();
  }, [searchTerm, selectedCategory, selectedLevel, courses]);

  // Course detail functions
  const openCourseModal = (course) => {
    setSelectedCourse(course);
    setShowCourseModal(true);
  };

  const closeCourseModal = () => {
    setShowCourseModal(false);
    setSelectedCourse(null);
  };

  // Enrollment functions
  const openEnrollModal = (course) => {
    // Direct navigation to course pages
    const courseRoutes = {
      1: '/c-programming',
      2: '/cpp-programming', 
      3: '/java-programming',
      4: '/java-programming', // Advanced Java -> Java Programming
      5: '/python-programming',
      6: '/csharp-programming',
      7: '/javascript-fundamentals',
      8: '/html-css-mastery',
      9: '/html-css-mastery', // Full Stack -> HTML CSS
      10: '/mysql',
      11: '/nodejs', // MongoDB -> Node.js
      12: '/data-science',
      13: '/data-science', // Data Analytics
      14: '/machine-learning',
      15: '/machine-learning', // AI -> ML
      16: '/react-js',
      17: '/nodejs',
      18: '/nodejs', // Django -> Node.js for now
      19: '/javascript-fundamentals', // Git -> JavaScript
      20: '/javascript-fundamentals', // Software Testing -> JavaScript
      21: '/android-development'
    };
    
    if (courseRoutes[course.id]) {
      navigate(courseRoutes[course.id]);
      return;
    }
    
    // For other courses, open the enrollment modal
    setSelectedCourse(course);
    setShowEnrollModal(true);
    setEnrollmentStep(1);
    setEnrollmentData({
      name: '',
      email: '',
      phone: '',
      experience: '',
      motivation: '',
      preferredSchedule: '',
      agreeToTerms: false
    });
  };

  const closeEnrollModal = () => {
    setShowEnrollModal(false);
    setSelectedCourse(null);
    setEnrollmentStep(1);
  };

  const handleEnrollmentChange = (field, value) => {
    setEnrollmentData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const nextEnrollmentStep = () => {
    setEnrollmentStep(prev => Math.min(prev + 1, 3));
  };

  const prevEnrollmentStep = () => {
    setEnrollmentStep(prev => Math.max(prev - 1, 1));
  };

  const handleEnrollmentSubmit = async () => {
    try {
      setEnrollmentLoading(true);
      
      const response = await fetch(`${API_URL}/courses/${selectedCourse.id}/enroll`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...enrollmentData,
          courseId: selectedCourse.id,
          courseName: selectedCourse.name
        })
      });
      
      const data = await response.json();
      
      if (data.success) {
        alert(`🎉 Successfully enrolled in ${selectedCourse.name}!\n\nYou will receive a confirmation email with course access details within 24 hours.\n\nWelcome to your learning journey!`);
        closeEnrollModal();
      } else {
        alert(data.message || 'Enrollment failed. Please try again.');
      }
    } catch (error) {
      console.error('Enrollment error:', error);
      alert('Enrollment failed. Please try again later.');
    } finally {
      setEnrollmentLoading(false);
    }
  };

  const filterCourses = () => {
    let filtered = courses.filter(course => {
      const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !selectedCategory || course.category === selectedCategory;
      const matchesLevel = !selectedLevel || course.level === selectedLevel;
      
      return matchesSearch && matchesCategory && matchesLevel;
    });
    
    setFilteredCourses(filtered);
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Advanced': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };


  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Programming & Technical Courses
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Master the skills that matter in today's tech world - All courses are completely FREE!
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search Bar */}
            <div className="relative flex-1 min-w-0">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white min-w-48"
            >
              {categories.map(category => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>

            {/* Level Filter */}
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white min-w-40"
            >
              <option value="">All Levels</option>
              {levels.slice(1).map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Popular Courses Section */}
        {popularCourses.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <FaStar className="text-primary" />
              Popular Courses
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularCourses.map((course, index) => (
                <CourseCard 
                  key={course.id} 
                  course={course} 
                  index={index} 
                  isPopular 
                  onEnroll={openEnrollModal}
                  onViewDetails={openCourseModal}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* All Courses Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <FaGraduationCap className="text-primary" />
            All Courses ({filteredCourses.length})
          </h2>
          
          {filteredCourses.length === 0 ? (
            <div className="text-center py-12">
              <FaSearch className="mx-auto text-6xl text-gray-300 mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">
                No courses found
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Try adjusting your search or filter criteria
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course, index) => (
                <CourseCard 
                  key={course.id} 
                  course={course} 
                  index={index} 
                  onEnroll={openEnrollModal}
                  onViewDetails={openCourseModal}
                />
              ))}
            </div>
          )}
        </motion.div>

        {/* Course Detail Modal */}
        <CourseDetailModal 
          course={selectedCourse}
          isOpen={showCourseModal}
          onClose={closeCourseModal}
          onEnroll={openEnrollModal}
        />

        {/* Enrollment Modal */}
        <EnrollmentModal 
          course={selectedCourse}
          isOpen={showEnrollModal}
          onClose={closeEnrollModal}
          step={enrollmentStep}
          data={enrollmentData}
          onChange={handleEnrollmentChange}
          onNext={nextEnrollmentStep}
          onPrev={prevEnrollmentStep}
          onSubmit={handleEnrollmentSubmit}
          loading={enrollmentLoading}
        />
      </div>
    </div>
  );
};

const CourseCard = ({ course, index, isPopular = false, onEnroll, onViewDetails }) => {
  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Advanced': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };


  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 group hover:scale-105"
    >
      {/* Card Header */}
      <div className="relative p-6 pb-4">
        {isPopular && (
          <span className="absolute top-4 right-4 bg-gradient-to-r from-primary to-secondary text-white px-2 py-1 rounded-full text-xs font-semibold">
            Popular
          </span>
        )}
        
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="text-2xl text-primary">
              {course.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
              {course.name}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
            {course.reviews} students enrolled
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
          {course.description}
        </p>

        {/* Course Meta */}
        <div className="flex flex-wrap gap-4 mb-6 text-sm">
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <FaClock className="text-primary" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <FaUsers className="text-primary" />
            <span>{course.reviews} students</span>
          </div>
        </div>

        {/* Level Badge */}
        <div className="mb-6">
          <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(course.level)}`}>
            <FaSignal />
            {course.level}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button 
            onClick={() => onEnroll && onEnroll(course)}
            className="flex-1 bg-primary hover:bg-secondary text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
          >
            <FaPlay />
            Enroll Now
          </button>
          <button 
            onClick={() => onViewDetails && onViewDetails(course)}
            className="px-4 py-2 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg font-semibold transition-colors flex items-center gap-2"
          >
            <FaInfoCircle />
            Details
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// Course Detail Modal Component
const CourseDetailModal = ({ course, isOpen, onClose, onEnroll }) => {
  if (!course) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="text-3xl text-primary">{course.icon}</div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{course.name}</h2>
                  <p className="text-gray-600 dark:text-gray-300">by {course.instructor || 'Expert Instructor'}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-2xl"
              >
                <FaTimes />
              </button>
            </div>

            <div className="p-6">
              {/* Course Overview */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Course Overview</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {course.fullDescription || course.description}
                  </p>

                  {/* Prerequisites */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Prerequisites</h4>
                    <p className="text-gray-600 dark:text-gray-300">{course.prerequisites || 'No prerequisites required'}</p>
                  </div>

                  {/* Course Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">What's Included</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {(course.features || [
                        `${course.lessons || 25} video lessons`,
                        `${course.projects || 5} hands-on projects`,
                        'Downloadable resources',
                        'Lifetime access',
                        'Community support'
                      ]).map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                          <FaCheckCircle className="text-green-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Course Stats */}
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl font-bold text-green-600">FREE</span>
                    </div>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">No Cost</span>
                  </div>

                  {/* Course Stats */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Duration</span>
                      <span className="font-semibold flex items-center gap-1">
                        <FaClock className="text-primary" />
                        {course.duration}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Level</span>
                      <span className="font-semibold flex items-center gap-1">
                        <FaSignal className="text-primary" />
                        {course.level}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Students</span>
                      <span className="font-semibold flex items-center gap-1">
                        <FaUsers className="text-primary" />
                        {course.reviews}
                      </span>
                    </div>
                    {course.lessons && (
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Lessons</span>
                        <span className="font-semibold flex items-center gap-1">
                          <FaVideo className="text-primary" />
                          {course.lessons}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Enroll Button */}
                  <button
                    onClick={() => {
                      onClose();
                      onEnroll(course);
                    }}
                    className="w-full mt-6 bg-primary hover:bg-secondary text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <FaPlay />
                    Enroll Now
                  </button>
                </div>
              </div>

              {/* Course Syllabus */}
              {course.syllabus && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Course Syllabus</h3>
                  <div className="grid gap-3">
                    {course.syllabus.map((module, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </span>
                        <span className="text-gray-800 dark:text-gray-200">{module}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Enrollment Modal Component
const EnrollmentModal = ({ course, isOpen, onClose, step, data, onChange, onNext, onPrev, onSubmit, loading }) => {
  if (!course) return null;

  const isStepValid = (currentStep) => {
    switch (currentStep) {
      case 1:
        return data.name.trim() && data.email.trim() && data.phone.trim();
      case 2:
        return data.experience && data.motivation.trim() && data.preferredSchedule;
      case 3:
        return data.agreeToTerms;
      default:
        return false;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="border-b border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Enroll in Course</h2>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <FaTimes />
                </button>
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl text-primary">{course.icon}</div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{course.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{course.duration} • {course.level}</p>
                </div>
              </div>

              {/* Progress Steps */}
              <div className="flex items-center justify-between mb-2">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      s === step ? 'bg-primary text-white' :
                      s < step ? 'bg-green-500 text-white' :
                      'bg-gray-200 text-gray-600 dark:bg-gray-600 dark:text-gray-300'
                    }`}>
                      {s < step ? <FaCheckCircle /> : s}
                    </div>
                    {s < 3 && (
                      <div className={`w-16 h-1 mx-2 ${
                        s < step ? 'bg-green-500' : 'bg-gray-200 dark:bg-gray-600'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-xs text-gray-600 dark:text-gray-300">
                <span>Personal Info</span>
                <span>Experience</span>
                <span>Confirmation</span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Step 1: Personal Information */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                >
                  <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Personal Information</h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <FaUser className="inline mr-2" />Full Name *
                    </label>
                    <input
                      type="text"
                      value={data.name}
                      onChange={(e) => onChange('name', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <FaEnvelope className="inline mr-2" />Email Address *
                    </label>
                    <input
                      type="email"
                      value={data.email}
                      onChange={(e) => onChange('email', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <FaPhone className="inline mr-2" />Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={data.phone}
                      onChange={(e) => onChange('phone', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </motion.div>
              )}

              {/* Step 2: Experience & Motivation */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                >
                  <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Background & Preferences</h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Programming Experience *
                    </label>
                    <select
                      value={data.experience}
                      onChange={(e) => onChange('experience', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
                    >
                      <option value="">Select your experience level</option>
                      <option value="complete-beginner">Complete Beginner</option>
                      <option value="some-basics">Know Some Basics</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Why do you want to take this course? *
                    </label>
                    <textarea
                      value={data.motivation}
                      onChange={(e) => onChange('motivation', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
                      rows={3}
                      placeholder="Tell us about your goals and motivation..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <FaCalendarAlt className="inline mr-2" />Preferred Learning Schedule *
                    </label>
                    <select
                      value={data.preferredSchedule}
                      onChange={(e) => onChange('preferredSchedule', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
                    >
                      <option value="">Select your preferred schedule</option>
                      <option value="weekday-mornings">Weekday Mornings</option>
                      <option value="weekday-evenings">Weekday Evenings</option>
                      <option value="weekends">Weekends</option>
                      <option value="flexible">Flexible / Self-paced</option>
                    </select>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Confirmation */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Confirm Enrollment</h3>
                  
                  {/* Summary */}
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Enrollment Summary</h4>
                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <div><strong>Course:</strong> {course.name}</div>
                      <div><strong>Name:</strong> {data.name}</div>
                      <div><strong>Email:</strong> {data.email}</div>
                      <div><strong>Experience:</strong> {data.experience.replace('-', ' ').toUpperCase()}</div>
                      <div><strong>Schedule:</strong> {data.preferredSchedule.replace('-', ' ').toUpperCase()}</div>
                    </div>
                  </div>

                  {/* Terms Agreement */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="agreeTerms"
                      checked={data.agreeToTerms}
                      onChange={(e) => onChange('agreeToTerms', e.target.checked)}
                      className="mt-1 w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary dark:focus:ring-primary dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="agreeTerms" className="text-sm text-gray-600 dark:text-gray-300">
                      I agree to the <span className="text-primary underline cursor-pointer">Terms of Service</span> and{' '}
                      <span className="text-primary underline cursor-pointer">Privacy Policy</span>. I understand that
                      course access will be provided within 24 hours of enrollment confirmation.
                    </label>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="border-t border-gray-200 dark:border-gray-700 p-6 flex justify-between">
              <button
                onClick={step === 1 ? onClose : onPrev}
                className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white flex items-center gap-2"
              >
                <FaArrowLeft />
                {step === 1 ? 'Cancel' : 'Previous'}
              </button>

              {step < 3 ? (
                <button
                  onClick={onNext}
                  disabled={!isStepValid(step)}
                  className="px-6 py-2 bg-primary hover:bg-secondary text-white rounded-lg font-semibold transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                  <FaArrowRight />
                </button>
              ) : (
                <button
                  onClick={onSubmit}
                  disabled={!isStepValid(step) || loading}
                  className="px-6 py-2 bg-primary hover:bg-secondary text-white rounded-lg font-semibold transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      Enrolling...
                    </>
                  ) : (
                    <>
                      <FaCheckCircle />
                      Complete Enrollment
                    </>
                  )}
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Courses;
