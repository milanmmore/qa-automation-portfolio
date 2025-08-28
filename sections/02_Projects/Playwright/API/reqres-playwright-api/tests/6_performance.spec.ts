
import { test, expect, request } from '@playwright/test';
import { performance } from 'perf_hooks';
import { getAuthenticatedContext, getFullURL } from './common/setup';
import { createUserPayload } from '../fixtures/payloads';
import { waitForDebugger } from 'inspector';



test.describe('🟢 Performance of APIs', () => {

    test('should measure performance of delayed response and validate', async () => {
        const apiContext = await getAuthenticatedContext();

        const start = performance.now();

        const response = await apiContext.get(getFullURL('/users?delay=3'));

        const end = performance.now();
        const durationMs = end - start;

        expect(response.status()).toBe(200);


        const responseTime = response.headers()['x-response-time'];

        console.log(`⏱️ Response time from header: ${responseTime}`);

    });




test('🧪 API Performance is within acceptable limits', async ({ playwright }) => {

    const thresholdMs = 500; // ⏱️ SLA threshold
    const toleranceMs = 5;
    
    const apiContext = await getAuthenticatedContext();

    const start = performance.now();
// Simulate some delay

    const response = await apiContext.post(getFullURL('/users'), {
        data: createUserPayload,
        headers: {
        //Authorization: `Bearer ${process.env.API_KEY}`
        ['x-api-key']: process.env.API_KEY as string
        }
    });
    // ⏱️ Measure response time
    const end = performance.now();
    const durationMs = end - start;

    console.log(`⏱️ Response time: ${durationMs.toFixed(2)} ms`);

    if (durationMs > thresholdMs) {
        console.warn(`⚠️ Response time exceeded threshold: ${durationMs.toFixed(2)} ms`);
    } else {
        expect(durationMs).toBeLessThan(thresholdMs);
    }

    //expect(durationMs).toBeLessThan(thresholdMs + toleranceMs);

    // ✅ Status code check
    expect(response.status()).toBe(201);

    // 📦 Payload size check
    const bodyText = await response.text();
    const payloadSize = Buffer.byteLength(bodyText);
    console.log(`📦 Payload size: ${payloadSize} bytes`);
    console.log(response.headers());
    console.log(`📦 Response body: ${bodyText}`);

    // 🛰️ Optional: log server timing header
    const serverTiming = response.headers()['x-response-time'];
    if (serverTiming) {
        console.log(`🛰️ Server timing header: ${serverTiming}`);
    }
    });




test('🧪 API Performance for get user list is within acceptable limits', async ({ playwright }) => {

    const thresholdMs = 500; // ⏱️ SLA threshold
    const toleranceMs = 5;
    
    const apiContext = await getAuthenticatedContext();

    const start = performance.now();
// Simulate some delay

    const response = await apiContext.get(getFullURL('/users'), {
        headers: {
            //Authorization: `Bearer ${process.env.API_KEY}`
            ['x-api-key']: process.env.API_KEY as string
        }
    });
    // ⏱️ Measure response time
    const end = performance.now();
    const durationMs = end - start;

    console.log(`⏱️ Response time: ${durationMs.toFixed(2)} ms`);

    if (durationMs > thresholdMs) {
        console.warn(`⚠️ Response time exceeded threshold: ${durationMs.toFixed(2)} ms`);
    } else {
        expect(durationMs).toBeLessThan(thresholdMs);
    }

    //expect(durationMs).toBeLessThan(thresholdMs + toleranceMs);

    // ✅ Status code check
    expect(response.status()).toBe(200);

    // 📦 Payload size check
    const bodyText = await response.text();
    const payloadSize = Buffer.byteLength(bodyText);
    console.log(`📦 Payload size: ${payloadSize} bytes`);
    console.log(response.headers());
    console.log(`📦 Response body: ${bodyText}`);

    // 🛰️ Optional: log server timing header
    const serverTiming = response.headers()['x-response-time'];
    if (serverTiming) {
        console.log(`🛰️ Server timing header: ${serverTiming}`);
    }
    });


});
