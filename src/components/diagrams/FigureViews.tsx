import type { FigureSpec } from '../../utils/parseAsciiFigure';
import { D, DiagramCanvas, PanelBg } from './DiagramPrimitives';

const CURVE_PATHS: Record<Extract<FigureSpec, { type: 'axes' }>['curve'], string> = {
  'linear-up': 'M 70 200 L 360 60',
  'linear-down': 'M 70 60 L 360 200',
  quadratic: 'M 70 190 Q 215 30, 360 190',
  log: 'M 90 200 Q 130 195, 360 70',
  'exp-up': 'M 70 200 Q 200 190, 360 70',
  'exp-down': 'M 70 70 Q 200 120, 360 200',
  loss: 'M 70 70 Q 180 160, 260 175 L 360 175',
};

export function FigureView({ spec }: { spec: FigureSpec }) {
  switch (spec.type) {
    case 'mapping':
      return <MappingFigure spec={spec} />;
    case 'axes':
      return <AxesFigure spec={spec} />;
    case 'matrix':
      return <MatrixFigure spec={spec} />;
    case 'pipeline':
      return <PipelineFigure spec={spec} />;
    case 'angle':
      return <AngleFigure spec={spec} />;
    case 'vector':
      return <VectorFigure spec={spec} />;
    default:
      return null;
  }
}

function MappingFigure({ spec }: { spec: Extract<FigureSpec, { type: 'mapping' }> }) {
  const domain = [...new Set(spec.maps.map((m) => m.from))];
  const codomain = [...new Set(spec.maps.map((m) => m.to))];
  const domainX = 72;
  const codomainX = 320;
  const startY = 58;
  const gap = Math.min(42, 160 / Math.max(domain.length, codomain.length, 1));

  return (
    <DiagramCanvas viewBox="0 0 440 260" label="Function mapping diagram">
      <PanelBg w={440} h={260} />
      <text x={domainX} y="32" textAnchor="middle" fill={D.emerald} fontSize="13" fontWeight="700">
        {spec.domainLabel}
      </text>
      <text x={codomainX} y="32" textAnchor="middle" fill={D.indigo} fontSize="13" fontWeight="700">
        {spec.codomainLabel}
      </text>
      {domain.map((d, i) => {
        const y = startY + i * gap;
        return (
          <g key={`d-${d}`}>
            <rect x={domainX - 30} y={y - 18} width="60" height="36" rx="8" fill={D.emeraldSoft} stroke={D.emerald} strokeWidth="2" />
            <text x={domainX} y={y + 5} textAnchor="middle" fill={D.text} fontSize="14" fontWeight="600">
              {d}
            </text>
          </g>
        );
      })}
      {codomain.map((c, i) => {
        const y = startY + i * gap + (domain.length - codomain.length) * (gap / 2);
        return (
          <g key={`c-${c}`}>
            <rect x={codomainX - 30} y={y - 18} width="60" height="36" rx="8" fill={D.indigoSoft} stroke={D.indigo} strokeWidth="2" />
            <text x={codomainX} y={y + 5} textAnchor="middle" fill={D.text} fontSize="14" fontWeight="600">
              {c}
            </text>
          </g>
        );
      })}
      {spec.maps.map((m, i) => {
        const fromIdx = domain.indexOf(m.from);
        const toIdx = codomain.indexOf(m.to);
        if (fromIdx < 0 || toIdx < 0) return null;
        const y1 = startY + fromIdx * gap;
        const y2 = startY + toIdx * gap + (domain.length - codomain.length) * (gap / 2);
        const midY = (y1 + y2) / 2;
        return (
          <path
            key={i}
            d={`M ${domainX + 32} ${y1} C 190 ${midY}, 230 ${midY}, ${codomainX - 32} ${y2}`}
            fill="none"
            stroke={D.muted}
            strokeWidth="1.75"
            markerEnd="url(#dg-arrow-emerald)"
          />
        );
      })}
    </DiagramCanvas>
  );
}

function AxesFigure({ spec }: { spec: Extract<FigureSpec, { type: 'axes' }> }) {
  return (
    <DiagramCanvas viewBox="0 0 440 280" label="Graph">
      <PanelBg w={440} h={280} />
      {[80, 130, 180, 230].map((g) => (
        <line key={g} x1="60" y1={g} x2="390" y2={g} stroke="rgba(148,163,184,0.12)" strokeWidth="1" />
      ))}
      <line x1="60" y1="230" x2="390" y2="230" stroke={D.border} strokeWidth="2" markerEnd="url(#dg-arrow)" />
      <line x1="60" y1="230" x2="60" y2="40" stroke={D.border} strokeWidth="2" markerEnd="url(#dg-arrow)" />
      <text x="400" y="248" fill={D.muted} fontSize="13">
        {spec.xLabel}
      </text>
      <text x="42" y="48" fill={D.muted} fontSize="13">
        {spec.yLabel}
      </text>
      <path d={CURVE_PATHS[spec.curve]} fill="none" stroke="url(#dg-emerald)" strokeWidth="3" strokeLinecap="round" filter="url(#dg-glow)" />
      {spec.curveLabel && (
        <text x="280" y="72" fill={D.emerald} fontSize="12" fontWeight="600">
          {spec.curveLabel}
        </text>
      )}
    </DiagramCanvas>
  );
}

function MatrixFigure({ spec }: { spec: Extract<FigureSpec, { type: 'matrix' }> }) {
  const cols = Math.max(...spec.rows.map((r) => r.length), 1);
  const cellW = 56;
  const cellH = 36;
  const w = cols * cellW + 40;
  const h = spec.rows.length * cellH + 50;

  return (
    <DiagramCanvas viewBox={`0 0 ${Math.max(440, w)} ${h}`} label="Matrix">
      <PanelBg w={Math.max(440, w)} h={h} r={12} />
      {spec.colLabels?.map((label, i) => (
        <text key={label} x={36 + i * cellW + cellW / 2} y="28" textAnchor="middle" fill={D.muted} fontSize="10">
          {label}
        </text>
      ))}
      {spec.rows.map((row, ri) =>
        row.map((cell, ci) => (
          <g key={`${ri}-${ci}`}>
            <rect
              x={28 + ci * cellW}
              y={36 + ri * cellH}
              width={cellW - 4}
              height={cellH - 4}
              rx="6"
              fill={D.panel}
              stroke={D.border}
              strokeWidth="1.5"
            />
            <text x={28 + ci * cellW + (cellW - 4) / 2} y={36 + ri * cellH + 22} textAnchor="middle" fill={D.text} fontSize="11">
              {cell}
            </text>
          </g>
        )),
      )}
    </DiagramCanvas>
  );
}

function PipelineFigure({ spec }: { spec: Extract<FigureSpec, { type: 'pipeline' }> }) {
  const n = spec.nodes.length;
  const nodeW = Math.min(96, (380 - (n - 1) * 20) / n);

  return (
    <DiagramCanvas viewBox="0 0 440 120" label="Process flow">
      <PanelBg w={440} h={120} r={12} />
      {spec.nodes.map((label, i) => {
        const x = 24 + i * (nodeW + 20);
        return (
          <g key={i}>
            {i < n - 1 && (
              <line x1={x + nodeW} y1="60" x2={x + nodeW + 14} y2="60" stroke={D.muted} strokeWidth="2" markerEnd="url(#dg-arrow-emerald)" />
            )}
            <rect x={x} y="30" width={nodeW} height="60" rx="10" fill={D.emeraldSoft} stroke={D.emerald} strokeWidth="2" />
            <text x={x + nodeW / 2} y="66" textAnchor="middle" fill={D.text} fontSize="10" fontWeight="600">
              {label.length > 14 ? `${label.slice(0, 12)}…` : label}
            </text>
          </g>
        );
      })}
    </DiagramCanvas>
  );
}

function AngleFigure({ spec }: { spec: Extract<FigureSpec, { type: 'angle' }> }) {
  return (
    <DiagramCanvas viewBox="0 0 440 220" label="Angle between vectors">
      <PanelBg w={440} h={220} />
      <line x1="80" y1="170" x2="360" y2="170" stroke={D.border} strokeWidth="1.5" />
      <line x1="80" y1="170" x2="300" y2="60" stroke="url(#dg-emerald)" strokeWidth="3" markerEnd="url(#dg-arrow-emerald)" />
      <line x1="80" y1="170" x2="340" y2="120" stroke="url(#dg-indigo)" strokeWidth="3" markerEnd="url(#dg-arrow-emerald)" />
      <path d="M 130 170 A 50 50 0 0 0 115 130" fill="none" stroke={D.rose} strokeWidth="2" />
      <text x="145" y="155" fill={D.rose} fontSize="14" fontWeight="700">
        θ
      </text>
      <text x="220" y="36" textAnchor="middle" fill={D.muted} fontSize="12">
        {spec.label ?? 'u · v = |u||v| cos θ'}
      </text>
    </DiagramCanvas>
  );
}

function VectorFigure({ spec }: { spec: Extract<FigureSpec, { type: 'vector' }> }) {
  const scale = 18;
  const ox = 80;
  const oy = 200;
  const px = ox + spec.vx * scale;
  const py = oy - spec.vy * scale;
  const mag = spec.magnitude ?? Math.sqrt(spec.vx ** 2 + spec.vy ** 2).toFixed(1);

  return (
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
  );
}