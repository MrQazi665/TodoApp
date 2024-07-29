import {Todo} from '../../../types';
import axiosService from '../../../utilities/http-client';
import {PaginationInput} from '../interface';

export const getTodoListing = async (data: PaginationInput) => {
  const response = await axiosService.get(
    `todo/listing?page=${data?.page}&limit=${data?.limit || 5}`,
  );
  return response.data;
};

export const createNewTodo = async (data: Todo) => {
  const response = await axiosService.post(`todo`, data);

  return response.data;
};

export const updateTodoRequest = async (data: Todo, id: number) => {
  const response = await axiosService.patch(`todo/${id}`, data);

  return response.data;
};

export const deleteTodoRequest = async (id: number) => {
  const response = await axiosService.delete(`todo/${id}`);

  return response.data;
};
