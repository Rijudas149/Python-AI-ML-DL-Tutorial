import { module01Topics } from './module01-python-fundamentals';
import { module02Topics } from './module02-control-flow';
import { module03Topics } from './module03-data-structures';
import { module04Topics } from './module04-oop-patterns';
import { module05Topics } from './module05-advanced-python';
import { module06Topics } from './module06-numpy';
import { module07Topics } from './module07-pandas';
import { module08Topics } from './module08-visualization';
import { module09Topics } from './module09-ml-math';
import { module10Topics } from './module10-ml-foundations';
import { module11Topics } from './module11-supervised';
import { module12Topics } from './module12-unsupervised';
import { module13Topics } from './module13-feature-eng';
import { module14Topics } from './module14-dl-fundamentals';
import { module15Topics } from './module15-pytorch';
import { module16Topics } from './module16-cnns';
import { module17Topics } from './module17-nlp-sequences';
import { module18Topics } from './module18-transformers';
import { module19Topics } from './module19-llm-genai';
import { module20Topics } from './module20-mlops-ethics';

import type { Topic, ModuleInfo } from '../../types';

export const modules: ModuleInfo[] = [
  {
    id: 'module-01',
    name: 'Python Fundamentals',
    track: 'python',
    description: `Master Python basics: variables, types, operators, strings, and the development environment.`,
    topics: module01Topics,
  },
  {
    id: 'module-02',
    name: 'Control Flow & Functions',
    track: 'python',
    description: `Conditionals, loops, functions, scope, and Pythonic iteration patterns.`,
    topics: module02Topics,
  },
  {
    id: 'module-03',
    name: 'Data Structures',
    track: 'python',
    description: `Lists, tuples, dicts, sets, and advanced collection patterns.`,
    topics: module03Topics,
  },
  {
    id: 'module-04',
    name: 'OOP & Design Patterns',
    track: 'python',
    description: `Object-oriented programming, inheritance, encapsulation, and design patterns.`,
    topics: module04Topics,
  },
  {
    id: 'module-05',
    name: 'Advanced Python',
    track: 'python',
    description: `Decorators, generators, context managers, type hints, and packaging.`,
    topics: module05Topics,
  },
  {
    id: 'module-06',
    name: 'NumPy & Scientific Computing',
    track: 'data',
    description: `NumPy arrays, broadcasting, linear algebra, and vectorized computation.`,
    topics: module06Topics,
  },
  {
    id: 'module-07',
    name: 'Pandas & Data Wrangling',
    track: 'data',
    description: `DataFrames, indexing, groupby, merging, and time series analysis.`,
    topics: module07Topics,
  },
  {
    id: 'module-08',
    name: 'Data Visualization',
    track: 'data',
    description: `Matplotlib, Seaborn, Plotly, and visualization best practices.`,
    topics: module08Topics,
  },
  {
    id: 'module-09',
    name: 'Math for Machine Learning',
    track: 'ml',
    description: `Linear algebra, calculus, probability, and optimization foundations for ML.`,
    topics: module09Topics,
  },
  {
    id: 'module-10',
    name: 'ML Foundations & Scikit-learn',
    track: 'ml',
    description: `ML workflow, train_test_split, regression, trees, and model evaluation.`,
    topics: module10Topics,
  },
  {
    id: 'module-11',
    name: 'Supervised Learning',
    track: 'ml',
    description: `Advanced regression, classification, SVM, and gradient boosting methods.`,
    topics: module11Topics,
  },
  {
    id: 'module-12',
    name: 'Unsupervised Learning',
    track: 'ml',
    description: `Clustering, dimensionality reduction, anomaly detection, and association rules.`,
    topics: module12Topics,
  },
  {
    id: 'module-13',
    name: 'Feature Engineering & Model Selection',
    track: 'ml',
    description: `Feature scaling, selection, hyperparameter tuning, and model interpretability.`,
    topics: module13Topics,
  },
  {
    id: 'module-14',
    name: 'Deep Learning Fundamentals',
    track: 'dl',
    description: `Neural networks, activations, loss functions, backpropagation, and regularization.`,
    topics: module14Topics,
  },
  {
    id: 'module-15',
    name: 'PyTorch & Neural Networks',
    track: 'dl',
    description: `PyTorch tensors, autograd, nn.Module, training loops, and GPU acceleration.`,
    topics: module15Topics,
  },
  {
    id: 'module-16',
    name: 'CNNs & Computer Vision',
    track: 'dl',
    description: `Convolutional networks, architectures, transfer learning, detection, and segmentation.`,
    topics: module16Topics,
  },
  {
    id: 'module-17',
    name: 'NLP, RNNs & Sequence Models',
    track: 'dl',
    description: `Text processing, embeddings, RNNs, LSTMs, and sequence-to-sequence models.`,
    topics: module17Topics,
  },
  {
    id: 'module-18',
    name: 'Transformers & Attention',
    track: 'dl',
    description: `Self-attention, transformer architecture, BERT, GPT, and positional encoding.`,
    topics: module18Topics,
  },
  {
    id: 'module-19',
    name: 'LLMs, GenAI & Prompt Engineering',
    track: 'ai',
    description: `Large language models, prompting, RAG, fine-tuning, and AI agents.`,
    topics: module19Topics,
  },
  {
    id: 'module-20',
    name: 'MLOps, Deployment & AI Ethics',
    track: 'ai',
    description: `Model serving, Docker, monitoring, drift detection, bias, fairness, and responsible AI.`,
    topics: module20Topics,
  }
];

export const allTopics: Topic[] = [
  ...module01Topics,
  ...module02Topics,
  ...module03Topics,
  ...module04Topics,
  ...module05Topics,
  ...module06Topics,
  ...module07Topics,
  ...module08Topics,
  ...module09Topics,
  ...module10Topics,
  ...module11Topics,
  ...module12Topics,
  ...module13Topics,
  ...module14Topics,
  ...module15Topics,
  ...module16Topics,
  ...module17Topics,
  ...module18Topics,
  ...module19Topics,
  ...module20Topics
];

export function getTopicById(id: string): Topic | undefined {
  return allTopics.find((t) => t.id === id);
}

export function getAdjacentTopics(id: string): { prev?: Topic; next?: Topic } {
  const idx = allTopics.findIndex((t) => t.id === id);
  if (idx === -1) return {};
  return {
    prev: idx > 0 ? allTopics[idx - 1] : undefined,
    next: idx < allTopics.length - 1 ? allTopics[idx + 1] : undefined,
  };
}

export function searchTopics(query: string): Topic[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return allTopics.filter(
    (t) =>
      t.title.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q) ||
      t.module.toLowerCase().includes(q) ||
      t.level.toLowerCase().includes(q) ||
      t.track.toLowerCase().includes(q),
  );
}

export function getTopicsByTrack(track: Topic['track']): Topic[] {
  return allTopics.filter((t) => t.track === track);
}
