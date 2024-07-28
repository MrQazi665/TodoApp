import axiosService from '../../../utilities/http-client';

export const getAllTodos = async (data: any) => {
  const res = await axiosService.post(`todo/listing?page=1&limit=10`);
  return res.data;
};
