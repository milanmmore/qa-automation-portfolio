import { expect, APIRequestContext } from '@playwright/test';

export async function benchmarkEndpoint(
  client: APIRequestContext,
  endpoint: {
    label: string;
    method: string;
    url: string;
    payload?: any;
    threshold: number;
  },
  runs = 5
) {
  const durations: number[] = [];

  for (let i = 0; i < runs; i++) {
    const start = Date.now();

    const options = endpoint.method === 'GET' ? {} : { data: endpoint.payload };
    const res = await client[endpoint.method.toLowerCase()](endpoint.url, options);

    const duration = Date.now() - start;
    expect(res.status()).toBeLessThan(400);
    durations.push(duration);
  }

  // 📊 Stats
  const avg = durations.reduce((a, b) => a + b, 0) / durations.length;
  const max = Math.max(...durations);
  const min = Math.min(...durations);
  const p95 = durations.sort((a, b) => a - b)[Math.floor(0.95 * durations.length)];

  console.log(`📈 ${endpoint.label} Performance Summary:`);
  console.log(`   Avg: ${avg.toFixed(2)}ms`);
  console.log(`   Min: ${min}ms`);
  console.log(`   Max: ${max}ms`);
  console.log(`   P95: ${p95}ms`);

  if (avg > endpoint.threshold) {
    console.warn(`⚠️ Avg response time exceeded threshold: ${avg.toFixed(2)}ms > ${endpoint.threshold}ms`);
  }

  expect(avg).toBeLessThan(endpoint.threshold);
}
