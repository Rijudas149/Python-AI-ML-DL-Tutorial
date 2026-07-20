import type { Topic } from '../../types';

export const module12Topics: Topic[] = [
{
      id: `ml-clustering`,
      title: `Clustering (K-Means, DBSCAN)`,
      description: `Group similar data points without labels.`,
      level: `beginner`,
      track: `ml`,
      sections: [
        {
          id: `kmeans`,
          title: `K-Means Clustering`,
          content: `### Introduction

Partition data into k clusters minimizing within-cluster variance. Initialize centroids, assign, update, repeat.

### K-Means Clustering

### Key Ideas

- Choose k via elbow method or silhouette score
- n_init runs multiple initializations
- Assumes spherical clusters of similar size
- Scale features before clustering

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
          example: `from sklearn.cluster import KMeans
import numpy as np

X = np.vstack([np.random.normal(0, 1, (50, 2)), np.random.normal(5, 1, (50, 2))])
kmeans = KMeans(n_clusters=2, random_state=42, n_init=10).fit(X)
print(np.bincount(kmeans.labels_))`,
          output: `[50 50]`,
          keyPoints: [
            `Choose k via elbow method or silhouette score`,
            `n_init runs multiple initializations`,
            `Assumes spherical clusters of similar size`,
            `Scale features before clustering`
          ],
          commonMistakes: [
            `Running K-Means without scaling — features with large ranges dominate`,
            `Optimizing accuracy on imbalanced classes instead of precision/recall/F1`,
            `Tuning hyperparameters on the test set instead of a validation fold`,
            `Target encoding without inner cross-validation — label leakage`
          ]
        },
        {
          id: `dbscan`,
          title: `DBSCAN`,
          content: `### Introduction

Density-based clustering. No need to specify k. Finds arbitrary shapes. Labels noise as -1.

### DBSCAN

### Key Ideas

- eps: neighborhood radius
- min_samples: core point threshold
- Handles non-spherical clusters
- Noise points labeled -1

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
          example: `from sklearn.cluster import DBSCAN
from sklearn.datasets import make_moons

X, _ = make_moons(n_samples=200, noise=0.05, random_state=42)
labels = DBSCAN(eps=0.2, min_samples=5).fit_predict(X)
print(len(set(labels)))`,
          keyPoints: [
            `eps: neighborhood radius`,
            `min_samples: core point threshold`,
            `Handles non-spherical clusters`,
            `Noise points labeled -1`
          ],
          commonMistakes: [
            `Running K-Means without scaling — features with large ranges dominate`,
            `Optimizing accuracy on imbalanced classes instead of precision/recall/F1`,
            `Tuning hyperparameters on the test set instead of a validation fold`,
            `Target encoding without inner cross-validation — label leakage`
          ]
        },
        {
          id: `hierarchical`,
          title: `Hierarchical Clustering`,
          content: `### Introduction

Agglomerative: bottom-up merging. Dendrogram visualizes hierarchy. No preset k needed.

### Hierarchical Clustering

### Key Ideas

- Ward linkage minimizes variance increase
- Dendrogram cut determines k
- O(n²) memory — not for huge datasets
- Useful for taxonomy and phylogenetic trees`,
          keyPoints: [
            `Ward linkage minimizes variance increase`,
            `Dendrogram cut determines k`,
            `O(n²) memory — not for huge datasets`,
            `Useful for taxonomy and phylogenetic trees`
          ],
          diagram: `Hierarchical Clustering
Load → Profile → Visualize → Hypothesis → Transform`,
          commonMistakes: [
            `Running K-Means without scaling — features with large ranges dominate`,
            `Optimizing accuracy on imbalanced classes instead of precision/recall/F1`,
            `Tuning hyperparameters on the test set instead of a validation fold`,
            `Target encoding without inner cross-validation — label leakage`
          ]
        },
        {
          id: `eval-cluster`,
          title: `Cluster Evaluation`,
          content: `### Introduction

Silhouette score (-1 to 1), Davies-Bouldin index, Calinski-Harabasz. No ground truth needed.

### Cluster Evaluation

### Key Ideas

- Silhouette: cohesion vs separation
- Higher silhouette = better defined clusters
- Elbow method for k in K-Means
- Domain knowledge validates cluster meaning`,
          keyPoints: [
            `Silhouette: cohesion vs separation`,
            `Higher silhouette = better defined clusters`,
            `Elbow method for k in K-Means`,
            `Domain knowledge validates cluster meaning`
          ],
          diagram: `Cluster Evaluation
Dataset → Train Fold → Validation Fold → Test Holdout`,
          commonMistakes: [
            `Running K-Means without scaling — features with large ranges dominate`,
            `Optimizing accuracy on imbalanced classes instead of precision/recall/F1`,
            `Tuning hyperparameters on the test set instead of a validation fold`,
            `Target encoding without inner cross-validation — label leakage`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-km-1`,
          question: `Run KMeans k=3 on iris features, print cluster count per label.`,
          solution: `from sklearn.cluster import KMeans
from sklearn.datasets import load_iris
X, _ = load_iris(return_X_y=True)
print(KMeans(3, random_state=42, n_init=10).fit(X).labels_[:5])`,
          difficulty: `easy`
        },
        {
          id: `ex-km-2`,
          question: `Compute silhouette_score for KMeans k=2 on iris.`,
          solution: `from sklearn.metrics import silhouette_score
from sklearn.cluster import KMeans
from sklearn.datasets import load_iris
X, _ = load_iris(return_X_y=True)
km = KMeans(2, random_state=42, n_init=10).fit(X)
print(round(silhouette_score(X, km.labels_), 3))`,
          difficulty: `medium`
        }
      ],
      estimatedMinutes: 25,
      module: `module-12`,
      references: [
        {
          id: `sklearn-clustering`,
          title: `scikit-learn Clustering`,
          source: `scikit-learn`,
          type: `documentation`,
          url: `https://scikit-learn.org/stable/modules/clustering.html`,
          description: `K-Means, DBSCAN, hierarchical, and spectral clustering algorithms.`
        },
        {
          id: `esl-hastie`,
          title: `The Elements of Statistical Learning`,
          source: `Stanford`,
          type: `book`,
          url: `https://hastie.su.domains/ElemStatLearn/`,
          description: `Free authoritative text on statistical learning methods and theory.`
        },
        {
          id: `bishop-prml`,
          title: `Pattern Recognition and Machine Learning`,
          source: `Cambridge`,
          type: `book`,
          url: `https://www.microsoft.com/en-us/research/publication/pattern-recognition-machine-learning/`,
          description: `Rigorous treatment of probability, inference, and classical ML algorithms.`
        },
        {
          id: `kaggle-intro-ml`,
          title: `Kaggle Learn — Intro to Machine Learning`,
          source: `Kaggle`,
          type: `course`,
          url: `https://www.kaggle.com/learn/intro-to-machine-learning`,
          description: `Practical first steps with decision trees and model validation.`
        }
      ]
    },
{
      id: `ml-dimred`,
      title: `Dimensionality Reduction (PCA, t-SNE)`,
      description: `Reduce feature dimensions while preserving structure.`,
      level: `beginner`,
      track: `ml`,
      sections: [
        {
          id: `pca`,
          title: `Principal Component Analysis`,
          content: `### Introduction

Find orthogonal directions of maximum variance. PCA(n_components=k) for compression and visualization.

### Principal Component Analysis

### Key Ideas

- Components ordered by variance explained
- Standardize before PCA
- Used for visualization and noise reduction
- explained_variance_ratio_ shows information retained

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
          example: `from sklearn.decomposition import PCA
from sklearn.datasets import load_iris

X, _ = load_iris(return_X_y=True)
pca = PCA(n_components=2).fit_transform(X)
print(pca.shape, round(pca.explained_variance_ratio_.sum(), 3))`,
          output: `(150, 2) 0.958`,
          keyPoints: [
            `Components ordered by variance explained`,
            `Standardize before PCA`,
            `Used for visualization and noise reduction`,
            `explained_variance_ratio_ shows information retained`
          ],
          diagram: `Principal Component Analysis
Load → Profile → Visualize → Hypothesis → Transform`,
          commonMistakes: [
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Running K-Means without scaling — features with large ranges dominate`,
            `Optimizing accuracy on imbalanced classes instead of precision/recall/F1`,
            `Tuning hyperparameters on the test set instead of a validation fold`
          ]
        },
        {
          id: `tsne`,
          title: `t-SNE`,
          content: `### Introduction

Non-linear dimensionality reduction for visualization. Preserves local structure. t-SNE(n_components=2, perplexity=30).

### t-SNE

### Key Ideas

- t-SNE for visualization only not preprocessing
- perplexity balances local/global structure
- Stochastic — set random_state
- UMAP faster alternative preserving global structure`,
          keyPoints: [
            `t-SNE for visualization only not preprocessing`,
            `perplexity balances local/global structure`,
            `Stochastic — set random_state`,
            `UMAP faster alternative preserving global structure`
          ],
          diagram: `t-SNE
Raw Data → Clean → Features → Train → Evaluate → Deploy → Monitor`,
          commonMistakes: [
            `Using polynomial degree too high without regularization`,
            `Serving a model trained on preprocessed data without the same pipeline in production`,
            `Optimizing accuracy on imbalanced classes instead of precision/recall/F1`,
            `Tuning hyperparameters on the test set instead of a validation fold`
          ]
        },
        {
          id: `lda`,
          title: `Linear Discriminant Analysis`,
          content: `### Introduction

Supervised dimensionality reduction. Maximizes class separation.

### Linear Discriminant Analysis

LDA for dimensionality reduction before classification.

### Key Ideas

- Uses class labels unlike PCA
- Max k-1 components for k classes
- Better class separation than PCA for classification
- Also a classification algorithm directly`,
          keyPoints: [
            `Uses class labels unlike PCA`,
            `Max k-1 components for k classes`,
            `Better class separation than PCA for classification`,
            `Also a classification algorithm directly`
          ],
          commonMistakes: [
            `Calling \`Parent.method()\` without passing \`self\` correctly in overrides`,
            `Using polynomial degree too high without regularization`,
            `Not stratifying splits for classification tasks`,
            `Optimizing accuracy on imbalanced classes instead of precision/recall/F1`
          ]
        },
        {
          id: `autoencoder`,
          title: `Autoencoders Preview`,
          content: `### Introduction

Neural network compresses input to bottleneck then reconstructs. Non-linear dimensionality reduction. Foundation for VAE.

### Autoencoders Preview

### Key Ideas

- Encoder compresses, decoder reconstructs
- Bottleneck layer is reduced representation
- Reconstruction loss trains the network
- Used for denoising and anomaly detection`,
          keyPoints: [
            `Encoder compresses, decoder reconstructs`,
            `Bottleneck layer is reduced representation`,
            `Reconstruction loss trains the network`,
            `Used for denoising and anomaly detection`
          ],
          diagram: `Autoencoders Preview
Tokens → Embedding → Self-Attention → FFN → Output`,
          commonMistakes: [
            `Tuning hyperparameters on the test set instead of a validation fold`,
            `Target encoding without inner cross-validation — label leakage`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Using polynomial degree too high without regularization`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-pca-1`,
          question: `Reduce iris to 2D with PCA and print shape.`,
          solution: `from sklearn.decomposition import PCA
from sklearn.datasets import load_iris
X, _ = load_iris(return_X_y=True)
print(PCA(2).fit_transform(X).shape)`,
          difficulty: `easy`
        },
        {
          id: `ex-pca-2`,
          question: `Print variance explained ratio of first PC for iris.`,
          solution: `from sklearn.decomposition import PCA
from sklearn.datasets import load_iris
X, _ = load_iris(return_X_y=True)
print(round(PCA().fit(X).explained_variance_ratio_[0], 3))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 25,
      module: `module-12`,
      references: [
        {
          id: `sklearn-pca`,
          title: `scikit-learn PCA & Decomposition`,
          source: `scikit-learn`,
          type: `documentation`,
          url: `https://scikit-learn.org/stable/modules/decomposition.html`,
          description: `PCA, NMF, and other dimensionality reduction techniques.`
        },
        {
          id: `van-der-maaten-tsne`,
          title: `Visualizing Data using t-SNE`,
          source: `JMLR`,
          type: `paper`,
          url: `https://www.jmlr.org/papers/volume9/vandermaaten08a/vandermaaten08a.pdf`,
          description: `Seminal paper on t-SNE for nonlinear dimensionality reduction visualization.`
        },
        {
          id: `esl-hastie`,
          title: `The Elements of Statistical Learning`,
          source: `Stanford`,
          type: `book`,
          url: `https://hastie.su.domains/ElemStatLearn/`,
          description: `Free authoritative text on statistical learning methods and theory.`
        },
        {
          id: `bishop-prml`,
          title: `Pattern Recognition and Machine Learning`,
          source: `Cambridge`,
          type: `book`,
          url: `https://www.microsoft.com/en-us/research/publication/pattern-recognition-machine-learning/`,
          description: `Rigorous treatment of probability, inference, and classical ML algorithms.`
        }
      ]
    },
{
      id: `ml-anomaly`,
      title: `Anomaly Detection`,
      description: `Identify outliers and novel patterns in data.`,
      level: `beginner`,
      track: `ml`,
      sections: [
        {
          id: `isolation`,
          title: `Isolation Forest`,
          content: `### Introduction

Randomly partition data; anomalies isolated in fewer splits. IsolationForest(contamination=0.1).

### Isolation Forest

### Key Ideas

- -1 for anomalies, 1 for normal
- contamination sets expected anomaly fraction
- Works in high dimensions
- Fast — linear time complexity

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
          example: `from sklearn.ensemble import IsolationForest
import numpy as np

X = np.vstack([np.random.normal(0, 1, (100, 2)), np.array([[5, 5], [-5, -5]])])
clf = IsolationForest(contamination=0.05, random_state=42).fit(X)
preds = clf.predict(X)
print(np.sum(preds == -1))`,
          keyPoints: [
            `-1 for anomalies, 1 for normal`,
            `contamination sets expected anomaly fraction`,
            `Works in high dimensions`,
            `Fast — linear time complexity`
          ],
          diagram: `Isolation Forest
Dataset → Train Fold → Validation Fold → Test Holdout`,
          commonMistakes: [
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Not stratifying splits for classification tasks`,
            `Optimizing accuracy on imbalanced classes instead of precision/recall/F1`,
            `Tuning hyperparameters on the test set instead of a validation fold`
          ]
        },
        {
          id: `lof`,
          title: `Local Outlier Factor`,
          content: `### Introduction

Compare local density of point to neighbors. Points in sparse regions are outliers.

### Local Outlier Factor

### Key Ideas

- LOF score near 1 for normal points
- High LOF = outlier relative to neighbors
- Sensitive to n_neighbors parameter
- Good for clustered data with local outliers`,
          keyPoints: [
            `LOF score near 1 for normal points`,
            `High LOF = outlier relative to neighbors`,
            `Sensitive to n_neighbors parameter`,
            `Good for clustered data with local outliers`
          ],
          commonMistakes: [
            `Optimizing accuracy on imbalanced classes instead of precision/recall/F1`,
            `Tuning hyperparameters on the test set instead of a validation fold`,
            `Target encoding without inner cross-validation — label leakage`,
            `Optimizing accuracy on imbalanced classes instead of precision/recall/F1`
          ]
        },
        {
          id: `oneclass`,
          title: `One-Class SVM`,
          content: `### Introduction

Learn boundary around normal data. OneClassSVM(nu=0.1). Useful when anomalies rare in training.

### One-Class SVM

### Key Ideas

- Train only on normal data
- nu controls upper bound on outliers
- RBF kernel for non-linear boundaries
- Used in fraud and defect detection`,
          keyPoints: [
            `Train only on normal data`,
            `nu controls upper bound on outliers`,
            `RBF kernel for non-linear boundaries`,
            `Used in fraud and defect detection`
          ],
          commonMistakes: [
            `Tuning hyperparameters on the test set instead of a validation fold`,
            `Target encoding without inner cross-validation — label leakage`,
            `Calling \`Parent.method()\` without passing \`self\` correctly in overrides`,
            `Not stratifying splits for classification tasks`
          ]
        },
        {
          id: `applications`,
          title: `Anomaly Detection Applications`,
          content: `### Introduction

Fraud detection, network intrusion, manufacturing defects, system monitoring. Often unsupervised or semi-supervised.

### Anomaly Detection Applications

### Key Ideas

- Anomalies often rare — class imbalance extreme
- Combine domain rules with ML
- Threshold tuning critical for precision/recall
- Concept drift requires model retraining`,
          keyPoints: [
            `Anomalies often rare — class imbalance extreme`,
            `Combine domain rules with ML`,
            `Threshold tuning critical for precision/recall`,
            `Concept drift requires model retraining`
          ],
          commonMistakes: [
            `Running K-Means without scaling — features with large ranges dominate`,
            `Optimizing accuracy on imbalanced classes instead of precision/recall/F1`,
            `Tuning hyperparameters on the test set instead of a validation fold`,
            `Target encoding without inner cross-validation — label leakage`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-anom-1`,
          question: `Use IsolationForest on data with one outlier point [10].`,
          solution: `from sklearn.ensemble import IsolationForest
import numpy as np
X = np.array([[1],[2],[3],[4],[10]], dtype=float)
clf = IsolationForest(random_state=42).fit(X)
print(clf.predict([[10]])[0])`,
          difficulty: `medium`
        },
        {
          id: `ex-anom-2`,
          question: `Count anomalies (-1) in predictions for normal + 2 outliers.`,
          solution: `from sklearn.ensemble import IsolationForest
import numpy as np
X = np.vstack([np.random.normal(0,1,(50,1)), np.array([[10],[20]])])
p = IsolationForest(contamination=0.05, random_state=42).fit(X).predict(X)
print(np.sum(p == -1))`,
          difficulty: `medium`
        }
      ],
      estimatedMinutes: 25,
      module: `module-12`,
      references: [
        {
          id: `sklearn-anomaly`,
          title: `scikit-learn Outlier Detection`,
          source: `scikit-learn`,
          type: `documentation`,
          url: `https://scikit-learn.org/stable/modules/outlier_detection.html`,
          description: `Isolation Forest, Local Outlier Factor, and novelty detection methods.`
        },
        {
          id: `bishop-prml`,
          title: `Pattern Recognition and Machine Learning`,
          source: `Cambridge`,
          type: `book`,
          url: `https://www.microsoft.com/en-us/research/publication/pattern-recognition-machine-learning/`,
          description: `Rigorous treatment of probability, inference, and classical ML algorithms.`
        },
        {
          id: `esl-hastie`,
          title: `The Elements of Statistical Learning`,
          source: `Stanford`,
          type: `book`,
          url: `https://hastie.su.domains/ElemStatLearn/`,
          description: `Free authoritative text on statistical learning methods and theory.`
        },
        {
          id: `scikit-learn-user-guide`,
          title: `scikit-learn User Guide`,
          source: `scikit-learn`,
          type: `documentation`,
          url: `https://scikit-learn.org/stable/user_guide.html`,
          description: `Complete reference for ML algorithms, pipelines, and model selection.`
        }
      ]
    },
{
      id: `ml-association`,
      title: `Association Rules`,
      description: `Find frequent itemsets and association rules in transactional data.`,
      level: `beginner`,
      track: `ml`,
      sections: [
        {
          id: `apriori`,
          title: `Apriori Algorithm`,
          content: `### Introduction

Find frequent itemsets meeting minimum support threshold. Generate rules with confidence and lift metrics.

### Apriori Algorithm

### Key Ideas

- Support: frequency of itemset in transactions
- Confidence: P(B|A) for rule A→B
- Lift > 1 indicates positive association
- Apriori prunes infrequent candidates efficiently`,
          keyPoints: [
            `Support: frequency of itemset in transactions`,
            `Confidence: P(B|A) for rule A→B`,
            `Lift > 1 indicates positive association`,
            `Apriori prunes infrequent candidates efficiently`
          ],
          commonMistakes: [
            `Target encoding without inner cross-validation — label leakage`,
            `Optimizing accuracy on imbalanced classes instead of precision/recall/F1`,
            `Tuning hyperparameters on the test set instead of a validation fold`,
            `Target encoding without inner cross-validation — label leakage`
          ]
        },
        {
          id: `metrics`,
          title: `Support, Confidence, Lift`,
          content: `### Introduction

Support(A→B) = P(A∪B). Confidence = P(B|A). Lift = confidence/P(B). Lift=1 means independent.

### Support, Confidence, Lift

### Key Ideas

- High lift = strong association beyond chance
- Low support rules may still be actionable
- Conviction and leverage are alternative metrics
- Market basket analysis classic application

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
          example: `# Example: 100 transactions
# {bread, milk}: 20 transactions -> support = 0.20
# bread alone: 40, milk given bread: 15
# confidence(bread->milk) = 15/40 = 0.375
print("lift = confidence / P(milk)")`,
          keyPoints: [
            `High lift = strong association beyond chance`,
            `Low support rules may still be actionable`,
            `Conviction and leverage are alternative metrics`,
            `Market basket analysis classic application`
          ],
          diagram: `Support, Confidence, Lift
Query → Embed → Retrieve → Augment Prompt → Generate`,
          commonMistakes: [
            `Optimizing accuracy on imbalanced classes instead of precision/recall/F1`,
            `Tuning hyperparameters on the test set instead of a validation fold`,
            `Target encoding without inner cross-validation — label leakage`,
            `Optimizing accuracy on imbalanced classes instead of precision/recall/F1`
          ]
        },
        {
          id: `mlxtend`,
          title: `mlxtend Library`,
          content: `### Introduction

from mlxtend.frequent_patterns import apriori, association_rules. Convert transactions to one-hot encoded DataFrame first.

### mlxtend Library

### Key Ideas

- One-hot encode transactions for apriori
- min_support filters frequent itemsets
- association_rules filters by confidence/lift
- FP-Growth faster alternative to Apriori`,
          keyPoints: [
            `One-hot encode transactions for apriori`,
            `min_support filters frequent itemsets`,
            `association_rules filters by confidence/lift`,
            `FP-Growth faster alternative to Apriori`
          ],
          diagram: `mlxtend Library
Image → Conv → ReLU → Pool → Flatten → Dense → Class`,
          commonMistakes: [
            `Target encoding without inner cross-validation — label leakage`,
            `Feeding NHWC tensors into PyTorch NCHW layers without permuting`,
            `Wrong padding/stride — output spatial size shrinks unexpectedly`,
            `Broadcasting mistakes when array shapes do not align`
          ]
        },
        {
          id: `applications`,
          title: `Recommendation & Retail`,
          content: `### Introduction

Product recommendations, shelf layout, cross-selling. Collaborative filtering shares mathematical foundations.

### Recommendation & Retail

### Key Ideas

- Amazon "customers also bought" uses association
- Rules complement collaborative filtering
- Temporal patterns need sequential rule mining
- Sparsity challenge in large catalogs`,
          keyPoints: [
            `Amazon "customers also bought" uses association`,
            `Rules complement collaborative filtering`,
            `Temporal patterns need sequential rule mining`,
            `Sparsity challenge in large catalogs`
          ],
          diagram: `Recommendation & Retail
Image → Conv → ReLU → Pool → Flatten → Dense → Class`,
          commonMistakes: [
            `Optimizing accuracy on imbalanced classes instead of precision/recall/F1`,
            `Tuning hyperparameters on the test set instead of a validation fold`,
            `Target encoding without inner cross-validation — label leakage`,
            `Optimizing accuracy on imbalanced classes instead of precision/recall/F1`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-assoc-1`,
          question: `Calculate support of itemset appearing in 25 of 200 transactions.`,
          solution: `support = 25 / 200
print(support)`,
          difficulty: `easy`
        },
        {
          id: `ex-assoc-2`,
          question: `Calculate lift given confidence=0.6 and P(B)=0.3.`,
          solution: `print(0.6 / 0.3)`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 25,
      module: `module-12`,
      references: [
        {
          id: `sklearn-association`,
          title: `mlxtend — Association Rules`,
          source: `mlxtend`,
          type: `documentation`,
          url: `https://rasbt.github.io/mlxtend/user_guide/frequent_patterns/apriori/`,
          description: `Apriori algorithm for frequent itemset and association rule mining.`
        },
        {
          id: `esl-hastie`,
          title: `The Elements of Statistical Learning`,
          source: `Stanford`,
          type: `book`,
          url: `https://hastie.su.domains/ElemStatLearn/`,
          description: `Free authoritative text on statistical learning methods and theory.`
        },
        {
          id: `bishop-prml`,
          title: `Pattern Recognition and Machine Learning`,
          source: `Cambridge`,
          type: `book`,
          url: `https://www.microsoft.com/en-us/research/publication/pattern-recognition-machine-learning/`,
          description: `Rigorous treatment of probability, inference, and classical ML algorithms.`
        },
        {
          id: `kaggle-intro-ml`,
          title: `Kaggle Learn — Intro to Machine Learning`,
          source: `Kaggle`,
          type: `course`,
          url: `https://www.kaggle.com/learn/intro-to-machine-learning`,
          description: `Practical first steps with decision trees and model validation.`
        }
      ]
    },
{
      id: `ml-gmm`,
      title: `Gaussian Mixture Models`,
      description: `Probabilistic clustering with soft assignments.`,
      level: `beginner`,
      track: `ml`,
      sections: [
        {
          id: `gmm`,
          title: `GMM Fundamentals`,
          content: `### Introduction

Mixture of k Gaussian distributions. Each point has probability of belonging to each cluster. EM algorithm for fitting.

### GMM Fundamentals

### Key Ideas

- Soft clustering — probabilistic assignments
- EM alternates E-step and M-step
- Can model elliptical clusters unlike K-Means
- BIC/AIC for choosing number of components

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
          example: `from sklearn.mixture import GaussianMixture
import numpy as np

X = np.vstack([np.random.normal(0, 1, (100, 2)), np.random.normal(5, 1, (100, 2))])
gmm = GaussianMixture(n_components=2, random_state=42).fit(X)
print(gmm.predict(X[:5]))`,
          keyPoints: [
            `Soft clustering — probabilistic assignments`,
            `EM alternates E-step and M-step`,
            `Can model elliptical clusters unlike K-Means`,
            `BIC/AIC for choosing number of components`
          ],
          commonMistakes: [
            `Tuning hyperparameters on the test set instead of a validation fold`,
            `Target encoding without inner cross-validation — label leakage`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Running K-Means without scaling — features with large ranges dominate`
          ]
        },
        {
          id: `em`,
          title: `Expectation-Maximization`,
          content: `### Introduction

E-step: compute responsibilities (posterior probabilities). M-step: update parameters maximizing expected log-likelihood.

### Expectation-Maximization

### Key Ideas

- EM guarantees convergence to local optimum
- Initialization matters — use k-means init
- Can get stuck in local optima
- Multiple random restarts recommended`,
          pseudoCode: `REPEAT until convergence:
    E-step: compute P(cluster|point) for each point
    M-step: update means, covariances, weights`,
          keyPoints: [
            `EM guarantees convergence to local optimum`,
            `Initialization matters — use k-means init`,
            `Can get stuck in local optima`,
            `Multiple random restarts recommended`
          ],
          commonMistakes: [
            `Optimizing accuracy on imbalanced classes instead of precision/recall/F1`,
            `Tuning hyperparameters on the test set instead of a validation fold`,
            `Target encoding without inner cross-validation — label leakage`,
            `Optimizing accuracy on imbalanced classes instead of precision/recall/F1`
          ]
        },
        {
          id: `vs-kmeans`,
          title: `GMM vs K-Means`,
          content: `### Introduction

K-Means is special case of GMM with equal spherical covariances. GMM more flexible but more parameters.

### GMM vs K-Means

### Key Ideas

- K-Means: hard assignments, spherical clusters
- GMM: soft assignments, elliptical clusters
- GMM provides uncertainty estimates
- K-Means faster and simpler`,
          keyPoints: [
            `K-Means: hard assignments, spherical clusters`,
            `GMM: soft assignments, elliptical clusters`,
            `GMM provides uncertainty estimates`,
            `K-Means faster and simpler`
          ],
          commonMistakes: [
            `Tuning hyperparameters on the test set instead of a validation fold`,
            `Target encoding without inner cross-validation — label leakage`,
            `Running K-Means without scaling — features with large ranges dominate`,
            `Optimizing accuracy on imbalanced classes instead of precision/recall/F1`
          ]
        },
        {
          id: `applications-gmm`,
          title: `Applications`,
          content: `### Introduction

Density estimation, anomaly detection (low likelihood points), speaker identification, image segmentation.

### Applications

### Key Ideas

- score_samples gives log-likelihood per point
- Low likelihood points are anomalies
- Used in acoustic modeling for speech
- Bayesian GMM prevents overfitting`,
          keyPoints: [
            `score_samples gives log-likelihood per point`,
            `Low likelihood points are anomalies`,
            `Used in acoustic modeling for speech`,
            `Bayesian GMM prevents overfitting`
          ],
          diagram: `Applications
Image → Conv → ReLU → Pool → Flatten → Dense → Class`,
          commonMistakes: [
            `Feeding NHWC tensors into PyTorch NCHW layers without permuting`,
            `Wrong padding/stride — output spatial size shrinks unexpectedly`,
            `Optimizing accuracy on imbalanced classes instead of precision/recall/F1`,
            `Tuning hyperparameters on the test set instead of a validation fold`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-gmm-1`,
          question: `Fit GMM with 2 components on 2D normal data and predict labels.`,
          solution: `from sklearn.mixture import GaussianMixture
import numpy as np
X = np.random.default_rng(42).normal(size=(100, 2))
gmm = GaussianMixture(2, random_state=42).fit(X)
print(len(set(gmm.predict(X))))`,
          difficulty: `easy`
        },
        {
          id: `ex-gmm-2`,
          question: `Get BIC for GMM with 2 vs 3 components, pick lower.`,
          solution: `from sklearn.mixture import GaussianMixture
import numpy as np
X = np.random.default_rng(42).normal(size=(100, 2))
bic2 = GaussianMixture(2, random_state=42).fit(X).bic(X)
bic3 = GaussianMixture(3, random_state=42).fit(X).bic(X)
print(2 if bic2 < bic3 else 3)`,
          difficulty: `medium`
        }
      ],
      estimatedMinutes: 25,
      module: `module-12`,
      references: [
        {
          id: `sklearn-mixture`,
          title: `scikit-learn Gaussian Mixture Models`,
          source: `scikit-learn`,
          type: `documentation`,
          url: `https://scikit-learn.org/stable/modules/mixture.html`,
          description: `Probabilistic clustering with soft assignments via EM algorithm.`
        },
        {
          id: `bishop-prml`,
          title: `Pattern Recognition and Machine Learning`,
          source: `Cambridge`,
          type: `book`,
          url: `https://www.microsoft.com/en-us/research/publication/pattern-recognition-machine-learning/`,
          description: `Rigorous treatment of probability, inference, and classical ML algorithms.`
        },
        {
          id: `esl-hastie`,
          title: `The Elements of Statistical Learning`,
          source: `Stanford`,
          type: `book`,
          url: `https://hastie.su.domains/ElemStatLearn/`,
          description: `Free authoritative text on statistical learning methods and theory.`
        },
        {
          id: `sklearn-clustering`,
          title: `scikit-learn Clustering`,
          source: `scikit-learn`,
          type: `documentation`,
          url: `https://scikit-learn.org/stable/modules/clustering.html`,
          description: `K-Means, DBSCAN, hierarchical, and spectral clustering algorithms.`
        }
      ]
    }
];
