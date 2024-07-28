import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Platform} from 'react-native';
import {StorageKeys} from '../enums';

const baseURL =
  Platform.OS === 'ios' ? 'http://127.0.0.1:4000/' : 'http://10.0.2.2:4000/';

const axiosService = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosService.interceptors.request.use(
  async config => {
    try {
      const userAuthToken = await AsyncStorage.getItem(StorageKeys.User);
      if (config?.headers?.Authorization) {
        config.headers['Authorization'] = config?.headers?.Authorization;
      } else if (userAuthToken) {
        config.headers['Authorization'] = `Bearer ${userAuthToken}`;
      }

      return config;
    } catch (error) {
      console.error('Error in request interceptor:', error);
      return Promise.reject(error);
    }
  },
  error => {
    return Promise.reject(error);
  },
);

axiosService.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    if (error.response && error.response.status === 503) {
      // Navigate to maintenance screen
      // Call your navigation function to navigate to maintenance screen
    }
    return Promise.reject(error);
  },
);

export default axiosService;
