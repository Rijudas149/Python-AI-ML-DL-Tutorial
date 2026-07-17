import { useState, useEffect, useCallback } from 'react';

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
  legacyKeys: string[] = [],
  normalize?: (value: unknown) => T,
) {
  const readStored = (): T => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) return normalize ? normalize(JSON.parse(item)) : (JSON.parse(item) as T);

      for (const legacyKey of legacyKeys) {
        const legacyItem = window.localStorage.getItem(legacyKey);
        if (legacyItem) {
          const parsed = JSON.parse(legacyItem);
          const value = normalize ? normalize(parsed) : (parsed as T);
          window.localStorage.setItem(key, JSON.stringify(value));
          return value;
        }
      }
    } catch {
      /* ignore parse errors */
    }
    return initialValue;
  };

  const [storedValue, setStoredValue] = useState<T>(readStored);

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
        const parsed = JSON.parse(e.newValue);
        setStoredValue(normalize ? normalize(parsed) : (parsed as T));
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, [key, normalize]);

  return [storedValue, setValue] as const;
}
