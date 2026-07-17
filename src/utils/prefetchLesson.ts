import { preloadTopic } from '../data/curriculum';

let lessonPagePromise: Promise<unknown> | null = null;

export function prefetchLessonPage(): void {
  if (!lessonPagePromise) {
    lessonPagePromise = import('../pages/TopicLesson');
  }
}

export function warmTopic(topicId: string): void {
  prefetchLessonPage();
  preloadTopic(topicId);
}
