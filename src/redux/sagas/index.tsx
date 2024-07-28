import {all} from 'redux-saga/effects';
import {watchAuth} from '../../screens/auth/redux/auth.saga';
import {watchTodo} from '../../screens/todo/redux/todo.saga';

export function* rootSaga() {
  yield all([watchAuth(), watchTodo()]);
}
