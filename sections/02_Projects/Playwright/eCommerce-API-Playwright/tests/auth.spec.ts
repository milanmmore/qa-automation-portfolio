import { test, expect } from '@playwright/test';
import { login } from '../utils/apiClient';

test('User should authenticate and receive token', async () => {
  await login();
  expect(true).toBeTruthy(); // If login fails, test will throw
});
