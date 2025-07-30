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

const MachineLearning = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('syllabus');
  const [expandedExample, setExpandedExample] = useState(null);

  const courseDetails = {
    name: "Machine Learning & AI",
    description: "Comprehensive ML course covering algorithms, neural networks, and practical implementation with Python and scikit-learn.",
    fullDescription: "Master machine learning and artificial intelligence from fundamentals to advanced applications. Learn supervised and unsupervised learning, neural networks, deep learning, computer vision, and NLP with hands-on Python projects.",
    duration: "20 weeks",
    level: "Advanced",
    instructor: "Dr. Rachel Chen",
    syllabus: [
      {
        week: 1,
        title: "Introduction to Machine Learning",
        topics: [
          "ML fundamentals and types",
          "Python for ML (NumPy, Pandas)",
          "Data preprocessing",
          "Train/validation/test splits",
          "Performance metrics"
        ],
        practicals: [
          "Setup ML environment",
          "Data exploration and cleaning",
          "Build first ML model"
        ],
        examples: [
          {
            title: "Data Preprocessing and First ML Model",
            code: `import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score
from sklearn.datasets import load_boston
import warnings
warnings.filterwarnings('ignore')

# Load and explore dataset
def load_and_explore_data():
    """Load Boston housing dataset and perform initial exploration"""
    # Load dataset
    boston = load_boston()
    df = pd.DataFrame(boston.data, columns=boston.feature_names)
    df['PRICE'] = boston.target
    
    print("Dataset Shape:", df.shape)
    print("\\nFirst 5 rows:")
    print(df.head())
    
    print("\\nDataset Info:")
    print(df.info())
    
    print("\\nStatistical Summary:")
    print(df.describe())
    
    print("\\nMissing Values:")
    print(df.isnull().sum())
    
    return df

# Data preprocessing
def preprocess_data(df):
    """Clean and preprocess the data"""
    # Check for outliers using IQR method
    def remove_outliers(df, column):
        Q1 = df[column].quantile(0.25)
        Q3 = df[column].quantile(0.75)
        IQR = Q3 - Q1
        lower_bound = Q1 - 1.5 * IQR
        upper_bound = Q3 + 1.5 * IQR
        return df[(df[column] >= lower_bound) & (df[column] <= upper_bound)]
    
    # Remove outliers from target variable
    df_clean = remove_outliers(df, 'PRICE')
    print(f"Removed {len(df) - len(df_clean)} outliers")
    
    # Feature engineering
    df_clean['ROOMS_PER_DWELLING'] = df_clean['RM']
    df_clean['PUPIL_TEACHER_RATIO'] = df_clean['PTRATIO']
    df_clean['LOWER_STATUS_PERCENT'] = df_clean['LSTAT']
    
    # Create categorical features
    df_clean['HIGH_CRIME'] = (df_clean['CRIM'] > df_clean['CRIM'].median()).astype(int)
    df_clean['NEAR_RIVER'] = (df_clean['CHAS'] == 1).astype(int)
    
    return df_clean

# Exploratory Data Analysis
def perform_eda(df):
    """Perform exploratory data analysis"""
    plt.figure(figsize=(15, 10))
    
    # Correlation heatmap
    plt.subplot(2, 3, 1)
    correlation_matrix = df.corr()
    sns.heatmap(correlation_matrix, annot=True, cmap='coolwarm', center=0, fmt='.2f')
    plt.title('Feature Correlation Matrix')
    
    # Price distribution
    plt.subplot(2, 3, 2)
    plt.hist(df['PRICE'], bins=30, alpha=0.7, color='skyblue')
    plt.xlabel('Price')
    plt.ylabel('Frequency')
    plt.title('Price Distribution')
    
    # Price vs Rooms
    plt.subplot(2, 3, 3)
    plt.scatter(df['RM'], df['PRICE'], alpha=0.6)
    plt.xlabel('Average Rooms per Dwelling')
    plt.ylabel('Price')
    plt.title('Price vs Rooms')
    
    # Price vs Crime Rate
    plt.subplot(2, 3, 4)
    plt.scatter(df['CRIM'], df['PRICE'], alpha=0.6, color='red')
    plt.xlabel('Crime Rate')
    plt.ylabel('Price')
    plt.title('Price vs Crime Rate')
    
    # Box plot for categorical features
    plt.subplot(2, 3, 5)
    sns.boxplot(x='HIGH_CRIME', y='PRICE', data=df)
    plt.title('Price by Crime Level')
    
    plt.subplot(2, 3, 6)
    sns.boxplot(x='NEAR_RIVER', y='PRICE', data=df)
    plt.title('Price by River Proximity')
    
    plt.tight_layout()
    plt.show()
    
    # Feature importance analysis
    features_to_analyze = ['RM', 'LSTAT', 'PTRATIO', 'CRIM', 'NOX']
    correlations = df[features_to_analyze + ['PRICE']].corr()['PRICE'].abs().sort_values(ascending=False)
    
    print("\\nFeature Correlations with Price:")
    for feature, corr in correlations.items():
        if feature != 'PRICE':
            print(f"{feature}: {corr:.3f}")

# Build and evaluate ML model
def build_ml_model(df):
    """Build and evaluate a machine learning model"""
    # Prepare features and target
    feature_columns = ['RM', 'LSTAT', 'PTRATIO', 'CRIM', 'NOX', 'DIS', 'AGE', 'TAX']
    X = df[feature_columns]
    y = df['PRICE']
    
    # Split the data
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42
    )
    
    # Scale the features
    scaler = StandardScaler()
    X_train_scaled = scaler.fit_transform(X_train)
    X_test_scaled = scaler.transform(X_test)
    
    # Train the model
    model = LinearRegression()
    model.fit(X_train_scaled, y_train)
    
    # Make predictions
    y_train_pred = model.predict(X_train_scaled)
    y_test_pred = model.predict(X_test_scaled)
    
    # Evaluate the model
    train_mse = mean_squared_error(y_train, y_train_pred)
    test_mse = mean_squared_error(y_test, y_test_pred)
    train_r2 = r2_score(y_train, y_train_pred)
    test_r2 = r2_score(y_test, y_test_pred)
    
    print("\\nModel Performance:")
    print(f"Training MSE: {train_mse:.2f}")
    print(f"Testing MSE: {test_mse:.2f}")
    print(f"Training R²: {train_r2:.3f}")
    print(f"Testing R²: {test_r2:.3f}")
    
    # Feature importance
    feature_importance = pd.DataFrame({
        'feature': feature_columns,
        'coefficient': model.coef_,
        'abs_coefficient': np.abs(model.coef_)
    }).sort_values('abs_coefficient', ascending=False)
    
    print("\\nFeature Importance (by coefficient magnitude):")
    for _, row in feature_importance.iterrows():
        print(f"{row['feature']}: {row['coefficient']:.3f}")
    
    # Visualize predictions
    plt.figure(figsize=(12, 4))
    
    plt.subplot(1, 3, 1)
    plt.scatter(y_test, y_test_pred, alpha=0.6)
    plt.plot([y_test.min(), y_test.max()], [y_test.min(), y_test.max()], 'r--', lw=2)
    plt.xlabel('Actual Price')
    plt.ylabel('Predicted Price')
    plt.title('Actual vs Predicted Prices')
    
    plt.subplot(1, 3, 2)
    residuals = y_test - y_test_pred
    plt.scatter(y_test_pred, residuals, alpha=0.6)
    plt.axhline(y=0, color='r', linestyle='--')
    plt.xlabel('Predicted Price')
    plt.ylabel('Residuals')
    plt.title('Residual Plot')
    
    plt.subplot(1, 3, 3)
    plt.hist(residuals, bins=20, alpha=0.7, color='skyblue')
    plt.xlabel('Residuals')
    plt.ylabel('Frequency')
    plt.title('Residual Distribution')
    
    plt.tight_layout()
    plt.show()
    
    return model, scaler, feature_columns

# Model prediction function
def make_predictions(model, scaler, feature_columns, new_data):
    """Make predictions on new data"""
    # Example new data point
    sample_data = pd.DataFrame({
        'RM': [6.5],      # Average rooms
        'LSTAT': [10.0],  # Lower status percentage
        'PTRATIO': [15.0], # Pupil-teacher ratio
        'CRIM': [0.5],    # Crime rate
        'NOX': [0.4],     # Nitric oxide concentration
        'DIS': [4.0],     # Distance to employment centers
        'AGE': [50.0],    # Age of housing
        'TAX': [300.0]    # Property tax rate
    })
    
    # Scale the data
    sample_scaled = scaler.transform(sample_data[feature_columns])
    
    # Make prediction
    prediction = model.predict(sample_scaled)
    
    print(f"\\nPrediction for sample house:")
    print(f"Predicted Price: \${prediction[0]:.2f}k")
    
    return prediction

# Cross-validation
def perform_cross_validation(X, y):
    """Perform cross-validation to assess model stability"""
    from sklearn.model_selection import cross_val_score
    
    model = LinearRegression()
    scaler = StandardScaler()
    
    # Scale features
    X_scaled = scaler.fit_transform(X)
    
    # Perform 5-fold cross-validation
    cv_scores = cross_val_score(model, X_scaled, y, cv=5, scoring='r2')
    
    print(f"\\nCross-Validation Results:")
    print(f"CV Scores: {cv_scores}")
    print(f"Mean CV Score: {cv_scores.mean():.3f} (+/- {cv_scores.std() * 2:.3f})")

# Main execution
if __name__ == "__main__":
    print("=== Machine Learning Pipeline Demo ===\\n")
    
    # Load and explore data
    df = load_and_explore_data()
    
    # Preprocess data
    df_clean = preprocess_data(df)
    
    # Perform EDA
    perform_eda(df_clean)
    
    # Build and evaluate model
    model, scaler, feature_columns = build_ml_model(df_clean)
    
    # Make sample predictions
    make_predictions(model, scaler, feature_columns, None)
    
    # Cross-validation
    X = df_clean[feature_columns]
    y = df_clean['PRICE']
    perform_cross_validation(X, y)
    
    print("\\n=== Pipeline Complete ===")`,
            explanation: "Complete machine learning pipeline showing data preprocessing, EDA, model training, evaluation, and prediction with real-world dataset."
          }
        ]
      },
      {
        week: 2,
        title: "Supervised Learning Algorithms",
        topics: [
          "Linear and logistic regression",
          "Decision trees and random forests",
          "Support Vector Machines",
          "k-Nearest Neighbors",
          "Model evaluation and selection"
        ],
        practicals: [
          "Implement classification models",
          "Compare algorithm performance",
          "Hyperparameter tuning"
        ],
        examples: [
          {
            title: "Classification Algorithms Comparison",
            code: `import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.datasets import make_classification, load_iris
from sklearn.model_selection import train_test_split, cross_val_score, GridSearchCV
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.svm import SVC
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import classification_report, confusion_matrix, accuracy_score
from sklearn.metrics import roc_curve, auc, roc_auc_score
import warnings
warnings.filterwarnings('ignore')

class MLClassifierComparison:
    def __init__(self):
        self.models = {}
        self.results = {}
        self.X_train = None
        self.X_test = None
        self.y_train = None
        self.y_test = None
        self.scaler = StandardScaler()
    
    def load_data(self, dataset_type='iris'):
        """Load and prepare dataset"""
        if dataset_type == 'iris':
            # Load Iris dataset
            iris = load_iris()
            X, y = iris.data, iris.target
            feature_names = iris.feature_names
            target_names = iris.target_names
        else:
            # Generate synthetic dataset
            X, y = make_classification(
                n_samples=1000,
                n_features=20,
                n_informative=10,
                n_redundant=10,
                n_clusters_per_class=1,
                random_state=42
            )
            feature_names = [f'feature_{i}' for i in range(X.shape[1])]
            target_names = [f'class_{i}' for i in range(len(np.unique(y)))]
        
        # Split the data
        self.X_train, self.X_test, self.y_train, self.y_test = train_test_split(
            X, y, test_size=0.2, random_state=42, stratify=y
        )
        
        # Scale the features
        self.X_train_scaled = self.scaler.fit_transform(self.X_train)
        self.X_test_scaled = self.scaler.transform(self.X_test)
        
        print(f"Dataset loaded: {X.shape[0]} samples, {X.shape[1]} features")
        print(f"Classes: {len(np.unique(y))}")
        print(f"Training set: {self.X_train.shape[0]} samples")
        print(f"Test set: {self.X_test.shape[0]} samples")
        
        return feature_names, target_names
    
    def initialize_models(self):
        """Initialize different classification models"""
        self.models = {
            'Logistic Regression': LogisticRegression(random_state=42, max_iter=1000),
            'Decision Tree': DecisionTreeClassifier(random_state=42),
            'Random Forest': RandomForestClassifier(random_state=42, n_estimators=100),
            'SVM': SVC(random_state=42, probability=True),
            'K-Nearest Neighbors': KNeighborsClassifier()
        }
        
        print(f"Initialized {len(self.models)} models")
    
    def train_and_evaluate_models(self):
        """Train and evaluate all models"""
        self.results = {}
        
        for name, model in self.models.items():
            print(f"\\nTraining {name}...")
            
            # Use scaled data for models that benefit from it
            if name in ['Logistic Regression', 'SVM', 'K-Nearest Neighbors']:
                X_train_use = self.X_train_scaled
                X_test_use = self.X_test_scaled
            else:
                X_train_use = self.X_train
                X_test_use = self.X_test
            
            # Train the model
            model.fit(X_train_use, self.y_train)
            
            # Make predictions
            y_pred = model.predict(X_test_use)
            y_pred_proba = model.predict_proba(X_test_use) if hasattr(model, 'predict_proba') else None
            
            # Calculate metrics
            accuracy = accuracy_score(self.y_test, y_pred)
            
            # Cross-validation score
            cv_scores = cross_val_score(model, X_train_use, self.y_train, cv=5)
            
            # Store results
            self.results[name] = {
                'model': model,
                'accuracy': accuracy,
                'cv_mean': cv_scores.mean(),
                'cv_std': cv_scores.std(),
                'y_pred': y_pred,
                'y_pred_proba': y_pred_proba,
                'classification_report': classification_report(self.y_test, y_pred)
            }
            
            print(f"Accuracy: {accuracy:.4f}")
            print(f"CV Score: {cv_scores.mean():.4f} (+/- {cv_scores.std() * 2:.4f})")
    
    def hyperparameter_tuning(self, model_name='Random Forest'):
        """Perform hyperparameter tuning for a specific model"""
        print(f"\\nPerforming hyperparameter tuning for {model_name}...")
        
        if model_name == 'Random Forest':
            model = RandomForestClassifier(random_state=42)
            param_grid = {
                'n_estimators': [50, 100, 200],
                'max_depth': [None, 10, 20],
                'min_samples_split': [2, 5, 10],
                'min_samples_leaf': [1, 2, 4]
            }
            X_use = self.X_train
        elif model_name == 'SVM':
            model = SVC(random_state=42, probability=True)
            param_grid = {
                'C': [0.1, 1, 10, 100],
                'gamma': ['scale', 'auto', 0.001, 0.01, 0.1, 1],
                'kernel': ['rbf', 'poly', 'sigmoid']
            }
            X_use = self.X_train_scaled
        else:
            print(f"Hyperparameter tuning not implemented for {model_name}")
            return
        
        # Grid search
        grid_search = GridSearchCV(
            model, param_grid, cv=5, scoring='accuracy', n_jobs=-1, verbose=1
        )
        grid_search.fit(X_use, self.y_train)
        
        print(f"Best parameters: {grid_search.best_params_}")
        print(f"Best cross-validation score: {grid_search.best_score_:.4f}")
        
        # Update the model with best parameters
        self.models[model_name] = grid_search.best_estimator_
        
        return grid_search.best_estimator_
    
    def plot_results(self):
        """Plot comparison results"""
        # Prepare data for plotting
        model_names = list(self.results.keys())
        accuracies = [self.results[name]['accuracy'] for name in model_names]
        cv_means = [self.results[name]['cv_mean'] for name in model_names]
        cv_stds = [self.results[name]['cv_std'] for name in model_names]
        
        # Create subplots
        fig, axes = plt.subplots(2, 2, figsize=(15, 12))
        
        # Accuracy comparison
        axes[0, 0].bar(model_names, accuracies, color='skyblue', alpha=0.7)
        axes[0, 0].set_title('Test Accuracy Comparison')
        axes[0, 0].set_ylabel('Accuracy')
        axes[0, 0].tick_params(axis='x', rotation=45)
        
        # Cross-validation scores
        axes[0, 1].errorbar(model_names, cv_means, yerr=cv_stds, 
                           fmt='o', capsize=5, capthick=2)
        axes[0, 1].set_title('Cross-Validation Scores')
        axes[0, 1].set_ylabel('CV Score')
        axes[0, 1].tick_params(axis='x', rotation=45)
        
        # Confusion matrix for best model
        best_model_name = max(self.results.keys(), key=lambda x: self.results[x]['accuracy'])
        best_y_pred = self.results[best_model_name]['y_pred']
        cm = confusion_matrix(self.y_test, best_y_pred)
        
        sns.heatmap(cm, annot=True, fmt='d', cmap='Blues', ax=axes[1, 0])
        axes[1, 0].set_title(f'Confusion Matrix - {best_model_name}')
        axes[1, 0].set_xlabel('Predicted')
        axes[1, 0].set_ylabel('Actual')
        
        # ROC curves (for binary classification)
        if len(np.unique(self.y_test)) == 2:
            for name in model_names:
                if self.results[name]['y_pred_proba'] is not None:
                    y_proba = self.results[name]['y_pred_proba'][:, 1]
                    fpr, tpr, _ = roc_curve(self.y_test, y_proba)
                    auc_score = auc(fpr, tpr)
                    axes[1, 1].plot(fpr, tpr, label=f'{name} (AUC = {auc_score:.2f})')
            
            axes[1, 1].plot([0, 1], [0, 1], 'k--', label='Random')
            axes[1, 1].set_xlabel('False Positive Rate')
            axes[1, 1].set_ylabel('True Positive Rate')
            axes[1, 1].set_title('ROC Curves')
            axes[1, 1].legend()
        else:
            # For multiclass, show feature importance if available
            best_model = self.results[best_model_name]['model']
            if hasattr(best_model, 'feature_importances_'):
                importances = best_model.feature_importances_
                indices = np.argsort(importances)[::-1][:10]  # Top 10 features
                
                axes[1, 1].bar(range(len(indices)), importances[indices])
                axes[1, 1].set_title(f'Feature Importance - {best_model_name}')
                axes[1, 1].set_xlabel('Feature Index')
                axes[1, 1].set_ylabel('Importance')
        
        plt.tight_layout()
        plt.show()
    
    def print_detailed_results(self):
        """Print detailed results for all models"""
        print("\\n" + "="*50)
        print("DETAILED RESULTS")
        print("="*50)
        
        for name, result in self.results.items():
            print(f"\\n{name}:")
            print("-" * len(name))
            print(f"Test Accuracy: {result['accuracy']:.4f}")
            print(f"CV Score: {result['cv_mean']:.4f} (+/- {result['cv_std'] * 2:.4f})")
            print("\\nClassification Report:")
            print(result['classification_report'])
    
    def feature_importance_analysis(self):
        """Analyze feature importance for tree-based models"""
        tree_models = ['Decision Tree', 'Random Forest']
        
        plt.figure(figsize=(12, 6))
        
        for i, model_name in enumerate(tree_models):
            if model_name in self.results:
                model = self.results[model_name]['model']
                if hasattr(model, 'feature_importances_'):
                    importances = model.feature_importances_
                    indices = np.argsort(importances)[::-1]
                    
                    plt.subplot(1, 2, i+1)
                    plt.bar(range(len(importances)), importances[indices])
                    plt.title(f'Feature Importance - {model_name}')
                    plt.xlabel('Feature Index')
                    plt.ylabel('Importance')
        
        plt.tight_layout()
        plt.show()

# Usage example
def run_classification_comparison():
    """Run the complete classification comparison"""
    # Initialize the comparison class
    classifier_comp = MLClassifierComparison()
    
    # Load data
    feature_names, target_names = classifier_comp.load_data('iris')
    
    # Initialize models
    classifier_comp.initialize_models()
    
    # Train and evaluate models
    classifier_comp.train_and_evaluate_models()
    
    # Perform hyperparameter tuning
    classifier_comp.hyperparameter_tuning('Random Forest')
    
    # Re-evaluate with tuned model
    classifier_comp.train_and_evaluate_models()
    
    # Plot results
    classifier_comp.plot_results()
    
    # Print detailed results
    classifier_comp.print_detailed_results()
    
    # Feature importance analysis
    classifier_comp.feature_importance_analysis()

if __name__ == "__main__":
    run_classification_comparison()`,
            explanation: "Comprehensive comparison of classification algorithms including model training, evaluation, hyperparameter tuning, and visualization of results."
          }
        ]
      }
    ],
    features: [
      "80 comprehensive lessons",
      "20 hands-on ML projects",
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

export default MachineLearning;