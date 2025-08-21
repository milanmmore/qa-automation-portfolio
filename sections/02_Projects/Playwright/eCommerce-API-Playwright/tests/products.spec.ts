import { test, expect } from '@playwright/test';
import { login } from '../utils/apiClient';
import { AxiosInstance } from 'axios';

let client: AxiosInstance;

test.beforeAll(async () => {
  client = await login(); // returns authenticated Axios client
});

test('Fetch product list', async () => {
  const res = await client.get('/products');
  expect(res.status).toBe(200);
  expect(res.data.products.length).toBeGreaterThan(0);
});

test('Fetch product details', async () => {
  const res = await client.get('/products/1');
  expect(res.status).toBe(200);
  expect(res.data.title).toBeDefined();
});
