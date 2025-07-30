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

const DataScience = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('syllabus');
  const [expandedExample, setExpandedExample] = useState(null);

  const courseDetails = {
    name: "Data Science",
    description: "Complete data science course with Python, pandas, NumPy, and statistical analysis. Real-world projects included.",
    fullDescription: "Master data science from data collection to insights. Learn Python, statistics, data visualization, machine learning, and big data technologies. Work with real datasets and build end-to-end data science projects.",
    duration: "16 weeks",
    level: "Intermediate",
    instructor: "Dr. Anna Rodriguez",
    syllabus: [
      {
        week: 1,
        title: "Data Science Fundamentals",
        topics: [
          "Data science workflow",
          "Python for data science",
          "NumPy and Pandas basics",
          "Data types and structures",
          "Jupyter notebooks"
        ],
        practicals: [
          "Setup data science environment",
          "Explore datasets with Pandas",
          "Basic data manipulation"
        ],
        examples: [
          {
            title: "Data Analysis with Pandas",
            code: `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from datetime import datetime, timedelta

# Create sample sales dataset
np.random.seed(42)
dates = pd.date_range('2023-01-01', periods=365, freq='D')
products = ['Laptop', 'Phone', 'Tablet', 'Watch', 'Headphones']
regions = ['North', 'South', 'East', 'West']

# Generate sample data
data = []
for date in dates:
    for _ in range(np.random.randint(5, 20)):
        data.append({
            'date': date,
            'product': np.random.choice(products),
            'region': np.random.choice(regions),
            'sales_amount': np.random.normal(500, 200),
            'quantity': np.random.randint(1, 10),
            'customer_age': np.random.randint(18, 70),
            'customer_satisfaction': np.random.uniform(1, 5)
        })

df = pd.DataFrame(data)
df['sales_amount'] = df['sales_amount'].clip(lower=50)  # Ensure positive sales

print("Dataset Overview:")
print(f"Shape: {df.shape}")
print(f"\\nFirst 5 rows:")
print(df.head())

print(f"\\nData Types:")
print(df.dtypes)

print(f"\\nBasic Statistics:")
print(df.describe())

# Data cleaning and preprocessing
print("\\n=== Data Cleaning ===")

# Check for missing values
print(f"Missing values:\\n{df.isnull().sum()}")

# Remove outliers using IQR method
def remove_outliers(df, column):
    Q1 = df[column].quantile(0.25)
    Q3 = df[column].quantile(0.75)
    IQR = Q3 - Q1
    lower_bound = Q1 - 1.5 * IQR
    upper_bound = Q3 + 1.5 * IQR
    return df[(df[column] >= lower_bound) & (df[column] <= upper_bound)]

df_clean = remove_outliers(df, 'sales_amount')
print(f"Removed {len(df) - len(df_clean)} outliers")

# Feature engineering
df_clean['month'] = df_clean['date'].dt.month
df_clean['day_of_week'] = df_clean['date'].dt.day_name()
df_clean['revenue'] = df_clean['sales_amount'] * df_clean['quantity']
df_clean['profit_margin'] = df_clean['revenue'] * 0.2  # Assume 20% profit margin

print("\\n=== Exploratory Data Analysis ===")

# Sales by product
product_sales = df_clean.groupby('product').agg({
    'revenue': 'sum',
    'quantity': 'sum',
    'customer_satisfaction': 'mean'
}).round(2)

print("\\nSales by Product:")
print(product_sales.sort_values('revenue', ascending=False))

# Sales by region
region_sales = df_clean.groupby('region').agg({
    'revenue': 'sum',
    'quantity': 'sum',
    'sales_amount': 'mean'
}).round(2)

print("\\nSales by Region:")
print(region_sales.sort_values('revenue', ascending=False))

# Monthly trends
monthly_sales = df_clean.groupby('month').agg({
    'revenue': 'sum',
    'quantity': 'sum'
}).round(2)

print("\\nMonthly Sales Trends:")
print(monthly_sales)

# Customer segmentation by age
df_clean['age_group'] = pd.cut(df_clean['customer_age'], 
                              bins=[0, 25, 35, 50, 100], 
                              labels=['18-25', '26-35', '36-50', '50+'])

age_analysis = df_clean.groupby('age_group').agg({
    'revenue': 'sum',
    'customer_satisfaction': 'mean',
    'sales_amount': 'mean'
}).round(2)

print("\\nCustomer Analysis by Age Group:")
print(age_analysis)

# Correlation analysis
print("\\n=== Correlation Analysis ===")
numeric_columns = ['sales_amount', 'quantity', 'customer_age', 'customer_satisfaction', 'revenue']
correlation_matrix = df_clean[numeric_columns].corr()
print("\\nCorrelation Matrix:")
print(correlation_matrix.round(3))

# Advanced analytics
print("\\n=== Advanced Analytics ===")

# Top performing products by satisfaction
top_products = df_clean.groupby('product').agg({
    'customer_satisfaction': 'mean',
    'revenue': 'sum',
    'quantity': 'sum'
}).round(2)

top_products['satisfaction_rank'] = top_products['customer_satisfaction'].rank(ascending=False)
top_products['revenue_rank'] = top_products['revenue'].rank(ascending=False)

print("\\nProduct Performance Analysis:")
print(top_products.sort_values('customer_satisfaction', ascending=False))

# Seasonal analysis
df_clean['season'] = df_clean['month'].map({
    12: 'Winter', 1: 'Winter', 2: 'Winter',
    3: 'Spring', 4: 'Spring', 5: 'Spring',
    6: 'Summer', 7: 'Summer', 8: 'Summer',
    9: 'Fall', 10: 'Fall', 11: 'Fall'
})

seasonal_analysis = df_clean.groupby('season').agg({
    'revenue': 'sum',
    'customer_satisfaction': 'mean',
    'quantity': 'sum'
}).round(2)

print("\\nSeasonal Analysis:")
print(seasonal_analysis)

# Statistical insights
print("\\n=== Statistical Insights ===")

# Revenue distribution by region and product
pivot_table = df_clean.pivot_table(
    values='revenue',
    index='region',
    columns='product',
    aggfunc='sum',
    fill_value=0
).round(2)

print("\\nRevenue Distribution (Region vs Product):")
print(pivot_table)

# Customer lifetime value estimation
customer_metrics = df_clean.groupby(['region', 'age_group']).agg({
    'revenue': 'mean',
    'customer_satisfaction': 'mean',
    'quantity': 'mean'
}).round(2)

print("\\nCustomer Metrics by Region and Age:")
print(customer_metrics)

# Export results
print("\\n=== Data Export ===")
# Save cleaned data
df_clean.to_csv('cleaned_sales_data.csv', index=False)
print("Cleaned data saved to 'cleaned_sales_data.csv'")

# Save summary statistics
summary_stats = {
    'total_revenue': df_clean['revenue'].sum(),
    'total_quantity': df_clean['quantity'].sum(),
    'avg_satisfaction': df_clean['customer_satisfaction'].mean(),
    'unique_customers': len(df_clean),
    'date_range': f"{df_clean['date'].min()} to {df_clean['date'].max()}"
}

print("\\nSummary Statistics:")
for key, value in summary_stats.items():
    print(f"{key}: {value}")`,
            explanation: "Comprehensive data analysis workflow showing data loading, cleaning, exploration, statistical analysis, and insights generation using pandas and NumPy."
          }
        ]
      },
      {
        week: 2,
        title: "Data Visualization and Statistical Analysis",
        topics: [
          "Matplotlib and Seaborn",
          "Statistical distributions",
          "Hypothesis testing",
          "Correlation and regression",
          "Interactive visualizations"
        ],
        practicals: [
          "Create data visualizations",
          "Perform statistical tests",
          "Build interactive dashboards"
        ],
        examples: [
          {
            title: "Advanced Data Visualization",
            code: `import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd
import numpy as np
from scipy import stats
import plotly.express as px
import plotly.graph_objects as go
from plotly.subplots import make_subplots

# Set style for better visualizations
plt.style.use('seaborn-v0_8')
sns.set_palette("husl")

# Generate sample dataset
np.random.seed(42)
n_samples = 1000

data = {
    'age': np.random.normal(35, 10, n_samples),
    'income': np.random.lognormal(10, 0.5, n_samples),
    'education_years': np.random.normal(14, 3, n_samples),
    'experience': np.random.normal(8, 5, n_samples),
    'satisfaction': np.random.beta(2, 1, n_samples) * 5,
    'department': np.random.choice(['Engineering', 'Sales', 'Marketing', 'HR', 'Finance'], n_samples),
    'gender': np.random.choice(['Male', 'Female'], n_samples),
    'remote_work': np.random.choice([True, False], n_samples, p=[0.3, 0.7])
}

df = pd.DataFrame(data)
df['age'] = df['age'].clip(22, 65)
df['education_years'] = df['education_years'].clip(12, 20)
df['experience'] = df['experience'].clip(0, 30)

print("=== Advanced Data Visualization ===\\n")

# 1. Distribution Analysis
fig, axes = plt.subplots(2, 3, figsize=(18, 12))
fig.suptitle('Distribution Analysis', fontsize=16, fontweight='bold')

# Age distribution
axes[0, 0].hist(df['age'], bins=30, alpha=0.7, color='skyblue', edgecolor='black')
axes[0, 0].axvline(df['age'].mean(), color='red', linestyle='--', label=f'Mean: {df["age"].mean():.1f}')
axes[0, 0].set_title('Age Distribution')
axes[0, 0].set_xlabel('Age')
axes[0, 0].set_ylabel('Frequency')
axes[0, 0].legend()

# Income distribution (log scale)
axes[0, 1].hist(np.log(df['income']), bins=30, alpha=0.7, color='lightgreen', edgecolor='black')
axes[0, 1].set_title('Income Distribution (Log Scale)')
axes[0, 1].set_xlabel('Log(Income)')
axes[0, 1].set_ylabel('Frequency')

# Satisfaction distribution
axes[0, 2].hist(df['satisfaction'], bins=20, alpha=0.7, color='orange', edgecolor='black')
axes[0, 2].set_title('Job Satisfaction Distribution')
axes[0, 2].set_xlabel('Satisfaction Score')
axes[0, 2].set_ylabel('Frequency')

# Box plots for categorical analysis
sns.boxplot(data=df, x='department', y='income', ax=axes[1, 0])
axes[1, 0].set_title('Income by Department')
axes[1, 0].tick_params(axis='x', rotation=45)

sns.boxplot(data=df, x='gender', y='satisfaction', ax=axes[1, 1])
axes[1, 1].set_title('Satisfaction by Gender')

# Violin plot for experience
sns.violinplot(data=df, x='department', y='experience', ax=axes[1, 2])
axes[1, 2].set_title('Experience by Department')
axes[1, 2].tick_params(axis='x', rotation=45)

plt.tight_layout()
plt.show()

# 2. Correlation Analysis
print("\\n=== Correlation Analysis ===")

# Calculate correlation matrix
numeric_cols = ['age', 'income', 'education_years', 'experience', 'satisfaction']
correlation_matrix = df[numeric_cols].corr()

# Create correlation heatmap
plt.figure(figsize=(10, 8))
mask = np.triu(np.ones_like(correlation_matrix, dtype=bool))
sns.heatmap(correlation_matrix, mask=mask, annot=True, cmap='coolwarm', 
            center=0, square=True, fmt='.3f', cbar_kws={"shrink": .8})
plt.title('Correlation Matrix Heatmap', fontsize=14, fontweight='bold')
plt.tight_layout()
plt.show()

# Print correlation insights
print("Strong correlations (|r| > 0.5):")
for i in range(len(correlation_matrix.columns)):
    for j in range(i+1, len(correlation_matrix.columns)):
        corr_val = correlation_matrix.iloc[i, j]
        if abs(corr_val) > 0.5:
            print(f"{correlation_matrix.columns[i]} vs {correlation_matrix.columns[j]}: {corr_val:.3f}")

# 3. Statistical Testing
print("\\n=== Statistical Testing ===")

# T-test: Income difference between genders
male_income = df[df['gender'] == 'Male']['income']
female_income = df[df['gender'] == 'Female']['income']

t_stat, p_value = stats.ttest_ind(male_income, female_income)
print(f"\\nT-test for income difference between genders:")
print(f"T-statistic: {t_stat:.3f}")
print(f"P-value: {p_value:.3f}")
print(f"Significant difference: {'Yes' if p_value < 0.05 else 'No'}")

# ANOVA: Satisfaction across departments
dept_groups = [df[df['department'] == dept]['satisfaction'] for dept in df['department'].unique()]
f_stat, p_value_anova = stats.f_oneway(*dept_groups)
print(f"\\nANOVA for satisfaction across departments:")
print(f"F-statistic: {f_stat:.3f}")
print(f"P-value: {p_value_anova:.3f}")
print(f"Significant difference: {'Yes' if p_value_anova < 0.05 else 'No'}")

# 4. Advanced Visualizations
print("\\n=== Advanced Visualizations ===")

# Pair plot for relationships
plt.figure(figsize=(12, 10))
sns.pairplot(df[numeric_cols + ['department']], hue='department', diag_kind='hist')
plt.suptitle('Pair Plot Analysis', y=1.02, fontsize=14, fontweight='bold')
plt.show()

# 5. Interactive Plotly Visualizations
print("\\nCreating interactive visualizations...")

# Interactive scatter plot
fig_scatter = px.scatter(df, x='age', y='income', color='department', 
                        size='satisfaction', hover_data=['education_years', 'experience'],
                        title='Interactive Scatter Plot: Age vs Income')
fig_scatter.show()

# Interactive box plot
fig_box = px.box(df, x='department', y='satisfaction', color='gender',
                title='Interactive Box Plot: Satisfaction by Department and Gender')
fig_box.show()

# Dashboard-style subplot
fig_dashboard = make_subplots(
    rows=2, cols=2,
    subplot_titles=('Age Distribution', 'Income by Department', 
                   'Satisfaction vs Experience', 'Remote Work Distribution'),
    specs=[[{"type": "histogram"}, {"type": "box"}],
           [{"type": "scatter"}, {"type": "pie"}]]
)

# Add histogram
fig_dashboard.add_trace(
    go.Histogram(x=df['age'], name='Age', nbinsx=30),
    row=1, col=1
)

# Add box plot
for dept in df['department'].unique():
    dept_data = df[df['department'] == dept]
    fig_dashboard.add_trace(
        go.Box(y=dept_data['income'], name=dept),
        row=1, col=2
    )

# Add scatter plot
fig_dashboard.add_trace(
    go.Scatter(x=df['experience'], y=df['satisfaction'], 
              mode='markers', name='Satisfaction vs Experience',
              marker=dict(color=df['age'], colorscale='viridis', showscale=True)),
    row=2, col=1
)

# Add pie chart
remote_counts = df['remote_work'].value_counts()
fig_dashboard.add_trace(
    go.Pie(labels=['Office', 'Remote'], values=[remote_counts[False], remote_counts[True]]),
    row=2, col=2
)

fig_dashboard.update_layout(height=800, title_text="Employee Analytics Dashboard")
fig_dashboard.show()

# 6. Statistical Summary Report
print("\\n=== Statistical Summary Report ===")

summary_report = {
    'Dataset Size': len(df),
    'Average Age': f"{df['age'].mean():.1f} years",
    'Median Income': f"${df['income'].median():,.0f}",
    'Satisfaction Score': f"{df['satisfaction'].mean():.2f}/5.0",
    'Most Common Department': df['department'].mode()[0],
    'Remote Work Percentage': f"{(df['remote_work'].sum() / len(df) * 100):.1f}%",
    'Gender Distribution': f"{(df['gender'] == 'Female').sum()}/{(df['gender'] == 'Male').sum()} (F/M)"
}

print("\\nKey Insights:")
for key, value in summary_report.items():
    print(f"• {key}: {value}")

# Export visualizations
print("\\n=== Exporting Results ===")
print("Visualizations created and displayed.")
print("Interactive plots opened in browser.")
print("Statistical analysis completed.")`,
            explanation: "Advanced data visualization and statistical analysis using matplotlib, seaborn, and plotly with hypothesis testing and interactive dashboards."
          }
        ]
      }
    ],
    features: [
      "64 comprehensive lessons",
      "16 hands-on data projects",
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
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DataScience;