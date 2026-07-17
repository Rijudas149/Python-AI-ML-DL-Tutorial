import type { Exercise } from '../types';

const FILL_IN_ANSWER = /^print\s*\(\s*["']([^"']+)["']\s*\)$/;

export function isFillInExercise(exercise: Exercise): boolean {
  if (!/_{2,}/.test(exercise.question)) return false;
  return FILL_IN_ANSWER.test(exercise.solution.trim());
}

export function getFillInExpected(exercise: Exercise): string | null {
  const match = exercise.solution.trim().match(FILL_IN_ANSWER);
  return match?.[1] ?? null;
}

export function verifyFillInAnswer(
  userAnswer: string,
  expected: string,
  alternates: string[] = [],
): { correct: boolean; message: string } {
  const normalized = userAnswer.trim().toLowerCase();
  if (!normalized) {
    return { correct: false, message: 'Type your answer in the blank before checking.' };
  }

  const acceptable = [expected, ...alternates].map((a) => a.trim().toLowerCase());
  if (acceptable.includes(normalized)) {
    return { correct: true, message: 'Correct!' };
  }

  return {
    correct: false,
    message: 'Not quite — re-read the section and try a different word or phrase.',
  };
}
