import { request } from '@playwright/test';

export async function fetchAuthToken(role: 'admin' | 'user') {
  const credentials = {
    admin: { username: 'admin_user', password: 'admin_pass' },
    user: { username: 'mor_2314', password: '83r5^_' },
  };

  const context = await request.newContext({
    baseURL: 'https://fakestoreapi.com',
    extraHTTPHeaders: { 'Content-Type': 'application/json' },
  });

  const res = await context.post('/auth/login', {
    data: credentials[role],
  });

  if (res.status() !== 200) {
    throw new Error(`Failed to login as ${role}`);
  }

  const body = await res.json();
  return body.token;
}
