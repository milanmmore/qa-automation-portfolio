import { test, expect } from '@playwright/test';
import { request } from '@playwright/test';
import { getAuthenticatedContext, getFullURL } from './common/setup';
import { get } from 'http';

test.describe('🔴 API DELETE method', () => {
    test('should delete user and validate response', async () => {
        const apiContext = await getAuthenticatedContext();
        const userID = process.env.USER_ID;

        const response = await apiContext.delete(getFullURL(`/api/users/${userID}`));

        expect(response.status()).toBe(204);
    });
});
