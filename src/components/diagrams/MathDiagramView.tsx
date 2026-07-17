import type { ReactNode } from 'react';
import type { DiagramSpec } from '../../types/diagram';
import { MathFormula } from '../MathFormula';
import { FigureView } from './FigureViews';
import {
  D,
  DiagramCanvas,
  Footnotes,
  MiniAxes,
  PanelBg,
  parseSetElements,
} from './DiagramPrimitives';

function DiagramZone({ label, children }: { label: string; children: ReactNode }) {
  if (children == null || children === false) return null;
  return (
    <section className="diagram-zone">
      <h4 className="diagram-zone-label">{label}</h4>
      <div className="diagram-zone-body">{children}</div>
    </section>
  );
}

function LiteralView({ spec }: { spec: Extract<DiagramSpec, { type: 'literal' }> }) {
  const c = spec.content;

  return (
    <div className="diagram-structured">
      {c.title && <h3 className="diagram-structured-title">{c.title}</h3>}

      {c.figure && (
        <DiagramZone label="Figure">
          <FigureView spec={c.figure} />
        </DiagramZone>
      )}

      {c.formulas.length > 0 && (
        <DiagramZone label="Definitions & results">
          <ol className="diagram-formula-list">
            {c.formulas.map((f, i) => (
              <li key={i}>
                <MathFormula formula={f} display={false} />
              </li>
            ))}
          </ol>
        </DiagramZone>
      )}

      {c.pipelines.length > 0 && (
        <DiagramZone label="Flow">
          {c.pipelines.map((nodes, i) => (
            <div key={i} className="diagram-literal-pipeline">
              {nodes.map((node, j) => (
                <div key={j} className="diagram-literal-pipeline-step">
                  <div className="diagram-flow-node">{node}</div>
                  {j < nodes.length - 1 && <div className="diagram-flow-arrow">→</div>}
                </div>
              ))}
            </div>
          ))}
        </DiagramZone>
      )}

      {c.chips.length > 0 && (
        <DiagramZone label="Examples">
          <div className="diagram-chip-row">
            {c.chips.map((chip, i) => (
              <span key={`${chip}-${i}`} className="diagram-chip">
                {chip}
              </span>
            ))}
          </div>
        </DiagramZone>
      )}

      {c.notes.length > 0 && (
        <DiagramZone label="Notes">
          <ul className="diagram-note-list">
            {c.notes.map((note, i) => (
              <li key={i}>{note}</li>
            ))}
          </ul>
        </DiagramZone>
      )}
    </div>
  );
}

function VennView({ spec }: { spec: Extract<DiagramSpec, { type: 'venn' }> }) {
  const [a, b] = spec.sets;
  const hl = spec.highlight;

  return (
    <div className="diagram-venn-wrap">
      <DiagramCanvas viewBox="0 0 440 280" label="Venn diagram">
        <PanelBg w={440} h={280} />
        <text x="220" y="36" textAnchor="middle" fill={D.muted} fontSize="13" fontWeight="600">
          Universal Set U
        </text>
        <circle
          cx="170"
          cy="145"
          r="78"
          fill={hl === 'union' ? D.emeraldSoft : hl === 'a' ? D.emeraldSoft : 'rgba(148,163,184,0.06)'}
          stroke="url(#dg-emerald)"
          strokeWidth="3"
        />
        <circle
          cx="270"
          cy="145"
          r="78"
          fill={hl === 'union' ? D.indigoSoft : hl === 'b' ? D.indigoSoft : 'rgba(148,163,184,0.06)'}
          stroke="url(#dg-indigo)"
          strokeWidth="3"
        />
        {(hl === 'intersection' || hl === 'union') && (
          <ellipse cx="220" cy="145" rx="32" ry="72" fill={D.roseSoft} stroke={D.rose} strokeWidth="2" />
        )}
        <text x="128" y="150" textAnchor="middle" fill={D.text} fontSize="26" fontWeight="800">
          {a}
        </text>
        <text x="312" y="150" textAnchor="middle" fill={D.text} fontSize="26" fontWeight="800">
          {b}
        </text>
        <text x="220" y="152" textAnchor="middle" fill={D.text} fontSize="14" fontWeight="700">
          {a}∩{b}
        </text>
      </DiagramCanvas>
      <Footnotes lines={spec.captions} />
    </div>
  );
}

function SetOpsView({ spec }: { spec: Extract<DiagramSpec, { type: 'setOps' }> }) {
  const elemsA = parseSetElements(spec.setA);
  const elemsB = parseSetElements(spec.setB);
  const shared = elemsA.filter((e) => elemsB.includes(e));

  const results = [
    spec.union && { label: 'Union', value: spec.union },
    spec.intersection && { label: 'Intersection', value: spec.intersection },
    spec.diffA && { label: 'Difference A \\ B', value: spec.diffA },
    spec.diffB && { label: 'Difference B \\ A', value: spec.diffB },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <div className="diagram-structured">
      <DiagramZone label="Sets">
        <div className="diagram-setops-header">
          <div className="diagram-set-bubble diagram-set-a">
            <span className="diagram-set-label">A = {spec.setA}</span>
            <div className="diagram-set-chips">
              {elemsA.map((el) => (
                <span key={el} className={shared.includes(el) ? 'diagram-chip shared' : 'diagram-chip'}>
                  {el}
                </span>
              ))}
            </div>
          </div>
          <div className="diagram-set-bubble diagram-set-b">
            <span className="diagram-set-label">B = {spec.setB}</span>
            <div className="diagram-set-chips">
              {elemsB.map((el) => (
                <span key={el} className={shared.includes(el) ? 'diagram-chip shared' : 'diagram-chip'}>
                  {el}
                </span>
              ))}
            </div>
          </div>
        </div>
      </DiagramZone>

      {results.length > 0 && (
        <DiagramZone label="Definitions & results">
          <ol className="diagram-formula-list">
            {results.map((r) => (
              <li key={r.label}>
                <code>
                  <strong>{r.label}:</strong> {r.value}
                </code>
              </li>
            ))}
          </ol>
        </DiagramZone>
      )}

      {spec.cartesian && (
        <DiagramZone label="Notes">
          <p className="diagram-zone-note">{spec.cartesian}</p>
        </DiagramZone>
      )}

      {spec.footnotes.length > 0 && (
        <DiagramZone label="Notes">
          <ul className="diagram-note-list">
            {spec.footnotes.map((n, i) => (
              <li key={i}>{n}</li>
            ))}
          </ul>
        </DiagramZone>
      )}
    </div>
  );
}

function CurvesView({ spec }: { spec: Extract<DiagramSpec, { type: 'curves' }> }) {
  const colors = [D.emerald, D.indigo, D.rose, D.amber];
  const n = spec.curves.length;
  const w = Math.min(90, 360 / n);

  return (
    <div className="diagram-curves-wrap">
      <DiagramCanvas viewBox="0 0 440 200" label="Function curves">
        <PanelBg w={440} h={200} />
        {spec.curves.map((c, i) => {
          const ox = 36 + i * (w + 16);
          return (
            <g key={c.name}>
              <rect x={ox - 8} y="44" width={w + 16} height="110" rx="10" fill="rgba(15,23,42,0.5)" stroke={D.border} strokeWidth="1" />
              <MiniAxes ox={ox} oy={138} w={w} h={80} curve={c.shape} color={colors[i % colors.length]} label={c.name} />
              {c.note && (
                <text x={ox + w / 2} y="168" textAnchor="middle" fill={D.muted} fontSize="9">
                  {c.note.slice(0, 24)}
                </text>
              )}
            </g>
          );
        })}
      </DiagramCanvas>
      <Footnotes lines={spec.footnotes} />
    </div>
  );
}

function SequenceView({ spec }: { spec: Extract<DiagramSpec, { type: 'sequence' }> }) {
  const step = 340 / Math.max(spec.terms.length - 1, 1);

  return (
    <div className="diagram-sequence-wrap">
      {spec.title && <p className="diagram-caption">{spec.title}</p>}
      <DiagramCanvas viewBox="0 0 440 180" label="Sequence">
        <PanelBg w={440} h={180} />
        <line x1="50" y1="120" x2="390" y2="120" stroke={D.border} strokeWidth="2" />
        {spec.terms.map((t, i) => {
          const x = 50 + i * step;
          return (
            <g key={i}>
              <circle cx={x} cy="120" r="22" fill={D.emeraldSoft} stroke={D.emerald} strokeWidth="2" />
              <text x={x} y="126" textAnchor="middle" fill={D.text} fontSize="14" fontWeight="700">
                {t}
              </text>
              <text x={x} y="158" textAnchor="middle" fill={D.muted} fontSize="10">
                n={i + 1}
              </text>
              {i < spec.terms.length - 1 && spec.step !== undefined && (
                <text x={x + step / 2} y="88" textAnchor="middle" fill={D.rose} fontSize="11" fontWeight="600">
                  +{spec.step}
                </text>
              )}
            </g>
          );
        })}
      </DiagramCanvas>
      <Footnotes lines={spec.footnotes} />
    </div>
  );
}

function VectorView({ spec }: { spec: Extract<DiagramSpec, { type: 'vector' }> }) {
  const scale = 18;
  const ox = 80;
  const oy = 200;
  const px = ox + spec.vx * scale;
  const py = oy - spec.vy * scale;
  const mag = Math.sqrt(spec.vx ** 2 + spec.vy ** 2);

  return (
    <div className="diagram-vector-wrap">
      {spec.title && <p className="diagram-caption">{spec.title}</p>}
      <DiagramCanvas viewBox="0 0 440 260" label="Vector">
        <PanelBg w={440} h={260} />
        <line x1={ox} y1={oy} x2="400" y2={oy} stroke={D.border} strokeWidth="2" markerEnd="url(#dg-arrow)" />
        <line x1={ox} y1={oy} x2={ox} y2="40" stroke={D.border} strokeWidth="2" markerEnd="url(#dg-arrow)" />
        <text x="408" y={oy + 16} fill={D.muted} fontSize="13">
          x
        </text>
        <text x={ox - 16} y="48" fill={D.muted} fontSize="13">
          y
        </text>
        <line x1={ox} y1={oy} x2={px} y2={py} stroke="url(#dg-emerald)" strokeWidth="3" markerEnd="url(#dg-arrow-emerald)" />
        <circle cx={px} cy={py} r="6" fill={D.emerald} />
        <text x={px + 12} y={py - 8} fill={D.emerald} fontSize="13" fontWeight="700">
          ({spec.vx},{spec.vy})
        </text>
        <text x={ox + 20} y={oy - 20} fill={D.muted} fontSize="12">
          |v| = {mag}
        </text>
      </DiagramCanvas>
      <Footnotes lines={spec.footnotes} />
    </div>
  );
}

function MatrixView({ spec }: { spec: Extract<DiagramSpec, { type: 'matrix' }> }) {
  const cols = Math.max(...spec.rows.map((r) => r.length), 1);
  return (
    <div className="diagram-matrix-wrap">
      {spec.title && <p className="diagram-caption">{spec.title}</p>}
      <div className="diagram-matrix-bracket">
        <span className="diagram-matrix-brace">[</span>
        <div className="diagram-matrix-grid" style={{ gridTemplateColumns: `repeat(${cols}, minmax(52px, 1fr))` }}>
          {spec.rows.flatMap((row, ri) =>
            row.map((cell, ci) => (
              <div key={`${ri}-${ci}`} className="diagram-matrix-cell">
                {cell}
              </div>
            )),
          )}
        </div>
        <span className="diagram-matrix-brace">]</span>
      </div>
      <Footnotes lines={spec.footnotes} />
    </div>
  );
}

function BarsView({ spec }: { spec: Extract<DiagramSpec, { type: 'bars' }> }) {
  const max = Math.max(...spec.items.map((i) => i.value), 1);
  const h = spec.items.length * 44 + 30;

  return (
    <div className="diagram-bars-wrap">
      {spec.title && <p className="diagram-caption">{spec.title}</p>}
      <DiagramCanvas viewBox={`0 0 440 ${h}`} label="Bar chart">
        <PanelBg w={440} h={h} r={12} />
        {spec.items.map((item, i) => {
          const y = 20 + i * 44;
          const w = (item.value / max) * 240;
          return (
            <g key={i}>
              <text x="16" y={y + 26} fill={D.muted} fontSize="11" fontWeight="600">
                {item.label}
              </text>
              <rect x="150" y={y + 8} width={w} height="26" rx="8" fill="url(#dg-emerald)" opacity={0.95 - i * 0.07} />
            </g>
          );
        })}
      </DiagramCanvas>
      <Footnotes lines={spec.footnotes} />
    </div>
  );
}

export function MathDiagramView({ spec }: { spec: DiagramSpec }) {
  switch (spec.type) {
    case 'literal':
      return <LiteralView spec={spec} />;
    case 'venn':
      return <VennView spec={spec} />;
    case 'setOps':
      return <SetOpsView spec={spec} />;
    case 'curves':
      return <CurvesView spec={spec} />;
    case 'sequence':
      return <SequenceView spec={spec} />;
    case 'vector':
      return <VectorView spec={spec} />;
    case 'matrix':
      return <MatrixView spec={spec} />;
    case 'bars':
      return <BarsView spec={spec} />;
    default:
      return null;
  }
}
