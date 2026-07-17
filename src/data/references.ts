import type { Reference } from '../types';

export const allReferences: Reference[] = [
    {
      id: `3blue1brown-calculus`,
      title: `Essence of Calculus`,
      source: `3Blue1Brown`,
      type: `video`,
      url: `https://www.3blue1brown.com/topics/calculus`,
      description: `Geometric intuition for derivatives, integrals, and the chain rule.`
    },
    {
      id: `3blue1brown-linalg`,
      title: `Essence of Linear Algebra`,
      source: `3Blue1Brown`,
      type: `video`,
      url: `https://www.3blue1brown.com/topics/linear-algebra`,
      description: `Visual intuition for vectors, matrices, and transformations.`
    },
    {
      id: `3blue1brown-nn`,
      title: `Neural Networks — 3Blue1Brown`,
      source: `3Blue1Brown`,
      type: `video`,
      url: `https://www.3blue1brown.com/topics/neural-networks`,
      description: `Visual intuition for neurons, layers, backpropagation, and gradient descent.`
    },
    {
      id: `adam-paper`,
      title: `Adam: A Method for Stochastic Optimization`,
      source: `arXiv`,
      type: `paper`,
      url: `https://arxiv.org/abs/1412.6980`,
      description: `Adaptive learning rate optimizer used as default in most deep learning training.`
    },
    {
      id: `alexnet-paper`,
      title: `ImageNet Classification with Deep Convolutional Neural Networks (AlexNet)`,
      source: `NeurIPS`,
      type: `paper`,
      url: `https://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks`,
      description: `Breakthrough 2012 paper that launched the deep learning revolution in vision.`
    },
    {
      id: `anthropic-prompt-engineering`,
      title: `Prompt Engineering Overview`,
      source: `Anthropic`,
      type: `documentation`,
      url: `https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview`,
      description: `Techniques for clear, effective prompts with Claude and general LLMs.`
    },
    {
      id: `attention-paper`,
      title: `Attention Is All You Need`,
      source: `arXiv`,
      type: `paper`,
      url: `https://arxiv.org/abs/1706.03762`,
      description: `Transformer architecture paper that revolutionized NLP and beyond.`
    },
    {
      id: `batch-norm-paper`,
      title: `Batch Normalization: Accelerating Deep Network Training`,
      source: `arXiv`,
      type: `paper`,
      url: `https://arxiv.org/abs/1502.03167`,
      description: `Normalizes layer inputs to stabilize and accelerate deep network training.`
    },
    {
      id: `berkeley-cs189`,
      title: `Berkeley CS189/289A — Introduction to Machine Learning`,
      source: `Berkeley`,
      type: `course`,
      url: `https://people.eecs.berkeley.edu/~jrs/189/`,
      description: `Comprehensive ML course with strong mathematical foundations.`
    },
    {
      id: `bert-paper`,
      title: `BERT: Pre-training of Deep Bidirectional Transformers`,
      source: `arXiv`,
      type: `paper`,
      url: `https://arxiv.org/abs/1810.04805`,
      description: `Bidirectional encoder pretraining that set new benchmarks across NLP tasks.`
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
      id: `clrs-algorithms`,
      title: `Introduction to Algorithms (CLRS)`,
      source: `MIT Press`,
      type: `book`,
      url: `https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/`,
      description: `Definitive reference for sorting, searching, and algorithmic complexity analysis.`
    },
    {
      id: `coursera-andrew-ng`,
      title: `Machine Learning Specialization`,
      source: `Coursera`,
      type: `course`,
      url: `https://www.coursera.org/specializations/machine-learning-introduction`,
      description: `Andrew Ng's accessible introduction to supervised and unsupervised learning.`
    },
    {
      id: `cover-thomas-info-theory`,
      title: `Elements of Information Theory`,
      source: `Wiley`,
      type: `book`,
      url: `https://www.elementsofinformationtheory.com/`,
      description: `Definitive reference for entropy, mutual information, and coding theory.`
    },
    {
      id: `cs106a-python`,
      title: `Stanford CS106A — Programming Methodology`,
      source: `Stanford`,
      type: `course`,
      url: `https://cs106a.stanford.edu/`,
      description: `Foundational Stanford course covering Python programming from first principles.`
    },
    {
      id: `cs229-optimization`,
      title: `CS229 Lecture Notes — Optimization`,
      source: `Stanford CS229`,
      type: `course`,
      url: `https://cs229.stanford.edu/notes2022fall/main_notes.pdf`,
      description: `Gradient descent, Newton's method, and convergence analysis for ML.`
    },
    {
      id: `cs231n-conv-notes`,
      title: `CS231n Convolutional Neural Networks`,
      source: `Stanford CS231n`,
      type: `course`,
      url: `https://cs231n.github.io/convolutional-networks/`,
      description: `Detailed notes on convolution, pooling, and spatial feature extraction.`
    },
    {
      id: `ddpm-paper`,
      title: `Denoising Diffusion Probabilistic Models`,
      source: `arXiv`,
      type: `paper`,
      url: `https://arxiv.org/abs/2006.11239`,
      description: `Foundational diffusion model paper powering modern image generation.`
    },
    {
      id: `docker-docs`,
      title: `Docker Documentation`,
      source: `Docker`,
      type: `documentation`,
      url: `https://docs.docker.com/get-started/`,
      description: `Containerization fundamentals for packaging ML applications.`
    },
    {
      id: `dropout-paper`,
      title: `Dropout: A Simple Way to Prevent Neural Networks from Overfitting`,
      source: `JMLR`,
      type: `paper`,
      url: `https://jmlr.org/papers/v15/srivastava14a.html`,
      description: `Foundational regularization technique randomly dropping units during training.`
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
      id: `eu-ai-act`,
      title: `EU Artificial Intelligence Act`,
      source: `European Union`,
      type: `documentation`,
      url: `https://artificialintelligenceact.eu/`,
      description: `Comprehensive EU regulatory framework for high-risk AI systems.`
    },
    {
      id: `evidently-ai`,
      title: `Evidently AI — ML Monitoring`,
      source: `Evidently AI`,
      type: `documentation`,
      url: `https://docs.evidentlyai.com/`,
      description: `Open-source tools for data drift detection and model performance monitoring.`
    },
    {
      id: `fairlearn-docs`,
      title: `Fairlearn Documentation`,
      source: `Fairlearn`,
      type: `documentation`,
      url: `https://fairlearn.org/main/user_guide/index.html`,
      description: `Assessing and mitigating unfairness in machine learning models.`
    },
    {
      id: `fastai-course`,
      title: `fast.ai Practical Deep Learning`,
      source: `fast.ai`,
      type: `course`,
      url: `https://course.fast.ai/`,
      description: `Top-down, code-first approach to training state-of-the-art models.`
    },
    {
      id: `gan-paper`,
      title: `Generative Adversarial Networks`,
      source: `arXiv`,
      type: `paper`,
      url: `https://arxiv.org/abs/1406.2661`,
      description: `Adversarial training framework for generative modeling.`
    },
    {
      id: `glove-paper`,
      title: `GloVe: Global Vectors for Word Representation`,
      source: `Stanford NLP`,
      type: `paper`,
      url: `https://nlp.stanford.edu/pubs/glove.pdf`,
      description: `Combines global matrix factorization with local context window methods.`
    },
    {
      id: `goodfellow-dl-book`,
      title: `Deep Learning`,
      source: `MIT Press`,
      type: `book`,
      url: `https://www.deeplearningbook.org/`,
      description: `Comprehensive free textbook covering neural networks, optimization, and architectures.`
    },
    {
      id: `google-responsible-ai`,
      title: `Google Responsible AI Practices`,
      source: `Google`,
      type: `documentation`,
      url: `https://ai.google/responsibility/responsible-ai-practices/`,
      description: `Industry guidelines for building fair, accountable AI systems.`
    },
    {
      id: `gpt3-paper`,
      title: `Language Models are Few-Shot Learners (GPT-3)`,
      source: `arXiv`,
      type: `paper`,
      url: `https://arxiv.org/abs/2005.14165`,
      description: `Demonstrated emergent few-shot learning at scale with autoregressive LMs.`
    },
    {
      id: `huggingface-nlp-course`,
      title: `Hugging Face NLP Course`,
      source: `Hugging Face`,
      type: `course`,
      url: `https://huggingface.co/learn/nlp-course/chapter1/1`,
      description: `Hands-on transformers course using the Hugging Face ecosystem.`
    },
    {
      id: `jay-alammar-attention`,
      title: `The Illustrated Transformer`,
      source: `Jay Alammar`,
      type: `documentation`,
      url: `https://jalammar.github.io/illustrated-transformer/`,
      description: `Visual step-by-step explanation of self-attention and transformer blocks.`
    },
    {
      id: `kaggle-data-viz`,
      title: `Kaggle Learn — Data Visualization`,
      source: `Kaggle`,
      type: `course`,
      url: `https://www.kaggle.com/learn/data-visualization`,
      description: `Practical chart selection and storytelling with seaborn.`
    },
    {
      id: `kaggle-intermediate-ml`,
      title: `Kaggle Learn — Intermediate Machine Learning`,
      source: `Kaggle`,
      type: `course`,
      url: `https://www.kaggle.com/learn/intermediate-machine-learning`,
      description: `Missing values, categorical variables, and pipeline best practices.`
    },
    {
      id: `kaggle-intro-ml`,
      title: `Kaggle Learn — Intro to Machine Learning`,
      source: `Kaggle`,
      type: `course`,
      url: `https://www.kaggle.com/learn/intro-to-machine-learning`,
      description: `Practical first steps with decision trees and model validation.`
    },
    {
      id: `kaggle-pandas`,
      title: `Kaggle Learn — Pandas`,
      source: `Kaggle`,
      type: `course`,
      url: `https://www.kaggle.com/learn/pandas`,
      description: `Hands-on pandas exercises for real-world data manipulation.`
    },
    {
      id: `kaggle-python`,
      title: `Kaggle Learn — Python`,
      source: `Kaggle`,
      type: `course`,
      url: `https://www.kaggle.com/learn/python`,
      description: `Interactive micro-course covering Python essentials for data science.`
    },
    {
      id: `khan-derivatives`,
      title: `Derivatives — Khan Academy`,
      source: `Khan Academy`,
      type: `article`,
      url: `https://www.khanacademy.org/math/ap-calculus-ab/ab-differentiation-1-new`,
      description: `Definition of the derivative, rules, and applications with worked examples.`
    },
    {
      id: `khan-lhopital`,
      title: `L'Hôpital's Rule — Khan Academy`,
      source: `Khan Academy`,
      type: `article`,
      url: `https://www.khanacademy.org/math/ap-calculus-ab/ab-diff-analytical-applications-new/ab-5-4/a/lhopitals-rule`,
      description: `Step-by-step guide to evaluating 0/0 and ∞/∞ indeterminate forms with practice problems.`
    },
    {
      id: `khan-limits`,
      title: `Limits and Continuity — Khan Academy`,
      source: `Khan Academy`,
      type: `article`,
      url: `https://www.khanacademy.org/math/ap-calculus-ab/ab-limits-new`,
      description: `Interactive lessons on limits, one-sided limits, squeeze theorem, and continuity.`
    },
    {
      id: `khan-multivariable-calc`,
      title: `Multivariable Calculus — Khan Academy`,
      source: `Khan Academy`,
      type: `course`,
      url: `https://www.khanacademy.org/math/multivariable-calculus`,
      description: `Partial derivatives and gradients essential for neural network training.`
    },
    {
      id: `khan-probability`,
      title: `Statistics and Probability — Khan Academy`,
      source: `Khan Academy`,
      type: `course`,
      url: `https://www.khanacademy.org/math/statistics-probability`,
      description: `Probability distributions, Bayes theorem, and statistical inference.`
    },
    {
      id: `kubernetes-ml`,
      title: `Kubernetes Documentation`,
      source: `Kubernetes`,
      type: `documentation`,
      url: `https://kubernetes.io/docs/home/`,
      description: `Orchestrating containerized ML services at scale in production.`
    },
    {
      id: `langchain-agents`,
      title: `LangChain Agents Documentation`,
      source: `LangChain`,
      type: `documentation`,
      url: `https://python.langchain.com/docs/concepts/agents/`,
      description: `Building LLM agents that reason, plan, and use external tools.`
    },
    {
      id: `lightgbm-docs`,
      title: `LightGBM Documentation`,
      source: `Microsoft`,
      type: `documentation`,
      url: `https://lightgbm.readthedocs.io/en/latest/`,
      description: `Fast gradient boosting with leaf-wise tree growth for large datasets.`
    },
    {
      id: `lime-paper`,
      title: `"Why Should I Trust You?" — Explaining Predictions (LIME)`,
      source: `arXiv`,
      type: `paper`,
      url: `https://arxiv.org/abs/1602.04938`,
      description: `Local interpretable model-agnostic explanations for any classifier.`
    },
    {
      id: `lora-paper`,
      title: `LoRA: Low-Rank Adaptation of Large Language Models`,
      source: `arXiv`,
      type: `paper`,
      url: `https://arxiv.org/abs/2106.09685`,
      description: `Parameter-efficient fine-tuning via low-rank weight updates.`
    },
    {
      id: `lstm-paper`,
      title: `Long Short-Term Memory`,
      source: `Neural Computation`,
      type: `paper`,
      url: `https://www.bioinf.jku.at/publications/older/2604.pdf`,
      description: `Gated recurrent architecture solving vanishing gradient in long sequences.`
    },
    {
      id: `mask-rcnn-paper`,
      title: `Mask R-CNN`,
      source: `arXiv`,
      type: `paper`,
      url: `https://arxiv.org/abs/1703.06870`,
      description: `Instance segmentation framework extending Faster R-CNN with pixel masks.`
    },
    {
      id: `matplotlib-oo`,
      title: `Matplotlib Object-Oriented Interface`,
      source: `Matplotlib`,
      type: `documentation`,
      url: `https://matplotlib.org/stable/users/explain/figure/api_interfaces.html`,
      description: `Figure and Axes API for fine-grained control over visualizations.`
    },
    {
      id: `matplotlib-pyplot`,
      title: `Matplotlib Pyplot Tutorial`,
      source: `Matplotlib`,
      type: `documentation`,
      url: `https://matplotlib.org/stable/tutorials/pyplot.html`,
      description: `Creating line, scatter, bar, and histogram plots with pyplot.`
    },
    {
      id: `mit-1806-linalg`,
      title: `MIT 18.06 Linear Algebra`,
      source: `MIT`,
      type: `course`,
      url: `https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/`,
      description: `Gilbert Strang's foundational linear algebra course used across ML.`
    },
    {
      id: `mit-6034`,
      title: `MIT 6.034 — Artificial Intelligence`,
      source: `MIT`,
      type: `course`,
      url: `https://ocw.mit.edu/courses/6-034-artificial-intelligence-fall-2010/`,
      description: `Classic AI course covering search, knowledge, learning, and reasoning.`
    },
    {
      id: `mit-6s191`,
      title: `MIT 6.S191 — Introduction to Deep Learning`,
      source: `MIT`,
      type: `course`,
      url: `http://introtodeeplearning.com/`,
      description: `Accessible MIT course with lectures on CNNs, RNNs, and generative models.`
    },
    {
      id: `ml-bias-variance-tradeoff`,
      title: `Understanding the Bias-Variance Tradeoff`,
      source: `mlu.explain`,
      type: `documentation`,
      url: `https://mlu-explain.github.io/bias-variance/`,
      description: `Interactive explanation of underfitting, overfitting, and model complexity.`
    },
    {
      id: `mlflow-docs`,
      title: `MLflow Documentation`,
      source: `MLflow`,
      type: `documentation`,
      url: `https://mlflow.org/docs/latest/index.html`,
      description: `Open platform for experiment tracking, model registry, and deployment.`
    },
    {
      id: `model-cards-paper`,
      title: `Model Cards for Model Reporting`,
      source: `arXiv`,
      type: `paper`,
      url: `https://arxiv.org/abs/1810.03993`,
      description: `Framework for transparent documentation of ML model capabilities and limitations.`
    },
    {
      id: `nist-ai-rmf`,
      title: `NIST AI Risk Management Framework`,
      source: `NIST`,
      type: `documentation`,
      url: `https://www.nist.gov/itl/ai-risk-management-framework`,
      description: `US framework for trustworthy AI development and governance.`
    },
    {
      id: `numpy-broadcasting`,
      title: `Array Broadcasting in NumPy`,
      source: `NumPy`,
      type: `documentation`,
      url: `https://numpy.org/doc/stable/user/basics.broadcasting.html`,
      description: `Rules for operating on arrays of different shapes without copying.`
    },
    {
      id: `numpy-indexing`,
      title: `Indexing and Slicing Arrays`,
      source: `NumPy`,
      type: `documentation`,
      url: `https://numpy.org/doc/stable/user/basics.indexing.html`,
      description: `Basic, advanced, and boolean indexing for multidimensional arrays.`
    },
    {
      id: `numpy-linalg`,
      title: `numpy.linalg — Linear Algebra`,
      source: `NumPy`,
      type: `documentation`,
      url: `https://numpy.org/doc/stable/reference/routines.linalg.html`,
      description: `Matrix multiplication, decomposition, eigenvalues, and linear systems.`
    },
    {
      id: `numpy-ndarray`,
      title: `The N-dimensional Array (ndarray)`,
      source: `NumPy`,
      type: `documentation`,
      url: `https://numpy.org/doc/stable/reference/arrays.ndarray.html`,
      description: `Core ndarray structure — shape, dtype, strides, and memory layout.`
    },
    {
      id: `numpy-performance`,
      title: `Performance Tips for NumPy`,
      source: `NumPy`,
      type: `documentation`,
      url: `https://numpy.org/doc/stable/user/performance.html`,
      description: `Vectorization strategies to avoid slow Python loops over arrays.`
    },
    {
      id: `numpy-quickstart`,
      title: `NumPy Quickstart Tutorial`,
      source: `NumPy`,
      type: `documentation`,
      url: `https://numpy.org/doc/stable/user/quickstart.html`,
      description: `Creating arrays, indexing, and basic operations with ndarrays.`
    },
    {
      id: `numpy-random`,
      title: `Random Sampling (numpy.random)`,
      source: `NumPy`,
      type: `documentation`,
      url: `https://numpy.org/doc/stable/reference/random/index.html`,
      description: `Reproducible random number generation and statistical distributions.`
    },
    {
      id: `onnx-docs`,
      title: `ONNX Documentation`,
      source: `ONNX`,
      type: `documentation`,
      url: `https://onnx.ai/onnx/intro/`,
      description: `Open format for interoperable model serialization across frameworks.`
    },
    {
      id: `openai-gpt-best-practices`,
      title: `GPT Best Practices`,
      source: `OpenAI`,
      type: `documentation`,
      url: `https://platform.openai.com/docs/guides/prompt-engineering`,
      description: `Official guide to prompt engineering strategies for LLM applications.`
    },
    {
      id: `pandas-getting-started`,
      title: `Getting Started with pandas`,
      source: `Pandas`,
      type: `documentation`,
      url: `https://pandas.pydata.org/docs/getting_started/index.html`,
      description: `Introductory guide to Series, DataFrames, and basic operations.`
    },
    {
      id: `pandas-groupby`,
      title: `Group By: Split-Apply-Combine`,
      source: `Pandas`,
      type: `documentation`,
      url: `https://pandas.pydata.org/docs/user_guide/groupby.html`,
      description: `Grouped aggregations, transformations, and filtering patterns.`
    },
    {
      id: `pandas-indexing`,
      title: `Indexing and Selecting Data`,
      source: `Pandas`,
      type: `documentation`,
      url: `https://pandas.pydata.org/docs/user_guide/indexing.html`,
      description: `loc, iloc, boolean masks, query(), and multi-index selection.`
    },
    {
      id: `pandas-merge`,
      title: `Merge, Join, Concatenate and Compare`,
      source: `Pandas`,
      type: `documentation`,
      url: `https://pandas.pydata.org/docs/user_guide/merging.html`,
      description: `Combining DataFrames with SQL-like join operations.`
    },
    {
      id: `pandas-missing`,
      title: `Working with Missing Data`,
      source: `Pandas`,
      type: `documentation`,
      url: `https://pandas.pydata.org/docs/user_guide/missing_data.html`,
      description: `Detecting, filling, and dropping NaN values in tabular data.`
    },
    {
      id: `pandas-timeseries`,
      title: `Time Series / Date Functionality`,
      source: `Pandas`,
      type: `documentation`,
      url: `https://pandas.pydata.org/docs/user_guide/timeseries.html`,
      description: `DatetimeIndex, resampling, and time-based aggregations.`
    },
    {
      id: `pauls-derivatives`,
      title: `Derivatives — Paul's Online Math Notes`,
      source: `Paul's Online Notes`,
      type: `article`,
      url: `https://tutorial.math.lamar.edu/classes/calci/derivatives.aspx`,
      description: `Definition, interpretation, and derivative rules with many practice problems.`
    },
    {
      id: `pauls-lhopital`,
      title: `L'Hôpital's Rule — Paul's Online Math Notes`,
      source: `Paul's Online Notes`,
      type: `article`,
      url: `https://tutorial.math.lamar.edu/classes/calci/lhospitalsrule.aspx`,
      description: `Worked examples for indeterminate forms and when to apply the rule repeatedly.`
    },
    {
      id: `pauls-limits`,
      title: `Limits — Paul's Online Math Notes`,
      source: `Paul's Online Notes`,
      type: `article`,
      url: `https://tutorial.math.lamar.edu/classes/calci/limitsintro.aspx`,
      description: `Clear calculus I notes on limit definition, laws, one-sided limits, and continuity.`
    },
    {
      id: `peft-docs`,
      title: `Hugging Face PEFT Documentation`,
      source: `Hugging Face`,
      type: `documentation`,
      url: `https://huggingface.co/docs/peft/index`,
      description: `Parameter-efficient fine-tuning with LoRA, prefix tuning, and adapters.`
    },
    {
      id: `pip-user-guide`,
      title: `pip User Guide`,
      source: `Python.org`,
      type: `documentation`,
      url: `https://pip.pypa.io/en/stable/user_guide/`,
      description: `Installing, upgrading, and managing Python packages with pip.`
    },
    {
      id: `plotly-python`,
      title: `Plotly Python Graphing Library`,
      source: `Plotly`,
      type: `documentation`,
      url: `https://plotly.com/python/`,
      description: `Interactive charts for exploration, dashboards, and web deployment.`
    },
    {
      id: `python-abc-doc`,
      title: `abc — Abstract Base Classes`,
      source: `Python.org`,
      type: `documentation`,
      url: `https://docs.python.org/3/library/abc.html`,
      description: `Define interfaces and enforce method implementation in subclasses.`
    },
    {
      id: `python-bisect-doc`,
      title: `bisect — Array Bisection Algorithm`,
      source: `Python.org`,
      type: `documentation`,
      url: `https://docs.python.org/3/library/bisect.html`,
      description: `Binary search utilities for maintaining sorted sequences.`
    },
    {
      id: `python-classes-doc`,
      title: `Classes`,
      source: `Python.org`,
      type: `documentation`,
      url: `https://docs.python.org/3/tutorial/classes.html`,
      description: `Class definition, instances, methods, and inheritance fundamentals.`
    },
    {
      id: `python-collections-module`,
      title: `collections Module`,
      source: `Python.org`,
      type: `documentation`,
      url: `https://docs.python.org/3/library/collections.html`,
      description: `Specialized containers: namedtuple, Counter, defaultdict, ChainMap.`
    },
    {
      id: `python-comprehensions-doc`,
      title: `List Comprehensions`,
      source: `Python.org`,
      type: `documentation`,
      url: `https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions`,
      description: `Concise syntax for building lists, dicts, and sets from iterables.`
    },
    {
      id: `python-context-managers-doc`,
      title: `Context Managers`,
      source: `Python.org`,
      type: `documentation`,
      url: `https://docs.python.org/3/reference/datamodel.html#context-managers`,
      description: `Resource management with __enter__/__exit__ and the with statement.`
    },
    {
      id: `python-contextlib-doc`,
      title: `contextlib Utilities`,
      source: `Python.org`,
      type: `documentation`,
      url: `https://docs.python.org/3/library/contextlib.html`,
      description: `Helpers like @contextmanager for writing context managers easily.`
    },
    {
      id: `python-dataclasses-doc`,
      title: `dataclasses Module`,
      source: `Python.org`,
      type: `documentation`,
      url: `https://docs.python.org/3/library/dataclasses.html`,
      description: `Boilerplate-free classes for storing data with auto-generated methods.`
    },
    {
      id: `python-datamodel`,
      title: `Python Data Model`,
      source: `Python.org`,
      type: `documentation`,
      url: `https://docs.python.org/3/reference/datamodel.html`,
      description: `Deep dive into objects, types, and the semantics behind Python values.`
    },
    {
      id: `python-decorators-doc`,
      title: `Primer on Python Decorators`,
      source: `Real Python`,
      type: `documentation`,
      url: `https://realpython.com/primer-on-python-decorators/`,
      description: `Functions wrapping functions — essential for frameworks and cross-cutting concerns.`
    },
    {
      id: `python-deque-doc`,
      title: `collections.deque`,
      source: `Python.org`,
      type: `documentation`,
      url: `https://docs.python.org/3/library/collections.html#collections.deque`,
      description: `Double-ended queue optimized for O(1) append/pop at both ends.`
    },
    {
      id: `python-design-patterns`,
      title: `Python Design Patterns Guide`,
      source: `Refactoring Guru`,
      type: `documentation`,
      url: `https://refactoring.guru/design-patterns/python`,
      description: `Catalog of creational, structural, and behavioral patterns in Python.`
    },
    {
      id: `python-dicts-doc`,
      title: `Dictionaries`,
      source: `Python.org`,
      type: `documentation`,
      url: `https://docs.python.org/3/tutorial/datastructures.html#dictionaries`,
      description: `Hash maps with key-value pairs, views, and comprehension syntax.`
    },
    {
      id: `python-fstrings-pep498`,
      title: `PEP 498 — Literal String Interpolation`,
      source: `Python.org`,
      type: `documentation`,
      url: `https://peps.python.org/pep-0498/`,
      description: `Specification for f-strings, the preferred modern formatting approach.`
    },
    {
      id: `python-functions-doc`,
      title: `Defining Functions`,
      source: `Python.org`,
      type: `documentation`,
      url: `https://docs.python.org/3/tutorial/controlflow.html#defining-functions`,
      description: `Function definition, parameters, return values, and docstrings.`
    },
    {
      id: `python-generators-doc`,
      title: `Generator Expressions & yield`,
      source: `Python.org`,
      type: `documentation`,
      url: `https://docs.python.org/3/howto/functional.html#generators`,
      description: `Lazy iteration with generator functions and memory-efficient pipelines.`
    },
    {
      id: `python-if-doc`,
      title: `More Control Flow Tools — if Statements`,
      source: `Python.org`,
      type: `documentation`,
      url: `https://docs.python.org/3/tutorial/controlflow.html#if-statements`,
      description: `Official tutorial on conditionals, elif chains, and boolean logic.`
    },
    {
      id: `python-inheritance-doc`,
      title: `Inheritance`,
      source: `Python.org`,
      type: `documentation`,
      url: `https://docs.python.org/3/tutorial/classes.html#inheritance`,
      description: `Base classes, method overriding, isinstance(), and multiple inheritance.`
    },
    {
      id: `python-input-output`,
      title: `Input and Output`,
      source: `Python.org`,
      type: `documentation`,
      url: `https://docs.python.org/3/tutorial/inputoutput.html`,
      description: `Covers print formatting, reading input, and file I/O fundamentals.`
    },
    {
      id: `python-iterators-doc`,
      title: `Iterator Protocol`,
      source: `Python.org`,
      type: `documentation`,
      url: `https://docs.python.org/3/library/stdtypes.html#iterator-types`,
      description: `How __iter__ and __next__ enable lazy, memory-efficient iteration.`
    },
    {
      id: `python-lambda-doc`,
      title: `Lambda Expressions`,
      source: `Python.org`,
      type: `documentation`,
      url: `https://docs.python.org/3/tutorial/controlflow.html#lambda-expressions`,
      description: `Anonymous functions for concise one-expression callbacks.`
    },
    {
      id: `python-lists-doc`,
      title: `More on Lists`,
      source: `Python.org`,
      type: `documentation`,
      url: `https://docs.python.org/3/tutorial/datastructures.html#more-on-lists`,
      description: `List methods, slicing, stacking, and queue operations.`
    },
    {
      id: `python-loops-doc`,
      title: `for and while Loops`,
      source: `Python.org`,
      type: `documentation`,
      url: `https://docs.python.org/3/tutorial/controlflow.html#for-statements`,
      description: `Iteration over sequences, range(), and loop control with break/continue.`
    },
    {
      id: `python-modules-doc`,
      title: `Modules and Packages`,
      source: `Python.org`,
      type: `documentation`,
      url: `https://docs.python.org/3/tutorial/modules.html`,
      description: `Organizing code into importable modules and package hierarchies.`
    },
    {
      id: `python-operators-doc`,
      title: `Python Operator Reference`,
      source: `Python.org`,
      type: `documentation`,
      url: `https://docs.python.org/3/library/operator.html`,
      description: `Complete reference for arithmetic, comparison, and logical operators.`
    },
    {
      id: `python-packaging-guide`,
      title: `Python Packaging User Guide`,
      source: `PyPA`,
      type: `documentation`,
      url: `https://packaging.python.org/en/latest/tutorials/installing-packages/`,
      description: `Best practices for project setup, virtual environments, and distribution.`
    },
    {
      id: `python-properties-doc`,
      title: `property — Attribute Access`,
      source: `Python.org`,
      type: `documentation`,
      url: `https://docs.python.org/3/library/functions.html#property`,
      description: `Managed attributes with getters, setters, and encapsulation patterns.`
    },
    {
      id: `python-repl`,
      title: `Interactive Python Shell`,
      source: `Python.org`,
      type: `documentation`,
      url: `https://docs.python.org/3/tutorial/interpreter.html`,
      description: `How to use the REPL for rapid experimentation and debugging.`
    },
    {
      id: `python-sets-doc`,
      title: `Sets`,
      source: `Python.org`,
      type: `documentation`,
      url: `https://docs.python.org/3/tutorial/datastructures.html#sets`,
      description: `Unordered collections for membership testing and set algebra.`
    },
    {
      id: `python-sort-doc`,
      title: `Sorting HOW TO`,
      source: `Python.org`,
      type: `documentation`,
      url: `https://docs.python.org/3/howto/sorting.html`,
      description: `Guide to sorted(), list.sort(), key functions, and stability.`
    },
    {
      id: `python-strings-doc`,
      title: `Python Text Sequence Type — str`,
      source: `Python.org`,
      type: `documentation`,
      url: `https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str`,
      description: `Official documentation for string methods, slicing, and immutability.`
    },
    {
      id: `python-tutorial-intro`,
      title: `Python Tutorial — An Informal Introduction`,
      source: `Python.org`,
      type: `documentation`,
      url: `https://docs.python.org/3/tutorial/introduction.html`,
      description: `Official introduction to Python variables, numbers, and strings.`
    },
    {
      id: `python-type-hints-doc`,
      title: `Typing — Support for Type Hints`,
      source: `Python.org`,
      type: `documentation`,
      url: `https://docs.python.org/3/library/typing.html`,
      description: `Static type annotations for safer, more maintainable Python code.`
    },
    {
      id: `python-typing-protocol`,
      title: `typing.Protocol — Structural Subtyping`,
      source: `Python.org`,
      type: `documentation`,
      url: `https://docs.python.org/3/library/typing.html#typing.Protocol`,
      description: `Duck-typing interfaces without explicit inheritance.`
    },
    {
      id: `python-venv-doc`,
      title: `venv — Creation of Virtual Environments`,
      source: `Python.org`,
      type: `documentation`,
      url: `https://docs.python.org/3/library/venv.html`,
      description: `Standard library tool for isolating project dependencies.`
    },
    {
      id: `pytorch-amp`,
      title: `Automatic Mixed Precision`,
      source: `PyTorch`,
      type: `documentation`,
      url: `https://pytorch.org/docs/stable/amp.html`,
      description: `Mixed precision training for faster GPU computation with minimal accuracy loss.`
    },
    {
      id: `pytorch-autograd`,
      title: `PyTorch Autograd Mechanics`,
      source: `PyTorch`,
      type: `documentation`,
      url: `https://pytorch.org/tutorials/beginner/blitz/autograd_tutorial.html`,
      description: `Automatic differentiation and computational graph construction.`
    },
    {
      id: `pytorch-cuda`,
      title: `PyTorch CUDA Semantics`,
      source: `PyTorch`,
      type: `documentation`,
      url: `https://pytorch.org/docs/stable/notes/cuda.html`,
      description: `Moving tensors to GPU, multi-GPU training, and CUDA best practices.`
    },
    {
      id: `pytorch-dataloader`,
      title: `PyTorch Data Loading Tutorial`,
      source: `PyTorch`,
      type: `documentation`,
      url: `https://pytorch.org/tutorials/beginner/basics/data_tutorial.html`,
      description: `Dataset, DataLoader, and efficient batching for training pipelines.`
    },
    {
      id: `pytorch-nn-module`,
      title: `PyTorch nn.Module Guide`,
      source: `PyTorch`,
      type: `documentation`,
      url: `https://pytorch.org/tutorials/beginner/basics/buildmodel_tutorial.html`,
      description: `Object-oriented model definition with layers, parameters, and forward pass.`
    },
    {
      id: `pytorch-tensors`,
      title: `PyTorch Tensor Tutorial`,
      source: `PyTorch`,
      type: `documentation`,
      url: `https://pytorch.org/tutorials/beginner/basics/tensorqs_tutorial.html`,
      description: `Creating, indexing, and operating on PyTorch tensors with GPU support.`
    },
    {
      id: `pytorch-transfer-learning`,
      title: `PyTorch Transfer Learning Tutorial`,
      source: `PyTorch`,
      type: `documentation`,
      url: `https://pytorch.org/tutorials/beginner/transfer_learning_tutorial.html`,
      description: `Fine-tuning pretrained models for new tasks with limited data.`
    },
    {
      id: `pytorch-tutorials`,
      title: `PyTorch Tutorials`,
      source: `PyTorch`,
      type: `documentation`,
      url: `https://pytorch.org/tutorials/`,
      description: `Official tutorials from tensors through training loops and deployment.`
    },
    {
      id: `rag-paper`,
      title: `Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks`,
      source: `arXiv`,
      type: `paper`,
      url: `https://arxiv.org/abs/2005.11401`,
      description: `Foundational RAG paper combining retrieval with generative models.`
    },
    {
      id: `reAct-paper`,
      title: `ReAct: Synergizing Reasoning and Acting in Language Models`,
      source: `arXiv`,
      type: `paper`,
      url: `https://arxiv.org/abs/2210.03629`,
      description: `Interleaved reasoning and tool-use pattern for LLM agents.`
    },
    {
      id: `real-python-operators`,
      title: `Operators and Expressions in Python`,
      source: `Real Python`,
      type: `documentation`,
      url: `https://realpython.com/python-operators-expressions/`,
      description: `Explains operator precedence, short-circuit evaluation, and common pitfalls.`
    },
    {
      id: `real-python-scope`,
      title: `Namespaces and Scope in Python`,
      source: `Real Python`,
      type: `documentation`,
      url: `https://realpython.com/python-namespaces-scope/`,
      description: `LEGB rule, closures, and how Python resolves variable names.`
    },
    {
      id: `real-python-strings`,
      title: `Python Strings and Character Data`,
      source: `Real Python`,
      type: `documentation`,
      url: `https://realpython.com/python-strings/`,
      description: `Hands-on coverage of formatting, encoding, and text processing patterns.`
    },
    {
      id: `real-python-variables`,
      title: `Variables in Python`,
      source: `Real Python`,
      type: `documentation`,
      url: `https://realpython.com/python-variables/`,
      description: `Practical guide to naming, assignment, and dynamic typing in Python.`
    },
    {
      id: `resnet-paper`,
      title: `Deep Residual Learning for Image Recognition (ResNet)`,
      source: `arXiv`,
      type: `paper`,
      url: `https://arxiv.org/abs/1512.03385`,
      description: `Skip connections enabling training of very deep networks — foundational architecture.`
    },
    {
      id: `scikit-learn-user-guide`,
      title: `scikit-learn User Guide`,
      source: `scikit-learn`,
      type: `documentation`,
      url: `https://scikit-learn.org/stable/user_guide.html`,
      description: `Complete reference for ML algorithms, pipelines, and model selection.`
    },
    {
      id: `seaborn-tutorial`,
      title: `Seaborn Tutorial`,
      source: `Seaborn`,
      type: `documentation`,
      url: `https://seaborn.pydata.org/tutorial.html`,
      description: `Statistical visualizations built on matplotlib with elegant defaults.`
    },
    {
      id: `seq2seq-attention-paper`,
      title: `Neural Machine Translation by Jointly Learning to Align and Attend`,
      source: `arXiv`,
      type: `paper`,
      url: `https://arxiv.org/abs/1409.0473`,
      description: `Introduced attention mechanism for encoder-decoder sequence models.`
    },
    {
      id: `shap-docs`,
      title: `SHAP Documentation`,
      source: `SHAP`,
      type: `documentation`,
      url: `https://shap.readthedocs.io/en/latest/`,
      description: `Unified framework for explaining model predictions with Shapley values.`
    },
    {
      id: `sklearn-anomaly`,
      title: `scikit-learn Outlier Detection`,
      source: `scikit-learn`,
      type: `documentation`,
      url: `https://scikit-learn.org/stable/modules/outlier_detection.html`,
      description: `Isolation Forest, Local Outlier Factor, and novelty detection methods.`
    },
    {
      id: `sklearn-association`,
      title: `mlxtend — Association Rules`,
      source: `mlxtend`,
      type: `documentation`,
      url: `https://rasbt.github.io/mlxtend/user_guide/frequent_patterns/apriori/`,
      description: `Apriori algorithm for frequent itemset and association rule mining.`
    },
    {
      id: `sklearn-clustering`,
      title: `scikit-learn Clustering`,
      source: `scikit-learn`,
      type: `documentation`,
      url: `https://scikit-learn.org/stable/modules/clustering.html`,
      description: `K-Means, DBSCAN, hierarchical, and spectral clustering algorithms.`
    },
    {
      id: `sklearn-cross-validation`,
      title: `scikit-learn Cross-Validation`,
      source: `scikit-learn`,
      type: `documentation`,
      url: `https://scikit-learn.org/stable/modules/cross_validation.html`,
      description: `K-fold, stratified, and nested cross-validation for robust evaluation.`
    },
    {
      id: `sklearn-ensemble`,
      title: `scikit-learn Ensemble Methods`,
      source: `scikit-learn`,
      type: `documentation`,
      url: `https://scikit-learn.org/stable/modules/ensemble.html`,
      description: `Bagging, boosting, stacking, and voting classifiers.`
    },
    {
      id: `sklearn-feature-selection`,
      title: `scikit-learn Feature Selection`,
      source: `scikit-learn`,
      type: `documentation`,
      url: `https://scikit-learn.org/stable/modules/feature_selection.html`,
      description: `Filter, wrapper, and embedded methods for selecting informative features.`
    },
    {
      id: `sklearn-grid-search`,
      title: `scikit-learn Hyperparameter Tuning`,
      source: `scikit-learn`,
      type: `documentation`,
      url: `https://scikit-learn.org/stable/modules/grid_search.html`,
      description: `GridSearchCV and RandomizedSearchCV for systematic hyperparameter optimization.`
    },
    {
      id: `sklearn-linear-models`,
      title: `scikit-learn Linear Models`,
      source: `scikit-learn`,
      type: `documentation`,
      url: `https://scikit-learn.org/stable/modules/linear_model.html`,
      description: `Linear, logistic, ridge, lasso, and elastic net regression implementations.`
    },
    {
      id: `sklearn-metrics`,
      title: `scikit-learn Model Evaluation`,
      source: `scikit-learn`,
      type: `documentation`,
      url: `https://scikit-learn.org/stable/modules/model_evaluation.html`,
      description: `Accuracy, precision, recall, F1, ROC-AUC, and regression metrics.`
    },
    {
      id: `sklearn-mixture`,
      title: `scikit-learn Gaussian Mixture Models`,
      source: `scikit-learn`,
      type: `documentation`,
      url: `https://scikit-learn.org/stable/modules/mixture.html`,
      description: `Probabilistic clustering with soft assignments via EM algorithm.`
    },
    {
      id: `sklearn-pca`,
      title: `scikit-learn PCA & Decomposition`,
      source: `scikit-learn`,
      type: `documentation`,
      url: `https://scikit-learn.org/stable/modules/decomposition.html`,
      description: `PCA, NMF, and other dimensionality reduction techniques.`
    },
    {
      id: `sklearn-pipeline`,
      title: `scikit-learn Pipelines`,
      source: `scikit-learn`,
      type: `documentation`,
      url: `https://scikit-learn.org/stable/modules/compose.html`,
      description: `Chaining transformers and estimators into reproducible workflows.`
    },
    {
      id: `sklearn-preprocessing`,
      title: `scikit-learn Preprocessing`,
      source: `scikit-learn`,
      type: `documentation`,
      url: `https://scikit-learn.org/stable/modules/preprocessing.html`,
      description: `Scaling, encoding, imputation, and feature transformation utilities.`
    },
    {
      id: `sklearn-svm`,
      title: `scikit-learn Support Vector Machines`,
      source: `scikit-learn`,
      type: `documentation`,
      url: `https://scikit-learn.org/stable/modules/svm.html`,
      description: `SVC, SVR, and kernel methods for maximum-margin classification.`
    },
    {
      id: `sklearn-trees`,
      title: `scikit-learn Decision Trees`,
      source: `scikit-learn`,
      type: `documentation`,
      url: `https://scikit-learn.org/stable/modules/tree.html`,
      description: `Decision trees, random forests, and ensemble tree methods.`
    },
    {
      id: `spacy-ner`,
      title: `spaCy NER Documentation`,
      source: `spaCy`,
      type: `documentation`,
      url: `https://spacy.io/usage/linguistic-features#named-entities`,
      description: `Production-ready named entity recognition pipeline and custom training.`
    },
    {
      id: `stanford-cs224n`,
      title: `Stanford CS224N — NLP with Deep Learning`,
      source: `Stanford CS224N`,
      type: `course`,
      url: `http://web.stanford.edu/class/cs224n/`,
      description: `Premier NLP course covering embeddings, RNNs, transformers, and LLMs.`
    },
    {
      id: `stanford-cs229`,
      title: `Stanford CS229 — Machine Learning`,
      source: `Stanford CS229`,
      type: `course`,
      url: `https://cs229.stanford.edu/`,
      description: `Andrew Ng's graduate ML course — the canonical theoretical foundation.`
    },
    {
      id: `stanford-cs230`,
      title: `Stanford CS230 — Deep Learning`,
      source: `Stanford CS230`,
      type: `course`,
      url: `http://cs230.stanford.edu/`,
      description: `Andrew Ng's deep learning course covering NN fundamentals and best practices.`
    },
    {
      id: `stanford-cs231n`,
      title: `Stanford CS231n — CNNs for Visual Recognition`,
      source: `Stanford CS231n`,
      type: `course`,
      url: `http://cs231n.stanford.edu/`,
      description: `Definitive course on convolutional networks and computer vision.`
    },
    {
      id: `stanford-cs330`,
      title: `Stanford CS330 — Deep Multi-Task and Meta Learning`,
      source: `Stanford`,
      type: `course`,
      url: `https://cs330.stanford.edu/`,
      description: `Advanced course on multi-task learning, meta-learning, and transfer.`
    },
    {
      id: `torchserve-docs`,
      title: `TorchServe Documentation`,
      source: `PyTorch`,
      type: `documentation`,
      url: `https://pytorch.org/serve/`,
      description: `Production model serving for PyTorch with REST and gRPC APIs.`
    },
    {
      id: `torchvision-models`,
      title: `torchvision Models`,
      source: `PyTorch`,
      type: `documentation`,
      url: `https://pytorch.org/vision/stable/models.html`,
      description: `Pretrained ResNet, VGG, EfficientNet, and other vision backbones.`
    },
    {
      id: `transformers-docs`,
      title: `Hugging Face Transformers Documentation`,
      source: `Hugging Face`,
      type: `documentation`,
      url: `https://huggingface.co/docs/transformers/index`,
      description: `Library for BERT, GPT, T5, and thousands of pretrained transformer models.`
    },
    {
      id: `tufte-visual-display`,
      title: `The Visual Display of Quantitative Information`,
      source: `Edward Tufte`,
      type: `book`,
      url: `https://www.edwardtufte.com/books/vdqi/`,
      description: `Classic principles of honest, effective data visualization design.`
    },
    {
      id: `unet-paper`,
      title: `U-Net: Convolutional Networks for Biomedical Image Segmentation`,
      source: `arXiv`,
      type: `paper`,
      url: `https://arxiv.org/abs/1505.04597`,
      description: `Encoder-decoder architecture with skip connections for dense prediction.`
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
      id: `vgg-paper`,
      title: `Very Deep Convolutional Networks (VGG)`,
      source: `arXiv`,
      type: `paper`,
      url: `https://arxiv.org/abs/1409.1556`,
      description: `Showed depth with small 3×3 filters improves representation learning.`
    },
    {
      id: `word2vec-paper`,
      title: `Efficient Estimation of Word Representations (Word2Vec)`,
      source: `arXiv`,
      type: `paper`,
      url: `https://arxiv.org/abs/1300.4546`,
      description: `Skip-gram and CBOW models for dense word embeddings from co-occurrence.`
    },
    {
      id: `xgboost-docs`,
      title: `XGBoost Documentation`,
      source: `XGBoost`,
      type: `documentation`,
      url: `https://xgboost.readthedocs.io/en/stable/`,
      description: `Industry-standard gradient boosting library for tabular data.`
    },
    {
      id: `yolo-paper`,
      title: `You Only Look Once: Unified Real-Time Object Detection`,
      source: `arXiv`,
      type: `paper`,
      url: `https://arxiv.org/abs/1506.02640`,
      description: `Single-pass object detection treating detection as regression problem.`
    }
  ];

export const referencesBySource = allReferences.reduce<Record<string, Reference[]>>((acc, ref) => {
  const key = ref.source;
  if (!acc[key]) acc[key] = [];
  acc[key].push(ref);
  return acc;
}, {});

export const referencesByType = allReferences.reduce<Record<string, Reference[]>>((acc, ref) => {
  const key = ref.type;
  if (!acc[key]) acc[key] = [];
  acc[key].push(ref);
  return acc;
}, {});
