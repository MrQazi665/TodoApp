import {call, put, takeEvery} from 'redux-saga/effects';

import {Alert} from 'react-native';
import {setItemInStorage} from '../../../utilities/storage-service';
import {StorageKeys} from '../../../enums';
import {todoCreators, todoTypes} from './todo.action';
import {getAllTodos} from './todo.api';

export function* watchAuth() {
  yield takeEvery(todoTypes.GET_ALL_TODO, getAllTodo);
}

function* getAllTodo({params}: any): any {
  try {
    const response = yield call(getAllTodos, params);

    yield put(todoCreators.getAllTodoSuccess(response));
  } catch (error) {
    yield put(todoCreators.getAllTodoFailure(error));
  }
}
