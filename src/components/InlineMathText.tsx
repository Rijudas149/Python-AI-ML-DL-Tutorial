import type { ReactNode } from 'react';
import { MathFormula } from './MathFormula';
import { autoWrapMathInProse } from '../utils/latexFormula';

const INLINE_MATH = /(\$\$[\s\S]+?\$\$|\$[^$\n]+?\$)/g;

function renderSegment(segment: string, key: number) {
  if (segment.startsWith('**') && segment.endsWith('**')) {
    return (
      <strong key={key} className="lesson-term">
        {segment.slice(2, -2)}
      </strong>
    );
  }
  if (segment.startsWith('`') && segment.endsWith('`')) {
    return (
      <code key={key} className="inline-code">
        {segment.slice(1, -1)}
      </code>
    );
  }
  if (segment.startsWith('$$') && segment.endsWith('$$')) {
    return <MathFormula key={key} formula={segment.slice(2, -2).trim()} display />;
  }
  if (segment.startsWith('$') && segment.endsWith('$')) {
    return <MathFormula key={key} formula={segment.slice(1, -1).trim()} display={false} />;
  }
  return <span key={key}>{segment}</span>;
}

/** Rich inline text: **bold**, `code`, and $math$ / $$display math$$. */
export function InlineMathText({ text }: { text: string }) {
  const enriched = autoWrapMathInProse(text);
  const withMath = enriched.split(INLINE_MATH);
  const parts: ReactNode[] = [];
  let key = 0;

  for (const chunk of withMath) {
    if (!chunk) continue;
    if (chunk.startsWith('$')) {
      parts.push(renderSegment(chunk, key++));
      continue;
    }
    const styled = chunk.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
    for (const part of styled) {
      if (!part) continue;
      parts.push(renderSegment(part, key++));
    }
  }

  return <>{parts}</>;
}
