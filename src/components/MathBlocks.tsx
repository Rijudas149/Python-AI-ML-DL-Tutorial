import { useMemo } from 'react';
import { parseDiagram } from '../utils/diagramParser';
import { MathDiagramView } from './diagrams/MathDiagramView';

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
      <ul className="formula-list">
        {formulas.map((formula, i) => (
          <li key={i} className="formula-item">
            <span className="formula-text">{formula}</span>
          </li>
        ))}
      </ul>
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
