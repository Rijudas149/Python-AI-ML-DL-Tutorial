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

export type DiagramSpec =
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
      type: 'mapping';
      domain: string[];
      codomain: string[];
      maps: { from: string; to: string }[];
      footnotes: string[];
    }
  | {
      type: 'counting';
      title?: string;
      combinations: string[];
      permutationsNote?: string;
      formulas: string[];
      footnotes: string[];
    }
  | {
      type: 'curves';
      curves: { name: string; shape: CurveShape; note?: string }[];
      footnotes: string[];
    }
  | {
      type: 'pipeline';
      nodes: string[];
      direction?: 'horizontal' | 'vertical';
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
      type: 'triangle';
      a: number;
      b: number;
      title?: string;
      footnotes: string[];
    }
  | {
      type: 'angle';
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
      type: 'formulas';
      items: string[];
      title?: string;
      footnotes: string[];
    }
  | {
      type: 'polar';
      kind: 'unit-circle' | 'complex-plane';
      footnotes: string[];
    }
  | {
      type: 'axes';
      title?: string;
      shape: CurveShape;
      label?: string;
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
    }
  | {
      type: 'scatter';
      title?: string;
      showTrend?: boolean;
      footnotes: string[];
    }
  | {
      type: 'compare';
      columns: { title: string; lines: string[] }[];
    }
  | {
      type: 'steps';
      title?: string;
      steps: string[];
    }
  | {
      type: 'callout';
      title?: string;
      lines: string[];
      variant?: 'default' | 'checklist' | 'warning' | 'compare';
    }
  | {
      type: 'distribution';
      kind: 'normal' | 'cdf' | 'binomial';
      title?: string;
      footnotes: string[];
    }
  | {
      type: 'decomposition';
      title?: string;
      parts: string[];
      footnotes: string[];
    };
