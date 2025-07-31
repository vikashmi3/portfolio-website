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
  FaChevronUp
} from 'react-icons/fa';

const HTMLCSSMastery = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('syllabus');
  const [expandedExample, setExpandedExample] = useState(null);

  const courseDetails = {
    name: "HTML & CSS Mastery",
    description: "Build responsive and modern websites with HTML5 and CSS3. Learn Flexbox, Grid, and responsive design principles.",
    fullDescription: "Master modern web development with HTML5 and CSS3. Learn semantic markup, responsive design, CSS Grid, Flexbox, animations, and best practices for creating beautiful, accessible websites.",
    duration: "6 weeks",
    level: "Beginner",
    instructor: "Emma Thompson",
    syllabus: [
      {
        week: 1,
        title: "HTML5 Fundamentals",
        topics: [
          "HTML document structure and doctype",
          "Semantic HTML elements (header, nav, main, section, article, aside, footer)",
          "Forms, input types, and validation",
          "Media elements (img, video, audio, picture, source)",
          "Accessibility basics (alt text, ARIA roles, landmarks)",
          "SEO best practices (meta tags, headings, structure)"
        ],
        practicals: [
          "Create semantic web pages with header, nav, main, and footer",
          "Build accessible contact forms with validation and ARIA attributes",
          "Embed responsive images and videos using <picture> and <video>",
          "Add meta tags for SEO and social sharing",
          "Project: Build a personal portfolio homepage"
        ],
        examples: [
          {
            title: "Semantic HTML5 Structure",
            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Modern portfolio website showcasing web development skills">
    <meta property="og:title" content="John Doe - Web Developer Portfolio">
    <meta property="og:description" content="Portfolio and projects of John Doe, web developer.">
    <meta property="og:image" content="profile.jpg">
    <title>John Doe - Web Developer Portfolio</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Header with navigation -->
    <header class="main-header" role="banner">
        <nav class="navbar" role="navigation" aria-label="Main navigation">
            <div class="nav-brand">
                <h1>John Doe</h1>
            </div>
            <ul class="nav-menu">
                <li><a href="#about" aria-label="About section">About</a></li>
                <li><a href="#skills" aria-label="Skills section">Skills</a></li>
                <li><a href="#projects" aria-label="Projects section">Projects</a></li>
                <li><a href="#contact" aria-label="Contact section">Contact</a></li>
            </ul>
        </nav>
    </header>

    <!-- Main content -->
    <main>
        <!-- Hero section -->
        <section class="hero" id="hero">
            <div class="hero-content">
                <h2>Full Stack Web Developer</h2>
                <p>Creating beautiful, responsive websites with modern technologies</p>
                <a href="#projects" class="cta-button" role="button">View My Work</a>
            </div>
        </section>

        <!-- About section -->
        <section class="about" id="about">
            <div class="container">
                <h2>About Me</h2>
                <div class="about-content">
                    <div class="about-text">
                        <p>I'm a passionate web developer with 5 years of experience creating 
                           digital solutions that make a difference.</p>
                        <p>I specialize in modern JavaScript frameworks, responsive design, 
                           and user experience optimization.</p>
                    </div>
                    <div class="about-image">
                        <img src="profile.jpg" alt="John Doe profile picture" 
                             width="300" height="300">
                    </div>
                </div>
            </div>
        </section>

        <!-- Skills section -->
        <section class="skills" id="skills">
            <div class="container">
                <h2>Technical Skills</h2>
                <div class="skills-grid">
                    <article class="skill-card">
                        <h3>Frontend</h3>
                        <ul>
                            <li>HTML5 & CSS3</li>
                            <li>JavaScript (ES6+)</li>
                            <li>React.js</li>
                            <li>Vue.js</li>
                        </ul>
                    </article>
                    <article class="skill-card">
                        <h3>Backend</h3>
                        <ul>
                            <li>Node.js</li>
                            <li>Python</li>
                            <li>Express.js</li>
                            <li>MongoDB</li>
                        </ul>
                    </article>
                    <article class="skill-card">
                        <h3>Tools</h3>
                        <ul>
                            <li>Git & GitHub</li>
                            <li>VS Code</li>
                            <li>Figma</li>
                            <li>Docker</li>
                        </ul>
                    </article>
                </div>
            </div>
        </section>

        <!-- Contact form -->
        <section class="contact" id="contact">
            <div class="container">
                <h2>Get In Touch</h2>
                <form class="contact-form" action="/submit" method="POST" aria-label="Contact form">
                    <div class="form-group">
                        <label for="name">Full Name *</label>
                        <input type="text" id="name" name="name" required 
                               aria-describedby="name-error" aria-required="true">
                        <span id="name-error" class="error-message" role="alert"></span>
                    </div>
                    
                    <div class="form-group">
                        <label for="email">Email Address *</label>
                        <input type="email" id="email" name="email" required 
                               aria-describedby="email-error" aria-required="true">
                        <span id="email-error" class="error-message" role="alert"></span>
                    </div>
                    
                    <div class="form-group">
                        <label for="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone" 
                               pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                               placeholder="123-456-7890">
                    </div>
                    
                    <div class="form-group">
                        <label for="subject">Subject *</label>
                        <select id="subject" name="subject" required aria-required="true">
                            <option value="">Choose a subject</option>
                            <option value="project">Project Inquiry</option>
                            <option value="collaboration">Collaboration</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="message">Message *</label>
                        <textarea id="message" name="message" rows="5" required 
                                  aria-describedby="message-error" aria-required="true"></textarea>
                        <span id="message-error" class="error-message" role="alert"></span>
                    </div>
                    
                    <button type="submit" class="submit-button">Send Message</button>
                </form>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="main-footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>John Doe</h3>
                    <p>Full Stack Web Developer</p>
                </div>
                <div class="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Connect</h4>
                    <div class="social-links">
                        <a href="https://github.com/johndoe" aria-label="GitHub profile">GitHub</a>
                        <a href="https://linkedin.com/in/johndoe" aria-label="LinkedIn profile">LinkedIn</a>
                        <a href="mailto:john@example.com" aria-label="Email contact">Email</a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 John Doe. All rights reserved.</p>
            </div>
        </div>
    </footer>
</body>
</html>`,
            explanation: "Complete HTML5 structure with semantic elements, accessibility features, forms, and proper document structure."
          },
          {
            title: "Accessible Form with ARIA and Validation",
            code: `<!-- Accessible Contact Form Example -->
<form action="/submit" method="POST" aria-label="Contact form">
  <label for="name">Name *</label>
  <input type="text" id="name" name="name" required aria-required="true" aria-describedby="name-error">
  <span id="name-error" class="error-message" role="alert"></span>

  <label for="email">Email *</label>
  <input type="email" id="email" name="email" required aria-required="true" aria-describedby="email-error">
  <span id="email-error" class="error-message" role="alert"></span>

  <label for="message">Message *</label>
  <textarea id="message" name="message" required aria-required="true" aria-describedby="message-error"></textarea>
  <span id="message-error" class="error-message" role="alert"></span>

  <button type="submit">Send</button>
</form>`,
            explanation: "Shows a contact form with required fields, ARIA attributes for accessibility, and error message placeholders for validation feedback."
          },
          {
            title: "Responsive Image with <picture> Element",
            code: `<picture>
  <source srcset="image-large.jpg" media="(min-width: 800px)">
  <source srcset="image-medium.jpg" media="(min-width: 400px)">
  <img src="image-small.jpg" alt="A beautiful landscape" width="400" height="300">
</picture>`,
            explanation: "Demonstrates responsive images using the <picture> element and multiple <source> tags for different screen sizes."
          }
        ]
      },
      {
        week: 2,
        title: "CSS3 Fundamentals and Styling",
        topics: [
          "CSS selectors and specificity",
          "Box model and positioning",
          "Typography and colors",
          "CSS variables",
          "Pseudo-classes and pseudo-elements"
        ],
        practicals: [
          "Style web pages",
          "Create layouts",
          "Implement design systems"
        ],
        examples: [
          {
            title: "Modern CSS Styling with Variables",
            code: `/* CSS Variables and Modern Styling */
:root {
  /* Color palette */
  --primary-color: #3b82f6;
  --secondary-color: #1e40af;
  --accent-color: #f59e0b;
  --text-primary: #1f2937;
  --text-secondary: #6b7280;
  --background-light: #f9fafb;
  --background-white: #ffffff;
  --border-color: #e5e7eb;
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  
  /* Typography */
  --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'Fira Code', Consolas, monospace;
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;
  --font-size-4xl: 2.25rem;
  
  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-2xl: 3rem;
  
  /* Border radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;
  
  /* Transitions */
  --transition-fast: 150ms ease-in-out;
  --transition-normal: 250ms ease-in-out;
  --transition-slow: 350ms ease-in-out;
}

/* Reset and base styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-primary);
  font-size: var(--font-size-base);
  line-height: 1.6;
  color: var(--text-primary);
  background-color: var(--background-white);
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: var(--spacing-md);
}

h1 { font-size: var(--font-size-4xl); }
h2 { font-size: var(--font-size-3xl); }
h3 { font-size: var(--font-size-2xl); }
h4 { font-size: var(--font-size-xl); }
h5 { font-size: var(--font-size-lg); }
h6 { font-size: var(--font-size-base); }

p {
  margin-bottom: var(--spacing-md);
  color: var(--text-secondary);
}

a {
  color: var(--primary-color);
  text-decoration: none;
  transition: color var(--transition-fast);
}

a:hover {
  color: var(--secondary-color);
}

a:focus {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}

/* Layout utilities */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
}

/* Header styles */
.main-header {
  background-color: var(--background-white);
  box-shadow: var(--shadow-sm);
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-md) var(--spacing-lg);
}

.nav-brand h1 {
  color: var(--primary-color);
  margin-bottom: 0;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: var(--spacing-xl);
}

.nav-menu a {
  font-weight: 500;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.nav-menu a:hover {
  background-color: var(--background-light);
  color: var(--primary-color);
}

/* Hero section */
.hero {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  padding: var(--spacing-2xl) 0;
  text-align: center;
}

.hero-content h2 {
  font-size: var(--font-size-4xl);
  margin-bottom: var(--spacing-lg);
}

.hero-content p {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-xl);
  color: rgba(255, 255, 255, 0.9);
}

.cta-button {
  display: inline-block;
  background-color: var(--accent-color);
  color: white;
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: var(--radius-lg);
  font-weight: 600;
  transition: all var(--transition-normal);
  box-shadow: var(--shadow-md);
}

.cta-button:hover {
  background-color: #d97706;
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

/* Card components */
.skill-card {
  background-color: var(--background-white);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
}

.skill-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.skill-card h3 {
  color: var(--primary-color);
  margin-bottom: var(--spacing-lg);
}

.skill-card ul {
  list-style: none;
}

.skill-card li {
  padding: var(--spacing-xs) 0;
  color: var(--text-secondary);
  position: relative;
  padding-left: var(--spacing-lg);
}

.skill-card li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--accent-color);
  font-weight: bold;
}

/* Form styles */
.contact-form {
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: var(--spacing-lg);
}

.form-group label {
  display: block;
  margin-bottom: var(--spacing-sm);
  font-weight: 500;
  color: var(--text-primary);
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: var(--spacing-md);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  transition: border-color var(--transition-fast);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.submit-button {
  background-color: var(--primary-color);
  color: white;
  padding: var(--spacing-md) var(--spacing-xl);
  border: none;
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-normal);
  width: 100%;
}

.submit-button:hover {
  background-color: var(--secondary-color);
  transform: translateY(-1px);
}

.submit-button:active {
  transform: translateY(0);
}

/* Error states */
.error-message {
  color: #dc2626;
  font-size: var(--font-size-sm);
  margin-top: var(--spacing-xs);
  display: block;
}

.form-group input:invalid,
.form-group select:invalid,
.form-group textarea:invalid {
  border-color: #dc2626;
}

/* Footer */
.main-footer {
  background-color: var(--text-primary);
  color: white;
  padding: var(--spacing-2xl) 0 var(--spacing-lg);
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xl);
}

.footer-section h3,
.footer-section h4 {
  margin-bottom: var(--spacing-md);
}

.footer-section ul {
  list-style: none;
}

.footer-section li {
  margin-bottom: var(--spacing-sm);
}

.footer-section a {
  color: rgba(255, 255, 255, 0.8);
  transition: color var(--transition-fast);
}

.footer-section a:hover {
  color: white;
}

.social-links {
  display: flex;
  gap: var(--spacing-md);
}

.footer-bottom {
  text-align: center;
  padding-top: var(--spacing-lg);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.6);
}

/* Responsive design */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    gap: var(--spacing-md);
  }
  
  .nav-menu {
    gap: var(--spacing-md);
  }
  
  .hero-content h2 {
    font-size: var(--font-size-3xl);
  }
  
  .container {
    padding: 0 var(--spacing-md);
  }
}`,
            explanation: "Comprehensive CSS with modern features including CSS variables, responsive design, form styling, and component-based architecture."
          }
        ]
      },
      {
        week: 3,
        title: "CSS Grid and Flexbox",
        topics: [
          "Flexbox layout system",
          "CSS Grid fundamentals",
          "Grid template areas",
          "Responsive grid layouts",
          "Combining Grid and Flexbox"
        ],
        practicals: [
          "Create flexible layouts",
          "Build responsive grids",
          "Design complex layouts"
        ],
        examples: [
          {
            title: "Advanced Grid and Flexbox Layouts",
            code: `/* Advanced Grid and Flexbox Layout System */

/* Grid Layout Examples */
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
}

.project-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

/* Complex Grid Layout with Named Areas */
.dashboard-layout {
  display: grid;
  grid-template-areas: 
    "header header header"
    "sidebar main aside"
    "footer footer footer";
  grid-template-columns: 250px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  gap: 1rem;
}

.dashboard-header {
  grid-area: header;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dashboard-sidebar {
  grid-area: sidebar;
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 8px;
}

.dashboard-main {
  grid-area: main;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.dashboard-aside {
  grid-area: aside;
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 8px;
}

.dashboard-footer {
  grid-area: footer;
  background: #374151;
  color: white;
  padding: 1rem 2rem;
  text-align: center;
}

/* Flexbox Navigation */
.main-navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #3b82f6;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-links a {
  text-decoration: none;
  color: #374151;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.nav-links a:hover {
  background: #f3f4f6;
  color: #3b82f6;
}

.nav-actions {
  display: flex;
  gap: 1rem;
  align-items: center;
}

/* Card Layout with Flexbox */
.feature-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 3rem 0;
}

.feature-card {
  flex: 1;
  min-width: 280px;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.feature-icon {
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}

/* Responsive Grid Gallery */
.image-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  padding: 2rem 0;
}

.gallery-item {
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-item:hover img {
  transform: scale(1.1);
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

/* Flexible Form Layout */
.contact-form-advanced {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
}

.form-group-full {
  grid-column: 1 / -1;
}

.form-row {
  display: flex;
  gap: 1rem;
}

.form-row .form-group {
  flex: 1;
}

/* Pricing Cards with Flexbox */
.pricing-container {
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 2rem;
  padding: 3rem 0;
  flex-wrap: wrap;
}

.pricing-card {
  flex: 1;
  max-width: 350px;
  min-width: 280px;
  background: white;
  border-radius: 16px;
  padding: 2.5rem 2rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  position: relative;
  transition: transform 0.3s ease;
}

.pricing-card.featured {
  transform: scale(1.05);
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.pricing-card:hover {
  transform: translateY(-8px);
}

.pricing-card.featured:hover {
  transform: scale(1.05) translateY(-8px);
}

.pricing-header {
  text-align: center;
  margin-bottom: 2rem;
}

.pricing-features {
  flex: 1;
  margin-bottom: 2rem;
}

.pricing-features ul {
  list-style: none;
  padding: 0;
}

.pricing-features li {
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.pricing-features li::before {
  content: '✓';
  color: #10b981;
  font-weight: bold;
}

.pricing-card.featured .pricing-features li::before {
  color: #fbbf24;
}

/* Responsive Breakpoints */
@media (max-width: 1024px) {
  .dashboard-layout {
    grid-template-areas: 
      "header header"
      "main aside"
      "sidebar sidebar"
      "footer footer";
    grid-template-columns: 1fr 200px;
  }
}

@media (max-width: 768px) {
  .dashboard-layout {
    grid-template-areas: 
      "header"
      "main"
      "aside"
      "sidebar"
      "footer";
    grid-template-columns: 1fr;
  }
  
  .main-navigation {
    flex-direction: column;
    gap: 1rem;
  }
  
  .nav-links {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
  
  .feature-cards {
    flex-direction: column;
  }
  
  .contact-form-advanced {
    grid-template-columns: 1fr;
  }
  
  .pricing-container {
    flex-direction: column;
    align-items: center;
  }
  
  .pricing-card.featured {
    transform: none;
  }
}

@media (max-width: 480px) {
  .portfolio-grid {
    grid-template-columns: 1fr;
  }
  
  .image-gallery {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
}`,
            explanation: "Advanced CSS Grid and Flexbox layouts showing complex responsive designs, dashboard layouts, galleries, and modern component patterns."
          }
        ]
      }
    ],
    features: [
      "30 comprehensive lessons",
      "6 hands-on web projects",
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
                                    <span className="text-gray-300 text-sm font-mono">HTML/CSS Code</span>
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

export default HTMLCSSMastery;