import {createReducer} from 'reduxsauce';
import {authTypes} from '../../screens/auth/redux/auth.action';
import initialState from '../store/initialState';
import {ILoadingStates} from '../store/initialState/types';
import {todoTypes} from '../../screens/todo/redux/todo.action';

export const INITIAL_STATE = initialState.loading;

const handleAuthenticatingStart = (state: ILoadingStates) => ({
  ...state,
  isAuthenticating: true,
});

const handleAuthenticatingEnd = (state: ILoadingStates) => ({
  ...state,
  isAuthenticating: false,
});

const fetchingTodosStart = (state: ILoadingStates) => ({
  ...state,
  isFetchingTodos: true,
});

const fetchingTodosEnd = (state: ILoadingStates) => ({
  ...state,
  isFetchingTodos: false,
});

const handleAddingTodoStart = (state: ILoadingStates) => ({
  ...state,
  isAddingTodo: true,
});

const handleAddingTodoEnd = (state: ILoadingStates) => ({
  ...state,
  isAddingTodo: false,
});

const handleUpdatingTodoStart = (state: ILoadingStates) => ({
  ...state,
  isUpdatingTodo: true,
});

const handleUpdatingTodoEnd = (state: ILoadingStates) => ({
  ...state,
  isUpdatingTodo: false,
});

const handleDeletingTodoStart = (state: ILoadingStates) => ({
  ...state,
  isDeletingTodo: true,
});

const handleDeletingTodoEnd = (state: ILoadingStates) => ({
  ...state,
  isDeletingTodo: false,
});

export const HANDLERS = {
  [authTypes.HANDLE_SIGN_IN]: handleAuthenticatingStart,
  [authTypes.HANDLE_SIGN_IN_SUCCESS]: handleAuthenticatingEnd,
  [authTypes.HANDLE_SIGN_IN_FAILURE]: handleAuthenticatingEnd,
  [authTypes.HANDLE_SIGN_UP]: handleAuthenticatingStart,
  [authTypes.HANDLE_SIGN_UP_SUCCESS]: handleAuthenticatingEnd,
  [authTypes.HANDLE_SIGN_UP_FAILURE]: handleAuthenticatingEnd,

  [todoTypes.GET_ALL_TODOS]: fetchingTodosStart,
  [todoTypes.GET_ALL_TODOS_SUCCESS]: fetchingTodosEnd,
  [todoTypes.GET_ALL_TODOS_FAILURE]: fetchingTodosEnd,
  [todoTypes.ADD_TODO]: handleAddingTodoStart,
  [todoTypes.ADD_TODO_SUCCESS]: handleAddingTodoEnd,
  [todoTypes.ADD_TODO_FAILURE]: handleAddingTodoEnd,
  [todoTypes.UPDATE_TODO]: handleUpdatingTodoStart,
  [todoTypes.UPDATE_TODO_SUCCESS]: handleUpdatingTodoEnd,
  [todoTypes.UPDATE_TODO_FAILURE]: handleUpdatingTodoEnd,
  [todoTypes.DELETE_TODO]: handleDeletingTodoStart,
  [todoTypes.DELETE_TODO_SUCCESS]: handleDeletingTodoEnd,
  [todoTypes.DELETE_TODO_FAILURE]: handleDeletingTodoEnd,
};
export default createReducer(INITIAL_STATE, HANDLERS);
