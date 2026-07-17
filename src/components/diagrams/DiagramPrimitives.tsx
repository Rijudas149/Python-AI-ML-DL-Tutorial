import type { ReactNode } from 'react';
import type { CurveShape } from '../../types/diagram';

export const D = {
  emerald: '#10b981',
  emeraldSoft: 'rgba(16, 185, 129, 0.22)',
  indigo: '#818cf8',
  indigoSoft: 'rgba(129, 140, 248, 0.22)',
  rose: '#fb7185',
  roseSoft: 'rgba(251, 113, 133, 0.22)',
  amber: '#fbbf24',
  sky: '#38bdf8',
  border: 'var(--border-strong, #475569)',
  text: 'var(--text-primary, #e2e8f0)',
  muted: 'var(--text-muted, #94a3b8)',
  surface: 'var(--bg-secondary, #1e293b)',
  panel: 'var(--code-bg, #0f172a)',
};

export function SvgDefs() {
  return (
    <defs>
      <linearGradient id="dg-emerald" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#34d399" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
      <linearGradient id="dg-indigo" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#a5b4fc" />
        <stop offset="100%" stopColor="#6366f1" />
      </linearGradient>
      <linearGradient id="dg-rose" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fda4af" />
        <stop offset="100%" stopColor="#e11d48" />
      </linearGradient>
      <linearGradient id="dg-surface" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="rgba(30, 41, 59, 0.95)" />
        <stop offset="100%" stopColor="rgba(15, 23, 42, 0.98)" />
      </linearGradient>
      <filter id="dg-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#000" floodOpacity="0.35" />
      </filter>
      <filter id="dg-glow" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="3" result="blur" />
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
  const y2 = oy;
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
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={D.border} strokeWidth="1.5" />
      <line x1={x1} y1={y1} x2={x1} y2={top} stroke={D.border} strokeWidth="1.5" />
      <path d={paths[curve]} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" filter="url(#dg-glow)" />
      {label && (
        <text x={(x1 + x2) / 2} y={top - 6} textAnchor="middle" fill={D.muted} fontSize="10" fontWeight="600">
          {label.slice(0, 16)}
        </text>
      )}
    </g>
  );
}

export function Footnotes({ lines }: { lines: string[] }) {
  const items = lines.filter((l) => l.trim() && !/^[\s│·|]+$/.test(l)).slice(0, 5);
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
