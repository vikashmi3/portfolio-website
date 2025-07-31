// Course data with all the requested courses
const categoryIcons = {
    programming: 'fa-code',
    web: 'fa-globe',
    database: 'fa-database',
    'data-science': 'fa-brain',
    framework: 'fa-cubes'
};

const categoryColors = {
    programming: '#667eea',
    web: '#20bfa9',
    database: '#f39c12',
    'data-science': '#764ba2',
    framework: '#e67e22'
};

const courseThumbnails = {
    1: 'logo.jpg', // C Programming
    2: 'logo.jpg', // C++ Programming
    3: 'logo.jpg', // Java Programming
    4: 'logo.jpg', // Advanced Java
    5: 'logo.jpg', // Python Programming
    6: 'logo.jpg', // C# Programming
    7: 'logo.jpg', // JavaScript Fundamentals
    8: 'logo.jpg', // HTML & CSS Mastery
    9: 'logo.jpg', // Full Stack Web Development
    10: 'logo.jpg', // MySQL Database
    11: 'logo.jpg', // MongoDB
    12: 'logo.jpg', // Data Science
    13: 'logo.jpg', // Data Analytics
    14: 'logo.jpg', // Machine Learning
    15: 'logo.jpg', // Artificial Intelligence
    16: 'logo.jpg', // React JS
    17: 'logo.jpg', // Node.js
    18: 'logo.jpg', // Django
    19: 'logo.jpg', // Git & GitHub
    20: 'logo.jpg', // Software Testing
    21: 'logo.jpg'  // Android Development
};

const coursesData = [
    // Programming Languages
    {
        id: 1,
        name: "C Programming",
        description: "Master the fundamentals of C programming language. Learn memory management, pointers, and system-level programming concepts.",
        duration: "8 weeks",
        level: "Beginner",
        category: "programming",
        rating: 4.6,
        reviews: 245,
        popular: true
    },
    {
        id: 2,
        name: "C++ Programming",
        description: "Advanced object-oriented programming with C++. Learn classes, inheritance, polymorphism, and STL containers.",
        duration: "10 weeks",
        level: "Intermediate",
        category: "programming",
        rating: 4.7,
        reviews: 189,
        popular: true
    },
    {
        id: 3,
        name: "Java Programming",
        description: "Complete Java development course covering OOP principles, collections, multithreading, and exception handling.",
        duration: "12 weeks",
        level: "Beginner",
        category: "programming",
        rating: 4.8,
        reviews: 356,
        popular: true
    },
    {
        id: 4,
        name: "Advanced Java",
        description: "Enterprise Java development with Spring Boot, Hibernate, microservices, and advanced design patterns.",
        duration: "16 weeks",
        level: "Advanced",
        category: "programming",
        rating: 4.5,
        reviews: 156
    },
    {
        id: 5,
        name: "Python Programming",
        description: "Learn Python from basics to advanced topics. Covers data structures, algorithms, and real-world applications.",
        duration: "10 weeks",
        level: "Beginner",
        category: "programming",
        rating: 4.9,
        reviews: 421,
        popular: true
    },
    {
        id: 6,
        name: "C# Programming",
        description: "Microsoft .NET development with C#. Learn Windows applications, web development, and database integration.",
        duration: "12 weeks",
        level: "Intermediate",
        category: "programming",
        rating: 4.4,
        reviews: 134
    },
    {
        id: 7,
        name: "JavaScript Fundamentals",
        description: "Complete JavaScript course covering ES6+, DOM manipulation, async programming, and modern JavaScript features.",
        duration: "8 weeks",
        level: "Beginner",
        category: "programming",
        rating: 4.7,
        reviews: 298,
        popular: true
    },

    // Web Development
    {
        id: 8,
        name: "HTML & CSS Mastery",
        description: "Build responsive and modern websites with HTML5 and CSS3. Learn Flexbox, Grid, and responsive design principles.",
        duration: "6 weeks",
        level: "Beginner",
        category: "web",
        rating: 4.6,
        reviews: 278
    },
    {
        id: 9,
        name: "Full Stack Web Development",
        description: "Complete web development bootcamp covering frontend and backend technologies, databases, and deployment.",
        duration: "24 weeks",
        level: "Intermediate",
        category: "web",
        rating: 4.8,
        reviews: 198,
        popular: true
    },

    // Databases
    {
        id: 10,
        name: "MySQL Database",
        description: "Master MySQL database design, queries, optimization, and administration. Learn SQL from basics to advanced.",
        duration: "8 weeks",
        level: "Beginner",
        category: "database",
        rating: 4.5,
        reviews: 167
    },
    {
        id: 11,
        name: "MongoDB",
        description: "NoSQL database development with MongoDB. Learn document-based data modeling and aggregation pipelines.",
        duration: "6 weeks",
        level: "Intermediate",
        category: "database",
        rating: 4.4,
        reviews: 123
    },

    // Data Science & AI/ML
    {
        id: 12,
        name: "Data Science",
        description: "Complete data science course with Python, pandas, NumPy, and statistical analysis. Real-world projects included.",
        duration: "16 weeks",
        level: "Intermediate",
        category: "data-science",
        rating: 4.8,
        reviews: 245,
        popular: true
    },
    {
        id: 13,
        name: "Data Analytics",
        description: "Learn data visualization, statistical analysis, and business intelligence tools like Tableau and Power BI.",
        duration: "12 weeks",
        level: "Beginner",
        category: "data-science",
        rating: 4.6,
        reviews: 189
    },
    {
        id: 14,
        name: "Machine Learning",
        description: "Comprehensive ML course covering algorithms, neural networks, and practical implementation with Python and scikit-learn.",
        duration: "20 weeks",
        level: "Advanced",
        category: "data-science",
        rating: 4.9,
        reviews: 312,
        popular: true
    },
    {
        id: 15,
        name: "Artificial Intelligence",
        description: "AI fundamentals including deep learning, computer vision, NLP, and AI ethics. Hands-on projects with TensorFlow.",
        duration: "24 weeks",
        level: "Advanced",
        category: "data-science",
        rating: 4.7,
        reviews: 156
    },

    // Frameworks & Tools
    {
        id: 16,
        name: "React JS",
        description: "Modern React development with hooks, context API, and state management. Build dynamic single-page applications.",
        duration: "10 weeks",
        level: "Intermediate",
        category: "framework",
        rating: 4.8,
        reviews: 267,
        popular: true
    },
    {
        id: 17,
        name: "Node.js",
        description: "Server-side JavaScript with Node.js and Express. Learn REST APIs, authentication, and real-time applications.",
        duration: "12 weeks",
        level: "Intermediate",
        category: "framework",
        rating: 4.6,
        reviews: 198
    },
    {
        id: 18,
        name: "Django",
        description: "Python web framework for rapid development. Learn MVC architecture, ORM, authentication, and deployment.",
        duration: "14 weeks",
        level: "Intermediate",
        category: "framework",
        rating: 4.5,
        reviews: 145
    },
    {
        id: 19,
        name: "Git & GitHub",
        description: "Version control mastery with Git and GitHub. Learn branching, merging, collaboration, and CI/CD workflows.",
        duration: "4 weeks",
        level: "Beginner",
        category: "framework",
        rating: 4.7,
        reviews: 234
    },
    {
        id: 20,
        name: "Software Testing",
        description: "Complete testing course covering unit testing, integration testing, automation tools, and testing strategies.",
        duration: "10 weeks",
        level: "Intermediate",
        category: "framework",
        rating: 4.4,
        reviews: 112
    },
    {
        id: 21,
        name: "Android Development",
        description: "Build native Android apps with Java and Kotlin. Learn UI design, data storage, and Google Play deployment.",
        duration: "16 weeks",
        level: "Intermediate",
        category: "framework",
        rating: 4.6,
        reviews: 178
    }
];

// DOM elements
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const levelFilter = document.getElementById('levelFilter');
const coursesGrid = document.getElementById('coursesGrid');
const popularCourses = document.getElementById('popularCourses');
const noResults = document.getElementById('noResults');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displayPopularCourses();
    displayAllCourses(coursesData);
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    searchInput.addEventListener('input', filterCourses);
    categoryFilter.addEventListener('change', filterCourses);
    levelFilter.addEventListener('change', filterCourses);
}

// Display popular courses
function displayPopularCourses() {
    const popular = coursesData.filter(course => course.popular).slice(0, 6);
    popularCourses.innerHTML = popular.map(course => createCourseCard(course, true)).join('');
}

// Display all courses
function displayAllCourses(courses) {
    if (courses.length === 0) {
        coursesGrid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }
    
    coursesGrid.style.display = 'grid';
    noResults.style.display = 'none';
    coursesGrid.innerHTML = courses.map(course => createCourseCard(course)).join('');
}

// Create course card HTML
function createCourseCard(course, isPopular = false) {
    const levelClass = `level-${course.level.toLowerCase()}`;
    const stars = '★'.repeat(Math.floor(course.rating)) + (course.rating % 1 ? '☆' : '');
    const categoryIcon = categoryIcons[course.category] || 'fa-book';
    const categoryColor = categoryColors[course.category] || '#667eea';
    const thumbnail = courseThumbnails[course.id] || 'logo.jpg';

    return `
        <div class="course-card" data-category="${course.category}" data-level="${course.level}" data-name="${course.name.toLowerCase()}">
            ${isPopular ? '<div class="popular-badge">Popular</div>' : ''}
            <div class="course-thumbnail">
                <img src="${thumbnail}" alt="${course.name} thumbnail" />
                <span class="category-tag" style="background:${categoryColor}"><i class="fas ${categoryIcon}"></i> ${course.category.replace('-', ' ')}</span>
            </div>
            <div class="course-header">
                <h3 class="course-title">${course.name}</h3>
                <div class="course-rating">
                    <span class="stars">${stars}</span>
                    <span>${course.rating}</span>
                    <span>(${course.reviews})</span>
                </div>
            </div>
            <p class="course-description">${course.description}</p>
            <div class="course-meta">
                <div class="meta-item">
                    <i class="fas fa-clock"></i>
                    <span>${course.duration}</span>
                </div>
                <div class="meta-item">
                    <i class="fas fa-signal"></i>
                    <span class="course-level ${levelClass}">${course.level}</span>
                </div>
                <div class="meta-item">
                    <i class="fas fa-users"></i>
                    <span>${course.reviews} students</span>
                </div>
            </div>
            <div class="course-actions">
                <button class="btn btn-primary" onclick="enrollCourse(${course.id})">
                    <i class="fas fa-play"></i>
                    Enroll Now
                </button>
                <button class="btn btn-secondary" onclick="viewDetails(${course.id})">
                    <i class="fas fa-info-circle"></i>
                    View Details
                </button>
            </div>
        </div>
    `;
}

// Filter courses based on search and filters
function filterCourses() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const selectedCategory = categoryFilter.value;
    const selectedLevel = levelFilter.value;
    
    const filtered = coursesData.filter(course => {
        const matchesSearch = course.name.toLowerCase().includes(searchTerm) || 
                            course.description.toLowerCase().includes(searchTerm);
        const matchesCategory = !selectedCategory || course.category === selectedCategory;
        const matchesLevel = !selectedLevel || course.level === selectedLevel;
        
        return matchesSearch && matchesCategory && matchesLevel;
    });
    
    displayAllCourses(filtered);
}

// Course interaction functions
function enrollCourse(courseId) {
    const course = coursesData.find(c => c.id === courseId);
    if (course) {
        alert(`Enrolling in: ${course.name}\n\nThis would redirect to the enrollment page in a real application.`);
        // In a real application, this would redirect to an enrollment page
        // window.location.href = `/enroll/${courseId}`;
    }
}

function viewDetails(courseId) {
    const course = coursesData.find(c => c.id === courseId);
    if (course) {
        alert(`Course Details: ${course.name}\n\nDuration: ${course.duration}\nLevel: ${course.level}\nRating: ${course.rating}/5\n\nThis would show detailed course information in a real application.`);
        // In a real application, this would show a modal or redirect to a details page
        // showCourseModal(course) or window.location.href = `/course/${courseId}`;
    }
}

// Utility function to get course statistics
function getCourseStats() {
    const stats = {
        total: coursesData.length,
        byCategory: {},
        byLevel: {},
        averageRating: 0
    };
    
    coursesData.forEach(course => {
        // Count by category
        stats.byCategory[course.category] = (stats.byCategory[course.category] || 0) + 1;
        
        // Count by level
        stats.byLevel[course.level] = (stats.byLevel[course.level] || 0) + 1;
        
        // Sum ratings for average
        stats.averageRating += course.rating;
    });
    
    stats.averageRating = (stats.averageRating / coursesData.length).toFixed(1);
    
    return stats;
}

// Add smooth scrolling for internal navigation
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + F to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
        e.preventDefault();
        searchInput.focus();
    }
    
    // Escape to clear search
    if (e.key === 'Escape' && document.activeElement === searchInput) {
        searchInput.value = '';
        filterCourses();
    }
});

// Add loading animation for dynamic content
function showLoading(element) {
    element.innerHTML = '<div class="loading">Loading courses...</div>';
}

// Console log for debugging
console.log('Courses page loaded successfully!');
console.log('Total courses:', coursesData.length);
console.log('Course statistics:', getCourseStats());
