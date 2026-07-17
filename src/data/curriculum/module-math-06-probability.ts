import type { Topic } from '../../types';

export const moduleMath06Topics: Topic[] = [
{
      id: `math-prob-basics`,
      title: `Probability Foundations`,
      description: `Sample spaces, axioms, and basic counting for probability.`,
      level: `intermediate`,
      track: `math`,
      sections: [
        {
          id: `pb-axioms`,
          title: `Probability Axioms`,
          content: `**Sample space** Ω all outcomes. Kolmogorov axioms: P(A)≥0; P(Ω)=1; countable additivity P(∪A_i)=∑P(A_i) for disjoint A_i. Uniform finite: P(A)=|A|/|Ω|.

Inclusion-exclusion for unions. Probability underpins ML uncertainty, Bayesian inference, and evaluation metrics. Always define sample space before assigning probabilities.

Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.`,
          formulas: [
            `P(A) ≥ 0`,
            `P(Ω) = 1`,
            `P(∪A_i) = ∑ P(A_i) if disjoint`,
            `P(A^c) = 1 − P(A)`,
            `P(A∪B) = P(A)+P(B)−P(A∩B)`
          ],
          diagram: `Ω sample space
   │ ┌──┐ overlap    │
   P(A∪B) = P(A)+P(B)−P(A∩B)`,
          keyPoints: [
            `Axioms foundation all probability`,
            `Complement rule common`,
            `Inclusion-exclusion for overlap`,
            `Countable additivity for limits`,
            `Define Ω before P`
          ],
          example: `import numpy as np
P_A, P_B, P_AB = 0.4, 0.3, 0.1
print("P(AUB):", P_A+P_B-P_AB)`,
          output: `P(AUB): 0.6`,
          pseudoCode: `Probability Axioms

P(A) ≥ 0
P(Ω) = 1
P(∪A_i) = ∑ P(A_i) if disjoint
P(A^c) = 1 − P(A)
P(A∪B) = P(A)+P(B)−P(A∩B)`
        },
        {
          id: `pb-count`,
          title: `Combinatorial Probability`,
          content: `Equally likely outcomes: P(A)=|A|/|Ω|. Use permutations/combinations from Module 1. Birthday paradox: P(shared birthday) high with small group.

Hypergeometric: sampling without replacement. Binomial counts successes in n independent Bernoulli trials. Multinomial generalizes to multiple categories.

Careful with independence assumptions when counting joint outcomes. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.`,
          formulas: [
            `P(A) = |A|/|Ω| (equally likely)`,
            `Binomial: C(n,k) p^k (1−p)^(n−k)`,
            `Hypergeometric: draws without replacement`,
            `Birthday: 23 people → ~50% match`,
            `Multinomial for k categories`
          ],
          diagram: `coin n flips:
   Ω = {H,T}^n
   |Ω| = 2^n
   k heads: C(n,k) outcomes
   P(k heads) = C(n,k)/2^n`,
          keyPoints: [
            `Count favorable over total`,
            `Binomial for independent trials`,
            `Without replacement changes odds`,
            `Paradoxes test intuition`,
            `Multinomial for class counts`
          ],
          example: `import numpy as np
from math import comb
n,p,k=10,0.5,4
print("binom PMF:", comb(n,k)*p**k*(1-p)**(n-k))`,
          output: `binom PMF`,
          pseudoCode: `Combinatorial Probability

P(A) = |A|/|Ω| (equally likely)
Binomial: C(n,k) p^k (1−p)^(n−k)
Hypergeometric: draws without replacement
Birthday: 23 people → ~50% match
Multinomial for k categories`
        },
        {
          id: `pb-indep`,
          title: `Independence`,
          content: `Events A,B **independent** if P(A∩B)=P(A)P(B). Pairwise vs mutual independence differ for >2 events. Independent trials: outcome doesn't affect next.

**Conditional independence** given C: P(A∩B|C)=P(A|C)P(B|C)—used in graphical models. i.i.d. samples central to ML training assumptions. Violations: data leakage, temporal correlation in time series. Always question independence when splitting data.

Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.`,
          formulas: [
            `A,B indep: P(A∩B)=P(A)P(B)`,
            `i.i.d.: independent identical distribution`,
            `P(A∩B|C)=P(A|C)P(B|C) conditional indep`,
            `Pairwise ≠ mutual independence`,
            `Violations break many ML assumptions`
          ],
          diagram: `independent:
   A happens ─╳─ B happens
   no influence
   dependent:
   A ────→ affects ──── B`,
          keyPoints: [
            `Independence simplifies products`,
            `i.i.d. assumption in SGD batches`,
            `Conditional indep in Bayes nets`,
            `Time series usually dependent`,
            `Leakage violates independence`
          ],
          example: `import numpy as np
P_A,P_B=0.5,0.4
print("P(A)*P(B):", P_A*P_B, "if indep P(A∩B) same")`,
          output: `0.2`,
          pseudoCode: `Independence

A,B indep: P(A∩B)=P(A)P(B)
i.i.d.: independent identical distribution
P(A∩B|C)=P(A|C)P(B|C) conditional indep
Pairwise ≠ mutual independence
Violations break many ML assumptions`
        },
        {
          id: `pb-ml`,
          title: `Probability in ML Metrics`,
          content: `Classification accuracy P(correct). **Precision** P(positive|predicted+). **Recall** P(predicted+|true+).

Probabilistic classifiers output P(y|x). Calibration: predicted probs match frequencies. **Expected risk** E[L(y,ŷ)].

Train/val split estimates generalization probability of error. Confusion matrix stores joint counts of true vs predicted labels.

Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.`,
          formulas: [
            `Accuracy = P(correct)`,
            `Precision = TP/(TP+FP)`,
            `Recall = TP/(TP+FN)`,
            `F1 = 2PR/(P+R)`,
            `Calibration: P(y=1|ŷ=p) ≈ p`
          ],
          diagram: `confusion matrix:
              pred +  pred −
   true + │ TP    FN
   true − │ FP    TN
   metrics from cell probs`,
          keyPoints: [
            `Metrics are conditional probabilities`,
            `Calibration matters for decisions`,
            `Confusion matrix = joint counts`,
            `Expected loss integrates over data`,
            `Rare classes need recall focus`
          ],
          example: `import numpy as np
tp,fp,fn=50,10,5
print("prec:", tp/(tp+fp), "rec:", tp/(tp+fn))`,
          output: `prec/rec`,
          pseudoCode: `Probability in ML Metrics

Accuracy = P(correct)
Precision = TP/(TP+FP)
Recall = TP/(TP+FN)
F1 = 2PR/(P+R)
Calibration: P(y=1|ŷ=p) ≈ p`
        }
      ],
      exercises: [
        {
          id: `ex-pb-1`,
          question: `P(A∪B) with P(A)=0.6,P(B)=0.5,P(A∩B)=0.2.`,
          solution: `print(0.6+0.5-0.2)`,
          difficulty: `easy`
        },
        {
          id: `ex-pb-2`,
          question: `Binomial P(k=3) n=5,p=0.5.`,
          solution: `from math import comb; print(comb(5,3)*0.5**5)`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 35,
      module: `module-math-06`,
      references: [
        {
          id: `khan-probability`,
          title: `Statistics and Probability — Khan Academy`,
          source: `Khan Academy`,
          type: `course`,
          url: `https://www.khanacademy.org/math/statistics-probability`,
          description: `Probability distributions, Bayes theorem, and statistical inference.`
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
          id: `cover-thomas-info-theory`,
          title: `Elements of Information Theory`,
          source: `Wiley`,
          type: `book`,
          url: `https://www.elementsofinformationtheory.com/`,
          description: `Definitive reference for entropy, mutual information, and coding theory.`
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
      id: `math-conditional-bayes`,
      title: `Conditional Probability & Bayes`,
      description: `Conditioning, Bayes theorem, and Bayesian updating.`,
      level: `intermediate`,
      track: `math`,
      sections: [
        {
          id: `cb-cond`,
          title: `Conditional Probability`,
          content: `P(A|B)=P(A∩B)/P(B) when P(B)>0. Restrict sample space to B. **Multiplication rule** P(A∩B)=P(A|B)P(B).

Law of total probability: P(A)=∑P(A|B_i)P(B_i) over partition B_i. Conditional changes probabilities with new evidence. Medical testing, spam filtering, and diagnostic models rely on conditioning.

P(A|B)≠P(B|A)—prosecutor fallacy confusion. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.`,
          formulas: [
            `P(A|B) = P(A∩B)/P(B)`,
            `P(A∩B) = P(A|B)P(B)`,
            `P(A) = ∑ P(A|B_i)P(B_i)`,
            `P(A|B) ≠ P(B|A) in general`,
            `Evidence B updates belief about A`
          ],
          diagram: `P(A|B): shrink world to B
   Ω → only B region
   renormalize probs in B`,
          keyPoints: [
            `Conditioning restricts sample space`,
            `Total probability law decomposes`,
            `Order matters in conditioning`,
            `Base rate often ignored`,
            `Evidence updates beliefs`
          ],
          example: `import numpy as np
P_AB,P_B=0.12,0.3
print("P(A|B):", P_AB/P_B)`,
          output: `P(A|B): 0.4`,
          pseudoCode: `Conditional Probability

P(A|B) = P(A∩B)/P(B)
P(A∩B) = P(A|B)P(B)
P(A) = ∑ P(A|B_i)P(B_i)
P(A|B) ≠ P(B|A) in general
Evidence B updates belief about A`
        },
        {
          id: `cb-bayes`,
          title: `Bayes Theorem`,
          content: `**Bayes**: P(A|B)=P(B|A)P(A)/P(B). P(A) prior, P(A|B) posterior, P(B|A) likelihood, P(B) evidence. Posterior ∝ likelihood × prior.

**Naive Bayes** assumes features conditionally independent given class: P(x|y)=∏P(x_i|y). Bayesian ML places priors on weights. Evidence integral often intractable.

MAP picks mode of posterior; full posterior gives uncertainty. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.`,
          formulas: [
            `P(A|B) = P(B|A)P(A)/P(B)`,
            `Posterior ∝ Likelihood × Prior`,
            `Naive Bayes: P(x|y)=∏ P(x_i|y)`,
            `MAP = argmax_θ P(θ|D)`,
            `Evidence P(D) normalizes`
          ],
          diagram: `prior ──× likelihood ──→ posterior
         P(θ)    P(D|θ)         P(θ|D)
   normalize by P(D)`,
          keyPoints: [
            `Bayes reverses conditioning`,
            `Prior encodes belief before data`,
            `Naive Bayes simple but strong baseline`,
            `MAP point estimate common`,
            `Full posterior harder but richer`
          ],
          example: `import numpy as np
prior=0.01; sens=0.95; spec=0.90; P_B=0.01*0.95+0.99*0.1
print("post:", prior*sens/P_B)`,
          output: `posterior`,
          pseudoCode: `Bayes Theorem

P(A|B) = P(B|A)P(A)/P(B)
Posterior ∝ Likelihood × Prior
Naive Bayes: P(x|y)=∏ P(x_i|y)
MAP = argmax_θ P(θ|D)
Evidence P(D) normalizes`
        },
        {
          id: `cb-odds`,
          title: `Odds & Log-Odds`,
          content: `**Log-odds** ln O additive for Bayes updates with likelihood ratio. Logistic regression models log-odds as linear: ln(p/(1−p))=w·x+b. Likelihood ratio P(B|A)/P(B|A^c) measures evidence strength.

Bayes factor compares models. Logit link connects linear scores to probabilities. Additive log-odds simplify sequential evidence combination in interpretable models.

Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.`,
          formulas: [
            `Odds = p/(1−p)`,
            `logit(p) = ln(p/(1−p))`,
            `log-odds update additive`,
            `Likelihood ratio = P(B|A)/P(B|A^c)`,
            `sigmoid = inverse logit`
          ],
          diagram: `p=0.5 → odds 1:1
   p=0.9 → odds 9:1
   log-odds: −∞ to +∞ linear model`,
          keyPoints: [
            `Log-odds unbounded for linear models`,
            `Logit link in logistic regression`,
            `Likelihood ratio quantifies evidence`,
            `Bayes factor for model compare`,
            `sigmoid inverts logit`
          ],
          example: `import numpy as np
p=0.7
print("logit:", np.log(p/(1-p)))
print("back:", 1/(1+np.exp(-np.log(p/(1-p)))))`,
          output: `round trip`,
          pseudoCode: `Odds & Log-Odds

Odds = p/(1−p)
logit(p) = ln(p/(1−p))
log-odds update additive
Likelihood ratio = P(B|A)/P(B|A^c)
sigmoid = inverse logit`
        },
        {
          id: `cb-ml`,
          title: `Bayesian ML Preview`,
          content: `Posterior predictive P(y*|x*,D)=∫ P(y*|x*,θ)P(θ|D)dθ averages over uncertainty. **Variational inference** approximates posterior. **MCMC** samples from posterior.

Uncertainty quantification in safety-critical apps. Thompson sampling uses posterior for exploration. Bayesian deep learning active research.

Prior prevents overfitting (weight decay ≈ Gaussian prior). Conjugate priors give closed-form posterior updates.`,
          formulas: [
            `Posterior predictive integrates θ uncertainty`,
            `VI: optimize q(θ) ≈ p(θ|D)`,
            `MCMC sample from posterior`,
            `Prior = regularization`,
            `Conjugate: closed-form update`
          ],
          diagram: `weight uncertainty:
   MAP: single θ*
   Bayesian: distribution over θ
   wider → more uncertainty`,
          keyPoints: [
            `Posterior captures uncertainty`,
            `VI scales to big models`,
            `MCMC accurate but slow`,
            `Priors encode preferences`,
            `Predictive distribution for decisions`
          ],
          example: `import numpy as np
# Beta-Binomial conjugate: prior Beta(a,b), obs k heads n flips
a,b,k,n=1,1,7,10
post_a,post_b=a+k,b+n-k
print("post mean:", post_a/(post_a+post_b))`,
          output: `post mean`,
          pseudoCode: `Bayesian ML Preview

Posterior predictive integrates θ uncertainty
VI: optimize q(θ) ≈ p(θ|D)
MCMC sample from posterior
Prior = regularization
Conjugate: closed-form update`
        }
      ],
      exercises: [
        {
          id: `ex-cb-1`,
          question: `Bayes: prior=0.001, sens=0.99, spec=0.95, test+. Compute P(disease|+).`,
          solution: `p=0.001; s=0.99; sp=0.95
Ppos=p*s+(1-p)*(1-sp)
print(p*s/Ppos)`,
          difficulty: `easy`
        },
        {
          id: `ex-cb-2`,
          question: `Convert p=0.8 to log-odds and back.`,
          solution: `import numpy as np
lo=np.log(0.8/0.2); print(lo, 1/(1+np.exp(-lo)))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 35,
      module: `module-math-06`,
      references: [
        {
          id: `bishop-prml`,
          title: `Pattern Recognition and Machine Learning`,
          source: `Cambridge`,
          type: `book`,
          url: `https://www.microsoft.com/en-us/research/publication/pattern-recognition-machine-learning/`,
          description: `Rigorous treatment of probability, inference, and classical ML algorithms.`
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
          id: `cover-thomas-info-theory`,
          title: `Elements of Information Theory`,
          source: `Wiley`,
          type: `book`,
          url: `https://www.elementsofinformationtheory.com/`,
          description: `Definitive reference for entropy, mutual information, and coding theory.`
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
      id: `math-random-vars`,
      title: `Random Variables`,
      description: `Discrete and continuous random variables, expectation, and variance.`,
      level: `intermediate`,
      track: `math`,
      sections: [
        {
          id: `rv-def`,
          title: `Random Variable Definition`,
          content: `**Random variable** X: Ω→ℝ maps outcomes to numbers. **Discrete**: countable values with PMF p(x)=P(X=x). **Continuous**: PDF f(x) with P(a≤X≤b)=∫_a^b f(x)dx.

CDF F(x)=P(X≤x) non-decreasing. Support set where p>0 or f>0. Mixed distributions combine atoms and density.

Features in ML often modeled as realizations of RVs. Target variable y in supervised learning is RV given x.

Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.`,
          formulas: [
            `PMF: p(x) = P(X=x) discrete`,
            `PDF: P(a≤X≤b) = ∫_a^b f(x)dx`,
            `CDF: F(x) = P(X≤x)`,
            `∑ p(x)=1 or ∫ f(x)dx=1`,
            `E[X] = ∑ x p(x) or ∫ x f(x)dx`
          ],
          diagram: `discrete PMF bar chart:
   P(X)
   │ ██ ██
   0  1  2
   continuous PDF curve area=1`,
          keyPoints: [
            `PMF vs PDF notation`,
            `CDF universal for any type`,
            `Normalization integrates/sums to 1`,
            `Support where mass lives`,
            `Targets are conditional RVs`
          ],
          example: `import numpy as np
from scipy import stats
x=np.arange(0,4)
p=stats.binom.pmf(x,3,0.5)
print("sum PMF:", p.sum())`,
          output: `sum PMF: 1.0`,
          pseudoCode: `Random Variable Definition

PMF: p(x) = P(X=x) discrete
PDF: P(a≤X≤b) = ∫_a^b f(x)dx
CDF: F(x) = P(X≤x)
∑ p(x)=1 or ∫ f(x)dx=1
E[X] = ∑ x p(x) or ∫ x f(x)dx`
        },
        {
          id: `rv-expect`,
          title: `Expectation & Variance`,
          content: `E[X]=∑x p(x) or ∫x f(x)dx **expected value** center of mass. **Linearity** E[aX+b]=aE[X]+b; E[X+Y]=E[X]+E[Y] always. **Variance** Var(X)=E[(X−μ)²]=E[X²]−(E[X])².

**Covariance** Cov(X,Y)=E[(X−μ_X)(Y−μ_Y)]. Independent ⇒ Cov=0 (converse false). Sample mean x̄ estimates E[X].

Law of large numbers: x̄→E[X] as n→∞. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.`,
          formulas: [
            `E[X] = ∑ x p(x) or ∫ x f(x) dx`,
            `Var(X) = E[X²] − (E[X])²`,
            `E[aX+b] = aE[X]+b`,
            `Cov(X,Y) = E[XY] − E[X]E[Y]`,
            `σ = √Var(X)`
          ],
          diagram: `distribution spread:
   low Var: tight cluster
   high Var: wide spread
   E[X] = balance point`,
          keyPoints: [
            `Expectation is average limit`,
            `Variance measures spread`,
            `Linearity always holds`,
            `Covariance measures co-movement`,
            `Sample stats estimate population`
          ],
          example: `import numpy as np
x=np.array([1,2,3,4,5])
print("mean:", x.mean(), "var:", x.var(ddof=0))`,
          output: `mean 3 var 2`,
          pseudoCode: `Expectation & Variance

E[X] = ∑ x p(x) or ∫ x f(x) dx
Var(X) = E[X²] − (E[X])²
E[aX+b] = aE[X]+b
Cov(X,Y) = E[XY] − E[X]E[Y]
σ = √Var(X)`
        },
        {
          id: `rv-transform`,
          title: `Functions of RVs`,
          content: `E[g(X)]=∑g(x)p(x) or ∫g(x)f(x)dx—not g(E[X]) in general (**Jensen**). Sum variances if independent: Var(X+Y)=Var(X)+Var(Y). For Y=g(X), find PDF of Y via CDF/transform methods.

Log-normal if ln(Y) normal. Softmax of logits gives categorical probabilities. Reparameterization trick: X=μ+σε, ε∼N(0,1) for backprop through stochastic nodes.

Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.`,
          formulas: [
            `E[g(X)] ≠ g(E[X]) in general`,
            `Var(aX+b) = a²Var(X)`,
            `Var(X+Y)=Var(X)+Var(Y) if indep`,
            `Jensen: convex f → E[f(X)]≥f(E[X])`,
            `Reparam: x = μ + σ·ε`
          ],
          diagram: `Jensen convex f:
   E[f(X)] ≥ f(E[X])
   concave: reverse inequality`,
          keyPoints: [
            `Nonlinear g breaks naive plug-in`,
            `Jensen explains bias of convex losses`,
            `Independence needed for Var sum`,
            `Reparam enables VAE gradients`,
            `Transform PDF with Jacobian`
          ],
          example: `import numpy as np
X=np.random.randn(100000)
print("E[X²]:", (X**2).mean(), "E[X]²:", X.mean()**2)`,
          output: `E[X²]=1 ≠ 0`,
          pseudoCode: `Functions of RVs

E[g(X)] ≠ g(E[X]) in general
Var(aX+b) = a²Var(X)
Var(X+Y)=Var(X)+Var(Y) if indep
Jensen: convex f → E[f(X)]≥f(E[X])
Reparam: x = μ + σ·ε`
        },
        {
          id: `rv-ml`,
          title: `RVs in ML Pipeline`,
          content: `Minibatch samples approximate expectation of loss E[L]. **Monte Carlo dropout** estimates predictive uncertainty. **Data augmentation** as implicit sampling from transformed distribution.

Labels as RVs; cross-entropy minimizes expected log loss. **Bias-variance** decomposition of expected prediction error. Stochastic gradients random due to batch sampling.

Treating pipeline probabilistically improves debugging and evaluation design.`,
          formulas: [
            `Empirical risk ≈ E[L] with samples`,
            `Batch mean estimates expectation`,
            `Dropout ≈ model averaging`,
            `Bias-variance tradeoff in E[error]`,
            `Augmentation expands implicit support`
          ],
          diagram: `batch loss:
   (1/m)∑ L_i ≈ E[L]
   bigger batch → lower MC noise`,
          keyPoints: [
            `SGD noisy due to batch sampling`,
            `Dropout for uncertainty approx`,
            `Augmentation as distribution shift`,
            `Bias-variance guides model complexity`,
            `Expectations central to loss design`
          ],
          example: `import numpy as np
losses=np.array([0.5,0.8,0.3,0.6])
print("batch mean loss:", losses.mean())`,
          output: `batch mean`,
          pseudoCode: `RVs in ML Pipeline

Empirical risk ≈ E[L] with samples
Batch mean estimates expectation
Dropout ≈ model averaging
Bias-variance tradeoff in E[error]
Augmentation expands implicit support`
        }
      ],
      exercises: [
        {
          id: `ex-rv-1`,
          question: `E[X] and Var(X) for fair die (1-6).`,
          solution: `import numpy as np
x=np.arange(1,7); p=np.ones(6)/6
print((x*p).sum(), (x**2*p).sum()-((x*p).sum())**2)`,
          difficulty: `easy`
        },
        {
          id: `ex-rv-2`,
          question: `Simulate 10000 standard normals; verify mean≈0, var≈1.`,
          solution: `import numpy as np
X=np.random.randn(10000)
print(X.mean(), X.var())`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 35,
      module: `module-math-06`,
      references: [
        {
          id: `khan-probability`,
          title: `Statistics and Probability — Khan Academy`,
          source: `Khan Academy`,
          type: `course`,
          url: `https://www.khanacademy.org/math/statistics-probability`,
          description: `Probability distributions, Bayes theorem, and statistical inference.`
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
          id: `cover-thomas-info-theory`,
          title: `Elements of Information Theory`,
          source: `Wiley`,
          type: `book`,
          url: `https://www.elementsofinformationtheory.com/`,
          description: `Definitive reference for entropy, mutual information, and coding theory.`
        },
        {
          id: `numpy-random`,
          title: `Random Sampling (numpy.random)`,
          source: `NumPy`,
          type: `documentation`,
          url: `https://numpy.org/doc/stable/reference/random/index.html`,
          description: `Reproducible random number generation and statistical distributions.`
        }
      ]
    },
{
      id: `math-distributions`,
      title: `Common Distributions`,
      description: `Bernoulli, binomial, Gaussian, Poisson, and exponential distributions.`,
      level: `intermediate`,
      track: `math`,
      sections: [
        {
          id: `dist-disc`,
          title: `Discrete Distributions`,
          content: `**Bernoulli** p(x)=p^x(1−p)^{1−x}, x∈{0,1}. **Binomial** counts successes in n trials. **Poisson** P(X=k)=e^{−λ}λ^k/k! models counts/rare events.

**Categorical** multi-class generalization of Bernoulli. Geometric: trials until first success. MLE for Bernoulli p is sample mean.

Poisson regression for count targets. Classification labels often categorical RVs.

Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.`,
          formulas: [
            `Bernoulli: P(X=1)=p`,
            `Binomial: C(n,k)p^k(1−p)^(n−k)`,
            `Poisson: P(X=k)=e^(−λ)λ^k/k!`,
            `Categorical: ∑p_i=1`,
            `E[Poisson]=Var=λ`
          ],
          diagram: `Binomial n=10 p=0.5
   PMF shape bell-ish:
        *
       ***
      *****
     *******`,
          keyPoints: [
            `Bernoulli single trial`,
            `Binomial n independent Bernoullis`,
            `Poisson for rare counts`,
            `Categorical for multi-class`,
            `Poisson mean equals variance`
          ],
          example: `import numpy as np
from scipy import stats
k=np.arange(0,11)
print(stats.binom.pmf(k,10,0.5))`,
          output: `binomial PMF`,
          pseudoCode: `Discrete Distributions

Bernoulli: P(X=1)=p
Binomial: C(n,k)p^k(1−p)^(n−k)
Poisson: P(X=k)=e^(−λ)λ^k/k!
Categorical: ∑p_i=1
E[Poisson]=Var=λ`
        },
        {
          id: `dist-cont`,
          title: `Continuous Distributions`,
          content: `**Uniform** on [a,b]: f=1/(b−a). **Exponential** f(x)=λe^{−λx}, x≥0 memoryless. **Gaussian** N(μ,σ²): f(x)=exp(−(x−μ)²/(2σ²))/√(2πσ²).

**Beta** on [0,1] for probabilities. **Gamma** generalizes exponential. Central role of Gaussian via CLT.

Standardization Z=(X−μ)/σ. Multivariate N(μ,Σ) with density involving Σ^{-1}. Log-normal for positive skewed data.

Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.`,
          formulas: [
            `N(μ,σ²): f(x) ∝ exp(−(x−μ)²/(2σ²))`,
            `Exp(λ): f(x)=λe^(−λx), x≥0`,
            `Uniform[a,b]: f=1/(b−a)`,
            `Z=(X−μ)/σ standardizes`,
            `Multivariate: (x−μ)ᵀΣ⁻¹(x−μ)`
          ],
          diagram: `Normal bell curve:
        μ`,
          keyPoints: [
            `Gaussian central in statistics`,
            `Exponential models waiting times`,
            `Beta for probability priors`,
            `Standardize before many algorithms`,
            `Multivariate for correlated features`
          ],
          example: `import numpy as np
x=np.linspace(-3,3,100)
f=np.exp(-x**2/2)/np.sqrt(2*np.pi)
print("area:", np.trapz(f,x))`,
          output: `area ~ 1`,
          pseudoCode: `Continuous Distributions

N(μ,σ²): f(x) ∝ exp(−(x−μ)²/(2σ²))
Exp(λ): f(x)=λe^(−λx), x≥0
Uniform[a,b]: f=1/(b−a)
Z=(X−μ)/σ standardizes
Multivariate: (x−μ)ᵀΣ⁻¹(x−μ)`
        },
        {
          id: `dist-clt`,
          title: `Central Limit Theorem Preview`,
          content: `Sum/mean of i.i.d. with finite variance → approximately normal as n grows. Justifies normal noise assumptions and confidence intervals. Sample mean standard error σ/√n shrinks with n.

Works for many distributions not just normal inputs. CLT foundation for hypothesis tests and error bars on metrics. Bootstrap also builds sampling distributions.

Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.`,
          formulas: [
            `X̄ approx N(μ, σ²/n) for large n`,
            `SE = σ/√n`,
            `CLT for sum: S approx N(nμ, nσ²)`,
            `Works i.i.d. finite variance`,
            `Justifies normal approximations`
          ],
          diagram: `any shape → sum of many
   becomes bell curve
   n=1  skewed
   n=30 ≈ normal`,
          keyPoints: [
            `CLT explains normal ubiquity`,
            `SE shrinks with √n`,
            `Applies to sample mean`,
            `Finite variance required`,
            `Metrics use CLT for CIs`
          ],
          example: `import numpy as np
X=np.random.exponential(1,(1000,50))
print("mean of means:", X.mean(axis=1).mean(), "std:", X.mean(axis=1).std())`,
          output: `approx N(1, 1/50)`,
          pseudoCode: `Central Limit Theorem Preview

X̄ approx N(μ, σ²/n) for large n
SE = σ/√n
CLT for sum: S approx N(nμ, nσ²)
Works i.i.d. finite variance
Justifies normal approximations`
        },
        {
          id: `dist-ml`,
          title: `Distributions in ML Models`,
          content: `Logistic regression: y~Bernoulli(σ(w·x)). Linear regression often y~N(w·x, σ²). **Gaussian Naive Bayes** continuous features.

**Mixture models** sum of Gaussians. Output layer activations match distribution: sigmoid/Bernoulli, softmax/categorical, ReLU+exp/Poisson rates. Negative log-likelihood = cross-entropy for classification.

Choosing distribution = choosing loss. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.`,
          formulas: [
            `Bernoulli → sigmoid + BCE`,
            `Gaussian y → MSE / NLL`,
            `Categorical → softmax + CE`,
            `Poisson → log link`,
            `VAE latent z ~ N(0,I)`
          ],
          diagram: `output layer ↔ distribution:
   sigmoid    → Bernoulli
   softmax    → Categorical
   linear     → Gaussian (MSE)`,
          keyPoints: [
            `Likelihood choice drives loss`,
            `Softmax matches categorical NLL`,
            `MSE assumes Gaussian noise`,
            `Generative models specify full dist`,
            `Mismatch hurts performance`
          ],
          example: `import numpy as np
# MSE assumes Gaussian
y=np.array([1.,2.,3.]); yhat=np.array([1.1,1.9,3.2])
print("MSE:", ((y-yhat)**2).mean())`,
          output: `MSE loss`,
          pseudoCode: `Distributions in ML Models

Bernoulli → sigmoid + BCE
Gaussian y → MSE / NLL
Categorical → softmax + CE
Poisson → log link
VAE latent z ~ N(0,I)`
        }
      ],
      exercises: [
        {
          id: `ex-dist-1`,
          question: `Sample 1000 N(0,1); histogram verify bell shape.`,
          solution: `import numpy as np
print(np.random.randn(1000).std())`,
          difficulty: `easy`
        },
        {
          id: `ex-dist-2`,
          question: `Poisson PMF λ=3, k=0..6.`,
          solution: `from scipy import stats; import numpy as np
k=np.arange(7); print(stats.poisson.pmf(k,3))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 35,
      module: `module-math-06`,
      references: [
        {
          id: `khan-probability`,
          title: `Statistics and Probability — Khan Academy`,
          source: `Khan Academy`,
          type: `course`,
          url: `https://www.khanacademy.org/math/statistics-probability`,
          description: `Probability distributions, Bayes theorem, and statistical inference.`
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
          id: `numpy-random`,
          title: `Random Sampling (numpy.random)`,
          source: `NumPy`,
          type: `documentation`,
          url: `https://numpy.org/doc/stable/reference/random/index.html`,
          description: `Reproducible random number generation and statistical distributions.`
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
      id: `math-joint-marginal`,
      title: `Joint, Marginal & Independence`,
      description: `Multivariate relationships, covariance matrices, and factorization.`,
      level: `intermediate`,
      track: `math`,
      sections: [
        {
          id: `jm-joint`,
          title: `Joint Distributions`,
          content: `**Joint PMF** p(x,y)=P(X=x,Y=y). **Joint PDF** f(x,y) with ∫∫f=1. **Marginal** p(x)=∑_y p(x,y) or ∫ f(x,y)dy.

Joint captures full dependence structure. **Covariance matrix** Σ_ij=Cov(X_i,X_j). Multivariate data rows as samples from joint.

Copulas model dependence separately from marginals. Joint modeling in generative AI (images as pixel joints approximately factorized).

Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.`,
          formulas: [
            `p(x,y) joint PMF/PDF`,
            `p(x) = ∑_y p(x,y) marginal`,
            `f(x) = ∫ f(x,y) dy`,
            `Σ_ij = Cov(X_i, X_j)`,
            `∫∫ f(x,y) dx dy = 1`
          ],
          diagram: `joint table X,Y:
        y1   y2   y3
   x1  .2   .1   .05
   x2  .15  .3   .2
   marginals = row/col sums`,
          keyPoints: [
            `Joint has full info`,
            `Marginals sum/integrate out`,
            `Cov matrix from joint`,
            `Independence factorizes joint`,
            `High-D joints hard to model`
          ],
          example: `import numpy as np
J=np.array([[0.2,0.1],[0.3,0.4]])
print("marg X:", J.sum(axis=1), "marg Y:", J.sum(axis=0))`,
          output: `marginals`,
          pseudoCode: `Joint Distributions

p(x,y) joint PMF/PDF
p(x) = ∑_y p(x,y) marginal
f(x) = ∫ f(x,y) dy
Σ_ij = Cov(X_i, X_j)
∫∫ f(x,y) dx dy = 1`
        },
        {
          id: `jm-indep`,
          title: `Independence & Conditional`,
          content: `X,Y independent iff p(x,y)=p(x)p(y) or f(x,y)=f(x)f(y). **Conditional** p(x|y)=p(x,y)/p(y). **Chain rule** p(x,y,z)=p(x)p(y|x)p(z|x,y).

Bayes nets factorize joint via conditionals. Correlation zero doesn't imply independence except Gaussian special case. **Conditional independence** X⊥Y|Z simplifies structure in PGM.

Feature independence assumption in naive Bayes rarely true but useful.`,
          formulas: [
            `Indep: p(x,y)=p(x)p(y)`,
            `p(x|y)=p(x,y)/p(y)`,
            `p(x,y,z)=p(x)p(y|x)p(z|x,y)`,
            `X⊥Y|Z: p(x,y|z)=p(x|z)p(y|z)`,
            `Corr=0 ≠ indep (non-Gaussian)`
          ],
          diagram: `independent joint factorizes:
   p(x,y) = p(x)·p(y)
   grid = outer product of marginals`,
          keyPoints: [
            `Independence factorizes joint`,
            `Conditional from joint/marginal`,
            `Chain rule builds complex joints`,
            `Conditional indep in Bayes nets`,
            `Naive Bayes strong assumption`
          ],
          example: `import numpy as np
px=np.array([0.4,0.6]); py=np.array([0.5,0.5])
print(np.outer(px,py))`,
          output: `indep joint`,
          pseudoCode: `Independence & Conditional

Indep: p(x,y)=p(x)p(y)
p(x|y)=p(x,y)/p(y)
p(x,y,z)=p(x)p(y|x)p(z|x,y)
X⊥Y|Z: p(x,y|z)=p(x|z)p(y|z)
Corr=0 ≠ indep (non-Gaussian)`
        },
        {
          id: `jm-cov`,
          title: `Covariance & Correlation`,
          content: `Cov(X,Y)=E[(X−μ_X)(Y−μ_Y)]. Corr ρ=Cov/(σ_X σ_Y)∈[−1,1]. Cov matrix Σ symmetric PSD.

**Correlation matrix** unit diagonal. Σ eigenvalues principal variances. Det Σ generalizes bivariate correlation volume. Shrinkage estimators regularize Σ for small n.

Feature correlation heatmaps guide EDA and multicollinearity detection. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.`,
          formulas: [
            `Cov(X,Y) = E[XY] − E[X]E[Y]`,
            `ρ = Cov/(σ_X σ_Y)`,
            `Σ symmetric, PSD`,
            `Corr matrix: diag 1`,
            `Sample Σ = X̃ᵀX̃/n`
          ],
          diagram: `correlation heatmap:
   1.0  0.8  0.1
   0.8  1.0 −0.3
   0.1 −0.3  1.0
   diagonal always 1`,
          keyPoints: [
            `Correlation normalized covariance`,
            `PSD required valid cov matrix`,
            `High corr → redundancy`,
            `Eigenvalues of Σ for PCA`,
            `Shrinkage for small samples`
          ],
          example: `import numpy as np
X=np.random.randn(100,3)
C=np.corrcoef(X.T)
print(np.round(C,2))`,
          output: `corr matrix`,
          pseudoCode: `Covariance & Correlation

Cov(X,Y) = E[XY] − E[X]E[Y]
ρ = Cov/(σ_X σ_Y)
Σ symmetric, PSD
Corr matrix: diag 1
Sample Σ = X̃ᵀX̃/n`
        },
        {
          id: `jm-ml`,
          title: `Joint Modeling in ML`,
          content: `**Generative** models learn p(x) or p(x,y). **Discriminative** learn p(y|x) directly. **Multivariate Gaussian** for anomaly detection via Σ^{-1} Mahalanobis distance.

**Copula + marginals** in finance. **Diffusion models** learn score ∇_x log p(x). Factorized autoregressive p(x)=∏p(x_i|x_{<i}).

Choosing what joint to model defines generative task complexity.`,
          formulas: [
            `Generative: model p(x) or p(x,y)`,
            `Discriminative: p(y|x)`,
            `p(x,y)=p(y|x)p(x)`,
            `Mahalanobis: (x−μ)ᵀΣ⁻¹(x−μ)`,
            `Autoregressive factorization`
          ],
          diagram: `generative vs discriminative:
   p(x,y) ──→ p(y|x)  discriminative
   p(x,y) ──→ p(x)    generative`,
          keyPoints: [
            `Discriminative often better classification`,
            `Generative enables sampling`,
            `Mahalanobis for outliers`,
            `Autoregressive GPT factorization`,
            `Joint structure defines difficulty`
          ],
          example: `import numpy as np
mu=np.zeros(2); X=np.random.randn(50,2)
print("Mahalanobis approx:", ((X**2).sum(axis=1)).mean())`,
          output: `chi2-like`,
          pseudoCode: `Joint Modeling in ML

Generative: model p(x) or p(x,y)
Discriminative: p(y|x)
p(x,y)=p(y|x)p(x)
Mahalanobis: (x−μ)ᵀΣ⁻¹(x−μ)
Autoregressive factorization`
        }
      ],
      exercises: [
        {
          id: `ex-jm-1`,
          question: `Joint [[0.1,0.2],[0.3,0.4]]; verify sums to 1.`,
          solution: `import numpy as np
J=np.array([[0.1,0.2],[0.3,0.4]]); print(J.sum())`,
          difficulty: `easy`
        },
        {
          id: `ex-jm-2`,
          question: `Independent px=[0.3,0.7], py=[0.4,0.6]; build joint.`,
          solution: `import numpy as np
print(np.outer([0.3,0.7],[0.4,0.6]))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 35,
      module: `module-math-06`,
      references: [
        {
          id: `bishop-prml`,
          title: `Pattern Recognition and Machine Learning`,
          source: `Cambridge`,
          type: `book`,
          url: `https://www.microsoft.com/en-us/research/publication/pattern-recognition-machine-learning/`,
          description: `Rigorous treatment of probability, inference, and classical ML algorithms.`
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
          id: `cover-thomas-info-theory`,
          title: `Elements of Information Theory`,
          source: `Wiley`,
          type: `book`,
          url: `https://www.elementsofinformationtheory.com/`,
          description: `Definitive reference for entropy, mutual information, and coding theory.`
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
    }
];
