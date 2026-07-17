import type { DiagramSpec } from '../../types/diagram';

const COLORS = {
  primary: 'var(--study, #059669)',
  primarySoft: 'rgba(16, 185, 129, 0.18)',
  accent: 'var(--accent-secondary, #6366f1)',
  accentSoft: 'rgba(99, 102, 241, 0.18)',
  border: 'var(--border-strong, #475569)',
  text: 'var(--text-primary, #e2e8f0)',
  muted: 'var(--text-muted, #94a3b8)',
  surface: 'var(--bg-secondary, #1e293b)',
};

function Footnotes({ lines }: { lines: string[] }) {
  const items = lines.filter((l) => l.trim() && !/^[\s│·]+$/.test(l)).slice(0, 5);
  if (!items.length) return null;
  return (
    <ul className="diagram-footnotes">
      {items.map((line, i) => (
        <li key={i}>{line}</li>
      ))}
    </ul>
  );
}

function VennView({ spec }: { spec: Extract<DiagramSpec, { type: 'venn' }> }) {
  const [a, b] = spec.sets;
  const hl = spec.highlight;

  return (
    <div className="diagram-venn-wrap">
      <svg viewBox="0 0 420 260" className="diagram-svg" role="img" aria-label="Venn diagram">
        <rect x="8" y="8" width="404" height="244" rx="16" fill={COLORS.surface} stroke={COLORS.border} strokeWidth="1.5" />
        <text x="210" y="32" textAnchor="middle" fill={COLORS.muted} fontSize="13" fontWeight="600">
          Universal Set U
        </text>
        <circle cx="165" cy="135" r="72" fill={hl === 'a' || hl === 'union' ? COLORS.primarySoft : 'rgba(148,163,184,0.08)'} stroke={COLORS.primary} strokeWidth="2.5" />
        <circle cx="255" cy="135" r="72" fill={hl === 'b' || hl === 'union' ? COLORS.accentSoft : 'rgba(148,163,184,0.08)'} stroke={COLORS.accent} strokeWidth="2.5" />
        <ellipse cx="210" cy="135" rx="28" ry="72" fill={hl === 'intersection' || hl === 'union' ? 'rgba(244,114,182,0.25)' : 'transparent'} />
        <text x="130" y="140" textAnchor="middle" fill={COLORS.text} fontSize="22" fontWeight="700">{a}</text>
        <text x="290" y="140" textAnchor="middle" fill={COLORS.text} fontSize="22" fontWeight="700">{b}</text>
        <text x="210" y="140" textAnchor="middle" fill={COLORS.text} fontSize="14" fontWeight="600">{a}∩{b}</text>
        <text x="118" y="210" textAnchor="middle" fill={COLORS.muted} fontSize="12">{a} only</text>
        <text x="302" y="210" textAnchor="middle" fill={COLORS.muted} fontSize="12">{b} only</text>
      </svg>
      <Footnotes lines={spec.captions} />
    </div>
  );
}

function AxesView({ spec }: { spec: Extract<DiagramSpec, { type: 'axes' }> }) {
  return (
    <div className="diagram-axes-wrap">
      <svg viewBox="0 0 420 280" className="diagram-svg" role="img" aria-label="Coordinate axes">
        <rect x="0" y="0" width="420" height="280" rx="12" fill={COLORS.surface} />
        <line x1="60" y1="230" x2="390" y2="230" stroke={COLORS.border} strokeWidth="2" />
        <line x1="60" y1="230" x2="60" y2="30" stroke={COLORS.border} strokeWidth="2" />
        <polygon points="390,230 382,226 382,234" fill={COLORS.muted} />
        <polygon points="60,30 56,38 64,38" fill={COLORS.muted} />
        <text x="400" y="248" fill={COLORS.muted} fontSize="14">x</text>
        <text x="42" y="38" fill={COLORS.muted} fontSize="14">y</text>
        {[80, 130, 180].map((y, i) => (
          <line key={i} x1="55" y1={y} x2="390" y2={y} stroke="rgba(148,163,184,0.12)" strokeWidth="1" />
        ))}
        <path d="M 70 210 Q 150 190, 210 120 T 370 70" fill="none" stroke={COLORS.primary} strokeWidth="3" />
        <text x="320" y="62" fill={COLORS.primary} fontSize="13" fontWeight="600">
          {spec.curves[0]?.label.slice(0, 28) || 'f(x)'}
        </text>
        <circle cx="210" cy="120" r="5" fill={COLORS.accent} />
      </svg>
      {spec.title && <p className="diagram-caption">{spec.title}</p>}
      <Footnotes lines={spec.annotations} />
    </div>
  );
}

function FlowView({ spec }: { spec: Extract<DiagramSpec, { type: 'flow' }> }) {
  const horizontal = spec.direction !== 'vertical';
  const nodes = spec.nodes;

  if (horizontal) {
    const step = 360 / Math.max(nodes.length - 1, 1);
    return (
      <div className="diagram-flow-wrap">
        <svg viewBox="0 0 420 120" className="diagram-svg" role="img" aria-label="Flow diagram">
          <rect width="420" height="120" rx="12" fill={COLORS.surface} />
          {nodes.map((label, i) => {
            const x = 40 + i * step;
            return (
              <g key={i}>
                {i < nodes.length - 1 && (
                  <>
                    <line x1={x + 50} y1="60" x2={x + step - 10} y2="60" stroke={COLORS.muted} strokeWidth="2" markerEnd="url(#arrow)" />
                  </>
                )}
                <rect x={x - 10} y="30" width="100" height="60" rx="10" fill={COLORS.primarySoft} stroke={COLORS.primary} strokeWidth="1.5" />
                <text x={x + 40} y="65" textAnchor="middle" fill={COLORS.text} fontSize="11" fontWeight="600">
                  {label.slice(0, 14)}
                </text>
              </g>
            );
          })}
          <defs>
            <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill={COLORS.muted} />
            </marker>
          </defs>
        </svg>
        <Footnotes lines={spec.footnotes} />
      </div>
    );
  }

  return (
    <div className="diagram-flow-wrap diagram-flow-vertical">
      {nodes.map((label, i) => (
        <div key={i} className="diagram-flow-step">
          <div className="diagram-flow-node">{label}</div>
          {i < nodes.length - 1 && <div className="diagram-flow-arrow">↓</div>}
        </div>
      ))}
      <Footnotes lines={spec.footnotes} />
    </div>
  );
}

function MatrixView({ spec }: { spec: Extract<DiagramSpec, { type: 'matrix' }> }) {
  const cols = Math.max(...spec.rows.map((r) => r.length), 1);
  return (
    <div className="diagram-matrix-wrap">
      {spec.title && <p className="diagram-caption">{spec.title}</p>}
      <div className="diagram-matrix-grid" style={{ gridTemplateColumns: `repeat(${cols}, minmax(48px, 1fr))` }}>
        {spec.rows.flatMap((row, ri) =>
          row.map((cell, ci) => (
            <div key={`${ri}-${ci}`} className="diagram-matrix-cell">
              {cell}
            </div>
          )),
        )}
      </div>
      <Footnotes lines={spec.footnotes} />
    </div>
  );
}

function BarsView({ spec }: { spec: Extract<DiagramSpec, { type: 'bars' }> }) {
  const max = Math.max(...spec.items.map((i) => i.value), 1);
  return (
    <div className="diagram-bars-wrap">
      {spec.title && <p className="diagram-caption">{spec.title}</p>}
      <svg viewBox={`0 0 420 ${spec.items.length * 36 + 20}`} className="diagram-svg" role="img" aria-label="Bar chart">
        <rect width="420" height={spec.items.length * 36 + 20} rx="12" fill={COLORS.surface} />
        {spec.items.map((item, i) => {
          const y = 16 + i * 36;
          const w = (item.value / max) * 260;
          return (
            <g key={i}>
              <text x="12" y={y + 18} fill={COLORS.muted} fontSize="11">{item.label.slice(0, 18)}</text>
              <rect x="140" y={y + 4} width={w} height="22" rx="6" fill={COLORS.primary} opacity={0.85 - i * 0.08} />
            </g>
          );
        })}
      </svg>
      <Footnotes lines={spec.footnotes} />
    </div>
  );
}

function ScatterView({ spec }: { spec: Extract<DiagramSpec, { type: 'scatter' }> }) {
  const points = [
    [90, 180], [120, 150], [140, 165], [160, 130], [180, 145], [200, 110],
    [220, 125], [240, 95], [260, 115], [280, 80], [300, 100], [320, 70],
  ];
  return (
    <div className="diagram-scatter-wrap">
      {spec.title && <p className="diagram-caption">{spec.title}</p>}
      <svg viewBox="0 0 420 260" className="diagram-svg" role="img" aria-label="Scatter plot">
        <rect width="420" height="260" rx="12" fill={COLORS.surface} />
        <line x1="50" y1="220" x2="390" y2="220" stroke={COLORS.border} strokeWidth="1.5" />
        <line x1="50" y1="220" x2="50" y2="40" stroke={COLORS.border} strokeWidth="1.5" />
        {points.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="5" fill={COLORS.primary} opacity="0.75" />
        ))}
        <path d="M 70 200 L 350 60" stroke={COLORS.accent} strokeWidth="2" strokeDasharray="6 4" opacity="0.6" />
      </svg>
      <Footnotes lines={spec.footnotes} />
    </div>
  );
}

function CompareView({ spec }: { spec: Extract<DiagramSpec, { type: 'compare' }> }) {
  return (
    <div className="diagram-compare-wrap">
      {spec.columns.map((col, i) => (
        <div key={i} className="diagram-compare-col">
          <h4>{col.title}</h4>
          <ul>
            {col.lines.map((line, j) => (
              <li key={j}>{line}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function StepsView({ spec }: { spec: Extract<DiagramSpec, { type: 'steps' }> }) {
  return (
    <div className="diagram-steps-wrap">
      {spec.title && <p className="diagram-caption">{spec.title}</p>}
      <ol className="diagram-steps-list">
        {spec.steps.map((step, i) => (
          <li key={i}>
            <span className="diagram-step-num">{i + 1}</span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function CalloutView({ spec }: { spec: Extract<DiagramSpec, { type: 'callout' }> }) {
  return (
    <div className="diagram-callout-wrap">
      {spec.title && <p className="diagram-callout-title">{spec.title}</p>}
      <ul className="diagram-callout-list">
        {spec.lines.map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>
    </div>
  );
}

export function MathDiagramView({ spec }: { spec: DiagramSpec }) {
  switch (spec.type) {
    case 'venn':
      return <VennView spec={spec} />;
    case 'axes':
      return <AxesView spec={spec} />;
    case 'flow':
      return <FlowView spec={spec} />;
    case 'matrix':
      return <MatrixView spec={spec} />;
    case 'bars':
      return <BarsView spec={spec} />;
    case 'scatter':
      return <ScatterView spec={spec} />;
    case 'compare':
      return <CompareView spec={spec} />;
    case 'steps':
      return <StepsView spec={spec} />;
    case 'callout':
      return <CalloutView spec={spec} />;
    default:
      return null;
  }
}
