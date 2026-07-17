import type { Topic } from '../../types';

export const module28Topics: Topic[] = [
{
      id: `cap-portfolio`,
      title: `ML Portfolio Projects`,
      description: `Build showcase projects demonstrating end-to-end ML skills.`,
      level: `intermediate`,
      track: `ai`,
      sections: [
        {
          id: `structure`,
          title: `Project Structure`,
          content: `Strong portfolio project: problem statement, data, EDA, modeling, evaluation, deployment demo, README with architecture diagram. **Reproducible** Dockerfile or Colab with pinned deps.

Host on GitHub with clear license; include tests for data pipeline functions.

- README answers what/why/how/results in 2 minutes
- Makefile or script reproduces end-to-end run
- Avoid notebook-only without refactored modules
- Live demo or Streamlit increases impact`,
          keyPoints: [
            `README answers what/why/how/results in 2 minutes`,
            `Makefile or script reproduces end-to-end run`,
            `Avoid notebook-only without refactored modules`,
            `Live demo or Streamlit increases impact`
          ]
        },
        {
          id: `ideas`,
          title: `Project Ideas by Track`,
          content: `Tabular: churn prediction with SHAP. CV: custom object detector. NLP: RAG chatbot on domain docs. DL: fine-tune small LLM with LoRA.

Pick problems you can discuss deeply in interviews—not tutorial clones without twist.

- Add unique angle: new dataset or metric
- Show MLOps: logging, config, CI
- Document failures and iterations
- Open datasets with clear license`,
          keyPoints: [
            `Add unique angle: new dataset or metric`,
            `Show MLOps: logging, config, CI`,
            `Document failures and iterations`,
            `Open datasets with clear license`
          ]
        },
        {
          id: `presentation`,
          title: `Presenting Results`,
          content: `Lead with business metric movement not only accuracy. Visualize errors—confusion matrix slices, failure cases. Link to blog post walking through decisions.

Quantify: "Reduced false negatives 18% at same precision."

- Tailor narrative to audience technical level
- Before/after comparisons resonate
- Honest limitations build credibility
- Short demo video for busy reviewers`,
          keyPoints: [
            `Tailor narrative to audience technical level`,
            `Before/after comparisons resonate`,
            `Honest limitations build credibility`,
            `Short demo video for busy reviewers`
          ]
        },
        {
          id: `open-source`,
          title: `Contributing to Open Source`,
          content: `Start with docs fixes, tests, small bugs in libraries you use (sklearn, HF transformers). **Good first issue** labels welcome newcomers.

Contributions signal collaboration skills beyond solo Kaggle.

- Read CONTRIBUTING.md before PR
- One focused PR better than giant dump
- Discuss design in issue before large change
- Link contributions on resume and LinkedIn`,
          keyPoints: [
            `Read CONTRIBUTING.md before PR`,
            `One focused PR better than giant dump`,
            `Discuss design in issue before large change`,
            `Link contributions on resume and LinkedIn`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-port-1`,
          question: `Portfolio README should explain problem, data, model, and ___.`,
          solution: `print("results")`,
          difficulty: `easy`
        },
        {
          id: `ex-port-2`,
          question: `Pin dependencies in requirements.txt or ___.`,
          solution: `print("pyproject.toml")`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 35,
      module: `module-28`,
      references: [
        {
          id: `kaggle-intro-ml`,
          title: `Kaggle Learn — Intro to Machine Learning`,
          source: `Kaggle`,
          type: `course`,
          url: `https://www.kaggle.com/learn/intro-to-machine-learning`,
          description: `Practical first steps with decision trees and model validation.`
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
          id: `coursera-andrew-ng`,
          title: `Machine Learning Specialization`,
          source: `Coursera`,
          type: `course`,
          url: `https://www.coursera.org/specializations/machine-learning-introduction`,
          description: `Andrew Ng's accessible introduction to supervised and unsupervised learning.`
        },
        {
          id: `fastai-course`,
          title: `fast.ai Practical Deep Learning`,
          source: `fast.ai`,
          type: `course`,
          url: `https://course.fast.ai/`,
          description: `Top-down, code-first approach to training state-of-the-art models.`
        }
      ]
    },
{
      id: `cap-kaggle`,
      title: `Kaggle Competition Strategy`,
      description: `Structured approach to competitive ML and learning from kernels.`,
      level: `intermediate`,
      track: `ai`,
      sections: [
        {
          id: `workflow`,
          title: `Competition Workflow`,
          content: `Read data description thoroughly. EDA notebook → baseline submission → feature engineering → model ensemble. **Public LB** can overfit—trust local CV.

Discussion forum gold for domain tips; verify leaks independently.

- Replicate baseline before complex models
- Local CV strategy mirrors test if possible
- Time-box EDA before endless plots
- Submit early to verify format`,
          keyPoints: [
            `Replicate baseline before complex models`,
            `Local CV strategy mirrors test if possible`,
            `Time-box EDA before endless plots`,
            `Submit early to verify format`
          ]
        },
        {
          id: `features`,
          title: `Feature Engineering on Kaggle`,
          content: `Tabular: target encoding with CV to prevent leak, interactions, aggregations by group. Text: TF-IDF, transformers. Image: augmentations, pseudo-labeling.

**Leakage** from future information top killer of trust in CV score.

- GroupKFold when groups in data
- Target encode with inner CV folds
- External data check competition rules
- Adversarial validation detect train/test shift`,
          keyPoints: [
            `GroupKFold when groups in data`,
            `Target encode with inner CV folds`,
            `External data check competition rules`,
            `Adversarial validation detect train/test shift`
          ]
        },
        {
          id: `ensemble`,
          title: `Ensembling & Stacking`,
          content: `Blend diverse models: GBDT + neural net + linear. **Stacking** meta-learner on out-of-fold preds. Rank averaging for robustness.

Diminishing returns after 4-5 uncorrelated strong models—know when to stop.

- Diversity beats ten similar GBDTs
- OOF predictions prevent stack leakage
- Weighted average by CV score simple baseline
- Seed averaging stabilizes neural submissions`,
          keyPoints: [
            `Diversity beats ten similar GBDTs`,
            `OOF predictions prevent stack leakage`,
            `Weighted average by CV score simple baseline`,
            `Seed averaging stabilizes neural submissions`
          ]
        },
        {
          id: `mindset`,
          title: `Learning Mindset`,
          content: `Top placements optional—learning transferable. Study winning solutions post-competition. Reimplement core trick in clean repo.

Team up to split EDA and modeling; communicate daily during crunch.

- Post-mortem writeups solidify learning
- Do not burn out on leaderboard chasing
- Reusable code > one-off notebook
- Networking in competitions opens jobs`,
          keyPoints: [
            `Post-mortem writeups solidify learning`,
            `Do not burn out on leaderboard chasing`,
            `Reusable code > one-off notebook`,
            `Networking in competitions opens jobs`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-kaggle-1`,
          question: `Trust local ___ over public leaderboard to avoid overfit.`,
          solution: `print("CV")`,
          difficulty: `easy`
        },
        {
          id: `ex-kaggle-2`,
          question: `Stacking uses out-of-___ predictions.`,
          solution: `print("fold")`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 40,
      module: `module-28`,
      references: [
        {
          id: `kaggle-intro-ml`,
          title: `Kaggle Learn — Intro to Machine Learning`,
          source: `Kaggle`,
          type: `course`,
          url: `https://www.kaggle.com/learn/intro-to-machine-learning`,
          description: `Practical first steps with decision trees and model validation.`
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
          id: `xgboost-docs`,
          title: `XGBoost Documentation`,
          source: `XGBoost`,
          type: `documentation`,
          url: `https://xgboost.readthedocs.io/en/stable/`,
          description: `Industry-standard gradient boosting library for tabular data.`
        },
        {
          id: `esl-hastie`,
          title: `The Elements of Statistical Learning`,
          source: `Stanford`,
          type: `book`,
          url: `https://hastie.su.domains/ElemStatLearn/`,
          description: `Free authoritative text on statistical learning methods and theory.`
        }
      ]
    },
{
      id: `cap-interview`,
      title: `ML Interview Preparation`,
      description: `ML fundamentals, coding, system design, and behavioral preparation.`,
      level: `intermediate`,
      track: `ai`,
      sections: [
        {
          id: `ml-fundamentals`,
          title: `ML Concept Questions`,
          content: `Expect bias-variance, regularization, gradient descent variants, evaluation metrics, precision-recall tradeoff, ROC vs PR curves. Derive logistic loss intuitively.

**Whiteboard**: explain random forest, backprop sketch, transformer attention O(n²).

- Explain simply then add nuance if prompted
- Connect formulas to use cases
- Know when linear models beat deep learning
- Practice explaining projects in 3 minutes`,
          keyPoints: [
            `Explain simply then add nuance if prompted`,
            `Connect formulas to use cases`,
            `Know when linear models beat deep learning`,
            `Practice explaining projects in 3 minutes`
          ]
        },
        {
          id: `coding`,
          title: `ML Coding Interviews`,
          content: `Implement k-means, softmax, batch norm forward pass, BFS. pandas/sklearn snippets: groupby, merge, train_test_split with stratify.

LeetCode medium arrays/strings still common for MLE roles at big tech.

- Numerically stable softmax subtracts max
- Clarify input sizes and edge cases aloud
- Vectorized numpy over loops when possible
- Test with small example before optimizing`,
          example: `def softmax(x):
    import numpy as np
    e = np.exp(x - np.max(x))
    return e / e.sum()
print(round(softmax([1.0,2.0])[1], 3))`,
          output: `0.731`,
          keyPoints: [
            `Numerically stable softmax subtracts max`,
            `Clarify input sizes and edge cases aloud`,
            `Vectorized numpy over loops when possible`,
            `Test with small example before optimizing`
          ]
        },
        {
          id: `system-design`,
          title: `ML System Design`,
          content: `Design recommendation feed, fraud detection, search ranking. Cover data, features, model, serving, monitoring, A/B test, failure modes.

Scale: batch vs online features, approximate NN retrieval, cache hot predictions.

- Start from requirements and SLAs
- Draw data flow diagram
- Discuss label delay and feedback loops
- Mention fairness and privacy proactively`,
          keyPoints: [
            `Start from requirements and SLAs`,
            `Draw data flow diagram`,
            `Discuss label delay and feedback loops`,
            `Mention fairness and privacy proactively`
          ]
        },
        {
          id: `behavioral`,
          title: `Behavioral & STAR`,
          content: `**STAR** (Situation, Task, Action, Result) for conflict, failure, leadership stories. Prepare "tell me about a project" with metrics.

Ask interviewers about team ML maturity, deployment frequency, research vs product balance.

- Quantify impact in STAR results
- Failure stories show growth
- Prepare thoughtful questions for them
- Mock interviews reduce anxiety`,
          keyPoints: [
            `Quantify impact in STAR results`,
            `Failure stories show growth`,
            `Prepare thoughtful questions for them`,
            `Mock interviews reduce anxiety`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-int-1`,
          question: `Implement sigmoid(0) == 0.5.`,
          solution: `import math
print(1/(1+math.exp(0)))`,
          difficulty: `easy`
        },
        {
          id: `ex-int-2`,
          question: `Stratified split preserves class ___.`,
          solution: `print("proportions")`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 45,
      module: `module-28`,
      references: [
        {
          id: `stanford-cs229`,
          title: `Stanford CS229 — Machine Learning`,
          source: `Stanford CS229`,
          type: `course`,
          url: `https://cs229.stanford.edu/`,
          description: `Andrew Ng's graduate ML course — the canonical theoretical foundation.`
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
          id: `coursera-andrew-ng`,
          title: `Machine Learning Specialization`,
          source: `Coursera`,
          type: `course`,
          url: `https://www.coursera.org/specializations/machine-learning-introduction`,
          description: `Andrew Ng's accessible introduction to supervised and unsupervised learning.`
        },
        {
          id: `clrs-algorithms`,
          title: `Introduction to Algorithms (CLRS)`,
          source: `MIT Press`,
          type: `book`,
          url: `https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/`,
          description: `Definitive reference for sorting, searching, and algorithmic complexity analysis.`
        }
      ]
    },
{
      id: `cap-research`,
      title: `Reading Papers & Reproduction`,
      description: `Efficiently understand research papers and reproduce key results.`,
      level: `advanced`,
      track: `ai`,
      sections: [
        {
          id: `reading`,
          title: `How to Read a Paper`,
          content: `First pass: title, abstract, figures, conclusion. Second: intro, method skim, experiments. Third: full math and related work.

**Annotate** assumptions and simplifications—what breaks in production?

- Abstract claims vs evidence in experiments
- Compare to prior SOTA tables fairly
- Check dataset size and compute budget
- Supplementary often has critical details`,
          keyPoints: [
            `Abstract claims vs evidence in experiments`,
            `Compare to prior SOTA tables fairly`,
            `Check dataset size and compute budget`,
            `Supplementary often has critical details`
          ]
        },
        {
          id: `venues`,
          title: `Venues & Preprints`,
          content: `**NeurIPS, ICML, ICLR, CVPR, ACL** peer-reviewed. **arXiv** preprints unreviewed—verify before citing as fact.

**Papers With Code** links implementations and leaderboards.

- Peer review not perfect but filters noise
- arXiv version may update—note date
- Benchmark cherry-picking common—read fine print
- Twitter hype ≠ validated result`,
          keyPoints: [
            `Peer review not perfect but filters noise`,
            `arXiv version may update—note date`,
            `Benchmark cherry-picking common—read fine print`,
            `Twitter hype ≠ validated result`
          ]
        },
        {
          id: `reproduce`,
          title: `Reproducing Results`,
          content: `Start from official repo if exists; pin commits and seeds. Match hardware expectations—some papers need 8×GPU.

**Minimal reproduction**: core algorithm on subset before full scale.

- Hidden hyperparameters in appendix or code
- Data preprocessing must match exactly
- Report what you could not reproduce
- Contact authors politely for missing details`,
          keyPoints: [
            `Hidden hyperparameters in appendix or code`,
            `Data preprocessing must match exactly`,
            `Report what you could not reproduce`,
            `Contact authors politely for missing details`
          ]
        },
        {
          id: `contribute`,
          title: `From Reading to Contributing`,
          content: `Identify extension: new dataset, ablation, efficiency improvement. Write reproducible experiment script; open source with clear README.

Workshop and short papers valid first publication paths.

- Negative results valuable if well executed
- Collaborate via Twitter/Discord research groups
- Lit review before starting saves months
- Ethics review for human subjects data`,
          keyPoints: [
            `Negative results valuable if well executed`,
            `Collaborate via Twitter/Discord research groups`,
            `Lit review before starting saves months`,
            `Ethics review for human subjects data`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-paper-1`,
          question: `Skim abstract, figures, and ___ on first paper pass.`,
          solution: `print("conclusion")`,
          difficulty: `easy`
        },
        {
          id: `ex-paper-2`,
          question: `Papers With Code links papers to ___.`,
          solution: `print("implementations")`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 35,
      module: `module-28`,
      references: [
        {
          id: `attention-paper`,
          title: `Attention Is All You Need`,
          source: `arXiv`,
          type: `paper`,
          url: `https://arxiv.org/abs/1706.03762`,
          description: `Transformer architecture paper that revolutionized NLP and beyond.`
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
          id: `stanford-cs230`,
          title: `Stanford CS230 — Deep Learning`,
          source: `Stanford CS230`,
          type: `course`,
          url: `http://cs230.stanford.edu/`,
          description: `Andrew Ng's deep learning course covering NN fundamentals and best practices.`
        },
        {
          id: `bert-paper`,
          title: `BERT: Pre-training of Deep Bidirectional Transformers`,
          source: `arXiv`,
          type: `paper`,
          url: `https://arxiv.org/abs/1810.04805`,
          description: `Bidirectional encoder pretraining that set new benchmarks across NLP tasks.`
        }
      ]
    },
{
      id: `cap-career`,
      title: `Career Paths in ML/AI`,
      description: `Roles, skills, and growth paths for ML engineers, data scientists, and researchers.`,
      level: `intermediate`,
      track: `ai`,
      sections: [
        {
          id: `roles`,
          title: `Role Definitions`,
          content: `**Data Scientist**: analysis, experimentation, stakeholder communication. **MLE**: production models, pipelines, serving. **Research Scientist**: novel methods, publications, long horizons.

Titles vary—read job descriptions not only labels.

- DS leans stats and product analytics
- MLE leans software and systems
- Research needs strong math and paper track
- Hybrid roles common at startups`,
          keyPoints: [
            `DS leans stats and product analytics`,
            `MLE leans software and systems`,
            `Research needs strong math and paper track`,
            `Hybrid roles common at startups`
          ]
        },
        {
          id: `skills`,
          title: `Skill Progression`,
          content: `Foundation: Python, SQL, ML basics. Mid: deep learning, cloud, experiment tracking. Senior: system design, mentoring, cross-team influence.

**T-shaped**: deep in one area (NLP), broad awareness elsewhere.

- Communication as important as coding
- Business context distinguishes senior ICs
- Specialize after solid general base
- Continuous learning non-optional in AI`,
          keyPoints: [
            `Communication as important as coding`,
            `Business context distinguishes senior ICs`,
            `Specialize after solid general base`,
            `Continuous learning non-optional in AI`
          ]
        },
        {
          id: `job-search`,
          title: `Job Search Tactics`,
          content: `Tailor resume bullets to metrics. LinkedIn + referrals strongest channel. Portfolio and GitHub linked prominently.

Prepare 30-second pitch and 2-minute project deep dive.

- Referrals bypass resume filters
- Apply to teams not only companies
- Negotiate total comp not only salary
- Rejections normal—iterate resume`,
          keyPoints: [
            `Referrals bypass resume filters`,
            `Apply to teams not only companies`,
            `Negotiate total comp not only salary`,
            `Rejections normal—iterate resume`
          ]
        },
        {
          id: `growth`,
          title: `Long-Term Growth`,
          content: `Staff/principal paths: technical leadership without people management optional. Manager track: team delivery and hiring.

Contribute to standards, RFCs, internal platforms—impact multiplier.

- Document and teach to scale influence
- Balance depth with organizational awareness
- Ethics and responsible AI increasingly valued
- Mentorship accelerates junior careers`,
          keyPoints: [
            `Document and teach to scale influence`,
            `Balance depth with organizational awareness`,
            `Ethics and responsible AI increasingly valued`,
            `Mentorship accelerates junior careers`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-career-1`,
          question: `MLE focuses on production ___ and serving.`,
          solution: `print("pipelines")`,
          difficulty: `easy`
        },
        {
          id: `ex-career-2`,
          question: `T-shaped skill profile: deep in one area, ___ elsewhere.`,
          solution: `print("broad")`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 30,
      module: `module-28`,
      references: [
        {
          id: `coursera-andrew-ng`,
          title: `Machine Learning Specialization`,
          source: `Coursera`,
          type: `course`,
          url: `https://www.coursera.org/specializations/machine-learning-introduction`,
          description: `Andrew Ng's accessible introduction to supervised and unsupervised learning.`
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
          id: `stanford-cs229`,
          title: `Stanford CS229 — Machine Learning`,
          source: `Stanford CS229`,
          type: `course`,
          url: `https://cs229.stanford.edu/`,
          description: `Andrew Ng's graduate ML course — the canonical theoretical foundation.`
        },
        {
          id: `fastai-course`,
          title: `fast.ai Practical Deep Learning`,
          source: `fast.ai`,
          type: `course`,
          url: `https://course.fast.ai/`,
          description: `Top-down, code-first approach to training state-of-the-art models.`
        }
      ]
    }
];
