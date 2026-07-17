import { modules, allTopics } from '../data/curriculum';
import type { Topic, TopicSummary, TopicProgress, ProgressState } from '../types';

export type TopicStatus = 'completed' | 'in-progress' | 'next' | 'available' | 'upcoming';

export interface RoadmapTopic {
  topic: TopicSummary;
  globalIndex: number;
  moduleIndex: number;
  topicIndex: number;
  status: TopicStatus;
  progressPct: number;
}

export interface RoadmapModule {
  module: (typeof modules)[0];
  moduleIndex: number;
  topics: RoadmapTopic[];
  completedCount: number;
  progressPct: number;
}

export interface RoadmapPhase {
  id: Topic['track'];
  order: number;
  title: string;
  subtitle: string;
  icon: string;
  modules: RoadmapModule[];
  completedCount: number;
  totalTopics: number;
  progressPct: number;
}

export const ROADMAP_PHASE_META: Record<
  Topic['track'],
  { order: number; title: string; subtitle: string; icon: string; after: string | null }
> = {
  python: {
    order: 1,
    title: 'Phase 1: Python Mastery',
    subtitle: 'Language fundamentals → OOP → advanced patterns → testing & async',
    icon: '🐍',
    after: null,
  },
  math: {
    order: 2,
    title: 'Phase 2: Mathematics for Data Science',
    subtitle: 'Algebra → linear algebra → calculus → probability → statistics → optimization',
    icon: '📐',
    after: 'Complete Python fundamentals first',
  },
  data: {
    order: 3,
    title: 'Phase 3: Data Science Tools',
    subtitle: 'NumPy → Pandas → visualization → SciPy & applied statistics',
    icon: '📊',
    after: 'Complete Mathematics phase',
  },
  ml: {
    order: 4,
    title: 'Phase 4: Machine Learning',
    subtitle: 'Math for ML → scikit-learn → supervised/unsupervised → feature engineering',
    icon: '🤖',
    after: 'Complete Data Science phase',
  },
  dl: {
    order: 5,
    title: 'Phase 5: Deep Learning',
    subtitle: 'Neural nets → PyTorch → CNNs → NLP → Transformers',
    icon: '🧠',
    after: 'Complete Machine Learning phase',
  },
  ai: {
    order: 6,
    title: 'Phase 6: AI & Production',
    subtitle: 'LLMs → RAG → GenAI → MLOps → ethics & governance',
    icon: '✨',
    after: 'Complete Deep Learning phase',
  },
};

function getTopicProgressPct(topic: TopicSummary, tp?: TopicProgress): number {
  if (!tp) return 0;
  const total = topic.sectionCount + topic.exerciseCount;
  if (total === 0) return 0;
  const done = tp.sectionsCompleted.length + tp.exercisesCompleted.length;
  return Math.round((done / total) * 100);
}

export function getNextTopicId(progress: ProgressState): string | null {
  for (const topic of allTopics) {
    if (!progress.topics[topic.id]?.completed) return topic.id;
  }
  return null;
}

export function buildRoadmap(progress: ProgressState): RoadmapPhase[] {
  const nextId = getNextTopicId(progress);
  let globalIndex = 0;

  const phaseMap = new Map<Topic['track'], RoadmapPhase>();

  for (const track of ['python', 'math', 'data', 'ml', 'dl', 'ai'] as const) {
    const meta = ROADMAP_PHASE_META[track];
    phaseMap.set(track, {
      id: track,
      order: meta.order,
      title: meta.title,
      subtitle: meta.subtitle,
      icon: meta.icon,
      modules: [],
      completedCount: 0,
      totalTopics: 0,
      progressPct: 0,
    });
  }

  modules.forEach((mod, moduleIndex) => {
    const phase = phaseMap.get(mod.track)!;
    const roadmapTopics: RoadmapTopic[] = mod.topics.map((topic, topicIndex) => {
      const tp = progress.topics[topic.id];
      const progressPct = getTopicProgressPct(topic, tp);
      let status: TopicStatus = 'upcoming';

      if (tp?.completed) {
        status = 'completed';
      } else if (progressPct > 0) {
        status = 'in-progress';
      } else if (topic.id === nextId) {
        status = 'next';
      } else if (nextId) {
        const nextIdx = allTopics.findIndex((t) => t.id === nextId);
        status = globalIndex < nextIdx ? 'available' : 'upcoming';
      } else {
        status = 'available';
      }

      const item: RoadmapTopic = {
        topic,
        globalIndex,
        moduleIndex,
        topicIndex,
        status,
        progressPct,
      };
      globalIndex++;
      return item;
    });

    const completedCount = roadmapTopics.filter((t) => t.status === 'completed').length;
    phase.modules.push({
      module: mod,
      moduleIndex,
      topics: roadmapTopics,
      completedCount,
      progressPct: mod.topics.length ? Math.round((completedCount / mod.topics.length) * 100) : 0,
    });
    phase.completedCount += completedCount;
    phase.totalTopics += mod.topics.length;
  });

  return [...phaseMap.values()].map((phase) => ({
    ...phase,
    progressPct: phase.totalTopics ? Math.round((phase.completedCount / phase.totalTopics) * 100) : 0,
  }));
}

export function getRoadmapSummary(progress: ProgressState) {
  const completed = allTopics.filter((t) => progress.topics[t.id]?.completed).length;
  const nextId = getNextTopicId(progress);
  const nextTopic = nextId ? allTopics.find((t) => t.id === nextId) : undefined;
  const phases = buildRoadmap(progress);
  const currentPhase = phases.find((p) => p.progressPct < 100) ?? phases[phases.length - 1];

  return {
    totalTopics: allTopics.length,
    completedTopics: completed,
    overallPct: allTopics.length ? Math.round((completed / allTopics.length) * 100) : 0,
    nextTopic,
    currentPhase,
    phases,
  };
}
