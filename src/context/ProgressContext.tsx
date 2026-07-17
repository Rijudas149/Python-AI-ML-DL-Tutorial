import { createContext, useContext, useCallback, type ReactNode } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { ProgressState, TopicProgress, BookmarkType } from '../types';
import { allTopics } from '../data/curriculum';

const defaultProgress: ProgressState = {
  topics: {},
  bookmarks: [],
  notes: {},
  totalStudySeconds: 0,
  studySessions: 0,
  streakDays: 0,
  lastStudyDate: '',
};

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

function updateStreak(prev: ProgressState): Pick<ProgressState, 'streakDays' | 'lastStudyDate'> {
  const today = todayStr();
  if (prev.lastStudyDate === today) return { streakDays: prev.streakDays, lastStudyDate: today };

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().slice(0, 10);

  if (prev.lastStudyDate === yesterdayStr) {
    return { streakDays: prev.streakDays + 1, lastStudyDate: today };
  }
  return { streakDays: 1, lastStudyDate: today };
}

interface ProgressContextType {
  progress: ProgressState;
  markSectionComplete: (topicId: string, sectionId: string) => void;
  markExerciseComplete: (topicId: string, exerciseId: string) => void;
  markTopicComplete: (topicId: string) => void;
  addStudyTime: (seconds: number, topicId?: string) => void;
  getTopicProgress: (topicId: string) => TopicProgress;
  getOverallStudyProgress: () => number;
  getModuleProgress: (module: string) => number;
  getLastVisitedTopic: () => { topicId: string; title: string; module: string; progressPct: number } | null;
  isBookmarked: (type: BookmarkType, id: string) => boolean;
  toggleBookmark: (type: BookmarkType, id: string) => void;
  getBookmarkedTopics: () => string[];
  getNote: (topicId: string) => string;
  setNote: (topicId: string, note: string) => void;
  resetProgress: () => void;
}

const ProgressContext = createContext<ProgressContextType | null>(null);

function ensureTopicProgress(state: ProgressState, topicId: string): TopicProgress {
  return (
    state.topics[topicId] ?? {
      topicId,
      sectionsCompleted: [],
      exercisesCompleted: [],
      studyTimeSeconds: 0,
      lastVisited: new Date().toISOString(),
      completed: false,
    }
  );
}

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useLocalStorage<ProgressState>('dsm-progress', defaultProgress, ['dl-master-progress']);

  const markSectionComplete = useCallback((topicId: string, sectionId: string) => {
    setProgress((prev) => {
      const tp = ensureTopicProgress(prev, topicId);
      if (tp.sectionsCompleted.includes(sectionId)) return prev;
      const topic = allTopics.find((t) => t.id === topicId);
      const sectionsCompleted = [...tp.sectionsCompleted, sectionId];
      const streak = updateStreak(prev);
      return {
        ...prev,
        ...streak,
        topics: {
          ...prev.topics,
          [topicId]: {
            ...tp,
            sectionsCompleted,
            lastVisited: new Date().toISOString(),
            completed:
              sectionsCompleted.length >= (topic?.sections.length ?? 0) &&
              tp.exercisesCompleted.length >= (topic?.exercises.length ?? 0),
          },
        },
      };
    });
  }, [setProgress]);

  const markExerciseComplete = useCallback((topicId: string, exerciseId: string) => {
    setProgress((prev) => {
      const tp = ensureTopicProgress(prev, topicId);
      if (tp.exercisesCompleted.includes(exerciseId)) return prev;
      const topic = allTopics.find((t) => t.id === topicId);
      const exercisesCompleted = [...tp.exercisesCompleted, exerciseId];
      const streak = updateStreak(prev);
      return {
        ...prev,
        ...streak,
        topics: {
          ...prev.topics,
          [topicId]: {
            ...tp,
            exercisesCompleted,
            lastVisited: new Date().toISOString(),
            completed:
              exercisesCompleted.length >= (topic?.exercises.length ?? 0) &&
              tp.sectionsCompleted.length >= (topic?.sections.length ?? 0),
          },
        },
      };
    });
  }, [setProgress]);

  const markTopicComplete = useCallback((topicId: string) => {
    setProgress((prev) => {
      const topic = allTopics.find((t) => t.id === topicId);
      if (!topic) return prev;
      const streak = updateStreak(prev);
      return {
        ...prev,
        ...streak,
        topics: {
          ...prev.topics,
          [topicId]: {
            ...ensureTopicProgress(prev, topicId),
            sectionsCompleted: topic.sections.map((s) => s.id),
            exercisesCompleted: topic.exercises.map((e) => e.id),
            completed: true,
            lastVisited: new Date().toISOString(),
          },
        },
      };
    });
  }, [setProgress]);

  const addStudyTime = useCallback((seconds: number, topicId?: string) => {
    setProgress((prev) => {
      const streak = updateStreak(prev);
      const next: ProgressState = {
        ...prev,
        ...streak,
        totalStudySeconds: prev.totalStudySeconds + seconds,
      };
      if (topicId) {
        const tp = ensureTopicProgress(prev, topicId);
        next.topics = {
          ...prev.topics,
          [topicId]: {
            ...tp,
            studyTimeSeconds: tp.studyTimeSeconds + seconds,
            lastVisited: new Date().toISOString(),
          },
        };
      }
      return next;
    });
  }, [setProgress]);

  const getTopicProgress = useCallback(
    (topicId: string) => ensureTopicProgress(progress, topicId),
    [progress]
  );

  const getOverallStudyProgress = useCallback(() => {
    if (allTopics.length === 0) return 0;
    const completed = allTopics.filter((t) => progress.topics[t.id]?.completed).length;
    return Math.round((completed / allTopics.length) * 100);
  }, [progress]);

  const getModuleProgress = useCallback(
    (module: string) => {
      const moduleTopics = allTopics.filter((t) => t.module === module);
      if (moduleTopics.length === 0) return 0;
      const done = moduleTopics.filter((t) => progress.topics[t.id]?.completed).length;
      return Math.round((done / moduleTopics.length) * 100);
    },
    [progress]
  );

  const getLastVisitedTopic = useCallback(() => {
    const entries = Object.values(progress.topics);
    if (entries.length === 0) return null;
    const latest = entries.reduce((best, current) =>
      new Date(current.lastVisited) > new Date(best.lastVisited) ? current : best
    );
    const topic = allTopics.find((t) => t.id === latest.topicId);
    if (!topic) return null;
    const total = topic.sections.length + topic.exercises.length;
    const done = latest.sectionsCompleted.length + latest.exercisesCompleted.length;
    return {
      topicId: topic.id,
      title: topic.title,
      module: topic.module,
      progressPct: total > 0 ? Math.round((done / total) * 100) : 0,
    };
  }, [progress]);

  const isBookmarked = useCallback(
    (_type: BookmarkType, id: string) => progress.bookmarks.includes(id),
    [progress.bookmarks]
  );

  const toggleBookmark = useCallback((_type: BookmarkType, id: string) => {
    setProgress((prev) => ({
      ...prev,
      bookmarks: prev.bookmarks.includes(id)
        ? prev.bookmarks.filter((b) => b !== id)
        : [...prev.bookmarks, id],
    }));
  }, [setProgress]);

  const getBookmarkedTopics = useCallback(() => progress.bookmarks, [progress.bookmarks]);

  const getNote = useCallback((topicId: string) => progress.notes[topicId] ?? '', [progress.notes]);

  const setNote = useCallback((topicId: string, note: string) => {
    setProgress((prev) => ({
      ...prev,
      notes: { ...prev.notes, [topicId]: note },
    }));
  }, [setProgress]);

  const resetProgress = useCallback(() => setProgress(defaultProgress), [setProgress]);

  return (
    <ProgressContext.Provider
      value={{
        progress,
        markSectionComplete,
        markExerciseComplete,
        markTopicComplete,
        addStudyTime,
        getTopicProgress,
        getOverallStudyProgress,
        getModuleProgress,
        getLastVisitedTopic,
        isBookmarked,
        toggleBookmark,
        getBookmarkedTopics,
        getNote,
        setNote,
        resetProgress,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider');
  return ctx;
}
