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
  FaChartLine
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
    introduction: {
      overview: "Machine Learning (ML) is a subset of Artificial Intelligence that enables systems to automatically learn and improve from experience without being explicitly programmed. It focuses on developing algorithms that can access data and use it to learn patterns and make predictions or decisions.",
      keyFeatures: [
        "Automated Learning - Systems improve performance through experience",
        "Pattern Recognition - Identify complex patterns in large datasets",
        "Predictive Analytics - Make accurate predictions about future events",
        "Data-Driven Decisions - Base decisions on statistical evidence",
        "Scalability - Handle massive amounts of data efficiently",
        "Adaptability - Adjust to new data and changing conditions",
        "Cross-Domain Applications - Apply to various industries and problems",
        "Continuous Improvement - Performance enhances with more data"
      ],
      learningTypes: {
        supervised: {
          title: "Supervised Learning",
          description: "Learn from labeled data where input-output pairs are provided",
          examples: ["Classification (spam detection)", "Regression (price prediction)", "Image recognition", "Medical diagnosis"],
          algorithms: ["Linear Regression", "Logistic Regression", "Decision Trees", "Random Forest", "SVM", "Neural Networks"]
        },
        unsupervised: {
          title: "Unsupervised Learning",
          description: "Find hidden patterns in data without labeled examples",
          examples: ["Customer segmentation", "Anomaly detection", "Market basket analysis", "Gene sequencing"],
          algorithms: ["K-Means Clustering", "Hierarchical Clustering", "PCA", "DBSCAN", "Association Rules"]
        },
        semisupervised: {
          title: "Semi-Supervised Learning",
          description: "Combine small amounts of labeled data with large amounts of unlabeled data",
          examples: ["Web page classification", "Speech recognition", "Protein sequence classification"],
          algorithms: ["Self-training", "Co-training", "Graph-based methods", "Generative models"]
        },
        reinforcement: {
          title: "Reinforcement Learning",
          description: "Learn through interaction with environment using rewards and punishments",
          examples: ["Game playing (Chess, Go)", "Autonomous vehicles", "Trading algorithms", "Robotics"],
          algorithms: ["Q-Learning", "Policy Gradients", "Actor-Critic", "Deep Q-Networks (DQN)"]
        }
      },
      mathematicalFoundations: {
        linearAlgebra: {
          title: "Linear Algebra",
          concepts: [
            "Vectors and vector operations",
            "Matrices and matrix operations",
            "Eigenvalues and eigenvectors",
            "Matrix decomposition (SVD, PCA)",
            "Dot products and norms"
          ],
          applications: ["Feature representation", "Dimensionality reduction", "Neural network computations"]
        },
        calculus: {
          title: "Calculus",
          concepts: [
            "Derivatives and partial derivatives",
            "Gradients and directional derivatives",
            "Chain rule for backpropagation",
            "Optimization and critical points",
            "Multivariable calculus"
          ],
          applications: ["Gradient descent", "Neural network training", "Cost function optimization"]
        },
        probability: {
          title: "Probability & Statistics",
          concepts: [
            "Probability distributions",
            "Bayes' theorem",
            "Central limit theorem",
            "Hypothesis testing",
            "Confidence intervals"
          ],
          applications: ["Naive Bayes classifier", "Bayesian inference", "Statistical significance testing"]
        },
        optimization: {
          title: "Optimization",
          concepts: [
            "Gradient descent variants",
            "Convex optimization",
            "Lagrange multipliers",
            "Stochastic optimization",
            "Regularization techniques"
          ],
          applications: ["Model training", "Hyperparameter tuning", "Feature selection"]
        }
      },
      algorithms: {
        gradientDescent: {
          title: "Gradient Descent Algorithm",
          description: "An optimization algorithm used to minimize cost functions by iteratively moving towards the steepest descent",
          steps: [
            "Initialize parameters randomly",
            "Calculate cost function value",
            "Compute gradients of cost function",
            "Update parameters using learning rate",
            "Repeat until convergence",
            "Return optimized parameters"
          ],
          timeComplexity: "O(n*m*iterations) where n=samples, m=features",
          spaceComplexity: "O(m) for storing parameters and gradients"
        },
        kMeans: {
          title: "K-Means Clustering Algorithm",
          description: "Unsupervised algorithm that partitions data into k clusters by minimizing within-cluster sum of squares",
          steps: [
            "Choose number of clusters (k)",
            "Initialize k centroids randomly",
            "Assign each point to nearest centroid",
            "Update centroids to cluster means",
            "Repeat until centroids don't change",
            "Return final clusters and centroids"
          ],
          timeComplexity: "O(n*k*i*d) where n=points, k=clusters, i=iterations, d=dimensions",
          spaceComplexity: "O(n*d + k*d) for storing data points and centroids"
        },
        decisionTree: {
          title: "Decision Tree Algorithm",
          description: "Supervised learning algorithm that creates a tree-like model of decisions based on feature values",
          steps: [
            "Start with entire dataset at root",
            "Find best feature to split on (using Gini/Entropy)",
            "Split dataset based on feature threshold",
            "Recursively apply to child nodes",
            "Stop when stopping criteria met",
            "Create leaf nodes with predictions"
          ],
          timeComplexity: "O(n*m*log(n)) for training, O(log(n)) for prediction",
          spaceComplexity: "O(n) for storing the tree structure"
        }
      },
      applications: {
        healthcare: [
          "Medical image analysis and diagnosis",
          "Drug discovery and development",
          "Personalized treatment recommendations",
          "Epidemic prediction and tracking"
        ],
        finance: [
          "Fraud detection and prevention",
          "Algorithmic trading strategies",
          "Credit scoring and risk assessment",
          "Portfolio optimization"
        ],
        technology: [
          "Recommendation systems",
          "Natural language processing",
          "Computer vision applications",
          "Autonomous systems and robotics"
        ],
        business: [
          "Customer segmentation and targeting",
          "Demand forecasting",
          "Price optimization",
          "Supply chain optimization"
        ]
      }
    },
    syllabus: [
      {
        week: 1,
        title: "Introduction to Machine Learning",
        topics: [
          "Definition and types of ML",
          "Supervised vs Unsupervised vs Reinforcement Learning",
          "Python for ML (NumPy, Pandas, Matplotlib)",
          "Data preprocessing and cleaning",
          "Train/validation/test splits",
          "Performance metrics overview"
        ],
        practicals: [
          "Setup ML environment (Anaconda, Jupyter)",
          "Data exploration with Pandas",
          "Build first linear regression model",
          "Implement basic data visualization"
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
        title: "Mathematical Foundations",
        topics: [
          "Linear Algebra: Vectors, matrices, eigenvalues",
          "Calculus: Derivatives, gradients, chain rule",
          "Probability & Statistics: Distributions, Bayes theorem",
          "Optimization: Gradient descent, cost functions",
          "Information theory basics"
        ],
        practicals: [
          "Implement gradient descent from scratch",
          "Matrix operations with NumPy",
          "Probability distributions visualization",
          "Optimization algorithms comparison"
        ],
        examples: []
      },
      {
        week: 3,
        title: "Supervised Learning - Regression",
        topics: [
          "Linear Regression: Simple and Multiple",
          "Polynomial Regression",
          "Regularization: Ridge, Lasso, Elastic Net",
          "Regression metrics: MSE, RMSE, MAE, R²",
          "Feature scaling and normalization"
        ],
        practicals: [
          "Implement linear regression from scratch",
          "Compare regularization techniques",
          "Feature engineering for regression",
          "Cross-validation implementation"
        ],
        examples: []
      },
      {
        week: 4,
        title: "Supervised Learning - Classification",
        topics: [
          "Logistic Regression",
          "k-Nearest Neighbors (KNN)",
          "Support Vector Machines (SVM)",
          "Naive Bayes Classifier",
          "Classification metrics: Accuracy, Precision, Recall, F1"
        ],
        practicals: [
          "Build multi-class classification models",
          "ROC curve and AUC analysis",
          "Confusion matrix interpretation",
          "Handle imbalanced datasets"
        ],
        examples: []
      },
      {
        week: 5,
        title: "Tree-Based Methods",
        topics: [
          "Decision Trees: ID3, C4.5, CART",
          "Random Forests",
          "Gradient Boosting: XGBoost, LightGBM",
          "Feature importance analysis",
          "Ensemble methods overview"
        ],
        practicals: [
          "Build decision tree from scratch",
          "Random forest implementation",
          "XGBoost hyperparameter tuning",
          "Feature selection techniques"
        ],
        examples: []
      },
      {
        week: 6,
        title: "Unsupervised Learning - Clustering",
        topics: [
          "K-Means Clustering",
          "Hierarchical Clustering",
          "DBSCAN and density-based clustering",
          "Gaussian Mixture Models",
          "Clustering evaluation metrics"
        ],
        practicals: [
          "Implement K-means from scratch",
          "Customer segmentation project",
          "Anomaly detection with clustering",
          "Optimal cluster number selection"
        ],
        examples: [
          {
            title: "K-Means Clustering Implementation",
            code: `import numpy as np
import matplotlib.pyplot as plt
from sklearn.datasets import make_blobs, make_circles
from sklearn.cluster import KMeans, DBSCAN
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import silhouette_score, adjusted_rand_score
import seaborn as sns

class KMeansFromScratch:
    def __init__(self, k=3, max_iters=100, random_state=42):
        self.k = k
        self.max_iters = max_iters
        self.random_state = random_state
        
    def initialize_centroids(self, X):
        np.random.seed(self.random_state)
        n_samples, n_features = X.shape
        centroids = np.zeros((self.k, n_features))
        
        for i in range(self.k):
            centroid = X[np.random.choice(n_samples)]
            centroids[i] = centroid
            
        return centroids
    
    def closest_centroid(self, X, centroids):
        distances = np.sqrt(((X - centroids[:, np.newaxis])**2).sum(axis=2))
        return np.argmin(distances, axis=0)
    
    def move_centroids(self, X, closest, centroids):
        new_centroids = np.zeros_like(centroids)
        
        for k in range(self.k):
            if np.sum(closest == k) > 0:
                new_centroids[k] = X[closest == k].mean(axis=0)
            else:
                new_centroids[k] = centroids[k]
                
        return new_centroids
    
    def fit(self, X):
        self.centroids = self.initialize_centroids(X)
        
        for i in range(self.max_iters):
            old_centroids = self.centroids.copy()
            
            closest = self.closest_centroid(X, self.centroids)
            self.centroids = self.move_centroids(X, closest, self.centroids)
            
            if np.allclose(old_centroids, self.centroids):
                break
                
        self.labels_ = closest
        return self
    
    def predict(self, X):
        return self.closest_centroid(X, self.centroids)

def demonstrate_clustering():
    print("=== Clustering Algorithms Demo ===")
    
    # Generate sample datasets
    # Dataset 1: Well-separated blobs
    X1, y1_true = make_blobs(n_samples=300, centers=4, cluster_std=0.60, random_state=0)
    
    # Dataset 2: Circles (challenging for K-means)
    X2, y2_true = make_circles(n_samples=300, factor=0.5, noise=0.05, random_state=0)
    
    # Dataset 3: Anisotropic blobs
    X3 = np.random.randn(300, 2)
    transformation = [[0.6, -0.6], [-0.4, 0.8]]
    X3 = np.dot(X3, transformation)
    
    datasets = [(X1, y1_true, "Blobs"), (X2, y2_true, "Circles"), (X3, None, "Anisotropic")]
    
    fig, axes = plt.subplots(3, 4, figsize=(20, 15))
    
    for i, (X, y_true, name) in enumerate(datasets):
        # Standardize features
        scaler = StandardScaler()
        X_scaled = scaler.fit_transform(X)
        
        # Original data
        axes[i, 0].scatter(X[:, 0], X[:, 1], c=y_true if y_true is not None else 'blue', alpha=0.6)
        axes[i, 0].set_title(f'{name} - Original Data')
        
        # K-Means from scratch
        kmeans_scratch = KMeansFromScratch(k=4 if name == "Blobs" else 2)
        kmeans_scratch.fit(X_scaled)
        
        axes[i, 1].scatter(X[:, 0], X[:, 1], c=kmeans_scratch.labels_, alpha=0.6)
        centroids_original = scaler.inverse_transform(kmeans_scratch.centroids)
        axes[i, 1].scatter(centroids_original[:, 0], centroids_original[:, 1], 
                          c='red', marker='x', s=200, linewidths=3)
        axes[i, 1].set_title(f'{name} - K-Means (Scratch)')
        
        # Scikit-learn K-Means
        kmeans_sklearn = KMeans(n_clusters=4 if name == "Blobs" else 2, random_state=42)
        kmeans_labels = kmeans_sklearn.fit_predict(X_scaled)
        
        axes[i, 2].scatter(X[:, 0], X[:, 1], c=kmeans_labels, alpha=0.6)
        centroids_sklearn = scaler.inverse_transform(kmeans_sklearn.cluster_centers_)
        axes[i, 2].scatter(centroids_sklearn[:, 0], centroids_sklearn[:, 1], 
                          c='red', marker='x', s=200, linewidths=3)
        axes[i, 2].set_title(f'{name} - K-Means (Sklearn)')
        
        # DBSCAN
        dbscan = DBSCAN(eps=0.3, min_samples=10)
        dbscan_labels = dbscan.fit_predict(X_scaled)
        
        axes[i, 3].scatter(X[:, 0], X[:, 1], c=dbscan_labels, alpha=0.6)
        axes[i, 3].set_title(f'{name} - DBSCAN')
        
        # Print metrics
        if y_true is not None:
            print(f"\n{name} Dataset Metrics:")
            print(f"K-Means ARI: {adjusted_rand_score(y_true, kmeans_labels):.3f}")
            print(f"DBSCAN ARI: {adjusted_rand_score(y_true, dbscan_labels):.3f}")
        
        print(f"K-Means Silhouette: {silhouette_score(X_scaled, kmeans_labels):.3f}")
        if len(set(dbscan_labels)) > 1:
            print(f"DBSCAN Silhouette: {silhouette_score(X_scaled, dbscan_labels):.3f}")
    
    plt.tight_layout()
    plt.show()
    
    # Elbow method for optimal K
    print("\nElbow Method for Optimal K:")
    X, _ = make_blobs(n_samples=300, centers=4, cluster_std=0.60, random_state=0)
    X_scaled = StandardScaler().fit_transform(X)
    
    K_range = range(1, 11)
    distortions = []
    silhouette_scores = []
    
    for k in K_range:
        kmeans = KMeans(n_clusters=k, random_state=42)
        kmeans.fit(X_scaled)
        distortions.append(kmeans.inertia_)
        
        if k > 1:
            silhouette_scores.append(silhouette_score(X_scaled, kmeans.labels_))
    
    plt.figure(figsize=(12, 5))
    
    plt.subplot(1, 2, 1)
    plt.plot(K_range, distortions, 'bo-')
    plt.xlabel('Number of Clusters (K)')
    plt.ylabel('Distortion (Inertia)')
    plt.title('Elbow Method')
    plt.grid(True)
    
    plt.subplot(1, 2, 2)
    plt.plot(range(2, 11), silhouette_scores, 'ro-')
    plt.xlabel('Number of Clusters (K)')
    plt.ylabel('Silhouette Score')
    plt.title('Silhouette Analysis')
    plt.grid(True)
    
    plt.tight_layout()
    plt.show()
    
    print("\n=== Clustering Demo Complete ===")

if __name__ == "__main__":
    demonstrate_clustering()`,
            explanation: "Complete clustering implementation with K-means from scratch, comparison with DBSCAN, and elbow method for optimal cluster selection."
          }
        ]
      },
      {
        week: 7,
        title: "Dimensionality Reduction",
        topics: [
          "Principal Component Analysis (PCA)",
          "Linear Discriminant Analysis (LDA)",
          "t-SNE for visualization",
          "Feature selection techniques",
          "Curse of dimensionality"
        ],
        practicals: [
          "PCA implementation and visualization",
          "Dimensionality reduction for image data",
          "Feature selection algorithms",
          "High-dimensional data analysis"
        ],
        examples: []
      },
      {
        week: 8,
        title: "Model Evaluation and Validation",
        topics: [
          "Cross-validation techniques",
          "Bias-variance tradeoff",
          "Overfitting and underfitting",
          "Learning curves analysis",
          "Statistical significance testing"
        ],
        practicals: [
          "Implement k-fold cross-validation",
          "Bias-variance decomposition",
          "Model selection strategies",
          "Performance comparison frameworks"
        ],
        examples: []
      },
      {
        week: 9,
        title: "Feature Engineering",
        topics: [
          "Feature selection methods",
          "Feature extraction techniques",
          "Encoding categorical variables",
          "Handling missing values",
          "Feature scaling and transformation"
        ],
        practicals: [
          "Automated feature engineering",
          "Text feature extraction",
          "Time series feature creation",
          "Feature engineering pipeline"
        ],
        examples: []
      },
      {
        week: 10,
        title: "Deep Learning Fundamentals",
        topics: [
          "Neural Networks: Perceptron to MLP",
          "Activation functions",
          "Backpropagation algorithm",
          "Deep Neural Networks (DNNs)",
          "Regularization in deep learning"
        ],
        practicals: [
          "Build neural network from scratch",
          "Implement backpropagation",
          "Deep learning with TensorFlow/PyTorch",
          "Neural network visualization"
        ],
        examples: []
      },
      {
        week: 11,
        title: "Convolutional Neural Networks",
        topics: [
          "CNN architecture and components",
          "Convolution and pooling layers",
          "Image classification with CNNs",
          "Transfer learning",
          "Computer vision applications"
        ],
        practicals: [
          "Build CNN for image classification",
          "Transfer learning with pre-trained models",
          "Object detection basics",
          "Image data augmentation"
        ],
        examples: []
      },
      {
        week: 12,
        title: "Recurrent Neural Networks",
        topics: [
          "RNN architecture and applications",
          "LSTM and GRU networks",
          "Sequence-to-sequence models",
          "Time series forecasting",
          "Text processing with RNNs"
        ],
        practicals: [
          "Build RNN for sequence prediction",
          "LSTM for time series forecasting",
          "Text generation with RNNs",
          "Sentiment analysis project"
        ],
        examples: []
      },
      {
        week: 13,
        title: "Natural Language Processing",
        topics: [
          "Text preprocessing and tokenization",
          "Bag of Words and TF-IDF",
          "Word embeddings: Word2Vec, GloVe",
          "Named Entity Recognition",
          "Transformer models introduction"
        ],
        practicals: [
          "Text classification pipeline",
          "Word embedding visualization",
          "NER system implementation",
          "Document similarity analysis"
        ],
        examples: []
      },
      {
        week: 14,
        title: "Time Series Analysis",
        topics: [
          "Time series components",
          "Stationarity and differencing",
          "ARIMA models",
          "Prophet forecasting",
          "LSTM for time series"
        ],
        practicals: [
          "Time series decomposition",
          "ARIMA model implementation",
          "Prophet forecasting project",
          "Multi-variate time series analysis"
        ],
        examples: []
      },
      {
        week: 15,
        title: "Reinforcement Learning",
        topics: [
          "RL fundamentals: Agent, Environment, Reward",
          "Markov Decision Processes",
          "Q-Learning algorithm",
          "Deep Q-Networks (DQN)",
          "Policy gradient methods"
        ],
        practicals: [
          "Q-learning implementation",
          "Game playing with RL",
          "DQN for Atari games",
          "Multi-armed bandit problems"
        ],
        examples: []
      },
      {
        week: 16,
        title: "Advanced Topics",
        topics: [
          "Generative Adversarial Networks (GANs)",
          "Autoencoders and variational autoencoders",
          "Attention mechanisms",
          "Transformer architecture",
          "BERT and GPT models overview"
        ],
        practicals: [
          "Build simple GAN",
          "Autoencoder for dimensionality reduction",
          "Attention visualization",
          "Fine-tune pre-trained transformers"
        ],
        examples: []
      },
      {
        week: 17,
        title: "Model Deployment",
        topics: [
          "Model serialization and saving",
          "REST API development with Flask/FastAPI",
          "Containerization with Docker",
          "Cloud deployment (AWS, GCP, Azure)",
          "Model monitoring and maintenance"
        ],
        practicals: [
          "Deploy model as REST API",
          "Containerize ML application",
          "Cloud deployment project",
          "Model monitoring dashboard"
        ],
        examples: []
      },
      {
        week: 18,
        title: "MLOps and Production",
        topics: [
          "ML pipeline automation",
          "Version control for ML (DVC)",
          "Experiment tracking (MLflow, Weights & Biases)",
          "A/B testing for ML models",
          "Continuous integration/deployment"
        ],
        practicals: [
          "Build automated ML pipeline",
          "Experiment tracking setup",
          "A/B testing framework",
          "CI/CD for ML projects"
        ],
        examples: []
      },
      {
        week: 19,
        title: "Ethics and Responsible AI",
        topics: [
          "Bias and fairness in ML",
          "Model interpretability and explainability",
          "SHAP and LIME for model explanation",
          "Privacy and data protection",
          "Responsible AI principles"
        ],
        practicals: [
          "Bias detection in datasets",
          "Model explanation with SHAP",
          "Fairness metrics implementation",
          "Privacy-preserving ML techniques"
        ],
        examples: []
      },
      {
        week: 20,
        title: "Capstone Project",
        topics: [
          "End-to-end ML project development",
          "Problem formulation and data collection",
          "Model selection and evaluation",
          "Deployment and monitoring",
          "Project presentation and documentation"
        ],
        practicals: [
          "Complete ML project from scratch",
          "Deploy production-ready model",
          "Create project documentation",
          "Present findings and results"
        ],
        examples: []
      },
        examples: [
          {
            title: "Comprehensive ML Pipeline with Multiple Algorithms",
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
          },
          {
            title: "Neural Network from Scratch",
            code: `import numpy as np
import matplotlib.pyplot as plt
from sklearn.datasets import make_classification, make_circles
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
import warnings
warnings.filterwarnings('ignore')

class NeuralNetwork:
    def __init__(self, layers, learning_rate=0.01, epochs=1000):
        """
        Initialize Neural Network
        layers: list of integers representing neurons in each layer
        """
        self.layers = layers
        self.learning_rate = learning_rate
        self.epochs = epochs
        self.weights = []
        self.biases = []
        self.costs = []
        
        # Initialize weights and biases
        for i in range(len(layers) - 1):
            # Xavier initialization
            weight = np.random.randn(layers[i], layers[i+1]) * np.sqrt(2.0 / layers[i])
            bias = np.zeros((1, layers[i+1]))
            self.weights.append(weight)
            self.biases.append(bias)
    
    def sigmoid(self, z):
        """Sigmoid activation function"""
        # Clip z to prevent overflow
        z = np.clip(z, -500, 500)
        return 1 / (1 + np.exp(-z))
    
    def sigmoid_derivative(self, z):
        """Derivative of sigmoid function"""
        return z * (1 - z)
    
    def relu(self, z):
        """ReLU activation function"""
        return np.maximum(0, z)
    
    def relu_derivative(self, z):
        """Derivative of ReLU function"""
        return (z > 0).astype(float)
    
    def tanh(self, z):
        """Tanh activation function"""
        return np.tanh(z)
    
    def tanh_derivative(self, z):
        """Derivative of tanh function"""
        return 1 - np.power(z, 2)
    
    def forward_propagation(self, X):
        """Forward propagation through the network"""
        self.activations = [X]
        self.z_values = []
        
        for i in range(len(self.weights)):
            # Linear transformation
            z = np.dot(self.activations[i], self.weights[i]) + self.biases[i]
            self.z_values.append(z)
            
            # Apply activation function
            if i == len(self.weights) - 1:  # Output layer
                activation = self.sigmoid(z)
            else:  # Hidden layers
                activation = self.relu(z)
            
            self.activations.append(activation)
        
        return self.activations[-1]
    
    def backward_propagation(self, X, y):
        """Backward propagation to compute gradients"""
        m = X.shape[0]
        
        # Initialize gradients
        dW = [np.zeros_like(w) for w in self.weights]
        db = [np.zeros_like(b) for b in self.biases]
        
        # Output layer error
        delta = self.activations[-1] - y
        
        # Backpropagate the error
        for i in reversed(range(len(self.weights))):
            # Compute gradients
            dW[i] = np.dot(self.activations[i].T, delta) / m
            db[i] = np.sum(delta, axis=0, keepdims=True) / m
            
            # Compute error for previous layer
            if i > 0:
                delta = np.dot(delta, self.weights[i].T) * self.relu_derivative(self.activations[i])
        
        return dW, db
    
    def update_parameters(self, dW, db):
        """Update weights and biases using gradients"""
        for i in range(len(self.weights)):
            self.weights[i] -= self.learning_rate * dW[i]
            self.biases[i] -= self.learning_rate * db[i]
    
    def compute_cost(self, y_true, y_pred):
        """Compute binary cross-entropy cost"""
        m = y_true.shape[0]
        # Prevent log(0) by adding small epsilon
        epsilon = 1e-15
        y_pred = np.clip(y_pred, epsilon, 1 - epsilon)
        
        cost = -np.sum(y_true * np.log(y_pred) + (1 - y_true) * np.log(1 - y_pred)) / m
        return cost
    
    def fit(self, X, y):
        """Train the neural network"""
        self.costs = []
        
        for epoch in range(self.epochs):
            # Forward propagation
            y_pred = self.forward_propagation(X)
            
            # Compute cost
            cost = self.compute_cost(y, y_pred)
            self.costs.append(cost)
            
            # Backward propagation
            dW, db = self.backward_propagation(X, y)
            
            # Update parameters
            self.update_parameters(dW, db)
            
            # Print progress
            if epoch % 100 == 0:
                print(f"Epoch {epoch}, Cost: {cost:.6f}")
    
    def predict(self, X):
        """Make predictions"""
        y_pred = self.forward_propagation(X)
        return (y_pred > 0.5).astype(int)
    
    def predict_proba(self, X):
        """Predict probabilities"""
        return self.forward_propagation(X)
    
    def plot_cost(self):
        """Plot the cost function over epochs"""
        plt.figure(figsize=(10, 6))
        plt.plot(self.costs)
        plt.title('Cost Function Over Epochs')
        plt.xlabel('Epochs')
        plt.ylabel('Cost')
        plt.grid(True)
        plt.show()
    
    def plot_decision_boundary(self, X, y, title="Decision Boundary"):
        """Plot decision boundary for 2D data"""
        if X.shape[1] != 2:
            print("Decision boundary can only be plotted for 2D data")
            return
        
        plt.figure(figsize=(10, 8))
        
        # Create a mesh
        h = 0.01
        x_min, x_max = X[:, 0].min() - 1, X[:, 0].max() + 1
        y_min, y_max = X[:, 1].min() - 1, X[:, 1].max() + 1
        xx, yy = np.meshgrid(np.arange(x_min, x_max, h),
                            np.arange(y_min, y_max, h))
        
        # Make predictions on the mesh
        mesh_points = np.c_[xx.ravel(), yy.ravel()]
        Z = self.predict_proba(mesh_points)
        Z = Z.reshape(xx.shape)
        
        # Plot the contour and training examples
        plt.contourf(xx, yy, Z, levels=50, alpha=0.8, cmap=plt.cm.RdYlBu)
        scatter = plt.scatter(X[:, 0], X[:, 1], c=y.ravel(), cmap=plt.cm.RdYlBu, edgecolors='black')
        plt.colorbar(scatter)
        plt.title(title)
        plt.xlabel('Feature 1')
        plt.ylabel('Feature 2')
        plt.show()

def demonstrate_neural_network():
    """Demonstrate neural network on different datasets"""
    print("=== Neural Network from Scratch Demo ===")
    
    # Dataset 1: Linearly separable data
    print("\n1. Linearly Separable Data:")
    X1, y1 = make_classification(n_samples=1000, n_features=2, n_redundant=0, 
                                n_informative=2, n_clusters_per_class=1, random_state=42)
    y1 = y1.reshape(-1, 1)
    
    # Split and scale data
    X1_train, X1_test, y1_train, y1_test = train_test_split(X1, y1, test_size=0.2, random_state=42)
    scaler1 = StandardScaler()
    X1_train_scaled = scaler1.fit_transform(X1_train)
    X1_test_scaled = scaler1.transform(X1_test)
    
    # Create and train neural network
    nn1 = NeuralNetwork([2, 4, 1], learning_rate=0.1, epochs=1000)
    nn1.fit(X1_train_scaled, y1_train)
    
    # Evaluate
    train_pred1 = nn1.predict(X1_train_scaled)
    test_pred1 = nn1.predict(X1_test_scaled)
    train_acc1 = np.mean(train_pred1 == y1_train)
    test_acc1 = np.mean(test_pred1 == y1_test)
    
    print(f"Training Accuracy: {train_acc1:.4f}")
    print(f"Test Accuracy: {test_acc1:.4f}")
    
    # Plot results
    nn1.plot_decision_boundary(X1_train_scaled, y1_train, "Linear Data - Decision Boundary")
    
    # Dataset 2: Non-linearly separable data (circles)
    print("\n2. Non-linearly Separable Data (Circles):")
    X2, y2 = make_circles(n_samples=1000, noise=0.1, factor=0.3, random_state=42)
    y2 = y2.reshape(-1, 1)
    
    # Split and scale data
    X2_train, X2_test, y2_train, y2_test = train_test_split(X2, y2, test_size=0.2, random_state=42)
    scaler2 = StandardScaler()
    X2_train_scaled = scaler2.fit_transform(X2_train)
    X2_test_scaled = scaler2.transform(X2_test)
    
    # Create deeper neural network for complex data
    nn2 = NeuralNetwork([2, 8, 4, 1], learning_rate=0.1, epochs=2000)
    nn2.fit(X2_train_scaled, y2_train)
    
    # Evaluate
    train_pred2 = nn2.predict(X2_train_scaled)
    test_pred2 = nn2.predict(X2_test_scaled)
    train_acc2 = np.mean(train_pred2 == y2_train)
    test_acc2 = np.mean(test_pred2 == y2_test)
    
    print(f"Training Accuracy: {train_acc2:.4f}")
    print(f"Test Accuracy: {test_acc2:.4f}")
    
    # Plot results
    nn2.plot_decision_boundary(X2_train_scaled, y2_train, "Circles Data - Decision Boundary")
    nn2.plot_cost()
    
    # Compare with different architectures
    print("\n3. Architecture Comparison:")
    architectures = {
        "Shallow (2-4-1)": [2, 4, 1],
        "Medium (2-8-4-1)": [2, 8, 4, 1],
        "Deep (2-16-8-4-1)": [2, 16, 8, 4, 1]
    }
    
    results = {}
    for name, arch in architectures.items():
        nn = NeuralNetwork(arch, learning_rate=0.1, epochs=1000)
        nn.fit(X2_train_scaled, y2_train)
        
        train_pred = nn.predict(X2_train_scaled)
        test_pred = nn.predict(X2_test_scaled)
        train_acc = np.mean(train_pred == y2_train)
        test_acc = np.mean(test_pred == y2_test)
        
        results[name] = {'train_acc': train_acc, 'test_acc': test_acc}
        print(f"{name}: Train Acc = {train_acc:.4f}, Test Acc = {test_acc:.4f}")
    
    # Plot architecture comparison
    plt.figure(figsize=(12, 5))
    
    plt.subplot(1, 2, 1)
    names = list(results.keys())
    train_accs = [results[name]['train_acc'] for name in names]
    test_accs = [results[name]['test_acc'] for name in names]
    
    x = np.arange(len(names))
    width = 0.35
    
    plt.bar(x - width/2, train_accs, width, label='Training Accuracy', alpha=0.8)
    plt.bar(x + width/2, test_accs, width, label='Test Accuracy', alpha=0.8)
    plt.xlabel('Architecture')
    plt.ylabel('Accuracy')
    plt.title('Architecture Comparison')
    plt.xticks(x, names, rotation=45)
    plt.legend()
    plt.grid(True, alpha=0.3)
    
    # Learning rate comparison
    plt.subplot(1, 2, 2)
    learning_rates = [0.001, 0.01, 0.1, 0.5]
    lr_results = []
    
    for lr in learning_rates:
        nn = NeuralNetwork([2, 8, 4, 1], learning_rate=lr, epochs=1000)
        nn.fit(X2_train_scaled, y2_train)
        test_pred = nn.predict(X2_test_scaled)
        test_acc = np.mean(test_pred == y2_test)
        lr_results.append(test_acc)
    
    plt.plot(learning_rates, lr_results, 'bo-', linewidth=2, markersize=8)
    plt.xlabel('Learning Rate')
    plt.ylabel('Test Accuracy')
    plt.title('Learning Rate vs Performance')
    plt.xscale('log')
    plt.grid(True, alpha=0.3)
    
    plt.tight_layout()
    plt.show()
    
    print("\n=== Neural Network Demo Complete ===")

if __name__ == "__main__":
    demonstrate_neural_network()`,
            explanation: "Complete neural network implementation from scratch with forward/backward propagation, multiple activation functions, and comprehensive visualization."
          }
        ]
      }
    ],
    features: [
      "200+ comprehensive lessons",
      "40+ hands-on ML projects",
      "Complete mathematical foundations",
      "Deep learning with TensorFlow/PyTorch",
      "NLP and Computer Vision projects",
      "MLOps and deployment strategies",
      "Ethics and responsible AI",
      "Interactive coding exercises",
      "Lifetime access to content",
      "Community support",
      "Industry-standard tools and libraries"
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
                Theory
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
                <FaChartLine />
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
            
            {activeTab === 'theory' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Machine Learning Theory</h2>
                  <p className="text-gray-600 dark:text-gray-300">Comprehensive theoretical foundations of machine learning</p>
                </div>
                
                <div className="grid gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-6"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Types of Machine Learning</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {Object.entries(courseDetails.introduction.learningTypes).map(([key, type]) => (
                        <div key={key} className="bg-white dark:bg-gray-800 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{type.title}</h4>
                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{type.description}</p>
                          <div className="mb-3">
                            <div className="font-medium text-gray-700 dark:text-gray-300 text-sm mb-1">Examples:</div>
                            <ul className="text-xs text-gray-600 dark:text-gray-400">
                              {type.examples.map((example, idx) => (
                                <li key={idx}>• {example}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <div className="font-medium text-gray-700 dark:text-gray-300 text-sm mb-1">Algorithms:</div>
                            <div className="flex flex-wrap gap-1">
                              {type.algorithms.map((algo, idx) => (
                                <span key={idx} className="px-2 py-1 bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 rounded text-xs">
                                  {algo}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-6"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Mathematical Foundations</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {Object.entries(courseDetails.introduction.mathematicalFoundations).map(([key, foundation]) => (
                        <div key={key} className="bg-white dark:bg-gray-800 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{foundation.title}</h4>
                          <div className="mb-3">
                            <div className="font-medium text-gray-700 dark:text-gray-300 text-sm mb-1">Key Concepts:</div>
                            <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                              {foundation.concepts.map((concept, idx) => (
                                <li key={idx}>• {concept}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <div className="font-medium text-gray-700 dark:text-gray-300 text-sm mb-1">Applications:</div>
                            <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                              {foundation.applications.map((app, idx) => (
                                <li key={idx}>• {app}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            )}
            
            {activeTab === 'algorithms' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Core ML Algorithms</h2>
                  <p className="text-gray-600 dark:text-gray-300">Detailed analysis of fundamental machine learning algorithms</p>
                </div>
                
                {Object.entries(courseDetails.introduction.algorithms).map(([key, algorithm]) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-6"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{algorithm.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">{algorithm.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Algorithm Steps:</h4>
                        <ol className="space-y-2">
                          {algorithm.steps.map((step, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
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
            
            {activeTab === 'applications' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Real-World Applications</h2>
                  <p className="text-gray-600 dark:text-gray-300">Machine learning applications across various industries</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {Object.entries(courseDetails.introduction.applications).map(([industry, applications]) => (
                    <motion.div
                      key={industry}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-6"
                    >
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 capitalize">{industry}</h3>
                      <ul className="space-y-3">
                        {applications.map((app, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-gray-600 dark:text-gray-300 text-sm">{app}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'download' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Download ML Resources</h2>
                  <p className="text-gray-600 dark:text-gray-300">Comprehensive machine learning materials and resources</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-6"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <FaFileAlt className="text-red-500 text-3xl" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Complete ML Course</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Full curriculum with theory and code</p>
                      </div>
                    </div>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                        20 weeks of comprehensive content
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                        200+ pages of theory and examples
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                        40+ hands-on projects
                      </li>
                    </ul>
                    <button 
                      onClick={() => window.open('#', '_blank')}
                      className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <FaDownload />
                      Download PDF (15.2 MB)
                    </button>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-6"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <FaBrain className="text-blue-500 text-3xl" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Deep Learning Guide</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Neural networks and deep learning</p>
                      </div>
                    </div>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        CNN, RNN, and Transformer architectures
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        TensorFlow and PyTorch implementations
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        Computer vision and NLP projects
                      </li>
                    </ul>
                    <button 
                      onClick={() => window.open('#', '_blank')}
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <FaDownload />
                      Download PDF (8.7 MB)
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

export default MachineLearning;