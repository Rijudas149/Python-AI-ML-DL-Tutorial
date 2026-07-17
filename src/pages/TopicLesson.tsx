import { useState, useEffect, useRef, memo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { allTopics, loadTopic, getCachedTopic, getAdjacentTopics } from '../data/curriculum';
import { useProgress } from '../context/ProgressContext';
import { CodeBlock } from '../components/CodeBlock';
import { LessonContent, TabularDisplay } from '../components/LessonContent';
import { ExerciseEditor } from '../components/ExerciseEditor';
import { BookmarkButton } from '../components/BookmarkButton';
import { ReferenceList } from '../components/ReferenceList';
import { FormulaList, DiagramBlock } from '../components/MathBlocks';
import { ensureTopicProgress } from '../utils/progressStorage';
import type { Topic, LessonSection, ProgressState } from '../types';

function getInitialSection(topic: Topic, completedSections: string[]) {
  const firstIncomplete = topic.sections.findIndex((s) => !completedSections.includes(s.id));
  if (firstIncomplete === -1) return topic.sections.length > 0 ? topic.sections.length - 1 : 0;
  return firstIncomplete;
}

function applyTopicState(
  loaded: Topic,
  progressState: ProgressState,
  setters: {
    setTopic: (t: Topic) => void;
    setActiveSection: (n: number) => void;
    setShowExercises: (v: boolean) => void;
    setShowNotes: (v: boolean) => void;
    setRevealedSolutions: (s: Set<string>) => void;
    setLoading: (v: boolean) => void;
  },
) {
  const completed = ensureTopicProgress(progressState, loaded.id).sectionsCompleted;
  const allSectionsDone = completed.length >= loaded.sections.length;
  setters.setTopic(loaded);
  setters.setShowNotes(false);
  setters.setRevealedSolutions(new Set());
  setters.setLoading(false);
  if (allSectionsDone) {
    setters.setShowExercises(true);
    setters.setActiveSection(loaded.sections.length > 0 ? loaded.sections.length - 1 : 0);
  } else {
    setters.setShowExercises(false);
    setters.setActiveSection(getInitialSection(loaded, completed));
  }
}

const SectionContent = memo(function SectionContent({ section }: { section: LessonSection }) {
  return (
    <div className="lesson-flow">
      <section className="lesson-panel lesson-panel-explain">
        <div className="lesson-panel-label">
          <span className="lesson-panel-icon">📖</span>
          Explanation
        </div>
        <LessonContent content={section.content} />
      </section>

      {section.formulas && section.formulas.length > 0 && (
        <FormulaList formulas={section.formulas} />
      )}

      {section.diagram && <DiagramBlock diagram={section.diagram} />}

      {section.pseudoCode && (
        <section className="lesson-panel lesson-panel-pseudo">
          <div className="lesson-panel-label">
            <span className="lesson-panel-icon">🧩</span>
            Step-by-Step Logic
          </div>
          <CodeBlock code={section.pseudoCode} language="pseudo" />
        </section>
      )}

      {section.example && (
        <section className="lesson-panel lesson-panel-example">
          <div className="lesson-panel-label">
            <span className="lesson-panel-icon">💻</span>
            Try This Code
          </div>
          <p className="lesson-panel-hint">Copy the code below and run it in Python, Jupyter, or VS Code.</p>
          <CodeBlock code={section.example} language="python" />
        </section>
      )}

      {section.output && (
        <section className="lesson-panel lesson-panel-output">
          <div className="lesson-panel-label">
            <span className="lesson-panel-icon">✅</span>
            Expected Output
          </div>
          <p className="lesson-panel-hint">Your result should look similar to this.</p>
          <TabularDisplay text={section.output} />
        </section>
      )}

      {section.keyPoints && (
        <section className="lesson-panel lesson-panel-takeaways">
          <div className="lesson-panel-label">
            <span className="lesson-panel-icon">💡</span>
            Key Takeaways
          </div>
          <ul className="takeaway-list">
            {section.keyPoints.map((kp, i) => (
              <li key={i}>
                <span className="takeaway-check">✓</span>
                {kp}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
});

export function TopicLesson() {
  const { topicId } = useParams<{ topicId: string }>();
  const { markSectionComplete, markExerciseComplete, addStudyTime, getTopicProgress, getNote, setNote, progress } = useProgress();
  const progressRef = useRef(progress);
  progressRef.current = progress;
  const [topic, setTopic] = useState<Topic | undefined>();
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState(0);
  const [showExercises, setShowExercises] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [revealedSolutions, setRevealedSolutions] = useState<Set<string>>(new Set());
  const lastTick = useRef(Date.now());

  useEffect(() => {
    if (!topicId) {
      setTopic(undefined);
      setLoading(false);
      return;
    }

    let cancelled = false;
    const setters = {
      setTopic,
      setActiveSection,
      setShowExercises,
      setShowNotes,
      setRevealedSolutions,
      setLoading,
    };

    const finish = (loaded: Topic | undefined) => {
      if (cancelled) return;
      if (!loaded) {
        setTopic(undefined);
        setLoading(false);
        return;
      }
      applyTopicState(loaded, progressRef.current, setters);
    };

    const cached = getCachedTopic(topicId);
    if (cached) {
      finish(cached);
      return;
    }

    setLoading(true);
    loadTopic(topicId).then(finish).catch(() => {
      if (!cancelled) {
        setTopic(undefined);
        setLoading(false);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [topicId]);

  useEffect(() => {
    lastTick.current = Date.now();
    const interval = setInterval(() => {
      const now = Date.now();
      const elapsed = Math.floor((now - lastTick.current) / 1000);
      if (elapsed > 0 && topicId) {
        addStudyTime(elapsed, topicId);
        lastTick.current = now;
      }
    }, 30000);
    return () => {
      clearInterval(interval);
      const final = Math.floor((Date.now() - lastTick.current) / 1000);
      if (final > 0 && topicId) addStudyTime(final, topicId);
    };
  }, [topicId, addStudyTime]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [activeSection, showExercises, topicId]);

  useEffect(() => {
    if (!topic) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === 'ArrowRight' && !showExercises && activeSection < topic.sections.length - 1) {
        setActiveSection((s) => s + 1);
      } else if (e.key === 'ArrowLeft' && !showExercises && activeSection > 0) {
        setActiveSection((s) => s - 1);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [topic, activeSection, showExercises]);

  const topicIndex = topic ? allTopics.findIndex((t) => t.id === topic.id) : -1;
  const sectionIndex = topic ? Math.min(activeSection, topic.sections.length - 1) : 0;
  const section = topic?.sections[sectionIndex];
  const tp = topic ? getTopicProgress(topic.id) : null;
  const adjacent = topicId ? getAdjacentTopics(topicId) : { prev: undefined, next: undefined };
  const { prev: prevTopic, next: nextTopic } = adjacent;

  if (loading) {
    return (
      <div className="page-loader">
        <div className="page-loader-spinner" />
        <p>Loading lesson...</p>
      </div>
    );
  }

  if (!topic || !section || !tp) {
    return (
      <div className="page">
        <h1>Topic not found</h1>
        <Link to="/learn">Back to Learn</Link>
      </div>
    );
  }

  const totalSteps = topic.sections.length + topic.exercises.length;
  const doneSteps = tp.sectionsCompleted.length + tp.exercisesCompleted.length;
  const topicPct = totalSteps ? Math.round((doneSteps / totalSteps) * 100) : 0;

  const handleSectionDone = () => {
    markSectionComplete(topic.id, section.id);
    if (activeSection < topic.sections.length - 1) {
      setActiveSection(activeSection + 1);
    } else {
      setShowExercises(true);
    }
  };

  const toggleSolution = (id: string) => {
    setRevealedSolutions((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="page lesson-page">
      <nav className="breadcrumb">
        <Link to="/learn">Learn</Link> / <span>{topic.module}</span> / <span>{topic.title}</span>
      </nav>

      <header className="lesson-header">
        <div className="lesson-header-top">
          <div className="lesson-badges">
            <span className={`badge ${topic.level}`}>{topic.level}</span>
            <span className={`track-badge ${topic.track}`}>{topic.track}</span>
            <span className="lesson-topic-position">Topic {topicIndex + 1} of {allTopics.length}</span>
          </div>
          <div className="lesson-header-actions">
            <BookmarkButton type="topic" id={topic.id} label={topic.title} />
            <button
              type="button"
              className={`btn btn-ghost btn-sm ${showNotes ? 'active' : ''}`}
              onClick={() => setShowNotes((v) => !v)}
            >
              📝 Notes
            </button>
          </div>
        </div>
        <h1>{topic.title}</h1>
        <p>{topic.description}</p>
        {topic.prerequisites && topic.prerequisites.length > 0 && (
          <p className="prerequisites">
            <strong>Prerequisites:</strong> {topic.prerequisites.join(', ')}
          </p>
        )}
        <div className="lesson-topic-progress">
          <div className="progress-bar sm">
            <div className="progress-fill study" style={{ width: `${topicPct}%` }} />
          </div>
          <span className="lesson-topic-progress-label">{topicPct}% complete · ~{topic.estimatedMinutes} min</span>
        </div>
      </header>

      {showNotes && (
        <div className="notes-panel">
          <label htmlFor="topic-notes">Your notes for this topic</label>
          <textarea
            id="topic-notes"
            className="notes-textarea"
            value={getNote(topic.id)}
            onChange={(e) => setNote(topic.id, e.target.value)}
            placeholder="Write key takeaways, questions, or code snippets to remember..."
            rows={4}
          />
        </div>
      )}

      <div className="lesson-layout">
        <aside className="lesson-sidebar">
          <h3>Sections</h3>
          <ul>
            {topic.sections.map((s, i) => {
              const done = tp.sectionsCompleted.includes(s.id);
              return (
                <li key={s.id}>
                  <button
                    type="button"
                    className={`section-nav ${activeSection === i && !showExercises ? 'active' : ''} ${done ? 'completed' : ''}`}
                    onClick={() => { setActiveSection(i); setShowExercises(false); }}
                  >
                    <span className="section-nav-status">{done ? '✓' : i + 1}</span>
                    <span className="section-nav-title">{s.title}</span>
                  </button>
                </li>
              );
            })}
            <li>
              <button
                type="button"
                className={`section-nav exercises-nav ${showExercises ? 'active' : ''} ${tp.exercisesCompleted.length >= topic.exercises.length ? 'completed' : ''}`}
                onClick={() => setShowExercises(true)}
              >
                <span className="section-nav-status">
                  {tp.exercisesCompleted.length >= topic.exercises.length ? '✓' : '📝'}
                </span>
                <span className="section-nav-title">Exercises ({topic.exercises.length})</span>
              </button>
            </li>
          </ul>
        </aside>

        <article className="lesson-content">
          {!showExercises ? (
            <>
              <div className="lesson-section-header">
                <span className="lesson-section-badge">
                  Section {activeSection + 1} of {topic.sections.length}
                </span>
                <h2>{section.title}</h2>
              </div>

              <SectionContent key={section.id} section={section} />

              <div className="lesson-nav-buttons">
                {activeSection > 0 && (
                  <button type="button" className="btn btn-ghost" onClick={() => setActiveSection(activeSection - 1)}>
                    ← Previous Section
                  </button>
                )}
                <button type="button" className="btn btn-primary" onClick={handleSectionDone}>
                  {activeSection < topic.sections.length - 1 ? 'Mark Done & Next →' : 'Mark Done & Go to Exercises →'}
                </button>
              </div>

              <p className="keyboard-hint">Tip: Use ← → arrow keys to move between sections</p>
            </>
          ) : (
            <div className="exercises-panel">
              <h2>Exercises — {topic.title}</h2>
              <p>Practice what you learned. Write Python in the editor and click <strong>Check Answer</strong> to verify.</p>

              {topic.exercises.map((ex, i) => (
                <div key={ex.id} className="exercise-card">
                  <div className="exercise-header">
                    <span className="exercise-num">Exercise {i + 1}</span>
                    <span className={`badge ${ex.difficulty}`}>{ex.difficulty}</span>
                    {tp.exercisesCompleted.includes(ex.id) && (
                      <span className="done-badge">✓ Done</span>
                    )}
                  </div>
                  <p className="exercise-question">{ex.question}</p>
                  {ex.hint && (
                    <details className="hint-details">
                      <summary>💡 Hint</summary>
                      <p>{ex.hint}</p>
                    </details>
                  )}
                  <ExerciseEditor
                    exercise={ex}
                    solutionRevealed={revealedSolutions.has(ex.id)}
                    onRevealSolution={() => toggleSolution(ex.id)}
                    onMarkComplete={() => markExerciseComplete(topic.id, ex.id)}
                    onCorrect={() => markExerciseComplete(topic.id, ex.id)}
                  />
                </div>
              ))}
            </div>
          )}

          {topic.references && topic.references.length > 0 && (
            <ReferenceList references={topic.references} title="Further Reading — Stanford, MIT, Oxford & Papers" />
          )}

          <nav className="topic-nav-footer">
            {prevTopic ? (
              <Link to={`/learn/${prevTopic.id}`} className="topic-nav-link prev">
                <span className="topic-nav-label">← Previous Topic</span>
                <span className="topic-nav-title">{prevTopic.title}</span>
              </Link>
            ) : (
              <div />
            )}
            {nextTopic ? (
              <Link to={`/learn/${nextTopic.id}`} className="topic-nav-link next">
                <span className="topic-nav-label">Next Topic →</span>
                <span className="topic-nav-title">{nextTopic.title}</span>
              </Link>
            ) : (
              <div />
            )}
          </nav>
        </article>
      </div>
    </div>
  );
}
