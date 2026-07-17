import type { ReactNode } from 'react';
import type { CurveShape } from '../../types/diagram';
import { filterDiagramNotes } from '../../utils/diagramSanitize';

export const D = {
  emerald: 'var(--diagram-emerald, #059669)',
  emeraldSoft: 'var(--diagram-emerald-soft, rgba(5, 150, 105, 0.14))',
  indigo: 'var(--diagram-indigo, #6366f1)',
  indigoSoft: 'var(--diagram-indigo-soft, rgba(99, 102, 241, 0.12))',
  rose: 'var(--diagram-rose, #e11d48)',
  roseSoft: 'var(--diagram-rose-soft, rgba(225, 29, 72, 0.1))',
  amber: 'var(--diagram-amber, #d97706)',
  sky: 'var(--diagram-sky, #0284c7)',
  border: 'var(--diagram-grid, var(--border-strong, #d4c9bb))',
  text: 'var(--text-primary, #1a1614)',
  muted: 'var(--text-muted, #9a8f82)',
  surface: 'var(--diagram-zone-surface, #f8f6f3)',
  panel: 'var(--diagram-zone-bg, #fffdf9)',
  surfaceTop: 'var(--diagram-surface-top, #ffffff)',
  surfaceBottom: 'var(--diagram-surface-bottom, #f5f0e8)',
  shadow: 'var(--diagram-shadow, rgba(26, 22, 20, 0.08))',
};

export function SvgDefs() {
  return (
    <defs>
      <linearGradient id="dg-emerald" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={D.emerald} stopOpacity="0.85" />
        <stop offset="100%" stopColor={D.emerald} />
      </linearGradient>
      <linearGradient id="dg-indigo" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={D.indigo} stopOpacity="0.85" />
        <stop offset="100%" stopColor={D.indigo} />
      </linearGradient>
      <linearGradient id="dg-rose" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={D.rose} stopOpacity="0.85" />
        <stop offset="100%" stopColor={D.rose} />
      </linearGradient>
      <linearGradient id="dg-surface" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor={D.surfaceTop} />
        <stop offset="100%" stopColor={D.surfaceBottom} />
      </linearGradient>
      <filter id="dg-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.12" />
      </filter>
      <filter id="dg-glow" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <marker id="dg-arrow" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
        <path d="M0,0 L10,5 L0,10 Z" fill={D.muted} />
      </marker>
      <marker id="dg-arrow-emerald" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
        <path d="M0,0 L10,5 L0,10 Z" fill={D.emerald} />
      </marker>
    </defs>
  );
}

export function DiagramCanvas({
  viewBox,
  children,
  className = 'diagram-svg',
  label,
}: {
  viewBox: string;
  children: ReactNode;
  className?: string;
  label?: string;
}) {
  return (
    <svg viewBox={viewBox} className={className} role="img" aria-label={label ?? 'Diagram'}>
      <SvgDefs />
      {children}
    </svg>
  );
}

export function PanelBg({ w, h, r = 16 }: { w: number; h: number; r?: number }) {
  return (
    <rect
      x="4"
      y="4"
      width={w - 8}
      height={h - 8}
      rx={r}
      fill="url(#dg-surface)"
      stroke={D.border}
      strokeWidth="1.5"
      filter="url(#dg-shadow)"
    />
  );
}

export function MiniAxes({
  ox,
  oy,
  w,
  h,
  curve,
  color = D.emerald,
  label,
}: {
  ox: number;
  oy: number;
  w: number;
  h: number;
  curve: CurveShape;
  color?: string;
  label?: string;
}) {
  const x1 = ox;
  const y1 = oy;
  const x2 = ox + w;
  const top = oy - h;

  const paths: Record<CurveShape, string> = {
    linear: `M ${x1 + 8} ${y1 - 12} L ${x2 - 8} ${top + 12}`,
    quadratic: `M ${x1 + 8} ${y1 - 8} Q ${(x1 + x2) / 2} ${top - 4}, ${x2 - 8} ${y1 - 8}`,
    sigmoid: `M ${x1 + 8} ${y1 - 10} C ${x1 + w * 0.35} ${y1 - 10}, ${x1 + w * 0.65} ${top + 8}, ${x2 - 8} ${top + 10}`,
    relu: `M ${x1 + 8} ${y1 - 8} L ${(x1 + x2) / 2} ${y1 - 8} L ${x2 - 8} ${top + 10}`,
    log: `M ${x1 + 18} ${y1 - 8} Q ${x1 + 28} ${top + 8}, ${x2 - 8} ${top + 18}`,
    'exp-growth': `M ${x1 + 8} ${y1 - 8} Q ${x1 + w * 0.5} ${y1 - 12}, ${x2 - 8} ${top + 8}`,
    'exp-decay': `M ${x1 + 8} ${top + 8} Q ${x1 + w * 0.5} ${y1 - 8}, ${x2 - 8} ${y1 - 12}`,
    loss: `M ${x1 + 8} ${top + 8} Q ${x1 + w * 0.45} ${top + 20}, ${x1 + w * 0.65} ${y1 - 18} L ${x2 - 8} ${y1 - 18}`,
    sine: `M ${x1 + 8} ${(top + y1) / 2} Q ${x1 + w * 0.25} ${top + 4}, ${(x1 + x2) / 2} ${(top + y1) / 2} T ${x2 - 8} ${(top + y1) / 2}`,
    flat: `M ${x1 + 8} ${y1 - 16} L ${x2 - 8} ${y1 - 16}`,
  };

  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y1} stroke={D.border} strokeWidth="1.5" />
      <line x1={x1} y1={y1} x2={x1} y2={top} stroke={D.border} strokeWidth="1.5" />
      <path d={paths[curve]} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      {label && (
        <text x={(x1 + x2) / 2} y={top - 6} textAnchor="middle" fill={D.muted} fontSize="10" fontWeight="600">
          {label.slice(0, 16)}
        </text>
      )}
    </g>
  );
}

export function Footnotes({ lines }: { lines: string[] }) {
  const items = filterDiagramNotes(lines).slice(0, 5);
  if (!items.length) return null;
  return (
    <ul className="diagram-footnotes">
      {items.map((line, i) => (
        <li key={i}>{line}</li>
      ))}
    </ul>
  );
}

export function parseSetElements(s: string): string[] {
  const m = s.match(/\{([^}]+)\}/);
  if (!m) return [];
  return m[1].split(',').map((x) => x.trim()).filter(Boolean);
}
