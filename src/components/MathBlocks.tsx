import { useMemo } from 'react';
import { parseDiagram } from '../utils/diagramParser';
import { parseFormulaDisplay } from '../utils/latexFormula';
import { MathDiagramView } from './diagrams/MathDiagramView';
import { MathFormula } from './MathFormula';

function FormulaCard({ formula }: { formula: string }) {
  const display = useMemo(() => parseFormulaDisplay(formula), [formula]);
  const showExplanation =
    display.explanation &&
    display.explanation !== display.label &&
    display.explanation.length > 2;

  return (
    <li className="formula-item">
      {display.label && !showExplanation && (
        <span className="formula-item-label">{display.label}</span>
      )}
      <MathFormula formula={formula} display />
      {showExplanation && (
        <p className="formula-explanation">
          {display.label && <strong>{display.label}: </strong>}
          {display.explanation}
        </p>
      )}
    </li>
  );
}

interface FormulaListProps {
  formulas: string[];
}

export function FormulaList({ formulas }: FormulaListProps) {
  if (!formulas.length) return null;
  return (
    <section className="lesson-panel lesson-panel-formula">
      <div className="lesson-panel-label">
        <span className="lesson-panel-icon">📐</span>
        Key Formulas
      </div>
      <p className="lesson-panel-hint formula-panel-hint">
        Each formula is typeset like a textbook. Read the line below it when a plain-language note is included.
      </p>
      <ol className="formula-list">
        {formulas.map((formula, i) => (
          <FormulaCard key={i} formula={formula} />
        ))}
      </ol>
    </section>
  );
}

interface DiagramBlockProps {
  diagram: string;
  title?: string;
}

export function DiagramBlock({ diagram, title = 'Visual Diagram' }: DiagramBlockProps) {
  const spec = useMemo(() => parseDiagram(diagram), [diagram]);

  return (
    <section className="lesson-panel lesson-panel-diagram">
      <div className="lesson-panel-label">
        <span className="lesson-panel-icon">📊</span>
        {title}
      </div>
      <div className="math-diagram-visual">
        <MathDiagramView spec={spec} />
      </div>
    </section>
  );
}
