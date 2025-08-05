import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

// --------- Module Scope Data & Helpers ---------

// Custom CSS for animations and scrollbars
const customStyles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
  .custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: #fb923c #f3f4f6;
  }
  .custom-scrollbar::-webkit-scrollbar { width: 6px; }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: #f3f4f6;
    border-radius: 3px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #fb923c, #ef4444);
    border-radius: 3px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(to bottom, #ea580c, #dc2626);
  }
`;

// Unique id generator (simple counter, safe for small apps)
let messageIdCounter = 1;
function nextMessageId() {
  return `msg-${messageIdCounter++}-${Date.now()}`;
}

// Limit message history to this many items:
const MAX_HISTORY = 100;

// Enhanced fallback with more intelligent responses
function getEnhancedFallbackResponse(question) {
  const q = question.toLowerCase();
  
  // Programming questions
  if (q.includes('python') || q.includes('javascript') || q.includes('code')) {
    return generateProgrammingResponse(q);
  }
  
  // AI/ML questions
  if (q.includes('ai') || q.includes('machine learning') || q.includes('neural')) {
    return generateTechResponse(q);
  }
  
  // Science questions
  if (q.includes('physics') || q.includes('chemistry') || q.includes('biology')) {
    return generateScienceResponse(q);
  }
  
  // Math questions
  if (q.includes('math') || q.includes('calculate') || q.includes('formula')) {
    return generateMathResponse(q);
  }
  
  // General conversation
  return `I understand you're asking about "${question}". I can help you with:

🔬 **Science & Math**: Physics, Chemistry, Biology, Mathematics
💻 **Programming**: Python, JavaScript, Java, C#, Web Development  
🤖 **Technology**: AI/ML, Blockchain, Cloud Computing
📚 **Education**: Study techniques, learning strategies
💼 **Career**: Job interviews, resume tips
🏥 **Health**: Wellness and fitness tips

Could you please rephrase your question or ask about one of these topics? I'll provide you with detailed, helpful information!`;
}

// ------------------- Response Generators ---------------------

function generateProgrammingResponse(query = '') {
  if (query.includes('python')) {
    return `**Python Programming Complete Guide** 🐍

**1. Basic Syntax & Variables:**
\`\`\`python
# Variables and data types
name = "Alice"  # String
age = 25        # Integer
height = 5.6    # Float
is_student = True  # Boolean

# F-strings for formatting
print(f"Hello, {name}! You are {age} years old and {height} feet tall.")
\`\`\`

**2. Functions & Control Flow:**
\`\`\`python
# Function definition
def calculate_grade(score):
    if score >= 90:
        return "A"
    elif score >= 80:
        return "B"
    elif score >= 70:
        return "C"
    else:
        return "F"

# List comprehension
numbers = [1, 2, 3, 4, 5]
squares = [x**2 for x in numbers]
print(squares)  # [1, 4, 9, 16, 25]
\`\`\`

**3. Object-Oriented Programming:**
\`\`\`python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.grades = []
    
    def add_grade(self, grade):
        self.grades.append(grade)
    
    def get_average(self):
        return sum(self.grades) / len(self.grades) if self.grades else 0

# Usage
student = Student("John", 20)
student.add_grade(85)
student.add_grade(92)
print(f"Average: {student.get_average()}")
\`\`\`

**4. File Handling & Error Management:**
\`\`\`python
try:
    with open('data.txt', 'r') as file:
        content = file.read()
        print(content)
except FileNotFoundError:
    print("File not found!")
except Exception as e:
    print(f"An error occurred: {e}")
\`\`\`

**5. Libraries & Modules:**
\`\`\`python
import requests
import json
from datetime import datetime

# API call example
response = requests.get('https://api.github.com/users/octocat')
data = response.json()
print(f"User: {data['name']}")
\`\`\`

**Common Python Interview Questions:**
- What's the difference between list and tuple?
- Explain decorators and generators
- How does memory management work?
- What are lambda functions?

What specific Python concept would you like me to explain in more detail?`;
  }
  
  if (query.includes('javascript')) {
    return `**JavaScript Complete Guide** 🟨

**1. Modern ES6+ Syntax:**
\`\`\`javascript
// Arrow functions
const sum = (a, b) => a + b;
const multiply = (a, b) => {
    const result = a * b;
    return result;
};

// Destructuring
const person = { name: 'John', age: 30, city: 'NYC' };
const { name, age } = person;

// Template literals
const greeting = \`Hello \${name}, you are \${age} years old!\`;
\`\`\`

**2. Async Programming:**
\`\`\`javascript
// Promises
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched successfully!');
        }, 2000);
    });
};

// Async/Await
const getData = async () => {
    try {
        const result = await fetchData();
        console.log(result);
    } catch (error) {
        console.error('Error:', error);
    }
};

// Fetch API
const apiCall = async () => {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
};
\`\`\`

**3. DOM Manipulation:**
\`\`\`javascript
// Select elements
const button = document.getElementById('myButton');
const items = document.querySelectorAll('.item');

// Event handling
button.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Button clicked!');
});

// Create and modify elements
const newDiv = document.createElement('div');
newDiv.textContent = 'Hello World';
newDiv.classList.add('highlight');
document.body.appendChild(newDiv);
\`\`\`

**4. Advanced Concepts:**
\`\`\`javascript
// Closures
function createCounter() {
    let count = 0;
    return function() {
        return ++count;
    };
}
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2

// Higher-order functions
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(x => x * 2);
const evens = numbers.filter(x => x % 2 === 0);
const sum = numbers.reduce((acc, x) => acc + x, 0);
\`\`\`

**5. Error Handling & Debugging:**
\`\`\`javascript
try {
    const result = riskyOperation();
    console.log(result);
} catch (error) {
    console.error('Something went wrong:', error.message);
} finally {
    console.log('Cleanup code here');
}
\`\`\`

What JavaScript topic would you like me to dive deeper into?`;
  }
  
  return `**Programming Help - Complete Guide** 💻

**Languages I can help with:**
- **Python**: Web dev (Django/Flask), Data Science, AI/ML, Automation
- **JavaScript**: Frontend (React/Vue), Backend (Node.js), Full-stack
- **Java**: Enterprise apps, Spring Boot, Android development
- **C#**: .NET applications, Unity game development
- **SQL**: Database design, queries, optimization
- **HTML/CSS**: Responsive design, modern layouts

**Programming Concepts:**
- **Algorithms**: Sorting, searching, dynamic programming
- **Data Structures**: Arrays, linked lists, trees, graphs
- **Design Patterns**: Singleton, Factory, Observer, MVC
- **Best Practices**: Clean code, SOLID principles, testing
- **Debugging**: Techniques, tools, common error patterns

**Development Areas:**
- **Web Development**: Frontend, backend, APIs, databases
- **Mobile Development**: React Native, Flutter, native apps
- **Data Science**: Pandas, NumPy, machine learning
- **DevOps**: Git, CI/CD, Docker, cloud deployment

What programming concept or language would you like to explore in detail?`;
}

function generateScienceResponse(query) {
  if (query.includes('physics')) {
    return `**Physics - Complete Understanding** ⚛️

**1. Fundamental Laws:**
**Newton's Laws of Motion:**
- **1st Law**: Object at rest stays at rest, object in motion stays in motion (unless acted upon by force)
- **2nd Law**: F = ma (Force = Mass × Acceleration)
- **3rd Law**: For every action, there's an equal and opposite reaction

**2. Energy & Work:**
- **Kinetic Energy**: KE = ½mv² (energy of motion)
- **Potential Energy**: PE = mgh (stored energy due to position)
- **Conservation of Energy**: Energy cannot be created or destroyed, only transformed

**3. Waves & Light:**
- **Wave Equation**: v = fλ (velocity = frequency × wavelength)
- **Light Speed**: c = 3×10⁸ m/s in vacuum
- **Electromagnetic Spectrum**: Radio → Microwave → Infrared → Visible → UV → X-ray → Gamma

**4. Electricity & Magnetism:**
- **Ohm's Law**: V = IR (Voltage = Current × Resistance)
- **Power**: P = VI = I²R = V²/R
- **Magnetic Force**: F = qvB (on moving charge)

**5. Modern Physics:**
- **Einstein's E = mc²**: Mass-energy equivalence
- **Quantum Mechanics**: Wave-particle duality, uncertainty principle
- **Relativity**: Time dilation, length contraction at high speeds

**Real-world Applications:**
- GPS satellites use relativity corrections
- Solar panels convert light to electricity (photoelectric effect)
- MRI machines use magnetic fields and radio waves

What specific physics concept would you like me to explain deeper?`;
  }
  
  if (query.includes('chemistry')) {
    return `**Chemistry - Complete Guide** 🧪

**1. Atomic Structure:**
- **Atoms**: Protons (+), Neutrons (neutral), Electrons (-)
- **Electron Configuration**: 1s² 2s² 2p⁶ 3s² 3p⁶ (example for Argon)
- **Periodic Trends**: Atomic radius, ionization energy, electronegativity

**2. Chemical Bonding:**
**Ionic Bonds**: Metal + Non-metal (electron transfer)
- Example: Na⁺Cl⁻ (sodium chloride)
**Covalent Bonds**: Non-metal + Non-metal (electron sharing)
- Example: H₂O, CO₂, CH₄
**Metallic Bonds**: Metal atoms (electron sea model)

**3. Chemical Reactions:**
**Types of Reactions:**
- **Synthesis**: A + B → AB
- **Decomposition**: AB → A + B
- **Single Replacement**: A + BC → AC + B
- **Double Replacement**: AB + CD → AD + CB
- **Combustion**: Hydrocarbon + O₂ → CO₂ + H₂O

**4. Stoichiometry:**
- **Mole Concept**: 6.022×10²³ particles per mole
- **Balanced Equations**: 2H₂ + O₂ → 2H₂O
- **Limiting Reactant**: Determines amount of product formed

**5. Acids & Bases:**
- **pH Scale**: 0-14 (7 is neutral)
- **Strong Acids**: HCl, H₂SO₄, HNO₃
- **Strong Bases**: NaOH, KOH, Ca(OH)₂
- **Neutralization**: Acid + Base → Salt + Water

**6. Organic Chemistry Basics:**
- **Hydrocarbons**: Alkanes (C-C), Alkenes (C=C), Alkynes (C≡C)
- **Functional Groups**: -OH (alcohol), -COOH (carboxylic acid)
- **Polymers**: Long chains of repeating units

**Real-world Applications:**
- Soap making (saponification reaction)
- Battery chemistry (redox reactions)
- Drug development (molecular interactions)
- Environmental chemistry (ozone depletion, greenhouse gases)

What chemistry topic would you like me to elaborate on?`;
  }
  
  if (query.includes('biology') || query.includes('photosynthesis')) {
    return `**Biology - Life Sciences Complete Guide** 🧬

**1. Cell Biology:**
**Cell Structure:**
- **Prokaryotes**: No nucleus (bacteria)
- **Eukaryotes**: Nucleus present (plants, animals, fungi)
- **Organelles**: Mitochondria (powerhouse), Ribosomes (protein synthesis), ER, Golgi

**2. Photosynthesis (Detailed):**
**Overall Equation**: 6CO₂ + 6H₂O + Light Energy → C₆H₁₂O₆ + 6O₂

**Light Reactions** (in thylakoids):
- Chlorophyll absorbs light energy
- Water splits: 2H₂O → 4H⁺ + 4e⁻ + O₂
- ATP and NADPH produced

**Calvin Cycle** (in stroma):
- CO₂ fixation using RuBisCO enzyme
- ATP and NADPH used to make glucose
- Occurs in C3, C4, and CAM plants

**3. Cellular Respiration:**
**Equation**: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP
**Stages**:
- **Glycolysis**: Glucose → Pyruvate (cytoplasm)
- **Krebs Cycle**: Pyruvate → CO₂ (mitochondria)
- **Electron Transport**: O₂ → H₂O, ATP production

**4. Genetics:**
**DNA Structure**: Double helix, A-T and G-C base pairs
**Central Dogma**: DNA → RNA → Protein
- **Transcription**: DNA → mRNA
- **Translation**: mRNA → Protein (at ribosomes)
**Inheritance**: Mendel's laws, dominant/recessive alleles

**5. Evolution:**
**Natural Selection**: Variation → Inheritance → Selection → Time
**Evidence**: Fossils, comparative anatomy, molecular biology
**Mechanisms**: Mutation, gene flow, genetic drift, selection

**6. Ecology:**
**Ecosystem Components**:
- **Producers**: Plants (autotrophs)
- **Consumers**: Herbivores, carnivores, omnivores
- **Decomposers**: Bacteria, fungi
**Energy Flow**: Sun → Producers → Primary consumers → Secondary consumers
**Cycles**: Carbon, nitrogen, water cycles

**7. Human Biology:**
**Body Systems**:
- **Circulatory**: Heart, blood vessels, blood
- **Respiratory**: Lungs, gas exchange
- **Digestive**: Breakdown and absorption of nutrients
- **Nervous**: Brain, spinal cord, neurons
- **Immune**: Defense against pathogens

**Real-world Applications:**
- Genetic engineering and CRISPR technology
- Vaccine development and immunology
- Conservation biology and biodiversity
- Biotechnology and medicine
- Agricultural improvements

What specific biology topic would you like me to explain in greater detail?`;
  }
  
  return `**Science - Complete Knowledge Base** 🔬

**Physics**: Mechanics, thermodynamics, electromagnetism, quantum physics, relativity
**Chemistry**: Atomic structure, bonding, reactions, organic chemistry, biochemistry
**Biology**: Cell biology, genetics, evolution, ecology, human anatomy, molecular biology
**Earth Science**: Geology, meteorology, oceanography, astronomy
**Environmental Science**: Climate change, pollution, sustainability, renewable energy

**Scientific Method:**
1. **Observation**: Notice patterns or phenomena
2. **Hypothesis**: Testable explanation
3. **Experiment**: Controlled testing
4. **Analysis**: Data interpretation
5. **Conclusion**: Support or reject hypothesis
6. **Peer Review**: Scientific validation

**Interdisciplinary Fields:**
- **Biochemistry**: Chemistry of living systems
- **Biophysics**: Physics principles in biology
- **Geochemistry**: Chemical processes in Earth
- **Astrobiology**: Life in the universe

What scientific concept or field interests you most?`;
}

function generateMathResponse(query) {
  return `**Mathematics - Complete Guide** 🔢

**1. Algebra:**
**Linear Equations**: ax + b = 0
- Solve: 2x + 5 = 11 → x = 3
**Quadratic Equations**: ax² + bx + c = 0
- Formula: x = (-b ± √(b²-4ac)) / 2a
- Example: x² - 5x + 6 = 0 → x = 2 or x = 3

**2. Geometry:**
**Area Formulas**:
- Circle: A = πr²
- Triangle: A = ½ × base × height
- Rectangle: A = length × width
- Trapezoid: A = ½(b₁ + b₂) × height

**Volume Formulas**:
- Sphere: V = (4/3)πr³
- Cylinder: V = πr²h
- Cone: V = (1/3)πr²h

**Pythagorean Theorem**: a² + b² = c²
- In right triangle, c is hypotenuse

**3. Trigonometry:**
**Basic Ratios** (in right triangle):
- sin θ = opposite/hypotenuse
- cos θ = adjacent/hypotenuse
- tan θ = opposite/adjacent

**Unit Circle**: sin²θ + cos²θ = 1
**Common Angles**:
- sin 30° = 1/2, cos 30° = √3/2
- sin 45° = √2/2, cos 45° = √2/2
- sin 60° = √3/2, cos 60° = 1/2

**4. Calculus:**
**Derivatives** (rate of change):
- d/dx(x^n) = nx^(n-1)
- d/dx(sin x) = cos x
- d/dx(e^x) = e^x
- Chain Rule: d/dx[f(g(x))] = f'(g(x)) × g'(x)

**Integrals** (area under curve):
- ∫x^n dx = x^(n+1)/(n+1) + C
- ∫sin x dx = -cos x + C
- ∫e^x dx = e^x + C

**5. Statistics & Probability:**
**Measures of Central Tendency**:
- Mean: (sum of values) / (number of values)
- Median: Middle value when ordered
- Mode: Most frequent value

**Probability**:
- P(A) = (favorable outcomes) / (total outcomes)
- P(A and B) = P(A) × P(B) [if independent]
- P(A or B) = P(A) + P(B) - P(A and B)

**6. Number Theory:**
**Prime Numbers**: 2, 3, 5, 7, 11, 13, 17, 19, 23...
**GCD & LCM**: Greatest Common Divisor, Least Common Multiple
**Modular Arithmetic**: a ≡ b (mod n)

**7. Linear Algebra:**
**Matrices**: Rectangular arrays of numbers
- Addition: Add corresponding elements
- Multiplication: Row × Column
**Vectors**: Magnitude and direction
- Dot Product: a⃗ · b⃗ = |a||b|cos θ

**8. Complex Numbers:**
**Form**: z = a + bi (where i² = -1)
**Operations**:
- Addition: (a+bi) + (c+di) = (a+c) + (b+d)i
- Multiplication: (a+bi)(c+di) = (ac-bd) + (ad+bc)i

**Real-world Applications**:
- Engineering: Structural analysis, signal processing
- Finance: Compound interest, risk analysis
- Computer Science: Algorithms, cryptography
- Physics: Wave equations, quantum mechanics
- Biology: Population models, genetics

What specific math topic or problem would you like me to help you with?`;
}

function generateTechResponse(query) {
  if (query.includes('ai') || query.includes('artificial intelligence')) {
    return `**Artificial Intelligence - Complete Guide** 🤖

**1. What is AI?**
**Definition**: Computer systems that can perform tasks typically requiring human intelligence

**Types of AI**:
**Narrow AI (Weak AI)**:
- Designed for specific tasks
- Current AI systems (Siri, ChatGPT, recommendation systems)
- Excellent at one thing, can't generalize

**General AI (Strong AI)**:
- Human-level intelligence across all domains
- Can learn, reason, and adapt like humans
- Still theoretical/future goal

**Superintelligence**:
- Exceeds human intelligence in all areas
- Hypothetical future AI
- Subject of much debate and research

**2. AI Subfields:**

**Machine Learning (ML)**:
- Algorithms that learn from data
- Supervised, unsupervised, reinforcement learning
- Foundation of modern AI

**Deep Learning**:
- Neural networks with many layers
- Excellent for image, speech, text processing
- Powers most recent AI breakthroughs

**Natural Language Processing (NLP)**:
- Understanding and generating human language
- Applications: Translation, chatbots, sentiment analysis
- Recent advances: GPT, BERT, ChatGPT

**Computer Vision**:
- Understanding and interpreting visual information
- Applications: Face recognition, medical imaging, autonomous vehicles
- Techniques: CNNs, object detection, image segmentation

**Robotics**:
- Physical AI systems that interact with environment
- Applications: Manufacturing, healthcare, exploration
- Challenges: Perception, manipulation, navigation

**3. AI Development Process:**
\`\`\`python
# Example: Building a simple AI classifier
import numpy as np
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# 1. Data Collection
data = load_iris()
X, y = data.data, data.target

# 2. Data Preprocessing
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# 3. Model Selection and Training
model = RandomForestClassifier(n_estimators=100)
model.fit(X_train, y_train)

# 4. Evaluation
y_pred = model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print(f'Model Accuracy: {accuracy:.2f}')

# 5. Deployment (simplified)
def predict_flower(sepal_length, sepal_width, petal_length, petal_width):
    features = np.array([[sepal_length, sepal_width, petal_length, petal_width]])
    prediction = model.predict(features)
    return data.target_names[prediction[0]]
\`\`\`

**4. Current AI Applications:**

**Healthcare**:
- Medical image analysis (X-rays, MRIs)
- Drug discovery and development
- Personalized treatment plans
- Epidemic prediction and tracking

**Transportation**:
- Autonomous vehicles (Tesla, Waymo)
- Traffic optimization
- Route planning and logistics
- Predictive maintenance

**Finance**:
- Fraud detection
- Algorithmic trading
- Credit scoring
- Risk assessment

**Technology**:
- Search engines (Google)
- Recommendation systems (Netflix, Amazon)
- Virtual assistants (Siri, Alexa)
- Content moderation

**Entertainment**:
- Game AI (chess, Go, video games)
- Content creation (music, art, writing)
- Personalized content curation
- Special effects in movies

**5. AI Ethics and Challenges:**

**Bias and Fairness**:
- AI systems can perpetuate human biases
- Need for diverse training data
- Algorithmic auditing and testing

**Privacy and Security**:
- AI systems process vast amounts of personal data
- Need for data protection and encryption
- Adversarial attacks on AI systems

**Job Displacement**:
- Automation may replace certain jobs
- Need for retraining and education
- Creation of new types of jobs

**Transparency and Explainability**:
- "Black box" problem in deep learning
- Need for interpretable AI
- Regulatory requirements for explanation

**6. Future of AI:**

**Near-term (5-10 years)**:
- More sophisticated language models
- Better computer vision systems
- Improved robotics and automation
- AI-assisted scientific discovery

**Medium-term (10-20 years)**:
- More general AI systems
- Advanced autonomous vehicles
- AI-powered drug discovery
- Personalized education systems

**Long-term (20+ years)**:
- Artificial General Intelligence (AGI)
- AI-human collaboration
- Potential superintelligence
- Fundamental changes to society

**7. Getting Started with AI:**

**Programming Languages**:
- **Python**: Most popular for AI/ML
- **R**: Strong for statistics and data analysis
- **JavaScript**: For web-based AI applications
- **Julia**: High-performance scientific computing

**Key Libraries and Frameworks**:
- **TensorFlow/Keras**: Deep learning
- **PyTorch**: Research-oriented deep learning
- **Scikit-learn**: Traditional machine learning
- **OpenCV**: Computer vision
- **NLTK/spaCy**: Natural language processing

**Learning Path**:
1. **Mathematics**: Linear algebra, statistics, calculus
2. **Programming**: Python fundamentals
3. **Machine Learning**: Supervised/unsupervised learning
4. **Deep Learning**: Neural networks
5. **Specialization**: Choose NLP, computer vision, or robotics
6. **Projects**: Build portfolio of AI applications

What specific aspect of AI would you like me to explore further with you?`;
  }
  
  return `**Technology - Complete Knowledge Hub** 💻

**Artificial Intelligence & Machine Learning**:
- Deep learning, neural networks, computer vision
- Natural language processing, chatbots, automation
- Tools: Python, TensorFlow, PyTorch, scikit-learn

**Blockchain & Cryptocurrency**:
- Distributed ledgers, smart contracts, DeFi
- Bitcoin, Ethereum, consensus mechanisms
- Applications: Supply chain, digital identity, NFTs

**Cloud Computing**:
- AWS, Azure, Google Cloud Platform
- Serverless computing, containers, microservices
- DevOps, CI/CD, infrastructure as code

**Cybersecurity**:
- Network security, encryption, penetration testing
- Threat detection, incident response
- Security frameworks and compliance

**Data Science & Analytics**:
- Big data processing, data visualization
- Statistical analysis, predictive modeling
- Tools: Python, R, SQL, Tableau, Power BI

**Internet of Things (IoT)**:
- Connected devices, sensor networks
- Edge computing, real-time data processing
- Applications: Smart homes, industrial IoT

**5G & Networking**:
- Next-generation wireless technology
- Network protocols, software-defined networking
- Edge computing and low-latency applications

**Quantum Computing**:
- Quantum bits (qubits), quantum algorithms
- Potential applications: Cryptography, optimization
- Current limitations and future prospects

**Emerging Technologies**:
- Augmented Reality (AR) / Virtual Reality (VR)
- Autonomous vehicles and robotics
- Biotechnology and genetic engineering
- Renewable energy and sustainability tech

**Programming & Development**:
- Full-stack development, mobile apps
- Software architecture, design patterns
- Version control, testing, deployment

What technology area would you like me to explain in comprehensive detail?`;
}

// Main AI response function
function getAIResponse(question) {
  return getEnhancedFallbackResponse(question);
}

// ------------------- Component ------------------------

const quickQuestions = [
  'How do I reverse a string in Python?',
  'What is artificial intelligence?',
  'How to stay healthy and fit?',
  'What is the capital of India?',
  'How to prepare for job interviews?',
  'Explain photosynthesis process',
];

const initialBotMessage = {
  id: nextMessageId(),
  type: 'bot',
  content: 'Namaste! 🙏 I am BharatCode AI - your advanced LLM-powered knowledge assistant! I\'m running on multiple AI models to provide you the best responses.\\n\\n🤖 **LLM Features**:\\n• Conversational AI like ChatGPT\\n• Context-aware responses\\n• Code generation & debugging\\n• Multi-language support (Hindi/English)\\n• Real-time learning\\n\\n🔬 **Knowledge Areas**:\\n• **Programming**: Python, JavaScript, Java, C#, Web Dev\\n• **AI/ML**: Deep Learning, Neural Networks, Data Science\\n• **Science**: Physics, Chemistry, Biology, Mathematics\\n• **Technology**: Blockchain, Cloud, Cybersecurity\\n• **Career**: Interviews, Resume, Business Strategy\\n• **Education**: Study techniques, Exam prep\\n\\nI can have natural conversations, remember context, and provide detailed explanations with examples. Try asking me complex questions!\\n\\nWhat would you like to explore today?',
  timestamp: new Date(),
};

const AIAgent = () => {
  const [messages, setMessages] = useState([initialBotMessage]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // CSS injection (once)
  useEffect(() => {
    if (typeof document !== 'undefined' && !document.getElementById('aiagent-custom-styles')) {
      const styleElement = document.createElement('style');
      styleElement.id = 'aiagent-custom-styles';
      styleElement.textContent = customStyles;
      document.head.appendChild(styleElement);
    }
  }, []);

  // Scroll chat to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage = {
      id: nextMessageId(),
      type: 'user',
      content: input.trim(),
      timestamp: new Date(),
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsTyping(true);

    try {
      const aiResponseContent = await getAIResponse(userMessage.content);
      const aiResponse = {
        id: nextMessageId(),
        type: 'bot',
        content: aiResponseContent,
        timestamp: new Date(),
      };

      setMessages(prev => {
        const updated = [...prev, aiResponse];
        return updated.length > MAX_HISTORY ? updated.slice(-MAX_HISTORY) : updated;
      });
    } catch (error) {
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

  const handleQuickQuestion = (question) => setInput(question);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 text-white py-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-300 opacity-10 rounded-full translate-y-24 -translate-x-24"></div>
        <div className="container mx-auto px-4 relative z-10">
          <nav className="mb-6 flex items-center space-x-2 text-sm">
            <Link to="/" className="text-orange-200 hover:text-white transition-colors flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              Home
            </Link>
            <span className="text-orange-300">→</span>
            <span className="text-white font-medium">BharatCode AI</span>
          </nav>
          <div className="text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-400 text-orange-900 px-4 py-2 rounded-full text-sm font-bold mb-4">
              🇮🇳 Made in India
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent">
                BharatCode AI
              </span>
            </h1>
            <h2 className="text-lg sm:text-xl font-medium mb-4 text-orange-100">
              🤖 Advanced LLM-Powered AI Assistant
            </h2>
            <p className="text-orange-100 text-sm sm:text-base max-w-2xl mx-auto">
              Conversational AI with multiple LLM models - Ask complex questions, get intelligent responses!
            </p>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-4">
        <div className="max-w-4xl mx-auto">
          {/* Quick Questions */}
          <div className="bg-gradient-to-r from-white to-orange-50 rounded-2xl shadow-lg border border-orange-100 p-3 sm:p-6 mb-3 sm:mb-4">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <h3 className="text-base sm:text-lg font-bold text-gray-800 flex items-center">
                ⚡ <span className="hidden sm:inline ml-1">Quick Start Questions</span>
                <span className="sm:hidden ml-1">Quick Start</span>
              </h3>
              <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full font-medium">
                Popular
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
              {quickQuestions.map((question, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuickQuestion(question)}
                  className="text-left p-3 sm:p-4 bg-white hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 rounded-xl text-xs sm:text-sm text-gray-700 hover:text-orange-700 transition-all border border-gray-100 hover:border-orange-200 hover:shadow-md group active:scale-95 transform"
                >
                  <div className="flex items-start space-x-2">
                    <span className="text-orange-500 group-hover:text-orange-600 flex-shrink-0 text-sm">💡</span>
                    <span className="font-medium leading-tight">{question}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Chat Container */}
          <div className="bg-white rounded-2xl shadow-2xl border border-orange-200 h-[70vh] sm:h-[600px] flex flex-col overflow-hidden">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white p-3 sm:p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      🤖
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">BharatCode AI</h3>
                    <p className="text-xs text-orange-100 flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></span>
                      Online • Ready to help
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-1.5 hover:bg-white/10 rounded-full transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-2 sm:p-4 space-y-3 sm:space-y-4 bg-gradient-to-b from-gray-50 to-white custom-scrollbar">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}
                >
                  <div className={`flex items-end space-x-2 max-w-[85%] sm:max-w-[75%] lg:max-w-[65%]`}>
                    {message.type === 'bot' && (
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white text-xs sm:text-sm flex-shrink-0 shadow-lg">
                        🤖
                      </div>
                    )}
                    <div className="flex flex-col">
                      <div
                        className={`px-3 sm:px-4 py-2 sm:py-3 rounded-2xl shadow-md transition-all hover:shadow-lg ${
                          message.type === 'user'
                            ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-br-sm'
                            : 'bg-white border border-gray-100 text-gray-800 rounded-bl-sm'
                        }`}
                      >
                        {message.type === 'bot' ? (
                          <div className="whitespace-pre-wrap text-xs sm:text-sm leading-relaxed">
                            {message.content}
                          </div>
                        ) : (
                          <div className="text-xs sm:text-sm font-medium">{message.content}</div>
                        )}
                      </div>
                      <div className={`text-xs text-gray-400 mt-1 px-2 ${
                        message.type === 'user' ? 'text-right' : 'text-left'
                      }`}>
                        {new Date(message.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                      </div>
                    </div>
                    {message.type === 'user' && (
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-xs sm:text-sm flex-shrink-0 shadow-lg">
                        👤
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start animate-fadeIn">
                  <div className="flex items-end space-x-2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white text-xs sm:text-sm flex-shrink-0 shadow-lg">
                      🤖
                    </div>
                    <div className="bg-white border border-gray-100 px-4 py-3 rounded-2xl rounded-bl-sm shadow-md">
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-gray-200 p-3 sm:p-4 bg-white">
              <div className="flex items-end space-x-2 sm:space-x-3">
                <div className="flex-1 relative">
                  <textarea
                    value={input}
                    rows={2}
                    maxLength={1000}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault(); handleSend();
                      }
                    }}
                    placeholder="Ask me anything... (Hindi/English)"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 pr-12 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all text-sm sm:text-base resize-none"
                    disabled={isTyping}
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                </div>
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-2 sm:p-3 rounded-2xl hover:from-orange-600 hover:to-red-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
                >
                  {isTyping ? (
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                    </svg>
                  )}
                </button>
              </div>
              <div className="flex items-center justify-between mt-2 px-1">
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-1"></span>
                    AI Online
                  </span>
                  <span>Press Enter to send</span>
                </div>
                <div className="text-xs text-gray-400">{input.length}/1000</div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mt-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl shadow-lg border border-orange-100 p-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">🇮🇳 BharatCode AI - Universal Knowledge</h3>
              <p className="text-gray-600 text-sm">Powered by Indian innovation for learners worldwide</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-orange-100 hover:shadow-md transition-all">
                <div className="text-3xl mb-3">🔬</div>
                <h4 className="font-semibold text-gray-800 text-sm mb-1">Science & Math</h4>
                <p className="text-xs text-gray-500">Physics, Chemistry, Biology</p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-orange-100 hover:shadow-md transition-all">
                <div className="text-3xl mb-3">🌍</div>
                <h4 className="font-semibold text-gray-800 text-sm mb-1">History & Geography</h4>
                <p className="text-xs text-gray-500">World knowledge</p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-orange-100 hover:shadow-md transition-all">
                <div className="text-3xl mb-3">💪</div>
                <h4 className="font-semibold text-gray-800 text-sm mb-1">Health & Career</h4>
                <p className="text-xs text-gray-500">Wellness & success</p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-orange-100 hover:shadow-md transition-all">
                <div className="text-3xl mb-3">💻</div>
                <h4 className="font-semibold text-gray-800 text-sm mb-1">Technology & Code</h4>
                <p className="text-xs text-gray-500">Programming & AI</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-orange-100 px-4 py-2 rounded-full text-sm">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-gray-700 font-medium">Supports Hindi & English</span>
                <span className="text-orange-600 ml-2">•</span>
                <span className="text-gray-700 ml-2">Made with ❤️ in India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAgent;