export type CurveShape =
  | 'linear'
  | 'quadratic'
  | 'sigmoid'
  | 'relu'
  | 'log'
  | 'exp-growth'
  | 'exp-decay'
  | 'loss'
  | 'sine'
  | 'flat';

import type { FigureSpec } from '../utils/parseAsciiFigure';

/** Structured layout: figure → formulas → flow → notes (never interleaved). */
export type StructuredLiteral = {
  title?: string;
  figure?: FigureSpec;
  formulas: string[];
  pipelines: string[][];
  chips: string[];
  notes: string[];
};

/** Renders the curriculum diagram text faithfully — no invented data. */
export type DiagramSpec =
  | {
      type: 'literal';
      content: StructuredLiteral;
      source: string;
    }
  | {
      type: 'venn';
      sets: [string, string];
      highlight?: 'union' | 'intersection' | 'a' | 'b';
      captions: string[];
    }
  | {
      type: 'setOps';
      setA: string;
      setB: string;
      union?: string;
      intersection?: string;
      diffA?: string;
      diffB?: string;
      cartesian?: string;
      footnotes: string[];
    }
  | {
      type: 'curves';
      curves: { name: string; shape: CurveShape; note?: string }[];
      footnotes: string[];
    }
  | {
      type: 'sequence';
      terms: number[];
      step?: number;
      title?: string;
      footnotes: string[];
    }
  | {
      type: 'vector';
      vx: number;
      vy: number;
      title?: string;
      footnotes: string[];
    }
  | {
      type: 'matrix';
      title?: string;
      rows: string[][];
      footnotes: string[];
    }
  | {
      type: 'bars';
      title?: string;
      items: { label: string; value: number }[];
      footnotes: string[];
    };
