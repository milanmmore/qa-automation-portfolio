// utils/secureHeaders.ts

export function getSecureHeaders(): Record<string, string> {
  const headers: Record<string, string> = {};

  // 🔑 API Key via x-api-key
  if (process.env.API_KEY) {
    headers['x-api-key'] = process.env.API_KEY;
  }

  // 🪪 Bearer Token via Authorization
  if (process.env.AUTH_TOKEN) {
    headers['Authorization'] = `Bearer ${process.env.AUTH_TOKEN}`;
  }

  // 🚨 Fallback: No auth found
  if (Object.keys(headers).length === 0) {
    throw new Error('❌ No authentication headers found. Please set API_KEY or AUTH_TOKEN in your environment.');
  }

  return headers;
}

