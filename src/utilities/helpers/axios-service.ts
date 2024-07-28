import axios from 'axios';
import Config from 'react-native-config';
import AsyncStorage from '@react-native-async-storage/async-storage';

const axiosService = axios.create({
  baseURL: `http://127.0.0.1:4000/`,

  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

axiosService.interceptors.request.use(
  async config => {
    const userAuthToken = await AsyncStorage.getItem('@USER');
    if (config?.headers?.Authorization) {
      config.headers['Authorization'] = config?.headers?.Authorization;
    } else if (userAuthToken) {
      config.headers['Authorization'] = ` Bearer ${userAuthToken}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

axiosService.interceptors.response.use(
  res => {
    return res;
  },
  async error => {
    console.log('xx- error', error.response);
    if (error.response && error.response.status === 503) {
      // Navigate to maintenance screen
      // Call your navigation function to navigate to maintenance screen
    }
    return Promise.reject(error);
  },
);

export default axiosService;
