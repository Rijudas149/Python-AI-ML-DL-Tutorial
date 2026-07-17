import { useState } from 'react';
import type { Exercise } from '../types';
import { verifyPython } from '../utils/pythonVerifier';
import { CodeBlock } from './CodeBlock';

interface ExerciseEditorProps {
  exercise: Exercise;
  onCorrect?: () => void;
  onRevealSolution: () => void;
  onMarkComplete: () => void;
  solutionRevealed: boolean;
}

export function ExerciseEditor({
  exercise,
  onCorrect,
  onRevealSolution,
  onMarkComplete,
  solutionRevealed,
}: ExerciseEditorProps) {
  const [code, setCode] = useState('');
  const [result, setResult] = useState<{ correct: boolean; message: string } | null>(null);
  const [checked, setChecked] = useState(false);
  const [passed, setPassed] = useState(false);

  const handleVerify = () => {
    const verification = verifyPython(code, exercise.solution, exercise.alternateSolutions ?? []);
    setResult({ correct: verification.correct, message: verification.message });
    setChecked(true);
    setPassed(verification.correct);
    if (verification.correct) onCorrect?.();
  };

  const handleReset = () => {
    setCode('');
    setResult(null);
    setChecked(false);
    setPassed(false);
  };

  const handleMarkComplete = () => {
    if (!passed) {
      setResult({
        correct: false,
        message: 'Run Check Answer successfully before marking this exercise complete.',
      });
      setChecked(true);
      return;
    }
    onMarkComplete();
  };

  return (
    <div className="exercise-editor">
      <div className="editor-header">
        <label htmlFor={`py-${exercise.id}`}>Your Python Code</label>
        <span className="editor-hint">Write your answer below, then click Check Answer</span>
      </div>
      <textarea
        id={`py-${exercise.id}`}
        className="exercise-code-editor"
        value={code}
        onChange={(e) => {
          setCode(e.target.value);
          setResult(null);
          setChecked(false);
          setPassed(false);
        }}
        placeholder={'# Write your Python solution here\ndef solve():\n    pass'}
        spellCheck={false}
        rows={8}
      />
      <div className="exercise-actions">
        <button type="button" className="btn btn-primary" onClick={handleVerify}>
          Check Answer ✓
        </button>
        <button type="button" className="btn btn-ghost" onClick={handleReset}>
          Clear
        </button>
        <button type="button" className="btn btn-secondary" onClick={onRevealSolution}>
          {solutionRevealed ? 'Hide Solution' : 'Show Solution'}
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleMarkComplete}
          disabled={!passed}
          title={passed ? 'Mark exercise complete' : 'Pass Check Answer first'}
        >
          Mark as Completed ✓
        </button>
      </div>
      {checked && result && (
        <div className={`verify-result ${result.correct ? 'verify-correct' : 'verify-wrong'}`}>
          <span className="verify-icon">{result.correct ? '✅' : '❌'}</span>
          <p>{result.message}</p>
        </div>
      )}
      {solutionRevealed && (
        <div className="solution-reveal">
          <h4>Expected Solution</h4>
          <CodeBlock code={exercise.solution} />
        </div>
      )}
    </div>
  );
}
