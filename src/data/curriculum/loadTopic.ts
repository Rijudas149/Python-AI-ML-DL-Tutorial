import { allTopics, moduleLoaders, topicById } from './catalog';
import type { Topic, TopicSummary } from '../../types';

const moduleCache = new Map<string, Topic[]>();
const topicCache = new Map<string, Topic>();
const moduleLoadPromises = new Map<string, Promise<Topic[]>>();

async function loadModuleTopics(moduleId: string): Promise<Topic[]> {
  const cached = moduleCache.get(moduleId);
  if (cached) return cached;

  let pending = moduleLoadPromises.get(moduleId);
  if (!pending) {
    const loader = moduleLoaders[moduleId];
    if (!loader) return [];
    pending = loader().then((topics) => {
      moduleCache.set(moduleId, topics);
      moduleLoadPromises.delete(moduleId);
      return topics;
    });
    moduleLoadPromises.set(moduleId, pending);
  }

  return pending;
}

export async function loadTopic(id: string): Promise<Topic | undefined> {
  const cached = topicCache.get(id);
  if (cached) return cached;

  const summary = topicById[id];
  if (!summary) return undefined;

  const moduleTopics = await loadModuleTopics(summary.moduleId);
  const topic = moduleTopics.find((t) => t.id === id);
  if (topic) topicCache.set(id, topic);
  return topic;
}

export function preloadTopicModule(moduleId: string): void {
  void loadModuleTopics(moduleId);
}

export function preloadTopic(id: string): void {
  const summary = topicById[id];
  if (summary) preloadTopicModule(summary.moduleId);
}

export function clearTopicCache(): void {
  topicCache.clear();
  moduleCache.clear();
  moduleLoadPromises.clear();
}

export function getAdjacentTopics(id: string): { prev?: TopicSummary; next?: TopicSummary } {
  const idx = allTopics.findIndex((t) => t.id === id);
  if (idx === -1) return {};
  return {
    prev: idx > 0 ? allTopics[idx - 1] : undefined,
    next: idx < allTopics.length - 1 ? allTopics[idx + 1] : undefined,
  };
}
