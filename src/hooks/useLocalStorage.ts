import { useState, useEffect, useCallback } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T, legacyKeys: string[] = []) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) return JSON.parse(item) as T;

      for (const legacyKey of legacyKeys) {
        const legacyItem = window.localStorage.getItem(legacyKey);
        if (legacyItem) {
          window.localStorage.setItem(key, legacyItem);
          return JSON.parse(legacyItem) as T;
        }
      }
    } catch {
      /* ignore parse errors */
    }
    return initialValue;
  });

  const setValue = useCallback(
    (value: T | ((val: T) => T)) => {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    },
    [key, storedValue]
  );

  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === key && e.newValue) {
        setStoredValue(JSON.parse(e.newValue) as T);
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, [key]);

  return [storedValue, setValue] as const;
}
