const express = require('express');
const router = express.Router();

// --- Response Generation Functions ---

// A more detailed response generator for programming questions
const generateProgrammingResponse = (query) => {
  if (query.includes('reverse a string in python')) {
    return `### How to Reverse a String in Python 🐍

There are several ways to reverse a string in Python. Here are the most common methods, from most to least Pythonic:

**Method 1: Slicing (Most Pythonic & Efficient)**
This is the cleanest, fastest, and most preferred way to reverse a string.

\`\`\`python
text = "Hello, World!"
reversed_text = text[::-1]
print(reversed_text)  # Output: "!dlroW ,olleH"
\`\`\`
**Explanation:** The slice notation \`[start:stop:step]\` is used here. By omitting start and stop and using a step of \`-1\`, you tell Python to go through the whole string backwards.

**Method 2: Using \`reversed()\` and \`join()\`**
This method is also very readable and works well. It creates an iterator that yields characters in reverse order, which are then joined into a new string.

\`\`\`python
text = "Hello, World!"
reversed_text = "".join(reversed(text))
print(reversed_text)  # Output: "!dlroW ,olleH"
\`\`\`

**Method 3: Using a Loop (Manual Approach)**
This demonstrates the underlying logic and is good for understanding the process, but it's less efficient for long strings in Python.

\`\`\`python
def reverse_with_loop(s):
    reversed_s = ""
    for char in s:
        reversed_s = char + reversed_s
    return reversed_s

text = "Hello, World!"
print(reverse_with_loop(text)) # Output: "!dlroW ,olleH"
\`\`\`


**Conclusion:** For practical use, always prefer the slicing method \`[::-1]\` for its simplicity, readability, and performance.`;
  }

  if (query.includes('python')) {
    return `### Python Programming Basics 🐍

Python is a versatile and readable language. Here are some core concepts:

**1. Variables and Data Types**
\`\`\`python
name = "BharatCode"  # String
version = 2.0       # Float
is_awesome = True   # Boolean
features = ["AI", "Code", "Learning"] # List
\`\`\`

**2. Control Flow (If/Else)**
\`\`\`python
if is_awesome:
    print(f"{name} is awesome!")
else:
    print("This should not happen.")
\`\`\`

**3. Loops**
\`\`\`python
# For loop
for feature in features:
    print(f"- {feature}")

# While loop
count = 0
while count < 3:
    print(f"Count is {count}")
    count += 1
\`\`\`

**4. Functions**
\`\`\`python
def greet(user_name):
    """This is a docstring. It explains the function."""
    return f"Namaste, {user_name}!"

print(greet("Learner"))
\`\`\`

What specific Python topic are you interested in? (e.g., "Python dictionaries", "file handling", "classes")`;
  }

  return `### Programming & Development 💻

I can provide help with a variety of programming topics, including:
- **Languages**: Python, JavaScript, Java, C#, SQL
- **Web Development**: HTML, CSS, React, Node.js, REST APIs
- **Concepts**: Algorithms, Data Structures, OOP, Debugging

What programming challenge can I help you with today?`;
};

const generateTechResponse = (query) => {
  if (query.includes('machine learning') || query.includes('ml')) {
    return `### Machine Learning (ML) Explained 🤖

Machine Learning is a field of Artificial Intelligence (AI) that gives computers the ability to learn from data without being explicitly programmed.

**Core Idea:** Instead of writing rules, you feed data to an algorithm, and it learns the patterns itself.

**Types of Machine Learning:**

**1. Supervised Learning**
- **How it works:** Learns from labeled data (like flashcards with questions and answers).
- **Goal:** Predict an outcome for new, unseen data.
- **Examples:**
    - **Classification:** Spam detection (spam or not spam?).
    - **Regression:** House price prediction (predicting a continuous value).

**2. Unsupervised Learning**
- **How it works:** Finds hidden patterns in unlabeled data.
- **Goal:** Discover the underlying structure of data.
- **Examples:**
    - **Clustering:** Grouping similar customers together for marketing.
    - **Association:** Finding items frequently bought together (e.g., "people who bought bread also bought butter").

**3. Reinforcement Learning**
- **How it works:** An "agent" learns by performing actions and receiving rewards or penalties.
- **Goal:** Learn the best series of actions to maximize a reward.
- **Examples:** Training an AI to play a game (like Chess or Go), robotics, self-driving cars.

**Key Tools & Libraries:**
- **Python** is the dominant language.
- **Scikit-learn:** For traditional ML algorithms.
- **TensorFlow & PyTorch:** For deep learning.
- **Pandas & NumPy:** For data manipulation.`;
  }
  return `### Technology Insights 💡

Technology is a vast field! I can help explain concepts related to:
- **Artificial Intelligence (AI)** and **Machine Learning (ML)**
- **Web & App Development**
- **Cloud Computing**
- **Blockchain**
- **Cybersecurity**

What technology topic are you curious about?`;
};

const generateHealthResponse = (query) => {
  return `### Health & Wellness Guide 💪

Staying healthy involves a balanced approach to several aspects of your life. Here are some detailed tips.

**1. Balanced Diet & Nutrition 🍎**
- **Eat Whole Foods:** Focus on fruits, vegetables, lean proteins (chicken, fish, beans), and whole grains.
- **Hydrate:** Drink at least 8 glasses (around 2 liters) of water per day. Water is crucial for energy and brain function.
- **Limit Processed Foods:** Reduce intake of sugary drinks, fast food, and packaged snacks which are often high in unhealthy fats, sugar, and salt.
- **Mindful Eating:** Pay attention to your body's hunger and fullness signals.

**2. Regular Physical Activity 🏃‍♂️**
- **Cardio:** Aim for at least 150 minutes of moderate-intensity cardio (like brisk walking, cycling) per week. It's great for your heart.
- **Strength Training:** Include muscle-strengthening activities (weights, bodyweight exercises) at least 2 days per week.
- **Flexibility:** Incorporate stretching or yoga to improve range of motion and prevent injuries.

**3. Quality Sleep 😴**
- **Consistent Schedule:** Go to bed and wake up around the same time every day, even on weekends.
- **Aim for 7-9 Hours:** Most adults need this much sleep for optimal physical and mental health.
- **Create a Relaxing Routine:** Avoid screens (phones, TV) for an hour before bed. Read a book or listen to calm music instead.

**4. Mental Well-being 😊**
- **Manage Stress:** Practice stress-reducing techniques like meditation, deep breathing, or spending time in nature.
- **Stay Connected:** Maintain strong social connections with friends and family.
- **Seek Help:** It's a sign of strength to talk to a professional if you're struggling with your mental health.

**Disclaimer:** I am an AI assistant. Please consult with a qualified healthcare professional for any medical advice or concerns.`;
};

// General fallback response
const generateKnowledgeResponse = (query) => {
  return `### BharatCode AI - Universal Assistant 🇮🇳

I can provide detailed information on your query: **"${query}"**.

My knowledge spans a wide range of topics. You can ask me about:

- **🔬 Science**: "Explain the theory of relativity."
- **💻 Technology & Programming**: "What is the difference between SQL and NoSQL?"
- **🌍 History & Geography**: "What were the main causes of World War I?"
- **💪 Health & Wellness**: "What are the benefits of a Mediterranean diet?"
- **💼 Career & Business**: "How can I prepare for a job interview?"

Please ask a more specific question, and I'll provide a detailed answer!`;
};

// --- Main Dispatcher Function ---
const getAIResponse = (question) => {
  const normalizedQuestion = question.toLowerCase().trim();

  // Prioritize specific, detailed queries first
  if (normalizedQuestion.includes('reverse a string in python')) {
    return generateProgrammingResponse(normalizedQuestion);
  }

  // General category routing
  if (normalizedQuestion.includes('python') || normalizedQuestion.includes('javascript') || normalizedQuestion.includes('code')) {
    return generateProgrammingResponse(normalizedQuestion);
  }
  if (normalizedQuestion.includes('machine learning') || normalizedQuestion.includes('ml') || normalizedQuestion.includes('ai')) {
    return generateTechResponse(normalizedQuestion);
  }
  if (normalizedQuestion.includes('health') || normalizedQuestion.includes('fitness') || normalizedQuestion.includes('diet')) {
    return generateHealthResponse(normalizedQuestion);
  }

  // Fallback for general knowledge questions
  return generateKnowledgeResponse(question);
};

// --- API Route Definition ---

/**
 * @swagger
 * /api/ai/chat:
 *   post:
 *     summary: Get a response from the AI agent
 *     description: Send a question to the AI agent and receive a detailed, structured answer.
 *     tags: [AI]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               question:
 *                 type: string
 *                 description: The user's question for the AI.
 *                 example: "How do I reverse a string in Python?"
 *     responses:
 *       200:
 *         description: A successful response from the AI.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 response:
 *                   type: string
 *                   description: The AI-generated answer, formatted with Markdown.
 *       400:
 *         description: Bad request, question not provided.
 */
router.post('/chat', (req, res) => {
  const { question } = req.body;

  if (!question || typeof question !== 'string' || question.trim() === '') {
    return res.status(400).json({
      success: false,
      message: 'Question is required and must be a non-empty string.'
    });
  }

  try {
    const response = getAIResponse(question);
    res.json({ success: true, response });
  } catch (error) {
    console.error('AI response generation error:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while generating the AI response.'
    });
  }
});

module.exports = router;