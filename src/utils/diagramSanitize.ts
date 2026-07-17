const BOX_CHARS = /[│┌┐└┘├┤┬┴┼─═╱\\_|·.]/g;

/** Lines that are pure ASCII decoration or boilerplate — not meaningful diagram content. */
export function isDecorativeDiagramLine(line: string): boolean {
  const t = line.trim();
  if (!t) return true;

  if (/^\(see formulas above\)$/i.test(t)) return true;
  if (/^see formulas above\.?$/i.test(t)) return true;
  if (/^·\s*·\s*·/.test(t)) return true;

  const withoutBox = t.replace(BOX_CHARS, ' ').replace(/\s+/g, ' ').trim();
  if (!withoutBox) return true;

  // Keep axis labels, formulas, and any line with meaningful text/math.
  if (/[A-Za-z0-9=_{}→∞]/.test(withoutBox)) return false;

  if (withoutBox.length <= 2 && /[│└┌┐┘─═╱\\]/.test(t)) return true;
  return false;
}

/** Remove decorative trailing lines from diagram source text before parsing. */
export function sanitizeDiagramText(text: string): string {
  return text
    .split('\n')
    .filter((line) => !isDecorativeDiagramLine(line))
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

/** Filter footnote / note lines for diagram renderers. */
export function filterDiagramNotes(lines: string[]): string[] {
  return lines
    .map((l) => l.trim())
    .filter((l) => l.length > 0 && !isDecorativeDiagramLine(l));
}
