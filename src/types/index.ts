export interface Reference {
  id: string;
  title: string;
  source: string;
  type: 'course' | 'paper' | 'book' | 'documentation' | 'video';
  url: string;
  description: string;
}

export interface Exercise {
  id: string;
  question: string;
  hint?: string;
  solution: string;
  alternateSolutions?: string[];
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface LessonSection {
  id: string;
  title: string;
  content: string;
  pseudoCode?: string;
  example?: string;
  output?: string;
  keyPoints?: string[];
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  module: string;
  track: 'python' | 'data' | 'ml' | 'dl' | 'ai';
  sections: LessonSection[];
  exercises: Exercise[];
  estimatedMinutes: number;
  prerequisites?: string[];
  references?: Reference[];
}

export interface TopicProgress {
  topicId: string;
  sectionsCompleted: string[];
  exercisesCompleted: string[];
  studyTimeSeconds: number;
  lastVisited: string;
  completed: boolean;
}

export interface ProgressState {
  topics: Record<string, TopicProgress>;
  bookmarks: string[];
  notes: Record<string, string>;
  totalStudySeconds: number;
  studySessions: number;
  streakDays: number;
  lastStudyDate: string;
}

export type Theme = 'light' | 'dark';
export type BookmarkType = 'topic';

export interface ModuleInfo {
  id: string;
  name: string;
  track: Topic['track'];
  description: string;
  topics: Topic[];
}
