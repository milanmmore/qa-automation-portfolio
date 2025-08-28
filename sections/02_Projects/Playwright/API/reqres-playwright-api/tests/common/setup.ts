// setup.ts
import { request } from '@playwright/test';

import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: require('path').resolve(__dirname, '../../.env.local') });


    
export async function getAuthenticatedContext(headers = {}) {
    const apiKey = process.env.API_KEY;
    console.log('🔑 API_KEY:', apiKey ? 'Loaded' : '❌ Missing');
    console.log('🌍 BASE_URL:', process.env.BASE_URL || '❌ Missing');
  if (!apiKey) throw new Error('❌ Missing API_KEY');

  return await request.newContext({
    extraHTTPHeaders: {
      'x-api-key': apiKey,
      ...headers,
    },
  });
}


export function getFullURL(path: string): string {
  const base = process.env.BASE_URL?.replace(/\/$/, '');
  if (!base) throw new Error('❌ Missing BASE_URL');
  return `${base}/${path.replace(/^\//, '')}`;
}
