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

  FaBrain,
  FaRobot,
  FaEye,
  FaComments
} from 'react-icons/fa';

const ArtificialIntelligence = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('syllabus');
  const [expandedExample, setExpandedExample] = useState(null);

  const courseDetails = {
    name: "Artificial Intelligence",
    description: "Comprehensive AI course covering reasoning, learning, perception, NLP, computer vision, robotics, and advanced AI systems.",
    fullDescription: "Master artificial intelligence from fundamentals to cutting-edge applications. Learn search algorithms, knowledge representation, expert systems, machine learning integration, natural language processing, computer vision, robotics, and ethical AI development.",
    duration: "24 weeks",
    level: "Advanced",
    instructor: "Dr. Alan Turing",
    introduction: {
      overview: "Artificial Intelligence (AI) is the simulation of human intelligence in machines that are programmed to think, learn, and make decisions. AI encompasses various techniques and approaches to create systems that can perform tasks typically requiring human intelligence.",
      goals: [
        "Reasoning - Logical thinking and inference",
        "Learning - Acquiring knowledge from experience",
        "Perception - Understanding sensory input",
        "Natural Language Understanding - Processing human language",
        "Planning - Developing strategies to achieve goals",
        "Problem Solving - Finding solutions to complex challenges"
      ],
      aiTypes: {
        capabilities: {
          title: "Based on Capabilities",
          types: [
            {
              name: "Narrow AI (Weak AI)",
              description: "Performs specific tasks with high efficiency",
              examples: ["Siri voice assistant", "Google Translate", "Chess programs", "Recommendation systems"]
            },
            {
              name: "General AI (Strong AI)",
              description: "Human-like cognitive abilities across domains",
              examples: ["Not yet achieved", "Theoretical human-level AI", "Multi-domain reasoning", "Consciousness simulation"]
            },
            {
              name: "Super AI",
              description: "Surpasses human intelligence in all aspects",
              examples: ["Hypothetical future AI", "Beyond human capabilities", "Technological singularity", "Advanced problem solving"]
            }
          ]
        },
        functionalities: {
          title: "Based on Functionalities",
          types: [
            {
              name: "Reactive Machines",
              description: "No memory, responds to current input only",
              examples: ["Deep Blue chess computer", "Basic game AI", "Simple rule-based systems", "Immediate response systems"]
            },
            {
              name: "Limited Memory",
              description: "Uses past data to make decisions",
              examples: ["Self-driving cars", "Chatbots with context", "Recommendation engines", "Adaptive systems"]
            },
            {
              name: "Theory of Mind",
              description: "Understands emotions, beliefs, and intentions",
              examples: ["Research stage", "Social robots", "Empathetic AI", "Human behavior modeling"]
            },
            {
              name: "Self-aware AI",
              description: "Has consciousness and self-awareness",
              examples: ["Hypothetical", "Conscious machines", "Self-reflective AI", "Philosophical concept"]
            }
          ]
        }
      },
      coreDisciplines: [
        {
          name: "Machine Learning",
          description: "Learning patterns from data",
          applications: ["Predictive analytics", "Pattern recognition", "Data mining", "Automated decision making"]
        },
        {
          name: "Natural Language Processing",
          description: "Understanding and generating human language",
          applications: ["Chatbots", "Translation", "Sentiment analysis", "Text summarization"]
        },
        {
          name: "Computer Vision",
          description: "Understanding visual information",
          applications: ["Image recognition", "Object detection", "Medical imaging", "Autonomous vehicles"]
        },
        {
          name: "Robotics",
          description: "Physical interaction with the world",
          applications: ["Industrial automation", "Service robots", "Exploration", "Healthcare assistance"]
        },
        {
          name: "Expert Systems",
          description: "Rule-based decision making",
          applications: ["Medical diagnosis", "Financial planning", "Troubleshooting", "Legal advice"]
        },
        {
          name: "Planning & Optimization",
          description: "Strategic decision sequences",
          applications: ["Route planning", "Resource allocation", "Scheduling", "Game strategies"]
        }
      ],
      algorithms: {
        astar: {
          title: "A* Search Algorithm",
          description: "Informed search algorithm that finds the optimal path using heuristics",
          steps: [
            "Initialize open list with start node",
            "Calculate f(n) = g(n) + h(n) for each node",
            "Select node with lowest f(n) from open list",
            "Move selected node to closed list",
            "Expand neighbors and update costs",
            "Repeat until goal is found or open list is empty"
          ],
          timeComplexity: "O(b^d) where b=branching factor, d=depth",
          spaceComplexity: "O(b^d) for storing nodes in memory"
        },
        minimax: {
          title: "Minimax Algorithm",
          description: "Game-playing algorithm that minimizes maximum possible loss",
          steps: [
            "Start from current game state",
            "Generate all possible moves",
            "Recursively evaluate each move",
            "Maximize score for AI player",
            "Minimize score for opponent",
            "Choose move with best minimax value"
          ],
          timeComplexity: "O(b^d) where b=branching factor, d=depth",
          spaceComplexity: "O(d) for recursion stack"
        },
        backwardChaining: {
          title: "Backward Chaining",
          description: "Inference method that works backwards from goal to facts",
          steps: [
            "Start with goal to be proved",
            "Find rules that conclude the goal",
            "Set rule conditions as new subgoals",
            "Recursively prove each subgoal",
            "Check if subgoals match known facts",
            "Goal is proved if all subgoals are satisfied"
          ],
          timeComplexity: "O(r^d) where r=rules, d=depth of reasoning",
          spaceComplexity: "O(d) for maintaining goal stack"
        }
      }
    },
    syllabus: [
      {
        week: 1,
        title: "Introduction to Artificial Intelligence",
        topics: [
          "Definition and history of AI",
          "Goals and applications of AI",
          "Types of AI: Narrow, General, Super",
          "AI vs Machine Learning vs Deep Learning",
          "Philosophical foundations and Turing Test",
          "Current state and future of AI"
        ],
        practicals: [
          "Setup AI development environment",
          "Explore AI applications and tools",
          "Implement simple rule-based system",
          "AI ethics discussion and analysis"
        ],
        examples: [
          {
            title: "Simple Expert System Implementation",
            code: `class ExpertSystem:
    def __init__(self):
        self.facts = set()
        self.rules = []
        self.working_memory = set()
    
    def add_fact(self, fact):
        """Add a fact to the knowledge base"""
        self.facts.add(fact)
        self.working_memory.add(fact)
    
    def add_rule(self, conditions, conclusion, certainty=1.0):
        """Add a rule to the knowledge base"""
        rule = {
            'conditions': conditions,
            'conclusion': conclusion,
            'certainty': certainty,
            'fired': False
        }
        self.rules.append(rule)
    
    def forward_chaining(self):
        """Forward chaining inference engine"""
        changed = True
        iterations = 0
        max_iterations = 100
        
        print("Starting forward chaining inference...")
        
        while changed and iterations < max_iterations:
            changed = False
            iterations += 1
            
            print(f"\\nIteration {iterations}:")
            print(f"Current facts: {self.working_memory}")
            
            for i, rule in enumerate(self.rules):
                if rule['fired']:
                    continue
                
                # Check if all conditions are satisfied
                conditions_met = all(
                    condition in self.working_memory 
                    for condition in rule['conditions']
                )
                
                if conditions_met:
                    # Fire the rule
                    new_fact = rule['conclusion']
                    if new_fact not in self.working_memory:
                        self.working_memory.add(new_fact)
                        print(f"Rule {i+1} fired: {rule['conditions']} -> {new_fact}")
                        changed = True
                    
                    rule['fired'] = True
        
        print(f"\\nInference complete after {iterations} iterations")
        print(f"Final facts: {self.working_memory}")
        return self.working_memory
    
    def backward_chaining(self, goal):
        """Backward chaining to prove a goal"""
        print(f"Trying to prove goal: {goal}")
        return self._prove_goal(goal, set())
    
    def _prove_goal(self, goal, visited):
        """Recursive goal proving"""
        if goal in visited:
            print(f"Circular reasoning detected for {goal}")
            return False
        
        # Check if goal is already a known fact
        if goal in self.working_memory:
            print(f"Goal {goal} is already a known fact")
            return True
        
        visited.add(goal)
        
        # Find rules that can conclude this goal
        for rule in self.rules:
            if rule['conclusion'] == goal:
                print(f"Found rule for {goal}: {rule['conditions']} -> {goal}")
                
                # Try to prove all conditions
                all_conditions_proved = True
                for condition in rule['conditions']:
                    if not self._prove_goal(condition, visited.copy()):
                        all_conditions_proved = False
                        break
                
                if all_conditions_proved:
                    print(f"Successfully proved {goal}")
                    self.working_memory.add(goal)
                    return True
        
        print(f"Cannot prove {goal}")
        return False
    
    def query(self, question):
        """Query the expert system"""
        print(f"\\n=== Querying: {question} ===")
        
        # Try forward chaining first
        self.forward_chaining()
        
        # Check if question is in derived facts
        if question in self.working_memory:
            return True, "Yes, based on forward chaining"
        
        # Try backward chaining
        if self.backward_chaining(question):
            return True, "Yes, proved by backward chaining"
        
        return False, "Cannot be determined from available knowledge"

# Medical Diagnosis Expert System Example
def medical_diagnosis_system():
    """Example: Simple medical diagnosis expert system"""
    print("=== Medical Diagnosis Expert System ===")
    
    # Create expert system
    medical_es = ExpertSystem()
    
    # Add initial facts (symptoms)
    medical_es.add_fact("fever")
    medical_es.add_fact("cough")
    medical_es.add_fact("headache")
    
    # Add diagnostic rules
    medical_es.add_rule(
        ["fever", "cough", "headache"], 
        "flu", 
        0.8
    )
    
    medical_es.add_rule(
        ["fever", "rash"], 
        "measles", 
        0.9
    )
    
    medical_es.add_rule(
        ["cough", "chest_pain"], 
        "pneumonia", 
        0.7
    )
    
    medical_es.add_rule(
        ["flu"], 
        "recommend_rest", 
        1.0
    )
    
    medical_es.add_rule(
        ["flu"], 
        "recommend_fluids", 
        1.0
    )
    
    # Query the system
    result, explanation = medical_es.query("flu")
    print(f"\\nDiagnosis result: {result}")
    print(f"Explanation: {explanation}")
    
    # Query for recommendations
    result, explanation = medical_es.query("recommend_rest")
    print(f"\\nRecommendation result: {result}")
    print(f"Explanation: {explanation}")

# Animal Classification Expert System
def animal_classification_system():
    """Example: Animal classification expert system"""
    print("\\n=== Animal Classification Expert System ===")
    
    # Create expert system
    animal_es = ExpertSystem()
    
    # Add facts about an unknown animal
    animal_es.add_fact("has_fur")
    animal_es.add_fact("gives_milk")
    animal_es.add_fact("has_four_legs")
    
    # Add classification rules
    animal_es.add_rule(
        ["has_fur", "gives_milk"], 
        "mammal"
    )
    
    animal_es.add_rule(
        ["has_feathers", "lays_eggs"], 
        "bird"
    )
    
    animal_es.add_rule(
        ["mammal", "has_four_legs", "carnivore"], 
        "cat_family"
    )
    
    animal_es.add_rule(
        ["mammal", "has_four_legs", "herbivore"], 
        "ungulate"
    )
    
    animal_es.add_rule(
        ["mammal", "large_size", "trunk"], 
        "elephant"
    )
    
    # Query classifications
    classifications = ["mammal", "bird", "cat_family"]
    
    for classification in classifications:
        result, explanation = animal_es.query(classification)
        print(f"\\nIs it a {classification}? {result}")
        print(f"Explanation: {explanation}")

# Interactive Expert System
def interactive_expert_system():
    """Interactive expert system for user queries"""
    print("\\n=== Interactive Expert System ===")
    
    es = ExpertSystem()
    
    # Add some general knowledge
    es.add_rule(["student", "studies_hard"], "good_grades")
    es.add_rule(["good_grades", "applies_to_university"], "accepted")
    es.add_rule(["accepted", "has_funding"], "can_attend")
    es.add_rule(["rain", "no_umbrella"], "get_wet")
    es.add_rule(["sunny", "go_outside"], "happy")
    
    print("Available facts you can add:")
    print("- student, studies_hard, applies_to_university, has_funding")
    print("- rain, no_umbrella, sunny, go_outside")
    
    while True:
        print("\\nOptions:")
        print("1. Add fact")
        print("2. Query system")
        print("3. Show current facts")
        print("4. Exit")
        
        choice = input("Enter choice (1-4): ").strip()
        
        if choice == '1':
            fact = input("Enter fact to add: ").strip()
            es.add_fact(fact)
            print(f"Added fact: {fact}")
        
        elif choice == '2':
            query = input("Enter query: ").strip()
            result, explanation = es.query(query)
            print(f"Result: {result}")
            print(f"Explanation: {explanation}")
        
        elif choice == '3':
            print(f"Current facts: {es.working_memory}")
        
        elif choice == '4':
            break
        
        else:
            print("Invalid choice!")

if __name__ == "__main__":
    # Run examples
    medical_diagnosis_system()
    animal_classification_system()
    
    # Uncomment for interactive mode
    # interactive_expert_system()`,
            explanation: "Complete expert system implementation with forward and backward chaining, demonstrating rule-based reasoning for medical diagnosis and animal classification."
          }
        ]
      },
      {
        week: 2,
        title: "Search and Problem Solving",
        topics: [
          "Problem formulation and state spaces",
          "Uninformed search: BFS, DFS, UCS",
          "Informed search: A*, Greedy Best-First",
          "Heuristic functions and admissibility",
          "Local search: Hill climbing, Simulated annealing",
          "Constraint satisfaction problems"
        ],
        practicals: [
          "Implement search algorithms",
          "Solve 8-puzzle using A*",
          "N-Queens problem with backtracking",
          "Path planning for robotics"
        ],
        examples: []
      }
    ],
    features: [
      "240+ comprehensive lessons",
      "50+ hands-on AI projects",
      "Search algorithms and game playing",
      "Knowledge representation systems",
      "Expert systems development",
      "Natural language processing",
      "Computer vision applications",
      "Robotics and autonomous systems",
      "Ethics and responsible AI",
      "Interactive coding exercises",
      "Lifetime access to content",
      "Community support"
    ]
  };

  const handleBack = () => {
    navigate('/courses');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20">
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
                onClick={() => setActiveTab('theory')}
                className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === 'theory' 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <FaBrain />
                AI Theory
              </button>
              <button 
                onClick={() => setActiveTab('algorithms')}
                className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === 'algorithms' 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <FaCogs />
                Algorithms
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
                onClick={() => setActiveTab('applications')}
                className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === 'applications' 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <FaRobot />
                Applications
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
            
            {activeTab === 'theory' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Artificial Intelligence Theory</h2>
                  <p className="text-gray-600 dark:text-gray-300">Comprehensive theoretical foundations of artificial intelligence</p>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-6"
                >
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Goals of AI</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {courseDetails.introduction.goals.map((goal, index) => (
                      <div key={index} className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-lg p-3">
                        <FaBrain className="text-purple-500 text-xl" />
                        <span className="text-gray-700 dark:text-gray-300">{goal}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                  {Object.entries(courseDetails.introduction.aiTypes).map(([key, category]) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-6"
                    >
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{category.title}</h3>
                      <div className="space-y-4">
                        {category.types.map((type, index) => (
                          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4">
                            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{type.name}</h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{type.description}</p>
                            <div className="flex flex-wrap gap-1">
                              {type.examples.map((example, idx) => (
                                <span key={idx} className="px-2 py-1 bg-indigo-100 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-100 rounded text-xs">
                                  {example}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-6"
                >
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Core AI Disciplines</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {courseDetails.introduction.coreDisciplines.map((discipline, index) => (
                      <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{discipline.name}</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{discipline.description}</p>
                        <div>
                          <div className="font-medium text-gray-700 dark:text-gray-300 text-sm mb-1">Applications:</div>
                          <ul className="text-xs text-gray-600 dark:text-gray-400">
                            {discipline.applications.map((app, idx) => (
                              <li key={idx}>• {app}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            )}

            {activeTab === 'algorithms' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Core AI Algorithms</h2>
                  <p className="text-gray-600 dark:text-gray-300">Fundamental algorithms powering artificial intelligence systems</p>
                </div>
                
                {Object.entries(courseDetails.introduction.algorithms).map(([key, algorithm]) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-6"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{algorithm.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">{algorithm.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Algorithm Steps:</h4>
                        <ol className="space-y-2">
                          {algorithm.steps.map((step, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                                {index + 1}
                              </span>
                              <span className="text-gray-600 dark:text-gray-300 text-sm">{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Complexity Analysis:</h4>
                        <div className="space-y-3">
                          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                            <div className="font-medium text-gray-800 dark:text-gray-200">Time Complexity:</div>
                            <div className="text-gray-600 dark:text-gray-300 text-sm">{algorithm.timeComplexity}</div>
                          </div>
                          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                            <div className="font-medium text-gray-800 dark:text-gray-200">Space Complexity:</div>
                            <div className="text-gray-600 dark:text-gray-300 text-sm">{algorithm.spaceComplexity}</div>
                          </div>
                        </div>
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
                                    <span className="text-gray-300 text-sm font-mono">Python Code</span>
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

            {activeTab === 'applications' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">AI Applications</h2>
                  <p className="text-gray-600 dark:text-gray-300">Real-world applications of artificial intelligence</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { icon: FaComments, title: "Voice Assistants", desc: "Siri, Alexa, Google Assistant" },
                    { icon: FaRobot, title: "Autonomous Vehicles", desc: "Self-driving cars and navigation" },
                    { icon: FaEye, title: "Computer Vision", desc: "Image recognition and analysis" },
                    { icon: FaBrain, title: "Healthcare AI", desc: "Medical diagnosis and treatment" },
                    { icon: FaCogs, title: "Industrial Automation", desc: "Smart manufacturing systems" },
                    { icon: FaProjectDiagram, title: "Recommendation Systems", desc: "Personalized content delivery" }
                  ].map((app, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-6 text-center"
                    >
                      <app.icon className="text-4xl text-blue-500 mx-auto mb-4" />
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{app.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{app.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'download' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Download AI Resources</h2>
                  <p className="text-gray-600 dark:text-gray-300">Comprehensive artificial intelligence materials and resources</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-6"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <FaFileAlt className="text-purple-500 text-3xl" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Complete AI Course</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Full curriculum with theory and implementations</p>
                      </div>
                    </div>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                        24 weeks of comprehensive content
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                        240+ pages of theory and examples
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                        50+ hands-on projects
                      </li>
                    </ul>
                    <button 
                      onClick={() => window.open('#', '_blank')}
                      className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <FaDownload />
                      Download PDF (18.5 MB)
                    </button>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-6"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <FaAlgorithm className="text-blue-500 text-3xl" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">AI Algorithms Guide</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Search, reasoning, and optimization</p>
                      </div>
                    </div>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        Search algorithms and game playing
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        Knowledge representation methods
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        Expert systems and reasoning
                      </li>
                    </ul>
                    <button 
                      onClick={() => window.open('#', '_blank')}
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <FaDownload />
                      Download PDF (12.3 MB)
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

export default ArtificialIntelligence;