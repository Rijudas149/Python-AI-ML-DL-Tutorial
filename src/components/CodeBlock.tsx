import { useState } from 'react';
import { LessonContent } from './LessonContent';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = 'python' }: CodeBlockProps) {
  const [copyStatus, setCopyStatus] = useState('');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopyStatus('Copied!');
    } catch {
      setCopyStatus('Failed');
    }
    setTimeout(() => setCopyStatus(''), 2000);
  };

  return (
    <div className="code-block">
      <div className="code-header">
        <span>{language.toUpperCase()}</span>
        <button type="button" className="copy-btn" onClick={handleCopy}>
          {copyStatus || 'Copy'}
        </button>
      </div>
      <pre><code>{code}</code></pre>
    </div>
  );
}

export function MarkdownContent({ content }: { content: string }) {
  return <LessonContent content={content} />;
}

export { LessonContent };
