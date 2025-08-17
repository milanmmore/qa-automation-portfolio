// test-login.ts
import { request } from '@playwright/test';

(async () => {
  const context = await request.newContext();
  const res = await context.post('https://reqres.in/api/login', {
    data: {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka'
    }
  });

  console.log('Status:', res.status());
  console.log('Body:', await res.json());
})();
