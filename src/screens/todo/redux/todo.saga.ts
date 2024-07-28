import {call, put, takeEvery} from 'redux-saga/effects';

import {Alert} from 'react-native';
import {setItemInStorage} from '../../../utilities/storage-service';
import {StorageKeys} from '../../../enums';
import {todoCreators, todoTypes} from './todo.action';
import {createNewTodo, deleteTodo, getAllTodos, updateTodo} from './todo.api';

export function* watchTodo() {
  yield takeEvery(todoTypes.GET_ALL_TODO, getAllTodo);
  yield takeEvery(todoTypes.NEW_TODO_CREATE, newTodoCreate);
  yield takeEvery(todoTypes.TODO_UPDATE, todoUpdate);
  yield takeEvery(todoTypes.TODO_DELETE, todoDelete);
}

function* getAllTodo({params}: any): any {
  try {
    const response = yield call(getAllTodos, params);
    yield put(todoCreators.getAllTodoSuccess(response.data));
  } catch (error) {
    yield put(todoCreators.getAllTodoFailure(error));
  }
}

function* newTodoCreate({params}: any): any {
  try {
    const response = yield call(createNewTodo, params);

    yield put(todoCreators.newTodoCreateSuccess(response.data));
  } catch (error) {
    yield put(todoCreators.newTodoCreateFailure(error));
  }
}

function* todoUpdate({params}: any): any {
  try {
    const response = yield call(updateTodo, params.data, params.id);

    yield put(todoCreators.todoUpdateSuccess(response.data));
  } catch (error) {
    yield put(todoCreators.todoUpdateFailure(error));
  }
}
function* todoDelete({params}: any): any {
  try {
    const response = yield call(deleteTodo, params.id);

    yield put(todoCreators.todoDeleteSuccess(response.data));
  } catch (error) {
    yield put(todoCreators.todoDeleteFailure(error));
  }
}
