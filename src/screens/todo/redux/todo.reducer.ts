import {createReducer} from 'reduxsauce';

import initialState from '../../../redux/store/initialState';
import {
  IAuthStates,
  UserWithToken,
} from '../../../redux/store/initialState/types';
import {todoCreators} from './todo.action';

export const INITIAL_STATE = initialState.todo;

const getAllTodoSuccess = (
  state: IAuthStates,
  {info}: {info: UserWithToken},
) => {
  return {
    ...state,
    todos: info,
  };
};

export const HANDLERS = {
  [todoCreators.GET_ALL_TODO_SUCCESS]: getAllTodoSuccess,
};
export default createReducer(INITIAL_STATE, HANDLERS);
