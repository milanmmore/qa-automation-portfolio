import { test, expect } from 'playwright/test';
import { getUserDetails } from '../api/userApi';

test('Fetch user details', async () => {
  const user = await getUserDetails('123');
  expect(user.name).toBe('Milan');
});


