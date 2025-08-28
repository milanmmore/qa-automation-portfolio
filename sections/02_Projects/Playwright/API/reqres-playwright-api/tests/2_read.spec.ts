import { test, expect } from '@playwright/test';
import { request } from '@playwright/test';
import { getAuthenticatedContext, getFullURL } from './common/setup';
import { paginationConfig } from '../fixtures/queryParams';
import { getUserId, setUserId } from '../fixtures/data_store';



test.describe('🟢 API GET Method', () => {
    test('should list users and validate response', async () => {
      
        const apiContext = await getAuthenticatedContext();
        const page = paginationConfig.defaultPage;

        const response = await apiContext.get(getFullURL(`/users?page=${page}`));

        expect(response.status()).toBe(200);

        const responseData = await response.json();
        console.log('📦 Full response:', responseData);
      
        const userData = responseData.data[0];
        setUserId(userData.id); // Store the first user's ID for later use

        expect(responseData).toEqual(
            expect.objectContaining({
              page: expect.any(Number),
              per_page: expect.any(Number),
              total: expect.any(Number),
              total_pages: expect.any(Number),
              data: expect.arrayContaining([
                    expect.objectContaining({
                        id: expect.any(Number),
                        email: expect.any(String),
                        first_name: expect.any(String),
                        last_name: expect.any(String),
                        avatar: expect.any(String)
                    })
                ]),
            support: expect.objectContaining({
            url: expect.any(String),
            text: expect.any(String)
            })
         })
         );
    });


test('should fetch a single user and validate response', async () => {
  const apiContext = await getAuthenticatedContext();
  //const userID = 1; // Replace with a valid user ID
    const userID = process.env.USER_ID;

  const response = await apiContext.get(getFullURL(`/users/${userID}`));

  expect(response.status()).toBe(200);

  const responseData = await response.json();
  console.log('📦 Full response:', responseData);

  expect(responseData).toEqual(
    expect.objectContaining({
      data: expect.objectContaining({
        id: expect.any(Number),
        email: expect.any(String),
        first_name: expect.any(String),
        last_name: expect.any(String),
        avatar: expect.any(String)
      }),
      support: expect.objectContaining({
        url: expect.any(String),
        text: expect.any(String)
      })
    })
  );
});

test('should list resources and validate response', async () => {
  const apiContext = await getAuthenticatedContext();

  const response = await apiContext.get(getFullURL('/unknown'));

  expect(response.status()).toBe(200);

  const responseData = await response.json();
  console.log('📦 Full response:', responseData);

  expect(responseData).toEqual(
    expect.objectContaining({
      page: expect.any(Number),
      per_page: expect.any(Number),
      total: expect.any(Number),
      total_pages: expect.any(Number),
      data: expect.arrayContaining([
          expect.objectContaining({
              id: expect.any(Number),
              name: expect.any(String),
              year: expect.any(Number),
              color: expect.any(String),
              pantone_value: expect.any(String)
          })
      ]),
      support: expect.objectContaining({
        url: expect.any(String),
        text: expect.any(String)
      })
    })
  );
});

test('should fetch a single resource and validate response', async () => {
  const apiContext = await getAuthenticatedContext();
    const resourceID = process.env.RESOURCE_ID;
    const url = getFullURL('/unknown/' + resourceID);

    console.log(url);

    const response = await apiContext.get(url);

  expect(response.status()).toBe(200);

  const responseData = await response.json();
  console.log('📦 Full response:', responseData);

  expect(responseData).toEqual(
    expect.objectContaining({
      data: expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
        year: expect.any(Number),
        color: expect.any(String),
        pantone_value: expect.any(String)
      }),
      support: expect.objectContaining({
        url: expect.any(String),
        text: expect.any(String)
      })
    })
  );
});

test('should handle resource not found', async () => {
    const apiContext = await getAuthenticatedContext();
    const resourceID = process.env.INV_RESOURCE_ID;
    const url = getFullURL(`/unknown/${resourceID}`);

    const response = await apiContext.get(url);

    expect(response.status()).toBe(404);

    const responseData = await response.json();
    console.log('📦 Full response:', responseData);
    
    expect(responseData).toEqual({});

    // 🧼 Empty JSON body check
    const bodyText = await response.text();
    try {
        const json = JSON.parse(bodyText);
        expect(json).toEqual({});
        console.log('✅ Body is empty JSON object');
    } catch (e) {
        expect(bodyText === '' || bodyText === 'null').toBe(true);
        console.log('✅ Body is empty string or null');
    }

});



});


