import { request, FullConfig } from '@playwright/test';
import fs from 'fs';
// to use this file , add following line in playwright.config.ts file 
// globalSetup: './fixtures/globalSetup.ts', 
//  use: {
//     storageState: './fixtures/auth.json',
// }
async function globalSetup(config: FullConfig) {
  const requestContext = await request.newContext();

  const response = await requestContext.post('https://reqres.in/api/login', {
    data: {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka'
    },
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok()) {
    throw new Error(`Login failed: ${response.status()}`);
  }

  const tokenData = await response.json();
  const token = tokenData.token;

  const storageState = {
    cookies: [],
    origins: [
      {
        origin: 'https://reqres.in',
        localStorage: [
          {
            name: 'auth_token',
            value: token
          }
        ],
        sessionStorage: []
      }
    ]
  };

  fs.writeFileSync('auth.json', JSON.stringify(storageState, null, 2));
}

export default globalSetup;
