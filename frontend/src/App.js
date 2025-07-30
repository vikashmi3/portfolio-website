import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import CourseDetail from './pages/CourseDetail';
import CProgramming from './pages/CProgramming';
import CppProgramming from './pages/CppProgramming';
import JavaProgramming from './pages/JavaProgramming';
import AdvancedJava from './pages/AdvancedJava';
import HtmlCss from './pages/HtmlCss';
import JavaScript from './pages/JavaScript';
import ArtificialIntelligence from './pages/ArtificialIntelligence';
import PythonProgramming from './pages/PythonProgramming';
import ReactJS from './pages/ReactJS';
import CSharpProgramming from './pages/CSharpProgramming';
import NodeJS from './pages/NodeJS';
import HTMLCSSMastery from './pages/HTMLCSSMastery';
import JavaScriptFundamentals from './pages/JavaScriptFundamentals';
import MachineLearning from './pages/MachineLearning';
import AndroidDevelopment from './pages/AndroidDevelopment';
import DataScience from './pages/DataScience';
import MySQL from './pages/MySQL';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Courses from './pages/Courses';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-dark text-white' : 'bg-light text-gray-900'
      }`}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/courses/:courseId" element={<CourseDetail />} />
          <Route path="/c-programming" element={<CProgramming />} />
          <Route path="/cpp-programming" element={<CppProgramming />} />
          <Route path="/java-programming" element={<JavaProgramming />} />
          <Route path="/advanced-java" element={<AdvancedJava />} />
          <Route path="/html-css" element={<HtmlCss />} />
          <Route path="/javascript" element={<JavaScript />} />
          <Route path="/artificial-intelligence" element={<ArtificialIntelligence />} />
          <Route path="/python-programming" element={<PythonProgramming />} />
          <Route path="/react-js" element={<ReactJS />} />
          <Route path="/csharp-programming" element={<CSharpProgramming />} />
          <Route path="/nodejs" element={<NodeJS />} />
          <Route path="/html-css-mastery" element={<HTMLCSSMastery />} />
          <Route path="/javascript-fundamentals" element={<JavaScriptFundamentals />} />
          <Route path="/machine-learning" element={<MachineLearning />} />
          <Route path="/android-development" element={<AndroidDevelopment />} />
          <Route path="/data-science" element={<DataScience />} />
          <Route path="/mysql" element={<MySQL />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;