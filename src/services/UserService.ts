import axios from 'axios';
import { navigate } from '@/Services/NavigationService';

async function getApiClient(url: string, timeout = 15000) {
  const ApiClient = axios.create({
    baseURL: url,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    timeout,
  });

  return ApiClient;
}

export const UserService = {
  getApiClient,
};
