export function calculateAverage(grades) {
  if (grades.length === 0) return 0;
  const total = grades.reduce((sum, g) => sum + g, 0);
  return total / grades.length;
}