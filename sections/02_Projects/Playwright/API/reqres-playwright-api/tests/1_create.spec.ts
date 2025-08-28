import { test, expect } from '@playwright/test';
import { createUserPayload } from '../fixtures/payloads';
//import { getSecureHeaders } from '../utils/secureHeaders';
import { setUserId } from '../fixtures/data_store';
import { getAuthenticatedContext , getFullURL } from './common/setup';




test.describe('🟢 API POST Method', () => {
  test('should create a user and validate response', async ({ request }) => {

    const apiContext = await getAuthenticatedContext();
    const response = await apiContext.post(getFullURL('/api/users'), {
      data: createUserPayload,
      headers: {
        //Authorization: `Bearer ${process.env.API_KEY}`
        ['x-api-key']: process.env.API_KEY as string
      }
    });

    expect(response.status()).toBe(201);

    const responseData = await response.json();
    console.log('📦 Full response:', responseData);
    //setUserId(responseData.id);
    expect(responseData).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        createdAt: expect.any(String)
      })
    );
  });
});



