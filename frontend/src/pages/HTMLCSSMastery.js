import React from 'react';
import { Link } from 'react-router-dom';

const HTMLCSSMastery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-orange-600 via-red-600 to-pink-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-yellow-300 opacity-20 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-400 opacity-15 rounded-full animate-ping"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <nav className="mb-8 flex items-center space-x-2 text-sm">
            <Link to="/" className="text-orange-200 hover:text-white transition-colors duration-200 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              Home
            </Link>
            <span className="text-orange-300">→</span>
            <Link to="/courses" className="text-orange-200 hover:text-white transition-colors duration-200">Courses</Link>
            <span className="text-orange-300">→</span>
            <span className="text-white font-medium">HTML & CSS Mastery</span>
          </nav>
          
          <div className="text-center">
            <div className="inline-flex items-center bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-medium mb-6">
              🌐 Foundation Course
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
              HTML & CSS Mastery
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-8 text-orange-100">
              Build Beautiful Web Pages from Scratch
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-orange-100 mb-10 max-w-3xl mx-auto leading-relaxed px-4">
              Master HTML structure and CSS styling with comprehensive examples, live code demonstrations, and real-world projects.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-8 px-4">
              <Link to="/courses" className="group bg-white text-orange-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center">
                <span className="flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
                  </svg>
                  Back to Courses
                </span>
              </Link>
              <Link to="#introduction" className="group bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center">
                <span className="flex items-center justify-center">
                  Start Learning
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </span>
              </Link>
            </div>
            
            <div className="flex justify-center space-x-8 text-orange-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">25</div>
                <div className="text-sm">Topics</div>
              </div>
              <div className="bg-white bg-opacity-20 p-3 rounded">
                <div className="font-bold text-2xl">2</div>
                <div className="text-sm">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">2</div>
                <div className="text-sm">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-80 lg:sticky lg:top-8 lg:h-fit order-2 lg:order-1">
            <div className="bg-white rounded-xl shadow-lg p-4 lg:p-6 border border-gray-200">
              <h3 className="text-base lg:text-lg font-bold text-gray-800 mb-4 flex items-center">
                <svg className="w-4 h-4 lg:w-5 lg:h-5 mr-2 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Course Navigation
              </h3>
              <nav className="grid grid-cols-2 lg:grid-cols-1 gap-1 lg:space-y-2 lg:max-h-96 lg:overflow-y-auto">
                <a href="#introduction" className="block px-2 lg:px-3 py-1 lg:py-2 text-xs lg:text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-700 rounded-lg transition-colors">
                  <span className="font-medium">01.</span> <span className="hidden sm:inline">Introduction to</span> HTML
                </a>
                <a href="#basic-tags" className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-700 rounded-lg transition-colors">
                  <span className="font-medium">02.</span> Basic HTML Tags
                </a>
                <a href="#text-formatting" className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-700 rounded-lg transition-colors">
                  <span className="font-medium">03.</span> Text Formatting
                </a>
                <a href="#hyperlinks" className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-700 rounded-lg transition-colors">
                  <span className="font-medium">04.</span> Hyperlinks
                </a>
                <a href="#images" className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-700 rounded-lg transition-colors">
                  <span className="font-medium">05.</span> Images
                </a>
                <a href="#lists" className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-700 rounded-lg transition-colors">
                  <span className="font-medium">06.</span> Lists
                </a>
                <a href="#tables" className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-700 rounded-lg transition-colors">
                  <span className="font-medium">07.</span> Tables
                </a>
                <a href="#forms" className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-700 rounded-lg transition-colors">
                  <span className="font-medium">08.</span> Forms
                </a>
                <a href="#semantic" className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-700 rounded-lg transition-colors">
                  <span className="font-medium">09.</span> Semantic HTML
                </a>
                <a href="#media" className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-700 rounded-lg transition-colors">
                  <span className="font-medium">09.</span> Semantic HTML
                </a>
                <a href="#css-intro" className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-700 rounded-lg transition-colors">
                  <span className="font-medium">10.</span> Introduction to CSS
                </a>
                <a href="#css-syntax" className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-700 rounded-lg transition-colors">
                  <span className="font-medium">11.</span> CSS Syntax & Selectors
                </a>
                <a href="#colors-units" className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-700 rounded-lg transition-colors">
                  <span className="font-medium">12.</span> Colors and Units
                </a>
                <a href="#typography" className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-700 rounded-lg transition-colors">
                  <span className="font-medium">13.</span> Typography
                </a>
                <a href="#backgrounds" className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-700 rounded-lg transition-colors">
                  <span className="font-medium">14.</span> Backgrounds
                </a>
                <a href="#box-model" className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-700 rounded-lg transition-colors">
                  <span className="font-medium">15.</span> Box Model
                </a>
                <a href="#display" className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-700 rounded-lg transition-colors">
                  <span className="font-medium">16.</span> Display & Visibility
                </a>
                <a href="#positioning" className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-700 rounded-lg transition-colors">
                  <span className="font-medium">17.</span> Positioning
                </a>
                <a href="#flexbox" className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-700 rounded-lg transition-colors">
                  <span className="font-medium">18.</span> Flexbox Layout
                </a>
                <a href="#grid" className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-700 rounded-lg transition-colors">
                  <span className="font-medium">19.</span> CSS Grid
                </a>
                <a href="#responsive" className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-700 rounded-lg transition-colors">
                  <span className="font-medium">20.</span> Responsive Design
                </a>
                <a href="#transitions" className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-700 rounded-lg transition-colors">
                  <span className="font-medium">21.</span> Transitions & Animations
                </a>
                <a href="#pseudo" className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-700 rounded-lg transition-colors">
                  <span className="font-medium">22.</span> Pseudo-classes & Elements
                </a>
                <a href="#variables" className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-700 rounded-lg transition-colors">
                  <span className="font-medium">23.</span> CSS Variables
                </a>
                <a href="#transforms" className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-700 rounded-lg transition-colors">
                  <span className="font-medium">24.</span> Transforms & Effects
                </a>
                <a href="#best-practices" className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-700 rounded-lg transition-colors">
                  <span className="font-medium">25.</span> Best Practices
                </a>
                <a href="#project-game" className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-700 rounded-lg transition-colors">
                  <span className="font-medium">🎮</span> Project: Memory Game
                </a>
                <a href="#project-tcs" className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-700 rounded-lg transition-colors">
                  <span className="font-medium">🏢</span> Project: TCS Clone
                </a>
              </nav>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="text-xs text-gray-500 mb-2">Progress</div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full" style={{width: '0%'}}></div>
                </div>
                <div className="text-xs text-gray-500 mt-1">0% Complete</div>
              </div>
            </div>
          </aside>
          
          <main className="flex-1 max-w-4xl order-1 lg:order-2">
            {/* Introduction to HTML */}
            <section id="introduction" className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-orange-600 font-bold text-lg">01</span>
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Introduction to HTML</h2>
                  <p className="text-xs sm:text-sm text-gray-500">Learn the fundamentals of HTML</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-orange-700">What is HTML?</h3>
                <p className="text-gray-700 mb-4">
                  HTML (HyperText Markup Language) is the standard markup language for creating web pages. 
                  It describes the structure of a web page using markup tags and elements.
                </p>
                
                <div className="bg-orange-50 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold mb-2 text-orange-700">Key Features:</h4>
                  <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                    <li>Markup language for web content structure</li>
                    <li>Uses tags to define elements</li>
                    <li>Platform independent</li>
                    <li>Foundation of all websites</li>
                    <li>Works with CSS and JavaScript</li>
                  </ul>
                </div>

                <h4 className="text-lg font-semibold mb-3 text-gray-800">Basic HTML Document Structure:</h4>
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Web Page</title>
</head>
<body>
    <h1>Welcome to HTML!</h1>
    <p>This is my first HTML document.</p>
</body>
</html>`}
                  </pre>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-700">Output:</h4>
                  <div className="bg-white p-4 border rounded">
                    <h1 className="text-2xl font-bold mb-2">Welcome to HTML!</h1>
                    <p>This is my first HTML document.</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-orange-700">HTML5 Overview</h3>
                <p className="text-gray-700 mb-4">
                  HTML5 is the latest version of HTML, introducing new semantic elements, APIs, and improved multimedia support.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-green-700">New Features:</h4>
                    <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                      <li>Semantic elements (header, nav, main)</li>
                      <li>Audio and video support</li>
                      <li>Canvas for graphics</li>
                      <li>Local storage</li>
                      <li>Geolocation API</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-700">Benefits:</h4>
                    <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                      <li>Better SEO</li>
                      <li>Improved accessibility</li>
                      <li>Mobile-friendly</li>
                      <li>Faster loading</li>
                      <li>Rich media support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Basic HTML Tags */}
            <section id="basic-tags" className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-orange-600 font-bold text-lg">02</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Basic HTML Tags</h2>
                  <p className="text-sm text-gray-500">Essential HTML elements for structure</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-orange-700">Document Structure Tags</h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="text-lg font-semibold mb-2">&lt;html&gt;, &lt;head&gt;, &lt;body&gt;</h4>
                    <p className="text-gray-700 mb-3">The fundamental structure of every HTML document.</p>
                    
                    <div className="bg-gray-900 rounded-lg p-4 mb-4">
                      <pre className="text-green-400 text-sm overflow-x-auto">
{`<html>
  <head>
    <title>Page Title</title>
    <meta charset="UTF-8">
  </head>
  <body>
    <h1>Main Content</h1>
    <p>Page content goes here</p>
  </body>
</html>`}
                      </pre>
                    </div>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="text-lg font-semibold mb-2">Headings: &lt;h1&gt; to &lt;h6&gt;</h4>
                    <p className="text-gray-700 mb-3">Six levels of headings for content hierarchy.</p>
                    
                    <div className="bg-gray-900 rounded-lg p-4 mb-4">
                      <pre className="text-green-400 text-sm overflow-x-auto">
{`<h1>Main Heading</h1>
<h2>Section Heading</h2>
<h3>Subsection Heading</h3>
<h4>Sub-subsection</h4>
<h5>Minor Heading</h5>
<h6>Smallest Heading</h6>`}
                      </pre>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-blue-700">Output:</h4>
                      <div className="bg-white p-4 border rounded space-y-2">
                        <h1 className="text-3xl font-bold">Main Heading</h1>
                        <h2 className="text-2xl font-bold">Section Heading</h2>
                        <h3 className="text-xl font-bold">Subsection Heading</h3>
                        <h4 className="text-lg font-bold">Sub-subsection</h4>
                        <h5 className="text-base font-bold">Minor Heading</h5>
                        <h6 className="text-sm font-bold">Smallest Heading</h6>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="text-lg font-semibold mb-2">Paragraphs and Line Breaks</h4>
                    <p className="text-gray-700 mb-3">Basic text formatting elements.</p>
                    
                    <div className="bg-gray-900 rounded-lg p-4 mb-4">
                      <pre className="text-green-400 text-sm overflow-x-auto">
{`<p>This is a paragraph of text.</p>
<p>This is another paragraph.</p>

<p>Line break example:<br>
This text is on a new line.</p>

<hr>
<p>Content after horizontal rule.</p>`}
                      </pre>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-blue-700">Output:</h4>
                      <div className="bg-white p-4 border rounded">
                        <p className="mb-4">This is a paragraph of text.</p>
                        <p className="mb-4">This is another paragraph.</p>
                        <p className="mb-4">Line break example:<br/>This text is on a new line.</p>
                        <hr className="my-4"/>
                        <p>Content after horizontal rule.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Text Formatting Tags */}
            <section id="text-formatting" className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-orange-600 font-bold text-lg">03</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Text Formatting Tags</h2>
                  <p className="text-sm text-gray-500">Style and emphasize your text content</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-orange-700">Text Emphasis and Styling</h3>
                
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
{`<!-- Bold Text -->
<b>Bold text using b tag</b>
<strong>Important text using strong tag</strong>

<!-- Italic Text -->
<i>Italic text using i tag</i>
<em>Emphasized text using em tag</em>

<!-- Other Formatting -->
<u>Underlined text</u>
<mark>Highlighted text</mark>
<small>Small text</small>
<del>Deleted text</del>
<ins>Inserted text</ins>

<!-- Subscript and Superscript -->
<p>H<sub>2</sub>O (water formula)</p>
<p>E = mc<sup>2</sup> (Einstein's equation)</p>

<!-- Preformatted Text -->
<pre>
    This text preserves
        spaces and line breaks
            exactly as written
</pre>

<!-- Code Snippets -->
<p>Use <code>console.log()</code> to debug JavaScript.</p>`}
                  </pre>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-700">Output:</h4>
                  <div className="bg-white p-4 border rounded space-y-2">
                    <p><b>Bold text using b tag</b></p>
                    <p><strong>Important text using strong tag</strong></p>
                    <p><i>Italic text using i tag</i></p>
                    <p><em>Emphasized text using em tag</em></p>
                    <p><u>Underlined text</u></p>
                    <p><mark className="bg-yellow-200">Highlighted text</mark></p>
                    <p><small>Small text</small></p>
                    <p><del>Deleted text</del></p>
                    <p><ins className="underline">Inserted text</ins></p>
                    <p>H<sub>2</sub>O (water formula)</p>
                    <p>E = mc<sup>2</sup> (Einstein's equation)</p>
                    <pre className="bg-gray-100 p-2 rounded font-mono text-sm">
    This text preserves
        spaces and line breaks
            exactly as written
                    </pre>
                    <p>Use <code className="bg-gray-200 px-1 rounded">console.log()</code> to debug JavaScript.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Hyperlinks */}
            <section id="hyperlinks" className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-orange-600 font-bold text-lg">04</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Hyperlinks (Links)</h2>
                  <p className="text-sm text-gray-500">Connect pages and resources</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-orange-700">Basic Links and Targets</h3>
                
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
{`<!-- Basic Links -->
<a href="https://www.example.com">Visit Example.com</a>
<a href="about.html">About Page</a>
<a href="#section1">Go to Section 1</a>

<!-- Target Attributes -->
<a href="https://www.google.com" target="_blank">Open in New Tab</a>
<a href="contact.html" target="_self">Open in Same Window</a>
<a href="page.html" target="_parent">Open in Parent Frame</a>
<a href="home.html" target="_top">Open in Full Window</a>

<!-- Special Links -->
<a href="mailto:contact@example.com">Send Email</a>
<a href="tel:+1234567890">Call Us</a>
<a href="files/document.pdf" download>Download PDF</a>`}
                  </pre>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-700">Output:</h4>
                  <div className="bg-white p-4 border rounded space-y-2">
                    <p><a href="#" className="text-blue-600 underline">Visit Example.com</a></p>
                    <p><a href="#" className="text-blue-600 underline">About Page</a></p>
                    <p><a href="#" className="text-blue-600 underline">Go to Section 1</a></p>
                    <p><a href="#" className="text-blue-600 underline">Open in New Tab</a></p>
                    <p><a href="#" className="text-blue-600 underline">Send Email</a></p>
                    <p><a href="#" className="text-blue-600 underline">Call Us</a></p>
                  </div>
                </div>
              </div>
            </section>

            {/* Images */}
            <section id="images" className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-orange-600 font-bold text-lg">05</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Images</h2>
                  <p className="text-sm text-gray-500">Display and optimize images</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-orange-700">Image Elements and Attributes</h3>
                
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
{`<!-- Basic Image -->
<img src="image.jpg" alt="Description of image">

<!-- Image with Dimensions -->
<img src="photo.jpg" alt="Photo" width="300" height="200">

<!-- Responsive Image -->
<img src="banner.jpg" alt="Banner" style="max-width: 100%; height: auto;">

<!-- Lazy Loading -->
<img src="large-image.jpg" alt="Large Image" loading="lazy">

<!-- Image with Link -->
<a href="full-size.jpg">
  <img src="thumbnail.jpg" alt="Click to enlarge">
</a>

<!-- Figure with Caption -->
<figure>
  <img src="chart.png" alt="Sales Chart">
  <figcaption>Monthly Sales Data for 2024</figcaption>
</figure>`}
                  </pre>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-700">Output:</h4>
                  <div className="bg-white p-4 border rounded space-y-4">
                    <div className="w-32 h-24 bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
                      [Image Placeholder]
                    </div>
                    <figure className="text-center">
                      <div className="w-48 h-32 bg-gray-200 flex items-center justify-center text-gray-500 text-sm mx-auto">
                        [Chart Image]
                      </div>
                      <figcaption className="text-sm text-gray-600 mt-2">Monthly Sales Data for 2024</figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </section>

            {/* Lists */}
            <section id="lists" className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-orange-600 font-bold text-lg">06</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Lists</h2>
                  <p className="text-sm text-gray-500">Organize content with lists</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-orange-700">List Types and Nesting</h3>
                
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
{`<!-- Unordered List -->
<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>

<!-- Ordered List -->
<ol>
  <li>Step one</li>
  <li>Step two</li>
  <li>Step three</li>
</ol>

<!-- Nested Lists -->
<ul>
  <li>Fruits
    <ul>
      <li>Apple</li>
      <li>Banana</li>
      <li>Orange</li>
    </ul>
  </li>
  <li>Vegetables
    <ol>
      <li>Carrot</li>
      <li>Broccoli</li>
    </ol>
  </li>
</ul>

<!-- Description List -->
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
  <dt>JS</dt>
  <dd>JavaScript programming language</dd>
</dl>`}
                  </pre>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-700">Output:</h4>
                  <div className="bg-white p-4 border rounded space-y-4">
                    <div>
                      <h5 className="font-semibold mb-2">Unordered List:</h5>
                      <ul className="list-disc list-inside">
                        <li>First item</li>
                        <li>Second item</li>
                        <li>Third item</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Ordered List:</h5>
                      <ol className="list-decimal list-inside">
                        <li>Step one</li>
                        <li>Step two</li>
                        <li>Step three</li>
                      </ol>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Description List:</h5>
                      <dl>
                        <dt className="font-semibold">HTML</dt>
                        <dd className="ml-4 mb-2">HyperText Markup Language</dd>
                        <dt className="font-semibold">CSS</dt>
                        <dd className="ml-4 mb-2">Cascading Style Sheets</dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Tables */}
            <section id="tables" className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-orange-600 font-bold text-lg">07</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Tables</h2>
                  <p className="text-sm text-gray-500">Structure tabular data</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-orange-700">Table Structure and Styling</h3>
                
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
{`<!-- Basic Table -->
<table border="1">
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John</td>
      <td>25</td>
      <td>New York</td>
    </tr>
    <tr>
      <td>Jane</td>
      <td>30</td>
      <td>London</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3">Total: 2 people</td>
    </tr>
  </tfoot>
</table>

<!-- Table with Colspan and Rowspan -->
<table border="1">
  <tr>
    <th colspan="2">Sales Report</th>
  </tr>
  <tr>
    <td>Q1</td>
    <td rowspan="2">$50,000</td>
  </tr>
  <tr>
    <td>Q2</td>
  </tr>
</table>`}
                  </pre>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-700">Output:</h4>
                  <div className="bg-white p-4 border rounded">
                    <table className="w-full border-collapse border border-gray-300 mb-4">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Age</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">City</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">John</td>
                          <td className="border border-gray-300 px-4 py-2">25</td>
                          <td className="border border-gray-300 px-4 py-2">New York</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Jane</td>
                          <td className="border border-gray-300 px-4 py-2">30</td>
                          <td className="border border-gray-300 px-4 py-2">London</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr className="bg-gray-50">
                          <td colSpan="3" className="border border-gray-300 px-4 py-2 text-center font-semibold">Total: 2 people</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            {/* Forms */}
            <section id="forms" className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-orange-600 font-bold text-lg">08</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Forms and Input Elements</h2>
                  <p className="text-sm text-gray-500">Collect user input and data</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-orange-700">Form Elements and Validation</h3>
                
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
{`<!-- Contact Form -->
<form action="/submit" method="POST">
  <fieldset>
    <legend>Contact Information</legend>
    
    <label for="name">Full Name:</label>
    <input type="text" id="name" name="name" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <label for="phone">Phone:</label>
    <input type="tel" id="phone" name="phone">
    
    <label for="age">Age:</label>
    <input type="number" id="age" name="age" min="18" max="100">
    
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" minlength="8">
  </fieldset>
  
  <fieldset>
    <legend>Preferences</legend>
    
    <input type="checkbox" id="newsletter" name="newsletter">
    <label for="newsletter">Subscribe to newsletter</label>
    
    <input type="radio" id="male" name="gender" value="male">
    <label for="male">Male</label>
    
    <input type="radio" id="female" name="gender" value="female">
    <label for="female">Female</label>
    
    <label for="country">Country:</label>
    <select id="country" name="country">
      <option value="">Select Country</option>
      <option value="us">United States</option>
      <option value="uk">United Kingdom</option>
      <option value="ca">Canada</option>
    </select>
    
    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="4" cols="50"></textarea>
  </fieldset>
  
  <button type="submit">Submit</button>
  <button type="reset">Reset</button>
</form>`}
                  </pre>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-700">Output:</h4>
                  <div className="bg-white p-4 border rounded">
                    <form className="space-y-4">
                      <fieldset className="border border-gray-300 p-4 rounded">
                        <legend className="px-2 font-semibold">Contact Information</legend>
                        <div className="grid gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-1">Full Name:</label>
                            <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" placeholder="Enter your name"/>
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1">Email:</label>
                            <input type="email" className="w-full border border-gray-300 rounded px-3 py-2" placeholder="Enter your email"/>
                          </div>
                        </div>
                      </fieldset>
                      <fieldset className="border border-gray-300 p-4 rounded">
                        <legend className="px-2 font-semibold">Preferences</legend>
                        <div className="space-y-2">
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-2"/>
                            Subscribe to newsletter
                          </label>
                          <div className="flex space-x-4">
                            <label className="flex items-center">
                              <input type="radio" name="demo-gender" className="mr-2"/>
                              Male
                            </label>
                            <label className="flex items-center">
                              <input type="radio" name="demo-gender" className="mr-2"/>
                              Female
                            </label>
                          </div>
                        </div>
                      </fieldset>
                      <div className="flex space-x-2">
                        <button type="button" className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700">Submit</button>
                        <button type="button" className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">Reset</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>

            {/* Semantic HTML */}
            <section id="media" className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-orange-600 font-bold text-lg">09</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Semantic HTML</h2>
                  <p className="text-sm text-gray-500">Meaningful structure for better SEO</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-orange-700">HTML5 Semantic Elements</h3>
                
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
{`<header>
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <header>
      <h1>Article Title</h1>
      <time datetime="2024-01-15">January 15, 2024</time>
    </header>
    <section>
      <h2>Introduction</h2>
      <p>Article content...</p>
    </section>
  </article>
  
  <aside>
    <h3>Related Links</h3>
    <ul>
      <li><a href="#">Link 1</a></li>
      <li><a href="#">Link 2</a></li>
    </ul>
  </aside>
</main>

<footer>
  <p>&copy; 2024 My Website</p>
</footer>`}
                  </pre>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-700">Output:</h4>
                  <div className="bg-white p-4 border rounded">
                    <header className="border-b pb-4 mb-4">
                      <nav>
                        <ul className="flex space-x-4">
                          <li><a href="#" className="text-blue-600 underline">Home</a></li>
                          <li><a href="#" className="text-blue-600 underline">About</a></li>
                        </ul>
                      </nav>
                    </header>
                    <main>
                      <article className="mb-4">
                        <header className="mb-4">
                          <h1 className="text-xl font-bold">Article Title</h1>
                          <time className="text-gray-500 text-sm">January 15, 2024</time>
                        </header>
                        <section>
                          <h2 className="text-lg font-semibold mb-2">Introduction</h2>
                          <p>Article content...</p>
                        </section>
                      </article>
                    </main>
                    <footer className="border-t pt-4 mt-4 text-center text-sm text-gray-600">
                      <p>&copy; 2025 My Website</p>
                    </footer>
                  </div>
                </div>
              </div>
            </section>

            {/* CSS Introduction */}
            <section id="css-intro" className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-lg">10</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Introduction to CSS</h2>
                  <p className="text-sm text-gray-500">Style your HTML with CSS</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-blue-700">What is CSS?</h3>
                <p className="text-gray-700 mb-4">
                  CSS (Cascading Style Sheets) is used to style and layout web pages. It controls colors, fonts, spacing, and positioning.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-red-700">Inline CSS</h4>
                    <div className="bg-gray-900 rounded p-2 mb-2">
                      <pre className="text-green-400 text-xs">
{`<p style="color: red; 
   font-size: 18px;">
  Styled text
</p>`}
                      </pre>
                    </div>
                    <div className="bg-white p-2 border rounded">
                      <p style={{color: 'red', fontSize: '18px'}}>Styled text</p>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-green-700">Internal CSS</h4>
                    <div className="bg-gray-900 rounded p-2 mb-2">
                      <pre className="text-green-400 text-xs">
{`<style>
  .highlight {
    background: yellow;
    padding: 10px;
  }
</style>`}
                      </pre>
                    </div>
                    <div className="bg-white p-2 border rounded">
                      <p className="bg-yellow-200 p-2 rounded">Highlighted text</p>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-700">External CSS</h4>
                    <div className="bg-gray-900 rounded p-2 mb-2">
                      <pre className="text-green-400 text-xs">
{`<link rel="stylesheet" 
      href="styles.css">

/* styles.css */
.box {
  border: 2px solid blue;
}`}
                      </pre>
                    </div>
                    <div className="bg-white p-2 border rounded">
                      <div className="border-2 border-blue-500 p-2">Styled box</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CSS Syntax & Selectors */}
            <section id="css-syntax" className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-lg">11</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">CSS Syntax & Selectors</h2>
                  <p className="text-sm text-gray-500">Target elements with precision</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-blue-700">CSS Selectors</h3>
                
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
{`<!-- HTML -->
<p>Element selector paragraph</p>
<p class="highlight">Class selector paragraph</p>
<h1 id="header">ID selector heading</h1>
<div>
  <p>Descendant paragraph</p>
  <span>
    <p>Nested paragraph</p>
  </span>
</div>
<input type="text" placeholder="Attribute selector">
<input type="email" placeholder="Email input">

/* CSS */
/* Element Selector */
p {
  color: blue;
  font-size: 16px;
}

/* Class Selector */
.highlight {
  background-color: yellow;
  padding: 5px;
  border-radius: 3px;
}

/* ID Selector */
#header {
  font-size: 24px;
  font-weight: bold;
  color: navy;
}

/* Grouping Selectors */
h1, h2, h3 {
  font-family: Arial, sans-serif;
}

/* Descendant Selector */
div p {
  line-height: 1.5;
  margin: 10px 0;
}

/* Child Selector */
div > p {
  border-left: 3px solid green;
  padding-left: 10px;
}

/* Attribute Selector */
input[type="text"] {
  border: 2px solid gray;
  padding: 8px;
  border-radius: 4px;
}

input[type="email"] {
  border: 2px solid blue;
  padding: 8px;
  border-radius: 4px;
}`}
                  </pre>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-700">Output:</h4>
                  <div className="bg-white p-4 border rounded space-y-3">
                    <p className="text-blue-600 text-base">Element selector paragraph</p>
                    <p className="bg-yellow-200 p-1 rounded inline-block">Class selector paragraph</p>
                    <h1 className="text-2xl font-bold text-blue-900 font-sans">ID selector heading</h1>
                    <div className="space-y-2">
                      <p className="border-l-4 border-green-500 pl-3 leading-relaxed">Descendant paragraph (child selector styling)</p>
                      <div className="ml-4">
                        <p className="leading-relaxed text-gray-700">Nested paragraph (descendant selector)</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <input type="text" className="border-2 border-gray-400 p-2 rounded" placeholder="Attribute selector"/>
                      <input type="email" className="border-2 border-blue-500 p-2 rounded ml-2" placeholder="Email input"/>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Colors and Units */}
            <section id="colors-units" className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-lg">12</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Colors and Units</h2>
                  <p className="text-sm text-gray-500">Color formats and measurement units</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-blue-700">Color Formats</h3>
                
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
{`<!-- HTML -->
<div class="color-examples">
  <p class="red-text">Named color: red</p>
  <p class="hex-red">Hex color: #ff0000</p>
  <p class="rgb-green">RGB color: rgb(0, 255, 0)</p>
  <p class="hsl-purple">HSL color: hsl(270, 100%, 50%)</p>
</div>

<div class="background-examples">
  <div class="blue-bg">Named background</div>
  <div class="hex-blue">Hex background</div>
  <div class="rgba-semi">RGBA semi-transparent</div>
  <div class="hsla-orange">HSLA with opacity</div>
</div>

<div class="unit-examples">
  <p class="pixel-size">16px font size</p>
  <div class="percent-width">50% width container</div>
  <p class="em-margin">1.5em margin</p>
  <p class="rem-padding">2rem padding</p>
</div>

/* CSS */
/* Named Colors */
.red-text { color: red; }
.blue-bg { 
  background-color: blue; 
  color: white;
  padding: 10px;
  margin: 5px 0;
}

/* Hex Colors */
.hex-red { color: #ff0000; }
.hex-blue { 
  background-color: #0066cc; 
  color: white;
  padding: 10px;
  margin: 5px 0;
}

/* RGB Colors */
.rgb-green { color: rgb(0, 255, 0); }
.rgba-semi { 
  background-color: rgba(255, 0, 0, 0.5); 
  padding: 10px;
  margin: 5px 0;
}

/* HSL Colors */
.hsl-purple { color: hsl(270, 100%, 50%); }
.hsla-orange { 
  background-color: hsla(30, 100%, 50%, 0.7); 
  padding: 10px;
  margin: 5px 0;
}

/* CSS Units */
.pixel-size { font-size: 16px; }
.percent-width { 
  width: 50%; 
  background-color: #f0f0f0;
  padding: 10px;
  border: 1px solid #ccc;
}
.em-margin { margin: 1.5em 0; }
.rem-padding { 
  padding: 2rem; 
  background-color: #e8f4fd;
  border: 1px solid #b3d9ff;
}`}
                  </pre>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-700">Output:</h4>
                  <div className="bg-white p-4 border rounded space-y-4">
                    <div className="space-y-2">
                      <h5 className="font-semibold text-sm">Color Examples:</h5>
                      <p className="text-red-600">Named color: red</p>
                      <p style={{color: '#ff0000'}}>Hex color: #ff0000</p>
                      <p className="text-green-500">RGB color: rgb(0, 255, 0)</p>
                      <p className="text-purple-600">HSL color: hsl(270, 100%, 50%)</p>
                    </div>
                    
                    <div className="space-y-2">
                      <h5 className="font-semibold text-sm">Background Examples:</h5>
                      <div className="bg-blue-600 text-white p-2 rounded">Named background</div>
                      <div style={{backgroundColor: '#0066cc'}} className="text-white p-2 rounded">Hex background</div>
                      <div style={{backgroundColor: 'rgba(255, 0, 0, 0.5)'}} className="p-2 rounded">RGBA semi-transparent</div>
                      <div style={{backgroundColor: 'hsla(30, 100%, 50%, 0.7)'}} className="p-2 rounded">HSLA with opacity</div>
                    </div>
                    
                    <div className="space-y-2">
                      <h5 className="font-semibold text-sm">Unit Examples:</h5>
                      <p style={{fontSize: '16px'}}>16px font size</p>
                      <div className="w-1/2 bg-gray-100 p-2 border border-gray-300 rounded">50% width container</div>
                      <p style={{margin: '1.5em 0'}} className="bg-blue-50 p-8 border border-blue-200 rounded">2rem padding example</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Typography */}
            <section id="typography" className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-lg">13</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Typography</h2>
                  <p className="text-sm text-gray-500">Font styling and text formatting</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-blue-700">Font Properties</h3>
                
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
{`<!-- HTML -->
<div class="typography-examples">
  <h2 class="serif-heading">Serif Font Heading</h2>
  <p class="sans-serif-text">Sans-serif paragraph text for better readability.</p>
  <code class="monospace-code">console.log('Monospace code');</code>
  
  <div class="font-sizes">
    <p class="small-text">Small text (12px)</p>
    <p class="medium-text">Medium text (16px)</p>
    <p class="large-text">Large text (24px)</p>
  </div>
  
  <div class="font-weights">
    <p class="light-weight">Light weight text</p>
    <p class="normal-weight">Normal weight text</p>
    <p class="bold-weight">Bold weight text</p>
  </div>
  
  <div class="text-styles">
    <p class="italic-text">Italic styled text</p>
    <p class="underline-text">Underlined text</p>
    <p class="uppercase-text">uppercase transformed text</p>
  </div>
  
  <div class="text-alignment">
    <p class="left-align">Left aligned text</p>
    <p class="center-align">Center aligned text</p>
    <p class="right-align">Right aligned text</p>
    <p class="justify-align">Justified text that spreads across the full width of the container, creating even margins on both sides.</p>
  </div>
  
  <p class="spaced-text">Text with increased line height for better readability.</p>
  <p class="letter-spaced">Letter spaced text</p>
  <p class="word-spaced">Word spaced text example</p>
</div>

/* CSS */
/* Font Families */
.serif-heading {
  font-family: 'Times New Roman', Times, serif;
  font-size: 28px;
  margin-bottom: 15px;
}

.sans-serif-text {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  line-height: 1.5;
}

.monospace-code {
  font-family: 'Courier New', Courier, monospace;
  background-color: #f4f4f4;
  padding: 4px 8px;
  border-radius: 3px;
  font-size: 14px;
}

/* Font Sizes */
.small-text { font-size: 12px; }
.medium-text { font-size: 16px; }
.large-text { font-size: 24px; }

/* Font Weights */
.light-weight { font-weight: 300; }
.normal-weight { font-weight: 400; }
.bold-weight { font-weight: 700; }

/* Text Styling */
.italic-text { font-style: italic; }
.underline-text { text-decoration: underline; }
.uppercase-text { text-transform: uppercase; }

/* Text Alignment */
.left-align { text-align: left; }
.center-align { text-align: center; }
.right-align { text-align: right; }
.justify-align { 
  text-align: justify;
  max-width: 400px;
}

/* Line Height and Spacing */
.spaced-text {
  line-height: 1.8;
  margin: 15px 0;
}

.letter-spaced {
  letter-spacing: 3px;
  text-transform: uppercase;
}

.word-spaced {
  word-spacing: 8px;
}`}
                  </pre>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-700">Output:</h4>
                  <div className="bg-white p-4 border rounded space-y-4">
                    <div className="space-y-3">
                      <h2 className="font-serif text-3xl mb-4">Serif Font Heading</h2>
                      <p className="font-sans text-base leading-relaxed">Sans-serif paragraph text for better readability.</p>
                      <code className="font-mono bg-gray-100 px-2 py-1 rounded text-sm">console.log('Monospace code');</code>
                    </div>
                    
                    <div className="space-y-2">
                      <h5 className="font-semibold text-sm text-gray-700">Font Sizes:</h5>
                      <p className="text-xs">Small text (12px)</p>
                      <p className="text-base">Medium text (16px)</p>
                      <p className="text-2xl">Large text (24px)</p>
                    </div>
                    
                    <div className="space-y-2">
                      <h5 className="font-semibold text-sm text-gray-700">Font Weights:</h5>
                      <p className="font-light">Light weight text</p>
                      <p className="font-normal">Normal weight text</p>
                      <p className="font-bold">Bold weight text</p>
                    </div>
                    
                    <div className="space-y-2">
                      <h5 className="font-semibold text-sm text-gray-700">Text Styles:</h5>
                      <p className="italic">Italic styled text</p>
                      <p className="underline">Underlined text</p>
                      <p className="uppercase">uppercase transformed text</p>
                    </div>
                    
                    <div className="space-y-2">
                      <h5 className="font-semibold text-sm text-gray-700">Text Alignment:</h5>
                      <p className="text-left">Left aligned text</p>
                      <p className="text-center">Center aligned text</p>
                      <p className="text-right">Right aligned text</p>
                      <p className="text-justify max-w-md">Justified text that spreads across the full width of the container, creating even margins on both sides.</p>
                    </div>
                    
                    <div className="space-y-2">
                      <h5 className="font-semibold text-sm text-gray-700">Spacing:</h5>
                      <p className="leading-loose">Text with increased line height for better readability.</p>
                      <p className="tracking-widest uppercase">Letter spaced text</p>
                      <p style={{wordSpacing: '8px'}}>Word spaced text example</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Backgrounds */}
            <section id="backgrounds" className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-lg">14</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Backgrounds</h2>
                  <p className="text-sm text-gray-500">Background colors, images, and effects</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-blue-700">Background Properties</h3>
                
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
{`<!-- HTML -->
<div class="background-examples">
  <div class="solid-bg">Solid Background Color</div>
  
  <div class="image-bg">Background Image</div>
  
  <div class="gradient-linear">Linear Gradient</div>
  
  <div class="gradient-radial">Radial Gradient</div>
  
  <div class="multi-background">Multiple Backgrounds</div>
  
  <div class="pattern-bg">Repeating Pattern</div>
  
  <div class="fixed-bg">Fixed Background</div>
</div>

/* CSS */
/* Solid Background */
.solid-bg {
  background-color: #e3f2fd;
  padding: 20px;
  margin: 10px 0;
  border-radius: 8px;
  text-align: center;
  color: #1565c0;
  font-weight: bold;
}

/* Background Image */
.image-bg {
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="%23ff6b6b" opacity="0.3"/></svg>');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  height: 120px;
  padding: 20px;
  margin: 10px 0;
  border: 2px dashed #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  font-weight: bold;
}

/* Linear Gradient */
.gradient-linear {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1);
  height: 80px;
  margin: 10px 0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
}

/* Radial Gradient */
.gradient-radial {
  background: radial-gradient(circle at center, #667eea 0%, #764ba2 100%);
  height: 80px;
  margin: 10px 0;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
}

/* Multiple Backgrounds */
.multi-background {
  background: 
    linear-gradient(45deg, rgba(255,107,107,0.8), rgba(78,205,196,0.8)),
    repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px);
  height: 80px;
  margin: 10px 0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
}

/* Repeating Pattern */
.pattern-bg {
  background-image: repeating-linear-gradient(
    45deg,
    #f0f0f0,
    #f0f0f0 10px,
    #e0e0e0 10px,
    #e0e0e0 20px
  );
  height: 80px;
  margin: 10px 0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  font-weight: bold;
}

/* Fixed Background */
.fixed-bg {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-attachment: fixed;
  height: 80px;
  margin: 10px 0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
}`}
                  </pre>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-700">Output:</h4>
                  <div className="bg-white p-4 border rounded space-y-3">
                    <div className="bg-blue-50 p-5 rounded-lg text-center text-blue-700 font-bold">
                      Solid Background Color
                    </div>
                    
                    <div className="h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50 relative overflow-hidden">
                      <div className="absolute inset-0 opacity-30">
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="30" fill="#ff6b6b"/>
                        </svg>
                      </div>
                      <span className="relative z-10 font-bold text-gray-700">Background Image</span>
                    </div>
                    
                    <div className="bg-gradient-to-r from-red-400 via-teal-400 to-blue-500 h-20 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">
                      Linear Gradient
                    </div>
                    
                    <div className="h-20 rounded-full flex items-center justify-center text-white font-bold shadow-lg" style={{background: 'radial-gradient(circle at center, #667eea 0%, #764ba2 100%)'}}>
                      Radial Gradient
                    </div>
                    
                    <div className="h-20 rounded-lg flex items-center justify-center text-white font-bold" style={{background: 'linear-gradient(45deg, rgba(255,107,107,0.8), rgba(78,205,196,0.8)), repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)'}}>
                      Multiple Backgrounds
                    </div>
                    
                    <div className="h-20 rounded-lg flex items-center justify-center text-gray-700 font-bold" style={{backgroundImage: 'repeating-linear-gradient(45deg, #f0f0f0, #f0f0f0 10px, #e0e0e0 10px, #e0e0e0 20px)'}}>
                      Repeating Pattern
                    </div>
                    
                    <div className="bg-gradient-to-br from-blue-400 to-purple-600 h-20 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">
                      Fixed Background
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Box Model */}
            <section id="box-model" className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-lg">15</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Box Model</h2>
                  <p className="text-sm text-gray-500">Content, padding, border, and margin</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-blue-700">Understanding the Box Model</h3>
                
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
{`<!-- HTML -->
<div class="box-model-demo">
  <div class="content-box-example">
    <div class="box-content">Content Area</div>
  </div>
  
  <div class="border-box-example">
    <div class="box-content">Border Box</div>
  </div>
  
  <div class="box-comparison">
    <div class="box default-box">Content Box</div>
    <div class="box border-box">Border Box</div>
  </div>
</div>

/* CSS */
/* Default Box Model (content-box) */
.content-box-example {
  width: 200px;
  height: 100px;
  padding: 20px;
  border: 5px solid #3498db;
  margin: 15px;
  background-color: #e3f2fd;
  box-sizing: content-box;
}

.content-box-example .box-content {
  background-color: #2196f3;
  color: white;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

/* Border Box Model */
.border-box-example {
  width: 200px;
  height: 100px;
  padding: 20px;
  border: 5px solid #e74c3c;
  margin: 15px;
  background-color: #ffebee;
  box-sizing: border-box;
}

.border-box-example .box-content {
  background-color: #f44336;
  color: white;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

/* Comparison Boxes */
.box-comparison {
  display: flex;
  gap: 30px;
  margin: 20px 0;
}

.box {
  width: 150px;
  height: 80px;
  padding: 15px;
  border: 3px solid #333;
  margin: 10px;
  background-color: #fff3e0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #333;
}

.default-box {
  box-sizing: content-box;
  border-color: #ff9800;
}

.border-box {
  box-sizing: border-box;
  border-color: #4caf50;
}

/* Visual Box Model Demonstration */
.box-model-visual {
  position: relative;
  width: 200px;
  height: 120px;
  margin: 30px auto;
}

.margin-area {
  background-color: #ffeb3b;
  padding: 15px;
  border-radius: 8px;
}

.border-area {
  background-color: #ff9800;
  padding: 5px;
  border-radius: 6px;
}

.padding-area {
  background-color: #4caf50;
  padding: 20px;
  border-radius: 4px;
}

.content-area {
  background-color: #2196f3;
  color: white;
  text-align: center;
  padding: 10px;
  border-radius: 2px;
  font-weight: bold;
}`}
                  </pre>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-700">Output:</h4>
                  <div className="bg-white p-4 border rounded space-y-6">
                    {/* Visual Box Model */}
                    <div className="text-center">
                      <div className="inline-block bg-yellow-200 p-4 rounded-lg">
                        <div className="bg-orange-300 p-1 rounded">
                          <div className="bg-green-300 p-5 rounded">
                            <div className="bg-blue-500 text-white p-3 rounded font-bold">
                              Content
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-xs mt-2 space-y-1">
                        <div><span className="inline-block w-3 h-3 bg-yellow-200 mr-1"></span>Margin</div>
                        <div><span className="inline-block w-3 h-3 bg-orange-300 mr-1"></span>Border</div>
                        <div><span className="inline-block w-3 h-3 bg-green-300 mr-1"></span>Padding</div>
                        <div><span className="inline-block w-3 h-3 bg-blue-500 mr-1"></span>Content</div>
                      </div>
                    </div>
                    
                    {/* Content Box vs Border Box */}
                    <div className="space-y-4">
                      <h5 className="font-semibold text-sm">Box-sizing Comparison:</h5>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <div className="border-4 border-blue-500 bg-blue-50 p-5 rounded" style={{width: '200px', height: '100px', boxSizing: 'content-box'}}>
                          <div className="bg-blue-500 text-white h-full flex items-center justify-center text-sm font-bold rounded">
                            Content Box
                          </div>
                        </div>
                        <div className="border-4 border-green-500 bg-green-50 p-5 rounded" style={{width: '200px', height: '100px', boxSizing: 'border-box'}}>
                          <div className="bg-green-500 text-white h-full flex items-center justify-center text-sm font-bold rounded">
                            Border Box
                          </div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-600 space-y-1">
                        <p><strong>Content Box:</strong> Width/height applies to content only (total size = content + padding + border)</p>
                        <p><strong>Border Box:</strong> Width/height includes padding and border (total size = specified width/height)</p>
                      </div>
                    </div>
                    
                    {/* Practical Example */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-sm mb-3">Practical Usage:</h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-orange-100 border-2 border-orange-400 p-3 rounded text-center text-sm">
                          <div className="bg-orange-500 text-white p-2 rounded font-bold">
                            Card with Padding
                          </div>
                        </div>
                        <div className="bg-purple-100 border-2 border-purple-400 p-3 rounded text-center text-sm">
                          <div className="bg-purple-500 text-white p-2 rounded font-bold">
                            Responsive Box
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Display & Visibility */}
            <section id="display" className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-lg">16</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Display & Visibility</h2>
                  <p className="text-sm text-gray-500">Control element display behavior</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-blue-700">Display Properties</h3>
                
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
{`<!-- HTML -->
<div class="display-examples">
  <h3>Block Elements:</h3>
  <div class="block-element">Block Element 1</div>
  <div class="block-element">Block Element 2</div>
  
  <h3>Inline Elements:</h3>
  <span class="inline-element">Inline 1</span>
  <span class="inline-element">Inline 2</span>
  <span class="inline-element">Inline 3</span>
  
  <h3>Inline-Block Elements:</h3>
  <div class="inline-block-element">Inline-Block 1</div>
  <div class="inline-block-element">Inline-Block 2</div>
  
  <h3>Visibility Examples:</h3>
  <div class="visibility-demo">
    <div class="visible-box">Visible</div>
    <div class="hidden-box">Hidden (takes space)</div>
    <div class="none-box">Display None</div>
    <div class="visible-box">After Hidden</div>
  </div>
  
  <h3>Opacity Examples:</h3>
  <div class="opacity-demo">
    <div class="opacity-full">Opacity 1.0</div>
    <div class="opacity-half">Opacity 0.5</div>
    <div class="opacity-low">Opacity 0.2</div>
  </div>
</div>

/* CSS */
/* Block Display */
.block-element {
  display: block;
  background-color: #3498db;
  color: white;
  padding: 10px;
  margin: 5px 0;
  border-radius: 4px;
  text-align: center;
  font-weight: bold;
}

/* Inline Display */
.inline-element {
  display: inline;
  background-color: #e74c3c;
  color: white;
  padding: 8px 12px;
  margin: 0 5px;
  border-radius: 4px;
  font-weight: bold;
}

/* Inline-Block Display */
.inline-block-element {
  display: inline-block;
  background-color: #2ecc71;
  color: white;
  padding: 15px 20px;
  margin: 5px;
  border-radius: 4px;
  text-align: center;
  font-weight: bold;
  width: 150px;
}

/* Visibility Properties */
.visibility-demo {
  border: 2px dashed #bdc3c7;
  padding: 10px;
  margin: 10px 0;
}

.visible-box {
  display: inline-block;
  background-color: #9b59b6;
  color: white;
  padding: 10px 15px;
  margin: 5px;
  border-radius: 4px;
  font-weight: bold;
  visibility: visible;
}

.hidden-box {
  display: inline-block;
  background-color: #f39c12;
  color: white;
  padding: 10px 15px;
  margin: 5px;
  border-radius: 4px;
  font-weight: bold;
  visibility: hidden;
}

.none-box {
  display: none;
  background-color: #e67e22;
  color: white;
  padding: 10px 15px;
  margin: 5px;
  border-radius: 4px;
  font-weight: bold;
}

/* Opacity Examples */
.opacity-demo {
  display: flex;
  gap: 10px;
  margin: 10px 0;
}

.opacity-full {
  background-color: #1abc9c;
  color: white;
  padding: 15px 20px;
  border-radius: 4px;
  font-weight: bold;
  opacity: 1;
}

.opacity-half {
  background-color: #1abc9c;
  color: white;
  padding: 15px 20px;
  border-radius: 4px;
  font-weight: bold;
  opacity: 0.5;
}

.opacity-low {
  background-color: #1abc9c;
  color: white;
  padding: 15px 20px;
  border-radius: 4px;
  font-weight: bold;
  opacity: 0.2;
}

/* Responsive Display */
@media (max-width: 768px) {
  .hide-mobile {
    display: none;
  }
  
  .block-mobile {
    display: block;
  }
}`}
                  </pre>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-700">Output:</h4>
                  <div className="bg-white p-4 border rounded space-y-4">
                    <div>
                      <h5 className="font-semibold text-sm mb-2">Block Elements:</h5>
                      <div className="bg-blue-500 text-white p-3 rounded text-center font-bold mb-2">Block Element 1</div>
                      <div className="bg-blue-500 text-white p-3 rounded text-center font-bold">Block Element 2</div>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-sm mb-2">Inline Elements:</h5>
                      <span className="bg-red-500 text-white px-3 py-2 rounded font-bold mr-2">Inline 1</span>
                      <span className="bg-red-500 text-white px-3 py-2 rounded font-bold mr-2">Inline 2</span>
                      <span className="bg-red-500 text-white px-3 py-2 rounded font-bold">Inline 3</span>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-sm mb-2">Inline-Block Elements:</h5>
                      <div className="bg-green-500 text-white p-4 rounded text-center font-bold inline-block w-36 mr-2">Inline-Block 1</div>
                      <div className="bg-green-500 text-white p-4 rounded text-center font-bold inline-block w-36">Inline-Block 2</div>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-sm mb-2">Visibility Examples:</h5>
                      <div className="border-2 border-dashed border-gray-300 p-3 rounded">
                        <div className="bg-purple-500 text-white px-4 py-2 rounded font-bold inline-block mr-2">Visible</div>
                        <div className="bg-orange-500 text-white px-4 py-2 rounded font-bold inline-block mr-2 invisible">Hidden (takes space)</div>
                        <div className="bg-purple-500 text-white px-4 py-2 rounded font-bold inline-block">After Hidden</div>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">Notice the gap where the hidden element would be</p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-sm mb-2">Opacity Examples:</h5>
                      <div className="flex gap-3">
                        <div className="bg-teal-500 text-white px-5 py-3 rounded font-bold opacity-100">Opacity 1.0</div>
                        <div className="bg-teal-500 text-white px-5 py-3 rounded font-bold opacity-50">Opacity 0.5</div>
                        <div className="bg-teal-500 text-white px-5 py-3 rounded font-bold opacity-20">Opacity 0.2</div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="text-sm text-gray-700">
                        <strong>Key Differences:</strong><br/>
                        • <strong>visibility: hidden</strong> - Element is invisible but takes up space<br/>
                        • <strong>display: none</strong> - Element is completely removed from layout<br/>
                        • <strong>opacity: 0</strong> - Element is transparent but still interactive
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Positioning */}
            <section id="positioning" className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-lg">17</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Positioning</h2>
                  <p className="text-sm text-gray-500">Position elements precisely</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-blue-700">Position Properties</h3>
                
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
{`<!-- HTML -->
<div class="positioning-examples">
  <h3>Static Positioning (Default):</h3>
  <div class="container">
    <div class="box static-box">Static</div>
    <div class="box static-box">Static</div>
  </div>
  
  <h3>Relative Positioning:</h3>
  <div class="container">
    <div class="box relative-box">Relative</div>
    <div class="box static-box">Static</div>
  </div>
  
  <h3>Absolute Positioning:</h3>
  <div class="container relative-container">
    <div class="box absolute-box">Absolute</div>
    <div class="box static-box">Static</div>
  </div>
  
  <h3>Fixed Positioning:</h3>
  <div class="container">
    <div class="box fixed-box">Fixed</div>
    <div class="box static-box">Static</div>
  </div>
  
  <h3>Z-Index Layering:</h3>
  <div class="z-index-demo">
    <div class="layer layer-1">Z-Index: 1</div>
    <div class="layer layer-2">Z-Index: 2</div>
    <div class="layer layer-3">Z-Index: 3</div>
  </div>
</div>

/* CSS */
/* Base Styles */
.container {
  position: relative;
  background-color: #f8f9fa;
  border: 2px dashed #dee2e6;
  height: 120px;
  margin: 15px 0;
  padding: 10px;
}

.box {
  width: 80px;
  height: 60px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 12px;
  border-radius: 4px;
  margin: 5px;
}

/* Static Positioning (Default) */
.static-box {
  position: static;
  background-color: #6c757d;
}

/* Relative Positioning */
.relative-box {
  position: relative;
  background-color: #007bff;
  top: 15px;
  left: 30px;
}

/* Absolute Positioning */
.relative-container {
  position: relative;
}

.absolute-box {
  position: absolute;
  background-color: #dc3545;
  top: 20px;
  right: 20px;
}

/* Fixed Positioning */
.fixed-box {
  position: fixed;
  background-color: #28a745;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
}

/* Sticky Positioning */
.sticky-box {
  position: sticky;
  background-color: #ffc107;
  color: #212529;
  top: 0;
  z-index: 10;
}

/* Z-Index Demonstration */
.z-index-demo {
  position: relative;
  height: 200px;
  background-color: #f8f9fa;
  border: 2px dashed #dee2e6;
  margin: 15px 0;
}

.layer {
  position: absolute;
  width: 100px;
  height: 80px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 11px;
  border-radius: 8px;
  border: 2px solid white;
}

.layer-1 {
  background-color: #e74c3c;
  top: 20px;
  left: 20px;
  z-index: 1;
}

.layer-2 {
  background-color: #3498db;
  top: 40px;
  left: 40px;
  z-index: 2;
}

.layer-3 {
  background-color: #2ecc71;
  top: 60px;
  left: 60px;
  z-index: 3;
}

/* Practical Examples */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.tooltip {
  position: absolute;
  background-color: #333;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 12px;
  z-index: 1001;
}

.navbar {
  position: sticky;
  top: 0;
  background-color: #343a40;
  color: white;
  padding: 10px;
  z-index: 100;
}`}
                  </pre>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-700">Output:</h4>
                  <div className="bg-white p-4 border rounded space-y-4">
                    <div>
                      <h5 className="font-semibold text-sm mb-2">Static Positioning (Default):</h5>
                      <div className="bg-gray-100 border-2 border-dashed border-gray-300 h-24 p-2 rounded">
                        <div className="bg-gray-500 text-white w-16 h-12 flex items-center justify-center text-xs font-bold rounded mr-2 inline-block">Static</div>
                        <div className="bg-gray-500 text-white w-16 h-12 flex items-center justify-center text-xs font-bold rounded inline-block">Static</div>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-sm mb-2">Relative Positioning:</h5>
                      <div className="bg-gray-100 border-2 border-dashed border-gray-300 h-24 p-2 rounded relative">
                        <div className="bg-blue-500 text-white w-16 h-12 flex items-center justify-center text-xs font-bold rounded relative" style={{top: '15px', left: '30px'}}>Relative</div>
                        <div className="bg-gray-500 text-white w-16 h-12 flex items-center justify-center text-xs font-bold rounded">Static</div>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-sm mb-2">Absolute Positioning:</h5>
                      <div className="bg-gray-100 border-2 border-dashed border-gray-300 h-24 p-2 rounded relative">
                        <div className="bg-red-500 text-white w-16 h-12 flex items-center justify-center text-xs font-bold rounded absolute" style={{top: '20px', right: '20px'}}>Absolute</div>
                        <div className="bg-gray-500 text-white w-16 h-12 flex items-center justify-center text-xs font-bold rounded">Static</div>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-sm mb-2">Z-Index Layering:</h5>
                      <div className="bg-gray-100 border-2 border-dashed border-gray-300 h-32 p-2 rounded relative">
                        <div className="bg-red-500 text-white w-20 h-16 flex items-center justify-center text-xs font-bold rounded absolute border-2 border-white" style={{top: '20px', left: '20px', zIndex: 1}}>Z-Index: 1</div>
                        <div className="bg-blue-500 text-white w-20 h-16 flex items-center justify-center text-xs font-bold rounded absolute border-2 border-white" style={{top: '40px', left: '40px', zIndex: 2}}>Z-Index: 2</div>
                        <div className="bg-green-500 text-white w-20 h-16 flex items-center justify-center text-xs font-bold rounded absolute border-2 border-white" style={{top: '60px', left: '60px', zIndex: 3}}>Z-Index: 3</div>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
                      <p className="text-sm text-yellow-800">
                        <strong>Note:</strong> Fixed elements are positioned relative to the viewport and stay in place when scrolling. 
                        The fixed element in this demo would appear at the bottom-right of your browser window.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="text-sm text-gray-700">
                        <strong>Position Types:</strong><br/>
                        • <strong>Static:</strong> Default positioning, follows normal document flow<br/>
                        • <strong>Relative:</strong> Positioned relative to its normal position<br/>
                        • <strong>Absolute:</strong> Positioned relative to nearest positioned ancestor<br/>
                        • <strong>Fixed:</strong> Positioned relative to the viewport<br/>
                        • <strong>Sticky:</strong> Switches between relative and fixed based on scroll
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Flexbox */}
            <section id="flexbox" className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-lg">18</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Flexbox Layout</h2>
                  <p className="text-sm text-gray-500">Flexible box layout system</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-blue-700">Flex Properties</h3>
                
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
{`<!-- HTML -->
<div class="flexbox-examples">
  <h3>Basic Flex Container:</h3>
  <div class="flex-container basic-flex">
    <div class="flex-item">Item 1</div>
    <div class="flex-item">Item 2</div>
    <div class="flex-item">Item 3</div>
  </div>
  
  <h3>Justify Content Examples:</h3>
  <div class="flex-container justify-start">
    <div class="flex-item">Start</div>
    <div class="flex-item">Start</div>
  </div>
  
  <div class="flex-container justify-center">
    <div class="flex-item">Center</div>
    <div class="flex-item">Center</div>
  </div>
  
  <div class="flex-container justify-between">
    <div class="flex-item">Between</div>
    <div class="flex-item">Between</div>
  </div>
  
  <h3>Align Items Examples:</h3>
  <div class="flex-container align-stretch">
    <div class="flex-item">Stretch</div>
    <div class="flex-item tall-item">Tall Item</div>
    <div class="flex-item">Stretch</div>
  </div>
  
  <h3>Flex Direction:</h3>
  <div class="flex-container flex-column">
    <div class="flex-item">Column 1</div>
    <div class="flex-item">Column 2</div>
    <div class="flex-item">Column 3</div>
  </div>
  
  <h3>Flex Properties:</h3>
  <div class="flex-container flex-properties">
    <div class="flex-item flex-grow-item">Flex Grow</div>
    <div class="flex-item">Normal</div>
    <div class="flex-item flex-shrink-item">No Shrink</div>
  </div>
</div>

/* CSS */
/* Base Flex Container */
.flex-container {
  display: flex;
  background-color: #f8f9fa;
  border: 2px dashed #dee2e6;
  padding: 10px;
  margin: 10px 0;
  min-height: 60px;
}

.flex-item {
  background-color: #007bff;
  color: white;
  padding: 15px 20px;
  margin: 5px;
  border-radius: 4px;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
}

/* Basic Flex */
.basic-flex {
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}

/* Justify Content Variations */
.justify-start {
  justify-content: flex-start;
}

.justify-center {
  justify-content: center;
}

.justify-between {
  justify-content: space-between;
}

.justify-around {
  justify-content: space-around;
}

.justify-evenly {
  justify-content: space-evenly;
}

/* Align Items Variations */
.align-stretch {
  align-items: stretch;
  height: 100px;
}

.align-center {
  align-items: center;
}

.align-start {
  align-items: flex-start;
}

.align-end {
  align-items: flex-end;
}

/* Flex Direction */
.flex-column {
  flex-direction: column;
  height: 200px;
}

.flex-row-reverse {
  flex-direction: row-reverse;
}

/* Flex Item Properties */
.flex-properties .flex-item {
  flex: 1;
}

.flex-grow-item {
  flex-grow: 2;
  background-color: #28a745;
}

.flex-shrink-item {
  flex-shrink: 0;
  background-color: #dc3545;
  min-width: 120px;
}

.flex-basis-item {
  flex-basis: 200px;
  background-color: #ffc107;
  color: #212529;
}

/* Tall Item for Alignment Demo */
.tall-item {
  padding: 30px 20px;
  background-color: #6f42c1;
}

/* Responsive Flexbox */
@media (max-width: 768px) {
  .flex-container {
    flex-direction: column;
  }
  
  .flex-item {
    margin: 5px 0;
  }
}

/* Practical Examples */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #343a40;
  color: white;
  padding: 10px 20px;
}

.card-layout {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  flex: 1 1 300px;
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}`}
                  </pre>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-700">Output:</h4>
                  <div className="bg-white p-4 border rounded space-y-4">
                    <div>
                      <h5 className="font-semibold text-sm mb-2">Basic Flex Container:</h5>
                      <div className="flex justify-between items-center gap-2 bg-gray-100 border-2 border-dashed border-gray-300 p-3 rounded">
                        <div className="bg-blue-500 text-white px-5 py-3 rounded text-center font-bold text-sm">Item 1</div>
                        <div className="bg-blue-500 text-white px-5 py-3 rounded text-center font-bold text-sm">Item 2</div>
                        <div className="bg-blue-500 text-white px-5 py-3 rounded text-center font-bold text-sm">Item 3</div>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-sm mb-2">Justify Content Examples:</h5>
                      <div className="space-y-2">
                        <div className="flex justify-start gap-2 bg-gray-100 border-2 border-dashed border-gray-300 p-3 rounded">
                          <div className="bg-blue-500 text-white px-4 py-2 rounded text-sm font-bold">Start</div>
                          <div className="bg-blue-500 text-white px-4 py-2 rounded text-sm font-bold">Start</div>
                        </div>
                        <div className="flex justify-center gap-2 bg-gray-100 border-2 border-dashed border-gray-300 p-3 rounded">
                          <div className="bg-green-500 text-white px-4 py-2 rounded text-sm font-bold">Center</div>
                          <div className="bg-green-500 text-white px-4 py-2 rounded text-sm font-bold">Center</div>
                        </div>
                        <div className="flex justify-between gap-2 bg-gray-100 border-2 border-dashed border-gray-300 p-3 rounded">
                          <div className="bg-purple-500 text-white px-4 py-2 rounded text-sm font-bold">Between</div>
                          <div className="bg-purple-500 text-white px-4 py-2 rounded text-sm font-bold">Between</div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-sm mb-2">Align Items (Stretch):</h5>
                      <div className="flex items-stretch gap-2 bg-gray-100 border-2 border-dashed border-gray-300 p-3 rounded h-20">
                        <div className="bg-orange-500 text-white px-4 py-2 rounded text-sm font-bold flex items-center">Stretch</div>
                        <div className="bg-purple-600 text-white px-4 py-6 rounded text-sm font-bold flex items-center">Tall Item</div>
                        <div className="bg-orange-500 text-white px-4 py-2 rounded text-sm font-bold flex items-center">Stretch</div>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-sm mb-2">Flex Direction (Column):</h5>
                      <div className="flex flex-col gap-2 bg-gray-100 border-2 border-dashed border-gray-300 p-3 rounded h-40">
                        <div className="bg-teal-500 text-white px-4 py-2 rounded text-sm font-bold text-center">Column 1</div>
                        <div className="bg-teal-500 text-white px-4 py-2 rounded text-sm font-bold text-center">Column 2</div>
                        <div className="bg-teal-500 text-white px-4 py-2 rounded text-sm font-bold text-center">Column 3</div>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-sm mb-2">Flex Properties:</h5>
                      <div className="flex gap-2 bg-gray-100 border-2 border-dashed border-gray-300 p-3 rounded">
                        <div className="bg-green-500 text-white px-4 py-2 rounded text-sm font-bold flex-grow-2">Flex Grow</div>
                        <div className="bg-blue-500 text-white px-4 py-2 rounded text-sm font-bold flex-1">Normal</div>
                        <div className="bg-red-500 text-white px-4 py-2 rounded text-sm font-bold flex-shrink-0" style={{minWidth: '100px'}}>No Shrink</div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="text-sm text-gray-700">
                        <strong>Flexbox Properties:</strong><br/>
                        • <strong>justify-content:</strong> Aligns items along main axis (horizontal)<br/>
                        • <strong>align-items:</strong> Aligns items along cross axis (vertical)<br/>
                        • <strong>flex-direction:</strong> Sets main axis direction (row/column)<br/>
                        • <strong>flex-grow:</strong> How much item should grow<br/>
                        • <strong>flex-shrink:</strong> How much item should shrink
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CSS Grid */}
            <section id="grid" className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-lg">19</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">CSS Grid Layout</h2>
                  <p className="text-sm text-gray-500">Two-dimensional layout system</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-blue-700">Grid Properties</h3>
                
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
{`<!-- HTML -->
<div class="grid-examples">
  <h3>Basic Grid Layout:</h3>
  <div class="basic-grid">
    <div class="grid-item">1</div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>
    <div class="grid-item">4</div>
    <div class="grid-item">5</div>
    <div class="grid-item">6</div>
  </div>
  
  <h3>Grid Template Areas:</h3>
  <div class="grid-layout">
    <header class="grid-header">Header</header>
    <nav class="grid-sidebar">Sidebar</nav>
    <main class="grid-main">Main Content</main>
    <aside class="grid-aside">Aside</aside>
    <footer class="grid-footer">Footer</footer>
  </div>
  
  <h3>Grid Line Positioning:</h3>
  <div class="grid-positioning">
    <div class="positioned-item-1">Spans 2 Columns</div>
    <div class="positioned-item-2">Normal</div>
    <div class="positioned-item-3">Spans 2 Rows</div>
    <div class="positioned-item-4">Normal</div>
    <div class="positioned-item-5">Normal</div>
  </div>
  
  <h3>Responsive Grid:</h3>
  <div class="responsive-grid">
    <div class="card">Card 1</div>
    <div class="card">Card 2</div>
    <div class="card">Card 3</div>
    <div class="card">Card 4</div>
    <div class="card">Card 5</div>
    <div class="card">Card 6</div>
  </div>
</div>

/* CSS */
/* Basic Grid */
.basic-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 100px);
  gap: 15px;
  background-color: #f8f9fa;
  padding: 20px;
  border: 2px dashed #dee2e6;
  margin: 15px 0;
}

.grid-item {
  background-color: #007bff;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 18px;
  border-radius: 8px;
}

/* Grid Template Areas Layout */
.grid-layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main aside"
    "footer footer footer";
  grid-template-columns: 200px 1fr 150px;
  grid-template-rows: 60px 200px 50px;
  gap: 10px;
  background-color: #f8f9fa;
  padding: 20px;
  border: 2px dashed #dee2e6;
  margin: 15px 0;
}

.grid-header {
  grid-area: header;
  background-color: #343a40;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 6px;
}

.grid-sidebar {
  grid-area: sidebar;
  background-color: #6c757d;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 6px;
}

.grid-main {
  grid-area: main;
  background-color: #007bff;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 6px;
}

.grid-aside {
  grid-area: aside;
  background-color: #28a745;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 6px;
}

.grid-footer {
  grid-area: footer;
  background-color: #dc3545;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 6px;
}

/* Grid Line Positioning */
.grid-positioning {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 80px);
  gap: 10px;
  background-color: #f8f9fa;
  padding: 20px;
  border: 2px dashed #dee2e6;
  margin: 15px 0;
}

.positioned-item-1 {
  grid-column: 1 / 3;
  background-color: #e74c3c;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 6px;
}

.positioned-item-2 {
  background-color: #3498db;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 6px;
}

.positioned-item-3 {
  grid-row: 2 / 4;
  background-color: #2ecc71;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 6px;
}

.positioned-item-4,
.positioned-item-5 {
  background-color: #f39c12;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 6px;
}

/* Responsive Grid */
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  background-color: #f8f9fa;
  padding: 20px;
  border: 2px dashed #dee2e6;
  margin: 15px 0;
}

.card {
  background-color: #6f42c1;
  color: white;
  padding: 30px 20px;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
  min-height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Advanced Grid Techniques */
.grid-auto-fit {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
}

.grid-auto-fill {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 15px;
}

/* Responsive Breakpoints */
@media (max-width: 768px) {
  .grid-layout {
    grid-template-areas:
      "header"
      "main"
      "sidebar"
      "aside"
      "footer";
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
  
  .basic-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .basic-grid {
    grid-template-columns: 1fr;
  }
}`}
                  </pre>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-700">Output:</h4>
                  <div className="bg-white p-4 border rounded space-y-6">
                    <div>
                      <h5 className="font-semibold text-sm mb-2">Basic Grid Layout:</h5>
                      <div className="grid grid-cols-3 gap-4 bg-gray-100 border-2 border-dashed border-gray-300 p-5 rounded">
                        <div className="bg-blue-500 text-white h-20 flex items-center justify-center font-bold text-lg rounded">1</div>
                        <div className="bg-blue-500 text-white h-20 flex items-center justify-center font-bold text-lg rounded">2</div>
                        <div className="bg-blue-500 text-white h-20 flex items-center justify-center font-bold text-lg rounded">3</div>
                        <div className="bg-blue-500 text-white h-20 flex items-center justify-center font-bold text-lg rounded">4</div>
                        <div className="bg-blue-500 text-white h-20 flex items-center justify-center font-bold text-lg rounded">5</div>
                        <div className="bg-blue-500 text-white h-20 flex items-center justify-center font-bold text-lg rounded">6</div>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-sm mb-2">Grid Template Areas:</h5>
                      <div className="bg-gray-100 border-2 border-dashed border-gray-300 p-5 rounded">
                        <div className="grid gap-2" style={{gridTemplateAreas: '"header header header" "sidebar main aside" "footer footer footer"', gridTemplateColumns: '150px 1fr 100px', gridTemplateRows: '50px 120px 40px'}}>
                          <div className="bg-gray-800 text-white flex items-center justify-center font-bold rounded" style={{gridArea: 'header'}}>Header</div>
                          <div className="bg-gray-600 text-white flex items-center justify-center font-bold rounded" style={{gridArea: 'sidebar'}}>Sidebar</div>
                          <div className="bg-blue-500 text-white flex items-center justify-center font-bold rounded" style={{gridArea: 'main'}}>Main Content</div>
                          <div className="bg-green-500 text-white flex items-center justify-center font-bold rounded" style={{gridArea: 'aside'}}>Aside</div>
                          <div className="bg-red-500 text-white flex items-center justify-center font-bold rounded" style={{gridArea: 'footer'}}>Footer</div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-sm mb-2">Grid Line Positioning:</h5>
                      <div className="grid grid-cols-3 gap-2 bg-gray-100 border-2 border-dashed border-gray-300 p-5 rounded" style={{gridTemplateRows: 'repeat(3, 60px)'}}>
                        <div className="bg-red-500 text-white flex items-center justify-center font-bold rounded col-span-2">Spans 2 Columns</div>
                        <div className="bg-blue-500 text-white flex items-center justify-center font-bold rounded">Normal</div>
                        <div className="bg-green-500 text-white flex items-center justify-center font-bold rounded row-span-2">Spans 2 Rows</div>
                        <div className="bg-orange-500 text-white flex items-center justify-center font-bold rounded">Normal</div>
                        <div className="bg-orange-500 text-white flex items-center justify-center font-bold rounded">Normal</div>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-sm mb-2">Responsive Grid (Auto-fit):</h5>
                      <div className="bg-gray-100 border-2 border-dashed border-gray-300 p-5 rounded">
                        <div className="grid gap-5" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))'}}>
                          <div className="bg-purple-600 text-white p-6 rounded text-center font-bold min-h-24 flex items-center justify-center">Card 1</div>
                          <div className="bg-purple-600 text-white p-6 rounded text-center font-bold min-h-24 flex items-center justify-center">Card 2</div>
                          <div className="bg-purple-600 text-white p-6 rounded text-center font-bold min-h-24 flex items-center justify-center">Card 3</div>
                          <div className="bg-purple-600 text-white p-6 rounded text-center font-bold min-h-24 flex items-center justify-center">Card 4</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="text-sm text-gray-700">
                        <strong>CSS Grid Properties:</strong><br/>
                        • <strong>grid-template-columns/rows:</strong> Define grid structure<br/>
                        • <strong>grid-template-areas:</strong> Name grid areas for easy placement<br/>
                        • <strong>grid-column/row:</strong> Position items on specific lines<br/>
                        • <strong>auto-fit/auto-fill:</strong> Responsive grid sizing<br/>
                        • <strong>minmax():</strong> Flexible sizing with constraints
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Responsive Design */}
            <section id="responsive" className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-lg">20</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Responsive Design</h2>
                  <p className="text-sm text-gray-500">Adapt to different screen sizes</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-blue-700">Media Queries & Responsive Units</h3>
                
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
{`<!-- HTML -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Design Demo</title>
</head>
<body>
  <div class="responsive-layout">
    <header class="header">
      <h1 class="responsive-title">Responsive Website</h1>
      <nav class="navigation">
        <ul class="nav-list">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
    
    <main class="main-content">
      <section class="hero-section">
        <h2 class="hero-title">Welcome to Our Site</h2>
        <p class="hero-text">This layout adapts to different screen sizes.</p>
      </section>
      
      <section class="cards-section">
        <div class="card">Card 1</div>
        <div class="card">Card 2</div>
        <div class="card">Card 3</div>
      </section>
      
      <aside class="sidebar">
        <h3>Sidebar</h3>
        <p>Additional content</p>
      </aside>
    </main>
    
    <footer class="footer">
      <p>&copy; 2024 Responsive Design</p>
    </footer>
  </div>
</body>
</html>

/* CSS */
/* Reset and Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
}

/* Container */
.responsive-layout {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Header */
.header {
  background-color: #2c3e50;
  color: white;
  padding: 1rem 0;
  margin-bottom: 2rem;
}

.responsive-title {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  margin-bottom: 1rem;
  text-align: center;
}

.navigation {
  text-align: center;
}

.nav-list {
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
}

.nav-list a {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav-list a:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* Main Content */
.main-content {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 2rem;
  margin-bottom: 2rem;
}

.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 3rem 2rem;
  border-radius: 8px;
  text-align: center;
  grid-column: 1 / -1;
}

.hero-title {
  font-size: clamp(1.8rem, 5vw, 3rem);
  margin-bottom: 1rem;
}

.hero-text {
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  max-width: 600px;
  margin: 0 auto;
}

/* Cards Section */
.cards-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.card {
  background-color: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
  border: 1px solid #dee2e6;
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

/* Sidebar */
.sidebar {
  background-color: #e9ecef;
  padding: 1.5rem;
  border-radius: 8px;
  height: fit-content;
}

.sidebar h3 {
  margin-bottom: 1rem;
  color: #495057;
}

/* Footer */
.footer {
  background-color: #343a40;
  color: white;
  text-align: center;
  padding: 1.5rem 0;
  border-radius: 8px;
}

/* Responsive Images */
img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* Media Queries */

/* Tablet Styles */
@media (max-width: 1024px) {
  .responsive-layout {
    padding: 0 15px;
  }
  
  .main-content {
    grid-template-columns: 1fr 250px;
    gap: 1.5rem;
  }
  
  .nav-list {
    gap: 1rem;
  }
}

/* Mobile Styles */
@media (max-width: 768px) {
  .main-content {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .sidebar {
    order: -1;
  }
  
  .nav-list {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .cards-section {
    grid-template-columns: 1fr;
  }
  
  .hero-section {
    padding: 2rem 1rem;
  }
}

/* Small Mobile */
@media (max-width: 480px) {
  .responsive-layout {
    padding: 0 10px;
  }
  
  .header {
    padding: 0.5rem 0;
  }
  
  .hero-section {
    padding: 1.5rem 1rem;
  }
  
  .card {
    padding: 1.5rem;
  }
}

/* Print Styles */
@media print {
  .navigation,
  .sidebar {
    display: none;
  }
  
  .main-content {
    grid-template-columns: 1fr;
  }
  
  body {
    font-size: 12pt;
    line-height: 1.4;
  }
}

/* Dark Mode Support */
@media (prefers-color-scheme: dark) {
  body {
    background-color: #1a1a1a;
    color: #e0e0e0;
  }
  
  .card {
    background-color: #2d2d2d;
    border-color: #404040;
    color: #e0e0e0;
  }
  
  .sidebar {
    background-color: #2d2d2d;
    color: #e0e0e0;
  }
}`}
                  </pre>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-700">Output:</h4>
                  <div className="bg-white border rounded overflow-hidden">
                    {/* Desktop View */}
                    <div className="p-4 border-b">
                      <h5 className="font-semibold text-sm mb-3">Desktop View (1024px+):</h5>
                      <div className="bg-gray-800 text-white p-3 rounded-t text-center">
                        <h1 className="text-xl font-bold mb-2">Responsive Website</h1>
                        <nav className="flex justify-center space-x-6 text-sm">
                          <a href="#" className="hover:bg-gray-700 px-2 py-1 rounded">Home</a>
                          <a href="#" className="hover:bg-gray-700 px-2 py-1 rounded">About</a>
                          <a href="#" className="hover:bg-gray-700 px-2 py-1 rounded">Services</a>
                          <a href="#" className="hover:bg-gray-700 px-2 py-1 rounded">Contact</a>
                        </nav>
                      </div>
                      <div className="grid grid-cols-4 gap-3 p-3 bg-gray-50">
                        <div className="col-span-3">
                          <div className="bg-gradient-to-r from-blue-400 to-purple-600 text-white p-4 rounded mb-3 text-center">
                            <h2 className="text-lg font-bold mb-1">Welcome to Our Site</h2>
                            <p className="text-sm">This layout adapts to different screen sizes.</p>
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            <div className="bg-gray-200 p-3 rounded text-center text-sm font-bold">Card 1</div>
                            <div className="bg-gray-200 p-3 rounded text-center text-sm font-bold">Card 2</div>
                            <div className="bg-gray-200 p-3 rounded text-center text-sm font-bold">Card 3</div>
                          </div>
                        </div>
                        <div className="bg-gray-300 p-3 rounded">
                          <h3 className="font-bold text-sm mb-1">Sidebar</h3>
                          <p className="text-xs">Additional content</p>
                        </div>
                      </div>
                      <div className="bg-gray-800 text-white p-2 rounded-b text-center text-sm">
                        © 2024 Responsive Design
                      </div>
                    </div>
                    
                    {/* Tablet View */}
                    <div className="p-4 border-b">
                      <h5 className="font-semibold text-sm mb-3">Tablet View (768px - 1024px):</h5>
                      <div className="max-w-md mx-auto">
                        <div className="bg-gray-800 text-white p-3 rounded-t text-center">
                          <h1 className="text-lg font-bold mb-2">Responsive Website</h1>
                          <nav className="flex justify-center space-x-4 text-sm">
                            <a href="#" className="hover:bg-gray-700 px-2 py-1 rounded">Home</a>
                            <a href="#" className="hover:bg-gray-700 px-2 py-1 rounded">About</a>
                            <a href="#" className="hover:bg-gray-700 px-2 py-1 rounded">Services</a>
                            <a href="#" className="hover:bg-gray-700 px-2 py-1 rounded">Contact</a>
                          </nav>
                        </div>
                        <div className="grid grid-cols-3 gap-2 p-3 bg-gray-50">
                          <div className="col-span-2">
                            <div className="bg-gradient-to-r from-blue-400 to-purple-600 text-white p-3 rounded mb-2 text-center">
                              <h2 className="text-base font-bold mb-1">Welcome to Our Site</h2>
                              <p className="text-xs">This layout adapts to different screen sizes.</p>
                            </div>
                            <div className="grid grid-cols-2 gap-1">
                              <div className="bg-gray-200 p-2 rounded text-center text-xs font-bold">Card 1</div>
                              <div className="bg-gray-200 p-2 rounded text-center text-xs font-bold">Card 2</div>
                            </div>
                          </div>
                          <div className="bg-gray-300 p-2 rounded">
                            <h3 className="font-bold text-xs mb-1">Sidebar</h3>
                            <p className="text-xs">Content</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Mobile View */}
                    <div className="p-4">
                      <h5 className="font-semibold text-sm mb-3">Mobile View (&lt; 768px):</h5>
                      <div className="max-w-xs mx-auto">
                        <div className="bg-gray-800 text-white p-2 rounded-t text-center">
                          <h1 className="text-base font-bold mb-2">Responsive Website</h1>
                          <nav className="space-y-1 text-sm">
                            <div><a href="#" className="block hover:bg-gray-700 px-2 py-1 rounded">Home</a></div>
                            <div><a href="#" className="block hover:bg-gray-700 px-2 py-1 rounded">About</a></div>
                            <div><a href="#" className="block hover:bg-gray-700 px-2 py-1 rounded">Services</a></div>
                            <div><a href="#" className="block hover:bg-gray-700 px-2 py-1 rounded">Contact</a></div>
                          </nav>
                        </div>
                        <div className="p-2 bg-gray-50 space-y-2">
                          <div className="bg-gray-300 p-2 rounded">
                            <h3 className="font-bold text-xs mb-1">Sidebar</h3>
                            <p className="text-xs">Additional content</p>
                          </div>
                          <div className="bg-gradient-to-r from-blue-400 to-purple-600 text-white p-3 rounded text-center">
                            <h2 className="text-sm font-bold mb-1">Welcome to Our Site</h2>
                            <p className="text-xs">This layout adapts to different screen sizes.</p>
                          </div>
                          <div className="space-y-1">
                            <div className="bg-gray-200 p-2 rounded text-center text-xs font-bold">Card 1</div>
                            <div className="bg-gray-200 p-2 rounded text-center text-xs font-bold">Card 2</div>
                            <div className="bg-gray-200 p-2 rounded text-center text-xs font-bold">Card 3</div>
                          </div>
                        </div>
                        <div className="bg-gray-800 text-white p-2 rounded-b text-center text-xs">
                          © 2024 Responsive Design
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 p-3 border-t">
                      <p className="text-sm font-medium text-purple-800 mb-1">Responsive Breakpoints:</p>
                      <div className="text-xs text-purple-700 space-y-1">
                        <div>• <strong>Mobile:</strong> &lt; 768px (Single column, stacked layout)</div>
                        <div>• <strong>Tablet:</strong> 768px - 1024px (Reduced columns, compact spacing)</div>
                        <div>• <strong>Desktop:</strong> &gt; 1024px (Full grid layout, sidebar visible)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Transitions & Animations */}
            <section id="transitions" className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-bold text-lg">21</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Transitions & Animations</h2>
                  <p className="text-sm text-gray-500">Add motion and interactivity</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-purple-700">CSS Transitions & Keyframes</h3>
                
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
{`<!-- HTML -->
<div class="animation-examples">
  <button class="transition-btn">Hover Transition</button>
  <div class="slide-box">Slide Animation</div>
  <div class="bounce-box">Bounce Animation</div>
  <div class="rotate-box">Rotate Animation</div>
  <div class="pulse-box">Pulse Animation</div>
</div>

/* CSS */
/* Transition Effects */
.transition-btn {
  background-color: #3498db;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.transition-btn:hover {
  background-color: #e74c3c;
  transform: scale(1.1);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

/* Keyframe Animations */
@keyframes slideIn {
  0% { 
    transform: translateX(-100%);
    opacity: 0;
  }
  100% { 
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

/* Animation Classes */
.slide-box {
  background-color: #2ecc71;
  color: white;
  padding: 15px;
  margin: 10px 0;
  border-radius: 6px;
  animation: slideIn 1s ease-out;
}

.bounce-box {
  background-color: #f39c12;
  color: white;
  padding: 15px;
  margin: 10px 0;
  border-radius: 6px;
  animation: bounce 2s infinite;
}

.rotate-box {
  background-color: #9b59b6;
  color: white;
  padding: 15px;
  margin: 10px 0;
  border-radius: 6px;
  animation: rotate 3s linear infinite;
}

.pulse-box {
  background-color: #e67e22;
  color: white;
  padding: 15px;
  margin: 10px 0;
  border-radius: 6px;
  animation: pulse 1.5s ease-in-out infinite;
}`}
                  </pre>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-700">Output:</h4>
                  <div className="bg-white p-4 border rounded space-y-4">
                    <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-red-500 hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer">
                      Hover Transition
                    </button>
                    <div className="bg-green-500 text-white p-4 rounded-md animate-pulse">
                      Slide Animation (simulated with pulse)
                    </div>
                    <div className="bg-orange-400 text-white p-4 rounded-md animate-bounce inline-block">
                      Bounce Animation
                    </div>
                    <div className="bg-purple-500 text-white p-4 rounded-md animate-spin inline-block ml-4" style={{animationDuration: '3s'}}>
                      Rotate Animation
                    </div>
                    <div className="bg-orange-600 text-white p-4 rounded-md animate-pulse inline-block ml-4">
                      Pulse Animation
                    </div>
                    <div className="text-sm text-gray-600 mt-4">
                      <p><strong>Note:</strong> Hover over the blue button to see transition effects!</p>
                      <p>Other animations are running continuously to demonstrate keyframe animations.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Pseudo-classes & Elements */}
            <section id="pseudo" className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-bold text-lg">22</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Pseudo-classes & Elements</h2>
                  <p className="text-sm text-gray-500">Style specific states and parts</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-purple-700">Interactive States & Content</h3>
                
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
{`<!-- HTML -->
<div class="pseudo-examples">
  <a href="#" class="demo-link">Hover over this link</a>
  <a href="#" class="visited-link">Visited link example</a>
  
  <input type="text" class="focus-input" placeholder="Click to focus">
  
  <ul class="styled-list">
    <li>First item (will be bold)</li>
    <li>Second item (odd background)</li>
    <li>Third item (odd background)</li>
    <li>Fourth item</li>
    <li>Last item (will be gray)</li>
  </ul>
  
  <p class="styled-paragraph">This paragraph has special styling.</p>
  <p class="content-paragraph">Paragraph with before/after content.</p>
</div>

/* CSS */
/* Pseudo-classes for Links */
a.demo-link:link { color: blue; }
a.demo-link:visited { color: purple; }
a.demo-link:hover { 
  color: red; 
  text-decoration: underline;
}
a.demo-link:active { color: green; }

/* Focus States */
.focus-input {
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s;
}

.focus-input:focus {
  border-color: #007bff;
  outline: none;
  box-shadow: 0 0 5px rgba(0,123,255,0.3);
}

/* Structural Pseudo-classes */
.styled-list li:first-child {
  font-weight: bold;
  color: #2c3e50;
}

.styled-list li:last-child {
  color: #7f8c8d;
  font-style: italic;
}

.styled-list li:nth-child(odd) {
  background-color: #f8f9fa;
  padding: 5px;
  border-radius: 3px;
}

.styled-list li:nth-child(even) {
  padding: 5px;
}

/* Pseudo-elements */
.styled-paragraph::first-letter {
  font-size: 3em;
  font-weight: bold;
  color: #e74c3c;
  float: left;
  line-height: 1;
  margin-right: 5px;
}

.content-paragraph::before {
  content: "→ ";
  color: #3498db;
  font-weight: bold;
}

.content-paragraph::after {
  content: " ←";
  color: #27ae60;
  font-weight: bold;
}

/* Selection Styling */
::selection {
  background-color: #fff3cd;
  color: #856404;
}

::-moz-selection {
  background-color: #fff3cd;
  color: #856404;
}`}
                  </pre>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-700">Output:</h4>
                  <div className="bg-white p-4 border rounded space-y-4">
                    <div className="space-y-2">
                      <a href="#" className="text-blue-600 hover:text-red-600 hover:underline transition-colors">Hover over this link</a>
                      <a href="#" className="text-purple-600 ml-4">Visited link example</a>
                    </div>
                    
                    <input type="text" placeholder="Click to focus" className="w-full border-2 border-gray-300 p-3 rounded focus:border-blue-500 focus:outline-none focus:shadow-lg transition-all"/>
                    
                    <ul className="space-y-1">
                      <li className="font-bold text-gray-800 p-1">First item (will be bold)</li>
                      <li className="bg-gray-100 p-2 rounded">Second item (odd background)</li>
                      <li className="bg-gray-100 p-2 rounded">Third item (odd background)</li>
                      <li className="p-1">Fourth item</li>
                      <li className="text-gray-500 italic p-1">Last item (will be gray)</li>
                    </ul>
                    
                    <div className="space-y-3">
                      <p className="text-base">
                        <span className="text-5xl font-bold text-red-500 float-left mr-2 leading-none">T</span>
                        his paragraph has special first-letter styling with a large, bold, red initial letter.
                      </p>
                      <div className="clear-both"></div>
                      <p className="text-base">
                        <span className="text-blue-500 font-bold">→ </span>
                        Paragraph with before/after content.
                        <span className="text-green-500 font-bold"> ←</span>
                      </p>
                    </div>
                    
                    <div className="bg-yellow-100 p-3 rounded border border-yellow-300">
                      <p className="text-sm text-yellow-800">
                        <strong>Try this:</strong> Select any text above to see custom selection styling!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CSS Variables */}
            <section id="variables" className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-bold text-lg">23</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">CSS Variables</h2>
                  <p className="text-sm text-gray-500">Reusable values and theming</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-purple-700">Custom Properties</h3>
                
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
{`<!-- HTML -->
<div class="theme-container" data-theme="light">
  <div class="variable-card">
    <h3>CSS Variables Demo</h3>
    <p>This card uses CSS custom properties for consistent styling.</p>
    <button class="variable-button">Action Button</button>
  </div>
  
  <div class="color-scheme">
    <div class="primary-box">Primary Color</div>
    <div class="secondary-box">Secondary Color</div>
    <div class="accent-box">Accent Color</div>
  </div>
  
  <button class="theme-toggle" onclick="toggleTheme()">Toggle Dark Theme</button>
</div>

<!-- Dark Theme Example -->
<div class="theme-container" data-theme="dark">
  <div class="variable-card">
    <h3>Dark Theme</h3>
    <p>Same HTML, different CSS variables!</p>
    <button class="variable-button">Dark Button</button>
  </div>
</div>

/* CSS */
/* Light Theme Variables */
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --accent-color: #e74c3c;
  --text-color: #2c3e50;
  --bg-color: #ffffff;
  --card-bg: #f8f9fa;
  --font-size: 16px;
  --spacing: 20px;
  --border-radius: 12px;
  --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Dark Theme Variables */
[data-theme="dark"] {
  --primary-color: #5dade2;
  --secondary-color: #58d68d;
  --accent-color: #ec7063;
  --text-color: #ecf0f1;
  --bg-color: #2c3e50;
  --card-bg: #34495e;
  --shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

/* Using Variables */
.theme-container {
  background-color: var(--bg-color);
  color: var(--text-color);
  padding: var(--spacing);
  border-radius: var(--border-radius);
  transition: all 0.3s ease;
}

.variable-card {
  background-color: var(--card-bg);
  padding: var(--spacing);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  margin-bottom: var(--spacing);
}

.variable-card h3 {
  color: var(--primary-color);
  font-size: calc(var(--font-size) * 1.25);
  margin-bottom: calc(var(--spacing) / 2);
}

.variable-button {
  background-color: var(--secondary-color);
  color: white;
  border: none;
  padding: calc(var(--spacing) / 2) var(--spacing);
  border-radius: calc(var(--border-radius) / 2);
  font-size: var(--font-size);
  cursor: pointer;
  transition: transform 0.2s ease;
}

.variable-button:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow);
}

.color-scheme {
  display: flex;
  gap: calc(var(--spacing) / 2);
  margin: var(--spacing) 0;
}

.primary-box {
  background-color: var(--primary-color);
  color: white;
  padding: calc(var(--spacing) / 2);
  border-radius: var(--border-radius);
  flex: 1;
  text-align: center;
  font-weight: bold;
}

.secondary-box {
  background-color: var(--secondary-color);
  color: white;
  padding: calc(var(--spacing) / 2);
  border-radius: var(--border-radius);
  flex: 1;
  text-align: center;
  font-weight: bold;
}

.accent-box {
  background-color: var(--accent-color);
  color: white;
  padding: calc(var(--spacing) / 2);
  border-radius: var(--border-radius);
  flex: 1;
  text-align: center;
  font-weight: bold;
}

.theme-toggle {
  background-color: var(--accent-color);
  color: white;
  border: none;
  padding: calc(var(--spacing) / 2) var(--spacing);
  border-radius: var(--border-radius);
  cursor: pointer;
  font-weight: bold;
}`}
                  </pre>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-700">Output:</h4>
                  <div className="space-y-4">
                    {/* Light Theme */}
                    <div className="bg-white p-5 rounded-xl shadow-md border">
                      <div className="bg-gray-50 p-5 rounded-xl shadow-sm mb-5">
                        <h3 className="text-blue-500 text-xl font-semibold mb-3">CSS Variables Demo</h3>
                        <p className="text-gray-700 mb-4">This card uses CSS custom properties for consistent styling.</p>
                        <button className="bg-green-500 text-white px-5 py-2 rounded-md hover:transform hover:-translate-y-1 transition-all duration-200 shadow-md">
                          Action Button
                        </button>
                      </div>
                      
                      <div className="flex gap-3 mb-5">
                        <div className="bg-blue-500 text-white p-3 rounded-xl flex-1 text-center font-bold">
                          Primary Color
                        </div>
                        <div className="bg-green-500 text-white p-3 rounded-xl flex-1 text-center font-bold">
                          Secondary Color
                        </div>
                        <div className="bg-red-500 text-white p-3 rounded-xl flex-1 text-center font-bold">
                          Accent Color
                        </div>
                      </div>
                      
                      <button className="bg-red-500 text-white px-5 py-2 rounded-xl font-bold">
                        Toggle Dark Theme
                      </button>
                    </div>
                    
                    {/* Dark Theme */}
                    <div className="bg-gray-800 text-white p-5 rounded-xl shadow-md">
                      <div className="bg-gray-700 p-5 rounded-xl shadow-sm mb-5">
                        <h3 className="text-blue-300 text-xl font-semibold mb-3">Dark Theme</h3>
                        <p className="text-gray-300 mb-4">Same HTML, different CSS variables!</p>
                        <button className="bg-green-400 text-white px-5 py-2 rounded-md hover:transform hover:-translate-y-1 transition-all duration-200 shadow-md">
                          Dark Button
                        </button>
                      </div>
                      
                      <div className="flex gap-3">
                        <div className="bg-blue-400 text-white p-3 rounded-xl flex-1 text-center font-bold">
                          Primary
                        </div>
                        <div className="bg-green-400 text-white p-3 rounded-xl flex-1 text-center font-bold">
                          Secondary
                        </div>
                        <div className="bg-red-400 text-white p-3 rounded-xl flex-1 text-center font-bold">
                          Accent
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                      <p className="text-sm text-yellow-800">
                        <strong>CSS Variables Benefits:</strong> Easy theming, consistent values, dynamic updates, and better maintainability!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Transforms & Effects */}
            <section id="transforms" className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-bold text-lg">24</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Transforms & Effects</h2>
                  <p className="text-sm text-gray-500">Visual effects and transformations</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-purple-700">Transform Functions & Filters</h3>
                
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
{`<!-- HTML -->
<div class="transform-examples">
  <div class="transform-grid">
    <div class="box rotate-box">Rotate</div>
    <div class="box scale-box">Scale</div>
    <div class="box translate-box">Translate</div>
    <div class="box skew-box">Skew</div>
  </div>
  
  <div class="combined-transform">
    <div class="box multi-transform">Combined</div>
  </div>
  
  <div class="filter-examples">
    <img src="demo.jpg" class="filter-blur" alt="Blur">
    <img src="demo.jpg" class="filter-brightness" alt="Brightness">
    <img src="demo.jpg" class="filter-grayscale" alt="Grayscale">
    <img src="demo.jpg" class="filter-sepia" alt="Sepia">
  </div>
  
  <div class="shadow-examples">
    <div class="box-shadow">Box Shadow</div>
    <h2 class="text-shadow">Text Shadow</h2>
  </div>
</div>

/* CSS */
/* Base Box Styling */
.box {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 12px;
  border-radius: 8px;
  margin: 10px;
  transition: transform 0.3s ease;
}

.transform-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 20px 0;
}

/* Transform Functions */
.rotate-box {
  transform: rotate(45deg);
}

.rotate-box:hover {
  transform: rotate(90deg);
}

.scale-box {
  transform: scale(1.3);
}

.scale-box:hover {
  transform: scale(1.5);
}

.translate-box {
  transform: translateX(20px) translateY(-10px);
}

.translate-box:hover {
  transform: translateX(40px) translateY(-20px);
}

.skew-box {
  transform: skewX(15deg) skewY(5deg);
}

.skew-box:hover {
  transform: skewX(25deg) skewY(10deg);
}

/* Combined Transform */
.multi-transform {
  transform: rotate(15deg) scale(1.2) translateX(10px);
  background: linear-gradient(135deg, #ff6b6b 0%, #feca57 100%);
}

.multi-transform:hover {
  transform: rotate(30deg) scale(1.4) translateX(20px);
}

/* Filter Effects */
.filter-examples {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  margin: 20px 0;
}

.filter-examples img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  background: linear-gradient(45deg, #ff9a9e 0%, #fecfef 100%);
}

.filter-blur {
  filter: blur(3px);
}

.filter-brightness {
  filter: brightness(150%);
}

.filter-grayscale {
  filter: grayscale(100%);
}

.filter-sepia {
  filter: sepia(100%);
}

/* Shadow Effects */
.shadow-examples {
  margin: 20px 0;
  text-align: center;
}

.box-shadow {
  background: #4ecdc4;
  padding: 20px 40px;
  border-radius: 12px;
  box-shadow: 
    0 4px 6px rgba(0, 0, 0, 0.1),
    0 8px 25px rgba(0, 0, 0, 0.15);
  display: inline-block;
  margin: 20px;
  transition: box-shadow 0.3s ease;
}

.box-shadow:hover {
  box-shadow: 
    0 8px 15px rgba(0, 0, 0, 0.2),
    0 15px 35px rgba(0, 0, 0, 0.25);
  transform: translateY(-2px);
}

.text-shadow {
  font-size: 2.5em;
  color: #2c3e50;
  text-shadow: 
    2px 2px 4px rgba(0, 0, 0, 0.3),
    4px 4px 8px rgba(0, 0, 0, 0.2);
  margin: 20px 0;
}`}
                  </pre>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-700">Output:</h4>
                  <div className="bg-white p-4 border rounded">
                    <div className="grid grid-cols-4 gap-4 mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-600 text-white flex items-center justify-center text-xs font-bold rounded-lg transform rotate-45 hover:rotate-90 transition-transform duration-300">
                        Rotate
                      </div>
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-600 text-white flex items-center justify-center text-xs font-bold rounded-lg transform scale-125 hover:scale-150 transition-transform duration-300">
                        Scale
                      </div>
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-600 text-white flex items-center justify-center text-xs font-bold rounded-lg transform translate-x-5 -translate-y-2 hover:translate-x-10 hover:-translate-y-4 transition-transform duration-300">
                        Translate
                      </div>
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-600 text-white flex items-center justify-center text-xs font-bold rounded-lg transform skew-x-12 skew-y-3 hover:skew-x-24 hover:skew-y-6 transition-transform duration-300">
                        Skew
                      </div>
                    </div>
                    
                    <div className="text-center mb-6">
                      <div className="inline-block w-20 h-20 bg-gradient-to-br from-red-400 to-yellow-400 text-white flex items-center justify-center text-xs font-bold rounded-lg transform rotate-12 scale-125 translate-x-3 hover:rotate-24 hover:scale-150 hover:translate-x-6 transition-transform duration-300">
                        Combined
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-4 mb-6">
                      <div className="w-24 h-24 bg-gradient-to-br from-pink-300 to-purple-300 rounded-lg filter blur-sm flex items-center justify-center text-xs font-bold text-white">
                        Blur
                      </div>
                      <div className="w-24 h-24 bg-gradient-to-br from-pink-300 to-purple-300 rounded-lg filter brightness-150 flex items-center justify-center text-xs font-bold text-white">
                        Bright
                      </div>
                      <div className="w-24 h-24 bg-gradient-to-br from-pink-300 to-purple-300 rounded-lg filter grayscale flex items-center justify-center text-xs font-bold text-white">
                        Grayscale
                      </div>
                      <div className="w-24 h-24 bg-gradient-to-br from-pink-300 to-purple-300 rounded-lg filter sepia flex items-center justify-center text-xs font-bold text-white">
                        Sepia
                      </div>
                    </div>
                    
                    <div className="text-center space-y-4">
                      <div className="inline-block bg-teal-400 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                        Box Shadow
                      </div>
                      <h2 className="text-4xl font-bold text-gray-800" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.3), 4px 4px 8px rgba(0,0,0,0.2)'}}>
                        Text Shadow
                      </h2>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded-lg mt-4">
                      <p className="text-sm text-gray-600">
                        <strong>Interactive:</strong> Hover over the transform boxes to see enhanced effects!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Best Practices */}
            <section id="best-practices" className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold text-lg">25</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Best Practices</h2>
                  <p className="text-sm text-gray-500">Professional CSS development</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-green-700">CSS Organization & Performance</h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3 text-green-700">✅ Good Practices</h4>
                    <ul className="text-sm space-y-2">
                      <li>• Use external stylesheets</li>
                      <li>• Follow BEM naming convention</li>
                      <li>• Mobile-first responsive design</li>
                      <li>• Use CSS variables for consistency</li>
                      <li>• Minimize use of !important</li>
                      <li>• Optimize for performance</li>
                      <li>• Use semantic class names</li>
                      <li>• Group related styles together</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3 text-red-700">❌ Avoid These</h4>
                    <ul className="text-sm space-y-2">
                      <li>• Inline styles everywhere</li>
                      <li>• Overly specific selectors</li>
                      <li>• Hardcoded values</li>
                      <li>• Unused CSS rules</li>
                      <li>• Deep nesting (3 levels)</li>
                      <li>• Magic numbers</li>
                      <li>• Non-descriptive class names</li>
                      <li>• Ignoring browser compatibility</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
{`/* BEM Methodology Example */
.card { /* Block */ }
.card__header { /* Element */ }
.card__title { /* Element */ }
.card--featured { /* Modifier */ }

/* CSS Organization */
/* 1. Reset/Normalize */
/* 2. Variables */
/* 3. Base styles */
/* 4. Layout */
/* 5. Components */
/* 6. Utilities */

/* Performance Tips */
.efficient-selector {
  /* Use class selectors over complex ones */
}

/* Avoid */
div > ul > li > a { color: blue; }

/* Better */
.nav-link { color: blue; }

/* CSS Custom Properties for Theming */
:root {
  --primary: #007bff;
  --secondary: #6c757d;
  --success: #28a745;
}

/* Responsive Design Pattern */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 768px) {
  .container {
    padding: 0 2rem;
  }
}`}
                  </pre>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-700">Professional CSS Structure:</h4>
                  <div className="bg-white p-4 border rounded">
                    <div className="space-y-2 text-sm font-mono">
                      <div>📁 styles/</div>
                      <div className="ml-4">📄 reset.css</div>
                      <div className="ml-4">📄 variables.css</div>
                      <div className="ml-4">📄 base.css</div>
                      <div className="ml-4">📄 layout.css</div>
                      <div className="ml-4">📄 components.css</div>
                      <div className="ml-4">📄 utilities.css</div>
                      <div className="ml-4">📄 main.css</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Project 1: Memory Game */}
            <section id="project-game" className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🎮</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Project: Memory Card Game</h2>
                  <p className="text-sm text-gray-500">Interactive game using HTML, CSS & JavaScript</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-green-700">Complete Memory Game</h3>
                
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
{`<!-- HTML -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Memory Card Game</title>
</head>
<body>
    <div class="game-container">
        <header class="game-header">
            <h1>Memory Game</h1>
            <div class="game-stats">
                <div class="stat">
                    <span class="label">Score:</span>
                    <span id="score">0</span>
                </div>
                <div class="stat">
                    <span class="label">Moves:</span>
                    <span id="moves">0</span>
                </div>
                <div class="stat">
                    <span class="label">Time:</span>
                    <span id="timer">00:00</span>
                </div>
            </div>
            <button id="restart-btn" class="restart-btn">New Game</button>
        </header>
        
        <div class="game-board" id="gameBoard">
            <!-- Cards will be generated by JavaScript -->
        </div>
        
        <div class="game-message" id="gameMessage"></div>
    </div>
</body>
</html>

/* CSS */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.game-container {
    background: white;
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    max-width: 600px;
    width: 100%;
}

.game-header {
    text-align: center;
    margin-bottom: 30px;
}

.game-header h1 {
    color: #333;
    font-size: 2.5rem;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}

.game-stats {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-bottom: 20px;
}

.stat {
    text-align: center;
}

.stat .label {
    display: block;
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 5px;
}

.stat span:last-child {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
}

.restart-btn {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    padding: 12px 30px;
    border-radius: 25px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
}

.restart-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.game-board {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
    margin-bottom: 20px;
}

.card {
    aspect-ratio: 1;
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    transition: opacity 0.3s ease;
}

.card.flipped::before {
    opacity: 0;
}

.card-content {
    position: relative;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.card.flipped .card-content {
    opacity: 1;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
}

.card.matched {
    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    transform: scale(0.95);
}

.game-message {
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
    min-height: 30px;
}

.win-message {
    color: #4CAF50;
    animation: bounce 0.6s ease-in-out;
}

@keyframes bounce {
    0%, 20%, 60%, 100% { transform: translateY(0); }
    40% { transform: translateY(-10px); }
    80% { transform: translateY(-5px); }
}

@media (max-width: 480px) {
    .game-container {
        padding: 20px;
    }
    
    .game-header h1 {
        font-size: 2rem;
    }
    
    .game-stats {
        gap: 15px;
    }
    
    .card {
        font-size: 1.5rem;
    }
}

/* JavaScript */
class MemoryGame {
    constructor() {
        this.cards = ['🎮', '🎯', '🎲', '🎪', '🎨', '🎭', '🎪', '🎯'];
        this.gameBoard = document.getElementById('gameBoard');
        this.scoreElement = document.getElementById('score');
        this.movesElement = document.getElementById('moves');
        this.timerElement = document.getElementById('timer');
        this.messageElement = document.getElementById('gameMessage');
        this.restartBtn = document.getElementById('restart-btn');
        
        this.flippedCards = [];
        this.matchedPairs = 0;
        this.moves = 0;
        this.score = 0;
        this.startTime = null;
        this.timerInterval = null;
        
        this.init();
    }
    
    init() {
        this.createBoard();
        this.restartBtn.addEventListener('click', () => this.restart());
        this.startTimer();
    }
    
    createBoard() {
        const shuffledCards = this.shuffleArray([...this.cards, ...this.cards]);
        this.gameBoard.innerHTML = '';
        
        shuffledCards.forEach((symbol, index) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.dataset.symbol = symbol;
            card.dataset.index = index;
            
            card.innerHTML = \`
                <div class="card-content">\${symbol}</div>
            \`;
            
            card.addEventListener('click', () => this.flipCard(card));
            this.gameBoard.appendChild(card);
        });
    }
    
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
    flipCard(card) {
        if (card.classList.contains('flipped') || 
            card.classList.contains('matched') || 
            this.flippedCards.length === 2) {
            return;
        }
        
        card.classList.add('flipped');
        this.flippedCards.push(card);
        
        if (this.flippedCards.length === 2) {
            this.moves++;
            this.movesElement.textContent = this.moves;
            this.checkMatch();
        }
    }
    
    checkMatch() {
        const [card1, card2] = this.flippedCards;
        
        if (card1.dataset.symbol === card2.dataset.symbol) {
            card1.classList.add('matched');
            card2.classList.add('matched');
            this.matchedPairs++;
            this.score += 10;
            this.scoreElement.textContent = this.score;
            
            if (this.matchedPairs === this.cards.length) {
                this.gameWon();
            }
        } else {
            setTimeout(() => {
                card1.classList.remove('flipped');
                card2.classList.remove('flipped');
            }, 1000);
        }
        
        this.flippedCards = [];
    }
    
    gameWon() {
        clearInterval(this.timerInterval);
        this.messageElement.textContent = \`🎉 You Won! Score: \${this.score}\`;
        this.messageElement.className = 'game-message win-message';
    }
    
    startTimer() {
        this.startTime = Date.now();
        this.timerInterval = setInterval(() => {
            const elapsed = Math.floor((Date.now() - this.startTime) / 1000);
            const minutes = Math.floor(elapsed / 60).toString().padStart(2, '0');
            const seconds = (elapsed % 60).toString().padStart(2, '0');
            this.timerElement.textContent = \`\${minutes}:\${seconds}\`;
        }, 1000);
    }
    
    restart() {
        this.flippedCards = [];
        this.matchedPairs = 0;
        this.moves = 0;
        this.score = 0;
        
        this.scoreElement.textContent = '0';
        this.movesElement.textContent = '0';
        this.timerElement.textContent = '00:00';
        this.messageElement.textContent = '';
        this.messageElement.className = 'game-message';
        
        clearInterval(this.timerInterval);
        this.createBoard();
        this.startTimer();
    }
}

// Initialize game when page loads
document.addEventListener('DOMContentLoaded', () => {
    new MemoryGame();
});`}
                  </pre>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-700">Live Demo:</h4>
                  <div className="bg-white p-6 border rounded-lg">
                    <div className="text-center mb-4">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">Memory Game</h3>
                      <div className="flex justify-center gap-6 mb-4 text-sm">
                        <div><span className="text-gray-600">Score:</span> <span className="font-bold">0</span></div>
                        <div><span className="text-gray-600">Moves:</span> <span className="font-bold">0</span></div>
                        <div><span className="text-gray-600">Time:</span> <span className="font-bold">00:00</span></div>
                      </div>
                      <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-bold hover:shadow-lg transition-all">
                        New Game
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-3 max-w-sm mx-auto">
                      {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map(i => (
                        <div key={i} className="aspect-square bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center text-white text-xl font-bold cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1">
                          ?
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-center mt-4 text-gray-600 text-sm">
                      Click cards to flip and find matching pairs!
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Project 2: TCS Clone */}
            <section id="project-tcs" className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🏢</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Project: TCS Website Clone</h2>
                  <p className="text-sm text-gray-500">Professional corporate website layout</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-blue-700">Complete TCS Homepage Clone</h3>
                
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
{`<!-- HTML -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TCS - Tata Consultancy Services</title>
</head>
<body>
    <header class="header">
        <nav class="navbar">
            <div class="nav-container">
                <div class="nav-logo">
                    <div class="logo">TCS</div>
                </div>
                <ul class="nav-menu">
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Industries</a></li>
                    <li><a href="#">Insights</a></li>
                    <li><a href="#">Careers</a></li>
                </ul>
                <button class="contact-btn">Contact Us</button>
            </div>
        </nav>
    </header>

    <section class="hero">
        <div class="hero-content">
            <div class="hero-text">
                <h1>Building on Belief</h1>
                <p>For over five decades, TCS has been a thought leader and trusted technology partner.</p>
                <div class="hero-buttons">
                    <button class="btn-primary">Explore Services</button>
                    <button class="btn-secondary">Watch Video</button>
                </div>
            </div>
            <div class="hero-image">
                <div class="hero-placeholder">Hero Image</div>
            </div>
        </div>
    </section>

    <section class="services">
        <div class="container">
            <h2>Our Services</h2>
            <div class="services-grid">
                <div class="service-card">
                    <div class="service-icon">💻</div>
                    <h3>Consulting</h3>
                    <p>Strategic technology consulting</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">☁️</div>
                    <h3>Cloud Services</h3>
                    <p>Comprehensive cloud solutions</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">🤖</div>
                    <h3>AI & Analytics</h3>
                    <p>Intelligent automation</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">🔒</div>
                    <h3>Cybersecurity</h3>
                    <p>Security solutions</p>
                </div>
            </div>
        </div>
    </section>

    <section class="stats">
        <div class="container">
            <div class="stats-grid">
                <div class="stat-item">
                    <h3>50+</h3>
                    <p>Years of Excellence</p>
                </div>
                <div class="stat-item">
                    <h3>600K+</h3>
                    <p>Employees Worldwide</p>
                </div>
                <div class="stat-item">
                    <h3>46</h3>
                    <p>Countries</p>
                </div>
                <div class="stat-item">
                    <h3>$25B+</h3>
                    <p>Annual Revenue</p>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h4>Services</h4>
                    <ul>
                        <li><a href="#">Consulting</a></li>
                        <li><a href="#">Digital</a></li>
                        <li><a href="#">Operations</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Industries</h4>
                    <ul>
                        <li><a href="#">Banking</a></li>
                        <li><a href="#">Healthcare</a></li>
                        <li><a href="#">Retail</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">News</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 Tata Consultancy Services Limited</p>
            </div>
        </div>
    </footer>
</body>
</html>

/* CSS */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header */
.header {
    background: #fff;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.8rem;
    font-weight: bold;
    color: #0066cc;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-menu a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color 0.3s;
}

.nav-menu a:hover {
    color: #0066cc;
}

.contact-btn {
    background: #0066cc;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 600;
    transition: background 0.3s;
}

.contact-btn:hover {
    background: #0052a3;
}

/* Hero */
.hero {
    margin-top: 80px;
    padding: 4rem 0;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.hero-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
}

.hero-text h1 {
    font-size: 3.5rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 1.5rem;
}

.hero-text p {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 2rem;
}

.hero-buttons {
    display: flex;
    gap: 1rem;
}

.btn-primary {
    background: #0066cc;
    color: white;
    border: none;
    padding: 1rem 2rem;
    border-radius: 5px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
}

.btn-primary:hover {
    background: #0052a3;
    transform: translateY(-2px);
}

.btn-secondary {
    background: transparent;
    color: #0066cc;
    border: 2px solid #0066cc;
    padding: 1rem 2rem;
    border-radius: 5px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
}

.btn-secondary:hover {
    background: #0066cc;
    color: white;
}

.hero-placeholder {
    background: #ddd;
    height: 400px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    color: #666;
}

/* Services */
.services {
    padding: 5rem 0;
    background: #fff;
}

.services h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: #333;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.service-card {
    background: #f8f9fa;
    padding: 2rem;
    border-radius: 10px;
    text-align: center;
    transition: transform 0.3s, box-shadow 0.3s;
}

.service-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.service-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.service-card h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #333;
}

/* Stats */
.stats {
    padding: 4rem 0;
    background: #0066cc;
    color: white;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    text-align: center;
}

.stat-item h3 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
}

/* Footer */
.footer {
    background: #333;
    color: white;
    padding: 3rem 0 1rem;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
}

.footer-section h4 {
    color: #0066cc;
    margin-bottom: 1rem;
}

.footer-section ul {
    list-style: none;
}

.footer-section ul li {
    margin-bottom: 0.5rem;
}

.footer-section ul li a {
    color: #ccc;
    text-decoration: none;
    transition: color 0.3s;
}

.footer-section ul li a:hover {
    color: white;
}

.footer-bottom {
    border-top: 1px solid #555;
    padding-top: 1rem;
    text-align: center;
    color: #ccc;
}

@media (max-width: 768px) {
    .nav-menu {
        display: none;
    }
    
    .hero-content {
        grid-template-columns: 1fr;
        text-align: center;
    }
    
    .hero-text h1 {
        font-size: 2.5rem;
    }
}`}
                  </pre>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-700">Live Preview:</h4>
                  <div className="bg-white border rounded-lg overflow-hidden">
                    <div className="bg-white shadow-sm p-4 flex justify-between items-center">
                      <div className="font-bold text-blue-600 text-xl">TCS</div>
                      <div className="hidden md:flex space-x-6 text-sm">
                        <a href="#" className="hover:text-blue-600">Services</a>
                        <a href="#" className="hover:text-blue-600">Industries</a>
                        <a href="#" className="hover:text-blue-600">Careers</a>
                      </div>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm">Contact Us</button>
                    </div>
                    
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-8">
                      <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                          <h1 className="text-3xl font-bold mb-4">Building on Belief</h1>
                          <p className="text-gray-600 mb-6">For over five decades, TCS has been a thought leader and trusted technology partner.</p>
                          <div className="flex gap-4">
                            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">Explore Services</button>
                            <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-600 hover:text-white transition-colors">Watch Video</button>
                          </div>
                        </div>
                        <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center text-gray-500">
                          Hero Image
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <h2 className="text-2xl font-bold text-center mb-8">Our Services</h2>
                      <div className="grid md:grid-cols-4 gap-6">
                        {[
                          { icon: '💻', title: 'Consulting', desc: 'Strategic technology consulting' },
                          { icon: '☁️', title: 'Cloud Services', desc: 'Comprehensive cloud solutions' },
                          { icon: '🤖', title: 'AI & Analytics', desc: 'Intelligent automation' },
                          { icon: '🔒', title: 'Cybersecurity', desc: 'Security solutions' }
                        ].map((service, i) => (
                          <div key={i} className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg hover:-translate-y-1 transition-all">
                            <div className="text-3xl mb-4">{service.icon}</div>
                            <h3 className="font-bold mb-2">{service.title}</h3>
                            <p className="text-sm text-gray-600">{service.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-blue-600 text-white p-8">
                      <div className="grid grid-cols-4 gap-4 text-center">
                        <div><div className="text-2xl font-bold">50+</div><div className="text-sm opacity-90">Years</div></div>
                        <div><div className="text-2xl font-bold">600K+</div><div className="text-sm opacity-90">Employees</div></div>
                        <div><div className="text-2xl font-bold">46</div><div className="text-sm opacity-90">Countries</div></div>
                        <div><div className="text-2xl font-bold">$25B+</div><div className="text-sm opacity-90">Revenue</div></div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-800 text-white p-6">
                      <div className="grid md:grid-cols-3 gap-6 mb-4">
                        <div><h4 className="text-blue-400 font-bold mb-2">Services</h4><ul className="text-sm space-y-1 text-gray-300"><li>Consulting</li><li>Digital</li></ul></div>
                        <div><h4 className="text-blue-400 font-bold mb-2">Industries</h4><ul className="text-sm space-y-1 text-gray-300"><li>Banking</li><li>Healthcare</li></ul></div>
                        <div><h4 className="text-blue-400 font-bold mb-2">Company</h4><ul className="text-sm space-y-1 text-gray-300"><li>About Us</li><li>Careers</li></ul></div>
                      </div>
                      <div className="border-t border-gray-600 pt-4 text-center text-sm text-gray-400">
                        © 2024 Tata Consultancy Services Limited
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Course Completion */}
            <div className="text-center py-8">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-8 rounded-lg mb-8">
                <h2 className="text-3xl font-bold mb-4">🎉 HTML & CSS Mastery Complete!</h2>
                <p className="text-xl mb-6">You've mastered HTML structure and CSS styling with 25 comprehensive topics, practical examples, and live outputs.</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-sm">
                  <div className="bg-white bg-opacity-20 p-3 rounded">
                    <div className="font-bold text-2xl">9</div>
                    <div>HTML Topics</div>
                  </div>
                  <div className="bg-white bg-opacity-20 p-3 rounded">
                    <div className="font-bold text-2xl">16</div>
                    <div>CSS Topics</div>
                  </div>
                  <div className="bg-white bg-opacity-20 p-3 rounded">
                    <div className="font-bold text-2xl">2</div>
                    <div>Projects</div>
                  </div>
                  <div className="bg-white bg-opacity-20 p-3 rounded">
                    <div className="font-bold text-2xl">75+</div>
                    <div>Code Examples</div>
                  </div>
                  <div className="bg-white bg-opacity-20 p-3 rounded">
                    <div className="font-bold text-2xl">100%</div>
                    <div>Practical</div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 flex-wrap px-4">
                  <Link to="/courses" className="bg-white text-orange-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors text-center text-sm sm:text-base">
                    ← Back to Courses
                  </Link>
                  <button 
                    onClick={() => {
                      const courseContent = `HTML & CSS Mastery - Complete Course\n\n` +
                        `This course includes:\n` +
                        `• 25 comprehensive topics (9 HTML + 16 CSS)\n` +
                        `• 100+ practical code examples\n` +
                        `• 2 complete projects (Memory Game + TCS Clone)\n` +
                        `• Live interactive outputs\n` +
                        `• Production-ready code\n\n` +
                        `Visit the course page for full content and examples.\n\n` +
                        `Course URL: ${window.location.href}`;
                      
                      const blob = new Blob([courseContent], { type: 'text/plain' });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement('a');
                      a.href = url;
                      a.download = 'HTML-CSS-Mastery-Course.txt';
                      document.body.appendChild(a);
                      a.click();
                      document.body.removeChild(a);
                      URL.revokeObjectURL(url);
                    }}
                    className="bg-green-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-green-400 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                    <span className="hidden sm:inline">Download Course</span>
                    <span className="sm:hidden">Download</span>
                  </button>
                  <Link to="/javascript-fundamentals" className="bg-orange-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-orange-400 transition-colors text-center text-sm sm:text-base">
                    <span className="hidden sm:inline">JavaScript Next →</span>
                    <span className="sm:hidden">JavaScript →</span>
                  </Link>
                  <Link to="/css-advanced" className="bg-red-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-red-400 transition-colors text-center text-sm sm:text-base">
                    <span className="hidden sm:inline">Advanced CSS</span>
                    <span className="sm:hidden">Advanced</span>
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

export default HTMLCSSMastery;