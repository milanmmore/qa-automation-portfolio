import { test as base, request } from '@playwright/test';
import { APIRequestContext } from '@playwright/test';
import { getAvailablePort } from '../../utils/port';

export const test = base.extend<{
  port: number;
  client: APIRequestContext;
  authToken: string;
}>({
  port: async ({}, use) => {
    const port = await getAvailablePort();
    await use(port);
  },

  client: async ({ port }, use) => {
    const client = await request.newContext({ baseURL: `http://localhost:${port}` });
    await use(client);
  },

  authToken: async ({ client }, use) => {
    const res = await client.post('/auth/login', {
      data: {
        username: 'test-user',
        password: 'secure-password',
      },
    });

    const token = (await res.json()).token;
    await use(token);
  },
});


