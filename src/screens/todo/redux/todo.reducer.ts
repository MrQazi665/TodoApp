import {createReducer} from 'reduxsauce';

import initialState from '../../../redux/store/initialState';
import {ITodoStates} from '../../../redux/store/initialState/types';
import {todoTypes} from './todo.action';
import {Todo} from '../../../types';

export const INITIAL_STATE = initialState.todo;

const getAllTodosSuccess = (state: ITodoStates, {info}: {info: any}) => {
  const response = info.response;
  return {
    ...state,
    todoData: {
      data: info?.append
        ? [...(state.todoData.data || []), ...(response.data || [])]
        : response.data,
      page: response.pagination.page,
      totalRecords: response.pagination.totalRecords,
    },
  };
};

const addTodoSuccess = (state: ITodoStates, {info}: {info: any}) => {
  return {
    ...state,
    todoData: {
      ...state.todoData,
      data: [info, ...state.todoData.data],
    },
  };
};

const updateTodoSuccess = (state: ITodoStates, {info}: {info: Todo}) => {
  return {
    ...state,
    todoData: {
      ...state.todoData,
      data: state.todoData.data.map((item: Todo) =>
        item.id === info.id ? {...item, ...info} : item,
      ),
    },
  };
};

const deleteTodoSuccess = (state: ITodoStates, {info}: {info: number}) => {
  return {
    ...state,
    todoData: {
      ...state.todoData,
      data: state.todoData.data.filter((item: Todo) => item.id != info),
    },
  };
};

const handleUpdateDeleteTodoStart = (state: ITodoStates, {params}: any) => {
  return {
    ...state,
    itemId: params?.id || params,
  };
};

export const HANDLERS: any = {
  [todoTypes.GET_ALL_TODOS_SUCCESS]: getAllTodosSuccess,
  [todoTypes.ADD_TODO_SUCCESS]: addTodoSuccess,
  [todoTypes.UPDATE_TODO_SUCCESS]: updateTodoSuccess,
  [todoTypes.DELETE_TODO_SUCCESS]: deleteTodoSuccess,
  [todoTypes.UPDATE_TODO]: handleUpdateDeleteTodoStart,
  [todoTypes.DELETE_TODO]: handleUpdateDeleteTodoStart,
};
export default createReducer(INITIAL_STATE, HANDLERS);
