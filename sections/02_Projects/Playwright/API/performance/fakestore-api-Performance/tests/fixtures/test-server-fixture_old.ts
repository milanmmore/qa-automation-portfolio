import { test as base, request } from '@playwright/test';
import { APIRequestContext } from '@playwright/test';
import { getAvailablePort } from '../../utils/port';
import { createServer } from '../../utils/server'; // Your app's entry point
import http from 'http';

export const test = base.extend<{
  port: number;
  client: APIRequestContext;
  authToken: string;
}>({
  port: async ({}, use) => {
    const port = await getAvailablePort();
    const app = await createServer(); // Should return your Express/Koa/Fastify app
    const server = http.createServer(app);

    await new Promise((resolve) => server.listen(port, resolve));

    await use(port);

    await new Promise((resolve, reject) =>
      server.close((err) => (err ? reject(err) : resolve()))
    );
  },

  client: async ({ port }, use) => {
    const client = await request.newContext({
      baseURL: `http://localhost:${port}`,
    });

    await use(client);
    await client.dispose();
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
