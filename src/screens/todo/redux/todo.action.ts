import {createActions} from 'reduxsauce';

const {Types, Creators} = createActions({
  getAllTodos: ['params'],
  getAllTodosSuccess: ['info'],
  getAllTodosFailure: ['error'],

  addTodo: ['params'],
  addTodoSuccess: ['info'],
  addTodoFailure: ['error'],

  updateTodo: ['params'],
  updateTodoSuccess: ['info'],
  updateTodoFailure: ['error'],

  deleteTodo: ['params'],
  deleteTodoSuccess: ['info'],
  deleteTodoFailure: ['error'],
});

export const todoTypes = Types;
export const todoCreators = Creators;
