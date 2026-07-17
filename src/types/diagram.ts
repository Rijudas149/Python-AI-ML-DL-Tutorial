export type DiagramSpec =
  | {
      type: 'venn';
      sets: [string, string];
      highlight?: 'union' | 'intersection' | 'a' | 'b';
      captions: string[];
    }
  | {
      type: 'axes';
      title?: string;
      curves: { label: string; kind?: 'line' | 'curve' | 'flat' }[];
      annotations: string[];
    }
  | {
      type: 'flow';
      nodes: string[];
      direction?: 'horizontal' | 'vertical';
      footnotes: string[];
    }
  | {
      type: 'matrix';
      title?: string;
      rows: string[][];
      rowLabels?: string[];
      colLabels?: string[];
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
    };
