import { AxiosInstance } from 'axios';
import { test, expect } from '@playwright/test';
import { login } from '../utils/apiClient';

let client: AxiosInstance;

test.beforeAll(async () => {
  client = await login();
});

test('Product list should respond within 500ms', async () => {
  const start = Date.now();
  const res = await client.get('/products');
  const duration = Date.now() - start;

  console.log(`Response time: ${duration}ms`);
  expect(res.status).toBe(200);
  expect(duration).toBeLessThan(500);
});
