/**
 * Transforms curriculum sections into GeeksforGeeks-style articles:
 * structured headings, in-article bullet lists, visuals, and common-mistake pointers.
 */

import { buildLongArticle, estimateArticleMinutes } from './article-expansion.mjs';
import { sanitizeDiagramText } from './diagram-sanitize.mjs';

const TRACK_MISTAKES = {
  python: [
    'Using `=` when you mean `==` for comparisons',
    'Mutating a default argument (`def f(items=[])`) — the list is shared across calls',
    'Checking string equality with `is` instead of `==`',
    'Shadowing a built-in name (`list`, `dict`, `id`, `type`) and breaking later code',
    'Forgetting that `range(n)` starts at 0 and excludes n',
    'Reading or writing a file without `with` — leaks file handles on errors',
    'Catching bare `except:` and hiding the real bug',
    'Assuming `sort()` returns a new list — it sorts in place and returns `None`',
  ],
  math: [
    'Treating matrix multiplication as element-wise (`*` vs `@` in NumPy)',
    'Using correlation when variables are non-linear — relationship may be missed',
    'Forgetting to check matrix dimensions before multiplying',
    'Confusing population variance (divide by n) with sample variance (divide by n−1)',
    'Applying log to zero or negative values without a shift',
    'Ignoring units/scales when comparing gradients or partial derivatives',
  ],
  data: [
    'Plotting before checking for missing values and outliers',
    'Using test-set statistics to impute missing training data (leakage)',
    'Parsing dates inconsistently across CSV columns',
    'Chaining `.apply()` in pandas when a vectorized operation exists',
    'Saving a plot without calling `plt.tight_layout()` — labels get clipped',
    'Mixing up `loc` (labels) and `iloc` (integer positions) indexing',
  ],
  ml: [
    'Training and evaluating on the same data — inflated accuracy',
    'Scaling the full dataset before train/test split — test leakage',
    'Optimizing accuracy on imbalanced classes instead of precision/recall/F1',
    'Tuning hyperparameters on the test set instead of a validation fold',
    'Using accuracy alone when the positive class is rare',
    'Forgetting to set `random_state` — results cannot be reproduced',
    'Target encoding without inner cross-validation — label leakage',
  ],
  dl: [
    'Wrong input tensor shape (batch, channels, height, width) for Conv2d',
    'Forgetting `model.train()` / `model.eval()` when switching train vs inference',
    'Not moving tensors and model to the same device (CPU vs CUDA)',
    'Using softmax outputs with `BCELoss` instead of logits with `BCEWithLogitsLoss`',
    'Gradient explosion without clipping or learning-rate tuning',
    'Evaluating on training batch norm statistics during inference',
  ],
  ai: [
    'Trusting LLM outputs as facts without retrieval or verification',
    'Prompt injection via un-sanitized user content in RAG context',
    'Embedding queries with a different model than the indexed documents',
    'Measuring only fluency — not factual accuracy or task success',
    'Ignoring token/context limits when stuffing long documents into prompts',
    'Deploying without output moderation on user-facing endpoints',
  ],
};

const KEYWORD_MISTAKES = [
  { re: /variable|literal|type|mutab/i, items: ['Reassigning a name and expecting the old object to update elsewhere when another variable still references it', 'Calling `int("3.14")` — use `float` first for decimal strings'] },
  { re: /loop|for|while|iter/i, items: ['Modifying a list while iterating over it — skip elements or iterate over a copy', 'Infinite loops when the loop variable never moves toward the exit condition'] },
  { re: /class|oop|inherit|object/i, items: ['Forgetting `self` as the first parameter in instance methods', 'Calling `Parent.method()` without passing `self` correctly in overrides'] },
  { re: /regression|linear|ridge|lasso/i, items: ['Interpreting coefficients when features are on different scales — standardize first', 'Using polynomial degree too high without regularization'] },
  { re: /classif|logistic|svm|tree|forest|boost/i, items: ['Using accuracy as the only metric on skewed labels', 'Not stratifying splits for classification tasks'] },
  { re: /cluster|k-means|pca|unsupervised/i, items: ['Running K-Means without scaling — features with large ranges dominate', 'Choosing k from intuition alone — use silhouette or domain knowledge'] },
  { re: /neural|backprop|gradient|loss/i, items: ['Forgetting to zero gradients with `optimizer.zero_grad()` each step', 'Learning rate too high — loss oscillates or becomes NaN'] },
  { re: /cnn|conv|image/i, items: ['Feeding NHWC tensors into PyTorch NCHW layers without permuting', 'Wrong padding/stride — output spatial size shrinks unexpectedly'] },
  { re: /transformer|attention|bert|gpt|llm/i, items: ['Wrong sequence length after tokenization — truncating critical context', 'Using causal and bidirectional models interchangeably'] },
  { re: /pandas|dataframe|numpy/i, items: ['Setting `inplace=True` and expecting a new DataFrame return value', 'Broadcasting mistakes when array shapes do not align'] },
  { re: /probability|bayes|distribution/i, items: ['Multiplying probabilities for dependent events as if independent', 'Ignoring base rates when interpreting conditional probability'] },
  { re: /deploy|mlops|api|serve/i, items: ['Serving a model trained on preprocessed data without the same pipeline in production', 'No monitoring for data drift after deployment'] },
  { re: /reinforcement|q-learning|policy|mdp/i, items: ['Confusing episodic return with per-step reward — log cumulative return', 'Exploration rate ε set to 0 too early — agent never discovers better actions'] },
  { re: /gan|vae|diffusion|generative/i, items: ['Training generator and discriminator without balancing capacity — one dominates', 'Evaluating generative models with only pixel loss — perceptual quality differs'] },
  { re: /embedding|vector|rag|retriev/i, items: ['Chunk size too large for embeddings — retrieval returns irrelevant passages', 'Not normalizing vectors when using dot product as cosine similarity'] },
];

function formatArticleContent(section, topic) {
  return buildLongArticle(section, topic);
}

function suggestDiagram(section, topic) {
  if (section.diagram?.trim()) return section.diagram;
  const blob = `${section.title} ${section.content ?? ''} ${(section.keyPoints ?? []).join(' ')}`.toLowerCase();

  if (/pipeline|workflow|mlops|deploy|serve|production/.test(blob)) {
    return `${section.title}\nRaw Data → Clean → Features → Train → Evaluate → Deploy → Monitor`;
  }
  if (/transformer|encoder|decoder|attention|bert|gpt/.test(blob)) {
    return `${section.title}\nTokens → Embedding → Self-Attention → FFN → Output`;
  }
  if (/cnn|convolution|image|filter/.test(blob)) {
    return `${section.title}\nImage → Conv → ReLU → Pool → Flatten → Dense → Class`;
  }
  if (/rag|retriev|embed|vector|search/.test(blob)) {
    return `${section.title}\nQuery → Embed → Retrieve → Augment Prompt → Generate`;
  }
  if (/train|fit|gradient|backprop|epoch/.test(blob) && topic.track === 'dl') {
    return `${section.title}\nForward → Loss → Backward → Update Weights`;
  }
  if (/eda|explor|visual|plot|chart/.test(blob)) {
    return `${section.title}\nLoad → Profile → Visualize → Hypothesis → Transform`;
  }
  if (/cross.?val|split|fold|valid/.test(blob)) {
    return `${section.title}\nDataset → Train Fold → Validation Fold → Test Holdout`;
  }
  if (/mdp|reinforcement|agent|environment|q-learning/.test(blob)) {
    return `${section.title}\nState → Action → Reward → Next State → Update Policy`;
  }
  if (/gan|generator|discriminator|adversarial/.test(blob)) {
    return `${section.title}\nNoise → Generator → Fake Sample → Discriminator → Loss`;
  }
  if (/diffusion|denois|forward process/.test(blob)) {
    return `${section.title}\nClean Image → Add Noise → … → Pure Noise → Denoise → Sample`;
  }
  return undefined;
}

function generateCommonMistakes(section, topic) {
  if (section.commonMistakes?.length >= 3) return section.commonMistakes.slice(0, 5);

  const track = topic.track ?? 'python';
  const pool = [...(TRACK_MISTAKES[track] ?? TRACK_MISTAKES.python)];
  const blob = `${section.id} ${section.title} ${section.content ?? ''}`;

  for (const { re, items } of KEYWORD_MISTAKES) {
    if (re.test(blob)) pool.push(...items);
  }

  for (const kp of section.keyPoints ?? []) {
    if (/never|avoid|don't|do not|without|forget|wrong|confus|leak|instead of|rather than|misuse|incorrect/i.test(kp)) {
      const tip = kp.endsWith('.') ? kp : `${kp}.`;
      if (!pool.some((p) => p.toLowerCase() === tip.toLowerCase())) pool.push(tip);
    }
  }

  if (section.example && track === 'python') {
    pool.push('Copy-pasting the example without predicting the output first — run mentally, then verify');
  }
  if (!section.example && (track === 'python' || track === 'data')) {
    pool.push('Reading passively without typing and running a small variant of the example yourself');
  }

  const seen = new Set();
  const unique = [];
  for (const item of pool) {
    const key = item.toLowerCase();
    if (seen.has(key) || item.length < 20) continue;
    if (!/\b(avoid|forget|wrong|without|never|don't|do not|instead|not |confus|mistake|leak|inflate|hide)\b/i.test(item)) {
      continue;
    }
    seen.add(key);
    unique.push(item);
  }

  if (unique.length < 3) {
    for (const item of pool) {
      const key = item.toLowerCase();
      if (seen.has(key) || item.length < 20) continue;
      seen.add(key);
      unique.push(item);
      if (unique.length >= 4) break;
    }
  }

  const hash = [...section.id].reduce((a, c) => a + c.charCodeAt(0), 0);
  const rotated = [...unique.slice(hash % Math.max(1, unique.length)), ...unique];

  return rotated.slice(0, 4);
}

/**
 * @param {object} section
 * @param {object} topic
 */
export function applyArticleStyle(section, topic) {
  const content = formatArticleContent(section, topic);
  const diagramRaw = suggestDiagram(section, topic);
  const diagram = diagramRaw ? sanitizeDiagramText(diagramRaw) : section.diagram;
  const commonMistakes = generateCommonMistakes(section, topic);
  const readingMinutes = estimateArticleMinutes(section, topic);

  const next = {
    ...section,
    content,
    commonMistakes,
  };

  if (diagram) next.diagram = diagram;
  return next;
}

/** Sum expanded article minutes for a topic (sections + exercises buffer). */
export function estimateTopicMinutes(topic) {
  const track = topic.track ?? 'python';
  const topicCtx = { ...topic, track };
  const sectionMins = topic.sections.reduce(
    (sum, s) => sum + estimateArticleMinutes(s, topicCtx),
    0,
  );
  const exerciseMins = (topic.exercises?.length ?? 0) * 5;
  return Math.max(topic.estimatedMinutes ?? 30, sectionMins + exerciseMins);
}

/**
 * @param {object} topic
 */
export function applyArticleStyleToTopic(topic) {
  const track = topic.track ?? 'python';
  const topicCtx = { ...topic, track };
  return {
    ...topic,
    sections: topic.sections.map((s) => applyArticleStyle(s, topicCtx)),
  };
}
