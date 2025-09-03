import { test, request } from '@playwright/test';
import { benchmarkEndpoint } from './runner';
import { endpoints } from './config';

let client;

test.beforeAll(async () => {
  client = await request.newContext({
    baseURL: 'https://fakestoreapi.com',
    extraHTTPHeaders: { 'Content-Type': 'application/json' },
  });
});

for (const endpoint of endpoints) {
  test(`${endpoint.label} performance`, async () => {
    await benchmarkEndpoint(client, endpoint, 5);
  });
}
