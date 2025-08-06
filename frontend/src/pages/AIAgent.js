import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Custom CSS for animations and scrollbars
const customStyles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
  .custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: #4f46e5 #f3f4f6;
  }
  .custom-scrollbar::-webkit-scrollbar { width: 6px; }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: #f3f4f6;
    border-radius: 3px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #4f46e5, #7c3aed);
    border-radius: 3px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(to bottom, #4338ca, #6d28d9);
  }
  .markdown-content h2 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
    color: #1f2937;
  }
  .markdown-content h3 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-top: 1.25rem;
    margin-bottom: 0.5rem;
    color: #1f2937;
  }
  .markdown-content p {
    margin-bottom: 1rem;
    line-height: 1.6;
  }
  .markdown-content ul, .markdown-content ol {
    margin-bottom: 1rem;
    padding-left: 1.5rem;
  }
  .markdown-content li {
    margin-bottom: 0.5rem;
  }
  .markdown-content pre {
    background-color: #1e293b;
    color: #f8fafc;
    padding: 1rem;
    border-radius: 0.5rem;
    overflow-x: auto;
    margin-bottom: 1.5rem;
    font-size: 0.875rem;
  }
  .markdown-content code {
    font-family: 'Courier New', monospace;
  }
  .dark .markdown-content h2,
  .dark .markdown-content h3 {
    color: #f3f4f6;
  }
`;

// Unique id generator
let messageIdCounter = 1;
function nextMessageId() {
  return `msg-${messageIdCounter++}-${Date.now()}`;
}

// Limit message history
const MAX_HISTORY = 100;

// Enhanced response generator with better organization
function getAIResponse(question) {
  const q = question.toLowerCase().trim();
  
  // Greetings and basic questions
  if (q.includes('hello') || q.includes('hi') || q.includes('hey') || q.includes('namaste')) {
    return `Namaste! 🙏 I'm BharatCode AI, your intelligent assistant. How can I help you today? Here are some things I can assist with:
    
- **Education**: Science, Math, History, Geography
- **Technology**: Programming, AI, Web Development
- **Career**: Interview prep, resume tips
- **Health**: Wellness, fitness, nutrition
- **General Knowledge**: Facts, explanations, concepts

What would you like to know?`;
  }

  // Programming questions
  if (q.includes('python') || q.includes('javascript') || q.includes('java') || 
      q.includes('code') || q.includes('programming') || q.includes('developer')) {
    return generateProgrammingResponse(q);
  }

  // Science questions
  if (q.includes('science') || q.includes('physics') || q.includes('chemistry') || 
      q.includes('biology') || q.includes('math') || q.includes('mathematics')) {
    return generateScienceResponse(q);
  }

  // Technology questions
  if (q.includes('tech') || q.includes('technology') || q.includes('ai') || 
      q.includes('machine learning') || q.includes('computer')) {
    return generateTechResponse(q);
  }

  // Career questions
  if (q.includes('job') || q.includes('career') || q.includes('interview') || 
      q.includes('resume') || q.includes('cv')) {
    return generateCareerResponse(q);
  }

  // Health questions
  if (q.includes('health') || q.includes('fitness') || q.includes('exercise') || 
      q.includes('diet') || q.includes('nutrition')) {
    return generateHealthResponse(q);
  }

  // General knowledge
  if (q.includes('what is') || q.includes('who is') || q.includes('when was') || 
      q.includes('where is') || q.includes('why does') || q.includes('how to')) {
    return generateGeneralResponse(q);
  }

  // Fallback response
  return `I understand you're asking about "${question}". I can help you with:

🔬 **Science & Education**: Physics, Chemistry, Biology, Mathematics  
💻 **Technology**: Programming, AI, Web Development, Computer Science  
💼 **Career**: Job interviews, resume tips, career growth  
💪 **Health & Fitness**: Nutrition, exercise, wellness  
🌍 **General Knowledge**: History, geography, facts  

Could you please rephrase your question or ask about one of these topics? I'll provide detailed, helpful information!`;
}

// ------------------- Response Generators ---------------------

function generateProgrammingResponse(query) {
  if (query.includes('python')) {
    return `**Python Programming Guide** 🐍

### Core Python Concepts

**1. Variables & Data Types**
Python has dynamic typing - you don't need to declare variable types:
\`\`\`python
# Basic types
name = "Alice"       # String
age = 25             # Integer 
price = 19.99        # Float
is_active = True     # Boolean
\`\`\`

**2. Control Flow**
\`\`\`python
# If-elif-else
if age < 18:
    print("Minor")
elif age < 65:
    print("Adult")
else:
    print("Senior")

# Loops
for i in range(5):    # 0 to 4
    print(i)

while x > 0:
    x -= 1
\`\`\`

**3. Functions**
\`\`\`python
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

# Calling the function
print(greet("Alice"))          # Hello, Alice!
print(greet("Bob", "Hi"))      # Hi, Bob!
\`\`\`

**4. Lists & Dictionaries**
\`\`\`python
# List operations
fruits = ["apple", "banana", "cherry"]
fruits.append("orange")
first_fruit = fruits[0]

# Dictionary
person = {
    "name": "Alice",
    "age": 25,
    "city": "New York"
}
print(person["name"])  # Alice
\`\`\`

**5. File Handling**
\`\`\`python
# Writing to a file
with open("data.txt", "w") as file:
    file.write("Hello, World!")

# Reading from a file
with open("data.txt", "r") as file:
    content = file.read()
\`\`\`

Would you like me to explain any specific Python concept in more detail?`;
  }

  if (query.includes('javascript')) {
    return `**JavaScript Programming Guide** 🟨

### Modern JavaScript (ES6+)

**1. Variables & Scoping**
\`\`\`javascript
// let (block-scoped) and const (constant)
let name = "Alice";
const PI = 3.14;

// var (function-scoped, avoid in modern code)
var oldVariable = "deprecated";
\`\`\`

**2. Functions**
\`\`\`javascript
// Arrow functions (modern)
const add = (a, b) => a + b;

// Traditional function
function multiply(a, b) {
    return a * b;
}

// Immediately Invoked Function Expression (IIFE)
(function() {
    console.log("Runs immediately");
})();
\`\`\`

**3. Arrays & Objects**
\`\`\`javascript
// Array methods
const numbers = [1, 2, 3];
numbers.push(4);               // Add to end
const doubled = numbers.map(x => x * 2);  // [2, 4, 6]

// Object shorthand
const name = "Alice";
const person = { name, age: 25 };  // {name: "Alice", age: 25}
\`\`\`

**4. DOM Manipulation**
\`\`\`javascript
// Select elements
const btn = document.getElementById("myButton");
const items = document.querySelectorAll(".item");

// Event listeners
btn.addEventListener("click", () => {
    console.log("Button clicked!");
});

// Create element
const div = document.createElement("div");
div.textContent = "Hello World";
document.body.appendChild(div);
\`\`\`

**5. Async Programming**
\`\`\`javascript
// Promises
fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

// Async/Await (modern)
async function getData() {
    try {
        const response = await fetch("https://api.example.com/data");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}
\`\`\`

What JavaScript topic would you like to explore further?`;
  }

  return `**Programming Help** 💻

I can help with various programming languages and concepts:

### Languages
- **Python**: Web dev (Django/Flask), Data Science, Automation
- **JavaScript**: Frontend (React), Backend (Node.js)
- **Java**: Android, Enterprise applications
- **C#**: .NET applications, Game development
- **SQL**: Database queries, optimization

### Concepts
- **Algorithms**: Sorting, searching, optimization
- **Data Structures**: Arrays, linked lists, trees, graphs
- **OOP**: Classes, inheritance, polymorphism
- **Web Development**: HTML, CSS, APIs, frameworks
- **Debugging**: Error handling, testing

Which programming language or concept would you like to learn about?`;
}

function generateScienceResponse(query) {
  if (query.includes('physics')) {
    return `**Physics Concepts** ⚛️

### Fundamental Laws

**Newton's Laws of Motion**
1. **Inertia**: Objects stay at rest/motion unless acted upon
2. **F=ma**: Force equals mass times acceleration
3. **Action-Reaction**: For every action, equal opposite reaction

**Energy Conservation**
- Energy cannot be created/destroyed, only converted
- Kinetic Energy = ½mv² (energy of motion)
- Potential Energy = mgh (stored energy)

### Electricity & Magnetism
- **Ohm's Law**: V = IR (Voltage = Current × Resistance)
- **Power**: P = IV = I²R = V²/R
- **Magnetic Force**: F = qvB (on moving charge)

### Modern Physics
- **Quantum Mechanics**: Particle-wave duality
- **Relativity**: Time dilation at high speeds
- **E=mc²**: Mass-energy equivalence

Would you like me to explain any physics concept in more detail?`;
  }

  if (query.includes('chemistry')) {
    return `**Chemistry Basics** 🧪

### Atomic Structure
- **Protons**: Positive charge, determine element
- **Neutrons**: Neutral, determine isotope
- **Electrons**: Negative, chemical reactions

### Chemical Bonds
1. **Ionic**: Metal + Non-metal (electron transfer)
2. **Covalent**: Non-metals sharing electrons
3. **Metallic**: Metal atoms in "electron sea"

### Chemical Reactions
- **Synthesis**: A + B → AB
- **Decomposition**: AB → A + B
- **Combustion**: Fuel + O₂ → CO₂ + H₂O

### Periodic Table
- Groups (columns): Similar properties
- Periods (rows): Increasing atomic number
- Metals/Nonmetals/Metalloids

Which chemistry topic would you like to explore?`;
  }

  if (query.includes('biology')) {
    return `**Biology Fundamentals** 🧬

### Cell Biology
- **Prokaryotes**: Simple cells (bacteria)
- **Eukaryotes**: Complex cells (plants, animals)
- **Organelles**: Nucleus, mitochondria, etc.

### Genetics
- **DNA**: Double helix with genetic code
- **Genes**: Segments of DNA
- **Inheritance**: Dominant/recessive traits

### Human Body Systems
1. **Circulatory**: Heart and blood vessels
2. **Respiratory**: Lungs and gas exchange
3. **Nervous**: Brain, spinal cord, nerves

Would you like more details on any biology topic?`;
  }

  return `**Science Topics** 🔬

I can explain concepts from:

- **Physics**: Mechanics, energy, electricity
- **Chemistry**: Atoms, bonds, reactions
- **Biology**: Cells, genetics, ecosystems
- **Earth Science**: Geology, weather
- **Astronomy**: Planets, stars, galaxies

What scientific concept would you like to learn about?`;
}

function generateTechResponse(query) {
  if (query.includes('ai') || query.includes('artificial intelligence')) {
    return `**Artificial Intelligence** 🤖

### AI Basics
- **Machine Learning**: Algorithms learn from data
- **Deep Learning**: Neural networks with many layers
- **Natural Language Processing**: Understanding text/speech

### AI Applications
1. **Healthcare**: Medical diagnosis, drug discovery
2. **Finance**: Fraud detection, trading
3. **Transportation**: Self-driving cars
4. **Customer Service**: Chatbots, recommendations

### Getting Started with AI
\`\`\`python
# Simple ML example
from sklearn import datasets
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier

# Load data
iris = datasets.load_iris()
X, y = iris.data, iris.target

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y)

# Train model
model = RandomForestClassifier()
model.fit(X_train, y_train)

# Evaluate
accuracy = model.score(X_test, y_test)
print(f"Accuracy: {accuracy:.2f}")
\`\`\`

Would you like more details on any AI topic?`;
  }

  return `**Technology Topics** 💻

I can explain:

- **Programming**: Languages, frameworks
- **Web Development**: Frontend, backend
- **Mobile Apps**: Android, iOS development
- **Databases**: SQL, NoSQL
- **Cloud Computing**: AWS, Azure, GCP
- **Cybersecurity**: Encryption, hacking prevention

What tech topic interests you?`;
}

function generateCareerResponse(query) {
  return `**Career Guidance** 💼

### Resume Tips
1. **Format**: Clean, professional layout
2. **Content**: Focus on achievements (not just duties)
3. **Keywords**: Match job description
4. **Length**: 1 page for <10 years experience

### Interview Preparation
- **Research**: Company, role, interviewers
- **Practice**: Common questions, technical tests
- **STAR Method**: For behavioral questions
  - Situation, Task, Action, Result

### Career Growth
1. **Networking**: Attend events, connect on LinkedIn
2. **Skills**: Continuous learning
3. **Mentorship**: Find experienced guides

Would you like specific advice on resumes, interviews, or career paths?`;
}

function generateHealthResponse(query) {
  return `**Health & Wellness** 💪

### Nutrition Basics
- **Macronutrients**: Carbs, proteins, fats
- **Micronutrients**: Vitamins, minerals
- **Hydration**: 2-3 liters water daily

### Exercise Guidelines
1. **Cardio**: 150 mins moderate/week
2. **Strength**: 2+ days/week
3. **Flexibility**: Regular stretching

### Mental Health
- **Stress Management**: Meditation, breaks
- **Sleep**: 7-9 hours nightly
- **Social Connections**: Important for wellbeing

Would you like more details on any health topic?`;
}

function generateGeneralResponse(query) {
  if (query.includes('capital') && query.includes('india')) {
    return `The capital of India is **New Delhi**. 

Some key facts about New Delhi:
- Located in northern India
- Population: ~30 million (metro area)
- Official languages: Hindi, English
- Major landmarks: India Gate, Red Fort, Lotus Temple

Would you like information about another country's capital?`;
  }

  return `I can provide information about:

- **Countries**: Capitals, populations, cultures
- **History**: Events, timelines, figures
- **Geography**: Landforms, climate, maps
- **Culture**: Traditions, arts, languages

What would you like to know about?`;
}

// Quick questions for the UI
const quickQuestions = [
  'How do I reverse a string in Python?',
  'Explain Newton\'s laws of motion',
  'What makes a good resume?',
  'How much water should I drink daily?',
  'What is the capital of France?',
  'Explain AI in simple terms'
];

// Initial bot message
const initialBotMessage = {
  id: nextMessageId(),
  type: 'bot',
  content: `Namaste! 🙏 I'm BharatCode AI, your intelligent assistant. I can help with:

🔬 **Science & Education**: Physics, Chemistry, Biology, Math  
💻 **Technology**: Programming, AI, Web Development  
💼 **Career**: Resumes, interviews, job search  
💪 **Health**: Nutrition, exercise, wellness  
🌍 **General Knowledge**: Facts, explanations  

Ask me anything in simple or technical terms!`,
  timestamp: new Date(),
};

const AIAgent = () => {
  const [messages, setMessages] = useState([initialBotMessage]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Inject custom styles
  useEffect(() => {
    if (typeof document !== 'undefined' && !document.getElementById('aiagent-custom-styles')) {
      const styleElement = document.createElement('style');
      styleElement.id = 'aiagent-custom-styles';
      styleElement.textContent = customStyles;
      document.head.appendChild(styleElement);
    }
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    // Add user message
    const userMessage = {
      id: nextMessageId(),
      type: 'user',
      content: input.trim(),
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      // Get AI response
      const aiResponseContent = await getAIResponse(userMessage.content);
      const aiResponse = {
        id: nextMessageId(),
        type: 'bot',
        content: aiResponseContent,
        timestamp: new Date(),
      };

      // Update messages (with history limit)
      setMessages(prev => {
        const updated = [...prev, aiResponse];
        return updated.length > MAX_HISTORY ? updated.slice(-MAX_HISTORY) : updated;
      });
    } catch (error) {
      console.error('Error generating response:', error);
      const errorResponse = {
        id: nextMessageId(),
        type: 'bot',
        content: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleQuickQuestion = (question) => {
    setInput(question);
    document.querySelector('textarea')?.focus();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white py-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-white opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <nav className="mb-6 flex items-center space-x-2 text-sm">
            <Link to="/" className="text-indigo-200 hover:text-white transition-colors flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              Home
            </Link>
            <span className="text-indigo-300">→</span>
            <span className="text-white font-medium">AI Assistant</span>
          </nav>
          
          <div className="text-center">
            <div className="inline-flex items-center bg-white/20 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              🇮🇳 Made in India
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-indigo-100 bg-clip-text text-transparent">
                BharatCode AI
              </span>
            </h1>
            <p className="text-lg text-indigo-100 max-w-2xl mx-auto">
              Your intelligent assistant for knowledge, learning, and problem-solving
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto">
          {/* Quick Questions */}
          <div className="bg-white rounded-xl shadow-md border border-indigo-100 p-4 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
              <span className="text-indigo-600 mr-2">💡</span> Quick Questions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {quickQuestions.map((question, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuickQuestion(question)}
                  className="text-left p-3 bg-indigo-50 hover:bg-indigo-100 rounded-lg text-sm text-gray-700 hover:text-indigo-800 transition-all border border-indigo-100 hover:border-indigo-200"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* Chat Container */}
          <div className="bg-white rounded-xl shadow-xl border border-gray-200 h-[60vh] sm:h-[500px] flex flex-col overflow-hidden">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <span className="text-xl">🤖</span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold">BharatCode AI</h3>
                    <p className="text-xs text-indigo-100 flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></span>
                      Online • Ready to help
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}
                >
                  <div className={`flex items-start max-w-[90%] sm:max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : ''}`}>
                    {message.type === 'bot' && (
                      <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white mr-2 flex-shrink-0">
                        🤖
                      </div>
                    )}
                    <div className={`px-4 py-3 rounded-2xl ${message.type === 'user' 
                      ? 'bg-indigo-600 text-white rounded-br-none' 
                      : 'bg-gray-100 text-gray-800 rounded-bl-none'}`}
                    >
                      {message.type === 'bot' ? (
                        <div className="whitespace-pre-wrap text-sm markdown-content">
                          {message.content}
                        </div>
                      ) : (
                        <div className="text-sm">{message.content}</div>
                      )}
                      <div className={`text-xs mt-1 ${message.type === 'user' ? 'text-indigo-200' : 'text-gray-500'}`}>
                        {new Date(message.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                      </div>
                    </div>
                    {message.type === 'user' && (
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white ml-2 flex-shrink-0">
                        👤
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white">
                      🤖
                    </div>
                    <div className="bg-gray-100 px-4 py-3 rounded-2xl rounded-bl-none">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-gray-200 p-4 bg-white">
              <div className="flex items-end space-x-3">
                <div className="flex-1 relative">
                  <textarea
                    value={input}
                    rows={1}
                    maxLength={500}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSend();
                      }
                    }}
                    placeholder="Ask me anything..."
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-sm resize-none"
                    disabled={isTyping}
                  />
                  <div className="absolute right-3 bottom-3 text-gray-400">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                </div>
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-3 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                >
                  {isTyping ? (
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                    </svg>
                  )}
                </button>
              </div>
              <div className="flex items-center justify-between mt-2 px-1">
                <div className="text-xs text-gray-500">
                  {input.length}/500 characters
                </div>
                <div className="text-xs text-gray-500 flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-1"></span>
                  AI Online
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mt-6 bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
              What I Can Help With
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-indigo-50 rounded-lg border border-indigo-100">
                <div className="text-3xl mb-2">🔬</div>
                <h4 className="font-medium text-gray-800">Science & Math</h4>
              </div>
              <div className="text-center p-4 bg-indigo-50 rounded-lg border border-indigo-100">
                <div className="text-3xl mb-2">💻</div>
                <h4 className="font-medium text-gray-800">Technology</h4>
              </div>
              <div className="text-center p-4 bg-indigo-50 rounded-lg border border-indigo-100">
                <div className="text-3xl mb-2">💼</div>
                <h4 className="font-medium text-gray-800">Career</h4>
              </div>
              <div className="text-center p-4 bg-indigo-50 rounded-lg border border-indigo-100">
                <div className="text-3xl mb-2">💪</div>
                <h4 className="font-medium text-gray-800">Health</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAgent;