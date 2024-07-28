import {createReducer} from 'reduxsauce';

import initialState from '../../../redux/store/initialState';
import {ITodoStates} from '../../../redux/store/initialState/types';
import {todoTypes} from './todo.action';

export const INITIAL_STATE = initialState.todo;

const getAllTodoSuccess = (state: ITodoStates, {info}: {info: any}) => {
  console.log('xx-info', info.pagination);
  return {
    ...state,
    todoData: {
      data: info.data,
      page: info.pagination.page,
      totalRecords: info.pagination.totalRecords,
    },
  };
};

const newTodoCreateSuccess = (state: ITodoStates, {info}: {info: any}) => {
  console.log('xx info', info);
  return {
    ...state,
    todoData: {
      data: [...info, ...state.todoData.data],
      page: info.pagination.page,
      totalRecords: info.pagination.totalRecords,
    },
  };
};
const todoUpdateSuccess = (state: ITodoStates, {info}: {info: any}) => {
  console.log('xx-info.data', info);
  return {
    ...state,
    todoData: {
      data: [...info, ...state.todoData.data],
      page: info.pagination.page,
      totalRecords: info.pagination.totalRecords,
    },
  };
};

const todoDeleteSuccess = (state: ITodoStates, {info}: {info: any}) => {
  console.log('xx-info.data', info);
  return {
    ...state,
    todoData: {
      data: [...info, ...state.todoData.data],
      page: info.pagination.page,
      totalRecords: info.pagination.totalRecords,
    },
  };
};

export const HANDLERS: any = {
  [todoTypes.GET_ALL_TODO_SUCCESS]: getAllTodoSuccess,
  [todoTypes.NEW_TODO_CREATE_SUCCESS]: newTodoCreateSuccess,
  [todoTypes.TODO_UPDATE_SUCCESS]: todoUpdateSuccess,
  [todoTypes.TODO_DELETE_SUCCESS]: todoDeleteSuccess,
};
export default createReducer(INITIAL_STATE, HANDLERS);
