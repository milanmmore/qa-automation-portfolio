import { request } from '@playwright/test';

export async function getUserDetails(userId: string) {
  const apiContext = await request.newContext();
  const response = await apiContext.get(`https://api.example.com/users/${userId}`);
  return await response.json();
}
