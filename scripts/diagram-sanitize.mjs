/** Shared diagram line cleanup for curriculum scripts. */

const BOX_CHARS = /[│┌┐└┘├┤┬┴┼─═╱\\_|·.]/g;

export function isDecorativeDiagramLine(line) {
  const t = line.trim();
  if (!t) return true;
  if (/^\(see formulas above\)$/i.test(t)) return true;
  if (/^see formulas above\.?$/i.test(t)) return true;
  if (/^·\s*·\s*·/.test(t)) return true;
  const withoutBox = t.replace(BOX_CHARS, '').replace(/\s+/g, '');
  if (withoutBox.length === 0) return true;
  if (withoutBox.length <= 2 && /[│└┌┐┘─═╱\\]/.test(t)) return true;
  return false;
}

export function sanitizeDiagramText(text) {
  if (!text) return text;
  return text
    .split('\n')
    .filter((line) => !isDecorativeDiagramLine(line))
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}
