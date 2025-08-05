import React from 'react';
import { Link } from 'react-router-dom';

const PythonProgramming = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-yellow-300 opacity-20 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-400 opacity-15 rounded-full animate-ping"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <nav className="mb-8 flex items-center space-x-2 text-sm">
            <Link to="/" className="text-blue-200 hover:text-white transition-colors duration-200 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              Home
            </Link>
            <span className="text-blue-300">→</span>
            <Link to="/courses" className="text-blue-200 hover:text-white transition-colors duration-200">Courses</Link>
            <span className="text-blue-300">→</span>
            <span className="text-white font-medium">Python Programming</span>
          </nav>
          
          <div className="text-center">
            <div className="inline-flex items-center bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-medium mb-6">
              🐍 Most Popular Course
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Python Programming
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-light mb-8 text-blue-100">
              Master Python from Zero to Hero
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed px-4">
              Learn Python programming with hands-on projects, real-world examples, and comprehensive coverage from basics to advanced concepts.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-8 px-4">
              <Link to="/courses" className="group bg-white text-blue-600 px-6 sm:px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
                  </svg>
                  <span className="sm:inline hidden">Back to Courses</span>
                  <span className="sm:hidden">Back</span>
                </span>
              </Link>
              <Link to="#introduction" className="group bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 sm:px-8 py-4 rounded-xl font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <span className="flex items-center justify-center">
                  <span className="sm:inline hidden">Start Learning</span>
                  <span className="sm:hidden">Start</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </span>
              </Link>
            </div>
            
            <div className="flex justify-center space-x-4 sm:space-x-8 text-blue-200 px-4">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-white">15</div>
                <div className="text-xs sm:text-sm">Chapters</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-white">5</div>
                <div className="text-xs sm:text-sm">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-white">50+</div>
                <div className="text-xs sm:text-sm">Examples</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-80 lg:sticky lg:top-8 lg:h-fit order-2 lg:order-1">
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border border-gray-200">
              <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-4 flex items-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Course Navigation
              </h3>
              <nav className="grid grid-cols-2 lg:grid-cols-1 gap-1 lg:gap-2">
                <a href="#introduction" className="block px-2 lg:px-3 py-2 text-xs lg:text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                  <span className="font-medium">01.</span> <span className="hidden sm:inline">Introduction</span><span className="sm:hidden">Intro</span>
                </a>
                <a href="#setup" className="block px-2 lg:px-3 py-2 text-xs lg:text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                  <span className="font-medium">02.</span> <span className="hidden sm:inline">Environment Setup</span><span className="sm:hidden">Setup</span>
                </a>
                <a href="#syntax" className="block px-2 lg:px-3 py-2 text-xs lg:text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                  <span className="font-medium">03.</span> <span className="hidden sm:inline">Basic Syntax</span><span className="sm:hidden">Syntax</span>
                </a>
                <a href="#variables" className="block px-2 lg:px-3 py-2 text-xs lg:text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                  <span className="font-medium">04.</span> <span className="hidden sm:inline">Variables & Data Types</span><span className="sm:hidden">Variables</span>
                </a>
                <a href="#operators" className="block px-2 lg:px-3 py-2 text-xs lg:text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                  <span className="font-medium">05.</span> Operators
                </a>
                <a href="#control" className="block px-2 lg:px-3 py-2 text-xs lg:text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                  <span className="font-medium">06.</span> <span className="hidden sm:inline">Control Structures</span><span className="sm:hidden">Control</span>
                </a>
                <a href="#functions" className="block px-2 lg:px-3 py-2 text-xs lg:text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                  <span className="font-medium">07.</span> Functions
                </a>
                <a href="#data-structures" className="block px-2 lg:px-3 py-2 text-xs lg:text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                  <span className="font-medium">08.</span> <span className="hidden sm:inline">Data Structures</span><span className="sm:hidden">Data</span>
                </a>
                <a href="#oop" className="block px-2 lg:px-3 py-2 text-xs lg:text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                  <span className="font-medium">09.</span> OOP
                </a>
                <a href="#challenges" className="block px-2 lg:px-3 py-2 text-xs lg:text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                  <span className="font-medium">10.</span> Challenges
                </a>
                <a href="#projects" className="block px-2 lg:px-3 py-2 text-xs lg:text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                  <span className="font-medium">11.</span> Projects
                </a>
                <a href="#quiz" className="block px-2 lg:px-3 py-2 text-xs lg:text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                  <span className="font-medium">12.</span> Quiz
                </a>
              </nav>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="text-xs text-gray-500 mb-2">Progress</div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full" style={{width: '0%'}}></div>
                </div>
                <div className="text-xs text-gray-500 mt-1">0% Complete</div>
              </div>
            </div>
          </aside>
          
          <main className="flex-1 max-w-4xl order-1 lg:order-2">
        <div className="bg-gradient-to-r from-white to-blue-50 rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 mb-8 lg:mb-12 border border-blue-100">
          <div className="text-center mb-6 lg:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">Course Contents</h2>
            <p className="text-sm sm:text-base text-gray-600">Complete roadmap to Python mastery</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 sm:w-6 sm:h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-base sm:text-lg text-gray-800">Fundamentals</h3>
              </div>
              <ul className="space-y-3">
                <li><a href="#introduction" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 group">
                  <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs font-bold text-blue-600 mr-3 group-hover:bg-blue-600 group-hover:text-white transition-all">1</span>
                  Introduction
                </a></li>
                <li><a href="#setup" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 group">
                  <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs font-bold text-blue-600 mr-3 group-hover:bg-blue-600 group-hover:text-white transition-all">2</span>
                  Environment Setup
                </a></li>
                <li><a href="#syntax" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 group">
                  <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs font-bold text-blue-600 mr-3 group-hover:bg-blue-600 group-hover:text-white transition-all">3</span>
                  Basic Syntax
                </a></li>
                <li><a href="#variables" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 group">
                  <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs font-bold text-blue-600 mr-3 group-hover:bg-blue-600 group-hover:text-white transition-all">4</span>
                  Variables & Data Types
                </a></li>
                <li><a href="#operators" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 group">
                  <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs font-bold text-blue-600 mr-3 group-hover:bg-blue-600 group-hover:text-white transition-all">5</span>
                  Operators
                </a></li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 sm:w-6 sm:h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-base sm:text-lg text-gray-800">Core Concepts</h3>
              </div>
              <ul className="space-y-3">
                <li><a href="#control" className="flex items-center text-gray-700 hover:text-green-600 transition-colors duration-200 group">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-xs font-bold text-green-600 mr-3 group-hover:bg-green-600 group-hover:text-white transition-all">6</span>
                  Control Structures
                </a></li>
                <li><a href="#functions" className="flex items-center text-gray-700 hover:text-green-600 transition-colors duration-200 group">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-xs font-bold text-green-600 mr-3 group-hover:bg-green-600 group-hover:text-white transition-all">7</span>
                  Functions
                </a></li>
                <li><a href="#data-structures" className="flex items-center text-gray-700 hover:text-green-600 transition-colors duration-200 group">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-xs font-bold text-green-600 mr-3 group-hover:bg-green-600 group-hover:text-white transition-all">8</span>
                  Data Structures
                </a></li>
                <li><a href="#oop" className="flex items-center text-gray-700 hover:text-green-600 transition-colors duration-200 group">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-xs font-bold text-green-600 mr-3 group-hover:bg-green-600 group-hover:text-white transition-all">9</span>
                  Object-Oriented Programming
                </a></li>
                <li><a href="#modules" className="flex items-center text-gray-700 hover:text-green-600 transition-colors duration-200 group">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-xs font-bold text-green-600 mr-3 group-hover:bg-green-600 group-hover:text-white transition-all">10</span>
                  Modules & Packages
                </a></li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 sm:w-6 sm:h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-base sm:text-lg text-gray-800">Advanced & Projects</h3>
              </div>
              <ul className="space-y-3">
                <li><a href="#exceptions" className="flex items-center text-gray-700 hover:text-purple-600 transition-colors duration-200 group">
                  <span className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-xs font-bold text-purple-600 mr-3 group-hover:bg-purple-600 group-hover:text-white transition-all">11</span>
                  Exception Handling
                </a></li>
                <li><a href="#file-io" className="flex items-center text-gray-700 hover:text-purple-600 transition-colors duration-200 group">
                  <span className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-xs font-bold text-purple-600 mr-3 group-hover:bg-purple-600 group-hover:text-white transition-all">12</span>
                  File I/O
                </a></li>
                <li><a href="#challenges" className="flex items-center text-gray-700 hover:text-purple-600 transition-colors duration-200 group">
                  <span className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-xs font-bold text-purple-600 mr-3 group-hover:bg-purple-600 group-hover:text-white transition-all">13</span>
                  Mini Challenges
                </a></li>
                <li><a href="#projects" className="flex items-center text-gray-700 hover:text-purple-600 transition-colors duration-200 group">
                  <span className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-xs font-bold text-purple-600 mr-3 group-hover:bg-purple-600 group-hover:text-white transition-all">14</span>
                  Final Projects
                </a></li>
                <li><a href="#quiz" className="flex items-center text-gray-700 hover:text-purple-600 transition-colors duration-200 group">
                  <span className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-xs font-bold text-purple-600 mr-3 group-hover:bg-purple-600 group-hover:text-white transition-all">15</span>
                  Quiz & Assessment
                </a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Introduction */}
            <section id="introduction" className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 lg:mb-8 border border-gray-200">
              <div className="flex items-center mb-4 lg:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-blue-600 font-bold text-sm sm:text-lg">01</span>
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Introduction to Python</h2>
                  <p className="text-xs sm:text-sm text-gray-500">Get started with Python basics</p>
                </div>
              </div>

          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">What is Python?</h3>
            <p className="text-gray-700 mb-4">
              Python is a high-level, interpreted programming language known for its simplicity and readability. 
              Created by Guido van Rossum in 1991, Python emphasizes code readability and allows programmers 
              to express concepts in fewer lines of code.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-green-700">Why Choose Python?</h4>
                <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                  <li>Easy to learn and read</li>
                  <li>Versatile and powerful</li>
                  <li>Large community support</li>
                  <li>Extensive libraries</li>
                  <li>Cross-platform compatibility</li>
                  <li>Great for beginners</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-blue-700">Python Applications</h4>
                <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                  <li>Web Development (Django, Flask)</li>
                  <li>Data Science & Analytics</li>
                  <li>Machine Learning & AI</li>
                  <li>Automation & Scripting</li>
                  <li>Desktop Applications</li>
                  <li>Game Development</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-purple-700">Python Philosophy - The Zen of Python</h3>
            <div className="bg-gray-100 p-4 rounded-lg">
              <pre className="text-sm text-gray-700">
{`Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
Readability counts.`}
              </pre>
            </div>
          </div>
        </section>

        {/* Environment Setup */}
        <section id="setup" className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6 lg:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 lg:mb-6">2. Environment Setup</h2>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">Installing Python</h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-blue-700">Windows</h4>
                <ol className="text-sm text-gray-700 list-decimal list-inside space-y-1">
                  <li>Visit python.org</li>
                  <li>Download Python installer</li>
                  <li>Run installer as administrator</li>
                  <li>Check "Add to PATH"</li>
                  <li>Verify: <code>python --version</code></li>
                </ol>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-green-700">macOS</h4>
                <ol className="text-sm text-gray-700 list-decimal list-inside space-y-1">
                  <li>Install Homebrew</li>
                  <li><code>brew install python</code></li>
                  <li>Or download from python.org</li>
                  <li>Verify: <code>python3 --version</code></li>
                </ol>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-orange-700">Linux</h4>
                <ol className="text-sm text-gray-700 list-decimal list-inside space-y-1">
                  <li>Ubuntu: <code>sudo apt install python3</code></li>
                  <li>CentOS: <code>sudo yum install python3</code></li>
                  <li>Verify: <code>python3 --version</code></li>
                </ol>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-green-700">Development Environment</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Recommended IDEs</h4>
                <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                  <li><strong>PyCharm</strong> - Professional IDE</li>
                  <li><strong>VS Code</strong> - Lightweight, extensible</li>
                  <li><strong>Jupyter Notebook</strong> - Data science</li>
                  <li><strong>IDLE</strong> - Built-in Python IDE</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Package Management</h4>
                <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                  <li><strong>pip</strong> - Python package installer</li>
                  <li><strong>conda</strong> - Anaconda package manager</li>
                  <li><strong>virtualenv</strong> - Virtual environments</li>
                  <li><strong>pipenv</strong> - Modern dependency management</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-purple-700">Your First Python Program</h3>
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto">
{`# hello_world.py
print("Hello, World!")
print("Welcome to Python Programming!")

# Run this program:
# python hello_world.py`}
            </pre>
          </div>
        </section>

        {/* Basic Syntax */}
        <section id="syntax" className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6 lg:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 lg:mb-6">3. Basic Syntax</h2>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">Python Syntax Rules</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-blue-700">Key Features</h4>
                <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                  <li>Indentation defines code blocks</li>
                  <li>No semicolons required</li>
                  <li>Case-sensitive language</li>
                  <li>Dynamic typing</li>
                  <li>Interactive interpreter</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-green-700">Comments</h4>
                <pre className="text-xs text-gray-700">
{`# Single line comment

"""
Multi-line comment
or docstring
"""

'''
Another way for
multi-line comments
'''`}
                </pre>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-green-700">Indentation & Code Blocks</h3>
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto mb-4">
{`# Correct indentation
if 5 > 2:
    print("Five is greater than two!")
    print("This is inside the if block")

print("This is outside the if block")

# Nested indentation
for i in range(3):
    print(f"Outer loop: {i}")
    for j in range(2):
        print(f"  Inner loop: {j}")
    print("Back to outer loop")

# Function with proper indentation
def greet(name):
    if name:
        print(f"Hello, {name}!")
        return True
    else:
        print("Hello, stranger!")
        return False`}
            </pre>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-purple-700">Python Keywords</h3>
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="grid grid-cols-4 gap-2 text-sm">
                <span className="bg-blue-100 px-2 py-1 rounded">and</span>
                <span className="bg-blue-100 px-2 py-1 rounded">as</span>
                <span className="bg-blue-100 px-2 py-1 rounded">assert</span>
                <span className="bg-blue-100 px-2 py-1 rounded">break</span>
                <span className="bg-blue-100 px-2 py-1 rounded">class</span>
                <span className="bg-blue-100 px-2 py-1 rounded">continue</span>
                <span className="bg-blue-100 px-2 py-1 rounded">def</span>
                <span className="bg-blue-100 px-2 py-1 rounded">del</span>
                <span className="bg-blue-100 px-2 py-1 rounded">elif</span>
                <span className="bg-blue-100 px-2 py-1 rounded">else</span>
                <span className="bg-blue-100 px-2 py-1 rounded">except</span>
                <span className="bg-blue-100 px-2 py-1 rounded">finally</span>
                <span className="bg-blue-100 px-2 py-1 rounded">for</span>
                <span className="bg-blue-100 px-2 py-1 rounded">from</span>
                <span className="bg-blue-100 px-2 py-1 rounded">global</span>
                <span className="bg-blue-100 px-2 py-1 rounded">if</span>
                <span className="bg-blue-100 px-2 py-1 rounded">import</span>
                <span className="bg-blue-100 px-2 py-1 rounded">in</span>
                <span className="bg-blue-100 px-2 py-1 rounded">is</span>
                <span className="bg-blue-100 px-2 py-1 rounded">lambda</span>
                <span className="bg-blue-100 px-2 py-1 rounded">not</span>
                <span className="bg-blue-100 px-2 py-1 rounded">or</span>
                <span className="bg-blue-100 px-2 py-1 rounded">pass</span>
                <span className="bg-blue-100 px-2 py-1 rounded">raise</span>
                <span className="bg-blue-100 px-2 py-1 rounded">return</span>
                <span className="bg-blue-100 px-2 py-1 rounded">try</span>
                <span className="bg-blue-100 px-2 py-1 rounded">while</span>
                <span className="bg-blue-100 px-2 py-1 rounded">with</span>
                <span className="bg-blue-100 px-2 py-1 rounded">yield</span>
              </div>
            </div>
          </div>
        </section>

        {/* Variables & Data Types */}
        <section id="variables" className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6 lg:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 lg:mb-6">4. Variables & Data Types</h2>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">Variables</h3>
            <p className="text-gray-700 mb-4">
              Python variables are dynamically typed - you don't need to declare their type explicitly.
            </p>
            
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto mb-6">
{`# Variable assignment
name = "Alice"
age = 25
height = 5.6
is_student = True

# Multiple assignment
x, y, z = 1, 2, 3
a = b = c = 10

# Variable naming rules
valid_name = "Good"
_private_var = "Also good"
name2 = "Numbers allowed"
# 2name = "Invalid - starts with number"
# my-var = "Invalid - contains hyphen"

# Check variable type
print(type(name))    # <class 'str'>
print(type(age))     # <class 'int'>
print(type(height))  # <class 'float'>
print(type(is_student))  # <class 'bool'>`}
            </pre>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-green-700">Data Types</h3>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Data Type</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">int</td>
                    <td className="border border-gray-300 px-4 py-2">Integer numbers</td>
                    <td className="border border-gray-300 px-4 py-2"><code>42, -17, 0</code></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">float</td>
                    <td className="border border-gray-300 px-4 py-2">Decimal numbers</td>
                    <td className="border border-gray-300 px-4 py-2"><code>3.14, -2.5, 1.0</code></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">str</td>
                    <td className="border border-gray-300 px-4 py-2">Text strings</td>
                    <td className="border border-gray-300 px-4 py-2"><code>"Hello", 'World'</code></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">bool</td>
                    <td className="border border-gray-300 px-4 py-2">Boolean values</td>
                    <td className="border border-gray-300 px-4 py-2"><code>True, False</code></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">list</td>
                    <td className="border border-gray-300 px-4 py-2">Ordered, mutable collection</td>
                    <td className="border border-gray-300 px-4 py-2"><code>[1, 2, 3]</code></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">tuple</td>
                    <td className="border border-gray-300 px-4 py-2">Ordered, immutable collection</td>
                    <td className="border border-gray-300 px-4 py-2"><code>(1, 2, 3)</code></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">dict</td>
                    <td className="border border-gray-300 px-4 py-2">Key-value pairs</td>
                    <td className="border border-gray-300 px-4 py-2"><code>{'{"key": "value"}'}</code></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">set</td>
                    <td className="border border-gray-300 px-4 py-2">Unordered, unique elements</td>
                    <td className="border border-gray-300 px-4 py-2"><code>{'{'}{1, 2, 3}{'}'}</code></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-purple-700">String Operations</h3>
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto">
{`# String creation
single_quote = 'Hello'
double_quote = "World"
triple_quote = """Multi-line
string example"""

# String concatenation
full_name = "John" + " " + "Doe"
greeting = f"Hello, {full_name}!"  # f-string (Python 3.6+)

# String methods
text = "Python Programming"
print(text.upper())        # PYTHON PROGRAMMING
print(text.lower())        # python programming
print(text.replace("Python", "Java"))  # Java Programming
print(text.split())        # ['Python', 'Programming']
print(len(text))           # 18

# String slicing
print(text[0:6])          # Python
print(text[:6])           # Python
print(text[7:])           # Programming
print(text[-11:])         # Programming`}
            </pre>
          </div>
        </section>

        {/* Operators */}
        <section id="operators" className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6 lg:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 lg:mb-6">5. Operators</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Arithmetic Operators</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300 text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-2 py-1">Operator</th>
                      <th className="border border-gray-300 px-2 py-1">Description</th>
                      <th className="border border-gray-300 px-2 py-1">Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-gray-300 px-2 py-1">+</td><td className="border border-gray-300 px-2 py-1">Addition</td><td className="border border-gray-300 px-2 py-1">5 + 3 = 8</td></tr>
                    <tr><td className="border border-gray-300 px-2 py-1">-</td><td className="border border-gray-300 px-2 py-1">Subtraction</td><td className="border border-gray-300 px-2 py-1">5 - 3 = 2</td></tr>
                    <tr><td className="border border-gray-300 px-2 py-1">*</td><td className="border border-gray-300 px-2 py-1">Multiplication</td><td className="border border-gray-300 px-2 py-1">5 * 3 = 15</td></tr>
                    <tr><td className="border border-gray-300 px-2 py-1">/</td><td className="border border-gray-300 px-2 py-1">Division</td><td className="border border-gray-300 px-2 py-1">5 / 2 = 2.5</td></tr>
                    <tr><td className="border border-gray-300 px-2 py-1">//</td><td className="border border-gray-300 px-2 py-1">Floor Division</td><td className="border border-gray-300 px-2 py-1">5 // 2 = 2</td></tr>
                    <tr><td className="border border-gray-300 px-2 py-1">%</td><td className="border border-gray-300 px-2 py-1">Modulus</td><td className="border border-gray-300 px-2 py-1">5 % 2 = 1</td></tr>
                    <tr><td className="border border-gray-300 px-2 py-1">**</td><td className="border border-gray-300 px-2 py-1">Exponentiation</td><td className="border border-gray-300 px-2 py-1">5 ** 2 = 25</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-700">Comparison Operators</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300 text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-2 py-1">Operator</th>
                      <th className="border border-gray-300 px-2 py-1">Description</th>
                      <th className="border border-gray-300 px-2 py-1">Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-gray-300 px-2 py-1">==</td><td className="border border-gray-300 px-2 py-1">Equal to</td><td className="border border-gray-300 px-2 py-1">5 == 5 → True</td></tr>
                    <tr><td className="border border-gray-300 px-2 py-1">!=</td><td className="border border-gray-300 px-2 py-1">Not equal</td><td className="border border-gray-300 px-2 py-1">5 != 3 → True</td></tr>
                    <tr><td className="border border-gray-300 px-2 py-1">&gt;</td><td className="border border-gray-300 px-2 py-1">Greater than</td><td className="border border-gray-300 px-2 py-1">5 &gt; 3 → True</td></tr>
                    <tr><td className="border border-gray-300 px-2 py-1">&lt;</td><td className="border border-gray-300 px-2 py-1">Less than</td><td className="border border-gray-300 px-2 py-1">3 &lt; 5 → True</td></tr>
                    <tr><td className="border border-gray-300 px-2 py-1">&gt;=</td><td className="border border-gray-300 px-2 py-1">Greater or equal</td><td className="border border-gray-300 px-2 py-1">5 &gt;= 5 → True</td></tr>
                    <tr><td className="border border-gray-300 px-2 py-1">&lt;=</td><td className="border border-gray-300 px-2 py-1">Less or equal</td><td className="border border-gray-300 px-2 py-1">3 &lt;= 5 → True</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-purple-700">Logical & Assignment Operators</h3>
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto">
{`# Logical operators
x, y = True, False
print(x and y)    # False
print(x or y)     # True
print(not x)      # False

# Assignment operators
a = 10
a += 5    # a = a + 5 → 15
a -= 3    # a = a - 3 → 12
a *= 2    # a = a * 2 → 24
a /= 4    # a = a / 4 → 6.0
a //= 2   # a = a // 2 → 3.0
a %= 2    # a = a % 2 → 1.0
a **= 3   # a = a ** 3 → 1.0

# Identity operators
list1 = [1, 2, 3]
list2 = [1, 2, 3]
list3 = list1

print(list1 is list3)     # True (same object)
print(list1 is list2)     # False (different objects)
print(list1 == list2)     # True (same content)

# Membership operators
fruits = ['apple', 'banana', 'orange']
print('apple' in fruits)      # True
print('grape' not in fruits)  # True`}
            </pre>
          </div>
        </section>

        {/* Control Structures */}
        <section id="control" className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6 lg:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 lg:mb-6">6. Control Structures</h2>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">Conditional Statements</h3>
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto mb-6">
{`# if-elif-else statement
age = 18

if age < 13:
    print("Child")
elif age < 20:
    print("Teenager")
elif age < 60:
    print("Adult")
else:
    print("Senior")

# Ternary operator (conditional expression)
status = "Adult" if age >= 18 else "Minor"
print(status)

# Multiple conditions
score = 85
grade = 'A' if score >= 90 else 'B' if score >= 80 else 'C' if score >= 70 else 'F'

# Nested conditions
weather = "sunny"
temperature = 25

if weather == "sunny":
    if temperature > 20:
        print("Perfect day for outdoor activities!")
    else:
        print("Sunny but a bit cold")
else:
    print("Not ideal weather")`}
            </pre>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-green-700">Loops</h3>
            
            <h4 className="text-lg font-semibold mb-2 text-green-600">For Loops</h4>
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto mb-4">
{`# Basic for loop
for i in range(5):
    print(f"Count: {i}")

# For loop with start, stop, step
for i in range(2, 10, 2):
    print(f"Even number: {i}")

# Iterating over lists
fruits = ['apple', 'banana', 'orange']
for fruit in fruits:
    print(f"I like {fruit}")

# Enumerate for index and value
for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")

# Iterating over dictionaries
person = {'name': 'Alice', 'age': 30, 'city': 'New York'}
for key, value in person.items():
    print(f"{key}: {value}")

# List comprehension
squares = [x**2 for x in range(10)]
even_squares = [x**2 for x in range(10) if x % 2 == 0]`}
            </pre>
            
            <h4 className="text-lg font-semibold mb-2 text-green-600">While Loops</h4>
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto mb-4">
{`# Basic while loop
count = 0
while count < 5:
    print(f"Count: {count}")
    count += 1

# While loop with break and continue
number = 0
while True:
    number += 1
    if number % 2 == 0:
        continue  # Skip even numbers
    if number > 10:
        break     # Exit loop
    print(f"Odd number: {number}")

# While-else construct
search_list = [1, 3, 5, 7, 9]
target = 5
index = 0

while index < len(search_list):
    if search_list[index] == target:
        print(f"Found {target} at index {index}")
        break
    index += 1
else:
    print(f"{target} not found in list")`}
            </pre>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-purple-700">Loop Control</h3>
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto">
{`# break - exit loop completely
for i in range(10):
    if i == 5:
        break
    print(i)  # Prints 0, 1, 2, 3, 4

# continue - skip current iteration
for i in range(10):
    if i % 2 == 0:
        continue
    print(i)  # Prints 1, 3, 5, 7, 9

# pass - placeholder (do nothing)
for i in range(5):
    if i == 2:
        pass  # TODO: implement special case
    else:
        print(i)

# Nested loops with labeled break (using exception)
def nested_loop_example():
    try:
        for i in range(3):
            for j in range(3):
                if i == 1 and j == 1:
                    raise StopIteration
                print(f"i={i}, j={j}")
    except StopIteration:
        print("Broke out of nested loops")`}
            </pre>
          </div>
        </section>

        {/* Functions */}
        <section id="functions" className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6 lg:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 lg:mb-6">7. Functions</h2>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">Function Basics</h3>
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto mb-6">
{`# Basic function definition
def greet(name):
    """This function greets someone"""
    return f"Hello, {name}!"

# Function call
message = greet("Alice")
print(message)  # Hello, Alice!

# Function with multiple parameters
def add_numbers(a, b):
    return a + b

result = add_numbers(5, 3)
print(result)  # 8

# Function with default parameters
def greet_with_title(name, title="Mr."):
    return f"Hello, {title} {name}!"

print(greet_with_title("Smith"))           # Hello, Mr. Smith!
print(greet_with_title("Johnson", "Dr."))  # Hello, Dr. Johnson!

# Function with variable arguments
def sum_all(*args):
    return sum(args)

print(sum_all(1, 2, 3, 4, 5))  # 15

# Function with keyword arguments
def create_profile(**kwargs):
    profile = {}
    for key, value in kwargs.items():
        profile[key] = value
    return profile

user = create_profile(name="Alice", age=30, city="New York")
print(user)  # {'name': 'Alice', 'age': 30, 'city': 'New York'}`}
            </pre>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-green-700">Advanced Function Concepts</h3>
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto mb-6">
{`# Lambda functions (anonymous functions)
square = lambda x: x ** 2
print(square(5))  # 25

# Lambda with multiple arguments
multiply = lambda x, y: x * y
print(multiply(3, 4))  # 12

# Higher-order functions
def apply_operation(numbers, operation):
    return [operation(num) for num in numbers]

numbers = [1, 2, 3, 4, 5]
squared = apply_operation(numbers, lambda x: x ** 2)
print(squared)  # [1, 4, 9, 16, 25]

# Built-in higher-order functions
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# map() - apply function to all elements
squares = list(map(lambda x: x ** 2, numbers))
print(squares)

# filter() - filter elements based on condition
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(evens)  # [2, 4, 6, 8, 10]

# reduce() - reduce list to single value
from functools import reduce
sum_all = reduce(lambda x, y: x + y, numbers)
print(sum_all)  # 55

# Recursion
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

print(factorial(5))  # 120

def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

print([fibonacci(i) for i in range(10)])  # [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]`}
            </pre>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-purple-700">Decorators</h3>
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto">
{`# Simple decorator
def my_decorator(func):
    def wrapper():
        print("Something before the function")
        func()
        print("Something after the function")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()
# Output:
# Something before the function
# Hello!
# Something after the function

# Decorator with arguments
def timer_decorator(func):
    import time
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        print(f"{func.__name__} took {end_time - start_time:.4f} seconds")
        return result
    return wrapper

@timer_decorator
def slow_function():
    import time
    time.sleep(1)
    return "Done!"

result = slow_function()  # slow_function took 1.0001 seconds`}
            </pre>
          </div>
        </section>

        {/* Data Structures */}
        <section id="data-structures" className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6 lg:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 lg:mb-6">8. Data Structures</h2>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">Lists</h3>
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto mb-6">
{`# List creation and basic operations
fruits = ['apple', 'banana', 'orange']
numbers = [1, 2, 3, 4, 5]
mixed = ['hello', 42, 3.14, True]

# List methods
fruits.append('grape')          # Add to end
fruits.insert(1, 'kiwi')       # Insert at index
fruits.remove('banana')        # Remove first occurrence
popped = fruits.pop()           # Remove and return last item
fruits.extend(['mango', 'pear']) # Add multiple items

print(fruits)  # ['apple', 'kiwi', 'orange', 'grape', 'mango', 'pear']

# List slicing
print(fruits[1:4])     # ['kiwi', 'orange', 'grape']
print(fruits[:3])      # ['apple', 'kiwi', 'orange']
print(fruits[::2])     # ['apple', 'orange', 'mango']
print(fruits[::-1])    # Reverse list

# List comprehensions
squares = [x**2 for x in range(10)]
even_squares = [x**2 for x in range(10) if x % 2 == 0]
matrix = [[i*j for j in range(3)] for i in range(3)]

# Sorting
numbers = [3, 1, 4, 1, 5, 9, 2, 6]
numbers.sort()                    # In-place sort
sorted_numbers = sorted(numbers)  # Return new sorted list
numbers.sort(reverse=True)        # Descending order`}
            </pre>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-green-700">Dictionaries</h3>
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto mb-6">
{`# Dictionary creation
person = {
    'name': 'Alice',
    'age': 30,
    'city': 'New York',
    'hobbies': ['reading', 'swimming']
}

# Dictionary operations
print(person['name'])           # Alice
print(person.get('age'))        # 30
print(person.get('country', 'Unknown'))  # Unknown (default value)

# Adding/updating items
person['email'] = 'alice@email.com'
person.update({'phone': '123-456-7890', 'age': 31})

# Dictionary methods
keys = person.keys()            # dict_keys(['name', 'age', 'city', ...])
values = person.values()        # dict_values(['Alice', 31, 'New York', ...])
items = person.items()          # dict_items([('name', 'Alice'), ...])

# Dictionary comprehension
squares_dict = {x: x**2 for x in range(5)}
print(squares_dict)  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

# Nested dictionaries
students = {
    'alice': {'grade': 'A', 'subjects': ['math', 'science']},
    'bob': {'grade': 'B', 'subjects': ['english', 'history']}
}

print(students['alice']['grade'])  # A`}
            </pre>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-purple-700">Tuples & Sets</h3>
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto">
{`# Tuples (immutable)
coordinates = (10, 20)
rgb_color = (255, 128, 0)
mixed_tuple = ('hello', 42, 3.14)

# Tuple unpacking
x, y = coordinates
r, g, b = rgb_color

# Named tuples
from collections import namedtuple
Point = namedtuple('Point', ['x', 'y'])
p = Point(10, 20)
print(p.x, p.y)  # 10 20

# Sets (unique elements)
fruits = {'apple', 'banana', 'orange'}
numbers = {1, 2, 3, 4, 5}

# Set operations
fruits.add('grape')
fruits.remove('banana')  # Raises error if not found
fruits.discard('kiwi')   # No error if not found

# Set operations
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}

union = set1 | set2           # {1, 2, 3, 4, 5, 6}
intersection = set1 & set2    # {3, 4}
difference = set1 - set2      # {1, 2}
symmetric_diff = set1 ^ set2  # {1, 2, 5, 6}

# Set comprehension
even_squares = {x**2 for x in range(10) if x % 2 == 0}
print(even_squares)  # {0, 4, 16, 36, 64}`}
            </pre>
          </div>
        </section>

        {/* Object-Oriented Programming */}
        <section id="oop" className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6 lg:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 lg:mb-6">9. Object-Oriented Programming</h2>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">Classes and Objects</h3>
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto mb-6">
{`# Class definition
class Person:
    # Class variable
    species = "Homo sapiens"
    
    def __init__(self, name, age):
        # Instance variables
        self.name = name
        self.age = age
    
    # Instance method
    def introduce(self):
        return f"Hi, I'm {self.name} and I'm {self.age} years old."
    
    def have_birthday(self):
        self.age += 1
        print(f"Happy birthday! {self.name} is now {self.age}")
    
    # Class method
    @classmethod
    def get_species(cls):
        return cls.species
    
    # Static method
    @staticmethod
    def is_adult(age):
        return age >= 18

# Creating objects
person1 = Person("Alice", 25)
person2 = Person("Bob", 17)

print(person1.introduce())  # Hi, I'm Alice and I'm 25 years old.
print(Person.is_adult(person2.age))  # False
person1.have_birthday()  # Happy birthday! Alice is now 26`}
            </pre>
          </div>
        </section>

        {/* Mini Challenges */}
        <section id="challenges" className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6 lg:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 lg:mb-6">13. Mini Challenges</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-blue-700">Challenge 1: Number Guessing Game</h4>
              <p className="text-sm text-gray-700 mb-2">Create a game where the computer picks a random number and the user guesses it.</p>
              <pre className="bg-gray-800 text-green-400 p-2 rounded text-xs overflow-x-auto">
{`import random

number = random.randint(1, 100)
guesses = 0

while True:
    guess = int(input("Guess: "))
    guesses += 1
    
    if guess == number:
        print(f"Correct! {guesses} guesses")
        break
    elif guess < number:
        print("Too low!")
    else:
        print("Too high!")`}
              </pre>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-green-700">Challenge 2: Word Counter</h4>
              <p className="text-sm text-gray-700 mb-2">Count word frequency in a text.</p>
              <pre className="bg-gray-800 text-green-400 p-2 rounded text-xs overflow-x-auto">
{`def count_words(text):
    words = text.lower().split()
    word_count = {}
    
    for word in words:
        word = word.strip('.,!?"')
        word_count[word] = word_count.get(word, 0) + 1
    
    return word_count

text = "Hello world hello python"
result = count_words(text)
print(result)  # {'hello': 2, 'world': 1, 'python': 1}`}
              </pre>
            </div>
          </div>
        </section>

        {/* Final Projects */}
        <section id="projects" className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6 lg:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 lg:mb-6">14. Final Projects</h2>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">Project 1: Task Manager</h3>
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto mb-6">
{`class Task:
    def __init__(self, title, description, priority="medium"):
        self.title = title
        self.description = description
        self.priority = priority
        self.completed = False
    
    def mark_complete(self):
        self.completed = True
    
    def __str__(self):
        status = "✓" if self.completed else "○"
        return f"{status} [{self.priority.upper()}] {self.title}"

class TaskManager:
    def __init__(self):
        self.tasks = []
    
    def add_task(self, title, description, priority="medium"):
        task = Task(title, description, priority)
        self.tasks.append(task)
        print(f"Added task: {title}")
    
    def complete_task(self, title):
        for task in self.tasks:
            if task.title.lower() == title.lower():
                task.mark_complete()
                print(f"Completed: {title}")
                return
        print(f"Task not found: {title}")
    
    def list_tasks(self, show_completed=True):
        if not self.tasks:
            print("No tasks found.")
            return
        
        for task in self.tasks:
            if show_completed or not task.completed:
                print(task)
    
    def get_pending_tasks(self):
        return [task for task in self.tasks if not task.completed]

# Usage example
tm = TaskManager()
tm.add_task("Buy groceries", "Milk, bread, eggs", "high")
tm.add_task("Study Python", "Complete OOP chapter", "medium")
tm.complete_task("Buy groceries")
tm.list_tasks()`}
            </pre>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-green-700">Project 2: Simple Calculator</h3>
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto mb-6">
{`class Calculator:
    def __init__(self):
        self.history = []
    
    def add(self, a, b):
        result = a + b
        self.history.append(f"{a} + {b} = {result}")
        return result
    
    def subtract(self, a, b):
        result = a - b
        self.history.append(f"{a} - {b} = {result}")
        return result
    
    def multiply(self, a, b):
        result = a * b
        self.history.append(f"{a} * {b} = {result}")
        return result
    
    def divide(self, a, b):
        if b == 0:
            raise ValueError("Cannot divide by zero")
        result = a / b
        self.history.append(f"{a} / {b} = {result}")
        return result
    
    def power(self, a, b):
        result = a ** b
        self.history.append(f"{a} ^ {b} = {result}")
        return result
    
    def show_history(self):
        if not self.history:
            print("No calculations yet.")
        else:
            print("Calculation History:")
            for calculation in self.history:
                print(f"  {calculation}")
    
    def clear_history(self):
        self.history.clear()
        print("History cleared.")

def main():
    calc = Calculator()
    
    while True:
        print("\n=== Simple Calculator ===")
        print("1. Add")
        print("2. Subtract")
        print("3. Multiply")
        print("4. Divide")
        print("5. Power")
        print("6. Show History")
        print("7. Clear History")
        print("8. Exit")
        
        choice = input("Choose operation (1-8): ")
        
        if choice == '8':
            print("Goodbye!")
            break
        elif choice == '6':
            calc.show_history()
        elif choice == '7':
            calc.clear_history()
        elif choice in ['1', '2', '3', '4', '5']:
            try:
                a = float(input("Enter first number: "))
                b = float(input("Enter second number: "))
                
                if choice == '1':
                    result = calc.add(a, b)
                elif choice == '2':
                    result = calc.subtract(a, b)
                elif choice == '3':
                    result = calc.multiply(a, b)
                elif choice == '4':
                    result = calc.divide(a, b)
                elif choice == '5':
                    result = calc.power(a, b)
                
                print(f"Result: {result}")
            except ValueError as e:
                print(f"Error: {e}")
        else:
            print("Invalid choice!")

if __name__ == "__main__":
    main()`}
            </pre>
          </div>
        </section>

        {/* Quiz & Assessment */}
        <section id="quiz" className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6 lg:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 lg:mb-6">15. Quiz & Assessment</h2>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">Quick Quiz Questions</h3>
            
            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Question 1: What will this code output?</h4>
                <pre className="bg-gray-800 text-green-400 p-2 rounded text-sm mb-2">
{`x = [1, 2, 3]
y = x
y.append(4)
print(x)`}
                </pre>
                <details className="text-sm">
                  <summary className="cursor-pointer text-blue-600">Show Answer</summary>
                  <p className="mt-2 text-gray-700">[1, 2, 3, 4] - Both x and y reference the same list object.</p>
                </details>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Question 2: What's the difference between '==' and 'is'?</h4>
                <details className="text-sm">
                  <summary className="cursor-pointer text-green-600">Show Answer</summary>
                  <p className="mt-2 text-gray-700">'==' compares values, 'is' compares object identity (memory location).</p>
                </details>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Question 3: How do you handle multiple exceptions?</h4>
                <details className="text-sm">
                  <summary className="cursor-pointer text-purple-600">Show Answer</summary>
                  <div className="mt-2 text-gray-700">
                    <p>Multiple except blocks or tuple of exceptions:</p>
                    <pre className="bg-gray-800 text-green-400 p-2 rounded mt-1">
{`try:
    # code
except (ValueError, TypeError) as e:
    # handle both`}
                    </pre>
                  </div>
                </details>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-green-700">Coding Challenges</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Challenge: Fibonacci Sequence</h4>
                <p className="text-sm text-gray-700 mb-2">Write a function to generate the first n Fibonacci numbers.</p>
                <details className="text-sm">
                  <summary className="cursor-pointer text-blue-600">Show Solution</summary>
                  <pre className="bg-gray-800 text-green-400 p-2 rounded text-xs mt-2">
{`def fibonacci(n):
    if n <= 0:
        return []
    elif n == 1:
        return [0]
    elif n == 2:
        return [0, 1]
    
    fib = [0, 1]
    for i in range(2, n):
        fib.append(fib[i-1] + fib[i-2])
    return fib

print(fibonacci(10))  # [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]`}
                  </pre>
                </details>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Challenge: Palindrome Checker</h4>
                <p className="text-sm text-gray-700 mb-2">Check if a string is a palindrome (ignoring spaces and case).</p>
                <details className="text-sm">
                  <summary className="cursor-pointer text-blue-600">Show Solution</summary>
                  <pre className="bg-gray-800 text-green-400 p-2 rounded text-xs mt-2">
{`def is_palindrome(s):
    # Remove spaces and convert to lowercase
    cleaned = ''.join(s.split()).lower()
    return cleaned == cleaned[::-1]

print(is_palindrome("A man a plan a canal Panama"))  # True
print(is_palindrome("race a car"))  # False`}
                  </pre>
                </details>
              </div>
            </div>
          </div>
        </section>

        {/* Course Completion */}
        <div className="text-center py-6 lg:py-8">
          <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-4 sm:p-6 lg:p-8 rounded-lg mb-6 lg:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">🎉 Congratulations!</h2>
            <p className="text-lg sm:text-xl mb-6">You've completed the Python Programming Mastery course!</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 flex-wrap">
              <Link to="/courses" className="bg-white text-blue-600 px-4 sm:px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                <span className="sm:inline hidden">← Back to Courses</span>
                <span className="sm:hidden">← Courses</span>
              </Link>
              <Link to="/advanced-python" className="bg-blue-500 text-white px-4 sm:px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors">
                <span className="sm:inline hidden">Advanced Python →</span>
                <span className="sm:hidden">Advanced →</span>
              </Link>
              <Link to="/python-projects" className="bg-green-500 text-white px-4 sm:px-6 py-3 rounded-lg font-semibold hover:bg-green-400 transition-colors">
                <span className="sm:inline hidden">More Projects</span>
                <span className="sm:hidden">Projects</span>
              </Link>
            </div>
          </div>
        </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PythonProgramming;