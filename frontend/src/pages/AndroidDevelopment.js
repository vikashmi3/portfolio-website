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

const AndroidDevelopment = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('syllabus');
  const [expandedExample, setExpandedExample] = useState(null);

  const courseDetails = {
    name: "Android Development",
    description: "Build native Android apps with Java and Kotlin. Learn UI design, data storage, and Google Play deployment.",
    fullDescription: "Master Android app development from basics to advanced concepts. Learn Java/Kotlin programming, Android SDK, UI/UX design, data storage, networking, and publishing apps to Google Play Store.",
    duration: "16 weeks",
    level: "Intermediate",
    instructor: "Michael Park",
    syllabus: [
      {
        week: 1,
        title: "Android Development Setup and Basics",
        topics: [
          "Android Studio installation",
          "Android project structure",
          "Activities and lifecycle",
          "Basic UI components",
          "Running apps on emulator/device"
        ],
        practicals: [
          "Setup development environment",
          "Create first Android app",
          "Build simple calculator"
        ],
        examples: [
          {
            title: "First Android App with Activity Lifecycle",
            code: `// MainActivity.java
package com.example.myfirstapp;

import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {
    
    private static final String TAG = "MainActivity";
    private EditText editTextName;
    private Button buttonGreet;
    private TextView textViewGreeting;
    private int clickCount = 0;
    
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        
        Log.d(TAG, "onCreate called");
        
        // Initialize views
        initializeViews();
        
        // Set up click listeners
        setupClickListeners();
        
        // Restore state if available
        if (savedInstanceState != null) {
            clickCount = savedInstanceState.getInt("click_count", 0);
            updateClickCount();
        }
    }
    
    private void initializeViews() {
        editTextName = findViewById(R.id.editTextName);
        buttonGreet = findViewById(R.id.buttonGreet);
        textViewGreeting = findViewById(R.id.textViewGreeting);
    }
    
    private void setupClickListeners() {
        buttonGreet.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String name = editTextName.getText().toString().trim();
                
                if (name.isEmpty()) {
                    Toast.makeText(MainActivity.this, "Please enter your name", 
                                 Toast.LENGTH_SHORT).show();
                    return;
                }
                
                clickCount++;
                String greeting = "Hello, " + name + "!\\nButton clicked " + clickCount + " times";
                textViewGreeting.setText(greeting);
                
                // Clear the input field
                editTextName.setText("");
                
                Log.d(TAG, "Greeting displayed for: " + name);
            }
        });
    }
    
    private void updateClickCount() {
        if (clickCount > 0) {
            textViewGreeting.setText("Button clicked " + clickCount + " times");
        }
    }
    
    @Override
    protected void onStart() {
        super.onStart();
        Log.d(TAG, "onStart called");
    }
    
    @Override
    protected void onResume() {
        super.onResume();
        Log.d(TAG, "onResume called");
    }
    
    @Override
    protected void onPause() {
        super.onPause();
        Log.d(TAG, "onPause called");
    }
    
    @Override
    protected void onStop() {
        super.onStop();
        Log.d(TAG, "onStop called");
    }
    
    @Override
    protected void onDestroy() {
        super.onDestroy();
        Log.d(TAG, "onDestroy called");
    }
    
    @Override
    protected void onSaveInstanceState(Bundle outState) {
        super.onSaveInstanceState(outState);
        outState.putInt("click_count", clickCount);
        Log.d(TAG, "State saved");
    }
}

// activity_main.xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:padding="16dp"
    android:gravity="center"
    tools:context=".MainActivity">

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Welcome to My First App!"
        android:textSize="24sp"
        android:textStyle="bold"
        android:layout_marginBottom="32dp"
        android:textColor="@color/purple_700" />

    <EditText
        android:id="@+id/editTextName"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:hint="Enter your name"
        android:inputType="textPersonName"
        android:layout_marginBottom="16dp"
        android:padding="12dp"
        android:background="@drawable/edit_text_background" />

    <Button
        android:id="@+id/buttonGreet"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="Greet Me!"
        android:textSize="18sp"
        android:layout_marginBottom="24dp"
        android:backgroundTint="@color/purple_500" />

    <TextView
        android:id="@+id/textViewGreeting"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text=""
        android:textSize="18sp"
        android:textAlignment="center"
        android:textColor="@color/teal_700"
        android:layout_marginTop="16dp" />

</LinearLayout>

// strings.xml
<resources>
    <string name="app_name">My First App</string>
    <string name="enter_name_hint">Enter your name</string>
    <string name="greet_button">Greet Me!</string>
    <string name="welcome_message">Welcome to My First App!</string>
</resources>

// colors.xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <color name="purple_200">#FFBB86FC</color>
    <color name="purple_500">#FF6200EE</color>
    <color name="purple_700">#FF3700B3</color>
    <color name="teal_200">#FF03DAC5</color>
    <color name="teal_700">#FF018786</color>
    <color name="black">#FF000000</color>
    <color name="white">#FFFFFFFF</color>
</resources>`,
            explanation: "Complete Android app showing activity lifecycle, UI components, event handling, state management, and proper resource organization."
          }
        ]
      },
      {
        week: 2,
        title: "Advanced UI and RecyclerView",
        topics: [
          "RecyclerView and adapters",
          "Custom layouts and views",
          "Material Design components",
          "Fragments and navigation",
          "Constraint Layout"
        ],
        practicals: [
          "Build list-based apps",
          "Create custom UI components",
          "Implement navigation patterns"
        ],
        examples: [
          {
            title: "RecyclerView with Custom Adapter",
            code: `// Task.java - Data Model
public class Task {
    private int id;
    private String title;
    private String description;
    private boolean isCompleted;
    private long createdAt;
    
    public Task(int id, String title, String description) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.isCompleted = false;
        this.createdAt = System.currentTimeMillis();
    }
    
    // Getters and setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    
    public boolean isCompleted() { return isCompleted; }
    public void setCompleted(boolean completed) { isCompleted = completed; }
    
    public long getCreatedAt() { return createdAt; }
    public void setCreatedAt(long createdAt) { this.createdAt = createdAt; }
}

// TaskAdapter.java - RecyclerView Adapter
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.CheckBox;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Locale;

public class TaskAdapter extends RecyclerView.Adapter<TaskAdapter.TaskViewHolder> {
    
    private List<Task> tasks;
    private OnTaskClickListener listener;
    
    public interface OnTaskClickListener {
        void onTaskClick(Task task);
        void onTaskLongClick(Task task);
        void onTaskStatusChanged(Task task, boolean isCompleted);
    }
    
    public TaskAdapter(List<Task> tasks, OnTaskClickListener listener) {
        this.tasks = tasks;
        this.listener = listener;
    }
    
    @NonNull
    @Override
    public TaskViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext())
                .inflate(R.layout.item_task, parent, false);
        return new TaskViewHolder(view);
    }
    
    @Override
    public void onBindViewHolder(@NonNull TaskViewHolder holder, int position) {
        Task task = tasks.get(position);
        holder.bind(task);
    }
    
    @Override
    public int getItemCount() {
        return tasks.size();
    }
    
    public void updateTasks(List<Task> newTasks) {
        this.tasks = newTasks;
        notifyDataSetChanged();
    }
    
    public void addTask(Task task) {
        tasks.add(0, task); // Add to beginning
        notifyItemInserted(0);
    }
    
    public void removeTask(int position) {
        tasks.remove(position);
        notifyItemRemoved(position);
    }
    
    class TaskViewHolder extends RecyclerView.ViewHolder {
        private TextView textTitle;
        private TextView textDescription;
        private TextView textDate;
        private CheckBox checkBoxCompleted;
        
        public TaskViewHolder(@NonNull View itemView) {
            super(itemView);
            textTitle = itemView.findViewById(R.id.textTitle);
            textDescription = itemView.findViewById(R.id.textDescription);
            textDate = itemView.findViewById(R.id.textDate);
            checkBoxCompleted = itemView.findViewById(R.id.checkBoxCompleted);
        }
        
        public void bind(Task task) {
            textTitle.setText(task.getTitle());
            textDescription.setText(task.getDescription());
            
            // Format date
            SimpleDateFormat sdf = new SimpleDateFormat("MMM dd, yyyy", Locale.getDefault());
            textDate.setText(sdf.format(new Date(task.getCreatedAt())));
            
            checkBoxCompleted.setChecked(task.isCompleted());
            
            // Apply completed styling
            if (task.isCompleted()) {
                textTitle.setTextColor(itemView.getContext().getColor(R.color.text_secondary));
                textDescription.setTextColor(itemView.getContext().getColor(R.color.text_secondary));
                itemView.setAlpha(0.6f);
            } else {
                textTitle.setTextColor(itemView.getContext().getColor(R.color.text_primary));
                textDescription.setTextColor(itemView.getContext().getColor(R.color.text_secondary));
                itemView.setAlpha(1.0f);
            }
            
            // Set click listeners
            itemView.setOnClickListener(v -> {
                if (listener != null) {
                    listener.onTaskClick(task);
                }
            });
            
            itemView.setOnLongClickListener(v -> {
                if (listener != null) {
                    listener.onTaskLongClick(task);
                }
                return true;
            });
            
            checkBoxCompleted.setOnCheckedChangeListener((buttonView, isChecked) -> {
                task.setCompleted(isChecked);
                if (listener != null) {
                    listener.onTaskStatusChanged(task, isChecked);
                }
                // Update UI immediately
                bind(task);
            });
        }
    }
}

// MainActivity.java - Using RecyclerView
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import androidx.recyclerview.widget.ItemTouchHelper;
import android.app.AlertDialog;
import android.os.Bundle;
import android.widget.EditText;
import android.widget.Toast;
import com.google.android.material.floatingactionbutton.FloatingActionButton;
import java.util.ArrayList;
import java.util.List;

public class MainActivity extends AppCompatActivity implements TaskAdapter.OnTaskClickListener {
    
    private RecyclerView recyclerView;
    private TaskAdapter taskAdapter;
    private List<Task> taskList;
    private FloatingActionButton fabAddTask;
    private int nextTaskId = 1;
    
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        
        initializeViews();
        setupRecyclerView();
        setupFab();
        loadSampleData();
    }
    
    private void initializeViews() {
        recyclerView = findViewById(R.id.recyclerViewTasks);
        fabAddTask = findViewById(R.id.fabAddTask);
    }
    
    private void setupRecyclerView() {
        taskList = new ArrayList<>();
        taskAdapter = new TaskAdapter(taskList, this);
        
        recyclerView.setLayoutManager(new LinearLayoutManager(this));
        recyclerView.setAdapter(taskAdapter);
        
        // Add swipe to delete functionality
        ItemTouchHelper itemTouchHelper = new ItemTouchHelper(new ItemTouchHelper.SimpleCallback(0, 
                ItemTouchHelper.LEFT | ItemTouchHelper.RIGHT) {
            @Override
            public boolean onMove(@NonNull RecyclerView recyclerView, 
                                @NonNull RecyclerView.ViewHolder viewHolder, 
                                @NonNull RecyclerView.ViewHolder target) {
                return false;
            }
            
            @Override
            public void onSwiped(@NonNull RecyclerView.ViewHolder viewHolder, int direction) {
                int position = viewHolder.getAdapterPosition();
                Task task = taskList.get(position);
                
                // Show confirmation dialog
                new AlertDialog.Builder(MainActivity.this)
                    .setTitle("Delete Task")
                    .setMessage("Are you sure you want to delete '" + task.getTitle() + "'?")
                    .setPositiveButton("Delete", (dialog, which) -> {
                        taskAdapter.removeTask(position);
                        Toast.makeText(MainActivity.this, "Task deleted", Toast.LENGTH_SHORT).show();
                    })
                    .setNegativeButton("Cancel", (dialog, which) -> {
                        taskAdapter.notifyItemChanged(position);
                    })
                    .show();
            }
        });
        
        itemTouchHelper.attachToRecyclerView(recyclerView);
    }
    
    private void setupFab() {
        fabAddTask.setOnClickListener(v -> showAddTaskDialog());
    }
    
    private void showAddTaskDialog() {
        AlertDialog.Builder builder = new AlertDialog.Builder(this);
        View dialogView = getLayoutInflater().inflate(R.layout.dialog_add_task, null);
        
        EditText editTitle = dialogView.findViewById(R.id.editTextTitle);
        EditText editDescription = dialogView.findViewById(R.id.editTextDescription);
        
        builder.setView(dialogView)
            .setTitle("Add New Task")
            .setPositiveButton("Add", (dialog, which) -> {
                String title = editTitle.getText().toString().trim();
                String description = editDescription.getText().toString().trim();
                
                if (!title.isEmpty()) {
                    Task newTask = new Task(nextTaskId++, title, description);
                    taskAdapter.addTask(newTask);
                    recyclerView.scrollToPosition(0);
                    Toast.makeText(this, "Task added", Toast.LENGTH_SHORT).show();
                } else {
                    Toast.makeText(this, "Please enter a title", Toast.LENGTH_SHORT).show();
                }
            })
            .setNegativeButton("Cancel", null)
            .show();
    }
    
    private void loadSampleData() {
        taskList.add(new Task(nextTaskId++, "Learn Android Development", 
                             "Complete the Android course with practical projects"));
        taskList.add(new Task(nextTaskId++, "Build Todo App", 
                             "Create a fully functional todo application"));
        taskList.add(new Task(nextTaskId++, "Study Material Design", 
                             "Learn Google's Material Design principles"));
        
        taskAdapter.notifyDataSetChanged();
    }
    
    @Override
    public void onTaskClick(Task task) {
        // Handle task click - could open detail view
        Toast.makeText(this, "Clicked: " + task.getTitle(), Toast.LENGTH_SHORT).show();
    }
    
    @Override
    public void onTaskLongClick(Task task) {
        // Handle long click - could show context menu
        Toast.makeText(this, "Long clicked: " + task.getTitle(), Toast.LENGTH_SHORT).show();
    }
    
    @Override
    public void onTaskStatusChanged(Task task, boolean isCompleted) {
        String status = isCompleted ? "completed" : "pending";
        Toast.makeText(this, task.getTitle() + " marked as " + status, Toast.LENGTH_SHORT).show();
    }
}

// item_task.xml - RecyclerView Item Layout
<?xml version="1.0" encoding="utf-8"?>
<androidx.cardview.widget.CardView xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:layout_margin="8dp"
    app:cardCornerRadius="8dp"
    app:cardElevation="4dp">

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="horizontal"
        android:padding="16dp">

        <CheckBox
            android:id="@+id/checkBoxCompleted"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_gravity="center_vertical" />

        <LinearLayout
            android:layout_width="0dp"
            android:layout_height="wrap_content"
            android:layout_weight="1"
            android:layout_marginStart="12dp"
            android:orientation="vertical">

            <TextView
                android:id="@+id/textTitle"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:textSize="16sp"
                android:textStyle="bold"
                android:textColor="@color/text_primary" />

            <TextView
                android:id="@+id/textDescription"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:layout_marginTop="4dp"
                android:textSize="14sp"
                android:textColor="@color/text_secondary" />

            <TextView
                android:id="@+id/textDate"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:layout_marginTop="8dp"
                android:textSize="12sp"
                android:textColor="@color/text_tertiary" />

        </LinearLayout>

    </LinearLayout>

</androidx.cardview.widget.CardView>`,
            explanation: "Complete RecyclerView implementation with custom adapter, data binding, click handling, swipe-to-delete functionality, and Material Design components."
          }
        ]
      }
    ],
    features: [
      "64 comprehensive lessons",
      "16 hands-on Android projects",
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
                                    <span className="text-gray-300 text-sm font-mono">Java/Android Code</span>
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

export default AndroidDevelopment;