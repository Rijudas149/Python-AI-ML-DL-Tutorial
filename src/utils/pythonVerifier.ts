function normalizeCode(code: string): string {
  return code
    .replace(/\r\n/g, '\n')
    .replace(/#.*$/gm, '')
    .replace(/"""[\s\S]*?"""/g, '')
    .replace(/'''[\s\S]*?'''/g, '')
    .replace(/"[^"]*"/g, '""')
    .replace(/'[^']*'/g, "''")
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

function extractDefNames(code: string): string[] {
  const matches = code.match(/def\s+(\w+)/g) ?? [];
  return matches.map((m) => m.replace('def ', ''));
}

export function verifyPython(
  userCode: string,
  solution: string,
  alternates: string[] = []
): { correct: boolean; message: string } {
  const trimmed = userCode.trim();
  if (!trimmed) {
    return { correct: false, message: 'Write some Python code before checking your answer.' };
  }

  const normalizedUser = normalizeCode(trimmed);
  const allSolutions = [solution, ...alternates];

  for (const sol of allSolutions) {
    if (normalizeCode(sol) === normalizedUser) {
      return { correct: true, message: 'Excellent! Your solution matches the expected approach.' };
    }
  }

  const solutionDefs = extractDefNames(solution);
  const userDefs = extractDefNames(trimmed);
  if (solutionDefs.length > 0 && solutionDefs.every((d) => userDefs.includes(d))) {
    const solKeywords = normalizeCode(solution).split(' ').filter((w) => w.length > 4);
    const matched = solKeywords.filter((k) => normalizedUser.includes(k)).length;
    if (matched / solKeywords.length >= 0.6) {
      return {
        correct: true,
        message: 'Looks good! Your solution uses the right functions and structure.',
      };
    }
  }

  if (normalizedUser.includes('pass') && trimmed.split('\n').length < 3) {
    return { correct: false, message: 'Your code is incomplete. Try implementing the full solution.' };
  }

  return {
    correct: false,
    message: 'Not quite right. Compare your logic with the hint, or reveal the solution to learn the pattern.',
  };
}
