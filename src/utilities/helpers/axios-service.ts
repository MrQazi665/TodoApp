import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Platform} from 'react-native';

const baseURL =
  Platform.OS === 'ios' ? 'http://127.0.0.1:4000/' : 'http://10.0.2.2:4000/';

const axiosService = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

axiosService.interceptors.request.use(
  async config => {
    try {
      const userAuthToken = await AsyncStorage.getItem('@USER');
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
    console.error('Request error:', error);
    return Promise.reject(error);
  },
);

axiosService.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    console.error('Response error:', error);
    if (error.response && error.response.status === 503) {
      // Navigate to maintenance screen
      // Call your navigation function to navigate to maintenance screen
    }
    return Promise.reject(error);
  },
);

export default axiosService;
