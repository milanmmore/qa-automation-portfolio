import { test as base } from './test-server-fixture';
import { fetchAuthToken } from '../../utils/auth';

export const test = base.extend<{
  userToken: string;
  adminToken: string;
}>({
  userToken: async ({}, use) => {
    const token = await fetchAuthToken('user');
    await use(token);
  },
  adminToken: async ({}, use) => {
    const token = await fetchAuthToken('admin');
    await use(token);
  },
});
