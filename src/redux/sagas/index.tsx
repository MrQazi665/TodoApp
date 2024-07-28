import {all} from 'redux-saga/effects';
import {watchAuth} from '../../screens/auth/redux/auth.saga';

export function* rootSaga() {
  yield all([watchAuth()]);
}
