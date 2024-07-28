import axios from 'axios';
import Config from 'react-native-config';
import axiosService from '../../../utilities/helpers/axios-service';

axios.defaults.baseURL = Config.base_url;

export const callSignUp = async (data: any) => {
  try {
    const res = await axiosService.post(`user/register`, data);
    console.log('xx- res', res);
    return res.data;
  } catch (error: any) {
    console.log('xx- error', error);
    throw error;
  }
};

export const callSignIn = async (data: any) => {
  try {
    const res = await axiosService.post(`user/login`, data);
    return res.data;
  } catch (error: any) {
    throw error;
  }
};
