import { LessonContent } from './LessonContent';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = 'python' }: CodeBlockProps) {
  return (
    <div className="code-block">
      <div className="code-header">
        <span>{language.toUpperCase()}</span>
        <button
          type="button"
          className="copy-btn"
          onClick={() => navigator.clipboard.writeText(code)}
        >
          Copy
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
