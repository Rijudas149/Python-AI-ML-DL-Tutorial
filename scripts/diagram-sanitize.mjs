/** Shared diagram line cleanup for curriculum scripts. */

const BOX_CHARS = /[│┌┐└┘├┤┬┴┼─═╱\\_|·.]/g;

export function isDecorativeDiagramLine(line) {
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

export function sanitizeDiagramText(text) {
  if (!text) return text;
  return text
    .split('\n')
    .filter((line) => !isDecorativeDiagramLine(line))
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}
