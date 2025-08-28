// create.spec.ts
import { test, expect } from '@playwright/test';
import { getAuthenticatedContext, getFullURL } from './common/setup';

test.describe('🟢 API Authentication Tests', () => {
    test('User Registration Successful', async () => {
        const apiContext = await getAuthenticatedContext();

        const response = await apiContext.post(getFullURL('/register'), {
            data: {
                email: "eve.holt@reqres.in",
                password: "pistol"
            }
        });

        if (response.status() !== 200) {
            console.warn(`⚠️ Status: ${response.status()}`);
            console.warn(`📦 Body: ${await response.text()}`);
        }

        expect(response.status()).toBe(200);

        const responseData = await response.json();

        expect(responseData).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                token: expect.any(String)
            })
        );
    });

    test('User Registration Unsuccessful', async () => {
        const apiContext = await getAuthenticatedContext();

        const response = await apiContext.post(getFullURL('/register'), {
            data: {
                email: "sydney@fife"
            }
        });

        if (response.status() !== 400) {
            console.warn(`⚠️ Status: ${response.status()}`);
            console.warn(`📦 Body: ${await response.text()}`);
        }

        expect(response.status()).toBe(400);

        const responseData = await response.json();

        expect(responseData).toEqual(
            expect.objectContaining({
                error: expect.any(String)
            })
        );
    });


    test('User Login Successful', async () => {
        const apiContext = await getAuthenticatedContext();

        const response = await apiContext.post(getFullURL('/login'), {
            data: {
                email: "eve.holt@reqres.in",
                password: "cityslicka"
            }
        });

        if (response.status() !== 200) {
            console.warn(`⚠️ Status: ${response.status()}`);
            console.warn(`📦 Body: ${await response.text()}`);
        }

        expect(response.status()).toBe(200);

        const responseData = await response.json();

        expect(responseData).toEqual(
            expect.objectContaining({
                token: expect.any(String)
            })
        );
    });

    test('User Login Unsuccessful', async () => {
        const apiContext = await getAuthenticatedContext();

        const response = await apiContext.post(getFullURL('/login'), {
            data: {
                email: "peter@klaven"
            }
        });

        if (response.status() !== 400) {
            console.warn(`⚠️ Status: ${response.status()}`);
            console.warn(`📦 Body: ${await response.text()}`);
        }

        expect(response.status()).toBe(400);

        const responseData = await response.json();

        expect(responseData).toEqual(
            expect.objectContaining({
                error: expect.any(String)
            })
        );
    });

});

