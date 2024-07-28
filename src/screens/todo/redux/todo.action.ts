import {createActions} from 'reduxsauce';

const {Types, Creators} = createActions({
  getAllTodo: ['params'],
  getAllTodoSuccess: ['info'],
  getAllTodoFailure: ['error'],

  newTodoCreate: ['params'],
  newTodoCreateSuccess: ['info'],
  newTodoCreateFailure: ['error'],

  todoUpdate: ['params'],
  todoUpdateSuccess: ['info'],
  todoUpdateFailure: ['error'],

  todoDelete: ['params'],
  todoDeleteSuccess: ['info'],
  todoDeleteFailure: ['error'],
});

export const todoTypes = Types;
export const todoCreators = Creators;
