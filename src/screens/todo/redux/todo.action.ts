import {createActions} from 'reduxsauce';

const {Types, Creators} = createActions({
  getAllTodo: ['params'],
  getAllTodoSuccess: ['info'],
  getAllTodoFailure: ['error'],
});

export const todoTypes = Types;
export const todoCreators = Creators;
