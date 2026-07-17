export {
  modules,
  allTopics,
  topicById,
  moduleLoaders,
} from './catalog';

export {
  loadTopic,
  getCachedTopic,
  preloadTopic,
  preloadTopicModule,
  getAdjacentTopics,
  clearTopicCache,
} from './loadTopic';

import { allTopics } from './catalog';
import type { TopicSummary, Topic } from '../../types';

export function getTopicById(id: string): TopicSummary | undefined {
  return allTopics.find((t) => t.id === id);
}

export function searchTopics(query: string): TopicSummary[] {
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

export function getTopicsByTrack(track: Topic['track']): TopicSummary[] {
  return allTopics.filter((t) => t.track === track);
}
