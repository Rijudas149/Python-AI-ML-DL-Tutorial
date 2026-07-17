import { useEffect, useState } from 'react';

/** Thin progress bar showing scroll position through the lesson article. */
export function LessonReadingProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const article = document.querySelector('.lesson-content') as HTMLElement | null;
      if (!article) return;

      const rect = article.getBoundingClientRect();
      const articleTop = window.scrollY + rect.top;
      const articleHeight = article.offsetHeight;
      const viewport = window.innerHeight;
      const scrollable = Math.max(articleHeight - viewport * 0.4, 1);
      const scrolled = window.scrollY - articleTop + viewport * 0.15;
      const next = Math.min(100, Math.max(0, (scrolled / scrollable) * 100));
      setPct(next);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  if (pct <= 0) return null;

  return (
    <div className="lesson-reading-progress" aria-hidden>
      <div className="lesson-reading-progress-fill" style={{ width: `${pct}%` }} />
    </div>
  );
}
