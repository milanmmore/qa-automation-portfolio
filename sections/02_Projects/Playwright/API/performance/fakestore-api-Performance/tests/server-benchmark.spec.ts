import { test } from './fixtures/test-server-fixture';
import { expect } from '@playwright/test';
import { benchmark } from '../utils/benchmark';


test('ping endpoint responds with pong', async ({ client }) => {
  const res = await client.get('/ping');
  expect(res.status()).toBe(200);
  expect(await res.json()).toEqual({ message: 'pong' });
});

test('ping endpoint performance', async ({ client }) => {
  const result = await benchmark(() => client.get('/ping'), 10);

  console.log(`📈 Avg: ${result.avg.toFixed(2)}ms`);
  expect(result.avg).toBeLessThan(300);
});


test('secure endpoint responds with 200', async ({ client, authToken }) => {
  const res = await client.get('/secure', {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  expect(res.status()).toBe(200);
});

