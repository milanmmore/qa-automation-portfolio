import axios, { AxiosInstance } from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const BASE_URL = process.env.DUMMYJSON_BASE_URL!;

export const login = async (): Promise<AxiosInstance> => {
  try {
    const res = await axios.post(`${BASE_URL}/auth/login`, {
      username: process.env.DUMMYJSON_USERNAME,
      password: process.env.DUMMYJSON_PASSWORD,
    });

    const token = res.data.token;

    return axios.create({
      baseURL: BASE_URL,
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error: any) {
    console.error('Login failed:', error.response?.data || error.message);
    throw new Error('Authentication failed');
  }
};
