import type { ProgressState, TopicProgress } from '../types';

export const defaultProgress: ProgressState = {
  topics: {},
  bookmarks: [],
  notes: {},
  totalStudySeconds: 0,
  studySessions: 0,
  streakDays: 0,
  lastStudyDate: '',
};

function normalizeTopicProgress(topicId: string, raw: unknown): TopicProgress {
  const tp = raw && typeof raw === 'object' ? (raw as Partial<TopicProgress>) : {};
  return {
    topicId: typeof tp.topicId === 'string' ? tp.topicId : topicId,
    sectionsCompleted: Array.isArray(tp.sectionsCompleted) ? tp.sectionsCompleted : [],
    exercisesCompleted: Array.isArray(tp.exercisesCompleted) ? tp.exercisesCompleted : [],
    studyTimeSeconds: typeof tp.studyTimeSeconds === 'number' ? tp.studyTimeSeconds : 0,
    lastVisited: typeof tp.lastVisited === 'string' ? tp.lastVisited : new Date().toISOString(),
    completed: Boolean(tp.completed),
  };
}

export function normalizeProgress(raw: unknown): ProgressState {
  if (!raw || typeof raw !== 'object') return defaultProgress;

  const p = raw as Partial<ProgressState>;
  const topics: Record<string, TopicProgress> = {};

  if (p.topics && typeof p.topics === 'object') {
    for (const [id, tp] of Object.entries(p.topics)) {
      topics[id] = normalizeTopicProgress(id, tp);
    }
  }

  return {
    topics,
    bookmarks: Array.isArray(p.bookmarks) ? p.bookmarks.filter((b) => typeof b === 'string') : [],
    notes:
      p.notes && typeof p.notes === 'object'
        ? Object.fromEntries(
            Object.entries(p.notes).filter(([, v]) => typeof v === 'string'),
          )
        : {},
    totalStudySeconds: typeof p.totalStudySeconds === 'number' ? p.totalStudySeconds : 0,
    studySessions: typeof p.studySessions === 'number' ? p.studySessions : 0,
    streakDays: typeof p.streakDays === 'number' ? p.streakDays : 0,
    lastStudyDate: typeof p.lastStudyDate === 'string' ? p.lastStudyDate : '',
  };
}

export function ensureTopicProgress(state: ProgressState, topicId: string): TopicProgress {
  return normalizeTopicProgress(topicId, state.topics[topicId] ?? { topicId });
}
