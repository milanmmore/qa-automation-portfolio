import { test, expect } from '@playwright/test';
import { request } from '@playwright/test';
import { getAuthenticatedContext, getFullURL } from './common/setup';
import { paginationConfig } from '../fixtures/queryParams';
import { getUserId, setUserId } from '../fixtures/data_store';



test.describe('🟢 API Update Methods (PUT & PATCH)', () => {
    test('PUT method - API should update user and validate response', async () => {
        const apiContext = await getAuthenticatedContext();
        const userID = process.env.USER_ID;
        const email = `morpheus${Math.floor(Math.random() * 1000)}@example.com`;
        const response = await apiContext.put(getFullURL(`/users/${userID}`), {
            data: {
                name: "morpheus",
                job: "zion resident",
                email:email
            }
        });

        expect(response.status()).toBe(200);

        const responseData = await response.json();
        console.log('📦 Full response:', responseData);

        expect(responseData).toEqual(
            expect.objectContaining({
                name: expect.any(String),
                job: expect.any(String),
                updatedAt: expect.any(String)
            })
        );
    });




    test('PATCH methos - API should partially update user and validate response', async () => {
        const apiContext = await getAuthenticatedContext();
        const userID = process.env.USER_ID;

        const response = await apiContext.patch(getFullURL(`/users/${userID}`), {
            data: {
                job: "zion resident"
            }
        });

        expect(response.status()).toBe(200);

        const responseData = await response.json();
        console.log('📦 Full response:', responseData);

        expect(responseData).toEqual(
            expect.objectContaining({
                job: expect.any(String),
                updatedAt: expect.any(String)
            })
        );
    });

});

