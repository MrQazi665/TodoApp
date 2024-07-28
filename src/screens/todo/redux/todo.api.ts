import axiosService from '../../../utilities/http-client';

export const getAllTodos = async (data: any) => {
  const res = await axiosService.get(
    `todo/listing?page=${data?.page}&limit=${data?.limit}`,
  );

  return res.data;
};
export const createNewTodo = async (data: any) => {
  const res = await axiosService.post(`todo`, data);

  return res.data;
};

export const updateTodo = async (data: any, id: any) => {
  console.log('xx- this call', data, id);
  const res = await axiosService.patch(`todo/${id}`, data);

  return res.data;
};

export const deleteTodo = async (id: any) => {
  console.log('xx- this call', id);
  const res = await axiosService.delete(`todo/${id}`);

  return res.data;
};
