import { Platform } from 'react-native';
import { AxiosRequestConfig } from 'axios';
import { UserService } from './UserService';

interface AxiosProps {
  url: string;
  params?: any | null;
  formData?: any | null;
}

async function GET(data: AxiosProps) {
  const { url, params } = data;
  const joinApiClient = await UserService.getApiClient(url);
  let result;
  if (joinApiClient === undefined) {
    return result;
  }
  console.log('get params@@@@', params);
  console.log('get url@@@@', url);
  return await joinApiClient
    .get(url, { params })
    .then((response) => {
      console.log('Success Axios GET StatusCode: ', response.status);
      return response.data;
    })
    .catch((error) => {
      console.log('Error Axios GET API --> ', error);
      return error.response.data;
    })
    .finally(() => {
      // console.log('call Axios get Finally');
    });
}

export const Axios = {
  GET,
};
