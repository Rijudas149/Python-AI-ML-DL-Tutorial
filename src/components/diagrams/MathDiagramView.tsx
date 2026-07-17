import type { DiagramSpec } from '../../types/diagram';
import {
  D,
  DiagramCanvas,
  Footnotes,
  MiniAxes,
  PanelBg,
  parseSetElements,
} from './DiagramPrimitives';

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
          fill={hl === 'a' || hl === 'union' ? D.emeraldSoft : 'rgba(148,163,184,0.06)'}
          stroke="url(#dg-emerald)"
          strokeWidth="3"
          filter="url(#dg-shadow)"
        />
        <circle
          cx="270"
          cy="145"
          r="78"
          fill={hl === 'b' || hl === 'union' ? D.indigoSoft : 'rgba(148,163,184,0.06)'}
          stroke="url(#dg-indigo)"
          strokeWidth="3"
          filter="url(#dg-shadow)"
        />
        {(hl === 'intersection' || hl === 'union') && (
          <path
            d="M 220 67 A 78 78 0 0 1 220 223 A 78 78 0 0 1 220 67 Z"
            fill={D.roseSoft}
            stroke={D.rose}
            strokeWidth="2"
            opacity="0.9"
          />
        )}
        <text x="128" y="150" textAnchor="middle" fill={D.text} fontSize="26" fontWeight="800">
          {a}
        </text>
        <text x="312" y="150" textAnchor="middle" fill={D.text} fontSize="26" fontWeight="800">
          {b}
        </text>
        <text x="220" y="152" textAnchor="middle" fill={D.text} fontSize="15" fontWeight="700">
          {a}∩{b}
        </text>
        <text x="115" y="228" textAnchor="middle" fill={D.muted} fontSize="12">
          {a} only
        </text>
        <text x="325" y="228" textAnchor="middle" fill={D.muted} fontSize="12">
          {b} only
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
    spec.union && { label: 'A ∪ B', value: spec.union, color: D.emerald },
    spec.intersection && { label: 'A ∩ B', value: spec.intersection, color: D.rose },
    spec.diffA && { label: 'A \\ B', value: spec.diffA, color: D.sky },
    spec.diffB && { label: 'B \\ A', value: spec.diffB, color: D.amber },
  ].filter(Boolean) as { label: string; value: string; color: string }[];

  return (
    <div className="diagram-setops-wrap">
      <DiagramCanvas viewBox="0 0 440 200" label="Set operations">
        <PanelBg w={440} h={200} r={14} />
        <text x="110" y="32" textAnchor="middle" fill={D.emerald} fontSize="14" fontWeight="700">
          Set A
        </text>
        <text x="330" y="32" textAnchor="middle" fill={D.indigo} fontSize="14" fontWeight="700">
          Set B
        </text>
        <rect x="24" y="44" width="172" height="100" rx="14" fill={D.emeraldSoft} stroke={D.emerald} strokeWidth="2" />
        <rect x="244" y="44" width="172" height="100" rx="14" fill={D.indigoSoft} stroke={D.indigo} strokeWidth="2" />
        {elemsA.map((el, i) => (
          <g key={`a-${el}`}>
            <circle cx={56 + (i % 3) * 48} cy={78 + Math.floor(i / 3) * 36} r="16" fill={shared.includes(el) ? D.roseSoft : D.panel} stroke={shared.includes(el) ? D.rose : D.emerald} strokeWidth="1.5" />
            <text x={56 + (i % 3) * 48} y={83 + Math.floor(i / 3) * 36} textAnchor="middle" fill={D.text} fontSize="12" fontWeight="600">
              {el}
            </text>
          </g>
        ))}
        {elemsB.map((el, i) => (
          <g key={`b-${el}`}>
            <circle cx={276 + (i % 3) * 48} cy={78 + Math.floor(i / 3) * 36} r="16" fill={shared.includes(el) ? D.roseSoft : D.panel} stroke={shared.includes(el) ? D.rose : D.indigo} strokeWidth="1.5" />
            <text x={276 + (i % 3) * 48} y={83 + Math.floor(i / 3) * 36} textAnchor="middle" fill={D.text} fontSize="12" fontWeight="600">
              {el}
            </text>
          </g>
        ))}
        {shared.length > 0 && (
          <text x="220" y="168" textAnchor="middle" fill={D.rose} fontSize="11" fontWeight="600">
            shared: {shared.join(', ')}
          </text>
        )}
      </DiagramCanvas>
      {results.length > 0 && (
        <div className="diagram-result-grid">
          {results.map((r) => (
            <div key={r.label} className="diagram-result-card" style={{ borderColor: r.color }}>
              <span className="diagram-result-label">{r.label}</span>
              <span className="diagram-result-value">{r.value}</span>
            </div>
          ))}
        </div>
      )}
      {spec.cartesian && <p className="diagram-caption">{spec.cartesian}</p>}
      <Footnotes lines={spec.footnotes} />
    </div>
  );
}

function MappingView({ spec }: { spec: Extract<DiagramSpec, { type: 'mapping' }> }) {
  const domainX = 70;
  const codomainX = 310;
  const startY = 58;
  const gap = 38;

  return (
    <div className="diagram-mapping-wrap">
      <DiagramCanvas viewBox="0 0 440 260" label="Function mapping">
        <PanelBg w={440} h={260} />
        <text x={domainX} y="36" textAnchor="middle" fill={D.emerald} fontSize="13" fontWeight="700">
          Domain A
        </text>
        <text x={codomainX} y="36" textAnchor="middle" fill={D.indigo} fontSize="13" fontWeight="700">
          Codomain B
        </text>
        {spec.domain.map((d, i) => {
          const y = startY + i * gap;
          return (
            <g key={`d-${d}`}>
              <rect x={domainX - 28} y={y - 16} width="56" height="32" rx="8" fill={D.emeraldSoft} stroke={D.emerald} strokeWidth="1.5" />
              <text x={domainX} y={y + 5} textAnchor="middle" fill={D.text} fontSize="14" fontWeight="600">
                {d}
              </text>
            </g>
          );
        })}
        {spec.codomain.map((c, i) => {
          const y = startY + i * gap + 10;
          return (
            <g key={`c-${c}`}>
              <rect x={codomainX - 28} y={y - 16} width="56" height="32" rx="8" fill={D.indigoSoft} stroke={D.indigo} strokeWidth="1.5" />
              <text x={codomainX} y={y + 5} textAnchor="middle" fill={D.text} fontSize="14" fontWeight="600">
                {c}
              </text>
            </g>
          );
        })}
        {spec.maps.map((m, i) => {
          const fromIdx = spec.domain.indexOf(m.from);
          const toIdx = spec.codomain.indexOf(m.to);
          if (fromIdx < 0 || toIdx < 0) return null;
          const y1 = startY + fromIdx * gap;
          const y2 = startY + toIdx * gap + 10;
          const midY = (y1 + y2) / 2;
          return (
            <path
              key={i}
              d={`M ${domainX + 30} ${y1} C ${180} ${midY}, ${220} ${midY}, ${codomainX - 30} ${y2}`}
              fill="none"
              stroke={D.muted}
              strokeWidth="1.5"
              markerEnd="url(#dg-arrow-emerald)"
              opacity="0.85"
            />
          );
        })}
      </DiagramCanvas>
      <Footnotes lines={spec.footnotes} />
    </div>
  );
}

function CountingView({ spec }: { spec: Extract<DiagramSpec, { type: 'counting' }> }) {
  return (
    <div className="diagram-counting-wrap">
      {spec.title && <p className="diagram-caption">{spec.title}</p>}
      <div className="diagram-chip-row">
        {spec.combinations.map((c) => (
          <span key={c} className="diagram-chip">
            {c}
          </span>
        ))}
      </div>
      {spec.permutationsNote && <p className="diagram-caption">{spec.permutationsNote}</p>}
      <div className="diagram-formula-grid">
        {spec.formulas.map((f, i) => (
          <div key={i} className="diagram-formula-card">
            {f}
          </div>
        ))}
      </div>
      <Footnotes lines={spec.footnotes} />
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
                  {c.note.slice(0, 22)}
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

function PipelineView({ spec }: { spec: Extract<DiagramSpec, { type: 'pipeline' }> }) {
  if (spec.direction === 'vertical') {
    return (
      <div className="diagram-flow-wrap diagram-flow-vertical">
        {spec.nodes.map((label, i) => (
          <div key={i} className="diagram-flow-step">
            <div className="diagram-flow-node">{label}</div>
            {i < spec.nodes.length - 1 && <div className="diagram-flow-arrow">↓</div>}
          </div>
        ))}
        <Footnotes lines={spec.footnotes} />
      </div>
    );
  }

  const n = spec.nodes.length;
  const nodeW = Math.min(100, (400 - (n - 1) * 24) / n);
  const totalW = n * nodeW + (n - 1) * 24;

  return (
    <div className="diagram-flow-wrap">
      <DiagramCanvas viewBox={`0 0 ${Math.max(440, totalW + 40)} 130`} label="Pipeline">
        <PanelBg w={Math.max(440, totalW + 40)} h={130} r={12} />
        {spec.nodes.map((label, i) => {
          const x = 20 + i * (nodeW + 24);
          return (
            <g key={i}>
              {i < n - 1 && (
                <line
                  x1={x + nodeW}
                  y1="65"
                  x2={x + nodeW + 20}
                  y2="65"
                  stroke={D.muted}
                  strokeWidth="2"
                  markerEnd="url(#dg-arrow-emerald)"
                />
              )}
              <rect x={x} y="35" width={nodeW} height="60" rx="12" fill={D.emeraldSoft} stroke={D.emerald} strokeWidth="2" filter="url(#dg-shadow)" />
              <text x={x + nodeW / 2} y="62" textAnchor="middle" fill={D.text} fontSize="10" fontWeight="600">
                {label.length > 16 ? `${label.slice(0, 14)}…` : label}
              </text>
              <text x={x + nodeW / 2} y="78" textAnchor="middle" fill={D.muted} fontSize="8">
                {i + 1}/{n}
              </text>
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
  const mag = Math.sqrt(spec.vx ** 2 + spec.vy ** 2).toFixed(1);

  return (
    <div className="diagram-vector-wrap">
      {spec.title && <p className="diagram-caption">{spec.title}</p>}
      <DiagramCanvas viewBox="0 0 440 260" label="Vector">
        <PanelBg w={440} h={260} />
        {[40, 90, 140, 190].map((g) => (
          <g key={g}>
            <line x1={ox} y1={g} x2="400" y2={g} stroke="rgba(148,163,184,0.1)" strokeWidth="1" />
            <line x1={g + 40} y1={oy} x2={g + 40} y2="40" stroke="rgba(148,163,184,0.1)" strokeWidth="1" />
          </g>
        ))}
        <line x1={ox} y1={oy} x2="400" y2={oy} stroke={D.border} strokeWidth="2" markerEnd="url(#dg-arrow)" />
        <line x1={ox} y1={oy} x2={ox} y2="40" stroke={D.border} strokeWidth="2" markerEnd="url(#dg-arrow)" />
        <text x="408" y={oy + 16} fill={D.muted} fontSize="13">
          x
        </text>
        <text x={ox - 16} y="48" fill={D.muted} fontSize="13">
          y
        </text>
        <line x1={ox} y1={oy} x2={px} y2={py} stroke="url(#dg-emerald)" strokeWidth="3" markerEnd="url(#dg-arrow-emerald)" filter="url(#dg-glow)" />
        <circle cx={px} cy={py} r="6" fill={D.emerald} />
        <text x={px + 12} y={py - 8} fill={D.emerald} fontSize="13" fontWeight="700">
          v=({spec.vx},{spec.vy})
        </text>
        <text x={ox + 20} y={oy - 20} fill={D.muted} fontSize="12">
          |v| ≈ {mag}
        </text>
      </DiagramCanvas>
      <Footnotes lines={spec.footnotes} />
    </div>
  );
}

function TriangleView({ spec }: { spec: Extract<DiagramSpec, { type: 'triangle' }> }) {
  const hyp = Math.sqrt(spec.a ** 2 + spec.b ** 2);
  return (
    <div className="diagram-triangle-wrap">
      <DiagramCanvas viewBox="0 0 440 220" label="Right triangle">
        <PanelBg w={440} h={220} />
        <path d="M 80 170 L 80 70 L 240 170 Z" fill={D.emeraldSoft} stroke={D.emerald} strokeWidth="2.5" filter="url(#dg-shadow)" />
        <rect x="80" y="150" width="20" height="20" fill="none" stroke={D.muted} strokeWidth="1.5" />
        <text x="160" y="188" textAnchor="middle" fill={D.text} fontSize="16" fontWeight="700">
          a = {spec.a}
        </text>
        <text x="62" y="125" textAnchor="middle" fill={D.text} fontSize="16" fontWeight="700">
          b = {spec.b}
        </text>
        <text x="175" y="105" textAnchor="middle" fill={D.indigo} fontSize="15" fontWeight="700">
          ||v|| = {hyp}
        </text>
        <text x="220" y="36" textAnchor="middle" fill={D.muted} fontSize="13">
          {spec.title ?? 'Pythagorean theorem'}
        </text>
      </DiagramCanvas>
      <Footnotes lines={spec.footnotes} />
    </div>
  );
}

function AngleView({ spec }: { spec: Extract<DiagramSpec, { type: 'angle' }> }) {
  return (
    <div className="diagram-angle-wrap">
      <DiagramCanvas viewBox="0 0 440 220" label="Angle between vectors">
        <PanelBg w={440} h={220} />
        <line x1="80" y1="170" x2="360" y2="170" stroke={D.border} strokeWidth="1.5" />
        <line x1="80" y1="170" x2="300" y2="60" stroke="url(#dg-emerald)" strokeWidth="3" markerEnd="url(#dg-arrow-emerald)" />
        <line x1="80" y1="170" x2="340" y2="120" stroke="url(#dg-indigo)" strokeWidth="3" markerEnd="url(#dg-arrow-emerald)" />
        <path d="M 130 170 A 50 50 0 0 0 115 130" fill="none" stroke={D.rose} strokeWidth="2" />
        <text x="145" y="155" fill={D.rose} fontSize="14" fontWeight="700">
          θ
        </text>
        <text x="310" y="52" fill={D.emerald} fontSize="14" fontWeight="600">
          v
        </text>
        <text x="350" y="112" fill={D.indigo} fontSize="14" fontWeight="600">
          u
        </text>
        <text x="220" y="36" textAnchor="middle" fill={D.muted} fontSize="12">
          u · v = |u||v| cos θ
        </text>
      </DiagramCanvas>
      <Footnotes lines={spec.footnotes} />
    </div>
  );
}

function SequenceView({ spec }: { spec: Extract<DiagramSpec, { type: 'sequence' }> }) {
  const n = spec.terms.length;
  const step = 340 / Math.max(n - 1, 1);

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
              <circle cx={x} cy="120" r="22" fill={D.emeraldSoft} stroke={D.emerald} strokeWidth="2" filter="url(#dg-shadow)" />
              <text x={x} y="126" textAnchor="middle" fill={D.text} fontSize="14" fontWeight="700">
                {t}
              </text>
              <text x={x} y="158" textAnchor="middle" fill={D.muted} fontSize="10">
                n={i + 1}
              </text>
              {i < n - 1 && spec.step && (
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

function FormulasView({ spec }: { spec: Extract<DiagramSpec, { type: 'formulas' }> }) {
  return (
    <div className="diagram-formulas-wrap">
      {spec.title && <p className="diagram-callout-title">{spec.title}</p>}
      <div className="diagram-formula-grid">
        {spec.items.map((item, i) => (
          <div key={i} className="diagram-formula-card">
            {item}
          </div>
        ))}
      </div>
      <Footnotes lines={spec.footnotes} />
    </div>
  );
}

function PolarView({ spec }: { spec: Extract<DiagramSpec, { type: 'polar' }> }) {
  const cx = 220;
  const cy = 130;
  const r = 80;

  return (
    <div className="diagram-polar-wrap">
      <DiagramCanvas viewBox="0 0 440 260" label="Complex plane">
        <PanelBg w={440} h={260} />
        <line x1={cx - r - 30} y1={cy} x2={cx + r + 30} y2={cy} stroke={D.border} strokeWidth="1.5" />
        <line x1={cx} y1={cy + r + 20} x2={cx} y2={cy - r - 20} stroke={D.border} strokeWidth="1.5" />
        <text x={cx + r + 38} y={cy + 5} fill={D.muted} fontSize="13">
          Re
        </text>
        <text x={cx + 6} y={cy - r - 24} fill={D.muted} fontSize="13">
          Im
        </text>
        <circle cx={cx} cy={cy} r={r} fill="none" stroke={D.emerald} strokeWidth="2.5" strokeDasharray="6 4" filter="url(#dg-glow)" />
        <circle cx={cx + r} cy={cy} r="5" fill={D.emerald} />
        <circle cx={cx} cy={cy - r} r="5" fill={D.indigo} />
        <circle cx={cx - r} cy={cy} r="5" fill={D.muted} />
        <circle cx={cx} cy={cy + r} r="5" fill={D.rose} />
        <text x={cx + r + 8} y={cy + 4} fill={D.emerald} fontSize="11">
          1
        </text>
        <text x={cx + 4} y={cy - r - 6} fill={D.indigo} fontSize="11">
          i
        </text>
        <text x={cx - r - 14} y={cy + 4} fill={D.muted} fontSize="11">
          −1
        </text>
        <text x={cx + 4} y={cy + r + 14} fill={D.rose} fontSize="11">
          −i
        </text>
        {spec.kind === 'unit-circle' && (
          <text x={cx} y="28" textAnchor="middle" fill={D.muted} fontSize="12" fontWeight="600">
            Unit circle |z| = 1
          </text>
        )}
      </DiagramCanvas>
      <Footnotes lines={spec.footnotes} />
    </div>
  );
}

function AxesView({ spec }: { spec: Extract<DiagramSpec, { type: 'axes' }> }) {
  return (
    <div className="diagram-axes-wrap">
      <DiagramCanvas viewBox="0 0 440 280" label="Coordinate plot">
        <PanelBg w={440} h={280} />
        {[70, 120, 170, 220].map((g) => (
          <line key={`h-${g}`} x1="60" y1={g} x2="400" y2={g} stroke="rgba(148,163,184,0.1)" strokeWidth="1" />
        ))}
        <MiniAxes ox={60} oy={230} w={340} h={190} curve={spec.shape} color={D.emerald} label={spec.label} />
        {spec.title && (
          <text x="220" y="28" textAnchor="middle" fill={D.muted} fontSize="12" fontWeight="600">
            {spec.title.slice(0, 40)}
          </text>
        )}
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
                {item.label.slice(0, 20)}
              </text>
              <rect x="150" y={y + 8} width={w} height="26" rx="8" fill="url(#dg-emerald)" opacity={0.95 - i * 0.07} filter="url(#dg-shadow)" />
              <text x={156 + w} y={y + 26} fill={D.text} fontSize="10">
                {item.value}
              </text>
            </g>
          );
        })}
      </DiagramCanvas>
      <Footnotes lines={spec.footnotes} />
    </div>
  );
}

function ScatterView({ spec }: { spec: Extract<DiagramSpec, { type: 'scatter' }> }) {
  const points = [
    [90, 190], [115, 165], [140, 175], [165, 140], [190, 155], [210, 120],
    [235, 135], [260, 105], [285, 118], [310, 88], [335, 102], [360, 75],
  ];

  return (
    <div className="diagram-scatter-wrap">
      {spec.title && <p className="diagram-caption">{spec.title}</p>}
      <DiagramCanvas viewBox="0 0 440 260" label="Scatter plot">
        <PanelBg w={440} h={260} />
        <line x1="50" y1="220" x2="400" y2="220" stroke={D.border} strokeWidth="1.5" />
        <line x1="50" y1="220" x2="50" y2="40" stroke={D.border} strokeWidth="1.5" />
        {points.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="6" fill={D.emerald} opacity={0.55 + (i % 3) * 0.12} filter="url(#dg-glow)" />
        ))}
        {spec.showTrend && (
          <path d="M 70 200 L 370 65" stroke={D.indigo} strokeWidth="2.5" strokeDasharray="8 5" opacity="0.75" />
        )}
      </DiagramCanvas>
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
  const icons: Record<string, string> = {
    default: '◆',
    checklist: '☑',
    warning: '⚠',
    compare: '⇄',
  };
  const variant = spec.variant ?? 'default';

  return (
    <div className={`diagram-callout-wrap diagram-callout-${variant}`}>
      {spec.title && <p className="diagram-callout-title">{spec.title}</p>}
      <div className="diagram-concept-grid">
        {spec.lines.map((line, i) => (
          <div key={i} className="diagram-concept-card">
            <span className="diagram-concept-icon" aria-hidden>
              {icons[variant]}
            </span>
            <span className="diagram-concept-text">{line}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DistributionView({ spec }: { spec: Extract<DiagramSpec, { type: 'distribution' }> }) {
  const bell = 'M 60 180 Q 120 60, 220 60 T 380 180';
  const cdf = 'M 60 180 Q 140 178, 200 120 T 380 40';

  return (
    <div className="diagram-distribution-wrap">
      {spec.title && <p className="diagram-caption">{spec.title}</p>}
      <DiagramCanvas viewBox="0 0 440 220" label="Distribution">
        <PanelBg w={440} h={220} />
        <line x1="50" y1="180" x2="400" y2="180" stroke={D.border} strokeWidth="1.5" />
        <line x1="50" y1="180" x2="50" y2="40" stroke={D.border} strokeWidth="1.5" />
        {spec.kind === 'binomial' ? (
          <>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((k, i) => {
              const h = [8, 28, 72, 120, 155, 170, 155, 120, 72, 28, 8][i];
              return (
                <rect key={k} x={70 + i * 30} y={180 - h} width="22" height={h} rx="4" fill="url(#dg-emerald)" opacity={0.7 + (i === 5 ? 0.3 : 0)} />
              );
            })}
          </>
        ) : (
          <path
            d={spec.kind === 'cdf' ? cdf : bell}
            fill={spec.kind === 'cdf' ? 'none' : D.emeraldSoft}
            stroke="url(#dg-emerald)"
            strokeWidth="2.5"
            filter="url(#dg-glow)"
          />
        )}
        <text x="220" y="28" textAnchor="middle" fill={D.muted} fontSize="12" fontWeight="600">
          {spec.kind === 'cdf' ? 'Cumulative F(x)' : spec.kind === 'binomial' ? 'Binomial PMF' : 'Normal distribution'}
        </text>
      </DiagramCanvas>
      <Footnotes lines={spec.footnotes} />
    </div>
  );
}

function DecompositionView({ spec }: { spec: Extract<DiagramSpec, { type: 'decomposition' }> }) {
  const parts = spec.parts.length ? spec.parts : ['A', '=', 'U', 'Σ', 'Vᵀ'];

  return (
    <div className="diagram-decomposition-wrap">
      {spec.title && <p className="diagram-caption">{spec.title}</p>}
      <DiagramCanvas viewBox="0 0 440 120" label="Matrix decomposition">
        <PanelBg w={440} h={120} r={12} />
        {parts.map((part, i) => {
          const x = 40 + i * 72;
          const isSymbol = part.length <= 2;
          return (
            <g key={i}>
              {isSymbol ? (
                <text x={x + 20} y="68" textAnchor="middle" fill={D.muted} fontSize="20" fontWeight="700">
                  {part}
                </text>
              ) : (
                <>
                  <rect x={x} y="38" width="64" height="44" rx="10" fill={D.indigoSoft} stroke={D.indigo} strokeWidth="2" />
                  <text x={x + 32} y="66" textAnchor="middle" fill={D.text} fontSize="11" fontWeight="600">
                    {part.slice(0, 8)}
                  </text>
                </>
              )}
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
    case 'venn':
      return <VennView spec={spec} />;
    case 'setOps':
      return <SetOpsView spec={spec} />;
    case 'mapping':
      return <MappingView spec={spec} />;
    case 'counting':
      return <CountingView spec={spec} />;
    case 'curves':
      return <CurvesView spec={spec} />;
    case 'pipeline':
      return <PipelineView spec={spec} />;
    case 'vector':
      return <VectorView spec={spec} />;
    case 'triangle':
      return <TriangleView spec={spec} />;
    case 'angle':
      return <AngleView spec={spec} />;
    case 'sequence':
      return <SequenceView spec={spec} />;
    case 'formulas':
      return <FormulasView spec={spec} />;
    case 'polar':
      return <PolarView spec={spec} />;
    case 'axes':
      return <AxesView spec={spec} />;
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
    case 'distribution':
      return <DistributionView spec={spec} />;
    case 'decomposition':
      return <DecompositionView spec={spec} />;
    default:
      return null;
  }
}
