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

  FaPalette,
  FaDesktop,
  FaMobile
} from 'react-icons/fa';

const HtmlCss = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('syllabus');
  const [expandedExample, setExpandedExample] = useState(null);

  const courseDetails = {
    name: "HTML & CSS Complete Course",
    description: "Master web development fundamentals with HTML structure and CSS styling, responsive design, and modern web standards.",
    fullDescription: "Learn to build beautiful, responsive websites from scratch. Master HTML semantics, CSS layouts, Flexbox, Grid, animations, and modern web development best practices.",
    duration: "12 weeks",
    level: "Beginner to Intermediate",
    instructor: "Sarah Wilson",
    introduction: {
      overview: "HTML (HyperText Markup Language) and CSS (Cascading Style Sheets) are the fundamental technologies for building web pages. HTML provides structure and content, while CSS handles presentation and styling.",
      htmlBasics: {
        definition: "HTML is the standard markup language for creating web pages and web applications",
        structure: [
          "<!DOCTYPE html> - Document type declaration",
          "<html> - Root element containing all content",
          "<head> - Metadata and document information",
          "<body> - Visible page content"
        ],
        concepts: [
          "Tags and Elements - Building blocks of HTML",
          "Attributes - Additional information for elements",
          "Semantic HTML - Meaningful structure for accessibility",
          "Document Object Model (DOM) - Tree structure representation"
        ]
      },
      cssBasics: {
        definition: "CSS is a stylesheet language used to describe the presentation of HTML documents",
        types: [
          "Inline CSS - Styles applied directly to elements",
          "Internal CSS - Styles defined in <style> tags",
          "External CSS - Separate stylesheet files"
        ],
        concepts: [
          "Selectors - Target specific HTML elements",
          "Properties - Define styling characteristics",
          "Values - Specify property settings",
          "Cascade - How styles are applied and inherited"
        ]
      }
    },
    syllabus: [
      {
        week: 1,
        title: "HTML Fundamentals",
        topics: [
          "HTML structure and syntax",
          "Document type and basic tags",
          "Text elements: headings, paragraphs",
          "Links and navigation",
          "Images and media basics",
          "HTML validation and best practices"
        ],
        practicals: [
          "Create first HTML page",
          "Build basic website structure",
          "Add navigation and links",
          "Insert images and media"
        ],
        examples: [
          {
            title: "Complete HTML Document Structure",
            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Learn HTML fundamentals with practical examples">
    <meta name="keywords" content="HTML, web development, tutorial">
    <meta name="author" content="Sarah Wilson">
    <title>HTML Fundamentals - Complete Guide</title>
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    
    <!-- External CSS -->
    <link rel="stylesheet" href="styles.css">
    
    <!-- Internal CSS -->
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
        }
        .highlight {
            background-color: yellow;
            padding: 2px 4px;
        }
    </style>
</head>
<body>
    <!-- Header Section -->
    <header>
        <h1>Welcome to HTML Learning</h1>
        <nav>
            <ul>
                <li><a href="#basics">Basics</a></li>
                <li><a href="#elements">Elements</a></li>
                <li><a href="#forms">Forms</a></li>
                <li><a href="#media">Media</a></li>
            </ul>
        </nav>
    </header>

    <!-- Main Content -->
    <main>
        <!-- Basics Section -->
        <section id="basics">
            <h2>HTML Basics</h2>
            <p>HTML (HyperText Markup Language) is the <span class="highlight">foundation</span> of web development.</p>
            
            <!-- Text Elements -->
            <h3>Text Elements</h3>
            <h4>Different Heading Levels</h4>
            <h5>Subheading Level 5</h5>
            <h6>Smallest Heading</h6>
            
            <p>This is a regular paragraph with <strong>bold text</strong> and <em>italic text</em>.</p>
            <p>You can also use <b>bold</b>, <i>italic</i>, <u>underlined</u>, and <mark>highlighted</mark> text.</p>
            
            <!-- Quotes and Citations -->
            <blockquote cite="https://www.w3.org/standards/">
                "The Web is designed to work for all people, whatever their hardware, software, language, location, or ability."
                <footer>— <cite>W3C Web Standards</cite></footer>
            </blockquote>
            
            <p>As Tim Berners-Lee said: <q>The original idea of the web was that it should be a collaborative space.</q></p>
        </section>

        <!-- Lists Section -->
        <section id="elements">
            <h2>HTML Elements</h2>
            
            <!-- Unordered List -->
            <h3>Web Development Skills</h3>
            <ul>
                <li>HTML - Structure and content</li>
                <li>CSS - Styling and layout</li>
                <li>JavaScript - Interactivity and behavior</li>
                <li>Responsive Design - Mobile-friendly layouts</li>
            </ul>
            
            <!-- Ordered List -->
            <h3>Learning Path</h3>
            <ol>
                <li>Learn HTML basics</li>
                <li>Master CSS styling</li>
                <li>Add JavaScript functionality</li>
                <li>Build responsive layouts</li>
                <li>Deploy your website</li>
            </ol>
            
            <!-- Definition List -->
            <h3>Web Terms</h3>
            <dl>
                <dt>HTML</dt>
                <dd>HyperText Markup Language - the structure of web pages</dd>
                
                <dt>CSS</dt>
                <dd>Cascading Style Sheets - the presentation of web pages</dd>
                
                <dt>DOM</dt>
                <dd>Document Object Model - the programming interface for HTML documents</dd>
            </dl>
            
            <!-- Links -->
            <h3>Useful Links</h3>
            <p>Visit <a href="https://developer.mozilla.org" target="_blank" rel="noopener">MDN Web Docs</a> for comprehensive documentation.</p>
            <p>Download our <a href="/resources/html-cheatsheet.pdf" download>HTML Cheat Sheet</a>.</p>
            <p>Contact us at <a href="mailto:info@example.com">info@example.com</a> or call <a href="tel:+1234567890">+1 (234) 567-890</a>.</p>
        </section>

        <!-- Table Section -->
        <section>
            <h2>HTML Table Example</h2>
            <table border="1" cellpadding="10" cellspacing="0">
                <caption>Web Browser Market Share 2024</caption>
                <thead>
                    <tr>
                        <th scope="col">Browser</th>
                        <th scope="col">Market Share</th>
                        <th scope="col">Engine</th>
                        <th scope="col">Release Year</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Chrome</td>
                        <td>65.12%</td>
                        <td>Blink</td>
                        <td>2008</td>
                    </tr>
                    <tr>
                        <td>Safari</td>
                        <td>18.78%</td>
                        <td>WebKit</td>
                        <td>2003</td>
                    </tr>
                    <tr>
                        <td>Edge</td>
                        <td>5.65%</td>
                        <td>Blink</td>
                        <td>2015</td>
                    </tr>
                    <tr>
                        <td>Firefox</td>
                        <td>3.05%</td>
                        <td>Gecko</td>
                        <td>2002</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="2"><strong>Total Major Browsers</strong></td>
                        <td colspan="2"><strong>92.6%</strong></td>
                    </tr>
                </tfoot>
            </table>
        </section>

        <!-- Forms Section -->
        <section id="forms">
            <h2>HTML Forms</h2>
            <form action="/submit" method="POST" enctype="multipart/form-data">
                <fieldset>
                    <legend>Personal Information</legend>
                    
                    <div>
                        <label for="firstName">First Name:</label>
                        <input type="text" id="firstName" name="firstName" required placeholder="Enter your first name">
                    </div>
                    
                    <div>
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required placeholder="your@email.com">
                    </div>
                    
                    <div>
                        <label for="phone">Phone:</label>
                        <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890">
                    </div>
                    
                    <div>
                        <label for="birthdate">Birth Date:</label>
                        <input type="date" id="birthdate" name="birthdate">
                    </div>
                </fieldset>
                
                <fieldset>
                    <legend>Preferences</legend>
                    
                    <div>
                        <label for="country">Country:</label>
                        <select id="country" name="country" required>
                            <option value="">Select a country</option>
                            <option value="us">United States</option>
                            <option value="ca">Canada</option>
                            <option value="uk">United Kingdom</option>
                            <option value="au">Australia</option>
                        </select>
                    </div>
                    
                    <div>
                        <label>Interests:</label>
                        <input type="checkbox" id="webdev" name="interests" value="webdev">
                        <label for="webdev">Web Development</label>
                        
                        <input type="checkbox" id="design" name="interests" value="design">
                        <label for="design">Design</label>
                        
                        <input type="checkbox" id="programming" name="interests" value="programming">
                        <label for="programming">Programming</label>
                    </div>
                    
                    <div>
                        <label>Experience Level:</label>
                        <input type="radio" id="beginner" name="experience" value="beginner">
                        <label for="beginner">Beginner</label>
                        
                        <input type="radio" id="intermediate" name="experience" value="intermediate">
                        <label for="intermediate">Intermediate</label>
                        
                        <input type="radio" id="advanced" name="experience" value="advanced">
                        <label for="advanced">Advanced</label>
                    </div>
                    
                    <div>
                        <label for="portfolio">Portfolio URL:</label>
                        <input type="url" id="portfolio" name="portfolio" placeholder="https://yourportfolio.com">
                    </div>
                    
                    <div>
                        <label for="resume">Upload Resume:</label>
                        <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx">
                    </div>
                    
                    <div>
                        <label for="message">Additional Comments:</label>
                        <textarea id="message" name="message" rows="4" cols="50" placeholder="Tell us about yourself..."></textarea>
                    </div>
                </fieldset>
                
                <div>
                    <button type="submit">Submit Form</button>
                    <button type="reset">Reset Form</button>
                </div>
            </form>
        </section>

        <!-- Media Section -->
        <section id="media">
            <h2>HTML Media Elements</h2>
            
            <!-- Images -->
            <h3>Images</h3>
            <figure>
                <img src="https://via.placeholder.com/400x200/4CAF50/white?text=Responsive+Image" 
                     alt="Example of responsive web design" 
                     width="400" 
                     height="200"
                     loading="lazy">
                <figcaption>Example of a responsive image with proper alt text</figcaption>
            </figure>
            
            <!-- Audio -->
            <h3>Audio</h3>
            <audio controls preload="metadata">
                <source src="audio/sample.mp3" type="audio/mpeg">
                <source src="audio/sample.ogg" type="audio/ogg">
                Your browser does not support the audio element.
            </audio>
            
            <!-- Video -->
            <h3>Video</h3>
            <video controls width="400" height="225" poster="video/thumbnail.jpg">
                <source src="video/sample.mp4" type="video/mp4">
                <source src="video/sample.webm" type="video/webm">
                <track kind="subtitles" src="video/subtitles.vtt" srclang="en" label="English">
                Your browser does not support the video element.
            </video>
            
            <!-- Embedded Content -->
            <h3>Embedded Content</h3>
            <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                    width="560" 
                    height="315" 
                    frameborder="0" 
                    allowfullscreen
                    title="YouTube video player">
            </iframe>
        </section>
    </main>

    <!-- Aside Content -->
    <aside>
        <h2>Quick Tips</h2>
        <ul>
            <li>Always use semantic HTML elements</li>
            <li>Include alt text for images</li>
            <li>Validate your HTML code</li>
            <li>Use proper heading hierarchy</li>
        </ul>
    </aside>

    <!-- Footer -->
    <footer>
        <p>&copy; 2024 HTML Learning Course. All rights reserved.</p>
        <p>
            <a href="#top">Back to Top</a> | 
            <a href="/privacy">Privacy Policy</a> | 
            <a href="/contact">Contact Us</a>
        </p>
    </footer>

    <!-- JavaScript -->
    <script>
        // Simple JavaScript for interactivity
        document.addEventListener('DOMContentLoaded', function() {
            console.log('HTML document loaded successfully!');
            
            // Smooth scrolling for navigation links
            const navLinks = document.querySelectorAll('nav a[href^="#"]');
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            });
        });
    </script>
</body>
</html>`,
            explanation: "Complete HTML document demonstrating all fundamental elements, semantic structure, forms, media, and best practices."
          }
        ]
      },
      {
        week: 2,
        title: "CSS Fundamentals",
        topics: [
          "CSS syntax and selectors",
          "Colors, fonts, and text styling",
          "Box model: margin, border, padding",
          "Display and positioning",
          "CSS units and measurements",
          "Inheritance and cascade"
        ],
        practicals: [
          "Style HTML pages with CSS",
          "Create navigation menus",
          "Build card layouts",
          "Typography and color schemes"
        ],
        examples: []
      },
      {
        week: 3,
        title: "Advanced CSS Selectors",
        topics: [
          "Pseudo-classes and pseudo-elements",
          "Attribute selectors",
          "Combinators and specificity",
          "CSS variables and custom properties",
          "Advanced text and font properties"
        ],
        practicals: [
          "Interactive hover effects",
          "Custom button designs",
          "Advanced typography",
          "CSS variable implementation"
        ],
        examples: []
      },
      {
        week: 4,
        title: "CSS Layout - Flexbox",
        topics: [
          "Flexbox container properties",
          "Flex item properties",
          "Flex direction and wrapping",
          "Alignment and justification",
          "Responsive flex layouts"
        ],
        practicals: [
          "Build flexible navigation",
          "Create card grid layouts",
          "Responsive sidebar layout",
          "Flexbox gallery design"
        ],
        examples: []
      },
      {
        week: 5,
        title: "CSS Layout - Grid",
        topics: [
          "Grid container and items",
          "Grid template areas",
          "Grid lines and positioning",
          "Responsive grid layouts",
          "Grid vs Flexbox comparison"
        ],
        practicals: [
          "Magazine-style layouts",
          "Dashboard grid design",
          "Responsive image gallery",
          "Complex web layouts"
        ],
        examples: []
      },
      {
        week: 6,
        title: "Responsive Web Design",
        topics: [
          "Mobile-first approach",
          "Media queries and breakpoints",
          "Responsive images and media",
          "Viewport and meta tags",
          "Touch-friendly interfaces"
        ],
        practicals: [
          "Mobile-responsive website",
          "Adaptive navigation menu",
          "Responsive image gallery",
          "Touch-optimized forms"
        ],
        examples: []
      },
      {
        week: 7,
        title: "CSS Animations and Transitions",
        topics: [
          "CSS transitions and timing",
          "Keyframe animations",
          "Transform properties",
          "Animation performance",
          "Interactive animations"
        ],
        practicals: [
          "Animated loading spinners",
          "Hover effect animations",
          "Page transition effects",
          "Interactive UI components"
        ],
        examples: []
      },
      {
        week: 8,
        title: "Advanced CSS Techniques",
        topics: [
          "CSS preprocessors (Sass basics)",
          "CSS methodologies (BEM)",
          "Performance optimization",
          "Cross-browser compatibility",
          "CSS debugging tools"
        ],
        practicals: [
          "Sass workflow setup",
          "BEM methodology practice",
          "Performance audit",
          "Browser testing"
        ],
        examples: []
      },
      {
        week: 9,
        title: "HTML Forms and Validation",
        topics: [
          "Form elements and attributes",
          "Input types and validation",
          "Form styling with CSS",
          "Accessibility in forms",
          "Custom form controls"
        ],
        practicals: [
          "Contact form creation",
          "Registration form design",
          "Form validation styling",
          "Accessible form components"
        ],
        examples: []
      },
      {
        week: 10,
        title: "Web Accessibility",
        topics: [
          "WCAG guidelines",
          "Semantic HTML importance",
          "ARIA attributes",
          "Keyboard navigation",
          "Screen reader compatibility"
        ],
        practicals: [
          "Accessibility audit",
          "ARIA implementation",
          "Keyboard navigation testing",
          "Screen reader optimization"
        ],
        examples: []
      },
      {
        week: 11,
        title: "Modern CSS Features",
        topics: [
          "CSS custom properties",
          "CSS logical properties",
          "Container queries",
          "CSS subgrid",
          "Modern color functions"
        ],
        practicals: [
          "Theme switching system",
          "Container query layouts",
          "Advanced grid designs",
          "Modern color schemes"
        ],
        examples: []
      },
      {
        week: 12,
        title: "Final Project and Deployment",
        topics: [
          "Project planning and structure",
          "Code organization",
          "Performance optimization",
          "Deployment strategies",
          "Maintenance and updates"
        ],
        practicals: [
          "Complete portfolio website",
          "Code optimization",
          "Performance testing",
          "Website deployment"
        ],
        examples: []
      }
    ],
    features: [
      "120+ comprehensive lessons",
      "30+ hands-on projects",
      "Complete HTML5 semantic elements",
      "Modern CSS Grid and Flexbox",
      "Responsive design mastery",
      "CSS animations and transitions",
      "Web accessibility (WCAG)",
      "Cross-browser compatibility",
      "Performance optimization",
      "Modern CSS features",
      "Interactive coding exercises",
      "Lifetime access to content",
      "Community support"
    ]
  };

  const handleBack = () => {
    navigate('/courses');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-gray-900 dark:via-orange-900/20 dark:to-red-900/20">
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
                                    <span className="text-gray-300 text-sm font-mono">HTML Code</span>
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

            {activeTab === 'download' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Download HTML & CSS Resources</h2>
                  <p className="text-gray-600 dark:text-gray-300">Comprehensive web development materials and resources</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-6"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <FaFileAlt className="text-orange-500 text-3xl" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Complete HTML & CSS Course</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Full curriculum with examples</p>
                      </div>
                    </div>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                        12 weeks of structured content
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                        120+ pages of theory and examples
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                        30+ hands-on projects
                      </li>
                    </ul>
                    <button 
                      onClick={() => window.open('#', '_blank')}
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <FaDownload />
                      Download PDF (8.5 MB)
                    </button>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-6"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <FaPalette className="text-blue-500 text-3xl" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">CSS Design Guide</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Advanced styling techniques</p>
                      </div>
                    </div>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        Flexbox and Grid layouts
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        Animations and transitions
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        Responsive design patterns
                      </li>
                    </ul>
                    <button 
                      onClick={() => window.open('#', '_blank')}
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <FaDownload />
                      Download PDF (6.2 MB)
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

export default HtmlCss;