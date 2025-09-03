export async function benchmark<T>(fn: () => Promise<T>, runs = 5) {
  const results: number[] = [];

  for (let i = 0; i < runs; i++) {
    const start = performance.now();
    await fn();
    const end = performance.now();
    results.push(end - start);
  }

  const avg = results.reduce((a, b) => a + b, 0) / runs;
  const max = Math.max(...results);
  const min = Math.min(...results);

  return { avg, min, max, runs };
}
