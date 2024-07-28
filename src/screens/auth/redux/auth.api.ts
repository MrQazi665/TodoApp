import axiosService from '../../../utilities/http-client';

export const postRegisterRequest = async (data: any) => {
  const res = await axiosService.post(`users/register`, data);
  return res.data;
};

export const postSignInRequest = async (data: any) => {
  const res = await axiosService.post(`users/login`, data);
  return res.data;
};
